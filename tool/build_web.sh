#!/usr/bin/env bash
# Builds the offline web app into build/web.
#   tool/build_web.sh                  # served from the domain root
#   BASE_HREF=/photo-filters/ tool/build_web.sh   # e.g. GitHub Pages project site
set -euo pipefail
cd "$(dirname "$0")/.."
BASE_HREF="${BASE_HREF:-/}"

echo "1/4 Compiling the filter Web Worker"
dart compile js -O2 --no-source-maps -o web/filter_worker.js lib/worker/filter_worker.dart
rm -f web/filter_worker.js.deps web/filter_worker.js.map

echo "2/4 Building Flutter web (CanvasKit served locally, no CDN)"
flutter build web --release --no-web-resources-cdn --no-source-maps --base-href "$BASE_HREF"

echo "3/4 Writing the offline service worker"
OUT=build/web
# Flutter's own (deprecated) service worker is not used.
rm -f "$OUT/flutter_service_worker.js" "$OUT/.last_build_id"
python3 tool/write_precache.py "$OUT"
touch "$OUT/.nojekyll"

echo "4/4 Done: $(du -sh "$OUT" | cut -f1) in $OUT"
