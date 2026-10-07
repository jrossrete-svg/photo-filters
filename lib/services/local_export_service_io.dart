import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:gal/gal.dart';
import 'package:image/image.dart' as img;
import 'package:path_provider/path_provider.dart';

import '../models/local_image.dart';
import 'local_export_service.dart';

LocalExportService createExportService() => _GalExportService();

class _GalExportService implements LocalExportService {
  @override
  Future<PreparedExport> prepare(
    LocalImage image, {
    String baseName = 'photo-effect',
  }) async {
    final jpeg = await compute(_encodeJpeg, image);
    final name = exportFileName(baseName);
    return PreparedExport(
      fileName: name,
      save: () async {
        // Add-only access is enough to save a new photo.
        if (!await Gal.hasAccess()) {
          final granted = await Gal.requestAccess();
          if (!granted) return ExportOutcome.cancelled;
        }
        await Gal.putImageBytes(jpeg, name: name.replaceAll('.jpg', ''));
        return ExportOutcome.savedToPhotos;
      },
    );
  }

  @override
  Future<ExportOutcome> saveFile(
    Uint8List bytes,
    String fileName,
    String mimeType,
  ) async {
    // Visible in the Files app under "On My iPhone > Photo Effects"
    // (UIFileSharingEnabled + LSSupportsOpeningDocumentsInPlace in Info.plist).
    final dir = await getApplicationDocumentsDirectory();
    await File('${dir.path}/$fileName').writeAsBytes(bytes, flush: true);
    return ExportOutcome.savedToFiles;
  }
}

Uint8List _encodeJpeg(LocalImage image) {
  final im = img.Image.fromBytes(
    width: image.width,
    height: image.height,
    bytes: image.rgba.buffer,
    numChannels: 4,
    order: img.ChannelOrder.rgba,
  );
  return img.encodeJpg(im, quality: 92);
}
