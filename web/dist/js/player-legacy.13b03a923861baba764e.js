/*!
 * @project        Example Project
 * @name           player-legacy.13b03a923861baba764e.js
 * @author         Andrew Welch
 * @build          Mon, Dec 23, 2019 10:07 AM ET
 * @release        9fd2850b8f997b81ba48349e3b9790f3aea2235a [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */!function(t){function n(n){for(var e,c,u=n[0],a=n[1],f=n[2],l=0,p=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);for(s&&s(n);p.length;)p.shift()();return i.push.apply(i,f||[]),r()}function r(){for(var t,n=0;n<i.length;n++){for(var r=i[n],e=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(e=!1)}e&&(i.splice(n--,1),t=c(c.s=r[0]))}return t}var e={},o={7:0},i=[];function c(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var n=[],r=o[t];if(0!==r)if(r)n.push(r[2]);else{var e=new Promise((function(n,e){r=o[t]=[n,e]}));n.push(r[2]=e);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=function(t){return c.p+"js/"+({1:"vendors~vue~vueclickaway",2:"amplitudeplayer"}[t]||t)+"-legacy."+{1:"28adb5c0d9713e3605b1",2:"f5251fb914bec495d6f0"}[t]+".js"}(t);var a=new Error;i=function(n){u.onerror=u.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var e=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+e+": "+i+")",a.name="ChunkLoadError",a.type=e,a.request=i,r[1](a)}o[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(n)},c.m=t,c.c=e,c.d=function(t,n,r){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)c.d(r,e,function(n){return t[n]}.bind(null,e));return r},c.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/dist/",c.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var f=0;f<u.length;f++)n(u[f]);var s=a;i.push([118,0]),r()}([function(t,n,r){(function(n){var r="object",e=function(t){return t&&t.Math==Math&&t};t.exports=e(typeof globalThis==r&&globalThis)||e(typeof window==r&&window)||e(typeof self==r&&self)||e(typeof n==r&&n)||Function("return this")()}).call(this,r(51))},function(t,n,r){var e=r(0),o=r(13),i=r(33),c=r(60),u=e.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(4);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){"use strict";function e(t,n,r,e,o,i,c,u){var a,f="function"==typeof t?t.options:t;if(n&&(f.render=n,f.staticRenderFns=r,f._compiled=!0),e&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),c?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=a):o&&(a=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(f.functional){f._injectStyles=a;var s=f.render;f.render=function(t,n){return a.call(n),s(t,n)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:f}}r.d(n,"a",(function(){return e}))},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(6),o=r(29),i=r(2),c=r(19),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(0),o=r(13),i=r(11),c=r(5),u=r(17),a=r(31),f=r(32),s=f.get,l=f.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,r,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||c(r,"name")||i(r,"name",n),l(r).source=p.join("string"==typeof n?n:"")),t!==e?(a?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=r:i(t,n,r)):f?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a.call(this)}))},function(t,n,r){var e=r(6),o=r(9),i=r(28);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(0),o=r(17),i=r(30),c=e["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.2.1",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(34),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(6),o=r(55),i=r(28),c=r(16),u=r(19),a=r(5),f=r(29),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,r){var e=r(49),o=r(26);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(0),o=r(11);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){t.exports=r(42)},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(0),o=r(3),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports={}},function(t,n,r){var e=r(4),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(27),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(12);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(6),o=r(4),i=r(20);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n){t.exports=!1},function(t,n,r){var e=r(13);t.exports=e("native-function-to-string",Function.toString)},function(t,n,r){var e,o,i,c=r(56),u=r(0),a=r(3),f=r(11),s=r(5),l=r(44),p=r(21),h=u.WeakMap;if(c){var v=new h,d=v.get,y=v.has,g=v.set;e=function(t,n){return g.call(v,t,n),n},o=function(t){return d.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var m=l("state");p[m]=!0,e=function(t,n){return f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){t.exports=r(0)},function(t,n,r){var e=r(10),o=r(61),i=Object.prototype;o!==i.toString&&e(i,"toString",o,{unsafe:!0})},function(t,n,r){var e=r(8),o=r(1)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,r){"use strict";var e,o,i,c,u=r(48),a=r(30),f=r(0),s=r(34),l=r(62),p=r(10),h=r(63),v=r(64),d=r(65),y=r(3),g=r(12),m=r(66),x=r(8),w=r(67),b=r(71),j=r(54),O=r(39).set,E=r(72),_=r(73),S=r(74),P=r(41),T=r(75),L=r(40),N=r(32),I=r(22),k=r(1)("species"),F="Promise",M=N.get,A=N.set,C=N.getterFor(F),R=l,G=f.TypeError,$=f.document,D=f.process,V=f.fetch,U=D&&D.versions,z=U&&U.v8||"",Y=P.f,W=Y,X="process"==x(D),q=!!($&&$.createEvent&&f.dispatchEvent),J=I(F,(function(){var t=R.resolve(1),n=function(){},r=(t.constructor={})[k]=function(t){t(n,n)};return!((X||"function"==typeof PromiseRejectionEvent)&&(!a||t.finally)&&t.then(n)instanceof r&&0!==z.indexOf("6.6")&&-1===L.indexOf("Chrome/66"))})),K=J||!b((function(t){R.all(t).catch((function(){}))})),B=function(t){var n;return!(!y(t)||"function"!=typeof(n=t.then))&&n},H=function(t,n,r){if(!n.notified){n.notified=!0;var e=n.reactions;E((function(){for(var o=n.value,i=1==n.state,c=0;e.length>c;){var u,a,f,s=e[c++],l=i?s.ok:s.fail,p=s.resolve,h=s.reject,v=s.domain;try{l?(i||(2===n.rejection&&nt(t,n),n.rejection=1),!0===l?u=o:(v&&v.enter(),u=l(o),v&&(v.exit(),f=!0)),u===s.promise?h(G("Promise-chain cycle")):(a=B(u))?a.call(u,p,h):p(u)):h(o)}catch(t){v&&!f&&v.exit(),h(t)}}n.reactions=[],n.notified=!1,r&&!n.rejection&&Z(t,n)}))}},Q=function(t,n,r){var e,o;q?((e=$.createEvent("Event")).promise=n,e.reason=r,e.initEvent(t,!1,!0),f.dispatchEvent(e)):e={promise:n,reason:r},(o=f["on"+t])?o(e):"unhandledrejection"===t&&S("Unhandled promise rejection",r)},Z=function(t,n){O.call(f,(function(){var r,e=n.value;if(tt(n)&&(r=T((function(){X?D.emit("unhandledRejection",e,t):Q("unhandledrejection",t,e)})),n.rejection=X||tt(n)?2:1,r.error))throw r.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},nt=function(t,n){O.call(f,(function(){X?D.emit("rejectionHandled",t):Q("rejectionhandled",t,n.value)}))},rt=function(t,n,r,e){return function(o){t(n,r,o,e)}},et=function(t,n,r,e){n.done||(n.done=!0,e&&(n=e),n.value=r,n.state=2,H(t,n,!0))},ot=function(t,n,r,e){if(!n.done){n.done=!0,e&&(n=e);try{if(t===r)throw G("Promise can't be resolved itself");var o=B(r);o?E((function(){var e={done:!1};try{o.call(r,rt(ot,t,e,n),rt(et,t,e,n))}catch(r){et(t,e,r,n)}})):(n.value=r,n.state=1,H(t,n,!1))}catch(r){et(t,{done:!1},r,n)}}};J&&(R=function(t){m(this,R,F),g(t),e.call(this);var n=M(this);try{t(rt(ot,this,n),rt(et,this,n))}catch(t){et(this,n,t)}},(e=function(t){A(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=h(R.prototype,{then:function(t,n){var r=C(this),e=Y(j(this,R));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=X?D.domain:void 0,r.parent=!0,r.reactions.push(e),0!=r.state&&H(this,r,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e,n=M(t);this.promise=t,this.resolve=rt(ot,t,n),this.reject=rt(et,t,n)},P.f=Y=function(t){return t===R||t===i?new o(t):W(t)},a||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,n){var r=this;return new R((function(t,n){c.call(r,t,n)})).then(t,n)})),"function"==typeof V&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return _(R,V.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:J},{Promise:R}),v(R,F,!1,!0),d(F),i=s.Promise,u({target:F,stat:!0,forced:J},{reject:function(t){var n=Y(this);return n.reject.call(void 0,t),n.promise}}),u({target:F,stat:!0,forced:a||J},{resolve:function(t){return _(a&&this===i?R:this,t)}}),u({target:F,stat:!0,forced:K},{all:function(t){var n=this,r=Y(n),e=r.resolve,o=r.reject,i=T((function(){var r=g(n.resolve),i=[],c=0,u=1;w(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,r.call(n,t).then((function(t){f||(f=!0,i[a]=t,--u||e(i))}),o)})),--u||e(i)}));return i.error&&o(i.value),r.promise},race:function(t){var n=this,r=Y(n),e=r.reject,o=T((function(){var o=g(n.resolve);w(t,(function(t){o.call(n,t).then(r.resolve,e)}))}));return o.error&&e(o.value),r.promise}})},function(t,n){t.exports={}},function(t,n,r){var e,o,i,c=r(0),u=r(4),a=r(8),f=r(24),s=r(47),l=r(20),p=c.location,h=c.setImmediate,v=c.clearImmediate,d=c.process,y=c.MessageChannel,g=c.Dispatch,m=0,x={},w=function(t){if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},b=function(t){return function(){w(t)}},j=function(t){w(t.data)},O=function(t){c.postMessage(t+"",p.protocol+"//"+p.host)};h&&v||(h=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return x[++m]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},e(m),m},v=function(t){delete x[t]},"process"==a(d)?e=function(t){d.nextTick(b(t))}:g&&g.now?e=function(t){g.now(b(t))}:y?(i=(o=new y).port2,o.port1.onmessage=j,e=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(O)?e="onreadystatechange"in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),w(t)}}:function(t){setTimeout(b(t),0)}:(e=O,c.addEventListener("message",j,!1))),t.exports={set:h,clear:v}},function(t,n,r){var e=r(14);t.exports=e("navigator","userAgent")||""},function(t,n,r){"use strict";var e=r(12),o=function(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e})),this.resolve=e(n),this.reject=e(r)};t.exports.f=function(t){return new o(t)}},function(t,n,r){var e=function(t){"use strict";var n,r=Object.prototype,e=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function a(t,n,r,e){var o=n&&n.prototype instanceof d?n:d,i=Object.create(o.prototype),c=new P(e||[]);return i._invoke=function(t,n,r){var e=s;return function(o,i){if(e===p)throw new Error("Generator is already running");if(e===h){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=E(c,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===s)throw e=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=p;var a=f(t,n,r);if("normal"===a.type){if(e=r.done?h:l,a.arg===v)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(e=h,r.method="throw",r.arg=a.arg)}}}(t,r,c),i}function f(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var s="suspendedStart",l="suspendedYield",p="executing",h="completed",v={};function d(){}function y(){}function g(){}var m={};m[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(T([])));w&&w!==r&&e.call(w,i)&&(m=w);var b=g.prototype=d.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function O(t){var n;this._invoke=function(r,o){function i(){return new Promise((function(n,i){!function n(r,o,i,c){var u=f(t[r],t,o);if("throw"!==u.type){var a=u.arg,s=a.value;return s&&"object"==typeof s&&e.call(s,"__await")?Promise.resolve(s.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):Promise.resolve(s).then((function(t){a.value=t,i(a)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,r){var e=t.iterator[r.method];if(e===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=n,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(e.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=n,r.done=!0,r};return c.next=c}}return{next:L}}function L(){return{value:n,done:!0}}return y.prototype=b.constructor=g,g.constructor=y,g[u]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[c]=function(){return this},t.AsyncIterator=O,t.async=function(n,r,e,o){var i=new O(a(n,r,e,o));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(b),b[u]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(e,o){return u.type="throw",u.arg=t,r.next=e,o&&(r.method="next",r.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var a=e.call(c,"catchLoc"),f=e.call(c,"finallyLoc");if(a&&f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:T(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},function(t,n){function r(t,n,r,e,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void r(t)}u.done?n(a):Promise.resolve(a).then(e,o)}t.exports=function(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var c=t.apply(n,e);function u(t){r(c,o,i,u,a,"next",t)}function a(t){r(c,o,i,u,a,"throw",t)}u(void 0)}))}}},function(t,n,r){var e=r(13),o=r(33),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(46),o=r(25).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(5),o=r(16),i=r(53).indexOf,c=r(21);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(14);t.exports=e("document","documentElement")},function(t,n,r){var e=r(0),o=r(15).f,i=r(11),c=r(10),u=r(17),a=r(57),f=r(22);t.exports=function(t,n){var r,s,l,p,h,v=t.target,d=t.global,y=t.stat;if(r=d?e:y?e[v]||u(v,{}):(e[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(h=o(r,s))&&h.value:r[s],!f(d?s:v+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},function(t,n,r){var e=r(4),o=r(8),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){"use strict";var e=r(6),o=r(0),i=r(22),c=r(10),u=r(5),a=r(8),f=r(82),s=r(19),l=r(4),p=r(85),h=r(45).f,v=r(15).f,d=r(9).f,y=r(80).trim,g=o.Number,m=g.prototype,x="Number"==a(p(m)),w=function(t){var n,r,e,o,i,c,u,a,f=s(t,!1);if("string"==typeof f&&f.length>2)if(43===(n=(f=y(f)).charCodeAt(0))||45===n){if(88===(r=f.charCodeAt(2))||120===r)return NaN}else if(48===n){switch(f.charCodeAt(1)){case 66:case 98:e=2,o=49;break;case 79:case 111:e=8,o=55;break;default:return+f}for(c=(i=f.slice(2)).length,u=0;u<c;u++)if((a=i.charCodeAt(u))<48||a>o)return NaN;return parseInt(i,e)}return+f};if(i("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var b,j=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof j&&(x?l((function(){m.valueOf.call(r)})):"Number"!=a(r))?f(new g(w(n)),r,j):w(n)},O=e?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;O.length>E;E++)u(g,b=O[E])&&!u(j,b)&&d(j,b,v(g,b));j.prototype=m,m.constructor=j,c(o,"Number",j)}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(27),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n,r){var e=r(16),o=r(23),i=r(52),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,r){var e=r(2),o=r(12),i=r(1)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||null==(r=e(c)[i])?n:o(r)}},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(0),o=r(31),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,r){var e=r(5),o=r(58),i=r(15),c=r(9);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},function(t,n,r){var e=r(14),o=r(45),i=r(59),c=r(2);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(4);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){"use strict";var e=r(36),o={};o[r(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+e(this)+"]"}:o.toString},function(t,n,r){var e=r(0);t.exports=e.Promise},function(t,n,r){var e=r(10);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},function(t,n,r){var e=r(9).f,o=r(5),i=r(1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){"use strict";var e=r(14),o=r(9),i=r(1),c=r(6),u=i("species");t.exports=function(t){var n=e(t),r=o.f;c&&n&&!n[u]&&r(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,r){if(!(t instanceof n))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},function(t,n,r){var e=r(2),o=r(68),i=r(23),c=r(24),u=r(69),a=r(70),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,r,s,l){var p,h,v,d,y,g,m=c(n,r,s?2:1);if(l)p=t;else{if("function"!=typeof(h=u(t)))throw TypeError("Target is not iterable");if(o(h)){for(v=0,d=i(t.length);d>v;v++)if((y=s?m(e(g=t[v])[0],g[1]):m(t[v]))&&y instanceof f)return y;return new f(!1)}p=h.call(t)}for(;!(g=p.next()).done;)if((y=a(p,m,g.value,s))&&y instanceof f)return y;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n,r){var e=r(1),o=r(38),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,r){var e=r(36),o=r(38),i=r(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(2);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){var e,o,i,c,u,a,f,s,l=r(0),p=r(15).f,h=r(8),v=r(39).set,d=r(40),y=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,x="process"==h(g),w=p(l,"queueMicrotask"),b=w&&w.value;b||(e=function(){var t,n;for(x&&(t=g.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},x?c=function(){g.nextTick(e)}:y&&!/(iphone|ipod|ipad).*applewebkit/i.test(d)?(u=!0,a=document.createTextNode(""),new y(e).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):m&&m.resolve?(f=m.resolve(void 0),s=f.then,c=function(){s.call(f,e)}):c=function(){v.call(l,e)}),t.exports=b||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,r){var e=r(2),o=r(3),i=r(41);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(0);t.exports=function(t,n){var r=e.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));r(35),r(37);function e(t){var n,r=t.componentFactory,e=t.loading,o=t.loadingData;return function(){return{component:new Promise((function(t){n=t})),loading:{mounted:function(){var t=this;if("IntersectionObserver"in window){var e=new IntersectionObserver((function(o){o[0].intersectionRatio<=0||(e.unobserve(t.$el),r().then(n))}));e.observe(this.$el)}else r().then(n)},render:function(t){return t(e,o)}}}}}},,,,function(t,n,r){var e=r(26),o="["+r(81)+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(t){return function(n){var r=String(e(n));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,n,r){var e=r(3),o=r(83);t.exports=function(t,n,r){var i,c;return o&&"function"==typeof(i=n.constructor)&&i!==r&&e(c=i.prototype)&&c!==r.prototype&&o(t,c),t}},function(t,n,r){var e=r(2),o=r(84);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){var e=r(2),o=r(86),i=r(25),c=r(21),u=r(47),a=r(20),f=r(44)("IE_PROTO"),s=function(){},l=function(){var t,n=a("iframe"),r=i.length;for(n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[i[r]];return l()};t.exports=Object.create||function(t,n){var r;return null!==t?(s.prototype=e(t),r=new s,s.prototype=null,r[f]=t):r=l(),void 0===n?r:o(r,n)},c[f]=!0},function(t,n,r){var e=r(6),o=r(9),i=r(2),c=r(87);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=c(n),u=e.length,a=0;u>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(46),o=r(25);t.exports=Object.keys||function(t){return e(t,o)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";r.r(n);r(35),r(37);var e=r(18),o=r.n(e),i=(r(42),r(43)),c=r.n(i),u=r(76),a=r(79);(function(){var t=c()(o.a.mark((function t(){var n,e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(1).then(r.bind(null,89));case 2:n=t.sent,e=n.default,new e({el:"#amplitude-player",components:{"amplitude-player":Object(u.a)({componentFactory:function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,124))},loading:a.a,loadingData:{height:"109px",width:"100%"}})},data:{},methods:{},mounted:function(){}});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()().then((function(t){}))}]);
//# sourceMappingURL=player-legacy.13b03a923861baba764e.js.map