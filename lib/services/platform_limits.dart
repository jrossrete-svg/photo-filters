import 'package:flutter/foundation.dart';

/// Resolution caps. On the web all pixel work runs in one Web Worker on the
/// phone's CPU, so we keep previews small and exports at a sensible size.
class PlatformLimits {
  PlatformLimits._();

  /// Long edge of the interactive preview.
  static int get previewMaxEdge => kIsWeb ? 1080 : 1440;

  /// Long edge of the exported copy.
  static int get exportMaxEdge => kIsWeb ? 2048 : 4096;
}
