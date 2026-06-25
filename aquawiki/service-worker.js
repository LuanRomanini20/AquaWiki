const CACHE_NAME = 'aquawiki-v4';
const PHOTO_CACHE = 'aquawiki-photos-v2';
const STATIC_ASSETS = [
  './',
  './index.html',
  './peixes.html',
  './ferramentas.html',
  './conteudo.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './assets/logo-dark.png',
  './assets/logo-light.png',
  './vendor/boxicons.min.css',
  './vendor/boxicons.woff2',
  './vendor/boxicons.woff',
  './vendor/boxicons.ttf'
];

/* ── Install: cache assets and skip waiting ── */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: clean old caches ── */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== PHOTO_CACHE)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/* ── Fetch: network-first for HTML, cache-first for assets ── */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  /* Wikimedia photos: stale-while-revalidate */
  if (url.hostname.includes('wikipedia.org') || url.hostname.includes('wikimedia.org')) {
    event.respondWith(
      caches.open(PHOTO_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          const fetched = fetch(request).then((response) => {
            if (response.ok) cache.put(request, response.clone());
            return response;
          }).catch(() => cached);
          return cached || fetched;
        })
      )
    );
    return;
  }

  /* HTML pages: network-first with cache fallback */
  if (request.destination === 'document' || url.pathname.endsWith('.html') || url.pathname === '/') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  /* Static assets: cache-first with network fallback */
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
