import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/foundation.dart';

import 'custom_filter.dart';
import 'custom_filter_registry.dart';
import 'custom_filter_spec.dart';
import 'custom_filter_store.dart';
import 'filter_file_limits.dart';
import 'transparent_png.dart';

/// The user's own filters: loaded from local storage at start-up, added from
/// filter files, deleted on request. Nothing is uploaded.
class CustomFilterLibrary extends ChangeNotifier {
  CustomFilterLibrary({CustomFilterStore? store})
    : _store = store ?? CustomFilterStore.create();

  final CustomFilterStore _store;
  final List<CustomFilter> _filters = [];
  bool _loaded = false;
  int skippedOnLoad = 0;

  List<CustomFilter> get filters => List.unmodifiable(_filters);
  bool get isFull => _filters.length >= FilterFileLimits.maxCustomFilters;

  Future<void> load() async {
    if (_loaded) return;
    _loaded = true;
    try {
      for (final s in await _store.loadAll()) {
        try {
          _filters.add(CustomFilterRegistry.registerJson(s.id, s.json));
        } catch (_) {
          skippedOnLoad++; // invalid or damaged entry: ignore
        }
      }
    } catch (_) {
      // Storage unavailable (e.g. private browsing): start empty.
    }
    notifyListeners();
  }

  /// Validates size limits, stores the filter locally and makes it available.
  Future<CustomFilter> add(CustomFilterSpec spec) async {
    if (isFull) {
      throw const FilterFileException(
        'You can keep up to ${FilterFileLimits.maxCustomFilters} of your own filters. Delete one first.',
      );
    }
    final fitted = fitToFileLimit(spec);
    final json = fitted.encode();
    final id = '$customFilterIdPrefix${_randomId()}';
    await _store.save(
      StoredFilter(
        id: id,
        json: json,
        createdAt: DateTime.now().millisecondsSinceEpoch,
      ),
    );
    final f = CustomFilterRegistry.register(id, fitted, json: json);
    _filters.add(f);
    notifyListeners();
    return f;
  }

  Future<void> delete(String id) async {
    await _store.delete(id);
    CustomFilterRegistry.remove(id);
    _filters.removeWhere((f) => f.id == id);
    notifyListeners();
  }

  /// The filter as a `.json` file another device can import.
  (Uint8List, String) exportFile(String id) {
    final json = CustomFilterRegistry.jsonOf(id);
    final f = CustomFilterRegistry.lookup(id);
    if (json == null || f == null) throw StateError('Unknown filter');
    return (
      Uint8List.fromList(utf8.encode(json)),
      '${filterFileSlug(f.spec.name)}-filter.json',
    );
  }

  static String _randomId() {
    final r = math.Random.secure();
    return List.generate(16, (_) => r.nextInt(16).toRadixString(16)).join();
  }
}

String filterFileSlug(String name) {
  final s = name
      .toLowerCase()
      .replaceAll(RegExp(r'[^a-z0-9]+'), '-')
      .replaceAll(RegExp(r'^-+|-+$'), '');
  if (s.isEmpty) return 'my';
  return s.length > 40 ? s.substring(0, 40) : s;
}

/// Makes sure the stored/exported JSON stays under the 5 MB file limit (so an
/// exported filter can always be imported again) by shrinking embedded images.
CustomFilterSpec fitToFileLimit(CustomFilterSpec spec) {
  var current = spec;
  var edge = FilterFileLimits.maxImageEdge;
  while (current.encode().length > FilterFileLimits.maxFileBytes) {
    if (current.overlay == null && current.sticker == null) {
      throw const FilterFileException(
        'This filter is too large to save (over 5 MB).',
      );
    }
    edge = (edge * 0.75).round();
    if (edge < 256) {
      throw const FilterFileException(
        'This filter is too large to save (over 5 MB).',
      );
    }
    TransparentImage shrink(TransparentImage im) {
      if (math.max(im.width, im.height) <= edge) return im;
      final (w, h, px) = downscaleRgbaPremultiplied(
        im.width,
        im.height,
        im.rgba,
        edge,
      );
      return TransparentImage(w, h, px, encodeRgbaPng(w, h, px));
    }

    final o = current.overlay, s = current.sticker;
    current = CustomFilterSpec(
      name: current.name,
      lut: current.lut,
      overlay: o == null
          ? null
          : OverlayLayer(
              image: shrink(o.image),
              blend: o.blend,
              opacity: o.opacity,
            ),
      sticker: s == null
          ? null
          : StickerLayer(
              image: shrink(s.image),
              anchor: s.anchor,
              scale: s.scale,
              offsetY: s.offsetY,
              opacity: s.opacity,
            ),
    );
  }
  return current;
}
