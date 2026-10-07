// End-to-end test of the built web app in a phone-sized headless browser.
//   NODE_PATH=<dir with playwright> node tool/e2e/web_e2e.cjs <url> <photo> <outDir> [chromium|webkit]
const { chromium, webkit, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

const [url, photo, outDir, engine = 'chromium'] = process.argv.slice(2);
const SAMPLES = path.join(__dirname, '..', '..', 'samples', 'filters');
const FILTERS = ['Soft Glam', 'Sunny Effect', 'Soft Freckles', 'Neon Lines', 'Light', 'Rosy Haze', 'SERUM', 'Glow Effect with Makeup'];
fs.mkdirSync(outDir, { recursive: true });
const results = { engine, url, steps: [], filters: {}, requests: [], foreignRequests: [], consoleErrors: [] };
let PAGE = null;
const log = (m) => { console.log(m); results.steps.push(m); };

async function enableSemantics(page) {
  await page.waitForSelector('flutter-view, flt-glass-pane', { timeout: 90000 });
  const ph = page.locator('flt-semantics-placeholder');
  await ph.waitFor({ state: 'attached', timeout: 30000 });
  await ph.evaluate((el) => el.click());
}


// Taps a filter card, scrolling the horizontal filter bar (mouse wheel) until
// the card is on screen, then confirms the card is marked as selected.
async function scrollIntoBar(page, btn) {
  const vw = page.viewportSize().width;
  for (let k = 0; k < 30; k++) {
    const box = (await btn.count()) ? await btn.boundingBox() : null;
    // Semantics rects are clipped to the list, so require the full card width.
    if (box && box.width >= 16 && box.x >= 0 && box.x < vw) break;
    const y = box ? box.y + box.height / 2 : page.viewportSize().height - 70;
    await page.mouse.move(vw / 2, y);
    await page.mouse.wheel(box && box.x < 0 ? -120 : 120, 0);
    await page.waitForTimeout(300);
  }
}

async function selectFilter(page, name) {
  const btn = page.getByRole('button', { name: new RegExp('^' + name.replace(/[()]/g, '.')) }).first();
  const isSelected = () => page.waitForFunction((n) => [...document.querySelectorAll('flt-semantics[role=button]')]
    .some((e) => e.textContent.startsWith(n) && e.getAttribute('aria-current') === 'true'), name, { timeout: 4000 })
    .then(() => true, () => false);
  for (let attempt = 0; attempt < 4; attempt++) {
    await scrollIntoBar(page, btn);
    await page.waitForTimeout(400); // let the scroll settle
    // Activate through the accessibility tree (like VoiceOver does), which
    // does not depend on pixel positions inside the scrolling bar.
    await btn.dispatchEvent('click');
    if (await isSelected()) return;
  }
  throw new Error(`could not select filter ${name}`);
}

async function waitReady(page, timeout = 180000) {
  await page.getByText('Rendering preview').first().waitFor({ state: 'attached', timeout: 1500 }).catch(() => {});
  await page.getByText('Preview ready').first().waitFor({ state: 'attached', timeout });
}

(async () => {
  const browserType = engine === 'webkit' ? webkit : chromium;
  const browser = await browserType.launch({
    args: engine === 'chromium' ? ['--enable-unsafe-swiftshader', '--use-angle=swiftshader'] : [],
  });
  const iphone = devices['iPhone 13'];
  const context = await browser.newContext({
    viewport: iphone.viewport,
    deviceScaleFactor: 2,
    hasTouch: true,
    isMobile: engine === 'chromium',
    acceptDownloads: true,
  });
  const origin = new URL(url).origin;
  // Block (and record) anything that is not this site, so a regression can
  // never leak data during the test; the assertion below requires zero.
  await context.route('**/*', (route) => {
    const u = route.request().url();
    if (u.startsWith(origin) || u.startsWith('blob:') || u.startsWith('data:')) return route.continue();
    results.blocked = (results.blocked || []).concat(u);
    return route.abort();
  });
  await context.addInitScript(() => {
    document.addEventListener('securitypolicyviolation', (e) =>
      console.error('CSP violation: ' + e.violatedDirective + ' ' + e.blockedURI));
    // Record every use of network-capable / share APIs in the page.
    window.__apiCalls = [];
    const rec = (n, a) => window.__apiCalls.push(n + ' ' + String(a && a[0] && (a[0].url || a[0])).slice(0, 120));
    const wrap = (obj, name, label) => {
      if (!obj || typeof obj[name] !== 'function') return;
      const orig = obj[name];
      obj[name] = function (...a) { rec(label, a); return orig.apply(this, a); };
    };
    wrap(navigator, 'share', 'navigator.share');
    wrap(navigator, 'canShare', 'navigator.canShare');
    wrap(navigator, 'sendBeacon', 'sendBeacon');
    wrap(window, 'fetch', 'fetch');
    const xo = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (m, u, ...r) { rec('XMLHttpRequest', [u]); return xo.call(this, m, u, ...r); };
    if (window.WebSocket) {
      const WS = window.WebSocket;
      window.WebSocket = function (...a) { rec('WebSocket', a); return new WS(...a); };
    }
    if (window.EventSource) {
      const ES = window.EventSource;
      window.EventSource = function (...a) { rec('EventSource', a); return new ES(...a); };
    }
    document.addEventListener('submit', (e) => rec('form submit', [e.target.action]), true);
  });
  context.on('request', (r) => {
    const u = r.url();
    results.requests.push(u);
    if (!u.startsWith(origin) && !u.startsWith('blob:') && !u.startsWith('data:')) results.foreignRequests.push(u);
  });
  const page = await context.newPage();
  PAGE = page;
  page.on('console', (m) => { if (m.type() === 'error') results.consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => results.consoleErrors.push('pageerror: ' + e.message));

  let t0 = Date.now();
  await page.goto(url, { waitUntil: 'load' });
  await enableSemantics(page);
  const choose = page.getByRole('button', { name: /Choose photo/ });
  await choose.waitFor({ timeout: 90000 });
  log(`home loaded in ${Date.now() - t0} ms`);
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, `${engine}-01-home.png`) });

  // Service worker should be installed and controlling after first load.
  const sw = await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.ready;
    await new Promise((r) => setTimeout(r, 500));
    const keys = await caches.keys();
    let n = 0;
    for (const k of keys) n += (await (await caches.open(k)).keys()).length;
    return { scope: reg.scope, active: !!reg.active, caches: keys, cachedEntries: n };
  });
  log(`service worker: ${JSON.stringify(sw)}`);
  results.serviceWorker = sw;

  async function pickAndOpen(tag) {
    t0 = Date.now();
    const [chooser] = await Promise.all([page.waitForEvent('filechooser', { timeout: 30000 }), choose.click()]);
    await chooser.setFiles(photo);
    await waitReady(page);
    const faces = await page.getByText(/face found|faces found|No face found|unavailable/).first().textContent().catch(() => '?');
    log(`${tag}: photo opened + first preview in ${Date.now() - t0} ms; status: ${faces}`);
    return faces;
  }

  results.faceStatus = await pickAndOpen('online');
  for (const [i, name] of FILTERS.entries()) {
    t0 = Date.now();
    if (i > 0) await selectFilter(page, name);
    const tSel = Date.now();
    await waitReady(page);
    // Time from the tap being registered to "Preview ready" (excludes
    // scrolling the filter bar in the test).
    const ms = Date.now() - tSel;
    const selectMs = tSel - t0;
    await page.waitForTimeout(300);
    const shot = path.join(outDir, `${engine}-02-filter-${i + 1}-${name.replace(/\W+/g, '_')}.png`);
    await page.screenshot({ path: shot });
    results.filters[name] = { ms, selectMs, screenshot: shot };
    log(`filter "${name}" rendered in ${ms} ms (selecting the tile took ${selectMs} ms)`);
  }

  // Before/after: drag the divider to the middle.
  const box = await page.getByText('Preview ready').first().boundingBox();
  if (box) {
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(outDir, `${engine}-03-before-after.png`) });
  }


  // ---- Soft Glam: full-size export timing (face retouch + reshape at 2048 px).
  async function saveCurrent(tag) {
    const t = Date.now();
    await page.getByRole('button', { name: /^Save/ }).first().click({ force: true });
    await page.waitForSelector('#save-overlay img', { timeout: 180000 });
    await page.waitForFunction(() => document.querySelector('#save-overlay img').complete);
    const ms = Date.now() - t;
    const info = await page.evaluate(() => {
      const img = document.querySelector('#save-overlay img');
      return { w: img.naturalWidth, h: img.naturalHeight };
    });
    await page.screenshot({ path: path.join(outDir, `${engine}-04-save-view-${tag}.png`) });
    const [dl] = await Promise.all([
      page.waitForEvent('download', { timeout: 60000 }).catch(() => null),
      page.locator('#save-overlay a[download]').click(),
    ]);
    let file = null;
    if (dl) {
      file = path.join(outDir, `${engine}-export-${tag}-${dl.suggestedFilename()}`);
      await dl.saveAs(file);
    }
    await page.locator('#save-overlay button').click();
    await page.waitForTimeout(500);
    return { ms, ...info, file };
  }
  await selectFilter(page, 'Soft Glam');
  await waitReady(page);
  results.softGlamSave = await saveCurrent('soft-glam');
  log(`Soft Glam full-size save: ${JSON.stringify(results.softGlamSave)}`);

  // ---- Your own filters: add (.cube, .json, .png), reject a photo, export, delete.
  async function addFilterFile(file, { png = false, expectError = false } = {}) {
    const tile = page.getByRole('button', { name: /^Add filter file/ }).first();
    await scrollIntoBar(page, tile);
    await page.waitForTimeout(400);
    await tile.dispatchEvent('click');
    await page.getByText('How to add your own filter').first().waitFor({ state: 'attached', timeout: 10000 });
    await page.waitForTimeout(400);
    if (!results.helpShot) {
      results.helpShot = path.join(outDir, `${engine}-07-add-filter-help.png`);
      await page.screenshot({ path: results.helpShot });
    }
    const [chooser] = await Promise.all([
      page.waitForEvent('filechooser', { timeout: 30000 }),
      page.getByRole('button', { name: /^Choose filter file/ }).first().click({ force: true }),
    ]);
    await chooser.setFiles(file);
    if (expectError) {
      await page.getByText('Filter file not added').first().waitFor({ state: 'attached', timeout: 30000 });
      await page.waitForTimeout(300);
      const msg = await page.getByText(/photo|Only filter files/).first().textContent().catch(() => '?');
      await page.screenshot({ path: path.join(outDir, `${engine}-09-rejected-photo.png`) });
      await page.getByRole('button', { name: /^OK/ }).first().click({ force: true });
      return msg;
    }
    if (png) {
      await page.getByText('Use this PNG as...').first().waitFor({ state: 'attached', timeout: 30000 });
      await page.waitForTimeout(300);
      await page.screenshot({ path: path.join(outDir, `${engine}-08-png-options.png`) });
      await page.getByRole('button', { name: 'Add filter', exact: true }).first().click({ force: true });
    }
    await page.getByText(/^Added "/).first().waitFor({ state: 'attached', timeout: 60000 });
    const added = await page.getByText(/^Added "/).first().textContent();
    await waitReady(page);
    return added;
  }

  const custom = {};
  t0 = Date.now();
  custom.cube = await addFilterFile(path.join(SAMPLES, 'warm-film.cube'));
  log(`custom .cube: ${custom.cube} (${Date.now() - t0} ms)`);
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, `${engine}-10-custom-cube.png`) });
  t0 = Date.now();
  custom.png = await addFilterFile(path.join(SAMPLES, 'golden-light-leak.png'), { png: true });
  log(`custom .png overlay: ${custom.png} (${Date.now() - t0} ms)`);
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, `${engine}-11-custom-overlay.png`) });
  t0 = Date.now();
  custom.json = await addFilterFile(path.join(SAMPLES, 'heart-glasses-sticker.json'));
  log(`custom .json sticker preset: ${custom.json} (${Date.now() - t0} ms)`);
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, `${engine}-12-custom-sticker.png`) });
  custom.rejectedPhoto = await addFilterFile(photo, { expectError: true });
  log(`photo offered as a filter file was rejected: ${custom.rejectedPhoto}`);

  // Export the sticker filter (download only).
  const [fdl] = await Promise.all([
    page.waitForEvent('download', { timeout: 30000 }).catch(() => null),
    page.getByRole('button', { name: /^Export filter/ }).first().click({ force: true }),
  ]);
  if (fdl) {
    const p = path.join(outDir, `${engine}-exported-${fdl.suggestedFilename()}`);
    await fdl.saveAs(p);
    const j = JSON.parse(fs.readFileSync(p, 'utf8'));
    custom.exported = { file: p, format: j.format, name: j.name, keys: Object.keys(j) };
    log(`exported filter: ${fdl.suggestedFilename()} format=${j.format} name=${j.name} keys=${Object.keys(j)}`);
  } else {
    throw new Error('Export filter: no download');
  }

  // Delete the overlay filter.
  await selectFilter(page, 'golden light leak');
  await waitReady(page);
  await page.getByRole('button', { name: /^Delete filter/ }).first().click({ force: true });
  await page.getByRole('button', { name: /^Delete$/ }).first().click({ force: true });
  await page.getByText(/^Deleted "/).first().waitFor({ state: 'attached', timeout: 10000 });
  const stillThere = await page.getByRole('button', { name: /^golden light leak/ }).count();
  log(`deleted overlay filter; tiles left with that name: ${stillThere}`);
  custom.deletedOk = stillThere === 0;
  await selectFilter(page, 'Heart Glasses');
  await waitReady(page);
  results.custom = custom;

  // Save the current filter as a new full-size JPEG (no share sheet).
  t0 = Date.now();
  await page.getByRole('button', { name: /^Save/ }).first().click({ force: true });
  await page.waitForSelector('#save-overlay img', { timeout: 180000 });
  await page.waitForFunction(() => document.querySelector('#save-overlay img').complete);
  const overlay = await page.evaluate(() => {
    const img = document.querySelector('#save-overlay img');
    return { hint: document.querySelector('#save-overlay div').textContent, w: img.naturalWidth, h: img.naturalHeight,
             src: img.src.slice(0, 5), shareApiCalls: window.__apiCalls.filter((c) => c.includes('share')).length };
  });
  log(`save view shown in ${Date.now() - t0} ms: ${JSON.stringify(overlay)}`);
  results.saveOverlay = overlay;
  await page.screenshot({ path: path.join(outDir, `${engine}-04-save-view.png`) });
  const [download] = await Promise.all([
    page.waitForEvent('download', { timeout: 60000 }).catch(() => null),
    page.locator('#save-overlay a[download]').click(),
  ]);
  if (download) {
    const p = path.join(outDir, `${engine}-export-${download.suggestedFilename()}`);
    await download.saveAs(p);
    results.exportFile = p;
    log(`download saved: ${p} (${fs.statSync(p).size} bytes)`);
  } else {
    log('download: no download event');
  }
  await page.locator('#save-overlay button').click();
  await page.waitForTimeout(500);

  // Offline: reload with the network cut and use the app again.
  // OFFLINE_CMD (optional) cuts the network for real, e.g. by stopping the
  // local server; Playwright's WebKit cannot emulate offline with a service worker.
  if (process.env.OFFLINE_CMD) {
    require('child_process').execSync(process.env.OFFLINE_CMD, { stdio: 'inherit' });
    log(`network cut with: ${process.env.OFFLINE_CMD}`);
  } else {
    await context.setOffline(true);
  }
  const before = results.requests.length;
  results.apiCallsOnline = await page.evaluate(() => window.__apiCalls);
  t0 = Date.now();
  await page.reload({ waitUntil: 'load' });
  await enableSemantics(page);
  await choose.waitFor({ timeout: 90000 });
  log(`OFFLINE reload: app shell loaded in ${Date.now() - t0} ms`);
  await page.screenshot({ path: path.join(outDir, `${engine}-05-offline-home.png`) });
  results.offlineFaceStatus = await pickAndOpen('offline');
  await selectFilter(page, 'Neon Lines');
  await waitReady(page);
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, `${engine}-06-offline-neon.png`) });
  log('OFFLINE: face filter applied');
  t0 = Date.now();
  await selectFilter(page, 'Soft Glam');
  await waitReady(page);
  log(`OFFLINE: Soft Glam rendered in ${Date.now() - t0} ms`);
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, `${engine}-06-offline-soft-glam.png`) });
  await selectFilter(page, 'Heart Glasses');
  await waitReady(page);
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(outDir, `${engine}-13-offline-custom.png`) });
  log('OFFLINE: own filter (stored in IndexedDB) still there and applied');
  results.offlineRequests = results.requests.slice(before).length;

  results.apiCalls = results.apiCallsOnline.concat(await page.evaluate(() => window.__apiCalls));
  await browser.close();
  const isSelf = (u) => u.startsWith(origin) || u.startsWith('blob:') || u.startsWith('data:') || !/^[a-z][a-z0-9+.-]*:/i.test(u);
  const nonSelf = results.apiCalls.filter((c) => {
    const m = /^(fetch|XMLHttpRequest) (.*)$/.exec(c);
    return !m || !isSelf(m[2]);
  });
  results.nonSelfApiCalls = nonSelf;
  console.log(`page API calls: ${results.apiCalls.length} (fetch/XHR to this site only); share/beacon/websocket/other-origin: ${nonSelf.length}`);
  for (const c of nonSelf.slice(0, 10)) console.log('  ' + c);
  results.ok = results.foreignRequests.length === 0 && !(results.blocked || []).length && nonSelf.length === 0;
  fs.writeFileSync(path.join(outDir, `${engine}-results.json`), JSON.stringify(results, null, 1));
  console.log(`total requests: ${results.requests.length}; cross-origin requests: ${results.foreignRequests.length}; blocked: ${(results.blocked || []).length}; console errors: ${results.consoleErrors.length}`);
  for (const e of results.consoleErrors.slice(0, 10)) console.log('  console: ' + e.slice(0, 300));
})().catch(async (e) => {
  console.error('E2E FAILED:', e);
  if (PAGE) await PAGE.screenshot({ path: path.join(outDir, `${engine}-FAILED.png`) }).catch(() => {});
  fs.writeFileSync(path.join(outDir, `${engine}-results.json`), JSON.stringify({ ...results, error: String(e) }, null, 1));
  process.exit(1);
});
