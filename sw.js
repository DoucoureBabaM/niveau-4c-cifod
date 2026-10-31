// Niveau 4C — cache pour une ouverture rapide et hors ligne.
// Change le numéro de CACHE à chaque nouvelle version : les téléphones affichent alors « Nouvelle version disponible ».
const CACHE = 'niveau4c-v110';
const PRECACHE = ['./', 'index.html', 'manifest.webmanifest', 'assets/apple-touch-icon.png', 'assets/arpunct.woff2', 'assets/cifod_cercle.png', 'assets/cifod_logo.png', 'assets/compagnon_cercle.jpg', 'assets/dots.svg', 'assets/facebook_logo.png', 'assets/fin-de-verset.svg', 'assets/hizb.svg', 'assets/icon-192.png', 'assets/icon-512.png', 'assets/icon-maskable-512.png', 'assets/jim.svg', 'assets/kfgqpc_hafs.ttf', 'assets/la.svg', 'assets/logo_android.png', 'assets/logo_apple.png', 'assets/logo_gmail.png', 'assets/logo_google_maps.png', 'assets/logo_psalmodie.svg', 'assets/logo_web_globe.png', 'assets/logo_whatsapp.png', 'assets/mim.svg', 'assets/petite-vue.iife.js', 'assets/qala.svg', 'assets/sajda.svg', 'assets/sala.svg', 'assets/sin.svg', 'assets/viatique_cercle.jpg'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)));
});
self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
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
