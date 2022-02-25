'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2b8377b3967b7b1f87216d1dff7d1ed2",
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
".git/index": "62ccd74a516ff97fdbba8eba5277a533",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c75e96e9f3f209aaf816ca0a3c1bf4c8",
".git/logs/refs/heads/master": "c75e96e9f3f209aaf816ca0a3c1bf4c8",
".git/logs/refs/remotes/origin/master": "ec2565d004a766dbaf3ce071a9db7687",
".git/objects/02/ab18d4c984bb7b9e6174af50c67719a49fe5f6": "34a5aa5f169444d79fbe4424fcf431c0",
".git/objects/02/ced9231fcc83b2618321e16c620c69b1248177": "908c7b82ec0308068a8ac804fbefd06d",
".git/objects/03/8e5b278f684207362a773dd46197b1802b9679": "52bef6771e3c5fba65d26453479904a1",
".git/objects/05/506ff9663fcca4d532209cd26057a5f907f5af": "bf02ae2794aa712707df4740366a7ac9",
".git/objects/07/4df1b930cce8a1766d3f6986c50ff01b7733df": "a5345309f83c8ee36f2031935942933b",
".git/objects/08/1e267d62fc45129a13b0298477baf86be1a0e0": "2fd38c771f82b2c2689d6751cb6f143f",
".git/objects/09/916c9a8cb388424edcfec4fe71a25543c9183f": "4a2f5f47ca1bacaffd6f95a03e7599b2",
".git/objects/0c/d35b07ccf33f15871f69d2d5fa0f878da13073": "1ae5af266d1377a9ff7feb8790ba14c4",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/633405931ece1b950125f14b3f8a316065b076": "e0b39dba886fd049995329e832e842f2",
".git/objects/10/77fd243b07043afcc87064bf5a4e74b73025be": "7c8a891f8c0c6736069470e481b013d5",
".git/objects/11/859337cda282afc5851d92717f9ebb9644c22c": "1029d6654dd5725151d60a347101a61c",
".git/objects/14/c3af843af5c16251bf9c766e932031d75ddf66": "d39cd628cae00f1a7d2160ead78ea4b4",
".git/objects/16/58efe4f70ec2f6a5abc9a895d8bfeb658cec39": "02c1154e16290165f2102017e1118c5a",
".git/objects/17/a87593e1526b8bc43a8dae4c6c700925bc33cb": "c1a7616d9c579e376cbfa4e776186b44",
".git/objects/19/c46a5d3febde9980559c7397e1ea1a92336ec7": "8c9868fa86705cf5233330ef51637450",
".git/objects/1d/fee12ba89181a2ca1ff6a0ec3cc34aae32e390": "a7886c161a47a590ea8232714a479210",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/2e7901e6909c25b51d16e02e2131b38b4a287b": "593834f3db6f496792da7bc21bfd4676",
".git/objects/27/306cdd6693145404cfdfd7b7f27ff9e95cee05": "d615c85453f79cbf22a356cf05f02b41",
".git/objects/29/5889bcc6f5c355837f897e6b6eb506060c3588": "00f036d90aa992a87407cc5e81bb9bda",
".git/objects/2a/83e605c6b607e3b95d9deacd860e21ead9cb8e": "f2034e87edd150ae14559e9ffbfc0ed1",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/f4a15216f5063d75ce39f308ea3e91c3a17c51": "bf4bae92d429b830c33ef9233366fec4",
".git/objects/37/437de0b755d97b99a21bc97266a481f1838195": "f3dbf763cab25f7b75596ad67846e0e7",
".git/objects/3f/e6e8fb6fc32a70c92cdf4465c6518e14b8db2f": "7cb89ad2bf5ac06507729d0d93a9de95",
".git/objects/44/25b88fbd4dfcc2ea1fc3fb793bb5d322233de4": "abd68eb272b648daad81859bb5a4efd8",
".git/objects/45/3bf6ad6a4f8d3ab60666dc578270f928bfa3a5": "16718c202f372bbb08fd653eb1c0aaf6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/edc98e138e278f0fb913f6783704bce814b379": "27d54131a44984c6078cef9a2b0bc940",
".git/objects/4d/a01f1166852706db9d2288c81e4d44166daf82": "4fcef73d81a356553b32b4b9694517b1",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/4dae3a0469e526cf109f312c2b636daf9b7062": "aedd04db658afe737d6e5897bbe67e80",
".git/objects/53/f732597f450bdd0cadc563a22502e21c22b980": "9902b3c618063719bc19b989f762bbe4",
".git/objects/57/e6c0fa4e383bb0b62ed37673c4848f36c51db9": "880c47bb5c775b71e37e8b3c514eda2a",
".git/objects/59/cb2a02599ea3f833d98f388705f3bed8c48afc": "4db5ab8abc506e17ff25ce5cf7a3d57c",
".git/objects/59/e69a35e34bc789710af8459b2ffd631b595de1": "1381c24f075fa43718abeba81f378629",
".git/objects/62/d62cb068e81e05b6176274f2ed0057aaa6db8b": "2264c51ade56df00fa1d09b0373fd5c6",
".git/objects/63/a0d7614abe49ad5d28ed4b5e4cbb4698c17f4b": "148f4f1a3979e419e7afb740084be235",
".git/objects/64/1cece3a54798b2ffc1a7a7dca4ebf54ead5b6c": "1a4a5310a0a648cf1063fa554c12ba97",
".git/objects/68/23574e82bde9d7750fd035811a8631a5008ef3": "6e0c956984cbb35da8ff9dd50c0126e3",
".git/objects/69/fee8203e3d10d25e4f3b56f6c8032c695e27a8": "b5612aa5eec9c308b6a86f8e4516bccf",
".git/objects/6c/0e1750712772ccb1b42dfc87ec595d938b8336": "8ea0ee55591e52f6971c057dabf0a497",
".git/objects/6c/1fd6313cc4cbb8a0664a6338a9a30ad0c6b82c": "290326ba5d15c7b193c7b8a27ecbb5a8",
".git/objects/71/272d5de07186dfeece5dbdeb2f3e949e29851e": "6317a583b095d1d2985743710b325ecd",
".git/objects/72/6a1c41d3f32a91b0f0f20658f1400e8d297bd8": "0de698e2396a740567779984d48639a2",
".git/objects/73/2ffbaf7e6aedd4ed7298c7b3274edefbc7ac54": "b330b9ad53edaaf5a0fee548a2eb3b6d",
".git/objects/74/a4d7af7986d1acc924059f212f71d768b465b9": "45eb490f2613e672ba27035fa9dc99c6",
".git/objects/75/1ef9f314a64ad2d36a1edfa7f39f9222286174": "105997ca58e8144a7b9474cad533df34",
".git/objects/75/d69a57ac6277fca2e16307464e1d140d6f9cd2": "58db7f7773c9c140d661f82ec6a238e4",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/3d02ea00f60ea0993a605fd4e53ad5adb149ba": "0daff1a7857049866e1f26f204a4b066",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/4fc0f024a8ae3b929345eb84c732db4253fab2": "8e7d08bf69e6da8e2fb5d6c9112d2e0f",
".git/objects/7f/fba6a54bb1a1f25c3728e29e713a1e79e4a592": "fa2be0293b54c0fac313e2eedaf3110d",
".git/objects/83/e1c2431cb19fd2d93dce4d36bff2a170cc5abe": "8f013bca818630b699fc80dab1f13251",
".git/objects/87/7eb4aa9cdad5e2896976f4797fd17f51715b2d": "f4a8740c64cc50f769b2a899a7b49301",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/461035e3793b1a463f5761f6d23086d61f6eae": "e043040756cbb6c1fb58f6b510eec960",
".git/objects/8f/d1127a3e84d26081a7d4ba849d97a29a167b8e": "413fb92f792028a255cd145e8f9adea5",
".git/objects/9b/9359d2b670120540a3ecfab1fbced8d4f48de3": "10713a41a815cff77eecee55b53902db",
".git/objects/a0/9ab4550e78144c5af1b85029b6b8d5b2ebc5a7": "f4f7d5f6187b0c989ec1b360cf1d7c45",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/9dd480473df5decd60be544d68c789964e0cb0": "95215c59b9043cf1a2584849e471d6cb",
".git/objects/a3/600fcbcdbedc5c2e6f906dd50e3a87e9701e2d": "277d9098c347341cc469d8dfc46f3cbb",
".git/objects/a4/0fa0633ce6f5be8de95a14e46c5f84f97f9205": "fe4971488f08bc0ac636ad366e3c24bd",
".git/objects/a6/672792f4aca29d4ac4bb56191689c68ad032e8": "175f6893bc473c0a8b1ab734575a0db9",
".git/objects/a6/9b3efa95041493a016006799010d65cd3246b3": "ada4a37db85f8bd9cb55c98de518e463",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/e3ceea96566070fce8280f253e94dad3163119": "f933a23d6ae1f3300710dcae6e65970c",
".git/objects/b1/cce9cd0321781d9a2dd89056a0b81556420283": "a2b749e06f519c79966a629c9f13b4be",
".git/objects/b3/a8d1b06f0bf4ae06812dc110944905f441d43e": "b21bab5a2cdc9adbe856dfde757a0dd5",
".git/objects/b6/9e741dc36be226f8355d9df617eba14062c054": "04d605e0dc392d24e6616abd978b0df1",
".git/objects/b6/ec3c44b3a5409cdd0d4b36ad702800467549a7": "3d2eb73041fff1d0e97de6e8629d12b0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0a9cfb7cbd5553919fa8a0678accfc9a10474f": "4d8c321f21e09d6484bd58ec8540896f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/fbd5b5067027ef38da640b901980f0d59600b6": "b6d2a82ac45bccc3d36a8e5b1acd3b8b",
".git/objects/be/cffb9cf1ac1a391fde4ecced6f6e625e484ed4": "aa9044f771e37f7797f8e089ac3e35ff",
".git/objects/c7/75f5faaa6cd246e65156a1085b4a582a68b3bf": "252fdbabae4cd6745c9fe1e31e19664e",
".git/objects/c8/b7eebfda0c57a77df1e9283bfdb587f64b6e2b": "d93c69f1778d2cc7276f0b0411a1070a",
".git/objects/ce/5c24d5f48b351593f00d9ddfadd9e2e81d7ccf": "e4d15270b1c5f44e2aae039a21627cdf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/628b3a79636ef58f3f44cc26721943cf68f1e3": "b4a1208e91b8b980175091f5b3a8d22a",
".git/objects/dc/cfa28bd053513ea70c1e8e8d3ee290f8aafffc": "9818919518b18833a3b69a0d2634fed3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/6b8a3617ed2f294479ab16400ace96bc175b3e": "a537f66a11f7daaa74921c08f7900a42",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/eec9cb1d8d30900048d939aee8c61cb06c47b3": "5af40f7d5774fbdd5ef8aa33813c5cfd",
".git/objects/f2/0307356e8cd0249479afa0b5d3e39988d350a8": "cdc0bf377f027dd03e8a80e8929c2520",
".git/objects/f2/70df3bea1aea0304d7fd71a14e8f88546ed7c9": "b4ccb4aabafabdee6bc13c0b6804bfef",
".git/objects/f5/30ddb156652273cf1da689f765bedaaee957a7": "1829335bdd43fe9bd2b1847ca9e6ef0c",
".git/objects/f5/b19a5627cf84c7037daaf0dd03f3522c965c97": "2e3a4e3c3e0cd606e5c538d91737c0a7",
".git/objects/fc/12c65ae8e7643a93c0bd3ad6d8d53e8bc98a40": "4f6a987507de8f35d69f3336d16a818c",
".git/objects/fe/af2c4dfa30ebd46d1018ca7f6f4f89913e8ee8": "e6f47467b1124461864724da24665ca0",
".git/refs/heads/master": "b2c441b06447abf2a0711267665aa913",
".git/refs/remotes/origin/master": "b2c441b06447abf2a0711267665aa913",
"assets/AssetManifest.json": "c673560cf0b9dfc25dbd673fce65e8ff",
"assets/assets/results.png": "06bf2cfacda0a777ea633eefe8b789d1",
"assets/assets/uneswa.png": "e3fdf150286242559a4630fb5d06feea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "509eff3f62687cbe35cd06f84715fa27",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "e3fdf150286242559a4630fb5d06feea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e17e9b2ea6148a7c32a9b216040d9838",
"/": "e17e9b2ea6148a7c32a9b216040d9838",
"main.dart.js": "d20ee726dd3d8a464f956d4b1674ed7b",
"manifest.json": "6f6ea49ed755ccbdf199fc53c2d6362e",
"version.json": "c358e2d55f654614c6b0fc02df9dca2c"
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
