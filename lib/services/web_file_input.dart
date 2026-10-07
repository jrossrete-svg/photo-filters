import 'dart:async';
import 'dart:js_interop';
import 'dart:typed_data';

import 'package:web/web.dart' as web;

/// Opens the browser's file chooser and reads the chosen file locally with
/// `File.arrayBuffer()` (no fetch, no network; works under `connect-src 'self'`).
/// Must be called synchronously from a tap so Safari allows the chooser.
Future<(Uint8List, String)?> pickLocalFile({String? accept}) {
  final completer = Completer<(Uint8List, String)?>();
  final input = web.HTMLInputElement()..type = 'file';
  if (accept != null) input.accept = accept;
  input.style.display = 'none';
  web.document.body!.append(input);
  void finish((Uint8List, String)? v) {
    if (!completer.isCompleted) completer.complete(v);
    input.remove();
  }

  Future<void> read() async {
    final files = input.files;
    if (files == null || files.length == 0) return finish(null);
    final file = files.item(0)!;
    try {
      final buffer = await file.arrayBuffer().toDart;
      finish((buffer.toDart.asUint8List(), file.name));
    } catch (e) {
      if (!completer.isCompleted) completer.completeError(e);
      input.remove();
    }
  }

  input.onchange = ((web.Event _) {
    read();
  }).toJS;
  input.addEventListener('cancel', ((web.Event _) => finish(null)).toJS);
  input.click();
  return completer.future;
}
