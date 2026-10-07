import 'dart:math' as math;
import 'dart:typed_data';

import 'package:photo_filters/models/face_landmarks.dart';
import 'package:photo_filters/models/local_image.dart';

/// Builds a plausible 468-point MediaPipe-topology mesh for tests, placing
/// every index the filters use. [turn] < 1 squeezes the image-left half to
/// mimic a three-quarter (turned) face.
FaceMesh syntheticFace({
  required int width,
  required int height,
  required double cx,
  required double cy,
  required double halfWidth,
  required double halfHeight,
  double turn = 1.0,
}) {
  final pts = List<(double, double)>.filled(478, (cx, cy));
  final a = halfWidth, b = halfHeight;
  void set(int i, double x, double y) => pts[i] = (x, y);

  for (var i = 0; i < MeshIndex.faceOval.length; i++) {
    final t = -math.pi / 2 + 2 * math.pi * i / MeshIndex.faceOval.length;
    set(MeshIndex.faceOval[i], cx + a * math.cos(t), cy + b * math.sin(t));
  }
  void eye(List<int> ring, double ex, double ey, bool mirrored) {
    for (var k = 0; k < 16; k++) {
      final t = k <= 8 ? math.pi - k * math.pi / 8 : -(k - 8) * math.pi / 8;
      final x = mirrored ? -math.cos(t) : math.cos(t);
      set(ring[k], ex + 0.16 * a * x, ey + 0.06 * b * math.sin(t));
    }
  }

  eye(MeshIndex.rightEye, cx - 0.35 * a, cy - 0.15 * b, false);
  eye(MeshIndex.leftEye, cx + 0.35 * a, cy - 0.15 * b, true);
  void brow(List<int> upper, List<int> lower, double sign) {
    for (var k = 0; k < 5; k++) {
      final x = cx + sign * (0.55 - 0.1 * k) * a;
      final arc = math.sin(math.pi * (k + 0.5) / 5) * 0.04 * b;
      set(upper[k], x, cy - 0.33 * b - arc);
      set(lower[k], x, cy - 0.28 * b - arc);
    }
  }

  brow(MeshIndex.rightBrowUpper, MeshIndex.rightBrowLower, -1);
  brow(MeshIndex.leftBrowUpper, MeshIndex.leftBrowLower, 1);
  void lips(List<int> ring, double ry) {
    for (var k = 0; k < 20; k++) {
      final t = k <= 10 ? math.pi - k * math.pi / 10 : -(k - 10) * math.pi / 10;
      set(
        ring[k],
        cx + 0.3 * a * math.cos(t),
        cy + 0.5 * b + ry * b * math.sin(t),
      );
    }
  }

  lips(MeshIndex.lipsOuter, 0.1);
  lips(MeshIndex.lipsInner, 0.025);
  final nose = {
    168: -0.2,
    6: -0.12,
    197: -0.02,
    195: 0.08,
    5: 0.16,
    4: 0.22,
    1: 0.26,
    2: 0.33,
  };
  nose.forEach((i, dy) => set(i, cx, cy + dy * b));
  set(98, cx - 0.12 * a, cy + 0.3 * b);
  set(97, cx - 0.05 * a, cy + 0.32 * b);
  set(326, cx + 0.05 * a, cy + 0.32 * b);
  set(327, cx + 0.12 * a, cy + 0.3 * b);
  for (final s in [
    (-1.0, 50, 205, 116, 118, 129),
    (1.0, 280, 425, 345, 347, 358),
  ]) {
    set(s.$2, cx + s.$1 * 0.42 * a, cy + 0.15 * b);
    set(s.$3, cx + s.$1 * 0.35 * a, cy + 0.3 * b);
    set(s.$4, cx + s.$1 * 0.62 * a, cy + 0.08 * b);
    set(s.$5, cx + s.$1 * 0.4 * a, cy + 0.02 * b);
    set(s.$6, cx + s.$1 * 0.15 * a, cy + 0.25 * b);
  }
  if (turn != 1.0) {
    for (var i = 0; i < pts.length; i++) {
      final (x, y) = pts[i];
      if (x < cx) pts[i] = (cx + (x - cx) * turn, y);
    }
  }
  return FaceMesh(
    Float32List.fromList([
      for (final (x, y) in pts) ...[x / width, y / height],
    ]),
  );
}

/// A generated "portrait": warm gradient background with a skin-toned face
/// ellipse, darker eyes/brows and pink lips, plus mild deterministic noise.
LocalImage syntheticPortrait(int w, int h, FaceMesh mesh) {
  final geo = mesh.at(w, h);
  final data = Uint8List(w * h * 4);
  final (fx0, fy0, fx1, fy1) = geo.bounds(MeshIndex.faceOval);
  final cx = (fx0 + fx1) / 2, cy = (fy0 + fy1) / 2;
  final rx = (fx1 - fx0) / 2, ry = (fy1 - fy0) / 2;
  var seed = 12345;
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      final noise = (seed % 9) - 4;
      var r = 60 + 80 * y ~/ h, g = 90 + 60 * x ~/ w, bl = 70;
      final dx = (x - cx) / rx, dy = (y - cy) / ry;
      if (dx * dx + dy * dy < 1) {
        r = 228;
        g = 186;
        bl = 164;
      }
      final i = (y * w + x) * 4;
      data[i] = (r + noise).clamp(0, 255);
      data[i + 1] = (g + noise).clamp(0, 255);
      data[i + 2] = (bl + noise).clamp(0, 255);
      data[i + 3] = 255;
    }
  }
  return LocalImage(w, h, data);
}
