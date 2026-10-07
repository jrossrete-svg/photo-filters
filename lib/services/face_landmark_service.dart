import '../models/face_landmarks.dart';
import '../models/local_image.dart';
import 'face_landmark_service_stub.dart'
    if (dart.library.io) 'face_landmark_service_io.dart'
    if (dart.library.js_interop) 'face_landmark_service_web.dart'
    as impl;

/// Finds face landmarks entirely on the device.
///
/// * iOS: face_detection_tflite (MediaPipe face models bundled in the app,
///   inference in the package's background isolate).
/// * Web: MediaPipe Tasks Vision FaceLandmarker (IMAGE mode), with the wasm
///   runtime and model served from this app's own files, never a CDN.
///
/// Both return the canonical 468-point mesh (web adds 10 iris points), which
/// is normalised to 0..1 so it applies to preview and export sizes alike.
abstract class FaceLandmarkService {
  /// Returns [FaceLandmarks.none] when no face is found. Never throws for
  /// "no face"; throws only if the detector itself can't start.
  Future<FaceLandmarks> detect(LocalImage image);

  /// Optional: start loading models early (e.g. while the user picks a photo).
  Future<void> warmUp();

  Future<void> dispose();

  static FaceLandmarkService create() => impl.createFaceLandmarkService();
}
