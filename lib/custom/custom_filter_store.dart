import 'custom_filter_store_stub.dart'
    if (dart.library.io) 'custom_filter_store_io.dart'
    if (dart.library.js_interop) 'custom_filter_store_web.dart'
    as impl;

/// One saved user filter: the validated canonical JSON.
class StoredFilter {
  const StoredFilter({
    required this.id,
    required this.json,
    required this.createdAt,
  });
  final String id;
  final String json;
  final int createdAt;
}

/// Local-only storage for user filters.
/// * Web: this browser's IndexedDB (`web/custom_filter_store.js`).
/// * iOS: JSON files in the app's private Application Support folder.
/// Nothing is ever uploaded or synced.
abstract class CustomFilterStore {
  Future<List<StoredFilter>> loadAll();
  Future<void> save(StoredFilter filter);
  Future<void> delete(String id);

  static CustomFilterStore create() => impl.createCustomFilterStore();
}

/// In-memory store (tests and unsupported platforms).
class MemoryCustomFilterStore implements CustomFilterStore {
  final _items = <String, StoredFilter>{};
  @override
  Future<List<StoredFilter>> loadAll() async =>
      _items.values.toList()
        ..sort((a, b) => a.createdAt.compareTo(b.createdAt));
  @override
  Future<void> save(StoredFilter filter) async => _items[filter.id] = filter;
  @override
  Future<void> delete(String id) async => _items.remove(id);
}
