// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol:void 0,r="function"==typeof n?n.toStringTag:"",l=t&&"symbol"==typeof Symbol.toStringTag?function(t){var n,l,f,i,a;if(null==t)return o.call(t);l=t[r],a=r,n=null!=(i=t)&&e.call(i,a);try{t[r]=void 0}catch(e){return o.call(t)}return f=o.call(t),n?t[r]=l:delete t[r],f}:function(t){return o.call(t)},f="function"==typeof Float32Array,i=Number.POSITIVE_INFINITY,a="function"==typeof Float32Array?Float32Array:null,y="function"==typeof Float32Array?Float32Array:void 0,u=function(){var t,o,e;if("function"!=typeof a)return!1;try{o=new a([1,3.14,-3.14,5e40]),e=o,t=(f&&e instanceof Float32Array||"[object Float32Array]"===l(e))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===i}catch(o){t=!1}return t}()?y:function(){throw new Error("not implemented")};return function(t){var o=new u(2);return o[0]=t.re,o[1]=t.im,o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).reimf=o();
//# sourceMappingURL=browser.js.map
