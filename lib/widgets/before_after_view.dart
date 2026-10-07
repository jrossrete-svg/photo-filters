import 'dart:ui' as ui;

import 'package:flutter/material.dart';

/// Side-by-side comparison: drag the divider (or tap) to reveal the original
/// on the left and the edited version on the right.
class BeforeAfterView extends StatefulWidget {
  const BeforeAfterView({
    super.key,
    required this.before,
    required this.after,
    this.busy = false,
  });

  final ui.Image before;
  final ui.Image? after;
  final bool busy;

  @override
  State<BeforeAfterView> createState() => _BeforeAfterViewState();
}

class _BeforeAfterViewState extends State<BeforeAfterView> {
  double _split = 0.0; // 0 = all "after", 1 = all "before"

  @override
  Widget build(BuildContext context) {
    final img = widget.before;
    return Center(
      child: AspectRatio(
        aspectRatio: img.width / img.height,
        child: LayoutBuilder(
          builder: (context, box) {
            void setFrom(double dx) =>
                setState(() => _split = (dx / box.maxWidth).clamp(0.0, 1.0));
            return Semantics(
              label: widget.busy || widget.after == null
                  ? 'Rendering preview'
                  : 'Preview ready',
              image: true,
              child: GestureDetector(
                onHorizontalDragUpdate: (d) => setFrom(d.localPosition.dx),
                onTapDown: (d) => setFrom(d.localPosition.dx),
                onDoubleTap: () => setState(() => _split = 0),
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    RawImage(
                      image: widget.after ?? widget.before,
                      fit: BoxFit.fill,
                    ),
                    ClipRect(
                      clipper: _LeftClipper(_split),
                      child: RawImage(image: widget.before, fit: BoxFit.fill),
                    ),
                    if (_split > 0)
                      Positioned(
                        left: _split * box.maxWidth - 1.5,
                        top: 0,
                        bottom: 0,
                        child: Container(
                          width: 3,
                          color: Colors.white.withValues(alpha: 0.9),
                        ),
                      ),
                    Positioned(
                      left: 8,
                      top: 8,
                      child: _Badge(
                        _split > 0
                            ? 'Before | After'
                            : 'After  (drag to compare)',
                      ),
                    ),
                    if (widget.busy)
                      const Positioned(
                        left: 0,
                        right: 0,
                        bottom: 0,
                        child: LinearProgressIndicator(minHeight: 4),
                      ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

class _LeftClipper extends CustomClipper<Rect> {
  _LeftClipper(this.fraction);
  final double fraction;
  @override
  Rect getClip(Size size) =>
      Rect.fromLTWH(0, 0, size.width * fraction, size.height);
  @override
  bool shouldReclip(_LeftClipper old) => old.fraction != fraction;
}

class _Badge extends StatelessWidget {
  const _Badge(this.text);
  final String text;
  @override
  Widget build(BuildContext context) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
    decoration: BoxDecoration(
      color: Colors.black.withValues(alpha: 0.55),
      borderRadius: BorderRadius.circular(12),
    ),
    child: Text(
      text,
      style: const TextStyle(color: Colors.white, fontSize: 12),
    ),
  );
}
