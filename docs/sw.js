if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>n(e,o),f={module:{uri:o},exports:t,require:d};i[o]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/howler-Bn_ZqINu.js",revision:null},{url:"assets/index-4TGRyFJi.js",revision:null},{url:"assets/index-RzYLRUt-.css",revision:null},{url:"index.html",revision:"b8e55438e7e7426e0f454f63d32ae268"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"./icon-192x192.png",revision:"9b30d8b1d2f8de9f7e45f7a0d7d5ff85"},{url:"./icon-256x256.png",revision:"38bf79f2578dc374ed7dbb27fe964fc0"},{url:"./icon-384x384.png",revision:"e457a2b1fd4d9aa645877627a4063ccb"},{url:"./icon-512x512.png",revision:"9f2c1ab3ea4ea690022f1ab067b9ff4d"},{url:"manifest.webmanifest",revision:"b1b31836eefa493edddd5d4f0d65874e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
