parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uGUE":[function(require,module,exports) {
var e=[],t=function(t){t?n(t):e=document.querySelectorAll(".balance-text"),i();var l=r(function(){i()},100);window.addEventListener("resize",l)},n=function(t){selectorArray=t.split(",");for(var n=0;n<selectorArray.length;n+=1)for(var r=document.querySelectorAll(selectorArray[n].trim()),i=0;i<r.length;i+=1){var l=r[i];e.push(l)}},r=function(e,t,n){var r;return function(){var i=this,l=arguments,o=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(i,l)},t),o&&e.apply(i,l)}},i=function(){var t,n;for(n=0;n<e.length;n+=1)t=e[n],o(t)&&(t.style.maxWidth="",l(t,t.clientHeight,0,t.clientWidth))},l=function(e,t,n,r){var i;n>=r?e.style.maxWidth=r+"px":(i=(n+r)/2,e.style.maxWidth=i+"px",e.clientHeight>t?l(e,t,i+1,r):l(e,t,n+1,i))},o=function(e){var t,n,r,i,l;return l=e.innerHTML,10,r=e.innerHTML.split(" "),(i=document.createElement("span")).id="element-first-word",i.innerHTML=r[0],r=r.slice(1),e.innerHTML="",e.appendChild(i),e.innerHTML+=" "+r.join(" "),t=(i=document.getElementById("element-first-word")).offsetHeight,n=e.offsetHeight,e.innerHTML=l,n-10>t};exports.balanceText=t;
},{}],"EHrm":[function(require,module,exports) {
module.exports={name:"neighborhood-policing",version:"0.0.0",private:!0,scripts:{start:"parcel src/index.html --global script",build:"parcel build src/index.html --global script --public-url . --no-content-hash",postinstall:"patch-package"},devDependencies:{cssnano:"^4.1.10",eslint:"^7.0.0","parcel-bundler":"^1.12.3","patch-package":"^6.2.2","posthtml-expressions":"^1.4.0","posthtml-include":"^1.4.3",sass:"^1.26.5"},dependencies:{"intersection-observer":"^0.10.0","text-balancer":"^1.0.5"},browserslist:["defaults"],prettier:{singleQuote:!0,trailingComma:"all",arrowParens:"avoid"},spectate:{USE_NEWS_NAV:!0,USE_EYE_NAV:!1,USE_COVER_HED:!0,IS_EMBED:!1,DOC_URL:"https://docs.google.com/document/d/1FGkPBL-_FomV92Gk_p4KvTYDecKzWeLB-RctuWuEnv4/edit"}};
},{}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"cHld":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=require("../../package.json");function t(){document.querySelector(".g-artboard[data-min-width]")&&require("_bundle_loader")(require.resolve("./ai2html-resizer")).then(e=>e.default())}const n="div#fusion-app",o="div#fusion-app > div > div";function r(){const e=document.querySelector(n),r=document.querySelector(o);e.parentNode.replaceChild(r,e);const i=r.firstElementChild;[...i.children].some(e=>["META","LINK"].includes(e.tagName))&&(i.style.margin=0),t()}const i=3e3;let s=null;function d(e){document.body?document.querySelector(n)?r():t():e-(s||(s=e))<i?window.requestAnimationFrame(d):(console.log("Gave up replacing %s with article after %dms. Using window.onload.",n,i),window.onload=r)}const c="www.columbiaspectator.com"===window.location.host,a=0===window.location.pathname.indexOf("/contributors");function l(){"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype||require("_bundle_loader")(require.resolve("intersection-observer")).then(),!c||a||e.spectate.IS_EMBED?t():window.requestAnimationFrame(d)}if(c&&a){document.querySelectorAll(".story-summary > .twolines > link").forEach(e=>e.disabled=!0);const e=document.createElement("style");e.type="text/css",e.innerText=".story-summary > .twolines { display: none; }",document.head.appendChild(e)}
},{"../../package.json":"EHrm","_bundle_loader":"TUK3","./ai2html-resizer":[["ai2html-resizer.156db1cd.js","bSCl"],"ai2html-resizer.156db1cd.js.map","bSCl"],"intersection-observer":[["intersection-observer.f8cf3ea1.js","GkNt"],"intersection-observer.f8cf3ea1.js.map","GkNt"]}],"IOwx":[function(require,module,exports) {
"use strict";function e(e){let{node:t,onEnter:n,onExit:o}=e;new IntersectionObserver(e=>{let[t]=e;const{isIntersecting:r,boundingClientRect:{top:i}}=t;!r&&i<0?n():r&&i<window.innerHeight/2&&o()},{threshold:1}).observe(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.intersectTop=e;
},{}],"mpVp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hamburgerTrigger=c;var e=a(require("text-balancer")),t=a(require("./scripts/page")),s=require("./scripts/utils"),n=require("../package.json");function a(e){return e&&e.__esModule?e:{default:e}}(0,t.default)();const r=document.getElementById("navbar"),{USE_NEWS_NAV:i,USE_EYE_NAV:o,USE_COVER_HED:l}=n.spectate;function c(){r.classList.toggle("show-nav-links")}(i||o||l)&&(0,s.intersectTop)({node:document.getElementById("headline"),onEnter:()=>{r.classList.remove("only-eye-logo"),r.classList.remove("hide-news-navbar")},onExit:()=>{r.classList.remove("show-nav-links"),r.classList.add("only-eye-logo"),r.classList.add("hide-news-navbar")}}),window.innerWidth<=460&&e.default.balanceText("#headline, .deck, .image-caption-text");
},{"text-balancer":"uGUE","./scripts/page":"cHld","./scripts/utils":"IOwx","../package.json":"EHrm"}],"Yi9z":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("js",require("Yi9z"));
},{}]},{},[0,"mpVp"], "script")
//# sourceMappingURL=script.75da7f30.js.map