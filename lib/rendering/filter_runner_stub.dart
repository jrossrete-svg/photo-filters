import '../filters/filter_registry.dart';
import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../models/local_image.dart';
import 'filter_runner.dart';

FilterRunner createFilterRunner() => InlineFilterRunner();

/// Runs filters on the calling thread (tests, fallback).
class InlineFilterRunner implements FilterRunner {
  @override
  Future<ProcessedImage> run({
    required String filterId,
    required LocalImage source,
    required FaceLandmarks? landmarks,
    required FilterSettings settings,
  }) async => filterById(
    filterId,
  ).applySync(source: source, landmarks: landmarks, settings: settings);

  @override
  void dispose() {}
}
