parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=function(e,n){document.body.insertAdjacentHTML("beforeend",'<div class="'.concat(n,'" data-qa="notification">').concat(e,"</div>"))},n=function(n){e(n,"success")},t=function(n){e(n,"warning")};document.addEventListener("contextmenu",function(e){e.preventDefault()});var o=new Promise(function(e,n){document.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){n(new Error("First promise was rejected"))},3e3)}),c=new Promise(function(e){document.addEventListener("mousedown",function(n){var t=n.button;0!==t&&2!==t||e("Second promise was resolved")})}),i=new Promise(function(e){var n=!1,t=!1;document.addEventListener("mousedown",function(o){switch(o.button){case 0:n=!0;break;case 2:t=!0}n&&t&&e("Third promise was resolved")})});o.then(n).catch(t),c.then(n).catch(t),i.then(n).catch(t);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a6a3c045.js.map