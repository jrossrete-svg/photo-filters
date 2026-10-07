import 'dart:math' as math;

import '../filters/photo_filter.dart';
import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../rendering/blend_modes.dart';
import '../rendering/raster.dart';
import 'custom_filter_spec.dart';
import 'transparent_png.dart';

/// Prefix of every user-made filter id.
const customFilterIdPrefix = 'custom-';

bool isCustomFilterId(String id) => id.startsWith(customFilterIdPrefix);

/// Runs a [CustomFilterSpec]: colour LUT, then overlay, then face sticker.
/// The intensity slider scales all three.
class CustomFilter extends PhotoFilter {
  CustomFilter(this.id, this.spec)
    : preset = FilterPreset(
        id: id,
        displayName: spec.name,
        description: _describe(spec),
        usesFace: spec.usesFace,
        defaultIntensity: 1.0,
      );

  @override
  final String id;
  final CustomFilterSpec spec;
  @override
  final FilterPreset preset;

  @override
  String get displayName => spec.name;

  @override
  String get noFaceNote => spec.lut == null && spec.overlay == null
      ? 'No face found, so the sticker was not placed.'
      : 'No face found, so the sticker was skipped.';

  static String _describe(CustomFilterSpec s) => [
    if (s.lut != null) 'colour look',
    if (s.overlay != null) 'overlay',
    if (s.sticker != null) 'face sticker',
  ].join(' + ');

  @override
  void render(
    FloatImage img,
    List<FaceGeometry> faces,
    FilterSettings settings,
    double t,
  ) {
    spec.lut?.apply(img, t);
    final o = spec.overlay;
    if (o != null) _overlay(img, o, t);
    final s = spec.sticker;
    if (s != null) {
      for (final f in faces) {
        _sticker(img, f, s, t);
      }
    }
  }

  /// Stretches the overlay to cover the photo (centre crop, like
  /// "aspect fill") so the result looks the same at any resolution.
  static void _overlay(FloatImage img, OverlayLayer o, double t) {
    final w = img.width, h = img.height;
    final ow = o.image.width, oh = o.image.height;
    final s = math.max(w / ow, h / oh);
    final mode = o.mode;
    final a0 = o.opacity * t;
    final sampler = _RgbaSampler(o.image);
    for (var y = 0; y < h; y++) {
      final oy = (y + 0.5 - h / 2) / s + oh / 2 - 0.5;
      for (var x = 0; x < w; x++) {
        final ox = (x + 0.5 - w / 2) / s + ow / 2 - 0.5;
        if (!sampler.sample(ox, oy)) continue;
        blendPixel(
          img,
          y * w + x,
          mode,
          sampler.r,
          sampler.g,
          sampler.b,
          sampler.a * a0,
        );
      }
    }
  }

  /// Places the sticker on one face, scaled and rotated with it.
  static void _sticker(
    FloatImage img,
    FaceGeometry f,
    StickerLayer s,
    double t,
  ) {
    final re = f.rightEyeCenter, le = f.leftEyeCenter;
    final angle = math.atan2(le.y - re.y, le.x - re.x);
    final cosA = math.cos(angle), sinA = math.sin(angle);
    final eye = f.eyeDistance;
    Vec2 center;
    double width;
    switch (s.anchor) {
      case StickerAnchor.face:
        center = f.centroid(MeshIndex.faceOval);
        width = f.faceWidth * 1.15;
      case StickerAnchor.eyes:
        center = re.lerp(le, 0.5);
        width = eye * 2.3;
      case StickerAnchor.nose:
        center = f.p(MeshIndex.noseTip);
        width = eye * 0.8;
      case StickerAnchor.mouth:
        center = f.centroid(MeshIndex.lipsOuter);
        width =
            f.p(MeshIndex.mouthRight).distanceTo(f.p(MeshIndex.mouthLeft)) *
            1.5;
      case StickerAnchor.forehead:
        final browMid = f
            .p(MeshIndex.rightBrowUpper[2])
            .lerp(f.p(MeshIndex.leftBrowUpper[2]), 0.5);
        center = browMid.lerp(f.p(MeshIndex.forehead), 0.55);
        width = eye * 2.0;
    }
    width *= s.scale;
    final iw = s.image.width, ih = s.image.height;
    final height = width * ih / iw;
    // "Up" on the face, used for the vertical offset.
    final upX = sinA, upY = -cosA;
    final cx = center.x + upX * s.offsetY * height;
    final cy = center.y + upY * s.offsetY * height;
    final half = 0.5 * math.sqrt(width * width + height * height);
    final x0 = math.max(0, (cx - half).floor()),
        x1 = math.min(img.width - 1, (cx + half).ceil());
    final y0 = math.max(0, (cy - half).floor()),
        y1 = math.min(img.height - 1, (cy + half).ceil());
    final sampler = _RgbaSampler(s.image);
    final a0 = s.opacity * t;
    final sx = iw / width, sy = ih / height;
    for (var y = y0; y <= y1; y++) {
      for (var x = x0; x <= x1; x++) {
        final dx = x + 0.5 - cx, dy = y + 0.5 - cy;
        // Rotate into the sticker's own frame.
        final lx = dx * cosA + dy * sinA;
        final ly = -dx * sinA + dy * cosA;
        final u = (lx + width / 2) * sx - 0.5;
        final v = (ly + height / 2) * sy - 0.5;
        if (!sampler.sample(u, v)) continue;
        blendPixel(
          img,
          y * img.width + x,
          PixelBlend.normal,
          sampler.r,
          sampler.g,
          sampler.b,
          sampler.a * a0,
        );
      }
    }
  }
}

/// Bilinear sampling of straight-alpha RGBA with premultiplication, so
/// transparent edges don't leak dark/odd colours.
class _RgbaSampler {
  _RgbaSampler(this.src);
  final TransparentImage src;
  double r = 0, g = 0, b = 0, a = 0;

  /// Returns false when (x, y) is outside the image or fully transparent.
  bool sample(double x, double y) {
    final w = src.width, h = src.height;
    if (x < -0.5 || y < -0.5 || x > w - 0.5 || y > h - 0.5) return false;
    final xc = x.clamp(0.0, w - 1.0), yc = y.clamp(0.0, h - 1.0);
    final int xi = math.min(xc.floor(), math.max(0, w - 2));
    final int yi = math.min(yc.floor(), math.max(0, h - 2));
    final fx = w == 1 ? 0.0 : xc - xi, fy = h == 1 ? 0.0 : yc - yi;
    final p = src.rgba;
    var pr = 0.0, pg = 0.0, pb = 0.0, pa = 0.0;
    void add(int xx, int yy, double wgt) {
      if (wgt <= 0) return;
      final int i = ((yy < h ? yy : h - 1) * w + (xx < w ? xx : w - 1)) * 4;
      final al = p[i + 3] / 255.0 * wgt;
      pr += p[i] * al;
      pg += p[i + 1] * al;
      pb += p[i + 2] * al;
      pa += al;
    }

    add(xi, yi, (1 - fx) * (1 - fy));
    add(xi + 1, yi, fx * (1 - fy));
    add(xi, yi + 1, (1 - fx) * fy);
    add(xi + 1, yi + 1, fx * fy);
    if (pa <= 1e-4) return false;
    r = pr / pa / 255.0;
    g = pg / pa / 255.0;
    b = pb / pa / 255.0;
    a = pa;
    return true;
  }
}
