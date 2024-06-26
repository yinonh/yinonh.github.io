'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2e1cb4cda2f08eb84a031f1f5aa98702",
"assets/AssetManifest.bin.json": "64371b5162e35d6469cebc3ec84d31dc",
"assets/AssetManifest.json": "60f1b3165c9cc0ffa1f438c49872d7f9",
"assets/assets/arm%2520circles.gif": "c4eff50d14f3ab12f94512369b0fdc47",
"assets/assets/arts_and_literature.png": "ffc10dc5a47b871e356e3474d62c1952",
"assets/assets/background.mp3": "1c39a77222d25a746f33f5fa3a44de39",
"assets/assets/bellSound.mp3": "497be89c6fff55f1c33cf8a5406b2e80",
"assets/assets/cheering.mp3": "f7b47dd71af42b893410387a168ba992",
"assets/assets/english.png": "2358450d5830bb420ce3ad9613981fb2",
"assets/assets/film_and_tv.png": "5bd3b7aff55a0b8bc5ea287b9932b5df",
"assets/assets/food_and_drink.png": "f9a9a637b83b9ca895ebd29593d1813f",
"assets/assets/general_knowledge.png": "ff157a4b5ae4cffe87e23452bfd98b40",
"assets/assets/geography.png": "0b715206490e5f7076d1d96147972973",
"assets/assets/high%2520knee.gif": "08753e65f04f515e6f45d622f4e0df9a",
"assets/assets/history.png": "1e7faf5e8568a49419c40e3ba1e96019",
"assets/assets/israel.png": "7a01f877baad917c711435cd1deb763e",
"assets/assets/jumping%2520jacks.gif": "73812cad03fb219dc20ab01455f00b99",
"assets/assets/languages/en.json": "e3a792e0451485f72851606d7d1b5b43",
"assets/assets/languages/he.json": "5e2cbe0226d1f611c68f404fa5fd38de",
"assets/assets/logo.png": "cd170d55e2fc16b7ae9361c3ea487928",
"assets/assets/logo2.png": "3fbd4a5018f4d2ba41d3d9e65e18d064",
"assets/assets/metal.mp3": "7130bbcb910822ec180797828ed75377",
"assets/assets/music.png": "1caf732cf008b3e85b2c5ac63ef157fd",
"assets/assets/pop.mp3": "216b182676a3c4889950f7762c1bdc5f",
"assets/assets/rest.gif": "df9a4199e0ec2f6d74cfcfd12d7c5d39",
"assets/assets/rest2.gif": "88c695b432cb49d3ac071a915d40be55",
"assets/assets/rock.mp3": "8a0a34d76336f7ca3aa38250c7e08bf0",
"assets/assets/science.png": "13211dc46c1fe5324907b506872a1f09",
"assets/assets/side%2520stretch.gif": "5ea6481f9786eb77e3fea90e8b9e65ba",
"assets/assets/society_and_culture.png": "b9007a1b0640a5ddb5de9244e122a0fc",
"assets/assets/sport_and_leisure.png": "58d8f4114814e62ae6e1f0ade556d2dd",
"assets/assets/squat.gif": "57afb4c92693bc9d6eac4b32c9cc0399",
"assets/assets/usa.png": "1872505a1bebfbe2530123762113a15e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2fcc62c518044d2e42457dcada150281",
"assets/NOTICES": "7a36277492b23233aab467bfc8771ad2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "44d5e71db3600c5a45c1753d7822201a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "9f85b22028f1a53d3c7d31de0d131a45",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "fea16fe100eb8be6ecdb13db2d411022",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "a46a60b3146078938fadbeaf05083cbc",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "afc1a4b489f54e7210ebb639bea5040c",
"/": "afc1a4b489f54e7210ebb639bea5040c",
"main.dart.js": "64e735e34816e5176a663ade3ee9b5ec",
"manifest.json": "cb98924beecdcac8d72bd94edb1b30de",
"version.json": "58fb7c1f165036f87b63cd6dd3f30a14"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
