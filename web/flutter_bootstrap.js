{{flutter_js}}
{{flutter_build_config}}

// No Flutter service worker (we ship our own sw.js), CanvasKit served from
// this site, and font fallback pointed at a local path so the engine never
// contacts Google Fonts.
_flutter.loader.load({
  config: {
    canvasKitBaseUrl: "canvaskit/",
    fontFallbackBaseUrl: "assets/fallback-fonts/",
  },
  onEntrypointLoaded: async function (engineInitializer) {
    const appRunner = await engineInitializer.initializeEngine();
    const splash = document.getElementById("splash");
    if (splash) splash.remove();
    await appRunner.runApp();
  },
});
