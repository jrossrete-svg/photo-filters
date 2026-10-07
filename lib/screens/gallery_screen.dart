import 'package:flutter/material.dart';

import '../custom/custom_filter_library.dart';
import '../rendering/image_pipeline.dart';
import '../services/image_decode_service.dart';
import '../services/photo_picker_service.dart';
import 'add_filter_flow.dart';
import 'photo_editor_screen.dart';

/// Start screen: choose a photo from the library. Browsing albums happens in
/// the system picker (iOS) or Safari's "Photo Library" sheet (web).
class GalleryScreen extends StatefulWidget {
  const GalleryScreen({
    super.key,
    required this.pipeline,
    required this.library,
    PhotoPickerService? picker,
  }) : _picker = picker;

  final ImagePipeline pipeline;
  final CustomFilterLibrary library;
  final PhotoPickerService? _picker;

  @override
  State<GalleryScreen> createState() => _GalleryScreenState();
}

class _GalleryScreenState extends State<GalleryScreen> {
  late final PhotoPickerService _picker =
      widget._picker ?? PhotoPickerService();
  bool _loading = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    widget.pipeline.warmUp();
    widget.library.load();
  }

  Future<void> _pick() async {
    setState(() => _error = null);
    final photo = await _picker.pickFromLibrary();
    if (photo == null || !mounted) return;
    setState(() => _loading = true);
    try {
      final session = await widget.pipeline.open(photo.bytes, photo.name);
      if (!mounted) return;
      await Navigator.of(context).push(
        MaterialPageRoute<void>(
          builder: (_) => PhotoEditorScreen(
            session: session,
            pipeline: widget.pipeline,
            library: widget.library,
          ),
        ),
      );
    } on UnsupportedPhotoException catch (e) {
      setState(() => _error = e.message);
    } catch (e) {
      setState(() => _error = 'Could not open that photo ($e).');
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return Scaffold(
      appBar: AppBar(
        title: const Text('Photo Effects'),
        actions: [
          IconButton(
            tooltip: 'About and licenses',
            icon: const Icon(Icons.info_outline),
            onPressed: () => showLicensePage(
              context: context,
              applicationName: 'Photo Effects',
              applicationLegalese:
                  'An independent, offline photo-effects app. Not affiliated with, '
                  'endorsed by, or connected to Snap Inc. or Snapchat. All effects are '
                  'original implementations.',
            ),
          ),
        ],
      ),
      body: SafeArea(
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 420),
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    Icons.photo_library_outlined,
                    size: 72,
                    color: theme.colorScheme.primary,
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'Pick a photo to start',
                    style: theme.textTheme.headlineSmall,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Eight effects: Soft Glam, Sunny Effect, Soft Freckles, Neon '
                    'Lines, Light, Rosy Haze, SERUM and Glow Effect with Makeup, '
                    'plus your own filter files.',
                    textAlign: TextAlign.center,
                    style: theme.textTheme.bodyMedium,
                  ),
                  const SizedBox(height: 24),
                  SizedBox(
                    width: double.infinity,
                    child: FilledButton.icon(
                      key: const ValueKey('pick-photo'),
                      onPressed: _loading ? null : _pick,
                      icon: const Icon(Icons.add_photo_alternate_outlined),
                      label: Padding(
                        padding: const EdgeInsets.symmetric(vertical: 12),
                        child: Text(
                          _loading ? 'Opening photo...' : 'Choose photo',
                        ),
                      ),
                    ),
                  ),
                  if (_loading) ...[
                    const SizedBox(height: 16),
                    const LinearProgressIndicator(),
                    const SizedBox(height: 8),
                    const Text('Finding faces on your device...'),
                  ],
                  if (_error != null) ...[
                    const SizedBox(height: 16),
                    Text(
                      _error!,
                      textAlign: TextAlign.center,
                      style: TextStyle(color: theme.colorScheme.error),
                    ),
                  ],
                  const SizedBox(height: 8),
                  TextButton.icon(
                    key: const ValueKey('home-add-filter'),
                    onPressed: () =>
                        showAddFilterSheet(context, widget.library),
                    icon: const Icon(Icons.tune),
                    label: const Text('Add your own filter'),
                  ),
                  ListenableBuilder(
                    listenable: widget.library,
                    builder: (context, _) => widget.library.filters.isEmpty
                        ? const SizedBox.shrink()
                        : Text(
                            '${widget.library.filters.length} of your own filter(s) saved on this device',
                            style: theme.textTheme.bodySmall,
                          ),
                  ),
                  const SizedBox(height: 24),
                  Row(
                    children: [
                      Icon(
                        Icons.lock_outline,
                        size: 18,
                        color: theme.colorScheme.outline,
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          'Everything happens on this device. No uploads, no account, '
                          'works offline. Your original photo is never changed.',
                          style: theme.textTheme.bodySmall,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
