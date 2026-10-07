import 'dart:math' as math;
import 'dart:typed_data';

import 'face_mask_builder.dart';
import 'raster.dart';

/// Per-channel blend modes (values in 0..1). Standard formulas; written from
/// scratch for this app.
enum PixelBlend { normal, screen, multiply, overlay, softLight, add, color }

double blendChannel(PixelBlend mode, double base, double top) {
  switch (mode) {
    case PixelBlend.normal:
      return top;
    case PixelBlend.screen:
      return 1 - (1 - base) * (1 - top);
    case PixelBlend.multiply:
      return base * top;
    case PixelBlend.overlay:
      return base < 0.5 ? 2 * base * top : 1 - 2 * (1 - base) * (1 - top);
    case PixelBlend.softLight:
      // Pegtop-style soft light: smooth, no hard discontinuity.
      return (1 - 2 * top) * base * base + 2 * top * base;
    case PixelBlend.add:
      return math.min(1.0, base + top);
    case PixelBlend.color:
      return top; // handled per-pixel in [blendPixel]
  }
}

/// Blends colour [top] over pixel [i] of [img] with [alpha] (0..1).
void blendPixel(
  FloatImage img,
  int i,
  PixelBlend mode,
  double tr,
  double tg,
  double tb,
  double alpha,
) {
  if (alpha <= 0) return;
  final d = img.data;
  final k = i * 3;
  final r = d[k], g = d[k + 1], b = d[k + 2];
  double nr, ng, nb;
  if (mode == PixelBlend.color) {
    // Keep base luminance, take hue/saturation from top colour.
    final lb = luma(r, g, b);
    final lt = luma(tr, tg, tb);
    nr = tr + (lb - lt);
    ng = tg + (lb - lt);
    nb = tb + (lb - lt);
  } else {
    nr = blendChannel(mode, r, tr);
    ng = blendChannel(mode, g, tg);
    nb = blendChannel(mode, b, tb);
  }
  d[k] = r + (nr - r) * alpha;
  d[k + 1] = g + (ng - g) * alpha;
  d[k + 2] = b + (nb - b) * alpha;
}

/// Blends a solid colour through a [mask] (only the mask's region is touched).
void blendColorThroughMask(
  FloatImage img,
  Mask mask,
  PixelBlend mode,
  double r,
  double g,
  double b,
  double opacity,
) {
  if (opacity <= 0) return;
  for (var y = 0; y < mask.height; y++) {
    final iy = y + mask.top;
    for (var x = 0; x < mask.width; x++) {
      final a = mask.data[y * mask.width + x];
      if (a <= 0.002) continue;
      blendPixel(
        img,
        iy * img.width + x + mask.left,
        mode,
        r,
        g,
        b,
        a * opacity,
      );
    }
  }
}

/// Blends a full-size [layer] onto [img], optionally weighted by [mask]
/// (null = whole image) and globally by [opacity].
void blendLayer(
  FloatImage img,
  FloatImage layer,
  PixelBlend mode,
  double opacity, {
  Mask? mask,
  Float32List? perPixelAlpha,
}) {
  if (opacity <= 0) return;
  final d = img.data, l = layer.data;
  final n = img.pixelCount;
  for (var i = 0; i < n; i++) {
    var a = opacity;
    if (mask != null) {
      a *= mask.atImage(i % img.width, i ~/ img.width);
    }
    if (perPixelAlpha != null) a *= perPixelAlpha[i];
    if (a <= 0.001) continue;
    final k = i * 3;
    for (var c = 0; c < 3; c++) {
      final base = d[k + c];
      d[k + c] = base + (blendChannel(mode, base, l[k + c]) - base) * a;
    }
  }
}
