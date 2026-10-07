import 'dart:typed_data';

/// A decoded, upright (EXIF orientation already applied) RGBA8888 image that
/// lives only in memory on the device.
///
/// This file is pure Dart (no Flutter imports) so it can run inside a
/// background isolate, a Web Worker, unit tests and command-line tools.
class LocalImage {
  LocalImage(this.width, this.height, this.rgba)
    : assert(rgba.length == width * height * 4);

  /// Creates an opaque image filled with a single colour.
  factory LocalImage.filled(int width, int height, int r, int g, int b) {
    final data = Uint8List(width * height * 4);
    for (var i = 0; i < data.length; i += 4) {
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
      data[i + 3] = 255;
    }
    return LocalImage(width, height, data);
  }

  final int width;
  final int height;

  /// Row-major RGBA bytes, 4 bytes per pixel.
  final Uint8List rgba;

  int get longEdge => width > height ? width : height;

  LocalImage copy() => LocalImage(width, height, Uint8List.fromList(rgba));

  /// Area-averaged downscale so the long edge is at most [maxEdge].
  /// Returns `this` when no resize is needed.
  LocalImage downscaleToFit(int maxEdge) {
    if (longEdge <= maxEdge) return this;
    final scale = maxEdge / longEdge;
    final nw = (width * scale).round().clamp(1, maxEdge);
    final nh = (height * scale).round().clamp(1, maxEdge);
    final out = Uint8List(nw * nh * 4);
    final sx = width / nw;
    final sy = height / nh;
    for (var y = 0; y < nh; y++) {
      final y0 = (y * sy).floor();
      final y1 = ((y + 1) * sy).ceil().clamp(y0 + 1, height);
      for (var x = 0; x < nw; x++) {
        final x0 = (x * sx).floor();
        final x1 = ((x + 1) * sx).ceil().clamp(x0 + 1, width);
        var r = 0, g = 0, b = 0, n = 0;
        for (var yy = y0; yy < y1; yy++) {
          var i = (yy * width + x0) * 4;
          for (var xx = x0; xx < x1; xx++) {
            r += rgba[i];
            g += rgba[i + 1];
            b += rgba[i + 2];
            n++;
            i += 4;
          }
        }
        final o = (y * nw + x) * 4;
        out[o] = r ~/ n;
        out[o + 1] = g ~/ n;
        out[o + 2] = b ~/ n;
        out[o + 3] = 255;
      }
    }
    return LocalImage(nw, nh, out);
  }
}

/// Result of running a filter. Always a brand-new buffer; the source image is
/// never modified.
class ProcessedImage {
  const ProcessedImage(this.image, {this.usedFaces = 0, this.note});

  final LocalImage image;

  /// How many faces the filter used for face-aware effects.
  final int usedFaces;

  /// Optional human-readable note, e.g. "No face found: face effects skipped".
  final String? note;
}
