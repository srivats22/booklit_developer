'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ec51f7695b1a9a828f35f1d88878a2c7",
".git/config": "feaca3bab63a32c1668dc9e6822318b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "ba82ca9636c50258dd0695cc9daa4ca0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0aba86332303561f36857333b92bd1f9",
".git/logs/refs/heads/master": "0aba86332303561f36857333b92bd1f9",
".git/logs/refs/remotes/origin/master": "70973e82538604e7055220a17ca6e462",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/0ad8698e3952c6d300819803401abeea7ab2e0": "0691bc4b25c950bcb3add7a049e34e2f",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/14/6ad4a4a04ed2525ac86ab3b54a25beef281569": "91bfdf9de2b39466102d214df7ca65c1",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/e28d11e475c3aeddd852680c3e04cfb6e68cc6": "7830333b7b41370c9e5e32fa405ec9ac",
".git/objects/26/899c77a81d852a2f30b742142c2ed014d8cd35": "94f08c2115c2eec7aacfc33d4019c51b",
".git/objects/38/e72d9a090c55ab38fd0e80343f96386a210fa5": "cdca0b039d58a4dfb0b968e8ff3ffe2b",
".git/objects/49/d451b402a4eec38cde2899b72be86b3acc6fdb": "a3215d9190d6891a3472d6e47db0052f",
".git/objects/73/3fc36f4d5b48ebe15829710dde8d20f996508d": "8d1c541aebe4a623a93db6fd3e9f1b9d",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/86/971bb3a2cc748dbeb943b7e3f64e220b913007": "4753f3f2fa079c98773ed09001ee8a07",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/ae/4d39d1d71849209f33bd986a289f7dddc8c45a": "38f5aace99616aaec9bda4937c75c8d1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ca/b85b6e766333cbd57df6ee49e079c1700055e0": "c36a3199e0b911d081dbe71e46d6c78f",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "6c4e9501116381e37a7df339d7943e7a",
".git/refs/remotes/origin/master": "6c4e9501116381e37a7df339d7943e7a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "36db1b5fbcc40a352ac7ae37fe3d9bd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/192.png": "ddcac6bfc1fe09c33adf3deaef9348bb",
"icons/512.png": "ad217312172d7ed6e96eac233338fdd7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a24db46142d13978344f6a6ad801e7be",
"/": "a24db46142d13978344f6a6ad801e7be",
"main.dart.js": "ccf7daef4d3d5940ec99f9e82bab37bf",
"manifest.json": "00bfc47cd39e17ed6af4469649200c62"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
