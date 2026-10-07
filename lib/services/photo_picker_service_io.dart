import 'package:image_picker/image_picker.dart';

import 'photo_picker_service.dart';

final _picker = ImagePicker();

Future<PickedPhoto?> pickPhoto() async {
  final file = await _picker.pickImage(
    source: ImageSource.gallery,
    // We never need location or other metadata.
    requestFullMetadata: false,
    // Setting a quality makes iOS hand us a JPEG instead of HEIC.
    imageQuality: 100,
  );
  if (file == null) return null;
  return PickedPhoto(bytes: await file.readAsBytes(), name: file.name);
}
