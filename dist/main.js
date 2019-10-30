!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PayseraReduxStateHistory=t():e.PayseraReduxStateHistory=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=require("redux-actions")},function(e,t){e.exports=require("@babel/runtime/helpers/objectWithoutProperties")},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("@babel/runtime/helpers/wrapNativeSuper")},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var c=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{history:{states:[],isLocked:!1,config:(r=t,{maxHistoryLength:r.maxHistoryLength||10})}});var r},u=r(1),s=r.n(u),a=r(3),f=r.n(a),p=r(4),y=r.n(p),l=r(5),b=r.n(l),O=r(6),d=r.n(O),h=r(7),v=r.n(h),j=function(e){function t(){return f()(this,t),y()(this,b()(t).apply(this,arguments))}return d()(t,e),t}(v()(Error));function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){var t=e.history,r=t.isLocked,n=t.states,o=s()(t,["isLocked","states"]),i=s()(e,["history"]);if(r)throw new j("Cannot save state, because state history is locked");var c=n;c.push(i);var u=o.config.maxHistoryLength;return c.length>u&&c.shift(),P({},i,{history:P({},o,{states:c,isLocked:r})})},m=function(e){function t(){return f()(this,t),y()(this,b()(t).apply(this,arguments))}return d()(t,e),t}(v()(Error));function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=function(e){var t=e.history,r=t.isLocked,n=t.states,o=s()(t,["isLocked","states"]);if(r)throw new j("Cannot revert state, because state history is locked");if(0===n.length)throw new m("Cannot revert state, bacause state history is empty");return x({},n.pop(),{history:x({},o,{isLocked:r,states:n})})};function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(e){var t=e.history,r=t.isLocked,n=s()(t,["isLocked"]),o=s()(e,["history"]);if(r)throw new j("State history is already locked");return S({},o,{history:S({},n,{isLocked:!0})})},A=function(e){return E(w(e))};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=function(e){var t=e.history,r=t.isLocked,n=s()(t,["isLocked"]),o=s()(e,["history"]);if(!r)throw new j("State history is already unlocked");return _({},o,{history:_({},n,{isLocked:!1})})},R=function(e){return D(q(e))},H="@@redux-history",N="".concat(H,"/SAVE"),T="".concat(H,"/REVERT"),K="".concat(H,"/SAVE_AND_LOCK"),M="".concat(H,"/REVERT_AND_UNLOCK"),V="".concat(H,"/LOCK"),U="".concat(H,"/UNLOCK"),W=function(e){if(void 0===e.history)return!1;var t=e.history;return void 0!==t.isLocked&&void 0!==t.states&&void 0!==t.config},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r,n){var o=n.type||void 0,i=r;if(void 0===r||W(r)||(i=c(r,t)),o===N)return w(i);if(o===T)return D(i);if(o===K)return A(i);if(o===M)return R(i);if(o===V)return E(i);if(o===U)return q(i);for(var u=arguments.length,s=new Array(u>2?u-2:0),a=2;a<u;a++)s[a-2]=arguments[a];return e.apply(void 0,[i,n].concat(s))}},B=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return setTimeout((function(){return e.dispatch(t(r))}))},F=r(0),G=Object(F.createAction)(N),I=Object(F.createAction)(T),J=Object(F.createAction)(K),Q=Object(F.createAction)(M),X=Object(F.createAction)(V),Y=Object(F.createAction)(U);r.d(t,"withHistory",(function(){return z})),r.d(t,"dispatchAction",(function(){return B})),r.d(t,"save",(function(){return G})),r.d(t,"revert",(function(){return I})),r.d(t,"saveAndLock",(function(){return J})),r.d(t,"revertAndUnlock",(function(){return Q})),r.d(t,"lock",(function(){return X})),r.d(t,"unlock",(function(){return Y}));t.default=z}])}));
//# sourceMappingURL=main.js.map