import 'dart:math' as math;

import '../models/face_landmarks.dart';

/// A face-aligned coordinate frame: `u` runs along the line between the eyes
/// (towards the image-right eye) and `v` points down the face. Using it makes
/// reshaping and retouch regions follow head tilt (roll).
class FaceFrame {
  FaceFrame._(this.ax, this.ay);

  factory FaceFrame.of(FaceGeometry face) {
    final d = face.leftEyeCenter - face.rightEyeCenter;
    final len = math.max(1e-6, d.length);
    return FaceFrame._(d.x / len, d.y / len);
  }

  /// Unit vector along the eye line (image space).
  final double ax, ay;

  /// Local (u, v) of image point [p] relative to [origin].
  (double, double) toLocal(Vec2 p, Vec2 origin) {
    final dx = p.x - origin.x, dy = p.y - origin.y;
    return (dx * ax + dy * ay, -dx * ay + dy * ax);
  }

  /// Image-space vector for a local (du, dv) vector.
  (double, double) toImageVector(double du, double dv) =>
      (du * ax - dv * ay, du * ay + dv * ax);
}
