import 'dart:math' as math;
import 'dart:typed_data';

import '../models/face_landmarks.dart';
import 'color_space.dart';
import 'face_mask_builder.dart';
import 'raster.dart';
import 'skin_retouch.dart';

/// Iris centre and radius for one eye. Uses the iris landmarks (468-477)
/// when the mesh has them (MediaPipe on the web), otherwise estimates from
/// the eye contour.
(Vec2, double) irisOf(FaceGeometry face, {required bool right}) {
  if (face.mesh.pointCount >= 478) {
    final c = face.p(right ? 468 : 473);
    var r = 0.0;
    for (var i = 1; i <= 4; i++) {
      r += c.distanceTo(face.p((right ? 468 : 473) + i));
    }
    return (c, math.max(1.0, r / 4));
  }
  final ring = right ? MeshIndex.rightEye : MeshIndex.leftEye;
  final c = face.centroid(ring);
  final ew = right
      ? face.p(33).distanceTo(face.p(133))
      : face.p(263).distanceTo(face.p(362));
  return (c, math.max(1.0, ew * 0.22));
}

/// Brightens the whites of the eyes and lightens/recolours the irises.
/// [whites] and [iris] are 0..1. [irisTint] is the target iris colour
/// (luminance is preserved in shape, so catchlights and the pupil stay);
/// [irisTintAmount] 0 keeps the natural colour and only brightens.
void enhanceEyes(
  FloatImage img,
  FaceGeometry face, {
  double whites = 0,
  double iris = 0,
  List<double> irisTint = const [0.56, 0.64, 0.70],
  double irisTintAmount = 0,
}) {
  if (whites <= 0 && iris <= 0) return;
  final b = FaceMaskBuilder(face);
  final eyes = b.eyes(grow: 0.97, feather: 0.012);
  if (eyes.isEmpty) return;
  final irises = [irisOf(face, right: true), irisOf(face, right: false)];
  final tintY = luma(irisTint[0], irisTint[1], irisTint[2]);
  final d = img.data;
  for (var y = 0; y < eyes.height; y++) {
    for (var x = 0; x < eyes.width; x++) {
      final e = eyes.data[y * eyes.width + x];
      if (e <= 0.003) continue;
      final ix = x + eyes.left, iy = y + eyes.top;
      final k = (iy * img.width + ix) * 3;
      // Distance to the nearer iris, in iris radii.
      var rr = double.infinity;
      for (final (c, r) in irises) {
        final dx = ix + 0.5 - c.x, dy = iy + 0.5 - c.y;
        rr = math.min(rr, math.sqrt(dx * dx + dy * dy) / r);
      }
      final inIris = 1 - smoothstep(0.92, 1.08, rr);
      final r0 = d[k], g0 = d[k + 1], b0 = d[k + 2];
      final y0 = luma(r0, g0, b0);
      // Whites: lift, and pull redness towards neutral.
      final wa = e * (1 - inIris) * whites;
      var r1 = r0, g1 = g0, b1 = b0;
      if (wa > 0.002) {
        final lift = 0.32 * wa * (1 - y0);
        r1 = r0 + (y0 - r0) * 0.55 * wa + lift;
        g1 = g0 + (y0 - g0) * 0.55 * wa + lift;
        b1 = b0 + (y0 - b0) * 0.55 * wa + lift * 1.05;
      }
      final ia = e * inIris * iris;
      if (ia > 0.002) {
        // Keep the pupil dark and add a soft darker limbal ring.
        final pupil = 1 - smoothstep(0.28, 0.42, rr);
        final ring = smoothstep(0.72, 0.95, rr);
        // Lighter iris: lift mid-tones, keep highlights.
        final ly = math.min(1.0, y0 * 1.8 + 0.09) * (1 - 0.35 * ring);
        final tr = irisTint[0] / tintY * ly,
            tg = irisTint[1] / tintY * ly,
            tb = irisTint[2] / tintY * ly;
        // Natural colour, brightened by the same ratio.
        final gain = y0 > 1e-3 ? ly / y0 : 1.0;
        final nr = r0 * gain, ng = g0 * gain, nb = b0 * gain;
        final cr = nr + (tr - nr) * irisTintAmount,
            cg = ng + (tg - ng) * irisTintAmount,
            cb = nb + (tb - nb) * irisTintAmount;
        // Catchlights (very bright) are left as they are.
        final keep = math.max(pupil * 0.85, smoothstep(0.6, 0.85, y0));
        final t = ia * (1 - keep);
        r1 += (cr - r1) * t;
        g1 += (cg - g1) * t;
        b1 += (cb - b1) * t;
      }
      d[k] = clamp01(r1);
      d[k + 1] = clamp01(g1);
      d[k + 2] = clamp01(b1);
    }
  }
}

/// Softens/tidies brows: edge-preserving smoothing evens out stray hairs
/// and patchy texture while keeping the brow shape.
/// [lighten] (0..1) also softens how dark and heavy they look.
void softenBrows(
  FloatImage img,
  FaceGeometry face,
  double amount, {
  double lighten = 0,
}) {
  if (amount <= 0 && lighten <= 0) return;
  final unit = face.eyeDistance;
  final m = FaceMaskBuilder(face).brows(grow: 1.2, feather: 0.03);
  _smoothInMask(img, m, unit * 0.04, 0.003, amount * 0.8, 70 / unit);
  if (lighten <= 0 || m.isEmpty) return;
  final d = img.data;
  for (var y = 0; y < m.height; y++) {
    for (var x = 0; x < m.width; x++) {
      final a = m.data[y * m.width + x] * lighten;
      if (a <= 0.003) continue;
      final k = ((y + m.top) * img.width + x + m.left) * 3;
      for (var c = 0; c < 3; c++) {
        // Screen-like lift: dark hairs lighten most.
        d[k + c] = clamp01(d[k + c] + (1 - d[k + c]) * 0.22 * a);
      }
    }
  }
}

/// Lips: smoothing plus a soft tint. The lips' average colour is moved
/// towards [targetLab] (CIE Lab), by at most [maxShift] units per axis, so
/// the change is relative to the person's own lip colour and the lips keep
/// their shading.
void retouchLips(
  FloatImage img,
  FaceGeometry face, {
  double smooth = 0,
  List<double> targetLab = const [57, 19, 7],
  double maxShift = 10,
  double tint = 0,
}) {
  if (smooth <= 0 && tint <= 0) return;
  final unit = face.eyeDistance;
  final b = FaceMaskBuilder(face);
  final m = b.lips(feather: 0.02);
  if (m.isEmpty) return;
  if (smooth > 0) {
    _smoothInMask(img, m, unit * 0.035, 0.0025, smooth, 90 / unit);
  }
  if (tint <= 0) return;
  // Mean lip colour (core of the mask).
  var sw = 0.0, mr = 0.0, mg = 0.0, mb = 0.0;
  final d = img.data;
  for (var y = 0; y < m.height; y++) {
    for (var x = 0; x < m.width; x++) {
      final a = m.data[y * m.width + x];
      if (a < 0.7) continue;
      final k = ((y + m.top) * img.width + x + m.left) * 3;
      sw += a;
      mr += d[k] * a;
      mg += d[k + 1] * a;
      mb += d[k + 2] * a;
    }
  }
  if (sw < 2) return;
  final mean = [mr / sw, mg / sw, mb / sw];
  final lab = rgbToLab(mean);
  double cap(double v) => v.clamp(-maxShift, maxShift);
  final delta = labShiftDelta(
    mean,
    cap(targetLab[0] - lab[0]),
    cap(targetLab[1] - lab[1]),
    cap(targetLab[2] - lab[2]),
  );
  for (var y = 0; y < m.height; y++) {
    for (var x = 0; x < m.width; x++) {
      final a = m.data[y * m.width + x] * tint;
      if (a <= 0.003) continue;
      final k = ((y + m.top) * img.width + x + m.left) * 3;
      d[k] = clamp01(d[k] + delta[0] * a);
      d[k + 1] = clamp01(d[k + 1] + delta[1] * a);
      d[k + 2] = clamp01(d[k + 2] + delta[2] * a);
    }
  }
}

void _smoothInMask(
  FloatImage img,
  Mask m,
  double radius,
  double eps,
  double amount,
  double workingScale,
) {
  if (m.isEmpty || amount <= 0) return;
  final w = m.width, h = m.height;
  final region = Float32List(w * h * 3);
  for (var y = 0; y < h; y++) {
    final o = ((y + m.top) * img.width + m.left) * 3;
    region.setRange(y * w * 3, (y + 1) * w * 3, img.data, o);
  }
  final sm = guidedSmooth(
    region,
    w,
    h,
    radius: radius,
    eps: eps,
    workingScale: workingScale,
  );
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      final a = m.data[y * w + x] * amount;
      if (a <= 0.003) continue;
      final k = (y * w + x) * 3;
      final o = ((y + m.top) * img.width + x + m.left) * 3;
      for (var c = 0; c < 3; c++) {
        img.data[o + c] = clamp01(
          region[k + c] + (sm[k + c] - region[k + c]) * a,
        );
      }
    }
  }
}
