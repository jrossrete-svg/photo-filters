import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../rendering/color_grade.dart';
import '../rendering/effects.dart';
import '../rendering/raster.dart';
import 'photo_filter.dart';

/// Sunny Effect: a warm, bright "golden hour" grade. Global only, so it works
/// on any photo, with or without a face.
class SunnyEffectFilter extends PhotoFilter {
  const SunnyEffectFilter();

  static const _preset = FilterPreset(
    id: 'sunny_effect',
    displayName: 'Sunny Effect',
    description: 'Warm golden-hour light, brighter and more vivid.',
    usesFace: false,
    defaultIntensity: 0.8,
    controls: [
      FilterControl(key: 'sunGlow', label: 'Sun glow', defaultValue: 0.6),
    ],
  );

  @override
  String get id => _preset.id;
  @override
  String get displayName => _preset.displayName;
  @override
  FilterPreset get preset => _preset;

  @override
  void render(
    FloatImage img,
    List<FaceGeometry> faces,
    FilterSettings s,
    double t,
  ) {
    applyColorGrade(
      img,
      const ColorGrade(
        exposure: 0.28,
        contrast: 0.12,
        saturation: 0.08,
        vibrance: 0.35,
        warmth: 0.75,
        tint: 0.08,
        shadows: 0.25,
        highlights: -0.15,
        shadowTint: [0.02, 0.008, -0.02],
        highlightTint: [0.05, 0.025, -0.035],
      ).scaled(t),
    );
    // Soft warm sun glow from the top-right corner.
    final glow = s.param('sunGlow', 0.6) * t;
    applyLightLeak(img, 0.92, -0.05, 0.75, const [
      1.0,
      0.78,
      0.42,
    ], 0.45 * glow);
    applyBloom(
      img,
      threshold: 0.7,
      radius: 0.025,
      strength: 0.25 * t,
      tint: const [1.0, 0.85, 0.6],
    );
  }
}
