import 'dart:async';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import '../custom/custom_filter.dart';
import '../custom/custom_filter_library.dart';
import '../filters/filter_registry.dart';
import '../filters/photo_filter.dart';
import '../models/filter_preset.dart';
import '../rendering/image_pipeline.dart';
import '../services/local_export_service.dart';
import '../widgets/before_after_view.dart';
import '../widgets/filter_selector.dart';
import '../widgets/intensity_slider.dart';
import 'add_filter_flow.dart';

/// Preview a filter on the chosen photo, adjust it, and export a new copy.
class PhotoEditorScreen extends StatefulWidget {
  const PhotoEditorScreen({
    super.key,
    required this.session,
    required this.pipeline,
    required this.library,
  });

  final EditSession session;
  final ImagePipeline pipeline;
  final CustomFilterLibrary library;

  @override
  State<PhotoEditorScreen> createState() => _PhotoEditorScreenState();
}

class _PhotoEditorScreenState extends State<PhotoEditorScreen> {
  ui.Image? _original;
  ui.Image? _edited;
  String _filterId = allFilters.first.id;
  final Map<String, FilterSettings> _settings = {};
  bool _busy = false;
  bool _rerunQueued = false;
  String? _note;
  bool _exporting = false;

  PhotoFilter get _filter => filterById(_filterId);
  FilterSettings get _current =>
      _settings.putIfAbsent(_filterId, () => _filter.preset.defaultSettings());

  List<PhotoFilter> get _allFilters => [
    ...allFilters,
    ...widget.library.filters,
  ];

  void _libraryChanged() {
    if (!mounted) return;
    if (isCustomFilterId(_filterId) &&
        !widget.library.filters.any((f) => f.id == _filterId)) {
      _filterId = allFilters.first.id;
      _render();
    }
    setState(() {});
  }

  Future<void> _addFilter() async {
    final added = await showAddFilterSheet(context, widget.library);
    if (added != null && mounted) _select(added.id);
  }

  void _exportFilter() {
    try {
      final (bytes, name) = widget.library.exportFile(_filterId);
      // Download only (no share sheet).
      widget.pipeline.exporter.saveFile(bytes, name, 'application/json').then((
        outcome,
      ) {
        if (mounted) {
          _snack(
            kIsWeb
                ? 'Downloaded $name'
                : 'Saved $name to the app\'s folder in Files.',
          );
        }
      });
    } catch (e) {
      _snack('Could not export this filter.');
    }
  }

  Future<void> _deleteFilter() async {
    final name = _filter.displayName;
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Delete filter?'),
        content: Text('"$name" will be removed from this device.'),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(ctx).pop(false),
            child: const Text('Cancel'),
          ),
          FilledButton(
            key: const ValueKey('confirm-delete-filter'),
            onPressed: () => Navigator.of(ctx).pop(true),
            child: const Text('Delete'),
          ),
        ],
      ),
    );
    if (ok != true || !mounted) return;
    await widget.library.delete(_filterId);
    if (mounted) _snack('Deleted "$name".');
  }

  @override
  void initState() {
    super.initState();
    widget.library.addListener(_libraryChanged);
    toUiImage(widget.session.preview).then((img) {
      if (!mounted) return;
      setState(() => _original = img);
      _render();
    });
  }

  @override
  void dispose() {
    widget.library.removeListener(_libraryChanged);
    _original?.dispose();
    _edited?.dispose();
    super.dispose();
  }

  /// Renders the current filter; if settings change mid-render, renders once
  /// more afterwards with the latest values (never queues a backlog).
  Future<void> _render() async {
    if (_busy) {
      _rerunQueued = true;
      return;
    }
    setState(() => _busy = true);
    try {
      do {
        _rerunQueued = false;
        final id = _filterId;
        final result = await widget.pipeline.renderPreview(
          widget.session,
          id,
          _current,
        );
        final img = await toUiImage(result.image);
        if (!mounted) return;
        setState(() {
          _edited?.dispose();
          _edited = img;
          _note = result.note;
        });
      } while (_rerunQueued && mounted);
    } catch (e) {
      if (mounted) setState(() => _note = 'Something went wrong: $e');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  void _select(String id) {
    if (id == _filterId) return;
    setState(() => _filterId = id);
    _render();
  }

  void _update(FilterSettings s, {bool render = false}) {
    setState(() => _settings[_filterId] = s);
    if (render) _render();
  }

  Future<void> _export() async {
    setState(() => _exporting = true);
    final stage = ValueNotifier<String>('Preparing full-size copy...');
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
                Expanded(
                  child: ValueListenableBuilder(
                    valueListenable: stage,
                    builder: (_, v, _) => Text(v),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
    PreparedExport? prepared;
    Object? error;
    try {
      prepared = await widget.pipeline.export(
        widget.session,
        _filterId,
        _current,
        onStage: (s) => stage.value = switch (s) {
          ExportStage.decoding => 'Opening full-size photo...',
          ExportStage.rendering => 'Applying ${_filter.displayName}...',
          ExportStage.encoding => 'Creating JPEG...',
        },
      );
    } catch (e) {
      error = e;
    }
    if (!mounted) return;
    Navigator.of(context).pop(); // progress dialog
    setState(() => _exporting = false);
    if (prepared == null) {
      _snack('Export failed: $error');
      return;
    }
    await _showSaveSheet(prepared);
  }

  Future<void> _showSaveSheet(PreparedExport prepared) async {
    if (kIsWeb) {
      // Full-screen image with "press and hold to save" + Download button.
      await prepared.save();
      return;
    }
    final outcome = await showModalBottomSheet<ExportOutcome>(
      context: context,
      showDragHandle: true,
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                'Your edited copy is ready',
                style: Theme.of(ctx).textTheme.titleMedium,
              ),
              const SizedBox(height: 4),
              Text(
                'A new photo will be added to your library. The original stays unchanged.',
                style: Theme.of(ctx).textTheme.bodySmall,
              ),
              const SizedBox(height: 16),
              FilledButton.icon(
                key: const ValueKey('save-copy'),
                icon: const Icon(Icons.save_alt),
                label: const Text('Save to Photos'),
                onPressed: () async =>
                    Navigator.of(ctx).pop(await prepared.save()),
              ),
            ],
          ),
        ),
      ),
    );
    if (!mounted || outcome == null) return;
    _snack(
      outcome == ExportOutcome.savedToPhotos
          ? 'Saved a new copy to Photos.'
          : 'Not saved.',
    );
  }

  void _snack(String text) =>
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(text)));

  @override
  Widget build(BuildContext context) {
    final faces = widget.session.landmarks.usable.length;
    final status = widget.session.faceDetectionError != null
        ? 'Face detection unavailable, using overall looks only.'
        : faces == 0
        ? 'No face found. Face effects are skipped.'
        : faces == 1
        ? '1 face found'
        : '$faces faces found';
    return Scaffold(
      appBar: AppBar(
        title: Text(_filter.displayName),
        actions: [
          TextButton.icon(
            key: const ValueKey('export'),
            onPressed: _exporting || _edited == null ? null : _export,
            icon: const Icon(Icons.download),
            label: const Text('Save'),
          ),
        ],
      ),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: Padding(
                padding: const EdgeInsets.all(8),
                child: _original == null
                    ? const Center(child: CircularProgressIndicator())
                    : BeforeAfterView(
                        before: _original!,
                        after: _edited,
                        busy: _busy,
                      ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 2),
              child: Text(
                _note ?? status,
                key: const ValueKey('status'),
                style: Theme.of(context).textTheme.bodySmall,
                textAlign: TextAlign.center,
              ),
            ),
            IntensitySlider(
              label: 'Intensity',
              value: _current.intensity,
              onChanged: (v) => _update(_current.copyWith(intensity: v)),
              onChangeEnd: (v) =>
                  _update(_current.copyWith(intensity: v), render: true),
            ),
            for (final c in _filter.preset.controls)
              if (c.kind == ControlKind.slider)
                IntensitySlider(
                  label: c.label,
                  value: _current.param(c.key, c.defaultValue),
                  min: c.min,
                  max: c.max,
                  onChanged: (v) => _update(_current.withParam(c.key, v)),
                  onChangeEnd: (v) =>
                      _update(_current.withParam(c.key, v), render: true),
                )
              else
                SwitchListTile(
                  dense: true,
                  title: Text(c.label),
                  value: _current.flag(c.key, fallback: c.defaultValue >= 0.5),
                  onChanged: (v) => _update(
                    _current.withParam(c.key, v ? 1 : 0),
                    render: true,
                  ),
                ),
            if (isCustomFilterId(_filterId))
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  TextButton.icon(
                    key: const ValueKey('export-filter'),
                    onPressed: _exportFilter,
                    icon: const Icon(Icons.file_download_outlined),
                    label: const Text('Export filter'),
                  ),
                  const SizedBox(width: 8),
                  TextButton.icon(
                    key: const ValueKey('delete-filter'),
                    onPressed: _deleteFilter,
                    icon: const Icon(Icons.delete_outline),
                    label: const Text('Delete filter'),
                  ),
                ],
              ),
            const SizedBox(height: 4),
            FilterSelector(
              filters: _allFilters,
              selectedId: _filterId,
              onSelected: _select,
              onAdd: _addFilter,
            ),
            const SizedBox(height: 8),
          ],
        ),
      ),
    );
  }
}
