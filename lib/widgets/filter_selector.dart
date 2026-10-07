import 'package:flutter/material.dart';

import '../filters/photo_filter.dart';

/// Horizontal list of all filters.
class FilterSelector extends StatelessWidget {
  const FilterSelector({
    super.key,
    required this.filters,
    required this.selectedId,
    required this.onSelected,
    this.thumbnails = const {},
    this.onAdd,
  });

  final List<PhotoFilter> filters;
  final String selectedId;
  final ValueChanged<String> onSelected;
  final Map<String, ImageProvider> thumbnails;

  /// Shows a trailing "Add filter" tile when set.
  final VoidCallback? onAdd;

  static const _icons = {
    'sunny_effect': Icons.wb_sunny_outlined,
    'soft_freckles': Icons.grain,
    'neon_lines': Icons.gesture,
    'light': Icons.light_mode_outlined,
    'rosy_haze': Icons.filter_vintage_outlined,
    'serum': Icons.water_drop_outlined,
    'glow_makeup': Icons.auto_awesome,
  };

  @override
  Widget build(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return SizedBox(
      height: 92,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.symmetric(horizontal: 12),
        itemCount: filters.length + (onAdd == null ? 0 : 1),
        separatorBuilder: (_, _) => const SizedBox(width: 8),
        itemBuilder: (context, i) {
          if (i == filters.length) return _addTile(context);
          final f = filters[i];
          final selected = f.id == selectedId;
          return Semantics(
            button: true,
            selected: selected,
            label: f.displayName,
            child: InkWell(
              key: ValueKey('filter-${f.id}'),
              borderRadius: BorderRadius.circular(14),
              onTap: () => onSelected(f.id),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 150),
                width: 86,
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: selected
                      ? scheme.primaryContainer
                      : scheme.surfaceContainerHighest,
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(
                    color: selected ? scheme.primary : Colors.transparent,
                    width: 2,
                  ),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(
                      _icons[f.id] ??
                          (f.preset.usesFace
                              ? Icons.face_retouching_natural
                              : Icons.tune),
                      color: selected
                          ? scheme.onPrimaryContainer
                          : scheme.onSurfaceVariant,
                    ),
                    const SizedBox(height: 6),
                    Text(
                      f.displayName,
                      textAlign: TextAlign.center,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontSize: 11,
                        height: 1.15,
                        fontWeight: selected
                            ? FontWeight.w700
                            : FontWeight.w500,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }

  Widget _addTile(BuildContext context) {
    final scheme = Theme.of(context).colorScheme;
    return Semantics(
      button: true,
      label: 'Add filter file',
      child: InkWell(
        key: const ValueKey('add-filter'),
        borderRadius: BorderRadius.circular(14),
        onTap: onAdd,
        child: Container(
          width: 86,
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: scheme.outline),
          ),
          child: const Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.add),
              SizedBox(height: 6),
              ExcludeSemantics(
                child: Text(
                  'Add filter file',
                  textAlign: TextAlign.center,
                  maxLines: 2,
                  style: TextStyle(
                    fontSize: 11,
                    height: 1.15,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
