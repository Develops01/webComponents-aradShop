// // way 0 is using workbox lib
// importScripts(
//   "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
// );

// workbox.routing.registerRoute(
//   ({ request }) => request.destination === "image",
//   new workbox.strategies.NetworkFirst()
// );

// way 1
const assets = [
  "/",
  "/src/pages/categoryPage.html",
  "/src/pages/productPage.html",
  "/src/style/output.css",
  "/src/style/productSlider.css",
  "/src/js/formVaild.js",
  "/src/js/nav.js",
  "/src/js/slider.js",
  "/src/js/sw-register.js",
  "/src/js/toggleDropdown.js",
  "/src/js/toPersianNumber.js",
];
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open("assets").then((cache) => cache.addAll(assets)));
});

// State while revalidate strategy
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Even if the response is in the cache, we fetch it
      // and update the cache for future usage
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        caches.open("assets").then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
      // We use the currently cached version if it's there
      return cachedResponse || fetchPromise; // cached or a network fetch
    })
  );
});

// way 2
// const CACHE_NAME = "arad-cache-v1";
// self.addEventListener("install", (event) => {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Opened cache");
//       return cache.addAll(assets);
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }

//       // Clone the request because it's a stream
//       const fetchRequest = event.request.clone();

//       return fetch(fetchRequest).then((response) => {
//         // Check if we received a valid response
//         if (!response || response.status !== 200 || response.type !== "basic") {
//           return response;
//         }

//         // Clone the response because it's a stream
//         const responseToCache = response.clone();

//         caches.open(CACHE_NAME).then((cache) => {
//           cache.put(event.request, responseToCache);
//         });

//         return response;
//       });
//     })
//   );
// });
