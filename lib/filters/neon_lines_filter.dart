import 'dart:math' as math;
import 'dart:typed_data';

import '../models/face_landmarks.dart';
import '../models/filter_preset.dart';
import '../rendering/blend_modes.dart';
import '../rendering/color_grade.dart';
import '../rendering/effects.dart';
import '../rendering/face_mask_builder.dart';
import '../rendering/raster.dart';
import 'photo_filter.dart';

/// Neon Lines: glowing neon strokes traced along the face contours, eyes,
/// brows, nose and lips, over a darker, moodier scene. Without a face it
/// falls back to neon-tinted edges of the whole photo.
class NeonLinesFilter extends PhotoFilter {
  const NeonLinesFilter();

  static const _preset = FilterPreset(
    id: 'neon_lines',
    displayName: 'Neon Lines',
    description: 'Glowing neon outlines traced around the face.',
    usesFace: true,
    defaultIntensity: 0.85,
    controls: [
      FilterControl(key: 'glow', label: 'Glow size', defaultValue: 0.5),
    ],
  );

  static const _magenta = [1.0, 0.18, 0.78];
  static const _cyan = [0.15, 0.9, 1.0];
  static const _violet = [0.62, 0.35, 1.0];

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
    final glow = 0.5 + s.param('glow', 0.5);
    // Edge map must come from the original photo, before darkening.
    final edges = faces.isEmpty ? edgeMap(img) : null;

    applyColorGrade(
      img,
      const ColorGrade(
        exposure: -0.75,
        contrast: 0.2,
        saturation: -0.35,
        shadowTint: [0.0, -0.01, 0.04],
        highlightTint: [0.02, -0.02, 0.05],
      ).scaled(t),
    );

    if (edges != null) {
      _neonEdges(img, edges, t, glow);
      return;
    }

    for (final face in faces) {
      final u = face.eyeDistance;
      final groups = <(List<double>, List<List<Vec2>>, bool)>[
        (_magenta, [face.faceOval], true),
        (_cyan, [FaceMaskBuilder.expand(face.faceOval, 1.1)], true),
        (_cyan, [face.rightEye, face.leftEye], true),
        (
          _violet,
          [
            face.points(MeshIndex.rightBrowUpper),
            face.points(MeshIndex.leftBrowUpper),
          ],
          false,
        ),
        (
          _cyan,
          [
            face.points(MeshIndex.noseBridge.sublist(1)),
            face.points(MeshIndex.noseBottom),
          ],
          false,
        ),
        (_magenta, [face.lipsOuter], true),
      ];
      for (final g in groups) {
        final allPts = [for (final p in g.$2) ...p];
        final reach = u * 0.35 * glow;
        final halo = Mask.aroundPoints(img.width, img.height, allPts, reach);
        final core = Mask.aroundPoints(img.width, img.height, allPts, u * 0.05);
        for (final path in g.$2) {
          halo.strokePath(
            path,
            u * 0.012,
            closed: g.$3,
            softness: u * 0.07 * glow,
          );
          core.strokePath(path, u * 0.011, closed: g.$3, softness: 0.75);
        }
        // Wide soft glow, then a brighter tight glow, then the hot core.
        tintMask(img, halo, PixelBlend.screen, g.$1, 0.85 * t);
        final tight = Mask.aroundPoints(
          img.width,
          img.height,
          allPts,
          u * 0.12,
        );
        for (final path in g.$2) {
          tight.strokePath(path, u * 0.012, closed: g.$3, softness: u * 0.022);
        }
        tintMask(img, tight, PixelBlend.screen, g.$1, 0.9 * t);
        final hot = [for (final c in g.$1) 0.55 + 0.45 * c];
        tintMask(img, core, PixelBlend.screen, hot, t);
      }
    }
  }

  void _neonEdges(FloatImage img, Float32List edges, double t, double glow) {
    final w = img.width, h = img.height;
    final halo = Float32List.fromList(edges);
    gaussianBlur(halo, w, h, 1, math.max(1.0, math.max(w, h) * 0.006 * glow));
    final d = img.data;
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        final i = y * w + x;
        final m = (x / w + y / h) / 2; // magenta -> cyan diagonal gradient
        final col = [
          _magenta[0] + (_cyan[0] - _magenta[0]) * m,
          _magenta[1] + (_cyan[1] - _magenta[1]) * m,
          _magenta[2] + (_cyan[2] - _magenta[2]) * m,
        ];
        final a = clamp01(halo[i] * 2.2) * 0.8 * t + edges[i] * 0.7 * t;
        if (a <= 0.003) continue;
        for (var c = 0; c < 3; c++) {
          d[i * 3 + c] = 1 - (1 - d[i * 3 + c]) * (1 - col[c] * clamp01(a));
        }
      }
    }
  }
}
