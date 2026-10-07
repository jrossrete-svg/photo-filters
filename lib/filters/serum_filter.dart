import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../rendering/blend_modes.dart';
import '../rendering/color_grade.dart';
import '../rendering/effects.dart';
import '../rendering/makeup.dart';
import '../rendering/raster.dart';
import 'photo_filter.dart';

/// SERUM: several lenses share this name. We implement the "glass skin /
/// dewy serum" beauty look: smooth, luminous skin with dewy highlights,
/// a glossy nude-pink lip, defined lashes and liner, groomed brows and
/// optional freckles. Without a face it applies only a soft luminous grade.
class SerumFilter extends PhotoFilter {
  const SerumFilter();

  static const _preset = FilterPreset(
    id: 'serum',
    displayName: 'SERUM',
    description: 'Dewy glass-skin beauty look with soft makeup.',
    usesFace: true,
    defaultIntensity: 0.8,
    controls: [
      FilterControl(
        key: 'freckles',
        label: 'Add freckles',
        kind: ControlKind.toggle,
        defaultValue: 0,
      ),
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
        exposure: 0.1,
        contrast: 0.05,
        vibrance: 0.12,
        warmth: 0.06,
        highlights: -0.1,
      ).scaled(t),
    );
    var i = 0;
    for (final face in faces) {
      final kit = MakeupKit(img, face);
      kit.smoothSkin(0.75 * t, radiusUnits: 0.06);
      kit.highlight(0.9 * t, size: 1.1);
      kit.brows(0.55 * t);
      kit.mascara(0.7 * t);
      kit.eyeliner(0.6 * t, wing: 0.12, thickness: 0.022);
      kit.blush(const [0.92, 0.55, 0.5], 0.35 * t);
      kit.lips(const [0.85, 0.48, 0.48], 0.55 * t, gloss: 0.9 * t);
      if (s.flag('freckles')) {
        paintFreckles(
          img,
          face,
          kit.skin,
          seed: s.seed + 31 * i,
          density: 0.4,
          opacity: 0.6 * t,
        );
      }
      // Dewy sheen: a faint luminous wash over the skin.
      tintMask(img, kit.skin, PixelBlend.softLight, const [
        1,
        0.95,
        0.92,
      ], 0.25 * t);
      i++;
    }
    applyBloom(img, threshold: 0.72, radius: 0.02, strength: 0.25 * t);
  }
}
