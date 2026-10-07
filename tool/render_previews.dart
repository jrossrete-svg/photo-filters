// Renders every filter on a sample photo and writes a contact sheet.
//
// Usage (from the project root):
//   dart run tool/render_previews.dart <photo.jpg> <landmarks.json> <out.png>
//
// landmarks.json: {"faces": [[x0, y0, x1, y1, ...]]} with coordinates
// normalised to 0..1 (as produced by MediaPipe Face Landmarker).
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:image/image.dart' as img;
import 'package:photo_filters/filters/filter_registry.dart';
import 'package:photo_filters/models/face_landmarks.dart';
import 'package:photo_filters/models/local_image.dart';

Future<void> main(List<String> args) async {
  final photo = img.bakeOrientation(
    img.decodeImage(File(args[0]).readAsBytesSync())!,
  );
  final rgba = photo.convert(numChannels: 4, format: img.Format.uint8);
  final source = LocalImage(
    rgba.width,
    rgba.height,
    Uint8List.fromList(rgba.getBytes(order: img.ChannelOrder.rgba)),
  );
  final json =
      jsonDecode(File(args[1]).readAsStringSync()) as Map<String, dynamic>;
  final landmarks = FaceLandmarks([
    for (final f in json['faces'] as List)
      FaceMesh(
        Float32List.fromList([
          for (final v in f as List) (v as num).toDouble(),
        ]),
      ),
  ]);
  final outDir = Directory('${File(args[2]).parent.path}/preview_frames')
    ..createSync(recursive: true);

  final tiles = <(String, img.Image)>[('Original', _toImage(source))];
  for (final f in allFilters) {
    final sw = Stopwatch()..start();
    final r = f.applySync(
      source: source,
      landmarks: landmarks,
      settings: f.preset.defaultSettings(),
    );
    stdout.writeln(
      '${f.displayName}: ${sw.elapsedMilliseconds} ms, faces=${r.usedFaces}',
    );
    final out = _toImage(r.image);
    File(
      '${outDir.path}/${f.id}.jpg',
    ).writeAsBytesSync(img.encodeJpg(out, quality: 90));
    tiles.add((f.displayName, out));
  }

  // 4 x 2 contact sheet with labels.
  const cols = 4, tileW = 480, labelH = 34, pad = 12;
  final tileH = (tileW * source.height / source.width).round();
  final sheet = img.Image(
    width: cols * tileW + (cols + 1) * pad,
    height: 2 * (tileH + labelH) + 3 * pad,
  );
  img.fill(sheet, color: img.ColorRgb8(24, 24, 28));
  for (var i = 0; i < tiles.length; i++) {
    final x = pad + (i % cols) * (tileW + pad);
    final y = pad + (i ~/ cols) * (tileH + labelH + pad);
    final t = img.copyResize(
      tiles[i].$2,
      width: tileW,
      height: tileH,
      interpolation: img.Interpolation.average,
    );
    img.compositeImage(sheet, t, dstX: x, dstY: y);
    img.drawString(
      sheet,
      tiles[i].$1,
      font: img.arial24,
      x: x + 4,
      y: y + tileH + 5,
      color: img.ColorRgb8(240, 240, 240),
    );
  }
  File(args[2]).writeAsBytesSync(img.encodePng(sheet));
  stdout.writeln('Wrote ${args[2]}');
}

img.Image _toImage(LocalImage l) => img.Image.fromBytes(
  width: l.width,
  height: l.height,
  bytes: l.rgba.buffer,
  numChannels: 4,
  order: img.ChannelOrder.rgba,
);
