var C="pp-v1",F=["https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js","https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js","https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"];
self.addEventListener("install",function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return Promise.all(F.concat(["./"]).map(function(u){return c.add(u).catch(function(){})}))}))});
self.addEventListener("activate",function(e){e.waitUntil(clients.claim())});
self.addEventListener("fetch",function(e){var r=e.request,u=new URL(r.url);if(r.method!=="GET")return;
  var own=u.origin===location.origin,sdk=u.hostname==="www.gstatic.com"&&u.pathname.indexOf("/firebasejs/")===0;
  if(!own&&!sdk)return;
  e.respondWith(caches.open(C).then(function(c){return c.match(r).then(function(m){
    var net=fetch(r).then(function(n){if(n&&n.ok)c.put(r,n.clone());return n}).catch(function(){return m});
    return m||net})}))});
