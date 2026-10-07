import 'dart:typed_data';

import '../models/local_image.dart';
import 'local_export_service.dart';

LocalExportService createExportService() => _Unsupported();

class _Unsupported implements LocalExportService {
  @override
  Future<PreparedExport> prepare(LocalImage image, {String baseName = 'photo-effect'}) =>
      throw UnsupportedError('Export is not supported on this platform');

  @override
  Future<ExportOutcome> saveFile(Uint8List bytes, String fileName, String mimeType) =>
      throw UnsupportedError('Export is not supported on this platform');
}
