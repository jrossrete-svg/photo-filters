import 'dart:js_interop';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:web/web.dart' as web;

import '../models/local_image.dart';
import 'image_decode_service.dart';

/// Web decoding uses the browser's own decoder through an <img> element.
/// Browsers apply EXIF orientation when drawing images to a canvas, and
/// Safari can decode HEIC natively. Drawing at the target size also does the
/// downscale in native code, which is much faster than doing it in Dart.
Future<LocalImage> decodeUpright(Uint8List encoded, int maxEdge) async {
  final blob = web.Blob([encoded.toJS].toJS);
  final url = web.URL.createObjectURL(blob);
  try {
    final image = web.HTMLImageElement();
    image.src = url;
    try {
      await image.decode().toDart;
    } catch (_) {
      throw const UnsupportedPhotoException(
        'This browser could not open that photo. Try a JPEG or PNG '
        '(on iPhone, photos are normally converted to JPEG automatically).',
      );
    }
    final w = image.naturalWidth, h = image.naturalHeight;
    if (w == 0 || h == 0) {
      throw const UnsupportedPhotoException('That photo appears to be empty.');
    }
    final scale = math.min(1.0, maxEdge / math.max(w, h));
    final tw = math.max(1, (w * scale).round());
    final th = math.max(1, (h * scale).round());
    final canvas = web.HTMLCanvasElement()
      ..width = tw
      ..height = th;
    final ctx = canvas.getContext('2d') as web.CanvasRenderingContext2D;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    // White matte for transparent PNGs.
    ctx.fillStyle = '#ffffff'.toJS;
    ctx.fillRect(0, 0, tw, th);
    ctx.drawImage(image, 0, 0, tw, th);
    final data = ctx.getImageData(0, 0, tw, th).data.toDart;
    final bytes = Uint8List.view(
      data.buffer,
      data.offsetInBytes,
      data.lengthInBytes,
    );
    // Free the canvas memory promptly (iOS Safari has a tight canvas budget).
    canvas
      ..width = 0
      ..height = 0;
    return LocalImage(tw, th, Uint8List.fromList(bytes));
  } finally {
    web.URL.revokeObjectURL(url);
  }
}
