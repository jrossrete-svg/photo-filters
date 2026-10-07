import 'package:flutter/material.dart';

/// Strength slider. Calls [onChangeEnd] when the finger lifts, so the
/// (comparatively slow) re-render only runs once per adjustment.
class IntensitySlider extends StatelessWidget {
  const IntensitySlider({
    super.key,
    required this.label,
    required this.value,
    required this.onChanged,
    required this.onChangeEnd,
    this.min = 0,
    this.max = 1,
  });

  final String label;
  final double value;
  final double min;
  final double max;
  final ValueChanged<double> onChanged;
  final ValueChanged<double> onChangeEnd;

  @override
  Widget build(BuildContext context) {
    final pct = ((value - min) / (max - min) * 100).round();
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Row(
        children: [
          SizedBox(
            width: 112,
            child: Text(label, style: const TextStyle(fontSize: 13)),
          ),
          Expanded(
            child: Slider(
              value: value.clamp(min, max),
              min: min,
              max: max,
              onChanged: onChanged,
              onChangeEnd: onChangeEnd,
            ),
          ),
          SizedBox(width: 40, child: Text('$pct%', textAlign: TextAlign.end)),
        ],
      ),
    );
  }
}
