// Niveau 4C — cache pour une ouverture rapide et hors ligne.
// Change le numéro de CACHE à chaque nouvelle version pour forcer la mise à jour sur les téléphones.
const CACHE = 'niveau4c-v4';
const PRECACHE = ['./', 'index.html', 'manifest.webmanifest', 'assets/apple-touch-icon.png', 'assets/cifod_cercle.png', 'assets/cifod_logo.png', 'assets/dots.svg', 'assets/fin-de-verset.svg', 'assets/hizb.svg', 'assets/icon-192.png', 'assets/icon-512.png', 'assets/icon-maskable-512.png', 'assets/jim.svg', 'assets/la.svg', 'assets/mim.svg', 'assets/petite-vue.iife.js', 'assets/qala.svg', 'assets/sajda.svg', 'assets/sala.svg', 'assets/sin.svg'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then((cache) => cache.match(e.request).then((cached) => {
    const network = fetch(e.request).then((res) => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(e.request, res.clone());
      return res;
    }).catch(() => cached);
    return cached || network;
  })));
});
