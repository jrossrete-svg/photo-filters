import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter_test/flutter_test.dart';
import 'package:photo_filters/filters/soft_glam_filter.dart';
import 'package:photo_filters/models/face_landmarks.dart';
import 'package:photo_filters/models/local_image.dart';
import 'package:photo_filters/rendering/color_space.dart';
import 'package:photo_filters/rendering/face_warp.dart';
import 'package:photo_filters/rendering/feature_retouch.dart';
import 'package:photo_filters/rendering/raster.dart';
import 'package:photo_filters/rendering/skin_retouch.dart';

import 'support/synthetic_face.dart';

const w = 320, h = 400;

/// Synthetic face with iris points (468-477) placed in the eyes.
FaceMesh faceWithIris() {
  final m = syntheticFace(
    width: w,
    height: h,
    cx: 160,
    cy: 200,
    halfWidth: 110,
    halfHeight: 140,
  );
  final pts = m.normalized;
  final g = m.at(w, h);
  for (final (base, eye) in [(468, g.rightEyeCenter), (473, g.leftEyeCenter)]) {
    const r = 6.0;
    final offs = [(0.0, 0.0), (r, 0.0), (0.0, -r), (-r, 0.0), (0.0, r)];
    for (var i = 0; i < 5; i++) {
      pts[(base + i) * 2] = (eye.x + offs[i].$1) / w;
      pts[(base + i) * 2 + 1] = (eye.y + offs[i].$2) / h;
    }
  }
  return m;
}

/// Flat skin-coloured face on a grey background with seeded fine noise.
FloatImage noisyPortrait(FaceGeometry g, {double noise = 0.06}) {
  final img = FloatImage(w, h);
  final (x0, y0, x1, y1) = g.bounds(MeshIndex.faceOval);
  final cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  final rx = (x1 - x0) / 2, ry = (y1 - y0) / 2;
  final rng = SeededRandom(7);
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      final k = (y * w + x) * 3;
      final dx = (x - cx) / rx, dy = (y - cy) / ry;
      if (dx * dx + dy * dy < 1) {
        final n = (rng.nextDouble() - 0.5) * noise;
        img.data[k] = 0.85 + n;
        img.data[k + 1] = 0.66 + n;
        img.data[k + 2] = 0.58 + n;
      } else {
        img.data[k] = 0.35;
        img.data[k + 1] = 0.40;
        img.data[k + 2] = 0.45;
      }
    }
  }
  return img;
}

double variance(FloatImage img, int cx, int cy, int r) {
  var s = 0.0, s2 = 0.0, n = 0;
  for (var y = cy - r; y <= cy + r; y++) {
    for (var x = cx - r; x <= cx + r; x++) {
      final k = (y * img.width + x) * 3;
      final v = luma(img.data[k], img.data[k + 1], img.data[k + 2]);
      s += v;
      s2 += v * v;
      n++;
    }
  }
  final m = s / n;
  return s2 / n - m * m;
}

void main() {
  final mesh = faceWithIris();
  final face = mesh.at(w, h);

  group('Face reshape (warp)', () {
    test('zero strength leaves the image untouched', () {
      final img = noisyPortrait(face);
      final before = Float32List.fromList(img.data);
      applyFaceReshape(img, face, const FaceReshape());
      expect(img.data, before);
    });

    test('pixels far from the face are never moved', () {
      const r = FaceReshape(
        slimJaw: 1,
        narrowNose: 1,
        enlargeEyes: 1,
        plumpLips: 1,
      );
      for (final (x, y) in [(2.0, 2.0), (315.0, 395.0), (5.0, 390.0)]) {
        final (dx, dy) = faceReshapeDisplacement(face, r, x, y);
        expect(dx, 0);
        expect(dy, 0);
      }
      final img = noisyPortrait(face);
      final before = Float32List.fromList(img.data);
      applyFaceReshape(img, face, r);
      expect(img.data[0], before[0]);
      final last = img.data.length - 3;
      expect(img.data[last], before[last]);
    });

    test('is fold-free (no tearing) even at full strength', () {
      const r = FaceReshape(
        slimJaw: 1,
        narrowNose: 1,
        enlargeEyes: 1,
        plumpLips: 1,
      );
      // Backward map p -> p + D(p) must keep a positive Jacobian everywhere.
      var minDet = double.infinity;
      for (var y = 1.0; y < h - 1; y += 2) {
        for (var x = 1.0; x < w - 1; x += 2) {
          final (ax, ay) = faceReshapeDisplacement(face, r, x - 0.5, y);
          final (bx, by) = faceReshapeDisplacement(face, r, x + 0.5, y);
          final (cx, cy) = faceReshapeDisplacement(face, r, x, y - 0.5);
          final (ex, ey) = faceReshapeDisplacement(face, r, x, y + 0.5);
          final j11 = 1 + (bx - ax), j12 = ex - cx;
          final j21 = by - ay, j22 = 1 + (ey - cy);
          minDet = math.min(minDet, j11 * j22 - j12 * j21);
        }
      }
      expect(minDet, greaterThan(0.1));
    });

    test('displacement is smooth (no jumps between neighbours)', () {
      const r = FaceReshape(slimJaw: 1, narrowNose: 1, enlargeEyes: 1);
      var maxStep = 0.0;
      for (var y = 0.0; y < h; y += 1) {
        var prev = faceReshapeDisplacement(face, r, 0, y);
        for (var x = 1.0; x < w; x += 1) {
          final d = faceReshapeDisplacement(face, r, x, y);
          maxStep = math.max(
            maxStep,
            math.max((d.$1 - prev.$1).abs(), (d.$2 - prev.$2).abs()),
          );
          prev = d;
        }
      }
      expect(maxStep, lessThan(0.8));
    });

    test('eyes grow: the upper lid reads from closer to the eye centre', () {
      final c = face.rightEyeCenter;
      final lid = face.p(159);
      final (_, dy) = faceReshapeDisplacement(
        face,
        const FaceReshape(enlargeEyes: 1),
        lid.x,
        lid.y,
      );
      // The lid is above the centre, so the source must be below it.
      expect(lid.y, lessThan(c.y));
      expect(dy, greaterThan(0.5));
    });

    test('jaw slimming pulls the jaw in but leaves the mouth and nose', () {
      const r = FaceReshape(slimJaw: 1);
      final jawR = face.p(172), jawL = face.p(397);
      final dr = faceReshapeDisplacement(face, r, jawR.x, jawR.y);
      final dl = faceReshapeDisplacement(face, r, jawL.x, jawL.y);
      // Image-left jaw reads from further left (content moves right/in).
      expect(dr.$1, lessThan(-1));
      expect(dl.$1, greaterThan(1));
      for (final i in [61, 291, 1, 13]) {
        final p = face.p(i);
        final d = faceReshapeDisplacement(face, r, p.x, p.y);
        expect(d.$1.abs(), lessThan(0.5), reason: 'landmark $i');
      }
    });

    test('nose narrowing does not touch the mouth corners', () {
      const r = FaceReshape(narrowNose: 1);
      final a = face.p(98);
      final d = faceReshapeDisplacement(face, r, a.x, a.y);
      expect(d.$1, lessThan(-0.3)); // reads from further out -> narrower
      for (final i in [61, 291]) {
        final p = face.p(i);
        final m = faceReshapeDisplacement(face, r, p.x, p.y);
        expect(m.$1.abs(), lessThan(0.05));
      }
    });
  });

  group('Skin retouch', () {
    test('guided smoothing removes fine noise but keeps a strong edge', () {
      const n = 64;
      final rgb = Float32List(n * n * 3);
      final rng = SeededRandom(3);
      for (var y = 0; y < n; y++) {
        for (var x = 0; x < n; x++) {
          final base = x < n / 2 ? 0.2 : 0.8;
          final v = base + (rng.nextDouble() - 0.5) * 0.06;
          for (var c = 0; c < 3; c++) {
            rgb[(y * n + x) * 3 + c] = v;
          }
        }
      }
      final out = guidedSmooth(rgb, n, n, radius: 4, eps: 0.01);
      double at(Float32List b, int x, int y) => b[(y * n + x) * 3];
      // Noise in the flat area is reduced a lot.
      var vin = 0.0, vout = 0.0;
      for (var x = 4; x < 24; x++) {
        vin += (at(rgb, x, 20) - 0.2).abs();
        vout += (at(out, x, 20) - 0.2).abs();
      }
      expect(vout, lessThan(vin * 0.5));
      // The step between the halves survives.
      expect(at(out, 40, 30) - at(out, 22, 30), greaterThan(0.5));
    });

    test('smooths skin texture inside the face and leaves background', () {
      final img = noisyPortrait(face);
      final bgBefore = img.data[(10 * w + 10) * 3];
      final cheek = face.p(MeshIndex.rightCheek);
      final v0 = variance(img, cheek.x.round(), cheek.y.round(), 6);
      applySkinRetouch(
        img,
        face,
        const SkinRetouch(smooth: 1, keepTexture: 0, eps: 0.03),
      );
      final v1 = variance(img, cheek.x.round(), cheek.y.round(), 6);
      expect(v1, lessThan(v0 * 0.35));
      expect(img.data[(10 * w + 10) * 3], bgBefore);
    });

    test('brightens a dark under-eye patch', () {
      final img = noisyPortrait(face, noise: 0);
      final lid = face.p(145);
      final py = (lid.y + face.eyeDistance * 0.15).round();
      for (var y = py - 3; y <= py + 3; y++) {
        for (var x = lid.x.round() - 6; x <= lid.x.round() + 6; x++) {
          final k = (y * w + x) * 3;
          img.data[k] *= 0.75;
          img.data[k + 1] *= 0.72;
          img.data[k + 2] *= 0.8;
        }
      }
      final k = (py * w + lid.x.round()) * 3;
      final before = luma(img.data[k], img.data[k + 1], img.data[k + 2]);
      applySkinRetouch(img, face, const SkinRetouch(underEye: 1));
      final after = luma(img.data[k], img.data[k + 1], img.data[k + 2]);
      expect(after, greaterThan(before + 0.05));
    });

    test('tone shift is relative and capped for every skin tone', () {
      for (final skin in [
        [0.95, 0.80, 0.75], // very fair, pink
        [0.80, 0.60, 0.48], // medium
        [0.45, 0.30, 0.22], // deep
      ]) {
        final img = FloatImage(w, h);
        for (var i = 0; i < w * h; i++) {
          img.data.setAll(i * 3, skin);
        }
        final info = applySkinRetouch(
          img,
          face,
          const SkinRetouch(tone: 1, toneL: 4),
        )!;
        final before = rgbToLab(info.mean);
        final after = rgbToLab([
          for (var c = 0; c < 3; c++) info.mean[c] + info.delta[c],
        ]);
        expect((after[0] - before[0]).abs(), lessThan(4.6));
        expect((after[1] - before[1]).abs(), lessThan(7.6));
        expect((after[2] - before[2]).abs(), lessThan(7.6));
      }
    });
  });

  group('Eyes', () {
    test('iris landmarks are used when present, estimated otherwise', () {
      final (c, r) = irisOf(face, right: true);
      expect(c.distanceTo(face.rightEyeCenter), lessThan(0.5));
      expect(r, closeTo(6, 0.01));
      final short = FaceMesh(
        Float32List.fromList(mesh.normalized.sublist(0, 468 * 2)),
      ).at(w, h);
      final (c2, r2) = irisOf(short, right: false);
      expect(c2.distanceTo(short.leftEyeCenter), lessThan(0.5));
      expect(r2, greaterThan(1));
    });
  });

  group('Soft Glam filter', () {
    const f = SoftGlamFilter();
    LocalImage photo() => noisyPortrait(face).toLocal();

    test('has Smooth, Slim and Eyes sliders plus an eye-colour toggle', () {
      expect(f.displayName, 'Soft Glam');
      expect(f.preset.controls.map((c) => c.key), [
        'smooth',
        'slim',
        'eyes',
        'light_iris',
      ]);
    });

    test('leaves a photo without a face unchanged and says why', () {
      final src = photo();
      final out = f.applySync(
        source: src,
        landmarks: FaceLandmarks.none,
        settings: f.preset.defaultSettings(),
      );
      expect(out.image.rgba, src.rgba);
      expect(out.note, contains('No face'));
    });

    test('more Smooth means smoother skin', () {
      final src = photo();
      final cheek = face.p(MeshIndex.rightCheek);
      double v(double smooth) {
        final out = f.applySync(
          source: src,
          landmarks: FaceLandmarks([mesh]),
          settings: f.preset.defaultSettings().withParam('smooth', smooth),
        );
        return variance(
          FloatImage.fromLocal(out.image),
          cheek.x.round(),
          cheek.y.round(),
          6,
        );
      }

      expect(v(1.0), lessThan(v(0.2)));
    });

    test('all sliders at 0 still renders (tone/eyes/lips only)', () {
      final src = photo();
      final out = f.applySync(
        source: src,
        landmarks: FaceLandmarks([mesh]),
        settings: f.preset
            .defaultSettings()
            .withParam('smooth', 0)
            .withParam('slim', 0)
            .withParam('eyes', 0),
      );
      expect(out.image.width, w);
      expect(out.usedFaces, 1);
    });
  });
}
