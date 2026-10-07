// Tuning helper for Soft Glam (local use only; never commit reference photos).
//
//   dart run tool/soft_glam_compare.dart <before> <before_lm.json> \
//       <reference_after|-> <out.png> [ours_full.png] [key=value ...]
//
// Renders Soft Glam on <before> at export (2048 px) and preview (1080 px)
// size, prints timings, and writes a side-by-side face crop:
// before | reference (if given) | Soft Glam.
import 'dart:convert';
import 'dart:io';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:image/image.dart' as img;
import 'package:photo_filters/filters/soft_glam_filter.dart';
import 'package:photo_filters/models/face_landmarks.dart';
import 'package:photo_filters/models/local_image.dart';

LocalImage _load(String path, int maxEdge) {
  var im = img.bakeOrientation(img.decodeImage(File(path).readAsBytesSync())!);
  final scale = maxEdge / math.max(im.width, im.height);
  if (scale < 1) {
    im = img.copyResize(
      im,
      width: (im.width * scale).round(),
      height: (im.height * scale).round(),
      interpolation: img.Interpolation.average,
    );
  }
  final rgba = im.convert(numChannels: 4, format: img.Format.uint8);
  return LocalImage(
    rgba.width,
    rgba.height,
    Uint8List.fromList(rgba.getBytes(order: img.ChannelOrder.rgba)),
  );
}

FaceLandmarks _lm(String path) {
  final json =
      jsonDecode(File(path).readAsStringSync()) as Map<String, dynamic>;
  return FaceLandmarks([
    for (final f in json['faces'] as List)
      FaceMesh(
        Float32List.fromList([
          for (final v in f as List) (v as num).toDouble(),
        ]),
      ),
  ]);
}

img.Image _toImage(LocalImage s) => img.Image.fromBytes(
  width: s.width,
  height: s.height,
  bytes: s.rgba.buffer,
  numChannels: 4,
);

img.Image _faceCrop(img.Image im, FaceMesh mesh, int outH) {
  final g = mesh.at(im.width, im.height);
  final (x0, y0, x1, y1) = g.bounds(MeshIndex.faceOval);
  final cx = (x0 + x1) / 2, cy = (y0 + y1) / 2 + (y1 - y0) * 0.05;
  final hh = (y1 - y0) * 0.62, hw = hh * 0.78;
  final l = math.max(0, (cx - hw).round()), t = math.max(0, (cy - hh).round());
  final w = math.min(im.width - l, (2 * hw).round());
  final h = math.min(im.height - t, (2 * hh).round());
  final c = img.copyCrop(im, x: l, y: t, width: w, height: h);
  return img.copyResize(
    c,
    height: outH,
    interpolation: img.Interpolation.cubic,
  );
}

Future<void> main(List<String> args) async {
  final settingsArgs = {
    for (final a in args.where((a) => a.contains('=')))
      a.split('=')[0]: double.parse(a.split('=')[1]),
  };
  final pos = args.where((a) => !a.contains('=')).toList();
  final lm = _lm(pos[1]);
  const f = SoftGlamFilter();
  var settings = f.preset.defaultSettings();
  for (final e in settingsArgs.entries) {
    settings = e.key == 'intensity'
        ? settings.copyWith(intensity: e.value)
        : settings.withParam(e.key, e.value);
  }
  // Warm-up + timings at preview and export sizes.
  for (final edge
      in Platform.environment['NOTIME'] == null ? [1080, 2048] : <int>[]) {
    final src = _load(pos[0], edge);
    f.applySync(source: src, landmarks: lm, settings: settings);
    final sw = Stopwatch()..start();
    const runs = 3;
    for (var i = 0; i < runs; i++) {
      f.applySync(source: src, landmarks: lm, settings: settings);
    }
    stdout.writeln(
      'soft_glam ${src.width}x${src.height}: '
      '${(sw.elapsedMilliseconds / runs).round()} ms (Dart VM)',
    );
  }
  final src = _load(pos[0], 2048);
  final out = f.applySync(source: src, landmarks: lm, settings: settings);
  final ours = _toImage(out.image);
  if (pos.length > 4) File(pos[4]).writeAsBytesSync(img.encodePng(ours));

  const h = 900;
  final panels = <(String, img.Image)>[
    ('Before', _faceCrop(_toImage(src), lm.faces.first, h)),
  ];
  if (pos[2] != '-') {
    final ref = _load(pos[2], 2048);
    final refLm = File(pos[2].replaceAll(RegExp(r'\.\w+$'), '_landmarks.json'));
    final mesh = refLm.existsSync()
        ? _lm(refLm.path).faces.first
        : lm.faces.first;
    panels.add(('Reference lens', _faceCrop(_toImage(ref), mesh, h)));
  }
  panels.add(('Soft Glam (ours)', _faceCrop(ours, lm.faces.first, h)));
  const pad = 10, label = 40;
  final width = panels.fold<int>(0, (s, p) => s + p.$2.width + pad) + pad;
  final sheet = img.Image(width: width, height: h + label + 2 * pad);
  img.fill(sheet, color: img.ColorRgb8(255, 255, 255));
  var x = pad;
  for (final (name, p) in panels) {
    img.compositeImage(sheet, p, dstX: x, dstY: pad + label);
    img.drawString(
      sheet,
      name,
      font: img.arial24,
      x: x + 6,
      y: pad + 6,
      color: img.ColorRgb8(20, 20, 20),
    );
    x += p.width + pad;
  }
  File(pos[3]).writeAsBytesSync(img.encodePng(sheet));
  stdout.writeln('wrote ${pos[3]}');
}
