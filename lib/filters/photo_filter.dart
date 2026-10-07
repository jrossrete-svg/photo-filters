import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../models/local_image.dart';
import '../rendering/raster.dart';

/// Shared interface every filter module implements (see the app plan).
///
/// Filters are pure Dart so they can run in a background isolate (iOS) or a
/// Web Worker (web) and in unit tests. They never modify [source].
abstract class PhotoFilter {
  const PhotoFilter();

  String get id;
  String get displayName;
  FilterPreset get preset;

  Future<ProcessedImage> apply({
    required LocalImage source,
    required FaceLandmarks? landmarks,
    required FilterSettings settings,
  }) async =>
      applySync(source: source, landmarks: landmarks, settings: settings);

  /// Synchronous version used inside isolates/workers.
  ProcessedImage applySync({
    required LocalImage source,
    required FaceLandmarks? landmarks,
    required FilterSettings settings,
  }) {
    final img = FloatImage.fromLocal(source);
    final faces = <FaceGeometry>[
      for (final f in landmarks?.usable ?? const <FaceMesh>[])
        f.at(source.width, source.height),
    ];
    final t = settings.intensity.clamp(0.0, 1.0);
    if (t > 0) render(img, faces, settings, t);
    String? note;
    if (preset.usesFace && faces.isEmpty) {
      note = 'No face found, so only the overall look was applied.';
    }
    return ProcessedImage(img.toLocal(), usedFaces: faces.length, note: note);
  }

  /// Implemented by each filter. [t] is the clamped intensity (> 0).
  void render(
    FloatImage img,
    List<FaceGeometry> faces,
    FilterSettings settings,
    double t,
  );
}
