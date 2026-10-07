// Entry point of the Web Worker that runs filters off the UI thread.
//
// Build (done by tool/build_web.sh):
//   dart compile js -O2 -o web/filter_worker.js lib/worker/filter_worker.dart
//
// Only pure-Dart code is imported here (no Flutter).
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:web/web.dart' as web;

import '../custom/custom_filter_registry.dart';
import '../filters/filter_registry.dart';
import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../models/local_image.dart';

void main() {
  final scope = globalContext as web.DedicatedWorkerGlobalScope;
  scope.onmessage = ((web.MessageEvent event) {
    final msg = event.data as JSObject;
    final id = msg['id'];
    try {
      final customJson = msg['customJson'];
      if (customJson != null) {
        // Re-validated here with the same strict parser.
        CustomFilterRegistry.registerJson(
          (msg['filterId'] as JSString).toDart,
          (customJson as JSString).toDart,
        );
      }
      final source = LocalImage(
        (msg['width'] as JSNumber).toDartInt,
        (msg['height'] as JSNumber).toDartInt,
        (msg['pixels'] as JSUint8Array).toDart,
      );
      final landmarks = FaceLandmarks.decode(
        (msg['landmarks'] as JSString).toDart,
      );
      final settings = FilterSettings.decode(
        (msg['settings'] as JSString).toDart,
      );
      final result = filterById(
        (msg['filterId'] as JSString).toDart,
      ).applySync(source: source, landmarks: landmarks, settings: settings);
      final pixels = result.image.rgba.toJS;
      final reply = JSObject()
        ..['id'] = id
        ..['width'] = result.image.width.toJS
        ..['height'] = result.image.height.toJS
        ..['pixels'] = pixels
        ..['usedFaces'] = result.usedFaces.toJS
        ..['note'] = result.note?.toJS;
      // Transfer the result buffer instead of copying it.
      scope.postMessage(reply, [result.image.rgba.buffer.toJS].toJS);
    } catch (e) {
      scope.postMessage(
        JSObject()
          ..['id'] = id
          ..['error'] = e.toString().toJS,
      );
    }
  }).toJS;
}
