/*! For license information please see invite.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var n="object"==typeof exports?t(require("react")):t(e.react);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(function(e){return function(){var t={4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},6981:function(e,t,n){n(2699),e.exports=n(4579).Object.assign},5627:function(e,t,n){n(6760);var r=n(4579).Object;e.exports=function(e,t){return r.create(e,t)}},7965:function(e,t,n){n(520),e.exports=n(4579).Object.entries},8613:function(e,t,n){n(961),e.exports=n(4579).Object.keys},433:function(e,t,n){n(9349),e.exports=n(4579).Object.setPrototypeOf},8056:function(e,t,n){n(1013),e.exports=n(4579).Object.values},5663:function(e){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},2159:function(e,t,n){var r=n(6727);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},7428:function(e,t,n){var r=n(7932),o=n(8728),i=n(6531);e.exports=function(e){return function(t,n,a){var c,u=r(t),s=o(u.length),l=i(a,s);if(e&&n!=n){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}}},2894:function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},4579:function(e){var t=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},3817:function(e,t,n){var r=n(5663);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},8333:function(e){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},9666:function(e,t,n){e.exports=!n(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},7467:function(e,t,n){var r=n(6727),o=n(3938).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},3338:function(e){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},3856:function(e,t,n){var r=n(3938),o=n(4579),i=n(3817),a=n(1818),c=n(7069),u="prototype",s=function(e,t,n){var l,f,p,m=e&s.F,d=e&s.G,v=e&s.S,y=e&s.P,h=e&s.B,b=e&s.W,g=d?o:o[t]||(o[t]={}),x=g[u],S=d?r:v?r[t]:(r[t]||{})[u];for(l in d&&(n=t),n)(f=!m&&S&&void 0!==S[l])&&c(g,l)||(p=f?S[l]:n[l],g[l]=d&&"function"!=typeof S[l]?n[l]:h&&f?i(p,r):b&&S[l]==p?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[u]=e[u],t}(p):y&&"function"==typeof p?i(Function.call,p):p,y&&((g.virtual||(g.virtual={}))[l]=p,e&s.R&&x&&!x[l]&&a(x,l,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},7929:function(e){e.exports=function(e){try{return!!e()}catch(e){return!0}}},3938:function(e){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},7069:function(e){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},1818:function(e,t,n){var r=n(4743),o=n(3101);e.exports=n(9666)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},4881:function(e,t,n){var r=n(3938).document;e.exports=r&&r.documentElement},3758:function(e,t,n){e.exports=!n(9666)&&!n(7929)((function(){return 7!=Object.defineProperty(n(7467)("div"),"a",{get:function(){return 7}}).a}))},799:function(e,t,n){var r=n(2894);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},6727:function(e){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},6227:function(e){e.exports=!0},8082:function(e,t,n){"use strict";var r=n(9666),o=n(6162),i=n(8195),a=n(6274),c=n(6530),u=n(799),s=Object.assign;e.exports=!s||n(7929)((function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach((function(e){t[e]=e})),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=r}))?function(e,t){for(var n=c(e),s=arguments.length,l=1,f=i.f,p=a.f;s>l;)for(var m,d=u(arguments[l++]),v=f?o(d).concat(f(d)):o(d),y=v.length,h=0;y>h;)m=v[h++],r&&!p.call(d,m)||(n[m]=d[m]);return n}:s},526:function(e,t,n){var r=n(2159),o=n(7856),i=n(3338),a=n(8989)("IE_PROTO"),c=function(){},u="prototype",s=function(){var e,t=n(7467)("iframe"),r=i.length;for(t.style.display="none",n(4881).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),s=e.F;r--;)delete s[u][i[r]];return s()};e.exports=Object.create||function(e,t){var n;return null!==e?(c[u]=r(e),n=new c,c[u]=null,n[a]=e):n=s(),void 0===t?n:o(n,t)}},4743:function(e,t,n){var r=n(2159),o=n(3758),i=n(3206),a=Object.defineProperty;t.f=n(9666)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},7856:function(e,t,n){var r=n(4743),o=n(2159),i=n(6162);e.exports=n(9666)?Object.defineProperties:function(e,t){o(e);for(var n,a=i(t),c=a.length,u=0;c>u;)r.f(e,n=a[u++],t[n]);return e}},6183:function(e,t,n){var r=n(6274),o=n(3101),i=n(7932),a=n(3206),c=n(7069),u=n(3758),s=Object.getOwnPropertyDescriptor;t.f=n(9666)?s:function(e,t){if(e=i(e),t=a(t,!0),u)try{return s(e,t)}catch(e){}if(c(e,t))return o(!r.f.call(e,t),e[t])}},8195:function(e,t){t.f=Object.getOwnPropertySymbols},2963:function(e,t,n){var r=n(7069),o=n(7932),i=n(7428)(!1),a=n(8989)("IE_PROTO");e.exports=function(e,t){var n,c=o(e),u=0,s=[];for(n in c)n!=a&&r(c,n)&&s.push(n);for(;t.length>u;)r(c,n=t[u++])&&(~i(s,n)||s.push(n));return s}},6162:function(e,t,n){var r=n(2963),o=n(3338);e.exports=Object.keys||function(e){return r(e,o)}},6274:function(e,t){t.f={}.propertyIsEnumerable},2584:function(e,t,n){var r=n(3856),o=n(4579),i=n(7929);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*i((function(){n(1)})),"Object",a)}},2050:function(e,t,n){var r=n(9666),o=n(6162),i=n(7932),a=n(6274).f;e.exports=function(e){return function(t){for(var n,c=i(t),u=o(c),s=u.length,l=0,f=[];s>l;)n=u[l++],r&&!a.call(c,n)||f.push(e?[n,c[n]]:c[n]);return f}}},3101:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2906:function(e,t,n){var r=n(6727),o=n(2159),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(3817)(Function.call,n(6183).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},8989:function(e,t,n){var r=n(250)("keys"),o=n(5730);e.exports=function(e){return r[e]||(r[e]=o(e))}},250:function(e,t,n){var r=n(4579),o=n(3938),i="__core-js_shared__",a=o[i]||(o[i]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(6227)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},6531:function(e,t,n){var r=n(1052),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},1052:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7932:function(e,t,n){var r=n(799),o=n(8333);e.exports=function(e){return r(o(e))}},8728:function(e,t,n){var r=n(1052),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},6530:function(e,t,n){var r=n(8333);e.exports=function(e){return Object(r(e))}},3206:function(e,t,n){var r=n(6727);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},5730:function(e){var t=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+n).toString(36))}},2699:function(e,t,n){var r=n(3856);r(r.S+r.F,"Object",{assign:n(8082)})},6760:function(e,t,n){var r=n(3856);r(r.S,"Object",{create:n(526)})},961:function(e,t,n){var r=n(6530),o=n(6162);n(2584)("keys",(function(){return function(e){return o(r(e))}}))},9349:function(e,t,n){var r=n(3856);r(r.S,"Object",{setPrototypeOf:n(2906).set})},520:function(e,t,n){var r=n(3856),o=n(2050)(!0);r(r.S,"Object",{entries:function(e){return o(e)}})},1013:function(e,t,n){var r=n(3856),o=n(2050)(!1);r(r.S,"Object",{values:function(e){return o(e)}})},8834:function(e,t,n){"use strict";var r=n(8081),o=n.n(r),i=n(3645),a=n.n(i)()(o());a.push([e.id,".InviteForm .onetime-checkbox{width:20px;vertical-align:middle;display:inline;height:20px;margin-top:0px;box-shadow:none}.InviteForm .onetime-checkbox-label{margin-left:5px}.InviteForm .btn-group{float:right;padding-right:15px}.InviteForm .btn-group .k-primary{margin-left:5px}.InviteForm .invite-link{height:34px;display:flex;align-items:center;font-weight:bold;margin-bottom:10px}.InviteForm .invite-link i.fa-copy{margin-left:8px;font-size:20px;cursor:pointer;padding:6px;border:1px solid rgba(0,0,0,0)}.InviteForm .invite-link i.fa-copy:hover{background-color:#f8f8f8;border-radius:4px;border:1px solid #d3d3d3}.InviteForm .invite-link i.fa-spinner{font-size:18px}",""]),t.Z=a},3645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},8081:function(e){"use strict";e.exports=function(e){return e[1]}},1143:function(e){"use strict";e.exports=function(e,t,n,r,o,i,a,c){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,i,a,c],l=0;(u=new Error(t.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},4391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=null;return t.forEach((function(e){if(null==o){var t=e.apply(void 0,n);null!=t&&(o=t)}})),o}))};var r,o=(r=n(2613))&&r.__esModule?r:{default:r};e.exports=t.default},8853:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(8156)),o=n(9864),i=a(n(2613));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.default)((function(e,t,n,i,a){var c=e[t];return r.default.isValidElement(c)?new Error("Invalid "+i+" `"+a+"` of type ReactElement supplied to `"+n+"`,expected an element type (a string , component class, or function component)."):(0,o.isValidElementType)(c)?null:new Error("Invalid "+i+" `"+a+"` of value `"+c+"` supplied to `"+n+"`, expected an element type (a string , component class, or function component).")})),e.exports=t.default},2613:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,o,i,a){var c=o||"<<anonymous>>",u=a||r;if(null==n[r])return t?new Error("Required "+i+" `"+u+"` was not specified in `"+c+"`."):null;for(var s=arguments.length,l=Array(s>6?s-6:0),f=6;f<s;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,c,i,u].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9921:function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case f:case i:case c:case a:case m:return e;default:switch(e=e&&e.$$typeof){case s:case p:case y:case v:case u:return e;default:return t}}case o:return t}}}function O(e){return S(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=s,t.ContextProvider=u,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=y,t.Memo=v,t.Portal=o,t.Profiler=c,t.StrictMode=a,t.Suspense=m,t.isAsyncMode=function(e){return O(e)||S(e)===l},t.isConcurrentMode=O,t.isContextConsumer=function(e){return S(e)===s},t.isContextProvider=function(e){return S(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return S(e)===p},t.isFragment=function(e){return S(e)===i},t.isLazy=function(e){return S(e)===y},t.isMemo=function(e){return S(e)===v},t.isPortal=function(e){return S(e)===o},t.isProfiler=function(e){return S(e)===c},t.isStrictMode=function(e){return S(e)===a},t.isSuspense=function(e){return S(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===c||e===a||e===m||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===v||e.$$typeof===u||e.$$typeof===s||e.$$typeof===p||e.$$typeof===b||e.$$typeof===g||e.$$typeof===x||e.$$typeof===h)},t.typeOf=S},9864:function(e,t,n){"use strict";e.exports=n(9921)},3379:function(e){"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],l=i[s]||0,f="".concat(s," ").concat(l);i[s]=l+1;var p=n(f),m={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var d=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:d,references:1})}a.push(f)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var u=r(e,o),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=u}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},9216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:function(e){"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},670:function(e){"use strict";e.exports=function(){}},8156:function(t){"use strict";t.exports=e},3562:function(e,t,n){e.exports=n(7965)},8433:function(e,t,n){e.exports=n(8056)}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var o={};return function(){"use strict";r.r(o),r.d(o,{default:function(){return Ye}});var e=r(8156),t=r.n(e),n=r(6981);function i(){return i=n?n.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var a=r(8613);function c(e,t){if(null==e)return{};var n,r,o={},i=a(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var u=r(5627),s=r(433);function l(e,t){return l=s?s.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){e.prototype=u(t.prototype),e.prototype.constructor=e,l(e,t)}var p=r(4184),m=r.n(p),d=r(5697),v=r.n(d),y=r(8853),h=r.n(y),b=r(3562),g=r.n(b),x=r(1143),S=r.n(x),O="large",E="small",C={large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"},j=["lg","md","sm","xs"],w="default";function P(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return"function"==typeof n[n.length-1]?e.apply(void 0,n):function(t){return e.apply(void 0,n.concat([t]))}}}function k(e,t){var n=(e.bsClass||"").trim();return null==n&&S()(!1),n+(t?"-"+t:"")}var _=P((function(e,t){var n=t.propTypes||(t.propTypes={}),r=t.defaultProps||(t.defaultProps={});return n.bsClass=v().string,r.bsClass=e,t})),T=P((function(e,t,n){"string"!=typeof t&&(n=t,t=void 0);var r=n.STYLES||[],o=n.propTypes||{};e.forEach((function(e){-1===r.indexOf(e)&&r.push(e)}));var a=v().oneOf(r);return n.STYLES=r,a._values=r,n.propTypes=i({},o,{bsStyle:a}),void 0!==t&&((n.defaultProps||(n.defaultProps={})).bsStyle=t),n})),N=P((function(e,t,n){"string"!=typeof t&&(n=t,t=void 0);var r=n.SIZES||[],o=n.propTypes||{};e.forEach((function(e){-1===r.indexOf(e)&&r.push(e)}));var a=[];r.forEach((function(e){var t=C[e];t&&t!==e&&a.push(t),a.push(e)}));var c=v().oneOf(a);return c._values=a,n.SIZES=r,n.propTypes=i({},o,{bsSize:c}),void 0!==t&&(n.defaultProps||(n.defaultProps={}),n.defaultProps.bsSize=t),n}));function I(e){var t,n=((t={})[k(e)]=!0,t);return e.bsSize&&(n[k(e,C[e.bsSize]||e.bsSize)]=!0),e.bsStyle&&(n[k(e,e.bsStyle)]=!0),n}function F(e){return{bsClass:e.bsClass,bsSize:e.bsSize,bsStyle:e.bsStyle,bsRole:e.bsRole}}function M(e){return"bsClass"===e||"bsSize"===e||"bsStyle"===e||"bsRole"===e}function A(e){var t={};return g()(e).forEach((function(e){var n=e[0],r=e[1];M(n)||(t[n]=r)})),[F(e),t]}var $={horizontal:v().bool,inline:v().bool,componentClass:h()},R=function(e){function n(){return e.apply(this,arguments)||this}return f(n,e),n.prototype.render=function(){var e=this.props,n=e.horizontal,r=e.inline,o=e.componentClass,a=e.className,u=A(c(e,["horizontal","inline","componentClass","className"])),s=u[0],l=u[1],f=[];return n&&f.push(k(s,"horizontal")),r&&f.push(k(s,"inline")),t().createElement(o,i({},l,{className:m()(a,f)}))},n}(t().Component);R.propTypes=$,R.defaultProps={horizontal:!1,inline:!1,componentClass:"form"};var z=_("form",R),D=function(e,n,r){var o=0,i=!1;return t().Children.forEach(e,(function(e){i||t().isValidElement(e)&&n.call(r,e,o++)&&(i=!0)})),i},L={controlId:v().string,validationState:v().oneOf(["success","warning","error",null])},G={$bs_formGroup:v().object.isRequired},U=function(e){function n(){return e.apply(this,arguments)||this}f(n,e);var r=n.prototype;return r.getChildContext=function(){var e=this.props;return{$bs_formGroup:{controlId:e.controlId,validationState:e.validationState}}},r.hasFeedback=function(e){var t=this;return D(e,(function(e){return"feedback"===e.props.bsRole||e.props.children&&t.hasFeedback(e.props.children)}))},r.render=function(){var e=this.props,n=e.validationState,r=e.className,o=e.children,a=function(e,t){var n={};["controlId"].forEach((function(e){n[e]=!0}));var r={};return g()(e).forEach((function(e){var t=e[0],o=e[1];M(t)||n[t]||(r[t]=o)})),[F(e),r]}(c(e,["validationState","className","children"])),u=a[0],s=a[1],l=i({},I(u),{"has-feedback":this.hasFeedback(o)});return n&&(l["has-"+n]=!0),t().createElement("div",i({},s,{className:m()(r,l)}),o)},n}(t().Component);U.propTypes=L,U.childContextTypes=G;var q=_("form-group",N([O,E],U)),V=(r(670),{htmlFor:v().string,srOnly:v().bool}),H={$bs_formGroup:v().object},K=function(e){function n(){return e.apply(this,arguments)||this}return f(n,e),n.prototype.render=function(){var e=this.context.$bs_formGroup,n=e&&e.controlId,r=this.props,o=r.htmlFor,a=void 0===o?n:o,u=r.srOnly,s=r.className,l=A(c(r,["htmlFor","srOnly","className"])),f=l[0],p=l[1],d=i({},I(f),{"sr-only":u});return t().createElement("label",i({},p,{htmlFor:a,className:m()(s,d)}))},n}(t().Component);K.propTypes=V,K.defaultProps={srOnly:!1},K.contextTypes=H;var W=_("control-label",K),Z={componentClass:h(),xs:v().number,sm:v().number,md:v().number,lg:v().number,xsHidden:v().bool,smHidden:v().bool,mdHidden:v().bool,lgHidden:v().bool,xsOffset:v().number,smOffset:v().number,mdOffset:v().number,lgOffset:v().number,xsPush:v().number,smPush:v().number,mdPush:v().number,lgPush:v().number,xsPull:v().number,smPull:v().number,mdPull:v().number,lgPull:v().number},B=function(e){function n(){return e.apply(this,arguments)||this}return f(n,e),n.prototype.render=function(){var e=this.props,n=e.componentClass,r=e.className,o=A(c(e,["componentClass","className"])),a=o[0],u=o[1],s=[];return j.forEach((function(e){function t(t,n){var r=""+e+t,o=u[r];null!=o&&s.push(k(a,""+e+n+"-"+o)),delete u[r]}t("",""),t("Offset","-offset"),t("Push","-push"),t("Pull","-pull");var n=e+"Hidden";u[n]&&s.push("hidden-"+e),delete u[n]})),t().createElement(n,i({},u,{className:m()(r,s)}))},n}(t().Component);B.propTypes=Z,B.defaultProps={componentClass:"div"};var Y=_("col",B),J={glyph:v().string.isRequired},Q=function(e){function n(){return e.apply(this,arguments)||this}return f(n,e),n.prototype.render=function(){var e,n=this.props,r=n.glyph,o=n.className,a=A(c(n,["glyph","className"])),u=a[0],s=a[1],l=i({},I(u),((e={})[k(u,r)]=!0,e));return t().createElement("span",i({},s,{className:m()(o,l)}))},n}(t().Component);Q.propTypes=J;var X=_("glyphicon",Q),ee={$bs_formGroup:v().object},te=function(e){function n(){return e.apply(this,arguments)||this}f(n,e);var r=n.prototype;return r.getGlyph=function(e){switch(e){case"success":return"ok";case"warning":return"warning-sign";case"error":return"remove";default:return null}},r.renderDefaultFeedback=function(e,n,r,o){var a=this.getGlyph(e&&e.validationState);return a?t().createElement(X,i({},o,{glyph:a,className:m()(n,r)})):null},r.render=function(){var e=this.props,n=e.className,r=e.children,o=A(c(e,["className","children"])),a=o[0],u=o[1],s=I(a);if(!r)return this.renderDefaultFeedback(this.context.$bs_formGroup,n,s,u);var l=t().Children.only(r);return t().cloneElement(l,i({},u,{className:m()(l.props.className,n,s)}))},n}(t().Component);te.defaultProps={bsRole:"feedback"},te.contextTypes=ee;var ne=_("form-control-feedback",te),re={componentClass:h()},oe=function(e){function n(){return e.apply(this,arguments)||this}return f(n,e),n.prototype.render=function(){var e=this.props,n=e.componentClass,r=e.className,o=A(c(e,["componentClass","className"])),a=o[0],u=o[1],s=I(a);return t().createElement(n,i({},u,{className:m()(r,s)}))},n}(t().Component);oe.propTypes=re,oe.defaultProps={componentClass:"p"};var ie=_("form-control-static",oe),ae={componentClass:h(),type:v().string,id:v().string,inputRef:v().func},ce={$bs_formGroup:v().object},ue=function(e){function n(){return e.apply(this,arguments)||this}return f(n,e),n.prototype.render=function(){var e,n=this.context.$bs_formGroup,r=n&&n.controlId,o=this.props,a=o.componentClass,u=o.type,s=o.id,l=void 0===s?r:s,f=o.inputRef,p=o.className,d=o.bsSize,v=A(c(o,["componentClass","type","id","inputRef","className","bsSize"])),y=v[0],h=v[1];return"file"!==u&&(e=I(y)),d&&(e[k({bsClass:"input"},C[d]||d)]=!0),t().createElement(a,i({},h,{type:u,id:l,ref:f,className:m()(p,e)}))},n}(t().Component);ue.propTypes=ae,ue.defaultProps={componentClass:"input"},ue.contextTypes=ce,ue.Feedback=ne,ue.Static=ie;var se=_("form-control",N([E,O],ue)),le=r(4391),fe=r.n(le),pe=r(8433),me=r.n(pe);function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ve=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),null)},ye={href:v().string,onClick:v().func,onKeyDown:v().func,disabled:v().bool,role:v().string,tabIndex:v().oneOfType([v().number,v().string]),componentClass:h()};function he(e){return!e||"#"===e.trim()}var be=function(e){function n(t,n){var r;return(r=e.call(this,t,n)||this).handleClick=r.handleClick.bind(de(de(r))),r.handleKeyDown=r.handleKeyDown.bind(de(de(r))),r}f(n,e);var r=n.prototype;return r.handleClick=function(e){var t=this.props,n=t.disabled,r=t.href,o=t.onClick;(n||he(r))&&e.preventDefault(),n?e.stopPropagation():o&&o(e)},r.handleKeyDown=function(e){" "===e.key&&(e.preventDefault(),this.handleClick(e))},r.render=function(){var e=this.props,n=e.componentClass,r=e.disabled,o=e.onKeyDown,a=c(e,["componentClass","disabled","onKeyDown"]);return he(a.href)&&(a.role=a.role||"button",a.href=a.href||"#"),r&&(a.tabIndex=-1,a.style=i({pointerEvents:"none"},a.style)),t().createElement(n,i({},a,{onClick:this.handleClick,onKeyDown:ve(this.handleKeyDown,o)}))},n}(t().Component);be.propTypes=ye,be.defaultProps={componentClass:"a"};var ge=be,xe={active:v().bool,disabled:v().bool,block:v().bool,onClick:v().func,componentClass:h(),href:v().string,type:v().oneOf(["button","reset","submit"])},Se=function(e){function n(){return e.apply(this,arguments)||this}f(n,e);var r=n.prototype;return r.renderAnchor=function(e,n){return t().createElement(ge,i({},e,{className:m()(n,e.disabled&&"disabled")}))},r.renderButton=function(e,n){var r=e.componentClass,o=c(e,["componentClass"]),a=r||"button";return t().createElement(a,i({},o,{type:o.type||"button",className:n}))},r.render=function(){var e,t=this.props,n=t.active,r=t.block,o=t.className,a=A(c(t,["active","block","className"])),u=a[0],s=a[1],l=i({},I(u),((e={active:n})[k(u,"block")]=r,e)),f=m()(o,l);return s.href?this.renderAnchor(s,f):this.renderButton(s,f)},n}(t().Component);Se.propTypes=xe,Se.defaultProps={active:!1,block:!1,disabled:!1};var Oe=_("btn",N([O,E,"xsmall"],T(me()({SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info"}).concat([w,"primary","link"]),w,Se))),Ee={vertical:v().bool,justified:v().bool,block:fe()(v().bool,(function(e){var t=e.block,n=e.vertical;return t&&!n?new Error("`block` requires `vertical` to be set to have any effect"):null}))},Ce=function(e){function n(){return e.apply(this,arguments)||this}return f(n,e),n.prototype.render=function(){var e,n=this.props,r=n.block,o=n.justified,a=n.vertical,u=n.className,s=A(c(n,["block","justified","vertical","className"])),l=s[0],f=s[1],p=i({},I(l),((e={})[k(l)]=!a,e[k(l,"vertical")]=a,e[k(l,"justified")]=o,e[k(Oe.defaultProps,"block")]=r,e));return t().createElement("div",i({},f,{className:m()(u,p)}))},n}(t().Component);Ce.propTypes=Ee,Ce.defaultProps={block:!1,justified:!1,vertical:!1};var je=_("btn-group",Ce);function we(e){return we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},we(e)}function Pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){Te(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Te(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==we(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==we(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===we(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ne={name:{value:"",error:null,touched:!1},email:{value:"",error:null,touched:!1},phone:{value:"",error:null,touched:!1},message:{value:"",error:null,touched:!1},oneTime:{value:!1,error:null,touched:!1}},Ie=function(e){var t=e.name,n=e.email,r=e.phone,o=e.message,i=e.oneTime;return{name:t.value,email:n.value,phone:r.value,message:o.value,oneTime:i.value}},Fe=function(n){var r,o,i,a,c=n.onClose,u=n.onSubmit,s=n.generateLink,l=n.t,f=n.currentUser,p=n.initialValues,m=n.validators,d=n.sent,v=n.inviteLink,y=n.handleCopy,h=(0,e.useState)(function(e,t){return Object.keys(e).reduce((function(n,r){return _e(_e({},n),{},Te({},r,_e(_e({},e[r]),{},{value:t[r]})))}),{})}(Ne,p)),b=(o=2,function(e){if(Array.isArray(e))return e}(r=h)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(r,o)||function(e,t){if(e){if("string"==typeof e)return Pe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pe(e,t):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=b[0],x=b[1],S=function(e){return function(t){var n=t.target.value,r=m&&m[e]&&m[e](n,Ie(g));x(_e(_e({},g),{},Te({},e,_e(_e({},g[e]),{},{value:n,error:r,touched:!0}))))}};return t().createElement(z,{horizontal:!0,className:"InviteForm",onSubmit:function(e){e.preventDefault();var t=!1,n=Ie(g),r=Object.keys(g).reduce((function(e,r){var o=m&&m[r]&&m[r](g[r].value,n);return o&&(t=!0),_e(_e({},e),{},Te({},r,_e(_e({},g[r]),{},{error:o,touched:!0})))}),{});t?x(r):(u(n),x(Ne))}},t().createElement("div",null,t().createElement(q,{validationState:g.name.touched&&g.name.error?"error":null},t().createElement(W,{className:"col-sm-2"},l("Name")),t().createElement(Y,{sm:10},t().createElement(se,{value:g.name.value,onChange:S("name"),type:"text",placeholder:l("Name (optional)")}),g.name.touched&&g.name.error&&t().createElement("span",{className:"error"},g.name.error))),t().createElement(q,{validationState:g.email.touched&&g.email.error?"error":null},t().createElement(W,{className:"col-sm-2"},l("Email")),t().createElement(Y,{sm:10},t().createElement(se,{value:g.email.value,onChange:S("email"),type:"email",placeholder:l("Participant email")}),g.email.touched&&g.email.error&&t().createElement("span",{className:"error"},g.email.error))),t().createElement(q,{validationState:g.phone.touched&&g.phone.error?"error":null},t().createElement(W,{className:"col-sm-2"},l("Phone")),t().createElement(Y,{sm:10},t().createElement(se,{value:g.phone.value,onChange:S("phone"),type:"text",placeholder:l("Participant Phone Number")}),g.phone.touched&&g.phone.error&&t().createElement("span",{className:"error"},g.phone.error))),t().createElement(q,{validationState:g.message.touched&&g.message.error?"error":null},t().createElement(W,{className:"col-sm-2"},l("Message")),t().createElement(Y,{sm:10},t().createElement(se,{value:g.message.value,onChange:S("message"),type:"textarea",placeholder:l("Custom message (optional; added to email only)")}),g.message.touched&&g.message.error&&t().createElement("span",{className:"error"},g.message.error))),(a="one_time_use_links",!!(i=f).permissions&&i.permissions.includes(a)&&t().createElement(q,null,t().createElement(Y,{sm:10,xsOffset:2},t().createElement(se,{className:"onetime-checkbox",type:"checkbox",checked:g.oneTime.value,onChange:function(e){var t=e.target.checked;x(_e(_e({},g),{},{oneTime:_e(_e({},g.oneTime),{},{value:t,touched:!0})})),s(t)},defaultChecked:p.oneTime}),t().createElement(W,{className:"onetime-checkbox-label"},l("Send invitation for one-time use"))))),t().createElement(q,{validationState:g.phone.touched&&g.phone.error?"error":null},t().createElement(W,{className:"col-sm-2"},l("Link")),t().createElement(Y,{sm:10},t().createElement("div",{className:"invite-link"},v&&t().createElement(e.Fragment,null,v,y?t().createElement("i",{className:"far fa-copy ",onClick:y}):null),v?null:t().createElement("i",{className:"fa fa-spinner fa-spin"}))))),t().createElement(q,null,t().createElement(je,null,t().createElement(Oe,{onClick:c,type:"button",disabled:d},l("Cancel")),t().createElement(Oe,{primary:!0,type:"submit",disabled:d},l("Send Invite")))))},Me=r(3379),Ae=r.n(Me),$e=r(7795),Re=r.n($e),ze=r(569),De=r.n(ze),Le=r(3565),Ge=r.n(Le),Ue=r(9216),qe=r.n(Ue),Ve=r(4589),He=r.n(Ve),Ke=r(8834),We={};function Ze(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}We.styleTagTransform=He(),We.setAttributes=Ge(),We.insert=De().bind(null,"head"),We.domAPI=Re(),We.insertStyleElement=qe(),Ae()(Ke.Z,We),Ke.Z&&Ke.Z.locals&&Ke.Z.locals;var Be=function(e){var n,r,o=e.invite,i=e.onClose,a=e.generateLink,c=e.t,u=e.currentUser,s=e.initialValues,l=e.validators,f=e.inviteLink,p=e.enableCopyLink,m=e.onLinkCopyToClipboard,d=(n=t().useState(!1),r=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(n,r)||function(e,t){if(e){if("string"==typeof e)return Ze(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ze(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=d[0],y=d[1],h=function(){},b=function(){y(!1)};return t().createElement("div",null,t().createElement(Fe,{onClose:i,currentUser:u,onSubmit:function(e){y(!0),o(e,h,b)},generateLink:a,inviteLink:f,handleCopy:p?function(){f&&navigator.clipboard.writeText(f),m&&m()}:null,initialValues:s,validators:l,sent:v,t:c}))};Be.defaultProps={t:function(e){return e}};var Ye=Be}(),o}()}));