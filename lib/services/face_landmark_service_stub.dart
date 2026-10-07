import '../models/face_landmarks.dart';
import '../models/local_image.dart';
import 'face_landmark_service.dart';

FaceLandmarkService createFaceLandmarkService() => _NoFaceService();

class _NoFaceService implements FaceLandmarkService {
  @override
  Future<FaceLandmarks> detect(LocalImage image) async => FaceLandmarks.none;
  @override
  Future<void> warmUp() async {}
  @override
  Future<void> dispose() async {}
}
