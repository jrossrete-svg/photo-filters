import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../rendering/blend_modes.dart';
import '../rendering/color_grade.dart';
import '../rendering/effects.dart';
import '../rendering/face_mask_builder.dart';
import '../rendering/raster.dart';
import 'photo_filter.dart';

/// Soft Freckles: seeded, softened freckles over the nose and upper cheeks,
/// with a light skin soften and a hint of warmth.
class SoftFrecklesFilter extends PhotoFilter {
  const SoftFrecklesFilter();

  static const _preset = FilterPreset(
    id: 'soft_freckles',
    displayName: 'Soft Freckles',
    description: 'Natural sun-kissed freckles across nose and cheeks.',
    usesFace: true,
    defaultIntensity: 0.75,
    controls: [
      FilterControl(
        key: 'density',
        label: 'Freckle density',
        defaultValue: 0.55,
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
      const ColorGrade(warmth: 0.18, vibrance: 0.1, exposure: 0.05).scaled(t),
    );
    var faceIndex = 0;
    for (final face in faces) {
      final masks = FaceMaskBuilder(face);
      final skin = masks.skin();
      smoothSkin(img, skin, face.eyeDistance, 0.35 * t);
      // A faint sun-kissed flush under the freckles.
      final flush = masks.cheeks(size: 1.1);
      tintMask(img, flush, PixelBlend.softLight, const [
        0.95,
        0.55,
        0.45,
      ], 0.25 * t);
      paintFreckles(
        img,
        face,
        skin,
        seed: s.seed + 7919 * faceIndex++,
        density: s.param('density', 0.55),
        opacity: 1.0 * t,
      );
    }
  }
}
