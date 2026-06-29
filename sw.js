const CACHE = 'symbeast-v5';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.add('/Symbeast/')).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Only cache full responses (status 200), not partial (206)
        if(res.ok && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone)).catch(()=>{});
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
