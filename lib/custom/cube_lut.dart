import 'dart:convert';
import 'dart:typed_data';

import '../rendering/raster.dart';
import 'filter_file_limits.dart';

/// A 3D colour lookup table (the `.cube` format used by photo/video apps).
class CubeLut {
  CubeLut(this.size, this.table)
    : assert(table.length == size * size * size * 3);

  /// Grid points per axis (2..65).
  final int size;

  /// RGB output values in 0..1, red changing fastest (as in .cube files).
  final Float32List table;

  /// Strict `.cube` parser. Accepts TITLE, LUT_3D_SIZE, DOMAIN_MIN,
  /// DOMAIN_MAX, comments and exactly size³ rows of three numbers.
  /// Everything else (1D LUTs, unknown keywords, stray text) is rejected.
  static (CubeLut, String?) parse(String text) {
    int? size;
    String? title;
    var dMin = [0.0, 0.0, 0.0];
    var dMax = [1.0, 1.0, 1.0];
    Float32List? table;
    var n = 0;
    var lineNo = 0;
    for (final raw in const LineSplitter().convert(text)) {
      lineNo++;
      final line = raw.trim();
      if (line.isEmpty || line.startsWith('#')) continue;
      final c = line.codeUnitAt(0);
      final isNumberRow =
          (c >= 0x30 && c <= 0x39) || c == 0x2D || c == 0x2B || c == 0x2E;
      if (!isNumberRow) {
        if (table != null && n > 0) {
          throw FilterFileException(
            'Unexpected text in the colour table (line $lineNo).',
          );
        }
        final sp = line.indexOf(RegExp(r'\s'));
        final key = sp < 0 ? line : line.substring(0, sp);
        final rest = sp < 0 ? '' : line.substring(sp).trim();
        switch (key) {
          case 'TITLE':
            title = rest.replaceAll('"', '');
          case 'LUT_3D_SIZE':
            final v = int.tryParse(rest);
            if (v == null ||
                v < FilterFileLimits.minLutSize ||
                v > FilterFileLimits.maxLutSize) {
              throw const FilterFileException(
                'LUT_3D_SIZE must be between ${FilterFileLimits.minLutSize} and ${FilterFileLimits.maxLutSize}.',
              );
            }
            if (size != null) {
              throw const FilterFileException('LUT_3D_SIZE appears twice.');
            }
            size = v;
            table = Float32List(v * v * v * 3);
          case 'DOMAIN_MIN':
            dMin = _three(rest, lineNo);
          case 'DOMAIN_MAX':
            dMax = _three(rest, lineNo);
          case 'LUT_1D_SIZE':
            throw const FilterFileException(
              '1D LUTs are not supported; please use a 3D .cube file.',
            );
          default:
            throw FilterFileException(
              'Unknown keyword "${key.length > 20 ? key.substring(0, 20) : key}" in .cube file.',
            );
        }
        continue;
      }
      if (table == null) {
        throw const FilterFileException(
          'LUT_3D_SIZE is missing before the colour table.',
        );
      }
      if (n >= table.length) {
        throw const FilterFileException('The colour table has too many rows.');
      }
      final v = _three(line, lineNo);
      table[n] = v[0].clamp(0.0, 1.0);
      table[n + 1] = v[1].clamp(0.0, 1.0);
      table[n + 2] = v[2].clamp(0.0, 1.0);
      n += 3;
    }
    if (size == null || table == null) {
      throw const FilterFileException(
        'Not a 3D .cube file (LUT_3D_SIZE missing).',
      );
    }
    if (n != table.length) {
      throw FilterFileException(
        'The colour table has ${n ~/ 3} rows; expected ${size * size * size}.',
      );
    }
    for (var i = 0; i < 3; i++) {
      if (!(dMax[i] > dMin[i])) {
        throw const FilterFileException(
          'DOMAIN_MAX must be larger than DOMAIN_MIN.',
        );
      }
    }
    final isDefaultDomain =
        dMin.every((v) => v == 0) && dMax.every((v) => v == 1);
    final lut = CubeLut(size, table);
    return (isDefaultDomain ? lut : lut._remapDomain(dMin, dMax), title);
  }

  static List<double> _three(String s, int lineNo) {
    final parts = s.split(RegExp(r'\s+'));
    if (parts.length != 3) {
      throw FilterFileException('Line $lineNo must have exactly 3 numbers.');
    }
    final out = <double>[];
    for (final p in parts) {
      final v = double.tryParse(p);
      if (v == null || !v.isFinite) {
        throw FilterFileException('Line $lineNo has an invalid number.');
      }
      out.add(v);
    }
    return out;
  }

  /// Bakes a non-default input domain into a 0..1 table.
  CubeLut _remapDomain(List<double> dMin, List<double> dMax) {
    final out = Float32List(table.length);
    final s = size - 1;
    for (var b = 0; b < size; b++) {
      for (var g = 0; g < size; g++) {
        for (var r = 0; r < size; r++) {
          // Input value v in 0..1 maps to domain coordinate (v - min)/(max - min).
          final k = ((b * size + g) * size + r) * 3;
          final rgb = sample(
            ((r / s) - dMin[0]) / (dMax[0] - dMin[0]),
            ((g / s) - dMin[1]) / (dMax[1] - dMin[1]),
            ((b / s) - dMin[2]) / (dMax[2] - dMin[2]),
          );
          out[k] = rgb.$1;
          out[k + 1] = rgb.$2;
          out[k + 2] = rgb.$3;
        }
      }
    }
    return CubeLut(size, out);
  }

  /// Trilinear lookup; inputs are clamped to 0..1.
  (double, double, double) sample(double r, double g, double b) {
    final s = size - 1;
    final fr = r.clamp(0.0, 1.0) * s,
        fg = g.clamp(0.0, 1.0) * s,
        fb = b.clamp(0.0, 1.0) * s;
    final r0 = fr.floor().clamp(0, s - 1),
        g0 = fg.floor().clamp(0, s - 1),
        b0 = fb.floor().clamp(0, s - 1);
    final dr = fr - r0, dg = fg - g0, db = fb - b0;
    final t = table;
    double out(int c) {
      double at(int ri, int gi, int bi) =>
          t[((bi * size + gi) * size + ri) * 3 + c];
      final c00 = at(r0, g0, b0) + (at(r0 + 1, g0, b0) - at(r0, g0, b0)) * dr;
      final c10 =
          at(r0, g0 + 1, b0) +
          (at(r0 + 1, g0 + 1, b0) - at(r0, g0 + 1, b0)) * dr;
      final c01 =
          at(r0, g0, b0 + 1) +
          (at(r0 + 1, g0, b0 + 1) - at(r0, g0, b0 + 1)) * dr;
      final c11 =
          at(r0, g0 + 1, b0 + 1) +
          (at(r0 + 1, g0 + 1, b0 + 1) - at(r0, g0 + 1, b0 + 1)) * dr;
      final c0 = c00 + (c10 - c00) * dg;
      final c1 = c01 + (c11 - c01) * dg;
      return c0 + (c1 - c0) * db;
    }

    return (out(0), out(1), out(2));
  }

  /// Applies the LUT to [img], mixed with the original by [t].
  void apply(FloatImage img, double t) {
    final d = img.data;
    for (var k = 0; k < d.length; k += 3) {
      final (r, g, b) = sample(d[k], d[k + 1], d[k + 2]);
      d[k] += (r - d[k]) * t;
      d[k + 1] += (g - d[k + 1]) * t;
      d[k + 2] += (b - d[k + 2]) * t;
    }
  }

  /// Compact storage form: 16-bit little-endian values, base64.
  String toRgb16Base64() {
    final u = Uint16List(table.length);
    for (var i = 0; i < table.length; i++) {
      u[i] = (table[i].clamp(0.0, 1.0) * 65535).round();
    }
    final bytes = u.buffer.asUint8List();
    // Force little-endian regardless of platform.
    if (Endian.host == Endian.big) {
      final bd = ByteData(table.length * 2);
      for (var i = 0; i < u.length; i++) {
        bd.setUint16(i * 2, u[i], Endian.little);
      }
      return base64Encode(bd.buffer.asUint8List());
    }
    return base64Encode(bytes);
  }

  static CubeLut fromRgb16Base64(int size, String data) {
    if (size < FilterFileLimits.minLutSize ||
        size > FilterFileLimits.maxLutSize) {
      throw const FilterFileException('LUT size must be between 2 and 65.');
    }
    final Uint8List bytes;
    try {
      bytes = base64Decode(data);
    } on FormatException {
      throw const FilterFileException(
        'The colour table data is not valid base64.',
      );
    }
    final count = size * size * size * 3;
    if (bytes.length != count * 2) {
      throw const FilterFileException('The colour table has the wrong length.');
    }
    final bd = ByteData.sublistView(bytes);
    final t = Float32List(count);
    for (var i = 0; i < count; i++) {
      t[i] = bd.getUint16(i * 2, Endian.little) / 65535.0;
    }
    return CubeLut(size, t);
  }

  /// Canonical `.cube` text (used by tests and the sample generator).
  String toCubeText({String? title}) {
    final sb = StringBuffer();
    if (title != null) sb.writeln('TITLE "${title.replaceAll('"', '')}"');
    sb.writeln('LUT_3D_SIZE $size');
    for (var i = 0; i < table.length; i += 3) {
      sb.writeln('${_f(table[i])} ${_f(table[i + 1])} ${_f(table[i + 2])}');
    }
    return sb.toString();
  }

  static String _f(double v) {
    var s = v.toStringAsFixed(5);
    while (s.contains('.') && (s.endsWith('0') || s.endsWith('.'))) {
      s = s.substring(0, s.length - 1);
    }
    return s.isEmpty || s == '-0' ? '0' : s;
  }

  /// Identity LUT (no change).
  factory CubeLut.identity(int size) {
    final t = Float32List(size * size * size * 3);
    final s = size - 1;
    var k = 0;
    for (var b = 0; b < size; b++) {
      for (var g = 0; g < size; g++) {
        for (var r = 0; r < size; r++) {
          t[k++] = r / s;
          t[k++] = g / s;
          t[k++] = b / s;
        }
      }
    }
    return CubeLut(size, t);
  }
}
