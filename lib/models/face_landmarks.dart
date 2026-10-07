import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

/// A 2D point in pixel coordinates.
class Vec2 {
  const Vec2(this.x, this.y);
  final double x;
  final double y;

  Vec2 operator +(Vec2 o) => Vec2(x + o.x, y + o.y);
  Vec2 operator -(Vec2 o) => Vec2(x - o.x, y - o.y);
  Vec2 operator *(double s) => Vec2(x * s, y * s);
  double get length => math.sqrt(x * x + y * y);
  double distanceTo(Vec2 o) => (this - o).length;
  Vec2 lerp(Vec2 o, double t) => Vec2(x + (o.x - x) * t, y + (o.y - y) * t);

  @override
  String toString() => 'Vec2(${x.toStringAsFixed(1)}, ${y.toStringAsFixed(1)})';
}

/// Index groups of the MediaPipe 468-point canonical face mesh (the same
/// topology is produced by face_detection_tflite on iOS and by MediaPipe
/// Tasks FaceLandmarker on the web, which adds 10 iris points, 468-477).
///
/// "Left"/"right" are from the subject's point of view, so the subject's left
/// eye appears on the right side of an unmirrored photo.
class MeshIndex {
  MeshIndex._();

  static const faceOval = [
    10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, //
    379, 378, 400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, //
    234, 127, 162, 21, 54, 103, 67, 109,
  ];
  static const lipsOuter = [
    61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291, //
    409, 270, 269, 267, 0, 37, 39, 40, 185,
  ];
  static const lipsInner = [
    78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308, //
    415, 310, 311, 312, 13, 82, 81, 80, 191,
  ];

  // Eyes: closed rings starting at the outer corner.
  static const rightEye = [
    33, 7, 163, 144, 145, 153, 154, 155, 133, //
    173, 157, 158, 159, 160, 161, 246,
  ];
  static const leftEye = [
    263, 249, 390, 373, 374, 380, 381, 382, 362, //
    398, 384, 385, 386, 387, 388, 466,
  ];
  // Upper lid lines, outer corner -> inner corner.
  static const rightUpperLid = [33, 246, 161, 160, 159, 158, 157, 173, 133];
  static const leftUpperLid = [263, 466, 388, 387, 386, 385, 384, 398, 362];
  static const rightLowerLid = [33, 7, 163, 144, 145, 153, 154, 155, 133];
  static const leftLowerLid = [263, 249, 390, 373, 374, 380, 381, 382, 362];

  // Brows: upper edge outer->inner, lower edge outer->inner.
  static const rightBrowUpper = [70, 63, 105, 66, 107];
  static const rightBrowLower = [46, 53, 52, 65, 55];
  static const leftBrowUpper = [300, 293, 334, 296, 336];
  static const leftBrowLower = [276, 283, 282, 295, 285];

  static const noseBridge = [168, 6, 197, 195, 5, 4, 1];
  static const noseBottom = [98, 97, 2, 326, 327];
  static const noseTip = 1;
  static const rightNostril = 98;
  static const leftNostril = 327;

  // Cheek anchors.
  static const rightCheek = 50;
  static const leftCheek = 280;
  static const rightCheekLow = 205;
  static const leftCheekLow = 425;
  static const rightCheekbone = 116;
  static const leftCheekbone = 345;
  static const rightUnderEye = 118;
  static const leftUnderEye = 347;

  static const rightEyeOuter = 33;
  static const rightEyeInner = 133;
  static const leftEyeOuter = 263;
  static const leftEyeInner = 362;
  static const rightLowerLidCenter = 145;
  static const leftLowerLidCenter = 374;
  static const rightUpperLidCenter = 159;
  static const leftUpperLidCenter = 386;

  static const forehead = 10;
  static const chin = 152;
  static const mouthRight = 61;
  static const mouthLeft = 291;
  static const upperLipTop = 0;
  static const cupidsBowRight = 37;
  static const cupidsBowLeft = 267;
  static const lowerLipBottom = 17;
}

/// Landmarks for one face, stored in normalised image coordinates (0..1) so
/// the same detection can be reused for the preview and the full-size export.
class FaceMesh {
  FaceMesh(this.normalized) : assert(normalized.length.isEven);

  /// Interleaved x0, y0, x1, y1, ... in 0..1 relative to image width/height.
  final Float32List normalized;

  int get pointCount => normalized.length ~/ 2;

  /// True when the mesh contains the 468 points the filters rely on.
  bool get isComplete => pointCount >= 468;

  /// Projects this mesh onto an image of [width] x [height] pixels.
  FaceGeometry at(int width, int height) => FaceGeometry(this, width, height);

  List<double> toList() => normalized.toList();
}

/// Pixel-space helpers for one [FaceMesh] at a particular image size.
class FaceGeometry {
  FaceGeometry(this.mesh, this.width, this.height);

  final FaceMesh mesh;
  final int width;
  final int height;

  Vec2 p(int index) => Vec2(
    mesh.normalized[index * 2] * width,
    mesh.normalized[index * 2 + 1] * height,
  );

  List<Vec2> points(List<int> indices) => [for (final i in indices) p(i)];

  Vec2 centroid(List<int> indices) {
    var x = 0.0, y = 0.0;
    for (final i in indices) {
      final v = p(i);
      x += v.x;
      y += v.y;
    }
    return Vec2(x / indices.length, y / indices.length);
  }

  Vec2 get rightEyeCenter => centroid(MeshIndex.rightEye);
  Vec2 get leftEyeCenter => centroid(MeshIndex.leftEye);

  /// Distance between eye centres: the main scale unit for face effects so
  /// they look the same at preview and export resolution.
  double get eyeDistance =>
      math.max(1.0, rightEyeCenter.distanceTo(leftEyeCenter));

  /// Width of the face oval bounding box in pixels.
  double get faceWidth {
    final b = bounds(MeshIndex.faceOval);
    return math.max(1.0, b.$3 - b.$1);
  }

  /// (minX, minY, maxX, maxY) of the given points.
  (double, double, double, double) bounds(List<int> indices) {
    var minX = double.infinity, minY = double.infinity;
    var maxX = -double.infinity, maxY = -double.infinity;
    for (final i in indices) {
      final v = p(i);
      minX = math.min(minX, v.x);
      minY = math.min(minY, v.y);
      maxX = math.max(maxX, v.x);
      maxY = math.max(maxY, v.y);
    }
    return (minX, minY, maxX, maxY);
  }

  List<Vec2> get faceOval => points(MeshIndex.faceOval);
  List<Vec2> get lipsOuter => points(MeshIndex.lipsOuter);
  List<Vec2> get lipsInner => points(MeshIndex.lipsInner);
  List<Vec2> get rightEye => points(MeshIndex.rightEye);
  List<Vec2> get leftEye => points(MeshIndex.leftEye);

  /// Closed polygon around a brow (upper edge then lower edge reversed).
  List<Vec2> get rightBrow => [
    ...points(MeshIndex.rightBrowUpper),
    ...points(MeshIndex.rightBrowLower).reversed,
  ];
  List<Vec2> get leftBrow => [
    ...points(MeshIndex.leftBrowUpper),
    ...points(MeshIndex.leftBrowLower).reversed,
  ];
}

/// All faces detected in one photo. An empty list means "no face found".
class FaceLandmarks {
  const FaceLandmarks(this.faces);

  static const none = FaceLandmarks([]);

  final List<FaceMesh> faces;

  bool get isEmpty => faces.isEmpty;
  bool get isNotEmpty => faces.isNotEmpty;

  /// Faces with a complete 468+ point mesh.
  List<FaceMesh> get usable => [
    for (final f in faces)
      if (f.isComplete) f,
  ];

  /// Builds landmarks from absolute pixel coordinates (as returned by
  /// face_detection_tflite on iOS) for an image of [width] x [height].
  factory FaceLandmarks.fromPixelFaces(
    List<List<(double, double)>> faces,
    int width,
    int height,
  ) {
    return FaceLandmarks([
      for (final pts in faces)
        FaceMesh(
          Float32List.fromList([
            for (final (x, y) in pts) ...[x / width, y / height],
          ]),
        ),
    ]);
  }

  String encode() => jsonEncode([for (final f in faces) f.toList()]);

  factory FaceLandmarks.decode(String s) {
    final list = jsonDecode(s) as List;
    return FaceLandmarks([
      for (final f in list)
        FaceMesh(
          Float32List.fromList([
            for (final v in f as List) (v as num).toDouble(),
          ]),
        ),
    ]);
  }
}
