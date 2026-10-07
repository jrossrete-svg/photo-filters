import 'dart:math' as math;
import 'dart:typed_data';

import '../models/face_landmarks.dart';
import 'raster.dart';

/// A soft alpha mask (0..1) covering a rectangular region of an image.
/// Keeping masks local to the face makes blurs and composites cheap.
class Mask {
  Mask(
    this.left,
    this.top,
    this.width,
    this.height,
    this.imageWidth,
    this.imageHeight,
  ) : data = Float32List(math.max(0, width) * math.max(0, height));

  /// Mask covering ([minX],[minY])-([maxX],[maxY]) plus [margin], clamped to
  /// an image of [imageWidth] x [imageHeight].
  factory Mask.region(
    int imageWidth,
    int imageHeight,
    double minX,
    double minY,
    double maxX,
    double maxY,
    double margin,
  ) {
    final l = (minX - margin).floor().clamp(0, imageWidth);
    final t = (minY - margin).floor().clamp(0, imageHeight);
    final r = (maxX + margin).ceil().clamp(0, imageWidth);
    final b = (maxY + margin).ceil().clamp(0, imageHeight);
    return Mask(l, t, r - l, b - t, imageWidth, imageHeight);
  }

  factory Mask.aroundPoints(
    int imageWidth,
    int imageHeight,
    List<Vec2> pts,
    double margin,
  ) {
    var minX = double.infinity, minY = double.infinity;
    var maxX = -double.infinity, maxY = -double.infinity;
    for (final p in pts) {
      minX = math.min(minX, p.x);
      minY = math.min(minY, p.y);
      maxX = math.max(maxX, p.x);
      maxY = math.max(maxY, p.y);
    }
    return Mask.region(imageWidth, imageHeight, minX, minY, maxX, maxY, margin);
  }

  final int left, top, width, height;
  final int imageWidth, imageHeight;
  final Float32List data;

  bool get isEmpty => width <= 0 || height <= 0;

  /// Mask value at image pixel ([x], [y]); 0 outside the region.
  double atImage(int x, int y) {
    final lx = x - left, ly = y - top;
    if (lx < 0 || ly < 0 || lx >= width || ly >= height) return 0;
    return data[ly * width + lx];
  }

  /// Fills a closed polygon (even-odd rule) with horizontal anti-aliasing.
  void fillPolygon(List<Vec2> poly, {double value = 1}) {
    if (poly.length < 3 || isEmpty) return;
    final xs = <double>[];
    for (var y = 0; y < height; y++) {
      final sy = y + top + 0.5;
      xs.clear();
      for (var i = 0; i < poly.length; i++) {
        final a = poly[i], b = poly[(i + 1) % poly.length];
        if ((a.y <= sy && b.y > sy) || (b.y <= sy && a.y > sy)) {
          xs.add(a.x + (sy - a.y) / (b.y - a.y) * (b.x - a.x));
        }
      }
      if (xs.length < 2) continue;
      xs.sort();
      for (var k = 0; k + 1 < xs.length; k += 2) {
        final x0 = xs[k] - left, x1 = xs[k + 1] - left;
        final ix0 = math.max(0, x0.floor()),
            ix1 = math.min(width - 1, x1.floor());
        for (var x = ix0; x <= ix1; x++) {
          // Coverage of pixel [x, x+1] by span [x0, x1].
          final cov = (math.min(x + 1.0, x1) - math.max(x.toDouble(), x0))
              .clamp(0.0, 1.0);
          final i = y * width + x;
          final v = cov * value;
          if (v > data[i]) data[i] = v;
        }
      }
    }
  }

  /// Draws a line segment of half-width [radius]. With [softness] > 0 the
  /// edge falls off as a Gaussian of that many pixels (used for glows).
  void strokeSegment(
    Vec2 a,
    Vec2 b,
    double radius, {
    double softness = 0.75,
    double value = 1,
  }) {
    final reach = radius + softness * 3 + 1;
    final x0 = math.max(0, (math.min(a.x, b.x) - reach - left).floor());
    final x1 = math.min(width - 1, (math.max(a.x, b.x) + reach - left).ceil());
    final y0 = math.max(0, (math.min(a.y, b.y) - reach - top).floor());
    final y1 = math.min(height - 1, (math.max(a.y, b.y) + reach - top).ceil());
    final dx = b.x - a.x, dy = b.y - a.y;
    final len2 = dx * dx + dy * dy;
    for (var y = y0; y <= y1; y++) {
      final py = y + top + 0.5;
      for (var x = x0; x <= x1; x++) {
        final px = x + left + 0.5;
        var t = len2 == 0 ? 0.0 : ((px - a.x) * dx + (py - a.y) * dy) / len2;
        t = t < 0 ? 0 : (t > 1 ? 1 : t);
        final ex = px - (a.x + dx * t), ey = py - (a.y + dy * t);
        final dist = math.sqrt(ex * ex + ey * ey) - radius;
        double v;
        if (dist <= 0) {
          v = 1;
        } else if (softness <= 0.75) {
          v = clamp01(1 - dist / math.max(0.75, softness));
        } else {
          v = math.exp(-(dist * dist) / (2 * softness * softness));
        }
        v *= value;
        final i = y * width + x;
        if (v > data[i]) data[i] = v;
      }
    }
  }

  /// Draws a polyline through [pts] (closed if [closed]).
  void strokePath(
    List<Vec2> pts,
    double radius, {
    bool closed = false,
    double softness = 0.75,
    double value = 1,
  }) {
    final n = closed ? pts.length : pts.length - 1;
    for (var i = 0; i < n; i++) {
      strokeSegment(
        pts[i],
        pts[(i + 1) % pts.length],
        radius,
        softness: softness,
        value: value,
      );
    }
  }

  /// Adds a soft elliptical blob centred at [c], with semi-axes [ax] along
  /// direction [angle] and [ay] perpendicular. Falls off like a Gaussian.
  void addBlob(Vec2 c, double ax, double ay, double angle, {double value = 1}) {
    final reach = math.max(ax, ay) * 2.2;
    final x0 = math.max(0, (c.x - reach - left).floor());
    final x1 = math.min(width - 1, (c.x + reach - left).ceil());
    final y0 = math.max(0, (c.y - reach - top).floor());
    final y1 = math.min(height - 1, (c.y + reach - top).ceil());
    final ca = math.cos(angle), sa = math.sin(angle);
    for (var y = y0; y <= y1; y++) {
      final dy = y + top + 0.5 - c.y;
      for (var x = x0; x <= x1; x++) {
        final dx = x + left + 0.5 - c.x;
        final u = (dx * ca + dy * sa) / ax;
        final w = (-dx * sa + dy * ca) / ay;
        final v = math.exp(-(u * u + w * w) * 1.4) * value;
        final i = y * width + x;
        if (v > data[i]) data[i] = v;
      }
    }
  }

  /// Softens the edges with a Gaussian of [sigma] pixels.
  void feather(double sigma) {
    if (isEmpty) return;
    gaussianBlur(data, width, height, 1, sigma);
  }

  /// this = this * (1 - other)  (cut [other] out of this mask).
  void subtract(Mask other, {double strength = 1}) {
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        final o = other.atImage(x + left, y + top);
        if (o > 0) data[y * width + x] *= 1 - clamp01(o * strength);
      }
    }
  }

  /// this = this * other.
  void multiply(Mask other) {
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        data[y * width + x] *= other.atImage(x + left, y + top);
      }
    }
  }

  void scale(double s) {
    for (var i = 0; i < data.length; i++) {
      data[i] = clamp01(data[i] * s);
    }
  }

  /// Copies this mask into a full-image alpha array (max-combined).
  void writeInto(Float32List full) {
    for (var y = 0; y < height; y++) {
      final row = (y + top) * imageWidth + left;
      for (var x = 0; x < width; x++) {
        final v = data[y * width + x];
        if (v > full[row + x]) full[row + x] = v;
      }
    }
  }
}

/// Builds the region masks the filters use, from one face's landmarks.
class FaceMaskBuilder {
  FaceMaskBuilder(this.face);

  final FaceGeometry face;

  int get w => face.width;
  int get h => face.height;
  double get unit => face.eyeDistance;

  /// Expands a polygon around its centroid by [factor].
  static List<Vec2> expand(List<Vec2> poly, double factor) {
    var cx = 0.0, cy = 0.0;
    for (final p in poly) {
      cx += p.x;
      cy += p.y;
    }
    cx /= poly.length;
    cy /= poly.length;
    return [
      for (final p in poly)
        Vec2(cx + (p.x - cx) * factor, cy + (p.y - cy) * factor),
    ];
  }

  Mask _polygonMask(List<Vec2> poly, double featherUnits, {double grow = 1}) {
    final pts = grow == 1 ? poly : expand(poly, grow);
    final f = featherUnits * unit;
    final m = Mask.aroundPoints(w, h, pts, f * 3 + 2);
    m.fillPolygon(pts);
    if (f > 0.4) m.feather(f);
    return m;
  }

  Mask faceOval({double feather = 0.06}) =>
      _polygonMask(face.faceOval, feather);

  Mask lips({double feather = 0.025}) {
    final m = _polygonMask(face.lipsOuter, feather);
    // Remove the open mouth (teeth/tongue) so tint stays on the lips.
    final inner = _polygonMask(face.lipsInner, feather * 0.5, grow: 1.05);
    m.subtract(inner);
    return m;
  }

  Mask eyes({double grow = 1.0, double feather = 0.02}) {
    final r = _polygonMask(face.rightEye, feather, grow: grow);
    final l = _polygonMask(face.leftEye, feather, grow: grow);
    return _union(r, l);
  }

  Mask brows({double feather = 0.02, double grow = 1.0}) {
    final r = _polygonMask(face.rightBrow, feather, grow: grow);
    final l = _polygonMask(face.leftBrow, feather, grow: grow);
    return _union(r, l);
  }

  /// Skin = face oval minus eyes, brows and lips (feathered), suitable for
  /// smoothing and freckles.
  Mask skin({double feather = 0.08}) {
    final m = faceOval(feather: feather);
    m.subtract(eyes(grow: 1.6, feather: 0.06));
    m.subtract(brows(grow: 1.3, feather: 0.05), strength: 0.9);
    m.subtract(_polygonMask(face.lipsOuter, 0.04, grow: 1.12));
    return m;
  }

  /// Soft blush ellipses on both cheeks (follows head pose).
  Mask cheeks({double size = 1.0}) {
    final m = Mask.aroundPoints(w, h, face.faceOval, 0);
    for (final side in [
      (MeshIndex.rightCheek, MeshIndex.rightCheekbone, MeshIndex.rightCheekLow),
      (MeshIndex.leftCheek, MeshIndex.leftCheekbone, MeshIndex.leftCheekLow),
    ]) {
      final c = face.p(side.$1).lerp(face.p(side.$2), 0.25);
      final across = face.p(side.$2) - face.p(side.$3);
      final angle = math.atan2(across.y, across.x);
      // Size the blob from the visible cheek width so a turned-away cheek
      // gets a narrower blob.
      final visible = face.p(side.$2).distanceTo(face.p(side.$3));
      m.addBlob(
        c,
        math.max(visible * 0.6, unit * 0.12) * size,
        unit * 0.22 * size,
        angle,
        value: 0.85,
      );
    }
    m.subtract(eyes(grow: 1.8, feather: 0.08));
    return m;
  }

  /// Thin band along the upper lash line (for eyeliner/mascara).
  Mask upperLashLine({double thickness = 0.035, double wing = 0.0}) {
    final m = Mask.aroundPoints(w, h, [
      ...face.rightEye,
      ...face.leftEye,
    ], unit * 0.5);
    for (final lid in [MeshIndex.rightUpperLid, MeshIndex.leftUpperLid]) {
      final pts = face.points(lid);
      final n = pts.length;
      for (var i = 0; i < n - 1; i++) {
        // Thicker towards the outer corner (index 0).
        final t = 1 - i / (n - 1);
        final r = unit * thickness * (0.45 + 0.75 * t);
        m.strokeSegment(pts[i], pts[i + 1], r, softness: unit * 0.008);
      }
      if (wing > 0) {
        final outer = pts[0];
        final dir = pts[0] - pts[2];
        final len = math.max(1e-3, dir.length);
        final up = Vec2(dir.x / len, dir.y / len - 0.45);
        final tip = outer + up * (unit * wing);
        m.strokeSegment(
          outer,
          tip,
          unit * thickness * 0.55,
          softness: unit * 0.01,
        );
      }
    }
    return m;
  }

  /// Area between the upper lid and the brow (eyeshadow).
  Mask eyelids() {
    final m = Mask.aroundPoints(w, h, [
      ...face.rightBrow,
      ...face.leftBrow,
      ...face.rightEye,
      ...face.leftEye,
    ], unit * 0.3);
    for (final s in [
      (MeshIndex.rightUpperLid, MeshIndex.rightBrowLower),
      (MeshIndex.leftUpperLid, MeshIndex.leftBrowLower),
    ]) {
      final lid = face.points(s.$1);
      final brow = face.points(s.$2);
      // Polygon: lid line, then a curve 45% of the way up to the brow.
      final upper = <Vec2>[];
      for (var i = 0; i < lid.length; i++) {
        final bi = (i / (lid.length - 1) * (brow.length - 1)).round();
        upper.add(lid[i].lerp(brow[bi], 0.45));
      }
      m.fillPolygon([...lid, ...upper.reversed]);
    }
    m.feather(unit * 0.05);
    m.subtract(eyes(grow: 1.05, feather: 0.01));
    return m;
  }

  /// Highlight spots: cheekbone tops, nose bridge, cupid's bow, chin.
  Mask highlightPoints({double size = 1.0}) {
    final m = Mask.aroundPoints(w, h, face.faceOval, 0);
    final bridge = face.p(197).lerp(face.p(5), 0.4);
    final bridgeDir = face.p(5) - face.p(168);
    m.addBlob(
      bridge,
      unit * 0.06 * size,
      bridgeDir.length * 0.35 * size,
      math.atan2(bridgeDir.y, bridgeDir.x) - math.pi / 2,
      value: 0.85,
    );
    for (final s in [
      (MeshIndex.rightCheekbone, MeshIndex.rightUnderEye),
      (MeshIndex.leftCheekbone, MeshIndex.leftUnderEye),
    ]) {
      final c = face.p(s.$1).lerp(face.p(s.$2), 0.55);
      final d = face.p(s.$2) - face.p(s.$1);
      m.addBlob(
        c,
        math.max(d.length * 0.7, unit * 0.06) * size,
        unit * 0.07 * size,
        math.atan2(d.y, d.x),
      );
    }
    final bow =
        face.p(MeshIndex.upperLipTop) +
        (face.p(MeshIndex.upperLipTop) - face.p(13)) * 0.6;
    m.addBlob(bow, unit * 0.06 * size, unit * 0.025 * size, 0, value: 0.6);
    final chin = face
        .p(MeshIndex.chin)
        .lerp(face.p(MeshIndex.lowerLipBottom), 0.45);
    m.addBlob(chin, unit * 0.08 * size, unit * 0.05 * size, 0, value: 0.5);
    m.subtract(eyes(grow: 1.6, feather: 0.05));
    return m;
  }

  Mask _union(Mask a, Mask b) {
    final l = math.min(a.left, b.left), t = math.min(a.top, b.top);
    final r = math.max(a.left + a.width, b.left + b.width);
    final bt = math.max(a.top + a.height, b.top + b.height);
    final m = Mask(l, t, r - l, bt - t, w, h);
    for (var y = 0; y < m.height; y++) {
      for (var x = 0; x < m.width; x++) {
        final ix = x + l, iy = y + t;
        m.data[y * m.width + x] = math.max(
          a.atImage(ix, iy),
          b.atImage(ix, iy),
        );
      }
    }
    return m;
  }
}
