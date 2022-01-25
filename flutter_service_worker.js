'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cfea21b0e7c9a89df3cc49c373ef9cfb",
".git/config": "ebf314a42d80e50e4c2b15273bbc615f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8418043f6167bbfd16205ddc416dc98e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e9ed0c8d0eb40e6aea130ec2b8228e0e",
".git/logs/refs/heads/master": "e9ed0c8d0eb40e6aea130ec2b8228e0e",
".git/logs/refs/remotes/origin/master": "ec53f484e3d4f67fc54bef5f189d450d",
".git/objects/02/ab18d4c984bb7b9e6174af50c67719a49fe5f6": "34a5aa5f169444d79fbe4424fcf431c0",
".git/objects/02/ced9231fcc83b2618321e16c620c69b1248177": "908c7b82ec0308068a8ac804fbefd06d",
".git/objects/05/506ff9663fcca4d532209cd26057a5f907f5af": "bf02ae2794aa712707df4740366a7ac9",
".git/objects/16/58efe4f70ec2f6a5abc9a895d8bfeb658cec39": "02c1154e16290165f2102017e1118c5a",
".git/objects/25/2e7901e6909c25b51d16e02e2131b38b4a287b": "593834f3db6f496792da7bc21bfd4676",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/f4a15216f5063d75ce39f308ea3e91c3a17c51": "bf4bae92d429b830c33ef9233366fec4",
".git/objects/3f/e6e8fb6fc32a70c92cdf4465c6518e14b8db2f": "7cb89ad2bf5ac06507729d0d93a9de95",
".git/objects/44/25b88fbd4dfcc2ea1fc3fb793bb5d322233de4": "abd68eb272b648daad81859bb5a4efd8",
".git/objects/45/3bf6ad6a4f8d3ab60666dc578270f928bfa3a5": "16718c202f372bbb08fd653eb1c0aaf6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/edc98e138e278f0fb913f6783704bce814b379": "27d54131a44984c6078cef9a2b0bc940",
".git/objects/51/4dae3a0469e526cf109f312c2b636daf9b7062": "aedd04db658afe737d6e5897bbe67e80",
".git/objects/63/a0d7614abe49ad5d28ed4b5e4cbb4698c17f4b": "148f4f1a3979e419e7afb740084be235",
".git/objects/68/23574e82bde9d7750fd035811a8631a5008ef3": "6e0c956984cbb35da8ff9dd50c0126e3",
".git/objects/6c/0e1750712772ccb1b42dfc87ec595d938b8336": "8ea0ee55591e52f6971c057dabf0a497",
".git/objects/71/272d5de07186dfeece5dbdeb2f3e949e29851e": "6317a583b095d1d2985743710b325ecd",
".git/objects/78/3d02ea00f60ea0993a605fd4e53ad5adb149ba": "0daff1a7857049866e1f26f204a4b066",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/9dd480473df5decd60be544d68c789964e0cb0": "95215c59b9043cf1a2584849e471d6cb",
".git/objects/a4/0fa0633ce6f5be8de95a14e46c5f84f97f9205": "fe4971488f08bc0ac636ad366e3c24bd",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/a8d1b06f0bf4ae06812dc110944905f441d43e": "b21bab5a2cdc9adbe856dfde757a0dd5",
".git/objects/b6/9e741dc36be226f8355d9df617eba14062c054": "04d605e0dc392d24e6616abd978b0df1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0a9cfb7cbd5553919fa8a0678accfc9a10474f": "4d8c321f21e09d6484bd58ec8540896f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/fbd5b5067027ef38da640b901980f0d59600b6": "b6d2a82ac45bccc3d36a8e5b1acd3b8b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/628b3a79636ef58f3f44cc26721943cf68f1e3": "b4a1208e91b8b980175091f5b3a8d22a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/6b8a3617ed2f294479ab16400ace96bc175b3e": "a537f66a11f7daaa74921c08f7900a42",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/eec9cb1d8d30900048d939aee8c61cb06c47b3": "5af40f7d5774fbdd5ef8aa33813c5cfd",
".git/objects/f2/70df3bea1aea0304d7fd71a14e8f88546ed7c9": "b4ccb4aabafabdee6bc13c0b6804bfef",
".git/refs/heads/master": "b50872c5b711914c80e9337f2fa2c033",
".git/refs/remotes/origin/master": "b50872c5b711914c80e9337f2fa2c033",
"assets/AssetManifest.json": "c673560cf0b9dfc25dbd673fce65e8ff",
"assets/assets/results.png": "06bf2cfacda0a777ea633eefe8b789d1",
"assets/assets/uneswa.png": "e3fdf150286242559a4630fb5d06feea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c816afb62639291a81141fb11cff6098",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "e3fdf150286242559a4630fb5d06feea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3e62c950640d7d3e9977eb499ab935d0",
"/": "3e62c950640d7d3e9977eb499ab935d0",
"main.dart.js": "d02a879480a37dabf662baae96987bac",
"manifest.json": "6f6ea49ed755ccbdf199fc53c2d6362e",
"version.json": "6efa424bb15000babf398f2f36b2cef1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
