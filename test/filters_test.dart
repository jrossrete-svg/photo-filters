import 'dart:typed_data';

import 'package:flutter_test/flutter_test.dart';
import 'package:photo_filters/filters/filter_registry.dart';
import 'package:photo_filters/models/face_landmarks.dart';
import 'package:photo_filters/models/local_image.dart';

import 'support/synthetic_face.dart';

double meanAbsDiff(Uint8List a, Uint8List b) {
  var s = 0;
  for (var i = 0; i < a.length; i++) {
    s += (a[i] - b[i]).abs();
  }
  return s / a.length;
}

void main() {
  const w = 240, h = 320;
  final frontal = syntheticFace(
    width: w,
    height: h,
    cx: 120,
    cy: 150,
    halfWidth: 70,
    halfHeight: 95,
  );
  final threeQuarter = syntheticFace(
    width: w,
    height: h,
    cx: 120,
    cy: 150,
    halfWidth: 70,
    halfHeight: 95,
    turn: 0.55,
  );
  final photo = syntheticPortrait(w, h, frontal);

  test(
    'there are exactly seven filters with unique ids and the planned names',
    () {
      expect(allFilters.map((f) => f.displayName), [
        'Sunny Effect',
        'Soft Freckles',
        'Neon Lines',
        'Light',
        'Rosy Haze',
        'SERUM',
        'Glow Effect with Makeup',
      ]);
      expect(allFilters.map((f) => f.id).toSet().length, 7);
    },
  );

  for (final filter in allFilters) {
    group(filter.displayName, () {
      final settings = filter.preset.defaultSettings();

      test('changes the photo, keeps size, never mutates the source', () async {
        final before = Uint8List.fromList(photo.rgba);
        final out = await filter.apply(
          source: photo,
          landmarks: FaceLandmarks([frontal]),
          settings: settings,
        );
        expect(photo.rgba, before, reason: 'source must not be modified');
        expect(out.image.width, w);
        expect(out.image.height, h);
        expect(identical(out.image.rgba, photo.rgba), isFalse);
        expect(meanAbsDiff(out.image.rgba, photo.rgba), greaterThan(1.0));
        expect(out.usedFaces, filter.preset.usesFace ? 1 : 1);
        for (var i = 3; i < out.image.rgba.length; i += 4) {
          if (out.image.rgba[i] != 255) fail('alpha must stay opaque');
        }
      });

      test('is deterministic', () {
        final a = filter.applySync(
          source: photo,
          landmarks: FaceLandmarks([frontal]),
          settings: settings,
        );
        final b = filter.applySync(
          source: photo,
          landmarks: FaceLandmarks([frontal]),
          settings: settings,
        );
        expect(a.image.rgba, b.image.rgba);
      });

      test('intensity 0 returns the original pixels', () {
        final out = filter.applySync(
          source: photo,
          landmarks: FaceLandmarks([frontal]),
          settings: settings.copyWith(intensity: 0),
        );
        expect(out.image.rgba, photo.rgba);
      });

      test('higher intensity changes the photo more', () {
        double diff(double t) => meanAbsDiff(
          filter
              .applySync(
                source: photo,
                landmarks: FaceLandmarks([frontal]),
                settings: settings.copyWith(intensity: t),
              )
              .image
              .rgba,
          photo.rgba,
        );
        expect(diff(1.0), greaterThan(diff(0.3)));
      });

      test('degrades gracefully with no face', () {
        for (final lm in [null, FaceLandmarks.none]) {
          final out = filter.applySync(
            source: photo,
            landmarks: lm,
            settings: settings,
          );
          expect(out.image.width, w);
          expect(out.usedFaces, 0);
          if (filter.preset.usesFace) {
            expect(out.note, isNotNull);
          } else {
            expect(out.note, isNull);
          }
        }
      });

      test('works on a three-quarter (turned) face', () {
        final out = filter.applySync(
          source: photo,
          landmarks: FaceLandmarks([threeQuarter]),
          settings: settings,
        );
        expect(out.usedFaces, 1);
        expect(meanAbsDiff(out.image.rgba, photo.rgba), greaterThan(1.0));
      });

      test('handles several faces', () {
        final a = syntheticFace(
          width: w,
          height: h,
          cx: 60,
          cy: 100,
          halfWidth: 40,
          halfHeight: 55,
        );
        final b = syntheticFace(
          width: w,
          height: h,
          cx: 180,
          cy: 220,
          halfWidth: 40,
          halfHeight: 55,
        );
        final out = filter.applySync(
          source: photo,
          landmarks: FaceLandmarks([a, b]),
          settings: settings,
        );
        expect(out.usedFaces, 2);
      });
    });
  }

  test(
    'face filters only touch the face region when the global grade is off',
    () {
      // Soft Freckles: compare a background pixel with and without a face.
      final f = filterById('soft_freckles');
      final s = f.preset.defaultSettings();
      final withFace = f.applySync(
        source: photo,
        landmarks: FaceLandmarks([frontal]),
        settings: s,
      );
      final noFace = f.applySync(
        source: photo,
        landmarks: FaceLandmarks.none,
        settings: s,
      );
      int px(LocalImage i, int x, int y) => i.rgba[(y * w + x) * 4];
      expect(
        px(withFace.image, 5, 5),
        px(noFace.image, 5, 5),
      ); // background identical
      final cheek = frontal.at(w, h).p(MeshIndex.rightCheek);
      expect(
        px(withFace.image, cheek.x.round(), cheek.y.round()),
        isNot(px(noFace.image, cheek.x.round(), cheek.y.round())),
      );
    },
  );

  test('Neon Lines draws bright strokes along the face outline', () {
    final f = filterById('neon_lines');
    final out = f.applySync(
      source: photo,
      landmarks: FaceLandmarks([frontal]),
      settings: f.preset.defaultSettings(),
    );
    final top = frontal.at(w, h).p(MeshIndex.forehead);
    final i = (top.y.round() * w + top.x.round()) * 4;
    final brightness =
        out.image.rgba[i] + out.image.rgba[i + 1] + out.image.rgba[i + 2];
    final bg = (5 * w + 5) * 4;
    final bgBrightness =
        out.image.rgba[bg] + out.image.rgba[bg + 1] + out.image.rgba[bg + 2];
    expect(brightness, greaterThan(bgBrightness + 200));
  });

  test('preview and export resolutions give consistent results', () {
    // Same normalised landmarks on a 2x image: the effect should look the
    // same after downscaling (mean difference small).
    final big = syntheticPortrait(w * 2, h * 2, frontal);
    for (final f in allFilters) {
      final s = f.preset.defaultSettings();
      final small = f
          .applySync(
            source: photo,
            landmarks: FaceLandmarks([frontal]),
            settings: s,
          )
          .image;
      final large = f
          .applySync(
            source: big,
            landmarks: FaceLandmarks([frontal]),
            settings: s,
          )
          .image;
      final down = large.downscaleToFit(w > h ? w : h);
      expect(
        meanAbsDiff(down.rgba, small.rgba),
        lessThan(12),
        reason: '${f.displayName} should be resolution independent',
      );
    }
  });
}
