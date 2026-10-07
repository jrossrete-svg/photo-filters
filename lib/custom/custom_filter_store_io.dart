import 'dart:convert';
import 'dart:io';

import 'package:path_provider/path_provider.dart';

import 'custom_filter_store.dart';

CustomFilterStore createCustomFilterStore() => _FileStore();

/// One JSON file per filter in Application Support (private to the app,
/// not shown in the Files app, never synced by this app).
class _FileStore implements CustomFilterStore {
  Future<Directory> _dir() async {
    final base = await getApplicationSupportDirectory();
    final d = Directory('${base.path}/custom_filters');
    if (!d.existsSync()) await d.create(recursive: true);
    return d;
  }

  static final _safeId = RegExp(r'^custom-[a-z0-9]{6,40}$');

  @override
  Future<List<StoredFilter>> loadAll() async {
    final d = await _dir();
    final out = <StoredFilter>[];
    for (final f in d.listSync().whereType<File>()) {
      if (!f.path.endsWith('.json')) continue;
      try {
        final m = jsonDecode(await f.readAsString()) as Map<String, Object?>;
        out.add(
          StoredFilter(
            id: m['id'] as String,
            json: m['json'] as String,
            createdAt: m['createdAt'] as int,
          ),
        );
      } catch (_) {
        // Skip damaged entries.
      }
    }
    out.sort((a, b) => a.createdAt.compareTo(b.createdAt));
    return out;
  }

  @override
  Future<void> save(StoredFilter filter) async {
    if (!_safeId.hasMatch(filter.id)) throw ArgumentError('bad id');
    final d = await _dir();
    await File('${d.path}/${filter.id}.json').writeAsString(
      jsonEncode({
        'id': filter.id,
        'json': filter.json,
        'createdAt': filter.createdAt,
      }),
    );
  }

  @override
  Future<void> delete(String id) async {
    if (!_safeId.hasMatch(id)) return;
    final d = await _dir();
    final f = File('${d.path}/$id.json');
    if (f.existsSync()) await f.delete();
  }
}
