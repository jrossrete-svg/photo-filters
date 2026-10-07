// Thin ES-module bridge between the Flutter app (Dart JS interop) and
// MediaPipe Tasks Vision FaceLandmarker. All files are served locally from
// ./mediapipe/ so the app works offline and never contacts a CDN.
import { FilesetResolver, FaceLandmarker } from './mediapipe/vision_bundle.mjs';

let landmarkerPromise = null;

function getLandmarker() {
  if (!landmarkerPromise) {
    landmarkerPromise = (async () => {
      const wasmBase = new URL('./mediapipe/wasm', import.meta.url).href;
      const fileset = await FilesetResolver.forVisionTasks(wasmBase);
      return FaceLandmarker.createFromOptions(fileset, {
        baseOptions: {
          modelAssetPath: new URL('./mediapipe/face_landmarker.task', import.meta.url).href,
          // CPU is the most reliable choice on iPhone Safari for one-off photos.
          delegate: 'CPU',
        },
        runningMode: 'IMAGE',
        numFaces: 4,
        minFaceDetectionConfidence: 0.5,
        minFacePresenceConfidence: 0.5,
        outputFaceBlendshapes: false,
        outputFacialTransformationMatrixes: false,
      });
    })();
    // Allow a retry if loading failed (e.g. first load interrupted).
    landmarkerPromise.catch(() => { landmarkerPromise = null; });
  }
  return landmarkerPromise;
}

export async function warmUp() {
  await getLandmarker();
  return true;
}

/// rgba: Uint8Array of width*height*4 bytes. Returns one Float32Array per
/// face with interleaved normalised x, y (478 points).
export async function detectFaces(rgba, width, height) {
  const landmarker = await getLandmarker();
  const clamped = new Uint8ClampedArray(rgba.buffer, rgba.byteOffset, width * height * 4);
  const imageData = new ImageData(clamped, width, height);
  const result = landmarker.detect(imageData);
  return (result.faceLandmarks || []).map((pts) => {
    const out = new Float32Array(pts.length * 2);
    for (let i = 0; i < pts.length; i++) {
      out[2 * i] = pts[i].x;
      out[2 * i + 1] = pts[i].y;
    }
    return out;
  });
}
