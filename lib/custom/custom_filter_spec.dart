import 'dart:convert';
import 'dart:typed_data';

import '../rendering/blend_modes.dart';
import 'cube_lut.dart';
import 'filter_file_limits.dart';
import 'transparent_png.dart';

/// Blend modes offered for overlays (JSON names on the left).
const overlayBlendModes = <String, PixelBlend>{
  'normal': PixelBlend.normal,
  'screen': PixelBlend.screen,
  'multiply': PixelBlend.multiply,
  'overlay': PixelBlend.overlay,
  'soft-light': PixelBlend.softLight,
};

const overlayBlendLabels = <String, String>{
  'normal': 'Normal',
  'screen': 'Screen (brighten)',
  'multiply': 'Multiply (darken)',
  'overlay': 'Overlay (contrast)',
  'soft-light': 'Soft light',
};

/// Where a face sticker is attached.
enum StickerAnchor { face, eyes, nose, mouth, forehead }

const stickerAnchorLabels = <StickerAnchor, String>{
  StickerAnchor.face: 'Whole face',
  StickerAnchor.eyes: 'Eyes',
  StickerAnchor.nose: 'Nose',
  StickerAnchor.mouth: 'Mouth',
  StickerAnchor.forehead: 'Forehead',
};

class OverlayLayer {
  OverlayLayer({
    required this.image,
    required this.blend,
    required this.opacity,
  });
  final TransparentImage image;
  final String blend; // key of [overlayBlendModes]
  final double opacity; // 0..1
  PixelBlend get mode => overlayBlendModes[blend]!;
}

class StickerLayer {
  StickerLayer({
    required this.image,
    required this.anchor,
    this.scale = 1.0,
    this.offsetY = 0.0,
    this.opacity = 1.0,
  });
  final TransparentImage image;
  final StickerAnchor anchor;
  final double scale; // 0.2..3, relative to the anchor's natural size
  final double offsetY; // -1..1, in sticker heights (positive = up the face)
  final double opacity; // 0..1
}

/// A user-made filter: any combination of a colour LUT, a full-photo overlay
/// and a face sticker, applied in that order.
///
/// The JSON form ("photo-effects-filter", version 1) is the only thing that is
/// stored or exported. It has no executable fields and no URLs: images are
/// embedded as `data:image/png;base64,...` and nothing is ever fetched.
class CustomFilterSpec {
  CustomFilterSpec({required this.name, this.lut, this.overlay, this.sticker})
    : assert(lut != null || overlay != null || sticker != null);

  final String name;
  final CubeLut? lut;
  final OverlayLayer? overlay;
  final StickerLayer? sticker;

  bool get usesFace => sticker != null;

  static const format = 'photo-effects-filter';
  static const version = 1;
  static const _pngPrefix = 'data:image/png;base64,';

  /// Canonical JSON (what is stored and exported).
  String encode() => jsonEncode({
    'format': format,
    'version': version,
    'name': name,
    if (lut != null) 'lut': {'size': lut!.size, 'rgb16': lut!.toRgb16Base64()},
    if (overlay != null)
      'overlay': {
        'image': _pngPrefix + base64Encode(overlay!.image.png),
        'blend': overlay!.blend,
        'opacity': _round(overlay!.opacity),
      },
    if (sticker != null)
      'sticker': {
        'image': _pngPrefix + base64Encode(sticker!.image.png),
        'anchor': sticker!.anchor.name,
        'scale': _round(sticker!.scale),
        'offsetY': _round(sticker!.offsetY),
        'opacity': _round(sticker!.opacity),
      },
  });

  static double _round(double v) => (v * 1000).round() / 1000;

  /// Strict parser for preset JSON. Unknown keys, wrong types, out-of-range
  /// numbers, non-PNG images and anything that looks like a URL are rejected.
  static CustomFilterSpec decode(String text, {String? fallbackName}) {
    Object? root;
    try {
      root = jsonDecode(text);
    } on FormatException {
      throw const FilterFileException('This JSON file could not be read.');
    }
    final m = _map(root, 'The filter file', const {
      'format',
      'version',
      'name',
      'lut',
      'overlay',
      'sticker',
    });
    if (m['format'] != format) {
      throw const FilterFileException(
        'This JSON file is not a Photo Effects filter ("format" must be "$format").',
      );
    }
    if (m['version'] != version) {
      throw const FilterFileException(
        'Unsupported filter version (expected 1).',
      );
    }
    final rawName = m['name'];
    if (rawName is! String) {
      throw const FilterFileException('"name" must be text.');
    }
    if (rawName.length > 200) {
      throw const FilterFileException('"name" is too long.');
    }
    final name = sanitizeFilterName(
      rawName,
      fallback: sanitizeFilterName(fallbackName),
    );

    CubeLut? lut;
    if (m.containsKey('lut')) {
      final l = _map(m['lut'], '"lut"', const {'size', 'rgb16', 'cube'});
      if (l.containsKey('cube') ==
          (l.containsKey('rgb16') || l.containsKey('size'))) {
        throw const FilterFileException(
          '"lut" needs either "cube" text or "size" + "rgb16".',
        );
      }
      if (l.containsKey('cube')) {
        final cube = l['cube'];
        if (cube is! String) {
          throw const FilterFileException('"lut.cube" must be text.');
        }
        lut = CubeLut.parse(cube).$1;
      } else {
        final size = l['size'];
        final data = l['rgb16'];
        if (size is! int || data is! String) {
          throw const FilterFileException(
            '"lut.size"/"lut.rgb16" have the wrong type.',
          );
        }
        lut = CubeLut.fromRgb16Base64(size, data);
      }
    }

    OverlayLayer? overlay;
    if (m.containsKey('overlay')) {
      final o = _map(m['overlay'], '"overlay"', const {
        'image',
        'blend',
        'opacity',
      });
      final blend = o['blend'] ?? 'normal';
      if (blend is! String || !overlayBlendModes.containsKey(blend)) {
        throw FilterFileException(
          '"overlay.blend" must be one of: ${overlayBlendModes.keys.join(', ')}.',
        );
      }
      overlay = OverlayLayer(
        image: _image(o['image'], '"overlay.image"'),
        blend: blend,
        opacity: _num(o['opacity'], '"overlay.opacity"', 0, 1, 1),
      );
    }

    StickerLayer? sticker;
    if (m.containsKey('sticker')) {
      final s = _map(m['sticker'], '"sticker"', const {
        'image',
        'anchor',
        'scale',
        'offsetY',
        'opacity',
      });
      final anchorName = s['anchor'] ?? 'face';
      final anchor = StickerAnchor.values
          .where((a) => a.name == anchorName)
          .firstOrNull;
      if (anchor == null) {
        throw FilterFileException(
          '"sticker.anchor" must be one of: ${StickerAnchor.values.map((a) => a.name).join(', ')}.',
        );
      }
      sticker = StickerLayer(
        image: _image(s['image'], '"sticker.image"'),
        anchor: anchor,
        scale: _num(s['scale'], '"sticker.scale"', 0.2, 3, 1),
        offsetY: _num(s['offsetY'], '"sticker.offsetY"', -1, 1, 0),
        opacity: _num(s['opacity'], '"sticker.opacity"', 0, 1, 1),
      );
    }
    if (lut == null && overlay == null && sticker == null) {
      throw const FilterFileException(
        'The filter needs at least one of "lut", "overlay" or "sticker".',
      );
    }
    return CustomFilterSpec(
      name: name,
      lut: lut,
      overlay: overlay,
      sticker: sticker,
    );
  }

  static Map<String, Object?> _map(
    Object? v,
    String what,
    Set<String> allowed,
  ) {
    if (v is! Map<String, Object?>) {
      throw FilterFileException('$what must be a JSON object.');
    }
    for (final k in v.keys) {
      if (!allowed.contains(k)) {
        final shown = k.length > 24 ? '${k.substring(0, 24)}...' : k;
        throw FilterFileException(
          '$what has an unsupported field "${sanitizeFilterName(shown, fallback: '?')}".',
        );
      }
    }
    return v;
  }

  static double _num(
    Object? v,
    String what,
    double min,
    double max,
    double fallback,
  ) {
    if (v == null) return fallback;
    if (v is! num || !v.isFinite || v < min || v > max) {
      throw FilterFileException('$what must be a number from $min to $max.');
    }
    return v.toDouble();
  }

  static TransparentImage _image(Object? v, String what) {
    if (v is! String) {
      throw FilterFileException(
        '$what must be an embedded PNG (data:image/png;base64,...).',
      );
    }
    if (!v.startsWith(_pngPrefix)) {
      throw FilterFileException(
        '$what must be an embedded PNG (data:image/png;base64,...). Links are not allowed.',
      );
    }
    final Uint8List bytes;
    try {
      bytes = base64Decode(v.substring(_pngPrefix.length));
    } on FormatException {
      throw FilterFileException('$what is not valid base64.');
    }
    return validateTransparentPng(bytes);
  }
}

/// Kinds of filter file the app accepts.
enum FilterFileKind { cube, json, png }

/// Works out what a picked file is from its name *and* content. Photos
/// (JPEG/HEIC/WebP/GIF) and anything else are rejected.
FilterFileKind classifyFilterFile(String fileName, Uint8List bytes) {
  if (bytes.isEmpty) throw const FilterFileException('The file is empty.');
  if (bytes.length > FilterFileLimits.maxFileBytes) {
    throw const FilterFileException('The file is larger than 5 MB.');
  }
  final photo = sniffPhotoFormat(bytes);
  if (photo != null) {
    throw FilterFileException(
      'That looks like a photo ($photo). Only filter files are accepted: .cube, .json, or a transparent .png.',
    );
  }
  final ext = fileName.contains('.')
      ? fileName.split('.').last.toLowerCase()
      : '';
  if (looksLikePng(bytes)) {
    if (ext != 'png') {
      throw const FilterFileException('PNG files must end in .png.');
    }
    return FilterFileKind.png;
  }
  if (ext == 'cube') return FilterFileKind.cube;
  if (ext == 'json') return FilterFileKind.json;
  throw const FilterFileException(
    'Unsupported file. Only filter files are accepted: .cube, .json, or a transparent .png.',
  );
}

/// Decodes text strictly as UTF-8 (rejects binary data).
String decodeFilterText(Uint8List bytes) {
  try {
    final s = utf8.decode(bytes);
    if (s.contains('\u0000')) throw const FormatException();
    return s.startsWith('\uFEFF') ? s.substring(1) : s;
  } on FormatException {
    throw const FilterFileException('The file is not a text file.');
  }
}

/// Builds a filter from a `.cube` file.
CustomFilterSpec specFromCube(String fileName, Uint8List bytes) {
  final (lut, title) = CubeLut.parse(decodeFilterText(bytes));
  return CustomFilterSpec(
    name: sanitizeFilterName(
      title ?? baseNameOf(fileName),
      fallback: 'My colour look',
    ),
    lut: lut,
  );
}

/// Builds a filter from a preset `.json` file.
CustomFilterSpec specFromJson(String fileName, Uint8List bytes) =>
    CustomFilterSpec.decode(
      decodeFilterText(bytes),
      fallbackName: baseNameOf(fileName),
    );
