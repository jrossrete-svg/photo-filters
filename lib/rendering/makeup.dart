import '../models/face_landmarks.dart';
import 'blend_modes.dart';
import 'effects.dart';
import 'face_mask_builder.dart';
import 'raster.dart';

/// Original landmark-driven makeup layers shared by SERUM, Rosy Haze and
/// Glow Effect with Makeup. Colours are RGB in 0..1.
class MakeupKit {
  MakeupKit(this.img, FaceGeometry face)
    : masks = FaceMaskBuilder(face),
      face = face;

  final FloatImage img;
  final FaceGeometry face;
  final FaceMaskBuilder masks;

  double get unit => face.eyeDistance;

  Mask? _skin;
  Mask get skin => _skin ??= masks.skin();

  void smoothSkin(double amount, {double radiusUnits = 0.05}) =>
      applySkinSmoothing(img, skin, unit, amount, radiusUnits: radiusUnits);

  /// Lip colour that keeps the lips' own shading, plus optional gloss.
  void lips(List<double> color, double opacity, {double gloss = 0}) {
    if (opacity <= 0) return;
    final m = masks.lips();
    tintMask(img, m, PixelBlend.color, color, opacity * 0.75);
    tintMask(img, m, PixelBlend.softLight, color, opacity * 0.5);
    if (gloss > 0) {
      // Small soft specular highlight on the centre of the lower lip.
      final lower = face.p(14).lerp(face.p(MeshIndex.lowerLipBottom), 0.55);
      final width = face
          .p(MeshIndex.mouthLeft)
          .distanceTo(face.p(MeshIndex.mouthRight));
      final g = Mask.aroundPoints(
        img.width,
        img.height,
        face.lipsOuter,
        unit * 0.1,
      );
      g.addBlob(lower, width * 0.16, unit * 0.025, 0);
      g.multiply(m);
      tintMask(img, g, PixelBlend.screen, const [1, 0.97, 0.95], gloss * 0.6);
    }
  }

  void blush(List<double> color, double opacity, {double size = 1.0}) {
    if (opacity <= 0) return;
    final m = masks.cheeks(size: size);
    m.feather(unit * 0.08);
    m.multiply(masks.faceOval(feather: 0.06));
    tintMask(img, m, PixelBlend.color, color, opacity * 0.18);
    tintMask(img, m, PixelBlend.multiply, _toward(color, 0.3), opacity * 0.45);
    tintMask(img, m, PixelBlend.softLight, color, opacity * 0.35);
  }

  void eyeliner(double opacity, {double wing = 0.18, double thickness = 0.03}) {
    if (opacity <= 0) return;
    final m = masks.upperLashLine(thickness: thickness, wing: wing);
    tintMask(img, m, PixelBlend.multiply, const [0.12, 0.09, 0.08], opacity);
  }

  /// Mascara: a softer, wider darkening above the upper lash line.
  void mascara(double opacity) {
    if (opacity <= 0) return;
    final m = masks.upperLashLine(thickness: 0.05);
    m.feather(unit * 0.012);
    m.subtract(masks.eyes(grow: 0.92, feather: 0.0), strength: 0.6);
    tintMask(img, m, PixelBlend.multiply, const [
      0.2,
      0.16,
      0.15,
    ], opacity * 0.8);
  }

  void brows(double opacity, {List<double> color = const [0.42, 0.30, 0.24]}) {
    if (opacity <= 0) return;
    final m = masks.brows(feather: 0.025, grow: 1.05);
    tintMask(img, m, PixelBlend.multiply, color, opacity * 0.55);
  }

  void eyeshadow(List<double> color, double opacity) {
    if (opacity <= 0) return;
    final m = masks.eyelids();
    tintMask(img, m, PixelBlend.multiply, _toward(color, 0.35), opacity * 0.6);
    tintMask(img, m, PixelBlend.softLight, color, opacity * 0.5);
  }

  void highlight(
    double opacity, {
    List<double> color = const [1, 0.96, 0.9],
    double size = 1,
  }) {
    if (opacity <= 0) return;
    final m = masks.highlightPoints(size: size);
    m.multiply(masks.faceOval(feather: 0.04));
    m.feather(unit * 0.03);
    tintMask(img, m, PixelBlend.softLight, color, opacity * 0.5);
    tintMask(img, m, PixelBlend.screen, color, opacity * 0.18);
  }

  static List<double> _toward(List<double> c, double t) => [
    for (final v in c) 1 - (1 - v) * t,
  ];
}

/// Thin wrapper so callers don't need to import effects.dart for smoothing.
void applySkinSmoothing(
  FloatImage img,
  Mask skin,
  double unit,
  double amount, {
  double radiusUnits = 0.05,
}) => smoothSkin(img, skin, unit, amount, radiusUnits: radiusUnits);
