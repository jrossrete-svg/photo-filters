import 'dart:async';
import 'dart:typed_data';
import 'dart:ui' as ui;

import '../custom/custom_filter.dart';
import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../models/local_image.dart';
import '../services/face_landmark_service.dart';
import '../services/image_decode_service.dart';
import '../services/local_export_service.dart';
import '../services/platform_limits.dart';
import 'filter_runner.dart';

/// One photo being edited. Holds only in-memory copies; the original file in
/// the photo library is never modified.
class EditSession {
  EditSession({
    required this.originalBytes,
    required this.name,
    required this.preview,
    required this.landmarks,
    this.faceDetectionError,
  });

  /// The picked photo's encoded bytes (re-decoded at export size later).
  final Uint8List originalBytes;
  final String name;

  /// Upright, downscaled working copy for interactive previews.
  final LocalImage preview;

  /// Normalised landmarks (shared by preview and export).
  final FaceLandmarks landmarks;

  /// Set when the face detector couldn't run (filters still work globally).
  final String? faceDetectionError;
}

enum ExportStage { decoding, rendering, encoding }

/// Orchestrates decode -> face landmarks -> filter -> export, keeping heavy
/// work off the UI thread (isolate on iOS, Web Worker on the web).
class ImagePipeline {
  ImagePipeline({
    FilterRunner? runner,
    ImageDecodeService? decoder,
    FaceLandmarkService? faces,
    LocalExportService? exporter,
  }) : runner = runner ?? FilterRunner.create(),
       decoder = decoder ?? const ImageDecodeService(),
       faces = faces ?? FaceLandmarkService.create(),
       exporter = exporter ?? LocalExportService.create();

  final FilterRunner runner;
  final ImageDecodeService decoder;
  final FaceLandmarkService faces;
  final LocalExportService exporter;

  /// Starts loading the face model in the background.
  void warmUp() => unawaited(faces.warmUp().catchError((Object _) {}));

  Future<EditSession> open(Uint8List bytes, String name) async {
    final preview = await decoder.decode(
      bytes,
      maxEdge: PlatformLimits.previewMaxEdge,
    );
    FaceLandmarks landmarks = FaceLandmarks.none;
    String? error;
    try {
      landmarks = await faces.detect(preview);
    } catch (e) {
      error = 'Face detection unavailable: $e';
    }
    return EditSession(
      originalBytes: bytes,
      name: name,
      preview: preview,
      landmarks: landmarks,
      faceDetectionError: error,
    );
  }

  Future<ProcessedImage> renderPreview(
    EditSession s,
    String filterId,
    FilterSettings settings,
  ) => runner.run(
    filterId: filterId,
    source: s.preview,
    landmarks: s.landmarks,
    settings: settings,
  );

  /// Renders a new full-size copy (capped per platform) and prepares it for
  /// saving. The caller then calls [PreparedExport.save] from a user tap.
  Future<PreparedExport> export(
    EditSession s,
    String filterId,
    FilterSettings settings, {
    void Function(ExportStage stage)? onStage,
  }) async {
    onStage?.call(ExportStage.decoding);
    final full = await decoder.decode(
      s.originalBytes,
      maxEdge: PlatformLimits.exportMaxEdge,
    );
    onStage?.call(ExportStage.rendering);
    final result = await runner.run(
      filterId: filterId,
      source: full,
      landmarks: s.landmarks,
      settings: settings,
    );
    onStage?.call(ExportStage.encoding);
    return exporter.prepare(
      result.image,
      baseName: isCustomFilterId(filterId)
          ? 'photo-effect-custom'
          : 'photo-effect-$filterId'.replaceAll('_', '-'),
    );
  }

  void dispose() {
    runner.dispose();
    unawaited(faces.dispose());
  }
}

/// Converts RGBA pixels into a `ui.Image` for display.
Future<ui.Image> toUiImage(LocalImage image) {
  final c = Completer<ui.Image>();
  ui.decodeImageFromPixels(
    image.rgba,
    image.width,
    image.height,
    ui.PixelFormat.rgba8888,
    c.complete,
  );
  return c.future;
}
