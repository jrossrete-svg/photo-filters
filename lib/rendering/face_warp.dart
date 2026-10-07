import 'dart:math' as math;
import 'dart:typed_data';

import '../models/face_landmarks.dart';
import 'face_frame.dart';
import 'raster.dart';

/// Strengths for the landmark-driven face reshape, each 0 (off) to 1 (max).
/// The maximums are deliberately modest so faces stay recognisable.
class FaceReshape {
  const FaceReshape({
    this.slimJaw = 0,
    this.narrowNose = 0,
    this.enlargeEyes = 0,
    this.plumpLips = 0,
  });

  final double slimJaw;
  final double narrowNose;
  final double enlargeEyes;
  final double plumpLips;

  bool get isNone =>
      slimJaw <= 0 && narrowNose <= 0 && enlargeEyes <= 0 && plumpLips <= 0;

  /// Jaw: horizontal squeeze of the jaw line at full strength (13%).
  static const maxJawSqueeze = 0.13;

  /// Nose: horizontal squeeze coefficient around the nostrils.
  static const maxNoseSqueeze = 0.16;

  /// Eyes: magnification coefficients (along / across the eye).
  static const maxEyeGrowU = 0.06, maxEyeGrowV = 0.16;

  /// Eyes: upper-lid lift coefficient (opens the eye a little).
  static const maxLidLift = 0.42;

  /// Lips: vertical magnification coefficient.
  static const maxLipGrow = 0.12;
}

/// One smooth, local displacement term of the warp. All terms are written as
/// backward maps (output pixel -> where to read in the source) and are
/// fold-free for the coefficient ranges used here, so the warp cannot tear
/// or flip the image. Each term is exactly zero outside its region, so the
/// background away from the face is untouched.
abstract class _WarpTerm {
  /// Adds this term's local-frame displacement for local point (u, v)
  /// relative to the face frame origin used at construction.
  void add(double x, double y, Float64List out);
}

/// Elliptical magnifier around [c]: inside the ellipse the source is read
/// closer to the centre, so content grows. Profile f = (1 - r^2)^2 keeps the
/// map monotonic for k < 1.
class _Bulge implements _WarpTerm {
  _Bulge(this.frame, this.c, this.rx, this.ry, this.ku, this.kv);
  final FaceFrame frame;
  final Vec2 c;
  final double rx, ry, ku, kv;

  @override
  void add(double x, double y, Float64List out) {
    final (u, v) = frame.toLocal(Vec2(x, y), c);
    final q = (u * u) / (rx * rx) + (v * v) / (ry * ry);
    if (q >= 1) return;
    final f = (1 - q) * (1 - q);
    final (dx, dy) = frame.toImageVector(-ku * f * u, -kv * f * v);
    out[0] += dx;
    out[1] += dy;
  }
}

/// Vertical lift around an upper eyelid: content inside the ellipse is moved
/// up (towards -v) by up to k * ry, which opens the eye. Monotonic for
/// k < 0.64.
class _Lift implements _WarpTerm {
  _Lift(this.frame, this.c, this.rx, this.ry, this.k);
  final FaceFrame frame;
  final Vec2 c;
  final double rx, ry, k;

  @override
  void add(double x, double y, Float64List out) {
    final (u, v) = frame.toLocal(Vec2(x, y), c);
    final q = (u * u) / (rx * rx) + (v * v) / (ry * ry);
    if (q >= 1) return;
    final f = (1 - q) * (1 - q);
    final (dx, dy) = frame.toImageVector(0, k * f * ry);
    out[0] += dx;
    out[1] += dy;
  }
}

/// Horizontal (along the eye line) squeeze around [c]: the source is read
/// further from the centre, so content narrows. The ellipse can reach
/// further up ([ryUp]) than down ([ryDown]) so the nose narrows without
/// touching the mouth. Monotonic for k < 1.25.
class _Squeeze implements _WarpTerm {
  _Squeeze(this.frame, this.c, this.rx, this.ryUp, this.ryDown, this.k);
  final FaceFrame frame;
  final Vec2 c;
  final double rx, ryUp, ryDown, k;

  @override
  void add(double x, double y, Float64List out) {
    final (u, v) = frame.toLocal(Vec2(x, y), c);
    final ry = v < 0 ? ryUp : ryDown;
    final q = (u * u) / (rx * rx) + (v * v) / (ry * ry);
    if (q >= 1) return;
    final f = (1 - q) * (1 - q);
    final (dx, dy) = frame.toImageVector(k * f * u, 0);
    out[0] += dx;
    out[1] += dy;
  }
}

/// Jaw/cheek slimming. For each row of the face (in face-aligned
/// coordinates) the face oval's left and right edges are found; the face is
/// squeezed uniformly towards the facial midline inside the oval, and the
/// shift fades out smoothly over a band just outside the jaw line so the
/// background is only nudged, never torn. Strength ramps in from the
/// cheekbones down to the mouth and fades out at the chin.
class _JawSlim implements _WarpTerm {
  _JawSlim(FaceGeometry face, this.frame, double strength) {
    origin = face.p(168);
    oval = [for (final p in face.faceOval) frame.toLocal(p, origin)];
    mid = [
      for (final i in const [168, 6, 4, 1, 2, 0, 13, 14, 17, 152])
        frame.toLocal(face.p(i), origin),
    ]..sort((a, b) => a.$2.compareTo(b.$2));
    double vOf(int i) => frame.toLocal(face.p(i), origin).$2;
    vTop = (vOf(234) + vOf(454)) / 2;
    vFull = (vOf(61) + vOf(291)) / 2;
    vChin = vOf(152);
    s = FaceReshape.maxJawSqueeze * strength;
  }

  final FaceFrame frame;
  late final Vec2 origin;
  late final List<(double, double)> oval;
  late final List<(double, double)> mid;
  late final double vTop, vFull, vChin, s;

  /// Fraction of the half-width over which the shift fades outside the jaw.
  static const band = 0.6;

  /// Fraction of the half-width (from the midline) left untouched.
  static const inner = 0.45;

  double _midAt(double v) {
    if (v <= mid.first.$2) return mid.first.$1;
    for (var i = 1; i < mid.length; i++) {
      if (v <= mid[i].$2) {
        final a = mid[i - 1], b = mid[i];
        final span = b.$2 - a.$2;
        final t = span <= 1e-6 ? 0.0 : (v - a.$2) / span;
        return a.$1 + (b.$1 - a.$1) * t;
      }
    }
    return mid.last.$1;
  }

  /// Leftmost and rightmost oval crossing at row [v], or null.
  (double, double)? _extent(double v) {
    var lo = double.infinity, hi = -double.infinity;
    for (var i = 0; i < oval.length; i++) {
      final a = oval[i], b = oval[(i + 1) % oval.length];
      if ((a.$2 <= v && b.$2 > v) || (b.$2 <= v && a.$2 > v)) {
        final t = (v - a.$2) / (b.$2 - a.$2);
        final u = a.$1 + (b.$1 - a.$1) * t;
        lo = math.min(lo, u);
        hi = math.max(hi, u);
      }
    }
    return lo < hi ? (lo, hi) : null;
  }

  // Row cache: rows are visited many times on the coarse grid.
  final Map<int, (double, double, double)?> _rows = {};

  @override
  void add(double x, double y, Float64List out) {
    if (s <= 0) return;
    final (u, v) = frame.toLocal(Vec2(x, y), origin);
    if (v <= vTop || v >= vChin) return;
    final w = smoothstep(vTop, vFull, v);
    if (w <= 0) return;
    final key = v.round();
    final row = _rows.putIfAbsent(key, () {
      final e = _extent(key.toDouble());
      if (e == null) return null;
      return (_midAt(key.toDouble()), e.$1, e.$2);
    });
    if (row == null) return;
    final (m, lo, hi) = row;
    final xRel = u - m;
    final half = xRel >= 0 ? hi - m : m - lo;
    if (half <= 1) return;
    final ax = xRel.abs();
    final sw = s * w;
    // Zero along the middle of the face (eyes, nose and mouth keep their
    // width), rising smoothly to the jaw line, then fading out beyond it.
    double d;
    if (ax <= half) {
      d = sw * half * smoothstep(half * inner, half, ax);
    } else {
      d = sw * half * (1 - smoothstep(half, half * (1 + band), ax));
    }
    if (d == 0) return;
    final (dx, dy) = frame.toImageVector(xRel >= 0 ? d : -d, 0);
    out[0] += dx;
    out[1] += dy;
  }
}

/// Reshapes [face] in [img] in place: slimmer jaw, narrower nose, larger
/// eyes and fuller lips, driven by the landmarks. The displacement field is
/// evaluated on a coarse grid and interpolated, then the image is resampled
/// bilinearly from an untouched copy of the face region.
void applyFaceReshape(FloatImage img, FaceGeometry face, FaceReshape r) {
  if (r.isNone) return;
  final unit = face.eyeDistance;
  final terms = _termsFor(face, r);
  if (terms.isEmpty) return;

  // Region of influence: face oval plus the jaw fade band.
  final (x0, y0, x1, y1) = face.bounds(MeshIndex.faceOval);
  final margin = (x1 - x0) * 0.35 + unit * 0.1;
  final left = math.max(0, (x0 - margin).floor());
  final top = math.max(0, (y0 - margin).floor());
  final right = math.min(img.width, (x1 + margin).ceil());
  final bottom = math.min(img.height, (y1 + margin).ceil());
  final w = right - left, h = bottom - top;
  if (w < 2 || h < 2) return;

  // Displacement on a coarse grid.
  final step = math.max(2, (unit / 48).round());
  final gw = (w - 1) ~/ step + 2, gh = (h - 1) ~/ step + 2;
  final gx = Float32List(gw * gh), gy = Float32List(gw * gh);
  final acc = Float64List(2);
  var any = false;
  for (var j = 0; j < gh; j++) {
    for (var i = 0; i < gw; i++) {
      acc[0] = 0;
      acc[1] = 0;
      final px = left + i * step + 0.5, py = top + j * step + 0.5;
      for (final t in terms) {
        t.add(px, py, acc);
      }
      gx[j * gw + i] = acc[0];
      gy[j * gw + i] = acc[1];
      if (acc[0].abs() > 0.02 || acc[1].abs() > 0.02) any = true;
    }
  }
  if (!any) return;

  // Resample from a copy of the region (reads outside it hit unchanged pixels).
  final src = Float32List(w * h * 3);
  for (var y = 0; y < h; y++) {
    final o = ((y + top) * img.width + left) * 3;
    src.setRange(y * w * 3, (y + 1) * w * 3, img.data, o);
  }
  final d = img.data;
  final iw = img.width, ih = img.height;
  final invStep = 1.0 / step;
  for (var y = 0; y < h; y++) {
    final fy = y * invStep;
    final j0 = fy.floor();
    final ty = fy - j0;
    for (var x = 0; x < w; x++) {
      final fx = x * invStep;
      final i0 = fx.floor();
      final tx = fx - i0;
      final k00 = j0 * gw + i0, k10 = k00 + 1, k01 = k00 + gw, k11 = k01 + 1;
      final dx =
          (gx[k00] * (1 - tx) + gx[k10] * tx) * (1 - ty) +
          (gx[k01] * (1 - tx) + gx[k11] * tx) * ty;
      final dy =
          (gy[k00] * (1 - tx) + gy[k10] * tx) * (1 - ty) +
          (gy[k01] * (1 - tx) + gy[k11] * tx) * ty;
      if (dx.abs() < 0.01 && dy.abs() < 0.01) continue;
      final sx = (x + left + dx).clamp(0.0, iw - 1.001);
      final sy = (y + top + dy).clamp(0.0, ih - 1.001);
      final xi = sx.floor(), yi = sy.floor();
      final ax = sx - xi, ay = sy - yi;
      final o = ((y + top) * iw + x + left) * 3;
      for (var c = 0; c < 3; c++) {
        final p00 = _read(src, d, xi, yi, c, left, top, w, h, iw);
        final p10 = _read(src, d, xi + 1, yi, c, left, top, w, h, iw);
        final p01 = _read(src, d, xi, yi + 1, c, left, top, w, h, iw);
        final p11 = _read(src, d, xi + 1, yi + 1, c, left, top, w, h, iw);
        d[o + c] =
            (p00 * (1 - ax) + p10 * ax) * (1 - ay) +
            (p01 * (1 - ax) + p11 * ax) * ay;
      }
    }
  }
}

double _read(
  Float32List src,
  Float32List img,
  int x,
  int y,
  int c,
  int left,
  int top,
  int w,
  int h,
  int iw,
) {
  final lx = x - left, ly = y - top;
  if (lx >= 0 && ly >= 0 && lx < w && ly < h) return src[(ly * w + lx) * 3 + c];
  return img[(y * iw + x) * 3 + c];
}

/// Backward displacement (dx, dy) the reshape applies at image point
/// ([x], [y]): the output pixel there is read from (x + dx, y + dy).
/// Exposed for tests and the tuning tool.
(double, double) faceReshapeDisplacement(
  FaceGeometry face,
  FaceReshape r,
  double x,
  double y,
) {
  final terms = _termsFor(face, r);
  final acc = Float64List(2);
  for (final t in terms) {
    t.add(x, y, acc);
  }
  return (acc[0], acc[1]);
}

List<_WarpTerm> _termsFor(FaceGeometry face, FaceReshape r) {
  final frame = FaceFrame.of(face);
  final terms = <_WarpTerm>[];
  if (r.enlargeEyes > 0) {
    for (final ring in [MeshIndex.rightEye, MeshIndex.leftEye]) {
      final c = face.centroid(ring);
      final corners = ring == MeshIndex.rightEye
          ? (face.p(33), face.p(133))
          : (face.p(263), face.p(362));
      final ew = math.max(2.0, corners.$1.distanceTo(corners.$2));
      terms.add(
        _Bulge(
          frame,
          c,
          ew * 1.0,
          ew * 0.78,
          FaceReshape.maxEyeGrowU * r.enlargeEyes,
          FaceReshape.maxEyeGrowV * r.enlargeEyes,
        ),
      );
      final lid = face.p(ring == MeshIndex.rightEye ? 159 : 386);
      terms.add(
        _Lift(
          frame,
          lid,
          ew * 0.62,
          ew * 0.42,
          FaceReshape.maxLidLift * r.enlargeEyes,
        ),
      );
    }
  }
  if (r.narrowNose > 0) {
    final alarL = face.p(98), alarR = face.p(327);
    final c = alarL.lerp(alarR, 0.5);
    final nw = math.max(2.0, alarL.distanceTo(alarR));
    final nh = math.max(2.0, face.p(168).distanceTo(face.p(2)));
    // Down to just above the upper lip.
    final lip = math.max(2.0, c.distanceTo(face.p(0)));
    terms.add(
      _Squeeze(
        frame,
        c,
        nw * 0.9,
        nh * 1.1,
        lip * 0.95,
        FaceReshape.maxNoseSqueeze * r.narrowNose,
      ),
    );
  }
  if (r.plumpLips > 0) {
    final c = face.p(13).lerp(face.p(14), 0.5);
    final mw = math.max(2.0, face.p(61).distanceTo(face.p(291)));
    final mh = math.max(2.0, face.p(0).distanceTo(face.p(17)));
    terms.add(
      _Bulge(
        frame,
        c,
        mw * 0.68,
        mh * 1.0,
        0.02 * r.plumpLips,
        FaceReshape.maxLipGrow * r.plumpLips,
      ),
    );
  }
  if (r.slimJaw > 0) terms.add(_JawSlim(face, frame, r.slimJaw));
  return terms;
}
