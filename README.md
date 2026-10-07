# Photo Effects

Private photo filters that run entirely on your device. Pick a photo, choose
one of seven looks, adjust the strength, compare before/after, and save a new
copy. Your original photo is never changed, and no photo ever leaves the
device: there is no server, no account, no analytics, and the web app is
technically blocked from contacting any other website (see *Privacy*).

**Live web app:** https://jrossrete-svg.github.io/photo-filters/

| Filter | What it does |
| --- | --- |
| Sunny Effect | Warm golden-hour grade, soft sun flare from a corner, warm bloom. Works on any photo. |
| Soft Freckles | Natural-looking freckles across the nose and cheeks (deterministic pattern), light warmth and smoothing. Density control. |
| Neon Lines | Glowing magenta/cyan lines traced along the face outline, eyes, brows, nose and lips. Without a face it outlines the strongest edges instead. |
| Light | Soft, bright, airy "beauty light" (see decisions below). |
| Rosy Haze | Pink blush, rosy lips, dreamy pink haze and bloom. |
| SERUM | Dewy "glass skin" beauty look (see decisions below). |
| Glow Effect with Makeup | Eyeshadow, liner, mascara, brows, blush, berry lips and highlight, with a soft glow. |

Every face filter still works when no face is found: it applies only the
overall colour/light look and says so on screen.

## Using it on iPhone (no Mac, no Apple account, free)

1. Open **https://jrossrete-svg.github.io/photo-filters/** in Safari.
2. Tap the Share button, then **Add to Home Screen**. (This is iOS's own
   bookmark feature; nothing is sent anywhere.)
3. Open it once while online so it can store itself on the phone. After that it
   works in Airplane Mode.
4. Tap **Choose photo** and pick a photo. Faces are found on the phone.
5. Tap a filter, adjust **Intensity** (and the filter's extra control), drag
   on the photo to compare before/after.
6. Tap **Save**. The finished photo opens full screen:
   * **Press and hold the photo, then tap Save to Photos**, or
   * tap **Download** to save the JPEG to the Files app.
7. Post it wherever you like yourself, outside the app.

Notes and limits:
* Face detection on the web needs iOS 16.4 or newer (WebAssembly SIMD). On
  older iOS the overall looks still work but face effects are skipped.
* HEIC photos: Safari converts library photos to JPEG when picking, and decodes
  HEIC itself, so they work in Safari. Other browsers may not open HEIC.
* Web previews are computed at up to 1080 px and saved photos at up to
  2048 px on the long edge (to stay within iPhone browser memory). The native
  iOS app uses 1440 px / 4096 px.
* EXIF orientation is applied, and location/camera metadata is not copied to
  the saved photo.

## Privacy (how "no uploads" is enforced)

* `web/index.html` has a strict Content-Security-Policy:
  `default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self'; connect-src 'self'; worker-src 'self'; media-src 'none'; object-src 'none'; frame-src 'none'; base-uri 'self'; form-action 'none'`.
  The browser refuses any request to another origin, any form submission, and
  any script not served by this site. `'wasm-unsafe-eval'` is needed only to
  run the bundled WebAssembly (CanvasKit renderer and MediaPipe face
  landmarks); `style-src 'unsafe-inline'` only allows inline CSS styling.
* The app contains no `fetch`/XHR/beacon/WebSocket/form code of its own. Picked
  photos are read in memory with `File.arrayBuffer()`.
* There is no Web Share (share sheet) path. Saving uses the long-press menu or
  an `<a download>` link to a local `blob:` URL.
* Everything (Flutter engine, CanvasKit, fonts, MediaPipe wasm + model) is
  served from this site; nothing comes from a CDN. Flutter's font fallback is
  pointed at a local folder so it never contacts Google Fonts.
* The custom service worker (`web/sw.js`) only answers same-origin GET
  requests from its cache and ignores everything else.
* MediaPipe Tasks Vision is pinned to 0.10.35 on purpose: later versions
  (1.0.x/1.1.x) include a telemetry call to a Google logging endpoint.
* The end-to-end test (`tool/e2e/web_e2e.cjs`) aborts and counts every
  request that is not same-origin/blob/data and logs CSP violations during a
  full open, edit, save and download session; it must report 0.

## Design decisions

* **Light**: interpreted as a soft, bright, airy beauty light rather than a
  plain brightness boost: lifted exposure and shadows, protected highlights,
  diffusion and bloom, a gentle "ring light" on the face, light smoothing and
  a *Face protection* toggle that keeps skin from blowing out.
* **SERUM**: interpreted as a dewy "glass skin" skincare look: strong but
  texture-aware smoothing, dewy highlights on the cheekbones, nose and brow
  bone, groomed brows and lashes, soft blush, a glossy nude-pink lip, and an
  optional *Freckles* toggle (off by default).
* All looks are original work. Names describe the look only; this app is
  independent and not affiliated with Snap Inc./Snapchat, and contains none of
  their code, Lens files, textures, LUTs, shaders or branding.
* Freckles use a seeded random generator, so the same photo gives the same
  freckles every time (and preview matches export).

## Project layout

```
lib/
  models/      LocalImage, FaceLandmarks (468/478-point mesh, normalized), FilterSettings
  filters/     PhotoFilter interface + the 7 filters + registry
  rendering/   pure-Dart pixel pipeline: masks, blend modes, grading, effects, makeup,
               filter runner (Web Worker on web, isolate on iOS), image pipeline
  services/    decode (EXIF orientation), face landmarks (MediaPipe web / TFLite iOS),
               photo picking, local export
  screens/ widgets/  Flutter UI
  worker/      Web Worker entry point (compiled with dart2js)
web/           index.html (CSP), sw.js, manifest, icons, MediaPipe bridge + bundled files
ios/           Xcode project
test/          unit tests with synthetic landmarks
tool/          build_web.sh, precache list writer, preview renderer, Playwright e2e
```

The filter interface is
`PhotoFilter { id, displayName, apply({source, landmarks, settings}) }`.
Filters never touch Flutter APIs, so the same code runs in the Web Worker, an
isolate, and the unit tests.

## Building the web app

Requirements: Flutter 3.47+ (stable), Python 3.

```sh
flutter pub get
flutter analyze
flutter test
BASE_HREF=/photo-filters/ tool/build_web.sh   # output in build/web
```

`tool/build_web.sh` compiles the filter Web Worker, builds with
`--no-web-resources-cdn` (CanvasKit served locally), removes Flutter's own
service worker and unused renderer variants, writes the precache list into
`sw.js`, and adds `.nojekyll`. Use `BASE_HREF=/` when hosting at a domain root.

End-to-end test (Node + Playwright):

```sh
node tool/e2e/web_e2e.cjs http://localhost:8765/photo-filters/ photo.jpg out/ chromium
```

## Hosting (free)

The live site is GitHub Pages static hosting: the `main` branch holds this
source and the `gh-pages` branch holds the contents of `build/web`. No paid
services or servers are used. To update: rebuild, then replace the contents of
the `gh-pages` branch with `build/web`.

## Running the native iOS app (needs a Mac)

1. Install Xcode and Flutter on the Mac.
2. `flutter pub get`
3. `open ios/Runner.xcworkspace`, select the Runner target, Signing &
   Capabilities, choose your team (a free Apple ID works for your own device;
   apps signed this way expire after 7 days), and set a unique bundle id.
4. Plug in the iPhone, then `flutter run --release`.

The project uses Swift Package Manager, so `pod install` is not needed. The
minimum iOS version is 15.0 (`hooks: user_defines: dartcv4` in pubspec). On
iOS, face landmarks come from `face_detection_tflite` (on-device TFLite) and
saving uses the system Photos permission ("add only").

The native iOS build has **not** been compiled here (no Mac was available).

## Third-party licenses

| Component | License |
| --- | --- |
| Flutter, Dart SDK | BSD-3-Clause |
| CanvasKit (Skia) | BSD-3-Clause |
| @mediapipe/tasks-vision 0.10.35 (web/mediapipe) | Apache-2.0 |
| MediaPipe Face Landmarker model (face_landmarker.task) | Apache-2.0 |
| Roboto font | Apache-2.0 |
| image 4.10.1 | MIT |
| image_picker 1.2.4 | Apache-2.0 / BSD-3-Clause |
| face_detection_tflite 6.10.1, flutter_litert 3.9.3, dartcv4 2.3.1 (OpenCV) | Apache-2.0 |
| gal 2.3.3 | BSD-3-Clause |
| path_provider 2.1.6, file_selector 1.1.0, web 1.1.1 | BSD-3-Clause |

The in-app **About** screen (info button) lists the full license texts of every
package, plus `assets/licenses/THIRD_PARTY_NOTICES.txt`.

## Sample photo

Previews and tests use "Brunette woman portrait" by Christopher Campbell
(https://unsplash.com/photos/3hoAon9Mc88), via Wikimedia Commons
(https://commons.wikimedia.org/wiki/File:Brunette_woman_portrait_(Unsplash).jpg),
released under **CC0 1.0** (public domain dedication). It is not part of the app.
