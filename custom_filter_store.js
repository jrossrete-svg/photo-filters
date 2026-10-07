// Stores user-added filter files (as validated JSON text) in this browser's
// IndexedDB. Nothing here talks to a network; data never leaves the device.
const DB_NAME = 'photo-effects-filters';
const STORE = 'filters';

let dbPromise = null;

function openDb() {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        if (!req.result.objectStoreNames.contains(STORE)) {
          req.result.createObjectStore(STORE, { keyPath: 'id' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => { dbPromise = null; reject(req.error); };
    });
  }
  return dbPromise;
}

function run(mode, fn) {
  return openDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, mode);
    const store = tx.objectStore(STORE);
    let result;
    const req = fn(store);
    if (req) req.onsuccess = () => { result = req.result; };
    tx.oncomplete = () => resolve(result);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || new Error('aborted'));
  }));
}

/** Returns [{id, json, createdAt}], oldest first. */
export async function list() {
  const all = (await run('readonly', (s) => s.getAll())) || [];
  return all
    .filter((r) => r && typeof r.id === 'string' && typeof r.json === 'string')
    .sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
}

export async function put(id, json, createdAt) {
  await run('readwrite', (s) => s.put({ id, json, createdAt }));
  // Ask the browser not to evict our data under storage pressure (best effort).
  try { if (navigator.storage && navigator.storage.persist) await navigator.storage.persist(); } catch (_) {}
  return true;
}

export async function remove(id) {
  await run('readwrite', (s) => s.delete(id));
  return true;
}
