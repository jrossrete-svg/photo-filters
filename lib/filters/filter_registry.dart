import '../custom/custom_filter_registry.dart';
import 'glow_makeup_filter.dart';
import 'light_filter.dart';
import 'neon_lines_filter.dart';
import 'photo_filter.dart';
import 'rosy_haze_filter.dart';
import 'serum_filter.dart';
import 'soft_freckles_filter.dart';
import 'sunny_effect_filter.dart';

/// All filter modules, in the order shown in the app. Adding a filter only
/// requires adding it here.
const List<PhotoFilter> allFilters = [
  SunnyEffectFilter(),
  SoftFrecklesFilter(),
  NeonLinesFilter(),
  LightFilter(),
  RosyHazeFilter(),
  SerumFilter(),
  GlowMakeupFilter(),
];

/// Built-in filter by id, or a user-made filter registered in
/// [CustomFilterRegistry].
PhotoFilter filterById(String id) =>
    CustomFilterRegistry.lookup(id) ??
    allFilters.firstWhere(
      (f) => f.id == id,
      orElse: () => throw ArgumentError('Unknown filter $id'),
    );
