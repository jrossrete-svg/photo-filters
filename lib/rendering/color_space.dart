import 'dart:math' as math;

/// Small sRGB <-> CIE Lab (D65) helpers. Used for a handful of per-face
/// colour targets, not per pixel, so speed is not critical.
List<double> rgbToLab(List<double> rgb) {
  double lin(double c) {
    c = c.clamp(0.0, 1.0);
    return c <= 0.04045
        ? c / 12.92
        : math.pow((c + 0.055) / 1.055, 2.4).toDouble();
  }

  final r = lin(rgb[0]), g = lin(rgb[1]), b = lin(rgb[2]);
  final x = (0.4124 * r + 0.3576 * g + 0.1805 * b) / 0.95047;
  final y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  final z = (0.0193 * r + 0.1192 * g + 0.9505 * b) / 1.08883;
  double f(double t) =>
      t > 0.008856 ? math.pow(t, 1 / 3).toDouble() : 7.787 * t + 16 / 116;
  final fx = f(x), fy = f(y), fz = f(z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

List<double> labToRgb(List<double> lab) {
  final fy = (lab[0] + 16) / 116;
  final fx = fy + lab[1] / 500;
  final fz = fy - lab[2] / 200;
  double inv(double t) {
    final t3 = t * t * t;
    return t3 > 0.008856 ? t3 : (t - 16 / 116) / 7.787;
  }

  final x = inv(fx) * 0.95047, y = inv(fy), z = inv(fz) * 1.08883;
  final r = 3.2406 * x - 1.5372 * y - 0.4986 * z;
  final g = -0.9689 * x + 1.8758 * y + 0.0415 * z;
  final b = 0.0557 * x - 0.2040 * y + 1.0570 * z;
  double gam(double c) {
    c = c.clamp(0.0, 1.0);
    return c <= 0.0031308
        ? 12.92 * c
        : 1.055 * math.pow(c, 1 / 2.4).toDouble() - 0.055;
  }

  return [gam(r), gam(g), gam(b)];
}

/// RGB offset that moves [rgb] by ([dL], [da], [db]) in Lab.
List<double> labShiftDelta(List<double> rgb, double dL, double da, double db) {
  final lab = rgbToLab(rgb);
  final out = labToRgb([lab[0] + dL, lab[1] + da, lab[2] + db]);
  return [out[0] - rgb[0], out[1] - rgb[1], out[2] - rgb[2]];
}
