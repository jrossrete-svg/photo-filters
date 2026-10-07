import 'package:flutter/foundation.dart';

import '../filters/filter_registry.dart';
import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../models/local_image.dart';
import 'filter_runner.dart';

FilterRunner createFilterRunner() => _IsolateFilterRunner();

class _IsolateFilterRunner implements FilterRunner {
  @override
  Future<ProcessedImage> run({
    required String filterId,
    required LocalImage source,
    required FaceLandmarks? landmarks,
    required FilterSettings settings,
  }) => compute(_runInIsolate, (
    filterId,
    source,
    landmarks?.encode(),
    settings.encode(),
  ));

  @override
  void dispose() {}
}

ProcessedImage _runInIsolate((String, LocalImage, String?, String) args) {
  final (id, source, lm, settings) = args;
  return filterById(id).applySync(
    source: source,
    landmarks: lm == null ? null : FaceLandmarks.decode(lm),
    settings: FilterSettings.decode(settings),
  );
}
