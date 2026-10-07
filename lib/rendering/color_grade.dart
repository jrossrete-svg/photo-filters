import 'dart:math' as math;
import 'dart:typed_data';

import 'raster.dart';

/// Global colour-grade parameters. All defaults are neutral.
class ColorGrade {
  const ColorGrade({
    this.exposure = 0, // stops
    this.brightness = 0, // -1..1 additive lift
    this.contrast = 0, // -1..1
    this.saturation = 0, // -1..1
    this.vibrance = 0, // -1..1, boosts muted colours more than saturated ones
    this.warmth = 0, // -1..1, blue <-> amber
    this.tint = 0, // -1..1, green <-> magenta
    this.shadows = 0, // -1..1 lift (+) or deepen (-) shadows
    this.highlights = 0, // -1..1 recover (-) or boost (+) highlights
    this.fade = 0, // 0..1 lifts black point (matte look)
    this.shadowTint = const [0, 0, 0],
    this.highlightTint = const [0, 0, 0],
  });

  final double exposure, brightness, contrast, saturation, vibrance;
  final double warmth, tint, shadows, highlights, fade;

  /// Additive RGB split-toning offsets for shadows / highlights.
  final List<double> shadowTint, highlightTint;

  /// Linearly interpolates every parameter towards neutral by [t] (0..1).
  ColorGrade scaled(double t) => ColorGrade(
    exposure: exposure * t,
    brightness: brightness * t,
    contrast: contrast * t,
    saturation: saturation * t,
    vibrance: vibrance * t,
    warmth: warmth * t,
    tint: tint * t,
    shadows: shadows * t,
    highlights: highlights * t,
    fade: fade * t,
    shadowTint: [for (final v in shadowTint) v * t],
    highlightTint: [for (final v in highlightTint) v * t],
  );
}

/// Applies [g] in place. Optionally weighted per pixel by [weight] (0..1).
void applyColorGrade(FloatImage img, ColorGrade g, {Float32List? weight}) {
  final d = img.data;
  final n = img.pixelCount;
  final expMul = math.pow(2, g.exposure).toDouble();
  final wr = 1 + 0.10 * g.warmth + 0.03 * g.tint;
  final wg = 1 - 0.05 * g.tint;
  final wb = 1 - 0.12 * g.warmth + 0.03 * g.tint;
  final c = g.contrast;
  for (var i = 0; i < n; i++) {
    final k = i * 3;
    final r0 = d[k], g0 = d[k + 1], b0 = d[k + 2];
    var r = r0 * expMul * wr + g.brightness * 0.5;
    var gg = g0 * expMul * wg + g.brightness * 0.5;
    var b = b0 * expMul * wb + g.brightness * 0.5;

    var l = luma(r, gg, b);
    // Shadows / highlights via a luminance-dependent gain.
    if (g.shadows != 0 || g.highlights != 0) {
      final sh = (1 - smoothstep(0.0, 0.55, l)) * g.shadows * 0.35;
      final hi = smoothstep(0.45, 1.0, l) * g.highlights * 0.25;
      r += sh + hi;
      gg += sh + hi;
      b += sh + hi;
      l = luma(r, gg, b);
    }
    // Soft S-curve contrast around mid grey.
    if (c != 0) {
      r = _contrast(r, c);
      gg = _contrast(gg, c);
      b = _contrast(b, c);
      l = luma(r, gg, b);
    }
    // Saturation + vibrance.
    if (g.saturation != 0 || g.vibrance != 0) {
      final mx = math.max(r, math.max(gg, b));
      final mn = math.min(r, math.min(gg, b));
      final sat = mx <= 0 ? 0.0 : (mx - mn) / math.max(mx, 1e-6);
      final s = 1 + g.saturation + g.vibrance * (1 - sat) * 1.2;
      r = l + (r - l) * s;
      gg = l + (gg - l) * s;
      b = l + (b - l) * s;
    }
    // Split toning.
    final lt = clamp01(l);
    final sw = (1 - lt) * (1 - lt), hw = lt * lt;
    r += g.shadowTint[0] * sw + g.highlightTint[0] * hw;
    gg += g.shadowTint[1] * sw + g.highlightTint[1] * hw;
    b += g.shadowTint[2] * sw + g.highlightTint[2] * hw;
    // Matte fade lifts the black point.
    if (g.fade != 0) {
      final f = g.fade * 0.18;
      r = f + r * (1 - f);
      gg = f + gg * (1 - f);
      b = f + b * (1 - f);
    }
    // Gentle highlight roll-off instead of hard clipping.
    r = _rolloff(r);
    gg = _rolloff(gg);
    b = _rolloff(b);

    final w = weight == null ? 1.0 : weight[i];
    d[k] = r0 + (r - r0) * w;
    d[k + 1] = g0 + (gg - g0) * w;
    d[k + 2] = b0 + (b - b0) * w;
  }
}

double _contrast(double v, double c) {
  final x = clamp01(v);
  // Blend between identity and a smoothstep S-curve (or its inverse).
  final s = x * x * (3 - 2 * x);
  if (c >= 0) return x + (s - x) * c;
  final inv = 0.5 - math.sin(math.asin(1 - 2 * x) / 3);
  return x + (inv - x) * (-c);
}

double _rolloff(double v) {
  if (v <= 0.85) return v < 0 ? 0 : v;
  // Compress 0.85..inf smoothly into 0.85..1.
  final t = v - 0.85;
  return 0.85 + 0.15 * (1 - math.exp(-t / 0.15));
}
