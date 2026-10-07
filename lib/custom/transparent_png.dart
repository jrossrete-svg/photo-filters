import 'dart:math' as math;
import 'dart:typed_data';

import 'package:image/image.dart' as img;

import 'filter_file_limits.dart';

/// A validated, transparency-carrying image (straight RGBA, 8-bit) plus a
/// freshly re-encoded PNG of it. Re-encoding drops every metadata chunk.
class TransparentImage {
  TransparentImage(this.width, this.height, this.rgba, this.png);
  final int width;
  final int height;
  final Uint8List rgba;
  final Uint8List png;
}

const _pngSignature = [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A];

bool looksLikePng(Uint8List b) {
  if (b.length < 8) return false;
  for (var i = 0; i < 8; i++) {
    if (b[i] != _pngSignature[i]) return false;
  }
  return true;
}

/// Short description of common photo formats, used for clear error messages.
String? sniffPhotoFormat(Uint8List b) {
  if (b.length >= 3 && b[0] == 0xFF && b[1] == 0xD8 && b[2] == 0xFF) {
    return 'JPEG';
  }
  if (b.length >= 12 &&
      b[4] == 0x66 &&
      b[5] == 0x74 &&
      b[6] == 0x79 &&
      b[7] == 0x70) {
    return 'HEIC/HEIF';
  }
  if (b.length >= 12 &&
      b[0] == 0x52 &&
      b[1] == 0x49 &&
      b[2] == 0x46 &&
      b[3] == 0x46 &&
      b[8] == 0x57 &&
      b[9] == 0x45 &&
      b[10] == 0x42 &&
      b[11] == 0x50) {
    return 'WebP';
  }
  if (b.length >= 3 && b[0] == 0x47 && b[1] == 0x49 && b[2] == 0x46) {
    return 'GIF';
  }
  return null;
}

/// Header facts read without decoding pixels.
class PngHeader {
  PngHeader(this.width, this.height, this.colorType, this.hasTransparencyChunk);
  final int width;
  final int height;
  final int colorType;
  final bool hasTransparencyChunk;

  /// Colour types 4/6 carry alpha; others only via a tRNS chunk.
  bool get canBeTransparent =>
      colorType == 4 || colorType == 6 || hasTransparencyChunk;
}

PngHeader readPngHeader(Uint8List b) {
  if (!looksLikePng(b)) {
    throw const FilterFileException('This is not a PNG file.');
  }
  final bd = ByteData.sublistView(b);
  var pos = 8;
  PngHeader? header;
  var trns = false;
  while (pos + 8 <= b.length) {
    final len = bd.getUint32(pos);
    final type = String.fromCharCodes(b.sublist(pos + 4, pos + 8));
    if (len > b.length - pos - 12) {
      throw const FilterFileException('The PNG file is damaged.');
    }
    if (header == null && type != 'IHDR') {
      throw const FilterFileException('The PNG file is damaged.');
    }
    if (type == 'IHDR') {
      if (len != 13) {
        throw const FilterFileException('The PNG file is damaged.');
      }
      header = PngHeader(
        bd.getUint32(pos + 8),
        bd.getUint32(pos + 12),
        b[pos + 17],
        false,
      );
    } else if (type == 'tRNS') {
      trns = true;
    } else if (type == 'IDAT' || type == 'IEND') {
      break;
    }
    pos += 12 + len;
  }
  if (header == null) {
    throw const FilterFileException('The PNG file is damaged.');
  }
  return PngHeader(header.width, header.height, header.colorType, trns);
}

/// Validates a PNG overlay/sticker:
/// * real PNG (by content, not just the name), at most 5 MB,
/// * has an alpha channel with meaningful transparency (fully opaque images,
///   i.e. ordinary pictures/screenshots, are rejected),
/// * reasonable dimensions, then downscaled to [maxEdge] and re-encoded.
TransparentImage validateTransparentPng(
  Uint8List bytes, {
  int maxEdge = FilterFileLimits.maxImageEdge,
}) {
  if (bytes.length > FilterFileLimits.maxFileBytes) {
    throw const FilterFileException('The image is larger than 5 MB.');
  }
  final photo = sniffPhotoFormat(bytes);
  if (photo != null) {
    throw FilterFileException(
      '$photo images are not accepted. Use a PNG with a transparent background.',
    );
  }
  final h = readPngHeader(bytes);
  if (h.width == 0 ||
      h.height == 0 ||
      h.width > FilterFileLimits.maxPngSide ||
      h.height > FilterFileLimits.maxPngSide ||
      h.width * h.height > FilterFileLimits.maxPngPixels) {
    throw const FilterFileException(
      'The PNG is too large (max 8192 px per side).',
    );
  }
  if (!h.canBeTransparent) {
    throw const FilterFileException(
      'This PNG has no transparency. Overlays and stickers need a transparent background.',
    );
  }
  img.Image? decoded;
  try {
    decoded = img.PngDecoder().decode(bytes);
  } catch (_) {
    decoded = null;
  }
  if (decoded == null) {
    throw const FilterFileException('The PNG file could not be read.');
  }
  final rgbaImage =
      decoded.numChannels == 4 &&
          decoded.format == img.Format.uint8 &&
          !decoded.hasPalette
      ? decoded
      : decoded.convert(format: img.Format.uint8, numChannels: 4);
  var w = rgbaImage.width, hgt = rgbaImage.height;
  var rgba = Uint8List.fromList(
    rgbaImage.getBytes(order: img.ChannelOrder.rgba),
  );

  var transparent = 0, visible = 0;
  for (var i = 3; i < rgba.length; i += 4) {
    final a = rgba[i];
    if (a <= 240) transparent++;
    if (a >= 8) visible++;
  }
  final n = w * hgt;
  if (transparent < n * FilterFileLimits.minTransparentFraction) {
    throw const FilterFileException(
      'This PNG is (almost) fully opaque. Overlays and stickers need a transparent background.',
    );
  }
  if (visible < n * FilterFileLimits.minVisibleFraction) {
    throw const FilterFileException('This PNG is completely transparent.');
  }
  if (math.max(w, hgt) > maxEdge) {
    final r = downscaleRgbaPremultiplied(w, hgt, rgba, maxEdge);
    w = r.$1;
    hgt = r.$2;
    rgba = r.$3;
  }
  return TransparentImage(w, hgt, rgba, encodeRgbaPng(w, hgt, rgba));
}

/// Re-encodes RGBA pixels as a plain PNG (no metadata).
Uint8List encodeRgbaPng(int w, int h, Uint8List rgba) {
  final im = img.Image.fromBytes(
    width: w,
    height: h,
    bytes: rgba.buffer,
    bytesOffset: rgba.offsetInBytes,
    numChannels: 4,
    order: img.ChannelOrder.rgba,
  );
  return img.encodePng(im, level: 6);
}

/// Area-average downscale with premultiplied alpha (no dark fringes).
(int, int, Uint8List) downscaleRgbaPremultiplied(
  int w,
  int h,
  Uint8List src,
  int maxEdge,
) {
  final scale = maxEdge / math.max(w, h);
  final nw = math.max(1, (w * scale).round());
  final nh = math.max(1, (h * scale).round());
  final out = Uint8List(nw * nh * 4);
  final sx = w / nw, sy = h / nh;
  for (var y = 0; y < nh; y++) {
    final y0 = (y * sy).floor();
    final y1 = math.max(y0 + 1, math.min(h, ((y + 1) * sy).ceil()));
    for (var x = 0; x < nw; x++) {
      final x0 = (x * sx).floor();
      final x1 = math.max(x0 + 1, math.min(w, ((x + 1) * sx).ceil()));
      var r = 0.0, g = 0.0, b = 0.0, a = 0.0;
      var cnt = 0;
      for (var yy = y0; yy < y1; yy++) {
        var i = (yy * w + x0) * 4;
        for (var xx = x0; xx < x1; xx++) {
          final al = src[i + 3] / 255.0;
          r += src[i] * al;
          g += src[i + 1] * al;
          b += src[i + 2] * al;
          a += al;
          cnt++;
          i += 4;
        }
      }
      final o = (y * nw + x) * 4;
      if (a > 0) {
        out[o] = (r / a).round().clamp(0, 255);
        out[o + 1] = (g / a).round().clamp(0, 255);
        out[o + 2] = (b / a).round().clamp(0, 255);
      }
      out[o + 3] = (a / cnt * 255).round().clamp(0, 255);
    }
  }
  return (nw, nh, out);
}
