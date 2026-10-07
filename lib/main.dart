import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'rendering/image_pipeline.dart';
import 'screens/gallery_screen.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  _registerBundledLicenses();
  runApp(PhotoEffectsApp(pipeline: ImagePipeline()));
}

/// Adds notices for components that are not Dart packages (Flutter already
/// lists every Dart/Flutter package license automatically).
void _registerBundledLicenses() {
  LicenseRegistry.addLicense(() async* {
    final apache = await rootBundle.loadString(
      'assets/licenses/APACHE-2.0.txt',
    );
    final notices = await rootBundle.loadString(
      'assets/licenses/THIRD_PARTY_NOTICES.txt',
    );
    yield LicenseEntryWithLineBreaks(['Third-party notices'], notices);
    yield LicenseEntryWithLineBreaks([
      'MediaPipe Tasks Vision (web)',
      'MediaPipe Face Landmarker model',
      'Roboto font',
    ], apache);
  });
}

class PhotoEffectsApp extends StatelessWidget {
  const PhotoEffectsApp({super.key, required this.pipeline});

  final ImagePipeline pipeline;

  @override
  Widget build(BuildContext context) {
    ThemeData theme(Brightness b) => ThemeData(
      useMaterial3: true,
      fontFamily: 'Roboto',
      colorScheme: ColorScheme.fromSeed(
        seedColor: const Color(0xFFE0607E),
        brightness: b,
      ),
    );
    return MaterialApp(
      title: 'Photo Effects',
      debugShowCheckedModeBanner: false,
      theme: theme(Brightness.light),
      darkTheme: theme(Brightness.dark),
      home: GalleryScreen(pipeline: pipeline),
    );
  }
}
