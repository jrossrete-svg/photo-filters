import 'dart:typed_data';

import 'filter_file_picker_stub.dart'
    if (dart.library.io) 'filter_file_picker_io.dart'
    if (dart.library.js_interop) 'filter_file_picker_web.dart'
    as impl;

/// Picks a *filter file* (.cube, .json or transparent .png) from the device.
/// The file is read into memory only; it is never uploaded.
/// Call it directly from a tap handler (Safari only opens pickers then).
Future<(Uint8List, String)?> pickFilterFile() => impl.pickFilterFile();
