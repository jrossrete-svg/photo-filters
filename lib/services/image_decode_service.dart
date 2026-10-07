import 'dart:typed_data';

import '../models/local_image.dart';
import 'image_decode_service_stub.dart'
    if (dart.library.io) 'image_decode_service_io.dart'
    if (dart.library.js_interop) 'image_decode_service_web.dart'
    as impl;

/// Decodes a picked photo locally into an upright RGBA image whose long edge
/// is at most [maxEdge]. EXIF orientation is applied, so portrait photos are
/// the right way up. The original bytes are never modified.
class ImageDecodeService {
  const ImageDecodeService();

  Future<LocalImage> decode(Uint8List encoded, {required int maxEdge}) =>
      impl.decodeUpright(encoded, maxEdge);
}

/// Thrown when the photo's format can't be decoded on this device.
class UnsupportedPhotoException implements Exception {
  const UnsupportedPhotoException(this.message);
  final String message;
  @override
  String toString() => message;
}
