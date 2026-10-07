import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../rendering/blend_modes.dart';
import '../rendering/color_grade.dart';
import '../rendering/effects.dart';
import '../rendering/makeup.dart';
import '../rendering/raster.dart';
import 'photo_filter.dart';

/// Rosy Haze: dreamy pink haze and warm-pink grade, with rosy cheeks and a
/// soft rose lip tint when a face is found.
class RosyHazeFilter extends PhotoFilter {
  const RosyHazeFilter();

  static const _preset = FilterPreset(
    id: 'rosy_haze',
    displayName: 'Rosy Haze',
    description: 'Dreamy pink haze with rosy cheeks and lips.',
    usesFace: true,
    defaultIntensity: 0.8,
    controls: [FilterControl(key: 'haze', label: 'Haze', defaultValue: 0.5)],
  );

  static const _rose = [0.93, 0.42, 0.52];

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
    // Face makeup first so the haze sits over it like real atmosphere.
    for (final face in faces) {
      final kit = MakeupKit(img, face);
      kit.smoothSkin(0.3 * t);
      kit.blush(_rose, 0.7 * t, size: 1.15);
      kit.lips(const [0.86, 0.33, 0.42], 0.7 * t, gloss: 0.5 * t);
      // A touch of flush on the nose tip.
      final m = kit.masks.cheeks(size: 0.0001);
      m.addBlob(
        face.p(MeshIndex.noseTip),
        face.eyeDistance * 0.12,
        face.eyeDistance * 0.08,
        0,
        value: 0.6,
      );
      tintMask(img, m, PixelBlend.softLight, _rose, 0.5 * t);
    }
    final haze = s.param('haze', 0.5);
    applyColorGrade(
      img,
      const ColorGrade(
        exposure: 0.12,
        contrast: -0.12,
        warmth: 0.25,
        tint: 0.45,
        saturation: -0.05,
        shadowTint: [0.04, -0.01, 0.025],
        highlightTint: [0.04, 0.0, 0.015],
      ).scaled(t),
    );
    applyHaze(img, const [1.0, 0.72, 0.8], 0.55 * haze * t);
    applyBloom(
      img,
      threshold: 0.55,
      radius: 0.035,
      strength: 0.45 * t,
      tint: const [1.0, 0.72, 0.82],
    );
  }
}
