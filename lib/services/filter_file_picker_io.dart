import 'dart:typed_data';

import 'package:file_selector/file_selector.dart';

import '../custom/filter_file_limits.dart';

Future<(Uint8List, String)?> pickFilterFile() async {
  const group = XTypeGroup(
    label: 'Filter files',
    extensions: ['cube', 'json', 'png'],
    // .cube has no system type on iOS, so plain data is allowed and the
    // content is checked after picking.
    uniformTypeIdentifiers: ['public.png', 'public.json', 'public.data'],
  );
  final file = await openFile(acceptedTypeGroups: [group]);
  if (file == null) return null;
  if (await file.length() > FilterFileLimits.maxFileBytes) {
    throw const FilterFileException('The file is larger than 5 MB.');
  }
  return (await file.readAsBytes(), file.name);
}
