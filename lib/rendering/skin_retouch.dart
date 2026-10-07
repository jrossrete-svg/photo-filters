import 'dart:math' as math;
import 'dart:typed_data';

import '../models/face_landmarks.dart';
import 'color_space.dart';
import 'face_frame.dart';
import 'face_mask_builder.dart';
import 'raster.dart';

/// Settings for [applySkinRetouch]. Amounts are 0 (off) to 1 (full).
class SkinRetouch {
  const SkinRetouch({
    this.smooth = 0,
    this.keepTexture = 0.2,
    this.evenTone = 0,
    this.underEye = 0,
    this.tone = 0,
    this.toneL = 0,
    this.targetA = 13,
    this.targetB = 16,
    this.maxShift = 7,
    this.radiusUnits = 0.11,
    this.eps = 0.0022,
  });

  /// Smoothing radius in eye-distance units and the guided-filter epsilon
  /// (variance below which detail counts as texture and is smoothed).
  final double radiusUnits;
  final double eps;

  /// Edge-preserving smoothing (pores, fine lines, freckles, blemishes).
  final double smooth;

  /// Share of the finest pore-level texture added back, so skin is not
  /// plastic (0 = fully airbrushed).
  final double keepTexture;

  /// Evens out blotchy colour (redness) and lifts local dark patches.
  final double evenTone;

  /// Brightens under-eye darkness and softens bags.
  final double underEye;

  /// Strength of the overall skin-tone adjustment. The skin's own colour
  /// is nudged towards the warm-neutral ([targetA], [targetB]) chroma (CIE
  /// Lab) by at most [maxShift] units per axis, and lifted by [toneL]. The
  /// shift is relative and capped, so every skin tone keeps its own depth
  /// and character (no "whitening").
  final double tone;
  final double toneL, targetA, targetB, maxShift;
}

/// What [applySkinRetouch] measured, and the tone shift [applySkinTone]
/// should apply.
class SkinToneInfo {
  const SkinToneInfo(this.mean, this.delta);

  /// Average skin colour of the face (RGB 0..1) before the tone shift.
  final List<double> mean;

  /// RGB offset to add to skin at full strength.
  final List<double> delta;
}

/// High-quality skin retouch for one face, in place:
///
/// 1. A skin mask from the landmarks (face oval minus eyes, brows, lips and
///    nostrils, feathered), refined by a skin-colour model so stray hair and
///    glasses are left alone.
/// 2. Edge-preserving smoothing with a guided filter (fast, computed at a
///    face-relative resolution), plus a little fine texture added back.
/// 3. Tone evening: colour is pulled towards the local average skin colour
///    and dark patches are lifted.
/// 4. Under-eye brightening towards the cheek colour.
/// 5. Measures the skin-tone shift for [applySkinTone].
SkinToneInfo? applySkinRetouch(
  FloatImage img,
  FaceGeometry face,
  SkinRetouch s,
) {
  final unit = face.eyeDistance;
  final b = FaceMaskBuilder(face);
  final mask = buildSkinMask(face);
  if (mask.isEmpty) return null;
  final w = mask.width, h = mask.height, left = mask.left, top = mask.top;
  final n = w * h;

  // Copy the region.
  final orig = Float32List(n * 3);
  for (var y = 0; y < h; y++) {
    final o = ((y + top) * img.width + left) * 3;
    orig.setRange(y * w * 3, (y + 1) * w * 3, img.data, o);
  }

  // --- Skin-colour model from cheeks and forehead -------------------------
  final sampleMask = Float32List(n);
  for (final (idx, r) in [
    (MeshIndex.rightCheek, 0.13),
    (MeshIndex.leftCheek, 0.13),
    (151, 0.12),
    (MeshIndex.rightCheekLow, 0.09),
    (MeshIndex.leftCheekLow, 0.09),
  ]) {
    final c = face.p(idx);
    final rad = r * unit;
    final x0 = math.max(0, (c.x - rad - left).floor());
    final x1 = math.min(w - 1, (c.x + rad - left).ceil());
    final y0 = math.max(0, (c.y - rad - top).floor());
    final y1 = math.min(h - 1, (c.y + rad - top).ceil());
    for (var y = y0; y <= y1; y++) {
      for (var x = x0; x <= x1; x++) {
        final dx = x + left - c.x, dy = y + top - c.y;
        if (dx * dx + dy * dy <= rad * rad) {
          sampleMask[y * w + x] = mask.data[y * w + x];
        }
      }
    }
  }
  var sw = 0.0, mr = 0.0, mg = 0.0, mb = 0.0;
  for (var i = 0; i < n; i++) {
    final a = sampleMask[i];
    if (a <= 0.5) continue;
    sw += a;
    mr += orig[i * 3] * a;
    mg += orig[i * 3 + 1] * a;
    mb += orig[i * 3 + 2] * a;
  }
  if (sw < 4) return null;
  final mean = [mr / sw, mg / sw, mb / sw];
  final meanY = luma(mean[0], mean[1], mean[2]);
  final meanCb = mean[2] - meanY, meanCr = mean[0] - meanY;
  // Spread of skin chroma, so the model adapts to the photo's lighting.
  var varC = 0.0;
  for (var i = 0; i < n; i++) {
    final a = sampleMask[i];
    if (a <= 0.5) continue;
    final y = luma(orig[i * 3], orig[i * 3 + 1], orig[i * 3 + 2]);
    final cb = orig[i * 3 + 2] - y - meanCb, cr = orig[i * 3] - y - meanCr;
    varC += a * (cb * cb + cr * cr);
  }
  final sigmaC = math.max(0.035, 3.2 * math.sqrt(varC / sw));
  final m = Float32List(n);
  for (var i = 0; i < n; i++) {
    final base = mask.data[i];
    if (base <= 0) continue;
    final r = orig[i * 3], g = orig[i * 3 + 1], bl = orig[i * 3 + 2];
    final y = luma(r, g, bl);
    final cb = bl - y - meanCb, cr = r - y - meanCr;
    final lk = math.exp(-(cb * cb + cr * cr) / (2 * sigmaC * sigmaC));
    final bright = smoothstep(meanY * 0.3, meanY * 0.55, y);
    m[i] = base * (0.15 + 0.85 * lk * bright);
  }
  gaussianBlur(m, w, h, 1, math.max(0.6, unit * 0.012));

  // --- Edge-preserving smoothing (guided filter on luma) ------------------
  final work = Float32List.fromList(orig);
  if (s.smooth > 0) {
    final smoothed = guidedSmooth(
      orig,
      w,
      h,
      radius: unit * s.radiusUnits,
      eps: s.eps,
      workingScale: 110 / unit,
    );
    // Fine texture: difference to a tiny blur, added back in part.
    final fine = Float32List.fromList(orig);
    gaussianBlur(fine, w, h, 3, math.max(0.7, unit * 0.007));
    final keep = s.keepTexture;
    for (var i = 0; i < n; i++) {
      final a = m[i] * s.smooth;
      if (a <= 0.002) continue;
      final k = i * 3;
      final tex =
          luma(orig[k], orig[k + 1], orig[k + 2]) -
          luma(fine[k], fine[k + 1], fine[k + 2]);
      for (var c = 0; c < 3; c++) {
        final target = smoothed[k + c] + tex * keep;
        work[k + c] = orig[k + c] + (target - orig[k + c]) * a;
      }
    }
  }

  // --- Tone evening ---------------------------------------------------------
  if (s.evenTone > 0) {
    final avg = maskedAverage(work, m, w, h, unit * 0.28);
    for (var i = 0; i < n; i++) {
      final a = m[i] * s.evenTone;
      if (a <= 0.002) continue;
      final k = i * 3;
      final py = luma(work[k], work[k + 1], work[k + 2]);
      final ay = luma(avg[k], avg[k + 1], avg[k + 2]);
      // Chroma towards the local average (removes blotchy redness)...
      final chromaT = a * 0.75;
      // ...and lift darker-than-average patches (shadows, spots), while only
      // gently taming shine.
      final dy = ay - py;
      var lift = dy > 0 ? dy * a * 0.9 : dy * a * 0.25;
      // Broad shadow fill towards the face's average brightness (flatter,
      // evenly lit look); pixels already brighter are left alone.
      final gy = meanY - (py + lift);
      if (gy > 0) lift += gy * a * 0.35;
      for (var c = 0; c < 3; c++) {
        final chroma = work[k + c] - py;
        // Target: halfway between the local and the whole-face skin colour,
        // so both blotches and broad redness (nose, cheeks) even out.
        final avgChroma = 0.5 * (avg[k + c] - ay) + 0.5 * (mean[c] - meanY);
        work[k + c] = py + lift + chroma + (avgChroma - chroma) * chromaT;
      }
    }
  }

  // --- Under-eye brightening ----------------------------------------------
  if (s.underEye > 0) {
    final ue = underEyeMask(face, b);
    final local = Float32List.fromList(work);
    gaussianBlur(local, w, h, 3, math.max(1.0, unit * 0.05));
    final frame = FaceFrame.of(face);
    final nose = face.p(6);
    final refs = [
      for (final idx in const [MeshIndex.rightCheek, MeshIndex.leftCheek])
        _meanAround(work, m, w, h, left, top, face.p(idx), unit * 0.1) ?? mean,
    ];
    final x0 = math.max(ue.left, left),
        x1 = math.min(ue.left + ue.width, left + w);
    final y0 = math.max(ue.top, top),
        y1 = math.min(ue.top + ue.height, top + h);
    for (var iy = y0; iy < y1; iy++) {
      for (var ix = x0; ix < x1; ix++) {
        final a = ue.atImage(ix, iy) * s.underEye;
        if (a <= 0.002) continue;
        // Image-left of the nose is the subject's right side.
        final (u, _) = frame.toLocal(Vec2(ix + 0.0, iy + 0.0), nose);
        final ref = u < 0 ? refs[0] : refs[1];
        final ry = luma(ref[0], ref[1], ref[2]);
        final k = ((iy - top) * w + ix - left) * 3;
        final ly = luma(local[k], local[k + 1], local[k + 2]);
        // Only brighten (never darken) and correct the purple/brown cast.
        final dyl = math.max(0.0, ry - ly) + 0.03;
        for (var c = 0; c < 3; c++) {
          final chromaFix = (ref[c] - ry) - (local[k + c] - ly);
          work[k + c] += (dyl + chromaFix * 0.8) * a;
        }
      }
    }
  }

  // --- Overall tone shift (applied later by [applySkinTone]) -------------
  var delta = const [0.0, 0.0, 0.0];
  if (s.tone > 0) {
    final lab = rgbToLab(mean);
    double toward(double target, double v) =>
        (target - v).clamp(-s.maxShift, s.maxShift);
    delta = labShiftDelta(
      mean,
      s.toneL * s.tone,
      toward(s.targetA, lab[1]) * s.tone,
      toward(s.targetB, lab[2]) * s.tone,
    );
  }

  for (var y = 0; y < h; y++) {
    final o = ((y + top) * img.width + left) * 3;
    for (var i = 0; i < w * 3; i++) {
      img.data[o + i] = clamp01(work[y * w * 3 + i]);
    }
  }
  return SkinToneInfo(mean, delta);
}

/// Applies each face's skin-tone shift to every skin-coloured pixel of the
/// photo (face, neck, shoulders, arms) with a soft colour-similarity mask,
/// so there is no visible edge where the face ends.
void applySkinTone(FloatImage img, List<SkinToneInfo> faces, double amount) {
  if (amount <= 0 || faces.isEmpty) return;
  final d = img.data;
  for (final info in faces) {
    final dl = info.delta;
    if (dl[0] == 0 && dl[1] == 0 && dl[2] == 0) continue;
    final mean = info.mean;
    final my = luma(mean[0], mean[1], mean[2]);
    final mcb = mean[2] - my, mcr = mean[0] - my;
    const sig = 0.1;
    for (var k = 0; k < d.length; k += 3) {
      final r = d[k], g = d[k + 1], bl = d[k + 2];
      final yy = luma(r, g, bl);
      final cb = bl - yy - mcb, cr = r - yy - mcr;
      final dist2 = cb * cb + cr * cr;
      if (dist2 > 9 * sig * sig) continue;
      // Skin-like colours only: close to the face's skin chroma and not
      // bluish (keeps blue/purple backgrounds and clothes untouched).
      final a =
          math.exp(-dist2 / (2 * sig * sig)) *
          (1 - smoothstep(-0.01, 0.03, bl - yy)) *
          smoothstep(my * 0.3, my * 0.6, yy) *
          amount;
      if (a <= 0.002) continue;
      d[k] = clamp01(r + dl[0] * a);
      d[k + 1] = clamp01(g + dl[1] * a);
      d[k + 2] = clamp01(bl + dl[2] * a);
    }
  }
}

/// Feathered skin mask: face oval minus eyes, brows, lips and nostrils.
Mask buildSkinMask(FaceGeometry face) {
  final b = FaceMaskBuilder(face);
  final unit = face.eyeDistance;
  final m = b.faceOval(feather: 0.045);
  m.subtract(b.eyes(grow: 1.1, feather: 0.025));
  m.subtract(b.brows(grow: 1.18, feather: 0.03));
  m.subtract(polygonMask(face, face.lipsOuter, 1.04, 0.02));
  final frame = FaceFrame.of(face);
  final angle = math.atan2(frame.ay, frame.ax);
  for (final ids in const [
    [79, 237, 239, 238, 20],
    [309, 457, 459, 458, 250],
  ]) {
    final c = face.centroid(ids);
    final nm = Mask.region(
      face.width,
      face.height,
      c.x,
      c.y,
      c.x,
      c.y,
      unit * 0.12,
    );
    nm.addBlob(c, unit * 0.065, unit * 0.04, angle);
    nm.feather(unit * 0.015);
    m.subtract(nm, strength: 0.45);
  }
  return m;
}

/// Soft region below each eye (between the lower lid and the cheek), where
/// dark circles and bags sit.
Mask underEyeMask(FaceGeometry face, FaceMaskBuilder b) {
  final unit = face.eyeDistance;
  final frame = FaceFrame.of(face);
  final (dx, dy) = frame.toImageVector(0, 1);
  final down = Vec2(dx, dy);
  final pts = <Vec2>[];
  for (final lid in const [MeshIndex.rightLowerLid, MeshIndex.leftLowerLid]) {
    pts.addAll(face.points(lid));
  }
  final m = Mask.aroundPoints(face.width, face.height, pts, unit * 0.45);
  for (final lid in const [MeshIndex.rightLowerLid, MeshIndex.leftLowerLid]) {
    final lidPts = face.points(lid);
    final n = lidPts.length;
    final lower = <Vec2>[];
    for (var i = n - 1; i >= 0; i--) {
      // Deepest under the middle of the eye, tapering to the corners.
      final t = math.sin(math.pi * i / (n - 1));
      lower.add(lidPts[i] + down * (unit * (0.08 + 0.24 * t)));
    }
    final upper = [for (final p in lidPts) p + down * (unit * 0.025)];
    m.fillPolygon([...upper, ...lower]);
  }
  m.feather(unit * 0.035);
  m.subtract(b.eyes(grow: 1.05, feather: 0.01));
  return m;
}

/// Filled, optionally grown and feathered polygon mask.
Mask polygonMask(
  FaceGeometry face,
  List<Vec2> poly,
  double grow,
  double featherUnits,
) {
  final pts = grow == 1 ? poly : FaceMaskBuilder.expand(poly, grow);
  final f = featherUnits * face.eyeDistance;
  final m = Mask.aroundPoints(face.width, face.height, pts, f * 3 + 2);
  m.fillPolygon(pts);
  if (f > 0.4) m.feather(f);
  return m;
}

List<double>? _meanAround(
  Float32List buf,
  Float32List weight,
  int w,
  int h,
  int left,
  int top,
  Vec2 c,
  double r,
) {
  var sw = 0.0, r0 = 0.0, g0 = 0.0, b0 = 0.0;
  final x0 = math.max(0, (c.x - r - left).floor());
  final x1 = math.min(w - 1, (c.x + r - left).ceil());
  final y0 = math.max(0, (c.y - r - top).floor());
  final y1 = math.min(h - 1, (c.y + r - top).ceil());
  for (var y = y0; y <= y1; y++) {
    for (var x = x0; x <= x1; x++) {
      final a = weight[y * w + x];
      if (a < 0.5) continue;
      final k = (y * w + x) * 3;
      sw += a;
      r0 += buf[k] * a;
      g0 += buf[k + 1] * a;
      b0 += buf[k + 2] * a;
    }
  }
  if (sw < 4) return null;
  return [r0 / sw, g0 / sw, b0 / sw];
}

/// Mask-weighted local average colour (normalised convolution) with a
/// Gaussian of [sigma] pixels, computed at reduced resolution.
Float32List maskedAverage(
  Float32List rgb,
  Float32List weight,
  int w,
  int h,
  double sigma,
) {
  final f = math.max(1, (sigma / 6).floor());
  final sw = math.max(1, w ~/ f), sh = math.max(1, h ~/ f);
  final num = Float32List(sw * sh * 3), den = Float32List(sw * sh);
  for (var y = 0; y < sh * f && y < h; y++) {
    final sy = y ~/ f;
    for (var x = 0; x < sw * f && x < w; x++) {
      final sx = x ~/ f;
      final a = weight[y * w + x];
      final j = sy * sw + sx;
      den[j] += a;
      num[j * 3] += rgb[(y * w + x) * 3] * a;
      num[j * 3 + 1] += rgb[(y * w + x) * 3 + 1] * a;
      num[j * 3 + 2] += rgb[(y * w + x) * 3 + 2] * a;
    }
  }
  gaussianBlur(num, sw, sh, 3, sigma / f);
  gaussianBlur(den, sw, sh, 1, sigma / f);
  final out = Float32List(w * h * 3);
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      final px = _bilinear3(
        num,
        den,
        sw,
        sh,
        (x + 0.5) / f - 0.5,
        (y + 0.5) / f - 0.5,
      );
      final k = (y * w + x) * 3;
      if (px == null) {
        out[k] = rgb[k];
        out[k + 1] = rgb[k + 1];
        out[k + 2] = rgb[k + 2];
      } else {
        out[k] = px.$1;
        out[k + 1] = px.$2;
        out[k + 2] = px.$3;
      }
    }
  }
  return out;
}

(double, double, double)? _bilinear3(
  Float32List num,
  Float32List den,
  int w,
  int h,
  double fx,
  double fy,
) {
  fx = fx.clamp(0.0, w - 1.0);
  fy = fy.clamp(0.0, h - 1.0);
  final x0 = math.min(fx.floor(), math.max(0, w - 2));
  final y0 = math.min(fy.floor(), math.max(0, h - 2));
  final x1 = math.min(x0 + 1, w - 1), y1 = math.min(y0 + 1, h - 1);
  final tx = fx - x0, ty = fy - y0;
  double lerp2(double a, double b, double c, double d) =>
      (a * (1 - tx) + b * tx) * (1 - ty) + (c * (1 - tx) + d * tx) * ty;
  final dn = lerp2(
    den[y0 * w + x0],
    den[y0 * w + x1],
    den[y1 * w + x0],
    den[y1 * w + x1],
  );
  if (dn < 1e-4) return null;
  double ch(int c) => lerp2(
    num[(y0 * w + x0) * 3 + c],
    num[(y0 * w + x1) * 3 + c],
    num[(y1 * w + x0) * 3 + c],
    num[(y1 * w + x1) * 3 + c],
  );
  return (ch(0) / dn, ch(1) / dn, ch(2) / dn);
}

/// Edge-preserving smoothing of an RGB buffer with a guided filter (He et
/// al.) that uses the luma as guide. Flat areas (skin texture whose variance
/// is below [eps]) are averaged over [radius] pixels; strong edges keep
/// their contrast. Coefficients are computed at [workingScale] (<= 1) of the
/// resolution and upsampled ("fast guided filter"), which keeps the cost and
/// the look independent of photo size.
Float32List guidedSmooth(
  Float32List rgb,
  int w,
  int h, {
  required double radius,
  required double eps,
  double workingScale = 1,
}) {
  final f = math.max(1, (1 / workingScale.clamp(0.05, 1.0)).floor());
  final sw = math.max(1, w ~/ f), sh = math.max(1, h ~/ f);
  final sn = sw * sh;
  // Downsampled guide (luma) and inputs.
  final gI = Float32List(sn), gP = Float32List(sn * 3);
  final inv = 1.0 / (f * f);
  for (var y = 0; y < sh; y++) {
    for (var x = 0; x < sw; x++) {
      var r = 0.0, g = 0.0, b = 0.0;
      for (var yy = 0; yy < f; yy++) {
        final row = (y * f + yy) * w;
        for (var xx = 0; xx < f; xx++) {
          final k = (row + x * f + xx) * 3;
          r += rgb[k];
          g += rgb[k + 1];
          b += rgb[k + 2];
        }
      }
      final j = y * sw + x;
      gP[j * 3] = r * inv;
      gP[j * 3 + 1] = g * inv;
      gP[j * 3 + 2] = b * inv;
      gI[j] = luma(r * inv, g * inv, b * inv);
    }
  }
  final sigma = math.max(0.8, radius / f);
  final meanI = Float32List.fromList(gI);
  gaussianBlur(meanI, sw, sh, 1, sigma);
  final ii = Float32List(sn);
  for (var i = 0; i < sn; i++) {
    ii[i] = gI[i] * gI[i];
  }
  gaussianBlur(ii, sw, sh, 1, sigma);
  final meanP = Float32List.fromList(gP);
  gaussianBlur(meanP, sw, sh, 3, sigma);
  final ip = Float32List(sn * 3);
  for (var i = 0; i < sn; i++) {
    ip[i * 3] = gI[i] * gP[i * 3];
    ip[i * 3 + 1] = gI[i] * gP[i * 3 + 1];
    ip[i * 3 + 2] = gI[i] * gP[i * 3 + 2];
  }
  gaussianBlur(ip, sw, sh, 3, sigma);
  final a = Float32List(sn * 3), bb = Float32List(sn * 3);
  for (var i = 0; i < sn; i++) {
    final varI = ii[i] - meanI[i] * meanI[i];
    for (var c = 0; c < 3; c++) {
      final cov = ip[i * 3 + c] - meanI[i] * meanP[i * 3 + c];
      final ac = cov / (varI + eps);
      a[i * 3 + c] = ac;
      bb[i * 3 + c] = meanP[i * 3 + c] - ac * meanI[i];
    }
  }
  gaussianBlur(a, sw, sh, 3, sigma);
  gaussianBlur(bb, sw, sh, 3, sigma);
  // Apply at full resolution with bilinearly upsampled coefficients.
  final out = Float32List(w * h * 3);
  for (var y = 0; y < h; y++) {
    var fy = (y + 0.5) / f - 0.5;
    fy = fy.clamp(0.0, sh - 1.0);
    final y0 = math.min(fy.floor(), math.max(0, sh - 2));
    final y1 = math.min(y0 + 1, sh - 1);
    final ty = fy - y0;
    for (var x = 0; x < w; x++) {
      var fx = (x + 0.5) / f - 0.5;
      fx = fx.clamp(0.0, sw - 1.0);
      final x0 = math.min(fx.floor(), math.max(0, sw - 2));
      final x1 = math.min(x0 + 1, sw - 1);
      final tx = fx - x0;
      final k = (y * w + x) * 3;
      final iv = luma(rgb[k], rgb[k + 1], rgb[k + 2]);
      final j00 = (y0 * sw + x0) * 3, j10 = (y0 * sw + x1) * 3;
      final j01 = (y1 * sw + x0) * 3, j11 = (y1 * sw + x1) * 3;
      for (var c = 0; c < 3; c++) {
        final ac =
            (a[j00 + c] * (1 - tx) + a[j10 + c] * tx) * (1 - ty) +
            (a[j01 + c] * (1 - tx) + a[j11 + c] * tx) * ty;
        final bc =
            (bb[j00 + c] * (1 - tx) + bb[j10 + c] * tx) * (1 - ty) +
            (bb[j01 + c] * (1 - tx) + bb[j11 + c] * tx) * ty;
        out[k + c] = ac * iv + bc;
      }
    }
  }
  return out;
}
