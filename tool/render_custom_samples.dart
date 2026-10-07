// Renders the sample filter files in samples/filters/ on a photo, going
// through the same import checks as the app.
//   dart tool/render_custom_samples.dart <photo.jpg> <landmarks.json> <outDir>
import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:image/image.dart' as img;
import 'package:photo_filters/custom/custom_filter.dart';
import 'package:photo_filters/custom/custom_filter_spec.dart';
import 'package:photo_filters/custom/transparent_png.dart';
import 'package:photo_filters/models/face_landmarks.dart';
import 'package:photo_filters/models/filter_preset.dart';
import 'package:photo_filters/models/local_image.dart';

Future<void> main(List<String> args) async {
  final photo = img.bakeOrientation(img.decodeImage(File(args[0]).readAsBytesSync())!);
  final rgba = photo.convert(numChannels: 4, format: img.Format.uint8);
  final source = LocalImage(rgba.width, rgba.height, Uint8List.fromList(rgba.getBytes(order: img.ChannelOrder.rgba)));
  final json = jsonDecode(File(args[1]).readAsStringSync()) as Map<String, dynamic>;
  final landmarks = FaceLandmarks([
    for (final f in json['faces'] as List)
      FaceMesh(Float32List.fromList([for (final v in f as List) (v as num).toDouble()])),
  ]);
  final out = Directory(args[2])..createSync(recursive: true);
  final dir = Directory('samples/filters');
  for (final f in dir.listSync().whereType<File>().toList()..sort((a, b) => a.path.compareTo(b.path))) {
    final name = f.uri.pathSegments.last;
    final bytes = f.readAsBytesSync();
    final sw = Stopwatch()..start();
    late CustomFilterSpec spec;
    switch (classifyFilterFile(name, bytes)) {
      case FilterFileKind.cube:
        spec = specFromCube(name, bytes);
      case FilterFileKind.json:
        spec = specFromJson(name, bytes);
      case FilterFileKind.png:
        spec = CustomFilterSpec(
          name: 'Light leak',
          overlay: OverlayLayer(image: validateTransparentPng(bytes), blend: 'screen', opacity: 0.85),
        );
    }
    final parsed = sw.elapsedMilliseconds;
    final r = CustomFilter('custom-sample', spec).applySync(
      source: source,
      landmarks: landmarks,
      settings: const FilterSettings(intensity: 1),
    );
    final o = img.Image.fromBytes(width: r.image.width, height: r.image.height, bytes: r.image.rgba.buffer, numChannels: 4);
    File('${out.path}/$name.jpg').writeAsBytesSync(img.encodeJpg(o, quality: 88));
    stdout.writeln('$name -> "${spec.name}" parsed in ${parsed}ms, total ${sw.elapsedMilliseconds}ms, faces ${r.usedFaces}, json ${spec.encode().length} bytes');
  }
}
