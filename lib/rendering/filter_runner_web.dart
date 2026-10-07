import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:typed_data';

import 'package:web/web.dart' as web;

import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../models/local_image.dart';
import 'filter_runner.dart';
import 'filter_runner_stub.dart';

FilterRunner createFilterRunner() => _WorkerFilterRunner();

/// Sends work to `filter_worker.js` so the page stays responsive while the
/// phone crunches pixels. Falls back to running inline if the worker fails.
class _WorkerFilterRunner implements FilterRunner {
  web.Worker? _worker;
  bool _workerBroken = false;
  int _nextId = 0;
  final _pending = <int, Completer<ProcessedImage>>{};
  final _inline = InlineFilterRunner();

  web.Worker? _ensureWorker() {
    if (_workerBroken) return null;
    if (_worker != null) return _worker;
    try {
      final url = web.URL('filter_worker.js', web.document.baseURI).href;
      final w = web.Worker(url.toJS);
      w.onmessage = ((web.MessageEvent e) => _onMessage(
        e.data as JSObject,
      )).toJS;
      w.onerror = ((web.Event e) {
        e.preventDefault();
        _failAll('Background worker error');
      }).toJS;
      return _worker = w;
    } catch (_) {
      _workerBroken = true;
      return null;
    }
  }

  void _onMessage(JSObject msg) {
    final id = (msg['id'] as JSNumber).toDartInt;
    final c = _pending.remove(id);
    if (c == null) return;
    final error = msg['error'];
    if (error != null) {
      c.completeError(StateError((error as JSString).toDart));
      return;
    }
    final w = (msg['width'] as JSNumber).toDartInt;
    final h = (msg['height'] as JSNumber).toDartInt;
    final pixels = (msg['pixels'] as JSUint8Array).toDart;
    final note = msg['note'];
    c.complete(
      ProcessedImage(
        LocalImage(w, h, pixels),
        usedFaces: (msg['usedFaces'] as JSNumber).toDartInt,
        note: note == null ? null : (note as JSString).toDart,
      ),
    );
  }

  void _failAll(String message) {
    _workerBroken = true;
    _worker?.terminate();
    _worker = null;
    final pending = Map.of(_pending);
    _pending.clear();
    for (final c in pending.values) {
      c.completeError(StateError(message));
    }
  }

  @override
  Future<ProcessedImage> run({
    required String filterId,
    required LocalImage source,
    required FaceLandmarks? landmarks,
    required FilterSettings settings,
  }) async {
    final worker = _ensureWorker();
    if (worker == null) {
      // Let the progress indicator paint before blocking the thread.
      await Future<void>.delayed(const Duration(milliseconds: 32));
      return _inline.run(
        filterId: filterId,
        source: source,
        landmarks: landmarks,
        settings: settings,
      );
    }
    final id = _nextId++;
    final c = Completer<ProcessedImage>();
    _pending[id] = c;
    final msg = JSObject()
      ..['id'] = id.toJS
      ..['filterId'] = filterId.toJS
      ..['width'] = source.width.toJS
      ..['height'] = source.height.toJS
      // Copy so the caller's buffer stays usable (structured clone).
      ..['pixels'] = Uint8List.fromList(source.rgba).toJS
      ..['landmarks'] = (landmarks?.encode() ?? '[]').toJS
      ..['settings'] = settings.encode().toJS;
    worker.postMessage(msg);
    try {
      return await c.future;
    } on StateError {
      // Worker died: retry once on the main thread so the user still gets a result.
      return _inline.run(
        filterId: filterId,
        source: source,
        landmarks: landmarks,
        settings: settings,
      );
    }
  }

  @override
  void dispose() {
    _worker?.terminate();
    _worker = null;
  }
}
