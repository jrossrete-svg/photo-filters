import 'dart:typed_data';

import 'package:face_detection_tflite/face_detection_tflite.dart' as fdt;

import '../models/face_landmarks.dart';
import '../models/local_image.dart';
import 'face_landmark_service.dart';

FaceLandmarkService createFaceLandmarkService() => _TfliteFaceService();

/// iOS implementation using face_detection_tflite. Models ship inside the
/// package (no downloads); inference runs in the package's own isolate.
class _TfliteFaceService implements FaceLandmarkService {
  fdt.FaceDetector? _detector;
  Future<fdt.FaceDetector>? _creating;

  Future<fdt.FaceDetector> _get() {
    if (_detector != null) return Future.value(_detector);
    return _creating ??= fdt.FaceDetector.create(
      // Gallery photos: the full-range model also finds smaller faces.
      model: fdt.FaceDetectionModel.backCamera,
    ).then((d) => _detector = d);
  }

  @override
  Future<void> warmUp() async {
    await _get();
  }

  @override
  Future<FaceLandmarks> detect(LocalImage image) async {
    final detector = await _get();
    // Pass already-decoded, upright pixels (BGR) so the detector sees exactly
    // the orientation we display; coordinates come back in these pixels.
    final n = image.width * image.height;
    final bgr = Uint8List(n * 3);
    final src = image.rgba;
    for (var i = 0, j = 0; i < n * 4; i += 4, j += 3) {
      bgr[j] = src[i + 2];
      bgr[j + 1] = src[i + 1];
      bgr[j + 2] = src[i];
    }
    final faces = await detector.detectFacesFromMatBytes(
      bgr,
      width: image.width,
      height: image.height,
      mode: fdt.FaceDetectionMode.standard,
    );
    final meshes = <List<(double, double)>>[];
    for (final f in faces) {
      final mesh = f.mesh;
      if (mesh == null) continue;
      meshes.add([for (final p in mesh.points) (p.x, p.y)]);
    }
    return FaceLandmarks.fromPixelFaces(meshes, image.width, image.height);
  }

  @override
  Future<void> dispose() async {
    await _detector?.dispose();
    _detector = null;
    _creating = null;
  }
}
