import 'dart:js_interop';

import 'package:web/web.dart' as web;

import 'custom_filter_store.dart';

CustomFilterStore createCustomFilterStore() => _IndexedDbStore();

extension type _StoreModule._(JSObject _) implements JSObject {
  external JSPromise<JSArray<_Record>> list();
  external JSPromise<JSAny?> put(String id, String json, int createdAt);
  external JSPromise<JSAny?> remove(String id);
}

extension type _Record._(JSObject _) implements JSObject {
  external String get id;
  external String get json;
  external JSNumber? get createdAt;
}

class _IndexedDbStore implements CustomFilterStore {
  Future<_StoreModule>? _module;

  Future<_StoreModule> _load() => _module ??= () async {
    final url = web.URL('custom_filter_store.js', web.document.baseURI).href;
    return (await importModule(url.toJS).toDart) as _StoreModule;
  }();

  @override
  Future<List<StoredFilter>> loadAll() async {
    final m = await _load();
    final records = await m.list().toDart;
    return [
      for (final r in records.toDart)
        StoredFilter(
          id: r.id,
          json: r.json,
          createdAt: r.createdAt?.toDartInt ?? 0,
        ),
    ];
  }

  @override
  Future<void> save(StoredFilter filter) async {
    final m = await _load();
    await m.put(filter.id, filter.json, filter.createdAt).toDart;
  }

  @override
  Future<void> delete(String id) async {
    final m = await _load();
    await m.remove(id).toDart;
  }
}
