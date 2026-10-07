import 'dart:async';
import 'dart:js_interop';
import 'dart:typed_data';

import 'package:web/web.dart' as web;

import '../models/local_image.dart';
import 'local_export_service.dart';

LocalExportService createExportService() => _WebExportService();

/// Web saving without any share sheet or network access:
/// the JPEG is shown as a real <img> (so iOS Safari's press-and-hold menu
/// offers "Save to Photos") with a Download link for the Files app.
class _WebExportService implements LocalExportService {
  @override
  Future<PreparedExport> prepare(
    LocalImage image, {
    String baseName = 'photo-effect',
  }) async {
    final blob = await _encodeJpeg(image);
    final name = exportFileName(baseName);
    return PreparedExport(
      fileName: name,
      save: () async {
        _showSaveOverlay(blob, name);
        return ExportOutcome.shownForSaving;
      },
    );
  }

  @override
  Future<ExportOutcome> saveFile(
    Uint8List bytes,
    String fileName,
    String mimeType,
  ) async {
    final blob = web.Blob(
      [bytes.toJS].toJS,
      web.BlobPropertyBag(type: mimeType),
    );
    final url = web.URL.createObjectURL(blob);
    final a = web.HTMLAnchorElement()
      ..href = url
      ..download = fileName;
    a.style.display = 'none';
    web.document.body!.append(a);
    a.click();
    a.remove();
    Timer(const Duration(minutes: 1), () => web.URL.revokeObjectURL(url));
    return ExportOutcome.downloaded;
  }

  /// Encodes with the browser's native JPEG encoder (fast, off the Dart heap).
  Future<web.Blob> _encodeJpeg(LocalImage image) {
    final canvas = web.HTMLCanvasElement()
      ..width = image.width
      ..height = image.height;
    final ctx = canvas.getContext('2d') as web.CanvasRenderingContext2D;
    final clamped = Uint8ClampedList.view(
      image.rgba.buffer,
      image.rgba.offsetInBytes,
      image.rgba.lengthInBytes,
    );
    ctx.putImageData(
      web.ImageData(clamped.toJS, image.width, image.height.toJS),
      0,
      0,
    );
    final completer = Completer<web.Blob>();
    canvas.toBlob(
      ((web.Blob? blob) {
        canvas
          ..width = 0
          ..height = 0;
        if (blob == null) {
          completer.completeError(StateError('Could not encode JPEG'));
        } else {
          completer.complete(blob);
        }
      }).toJS,
      'image/jpeg',
      0.92.toJS,
    );
    return completer.future;
  }

  /// Plain-HTML overlay on top of the Flutter view. Styles are set through
  /// the CSSOM, which the Content-Security-Policy allows.
  void _showSaveOverlay(web.Blob blob, String name) {
    final url = web.URL.createObjectURL(blob);
    final doc = web.document;
    final overlay = doc.createElement('div') as web.HTMLDivElement
      ..id = 'save-overlay';
    _style(overlay, {
      'position': 'fixed',
      'inset': '0',
      'z-index': '2147483647',
      'background': '#000',
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center',
      'gap': '14px',
      'padding':
          'max(16px, env(safe-area-inset-top)) 16px max(16px, env(safe-area-inset-bottom))',
      'box-sizing': 'border-box',
      'font-family': '-apple-system, system-ui, sans-serif',
      'color': '#fff',
      'overflow': 'auto',
    });
    final hint = doc.createElement('div') as web.HTMLDivElement
      ..textContent = 'Press and hold the photo, then tap Save to Photos';
    _style(hint, {
      'font-size': '17px',
      'font-weight': '600',
      'text-align': 'center',
    });
    final picture = web.HTMLImageElement()
      ..src = url
      ..alt = 'Edited photo';
    _style(picture, {
      'max-width': '100%',
      'max-height': '68vh',
      'object-fit': 'contain',
      'border-radius': '8px',
      '-webkit-touch-callout': 'default',
      '-webkit-user-select': 'auto',
      'user-select': 'auto',
      'pointer-events': 'auto',
    });
    final row = doc.createElement('div') as web.HTMLDivElement;
    _style(row, {'display': 'flex', 'gap': '12px'});
    final download = web.HTMLAnchorElement()
      ..href = url
      ..download = name
      ..textContent = 'Download';
    download.setAttribute('role', 'button');
    _style(download, _buttonStyle('#e0607e'));
    final done = web.HTMLButtonElement()..textContent = 'Done';
    _style(done, _buttonStyle('#444'));
    final note = doc.createElement('div') as web.HTMLDivElement
      ..textContent =
          'Download saves the JPEG to the Files app. Your original photo is unchanged.';
    _style(note, {
      'font-size': '13px',
      'opacity': '0.75',
      'text-align': 'center',
    });
    done.onclick = ((web.Event _) {
      overlay.remove();
      web.URL.revokeObjectURL(url);
    }).toJS;
    row
      ..append(download)
      ..append(done);
    overlay
      ..append(hint)
      ..append(picture)
      ..append(row)
      ..append(note);
    doc.body!.append(overlay);
  }

  Map<String, String> _buttonStyle(String bg) => {
    'background': bg,
    'color': '#fff',
    'border': 'none',
    'border-radius': '22px',
    'padding': '12px 24px',
    'font-size': '16px',
    'font-weight': '600',
    'text-decoration': 'none',
    'font-family': 'inherit',
    'cursor': 'pointer',
  };

  void _style(web.HTMLElement el, Map<String, String> props) {
    props.forEach((k, v) => el.style.setProperty(k, v));
  }
}
