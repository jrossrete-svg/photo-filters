import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../rendering/blend_modes.dart';
import '../rendering/color_grade.dart';
import '../rendering/effects.dart';
import '../rendering/face_mask_builder.dart';
import '../rendering/raster.dart';
import 'photo_filter.dart';

/// Light: our interpretation of the ambiguous "Light" lens name is a soft,
/// bright, airy *beauty light*: a diffused key light with a gentle mist,
/// lifted shadows and clean whites. When a face is found it adds a soft
/// frontal "ring light" on the face, while face protection compresses skin
/// highlights so they don't blow out.
class LightFilter extends PhotoFilter {
  const LightFilter();

  static const _preset = FilterPreset(
    id: 'light',
    displayName: 'Light',
    description: 'Soft, bright, airy light with a gentle glow.',
    usesFace: true,
    defaultIntensity: 0.75,
    controls: [
      FilterControl(
        key: 'protectFace',
        label: 'Face protection',
        kind: ControlKind.toggle,
        defaultValue: 1,
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
        exposure: 0.25,
        contrast: -0.08,
        shadows: 0.4,
        highlights: -0.25,
        saturation: -0.06,
        warmth: -0.05,
        fade: 0.06,
        highlightTint: [0.012, 0.012, 0.02],
      ).scaled(t),
    );
    applyDiffusion(img, radius: 0.018, strength: 0.2 * t);
    applyBloom(img, threshold: 0.65, radius: 0.04, strength: 0.32 * t);

    final protect = s.flag('protectFace', fallback: true);
    for (final face in faces) {
      final masks = FaceMaskBuilder(face);
      final oval = masks.faceOval(feather: 0.25);
      // Ring light: soft, even frontal brightening of the face.
      tintMask(img, oval, PixelBlend.screen, const [1.0, 0.97, 0.95], 0.18 * t);
      final skin = masks.skin();
      smoothSkin(img, skin, face.eyeDistance, 0.25 * t);
      if (protect) _protectHighlights(img, oval, t);
    }
  }

  /// Compresses bright skin values inside [mask] so faces keep detail.
  void _protectHighlights(FloatImage img, Mask mask, double t) {
    for (var y = 0; y < mask.height; y++) {
      for (var x = 0; x < mask.width; x++) {
        final a = mask.data[y * mask.width + x] * t;
        if (a <= 0.01) continue;
        final k = ((y + mask.top) * img.width + x + mask.left) * 3;
        for (var c = 0; c < 3; c++) {
          final v = img.data[k + c];
          if (v > 0.78) {
            final compressed = 0.78 + (v - 0.78) * 0.45;
            img.data[k + c] = v + (compressed - v) * a;
          }
        }
      }
    }
  }
}
