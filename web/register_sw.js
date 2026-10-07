// Registers the app's own offline service worker (sw.js precaches every
// build file, so the app opens and works with no connection).
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function (e) {
      console.warn("Service worker registration failed", e);
    });
  });
}
