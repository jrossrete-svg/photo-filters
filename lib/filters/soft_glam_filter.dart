import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../rendering/color_grade.dart';
import '../rendering/effects.dart';
import '../rendering/face_warp.dart';
import '../rendering/feature_retouch.dart';
import '../rendering/makeup.dart';
import '../rendering/raster.dart';
import '../rendering/skin_retouch.dart';
import 'photo_filter.dart';

/// Soft Glam: an original "beauty lens" style retouch that actually changes
/// the face rather than just the colours.
///
/// * Skin: strong edge-preserving smoothing on a landmark skin mask (pores,
///   fine lines, freckles, blemishes), tone evening (less redness, shadows
///   lifted), under-eye brightening, and a brighter, warmer-neutral tone
///   carried onto the neck and shoulders.
/// * Eyes: slightly larger, brighter whites, lighter irises (optionally
///   recoloured to a soft grey-blue), soft lash/liner definition.
/// * Brows softened, lips smoothed with a soft nude-pink tint.
/// * Shape: subtly slimmer jaw, narrower nose, slightly fuller lips.
/// * A gentle overall warmth and soft glow.
///
/// The reshape runs last so all retouching moves with the face.
class SoftGlamFilter extends PhotoFilter {
  const SoftGlamFilter();

  static const _preset = FilterPreset(
    id: 'soft_glam',
    displayName: 'Soft Glam',
    description: 'Smooth skin, brighter eyes, subtle slimming.',
    usesFace: true,
    defaultIntensity: 0.85,
    controls: [
      FilterControl(key: 'smooth', label: 'Smooth', defaultValue: 0.85),
      FilterControl(key: 'slim', label: 'Slim', defaultValue: 0.6),
      FilterControl(key: 'eyes', label: 'Eyes', defaultValue: 0.7),
      FilterControl(
        key: 'light_iris',
        label: 'Lighter eye colour',
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
  String get noFaceNote =>
      'No face found. Soft Glam retouches faces, so the photo is unchanged.';

  @override
  void render(
    FloatImage img,
    List<FaceGeometry> faces,
    FilterSettings s,
    double t,
  ) {
    if (faces.isEmpty) return;
    final smooth = s.param('smooth', 0.85).clamp(0.0, 1.0) * t;
    final slim = s.param('slim', 0.6).clamp(0.0, 1.0) * t;
    final eyes = s.param('eyes', 0.7).clamp(0.0, 1.0) * t;
    final lightIris = s.flag('light_iris', fallback: true);

    for (final face in faces) {
      final info = applySkinRetouch(
        img,
        face,
        SkinRetouch(
          smooth: smooth,
          evenTone: 0.85 * smooth,
          underEye: t,
          tone: t,
          toneL: 4,
          radiusUnits: 0.13,
          eps: 0.03,
          keepTexture: 0.15,
        ),
      );
      // Tone first, so the lip and eye colours below are set on top of it.
      if (info != null) applySkinTone(img, [info], 1);
      softenBrows(img, face, 0.7 * smooth, lighten: 0.3 * smooth);
      retouchLips(img, face, smooth: 0.7 * smooth, tint: 0.85 * t);
      enhanceEyes(
        img,
        face,
        whites: 0.85 * eyes,
        iris: 0.9 * eyes,
        irisTint: const [0.57, 0.62, 0.58],
        irisTintAmount: lightIris ? 0.9 : 0,
      );
      final kit = MakeupKit(img, face);
      kit.mascara(0.25 * eyes);
      kit.eyeliner(0.12 * eyes, wing: 0.04, thickness: 0.011);
    }
    // A gentle overall warmth and soft glow, like a beauty-lens camera.
    applyColorGrade(
      img,
      const ColorGrade(warmth: 0.35, contrast: -0.05).scaled(t),
    );
    applyDiffusion(img, radius: 0.015, strength: 0.08 * t);
    for (final face in faces) {
      applyFaceReshape(
        img,
        face,
        FaceReshape(
          slimJaw: slim,
          narrowNose: slim,
          enlargeEyes: eyes,
          plumpLips: 0.45 * t,
        ),
      );
    }
  }
}
