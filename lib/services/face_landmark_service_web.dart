import 'dart:js_interop';
import 'dart:typed_data';

import 'package:web/web.dart' as web;

import '../models/face_landmarks.dart';
import '../models/local_image.dart';
import 'face_landmark_service.dart';

FaceLandmarkService createFaceLandmarkService() => _MediaPipeWebService();

/// JS module `web/face_landmarker_bridge.js`, which wraps MediaPipe Tasks
/// Vision's FaceLandmarker. Everything it loads is served from this app.
extension type _Bridge._(JSObject _) implements JSObject {
  external JSPromise<JSBoolean> warmUp();
  external JSPromise<JSArray<JSFloat32Array>> detectFaces(
    JSUint8Array rgba,
    int width,
    int height,
  );
}

class _MediaPipeWebService implements FaceLandmarkService {
  Future<_Bridge>? _bridge;

  Future<_Bridge> _load() => _bridge ??= () async {
    final url = web.URL('face_landmarker_bridge.js', web.document.baseURI).href;
    final module = await importModule(url.toJS).toDart;
    return module as _Bridge;
  }();

  @override
  Future<void> warmUp() async {
    final b = await _load();
    await b.warmUp().toDart;
  }

  @override
  Future<FaceLandmarks> detect(LocalImage image) async {
    final b = await _load();
    final faces = await b
        .detectFaces(image.rgba.toJS, image.width, image.height)
        .toDart;
    return FaceLandmarks([
      for (final f in faces.toDart) FaceMesh(Float32List.fromList(f.toDart)),
    ]);
  }

  @override
  Future<void> dispose() async {}
}
