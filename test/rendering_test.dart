import 'dart:typed_data';

import 'package:flutter_test/flutter_test.dart';
import 'package:photo_filters/models/face_landmarks.dart';
import 'package:photo_filters/models/filter_preset.dart';
import 'package:photo_filters/models/local_image.dart';
import 'package:photo_filters/rendering/blend_modes.dart';
import 'package:photo_filters/rendering/color_grade.dart';
import 'package:photo_filters/rendering/effects.dart';
import 'package:photo_filters/rendering/face_mask_builder.dart';
import 'package:photo_filters/rendering/raster.dart';

import 'support/synthetic_face.dart';

void main() {
  group('SeededRandom', () {
    test('is deterministic and in range', () {
      final a = SeededRandom(42), b = SeededRandom(42), c = SeededRandom(43);
      final sa = [for (var i = 0; i < 100; i++) a.nextDouble()];
      final sb = [for (var i = 0; i < 100; i++) b.nextDouble()];
      final sc = [for (var i = 0; i < 100; i++) c.nextDouble()];
      expect(sa, sb);
      expect(sa, isNot(sc));
      expect(sa.every((v) => v >= 0 && v < 1), isTrue);
    });
    test('matches a known xorshift32 sequence (VM and web must agree)', () {
      final r = SeededRandom(1);
      expect(
        [r.nextUint32(), r.nextUint32(), r.nextUint32()],
        [270369, 67634689, 2647435461],
      );
    });
  });

  group('Mask', () {
    test('fills a polygon with roughly the right area', () {
      final m = Mask(0, 0, 100, 100, 100, 100);
      m.fillPolygon(const [
        Vec2(10, 10),
        Vec2(60, 10),
        Vec2(60, 50),
        Vec2(10, 50),
      ]);
      final area = m.data.fold<double>(0, (s, v) => s + v);
      expect(area, closeTo(2000, 60));
      expect(m.atImage(30, 30), 1.0);
      expect(m.atImage(80, 80), 0.0);
    });
    test('feathering roughly preserves total coverage', () {
      final m = Mask(0, 0, 120, 120, 120, 120);
      m.fillPolygon(const [
        Vec2(30, 30),
        Vec2(90, 30),
        Vec2(90, 90),
        Vec2(30, 90),
      ]);
      final before = m.data.fold<double>(0, (s, v) => s + v);
      m.feather(4);
      final after = m.data.fold<double>(0, (s, v) => s + v);
      expect(after, closeTo(before, before * 0.03));
      expect(m.atImage(30, 60), inExclusiveRange(0.2, 0.8)); // soft edge
    });
    test('strokes are anti-aliased lines of the requested width', () {
      final m = Mask(0, 0, 50, 50, 50, 50);
      m.strokeSegment(const Vec2(5, 25), const Vec2(45, 25), 2);
      expect(m.atImage(25, 25), 1.0);
      expect(m.atImage(25, 26), 1.0);
      expect(m.atImage(25, 35), 0.0);
    });
    test('region masks clamp to the image', () {
      final m = Mask.region(50, 50, -20, -20, 70, 70, 5);
      expect(m.left, 0);
      expect(m.top, 0);
      expect(m.width, 50);
      expect(m.height, 50);
    });
  });

  group('Blend modes', () {
    test('standard formulas', () {
      expect(blendChannel(PixelBlend.screen, 0.5, 0.5), closeTo(0.75, 1e-9));
      expect(blendChannel(PixelBlend.multiply, 0.5, 0.5), closeTo(0.25, 1e-9));
      expect(blendChannel(PixelBlend.overlay, 0.25, 0.5), closeTo(0.25, 1e-9));
      expect(blendChannel(PixelBlend.softLight, 0.3, 0.5), closeTo(0.3, 1e-9));
      expect(blendChannel(PixelBlend.add, 0.8, 0.5), 1.0);
    });
    test('color blend keeps luminance', () {
      final img = FloatImage(1, 1)..data.setAll(0, [0.4, 0.4, 0.4]);
      blendPixel(img, 0, PixelBlend.color, 0.9, 0.2, 0.3, 1);
      expect(luma(img.data[0], img.data[1], img.data[2]), closeTo(0.4, 1e-6));
      expect(img.data[0], greaterThan(img.data[1]));
    });
  });

  group('Colour grading', () {
    test('neutral grade is (nearly) identity', () {
      final img = FloatImage(4, 1)
        ..data.setAll(0, [
          0.1,
          0.2,
          0.3,
          0.5,
          0.5,
          0.5,
          0.7,
          0.6,
          0.2,
          0.0,
          0.0,
          0.0,
        ]);
      final before = Float32List.fromList(img.data);
      applyColorGrade(img, const ColorGrade());
      for (var i = 0; i < before.length; i++) {
        expect(img.data[i], closeTo(before[i], 1e-6));
      }
    });
    test('warmth raises red relative to blue; exposure brightens', () {
      final img = FloatImage(1, 1)..data.setAll(0, [0.4, 0.4, 0.4]);
      applyColorGrade(img, const ColorGrade(warmth: 1, exposure: 0.5));
      expect(img.data[0], greaterThan(img.data[2]));
      expect(luma(img.data[0], img.data[1], img.data[2]), greaterThan(0.4));
    });
  });

  group('Face masks on a synthetic face', () {
    const w = 300, h = 400;
    final mesh = syntheticFace(
      width: w,
      height: h,
      cx: 150,
      cy: 200,
      halfWidth: 90,
      halfHeight: 120,
    );
    final geo = mesh.at(w, h);

    test('geometry helpers', () {
      expect(geo.eyeDistance, closeTo(63, 1));
      expect(
        geo.rightEyeCenter.x,
        lessThan(geo.leftEyeCenter.x),
      ); // subject right = image left
    });
    test('skin mask excludes eyes and lips but covers cheeks', () {
      final skin = FaceMaskBuilder(geo).skin();
      final cheek = geo.p(MeshIndex.rightCheek);
      final eye = geo.rightEyeCenter;
      final lip = geo.p(14).lerp(geo.p(17), 0.5);
      expect(skin.atImage(cheek.x.round(), cheek.y.round()), greaterThan(0.8));
      expect(skin.atImage(eye.x.round(), eye.y.round()), lessThan(0.2));
      expect(skin.atImage(lip.x.round(), lip.y.round()), lessThan(0.2));
      expect(skin.atImage(5, 5), 0);
    });
    test('lip mask covers lips, not the open mouth centre or chin', () {
      final lips = FaceMaskBuilder(geo).lips();
      final upper = geo.p(0).lerp(geo.p(13), 0.5);
      expect(lips.atImage(upper.x.round(), upper.y.round()), greaterThan(0.5));
      final chin = geo.p(MeshIndex.chin);
      expect(lips.atImage(chin.x.round(), chin.y.round() - 5), lessThan(0.05));
    });
    test('freckles are deterministic, seeded, and stay on the skin', () {
      final src = syntheticPortrait(w, h, mesh);
      FloatImage run(int seed) {
        final img = FloatImage.fromLocal(src);
        paintFreckles(
          img,
          geo,
          FaceMaskBuilder(geo).skin(),
          seed: seed,
          density: 0.8,
          opacity: 1,
        );
        return img;
      }

      final a = run(7), b = run(7), c = run(8);
      expect(a.data, b.data);
      expect(a.data, isNot(c.data));
      final base = FloatImage.fromLocal(src);
      var changedOutsideFace = 0, changedInside = 0;
      final oval = FaceMaskBuilder(geo).faceOval(feather: 0);
      for (var i = 0; i < w * h; i++) {
        if ((a.data[i * 3] - base.data[i * 3]).abs() > 1e-4) {
          if (oval.atImage(i % w, i ~/ w) == 0) {
            changedOutsideFace++;
          } else {
            changedInside++;
          }
        }
      }
      expect(changedInside, greaterThan(100));
      expect(changedOutsideFace, 0);
    });
  });

  group('LocalImage', () {
    test('downscaleToFit keeps aspect ratio and averages', () {
      final img = LocalImage.filled(400, 200, 10, 20, 30);
      final small = img.downscaleToFit(100);
      expect(small.width, 100);
      expect(small.height, 50);
      expect(small.rgba.sublist(0, 4), [10, 20, 30, 255]);
      expect(identical(img.downscaleToFit(1000), img), isTrue);
    });
  });

  group('Serialisation', () {
    test('landmarks round-trip and pixel normalisation', () {
      final lm = FaceLandmarks.fromPixelFaces(
        [
          [(50.0, 100.0), (100.0, 0.0)],
        ],
        200,
        100,
      );
      expect(lm.faces.single.normalized, [0.25, 1.0, 0.5, 0.0]);
      final back = FaceLandmarks.decode(lm.encode());
      expect(back.faces.single.normalized, lm.faces.single.normalized);
      expect(back.usable, isEmpty); // only 2 points: not a full mesh
    });
    test('settings round-trip', () {
      const s = FilterSettings(
        intensity: 0.4,
        params: {'density': 0.7},
        seed: 99,
      );
      final back = FilterSettings.decode(s.encode());
      expect(back.intensity, 0.4);
      expect(back.param('density', 0), 0.7);
      expect(back.seed, 99);
    });
  });
}
