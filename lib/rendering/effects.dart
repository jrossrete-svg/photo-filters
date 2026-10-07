import 'dart:math' as math;
import 'dart:typed_data';

import '../models/face_landmarks.dart';
import 'blend_modes.dart';
import 'face_mask_builder.dart';
import 'raster.dart';

/// Shared, original effect building blocks used by several filters.

/// Bloom: bright areas bleed soft light. [threshold] in 0..1 luminance,
/// [radius] as a fraction of the image's long edge, [tint] multiplies the
/// glow colour. Uses screen blending so it never darkens.
void applyBloom(
  FloatImage img, {
  double threshold = 0.6,
  double radius = 0.03,
  double strength = 0.5,
  List<double> tint = const [1, 1, 1],
}) {
  if (strength <= 0) return;
  final longEdge = math.max(img.width, img.height);
  final sigma = math.max(1.0, radius * longEdge);
  final factor = math.max(1, (sigma / 4).floor());
  final small = img.downsample(factor);
  final d = small.data;
  for (var i = 0; i < d.length; i += 3) {
    final l = luma(d[i], d[i + 1], d[i + 2]);
    final k = smoothstep(threshold, math.min(1.0, threshold + 0.3), l);
    d[i] *= k * tint[0];
    d[i + 1] *= k * tint[1];
    d[i + 2] *= k * tint[2];
  }
  small.blur(sigma / factor);
  _screenUpsampled(img, small, strength);
}

/// Soft full-frame diffusion ("mist"): blends a blurred copy with screen.
void applyDiffusion(
  FloatImage img, {
  double radius = 0.02,
  double strength = 0.3,
}) {
  if (strength <= 0) return;
  final longEdge = math.max(img.width, img.height);
  final sigma = math.max(1.0, radius * longEdge);
  final factor = math.max(1, (sigma / 4).floor());
  final small = img.downsample(factor);
  small.blur(sigma / factor);
  _screenUpsampled(img, small, strength);
}

void _screenUpsampled(FloatImage img, FloatImage small, double strength) {
  final px = Float32List(3);
  final o = img.data;
  for (var y = 0; y < img.height; y++) {
    final v = (y + 0.5) / img.height;
    for (var x = 0; x < img.width; x++) {
      small.sampleUV((x + 0.5) / img.width, v, px);
      final k = (y * img.width + x) * 3;
      for (var c = 0; c < 3; c++) {
        final b = o[k + c];
        final top = px[c] * strength;
        o[k + c] = 1 - (1 - b) * (1 - (top > 1 ? 1 : top));
      }
    }
  }
}

/// Coloured haze: lifts shadows toward [color] and lowers contrast.
void applyHaze(FloatImage img, List<double> color, double amount) {
  if (amount <= 0) return;
  final d = img.data;
  for (var i = 0; i < d.length; i += 3) {
    final l = luma(d[i], d[i + 1], d[i + 2]);
    final a = amount * (0.35 + 0.65 * (1 - l));
    for (var c = 0; c < 3; c++) {
      d[i + c] = d[i + c] + (color[c] - d[i + c]) * a * 0.5;
    }
  }
}

/// Radial light leak / sun glow from a point given in normalised coords.
void applyLightLeak(
  FloatImage img,
  double cx,
  double cy,
  double radius,
  List<double> color,
  double strength,
) {
  if (strength <= 0) return;
  final longEdge = math.max(img.width, img.height).toDouble();
  final px = cx * img.width, py = cy * img.height;
  final rr = radius * longEdge;
  final d = img.data;
  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      final dx = x - px, dy = y - py;
      final t = math.sqrt(dx * dx + dy * dy) / rr;
      if (t >= 1.6) continue;
      final a = math.exp(-t * t * 2.2) * strength;
      final k = (y * img.width + x) * 3;
      for (var c = 0; c < 3; c++) {
        d[k + c] = 1 - (1 - d[k + c]) * (1 - color[c] * a);
      }
    }
  }
}

/// Darkens (or lightens with negative [amount]) the frame edges.
void applyVignette(FloatImage img, double amount, {double roundness = 1.0}) {
  if (amount == 0) return;
  final d = img.data;
  final cx = img.width / 2, cy = img.height / 2;
  final norm = math.sqrt(cx * cx + cy * cy);
  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      final dx = (x - cx) / norm * roundness, dy = (y - cy) / norm;
      final r = math.sqrt(dx * dx + dy * dy);
      final v = 1 - amount * smoothstep(0.45, 1.05, r);
      final k = (y * img.width + x) * 3;
      d[k] *= v;
      d[k + 1] *= v;
      d[k + 2] *= v;
    }
  }
}

/// Edge-aware skin smoothing inside [mask]. Fine texture is softened while
/// strong edges (nostrils, jaw line) are preserved. [radiusUnits] is in
/// eye-distance units so it scales with the face.
void smoothSkin(
  FloatImage img,
  Mask mask,
  double unit,
  double amount, {
  double radiusUnits = 0.05,
}) {
  if (amount <= 0 || mask.isEmpty) return;
  final w = mask.width, h = mask.height;
  final region = Float32List(w * h * 3);
  for (var y = 0; y < h; y++) {
    final src = ((y + mask.top) * img.width + mask.left) * 3;
    region.setRange(y * w * 3, (y + 1) * w * 3, img.data, src);
  }
  final blurred = Float32List.fromList(region);
  gaussianBlur(blurred, w, h, 3, math.max(1.0, unit * radiusUnits));
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      final a = mask.data[y * w + x] * amount;
      if (a <= 0.003) continue;
      final k = (y * w + x) * 3;
      final lo = luma(region[k], region[k + 1], region[k + 2]);
      final lb = luma(blurred[k], blurred[k + 1], blurred[k + 2]);
      final edge = 1 - smoothstep(0.035, 0.11, (lo - lb).abs());
      final t = a * edge * 0.85;
      final o = ((y + mask.top) * img.width + x + mask.left) * 3;
      for (var c = 0; c < 3; c++) {
        img.data[o + c] = region[k + c] + (blurred[k + c] - region[k + c]) * t;
      }
    }
  }
}

/// Deterministic procedural freckles over the nose bridge and upper cheeks.
/// Positions are generated in landmark-relative space from [seed], so the
/// pattern is identical at preview and export resolution.
void paintFreckles(
  FloatImage img,
  FaceGeometry face,
  Mask skin, {
  required int seed,
  double density = 0.5,
  double opacity = 0.6,
}) {
  if (opacity <= 0 || density <= 0) return;
  final unit = face.eyeDistance;
  final rng = SeededRandom(seed);
  final mask = Mask.aroundPoints(img.width, img.height, face.faceOval, 0);

  // Zones: (centre, axisA, axisB, relative count).
  final bridgeTop = face.p(6), bridgeLow = face.p(4);
  final rNost = face.p(MeshIndex.rightNostril),
      lNost = face.p(MeshIndex.leftNostril);
  final zones = <(Vec2, Vec2, Vec2, double)>[
    // Nose bridge and nose: narrow vertical spread.
    (
      bridgeTop.lerp(bridgeLow, 0.5),
      (lNost - rNost) * 0.25,
      (bridgeLow - bridgeTop) * 0.35,
      0.26,
    ),
  ];
  final bridge = face.p(197);
  for (final s in [
    (MeshIndex.rightUnderEye, MeshIndex.rightCheek),
    (MeshIndex.leftUnderEye, MeshIndex.leftCheek),
  ]) {
    // A band from the nose bridge out across the upper cheek, just under
    // the eye. Follows head rotation because it is built from landmarks.
    final cheek = face.p(s.$1).lerp(face.p(s.$2), 0.35);
    final c = cheek.lerp(bridge, 0.18);
    final along = (cheek - bridge) * 0.42;
    final len = math.max(1e-3, along.length);
    final perp = Vec2(-along.y / len, along.x / len) * (unit * 0.15);
    zones.add((c, along, perp, 0.37));
  }

  final total = (30 + 170 * density).round();
  for (final z in zones) {
    final count = (total * z.$4).round();
    for (var i = 0; i < count; i++) {
      double g1, g2;
      do {
        g1 = rng.nextGaussian();
        g2 = rng.nextGaussian();
      } while (g1 * g1 + g2 * g2 > 3.2);
      final p = z.$1 + z.$2 * (g1 * 0.6) + z.$3 * (g2 * 0.6);
      final r =
          unit * rng.range(0.006, 0.015) * (rng.nextDouble() < 0.1 ? 1.6 : 1);
      final a = rng.range(0.35, 1.0);
      final stretch = rng.range(0.8, 1.25);
      mask.addBlob(
        p,
        r * stretch,
        r / stretch,
        rng.range(0, math.pi),
        value: a,
      );
    }
  }
  mask.feather(unit * 0.004);
  mask.multiply(skin);

  // Freckle colour: a deeper, warmer version of the local skin tone.
  for (var y = 0; y < mask.height; y++) {
    for (var x = 0; x < mask.width; x++) {
      final a = mask.data[y * mask.width + x] * opacity;
      if (a <= 0.004) continue;
      final k = ((y + mask.top) * img.width + x + mask.left) * 3;
      final d = img.data;
      d[k] = d[k] * (1 - a * 0.30);
      d[k + 1] = d[k + 1] * (1 - a * 0.44);
      d[k + 2] = d[k + 2] * (1 - a * 0.52);
    }
  }
}

/// Edge (gradient magnitude) map used as a graceful no-face fallback for the
/// neon effect. Returns a full-size Float32List in 0..1.
Float32List edgeMap(FloatImage img) {
  final w = img.width, h = img.height;
  final lum = Float32List(w * h);
  for (var i = 0; i < w * h; i++) {
    lum[i] = luma(img.data[i * 3], img.data[i * 3 + 1], img.data[i * 3 + 2]);
  }
  gaussianBlur(lum, w, h, 1, math.max(1.0, math.max(w, h) / 600));
  final out = Float32List(w * h);
  for (var y = 1; y < h - 1; y++) {
    for (var x = 1; x < w - 1; x++) {
      final i = y * w + x;
      final gx = lum[i + 1] - lum[i - 1];
      final gy = lum[i + w] - lum[i - w];
      out[i] = smoothstep(0.03, 0.12, math.sqrt(gx * gx + gy * gy));
    }
  }
  return out;
}

/// Convenience: blend a solid colour through a mask.
void tintMask(
  FloatImage img,
  Mask m,
  PixelBlend mode,
  List<double> color,
  double opacity,
) => blendColorThroughMask(img, m, mode, color[0], color[1], color[2], opacity);
