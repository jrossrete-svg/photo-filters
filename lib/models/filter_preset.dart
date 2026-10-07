import 'dart:convert';

/// Kind of user control a filter exposes besides the main intensity slider.
enum ControlKind { slider, toggle }

/// Describes one extra control (for example freckle density).
class FilterControl {
  const FilterControl({
    required this.key,
    required this.label,
    this.kind = ControlKind.slider,
    this.min = 0,
    this.max = 1,
    this.defaultValue = 0.5,
  });

  final String key;
  final String label;
  final ControlKind kind;
  final double min;
  final double max;
  final double defaultValue;
}

/// Static description of a filter shown in the UI.
class FilterPreset {
  const FilterPreset({
    required this.id,
    required this.displayName,
    required this.description,
    required this.usesFace,
    this.defaultIntensity = 0.8,
    this.controls = const [],
  });

  final String id;
  final String displayName;
  final String description;

  /// True when the filter has face-aware parts. Such filters still work
  /// without a face, but only apply their global (non-face) parts.
  final bool usesFace;
  final double defaultIntensity;
  final List<FilterControl> controls;

  FilterSettings defaultSettings() => FilterSettings(
    intensity: defaultIntensity,
    params: {for (final c in controls) c.key: c.defaultValue},
  );
}

/// User-adjustable settings for a filter run. Immutable and serialisable so
/// it can be sent to a background isolate or Web Worker.
class FilterSettings {
  const FilterSettings({
    this.intensity = 0.8,
    this.params = const {},
    this.seed = 20261007,
  });

  /// Overall strength, 0 (off) to 1 (full).
  final double intensity;

  /// Extra per-filter values keyed by [FilterControl.key].
  final Map<String, double> params;

  /// Seed for deterministic procedural details (freckles, grain).
  final int seed;

  double param(String key, double fallback) => params[key] ?? fallback;
  bool flag(String key, {bool fallback = false}) =>
      (params[key] ?? (fallback ? 1 : 0)) >= 0.5;

  FilterSettings copyWith({
    double? intensity,
    Map<String, double>? params,
    int? seed,
  }) => FilterSettings(
    intensity: intensity ?? this.intensity,
    params: params ?? this.params,
    seed: seed ?? this.seed,
  );

  FilterSettings withParam(String key, double value) =>
      copyWith(params: {...params, key: value});

  Map<String, Object> toJson() => {
    'intensity': intensity,
    'params': params,
    'seed': seed,
  };

  String encode() => jsonEncode(toJson());

  factory FilterSettings.fromJson(Map<String, dynamic> json) => FilterSettings(
    intensity: (json['intensity'] as num).toDouble(),
    params: (json['params'] as Map).map(
      (k, v) => MapEntry(k as String, (v as num).toDouble()),
    ),
    seed: (json['seed'] as num).toInt(),
  );

  factory FilterSettings.decode(String s) =>
      FilterSettings.fromJson(jsonDecode(s) as Map<String, dynamic>);
}
