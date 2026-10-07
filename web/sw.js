// Offline service worker for Photo Effects.
// The build script (tool/build_web.sh) replaces the two placeholders below
// with a content hash and the list of every file in the build.
const VERSION = "__BUILD_VERSION__";
const PRECACHE = __PRECACHE_LIST__;
// Chromium-based browsers load a smaller CanvasKit build; Safari never does.
const CHROMIUM = __CHROMIUM_LIST__;
const isChromium = /Chrome\/|Chromium\/|CriOS\/|Edg\//.test(self.navigator.userAgent) &&
  !/CriOS\//.test(self.navigator.userAgent);
const CACHE = "photo-effects-" + VERSION;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(
        (isChromium ? PRECACHE.concat(CHROMIUM) : PRECACHE).map((p) => new Request(p, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k.startsWith("photo-effects-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Only ever serve this app's own files; nothing else is fetched.
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    // App shell: cached index.html, refreshed from the network when online.
    event.respondWith(
      caches.match(new URL("index.html", self.registration.scope).href).then((cached) =>
        cached || fetch(req))
    );
    return;
  }
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((resp) => {
        if (resp.ok && resp.type === "basic") {
          const copy = resp.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return resp;
      });
    })
  );
});
