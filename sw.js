const CACHE = 'symbeast-v1';
const ASSETS = [
  '/Symbeast/',
  '/Symbeast/index.html',
  '/Symbeast/Icon.jpg',
  '/Symbeast/LARVA.png',
  '/Symbeast/AEGIS.png',
  '/Symbeast/BASTION.png',
  '/Symbeast/BLITZ.png',
  '/Symbeast/BRAWLER.png',
  '/Symbeast/CHAMPION.png',
  '/Symbeast/COLOSSUS.png',
  '/Symbeast/FORTRESS.png',
  '/Symbeast/IRONCLAD.png',
  '/Symbeast/IRONJAW.png',
  '/Symbeast/PHANTASM.png',
  '/Symbeast/RAGNAROK.png',
  '/Symbeast/RAZORCLAW.png',
  '/Symbeast/SHIELDWING.png',
  '/Symbeast/SOVEREIGN.png',
  '/Symbeast/SPECTER.png',
  '/Symbeast/STORMFANG.png',
  '/Symbeast/SWIFTGUARD.png',
  '/Symbeast/VANGUARD.png',
  '/Symbeast/WARLORD.png',
  '/Symbeast/WRAITH.png',
  '/Symbeast/BG-Desert-Day.jpg',
  '/Symbeast/BG-Desert-Night.jpg',
  '/Symbeast/BG-Forest-Day.jpg',
  '/Symbeast/BG-Forest-Night.jpg',
  '/Symbeast/BG-Grass-Day.jpg',
  '/Symbeast/BG-Grass-Night.jpg',
  '/Symbeast/Battle Scene/BG-VS-Mode.jpg',
  '/Symbeast/Battle Scene/Load-save-slot.jpg',
  '/Symbeast/Battle Scene/Title-symbeast.jpg',
  '/Symbeast/BGM/The Colossus Awakens.mp3'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
    const clone = res.clone();
    caches.open(CACHE).then(c => c.put(e.request, clone));
    return res;
  }).catch(() => caches.match('/Symbeast/'))));
});
