import 'custom_filter.dart';
import 'custom_filter_spec.dart';

/// User-made filters known in this isolate/worker, by id. The UI fills it from
/// local storage; background workers get the stored JSON sent along with the
/// first job that uses a filter and re-validate it.
class CustomFilterRegistry {
  CustomFilterRegistry._();
  static final _filters = <String, CustomFilter>{};
  static final _json = <String, String>{};

  static CustomFilter? lookup(String id) => _filters[id];

  /// Canonical JSON of a registered filter (for workers and "Export filter").
  static String? jsonOf(String id) => _json[id];

  static CustomFilter register(
    String id,
    CustomFilterSpec spec, {
    String? json,
  }) {
    _json[id] = json ?? spec.encode();
    return _filters[id] = CustomFilter(id, spec);
  }

  /// Parses (and re-validates) the stored JSON form.
  static CustomFilter registerJson(String id, String json) =>
      register(id, CustomFilterSpec.decode(json), json: json);

  static void remove(String id) {
    _filters.remove(id);
    _json.remove(id);
  }
}
