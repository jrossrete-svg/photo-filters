import 'dart:math' as math;
import 'dart:typed_data';

import '../models/local_image.dart';

/// Linear-ish working buffer: interleaved RGB floats in 0..1.
///
/// All filters convert the 8-bit source into a [FloatImage] once, work on it,
/// and convert back at the end, which avoids banding from repeated rounding.
class FloatImage {
  FloatImage(this.width, this.height) : data = Float32List(width * height * 3);
  FloatImage._(this.width, this.height, this.data);

  final int width;
  final int height;
  final Float32List data;

  int get pixelCount => width * height;

  factory FloatImage.fromLocal(LocalImage src) {
    final out = FloatImage(src.width, src.height);
    final s = src.rgba;
    final d = out.data;
    const inv = 1 / 255.0;
    for (var i = 0, j = 0; i < s.length; i += 4, j += 3) {
      d[j] = s[i] * inv;
      d[j + 1] = s[i + 1] * inv;
      d[j + 2] = s[i + 2] * inv;
    }
    return out;
  }

  LocalImage toLocal() {
    final out = Uint8List(width * height * 4);
    for (var i = 0, j = 0; j < data.length; i += 4, j += 3) {
      out[i] = _to8(data[j]);
      out[i + 1] = _to8(data[j + 1]);
      out[i + 2] = _to8(data[j + 2]);
      out[i + 3] = 255;
    }
    return LocalImage(width, height, out);
  }

  static int _to8(double v) {
    if (v <= 0) return 0;
    if (v >= 1) return 255;
    return (v * 255 + 0.5).toInt();
  }

  FloatImage clone() => FloatImage._(width, height, Float32List.fromList(data));

  /// Box-averaged downsample by an integer [factor] (used to make big blurs
  /// cheap: blur small, then sample back bilinearly).
  FloatImage downsample(int factor) {
    if (factor <= 1) return clone();
    final nw = math.max(1, width ~/ factor);
    final nh = math.max(1, height ~/ factor);
    final out = FloatImage(nw, nh);
    final o = out.data;
    final inv = 1.0 / (factor * factor);
    for (var y = 0; y < nh; y++) {
      for (var x = 0; x < nw; x++) {
        var r = 0.0, g = 0.0, b = 0.0;
        for (var yy = 0; yy < factor; yy++) {
          final sy = math.min(height - 1, y * factor + yy);
          var i = (sy * width + x * factor) * 3;
          for (var xx = 0; xx < factor; xx++) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            i += 3;
          }
        }
        final k = (y * nw + x) * 3;
        o[k] = r * inv;
        o[k + 1] = g * inv;
        o[k + 2] = b * inv;
      }
    }
    return out;
  }

  /// Gaussian-like blur (three box passes) in place.
  void blur(double sigma) => gaussianBlur(data, width, height, 3, sigma);

  /// Samples this (usually downsampled) image bilinearly at normalised
  /// coordinates (u, v in 0..1) and writes RGB into [out].
  void sampleUV(double u, double v, Float32List out) {
    final fx = (u * width - 0.5).clamp(0.0, width - 1.0);
    final fy = (v * height - 0.5).clamp(0.0, height - 1.0);
    final x0 = fx.floor(), y0 = fy.floor();
    final x1 = math.min(x0 + 1, width - 1), y1 = math.min(y0 + 1, height - 1);
    final tx = fx - x0, ty = fy - y0;
    final i00 = (y0 * width + x0) * 3, i10 = (y0 * width + x1) * 3;
    final i01 = (y1 * width + x0) * 3, i11 = (y1 * width + x1) * 3;
    for (var c = 0; c < 3; c++) {
      final a = data[i00 + c] + (data[i10 + c] - data[i00 + c]) * tx;
      final b = data[i01 + c] + (data[i11 + c] - data[i01 + c]) * tx;
      out[c] = a + (b - a) * ty;
    }
  }

  /// Returns a full-resolution blurred copy, computed at reduced resolution
  /// for speed. [sigma] is in full-resolution pixels.
  FloatImage blurredCopy(double sigma) {
    final factor = math.max(1, (sigma / 4).floor());
    final small = downsample(factor);
    small.blur(sigma / factor);
    if (factor == 1) return small;
    final out = FloatImage(width, height);
    final px = Float32List(3);
    final o = out.data;
    for (var y = 0; y < height; y++) {
      final v = (y + 0.5) / height;
      for (var x = 0; x < width; x++) {
        small.sampleUV((x + 0.5) / width, v, px);
        final k = (y * width + x) * 3;
        o[k] = px[0];
        o[k + 1] = px[1];
        o[k + 2] = px[2];
      }
    }
    return out;
  }
}

/// Three-pass box blur approximating a Gaussian of [sigma] pixels on an
/// interleaved buffer with [ch] channels.
void gaussianBlur(Float32List buf, int w, int h, int ch, double sigma) {
  if (sigma < 0.5 || w < 2 || h < 2) return;
  final boxW = math.sqrt(4 * sigma * sigma + 1);
  final r = math.max(1, ((boxW - 1) / 2).round());
  final tmp = Float32List(buf.length);
  for (var pass = 0; pass < 3; pass++) {
    _boxH(buf, tmp, w, h, ch, r);
    _boxV(tmp, buf, w, h, ch, r);
  }
}

void _boxH(Float32List src, Float32List dst, int w, int h, int ch, int r) {
  final norm = 1.0 / (2 * r + 1);
  for (var y = 0; y < h; y++) {
    final row = y * w * ch;
    for (var c = 0; c < ch; c++) {
      var sum = src[row + c] * (r + 1);
      for (var i = 1; i <= r; i++) {
        sum += src[row + math.min(i, w - 1) * ch + c];
      }
      for (var x = 0; x < w; x++) {
        dst[row + x * ch + c] = sum * norm;
        final add = math.min(x + r + 1, w - 1);
        final sub = math.max(x - r, 0);
        sum += src[row + add * ch + c] - src[row + sub * ch + c];
      }
    }
  }
}

void _boxV(Float32List src, Float32List dst, int w, int h, int ch, int r) {
  final norm = 1.0 / (2 * r + 1);
  final stride = w * ch;
  for (var x = 0; x < w; x++) {
    for (var c = 0; c < ch; c++) {
      final col = x * ch + c;
      var sum = src[col] * (r + 1);
      for (var i = 1; i <= r; i++) {
        sum += src[math.min(i, h - 1) * stride + col];
      }
      for (var y = 0; y < h; y++) {
        dst[y * stride + col] = sum * norm;
        final add = math.min(y + r + 1, h - 1);
        final sub = math.max(y - r, 0);
        sum += src[add * stride + col] - src[sub * stride + col];
      }
    }
  }
}

/// Small, fast, platform-independent PRNG (xorshift32). Dart's own
/// `Random(seed)` is not guaranteed to produce the same sequence on the VM
/// and on the web, so freckles would move between preview and export.
class SeededRandom {
  SeededRandom(int seed)
    : _s = (seed & 0xFFFFFFFF) == 0 ? 0x9E3779B9 : seed & 0xFFFFFFFF;
  int _s;

  int nextUint32() {
    var x = _s;
    x ^= (x << 13) & 0xFFFFFFFF;
    x ^= x >> 17;
    x ^= (x << 5) & 0xFFFFFFFF;
    _s = x & 0xFFFFFFFF;
    return _s;
  }

  /// Uniform double in [0, 1).
  double nextDouble() => nextUint32() / 4294967296.0;

  double range(double a, double b) => a + (b - a) * nextDouble();

  /// Standard normal sample (Box-Muller).
  double nextGaussian() {
    final u1 = math.max(1e-9, nextDouble());
    final u2 = nextDouble();
    return math.sqrt(-2 * math.log(u1)) * math.cos(2 * math.pi * u2);
  }
}

double clamp01(double v) => v < 0 ? 0 : (v > 1 ? 1 : v);

double smoothstep(double e0, double e1, double x) {
  final t = clamp01((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
}

double luma(double r, double g, double b) =>
    0.2126 * r + 0.7152 * g + 0.0722 * b;
