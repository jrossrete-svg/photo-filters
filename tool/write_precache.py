"""Fills sw.js with a content hash and the list of every build file."""
import hashlib, json, os, sys

out = sys.argv[1]
# The web build uses MediaPipe Tasks (web/mediapipe) for faces; the iOS-only
# face_detection_tflite models (~33 MB) are never loaded on the web.
import shutil
shutil.rmtree(os.path.join(out, "assets/packages/face_detection_tflite"), ignore_errors=True)
# Renderer builds this JS/CanvasKit app never loads (skwasm/wimp are for
# --wasm builds; webparagraph only when explicitly preferred) and debug symbols.
shutil.rmtree(os.path.join(out, "canvaskit/webparagraph"), ignore_errors=True)
for root, _, names in os.walk(out):
    for n in names:
        if n.endswith(".symbols") or n.startswith(("skwasm", "wimp")):
            os.remove(os.path.join(root, n))
# Files never needed at runtime by this JS (CanvasKit) build.
SKIP_PREFIXES = ("canvaskit/skwasm", "canvaskit/wimp", "canvaskit/webparagraph")
# Only Chromium-based browsers use this variant; Safari uses canvaskit/canvaskit.*
CHROMIUM_PREFIX = "canvaskit/chromium/"
SKIP = {"sw.js", ".nojekyll", "version.json"}
files = []
h = hashlib.sha256()
for root, _, names in os.walk(out):
    for n in sorted(names):
        rel = os.path.relpath(os.path.join(root, n), out).replace(os.sep, "/")
        if rel in SKIP or rel.startswith(SKIP_PREFIXES) or rel.endswith((".map", ".symbols")):
            continue
        files.append(rel)
files.sort()
for rel in files:
    h.update(rel.encode())
    with open(os.path.join(out, rel), "rb") as f:
        h.update(f.read())
sw_path = os.path.join(out, "sw.js")
sw = open(sw_path).read()
sw = sw.replace("__BUILD_VERSION__", h.hexdigest()[:16])
core = [f for f in files if not f.startswith(CHROMIUM_PREFIX)]
chromium = [f for f in files if f.startswith(CHROMIUM_PREFIX)]
sw = sw.replace("__PRECACHE_LIST__", json.dumps(core, indent=1))
sw = sw.replace("__CHROMIUM_LIST__", json.dumps(chromium))
open(sw_path, "w").write(sw)
total = sum(os.path.getsize(os.path.join(out, f)) for f in core)
extra = sum(os.path.getsize(os.path.join(out, f)) for f in chromium)
print(f"Precaching {len(core)} files, {total/1e6:.1f} MB (+{extra/1e6:.1f} MB CanvasKit variant on Chromium browsers)")
