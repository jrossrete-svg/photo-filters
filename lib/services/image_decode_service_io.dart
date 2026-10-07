import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:image/image.dart' as img;

import '../models/local_image.dart';
import 'image_decode_service.dart';

/// Native (iOS) decoding: pure-Dart decode + EXIF orientation fix + resize in
/// a background isolate. If the `image` package can't read the format (e.g.
/// HEIC), fall back to the engine's platform codec, which applies orientation.
Future<LocalImage> decodeUpright(Uint8List encoded, int maxEdge) async {
  final result = await compute(_decodeInIsolate, (encoded, maxEdge));
  if (result != null) return result;
  return _decodeWithEngine(encoded, maxEdge);
}

LocalImage? _decodeInIsolate((Uint8List, int) args) {
  final (bytes, maxEdge) = args;
  final decoded = img.decodeImage(bytes);
  if (decoded == null) return null;
  var upright = img.bakeOrientation(decoded);
  final long = upright.width > upright.height ? upright.width : upright.height;
  if (long > maxEdge) {
    upright = img.copyResize(
      upright,
      width: upright.width >= upright.height ? maxEdge : null,
      height: upright.height > upright.width ? maxEdge : null,
      interpolation: img.Interpolation.average,
    );
  }
  final rgba = upright.convert(format: img.Format.uint8, numChannels: 4);
  return LocalImage(
    rgba.width,
    rgba.height,
    Uint8List.fromList(rgba.getBytes(order: img.ChannelOrder.rgba)),
  );
}

Future<LocalImage> _decodeWithEngine(Uint8List bytes, int maxEdge) async {
  try {
    final buffer = await ui.ImmutableBuffer.fromUint8List(bytes);
    final descriptor = await ui.ImageDescriptor.encoded(buffer);
    final w = descriptor.width, h = descriptor.height;
    final scale = (w > h ? w : h) > maxEdge ? maxEdge / (w > h ? w : h) : 1.0;
    final codec = await descriptor.instantiateCodec(
      targetWidth: (w * scale).round(),
      targetHeight: (h * scale).round(),
    );
    final frame = await codec.getNextFrame();
    final data = await frame.image.toByteData(
      format: ui.ImageByteFormat.rawRgba,
    );
    final out = LocalImage(
      frame.image.width,
      frame.image.height,
      data!.buffer.asUint8List(),
    );
    frame.image.dispose();
    codec.dispose();
    descriptor.dispose();
    buffer.dispose();
    return out;
  } catch (_) {
    throw const UnsupportedPhotoException(
      'This photo format could not be opened. Try a JPEG or PNG.',
    );
  }
}
