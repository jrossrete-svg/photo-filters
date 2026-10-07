import 'dart:typed_data';

import '../custom/filter_file_limits.dart';
import 'web_file_input.dart';

Future<(Uint8List, String)?> pickFilterFile() async {
  try {
    return await pickLocalFile(
      accept: '.cube,.json,.png,application/json,image/png',
      maxBytes: FilterFileLimits.maxFileBytes,
    );
  } on FileTooLargeException {
    throw const FilterFileException('The file is larger than 5 MB.');
  }
}
