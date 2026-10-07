import 'photo_picker_service.dart';
import 'web_file_input.dart';

Future<PickedPhoto?> pickPhoto() async {
  final picked = await pickLocalFile(accept: 'image/*');
  if (picked == null) return null;
  return PickedPhoto(bytes: picked.$1, name: picked.$2);
}
