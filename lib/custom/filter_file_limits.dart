/// Limits for user-supplied filter files. Only filter files are accepted
/// (.cube colour LUTs, .json presets, transparent .png overlays/stickers),
/// never photos.
class FilterFileLimits {
  static const maxFileBytes = 5 * 1024 * 1024; // 5 MB per file
  static const maxImageEdge = 2048; // overlays/stickers are downscaled to this
  static const maxPngSide = 8192; // refuse to decode anything larger
  static const maxPngPixels = 24 * 1000 * 1000;
  static const minLutSize = 2;
  static const maxLutSize = 65;
  static const maxCustomFilters = 30;
  static const maxNameLength = 40;

  /// A PNG must have at least this fraction of (partly) transparent pixels.
  static const minTransparentFraction = 0.02;

  /// ...and at least this fraction of visible pixels.
  static const minVisibleFraction = 0.005;
}

/// A filter file was rejected. [message] is shown to the user as plain text.
class FilterFileException implements Exception {
  const FilterFileException(this.message);
  final String message;
  @override
  String toString() => message;
}

/// Makes a user-supplied name safe to store and show: removes control,
/// formatting and direction-override characters, collapses whitespace and
/// limits the length. Names are only ever displayed as plain text.
String sanitizeFilterName(String? raw, {String fallback = 'My filter'}) {
  if (raw == null) return fallback;
  final out = StringBuffer();
  var lastSpace = false;
  var count = 0;
  for (final r in raw.runes) {
    if (count >= FilterFileLimits.maxNameLength) break;
    final isSpace =
        r == 0x20 ||
        r == 0x09 ||
        r == 0x0A ||
        r == 0x0D ||
        r == 0xA0 ||
        r == 0x3000;
    if (isSpace) {
      if (!lastSpace && out.isNotEmpty) {
        out.write(' ');
        count++;
      }
      lastSpace = true;
      continue;
    }
    if (_isUnsafeRune(r)) continue;
    out.writeCharCode(r);
    count++;
    lastSpace = false;
  }
  final s = out.toString().trim();
  return s.isEmpty ? fallback : s;
}

bool _isUnsafeRune(int r) =>
    r < 0x20 ||
    (r >= 0x7F && r <= 0x9F) ||
    r == 0xAD ||
    (r >= 0x200B && r <= 0x200F) ||
    (r >= 0x2028 && r <= 0x202E) ||
    (r >= 0x2060 && r <= 0x206F) ||
    r == 0xFEFF ||
    (r >= 0xFFF0 && r <= 0xFFFF) ||
    (r >= 0xE0000 && r <= 0xE007F) ||
    (r >= 0xD800 && r <= 0xDFFF);

/// File name without folders and extension, used as a default filter name.
String baseNameOf(String fileName) {
  var n = fileName.split(RegExp(r'[\\/]')).last;
  final dot = n.lastIndexOf('.');
  if (dot > 0) n = n.substring(0, dot);
  return n.replaceAll(RegExp(r'[_-]+'), ' ');
}
