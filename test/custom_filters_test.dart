import 'dart:convert';
import 'dart:io';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:flutter_test/flutter_test.dart';
import 'package:image/image.dart' as img;
import 'package:photo_filters/custom/cube_lut.dart';
import 'package:photo_filters/custom/custom_filter.dart';
import 'package:photo_filters/custom/custom_filter_library.dart';
import 'package:photo_filters/custom/custom_filter_registry.dart';
import 'package:photo_filters/custom/custom_filter_spec.dart';
import 'package:photo_filters/custom/custom_filter_store.dart';
import 'package:photo_filters/custom/filter_file_limits.dart';
import 'package:photo_filters/custom/transparent_png.dart';
import 'package:photo_filters/filters/filter_registry.dart';
import 'package:photo_filters/models/face_landmarks.dart';
import 'package:photo_filters/models/filter_preset.dart';
import 'package:photo_filters/models/local_image.dart';

import 'support/synthetic_face.dart';

Matcher throwsFilterFile([String? containing]) => throwsA(
  isA<FilterFileException>().having(
    (e) => e.message,
    'message',
    containing == null ? anything : contains(containing),
  ),
);

/// PNG helper: [alphaAt] returns alpha for each pixel.
Uint8List makePng(
  int w,
  int h, {
  int Function(int x, int y)? alphaAt,
  bool withAlpha = true,
  (int, int, int) color = (255, 200, 40),
}) {
  final im = img.Image(width: w, height: h, numChannels: withAlpha ? 4 : 3);
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      final a = alphaAt?.call(x, y) ?? 255;
      if (withAlpha) {
        im.setPixelRgba(x, y, color.$1, color.$2, color.$3, a);
      } else {
        im.setPixelRgb(x, y, color.$1, color.$2, color.$3);
      }
    }
  }
  return img.encodePng(im);
}

/// A disc sticker: opaque inside a circle, transparent outside.
Uint8List discPng(int size) => makePng(
  size,
  size,
  alphaAt: (x, y) {
    final d = math.sqrt(math.pow(x - size / 2, 2) + math.pow(y - size / 2, 2));
    return d < size * 0.4 ? 255 : 0;
  },
);

String cubeText(
  int n,
  (double, double, double) Function(double, double, double) f,
) {
  final sb = StringBuffer('TITLE "Test"\nLUT_3D_SIZE $n\n');
  for (var b = 0; b < n; b++) {
    for (var g = 0; g < n; g++) {
      for (var r = 0; r < n; r++) {
        final o = f(r / (n - 1), g / (n - 1), b / (n - 1));
        sb.writeln('${o.$1} ${o.$2} ${o.$3}');
      }
    }
  }
  return sb.toString();
}

LocalImage gradient(int w, int h) {
  final px = Uint8List(w * h * 4);
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      final i = (y * w + x) * 4;
      px[i] = (x * 255 ~/ (w - 1));
      px[i + 1] = (y * 255 ~/ (h - 1));
      px[i + 2] = 128;
      px[i + 3] = 255;
    }
  }
  return LocalImage(w, h, px);
}

double meanAbsDiff(Uint8List a, Uint8List b) {
  var s = 0;
  for (var i = 0; i < a.length; i++) {
    s += (a[i] - b[i]).abs();
  }
  return s / a.length;
}

void main() {
  group('.cube LUT parser', () {
    test('identity LUT leaves the photo unchanged', () {
      final (lut, title) = CubeLut.parse(cubeText(17, (r, g, b) => (r, g, b)));
      expect(title, 'Test');
      expect(lut.size, 17);
      final spec = CustomFilterSpec(name: 'id', lut: lut);
      final src = gradient(64, 48);
      final out = CustomFilter('custom-test1', spec).applySync(
        source: src,
        landmarks: null,
        settings: const FilterSettings(intensity: 1),
      );
      expect(meanAbsDiff(src.rgba, out.image.rgba), lessThan(0.6));
    });

    test('invert LUT inverts, scaled by intensity', () {
      final (lut, _) = CubeLut.parse(
        cubeText(2, (r, g, b) => (1 - r, 1 - g, 1 - b)),
      );
      final (r, g, b) = lut.sample(0.2, 0.7, 1.0);
      expect(r, closeTo(0.8, 1e-6));
      expect(g, closeTo(0.3, 1e-6));
      expect(b, closeTo(0.0, 1e-6));
      final f = CustomFilter(
        'custom-test2',
        CustomFilterSpec(name: 'inv', lut: lut),
      );
      final src = gradient(32, 32);
      final zero = f.applySync(
        source: src,
        landmarks: null,
        settings: const FilterSettings(intensity: 0),
      );
      expect(zero.image.rgba, src.rgba);
      final half = f.applySync(
        source: src,
        landmarks: null,
        settings: const FilterSettings(intensity: 0.5),
      );
      // Half-way to the inverse is mid grey.
      expect(half.image.rgba[0], closeTo(128, 1));
    });

    test('rejects bad sizes, wrong row counts, junk and 1D LUTs', () {
      expect(
        () => CubeLut.parse('LUT_3D_SIZE 1\n0 0 0\n'),
        throwsFilterFile('between'),
      );
      expect(
        () => CubeLut.parse('LUT_3D_SIZE 66\n'),
        throwsFilterFile('between'),
      );
      expect(
        () => CubeLut.parse('LUT_3D_SIZE 2\n0 0 0\n'),
        throwsFilterFile('rows'),
      );
      expect(() => CubeLut.parse('LUT_1D_SIZE 4\n'), throwsFilterFile('1D'));
      expect(
        () => CubeLut.parse('<script>alert(1)</script>'),
        throwsFilterFile('Unknown keyword'),
      );
      expect(
        () => CubeLut.parse('LUT_3D_SIZE 2\n0 0 NaN\n'),
        throwsFilterFile('invalid number'),
      );
      expect(() => CubeLut.parse('0 0 0\n'), throwsFilterFile('LUT_3D_SIZE'));
      expect(
        () => CubeLut.parse('LUT_3D_SIZE 2\n0 0\n'),
        throwsFilterFile('exactly 3'),
      );
      final good = cubeText(2, (r, g, b) => (r, g, b));
      expect(
        () => CubeLut.parse('${good}0 0 0\n'),
        throwsFilterFile('too many'),
      );
    });

    test('accepts 65³ and the 16-bit storage form round-trips', () {
      final lut = CubeLut.identity(65);
      final back = CubeLut.fromRgb16Base64(65, lut.toRgb16Base64());
      expect(back.size, 65);
      for (var i = 0; i < lut.table.length; i += 997) {
        expect(back.table[i], closeTo(lut.table[i], 1 / 65535));
      }
      final parsed = CubeLut.parse(CubeLut.identity(5).toCubeText()).$1;
      expect(parsed.table, CubeLut.identity(5).table);
    });

    test('DOMAIN_MIN/MAX are baked in', () {
      final text =
          'DOMAIN_MIN 0 0 0\nDOMAIN_MAX 2 2 2\n${cubeText(2, (r, g, b) => (r, g, b)).split('\n').skip(1).join('\n')}';
      final (lut, _) = CubeLut.parse(text);
      // Input 1.0 is half-way through a 0..2 domain.
      expect(lut.sample(1, 1, 1).$1, closeTo(0.5, 1e-6));
    });
  });

  group('transparent PNG checks', () {
    test('accepts a sticker with a transparent background', () {
      final t = validateTransparentPng(discPng(64));
      expect(t.width, 64);
      expect(looksLikePng(t.png), isTrue);
    });

    test(
      'rejects opaque PNGs, PNGs without alpha, and fully transparent ones',
      () {
        expect(
          () => validateTransparentPng(makePng(32, 32)),
          throwsFilterFile('opaque'),
        );
        expect(
          () => validateTransparentPng(makePng(32, 32, withAlpha: false)),
          throwsFilterFile('no transparency'),
        );
        expect(
          () => validateTransparentPng(makePng(32, 32, alphaAt: (_, _) => 0)),
          throwsFilterFile('completely transparent'),
        );
      },
    );

    test('rejects photos (JPEG/HEIC) even when renamed', () {
      final jpeg = img.encodeJpg(img.Image(width: 8, height: 8));
      expect(() => validateTransparentPng(jpeg), throwsFilterFile('JPEG'));
      expect(
        () => classifyFilterFile('sticker.png', jpeg),
        throwsFilterFile('photo'),
      );
      expect(
        () => classifyFilterFile('look.cube', jpeg),
        throwsFilterFile('photo'),
      );
      final heic = Uint8List.fromList([
        0,
        0,
        0,
        24,
        ...'ftypheic'.codeUnits,
        0,
        0,
        0,
        0,
      ]);
      expect(
        () => classifyFilterFile('x.json', heic),
        throwsFilterFile('HEIC'),
      );
    });

    test('rejects unsupported extensions and oversize files', () {
      expect(
        () => classifyFilterFile('notes.txt', Uint8List.fromList([65])),
        throwsFilterFile('Unsupported'),
      );
      expect(
        () => classifyFilterFile(
          'big.cube',
          Uint8List(FilterFileLimits.maxFileBytes + 1),
        ),
        throwsFilterFile('5 MB'),
      );
      expect(
        () => classifyFilterFile('fake.png', Uint8List.fromList([1, 2, 3])),
        throwsFilterFile('Unsupported'),
      );
    });

    test('downscales big overlays to 2048 px', () {
      final big = makePng(2600, 300, alphaAt: (x, _) => x % 255);
      final t = validateTransparentPng(big);
      expect(math.max(t.width, t.height), 2048);
    });

    test('rejects absurd dimensions before decoding', () {
      // Hand-made header claiming 20000 x 20000.
      final b = BytesBuilder()
        ..add([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])
        ..add([0, 0, 0, 13])
        ..add('IHDR'.codeUnits)
        ..add([0, 0, 0x4E, 0x20, 0, 0, 0x4E, 0x20, 8, 6, 0, 0, 0])
        ..add([0, 0, 0, 0]);
      expect(
        () => validateTransparentPng(b.toBytes()),
        throwsFilterFile('too large'),
      );
    });
  });

  group('JSON presets', () {
    String preset(Map<String, Object?> extra) => jsonEncode({
      'format': 'photo-effects-filter',
      'version': 1,
      'name': 'Test',
      ...extra,
    });
    final pngData = 'data:image/png;base64,${base64Encode(discPng(32))}';

    test('round-trips all three layers', () {
      final spec = CustomFilterSpec.decode(
        preset({
          'lut': {'cube': cubeText(3, (r, g, b) => (g, r, b))},
          'overlay': {'image': pngData, 'blend': 'soft-light', 'opacity': 0.5},
          'sticker': {
            'image': pngData,
            'anchor': 'nose',
            'scale': 1.5,
            'offsetY': 0.1,
            'opacity': 0.9,
          },
        }),
      );
      final again = CustomFilterSpec.decode(spec.encode());
      expect(again.name, 'Test');
      expect(again.lut!.size, 3);
      expect(again.overlay!.blend, 'soft-light');
      expect(again.sticker!.anchor, StickerAnchor.nose);
      expect(again.sticker!.scale, 1.5);
      expect(again.encode(), spec.encode());
    });

    test('rejects unknown fields anywhere (no executable or extra data)', () {
      expect(
        () => CustomFilterSpec.decode(
          preset({
            'lut': {'cube': cubeText(2, (r, g, b) => (r, g, b))},
            'onload': 'alert(1)',
          }),
        ),
        throwsFilterFile('unsupported field'),
      );
      expect(
        () => CustomFilterSpec.decode(
          preset({
            'overlay': {'image': pngData, 'script': 'x'},
          }),
        ),
        throwsFilterFile('unsupported field'),
      );
    });

    test('rejects URLs and non-PNG images (nothing is ever fetched)', () {
      expect(
        () => CustomFilterSpec.decode(
          preset({
            'overlay': {'image': 'https://example.com/a.png'},
          }),
        ),
        throwsFilterFile('Links are not allowed'),
      );
      expect(
        () => CustomFilterSpec.decode(
          preset({
            'sticker': {'image': '//evil/a.png', 'anchor': 'eyes'},
          }),
        ),
        throwsFilterFile('Links are not allowed'),
      );
      final jpeg = base64Encode(img.encodeJpg(img.Image(width: 8, height: 8)));
      expect(
        () => CustomFilterSpec.decode(
          preset({
            'overlay': {'image': 'data:image/jpeg;base64,$jpeg'},
          }),
        ),
        throwsFilterFile(),
      );
      expect(
        () => CustomFilterSpec.decode(
          preset({
            'overlay': {'image': 'data:image/png;base64,$jpeg'},
          }),
        ),
        throwsFilterFile('JPEG'),
      );
    });

    test('rejects wrong format/version, bad numbers and empty presets', () {
      expect(
        () => CustomFilterSpec.decode(
          '{"format":"other","version":1,"name":"x"}',
        ),
        throwsFilterFile('format'),
      );
      expect(
        () => CustomFilterSpec.decode(preset({'version': 2})),
        throwsFilterFile('version'),
      );
      expect(
        () => CustomFilterSpec.decode(preset({})),
        throwsFilterFile('at least one'),
      );
      expect(
        () => CustomFilterSpec.decode(
          preset({
            'overlay': {'image': pngData, 'opacity': 3},
          }),
        ),
        throwsFilterFile('opacity'),
      );
      expect(
        () => CustomFilterSpec.decode(
          preset({
            'overlay': {'image': pngData, 'blend': 'difference'},
          }),
        ),
        throwsFilterFile('blend'),
      );
      expect(
        () => CustomFilterSpec.decode(
          preset({
            'sticker': {'image': pngData, 'anchor': 'ear'},
          }),
        ),
        throwsFilterFile('anchor'),
      );
      expect(
        () => CustomFilterSpec.decode('[1,2]'),
        throwsFilterFile('JSON object'),
      );
      expect(
        () => CustomFilterSpec.decode('{not json'),
        throwsFilterFile('could not be read'),
      );
      expect(
        () => CustomFilterSpec.decode(preset({'name': 42})),
        throwsFilterFile('name'),
      );
    });

    test('sanitizes names', () {
      expect(sanitizeFilterName('  Warm\u202E  look\u0000\n '), 'Warm look');
      expect(sanitizeFilterName('\u200B\u200B'), 'My filter');
      expect(
        sanitizeFilterName('x' * 100).length,
        FilterFileLimits.maxNameLength,
      );
      expect(
        sanitizeFilterName('<b>Bold</b>'),
        '<b>Bold</b>',
      ); // shown as plain text only
      final spec = CustomFilterSpec.decode(
        preset({
          'name': '\u2066Evil\u2069 name',
          'lut': {'cube': cubeText(2, (r, g, b) => (r, g, b))},
        }),
      );
      expect(spec.name, 'Evil name');
    });
  });

  group('rendering custom layers', () {
    const w = 240, h = 320;
    final mesh = syntheticFace(
      width: w,
      height: h,
      cx: 120,
      cy: 150,
      halfWidth: 70,
      halfHeight: 95,
    );
    final photo = syntheticPortrait(w, h, mesh);
    final faces = FaceLandmarks([mesh]);

    test('overlay with screen blend brightens and covers the photo', () {
      final overlay = validateTransparentPng(
        makePng(40, 30, alphaAt: (x, _) => 100 + x),
      );
      final f = CustomFilter(
        'custom-ov',
        CustomFilterSpec(
          name: 'o',
          overlay: OverlayLayer(image: overlay, blend: 'screen', opacity: 1),
        ),
      );
      final out = f.applySync(
        source: photo,
        landmarks: null,
        settings: const FilterSettings(intensity: 1),
      );
      var brighter = 0;
      for (var i = 0; i < photo.rgba.length; i += 4) {
        if (out.image.rgba[i] >= photo.rgba[i]) brighter++;
      }
      expect(brighter, photo.rgba.length ~/ 4);
      expect(meanAbsDiff(photo.rgba, out.image.rgba), greaterThan(5));
    });

    test(
      'sticker lands on the eyes and nowhere else; skipped without a face',
      () {
        final sticker = validateTransparentPng(discPng(64));
        final f = CustomFilter(
          'custom-st',
          CustomFilterSpec(
            name: 's',
            sticker: StickerLayer(image: sticker, anchor: StickerAnchor.eyes),
          ),
        );
        final out = f.applySync(
          source: photo,
          landmarks: faces,
          settings: const FilterSettings(intensity: 1),
        );
        expect(out.usedFaces, 1);
        final g = mesh.at(w, h);
        final mid = g.rightEyeCenter.lerp(g.leftEyeCenter, 0.5);
        int idx(double x, double y) => (y.round() * w + x.round()) * 4;
        // Disc colour (255, 200, 40) at the centre between the eyes.
        final c = idx(mid.x, mid.y);
        expect(out.image.rgba[c], closeTo(255, 2));
        expect(out.image.rgba[c + 2], closeTo(40, 2));
        // Corners untouched.
        expect(out.image.rgba.sublist(0, 4), photo.rgba.sublist(0, 4));
        final last = photo.rgba.length - 4;
        expect(out.image.rgba.sublist(last), photo.rgba.sublist(last));

        final none = f.applySync(
          source: photo,
          landmarks: FaceLandmarks.none,
          settings: const FilterSettings(intensity: 1),
        );
        expect(none.image.rgba, photo.rgba);
        expect(none.note, contains('No face'));
      },
    );

    test('sticker rotates with a tilted face', () {
      // Wide bar sticker: rotation moves its ends up/down.
      final bar = validateTransparentPng(
        makePng(80, 16, alphaAt: (_, y) => y > 3 && y < 12 ? 255 : 0),
      );
      final f = CustomFilter(
        'custom-rot',
        CustomFilterSpec(
          name: 'r',
          sticker: StickerLayer(image: bar, anchor: StickerAnchor.eyes),
        ),
      );
      // Tilt the mesh by 25 degrees around its centre.
      final n = mesh.normalized;
      final tilted = Float32List(n.length);
      const a = 25 * math.pi / 180;
      for (var i = 0; i < n.length; i += 2) {
        final x = n[i] * w - 120, y = n[i + 1] * h - 150;
        tilted[i] = (120 + x * math.cos(a) - y * math.sin(a)) / w;
        tilted[i + 1] = (150 + x * math.sin(a) + y * math.cos(a)) / h;
      }
      final tm = FaceMesh(tilted);
      final out = f.applySync(
        source: photo,
        landmarks: FaceLandmarks([tm]),
        settings: const FilterSettings(intensity: 1),
      );
      final g = tm.at(w, h);
      // The sticker follows the (rotated) eye line: both eye centres are covered.
      for (final p in [g.rightEyeCenter, g.leftEyeCenter]) {
        final i = (p.y.round() * w + p.x.round()) * 4;
        expect(out.image.rgba[i + 2], closeTo(40, 3));
      }
    });
  });

  group('custom filter library', () {
    CustomFilterSpec lutSpec(String name) =>
        CustomFilterSpec(name: name, lut: CubeLut.identity(2));

    test('adds, persists, exports, re-imports and deletes', () async {
      final store = MemoryCustomFilterStore();
      final lib = CustomFilterLibrary(store: store);
      await lib.load();
      final f = await lib.add(lutSpec('Warm'));
      expect(isCustomFilterId(f.id), isTrue);
      expect(filterById(f.id).displayName, 'Warm');
      expect(allFilters.length, 8, reason: 'built-ins stay as they are');

      final (bytes, name) = lib.exportFile(f.id);
      expect(name, 'warm-filter.json');
      expect(specFromJson(name, bytes).name, 'Warm');

      CustomFilterRegistry.remove(f.id);
      final lib2 = CustomFilterLibrary(store: store);
      await lib2.load();
      expect(lib2.filters.single.displayName, 'Warm');

      await lib2.delete(f.id);
      expect(lib2.filters, isEmpty);
      expect(await store.loadAll(), isEmpty);
      expect(() => filterById(f.id), throwsArgumentError);
    });

    test('caps the number of filters', () async {
      final lib = CustomFilterLibrary(store: MemoryCustomFilterStore());
      await lib.load();
      for (var i = 0; i < FilterFileLimits.maxCustomFilters; i++) {
        await lib.add(lutSpec('F$i'));
      }
      expect(lib.isFull, isTrue);
      expect(
        () => lib.add(lutSpec('one too many')),
        throwsFilterFile('up to 30'),
      );
      for (final f in lib.filters) {
        await lib.delete(f.id);
      }
    });

    test('skips damaged stored entries', () async {
      final store = MemoryCustomFilterStore();
      await store.save(
        const StoredFilter(
          id: 'custom-bad0001',
          json: '{"format":"x"}',
          createdAt: 1,
        ),
      );
      final lib = CustomFilterLibrary(store: store);
      await lib.load();
      expect(lib.filters, isEmpty);
      expect(lib.skippedOnLoad, 1);
    });

    test('keeps stored presets under the 5 MB import limit', () {
      // Noisy (incompressible) 2048 px overlay.
      final rnd = math.Random(1);
      final im = img.Image(width: 2048, height: 2048, numChannels: 4);
      for (final p in im) {
        p
          ..r = rnd.nextInt(256)
          ..g = rnd.nextInt(256)
          ..b = rnd.nextInt(256)
          ..a = rnd.nextInt(256);
      }
      final rgba = Uint8List.fromList(
        im.getBytes(order: img.ChannelOrder.rgba),
      );
      final t = TransparentImage(
        2048,
        2048,
        rgba,
        encodeRgbaPng(2048, 2048, rgba),
      );
      final spec = CustomFilterSpec(
        name: 'noise',
        overlay: OverlayLayer(image: t, blend: 'normal', opacity: 1),
      );
      expect(spec.encode().length, greaterThan(FilterFileLimits.maxFileBytes));
      final fitted = fitToFileLimit(spec);
      expect(
        fitted.encode().length,
        lessThanOrEqualTo(FilterFileLimits.maxFileBytes),
      );
      expect(CustomFilterSpec.decode(fitted.encode()).overlay, isNotNull);
    });
  });

  test('the bundled sample filter files pass the import checks', () {
    final dir = Directory('samples/filters');
    final files = {
      for (final f in dir.listSync().whereType<File>())
        f.uri.pathSegments.last: f.readAsBytesSync(),
    };
    expect(
      files.keys,
      containsAll([
        'warm-film.cube',
        'golden-light-leak.png',
        'heart-glasses-sticker.json',
      ]),
    );
    expect(
      specFromCube('warm-film.cube', files['warm-film.cube']!).lut!.size,
      33,
    );
    expect(
      classifyFilterFile(
        'golden-light-leak.png',
        files['golden-light-leak.png']!,
      ),
      FilterFileKind.png,
    );
    validateTransparentPng(files['golden-light-leak.png']!);
    final preset = specFromJson(
      'heart-glasses-sticker.json',
      files['heart-glasses-sticker.json']!,
    );
    expect(preset.name, 'Heart Glasses');
    expect(preset.sticker!.anchor, StickerAnchor.eyes);
    expect(preset.lut, isNotNull);
  });
}
