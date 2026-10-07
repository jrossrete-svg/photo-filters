import 'dart:typed_data';

import '../models/local_image.dart';
import 'local_export_service_stub.dart'
    if (dart.library.io) 'local_export_service_io.dart'
    if (dart.library.js_interop) 'local_export_service_web.dart' as impl;

/// A finished JPEG, ready to be saved by the user.
class PreparedExport {
  PreparedExport({required this.fileName, required this.save});

  final String fileName;

  /// Web: shows the full-screen "press and hold to save" view with a Download
  /// button. iOS: adds a new photo to the library.
  final Future<ExportOutcome> Function() save;
}

enum ExportOutcome { savedToPhotos, shownForSaving, downloaded, savedToFiles, cancelled }

/// Saves *new* files locally. Never touches the original photo and never
/// sends anything anywhere: there is no share sheet and no network code.
///
/// * iOS: writes the edited JPEG to Photos with `gal` (add-only permission);
///   filter files go to the app's folder in the Files app.
/// * Web: shows the JPEG as a normal image (iOS Safari: press and hold, then
///   "Save to Photos") plus a Download button (`<a download>` blob link).
///   Filter files are offered as downloads only.
abstract class LocalExportService {
  Future<PreparedExport> prepare(LocalImage image, {String baseName = 'photo-effect'});

  /// Saves an arbitrary small file (used for "Export filter").
  Future<ExportOutcome> saveFile(Uint8List bytes, String fileName, String mimeType);

  static LocalExportService create() => impl.createExportService();
}

String exportFileName(String baseName) {
  final now = DateTime.now();
  String two(int v) => v.toString().padLeft(2, '0');
  return '$baseName-${now.year}${two(now.month)}${two(now.day)}-'
      '${two(now.hour)}${two(now.minute)}${two(now.second)}.jpg';
}
