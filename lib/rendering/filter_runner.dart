import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../models/local_image.dart';
import 'filter_runner_stub.dart'
    if (dart.library.io) 'filter_runner_io.dart'
    if (dart.library.js_interop) 'filter_runner_web.dart'
    as impl;

/// Runs a filter off the UI thread:
/// * iOS: a background isolate via `compute`.
/// * Web: a dedicated Web Worker (`web/filter_worker.js`, compiled from
///   `lib/worker/filter_worker.dart`), falling back to the main thread if
///   workers are unavailable.
abstract class FilterRunner {
  Future<ProcessedImage> run({
    required String filterId,
    required LocalImage source,
    required FaceLandmarks? landmarks,
    required FilterSettings settings,
  });

  void dispose();

  static FilterRunner create() => impl.createFilterRunner();
}
