import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../rendering/color_grade.dart';
import '../rendering/effects.dart';
import '../rendering/makeup.dart';
import '../rendering/raster.dart';
import 'photo_filter.dart';

/// Glow Effect with Makeup: bolder glam makeup (bronze-rose shadow, winged
/// liner, berry lips, blush and highlighter) combined with bloom, extra
/// contrast/saturation and deeper shadows.
class GlowMakeupFilter extends PhotoFilter {
  const GlowMakeupFilter();

  static const _preset = FilterPreset(
    id: 'glow_makeup',
    displayName: 'Glow Effect with Makeup',
    description: 'Glam makeup with a radiant bloom.',
    usesFace: true,
    defaultIntensity: 0.8,
    controls: [FilterControl(key: 'glow', label: 'Glow', defaultValue: 0.6)],
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
    for (final face in faces) {
      final kit = MakeupKit(img, face);
      kit.smoothSkin(0.6 * t);
      kit.eyeshadow(const [0.72, 0.45, 0.38], 0.85 * t);
      kit.mascara(0.85 * t);
      kit.eyeliner(0.75 * t, wing: 0.2, thickness: 0.022);
      kit.brows(0.6 * t);
      kit.blush(const [0.9, 0.45, 0.45], 0.55 * t);
      kit.lips(const [0.68, 0.16, 0.26], 0.85 * t, gloss: 0.6 * t);
      kit.highlight(1.0 * t, color: const [1, 0.93, 0.82]);
    }
    applyColorGrade(
      img,
      const ColorGrade(
        contrast: 0.18,
        saturation: 0.12,
        vibrance: 0.1,
        shadows: -0.3,
        warmth: 0.12,
        highlightTint: [0.02, 0.01, 0.0],
      ).scaled(t),
    );
    final glow = s.param('glow', 0.6);
    applyBloom(
      img,
      threshold: 0.5,
      radius: 0.04,
      strength: 0.65 * glow * t,
      tint: const [1.0, 0.9, 0.85],
    );
    applyVignette(img, 0.18 * t);
  }
}
