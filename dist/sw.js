if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>n(e,o),d={module:{uri:o},exports:t,require:l};i[o]=Promise.all(s.map((e=>d[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/howler-CCqh-U3u.js",revision:null},{url:"assets/index-Ctsdhee6.css",revision:null},{url:"assets/index-OYC6SohV.js",revision:null},{url:"index.html",revision:"0f55ab0d9d503972b350df348a3d0edf"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"./icon-192x192.png",revision:"26dc5f6a2d863f35e4f0cb7fb4661abd"},{url:"./icon-256x256.png",revision:"1c75712c361419943141b017946269ee"},{url:"./icon-384x384.png",revision:"4e3973a52badf68424c4ed05ea4ffd6d"},{url:"./icon-512x512.png",revision:"e5c558d21f4102f4156135a0d93fa920"},{url:"manifest.webmanifest",revision:"975855b684eeb24a1a51f9478ff1c683"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
