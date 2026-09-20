/* =========================================================
   Service Worker — شاشا تِك سوليوشنز
   يخزّن ملفات التطبيق ليعمل بدون إنترنت بعد أول فتح.
   عند أي تعديل على الملفات: غيّر رقم CACHE_VERSION
   حتى يحمّل العملاء النسخة الجديدة.
   ========================================================= */

const CACHE_VERSION = "shasha-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./logo.png",
  "./favicon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
  "./manifest.json",
];

/* التثبيت: تخزين ملفات التطبيق */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* التفعيل: حذف النسخ القديمة من الذاكرة */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

/* الجلب: الشبكة أولاً ثم الذاكرة عند انقطاع الإنترنت */
self.addEventListener("fetch", (event) => {
  let req = event.request;

  // الطلبات غير GET وروابط واتساب تمرّ مباشرة
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        let copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        return res;
      })
      .catch(() =>
        caches.match(req).then((hit) => hit || caches.match("./index.html"))
      )
  );
});
