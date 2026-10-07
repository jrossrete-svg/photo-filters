import 'dart:typed_data';

import 'photo_picker_service_stub.dart'
    if (dart.library.io) 'photo_picker_service_io.dart'
    if (dart.library.js_interop) 'photo_picker_service_web.dart' as impl;

/// A photo the user picked. Only the bytes are kept in memory; the original
/// in the photo library is never written to, and never sent anywhere.
class PickedPhoto {
  const PickedPhoto({required this.bytes, required this.name});
  final Uint8List bytes;
  final String name;
}

/// Picks one photo from the library.
///
/// * iOS: the system photo picker (PHPicker via image_picker), which lets
///   people browse albums and only shares the chosen photo with the app.
/// * Web (Safari on iPhone): a file input; Safari offers "Photo Library" and
///   hands back a JPEG copy of HEIC photos. The file is read in memory with
///   `File.arrayBuffer()`; nothing is fetched or uploaded.
class PhotoPickerService {
  Future<PickedPhoto?> pickFromLibrary() => impl.pickPhoto();
}
