import 'dart:async';
import 'dart:typed_data';

import 'package:flutter/material.dart';

import '../custom/custom_filter.dart';
import '../custom/custom_filter_library.dart';
import '../custom/custom_filter_spec.dart';
import '../custom/filter_file_limits.dart';
import '../custom/transparent_png.dart';
import '../services/filter_file_picker.dart';

/// "How to add your own filter" text, shown in the add sheet.
class AddFilterHelp extends StatelessWidget {
  const AddFilterHelp({super.key});

  @override
  Widget build(BuildContext context) {
    final t = Theme.of(context).textTheme;
    Widget item(IconData icon, String title, String body) => Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, size: 22),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: t.titleSmall),
                Text(body, style: t.bodySmall),
              ],
            ),
          ),
        ],
      ),
    );
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Add a filter file from your phone (for example from the Files app). '
          'It is checked, then saved only in this browser on this device. '
          'Nothing is uploaded. Photos are not accepted here.',
          style: t.bodyMedium,
        ),
        const SizedBox(height: 16),
        item(
          Icons.palette_outlined,
          'Colour look (.cube)',
          'A 3D colour lookup table from photo/video apps (up to 65×65×65). '
              'The Intensity slider blends it in.',
        ),
        item(
          Icons.layers_outlined,
          'Overlay (.png with transparency)',
          'Light leaks, textures, frames. Covers the whole photo; you pick a '
              'blend mode (normal, screen, multiply, overlay, soft light) and opacity.',
        ),
        item(
          Icons.face_retouching_natural,
          'Face sticker (.png with transparency)',
          'Glasses, hats, masks... Placed on the face, eyes, nose, mouth or '
              'forehead, and scaled and rotated with each face.',
        ),
        item(
          Icons.data_object,
          'Filter preset (.json)',
          'A Photo Effects filter file, e.g. one made with "Export filter". '
              'It can combine a colour look, an overlay and a sticker.',
        ),
        Text(
          'Rules: max 5 MB per file; PNGs must have a transparent background '
          '(fully opaque images are refused) and are shrunk to 2048 px; no '
          'JPEG/HEIC; up to ${FilterFileLimits.maxCustomFilters} filters. '
          'Delete a filter any time from the editor.',
          style: t.bodySmall,
        ),
      ],
    );
  }
}

/// Shows the "Add your own filter" sheet, lets the user pick a filter file,
/// validates it and stores it. Returns the new filter, or null.
Future<CustomFilter?> showAddFilterSheet(
  BuildContext context,
  CustomFilterLibrary library,
) async {
  final picked = await showModalBottomSheet<Future<(Uint8List, String)?>>(
    context: context,
    isScrollControlled: true,
    showDragHandle: true,
    builder: (ctx) => SafeArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'How to add your own filter',
              style: Theme.of(ctx).textTheme.titleLarge,
            ),
            const SizedBox(height: 12),
            const AddFilterHelp(),
            const SizedBox(height: 16),
            FilledButton.icon(
              key: const ValueKey('choose-filter-file'),
              icon: const Icon(Icons.file_open_outlined),
              label: const Padding(
                padding: EdgeInsets.symmetric(vertical: 10),
                child: Text('Choose filter file'),
              ),
              onPressed: library.isFull
                  ? null
                  // Opens the picker synchronously (Safari needs the tap).
                  : () => Navigator.of(ctx).pop(pickFilterFile()),
            ),
            if (library.isFull)
              Padding(
                padding: const EdgeInsets.only(top: 8),
                child: Text(
                  'You already have ${FilterFileLimits.maxCustomFilters} filters. Delete one to add another.',
                  textAlign: TextAlign.center,
                ),
              ),
          ],
        ),
      ),
    ),
  );
  if (picked == null || !context.mounted) return null;
  try {
    final file = await picked;
    if (file == null || !context.mounted) return null;
    final (bytes, name) = file;
    final spec = await _withProgress(
      context,
      'Checking filter file...',
      () => _readSpec(name, bytes),
    );
    if (!context.mounted) return null;
    final CustomFilterSpec? finalSpec =
        spec.$1 ?? await _askHowToUsePng(context, spec.$2!, baseNameOf(name));
    if (finalSpec == null || !context.mounted) return null;
    final added = await _withProgress(
      context,
      'Saving on this device...',
      () => library.add(finalSpec),
    );
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'Added "${added.displayName}". It is stored only on this device.',
          ),
        ),
      );
    }
    return added;
  } on FilterFileException catch (e) {
    if (context.mounted) await _showError(context, e.message);
  } catch (e) {
    if (context.mounted) {
      await _showError(context, 'That file could not be used as a filter.');
    }
  }
  return null;
}

/// (spec, null) for .cube/.json; (null, image) for a PNG that still needs
/// the user to choose overlay vs sticker.
Future<(CustomFilterSpec?, TransparentImage?)> _readSpec(
  String name,
  Uint8List bytes,
) async {
  switch (classifyFilterFile(name, bytes)) {
    case FilterFileKind.cube:
      return (specFromCube(name, bytes), null);
    case FilterFileKind.json:
      return (specFromJson(name, bytes), null);
    case FilterFileKind.png:
      return (null, validateTransparentPng(bytes));
  }
}

Future<T> _withProgress<T>(
  BuildContext context,
  String text,
  Future<T> Function() work,
) async {
  final nav = Navigator.of(context);
  unawaited(
    showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (_) => PopScope(
        canPop: false,
        child: AlertDialog(
          content: Row(
            children: [
              const CircularProgressIndicator(),
              const SizedBox(width: 20),
              Expanded(child: Text(text)),
            ],
          ),
        ),
      ),
    ),
  );
  // Let the dialog paint before possibly heavy decoding.
  await Future<void>.delayed(const Duration(milliseconds: 60));
  try {
    return await work();
  } finally {
    nav.pop();
  }
}

Future<void> _showError(BuildContext context, String message) =>
    showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Filter file not added'),
        content: Text(message),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(ctx).pop(),
            child: const Text('OK'),
          ),
        ],
      ),
    );

Future<CustomFilterSpec?> _askHowToUsePng(
  BuildContext context,
  TransparentImage image,
  String defaultName,
) => showDialog<CustomFilterSpec>(
  context: context,
  builder: (_) => _PngUseDialog(image: image, defaultName: defaultName),
);

class _PngUseDialog extends StatefulWidget {
  const _PngUseDialog({required this.image, required this.defaultName});
  final TransparentImage image;
  final String defaultName;
  @override
  State<_PngUseDialog> createState() => _PngUseDialogState();
}

class _PngUseDialogState extends State<_PngUseDialog> {
  bool _sticker = false;
  String _blend = 'screen';
  double _opacity = 0.8;
  StickerAnchor _anchor = StickerAnchor.eyes;
  double _scale = 1.0;
  late final _name = TextEditingController(
    text: sanitizeFilterName(widget.defaultName),
  );

  @override
  void dispose() {
    _name.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Use this PNG as...'),
      scrollable: true,
      content: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Center(
            child: Container(
              height: 96,
              color: Colors.grey.shade400,
              child: Image.memory(widget.image.png, fit: BoxFit.contain),
            ),
          ),
          const SizedBox(height: 12),
          SegmentedButton<bool>(
            segments: const [
              ButtonSegment(
                value: false,
                label: Text('Overlay'),
                icon: Icon(Icons.layers_outlined),
              ),
              ButtonSegment(
                value: true,
                label: Text('Face sticker'),
                icon: Icon(Icons.face),
              ),
            ],
            selected: {_sticker},
            onSelectionChanged: (s) => setState(() => _sticker = s.first),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _name,
            maxLength: FilterFileLimits.maxNameLength,
            decoration: const InputDecoration(labelText: 'Filter name'),
          ),
          if (!_sticker) ...[
            DropdownButtonFormField<String>(
              initialValue: _blend,
              decoration: const InputDecoration(labelText: 'Blend mode'),
              items: [
                for (final e in overlayBlendLabels.entries)
                  DropdownMenuItem(value: e.key, child: Text(e.value)),
              ],
              onChanged: (v) => setState(() => _blend = v ?? _blend),
            ),
            const SizedBox(height: 8),
            Text('Opacity ${(_opacity * 100).round()}%'),
            Slider(
              value: _opacity,
              min: 0.05,
              max: 1,
              onChanged: (v) => setState(() => _opacity = v),
            ),
          ] else ...[
            DropdownButtonFormField<StickerAnchor>(
              initialValue: _anchor,
              decoration: const InputDecoration(labelText: 'Place on'),
              items: [
                for (final e in stickerAnchorLabels.entries)
                  DropdownMenuItem(value: e.key, child: Text(e.value)),
              ],
              onChanged: (v) => setState(() => _anchor = v ?? _anchor),
            ),
            const SizedBox(height: 8),
            Text('Size ${(_scale * 100).round()}%'),
            Slider(
              value: _scale,
              min: 0.3,
              max: 2.5,
              onChanged: (v) => setState(() => _scale = v),
            ),
          ],
        ],
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text('Cancel'),
        ),
        FilledButton(
          key: const ValueKey('add-png-filter'),
          onPressed: () {
            final name = sanitizeFilterName(_name.text, fallback: 'My filter');
            Navigator.of(context).pop(
              _sticker
                  ? CustomFilterSpec(
                      name: name,
                      sticker: StickerLayer(
                        image: widget.image,
                        anchor: _anchor,
                        scale: _scale,
                      ),
                    )
                  : CustomFilterSpec(
                      name: name,
                      overlay: OverlayLayer(
                        image: widget.image,
                        blend: _blend,
                        opacity: _opacity,
                      ),
                    ),
            );
          },
          child: const Text('Add filter'),
        ),
      ],
    );
  }
}
