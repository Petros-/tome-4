(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(l){if(l.ep)return;l.ep=!0;const h=i(l);fetch(l.href,h)}})();var Xf={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function iA(){if(Ay)return nl;Ay=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,h){var d=null;if(h!==void 0&&(d=""+h),l.key!==void 0&&(d=""+l.key),"key"in l){h={};for(var p in l)p!=="key"&&(h[p]=l[p])}else h=l;return l=h.ref,{$$typeof:r,type:a,key:d,ref:l!==void 0?l:null,props:h}}return nl.Fragment=t,nl.jsx=i,nl.jsxs=i,nl}var Sy;function rA(){return Sy||(Sy=1,Xf.exports=iA()),Xf.exports}var yt=rA(),$f={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by;function sA(){if(by)return gt;by=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),D=Symbol.iterator;function B(C){return C===null||typeof C!="object"?null:(C=D&&C[D]||C["@@iterator"],typeof C=="function"?C:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,at={};function tt(C,Y,rt){this.props=C,this.context=Y,this.refs=at,this.updater=rt||K}tt.prototype.isReactComponent={},tt.prototype.setState=function(C,Y){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Y,"setState")},tt.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function Rt(){}Rt.prototype=tt.prototype;function dt(C,Y,rt){this.props=C,this.context=Y,this.refs=at,this.updater=rt||K}var Tt=dt.prototype=new Rt;Tt.constructor=dt,$(Tt,tt.prototype),Tt.isPureReactComponent=!0;var jt=Array.isArray,mt={H:null,A:null,T:null,S:null},Mt=Object.prototype.hasOwnProperty;function V(C,Y,rt,W,J,_t){return rt=_t.ref,{$$typeof:r,type:C,key:Y,ref:rt!==void 0?rt:null,props:_t}}function b(C,Y){return V(C.type,Y,void 0,void 0,void 0,C.props)}function A(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function I(C){var Y={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(rt){return Y[rt]})}var M=/\/+/g;function L(C,Y){return typeof C=="object"&&C!==null&&C.key!=null?I(""+C.key):Y.toString(36)}function R(){}function de(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(R,R):(C.status="pending",C.then(function(Y){C.status==="pending"&&(C.status="fulfilled",C.value=Y)},function(Y){C.status==="pending"&&(C.status="rejected",C.reason=Y)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function oe(C,Y,rt,W,J){var _t=typeof C;(_t==="undefined"||_t==="boolean")&&(C=null);var pt=!1;if(C===null)pt=!0;else switch(_t){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(C.$$typeof){case r:case t:pt=!0;break;case w:return pt=C._init,oe(pt(C._payload),Y,rt,W,J)}}if(pt)return J=J(C),pt=W===""?"."+L(C,0):W,jt(J)?(rt="",pt!=null&&(rt=pt.replace(M,"$&/")+"/"),oe(J,Y,rt,"",function(Wt){return Wt})):J!=null&&(A(J)&&(J=b(J,rt+(J.key==null||C&&C.key===J.key?"":(""+J.key).replace(M,"$&/")+"/")+pt)),Y.push(J)),1;pt=0;var le=W===""?".":W+":";if(jt(C))for(var Vt=0;Vt<C.length;Vt++)W=C[Vt],_t=le+L(W,Vt),pt+=oe(W,Y,rt,_t,J);else if(Vt=B(C),typeof Vt=="function")for(C=Vt.call(C),Vt=0;!(W=C.next()).done;)W=W.value,_t=le+L(W,Vt++),pt+=oe(W,Y,rt,_t,J);else if(_t==="object"){if(typeof C.then=="function")return oe(de(C),Y,rt,W,J);throw Y=String(C),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return pt}function Z(C,Y,rt){if(C==null)return C;var W=[],J=0;return oe(C,W,"","",function(_t){return Y.call(rt,_t,J++)}),W}function ct(C){if(C._status===-1){var Y=C._result;Y=Y(),Y.then(function(rt){(C._status===0||C._status===-1)&&(C._status=1,C._result=rt)},function(rt){(C._status===0||C._status===-1)&&(C._status=2,C._result=rt)}),C._status===-1&&(C._status=0,C._result=Y)}if(C._status===1)return C._result.default;throw C._result}var ot=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function Pt(){}return gt.Children={map:Z,forEach:function(C,Y,rt){Z(C,function(){Y.apply(this,arguments)},rt)},count:function(C){var Y=0;return Z(C,function(){Y++}),Y},toArray:function(C){return Z(C,function(Y){return Y})||[]},only:function(C){if(!A(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},gt.Component=tt,gt.Fragment=i,gt.Profiler=l,gt.PureComponent=dt,gt.StrictMode=a,gt.Suspense=g,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mt,gt.act=function(){throw Error("act(...) is not supported in production builds of React.")},gt.cache=function(C){return function(){return C.apply(null,arguments)}},gt.cloneElement=function(C,Y,rt){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var W=$({},C.props),J=C.key,_t=void 0;if(Y!=null)for(pt in Y.ref!==void 0&&(_t=void 0),Y.key!==void 0&&(J=""+Y.key),Y)!Mt.call(Y,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&Y.ref===void 0||(W[pt]=Y[pt]);var pt=arguments.length-2;if(pt===1)W.children=rt;else if(1<pt){for(var le=Array(pt),Vt=0;Vt<pt;Vt++)le[Vt]=arguments[Vt+2];W.children=le}return V(C.type,J,void 0,void 0,_t,W)},gt.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:h,_context:C},C},gt.createElement=function(C,Y,rt){var W,J={},_t=null;if(Y!=null)for(W in Y.key!==void 0&&(_t=""+Y.key),Y)Mt.call(Y,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(J[W]=Y[W]);var pt=arguments.length-2;if(pt===1)J.children=rt;else if(1<pt){for(var le=Array(pt),Vt=0;Vt<pt;Vt++)le[Vt]=arguments[Vt+2];J.children=le}if(C&&C.defaultProps)for(W in pt=C.defaultProps,pt)J[W]===void 0&&(J[W]=pt[W]);return V(C,_t,void 0,void 0,null,J)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(C){return{$$typeof:p,render:C}},gt.isValidElement=A,gt.lazy=function(C){return{$$typeof:w,_payload:{_status:-1,_result:C},_init:ct}},gt.memo=function(C,Y){return{$$typeof:v,type:C,compare:Y===void 0?null:Y}},gt.startTransition=function(C){var Y=mt.T,rt={};mt.T=rt;try{var W=C(),J=mt.S;J!==null&&J(rt,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Pt,ot)}catch(_t){ot(_t)}finally{mt.T=Y}},gt.unstable_useCacheRefresh=function(){return mt.H.useCacheRefresh()},gt.use=function(C){return mt.H.use(C)},gt.useActionState=function(C,Y,rt){return mt.H.useActionState(C,Y,rt)},gt.useCallback=function(C,Y){return mt.H.useCallback(C,Y)},gt.useContext=function(C){return mt.H.useContext(C)},gt.useDebugValue=function(){},gt.useDeferredValue=function(C,Y){return mt.H.useDeferredValue(C,Y)},gt.useEffect=function(C,Y){return mt.H.useEffect(C,Y)},gt.useId=function(){return mt.H.useId()},gt.useImperativeHandle=function(C,Y,rt){return mt.H.useImperativeHandle(C,Y,rt)},gt.useInsertionEffect=function(C,Y){return mt.H.useInsertionEffect(C,Y)},gt.useLayoutEffect=function(C,Y){return mt.H.useLayoutEffect(C,Y)},gt.useMemo=function(C,Y){return mt.H.useMemo(C,Y)},gt.useOptimistic=function(C,Y){return mt.H.useOptimistic(C,Y)},gt.useReducer=function(C,Y,rt){return mt.H.useReducer(C,Y,rt)},gt.useRef=function(C){return mt.H.useRef(C)},gt.useState=function(C){return mt.H.useState(C)},gt.useSyncExternalStore=function(C,Y,rt){return mt.H.useSyncExternalStore(C,Y,rt)},gt.useTransition=function(){return mt.H.useTransition()},gt.version="19.0.0",gt}var wy;function Ld(){return wy||(wy=1,$f.exports=sA()),$f.exports}var fn=Ld(),Zf={exports:{}},il={},Wf={exports:{}},Jf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry;function aA(){return Ry||(Ry=1,function(r){function t(Z,ct){var ot=Z.length;Z.push(ct);t:for(;0<ot;){var Pt=ot-1>>>1,C=Z[Pt];if(0<l(C,ct))Z[Pt]=ct,Z[ot]=C,ot=Pt;else break t}}function i(Z){return Z.length===0?null:Z[0]}function a(Z){if(Z.length===0)return null;var ct=Z[0],ot=Z.pop();if(ot!==ct){Z[0]=ot;t:for(var Pt=0,C=Z.length,Y=C>>>1;Pt<Y;){var rt=2*(Pt+1)-1,W=Z[rt],J=rt+1,_t=Z[J];if(0>l(W,ot))J<C&&0>l(_t,W)?(Z[Pt]=_t,Z[J]=ot,Pt=J):(Z[Pt]=W,Z[rt]=ot,Pt=rt);else if(J<C&&0>l(_t,ot))Z[Pt]=_t,Z[J]=ot,Pt=J;else break t}}return ct}function l(Z,ct){var ot=Z.sortIndex-ct.sortIndex;return ot!==0?ot:Z.id-ct.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var g=[],v=[],w=1,D=null,B=3,K=!1,$=!1,at=!1,tt=typeof setTimeout=="function"?setTimeout:null,Rt=typeof clearTimeout=="function"?clearTimeout:null,dt=typeof setImmediate<"u"?setImmediate:null;function Tt(Z){for(var ct=i(v);ct!==null;){if(ct.callback===null)a(v);else if(ct.startTime<=Z)a(v),ct.sortIndex=ct.expirationTime,t(g,ct);else break;ct=i(v)}}function jt(Z){if(at=!1,Tt(Z),!$)if(i(g)!==null)$=!0,de();else{var ct=i(v);ct!==null&&oe(jt,ct.startTime-Z)}}var mt=!1,Mt=-1,V=5,b=-1;function A(){return!(r.unstable_now()-b<V)}function I(){if(mt){var Z=r.unstable_now();b=Z;var ct=!0;try{t:{$=!1,at&&(at=!1,Rt(Mt),Mt=-1),K=!0;var ot=B;try{e:{for(Tt(Z),D=i(g);D!==null&&!(D.expirationTime>Z&&A());){var Pt=D.callback;if(typeof Pt=="function"){D.callback=null,B=D.priorityLevel;var C=Pt(D.expirationTime<=Z);if(Z=r.unstable_now(),typeof C=="function"){D.callback=C,Tt(Z),ct=!0;break e}D===i(g)&&a(g),Tt(Z)}else a(g);D=i(g)}if(D!==null)ct=!0;else{var Y=i(v);Y!==null&&oe(jt,Y.startTime-Z),ct=!1}}break t}finally{D=null,B=ot,K=!1}ct=void 0}}finally{ct?M():mt=!1}}}var M;if(typeof dt=="function")M=function(){dt(I)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,R=L.port2;L.port1.onmessage=I,M=function(){R.postMessage(null)}}else M=function(){tt(I,0)};function de(){mt||(mt=!0,M())}function oe(Z,ct){Mt=tt(function(){Z(r.unstable_now())},ct)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){$||K||($=!0,de())},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return B},r.unstable_getFirstCallbackNode=function(){return i(g)},r.unstable_next=function(Z){switch(B){case 1:case 2:case 3:var ct=3;break;default:ct=B}var ot=B;B=ct;try{return Z()}finally{B=ot}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ct){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ot=B;B=Z;try{return ct()}finally{B=ot}},r.unstable_scheduleCallback=function(Z,ct,ot){var Pt=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?Pt+ot:Pt):ot=Pt,Z){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=ot+C,Z={id:w++,callback:ct,priorityLevel:Z,startTime:ot,expirationTime:C,sortIndex:-1},ot>Pt?(Z.sortIndex=ot,t(v,Z),i(g)===null&&Z===i(v)&&(at?(Rt(Mt),Mt=-1):at=!0,oe(jt,ot-Pt))):(Z.sortIndex=C,t(g,Z),$||K||($=!0,de())),Z},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(Z){var ct=B;return function(){var ot=B;B=ct;try{return Z.apply(this,arguments)}finally{B=ot}}}}(Jf)),Jf}var Iy;function oA(){return Iy||(Iy=1,Wf.exports=aA()),Wf.exports}var td={exports:{}},Be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy;function lA(){if(Cy)return Be;Cy=1;var r=Ld();function t(g){var v="https://react.dev/errors/"+g;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)v+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+g+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function h(g,v,w){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:D==null?null:""+D,children:g,containerInfo:v,implementation:w}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,v){if(g==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Be.createPortal=function(g,v){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return h(g,v,null,w)},Be.flushSync=function(g){var v=d.T,w=a.p;try{if(d.T=null,a.p=2,g)return g()}finally{d.T=v,a.p=w,a.d.f()}},Be.preconnect=function(g,v){typeof g=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,a.d.C(g,v))},Be.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},Be.preinit=function(g,v){if(typeof g=="string"&&v&&typeof v.as=="string"){var w=v.as,D=p(w,v.crossOrigin),B=typeof v.integrity=="string"?v.integrity:void 0,K=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;w==="style"?a.d.S(g,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:D,integrity:B,fetchPriority:K}):w==="script"&&a.d.X(g,{crossOrigin:D,integrity:B,fetchPriority:K,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Be.preinitModule=function(g,v){if(typeof g=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var w=p(v.as,v.crossOrigin);a.d.M(g,{crossOrigin:w,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&a.d.M(g)},Be.preload=function(g,v){if(typeof g=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var w=v.as,D=p(w,v.crossOrigin);a.d.L(g,w,{crossOrigin:D,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Be.preloadModule=function(g,v){if(typeof g=="string")if(v){var w=p(v.as,v.crossOrigin);a.d.m(g,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:w,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else a.d.m(g)},Be.requestFormReset=function(g){a.d.r(g)},Be.unstable_batchedUpdates=function(g,v){return g(v)},Be.useFormState=function(g,v,w){return d.H.useFormState(g,v,w)},Be.useFormStatus=function(){return d.H.useHostTransitionStatus()},Be.version="19.0.0",Be}var Oy;function uA(){if(Oy)return td.exports;Oy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),td.exports=lA(),td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function cA(){if(Dy)return il;Dy=1;var r=oA(),t=Ld(),i=uA();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var h=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),K=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),Tt=Symbol.for("react.offscreen"),jt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Mt(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function b(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case p:return"Portal";case w:return"Profiler";case v:return"StrictMode";case at:return"Suspense";case tt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case K:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case $:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rt:return n=e.displayName||null,n!==null?n:b(e.type)||"Memo";case dt:n=e._payload,e=e._init;try{return b(e(n))}catch{}}return null}var A=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.assign,M,L;function R(e){if(M===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||"",L=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+e+L}var de=!1;function oe(e,n){if(!e||de)return"";de=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(j){var x=j}Reflect.construct(e,[],F)}else{try{F.call()}catch(j){x=j}e.call(F.prototype)}}else{try{throw Error()}catch(j){x=j}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(j){if(j&&x&&typeof j.stack=="string")return[j.stack,x.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var S=_.split(`
`),N=E.split(`
`);for(c=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;c<N.length&&!N[c].includes("DetermineComponentFrameRoot");)c++;if(o===S.length||c===N.length)for(o=S.length-1,c=N.length-1;1<=o&&0<=c&&S[o]!==N[c];)c--;for(;1<=o&&0<=c;o--,c--)if(S[o]!==N[c]){if(o!==1||c!==1)do if(o--,c--,0>c||S[o]!==N[c]){var H=`
`+S[o].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=o&&0<=c);break}}}finally{de=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?R(s):""}function Z(e){switch(e.tag){case 26:case 27:case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function ct(e){try{var n="";do n+=Z(e),e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function ot(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function Pt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function C(e){if(ot(e)!==e)throw Error(a(188))}function Y(e){var n=e.alternate;if(!n){if(n=ot(e),n===null)throw Error(a(188));return n!==e?null:e}for(var s=e,o=n;;){var c=s.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){s=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===s)return C(c),e;if(f===o)return C(c),n;f=f.sibling}throw Error(a(188))}if(s.return!==o.return)s=c,o=f;else{for(var _=!1,E=c.child;E;){if(E===s){_=!0,s=c,o=f;break}if(E===o){_=!0,o=c,s=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===s){_=!0,s=f,o=c;break}if(E===o){_=!0,o=f,s=c;break}E=E.sibling}if(!_)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:n}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=rt(e),n!==null)return n;e=e.sibling}return null}var W=Array.isArray,J=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_t={pending:!1,data:null,method:null,action:null},pt=[],le=-1;function Vt(e){return{current:e}}function Wt(e){0>le||(e.current=pt[le],pt[le]=null,le--)}function zt(e,n){le++,pt[le]=e.current,e.current=n}var Fe=Vt(null),mi=Vt(null),mn=Vt(null),Qi=Vt(null);function Xi(e,n){switch(zt(mn,n),zt(mi,e),zt(Fe,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Zg(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=Zg(e),n=Wg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Wt(Fe),zt(Fe,n)}function pi(){Wt(Fe),Wt(mi),Wt(mn)}function $a(e){e.memoizedState!==null&&zt(Qi,e);var n=Fe.current,s=Wg(n,e.type);n!==s&&(zt(mi,e),zt(Fe,s))}function Hs(e){mi.current===e&&(Wt(Fe),Wt(mi)),Qi.current===e&&(Wt(Qi),Zo._currentValue=_t)}var qs=Object.prototype.hasOwnProperty,Kr=r.unstable_scheduleCallback,Gs=r.unstable_cancelCallback,$c=r.unstable_shouldYield,Za=r.unstable_requestPaint,We=r.unstable_now,Ml=r.unstable_getCurrentPriorityLevel,me=r.unstable_ImmediatePriority,Ee=r.unstable_UserBlockingPriority,gi=r.unstable_NormalPriority,Vl=r.unstable_LowPriority,Wa=r.unstable_IdlePriority,Zc=r.log,Yr=r.unstable_setDisableYieldValue,$i=null,xe=null;function Ja(e){if(xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}}function Fn(e){if(typeof Zc=="function"&&Yr(e),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode($i,e)}catch{}}var Ke=Math.clz32?Math.clz32:kl,to=Math.log,Ul=Math.LN2;function kl(e){return e>>>=0,e===0?32:31-(to(e)/Ul|0)|0}var Kn=128,Zi=4194304;function Vn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pn(e,n){var s=e.pendingLanes;if(s===0)return 0;var o=0,c=e.suspendedLanes,f=e.pingedLanes,_=e.warmLanes;e=e.finishedLanes!==0;var E=s&134217727;return E!==0?(s=E&~c,s!==0?o=Vn(s):(f&=E,f!==0?o=Vn(f):e||(_=E&~_,_!==0&&(o=Vn(_))))):(E=s&~c,E!==0?o=Vn(E):f!==0?o=Vn(f):e||(_=s&~_,_!==0&&(o=Vn(_)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,_=n&-n,c>=_||c===32&&(_&4194176)!==0)?n:o}function Wi(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Fs(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eo(){var e=Kn;return Kn<<=1,(Kn&4194176)===0&&(Kn=128),e}function Ji(){var e=Zi;return Zi<<=1,(Zi&62914560)===0&&(Zi=4194304),e}function Ks(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function se(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ll(e,n,s,o,c,f){var _=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var E=e.entanglements,S=e.expirationTimes,N=e.hiddenUpdates;for(s=_&~s;0<s;){var H=31-Ke(s),F=1<<H;E[H]=0,S[H]=-1;var x=N[H];if(x!==null)for(N[H]=null,H=0;H<x.length;H++){var j=x[H];j!==null&&(j.lane&=-536870913)}s&=~F}o!==0&&tr(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function tr(e,n,s){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ke(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194218}function er(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var o=31-Ke(s),c=1<<o;c&n|e[o]&n&&(e[o]|=n),s&=~c}}function Pl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xl(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:gy(e.type))}function nr(e,n){var s=J.p;try{return J.p=e,n()}finally{J.p=s}}var Yn=Math.random().toString(36).slice(2),Te="__reactFiber$"+Yn,pe="__reactProps$"+Yn,yi="__reactContainer$"+Yn,Qr="__reactEvents$"+Yn,Ys="__reactListeners$"+Yn,Qn="__reactHandles$"+Yn,no="__reactResources$"+Yn,ir="__reactMarker$"+Yn;function Xr(e){delete e[Te],delete e[pe],delete e[Qr],delete e[Ys],delete e[Qn]}function Un(e){var n=e[Te];if(n)return n;for(var s=e.parentNode;s;){if(n=s[yi]||s[Te]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=ey(e);e!==null;){if(s=e[Te])return s;e=ey(e)}return n}e=s,s=e.parentNode}return null}function _i(e){if(e=e[Te]||e[yi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function rr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function sr(e){var n=e[no];return n||(n=e[no]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Xt(e){e[ir]=!0}var io=new Set,Qs={};function sn(e,n){Je(e,n),Je(e+"Capture",n)}function Je(e,n){for(Qs[e]=n,e=0;e<n.length;e++)io.add(n[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ro={},so={};function zl(e){return qs.call(so,e)?!0:qs.call(ro,e)?!1:Wc.test(e)?so[e]=!0:(ro[e]=!0,!1)}function ar(e,n,s){if(zl(n))if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+s)}}function or(e,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+s)}}function gn(e,n,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(n,s,""+o)}}function Ye(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jc(e){var n=Bl(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){o=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(_){o=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $r(e){e._valueTracker||(e._valueTracker=Jc(e))}function ao(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),o="";return e&&(o=Bl(e)?e.checked?"true":"false":e.value),e=o,e!==s?(n.setValue(e),!0):!1}function Xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var vi=/[\n"\\]/g;function Jt(e){return e.replace(vi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function lr(e,n,s,o,c,f,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ye(n)):e.value!==""+Ye(n)&&(e.value=""+Ye(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?$s(e,_,Ye(n)):s!=null?$s(e,_,Ye(s)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Ye(E):e.removeAttribute("name")}function Zr(e,n,s,o,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;s=s!=null?""+Ye(s):"",n=n!=null?""+Ye(n):s,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function $s(e,n,s){n==="number"&&Xs(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ut(e,n,s,o){if(e=e.options,n){n={};for(var c=0;c<s.length;c++)n["$"+s[c]]=!0;for(s=0;s<e.length;s++)c=n.hasOwnProperty("$"+e[s].value),e[s].selected!==c&&(e[s].selected=c),c&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Ye(s),n=null,c=0;c<e.length;c++){if(e[c].value===s){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Wr(e,n,s){if(n!=null&&(n=""+Ye(n),n!==e.value&&(e.value=n),s==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=s!=null?""+Ye(s):""}function ur(e,n,s,o){if(n==null){if(o!=null){if(s!=null)throw Error(a(92));if(W(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),n=s}s=Ye(n),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function yn(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var th=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function oo(e,n,s){var o=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,s):typeof s!="number"||s===0||th.has(n)?n==="float"?e.cssFloat=s:e[n]=(""+s).trim():e[n]=s+"px"}function jl(e,n,s){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&s[c]!==o&&oo(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&oo(e,f,n[f])}function lo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(e){return nh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var _n=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ei=null,Ti=null;function Ai(e){var n=_i(e);if(n&&(e=n.stateNode)){var s=e[pe]||null;t:switch(e=n.stateNode,n.type){case"input":if(lr(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Jt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var o=s[n];if(o!==e&&o.form===e.form){var c=o[pe]||null;if(!c)throw Error(a(90));lr(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<s.length;n++)o=s[n],o.form===e.form&&ao(o)}break t;case"textarea":Wr(e,s.value,s.defaultValue);break t;case"select":n=s.value,n!=null&&Ut(e,!!s.multiple,n,!1)}}}var uo=!1;function Hl(e,n,s){if(uo)return e(n,s);uo=!0;try{var o=e(n);return o}finally{if(uo=!1,(Ei!==null||Ti!==null)&&(Vu(),Ei&&(n=Ei,e=Ti,Ti=Ei=null,Ai(n),e)))for(n=0;n<e.length;n++)Ai(e[n])}}function Jr(e,n){var s=e.stateNode;if(s===null)return null;var o=s[pe]||null;if(o===null)return null;s=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var vn=!1;if(an)try{var ts={};Object.defineProperty(ts,"passive",{get:function(){vn=!0}}),window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{vn=!1}var $n=null,cr=null,Si=null;function co(){if(Si)return Si;var e,n=cr,s=n.length,o,c="value"in $n?$n.value:$n.textContent,f=c.length;for(e=0;e<s&&n[e]===c[e];e++);var _=s-e;for(o=1;o<=_&&n[s-o]===c[f-o];o++);return Si=c.slice(e,1<o?1-o:void 0)}function Zn(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function ho(){return!1}function Ae(e){function n(s,o,c,f,_){this._reactName=s,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(s=e[E],this[E]=s?s(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wn:ho,this.isPropagationStopped=ho,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),n}var xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=Ae(xt),es=I({},xt,{view:0,detail:0}),ql=Ae(es),Js,ta,Jn,ns=I({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(Js=e.screenX-Jn.screenX,ta=e.screenY-Jn.screenY):ta=Js=0,Jn=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:ta}}),En=Ae(ns),Gl=I({},ns,{dataTransfer:0}),ih=Ae(Gl),is=I({},es,{relatedTarget:0}),ea=Ae(is),fo=I({},xt,{animationName:0,elapsedTime:0,pseudoElement:0}),na=Ae(fo),Fl=I({},xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ia=Ae(Fl),rh=I({},xt,{data:0}),mo=Ae(rh),rs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function po(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Yl[e])?!!n[e]:!1}function ss(){return po}var Ql=I({},es,{key:function(e){if(e.key){var n=rs[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ra=Ae(Ql),Xl=I({},ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),go=Ae(Xl),bi=I({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),$l=Ae(bi),Zl=I({},xt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wl=Ae(Zl),Jl=I({},ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sa=Ae(Jl),Qe=I({},xt,{newState:0,oldState:0}),tu=Ae(Qe),eu=[9,13,27,32],ti=an&&"CompositionEvent"in window,u=null;an&&"documentMode"in document&&(u=document.documentMode);var m=an&&"TextEvent"in window&&!u,y=an&&(!ti||u&&8<u&&11>=u),T=" ",k=!1;function z(e,n){switch(e){case"keyup":return eu.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ct=!1;function ge(e,n){switch(e){case"compositionend":return X(n);case"keypress":return n.which!==32?null:(k=!0,T);case"textInput":return e=n.data,e===T&&k?null:e;default:return null}}function Ot(e,n){if(Ct)return e==="compositionend"||!ti&&z(e,n)?(e=co(),Si=cr=$n=null,Ct=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return y&&n.locale!=="ko"?null:n.data;default:return null}}var Se={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ye(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Se[e.type]:n==="textarea"}function wi(e,n,s,o){Ei?Ti?Ti.push(o):Ti=[o]:Ei=o,n=xu(n,"onChange"),0<n.length&&(s=new Ws("onChange","change",null,s,o),e.push({event:s,listeners:n}))}var De=null,ei=null;function yo(e){Kg(e,0)}function nu(e){var n=rr(e);if(ao(n))return e}function Tm(e,n){if(e==="change")return n}var Am=!1;if(an){var sh;if(an){var ah="oninput"in document;if(!ah){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),ah=typeof Sm.oninput=="function"}sh=ah}else sh=!1;Am=sh&&(!document.documentMode||9<document.documentMode)}function bm(){De&&(De.detachEvent("onpropertychange",wm),ei=De=null)}function wm(e){if(e.propertyName==="value"&&nu(ei)){var n=[];wi(n,ei,e,Zs(e)),Hl(yo,n)}}function VE(e,n,s){e==="focusin"?(bm(),De=n,ei=s,De.attachEvent("onpropertychange",wm)):e==="focusout"&&bm()}function UE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nu(ei)}function kE(e,n){if(e==="click")return nu(n)}function LE(e,n){if(e==="input"||e==="change")return nu(n)}function PE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:PE;function _o(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),o=Object.keys(n);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var c=s[o];if(!qs.call(n,c)||!on(e[c],n[c]))return!1}return!0}function Rm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Im(e,n){var s=Rm(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=n&&o>=n)return{node:s,offset:n-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Rm(s)}}function Cm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Cm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Om(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xs(e.document);n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=Xs(e.document)}return n}function oh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function xE(e,n){var s=Om(n);n=e.focusedElem;var o=e.selectionRange;if(s!==n&&n&&n.ownerDocument&&Cm(n.ownerDocument.documentElement,n)){if(o!==null&&oh(n)){if(e=o.start,s=o.end,s===void 0&&(s=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(s,n.value.length);else if(s=(e=n.ownerDocument||document)&&e.defaultView||window,s.getSelection){s=s.getSelection();var c=n.textContent.length,f=Math.min(o.start,c);o=o.end===void 0?f:Math.min(o.end,c),!s.extend&&f>o&&(c=o,o=f,f=c),c=Im(n,f);var _=Im(n,o);c&&_&&(s.rangeCount!==1||s.anchorNode!==c.node||s.anchorOffset!==c.offset||s.focusNode!==_.node||s.focusOffset!==_.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),s.removeAllRanges(),f>o?(s.addRange(e),s.extend(_.node,_.offset)):(e.setEnd(_.node,_.offset),s.addRange(e)))}}for(e=[],s=n;s=s.parentNode;)s.nodeType===1&&e.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)s=e[n],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var zE=an&&"documentMode"in document&&11>=document.documentMode,aa=null,lh=null,vo=null,uh=!1;function Dm(e,n,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;uh||aa==null||aa!==Xs(o)||(o=aa,"selectionStart"in o&&oh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),vo&&_o(vo,o)||(vo=o,o=xu(lh,"onSelect"),0<o.length&&(n=new Ws("onSelect","select",null,n,s),e.push({event:n,listeners:o}),n.target=aa)))}function as(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var oa={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},ch={},Nm={};an&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function os(e){if(ch[e])return ch[e];if(!oa[e])return e;var n=oa[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Nm)return ch[e]=n[s];return e}var Mm=os("animationend"),Vm=os("animationiteration"),Um=os("animationstart"),BE=os("transitionrun"),jE=os("transitionstart"),HE=os("transitioncancel"),km=os("transitionend"),Lm=new Map,Pm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function kn(e,n){Lm.set(e,n),sn(n,[e])}var Tn=[],la=0,hh=0;function iu(){for(var e=la,n=hh=la=0;n<e;){var s=Tn[n];Tn[n++]=null;var o=Tn[n];Tn[n++]=null;var c=Tn[n];Tn[n++]=null;var f=Tn[n];if(Tn[n++]=null,o!==null&&c!==null){var _=o.pending;_===null?c.next=c:(c.next=_.next,_.next=c),o.pending=c}f!==0&&xm(s,c,f)}}function ru(e,n,s,o){Tn[la++]=e,Tn[la++]=n,Tn[la++]=s,Tn[la++]=o,hh|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function fh(e,n,s,o){return ru(e,n,s,o),su(e)}function hr(e,n){return ru(e,null,null,n),su(e)}function xm(e,n,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var c=!1,f=e.return;f!==null;)f.childLanes|=s,o=f.alternate,o!==null&&(o.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-Ke(s),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=s|536870912)}function su(e){if(50<Go)throw Go=0,vf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ua={},zm=new WeakMap;function An(e,n){if(typeof e=="object"&&e!==null){var s=zm.get(e);return s!==void 0?s:(n={value:e,source:n,stack:ct(n)},zm.set(e,n),n)}return{value:e,source:n,stack:ct(n)}}var ca=[],ha=0,au=null,ou=0,Sn=[],bn=0,ls=null,Ri=1,Ii="";function us(e,n){ca[ha++]=ou,ca[ha++]=au,au=e,ou=n}function Bm(e,n,s){Sn[bn++]=Ri,Sn[bn++]=Ii,Sn[bn++]=ls,ls=e;var o=Ri;e=Ii;var c=32-Ke(o)-1;o&=~(1<<c),s+=1;var f=32-Ke(n)+c;if(30<f){var _=c-c%5;f=(o&(1<<_)-1).toString(32),o>>=_,c-=_,Ri=1<<32-Ke(n)+c|s<<c|o,Ii=f+e}else Ri=1<<f|s<<c|o,Ii=e}function dh(e){e.return!==null&&(us(e,1),Bm(e,1,0))}function mh(e){for(;e===au;)au=ca[--ha],ca[ha]=null,ou=ca[--ha],ca[ha]=null;for(;e===ls;)ls=Sn[--bn],Sn[bn]=null,Ii=Sn[--bn],Sn[bn]=null,Ri=Sn[--bn],Sn[bn]=null}var Xe=null,Ne=null,kt=!1,Ln=null,ni=!1,ph=Error(a(519));function cs(e){var n=Error(a(418,""));throw Ao(An(n,e)),ph}function jm(e){var n=e.stateNode,s=e.type,o=e.memoizedProps;switch(n[Te]=e,n[pe]=o,s){case"dialog":It("cancel",n),It("close",n);break;case"iframe":case"object":case"embed":It("load",n);break;case"video":case"audio":for(s=0;s<Ko.length;s++)It(Ko[s],n);break;case"source":It("error",n);break;case"img":case"image":case"link":It("error",n),It("load",n);break;case"details":It("toggle",n);break;case"input":It("invalid",n),Zr(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),$r(n);break;case"select":It("invalid",n);break;case"textarea":It("invalid",n),ur(n,o.value,o.defaultValue,o.children),$r(n)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||o.suppressHydrationWarning===!0||$g(n.textContent,s)?(o.popover!=null&&(It("beforetoggle",n),It("toggle",n)),o.onScroll!=null&&It("scroll",n),o.onScrollEnd!=null&&It("scrollend",n),o.onClick!=null&&(n.onclick=zu),n=!0):n=!1,n||cs(e)}function Hm(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 3:case 27:ni=!0;return;case 5:case 13:ni=!1;return;default:Xe=Xe.return}}function Eo(e){if(e!==Xe)return!1;if(!kt)return Hm(e),kt=!0,!1;var n=!1,s;if((s=e.tag!==3&&e.tag!==27)&&((s=e.tag===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Lf(e.type,e.memoizedProps)),s=!s),s&&(n=!0),n&&Ne&&cs(e),Hm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(n===0){Ne=xn(e.nextSibling);break t}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++;e=e.nextSibling}Ne=null}}else Ne=Xe?xn(e.stateNode.nextSibling):null;return!0}function To(){Ne=Xe=null,kt=!1}function Ao(e){Ln===null?Ln=[e]:Ln.push(e)}var So=Error(a(460)),qm=Error(a(474)),gh={then:function(){}};function Gm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lu(){}function Fm(e,n,s){switch(s=e[s],s===void 0?e.push(n):s!==n&&(n.then(lu,lu),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===So?Error(a(483)):e;default:if(typeof n.status=="string")n.then(lu,lu);else{if(e=Ft,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===So?Error(a(483)):e}throw bo=n,So}}var bo=null;function Km(){if(bo===null)throw Error(a(459));var e=bo;return bo=null,e}var fa=null,wo=0;function uu(e){var n=wo;return wo+=1,fa===null&&(fa=[]),Fm(fa,e,n)}function Ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function cu(e,n){throw n.$$typeof===h?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ym(e){var n=e._init;return n(e._payload)}function Qm(e){function n(U,O){if(e){var P=U.deletions;P===null?(U.deletions=[O],U.flags|=16):P.push(O)}}function s(U,O){if(!e)return null;for(;O!==null;)n(U,O),O=O.sibling;return null}function o(U){for(var O=new Map;U!==null;)U.key!==null?O.set(U.key,U):O.set(U.index,U),U=U.sibling;return O}function c(U,O){return U=Sr(U,O),U.index=0,U.sibling=null,U}function f(U,O,P){return U.index=P,e?(P=U.alternate,P!==null?(P=P.index,P<O?(U.flags|=33554434,O):P):(U.flags|=33554434,O)):(U.flags|=1048576,O)}function _(U){return e&&U.alternate===null&&(U.flags|=33554434),U}function E(U,O,P,q){return O===null||O.tag!==6?(O=hf(P,U.mode,q),O.return=U,O):(O=c(O,P),O.return=U,O)}function S(U,O,P,q){var et=P.type;return et===g?H(U,O,P.props.children,q,P.key):O!==null&&(O.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===dt&&Ym(et)===O.type)?(O=c(O,P.props),Ro(O,P),O.return=U,O):(O=Cu(P.type,P.key,P.props,null,U.mode,q),Ro(O,P),O.return=U,O)}function N(U,O,P,q){return O===null||O.tag!==4||O.stateNode.containerInfo!==P.containerInfo||O.stateNode.implementation!==P.implementation?(O=ff(P,U.mode,q),O.return=U,O):(O=c(O,P.children||[]),O.return=U,O)}function H(U,O,P,q,et){return O===null||O.tag!==7?(O=Es(P,U.mode,q,et),O.return=U,O):(O=c(O,P),O.return=U,O)}function F(U,O,P){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=hf(""+O,U.mode,P),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case d:return P=Cu(O.type,O.key,O.props,null,U.mode,P),Ro(P,O),P.return=U,P;case p:return O=ff(O,U.mode,P),O.return=U,O;case dt:var q=O._init;return O=q(O._payload),F(U,O,P)}if(W(O)||Mt(O))return O=Es(O,U.mode,P,null),O.return=U,O;if(typeof O.then=="function")return F(U,uu(O),P);if(O.$$typeof===K)return F(U,wu(U,O),P);cu(U,O)}return null}function x(U,O,P,q){var et=O!==null?O.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return et!==null?null:E(U,O,""+P,q);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case d:return P.key===et?S(U,O,P,q):null;case p:return P.key===et?N(U,O,P,q):null;case dt:return et=P._init,P=et(P._payload),x(U,O,P,q)}if(W(P)||Mt(P))return et!==null?null:H(U,O,P,q,null);if(typeof P.then=="function")return x(U,O,uu(P),q);if(P.$$typeof===K)return x(U,O,wu(U,P),q);cu(U,P)}return null}function j(U,O,P,q,et){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return U=U.get(P)||null,E(O,U,""+q,et);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case d:return U=U.get(q.key===null?P:q.key)||null,S(O,U,q,et);case p:return U=U.get(q.key===null?P:q.key)||null,N(O,U,q,et);case dt:var At=q._init;return q=At(q._payload),j(U,O,P,q,et)}if(W(q)||Mt(q))return U=U.get(P)||null,H(O,U,q,et,null);if(typeof q.then=="function")return j(U,O,P,uu(q),et);if(q.$$typeof===K)return j(U,O,P,wu(O,q),et);cu(O,q)}return null}function it(U,O,P,q){for(var et=null,At=null,st=O,lt=O=0,Re=null;st!==null&&lt<P.length;lt++){st.index>lt?(Re=st,st=null):Re=st.sibling;var Lt=x(U,st,P[lt],q);if(Lt===null){st===null&&(st=Re);break}e&&st&&Lt.alternate===null&&n(U,st),O=f(Lt,O,lt),At===null?et=Lt:At.sibling=Lt,At=Lt,st=Re}if(lt===P.length)return s(U,st),kt&&us(U,lt),et;if(st===null){for(;lt<P.length;lt++)st=F(U,P[lt],q),st!==null&&(O=f(st,O,lt),At===null?et=st:At.sibling=st,At=st);return kt&&us(U,lt),et}for(st=o(st);lt<P.length;lt++)Re=j(st,U,lt,P[lt],q),Re!==null&&(e&&Re.alternate!==null&&st.delete(Re.key===null?lt:Re.key),O=f(Re,O,lt),At===null?et=Re:At.sibling=Re,At=Re);return e&&st.forEach(function(Dr){return n(U,Dr)}),kt&&us(U,lt),et}function ft(U,O,P,q){if(P==null)throw Error(a(151));for(var et=null,At=null,st=O,lt=O=0,Re=null,Lt=P.next();st!==null&&!Lt.done;lt++,Lt=P.next()){st.index>lt?(Re=st,st=null):Re=st.sibling;var Dr=x(U,st,Lt.value,q);if(Dr===null){st===null&&(st=Re);break}e&&st&&Dr.alternate===null&&n(U,st),O=f(Dr,O,lt),At===null?et=Dr:At.sibling=Dr,At=Dr,st=Re}if(Lt.done)return s(U,st),kt&&us(U,lt),et;if(st===null){for(;!Lt.done;lt++,Lt=P.next())Lt=F(U,Lt.value,q),Lt!==null&&(O=f(Lt,O,lt),At===null?et=Lt:At.sibling=Lt,At=Lt);return kt&&us(U,lt),et}for(st=o(st);!Lt.done;lt++,Lt=P.next())Lt=j(st,U,lt,Lt.value,q),Lt!==null&&(e&&Lt.alternate!==null&&st.delete(Lt.key===null?lt:Lt.key),O=f(Lt,O,lt),At===null?et=Lt:At.sibling=Lt,At=Lt);return e&&st.forEach(function(nA){return n(U,nA)}),kt&&us(U,lt),et}function ne(U,O,P,q){if(typeof P=="object"&&P!==null&&P.type===g&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case d:t:{for(var et=P.key;O!==null;){if(O.key===et){if(et=P.type,et===g){if(O.tag===7){s(U,O.sibling),q=c(O,P.props.children),q.return=U,U=q;break t}}else if(O.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===dt&&Ym(et)===O.type){s(U,O.sibling),q=c(O,P.props),Ro(q,P),q.return=U,U=q;break t}s(U,O);break}else n(U,O);O=O.sibling}P.type===g?(q=Es(P.props.children,U.mode,q,P.key),q.return=U,U=q):(q=Cu(P.type,P.key,P.props,null,U.mode,q),Ro(q,P),q.return=U,U=q)}return _(U);case p:t:{for(et=P.key;O!==null;){if(O.key===et)if(O.tag===4&&O.stateNode.containerInfo===P.containerInfo&&O.stateNode.implementation===P.implementation){s(U,O.sibling),q=c(O,P.children||[]),q.return=U,U=q;break t}else{s(U,O);break}else n(U,O);O=O.sibling}q=ff(P,U.mode,q),q.return=U,U=q}return _(U);case dt:return et=P._init,P=et(P._payload),ne(U,O,P,q)}if(W(P))return it(U,O,P,q);if(Mt(P)){if(et=Mt(P),typeof et!="function")throw Error(a(150));return P=et.call(P),ft(U,O,P,q)}if(typeof P.then=="function")return ne(U,O,uu(P),q);if(P.$$typeof===K)return ne(U,O,wu(U,P),q);cu(U,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,O!==null&&O.tag===6?(s(U,O.sibling),q=c(O,P),q.return=U,U=q):(s(U,O),q=hf(P,U.mode,q),q.return=U,U=q),_(U)):s(U,O)}return function(U,O,P,q){try{wo=0;var et=ne(U,O,P,q);return fa=null,et}catch(st){if(st===So)throw st;var At=Cn(29,st,null,U.mode);return At.lanes=q,At.return=U,At}finally{}}}var hs=Qm(!0),Xm=Qm(!1),da=Vt(null),hu=Vt(0);function $m(e,n){e=xi,zt(hu,e),zt(da,n),xi=e|n.baseLanes}function yh(){zt(hu,xi),zt(da,da.current)}function _h(){xi=hu.current,Wt(da),Wt(hu)}var wn=Vt(null),ii=null;function fr(e){var n=e.alternate;zt(_e,_e.current&1),zt(wn,e),ii===null&&(n===null||da.current!==null||n.memoizedState!==null)&&(ii=e)}function Zm(e){if(e.tag===22){if(zt(_e,_e.current),zt(wn,e),ii===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ii=e)}}else dr()}function dr(){zt(_e,_e.current),zt(wn,wn.current)}function Ci(e){Wt(wn),ii===e&&(ii=null),Wt(_e)}var _e=Vt(0);function fu(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(s){return s()})}},GE=r.unstable_scheduleCallback,FE=r.unstable_NormalPriority,ve={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vh(){return{controller:new qE,data:new Map,refCount:0}}function Io(e){e.refCount--,e.refCount===0&&GE(FE,function(){e.controller.abort()})}var Co=null,Eh=0,ma=0,pa=null;function KE(e,n){if(Co===null){var s=Co=[];Eh=0,ma=If(),pa={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Eh++,n.then(Wm,Wm),n}function Wm(){if(--Eh===0&&Co!==null){pa!==null&&(pa.status="fulfilled");var e=Co;Co=null,ma=0,pa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function YE(e,n){var s=[],o={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<s.length;c++)(0,s[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),o}var Jm=A.S;A.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&KE(e,n),Jm!==null&&Jm(e,n)};var fs=Vt(null);function Th(){var e=fs.current;return e!==null?e:Ft.pooledCache}function du(e,n){n===null?zt(fs,fs.current):zt(fs,n.pool)}function tp(){var e=Th();return e===null?null:{parent:ve._currentValue,pool:e}}var mr=0,Et=null,Ht=null,ue=null,mu=!1,ga=!1,ds=!1,pu=0,Oo=0,ya=null,QE=0;function ae(){throw Error(a(321))}function Ah(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!on(e[s],n[s]))return!1;return!0}function Sh(e,n,s,o,c,f){return mr=f,Et=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,A.H=e===null||e.memoizedState===null?ms:pr,ds=!1,f=s(o,c),ds=!1,ga&&(f=np(n,s,o,c)),ep(e),f}function ep(e){A.H=ri;var n=Ht!==null&&Ht.next!==null;if(mr=0,ue=Ht=Et=null,mu=!1,Oo=0,ya=null,n)throw Error(a(300));e===null||be||(e=e.dependencies,e!==null&&bu(e)&&(be=!0))}function np(e,n,s,o){Et=e;var c=0;do{if(ga&&(ya=null),Oo=0,ga=!1,25<=c)throw Error(a(301));if(c+=1,ue=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}A.H=ps,f=n(s,o)}while(ga);return f}function XE(){var e=A.H,n=e.useState()[0];return n=typeof n.then=="function"?Do(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(Et.flags|=1024),n}function bh(){var e=pu!==0;return pu=0,e}function wh(e,n,s){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s}function Rh(e){if(mu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}mu=!1}mr=0,ue=Ht=Et=null,ga=!1,Oo=pu=0,ya=null}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Et.memoizedState=ue=e:ue=ue.next=e,ue}function ce(){if(Ht===null){var e=Et.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=ue===null?Et.memoizedState:ue.next;if(n!==null)ue=n,Ht=e;else{if(e===null)throw Et.alternate===null?Error(a(467)):Error(a(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},ue===null?Et.memoizedState=ue=e:ue=ue.next=e}return ue}var gu;gu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Do(e){var n=Oo;return Oo+=1,ya===null&&(ya=[]),e=Fm(ya,e,n),n=Et,(ue===null?n.memoizedState:ue.next)===null&&(n=n.alternate,A.H=n===null||n.memoizedState===null?ms:pr),e}function yu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Do(e);if(e.$$typeof===K)return ze(e)}throw Error(a(438,String(e)))}function Ih(e){var n=null,s=Et.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var o=Et.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=gu(),Et.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(e),o=0;o<e;o++)s[o]=jt;return n.index++,s}function Oi(e,n){return typeof n=="function"?n(e):n}function _u(e){var n=ce();return Ch(n,Ht,e)}function Ch(e,n,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=_=null,S=null,N=n,H=!1;do{var F=N.lane&-536870913;if(F!==N.lane?(Dt&F)===F:(mr&F)===F){var x=N.revertLane;if(x===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),F===ma&&(H=!0);else if((mr&x)===x){N=N.next,x===ma&&(H=!0);continue}else F={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(E=S=F,_=f):S=S.next=F,Et.lanes|=x,br|=x;F=N.action,ds&&s(f,F),f=N.hasEagerState?N.eagerState:s(f,F)}else x={lane:F,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(E=S=x,_=f):S=S.next=x,Et.lanes|=F,br|=F;N=N.next}while(N!==null&&N!==n);if(S===null?_=f:S.next=E,!on(f,e.memoizedState)&&(be=!0,H&&(s=pa,s!==null)))throw s;e.memoizedState=f,e.baseState=_,e.baseQueue=S,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Oh(e){var n=ce(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,c=s.pending,f=n.memoizedState;if(c!==null){s.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);on(f,n.memoizedState)||(be=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),s.lastRenderedState=f}return[f,o]}function ip(e,n,s){var o=Et,c=ce(),f=kt;if(f){if(s===void 0)throw Error(a(407));s=s()}else s=n();var _=!on((Ht||c).memoizedState,s);if(_&&(c.memoizedState=s,be=!0),c=c.queue,Mh(ap.bind(null,o,c,e),[e]),c.getSnapshot!==n||_||ue!==null&&ue.memoizedState.tag&1){if(o.flags|=2048,_a(9,sp.bind(null,o,c,s,n),{destroy:void 0},null),Ft===null)throw Error(a(349));f||(mr&60)!==0||rp(o,n,s)}return s}function rp(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=Et.updateQueue,n===null?(n=gu(),Et.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function sp(e,n,s,o){n.value=s,n.getSnapshot=o,op(n)&&lp(e)}function ap(e,n,s){return s(function(){op(n)&&lp(e)})}function op(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!on(e,s)}catch{return!0}}function lp(e){var n=hr(e,2);n!==null&&$e(n,e,2)}function Dh(e){var n=tn();if(typeof e=="function"){var s=e;if(e=s(),ds){Fn(!0);try{s()}finally{Fn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},n}function up(e,n,s,o){return e.baseState=s,Ch(e,Ht,typeof o=="function"?o:Oi)}function $E(e,n,s,o,c){if(Tu(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};A.T!==null?s(!0):f.isTransition=!1,o(f),s=n.pending,s===null?(f.next=n.pending=f,cp(n,f)):(f.next=s.next,n.pending=s.next=f)}}function cp(e,n){var s=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=A.T,_={};A.T=_;try{var E=s(c,o),S=A.S;S!==null&&S(_,E),hp(e,n,E)}catch(N){Nh(e,n,N)}finally{A.T=f}}else try{f=s(c,o),hp(e,n,f)}catch(N){Nh(e,n,N)}}function hp(e,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){fp(e,n,o)},function(o){return Nh(e,n,o)}):fp(e,n,s)}function fp(e,n,s){n.status="fulfilled",n.value=s,dp(n),e.state=s,n=e.pending,n!==null&&(s=n.next,s===n?e.pending=null:(s=s.next,n.next=s,cp(e,s)))}function Nh(e,n,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=s,dp(n),n=n.next;while(n!==o)}e.action=null}function dp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function mp(e,n){return n}function pp(e,n){if(kt){var s=Ft.formState;if(s!==null){t:{var o=Et;if(kt){if(Ne){e:{for(var c=Ne,f=ni;c.nodeType!==8;){if(!f){c=null;break e}if(c=xn(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ne=xn(c.nextSibling),o=c.data==="F!";break t}}cs(o)}o=!1}o&&(n=s[0])}}return s=tn(),s.memoizedState=s.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mp,lastRenderedState:n},s.queue=o,s=Vp.bind(null,Et,o),o.dispatch=s,o=Dh(!1),f=Ph.bind(null,Et,!1,o.queue),o=tn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,s=$E.bind(null,Et,c,f,s),c.dispatch=s,o.memoizedState=e,[n,s,!1]}function gp(e){var n=ce();return yp(n,Ht,e)}function yp(e,n,s){n=Ch(e,n,mp)[0],e=_u(Oi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Do(n):n;var o=ce(),c=o.queue,f=c.dispatch;return s!==o.memoizedState&&(Et.flags|=2048,_a(9,ZE.bind(null,c,s),{destroy:void 0},null)),[n,f,e]}function ZE(e,n){e.action=n}function _p(e){var n=ce(),s=Ht;if(s!==null)return yp(n,s,e);ce(),n=n.memoizedState,s=ce();var o=s.queue.dispatch;return s.memoizedState=e,[n,o,!1]}function _a(e,n,s,o){return e={tag:e,create:n,inst:s,deps:o,next:null},n=Et.updateQueue,n===null&&(n=gu(),Et.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,n.lastEffect=e),e}function vp(){return ce().memoizedState}function vu(e,n,s,o){var c=tn();Et.flags|=e,c.memoizedState=_a(1|n,s,{destroy:void 0},o===void 0?null:o)}function Eu(e,n,s,o){var c=ce();o=o===void 0?null:o;var f=c.memoizedState.inst;Ht!==null&&o!==null&&Ah(o,Ht.memoizedState.deps)?c.memoizedState=_a(n,s,f,o):(Et.flags|=e,c.memoizedState=_a(1|n,s,f,o))}function Ep(e,n){vu(8390656,8,e,n)}function Mh(e,n){Eu(2048,8,e,n)}function Tp(e,n){return Eu(4,2,e,n)}function Ap(e,n){return Eu(4,4,e,n)}function Sp(e,n){if(typeof n=="function"){e=e();var s=n(e);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bp(e,n,s){s=s!=null?s.concat([e]):null,Eu(4,4,Sp.bind(null,n,e),s)}function Vh(){}function wp(e,n){var s=ce();n=n===void 0?null:n;var o=s.memoizedState;return n!==null&&Ah(n,o[1])?o[0]:(s.memoizedState=[e,n],e)}function Rp(e,n){var s=ce();n=n===void 0?null:n;var o=s.memoizedState;if(n!==null&&Ah(n,o[1]))return o[0];if(o=e(),ds){Fn(!0);try{e()}finally{Fn(!1)}}return s.memoizedState=[o,n],o}function Uh(e,n,s){return s===void 0||(mr&1073741824)!==0?e.memoizedState=n:(e.memoizedState=s,e=Cg(),Et.lanes|=e,br|=e,s)}function Ip(e,n,s,o){return on(s,n)?s:da.current!==null?(e=Uh(e,s,o),on(e,n)||(be=!0),e):(mr&42)===0?(be=!0,e.memoizedState=s):(e=Cg(),Et.lanes|=e,br|=e,n)}function Cp(e,n,s,o,c){var f=J.p;J.p=f!==0&&8>f?f:8;var _=A.T,E={};A.T=E,Ph(e,!1,n,s);try{var S=c(),N=A.S;if(N!==null&&N(E,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=YE(S,o);No(e,n,H,hn(e))}else No(e,n,o,hn(e))}catch(F){No(e,n,{then:function(){},status:"rejected",reason:F},hn())}finally{J.p=f,A.T=_}}function WE(){}function kh(e,n,s,o){if(e.tag!==5)throw Error(a(476));var c=Op(e).queue;Cp(e,c,n,_t,s===null?WE:function(){return Dp(e),s(o)})}function Op(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:_t,baseState:_t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:_t},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:s},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Dp(e){var n=Op(e).next.queue;No(e,n,{},hn())}function Lh(){return ze(Zo)}function Np(){return ce().memoizedState}function Mp(){return ce().memoizedState}function JE(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var s=hn();e=_r(s);var o=vr(n,e,s);o!==null&&($e(o,n,s),Uo(o,n,s)),n={cache:vh()},e.payload=n;return}n=n.return}}function tT(e,n,s){var o=hn();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Tu(e)?Up(n,s):(s=fh(e,n,s,o),s!==null&&($e(s,e,o),kp(s,n,o)))}function Vp(e,n,s){var o=hn();No(e,n,s,o)}function No(e,n,s,o){var c={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Tu(e))Up(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,s);if(c.hasEagerState=!0,c.eagerState=E,on(E,_))return ru(e,n,c,0),Ft===null&&iu(),!1}catch{}finally{}if(s=fh(e,n,c,o),s!==null)return $e(s,e,o),kp(s,n,o),!0}return!1}function Ph(e,n,s,o){if(o={lane:2,revertLane:If(),action:o,hasEagerState:!1,eagerState:null,next:null},Tu(e)){if(n)throw Error(a(479))}else n=fh(e,s,o,2),n!==null&&$e(n,e,2)}function Tu(e){var n=e.alternate;return e===Et||n!==null&&n===Et}function Up(e,n){ga=mu=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function kp(e,n,s){if((s&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,er(e,s)}}var ri={readContext:ze,use:yu,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useLayoutEffect:ae,useInsertionEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useSyncExternalStore:ae,useId:ae};ri.useCacheRefresh=ae,ri.useMemoCache=ae,ri.useHostTransitionStatus=ae,ri.useFormState=ae,ri.useActionState=ae,ri.useOptimistic=ae;var ms={readContext:ze,use:yu,useCallback:function(e,n){return tn().memoizedState=[e,n===void 0?null:n],e},useContext:ze,useEffect:Ep,useImperativeHandle:function(e,n,s){s=s!=null?s.concat([e]):null,vu(4194308,4,Sp.bind(null,n,e),s)},useLayoutEffect:function(e,n){return vu(4194308,4,e,n)},useInsertionEffect:function(e,n){vu(4,2,e,n)},useMemo:function(e,n){var s=tn();n=n===void 0?null:n;var o=e();if(ds){Fn(!0);try{e()}finally{Fn(!1)}}return s.memoizedState=[o,n],o},useReducer:function(e,n,s){var o=tn();if(s!==void 0){var c=s(n);if(ds){Fn(!0);try{s(n)}finally{Fn(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=tT.bind(null,Et,e),[o.memoizedState,e]},useRef:function(e){var n=tn();return e={current:e},n.memoizedState=e},useState:function(e){e=Dh(e);var n=e.queue,s=Vp.bind(null,Et,n);return n.dispatch=s,[e.memoizedState,s]},useDebugValue:Vh,useDeferredValue:function(e,n){var s=tn();return Uh(s,e,n)},useTransition:function(){var e=Dh(!1);return e=Cp.bind(null,Et,e.queue,!0,!1),tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,s){var o=Et,c=tn();if(kt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),Ft===null)throw Error(a(349));(Dt&60)!==0||rp(o,n,s)}c.memoizedState=s;var f={value:s,getSnapshot:n};return c.queue=f,Ep(ap.bind(null,o,f,e),[e]),o.flags|=2048,_a(9,sp.bind(null,o,f,s,n),{destroy:void 0},null),s},useId:function(){var e=tn(),n=Ft.identifierPrefix;if(kt){var s=Ii,o=Ri;s=(o&~(1<<32-Ke(o)-1)).toString(32)+s,n=":"+n+"R"+s,s=pu++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=QE++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return tn().memoizedState=JE.bind(null,Et)}};ms.useMemoCache=Ih,ms.useHostTransitionStatus=Lh,ms.useFormState=pp,ms.useActionState=pp,ms.useOptimistic=function(e){var n=tn();n.memoizedState=n.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Ph.bind(null,Et,!0,s),s.dispatch=n,[e,n]};var pr={readContext:ze,use:yu,useCallback:wp,useContext:ze,useEffect:Mh,useImperativeHandle:bp,useInsertionEffect:Tp,useLayoutEffect:Ap,useMemo:Rp,useReducer:_u,useRef:vp,useState:function(){return _u(Oi)},useDebugValue:Vh,useDeferredValue:function(e,n){var s=ce();return Ip(s,Ht.memoizedState,e,n)},useTransition:function(){var e=_u(Oi)[0],n=ce().memoizedState;return[typeof e=="boolean"?e:Do(e),n]},useSyncExternalStore:ip,useId:Np};pr.useCacheRefresh=Mp,pr.useMemoCache=Ih,pr.useHostTransitionStatus=Lh,pr.useFormState=gp,pr.useActionState=gp,pr.useOptimistic=function(e,n){var s=ce();return up(s,Ht,e,n)};var ps={readContext:ze,use:yu,useCallback:wp,useContext:ze,useEffect:Mh,useImperativeHandle:bp,useInsertionEffect:Tp,useLayoutEffect:Ap,useMemo:Rp,useReducer:Oh,useRef:vp,useState:function(){return Oh(Oi)},useDebugValue:Vh,useDeferredValue:function(e,n){var s=ce();return Ht===null?Uh(s,e,n):Ip(s,Ht.memoizedState,e,n)},useTransition:function(){var e=Oh(Oi)[0],n=ce().memoizedState;return[typeof e=="boolean"?e:Do(e),n]},useSyncExternalStore:ip,useId:Np};ps.useCacheRefresh=Mp,ps.useMemoCache=Ih,ps.useHostTransitionStatus=Lh,ps.useFormState=_p,ps.useActionState=_p,ps.useOptimistic=function(e,n){var s=ce();return Ht!==null?up(s,Ht,e,n):(s.baseState=e,[e,s.queue.dispatch])};function xh(e,n,s,o){n=e.memoizedState,s=s(o,n),s=s==null?n:I({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var zh={isMounted:function(e){return(e=e._reactInternals)?ot(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var o=hn(),c=_r(o);c.payload=n,s!=null&&(c.callback=s),n=vr(e,c,o),n!==null&&($e(n,e,o),Uo(n,e,o))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var o=hn(),c=_r(o);c.tag=1,c.payload=n,s!=null&&(c.callback=s),n=vr(e,c,o),n!==null&&($e(n,e,o),Uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=hn(),o=_r(s);o.tag=2,n!=null&&(o.callback=n),n=vr(e,o,s),n!==null&&($e(n,e,s),Uo(n,e,s))}};function Lp(e,n,s,o,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!_o(s,o)||!_o(c,f):!0}function Pp(e,n,s,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,o),n.state!==e&&zh.enqueueReplaceState(n,n.state,null)}function gs(e,n){var s=n;if("ref"in n){s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}if(e=e.defaultProps){s===n&&(s=I({},s));for(var c in e)s[c]===void 0&&(s[c]=e[c])}return s}var Au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function xp(e){Au(e)}function zp(e){console.error(e)}function Bp(e){Au(e)}function Su(e,n){try{var s=e.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function jp(e,n,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Bh(e,n,s){return s=_r(s),s.tag=3,s.payload={element:null},s.callback=function(){Su(e,n)},s}function Hp(e){return e=_r(e),e.tag=3,e}function qp(e,n,s,o){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){jp(n,s,o)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){jp(n,s,o),typeof c!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function eT(e,n,s,o,c){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=s.alternate,n!==null&&Vo(n,s,c,!0),s=wn.current,s!==null){switch(s.tag){case 13:return ii===null?Af():s.alternate===null&&ee===0&&(ee=3),s.flags&=-257,s.flags|=65536,s.lanes=c,o===gh?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([o]):n.add(o),bf(e,o,c)),!1;case 22:return s.flags|=65536,o===gh?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([o]):s.add(o)),bf(e,o,c)),!1}throw Error(a(435,s.tag))}return bf(e,o,c),Af(),!1}if(kt)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==ph&&(e=Error(a(422),{cause:o}),Ao(An(e,s)))):(o!==ph&&(n=Error(a(423),{cause:o}),Ao(An(n,s))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=An(o,s),c=Bh(e.stateNode,o,c),ef(e,c),ee!==4&&(ee=2)),!1;var f=Error(a(520),{cause:o});if(f=An(f,s),Ho===null?Ho=[f]:Ho.push(f),ee!==4&&(ee=2),n===null)return!0;o=An(o,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,e=c&-c,s.lanes|=e,e=Bh(s.stateNode,o,e),ef(s,e),!1;case 1:if(n=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wr===null||!wr.has(f))))return s.flags|=65536,c&=-c,s.lanes|=c,c=Hp(c),qp(c,e,s,o),ef(s,c),!1}s=s.return}while(s!==null);return!1}var Gp=Error(a(461)),be=!1;function Me(e,n,s,o){n.child=e===null?Xm(n,null,s,o):hs(n,e.child,s,o)}function Fp(e,n,s,o,c){s=s.render;var f=n.ref;if("ref"in o){var _={};for(var E in o)E!=="ref"&&(_[E]=o[E])}else _=o;return _s(n),o=Sh(e,n,s,_,f,c),E=bh(),e!==null&&!be?(wh(e,n,c),Di(e,n,c)):(kt&&E&&dh(n),n.flags|=1,Me(e,n,o,c),n.child)}function Kp(e,n,s,o,c){if(e===null){var f=s.type;return typeof f=="function"&&!cf(f)&&f.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=f,Yp(e,n,f,o,c)):(e=Cu(s.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Xh(e,c)){var _=f.memoizedProps;if(s=s.compare,s=s!==null?s:_o,s(_,o)&&e.ref===n.ref)return Di(e,n,c)}return n.flags|=1,e=Sr(f,o),e.ref=n.ref,e.return=n,n.child=e}function Yp(e,n,s,o,c){if(e!==null){var f=e.memoizedProps;if(_o(f,o)&&e.ref===n.ref)if(be=!1,n.pendingProps=o=f,Xh(e,c))(e.flags&131072)!==0&&(be=!0);else return n.lanes=e.lanes,Di(e,n,c)}return jh(e,n,s,o,c)}function Qp(e,n,s){var o=n.pendingProps,c=o.children,f=(n.stateNode._pendingVisibility&2)!==0,_=e!==null?e.memoizedState:null;if(Mo(e,n),o.mode==="hidden"||f){if((n.flags&128)!==0){if(o=_!==null?_.baseLanes|s:s,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Xp(e,n,o,s)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&du(n,_!==null?_.cachePool:null),_!==null?$m(n,_):yh(),Zm(n);else return n.lanes=n.childLanes=536870912,Xp(e,n,_!==null?_.baseLanes|s:s,s)}else _!==null?(du(n,_.cachePool),$m(n,_),dr(),n.memoizedState=null):(e!==null&&du(n,null),yh(),dr());return Me(e,n,c,s),n.child}function Xp(e,n,s,o){var c=Th();return c=c===null?null:{parent:ve._currentValue,pool:c},n.memoizedState={baseLanes:s,cachePool:c},e!==null&&du(n,null),yh(),Zm(n),e!==null&&Vo(e,n,o,!0),null}function Mo(e,n){var s=n.ref;if(s===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(n.flags|=2097664)}}function jh(e,n,s,o,c){return _s(n),s=Sh(e,n,s,o,void 0,c),o=bh(),e!==null&&!be?(wh(e,n,c),Di(e,n,c)):(kt&&o&&dh(n),n.flags|=1,Me(e,n,s,c),n.child)}function $p(e,n,s,o,c,f){return _s(n),n.updateQueue=null,s=np(n,o,s,c),ep(e),o=bh(),e!==null&&!be?(wh(e,n,f),Di(e,n,f)):(kt&&o&&dh(n),n.flags|=1,Me(e,n,s,f),n.child)}function Zp(e,n,s,o,c){if(_s(n),n.stateNode===null){var f=ua,_=s.contextType;typeof _=="object"&&_!==null&&(f=ze(_)),f=new s(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Jh(n),_=s.contextType,f.context=typeof _=="object"&&_!==null?ze(_):ua,f.state=n.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(xh(n,s,_,o),f.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&zh.enqueueReplaceState(f,f.state,null),Lo(n,o,f,c),ko(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,S=gs(s,E);f.props=S;var N=f.context,H=s.contextType;_=ua,typeof H=="object"&&H!==null&&(_=ze(H));var F=s.getDerivedStateFromProps;H=typeof F=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,H||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||N!==_)&&Pp(n,f,o,_),yr=!1;var x=n.memoizedState;f.state=x,Lo(n,o,f,c),ko(),N=n.memoizedState,E||x!==N||yr?(typeof F=="function"&&(xh(n,s,F,o),N=n.memoizedState),(S=yr||Lp(n,s,S,o,x,N,_))?(H||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=N),f.props=o,f.state=N,f.context=_,o=S):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,tf(e,n),_=n.memoizedProps,H=gs(s,_),f.props=H,F=n.pendingProps,x=f.context,N=s.contextType,S=ua,typeof N=="object"&&N!==null&&(S=ze(N)),E=s.getDerivedStateFromProps,(N=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==F||x!==S)&&Pp(n,f,o,S),yr=!1,x=n.memoizedState,f.state=x,Lo(n,o,f,c),ko();var j=n.memoizedState;_!==F||x!==j||yr||e!==null&&e.dependencies!==null&&bu(e.dependencies)?(typeof E=="function"&&(xh(n,s,E,o),j=n.memoizedState),(H=yr||Lp(n,s,H,o,x,j,S)||e!==null&&e.dependencies!==null&&bu(e.dependencies))?(N||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,j,S),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,j,S)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=j),f.props=o,f.state=j,f.context=S,o=H):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Mo(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=hs(n,e.child,null,c),n.child=hs(n,null,s,c)):Me(e,n,s,c),n.memoizedState=f.state,e=n.child):e=Di(e,n,c),e}function Wp(e,n,s,o){return To(),n.flags|=256,Me(e,n,s,o),n.child}var Hh={dehydrated:null,treeContext:null,retryLane:0};function qh(e){return{baseLanes:e,cachePool:tp()}}function Gh(e,n,s){return e=e!==null?e.childLanes&~s:0,n&&(e|=On),e}function Jp(e,n,s){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(kt){if(c?fr(n):dr(),kt){var E=Ne,S;if(S=E){t:{for(S=E,E=ni;S.nodeType!==8;){if(!E){E=null;break t}if(S=xn(S.nextSibling),S===null){E=null;break t}}E=S}E!==null?(n.memoizedState={dehydrated:E,treeContext:ls!==null?{id:Ri,overflow:Ii}:null,retryLane:536870912},S=Cn(18,null,null,0),S.stateNode=E,S.return=n,n.child=S,Xe=n,Ne=null,S=!0):S=!1}S||cs(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ci(n)}return E=o.children,o=o.fallback,c?(dr(),c=n.mode,E=Kh({mode:"hidden",children:E},c),o=Es(o,c,s,null),E.return=n,o.return=n,E.sibling=o,n.child=E,c=n.child,c.memoizedState=qh(s),c.childLanes=Gh(e,_,s),n.memoizedState=Hh,o):(fr(n),Fh(n,E))}if(S=e.memoizedState,S!==null&&(E=S.dehydrated,E!==null)){if(f)n.flags&256?(fr(n),n.flags&=-257,n=Yh(e,n,s)):n.memoizedState!==null?(dr(),n.child=e.child,n.flags|=128,n=null):(dr(),c=o.fallback,E=n.mode,o=Kh({mode:"visible",children:o.children},E),c=Es(c,E,s,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,hs(n,e.child,null,s),o=n.child,o.memoizedState=qh(s),o.childLanes=Gh(e,_,s),n.memoizedState=Hh,n=c);else if(fr(n),E.data==="$!"){if(_=E.nextSibling&&E.nextSibling.dataset,_)var N=_.dgst;_=N,o=Error(a(419)),o.stack="",o.digest=_,Ao({value:o,source:null,stack:null}),n=Yh(e,n,s)}else if(be||Vo(e,n,s,!1),_=(s&e.childLanes)!==0,be||_){if(_=Ft,_!==null){if(o=s&-s,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(_.suspendedLanes|s))!==0?0:o,o!==0&&o!==S.retryLane)throw S.retryLane=o,hr(e,o),$e(_,e,o),Gp}E.data==="$?"||Af(),n=Yh(e,n,s)}else E.data==="$?"?(n.flags|=128,n.child=e.child,n=gT.bind(null,e),E._reactRetry=n,n=null):(e=S.treeContext,Ne=xn(E.nextSibling),Xe=n,kt=!0,Ln=null,ni=!1,e!==null&&(Sn[bn++]=Ri,Sn[bn++]=Ii,Sn[bn++]=ls,Ri=e.id,Ii=e.overflow,ls=n),n=Fh(n,o.children),n.flags|=4096);return n}return c?(dr(),c=o.fallback,E=n.mode,S=e.child,N=S.sibling,o=Sr(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&31457280,N!==null?c=Sr(N,c):(c=Es(c,E,s,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,E=e.child.memoizedState,E===null?E=qh(s):(S=E.cachePool,S!==null?(N=ve._currentValue,S=S.parent!==N?{parent:N,pool:N}:S):S=tp(),E={baseLanes:E.baseLanes|s,cachePool:S}),c.memoizedState=E,c.childLanes=Gh(e,_,s),n.memoizedState=Hh,o):(fr(n),s=e.child,e=s.sibling,s=Sr(s,{mode:"visible",children:o.children}),s.return=n,s.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=s,n.memoizedState=null,s)}function Fh(e,n){return n=Kh({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Kh(e,n){return wg(e,n,0,null)}function Yh(e,n,s){return hs(n,e.child,null,s),e=Fh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function tg(e,n,s){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Zh(e.return,n,s)}function Qh(e,n,s,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=s,f.tailMode=c)}function eg(e,n,s){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Me(e,n,o.children,s),o=_e.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tg(e,s,n);else if(e.tag===19)tg(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(zt(_e,o),c){case"forwards":for(s=n.child,c=null;s!==null;)e=s.alternate,e!==null&&fu(e)===null&&(c=s),s=s.sibling;s=c,s===null?(c=n.child,n.child=null):(c=s.sibling,s.sibling=null),Qh(n,!1,c,s,f);break;case"backwards":for(s=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&fu(e)===null){n.child=c;break}e=c.sibling,c.sibling=s,s=c,c=e}Qh(n,!0,s,null,f);break;case"together":Qh(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Di(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),br|=n.lanes,(s&n.childLanes)===0)if(e!==null){if(Vo(e,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,s=Sr(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=Sr(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function Xh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bu(e)))}function nT(e,n,s){switch(n.tag){case 3:Xi(n,n.stateNode.containerInfo),gr(n,ve,e.memoizedState.cache),To();break;case 27:case 5:$a(n);break;case 4:Xi(n,n.stateNode.containerInfo);break;case 10:gr(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(fr(n),n.flags|=128,null):(s&n.child.childLanes)!==0?Jp(e,n,s):(fr(n),e=Di(e,n,s),e!==null?e.sibling:null);fr(n);break;case 19:var c=(e.flags&128)!==0;if(o=(s&n.childLanes)!==0,o||(Vo(e,n,s,!1),o=(s&n.childLanes)!==0),c){if(o)return eg(e,n,s);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),zt(_e,_e.current),o)break;return null;case 22:case 23:return n.lanes=0,Qp(e,n,s);case 24:gr(n,ve,e.memoizedState.cache)}return Di(e,n,s)}function ng(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps)be=!0;else{if(!Xh(e,s)&&(n.flags&128)===0)return be=!1,nT(e,n,s);be=(e.flags&131072)!==0}else be=!1,kt&&(n.flags&1048576)!==0&&Bm(n,ou,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")cf(o)?(e=gs(o,e),n.tag=1,n=Zp(null,n,o,e,s)):(n.tag=0,n=jh(null,n,o,e,s));else{if(o!=null){if(c=o.$$typeof,c===$){n.tag=11,n=Fp(null,n,o,e,s);break t}else if(c===Rt){n.tag=14,n=Kp(null,n,o,e,s);break t}}throw n=b(o)||o,Error(a(306,n,""))}}return n;case 0:return jh(e,n,n.type,n.pendingProps,s);case 1:return o=n.type,c=gs(o,n.pendingProps),Zp(e,n,o,c,s);case 3:t:{if(Xi(n,n.stateNode.containerInfo),e===null)throw Error(a(387));var f=n.pendingProps;c=n.memoizedState,o=c.element,tf(e,n),Lo(n,f,null,s);var _=n.memoizedState;if(f=_.cache,gr(n,ve,f),f!==c.cache&&Wh(n,[ve],s,!0),ko(),f=_.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Wp(e,n,f,s);break t}else if(f!==o){o=An(Error(a(424)),n),Ao(o),n=Wp(e,n,f,s);break t}else for(Ne=xn(n.stateNode.containerInfo.firstChild),Xe=n,kt=!0,Ln=null,ni=!0,s=Xm(n,null,f,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(To(),f===o){n=Di(e,n,s);break t}Me(e,n,f,s)}n=n.child}return n;case 26:return Mo(e,n),e===null?(s=sy(n.type,null,n.pendingProps,null))?n.memoizedState=s:kt||(s=n.type,e=n.pendingProps,o=Bu(mn.current).createElement(s),o[Te]=n,o[pe]=e,Ve(o,s,e),Xt(o),n.stateNode=o):n.memoizedState=sy(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return $a(n),e===null&&kt&&(o=n.stateNode=ny(n.type,n.pendingProps,mn.current),Xe=n,ni=!0,Ne=xn(o.firstChild)),o=n.pendingProps.children,e!==null||kt?Me(e,n,o,s):n.child=hs(n,null,o,s),Mo(e,n),n.child;case 5:return e===null&&kt&&((c=o=Ne)&&(o=MT(o,n.type,n.pendingProps,ni),o!==null?(n.stateNode=o,Xe=n,Ne=xn(o.firstChild),ni=!1,c=!0):c=!1),c||cs(n)),$a(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,Lf(c,f)?o=null:_!==null&&Lf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Sh(e,n,XE,null,null,s),Zo._currentValue=c),Mo(e,n),Me(e,n,o,s),n.child;case 6:return e===null&&kt&&((e=s=Ne)&&(s=VT(s,n.pendingProps,ni),s!==null?(n.stateNode=s,Xe=n,Ne=null,e=!0):e=!1),e||cs(n)),null;case 13:return Jp(e,n,s);case 4:return Xi(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=hs(n,null,o,s):Me(e,n,o,s),n.child;case 11:return Fp(e,n,n.type,n.pendingProps,s);case 7:return Me(e,n,n.pendingProps,s),n.child;case 8:return Me(e,n,n.pendingProps.children,s),n.child;case 12:return Me(e,n,n.pendingProps.children,s),n.child;case 10:return o=n.pendingProps,gr(n,n.type,o.value),Me(e,n,o.children,s),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,_s(n),c=ze(c),o=o(c),n.flags|=1,Me(e,n,o,s),n.child;case 14:return Kp(e,n,n.type,n.pendingProps,s);case 15:return Yp(e,n,n.type,n.pendingProps,s);case 19:return eg(e,n,s);case 22:return Qp(e,n,s);case 24:return _s(n),o=ze(ve),e===null?(c=Th(),c===null&&(c=Ft,f=vh(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=s),c=f),n.memoizedState={parent:o,cache:c},Jh(n),gr(n,ve,c)):((e.lanes&s)!==0&&(tf(e,n),Lo(n,null,null,s),ko()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),gr(n,ve,o)):(o=f.cache,gr(n,ve,o),o!==c.cache&&Wh(n,[ve],s,!0))),Me(e,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}var $h=Vt(null),ys=null,Ni=null;function gr(e,n,s){zt($h,n._currentValue),n._currentValue=s}function Mi(e){e._currentValue=$h.current,Wt($h)}function Zh(e,n,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===s)break;e=e.return}}function Wh(e,n,s,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var S=0;S<n.length;S++)if(E.context===n[S]){f.lanes|=s,E=f.alternate,E!==null&&(E.lanes|=s),Zh(f.return,s,e),o||(_=null);break t}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(a(341));_.lanes|=s,f=_.alternate,f!==null&&(f.lanes|=s),Zh(_,s,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Vo(e,n,s,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var E=c.type;on(c.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(c===Qi.current){if(_=c.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Zo):e=[Zo])}c=c.return}e!==null&&Wh(n,e,s,o),n.flags|=262144}function bu(e){for(e=e.firstContext;e!==null;){if(!on(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _s(e){ys=e,Ni=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ze(e){return ig(ys,e)}function wu(e,n){return ys===null&&_s(e),ig(e,n)}function ig(e,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},Ni===null){if(e===null)throw Error(a(308));Ni=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ni=Ni.next=n;return s}var yr=!1;function Jh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _r(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vr(e,n,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Zt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=su(e),xm(e,null,s),n}return ru(e,o,n,s),su(e)}function Uo(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,s|=o,n.lanes=s,er(e,s)}}function ef(e,n){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var c=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,s=s.next}while(s!==null);f===null?c=f=n:f=f.next=n}else c=f=n;s={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}var nf=!1;function ko(){if(nf){var e=pa;if(e!==null)throw e}}function Lo(e,n,s,o){nf=!1;var c=e.updateQueue;yr=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var S=E,N=S.next;S.next=null,_===null?f=N:_.next=N,_=S;var H=e.alternate;H!==null&&(H=H.updateQueue,E=H.lastBaseUpdate,E!==_&&(E===null?H.firstBaseUpdate=N:E.next=N,H.lastBaseUpdate=S))}if(f!==null){var F=c.baseState;_=0,H=N=S=null,E=f;do{var x=E.lane&-536870913,j=x!==E.lane;if(j?(Dt&x)===x:(o&x)===x){x!==0&&x===ma&&(nf=!0),H!==null&&(H=H.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var it=e,ft=E;x=n;var ne=s;switch(ft.tag){case 1:if(it=ft.payload,typeof it=="function"){F=it.call(ne,F,x);break t}F=it;break t;case 3:it.flags=it.flags&-65537|128;case 0:if(it=ft.payload,x=typeof it=="function"?it.call(ne,F,x):it,x==null)break t;F=I({},F,x);break t;case 2:yr=!0}}x=E.callback,x!==null&&(e.flags|=64,j&&(e.flags|=8192),j=c.callbacks,j===null?c.callbacks=[x]:j.push(x))}else j={lane:x,tag:E.tag,payload:E.payload,callback:E.callback,next:null},H===null?(N=H=j,S=F):H=H.next=j,_|=x;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;j=E,E=j.next,j.next=null,c.lastBaseUpdate=j,c.shared.pending=null}}while(!0);H===null&&(S=F),c.baseState=S,c.firstBaseUpdate=N,c.lastBaseUpdate=H,f===null&&(c.shared.lanes=0),br|=_,e.lanes=_,e.memoizedState=F}}function rg(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function sg(e,n){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)rg(s[e],n)}function Po(e,n){try{var s=n.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&e)===e){o=void 0;var f=s.create,_=s.inst;o=f(),_.destroy=o}s=s.next}while(s!==c)}}catch(E){Gt(n,n.return,E)}}function Er(e,n,s){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var _=o.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var S=s;try{E()}catch(N){Gt(c,S,N)}}}o=o.next}while(o!==f)}}catch(N){Gt(n,n.return,N)}}function ag(e){var n=e.updateQueue;if(n!==null){var s=e.stateNode;try{sg(n,s)}catch(o){Gt(e,e.return,o)}}}function og(e,n,s){s.props=gs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Gt(e,n,o)}}function vs(e,n){try{var s=e.ref;if(s!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof s=="function"?e.refCleanup=s(c):s.current=c}}catch(f){Gt(e,n,f)}}function ln(e,n){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(c){Gt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Gt(e,n,c)}else s.current=null}function lg(e){var n=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(c){Gt(e,e.return,c)}}function ug(e,n,s){try{var o=e.stateNode;IT(o,e.type,s,n),o[pe]=n}catch(c){Gt(e,e.return,c)}}function cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sf(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=zu));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(sf(e,n,s),e=e.sibling;e!==null;)sf(e,n,s),e=e.sibling}function Ru(e,n,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Ru(e,n,s),e=e.sibling;e!==null;)Ru(e,n,s),e=e.sibling}var Vi=!1,te=!1,af=!1,hg=typeof WeakSet=="function"?WeakSet:Set,we=null,fg=!1;function iT(e,n){if(e=e.containerInfo,Uf=Ku,e=Om(e),oh(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break t}var _=0,E=-1,S=-1,N=0,H=0,F=e,x=null;e:for(;;){for(var j;F!==s||c!==0&&F.nodeType!==3||(E=_+c),F!==f||o!==0&&F.nodeType!==3||(S=_+o),F.nodeType===3&&(_+=F.nodeValue.length),(j=F.firstChild)!==null;)x=F,F=j;for(;;){if(F===e)break e;if(x===s&&++N===c&&(E=_),x===f&&++H===o&&(S=_),(j=F.nextSibling)!==null)break;F=x,x=F.parentNode}F=j}s=E===-1||S===-1?null:{start:E,end:S}}else s=null}s=s||{start:0,end:0}}else s=null;for(kf={focusedElem:e,selectionRange:s},Ku=!1,we=n;we!==null;)if(n=we,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,we=e;else for(;we!==null;){switch(n=we,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=n,c=f.memoizedProps,f=f.memoizedState,o=s.stateNode;try{var it=gs(s.type,c,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(it,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ft){Gt(s,s.return,ft)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,s=e.nodeType,s===9)zf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,we=e;break}we=n.return}return it=fg,fg=!1,it}function dg(e,n,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:ki(e,s),o&4&&Po(5,s);break;case 1:if(ki(e,s),o&4)if(e=s.stateNode,n===null)try{e.componentDidMount()}catch(E){Gt(s,s.return,E)}else{var c=gs(s.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Gt(s,s.return,E)}}o&64&&ag(s),o&512&&vs(s,s.return);break;case 3:if(ki(e,s),o&64&&(o=s.updateQueue,o!==null)){if(e=null,s.child!==null)switch(s.child.tag){case 27:case 5:e=s.child.stateNode;break;case 1:e=s.child.stateNode}try{sg(o,e)}catch(E){Gt(s,s.return,E)}}break;case 26:ki(e,s),o&512&&vs(s,s.return);break;case 27:case 5:ki(e,s),n===null&&o&4&&lg(s),o&512&&vs(s,s.return);break;case 12:ki(e,s);break;case 13:ki(e,s),o&4&&gg(e,s);break;case 22:if(c=s.memoizedState!==null||Vi,!c){n=n!==null&&n.memoizedState!==null||te;var f=Vi,_=te;Vi=c,(te=n)&&!_?Tr(e,s,(s.subtreeFlags&8772)!==0):ki(e,s),Vi=f,te=_}o&512&&(s.memoizedProps.mode==="manual"?vs(s,s.return):ln(s,s.return));break;default:ki(e,s)}}function mg(e){var n=e.alternate;n!==null&&(e.alternate=null,mg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var he=null,un=!1;function Ui(e,n,s){for(s=s.child;s!==null;)pg(e,n,s),s=s.sibling}function pg(e,n,s){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount($i,s)}catch{}switch(s.tag){case 26:te||ln(s,n),Ui(e,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:te||ln(s,n);var o=he,c=un;for(he=s.stateNode,Ui(e,n,s),s=s.stateNode,n=s.attributes;n.length;)s.removeAttributeNode(n[0]);Xr(s),he=o,un=c;break;case 5:te||ln(s,n);case 6:c=he;var f=un;if(he=null,Ui(e,n,s),he=c,un=f,he!==null)if(un)try{e=he,o=s.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(_){Gt(s,n,_)}else try{he.removeChild(s.stateNode)}catch(_){Gt(s,n,_)}break;case 18:he!==null&&(un?(n=he,s=s.stateNode,n.nodeType===8?xf(n.parentNode,s):n.nodeType===1&&xf(n,s),el(n)):xf(he,s.stateNode));break;case 4:o=he,c=un,he=s.stateNode.containerInfo,un=!0,Ui(e,n,s),he=o,un=c;break;case 0:case 11:case 14:case 15:te||Er(2,s,n),te||Er(4,s,n),Ui(e,n,s);break;case 1:te||(ln(s,n),o=s.stateNode,typeof o.componentWillUnmount=="function"&&og(s,n,o)),Ui(e,n,s);break;case 21:Ui(e,n,s);break;case 22:te||ln(s,n),te=(o=te)||s.memoizedState!==null,Ui(e,n,s),te=o;break;default:Ui(e,n,s)}}function gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{el(e)}catch(s){Gt(n,n.return,s)}}function rT(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new hg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new hg),n;default:throw Error(a(435,e.tag))}}function of(e,n){var s=rT(e);n.forEach(function(o){var c=yT.bind(null,e,o);s.has(o)||(s.add(o),o.then(c,c))})}function Rn(e,n){var s=n.deletions;if(s!==null)for(var o=0;o<s.length;o++){var c=s[o],f=e,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:case 5:he=E.stateNode,un=!1;break t;case 3:he=E.stateNode.containerInfo,un=!0;break t;case 4:he=E.stateNode.containerInfo,un=!0;break t}E=E.return}if(he===null)throw Error(a(160));pg(f,_,c),he=null,un=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)yg(n,e),n=n.sibling}var Pn=null;function yg(e,n){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rn(n,e),In(e),o&4&&(Er(3,e,e.return),Po(3,e),Er(5,e,e.return));break;case 1:Rn(n,e),In(e),o&512&&(te||s===null||ln(s,s.return)),o&64&&Vi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var c=Pn;if(Rn(n,e),In(e),o&512&&(te||s===null||ln(s,s.return)),o&4){var f=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ir]||f[Te]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Ve(f,o,s),f[Te]=e,Xt(f),o=f;break t;case"link":var _=ly("link","href",c).get(o+(s.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(s.href==null?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(E,1);break e}}f=c.createElement(o),Ve(f,o,s),c.head.appendChild(f);break;case"meta":if(_=ly("meta","content",c).get(o+(s.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(E,1);break e}}f=c.createElement(o),Ve(f,o,s),c.head.appendChild(f);break;default:throw Error(a(468,o))}f[Te]=e,Xt(f),o=f}e.stateNode=o}else uy(c,e.type,e.stateNode);else e.stateNode=oy(c,o,e.memoizedProps);else f!==o?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,o===null?uy(c,e.type,e.stateNode):oy(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ug(e,e.memoizedProps,s.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var S=c.firstChild;S;){var N=S.nextSibling,H=S.nodeName;S[ir]||H==="HEAD"||H==="BODY"||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&S.rel.toLowerCase()==="stylesheet"||c.removeChild(S),S=N}for(var F=e.type,x=c.attributes;x.length;)c.removeAttributeNode(x[0]);Ve(c,F,f),c[Te]=e,c[pe]=f}catch(it){Gt(e,e.return,it)}}case 5:if(Rn(n,e),In(e),o&512&&(te||s===null||ln(s,s.return)),e.flags&32){c=e.stateNode;try{yn(c,"")}catch(it){Gt(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,ug(e,c,s!==null?s.memoizedProps:c)),o&1024&&(af=!0);break;case 6:if(Rn(n,e),In(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(it){Gt(e,e.return,it)}}break;case 3:if(qu=null,c=Pn,Pn=ju(n.containerInfo),Rn(n,e),Pn=c,In(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{el(n.containerInfo)}catch(it){Gt(e,e.return,it)}af&&(af=!1,_g(e));break;case 4:o=Pn,Pn=ju(e.stateNode.containerInfo),Rn(n,e),In(e),Pn=o;break;case 12:Rn(n,e),In(e);break;case 13:Rn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(gf=We()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,of(e,o)));break;case 22:if(o&512&&(te||s===null||ln(s,s.return)),S=e.memoizedState!==null,N=s!==null&&s.memoizedState!==null,H=Vi,F=te,Vi=H||S,te=F||N,Rn(n,e),te=F,Vi=H,In(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=S?n._visibility&-2:n._visibility|1,S&&(n=Vi||te,s===null||N||n||va(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(s=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(s===null){N=s=n;try{if(c=N.stateNode,S)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{_=N.stateNode,E=N.memoizedProps.style;var j=E!=null&&E.hasOwnProperty("display")?E.display:null;_.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(it){Gt(N,N.return,it)}}}else if(n.tag===6){if(s===null){N=n;try{N.stateNode.nodeValue=S?"":N.memoizedProps}catch(it){Gt(N,N.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,of(e,s))));break;case 19:Rn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,of(e,o)));break;case 21:break;default:Rn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var s=e.return;s!==null;){if(cg(s)){var o=s;break t}s=s.return}throw Error(a(160))}switch(o.tag){case 27:var c=o.stateNode,f=rf(e);Ru(e,f,c);break;case 5:var _=o.stateNode;o.flags&32&&(yn(_,""),o.flags&=-33);var E=rf(e);Ru(e,E,_);break;case 3:case 4:var S=o.stateNode.containerInfo,N=rf(e);sf(e,N,S);break;default:throw Error(a(161))}}}catch(H){Gt(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function _g(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;_g(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ki(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)dg(e,n.alternate,n),n=n.sibling}function va(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Er(4,n,n.return),va(n);break;case 1:ln(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&og(n,n.return,s),va(n);break;case 26:case 27:case 5:ln(n,n.return),va(n);break;case 22:ln(n,n.return),n.memoizedState===null&&va(n);break;default:va(n)}e=e.sibling}}function Tr(e,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Tr(c,f,s),Po(4,f);break;case 1:if(Tr(c,f,s),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(N){Gt(o,o.return,N)}if(o=f,c=o.updateQueue,c!==null){var E=o.stateNode;try{var S=c.shared.hiddenCallbacks;if(S!==null)for(c.shared.hiddenCallbacks=null,c=0;c<S.length;c++)rg(S[c],E)}catch(N){Gt(o,o.return,N)}}s&&_&64&&ag(f),vs(f,f.return);break;case 26:case 27:case 5:Tr(c,f,s),s&&o===null&&_&4&&lg(f),vs(f,f.return);break;case 12:Tr(c,f,s);break;case 13:Tr(c,f,s),s&&_&4&&gg(c,f);break;case 22:f.memoizedState===null&&Tr(c,f,s),vs(f,f.return);break;default:Tr(c,f,s)}n=n.sibling}}function lf(e,n){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Io(s))}function uf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Io(e))}function Ar(e,n,s,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vg(e,n,s,o),n=n.sibling}function vg(e,n,s,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ar(e,n,s,o),c&2048&&Po(9,n);break;case 3:Ar(e,n,s,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Io(e)));break;case 12:if(c&2048){Ar(e,n,s,o),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Gt(n,n.return,S)}}else Ar(e,n,s,o);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Ar(e,n,s,o):xo(e,n):f._visibility&4?Ar(e,n,s,o):(f._visibility|=4,Ea(e,n,s,o,(n.subtreeFlags&10256)!==0)),c&2048&&lf(n.alternate,n);break;case 24:Ar(e,n,s,o),c&2048&&uf(n.alternate,n);break;default:Ar(e,n,s,o)}}function Ea(e,n,s,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,_=n,E=s,S=o,N=_.flags;switch(_.tag){case 0:case 11:case 15:Ea(f,_,E,S,c),Po(8,_);break;case 23:break;case 22:var H=_.stateNode;_.memoizedState!==null?H._visibility&4?Ea(f,_,E,S,c):xo(f,_):(H._visibility|=4,Ea(f,_,E,S,c)),c&&N&2048&&lf(_.alternate,_);break;case 24:Ea(f,_,E,S,c),c&&N&2048&&uf(_.alternate,_);break;default:Ea(f,_,E,S,c)}n=n.sibling}}function xo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=e,o=n,c=o.flags;switch(o.tag){case 22:xo(s,o),c&2048&&lf(o.alternate,o);break;case 24:xo(s,o),c&2048&&uf(o.alternate,o);break;default:xo(s,o)}n=n.sibling}}var zo=8192;function Ta(e){if(e.subtreeFlags&zo)for(e=e.child;e!==null;)Eg(e),e=e.sibling}function Eg(e){switch(e.tag){case 26:Ta(e),e.flags&zo&&e.memoizedState!==null&&KT(Pn,e.memoizedState,e.memoizedProps);break;case 5:Ta(e);break;case 3:case 4:var n=Pn;Pn=ju(e.stateNode.containerInfo),Ta(e),Pn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=zo,zo=16777216,Ta(e),zo=n):Ta(e));break;default:Ta(e)}}function Tg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Bo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];we=o,Sg(o,e)}Tg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ag(e),e=e.sibling}function Ag(e){switch(e.tag){case 0:case 11:case 15:Bo(e),e.flags&2048&&Er(9,e,e.return);break;case 3:Bo(e);break;case 12:Bo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Iu(e)):Bo(e);break;default:Bo(e)}}function Iu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var o=n[s];we=o,Sg(o,e)}Tg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Er(8,n,n.return),Iu(n);break;case 22:s=n.stateNode,s._visibility&4&&(s._visibility&=-5,Iu(n));break;default:Iu(n)}e=e.sibling}}function Sg(e,n){for(;we!==null;){var s=we;switch(s.tag){case 0:case 11:case 15:Er(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Io(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,we=o;else t:for(s=e;we!==null;){o=we;var c=o.sibling,f=o.return;if(mg(o),o===s){we=null;break t}if(c!==null){c.return=f,we=c;break t}we=f}}}function sT(e,n,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(e,n,s,o){return new sT(e,n,s,o)}function cf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sr(e,n){var s=e.alternate;return s===null?(s=Cn(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&31457280,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function bg(e,n){e.flags&=31457282;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,n=s.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Cu(e,n,s,o,c,f){var _=0;if(o=e,typeof e=="function")cf(e)&&(_=1);else if(typeof e=="string")_=GT(e,s,Fe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case g:return Es(s.children,c,f,n);case v:_=8,c|=24;break;case w:return e=Cn(12,s,n,c|2),e.elementType=w,e.lanes=f,e;case at:return e=Cn(13,s,n,c),e.elementType=at,e.lanes=f,e;case tt:return e=Cn(19,s,n,c),e.elementType=tt,e.lanes=f,e;case Tt:return wg(s,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:case K:_=10;break t;case B:_=9;break t;case $:_=11;break t;case Rt:_=14;break t;case dt:_=16,o=null;break t}_=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=Cn(_,s,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function Es(e,n,s,o){return e=Cn(7,e,o,n),e.lanes=s,e}function wg(e,n,s,o){e=Cn(22,e,o,n),e.elementType=Tt,e.lanes=s;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(a(456));if((c._pendingVisibility&2)===0){var _=hr(f,2);_!==null&&(c._pendingVisibility|=2,$e(_,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(a(456));if((c._pendingVisibility&2)!==0){var _=hr(f,2);_!==null&&(c._pendingVisibility&=-3,$e(_,f,2))}}};return e.stateNode=c,e}function hf(e,n,s){return e=Cn(6,e,null,n),e.lanes=s,e}function ff(e,n,s){return n=Cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Li(e){e.flags|=4}function Rg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cy(n)){if(n=wn.current,n!==null&&((Dt&4194176)===Dt?ii!==null:(Dt&62914560)!==Dt&&(Dt&536870912)===0||n!==ii))throw bo=gh,qm;e.flags|=8192}}function Ou(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ji():536870912,e.lanes|=n,Sa|=n)}function jo(e,n){if(!kt)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $t(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(n)for(var c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=s,n}function aT(e,n,s){var o=n.pendingProps;switch(mh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return s=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Mi(ve),pi(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Eo(n)?Li(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ln!==null&&(Ef(Ln),Ln=null))),$t(n),null;case 26:return s=n.memoizedState,e===null?(Li(n),s!==null?($t(n),Rg(n,s)):($t(n),n.flags&=-16777217)):s?s!==e.memoizedState?(Li(n),$t(n),Rg(n,s)):($t(n),n.flags&=-16777217):(e.memoizedProps!==o&&Li(n),$t(n),n.flags&=-16777217),null;case 27:Hs(n),s=mn.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Li(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return $t(n),null}e=Fe.current,Eo(n)?jm(n):(e=ny(c,o,s),n.stateNode=e,Li(n))}return $t(n),null;case 5:if(Hs(n),s=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Li(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return $t(n),null}if(e=Fe.current,Eo(n))jm(n);else{switch(c=Bu(mn.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(s,{is:o.is}):c.createElement(s)}}e[Te]=n,e[pe]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Ve(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Li(n)}}return $t(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Li(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=mn.current,Eo(n)){if(e=n.stateNode,s=n.memoizedProps,o=null,c=Xe,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Te]=n,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||$g(e.nodeValue,s)),e||cs(n)}else e=Bu(e).createTextNode(o),e[Te]=n,n.stateNode=e}return $t(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Eo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[Te]=n}else To(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),c=!1}else Ln!==null&&(Ef(Ln),Ln=null),c=!0;if(!c)return n.flags&256?(Ci(n),n):(Ci(n),null)}if(Ci(n),(n.flags&128)!==0)return n.lanes=s,n;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return s!==e&&s&&(n.child.flags|=8192),Ou(n,n.updateQueue),$t(n),null;case 4:return pi(),e===null&&Nf(n.stateNode.containerInfo),$t(n),null;case 10:return Mi(n.type),$t(n),null;case 19:if(Wt(_e),c=n.memoizedState,c===null)return $t(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)jo(c,!1);else{if(ee!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=fu(e),f!==null){for(n.flags|=128,jo(c,!1),e=f.updateQueue,n.updateQueue=e,Ou(n,e),n.subtreeFlags=0,e=s,s=n.child;s!==null;)bg(s,e),s=s.sibling;return zt(_e,_e.current&1|2),n.child}e=e.sibling}c.tail!==null&&We()>Du&&(n.flags|=128,o=!0,jo(c,!1),n.lanes=4194304)}else{if(!o)if(e=fu(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ou(n,e),jo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!kt)return $t(n),null}else 2*We()-c.renderingStartTime>Du&&s!==536870912&&(n.flags|=128,o=!0,jo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=We(),n.sibling=null,e=_e.current,zt(_e,o?e&1|2:e&1),n):($t(n),null);case 22:case 23:return Ci(n),_h(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(s&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),s=n.updateQueue,s!==null&&Ou(n,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048),e!==null&&Wt(fs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Mi(ve),$t(n),null;case 25:return null}throw Error(a(156,n.tag))}function oT(e,n){switch(mh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Mi(ve),pi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Hs(n),null;case 13:if(Ci(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));To()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Wt(_e),null;case 4:return pi(),null;case 10:return Mi(n.type),null;case 22:case 23:return Ci(n),_h(),e!==null&&Wt(fs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Mi(ve),null;case 25:return null;default:return null}}function Ig(e,n){switch(mh(n),n.tag){case 3:Mi(ve),pi();break;case 26:case 27:case 5:Hs(n);break;case 4:pi();break;case 13:Ci(n);break;case 19:Wt(_e);break;case 10:Mi(n.type);break;case 22:case 23:Ci(n),_h(),e!==null&&Wt(fs);break;case 24:Mi(ve)}}var lT={getCacheForType:function(e){var n=ze(ve),s=n.data.get(e);return s===void 0&&(s=e(),n.data.set(e,s)),s}},uT=typeof WeakMap=="function"?WeakMap:Map,Zt=0,Ft=null,St=null,Dt=0,Kt=0,cn=null,Pi=!1,Aa=!1,df=!1,xi=0,ee=0,br=0,Ts=0,mf=0,On=0,Sa=0,Ho=null,si=null,pf=!1,gf=0,Du=1/0,Nu=null,wr=null,Mu=!1,As=null,qo=0,yf=0,_f=null,Go=0,vf=null;function hn(){if((Zt&2)!==0&&Dt!==0)return Dt&-Dt;if(A.T!==null){var e=ma;return e!==0?e:If()}return xl()}function Cg(){On===0&&(On=(Dt&536870912)===0||kt?eo():536870912);var e=wn.current;return e!==null&&(e.flags|=32),On}function $e(e,n,s){(e===Ft&&Kt===2||e.cancelPendingCommit!==null)&&(ba(e,0),zi(e,Dt,On,!1)),se(e,s),((Zt&2)===0||e!==Ft)&&(e===Ft&&((Zt&2)===0&&(Ts|=s),ee===4&&zi(e,Dt,On,!1)),ai(e))}function Og(e,n,s){if((Zt&6)!==0)throw Error(a(327));var o=!s&&(n&60)===0&&(n&e.expiredLanes)===0||Wi(e,n),c=o?fT(e,n):Sf(e,n,!0),f=o;do{if(c===0){Aa&&!o&&zi(e,n,0,!1);break}else if(c===6)zi(e,n,0,!Pi);else{if(s=e.current.alternate,f&&!cT(s)){c=Sf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=e;c=Ho;var S=E.current.memoizedState.isDehydrated;if(S&&(ba(E,_).flags|=256),_=Sf(E,_,!1),_!==2){if(df&&!S){E.errorRecoveryDisabledLanes|=f,Ts|=f,c=4;break t}f=si,si=c,f!==null&&Ef(f)}c=_}if(f=!1,c!==2)continue}}if(c===1){ba(e,0),zi(e,n,0,!0);break}t:{switch(o=e,c){case 0:case 1:throw Error(a(345));case 4:if((n&4194176)===n){zi(o,n,On,!Pi);break t}break;case 2:si=null;break;case 3:case 5:break;default:throw Error(a(329))}if(o.finishedWork=s,o.finishedLanes=n,(n&62914560)===n&&(f=gf+300-We(),10<f)){if(zi(o,n,On,!Pi),pn(o,0)!==0)break t;o.timeoutHandle=Jg(Dg.bind(null,o,s,si,Nu,pf,n,On,Ts,Sa,Pi,2,-0,0),f);break t}Dg(o,s,si,Nu,pf,n,On,Ts,Sa,Pi,0,-0,0)}}break}while(!0);ai(e)}function Ef(e){si===null?si=e:si.push.apply(si,e)}function Dg(e,n,s,o,c,f,_,E,S,N,H,F,x){var j=n.subtreeFlags;if((j&8192||(j&16785408)===16785408)&&($o={stylesheets:null,count:0,unsuspend:FT},Eg(n),n=YT(),n!==null)){e.cancelPendingCommit=n(Pg.bind(null,e,s,o,c,_,E,S,1,F,x)),zi(e,f,_,!N);return}Pg(e,s,o,c,_,E,S,H,F,x)}function cT(e){for(var n=e;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var c=s[o],f=c.getSnapshot;c=c.value;try{if(!on(f(),c))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function zi(e,n,s,o){n&=~mf,n&=~Ts,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Ke(c),_=1<<f;o[f]=-1,c&=~_}s!==0&&tr(e,s,n)}function Vu(){return(Zt&6)===0?(Fo(0),!1):!0}function Tf(){if(St!==null){if(Kt===0)var e=St.return;else e=St,Ni=ys=null,Rh(e),fa=null,wo=0,e=St;for(;e!==null;)Ig(e.alternate,e),e=e.return;St=null}}function ba(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,OT(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Tf(),Ft=e,St=s=Sr(e.current,null),Dt=n,Kt=0,cn=null,Pi=!1,Aa=Wi(e,n),df=!1,Sa=On=mf=Ts=br=ee=0,si=Ho=null,pf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ke(o),f=1<<c;n|=e[c],o&=~f}return xi=n,iu(),s}function Ng(e,n){Et=null,A.H=ri,n===So?(n=Km(),Kt=3):n===qm?(n=Km(),Kt=4):Kt=n===Gp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,cn=n,St===null&&(ee=1,Su(e,An(n,e.current)))}function Mg(){var e=A.H;return A.H=ri,e===null?ri:e}function Vg(){var e=A.A;return A.A=lT,e}function Af(){ee=4,Pi||(Dt&4194176)!==Dt&&wn.current!==null||(Aa=!0),(br&134217727)===0&&(Ts&134217727)===0||Ft===null||zi(Ft,Dt,On,!1)}function Sf(e,n,s){var o=Zt;Zt|=2;var c=Mg(),f=Vg();(Ft!==e||Dt!==n)&&(Nu=null,ba(e,n)),n=!1;var _=ee;t:do try{if(Kt!==0&&St!==null){var E=St,S=cn;switch(Kt){case 8:Tf(),_=6;break t;case 3:case 2:case 6:wn.current===null&&(n=!0);var N=Kt;if(Kt=0,cn=null,wa(e,E,S,N),s&&Aa){_=0;break t}break;default:N=Kt,Kt=0,cn=null,wa(e,E,S,N)}}hT(),_=ee;break}catch(H){Ng(e,H)}while(!0);return n&&e.shellSuspendCounter++,Ni=ys=null,Zt=o,A.H=c,A.A=f,St===null&&(Ft=null,Dt=0,iu()),_}function hT(){for(;St!==null;)Ug(St)}function fT(e,n){var s=Zt;Zt|=2;var o=Mg(),c=Vg();Ft!==e||Dt!==n?(Nu=null,Du=We()+500,ba(e,n)):Aa=Wi(e,n);t:do try{if(Kt!==0&&St!==null){n=St;var f=cn;e:switch(Kt){case 1:Kt=0,cn=null,wa(e,n,f,1);break;case 2:if(Gm(f)){Kt=0,cn=null,kg(n);break}n=function(){Kt===2&&Ft===e&&(Kt=7),ai(e)},f.then(n,n);break t;case 3:Kt=7;break t;case 4:Kt=5;break t;case 7:Gm(f)?(Kt=0,cn=null,kg(n)):(Kt=0,cn=null,wa(e,n,f,7));break;case 5:var _=null;switch(St.tag){case 26:_=St.memoizedState;case 5:case 27:var E=St;if(!_||cy(_)){Kt=0,cn=null;var S=E.sibling;if(S!==null)St=S;else{var N=E.return;N!==null?(St=N,Uu(N)):St=null}break e}}Kt=0,cn=null,wa(e,n,f,5);break;case 6:Kt=0,cn=null,wa(e,n,f,6);break;case 8:Tf(),ee=6;break t;default:throw Error(a(462))}}dT();break}catch(H){Ng(e,H)}while(!0);return Ni=ys=null,A.H=o,A.A=c,Zt=s,St!==null?0:(Ft=null,Dt=0,iu(),ee)}function dT(){for(;St!==null&&!$c();)Ug(St)}function Ug(e){var n=ng(e.alternate,e,xi);e.memoizedProps=e.pendingProps,n===null?Uu(e):St=n}function kg(e){var n=e,s=n.alternate;switch(n.tag){case 15:case 0:n=$p(s,n,n.pendingProps,n.type,void 0,Dt);break;case 11:n=$p(s,n,n.pendingProps,n.type.render,n.ref,Dt);break;case 5:Rh(n);default:Ig(s,n),n=St=bg(n,xi),n=ng(s,n,xi)}e.memoizedProps=e.pendingProps,n===null?Uu(e):St=n}function wa(e,n,s,o){Ni=ys=null,Rh(n),fa=null,wo=0;var c=n.return;try{if(eT(e,c,n,s,Dt)){ee=1,Su(e,An(s,e.current)),St=null;return}}catch(f){if(c!==null)throw St=c,f;ee=1,Su(e,An(s,e.current)),St=null;return}n.flags&32768?(kt||o===1?e=!0:Aa||(Dt&536870912)!==0?e=!1:(Pi=e=!0,(o===2||o===3||o===6)&&(o=wn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Lg(n,e)):Uu(n)}function Uu(e){var n=e;do{if((n.flags&32768)!==0){Lg(n,Pi);return}e=n.return;var s=aT(n.alternate,n,xi);if(s!==null){St=s;return}if(n=n.sibling,n!==null){St=n;return}St=n=e}while(n!==null);ee===0&&(ee=5)}function Lg(e,n){do{var s=oT(e.alternate,e);if(s!==null){s.flags&=32767,St=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(e=e.sibling,e!==null)){St=e;return}St=e=s}while(e!==null);ee=6,St=null}function Pg(e,n,s,o,c,f,_,E,S,N){var H=A.T,F=J.p;try{J.p=2,A.T=null,mT(e,n,s,o,F,c,f,_,E,S,N)}finally{A.T=H,J.p=F}}function mT(e,n,s,o,c,f,_,E){do Ra();while(As!==null);if((Zt&6)!==0)throw Error(a(327));var S=e.finishedWork;if(o=e.finishedLanes,S===null)return null;if(e.finishedWork=null,e.finishedLanes=0,S===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var N=S.lanes|S.childLanes;if(N|=hh,Ll(e,o,N,f,_,E),e===Ft&&(St=Ft=null,Dt=0),(S.subtreeFlags&10256)===0&&(S.flags&10256)===0||Mu||(Mu=!0,yf=N,_f=s,_T(gi,function(){return Ra(),null})),s=(S.flags&15990)!==0,(S.subtreeFlags&15990)!==0||s?(s=A.T,A.T=null,f=J.p,J.p=2,_=Zt,Zt|=4,iT(e,S),yg(S,e),xE(kf,e.containerInfo),Ku=!!Uf,kf=Uf=null,e.current=S,dg(e,S.alternate,S),Za(),Zt=_,J.p=f,A.T=s):e.current=S,Mu?(Mu=!1,As=e,qo=o):xg(e,N),N=e.pendingLanes,N===0&&(wr=null),Ja(S.stateNode),ai(e),n!==null)for(c=e.onRecoverableError,S=0;S<n.length;S++)N=n[S],c(N.value,{componentStack:N.stack});return(qo&3)!==0&&Ra(),N=e.pendingLanes,(o&4194218)!==0&&(N&42)!==0?e===vf?Go++:(Go=0,vf=e):Go=0,Fo(0),null}function xg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Io(n)))}function Ra(){if(As!==null){var e=As,n=yf;yf=0;var s=Pl(qo),o=A.T,c=J.p;try{if(J.p=32>s?32:s,A.T=null,As===null)var f=!1;else{s=_f,_f=null;var _=As,E=qo;if(As=null,qo=0,(Zt&6)!==0)throw Error(a(331));var S=Zt;if(Zt|=4,Ag(_.current),vg(_,_.current,E,s),Zt=S,Fo(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot($i,_)}catch{}f=!0}return f}finally{J.p=c,A.T=o,xg(e,n)}}return!1}function zg(e,n,s){n=An(s,n),n=Bh(e.stateNode,n,2),e=vr(e,n,2),e!==null&&(se(e,2),ai(e))}function Gt(e,n,s){if(e.tag===3)zg(e,e,s);else for(;n!==null;){if(n.tag===3){zg(n,e,s);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wr===null||!wr.has(o))){e=An(s,e),s=Hp(2),o=vr(n,s,2),o!==null&&(qp(s,o,n,e),se(o,2),ai(o));break}}n=n.return}}function bf(e,n,s){var o=e.pingCache;if(o===null){o=e.pingCache=new uT;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(s)||(df=!0,c.add(s),e=pT.bind(null,e,n,s),n.then(e,e))}function pT(e,n,s){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ft===e&&(Dt&s)===s&&(ee===4||ee===3&&(Dt&62914560)===Dt&&300>We()-gf?(Zt&2)===0&&ba(e,0):mf|=s,Sa===Dt&&(Sa=0)),ai(e)}function Bg(e,n){n===0&&(n=Ji()),e=hr(e,n),e!==null&&(se(e,n),ai(e))}function gT(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Bg(e,s)}function yT(e,n){var s=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(s=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),Bg(e,s)}function _T(e,n){return Kr(e,n)}var ku=null,Ia=null,wf=!1,Lu=!1,Rf=!1,Ss=0;function ai(e){e!==Ia&&e.next===null&&(Ia===null?ku=Ia=e:Ia=Ia.next=e),Lu=!0,wf||(wf=!0,ET(vT))}function Fo(e,n){if(!Rf&&Lu){Rf=!0;do for(var s=!1,o=ku;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var _=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-Ke(42|e)+1)-1,f&=c&~(_&~E),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(s=!0,qg(o,f))}else f=Dt,f=pn(o,o===Ft?f:0),(f&3)===0||Wi(o,f)||(s=!0,qg(o,f));o=o.next}while(s);Rf=!1}}function vT(){Lu=wf=!1;var e=0;Ss!==0&&(CT()&&(e=Ss),Ss=0);for(var n=We(),s=null,o=ku;o!==null;){var c=o.next,f=jg(o,n);f===0?(o.next=null,s===null?ku=c:s.next=c,c===null&&(Ia=s)):(s=o,(e!==0||(f&3)!==0)&&(Lu=!0)),o=c}Fo(e)}function jg(e,n){for(var s=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Ke(f),E=1<<_,S=c[_];S===-1?((E&s)===0||(E&o)!==0)&&(c[_]=Fs(E,n)):S<=n&&(e.expiredLanes|=E),f&=~E}if(n=Ft,s=Dt,s=pn(e,e===n?s:0),o=e.callbackNode,s===0||e===n&&Kt===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Gs(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Wi(e,s)){if(n=s&-s,n===e.callbackPriority)return n;switch(o!==null&&Gs(o),Pl(s)){case 2:case 8:s=Ee;break;case 32:s=gi;break;case 268435456:s=Wa;break;default:s=gi}return o=Hg.bind(null,e),s=Kr(s,o),e.callbackPriority=n,e.callbackNode=s,n}return o!==null&&o!==null&&Gs(o),e.callbackPriority=2,e.callbackNode=null,2}function Hg(e,n){var s=e.callbackNode;if(Ra()&&e.callbackNode!==s)return null;var o=Dt;return o=pn(e,e===Ft?o:0),o===0?null:(Og(e,o,n),jg(e,We()),e.callbackNode!=null&&e.callbackNode===s?Hg.bind(null,e):null)}function qg(e,n){if(Ra())return null;Og(e,n,!0)}function ET(e){DT(function(){(Zt&6)!==0?Kr(me,e):e()})}function If(){return Ss===0&&(Ss=eo()),Ss}function Gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xn(""+e)}function Fg(e,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,e.id&&s.setAttribute("form",e.id),n.parentNode.insertBefore(s,n),e=new FormData(e),s.parentNode.removeChild(s),e}function TT(e,n,s,o,c){if(n==="submit"&&s&&s.stateNode===c){var f=Gg((c[pe]||null).action),_=o.submitter;_&&(n=(n=_[pe]||null)?Gg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Ws("action","action",null,o,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ss!==0){var S=_?Fg(c,_):new FormData(c);kh(s,{pending:!0,data:S,method:c.method,action:f},null,S)}}else typeof f=="function"&&(E.preventDefault(),S=_?Fg(c,_):new FormData(c),kh(s,{pending:!0,data:S,method:c.method,action:f},f,S))},currentTarget:c}]})}}for(var Cf=0;Cf<Pm.length;Cf++){var Of=Pm[Cf],AT=Of.toLowerCase(),ST=Of[0].toUpperCase()+Of.slice(1);kn(AT,"on"+ST)}kn(Mm,"onAnimationEnd"),kn(Vm,"onAnimationIteration"),kn(Um,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(BE,"onTransitionRun"),kn(jE,"onTransitionStart"),kn(HE,"onTransitionCancel"),kn(km,"onTransitionEnd"),Je("onMouseEnter",["mouseout","mouseover"]),Je("onMouseLeave",["mouseout","mouseover"]),Je("onPointerEnter",["pointerout","pointerover"]),Je("onPointerLeave",["pointerout","pointerover"]),sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function Kg(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var E=o[_],S=E.instance,N=E.currentTarget;if(E=E.listener,S!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=N;try{f(c)}catch(H){Au(H)}c.currentTarget=null,f=S}else for(_=0;_<o.length;_++){if(E=o[_],S=E.instance,N=E.currentTarget,E=E.listener,S!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=N;try{f(c)}catch(H){Au(H)}c.currentTarget=null,f=S}}}}function It(e,n){var s=n[Qr];s===void 0&&(s=n[Qr]=new Set);var o=e+"__bubble";s.has(o)||(Yg(n,e,2,!1),s.add(o))}function Df(e,n,s){var o=0;n&&(o|=4),Yg(s,e,o,n)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Pu]){e[Pu]=!0,io.forEach(function(s){s!=="selectionchange"&&(bT.has(s)||Df(s,!1,e),Df(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pu]||(n[Pu]=!0,Df("selectionchange",!1,n))}}function Yg(e,n,s,o){switch(gy(n)){case 2:var c=$T;break;case 8:c=ZT;break;default:c=Gf}s=c.bind(null,n,s,e),c=void 0,!vn||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,s,{capture:!0,passive:c}):e.addEventListener(n,s,!0):c!==void 0?e.addEventListener(n,s,{passive:c}):e.addEventListener(n,s,!1)}function Mf(e,n,s,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var E=o.stateNode.containerInfo;if(E===c||E.nodeType===8&&E.parentNode===c)break;if(_===4)for(_=o.return;_!==null;){var S=_.tag;if((S===3||S===4)&&(S=_.stateNode.containerInfo,S===c||S.nodeType===8&&S.parentNode===c))return;_=_.return}for(;E!==null;){if(_=Un(E),_===null)return;if(S=_.tag,S===5||S===6||S===26||S===27){o=f=_;continue t}E=E.parentNode}}o=o.return}Hl(function(){var N=f,H=Zs(s),F=[];t:{var x=Lm.get(e);if(x!==void 0){var j=Ws,it=e;switch(e){case"keypress":if(Zn(s)===0)break t;case"keydown":case"keyup":j=ra;break;case"focusin":it="focus",j=ea;break;case"focusout":it="blur",j=ea;break;case"beforeblur":case"afterblur":j=ea;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=En;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=$l;break;case Mm:case Vm:case Um:j=na;break;case km:j=Wl;break;case"scroll":case"scrollend":j=ql;break;case"wheel":j=sa;break;case"copy":case"cut":case"paste":j=ia;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=go;break;case"toggle":case"beforetoggle":j=tu}var ft=(n&4)!==0,ne=!ft&&(e==="scroll"||e==="scrollend"),U=ft?x!==null?x+"Capture":null:x;ft=[];for(var O=N,P;O!==null;){var q=O;if(P=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||P===null||U===null||(q=Jr(O,U),q!=null&&ft.push(Yo(O,q,P))),ne)break;O=O.return}0<ft.length&&(x=new j(x,it,null,s,H),F.push({event:x,listeners:ft}))}}if((n&7)===0){t:{if(x=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",x&&s!==_n&&(it=s.relatedTarget||s.fromElement)&&(Un(it)||it[yi]))break t;if((j||x)&&(x=H.window===H?H:(x=H.ownerDocument)?x.defaultView||x.parentWindow:window,j?(it=s.relatedTarget||s.toElement,j=N,it=it?Un(it):null,it!==null&&(ne=ot(it),ft=it.tag,it!==ne||ft!==5&&ft!==27&&ft!==6)&&(it=null)):(j=null,it=N),j!==it)){if(ft=En,q="onMouseLeave",U="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(ft=go,q="onPointerLeave",U="onPointerEnter",O="pointer"),ne=j==null?x:rr(j),P=it==null?x:rr(it),x=new ft(q,O+"leave",j,s,H),x.target=ne,x.relatedTarget=P,q=null,Un(H)===N&&(ft=new ft(U,O+"enter",it,s,H),ft.target=P,ft.relatedTarget=ne,q=ft),ne=q,j&&it)e:{for(ft=j,U=it,O=0,P=ft;P;P=Ca(P))O++;for(P=0,q=U;q;q=Ca(q))P++;for(;0<O-P;)ft=Ca(ft),O--;for(;0<P-O;)U=Ca(U),P--;for(;O--;){if(ft===U||U!==null&&ft===U.alternate)break e;ft=Ca(ft),U=Ca(U)}ft=null}else ft=null;j!==null&&Qg(F,x,j,ft,!1),it!==null&&ne!==null&&Qg(F,ne,it,ft,!0)}}t:{if(x=N?rr(N):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var et=Tm;else if(ye(x))if(Am)et=LE;else{et=UE;var At=VE}else j=x.nodeName,!j||j.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?N&&lo(N.elementType)&&(et=Tm):et=kE;if(et&&(et=et(e,N))){wi(F,et,s,H);break t}At&&At(e,x,N),e==="focusout"&&N&&x.type==="number"&&N.memoizedProps.value!=null&&$s(x,"number",x.value)}switch(At=N?rr(N):window,e){case"focusin":(ye(At)||At.contentEditable==="true")&&(aa=At,lh=N,vo=null);break;case"focusout":vo=lh=aa=null;break;case"mousedown":uh=!0;break;case"contextmenu":case"mouseup":case"dragend":uh=!1,Dm(F,s,H);break;case"selectionchange":if(zE)break;case"keydown":case"keyup":Dm(F,s,H)}var st;if(ti)t:{switch(e){case"compositionstart":var lt="onCompositionStart";break t;case"compositionend":lt="onCompositionEnd";break t;case"compositionupdate":lt="onCompositionUpdate";break t}lt=void 0}else Ct?z(e,s)&&(lt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(lt="onCompositionStart");lt&&(y&&s.locale!=="ko"&&(Ct||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Ct&&(st=co()):($n=H,cr="value"in $n?$n.value:$n.textContent,Ct=!0)),At=xu(N,lt),0<At.length&&(lt=new mo(lt,e,null,s,H),F.push({event:lt,listeners:At}),st?lt.data=st:(st=X(s),st!==null&&(lt.data=st)))),(st=m?ge(e,s):Ot(e,s))&&(lt=xu(N,"onBeforeInput"),0<lt.length&&(At=new mo("onBeforeInput","beforeinput",null,s,H),F.push({event:At,listeners:lt}),At.data=st)),TT(F,e,N,s,H)}Kg(F,n)})}function Yo(e,n,s){return{instance:e,listener:n,currentTarget:s}}function xu(e,n){for(var s=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Jr(e,s),c!=null&&o.unshift(Yo(e,c,f)),c=Jr(e,n),c!=null&&o.push(Yo(e,c,f))),e=e.return}return o}function Ca(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qg(e,n,s,o,c){for(var f=n._reactName,_=[];s!==null&&s!==o;){var E=s,S=E.alternate,N=E.stateNode;if(E=E.tag,S!==null&&S===o)break;E!==5&&E!==26&&E!==27||N===null||(S=N,c?(N=Jr(s,f),N!=null&&_.unshift(Yo(s,N,S))):c||(N=Jr(s,f),N!=null&&_.push(Yo(s,N,S)))),s=s.return}_.length!==0&&e.push({event:n,listeners:_})}var wT=/\r\n?/g,RT=/\u0000|\uFFFD/g;function Xg(e){return(typeof e=="string"?e:""+e).replace(wT,`
`).replace(RT,"")}function $g(e,n){return n=Xg(n),Xg(e)===n}function zu(){}function qt(e,n,s,o,c,f){switch(s){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||yn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&yn(e,""+o);break;case"className":or(e,"class",o);break;case"tabIndex":or(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":or(e,s,o);break;case"style":jl(e,o,f);break;case"data":if(n!=="object"){or(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Xn(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(n!=="input"&&qt(e,n,"name",c.name,c,null),qt(e,n,"formEncType",c.formEncType,c,null),qt(e,n,"formMethod",c.formMethod,c,null),qt(e,n,"formTarget",c.formTarget,c,null)):(qt(e,n,"encType",c.encType,c,null),qt(e,n,"method",c.method,c,null),qt(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Xn(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=zu);break;case"onScroll":o!=null&&It("scroll",e);break;case"onScrollEnd":o!=null&&It("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=Xn(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":It("beforetoggle",e),It("toggle",e),ar(e,"popover",o);break;case"xlinkActuate":gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":gn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":gn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":gn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":gn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ar(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=eh.get(s)||s,ar(e,s,o))}}function Vf(e,n,s,o,c,f){switch(s){case"style":jl(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?yn(e,o):(typeof o=="number"||typeof o=="bigint")&&yn(e,""+o);break;case"onScroll":o!=null&&It("scroll",e);break;case"onScrollEnd":o!=null&&It("scrollend",e);break;case"onClick":o!=null&&(e.onclick=zu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qs.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),n=s.slice(2,c?s.length-7:void 0),f=e[pe]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(n,o,c);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):ar(e,s,o)}}}function Ve(e,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":It("error",e),It("load",e);var o=!1,c=!1,f;for(f in s)if(s.hasOwnProperty(f)){var _=s[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:qt(e,n,f,_,s,null)}}c&&qt(e,n,"srcSet",s.srcSet,s,null),o&&qt(e,n,"src",s.src,s,null);return;case"input":It("invalid",e);var E=f=_=c=null,S=null,N=null;for(o in s)if(s.hasOwnProperty(o)){var H=s[o];if(H!=null)switch(o){case"name":c=H;break;case"type":_=H;break;case"checked":S=H;break;case"defaultChecked":N=H;break;case"value":f=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,n));break;default:qt(e,n,o,H,s,null)}}Zr(e,f,E,S,N,_,c,!1),$r(e);return;case"select":It("invalid",e),o=_=f=null;for(c in s)if(s.hasOwnProperty(c)&&(E=s[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":o=E;default:qt(e,n,c,E,s,null)}n=f,s=_,e.multiple=!!o,n!=null?Ut(e,!!o,n,!1):s!=null&&Ut(e,!!o,s,!0);return;case"textarea":It("invalid",e),f=c=o=null;for(_ in s)if(s.hasOwnProperty(_)&&(E=s[_],E!=null))switch(_){case"value":o=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:qt(e,n,_,E,s,null)}ur(e,o,c,f),$r(e);return;case"option":for(S in s)if(s.hasOwnProperty(S)&&(o=s[S],o!=null))switch(S){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:qt(e,n,S,o,s,null)}return;case"dialog":It("cancel",e),It("close",e);break;case"iframe":case"object":It("load",e);break;case"video":case"audio":for(o=0;o<Ko.length;o++)It(Ko[o],e);break;case"image":It("error",e),It("load",e);break;case"details":It("toggle",e);break;case"embed":case"source":case"link":It("error",e),It("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in s)if(s.hasOwnProperty(N)&&(o=s[N],o!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:qt(e,n,N,o,s,null)}return;default:if(lo(n)){for(H in s)s.hasOwnProperty(H)&&(o=s[H],o!==void 0&&Vf(e,n,H,o,s,void 0));return}}for(E in s)s.hasOwnProperty(E)&&(o=s[E],o!=null&&qt(e,n,E,o,s,null))}function IT(e,n,s,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,S=null,N=null,H=null;for(j in s){var F=s[j];if(s.hasOwnProperty(j)&&F!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":S=F;default:o.hasOwnProperty(j)||qt(e,n,j,null,o,F)}}for(var x in o){var j=o[x];if(F=s[x],o.hasOwnProperty(x)&&(j!=null||F!=null))switch(x){case"type":f=j;break;case"name":c=j;break;case"checked":N=j;break;case"defaultChecked":H=j;break;case"value":_=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(a(137,n));break;default:j!==F&&qt(e,n,x,j,o,F)}}lr(e,_,E,S,N,H,f,c);return;case"select":j=_=E=x=null;for(f in s)if(S=s[f],s.hasOwnProperty(f)&&S!=null)switch(f){case"value":break;case"multiple":j=S;default:o.hasOwnProperty(f)||qt(e,n,f,null,o,S)}for(c in o)if(f=o[c],S=s[c],o.hasOwnProperty(c)&&(f!=null||S!=null))switch(c){case"value":x=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==S&&qt(e,n,c,f,o,S)}n=E,s=_,o=j,x!=null?Ut(e,!!s,x,!1):!!o!=!!s&&(n!=null?Ut(e,!!s,n,!0):Ut(e,!!s,s?[]:"",!1));return;case"textarea":j=x=null;for(E in s)if(c=s[E],s.hasOwnProperty(E)&&c!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:qt(e,n,E,null,o,c)}for(_ in o)if(c=o[_],f=s[_],o.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":x=c;break;case"defaultValue":j=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==f&&qt(e,n,_,c,o,f)}Wr(e,x,j);return;case"option":for(var it in s)if(x=s[it],s.hasOwnProperty(it)&&x!=null&&!o.hasOwnProperty(it))switch(it){case"selected":e.selected=!1;break;default:qt(e,n,it,null,o,x)}for(S in o)if(x=o[S],j=s[S],o.hasOwnProperty(S)&&x!==j&&(x!=null||j!=null))switch(S){case"selected":e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:qt(e,n,S,x,o,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in s)x=s[ft],s.hasOwnProperty(ft)&&x!=null&&!o.hasOwnProperty(ft)&&qt(e,n,ft,null,o,x);for(N in o)if(x=o[N],j=s[N],o.hasOwnProperty(N)&&x!==j&&(x!=null||j!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(a(137,n));break;default:qt(e,n,N,x,o,j)}return;default:if(lo(n)){for(var ne in s)x=s[ne],s.hasOwnProperty(ne)&&x!==void 0&&!o.hasOwnProperty(ne)&&Vf(e,n,ne,void 0,o,x);for(H in o)x=o[H],j=s[H],!o.hasOwnProperty(H)||x===j||x===void 0&&j===void 0||Vf(e,n,H,x,o,j);return}}for(var U in s)x=s[U],s.hasOwnProperty(U)&&x!=null&&!o.hasOwnProperty(U)&&qt(e,n,U,null,o,x);for(F in o)x=o[F],j=s[F],!o.hasOwnProperty(F)||x===j||x==null&&j==null||qt(e,n,F,x,o,j)}var Uf=null,kf=null;function Bu(e){return e.nodeType===9?e:e.ownerDocument}function Zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Lf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function CT(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var Jg=typeof setTimeout=="function"?setTimeout:void 0,OT=typeof clearTimeout=="function"?clearTimeout:void 0,ty=typeof Promise=="function"?Promise:void 0,DT=typeof queueMicrotask=="function"?queueMicrotask:typeof ty<"u"?function(e){return ty.resolve(null).then(e).catch(NT)}:Jg;function NT(e){setTimeout(function(){throw e})}function xf(e,n){var s=n,o=0;do{var c=s.nextSibling;if(e.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(o===0){e.removeChild(c),el(n);return}o--}else s!=="$"&&s!=="$?"&&s!=="$!"||o++;s=c}while(s);el(n)}function zf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":zf(s),Xr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function MT(e,n,s,o){for(;e.nodeType===1;){var c=s;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ir])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=xn(e.nextSibling),e===null)break}return null}function VT(e,n,s){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=xn(e.nextSibling),e===null))return null;return e}function xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function ey(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}function ny(e,n,s){switch(n=Bu(s),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}var Dn=new Map,iy=new Set;function ju(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Bi=J.d;J.d={f:UT,r:kT,D:LT,C:PT,L:xT,m:zT,X:jT,S:BT,M:HT};function UT(){var e=Bi.f(),n=Vu();return e||n}function kT(e){var n=_i(e);n!==null&&n.tag===5&&n.type==="form"?Dp(n):Bi.r(e)}var Oa=typeof document>"u"?null:document;function ry(e,n,s){var o=Oa;if(o&&typeof n=="string"&&n){var c=Jt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),iy.has(c)||(iy.add(c),e={rel:e,crossOrigin:s,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Ve(n,"link",e),Xt(n),o.head.appendChild(n)))}}function LT(e){Bi.D(e),ry("dns-prefetch",e,null)}function PT(e,n){Bi.C(e,n),ry("preconnect",e,n)}function xT(e,n,s){Bi.L(e,n,s);var o=Oa;if(o&&e&&n){var c='link[rel="preload"][as="'+Jt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+Jt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+Jt(s.imageSizes)+'"]')):c+='[href="'+Jt(e)+'"]';var f=c;switch(n){case"style":f=Da(e);break;case"script":f=Na(e)}Dn.has(f)||(e=I({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:e,as:n},s),Dn.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Qo(f))||n==="script"&&o.querySelector(Xo(f))||(n=o.createElement("link"),Ve(n,"link",e),Xt(n),o.head.appendChild(n)))}}function zT(e,n){Bi.m(e,n);var s=Oa;if(s&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Jt(o)+'"][href="'+Jt(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Na(e)}if(!Dn.has(f)&&(e=I({rel:"modulepreload",href:e},n),Dn.set(f,e),s.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Xo(f)))return}o=s.createElement("link"),Ve(o,"link",e),Xt(o),s.head.appendChild(o)}}}function BT(e,n,s){Bi.S(e,n,s);var o=Oa;if(o&&e){var c=sr(o).hoistableStyles,f=Da(e);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=o.querySelector(Qo(f)))E.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":n},s),(s=Dn.get(f))&&Bf(e,s);var S=_=o.createElement("link");Xt(S),Ve(S,"link",e),S._p=new Promise(function(N,H){S.onload=N,S.onerror=H}),S.addEventListener("load",function(){E.loading|=1}),S.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hu(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function jT(e,n){Bi.X(e,n);var s=Oa;if(s&&e){var o=sr(s).hoistableScripts,c=Na(e),f=o.get(c);f||(f=s.querySelector(Xo(c)),f||(e=I({src:e,async:!0},n),(n=Dn.get(c))&&jf(e,n),f=s.createElement("script"),Xt(f),Ve(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function HT(e,n){Bi.M(e,n);var s=Oa;if(s&&e){var o=sr(s).hoistableScripts,c=Na(e),f=o.get(c);f||(f=s.querySelector(Xo(c)),f||(e=I({src:e,async:!0,type:"module"},n),(n=Dn.get(c))&&jf(e,n),f=s.createElement("script"),Xt(f),Ve(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function sy(e,n,s,o){var c=(c=mn.current)?ju(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Da(s.href),s=sr(c).hoistableStyles,o=s.get(n),o||(o={type:"style",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Da(s.href);var f=sr(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(Qo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),Dn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Dn.set(e,s),f||qT(c,e,s,_.state))),n&&o===null)throw Error(a(528,""));return _}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Na(s),s=sr(c).hoistableScripts,o=s.get(n),o||(o={type:"script",instance:null,count:0,state:null},s.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Da(e){return'href="'+Jt(e)+'"'}function Qo(e){return'link[rel="stylesheet"]['+e+"]"}function ay(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function qT(e,n,s,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ve(n,"link",s),Xt(n),e.head.appendChild(n))}function Na(e){return'[src="'+Jt(e)+'"]'}function Xo(e){return"script[async]"+e}function oy(e,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Jt(s.href)+'"]');if(o)return n.instance=o,Xt(o),o;var c=I({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Xt(o),Ve(o,"style",c),Hu(o,s.precedence,e),n.instance=o;case"stylesheet":c=Da(s.href);var f=e.querySelector(Qo(c));if(f)return n.state.loading|=4,n.instance=f,Xt(f),f;o=ay(s),(c=Dn.get(c))&&Bf(o,c),f=(e.ownerDocument||e).createElement("link"),Xt(f);var _=f;return _._p=new Promise(function(E,S){_.onload=E,_.onerror=S}),Ve(f,"link",o),n.state.loading|=4,Hu(f,s.precedence,e),n.instance=f;case"script":return f=Na(s.src),(c=e.querySelector(Xo(f)))?(n.instance=c,Xt(c),c):(o=s,(c=Dn.get(f))&&(o=I({},s),jf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Xt(c),Ve(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Hu(o,s.precedence,e));return n.instance}function Hu(e,n,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,_=0;_<o.length;_++){var E=o[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(e,n.firstChild))}function Bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var qu=null;function ly(e,n,s){if(qu===null){var o=new Map,c=qu=new Map;c.set(s,o)}else c=qu,o=c.get(s),o||(o=new Map,c.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),c=0;c<s.length;c++){var f=s[c];if(!(f[ir]||f[Te]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var E=o.get(_);E?E.push(f):o.set(_,[f])}}return o}function uy(e,n,s){e=e.ownerDocument||e,e.head.insertBefore(s,n==="title"?e.querySelector("head > title"):null)}function GT(e,n,s){if(s===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function cy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $o=null;function FT(){}function KT(e,n,s){if($o===null)throw Error(a(475));var o=$o;if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Da(s.href),f=e.querySelector(Qo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Gu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,Xt(f);return}f=e.ownerDocument||e,s=ay(s),(c=Dn.get(c))&&Bf(s,c),f=f.createElement("link"),Xt(f);var _=f;_._p=new Promise(function(E,S){_.onload=E,_.onerror=S}),Ve(f,"link",s),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Gu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function YT(){if($o===null)throw Error(a(475));var e=$o;return e.stylesheets&&e.count===0&&Hf(e,e.stylesheets),0<e.count?function(n){var s=setTimeout(function(){if(e.stylesheets&&Hf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s)}}:null}function Gu(){if(this.count--,this.count===0){if(this.stylesheets)Hf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fu=null;function Hf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fu=new Map,n.forEach(QT,e),Fu=null,Gu.call(e))}function QT(e,n){if(!(n.state.loading&4)){var s=Fu.get(e);if(s)var o=s.get(null);else{s=new Map,Fu.set(e,s);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),o=_)}o&&s.set(null,o)}c=n.instance,_=c.getAttribute("data-precedence"),f=s.get(_)||o,f===o&&s.set(null,c),s.set(_,c),this.count++,o=Gu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Zo={$$typeof:K,Provider:null,Consumer:null,_currentValue:_t,_currentValue2:_t,_threadCount:0};function XT(e,n,s,o,c,f,_,E){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ks(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.hiddenUpdates=Ks(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function hy(e,n,s,o,c,f,_,E,S,N,H,F){return e=new XT(e,n,s,_,E,S,N,F),n=1,f===!0&&(n|=24),f=Cn(3,null,null,n),e.current=f,f.stateNode=e,n=vh(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:s,cache:n},Jh(f),e}function fy(e){return e?(e=ua,e):ua}function dy(e,n,s,o,c,f){c=fy(c),o.context===null?o.context=c:o.pendingContext=c,o=_r(n),o.payload={element:s},f=f===void 0?null:f,f!==null&&(o.callback=f),s=vr(e,o,n),s!==null&&($e(s,e,n),Uo(s,e,n))}function my(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function qf(e,n){my(e,n),(e=e.alternate)&&my(e,n)}function py(e){if(e.tag===13){var n=hr(e,67108864);n!==null&&$e(n,e,67108864),qf(e,67108864)}}var Ku=!0;function $T(e,n,s,o){var c=A.T;A.T=null;var f=J.p;try{J.p=2,Gf(e,n,s,o)}finally{J.p=f,A.T=c}}function ZT(e,n,s,o){var c=A.T;A.T=null;var f=J.p;try{J.p=8,Gf(e,n,s,o)}finally{J.p=f,A.T=c}}function Gf(e,n,s,o){if(Ku){var c=Ff(o);if(c===null)Mf(e,n,o,Yu,s),yy(e,o);else if(JT(c,e,n,s,o))o.stopPropagation();else if(yy(e,o),n&4&&-1<WT.indexOf(e)){for(;c!==null;){var f=_i(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Vn(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var S=1<<31-Ke(_);E.entanglements[1]|=S,_&=~S}ai(f),(Zt&6)===0&&(Du=We()+500,Fo(0))}}break;case 13:E=hr(f,2),E!==null&&$e(E,f,2),Vu(),qf(f,2)}if(f=Ff(o),f===null&&Mf(e,n,o,Yu,s),f===c)break;c=f}c!==null&&o.stopPropagation()}else Mf(e,n,o,null,s)}}function Ff(e){return e=Zs(e),Kf(e)}var Yu=null;function Kf(e){if(Yu=null,e=Un(e),e!==null){var n=ot(e);if(n===null)e=null;else{var s=n.tag;if(s===13){if(e=Pt(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yu=e,null}function gy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ml()){case me:return 2;case Ee:return 8;case gi:case Vl:return 32;case Wa:return 268435456;default:return 32}default:return 32}}var Yf=!1,Rr=null,Ir=null,Cr=null,Wo=new Map,Jo=new Map,Or=[],WT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yy(e,n){switch(e){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(n.pointerId)}}function tl(e,n,s,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:s,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=_i(n),n!==null&&py(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function JT(e,n,s,o,c){switch(n){case"focusin":return Rr=tl(Rr,e,n,s,o,c),!0;case"dragenter":return Ir=tl(Ir,e,n,s,o,c),!0;case"mouseover":return Cr=tl(Cr,e,n,s,o,c),!0;case"pointerover":var f=c.pointerId;return Wo.set(f,tl(Wo.get(f)||null,e,n,s,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Jo.set(f,tl(Jo.get(f)||null,e,n,s,o,c)),!0}return!1}function _y(e){var n=Un(e.target);if(n!==null){var s=ot(n);if(s!==null){if(n=s.tag,n===13){if(n=Pt(s),n!==null){e.blockedOn=n,nr(e.priority,function(){if(s.tag===13){var o=hn(),c=hr(s,o);c!==null&&$e(c,s,o),qf(s,o)}});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Ff(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);_n=o,s.target.dispatchEvent(o),_n=null}else return n=_i(s),n!==null&&py(n),e.blockedOn=s,!1;n.shift()}return!0}function vy(e,n,s){Qu(e)&&s.delete(n)}function tA(){Yf=!1,Rr!==null&&Qu(Rr)&&(Rr=null),Ir!==null&&Qu(Ir)&&(Ir=null),Cr!==null&&Qu(Cr)&&(Cr=null),Wo.forEach(vy),Jo.forEach(vy)}function Xu(e,n){e.blockedOn===n&&(e.blockedOn=null,Yf||(Yf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,tA)))}var $u=null;function Ey(e){$u!==e&&($u=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){$u===e&&($u=null);for(var n=0;n<e.length;n+=3){var s=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Kf(o||s)===null)continue;break}var f=_i(s);f!==null&&(e.splice(n,3),n-=3,kh(f,{pending:!0,data:c,method:s.method,action:o},o,c))}}))}function el(e){function n(S){return Xu(S,e)}Rr!==null&&Xu(Rr,e),Ir!==null&&Xu(Ir,e),Cr!==null&&Xu(Cr,e),Wo.forEach(n),Jo.forEach(n);for(var s=0;s<Or.length;s++){var o=Or[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Or.length&&(s=Or[0],s.blockedOn===null);)_y(s),s.blockedOn===null&&Or.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var c=s[o],f=s[o+1],_=c[pe]||null;if(typeof f=="function")_||Ey(s);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[pe]||null)E=_.formAction;else if(Kf(c)!==null)continue}else E=_.action;typeof E=="function"?s[o+1]=E:(s.splice(o,3),o-=3),Ey(s)}}}function Qf(e){this._internalRoot=e}Zu.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var s=n.current,o=hn();dy(s,o,e,n,null,null)},Zu.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Ra(),dy(e.current,2,null,e,null,null),Vu(),n[yi]=null}};function Zu(e){this._internalRoot=e}Zu.prototype.unstable_scheduleHydration=function(e){if(e){var n=xl();e={blockedOn:null,target:e,priority:n};for(var s=0;s<Or.length&&n!==0&&n<Or[s].priority;s++);Or.splice(s,0,e),s===0&&_y(e)}};var Ty=t.version;if(Ty!=="19.0.0")throw Error(a(527,Ty,"19.0.0"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Y(n),e=e!==null?rt(e):null,e=e===null?null:e.stateNode,e};var eA={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Un,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wu.isDisabled&&Wu.supportsFiber)try{$i=Wu.inject(eA),xe=Wu}catch{}}return il.createRoot=function(e,n){if(!l(e))throw Error(a(299));var s=!1,o="",c=xp,f=zp,_=Bp,E=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=hy(e,1,!1,null,null,s,o,c,f,_,E,null),e[yi]=n.current,Nf(e.nodeType===8?e.parentNode:e),new Qf(n)},il.hydrateRoot=function(e,n,s){if(!l(e))throw Error(a(299));var o=!1,c="",f=xp,_=zp,E=Bp,S=null,N=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks),s.formState!==void 0&&(N=s.formState)),n=hy(e,1,!0,n,s??null,o,c,f,_,E,S,N),n.context=fy(null),s=n.current,o=hn(),c=_r(o),c.callback=null,vr(s,c,o),n.current.lanes=o,se(n,o),ai(n),e[yi]=n.current,Nf(e),new Zu(n)},il.version="19.0.0",il}var Ny;function hA(){if(Ny)return Zf.exports;Ny=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Zf.exports=cA(),Zf.exports}var fA=hA();const dA=()=>{};var My={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=function(r){const t=[];let i=0;for(let a=0;a<r.length;a++){let l=r.charCodeAt(a);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&a+1<r.length&&(r.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++a)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},mA=function(r){const t=[];let i=0,a=0;for(;i<r.length;){const l=r[i++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const h=r[i++];t[a++]=String.fromCharCode((l&31)<<6|h&63)}else if(l>239&&l<365){const h=r[i++],d=r[i++],p=r[i++],g=((l&7)<<18|(h&63)<<12|(d&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(g>>10)),t[a++]=String.fromCharCode(56320+(g&1023))}else{const h=r[i++],d=r[i++];t[a++]=String.fromCharCode((l&15)<<12|(h&63)<<6|d&63)}}return t.join("")},rv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<r.length;l+=3){const h=r[l],d=l+1<r.length,p=d?r[l+1]:0,g=l+2<r.length,v=g?r[l+2]:0,w=h>>2,D=(h&3)<<4|p>>4;let B=(p&15)<<2|v>>6,K=v&63;g||(K=64,d||(B=64)),a.push(i[w],i[D],i[B],i[K])}return a.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(iv(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):mA(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<r.length;){const h=i[r.charAt(l++)],p=l<r.length?i[r.charAt(l)]:0;++l;const v=l<r.length?i[r.charAt(l)]:64;++l;const D=l<r.length?i[r.charAt(l)]:64;if(++l,h==null||p==null||v==null||D==null)throw new pA;const B=h<<2|p>>4;if(a.push(B),v!==64){const K=p<<4&240|v>>2;if(a.push(K),D!==64){const $=v<<6&192|D;a.push($)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class pA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gA=function(r){const t=iv(r);return rv.encodeByteArray(t,!0)},dc=function(r){return gA(r).replace(/\./g,"")},sv=function(r){try{return rv.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=()=>yA().__FIREBASE_DEFAULTS__,vA=()=>{if(typeof process>"u"||typeof My>"u")return;const r=My.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},EA=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&sv(r[1]);return t&&JSON.parse(t)},Uc=()=>{try{return dA()||_A()||vA()||EA()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},av=r=>{var t,i;return(i=(t=Uc())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[r]},TA=r=>{const t=av(r);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},ov=()=>{var r;return(r=Uc())===null||r===void 0?void 0:r.config},lv=r=>{var t;return(t=Uc())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",l=r.iat||0,h=r.sub||r.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},r);return[dc(JSON.stringify(i)),dc(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function wA(){var r;const t=(r=Uc())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uv(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function IA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CA(){const r=Ge();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function OA(){return!wA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cv(){try{return typeof indexedDB=="object"}catch{return!1}}function hv(){return new Promise((r,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var h;t(((h=l.error)===null||h===void 0?void 0:h.message)||"")}}catch(i){t(i)}})}function DA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="FirebaseError";class Gn extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=NA,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},l=`${this.service}/${t}`,h=this.errors[t],d=h?MA(h,a):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new Gn(l,p,a)}}function MA(r,t){return r.replace(VA,(i,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const VA=/\{\$([^}]+)}/g;function UA(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function zr(r,t){if(r===t)return!0;const i=Object.keys(r),a=Object.keys(t);for(const l of i){if(!a.includes(l))return!1;const h=r[l],d=t[l];if(Vy(h)&&Vy(d)){if(!zr(h,d))return!1}else if(h!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function Vy(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(r){const t=[];for(const[i,a]of Object.entries(r))Array.isArray(a)?a.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function sl(r){const t={};return r.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[l,h]=a.split("=");t[decodeURIComponent(l)]=decodeURIComponent(h)}}),t}function al(r){const t=r.indexOf("?");if(!t)return"";const i=r.indexOf("#",t);return r.substring(t,i>0?i:void 0)}function kA(r,t){const i=new LA(r,t);return i.subscribe.bind(i)}class LA{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let l;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");PA(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:a},l.next===void 0&&(l.next=ed),l.error===void 0&&(l.error=ed),l.complete===void 0&&(l.complete=ed);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),h}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PA(r,t){if(typeof r!="object"||r===null)return!1;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}function ed(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=1e3,zA=2,BA=4*60*60*1e3,jA=.5;function Uy(r,t=xA,i=zA){const a=t*Math.pow(i,r),l=Math.round(jA*a*(Math.random()-.5)*2);return Math.min(BA,a+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(r){return r&&r._delegate?r._delegate:r}class Hn{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new AA;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),l=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(h){if(l)return null;throw h}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(GA(t))try{this.getOrInitializeService({instanceIdentifier:bs})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const h=this.getOrInitializeService({instanceIdentifier:l});a.resolve(h)}catch{}}}}clearInstance(t=bs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=bs){return this.instances.has(t)}getOptions(t=bs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[h,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(h);a===p&&d.resolve(l)}return l}onInit(t,i){var a;const l=this.normalizeInstanceIdentifier(i),h=(a=this.onInitCallbacks.get(l))!==null&&a!==void 0?a:new Set;h.add(t),this.onInitCallbacks.set(l,h);const d=this.instances.get(l);return d&&t(d,l),()=>{h.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:qA(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=bs){return this.component?this.component.multipleInstances?t:bs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qA(r){return r===bs?void 0:r}function GA(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new HA(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(wt||(wt={}));const KA={debug:wt.DEBUG,verbose:wt.VERBOSE,info:wt.INFO,warn:wt.WARN,error:wt.ERROR,silent:wt.SILENT},YA=wt.INFO,QA={[wt.DEBUG]:"log",[wt.VERBOSE]:"log",[wt.INFO]:"info",[wt.WARN]:"warn",[wt.ERROR]:"error"},XA=(r,t,...i)=>{if(t<r.logLevel)return;const a=new Date().toISOString(),l=QA[t];if(l)console[l](`[${a}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class kc{constructor(t){this.name=t,this._logLevel=YA,this._logHandler=XA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in wt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?KA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,wt.DEBUG,...t),this._logHandler(this,wt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,wt.VERBOSE,...t),this._logHandler(this,wt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,wt.INFO,...t),this._logHandler(this,wt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,wt.WARN,...t),this._logHandler(this,wt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,wt.ERROR,...t),this._logHandler(this,wt.ERROR,...t)}}const $A=(r,t)=>t.some(i=>r instanceof i);let ky,Ly;function ZA(){return ky||(ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WA(){return Ly||(Ly=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fv=new WeakMap,md=new WeakMap,dv=new WeakMap,nd=new WeakMap,Pd=new WeakMap;function JA(r){const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("success",h),r.removeEventListener("error",d)},h=()=>{i(Lr(r.result)),l()},d=()=>{a(r.error),l()};r.addEventListener("success",h),r.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&fv.set(i,r)}).catch(()=>{}),Pd.set(t,r),t}function tS(r){if(md.has(r))return;const t=new Promise((i,a)=>{const l=()=>{r.removeEventListener("complete",h),r.removeEventListener("error",d),r.removeEventListener("abort",d)},h=()=>{i(),l()},d=()=>{a(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",h),r.addEventListener("error",d),r.addEventListener("abort",d)});md.set(r,t)}let pd={get(r,t,i){if(r instanceof IDBTransaction){if(t==="done")return md.get(r);if(t==="objectStoreNames")return r.objectStoreNames||dv.get(r);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Lr(r[t])},set(r,t,i){return r[t]=i,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function eS(r){pd=r(pd)}function nS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=r.call(id(this),t,...i);return dv.set(a,t.sort?t.sort():[t]),Lr(a)}:WA().includes(r)?function(...t){return r.apply(id(this),t),Lr(fv.get(this))}:function(...t){return Lr(r.apply(id(this),t))}}function iS(r){return typeof r=="function"?nS(r):(r instanceof IDBTransaction&&tS(r),$A(r,ZA())?new Proxy(r,pd):r)}function Lr(r){if(r instanceof IDBRequest)return JA(r);if(nd.has(r))return nd.get(r);const t=iS(r);return t!==r&&(nd.set(r,t),Pd.set(t,r)),t}const id=r=>Pd.get(r);function mv(r,t,{blocked:i,upgrade:a,blocking:l,terminated:h}={}){const d=indexedDB.open(r,t),p=Lr(d);return a&&d.addEventListener("upgradeneeded",g=>{a(Lr(d.result),g.oldVersion,g.newVersion,Lr(d.transaction),g)}),i&&d.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),p.then(g=>{h&&g.addEventListener("close",()=>h()),l&&g.addEventListener("versionchange",v=>l(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const rS=["get","getKey","getAll","getAllKeys","count"],sS=["put","add","delete","clear"],rd=new Map;function Py(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(rd.get(t))return rd.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,l=sS.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||rS.includes(i)))return;const h=async function(d,...p){const g=this.transaction(d,l?"readwrite":"readonly");let v=g.store;return a&&(v=v.index(p.shift())),(await Promise.all([v[i](...p),l&&g.done]))[0]};return rd.set(t,h),h}eS(r=>({...r,get:(t,i,a)=>Py(t,i)||r.get(t,i,a),has:(t,i)=>!!Py(t,i)||r.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(oS(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function oS(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const gd="@firebase/app",xy="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new kc("@firebase/app"),lS="@firebase/app-compat",uS="@firebase/analytics-compat",cS="@firebase/analytics",hS="@firebase/app-check-compat",fS="@firebase/app-check",dS="@firebase/auth",mS="@firebase/auth-compat",pS="@firebase/database",gS="@firebase/data-connect",yS="@firebase/database-compat",_S="@firebase/functions",vS="@firebase/functions-compat",ES="@firebase/installations",TS="@firebase/installations-compat",AS="@firebase/messaging",SS="@firebase/messaging-compat",bS="@firebase/performance",wS="@firebase/performance-compat",RS="@firebase/remote-config",IS="@firebase/remote-config-compat",CS="@firebase/storage",OS="@firebase/storage-compat",DS="@firebase/firestore",NS="@firebase/vertexai",MS="@firebase/firestore-compat",VS="firebase",US="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="[DEFAULT]",kS={[gd]:"fire-core",[lS]:"fire-core-compat",[cS]:"fire-analytics",[uS]:"fire-analytics-compat",[fS]:"fire-app-check",[hS]:"fire-app-check-compat",[dS]:"fire-auth",[mS]:"fire-auth-compat",[pS]:"fire-rtdb",[gS]:"fire-data-connect",[yS]:"fire-rtdb-compat",[_S]:"fire-fn",[vS]:"fire-fn-compat",[ES]:"fire-iid",[TS]:"fire-iid-compat",[AS]:"fire-fcm",[SS]:"fire-fcm-compat",[bS]:"fire-perf",[wS]:"fire-perf-compat",[RS]:"fire-rc",[IS]:"fire-rc-compat",[CS]:"fire-gcs",[OS]:"fire-gcs-compat",[DS]:"fire-fst",[MS]:"fire-fst-compat",[NS]:"fire-vertex","fire-js":"fire-js",[VS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=new Map,LS=new Map,_d=new Map;function zy(r,t){try{r.container.addComponent(t)}catch(i){Ki.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,i)}}function hi(r){const t=r.name;if(_d.has(t))return Ki.debug(`There were multiple attempts to register component ${t}.`),!1;_d.set(t,r);for(const i of mc.values())zy(i,r);for(const i of LS.values())zy(i,r);return!0}function xs(r,t){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(t)}function Nn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Ps("app","Firebase",PS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(t,i,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=US;function pv(r,t={}){let i=r;typeof t!="object"&&(t={name:t});const a=Object.assign({name:yd,automaticDataCollectionEnabled:!1},t),l=a.name;if(typeof l!="string"||!l)throw Pr.create("bad-app-name",{appName:String(l)});if(i||(i=ov()),!i)throw Pr.create("no-options");const h=mc.get(l);if(h){if(zr(i,h.options)&&zr(a,h.config))return h;throw Pr.create("duplicate-app",{appName:l})}const d=new FA(l);for(const g of _d.values())d.addComponent(g);const p=new xS(i,a,d);return mc.set(l,p),p}function xd(r=yd){const t=mc.get(r);if(!t&&r===yd&&ov())return pv();if(!t)throw Pr.create("no-app",{appName:r});return t}function Mn(r,t,i){var a;let l=(a=kS[r])!==null&&a!==void 0?a:r;i&&(l+=`-${i}`);const h=l.match(/\s|\//),d=t.match(/\s|\//);if(h||d){const p=[`Unable to register library "${l}" with version "${t}":`];h&&p.push(`library name "${l}" contains illegal characters (whitespace or "/")`),h&&d&&p.push("and"),d&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ki.warn(p.join(" "));return}hi(new Hn(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="firebase-heartbeat-database",BS=1,ml="firebase-heartbeat-store";let sd=null;function gv(){return sd||(sd=mv(zS,BS,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(ml)}catch(i){console.warn(i)}}}}).catch(r=>{throw Pr.create("idb-open",{originalErrorMessage:r.message})})),sd}async function jS(r){try{const i=(await gv()).transaction(ml),a=await i.objectStore(ml).get(yv(r));return await i.done,a}catch(t){if(t instanceof Gn)Ki.warn(t.message);else{const i=Pr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ki.warn(i.message)}}}async function By(r,t){try{const a=(await gv()).transaction(ml,"readwrite");await a.objectStore(ml).put(t,yv(r)),await a.done}catch(i){if(i instanceof Gn)Ki.warn(i.message);else{const a=Pr.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Ki.warn(a.message)}}}function yv(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=1024,qS=30;class GS{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new KS(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=jy();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(d=>d.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:l}),this._heartbeatsCache.heartbeats.length>qS){const d=YS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Ki.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=jy(),{heartbeatsToSend:a,unsentEntries:l}=FS(this._heartbeatsCache.heartbeats),h=dc(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(i){return Ki.warn(i),""}}}function jy(){return new Date().toISOString().substring(0,10)}function FS(r,t=HS){const i=[];let a=r.slice();for(const l of r){const h=i.find(d=>d.agent===l.agent);if(h){if(h.dates.push(l.date),Hy(i)>t){h.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),Hy(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class KS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cv()?hv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await jS(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return By(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return By(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function Hy(r){return dc(JSON.stringify({version:2,heartbeats:r})).length}function YS(r){if(r.length===0)return-1;let t=0,i=r[0].date;for(let a=1;a<r.length;a++)r[a].date<i&&(i=r[a].date,t=a);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(r){hi(new Hn("platform-logger",t=>new aS(t),"PRIVATE")),hi(new Hn("heartbeat",t=>new GS(t),"PRIVATE")),Mn(gd,xy,r),Mn(gd,xy,"esm2017"),Mn("fire-js","")}QS("");function zd(r,t){var i={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&t.indexOf(a)<0&&(i[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(r);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(r,a[l])&&(i[a[l]]=r[a[l]]);return i}function _v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XS=_v,vv=new Ps("auth","Firebase",_v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new kc("@firebase/auth");function $S(r,...t){pc.logLevel<=wt.WARN&&pc.warn(`Auth (${Ka}): ${r}`,...t)}function sc(r,...t){pc.logLevel<=wt.ERROR&&pc.error(`Auth (${Ka}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(r,...t){throw Bd(r,...t)}function li(r,...t){return Bd(r,...t)}function Ev(r,t,i){const a=Object.assign(Object.assign({},XS()),{[t]:i});return new Ps("auth","Firebase",a).create(t,{appName:r.name})}function Gi(r){return Ev(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bd(r,...t){if(typeof r!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=r.name),r._errorFactory.create(i,...a)}return vv.create(r,...t)}function ut(r,t,...i){if(!r)throw Bd(t,...i)}function ji(r){const t="INTERNAL ASSERTION FAILED: "+r;throw sc(t),new Error(t)}function Yi(r,t){r||ji(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function ZS(){return qy()==="http:"||qy()==="https:"}function qy(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZS()||uv()||"connection"in navigator)?navigator.onLine:!0}function JS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,i){this.shortDelay=t,this.longDelay=i,Yi(i>t,"Short delay should be less than long delay!"),this.isMobile=bA()||IA()}get(){return WS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(r,t){Yi(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ji("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ji("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ji("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=new Sl(3e4,6e4);function Gr(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Fr(r,t,i,a,l={}){return Av(r,l,async()=>{let h={},d={};a&&(t==="GET"?d=a:h={body:JSON.stringify(a)});const p=Al(Object.assign({key:r.config.apiKey},d)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:t,headers:g},h);return RA()||(v.referrerPolicy="no-referrer"),Tv.fetch()(Sv(r,r.config.apiHost,i,p),v)})}async function Av(r,t,i){r._canInitEmulator=!1;const a=Object.assign(Object.assign({},tb),t);try{const l=new ib(r),h=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await h.json();if("needConfirmation"in d)throw Ju(r,"account-exists-with-different-credential",d);if(h.ok&&!("errorMessage"in d))return d;{const p=h.ok?d.errorMessage:d.error.message,[g,v]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ju(r,"credential-already-in-use",d);if(g==="EMAIL_EXISTS")throw Ju(r,"email-already-in-use",d);if(g==="USER_DISABLED")throw Ju(r,"user-disabled",d);const w=a[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Ev(r,w,v);qn(r,w)}}catch(l){if(l instanceof Gn)throw l;qn(r,"network-request-failed",{message:String(l)})}}async function bl(r,t,i,a,l={}){const h=await Fr(r,t,i,a,l);return"mfaPendingCredential"in h&&qn(r,"multi-factor-auth-required",{_serverResponse:h}),h}function Sv(r,t,i,a){const l=`${t}${i}?${a}`;return r.config.emulator?jd(r.config,l):`${r.config.apiScheme}://${l}`}function nb(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ib{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(li(this.auth,"network-request-failed")),eb.get())})}}function Ju(r,t,i){const a={appName:r.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=li(r,t,a);return l.customData._tokenResponse=i,l}function Gy(r){return r!==void 0&&r.enterprise!==void 0}class rb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return nb(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sb(r,t){return Fr(r,"GET","/v2/recaptchaConfig",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(r,t){return Fr(r,"POST","/v1/accounts:delete",t)}async function bv(r,t){return Fr(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ob(r,t=!1){const i=Ze(r),a=await i.getIdToken(t),l=Hd(a);ut(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const h=typeof l.firebase=="object"?l.firebase:void 0,d=h==null?void 0:h.sign_in_provider;return{claims:l,token:a,authTime:ll(ad(l.auth_time)),issuedAtTime:ll(ad(l.iat)),expirationTime:ll(ad(l.exp)),signInProvider:d||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function ad(r){return Number(r)*1e3}function Hd(r){const[t,i,a]=r.split(".");if(t===void 0||i===void 0||a===void 0)return sc("JWT malformed, contained fewer than 3 sections"),null;try{const l=sv(i);return l?JSON.parse(l):(sc("Failed to decode base64 JWT payload"),null)}catch(l){return sc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Fy(r){const t=Hd(r);return ut(t,"internal-error"),ut(typeof t.exp<"u","internal-error"),ut(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pl(r,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof Gn&&lb(a)&&r.auth.currentUser===r&&await r.auth.signOut(),a}}function lb({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const l=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=ll(this.lastLoginAt),this.creationTime=ll(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(r){var t;const i=r.auth,a=await r.getIdToken(),l=await pl(r,bv(i,{idToken:a}));ut(l==null?void 0:l.users.length,i,"internal-error");const h=l.users[0];r._notifyReloadListener(h);const d=!((t=h.providerUserInfo)===null||t===void 0)&&t.length?wv(h.providerUserInfo):[],p=hb(r.providerData,d),g=r.isAnonymous,v=!(r.email&&h.passwordHash)&&!(p!=null&&p.length),w=g?v:!1,D={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:p,metadata:new Ed(h.createdAt,h.lastLoginAt),isAnonymous:w};Object.assign(r,D)}async function cb(r){const t=Ze(r);await gc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function hb(r,t){return[...r.filter(a=>!t.some(l=>l.providerId===a.providerId)),...t]}function wv(r){return r.map(t=>{var{providerId:i}=t,a=zd(t,["providerId"]);return{providerId:i,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(r,t){const i=await Av(r,{},async()=>{const a=Al({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:h}=r.config,d=Sv(r,l,"/v1/token",`key=${h}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Tv.fetch()(d,{method:"POST",headers:p,body:a})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function db(r,t){return Fr(r,"POST","/v2/accounts:revokeToken",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ut(t.idToken,"internal-error"),ut(typeof t.idToken<"u","internal-error"),ut(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Fy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){ut(t.length!==0,"internal-error");const i=Fy(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ut(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:l,expiresIn:h}=await fb(t,i);this.updateTokensAndExpiration(a,l,Number(h))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:l,expirationTime:h}=i,d=new La;return a&&(ut(typeof a=="string","internal-error",{appName:t}),d.refreshToken=a),l&&(ut(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),h&&(ut(typeof h=="number","internal-error",{appName:t}),d.expirationTime=h),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new La,this.toJSON())}_performRefresh(){return ji("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(r,t){ut(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Hi{constructor(t){var{uid:i,auth:a,stsTokenManager:l}=t,h=zd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ub(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=a,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new Ed(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(t){const i=await pl(this,this.stsTokenManager.getToken(this.auth,t));return ut(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return ob(this,t)}reload(){return cb(this)}_assign(t){this!==t&&(ut(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Hi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){ut(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await gc(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(Gi(this.auth));const t=await this.getIdToken();return await pl(this,ab(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var a,l,h,d,p,g,v,w;const D=(a=i.displayName)!==null&&a!==void 0?a:void 0,B=(l=i.email)!==null&&l!==void 0?l:void 0,K=(h=i.phoneNumber)!==null&&h!==void 0?h:void 0,$=(d=i.photoURL)!==null&&d!==void 0?d:void 0,at=(p=i.tenantId)!==null&&p!==void 0?p:void 0,tt=(g=i._redirectEventId)!==null&&g!==void 0?g:void 0,Rt=(v=i.createdAt)!==null&&v!==void 0?v:void 0,dt=(w=i.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Tt,emailVerified:jt,isAnonymous:mt,providerData:Mt,stsTokenManager:V}=i;ut(Tt&&V,t,"internal-error");const b=La.fromJSON(this.name,V);ut(typeof Tt=="string",t,"internal-error"),Nr(D,t.name),Nr(B,t.name),ut(typeof jt=="boolean",t,"internal-error"),ut(typeof mt=="boolean",t,"internal-error"),Nr(K,t.name),Nr($,t.name),Nr(at,t.name),Nr(tt,t.name),Nr(Rt,t.name),Nr(dt,t.name);const A=new Hi({uid:Tt,auth:t,email:B,emailVerified:jt,displayName:D,isAnonymous:mt,photoURL:$,phoneNumber:K,tenantId:at,stsTokenManager:b,createdAt:Rt,lastLoginAt:dt});return Mt&&Array.isArray(Mt)&&(A.providerData=Mt.map(I=>Object.assign({},I))),tt&&(A._redirectEventId=tt),A}static async _fromIdTokenResponse(t,i,a=!1){const l=new La;l.updateFromServerResponse(i);const h=new Hi({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a});return await gc(h),h}static async _fromGetAccountInfoResponse(t,i,a){const l=i.users[0];ut(l.localId!==void 0,"internal-error");const h=l.providerUserInfo!==void 0?wv(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(h!=null&&h.length),p=new La;p.updateFromIdToken(a);const g=new Hi({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:d}),v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Ed(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(h!=null&&h.length)};return Object.assign(g,v),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=new Map;function qi(r){Yi(r instanceof Function,"Expected a class definition");let t=Ky.get(r);return t?(Yi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Ky.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}Rv.type="NONE";const Yy=Rv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(r,t,i){return`firebase:${r}:${t}:${i}`}class Pa{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:l,name:h}=this.auth;this.fullUserKey=ac(this.userKey,l.apiKey,h),this.fullPersistenceKey=ac("persistence",l.apiKey,h),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Hi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new Pa(qi(Yy),t,a);const l=(await Promise.all(i.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let h=l[0]||qi(Yy);const d=ac(a,t.config.apiKey,t.name);let p=null;for(const v of i)try{const w=await v._get(d);if(w){const D=Hi._fromJSON(t,w);v!==h&&(p=D),h=v;break}}catch{}const g=l.filter(v=>v._shouldAllowMigration);return!h._shouldAllowMigration||!g.length?new Pa(h,t,a):(h=g[0],p&&await h._set(d,p.toJSON()),await Promise.all(i.map(async v=>{if(v!==h)try{await v._remove(d)}catch{}})),new Pa(h,t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Iv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mv(t))return"Blackberry";if(Vv(t))return"Webos";if(Cv(t))return"Safari";if((t.includes("chrome/")||Ov(t))&&!t.includes("edge/"))return"Chrome";if(Nv(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=r.match(i);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function Iv(r=Ge()){return/firefox\//i.test(r)}function Cv(r=Ge()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ov(r=Ge()){return/crios\//i.test(r)}function Dv(r=Ge()){return/iemobile/i.test(r)}function Nv(r=Ge()){return/android/i.test(r)}function Mv(r=Ge()){return/blackberry/i.test(r)}function Vv(r=Ge()){return/webos/i.test(r)}function qd(r=Ge()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function mb(r=Ge()){var t;return qd(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function pb(){return CA()&&document.documentMode===10}function Uv(r=Ge()){return qd(r)||Nv(r)||Vv(r)||Mv(r)||/windows phone/i.test(r)||Dv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(r,t=[]){let i;switch(r){case"Browser":i=Qy(Ge());break;case"Worker":i=`${Qy(Ge())}-${r}`;break;default:i=r}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${Ka}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=h=>new Promise((d,p)=>{try{const g=t(h);d(g)}catch(g){p(g)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(r,t={}){return Fr(r,"GET","/v2/passwordPolicy",Gr(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=6;class vb{constructor(t){var i,a,l,h;const d=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=d.minPasswordLength)!==null&&i!==void 0?i:_b,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(h=t.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,a,l,h,d,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,g),this.validatePasswordCharacterOptions(t,g),g.isValid&&(g.isValid=(i=g.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(a=g.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),g.isValid&&(g.isValid=(l=g.containsLowercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsUppercaseLetter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(d=g.containsNumericCharacter)!==null&&d!==void 0?d:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<t.length;l++)a=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,l,h){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(t,i,a,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xy(this),this.idTokenSubscription=new Xy(this),this.beforeStateQueue=new gb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=qi(i)),this._initializationPromise=this.queue(async()=>{var a,l;if(!this._deleted&&(this.persistenceManager=await Pa.create(this,t),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await bv(this,{idToken:t}),a=await Hi._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Nn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(p,p))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let l=a,h=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=l==null?void 0:l._redirectEventId,g=await this.tryRedirectSignIn(t);(!d||d===p)&&(g!=null&&g.user)&&(l=g.user,h=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ut(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await gc(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=JS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nn(this.app))return Promise.reject(Gi(this));const i=t?Ze(t):null;return i&&ut(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&ut(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(Gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nn(this.app)?Promise.reject(Gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await yb(this),i=new vb(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ps("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await db(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&qi(t)||this._popupRedirectResolver;ut(i,this,"argument-error"),this.redirectPersistenceManager=await Pa.create(this,[qi(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,l){if(this._deleted)return()=>{};const h=typeof i=="function"?i:i.next.bind(i);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ut(p,this,"internal-error"),p.then(()=>{d||h(this.currentUser)}),typeof i=="function"){const g=t.addObserver(i,a,l);return()=>{d=!0,g()}}else{const g=t.addObserver(i);return()=>{d=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ut(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(i["X-Firebase-Client"]=a);const l=await this._getAppCheckToken();return l&&(i["X-Firebase-AppCheck"]=l),i}async _getAppCheckToken(){var t;if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&$S(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function zs(r){return Ze(r)}class Xy{constructor(t){this.auth=t,this.observer=null,this.addObserver=kA(i=>this.observer=i)}get next(){return ut(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tb(r){Lc=r}function Lv(r){return Lc.loadJS(r)}function Ab(){return Lc.recaptchaEnterpriseScript}function Sb(){return Lc.gapiScript}function bb(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class wb{constructor(){this.enterprise=new Rb}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class Rb{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const Ib="recaptcha-enterprise",Pv="NO_RECAPTCHA";class Cb{constructor(t){this.type=Ib,this.auth=zs(t)}async verify(t="verify",i=!1){async function a(h){if(!i){if(h.tenantId==null&&h._agentRecaptchaConfig!=null)return h._agentRecaptchaConfig.siteKey;if(h.tenantId!=null&&h._tenantRecaptchaConfigs[h.tenantId]!==void 0)return h._tenantRecaptchaConfigs[h.tenantId].siteKey}return new Promise(async(d,p)=>{sb(h,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new rb(g);return h.tenantId==null?h._agentRecaptchaConfig=v:h._tenantRecaptchaConfigs[h.tenantId]=v,d(v.siteKey)}}).catch(g=>{p(g)})})}function l(h,d,p){const g=window.grecaptcha;Gy(g)?g.enterprise.ready(()=>{g.enterprise.execute(h,{action:t}).then(v=>{d(v)}).catch(()=>{d(Pv)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wb().execute("siteKey",{action:"verify"}):new Promise((h,d)=>{a(this.auth).then(p=>{if(!i&&Gy(window.grecaptcha))l(p,h,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let g=Ab();g.length!==0&&(g+=p),Lv(g).then(()=>{l(p,h,d)}).catch(v=>{d(v)})}}).catch(p=>{d(p)})})}}async function $y(r,t,i,a=!1,l=!1){const h=new Cb(r);let d;if(l)d=Pv;else try{d=await h.verify(i)}catch{d=await h.verify(i,!0)}const p=Object.assign({},t);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return a?Object.assign(p,{captchaResp:d}):Object.assign(p,{captchaResponse:d}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Td(r,t,i,a,l){var h;if(!((h=r._getRecaptchaConfig())===null||h===void 0)&&h.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await $y(r,t,i,i==="getOobCode");return a(r,d)}else return a(r,t).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await $y(r,t,i,i==="getOobCode");return a(r,p)}else return Promise.reject(d)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(r,t){const i=xs(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),h=i.getOptions();if(zr(h,t??{}))return l;qn(l,"already-initialized")}return i.initialize({options:t})}function Db(r,t){const i=(t==null?void 0:t.persistence)||[],a=(Array.isArray(i)?i:[i]).map(qi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function Nb(r,t,i){const a=zs(r);ut(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const l=!1,h=xv(t),{host:d,port:p}=Mb(t),g=p===null?"":`:${p}`,v={url:`${h}//${d}${g}/`},w=Object.freeze({host:d,port:p,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){ut(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),ut(zr(v,a.config.emulator)&&zr(w,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=v,a.emulatorConfig=w,a.settings.appVerificationDisabledForTesting=!0,Vb()}function xv(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function Mb(r){const t=xv(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const h=l[1];return{host:h,port:Zy(a.substr(h.length+1))}}else{const[h,d]=a.split(":");return{host:h,port:Zy(d)}}}function Zy(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function Vb(){function r(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return ji("not implemented")}_getIdTokenResponse(t){return ji("not implemented")}_linkToIdToken(t,i){return ji("not implemented")}_getReauthenticationResolver(t){return ji("not implemented")}}async function Ub(r,t){return Fr(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(r,t){return bl(r,"POST","/v1/accounts:signInWithPassword",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lb(r,t){return bl(r,"POST","/v1/accounts:signInWithEmailLink",Gr(r,t))}async function Pb(r,t){return bl(r,"POST","/v1/accounts:signInWithEmailLink",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Gd{constructor(t,i,a,l=null){super("password",a),this._email=t,this._password=i,this._tenantId=l}static _fromEmailAndPassword(t,i){return new gl(t,i,"password")}static _fromEmailAndCode(t,i,a=null){return new gl(t,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(t,i,"signInWithPassword",kb);case"emailLink":return Lb(t,{email:this._email,oobCode:this._password});default:qn(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(t,a,"signUpPassword",Ub);case"emailLink":return Pb(t,{idToken:i,email:this._email,oobCode:this._password});default:qn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(r,t){return bl(r,"POST","/v1/accounts:signInWithIdp",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="http://localhost";class Os extends Gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Os(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):qn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:l}=i,h=zd(i,["providerId","signInMethod"]);if(!a||!l)return null;const d=new Os(a,l);return d.idToken=h.idToken||void 0,d.accessToken=h.accessToken||void 0,d.secret=h.secret,d.nonce=h.nonce,d.pendingToken=h.pendingToken||null,d}_getIdTokenResponse(t){const i=this.buildRequest();return xa(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,xa(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,xa(t,i)}buildRequest(){const t={requestUri:xb,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=Al(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bb(r){const t=sl(al(r)).link,i=t?sl(al(t)).deep_link_id:null,a=sl(al(r)).deep_link_id;return(a?sl(al(a)).link:null)||a||i||t||r}class Fd{constructor(t){var i,a,l,h,d,p;const g=sl(al(t)),v=(i=g.apiKey)!==null&&i!==void 0?i:null,w=(a=g.oobCode)!==null&&a!==void 0?a:null,D=zb((l=g.mode)!==null&&l!==void 0?l:null);ut(v&&w&&D,"argument-error"),this.apiKey=v,this.operation=D,this.code=w,this.continueUrl=(h=g.continueUrl)!==null&&h!==void 0?h:null,this.languageCode=(d=g.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(p=g.tenantId)!==null&&p!==void 0?p:null}static parseLink(t){const i=Bb(t);try{return new Fd(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(){this.providerId=Ya.PROVIDER_ID}static credential(t,i){return gl._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const a=Fd.parseLink(i);return ut(a,"argument-error"),gl._fromEmailAndCode(t,a.code,a.tenantId)}}Ya.PROVIDER_ID="password";Ya.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ya.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends zv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends wl{constructor(){super("facebook.com")}static credential(t){return Os._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mr.credential(t.oauthAccessToken)}catch{return null}}}Mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Os._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return Vr.credential(i,a)}catch{return null}}}Vr.GOOGLE_SIGN_IN_METHOD="google.com";Vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends wl{constructor(){super("github.com")}static credential(t){return Os._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ur.credential(t.oauthAccessToken)}catch{return null}}}Ur.GITHUB_SIGN_IN_METHOD="github.com";Ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends wl{constructor(){super("twitter.com")}static credential(t,i){return Os._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return kr.credentialFromTaggedObject(t)}static credentialFromError(t){return kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return kr.credential(i,a)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(r,t){return bl(r,"POST","/v1/accounts:signUp",Gr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,l=!1){const h=await Hi._fromIdTokenResponse(t,a,l),d=Wy(a);return new Ds({user:h,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const l=Wy(a);return new Ds({user:t,providerId:l,_tokenResponse:a,operationType:i})}}function Wy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends Gn{constructor(t,i,a,l){var h;super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,yc.prototype),this.customData={appName:t.name,tenantId:(h=t.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,l){return new yc(t,i,a,l)}}function Bv(r,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?yc._fromErrorAndOperation(r,h,t,a):h})}async function Hb(r,t,i=!1){const a=await pl(r,t._linkToIdToken(r.auth,await r.getIdToken()),i);return Ds._forOperation(r,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(r,t,i=!1){const{auth:a}=r;if(Nn(a.app))return Promise.reject(Gi(a));const l="reauthenticate";try{const h=await pl(r,Bv(a,l,t,r),i);ut(h.idToken,a,"internal-error");const d=Hd(h.idToken);ut(d,a,"internal-error");const{sub:p}=d;return ut(r.uid===p,a,"user-mismatch"),Ds._forOperation(r,l,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&qn(a,"user-mismatch"),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(r,t,i=!1){if(Nn(r.app))return Promise.reject(Gi(r));const a="signIn",l=await Bv(r,a,t),h=await Ds._fromIdTokenResponse(r,a,l);return i||await r._updateCurrentUser(h.user),h}async function Gb(r,t){return jv(zs(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(r){const t=zs(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Fb(r,t,i){if(Nn(r.app))return Promise.reject(Gi(r));const a=zs(r),d=await Td(a,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jb).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Hv(r),g}),p=await Ds._fromIdTokenResponse(a,"signIn",d);return await a._updateCurrentUser(p.user),p}function Kb(r,t,i){return Nn(r.app)?Promise.reject(Gi(r)):Gb(Ze(r),Ya.credential(t,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Hv(r),a})}function Yb(r,t,i,a){return Ze(r).onIdTokenChanged(t,i,a)}function Qb(r,t,i){return Ze(r).beforeAuthStateChanged(t,i)}function qv(r,t,i,a){return Ze(r).onAuthStateChanged(t,i,a)}const _c="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(_c,"1"),this.storage.removeItem(_c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=1e3,$b=10;class Fv extends Gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&t(i,l,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((d,p,g)=>{this.notifyListeners(d,g)});return}const a=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},h=this.storage.getItem(a);pb()&&h!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,$b):l()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},Xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}Fv.type="LOCAL";const Zb=Fv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv extends Gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}Kv.type="SESSION";const Yv=Kv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const a=new Pc(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:l,data:h}=i.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const p=Array.from(d).map(async v=>v(i.origin,h)),g=await Wb(p);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:g})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(r="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return r+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let h,d;return new Promise((p,g)=>{const v=Kd("",20);l.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(D){const B=D;if(B.data.eventId===v)switch(B.data.status){case"ack":clearTimeout(w),h=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),p(B.data.response);break;default:clearTimeout(w),clearTimeout(h),g(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:v,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){return window}function t1(r){ui().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(){return typeof ui().WorkerGlobalScope<"u"&&typeof ui().importScripts=="function"}async function e1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function n1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function i1(){return Qv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="firebaseLocalStorageDb",r1=1,vc="firebaseLocalStorage",$v="fbase_key";class Rl{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function xc(r,t){return r.transaction([vc],t?"readwrite":"readonly").objectStore(vc)}function s1(){const r=indexedDB.deleteDatabase(Xv);return new Rl(r).toPromise()}function Ad(){const r=indexedDB.open(Xv,r1);return new Promise((t,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const a=r.result;try{a.createObjectStore(vc,{keyPath:$v})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const a=r.result;a.objectStoreNames.contains(vc)?t(a):(a.close(),await s1(),t(await Ad()))})})}async function Jy(r,t,i){const a=xc(r,!0).put({[$v]:t,value:i});return new Rl(a).toPromise()}async function a1(r,t){const i=xc(r,!1).get(t),a=await new Rl(i).toPromise();return a===void 0?null:a.value}function t_(r,t){const i=xc(r,!0).delete(t);return new Rl(i).toPromise()}const o1=800,l1=3;class Zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ad(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>l1)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(i1()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await e1(),!this.activeServiceWorker)return;this.sender=new Jb(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((i=a[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||n1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ad();return await Jy(t,_c,"1"),await t_(t,_c),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>Jy(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>a1(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>t_(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const h=xc(l,!1).getAll();return new Rl(h).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:l,value:h}of t)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(h)&&(this.notifyListeners(l,h),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),o1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zv.type="LOCAL";const u1=Zv;new Sl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(r,t){return t?qi(t):(ut(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends Gd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return xa(t,this._buildIdpRequest())}_linkToIdToken(t,i){return xa(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return xa(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function h1(r){return jv(r.auth,new Yd(r),r.bypassAuthState)}function f1(r){const{auth:t,user:i}=r;return ut(i,t,"internal-error"),qb(i,new Yd(r),r.bypassAuthState)}async function d1(r){const{auth:t,user:i}=r;return ut(i,t,"internal-error"),Hb(i,new Yd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(t,i,a,l,h=!1){this.auth=t,this.resolver=a,this.user=l,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:l,tenantId:h,error:d,type:p}=t;if(d){this.reject(d);return}const g={auth:this.auth,requestUri:i,sessionId:a,tenantId:h||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(v){this.reject(v)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return h1;case"linkViaPopup":case"linkViaRedirect":return d1;case"reauthViaPopup":case"reauthViaRedirect":return f1;default:qn(this.auth,"internal-error")}}resolve(t){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=new Sl(2e3,1e4);class Ua extends Wv{constructor(t,i,a,l,h){super(t,i,l,h),this.provider=a,this.authWindow=null,this.pollId=null,Ua.currentPopupAction&&Ua.currentPopupAction.cancel(),Ua.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ut(t,this.auth,"internal-error"),t}async onExecution(){Yi(this.filter.length===1,"Popup operations only handle one event");const t=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(li(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(li(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ua.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,a;if(!((a=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(li(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,m1.get())};t()}}Ua.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1="pendingRedirect",oc=new Map;class g1 extends Wv{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=oc.get(this.auth._key());if(!t){try{const a=await y1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}oc.set(this.auth._key(),t)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y1(r,t){const i=E1(t),a=v1(r);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function _1(r,t){oc.set(r._key(),t)}function v1(r){return qi(r._redirectPersistence)}function E1(r){return ac(p1,r.config.apiKey,r.name)}async function T1(r,t,i=!1){if(Nn(r.app))return Promise.reject(Gi(r));const a=zs(r),l=c1(a,t),d=await new g1(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,t)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=10*60*1e3;class S1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!b1(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var a;if(t.error&&!Jv(t)){const l=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";i.onError(li(this.auth,l))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=A1&&this.cachedEventUids.clear(),this.cachedEventUids.has(e_(t))}saveEventToCache(t){this.cachedEventUids.add(e_(t)),this.lastProcessedEventTime=Date.now()}}function e_(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function Jv({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function b1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(r,t={}){return Fr(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I1=/^https?/;async function C1(r){if(r.config.emulator)return;const{authorizedDomains:t}=await w1(r);for(const i of t)try{if(O1(i))return}catch{}qn(r,"unauthorized-domain")}function O1(r){const t=vd(),{protocol:i,hostname:a}=new URL(t);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&a===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!I1.test(i))return!1;if(R1.test(r))return a===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=new Sl(3e4,6e4);function n_(){const r=ui().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function N1(r){return new Promise((t,i)=>{var a,l,h;function d(){n_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{n_(),i(li(r,"network-request-failed"))},timeout:D1.get()})}if(!((l=(a=ui().gapi)===null||a===void 0?void 0:a.iframes)===null||l===void 0)&&l.Iframe)t(gapi.iframes.getContext());else if(!((h=ui().gapi)===null||h===void 0)&&h.load)d();else{const p=bb("iframefcb");return ui()[p]=()=>{gapi.load?d():i(li(r,"network-request-failed"))},Lv(`${Sb()}?onload=${p}`).catch(g=>i(g))}}).catch(t=>{throw lc=null,t})}let lc=null;function M1(r){return lc=lc||N1(r),lc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1=new Sl(5e3,15e3),U1="__/auth/iframe",k1="emulator/auth/iframe",L1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function x1(r){const t=r.config;ut(t.authDomain,r,"auth-domain-config-required");const i=t.emulator?jd(t,k1):`https://${r.config.authDomain}/${U1}`,a={apiKey:t.apiKey,appName:r.name,v:Ka},l=P1.get(r.config.apiHost);l&&(a.eid=l);const h=r._getFrameworks();return h.length&&(a.fw=h.join(",")),`${i}?${Al(a).slice(1)}`}async function z1(r){const t=await M1(r),i=ui().gapi;return ut(i,r,"internal-error"),t.open({where:document.body,url:x1(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:L1,dontclear:!0},a=>new Promise(async(l,h)=>{await a.restyle({setHideOnLeave:!1});const d=li(r,"network-request-failed"),p=ui().setTimeout(()=>{h(d)},V1.get());function g(){ui().clearTimeout(p),l(a)}a.ping(g).then(g,()=>{h(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j1=500,H1=600,q1="_blank",G1="http://localhost";class i_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F1(r,t,i,a=j1,l=H1){const h=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const g=Object.assign(Object.assign({},B1),{width:a.toString(),height:l.toString(),top:h,left:d}),v=Ge().toLowerCase();i&&(p=Ov(v)?q1:i),Iv(v)&&(t=t||G1,g.scrollbars="yes");const w=Object.entries(g).reduce((B,[K,$])=>`${B}${K}=${$},`,"");if(mb(v)&&p!=="_self")return K1(t||"",p),new i_(null);const D=window.open(t||"",p,w);ut(D,r,"popup-blocked");try{D.focus()}catch{}return new i_(D)}function K1(r,t){const i=document.createElement("a");i.href=r,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1="__/auth/handler",Q1="emulator/auth/handler",X1=encodeURIComponent("fac");async function r_(r,t,i,a,l,h){ut(r.config.authDomain,r,"auth-domain-config-required"),ut(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:a,v:Ka,eventId:l};if(t instanceof zv){t.setDefaultLanguage(r.languageCode),d.providerId=t.providerId||"",UA(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[w,D]of Object.entries({}))d[w]=D}if(t instanceof wl){const w=t.getScopes().filter(D=>D!=="");w.length>0&&(d.scopes=w.join(","))}r.tenantId&&(d.tid=r.tenantId);const p=d;for(const w of Object.keys(p))p[w]===void 0&&delete p[w];const g=await r._getAppCheckToken(),v=g?`#${X1}=${encodeURIComponent(g)}`:"";return`${$1(r)}?${Al(p).slice(1)}${v}`}function $1({config:r}){return r.emulator?jd(r,Q1):`https://${r.authDomain}/${Y1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="webStorageSupport";class Z1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yv,this._completeRedirectFn=T1,this._overrideRedirectResult=_1}async _openPopup(t,i,a,l){var h;Yi((h=this.eventManagers[t._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const d=await r_(t,i,a,vd(),l);return F1(t,d,Kd())}async _openRedirect(t,i,a,l){await this._originValidation(t);const h=await r_(t,i,a,vd(),l);return t1(h),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:h}=this.eventManagers[i];return l?Promise.resolve(l):(Yi(h,"If manager is not set, promise should be"),h)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await z1(t),a=new S1(t);return i.register("authEvent",l=>(ut(l==null?void 0:l.authEvent,t,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(od,{type:od},l=>{var h;const d=(h=l==null?void 0:l[0])===null||h===void 0?void 0:h[od];d!==void 0&&i(!!d),qn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=C1(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return Uv()||Cv()||qd()}}const W1=Z1;var s_="@firebase/auth",a_="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ut(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ew(r){hi(new Hn("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),h=t.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=a.options;ut(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const g={apiKey:d,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kv(r)},v=new Eb(a,l,h,g);return Db(v,i),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),hi(new Hn("auth-internal",t=>{const i=zs(t.getProvider("auth").getImmediate());return(a=>new J1(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(s_,a_,tw(r)),Mn(s_,a_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=5*60,iw=lv("authIdTokenMaxAge")||nw;let o_=null;const rw=r=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>iw)return;const l=i==null?void 0:i.token;o_!==l&&(o_=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function sw(r=xd()){const t=xs(r,"auth");if(t.isInitialized())return t.getImmediate();const i=Ob(r,{popupRedirectResolver:W1,persistence:[u1,Zb,Yv]}),a=lv("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(a,location.origin);if(location.origin===h.origin){const d=rw(h.toString());Qb(i,d,()=>d(i.currentUser)),Yb(i,p=>d(p))}}const l=av("auth");return l&&Nb(i,`http://${l}`),i}function aw(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}Tb({loadJS(r){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",r),a.onload=t,a.onerror=l=>{const h=li("internal-error");h.customData=l,i(h)},a.type="text/javascript",a.charset="UTF-8",aw().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ew("Browser");var ow="firebase",lw="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mn(ow,lw,"app");const t0="@firebase/installations",Qd="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=1e4,n0=`w:${Qd}`,i0="FIS_v2",uw="https://firebaseinstallations.googleapis.com/v1",cw=60*60*1e3,hw="installations",fw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ns=new Ps(hw,fw,dw);function r0(r){return r instanceof Gn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0({projectId:r}){return`${uw}/projects/${r}/installations`}function a0(r){return{token:r.token,requestStatus:2,expiresIn:pw(r.expiresIn),creationTime:Date.now()}}async function o0(r,t){const a=(await t.json()).error;return Ns.create("request-failed",{requestName:r,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function l0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function mw(r,{refreshToken:t}){const i=l0(r);return i.append("Authorization",gw(t)),i}async function u0(r){const t=await r();return t.status>=500&&t.status<600?r():t}function pw(r){return Number(r.replace("s","000"))}function gw(r){return`${i0} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw({appConfig:r,heartbeatServiceProvider:t},{fid:i}){const a=s0(r),l=l0(r),h=t.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={fid:i,authVersion:i0,appId:r.appId,sdkVersion:n0},p={method:"POST",headers:l,body:JSON.stringify(d)},g=await u0(()=>fetch(a,p));if(g.ok){const v=await g.json();return{fid:v.fid||i,registrationStatus:2,refreshToken:v.refreshToken,authToken:a0(v.authToken)}}else throw await o0("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=/^[cdef][\w-]{21}$/,Sd="";function Ew(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const i=Tw(r);return vw.test(i)?i:Sd}catch{return Sd}}function Tw(r){return _w(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=new Map;function f0(r,t){const i=zc(r);d0(i,t),Aw(i,t)}function d0(r,t){const i=h0.get(r);if(i)for(const a of i)a(t)}function Aw(r,t){const i=Sw();i&&i.postMessage({key:r,fid:t}),bw()}let ws=null;function Sw(){return!ws&&"BroadcastChannel"in self&&(ws=new BroadcastChannel("[Firebase] FID Change"),ws.onmessage=r=>{d0(r.data.key,r.data.fid)}),ws}function bw(){h0.size===0&&ws&&(ws.close(),ws=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="firebase-installations-database",Rw=1,Ms="firebase-installations-store";let ld=null;function Xd(){return ld||(ld=mv(ww,Rw,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Ms)}}})),ld}async function Ec(r,t){const i=zc(r),l=(await Xd()).transaction(Ms,"readwrite"),h=l.objectStore(Ms),d=await h.get(i);return await h.put(t,i),await l.done,(!d||d.fid!==t.fid)&&f0(r,t.fid),t}async function m0(r){const t=zc(r),a=(await Xd()).transaction(Ms,"readwrite");await a.objectStore(Ms).delete(t),await a.done}async function Bc(r,t){const i=zc(r),l=(await Xd()).transaction(Ms,"readwrite"),h=l.objectStore(Ms),d=await h.get(i),p=t(d);return p===void 0?await h.delete(i):await h.put(p,i),await l.done,p&&(!d||d.fid!==p.fid)&&f0(r,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $d(r){let t;const i=await Bc(r.appConfig,a=>{const l=Iw(a),h=Cw(r,l);return t=h.registrationPromise,h.installationEntry});return i.fid===Sd?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function Iw(r){const t=r||{fid:Ew(),registrationStatus:0};return p0(t)}function Cw(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Ns.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Ow(r,i);return{installationEntry:i,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Dw(r)}:{installationEntry:t}}async function Ow(r,t){try{const i=await yw(r,t);return Ec(r.appConfig,i)}catch(i){throw r0(i)&&i.customData.serverCode===409?await m0(r.appConfig):await Ec(r.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function Dw(r){let t=await l_(r.appConfig);for(;t.registrationStatus===1;)await c0(100),t=await l_(r.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:a}=await $d(r);return a||i}return t}function l_(r){return Bc(r,t=>{if(!t)throw Ns.create("installation-not-found");return p0(t)})}function p0(r){return Nw(r)?{fid:r.fid,registrationStatus:0}:r}function Nw(r){return r.registrationStatus===1&&r.registrationTime+e0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw({appConfig:r,heartbeatServiceProvider:t},i){const a=Vw(r,i),l=mw(r,i),h=t.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={installation:{sdkVersion:n0,appId:r.appId}},p={method:"POST",headers:l,body:JSON.stringify(d)},g=await u0(()=>fetch(a,p));if(g.ok){const v=await g.json();return a0(v)}else throw await o0("Generate Auth Token",g)}function Vw(r,{fid:t}){return`${s0(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zd(r,t=!1){let i;const a=await Bc(r.appConfig,h=>{if(!g0(h))throw Ns.create("not-registered");const d=h.authToken;if(!t&&Lw(d))return h;if(d.requestStatus===1)return i=Uw(r,t),h;{if(!navigator.onLine)throw Ns.create("app-offline");const p=xw(h);return i=kw(r,p),p}});return i?await i:a.authToken}async function Uw(r,t){let i=await u_(r.appConfig);for(;i.authToken.requestStatus===1;)await c0(100),i=await u_(r.appConfig);const a=i.authToken;return a.requestStatus===0?Zd(r,t):a}function u_(r){return Bc(r,t=>{if(!g0(t))throw Ns.create("not-registered");const i=t.authToken;return zw(i)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function kw(r,t){try{const i=await Mw(r,t),a=Object.assign(Object.assign({},t),{authToken:i});return await Ec(r.appConfig,a),i}catch(i){if(r0(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await m0(r.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ec(r.appConfig,a)}throw i}}function g0(r){return r!==void 0&&r.registrationStatus===2}function Lw(r){return r.requestStatus===2&&!Pw(r)}function Pw(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+cw}function xw(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function zw(r){return r.requestStatus===1&&r.requestTime+e0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(r){const t=r,{installationEntry:i,registrationPromise:a}=await $d(t);return a?a.catch(console.error):Zd(t).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(r,t=!1){const i=r;return await Hw(i),(await Zd(i,t)).token}async function Hw(r){const{registrationPromise:t}=await $d(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(r){if(!r||!r.options)throw ud("App Configuration");if(!r.name)throw ud("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!r.options[i])throw ud(i);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function ud(r){return Ns.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="installations",Gw="installations-internal",Fw=r=>{const t=r.getProvider("app").getImmediate(),i=qw(t),a=xs(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Kw=r=>{const t=r.getProvider("app").getImmediate(),i=xs(t,y0).getImmediate();return{getId:()=>Bw(i),getToken:l=>jw(i,l)}};function Yw(){hi(new Hn(y0,Fw,"PUBLIC")),hi(new Hn(Gw,Kw,"PRIVATE"))}Yw();Mn(t0,Qd);Mn(t0,Qd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="analytics",Qw="firebase_id",Xw="origin",$w=60*1e3,Zw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new kc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dn=new Ps("analytics","Analytics",Ww);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(r){if(!r.startsWith(Wd)){const t=dn.create("invalid-gtag-resource",{gtagURL:r});return nn.warn(t.message),""}return r}function _0(r){return Promise.all(r.map(t=>t.catch(i=>i)))}function t2(r,t){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(r,t)),i}function e2(r,t){const i=t2("firebase-js-sdk-policy",{createScriptURL:Jw}),a=document.createElement("script"),l=`${Wd}?l=${r}&id=${t}`;a.src=i?i==null?void 0:i.createScriptURL(l):l,a.async=!0,document.head.appendChild(a)}function n2(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function i2(r,t,i,a,l,h){const d=a[l];try{if(d)await t[d];else{const g=(await _0(i)).find(v=>v.measurementId===l);g&&await t[g.appId]}}catch(p){nn.error(p)}r("config",l,h)}async function r2(r,t,i,a,l){try{let h=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const p=await _0(i);for(const g of d){const v=p.find(D=>D.measurementId===g),w=v&&t[v.appId];if(w)h.push(w);else{h=[];break}}}h.length===0&&(h=Object.values(t)),await Promise.all(h),r("event",a,l||{})}catch(h){nn.error(h)}}function s2(r,t,i,a){async function l(h,...d){try{if(h==="event"){const[p,g]=d;await r2(r,t,i,p,g)}else if(h==="config"){const[p,g]=d;await i2(r,t,i,a,p,g)}else if(h==="consent"){const[p,g]=d;r("consent",p,g)}else if(h==="get"){const[p,g,v]=d;r("get",p,g,v)}else if(h==="set"){const[p]=d;r("set",p)}else r(h,...d)}catch(p){nn.error(p)}}return l}function a2(r,t,i,a,l){let h=function(...d){window[a].push(arguments)};return window[l]&&typeof window[l]=="function"&&(h=window[l]),window[l]=s2(h,r,t,i),{gtagCore:h,wrappedGtag:window[l]}}function o2(r){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(Wd)&&i.src.includes(r))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=30,u2=1e3;class c2{constructor(t={},i=u2){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const v0=new c2;function h2(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function f2(r){var t;const{appId:i,apiKey:a}=r,l={method:"GET",headers:h2(a)},h=Zw.replace("{app-id}",i),d=await fetch(h,l);if(d.status!==200&&d.status!==304){let p="";try{const g=await d.json();!((t=g.error)===null||t===void 0)&&t.message&&(p=g.error.message)}catch{}throw dn.create("config-fetch-failed",{httpStatus:d.status,responseMessage:p})}return d.json()}async function d2(r,t=v0,i){const{appId:a,apiKey:l,measurementId:h}=r.options;if(!a)throw dn.create("no-app-id");if(!l){if(h)return{measurementId:h,appId:a};throw dn.create("no-api-key")}const d=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new g2;return setTimeout(async()=>{p.abort()},$w),E0({appId:a,apiKey:l,measurementId:h},d,p,t)}async function E0(r,{throttleEndTimeMillis:t,backoffCount:i},a,l=v0){var h;const{appId:d,measurementId:p}=r;try{await m2(a,t)}catch(g){if(p)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:d,measurementId:p};throw g}try{const g=await f2(r);return l.deleteThrottleMetadata(d),g}catch(g){const v=g;if(!p2(v)){if(l.deleteThrottleMetadata(d),p)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${v==null?void 0:v.message}]`),{appId:d,measurementId:p};throw g}const w=Number((h=v==null?void 0:v.customData)===null||h===void 0?void 0:h.httpStatus)===503?Uy(i,l.intervalMillis,l2):Uy(i,l.intervalMillis),D={throttleEndTimeMillis:Date.now()+w,backoffCount:i+1};return l.setThrottleMetadata(d,D),nn.debug(`Calling attemptFetch again in ${w} millis`),E0(r,D,a,l)}}function m2(r,t){return new Promise((i,a)=>{const l=Math.max(t-Date.now(),0),h=setTimeout(i,l);r.addEventListener(()=>{clearTimeout(h),a(dn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function p2(r){if(!(r instanceof Gn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class g2{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function y2(r,t,i,a,l){if(l&&l.global){r("event",i,a);return}else{const h=await t,d=Object.assign(Object.assign({},a),{send_to:h});r("event",i,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _2(){if(cv())try{await hv()}catch(r){return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return nn.warn(dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function v2(r,t,i,a,l,h,d){var p;const g=d2(r);g.then(K=>{i[K.measurementId]=K.appId,r.options.measurementId&&K.measurementId!==r.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${K.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(K=>nn.error(K)),t.push(g);const v=_2().then(K=>{if(K)return a.getId()}),[w,D]=await Promise.all([g,v]);o2(h)||e2(h,w.measurementId),l("js",new Date);const B=(p=d==null?void 0:d.config)!==null&&p!==void 0?p:{};return B[Xw]="firebase",B.update=!0,D!=null&&(B[Qw]=D),l("config",w.measurementId,B),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(t){this.app=t}_delete(){return delete ul[this.app.options.appId],Promise.resolve()}}let ul={},c_=[];const h_={};let cd="dataLayer",T2="gtag",f_,T0,d_=!1;function A2(){const r=[];if(uv()&&r.push("This is a browser extension environment."),DA()||r.push("Cookies are not available."),r.length>0){const t=r.map((a,l)=>`(${l+1}) ${a}`).join(" "),i=dn.create("invalid-analytics-context",{errorInfo:t});nn.warn(i.message)}}function S2(r,t,i){A2();const a=r.options.appId;if(!a)throw dn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dn.create("no-api-key");if(ul[a]!=null)throw dn.create("already-exists",{id:a});if(!d_){n2(cd);const{wrappedGtag:h,gtagCore:d}=a2(ul,c_,h_,cd,T2);T0=h,f_=d,d_=!0}return ul[a]=v2(r,c_,h_,t,f_,cd,i),new E2(r)}function b2(r=xd()){r=Ze(r);const t=xs(r,Tc);return t.isInitialized()?t.getImmediate():w2(r)}function w2(r,t={}){const i=xs(r,Tc);if(i.isInitialized()){const l=i.getImmediate();if(zr(t,i.getOptions()))return l;throw dn.create("already-initialized")}return i.initialize({options:t})}function R2(r,t,i,a){r=Ze(r),y2(T0,ul[r.app.options.appId],t,i,a).catch(l=>nn.error(l))}const m_="@firebase/analytics",p_="0.10.12";function I2(){hi(new Hn(Tc,(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return S2(a,l,i)},"PUBLIC")),hi(new Hn("analytics-internal",r,"PRIVATE")),Mn(m_,p_),Mn(m_,p_,"esm2017");function r(t){try{const i=t.getProvider(Tc).getImmediate();return{logEvent:(a,l,h)=>R2(i,a,l,h)}}catch(i){throw dn.create("interop-component-reg-failed",{reason:i})}}}I2();var g_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(V,b){function A(){}A.prototype=b.prototype,V.D=b.prototype,V.prototype=new A,V.prototype.constructor=V,V.C=function(I,M,L){for(var R=Array(arguments.length-2),de=2;de<arguments.length;de++)R[de-2]=arguments[de];return b.prototype[M].apply(I,R)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(a,i),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(V,b,A){A||(A=0);var I=Array(16);if(typeof b=="string")for(var M=0;16>M;++M)I[M]=b.charCodeAt(A++)|b.charCodeAt(A++)<<8|b.charCodeAt(A++)<<16|b.charCodeAt(A++)<<24;else for(M=0;16>M;++M)I[M]=b[A++]|b[A++]<<8|b[A++]<<16|b[A++]<<24;b=V.g[0],A=V.g[1],M=V.g[2];var L=V.g[3],R=b+(L^A&(M^L))+I[0]+3614090360&4294967295;b=A+(R<<7&4294967295|R>>>25),R=L+(M^b&(A^M))+I[1]+3905402710&4294967295,L=b+(R<<12&4294967295|R>>>20),R=M+(A^L&(b^A))+I[2]+606105819&4294967295,M=L+(R<<17&4294967295|R>>>15),R=A+(b^M&(L^b))+I[3]+3250441966&4294967295,A=M+(R<<22&4294967295|R>>>10),R=b+(L^A&(M^L))+I[4]+4118548399&4294967295,b=A+(R<<7&4294967295|R>>>25),R=L+(M^b&(A^M))+I[5]+1200080426&4294967295,L=b+(R<<12&4294967295|R>>>20),R=M+(A^L&(b^A))+I[6]+2821735955&4294967295,M=L+(R<<17&4294967295|R>>>15),R=A+(b^M&(L^b))+I[7]+4249261313&4294967295,A=M+(R<<22&4294967295|R>>>10),R=b+(L^A&(M^L))+I[8]+1770035416&4294967295,b=A+(R<<7&4294967295|R>>>25),R=L+(M^b&(A^M))+I[9]+2336552879&4294967295,L=b+(R<<12&4294967295|R>>>20),R=M+(A^L&(b^A))+I[10]+4294925233&4294967295,M=L+(R<<17&4294967295|R>>>15),R=A+(b^M&(L^b))+I[11]+2304563134&4294967295,A=M+(R<<22&4294967295|R>>>10),R=b+(L^A&(M^L))+I[12]+1804603682&4294967295,b=A+(R<<7&4294967295|R>>>25),R=L+(M^b&(A^M))+I[13]+4254626195&4294967295,L=b+(R<<12&4294967295|R>>>20),R=M+(A^L&(b^A))+I[14]+2792965006&4294967295,M=L+(R<<17&4294967295|R>>>15),R=A+(b^M&(L^b))+I[15]+1236535329&4294967295,A=M+(R<<22&4294967295|R>>>10),R=b+(M^L&(A^M))+I[1]+4129170786&4294967295,b=A+(R<<5&4294967295|R>>>27),R=L+(A^M&(b^A))+I[6]+3225465664&4294967295,L=b+(R<<9&4294967295|R>>>23),R=M+(b^A&(L^b))+I[11]+643717713&4294967295,M=L+(R<<14&4294967295|R>>>18),R=A+(L^b&(M^L))+I[0]+3921069994&4294967295,A=M+(R<<20&4294967295|R>>>12),R=b+(M^L&(A^M))+I[5]+3593408605&4294967295,b=A+(R<<5&4294967295|R>>>27),R=L+(A^M&(b^A))+I[10]+38016083&4294967295,L=b+(R<<9&4294967295|R>>>23),R=M+(b^A&(L^b))+I[15]+3634488961&4294967295,M=L+(R<<14&4294967295|R>>>18),R=A+(L^b&(M^L))+I[4]+3889429448&4294967295,A=M+(R<<20&4294967295|R>>>12),R=b+(M^L&(A^M))+I[9]+568446438&4294967295,b=A+(R<<5&4294967295|R>>>27),R=L+(A^M&(b^A))+I[14]+3275163606&4294967295,L=b+(R<<9&4294967295|R>>>23),R=M+(b^A&(L^b))+I[3]+4107603335&4294967295,M=L+(R<<14&4294967295|R>>>18),R=A+(L^b&(M^L))+I[8]+1163531501&4294967295,A=M+(R<<20&4294967295|R>>>12),R=b+(M^L&(A^M))+I[13]+2850285829&4294967295,b=A+(R<<5&4294967295|R>>>27),R=L+(A^M&(b^A))+I[2]+4243563512&4294967295,L=b+(R<<9&4294967295|R>>>23),R=M+(b^A&(L^b))+I[7]+1735328473&4294967295,M=L+(R<<14&4294967295|R>>>18),R=A+(L^b&(M^L))+I[12]+2368359562&4294967295,A=M+(R<<20&4294967295|R>>>12),R=b+(A^M^L)+I[5]+4294588738&4294967295,b=A+(R<<4&4294967295|R>>>28),R=L+(b^A^M)+I[8]+2272392833&4294967295,L=b+(R<<11&4294967295|R>>>21),R=M+(L^b^A)+I[11]+1839030562&4294967295,M=L+(R<<16&4294967295|R>>>16),R=A+(M^L^b)+I[14]+4259657740&4294967295,A=M+(R<<23&4294967295|R>>>9),R=b+(A^M^L)+I[1]+2763975236&4294967295,b=A+(R<<4&4294967295|R>>>28),R=L+(b^A^M)+I[4]+1272893353&4294967295,L=b+(R<<11&4294967295|R>>>21),R=M+(L^b^A)+I[7]+4139469664&4294967295,M=L+(R<<16&4294967295|R>>>16),R=A+(M^L^b)+I[10]+3200236656&4294967295,A=M+(R<<23&4294967295|R>>>9),R=b+(A^M^L)+I[13]+681279174&4294967295,b=A+(R<<4&4294967295|R>>>28),R=L+(b^A^M)+I[0]+3936430074&4294967295,L=b+(R<<11&4294967295|R>>>21),R=M+(L^b^A)+I[3]+3572445317&4294967295,M=L+(R<<16&4294967295|R>>>16),R=A+(M^L^b)+I[6]+76029189&4294967295,A=M+(R<<23&4294967295|R>>>9),R=b+(A^M^L)+I[9]+3654602809&4294967295,b=A+(R<<4&4294967295|R>>>28),R=L+(b^A^M)+I[12]+3873151461&4294967295,L=b+(R<<11&4294967295|R>>>21),R=M+(L^b^A)+I[15]+530742520&4294967295,M=L+(R<<16&4294967295|R>>>16),R=A+(M^L^b)+I[2]+3299628645&4294967295,A=M+(R<<23&4294967295|R>>>9),R=b+(M^(A|~L))+I[0]+4096336452&4294967295,b=A+(R<<6&4294967295|R>>>26),R=L+(A^(b|~M))+I[7]+1126891415&4294967295,L=b+(R<<10&4294967295|R>>>22),R=M+(b^(L|~A))+I[14]+2878612391&4294967295,M=L+(R<<15&4294967295|R>>>17),R=A+(L^(M|~b))+I[5]+4237533241&4294967295,A=M+(R<<21&4294967295|R>>>11),R=b+(M^(A|~L))+I[12]+1700485571&4294967295,b=A+(R<<6&4294967295|R>>>26),R=L+(A^(b|~M))+I[3]+2399980690&4294967295,L=b+(R<<10&4294967295|R>>>22),R=M+(b^(L|~A))+I[10]+4293915773&4294967295,M=L+(R<<15&4294967295|R>>>17),R=A+(L^(M|~b))+I[1]+2240044497&4294967295,A=M+(R<<21&4294967295|R>>>11),R=b+(M^(A|~L))+I[8]+1873313359&4294967295,b=A+(R<<6&4294967295|R>>>26),R=L+(A^(b|~M))+I[15]+4264355552&4294967295,L=b+(R<<10&4294967295|R>>>22),R=M+(b^(L|~A))+I[6]+2734768916&4294967295,M=L+(R<<15&4294967295|R>>>17),R=A+(L^(M|~b))+I[13]+1309151649&4294967295,A=M+(R<<21&4294967295|R>>>11),R=b+(M^(A|~L))+I[4]+4149444226&4294967295,b=A+(R<<6&4294967295|R>>>26),R=L+(A^(b|~M))+I[11]+3174756917&4294967295,L=b+(R<<10&4294967295|R>>>22),R=M+(b^(L|~A))+I[2]+718787259&4294967295,M=L+(R<<15&4294967295|R>>>17),R=A+(L^(M|~b))+I[9]+3951481745&4294967295,V.g[0]=V.g[0]+b&4294967295,V.g[1]=V.g[1]+(M+(R<<21&4294967295|R>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+L&4294967295}a.prototype.u=function(V,b){b===void 0&&(b=V.length);for(var A=b-this.blockSize,I=this.B,M=this.h,L=0;L<b;){if(M==0)for(;L<=A;)l(this,V,L),L+=this.blockSize;if(typeof V=="string"){for(;L<b;)if(I[M++]=V.charCodeAt(L++),M==this.blockSize){l(this,I),M=0;break}}else for(;L<b;)if(I[M++]=V[L++],M==this.blockSize){l(this,I),M=0;break}}this.h=M,this.o+=b},a.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var b=1;b<V.length-8;++b)V[b]=0;var A=8*this.o;for(b=V.length-8;b<V.length;++b)V[b]=A&255,A/=256;for(this.u(V),V=Array(16),b=A=0;4>b;++b)for(var I=0;32>I;I+=8)V[A++]=this.g[b]>>>I&255;return V};function h(V,b){var A=p;return Object.prototype.hasOwnProperty.call(A,V)?A[V]:A[V]=b(V)}function d(V,b){this.h=b;for(var A=[],I=!0,M=V.length-1;0<=M;M--){var L=V[M]|0;I&&L==b||(A[M]=L,I=!1)}this.g=A}var p={};function g(V){return-128<=V&&128>V?h(V,function(b){return new d([b|0],0>b?-1:0)}):new d([V|0],0>V?-1:0)}function v(V){if(isNaN(V)||!isFinite(V))return D;if(0>V)return tt(v(-V));for(var b=[],A=1,I=0;V>=A;I++)b[I]=V/A|0,A*=4294967296;return new d(b,0)}function w(V,b){if(V.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(V.charAt(0)=="-")return tt(w(V.substring(1),b));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(b,8)),I=D,M=0;M<V.length;M+=8){var L=Math.min(8,V.length-M),R=parseInt(V.substring(M,M+L),b);8>L?(L=v(Math.pow(b,L)),I=I.j(L).add(v(R))):(I=I.j(A),I=I.add(v(R)))}return I}var D=g(0),B=g(1),K=g(16777216);r=d.prototype,r.m=function(){if(at(this))return-tt(this).m();for(var V=0,b=1,A=0;A<this.g.length;A++){var I=this.i(A);V+=(0<=I?I:4294967296+I)*b,b*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if($(this))return"0";if(at(this))return"-"+tt(this).toString(V);for(var b=v(Math.pow(V,6)),A=this,I="";;){var M=jt(A,b).g;A=Rt(A,M.j(b));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(V);if(A=M,$(A))return L+I;for(;6>L.length;)L="0"+L;I=L+I}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function $(V){if(V.h!=0)return!1;for(var b=0;b<V.g.length;b++)if(V.g[b]!=0)return!1;return!0}function at(V){return V.h==-1}r.l=function(V){return V=Rt(this,V),at(V)?-1:$(V)?0:1};function tt(V){for(var b=V.g.length,A=[],I=0;I<b;I++)A[I]=~V.g[I];return new d(A,~V.h).add(B)}r.abs=function(){return at(this)?tt(this):this},r.add=function(V){for(var b=Math.max(this.g.length,V.g.length),A=[],I=0,M=0;M<=b;M++){var L=I+(this.i(M)&65535)+(V.i(M)&65535),R=(L>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);I=R>>>16,L&=65535,R&=65535,A[M]=R<<16|L}return new d(A,A[A.length-1]&-2147483648?-1:0)};function Rt(V,b){return V.add(tt(b))}r.j=function(V){if($(this)||$(V))return D;if(at(this))return at(V)?tt(this).j(tt(V)):tt(tt(this).j(V));if(at(V))return tt(this.j(tt(V)));if(0>this.l(K)&&0>V.l(K))return v(this.m()*V.m());for(var b=this.g.length+V.g.length,A=[],I=0;I<2*b;I++)A[I]=0;for(I=0;I<this.g.length;I++)for(var M=0;M<V.g.length;M++){var L=this.i(I)>>>16,R=this.i(I)&65535,de=V.i(M)>>>16,oe=V.i(M)&65535;A[2*I+2*M]+=R*oe,dt(A,2*I+2*M),A[2*I+2*M+1]+=L*oe,dt(A,2*I+2*M+1),A[2*I+2*M+1]+=R*de,dt(A,2*I+2*M+1),A[2*I+2*M+2]+=L*de,dt(A,2*I+2*M+2)}for(I=0;I<b;I++)A[I]=A[2*I+1]<<16|A[2*I];for(I=b;I<2*b;I++)A[I]=0;return new d(A,0)};function dt(V,b){for(;(V[b]&65535)!=V[b];)V[b+1]+=V[b]>>>16,V[b]&=65535,b++}function Tt(V,b){this.g=V,this.h=b}function jt(V,b){if($(b))throw Error("division by zero");if($(V))return new Tt(D,D);if(at(V))return b=jt(tt(V),b),new Tt(tt(b.g),tt(b.h));if(at(b))return b=jt(V,tt(b)),new Tt(tt(b.g),b.h);if(30<V.g.length){if(at(V)||at(b))throw Error("slowDivide_ only works with positive integers.");for(var A=B,I=b;0>=I.l(V);)A=mt(A),I=mt(I);var M=Mt(A,1),L=Mt(I,1);for(I=Mt(I,2),A=Mt(A,2);!$(I);){var R=L.add(I);0>=R.l(V)&&(M=M.add(A),L=R),I=Mt(I,1),A=Mt(A,1)}return b=Rt(V,M.j(b)),new Tt(M,b)}for(M=D;0<=V.l(b);){for(A=Math.max(1,Math.floor(V.m()/b.m())),I=Math.ceil(Math.log(A)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),L=v(A),R=L.j(b);at(R)||0<R.l(V);)A-=I,L=v(A),R=L.j(b);$(L)&&(L=B),M=M.add(L),V=Rt(V,R)}return new Tt(M,V)}r.A=function(V){return jt(this,V).h},r.and=function(V){for(var b=Math.max(this.g.length,V.g.length),A=[],I=0;I<b;I++)A[I]=this.i(I)&V.i(I);return new d(A,this.h&V.h)},r.or=function(V){for(var b=Math.max(this.g.length,V.g.length),A=[],I=0;I<b;I++)A[I]=this.i(I)|V.i(I);return new d(A,this.h|V.h)},r.xor=function(V){for(var b=Math.max(this.g.length,V.g.length),A=[],I=0;I<b;I++)A[I]=this.i(I)^V.i(I);return new d(A,this.h^V.h)};function mt(V){for(var b=V.g.length+1,A=[],I=0;I<b;I++)A[I]=V.i(I)<<1|V.i(I-1)>>>31;return new d(A,V.h)}function Mt(V,b){var A=b>>5;b%=32;for(var I=V.g.length-A,M=[],L=0;L<I;L++)M[L]=0<b?V.i(L+A)>>>b|V.i(L+A+1)<<32-b:V.i(L+A);return new d(M,V.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=v,d.fromString=w,Jd=d}).apply(typeof g_<"u"?g_:typeof self<"u"?self:typeof window<"u"?window:{});var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var A0,ol,S0,uc,bd,b0,w0,R0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,y){return u==Array.prototype||u==Object.prototype||(u[m]=y.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof tc=="object"&&tc];for(var m=0;m<u.length;++m){var y=u[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var a=i(this);function l(u,m){if(m)t:{var y=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var k=u[T];if(!(k in y))break t;y=y[k]}u=u[u.length-1],T=y[u],m=m(T),m!=T&&m!=null&&t(y,u,{configurable:!0,writable:!0,value:m})}}function h(u,m){u instanceof String&&(u+="");var y=0,T=!1,k={next:function(){if(!T&&y<u.length){var z=y++;return{value:m(z,u[z]),done:!1}}return T=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}l("Array.prototype.values",function(u){return u||function(){return h(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},p=this||self;function g(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function v(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,y){return u.call.apply(u.bind,arguments)}function D(u,m,y){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,T),u.apply(m,k)}}return function(){return u.apply(m,arguments)}}function B(u,m,y){return B=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:D,B.apply(null,arguments)}function K(u,m){var y=Array.prototype.slice.call(arguments,1);return function(){var T=y.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function $(u,m){function y(){}y.prototype=m.prototype,u.aa=m.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(T,k,z){for(var X=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)X[Ct-2]=arguments[Ct];return m.prototype[k].apply(T,X)}}function at(u){const m=u.length;if(0<m){const y=Array(m);for(let T=0;T<m;T++)y[T]=u[T];return y}return[]}function tt(u,m){for(let y=1;y<arguments.length;y++){const T=arguments[y];if(g(T)){const k=u.length||0,z=T.length||0;u.length=k+z;for(let X=0;X<z;X++)u[k+X]=T[X]}else u.push(T)}}class Rt{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function dt(u){return/^[\s\xa0]*$/.test(u)}function Tt(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function jt(u){return jt[" "](u),u}jt[" "]=function(){};var mt=Tt().indexOf("Gecko")!=-1&&!(Tt().toLowerCase().indexOf("webkit")!=-1&&Tt().indexOf("Edge")==-1)&&!(Tt().indexOf("Trident")!=-1||Tt().indexOf("MSIE")!=-1)&&Tt().indexOf("Edge")==-1;function Mt(u,m,y){for(const T in u)m.call(y,u[T],T,u)}function V(u,m){for(const y in u)m.call(void 0,u[y],y,u)}function b(u){const m={};for(const y in u)m[y]=u[y];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(u,m){let y,T;for(let k=1;k<arguments.length;k++){T=arguments[k];for(y in T)u[y]=T[y];for(let z=0;z<A.length;z++)y=A[z],Object.prototype.hasOwnProperty.call(T,y)&&(u[y]=T[y])}}function M(u){var m=1;u=u.split(":");const y=[];for(;0<m&&u.length;)y.push(u.shift()),m--;return u.length&&y.push(u.join(":")),y}function L(u){p.setTimeout(()=>{throw u},0)}function R(){var u=Pt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class de{constructor(){this.h=this.g=null}add(m,y){const T=oe.get();T.set(m,y),this.h?this.h.next=T:this.g=T,this.h=T}}var oe=new Rt(()=>new Z,u=>u.reset());class Z{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,ot=!1,Pt=new de,C=()=>{const u=p.Promise.resolve(void 0);ct=()=>{u.then(Y)}};var Y=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(y){L(y)}var m=oe;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ot=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};p.addEventListener("test",y,m),p.removeEventListener("test",y,m)}catch{}return u}();function _t(u,m){if(W.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(mt){t:{try{jt(m.nodeName);var k=!0;break t}catch{}k=!1}k||(m=null)}}else y=="mouseover"?m=u.fromElement:y=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:pt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&_t.aa.h.call(this)}}$(_t,W);var pt={2:"touch",3:"pen",4:"mouse"};_t.prototype.h=function(){_t.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),Vt=0;function Wt(u,m,y,T,k){this.listener=u,this.proxy=null,this.src=m,this.type=y,this.capture=!!T,this.ha=k,this.key=++Vt,this.da=this.fa=!1}function zt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Fe(u){this.src=u,this.g={},this.h=0}Fe.prototype.add=function(u,m,y,T,k){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var X=mn(u,m,T,k);return-1<X?(m=u[X],y||(m.fa=!1)):(m=new Wt(m,this.src,z,!!T,k),m.fa=y,u.push(m)),m};function mi(u,m){var y=m.type;if(y in u.g){var T=u.g[y],k=Array.prototype.indexOf.call(T,m,void 0),z;(z=0<=k)&&Array.prototype.splice.call(T,k,1),z&&(zt(m),u.g[y].length==0&&(delete u.g[y],u.h--))}}function mn(u,m,y,T){for(var k=0;k<u.length;++k){var z=u[k];if(!z.da&&z.listener==m&&z.capture==!!y&&z.ha==T)return k}return-1}var Qi="closure_lm_"+(1e6*Math.random()|0),Xi={};function pi(u,m,y,T,k){if(Array.isArray(m)){for(var z=0;z<m.length;z++)pi(u,m[z],y,T,k);return null}return y=Ml(y),u&&u[le]?u.K(m,y,v(T)?!!T.capture:!1,k):$a(u,m,y,!1,T,k)}function $a(u,m,y,T,k,z){if(!m)throw Error("Invalid event type");var X=v(k)?!!k.capture:!!k,Ct=Za(u);if(Ct||(u[Qi]=Ct=new Fe(u)),y=Ct.add(m,y,T,X,z),y.proxy)return y;if(T=Hs(),y.proxy=T,T.src=u,T.listener=y,u.addEventListener)J||(k=X),k===void 0&&(k=!1),u.addEventListener(m.toString(),T,k);else if(u.attachEvent)u.attachEvent(Gs(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Hs(){function u(y){return m.call(u.src,u.listener,y)}const m=$c;return u}function qs(u,m,y,T,k){if(Array.isArray(m))for(var z=0;z<m.length;z++)qs(u,m[z],y,T,k);else T=v(T)?!!T.capture:!!T,y=Ml(y),u&&u[le]?(u=u.i,m=String(m).toString(),m in u.g&&(z=u.g[m],y=mn(z,y,T,k),-1<y&&(zt(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[m],u.h--)))):u&&(u=Za(u))&&(m=u.g[m.toString()],u=-1,m&&(u=mn(m,y,T,k)),(y=-1<u?m[u]:null)&&Kr(y))}function Kr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[le])mi(m.i,u);else{var y=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(y,T,u.capture):m.detachEvent?m.detachEvent(Gs(y),T):m.addListener&&m.removeListener&&m.removeListener(T),(y=Za(m))?(mi(y,u),y.h==0&&(y.src=null,m[Qi]=null)):zt(u)}}}function Gs(u){return u in Xi?Xi[u]:Xi[u]="on"+u}function $c(u,m){if(u.da)u=!0;else{m=new _t(m,this);var y=u.listener,T=u.ha||u.src;u.fa&&Kr(u),u=y.call(T,m)}return u}function Za(u){return u=u[Qi],u instanceof Fe?u:null}var We="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ml(u){return typeof u=="function"?u:(u[We]||(u[We]=function(m){return u.handleEvent(m)}),u[We])}function me(){rt.call(this),this.i=new Fe(this),this.M=this,this.F=null}$(me,rt),me.prototype[le]=!0,me.prototype.removeEventListener=function(u,m,y,T){qs(this,u,m,y,T)};function Ee(u,m){var y,T=u.F;if(T)for(y=[];T;T=T.F)y.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new W(m,u);else if(m instanceof W)m.target=m.target||u;else{var k=m;m=new W(T,u),I(m,k)}if(k=!0,y)for(var z=y.length-1;0<=z;z--){var X=m.g=y[z];k=gi(X,T,!0,m)&&k}if(X=m.g=u,k=gi(X,T,!0,m)&&k,k=gi(X,T,!1,m)&&k,y)for(z=0;z<y.length;z++)X=m.g=y[z],k=gi(X,T,!1,m)&&k}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var y=u.g[m],T=0;T<y.length;T++)zt(y[T]);delete u.g[m],u.h--}}this.F=null},me.prototype.K=function(u,m,y,T){return this.i.add(String(u),m,!1,y,T)},me.prototype.L=function(u,m,y,T){return this.i.add(String(u),m,!0,y,T)};function gi(u,m,y,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var k=!0,z=0;z<m.length;++z){var X=m[z];if(X&&!X.da&&X.capture==y){var Ct=X.listener,ge=X.ha||X.src;X.fa&&mi(u.i,X),k=Ct.call(ge,T)!==!1&&k}}return k&&!T.defaultPrevented}function Vl(u,m,y){if(typeof u=="function")y&&(u=B(u,y));else if(u&&typeof u.handleEvent=="function")u=B(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(u,m||0)}function Wa(u){u.g=Vl(()=>{u.g=null,u.i&&(u.i=!1,Wa(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Zc extends rt{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Wa(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yr(u){rt.call(this),this.h=u,this.g={}}$(Yr,rt);var $i=[];function xe(u){Mt(u.g,function(m,y){this.g.hasOwnProperty(y)&&Kr(m)},u),u.g={}}Yr.prototype.N=function(){Yr.aa.N.call(this),xe(this)},Yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ja=p.JSON.stringify,Fn=p.JSON.parse,Ke=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function to(){}to.prototype.h=null;function Ul(u){return u.h||(u.h=u.i())}function kl(){}var Kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zi(){W.call(this,"d")}$(Zi,W);function Vn(){W.call(this,"c")}$(Vn,W);var pn={},Wi=null;function Fs(){return Wi=Wi||new me}pn.La="serverreachability";function eo(u){W.call(this,pn.La,u)}$(eo,W);function Ji(u){const m=Fs();Ee(m,new eo(m))}pn.STAT_EVENT="statevent";function Ks(u,m){W.call(this,pn.STAT_EVENT,u),this.stat=m}$(Ks,W);function se(u){const m=Fs();Ee(m,new Ks(m,u))}pn.Ma="timingevent";function Ll(u,m){W.call(this,pn.Ma,u),this.size=m}$(Ll,W);function tr(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},m)}function er(){this.g=!0}er.prototype.xa=function(){this.g=!1};function Pl(u,m,y,T,k,z){u.info(function(){if(u.g)if(z)for(var X="",Ct=z.split("&"),ge=0;ge<Ct.length;ge++){var Ot=Ct[ge].split("=");if(1<Ot.length){var Se=Ot[0];Ot=Ot[1];var ye=Se.split("_");X=2<=ye.length&&ye[1]=="type"?X+(Se+"="+Ot+"&"):X+(Se+"=redacted&")}}else X=null;else X=z;return"XMLHTTP REQ ("+T+") [attempt "+k+"]: "+m+`
`+y+`
`+X})}function xl(u,m,y,T,k,z,X){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+k+"]: "+m+`
`+y+`
`+z+" "+X})}function nr(u,m,y,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Te(u,y)+(T?" "+T:"")})}function Yn(u,m){u.info(function(){return"TIMEOUT: "+m})}er.prototype.info=function(){};function Te(u,m){if(!u.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var T=y[u];if(!(2>T.length)){var k=T[1];if(Array.isArray(k)&&!(1>k.length)){var z=k[0];if(z!="noop"&&z!="stop"&&z!="close")for(var X=1;X<k.length;X++)k[X]=""}}}}return Ja(y)}catch{return m}}var pe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qr;function Ys(){}$(Ys,to),Ys.prototype.g=function(){return new XMLHttpRequest},Ys.prototype.i=function(){return{}},Qr=new Ys;function Qn(u,m,y,T){this.j=u,this.i=m,this.l=y,this.R=T||1,this.U=new Yr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new no}function no(){this.i=null,this.g="",this.h=!1}var ir={},Xr={};function Un(u,m,y){u.L=1,u.v=Wr(Jt(m)),u.m=y,u.P=!0,_i(u,null)}function _i(u,m){u.F=Date.now(),Xt(u),u.A=Jt(u.v);var y=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Ti(y.i,"t",T),u.C=0,y=u.j.J,u.h=new no,u.g=Wl(u.j,y?m:null,!u.m),0<u.O&&(u.M=new Zc(B(u.Y,u,u.g),u.O)),m=u.U,y=u.g,T=u.ca;var k="readystatechange";Array.isArray(k)||(k&&($i[0]=k.toString()),k=$i);for(var z=0;z<k.length;z++){var X=pi(y,k[z],T||m.handleEvent,!1,m.h||m);if(!X)break;m.g[X.key]=X}m=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Ji(),Pl(u.i,u.u,u.A,u.l,u.R,u.m)}Qn.prototype.ca=function(u){u=u.target;const m=this.M;m&&En(u)==3?m.j():this.Y(u)},Qn.prototype.Y=function(u){try{if(u==this.g)t:{const ye=En(this.g);var m=this.g.Ba();const wi=this.g.Z();if(!(3>ye)&&(ye!=3||this.g&&(this.h.h||this.g.oa()||Gl(this.g)))){this.J||ye!=4||m==7||(m==8||0>=wi?Ji(3):Ji(2)),Qs(this);var y=this.g.Z();this.X=y;e:if(rr(this)){var T=Gl(this.g);u="";var k=T.length,z=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Je(this),sn(this);var X="";break e}this.h.i=new p.TextDecoder}for(m=0;m<k;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(z&&m==k-1)});T.length=0,this.h.g+=u,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=y==200,xl(this.i,this.u,this.A,this.l,this.R,ye,y),this.o){if(this.T&&!this.K){e:{if(this.g){var Ct,ge=this.g;if((Ct=ge.g?ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dt(Ct)){var Ot=Ct;break e}}Ot=null}if(y=Ot)nr(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,an(this,y);else{this.o=!1,this.s=3,se(12),Je(this),sn(this);break t}}if(this.P){y=!0;let De;for(;!this.J&&this.C<X.length;)if(De=sr(this,X),De==Xr){ye==4&&(this.s=4,se(14),y=!1),nr(this.i,this.l,null,"[Incomplete Response]");break}else if(De==ir){this.s=4,se(15),nr(this.i,this.l,X,"[Invalid Chunk]"),y=!1;break}else nr(this.i,this.l,De,null),an(this,De);if(rr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ye!=4||X.length!=0||this.h.h||(this.s=1,se(16),y=!1),this.o=this.o&&y,!y)nr(this.i,this.l,X,"[Invalid Chunked Response]"),Je(this),sn(this);else if(0<X.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),ss(Se),Se.M=!0,se(11))}}else nr(this.i,this.l,X,null),an(this,X);ye==4&&Je(this),this.o&&!this.J&&(ye==4?Xl(this.j,this):(this.o=!1,Xt(this)))}else ih(this.g),y==400&&0<X.indexOf("Unknown SID")?(this.s=3,se(12)):(this.s=0,se(13)),Je(this),sn(this)}}}catch{}finally{}};function rr(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function sr(u,m){var y=u.C,T=m.indexOf(`
`,y);return T==-1?Xr:(y=Number(m.substring(y,T)),isNaN(y)?ir:(T+=1,T+y>m.length?Xr:(m=m.slice(T,T+y),u.C=T+y,m)))}Qn.prototype.cancel=function(){this.J=!0,Je(this)};function Xt(u){u.S=Date.now()+u.I,io(u,u.I)}function io(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=tr(B(u.ba,u),m)}function Qs(u){u.B&&(p.clearTimeout(u.B),u.B=null)}Qn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Yn(this.i,this.A),this.L!=2&&(Ji(),se(17)),Je(this),this.s=2,sn(this)):io(this,this.S-u)};function sn(u){u.j.G==0||u.J||Xl(u.j,u)}function Je(u){Qs(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,xe(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function an(u,m){try{var y=u.j;if(y.G!=0&&(y.g==u||ar(y.h,u))){if(!u.K&&ar(y.h,u)&&y.G==3){try{var T=y.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var k=T;if(k[0]==0){t:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)ra(y),na(y);else break t;po(y),se(18)}}else y.za=k[1],0<y.za-y.T&&37500>k[2]&&y.F&&y.v==0&&!y.C&&(y.C=tr(B(y.Za,y),6e3));if(1>=zl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else bi(y,11)}else if((u.K||y.g==u)&&ra(y),!dt(m))for(k=y.Da.g.parse(m),m=0;m<k.length;m++){let Ot=k[m];if(y.T=Ot[0],Ot=Ot[1],y.G==2)if(Ot[0]=="c"){y.K=Ot[1],y.ia=Ot[2];const Se=Ot[3];Se!=null&&(y.la=Se,y.j.info("VER="+y.la));const ye=Ot[4];ye!=null&&(y.Aa=ye,y.j.info("SVER="+y.Aa));const wi=Ot[5];wi!=null&&typeof wi=="number"&&0<wi&&(T=1.5*wi,y.L=T,y.j.info("backChannelRequestTimeoutMs_="+T)),T=y;const De=u.g;if(De){const ei=De.g?De.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ei){var z=T.h;z.g||ei.indexOf("spdy")==-1&&ei.indexOf("quic")==-1&&ei.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(or(z,z.h),z.h=null))}if(T.D){const yo=De.g?De.g.getResponseHeader("X-HTTP-Session-Id"):null;yo&&(T.ya=yo,Ut(T.I,T.D,yo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),T=y;var X=u;if(T.qa=Zl(T,T.J?T.ia:null,T.W),X.K){gn(T.h,X);var Ct=X,ge=T.L;ge&&(Ct.I=ge),Ct.B&&(Qs(Ct),Xt(Ct)),T.g=X}else Yl(T);0<y.i.length&&ia(y)}else Ot[0]!="stop"&&Ot[0]!="close"||bi(y,7);else y.G==3&&(Ot[0]=="stop"||Ot[0]=="close"?Ot[0]=="stop"?bi(y,7):fo(y):Ot[0]!="noop"&&y.l&&y.l.ta(Ot),y.v=0)}}Ji(4)}catch{}}var Wc=class{constructor(u,m){this.g=u,this.map=m}};function ro(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function so(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function zl(u){return u.h?1:u.g?u.g.size:0}function ar(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function or(u,m){u.g?u.g.add(m):u.h=m}function gn(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ro.prototype.cancel=function(){if(this.i=Ye(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ye(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const y of u.g.values())m=m.concat(y.D);return m}return at(u.i)}function Bl(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var m=[],y=u.length,T=0;T<y;T++)m.push(u[T]);return m}m=[],y=0;for(T in u)m[y++]=u[T];return m}function Jc(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var m=[];u=u.length;for(var y=0;y<u;y++)m.push(y);return m}m=[],y=0;for(const T in u)m[y++]=T;return m}}}function $r(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var y=Jc(u),T=Bl(u),k=T.length,z=0;z<k;z++)m.call(void 0,T[z],y&&y[z],u)}var ao=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xs(u,m){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var T=u[y].indexOf("="),k=null;if(0<=T){var z=u[y].substring(0,T);k=u[y].substring(T+1)}else z=u[y];m(z,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function vi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof vi){this.h=u.h,lr(this,u.j),this.o=u.o,this.g=u.g,Zr(this,u.s),this.l=u.l;var m=u.i,y=new Xn;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),$s(this,y),this.m=u.m}else u&&(m=String(u).match(ao))?(this.h=!1,lr(this,m[1]||"",!0),this.o=ur(m[2]||""),this.g=ur(m[3]||"",!0),Zr(this,m[4]),this.l=ur(m[5]||"",!0),$s(this,m[6]||"",!0),this.m=ur(m[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}vi.prototype.toString=function(){var u=[],m=this.j;m&&u.push(yn(m,oo,!0),":");var y=this.g;return(y||m=="file")&&(u.push("//"),(m=this.o)&&u.push(yn(m,oo,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(yn(y,y.charAt(0)=="/"?lo:jl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",yn(y,nh)),u.join("")};function Jt(u){return new vi(u)}function lr(u,m,y){u.j=y?ur(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Zr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function $s(u,m,y){m instanceof Xn?(u.i=m,uo(u.i,u.h)):(y||(m=yn(m,eh)),u.i=new Xn(m,u.h))}function Ut(u,m,y){u.i.set(m,y)}function Wr(u){return Ut(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ur(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function yn(u,m,y){return typeof u=="string"?(u=encodeURI(u).replace(m,th),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function th(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var oo=/[#\/\?@]/g,jl=/[#\?:]/g,lo=/[#\?]/g,eh=/[#\?@]/g,nh=/#/g;function Xn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function _n(u){u.g||(u.g=new Map,u.h=0,u.i&&Xs(u.i,function(m,y){u.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}r=Xn.prototype,r.add=function(u,m){_n(this),this.i=null,u=Ai(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(m),this.h+=1,this};function Zs(u,m){_n(u),m=Ai(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Ei(u,m){return _n(u),m=Ai(u,m),u.g.has(m)}r.forEach=function(u,m){_n(this),this.g.forEach(function(y,T){y.forEach(function(k){u.call(m,k,T,this)},this)},this)},r.na=function(){_n(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let T=0;T<m.length;T++){const k=u[T];for(let z=0;z<k.length;z++)y.push(m[T])}return y},r.V=function(u){_n(this);let m=[];if(typeof u=="string")Ei(this,u)&&(m=m.concat(this.g.get(Ai(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)m=m.concat(u[y])}return m},r.set=function(u,m){return _n(this),this.i=null,u=Ai(this,u),Ei(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Ti(u,m,y){Zs(u,m),0<y.length&&(u.i=null,u.g.set(Ai(u,m),at(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var T=m[y];const z=encodeURIComponent(String(T)),X=this.V(T);for(T=0;T<X.length;T++){var k=z;X[T]!==""&&(k+="="+encodeURIComponent(String(X[T]))),u.push(k)}}return this.i=u.join("&")};function Ai(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function uo(u,m){m&&!u.j&&(_n(u),u.i=null,u.g.forEach(function(y,T){var k=T.toLowerCase();T!=k&&(Zs(this,T),Ti(this,k,y))},u)),u.j=m}function Hl(u,m){const y=new er;if(p.Image){const T=new Image;T.onload=K(vn,y,"TestLoadImage: loaded",!0,m,T),T.onerror=K(vn,y,"TestLoadImage: error",!1,m,T),T.onabort=K(vn,y,"TestLoadImage: abort",!1,m,T),T.ontimeout=K(vn,y,"TestLoadImage: timeout",!1,m,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Jr(u,m){const y=new er,T=new AbortController,k=setTimeout(()=>{T.abort(),vn(y,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(z=>{clearTimeout(k),z.ok?vn(y,"TestPingServer: ok",!0,m):vn(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(k),vn(y,"TestPingServer: error",!1,m)})}function vn(u,m,y,T,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),T(y)}catch{}}function ts(){this.g=new Ke}function $n(u,m,y){const T=y||"";try{$r(u,function(k,z){let X=k;v(k)&&(X=Ja(k)),m.push(T+z+"="+encodeURIComponent(X))})}catch(k){throw m.push(T+"type="+encodeURIComponent("_badmap")),k}}function cr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(cr,to),cr.prototype.g=function(){return new Si(this.l,this.j)},cr.prototype.i=function(u){return function(){return u}}({});function Si(u,m){me.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Si,me),r=Si.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Wn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;co(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function co(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Zn(this):Wn(this),this.readyState==3&&co(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Zn(this))},r.Qa=function(u){this.g&&(this.response=u,Zn(this))},r.ga=function(){this.g&&Zn(this)};function Zn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Wn(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=m.next();return u.join(`\r
`)};function Wn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function ho(u){let m="";return Mt(u,function(y,T){m+=T,m+=":",m+=y,m+=`\r
`}),m}function Ae(u,m,y){t:{for(T in y){var T=!1;break t}T=!0}T||(y=ho(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):Ut(u,m,y))}function xt(u){me.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(xt,me);var Ws=/^https?$/i,es=["POST","PUT"];r=xt.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,y,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qr.g(),this.v=this.o?Ul(this.o):Ul(Qr),this.g.onreadystatechange=B(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(z){ql(this,z);return}if(u=y||"",y=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var k in T)y.set(k,T[k]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const z of T.keys())y.set(z,T.get(z));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),k=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(es,m,void 0))||T||k||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,X]of y)this.g.setRequestHeader(z,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ns(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){ql(this,z)}};function ql(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Js(u),Jn(u)}function Js(u){u.A||(u.A=!0,Ee(u,"complete"),Ee(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ee(this,"complete"),Ee(this,"abort"),Jn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jn(this,!0)),xt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},r.bb=function(){ta(this)};function ta(u){if(u.h&&typeof d<"u"&&(!u.v[1]||En(u)!=4||u.Z()!=2)){if(u.u&&En(u)==4)Vl(u.Ea,0,u);else if(Ee(u,"readystatechange"),En(u)==4){u.h=!1;try{const X=u.Z();t:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var y;if(!(y=m)){var T;if(T=X===0){var k=String(u.D).match(ao)[1]||null;!k&&p.self&&p.self.location&&(k=p.self.location.protocol.slice(0,-1)),T=!Ws.test(k?k.toLowerCase():"")}y=T}if(y)Ee(u,"complete"),Ee(u,"success");else{u.m=6;try{var z=2<En(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",Js(u)}}finally{Jn(u)}}}}function Jn(u,m){if(u.g){ns(u);const y=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Ee(u,"ready");try{y.onreadystatechange=T}catch{}}}function ns(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function En(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Fn(m)}};function Gl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ih(u){const m={};u=(u.g&&2<=En(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(dt(u[T]))continue;var y=M(u[T]);const k=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=m[k]||[];m[k]=z,z.push(y)}V(m,function(T){return T.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function is(u,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||m}function ea(u){this.Aa=0,this.i=[],this.j=new er,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=is("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=is("baseRetryDelayMs",5e3,u),this.cb=is("retryDelaySeedMs",1e4,u),this.Wa=is("forwardChannelMaxRetries",2,u),this.wa=is("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ro(u&&u.concurrentRequestLimit),this.Da=new ts,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ea.prototype,r.la=8,r.G=1,r.connect=function(u,m,y,T){se(0),this.W=u,this.H=m||{},y&&T!==void 0&&(this.H.OSID=y,this.H.OAID=T),this.F=this.X,this.I=Zl(this,null,this.W),ia(this)};function fo(u){if(Fl(u),u.G==3){var m=u.U++,y=Jt(u.I);if(Ut(y,"SID",u.K),Ut(y,"RID",m),Ut(y,"TYPE","terminate"),rs(u,y),m=new Qn(u,u.j,m),m.L=2,m.v=Wr(Jt(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=m.v,y=!0),y||(m.g=Wl(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Xt(m)}$l(u)}function na(u){u.g&&(ss(u),u.g.cancel(),u.g=null)}function Fl(u){na(u),u.u&&(p.clearTimeout(u.u),u.u=null),ra(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function ia(u){if(!so(u.h)&&!u.s){u.s=!0;var m=u.Ga;ct||C(),ot||(ct(),ot=!0),Pt.add(m,u),u.B=0}}function rh(u,m){return zl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=tr(B(u.Ga,u,m),go(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const k=new Qn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=b(z),I(z,this.S)):z=this.S),this.m!==null||this.O||(k.H=z,z=null),this.P)t:{for(var m=0,y=0;y<this.i.length;y++){e:{var T=this.i[y];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=y;break t}if(m===4096||y===this.i.length-1){m=y+1;break t}}m=1e3}else m=1e3;m=Kl(this,k,m),y=Jt(this.I),Ut(y,"RID",u),Ut(y,"CVER",22),this.D&&Ut(y,"X-HTTP-Session-Id",this.D),rs(this,y),z&&(this.O?m="headers="+encodeURIComponent(String(ho(z)))+"&"+m:this.m&&Ae(y,this.m,z)),or(this.h,k),this.Ua&&Ut(y,"TYPE","init"),this.P?(Ut(y,"$req",m),Ut(y,"SID","null"),k.T=!0,Un(k,y,null)):Un(k,y,m),this.G=2}}else this.G==3&&(u?mo(this,u):this.i.length==0||so(this.h)||mo(this))};function mo(u,m){var y;m?y=m.l:y=u.U++;const T=Jt(u.I);Ut(T,"SID",u.K),Ut(T,"RID",y),Ut(T,"AID",u.T),rs(u,T),u.m&&u.o&&Ae(T,u.m,u.o),y=new Qn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Kl(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),or(u.h,y),Un(y,T,m)}function rs(u,m){u.H&&Mt(u.H,function(y,T){Ut(m,T,y)}),u.l&&$r({},function(y,T){Ut(m,T,y)})}function Kl(u,m,y){y=Math.min(u.i.length,y);var T=u.l?B(u.l.Na,u.l,u):null;t:{var k=u.i;let z=-1;for(;;){const X=["count="+y];z==-1?0<y?(z=k[0].g,X.push("ofs="+z)):z=0:X.push("ofs="+z);let Ct=!0;for(let ge=0;ge<y;ge++){let Ot=k[ge].g;const Se=k[ge].map;if(Ot-=z,0>Ot)z=Math.max(0,k[ge].g-100),Ct=!1;else try{$n(Se,X,"req"+Ot+"_")}catch{T&&T(Se)}}if(Ct){T=X.join("&");break t}}}return u=u.i.splice(0,y),m.D=u,T}function Yl(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ct||C(),ot||(ct(),ot=!0),Pt.add(m,u),u.v=0}}function po(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=tr(B(u.Fa,u),go(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Ql(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=tr(B(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,se(10),na(this),Ql(this))};function ss(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function Ql(u){u.g=new Qn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=Jt(u.qa);Ut(m,"RID","rpc"),Ut(m,"SID",u.K),Ut(m,"AID",u.T),Ut(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ut(m,"TO",u.ja),Ut(m,"TYPE","xmlhttp"),rs(u,m),u.m&&u.o&&Ae(m,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Wr(Jt(m)),y.m=null,y.P=!0,_i(y,u)}r.Za=function(){this.C!=null&&(this.C=null,na(this),po(this),se(19))};function ra(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Xl(u,m){var y=null;if(u.g==m){ra(u),ss(u),u.g=null;var T=2}else if(ar(u.h,m))y=m.D,gn(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var k=u.B;T=Fs(),Ee(T,new Ll(T,y)),ia(u)}else Yl(u);else if(k=m.s,k==3||k==0&&0<m.X||!(T==1&&rh(u,m)||T==2&&po(u)))switch(y&&0<y.length&&(m=u.h,m.i=m.i.concat(y)),k){case 1:bi(u,5);break;case 4:bi(u,10);break;case 3:bi(u,6);break;default:bi(u,2)}}}function go(u,m){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*m}function bi(u,m){if(u.j.info("Error code "+m),m==2){var y=B(u.fb,u),T=u.Xa;const k=!T;T=new vi(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||lr(T,"https"),Wr(T),k?Hl(T.toString(),y):Jr(T.toString(),y)}else se(2);u.G=0,u.l&&u.l.sa(m),$l(u),Fl(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),se(2)):(this.j.info("Failed to ping google.com"),se(1))};function $l(u){if(u.G=0,u.ka=[],u.l){const m=Ye(u.h);(m.length!=0||u.i.length!=0)&&(tt(u.ka,m),tt(u.ka,u.i),u.h.i.length=0,at(u.i),u.i.length=0),u.l.ra()}}function Zl(u,m,y){var T=y instanceof vi?Jt(y):new vi(y);if(T.g!="")m&&(T.g=m+"."+T.g),Zr(T,T.s);else{var k=p.location;T=k.protocol,m=m?m+"."+k.hostname:k.hostname,k=+k.port;var z=new vi(null);T&&lr(z,T),m&&(z.g=m),k&&Zr(z,k),y&&(z.l=y),T=z}return y=u.D,m=u.ya,y&&m&&Ut(T,y,m),Ut(T,"VER",u.la),rs(u,T),T}function Wl(u,m,y){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new xt(new cr({eb:y})):new xt(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jl(){}r=Jl.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function sa(){}sa.prototype.g=function(u,m){return new Qe(u,m)};function Qe(u,m){me.call(this),this.g=new ea(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!dt(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!dt(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ti(this)}$(Qe,me),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){fo(this.g)},Qe.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Ja(u),u=y);m.i.push(new Wc(m.Ya++,u)),m.G==3&&ia(m)},Qe.prototype.N=function(){this.g.l=null,delete this.j,fo(this.g),delete this.g,Qe.aa.N.call(this)};function tu(u){Zi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const y in m){u=y;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(tu,Zi);function eu(){Vn.call(this),this.status=1}$(eu,Vn);function ti(u){this.g=u}$(ti,Jl),ti.prototype.ua=function(){Ee(this.g,"a")},ti.prototype.ta=function(u){Ee(this.g,new tu(u))},ti.prototype.sa=function(u){Ee(this.g,new eu)},ti.prototype.ra=function(){Ee(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,R0=function(){return new sa},w0=function(){return Fs()},b0=pn,bd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pe.NO_ERROR=0,pe.TIMEOUT=8,pe.HTTP_ERROR=6,uc=pe,yi.COMPLETE="complete",S0=yi,kl.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",me.prototype.listen=me.prototype.K,ol=kl,xt.prototype.listenOnce=xt.prototype.L,xt.prototype.getLastError=xt.prototype.Ka,xt.prototype.getLastErrorCode=xt.prototype.Ba,xt.prototype.getStatus=xt.prototype.Z,xt.prototype.getResponseJson=xt.prototype.Oa,xt.prototype.getResponseText=xt.prototype.oa,xt.prototype.send=xt.prototype.ea,xt.prototype.setWithCredentials=xt.prototype.Ha,A0=xt}).apply(typeof tc<"u"?tc:typeof self<"u"?self:typeof window<"u"?window:{});const y_="@firebase/firestore",__="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new kc("@firebase/firestore");function Ma(){return Vs.logLevel}function nt(r,...t){if(Vs.logLevel<=wt.DEBUG){const i=t.map(tm);Vs.debug(`Firestore (${Qa}): ${r}`,...i)}}function Us(r,...t){if(Vs.logLevel<=wt.ERROR){const i=t.map(tm);Vs.error(`Firestore (${Qa}): ${r}`,...i)}}function jc(r,...t){if(Vs.logLevel<=wt.WARN){const i=t.map(tm);Vs.warn(`Firestore (${Qa}): ${r}`,...i)}}function tm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(r="Unexpected state"){const t=`FIRESTORE (${Qa}) INTERNAL ASSERTION FAILED: `+r;throw Us(t),new Error(t)}function re(r,t){r||bt()}function Yt(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ht extends Gn{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class C2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(He.UNAUTHENTICATED))}shutdown(){}}class O2{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class D2{constructor(t){this.t=t,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){re(this.o===void 0);let a=this.i;const l=g=>this.i!==a?(a=this.i,i(g)):Promise.resolve();let h=new Is;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Is,t.enqueueRetryable(()=>l(this.currentUser))};const d=()=>{const g=h;t.enqueueRetryable(async()=>{await g.promise,await l(this.currentUser)})},p=g=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Is)}},0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(a=>this.i!==t?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(re(typeof a.accessToken=="string"),new I0(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return re(t===null||typeof t=="string"),new He(t)}}class N2{constructor(t,i,a){this.l=t,this.h=i,this.P=a,this.type="FirstParty",this.user=He.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class M2{constructor(t,i,a){this.l=t,this.h=i,this.P=a}getToken(){return Promise.resolve(new N2(this.l,this.h,this.P))}start(t,i){t.enqueueRetryable(()=>i(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class v_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V2{constructor(t,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Nn(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,i){re(this.o===void 0);const a=h=>{h.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const d=h.token!==this.R;return this.R=h.token,nt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(h.token):Promise.resolve()};this.o=h=>{t.enqueueRetryable(()=>a(h))};const l=h=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(h=>l(h)),setTimeout(()=>{if(!this.appCheck){const h=this.A.getImmediate({optional:!0});h?l(h):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new v_(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(i=>i?(re(typeof i.token=="string"),this.R=i.token,new v_(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<r;a++)i[a]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=U2(40);for(let h=0;h<l.length;++h)a.length<20&&l[h]<i&&(a+=t.charAt(l[h]%62))}return a}}function Bt(r,t){return r<t?-1:r>t?1:0}function Ba(r,t,i){return r.length===t.length&&r.every((a,l)=>i(a,t[l]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=-62135596800,T_=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(t){return Oe.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*T_);return new Oe(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new ht(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ht(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<E_)throw new ht(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ht(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/T_}_compareTo(t){return this.seconds===t.seconds?Bt(this.nanoseconds,t.nanoseconds):Bt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-E_;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{static fromTimestamp(t){return new Qt(t)}static min(){return new Qt(new Oe(0,0))}static max(){return new Qt(new Oe(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="__name__";class oi{constructor(t,i,a){i===void 0?i=0:i>t.length&&bt(),a===void 0?a=t.length-i:a>t.length-i&&bt(),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return oi.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof oi?t.forEach(a=>{i.push(a)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let l=0;l<a;l++){const h=oi.compareSegments(t.get(l),i.get(l));if(h!==0)return h}return Math.sign(t.length-i.length)}static compareSegments(t,i){const a=oi.isNumericId(t),l=oi.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?oi.extractNumericId(t).compare(oi.extractNumericId(i)):t<i?-1:t>i?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jd.fromString(t.substring(4,t.length-2))}}class ie extends oi{construct(t,i,a){return new ie(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new ht(Q.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter(l=>l.length>0))}return new ie(i)}static emptyPath(){return new ie([])}}const k2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends oi{construct(t,i,a){return new Le(t,i,a)}static isValidIdentifier(t){return k2.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===A_}static keyField(){return new Le([A_])}static fromServerFormat(t){const i=[];let a="",l=0;const h=()=>{if(a.length===0)throw new ht(Q.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new ht(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[l+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ht(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=g,l+=2}else p==="`"?(d=!d,l++):p!=="."||d?(a+=p,l++):(h(),l++)}if(h(),d)throw new ht(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Le(i)}static emptyPath(){return new Le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.path=t}static fromPath(t){return new vt(ie.fromString(t))}static fromName(t){return new vt(ie.fromString(t).popFirst(5))}static empty(){return new vt(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ie.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return ie.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new vt(new ie(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=-1;function L2(r,t){const i=r.toTimestamp().seconds,a=r.toTimestamp().nanoseconds+1,l=Qt.fromTimestamp(a===1e9?new Oe(i+1,0):new Oe(i,a));return new Br(l,vt.empty(),t)}function P2(r){return new Br(r.readTime,r.key,yl)}class Br{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new Br(Qt.min(),vt.empty(),yl)}static max(){return new Br(Qt.max(),vt.empty(),yl)}}function x2(r,t){let i=r.readTime.compareTo(t.readTime);return i!==0?i:(i=vt.comparator(r.documentKey,t.documentKey),i!==0?i:Bt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class B2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==z2)throw r;nt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&bt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new G((a,l)=>{this.nextCallback=h=>{this.wrapSuccess(t,h).next(a,l)},this.catchCallback=h=>{this.wrapFailure(i,h).next(a,l)}})}toPromise(){return new Promise((t,i)=>{this.next(t,i)})}wrapUserFunction(t){try{const i=t();return i instanceof G?i:G.resolve(i)}catch(i){return G.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction(()=>t(i)):G.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction(()=>t(i)):G.reject(i)}static resolve(t){return new G((i,a)=>{i(t)})}static reject(t){return new G((i,a)=>{a(t)})}static waitFor(t){return new G((i,a)=>{let l=0,h=0,d=!1;t.forEach(p=>{++l,p.next(()=>{++h,d&&h===l&&i()},g=>a(g))}),d=!0,h===l&&i()})}static or(t){let i=G.resolve(!1);for(const a of t)i=i.next(l=>l?G.resolve(l):a());return i}static forEach(t,i){const a=[];return t.forEach((l,h)=>{a.push(i.call(this,l,h))}),this.waitFor(a)}static mapArray(t,i){return new G((a,l)=>{const h=t.length,d=new Array(h);let p=0;for(let g=0;g<h;g++){const v=g;i(t[v]).next(w=>{d[v]=w,++p,p===h&&a(d)},w=>l(w))}})}static doWhile(t,i){return new G((a,l)=>{const h=()=>{t()===!0?i().next(()=>{h()},l):a()};h()})}}function j2(r){const t=r.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function Il(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.oe(a),this._e=a=>i.writeSequenceNumber(a))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}nm.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=-1;function rm(r){return r==null}function Ac(r){return r===0&&1/r==-1/0}function H2(r){return typeof r=="number"&&Number.isInteger(r)&&!Ac(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="";function q2(r){let t="";for(let i=0;i<r.length;i++)t.length>0&&(t=S_(t)),t=G2(r.get(i),t);return S_(t)}function G2(r,t){let i=t;const a=r.length;for(let l=0;l<a;l++){const h=r.charAt(l);switch(h){case"\0":i+="";break;case O0:i+="";break;default:i+=h}}return i}function S_(r){return r+O0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(r){let t=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t++;return t}function Xa(r,t){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&t(i,r[i])}function D0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,i){this.comparator=t,this.root=i||Ue.EMPTY}insert(t,i){return new rn(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(t){return new rn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((i,a)=>(t(i,a),!1))}toString(){const t=[];return this.inorderTraversal((i,a)=>(t.push(`${i}:${a}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ec(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ec(this.root,t,this.comparator,!1)}getReverseIterator(){return new ec(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ec(this.root,t,this.comparator,!0)}}class ec{constructor(t,i,a,l){this.isReverse=l,this.nodeStack=[];let h=1;for(;!t.isEmpty();)if(h=i?a(t.key,i):1,i&&l&&(h*=-1),h<0)t=this.isReverse?t.left:t.right;else{if(h===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ue{constructor(t,i,a,l,h){this.key=t,this.value=i,this.color=a??Ue.RED,this.left=l??Ue.EMPTY,this.right=h??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,l,h){return new Ue(t??this.key,i??this.value,a??this.color,l??this.left,h??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let l=this;const h=a(t,l.key);return l=h<0?l.copy(null,null,null,l.left.insert(t,i,a),null):h===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return Ue.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw bt();const t=this.left.check();if(t!==this.right.check())throw bt();return t+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw bt()}get value(){throw bt()}get color(){throw bt()}get left(){throw bt()}get right(){throw bt()}copy(t,i,a,l,h){return this}insert(t,i,a){return new Ue(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.comparator=t,this.data=new rn(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((i,a)=>(t(i),!1))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new w_(this.data.getIterator())}getIteratorFrom(t){return new w_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach(a=>{i=i.add(a)}),i}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,h=a.getNext().key;if(this.comparator(l,h)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(i=>{t.push(i)}),t}toString(){const t=[];return this.forEach(i=>t.push(i)),"SortedSet("+t.toString()+")"}copy(t){const i=new Pe(this.comparator);return i.data=t,i}}class w_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t){this.fields=t,t.sort(Le.comparator)}static empty(){return new jn([])}unionWith(t){let i=new Pe(Le.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new jn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return Ba(this.fields,t.fields,(i,a)=>i.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(l){try{return atob(l)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new F2("Invalid base64 string: "+h):h}}(t);return new fi(i)}static fromUint8Array(t){const i=function(l){let h="";for(let d=0;d<l.length;++d)h+=String.fromCharCode(l[d]);return h}(t);return new fi(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Bt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}fi.EMPTY_BYTE_STRING=new fi("");const K2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(r){if(re(!!r),typeof r=="string"){let t=0;const i=K2.exec(r);if(re(!!i),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(r);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:ke(r.seconds),nanos:ke(r.nanos)}}function ke(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ja(r){return typeof r=="string"?fi.fromBase64String(r):fi.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="server_timestamp",M0="__type__",V0="__previous_value__",U0="__local_write_time__";function sm(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[M0])===null||i===void 0?void 0:i.stringValue)===N0}function am(r){const t=r.mapValue.fields[V0];return sm(t)?am(t):t}function Sc(r){const t=ks(r.mapValue.fields[U0].timestampValue);return new Oe(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(t,i,a,l,h,d,p,g,v){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=h,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=v}}const bc="(default)";class wc{constructor(t,i){this.projectId=t,this.database=i||bc}static empty(){return new wc("","")}get isDefaultDatabase(){return this.database===bc}isEqual(t){return t instanceof wc&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="__type__",Q2="__max__",nc={mapValue:{}},L0="__vector__",wd="value";function Ls(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?sm(r)?4:$2(r)?9007199254740991:X2(r)?10:11:bt()}function di(r,t){if(r===t)return!0;const i=Ls(r);if(i!==Ls(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Sc(r).isEqual(Sc(t));case 3:return function(l,h){if(typeof l.timestampValue=="string"&&typeof h.timestampValue=="string"&&l.timestampValue.length===h.timestampValue.length)return l.timestampValue===h.timestampValue;const d=ks(l.timestampValue),p=ks(h.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(l,h){return ja(l.bytesValue).isEqual(ja(h.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(l,h){return ke(l.geoPointValue.latitude)===ke(h.geoPointValue.latitude)&&ke(l.geoPointValue.longitude)===ke(h.geoPointValue.longitude)}(r,t);case 2:return function(l,h){if("integerValue"in l&&"integerValue"in h)return ke(l.integerValue)===ke(h.integerValue);if("doubleValue"in l&&"doubleValue"in h){const d=ke(l.doubleValue),p=ke(h.doubleValue);return d===p?Ac(d)===Ac(p):isNaN(d)&&isNaN(p)}return!1}(r,t);case 9:return Ba(r.arrayValue.values||[],t.arrayValue.values||[],di);case 10:case 11:return function(l,h){const d=l.mapValue.fields||{},p=h.mapValue.fields||{};if(b_(d)!==b_(p))return!1;for(const g in d)if(d.hasOwnProperty(g)&&(p[g]===void 0||!di(d[g],p[g])))return!1;return!0}(r,t);default:return bt()}}function _l(r,t){return(r.values||[]).find(i=>di(i,t))!==void 0}function Ha(r,t){if(r===t)return 0;const i=Ls(r),a=Ls(t);if(i!==a)return Bt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Bt(r.booleanValue,t.booleanValue);case 2:return function(h,d){const p=ke(h.integerValue||h.doubleValue),g=ke(d.integerValue||d.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(r,t);case 3:return R_(r.timestampValue,t.timestampValue);case 4:return R_(Sc(r),Sc(t));case 5:return Bt(r.stringValue,t.stringValue);case 6:return function(h,d){const p=ja(h),g=ja(d);return p.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(h,d){const p=h.split("/"),g=d.split("/");for(let v=0;v<p.length&&v<g.length;v++){const w=Bt(p[v],g[v]);if(w!==0)return w}return Bt(p.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(h,d){const p=Bt(ke(h.latitude),ke(d.latitude));return p!==0?p:Bt(ke(h.longitude),ke(d.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return I_(r.arrayValue,t.arrayValue);case 10:return function(h,d){var p,g,v,w;const D=h.fields||{},B=d.fields||{},K=(p=D[wd])===null||p===void 0?void 0:p.arrayValue,$=(g=B[wd])===null||g===void 0?void 0:g.arrayValue,at=Bt(((v=K==null?void 0:K.values)===null||v===void 0?void 0:v.length)||0,((w=$==null?void 0:$.values)===null||w===void 0?void 0:w.length)||0);return at!==0?at:I_(K,$)}(r.mapValue,t.mapValue);case 11:return function(h,d){if(h===nc.mapValue&&d===nc.mapValue)return 0;if(h===nc.mapValue)return 1;if(d===nc.mapValue)return-1;const p=h.fields||{},g=Object.keys(p),v=d.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let D=0;D<g.length&&D<w.length;++D){const B=Bt(g[D],w[D]);if(B!==0)return B;const K=Ha(p[g[D]],v[w[D]]);if(K!==0)return K}return Bt(g.length,w.length)}(r.mapValue,t.mapValue);default:throw bt()}}function R_(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Bt(r,t);const i=ks(r),a=ks(t),l=Bt(i.seconds,a.seconds);return l!==0?l:Bt(i.nanos,a.nanos)}function I_(r,t){const i=r.values||[],a=t.values||[];for(let l=0;l<i.length&&l<a.length;++l){const h=Ha(i[l],a[l]);if(h)return h}return Bt(i.length,a.length)}function qa(r){return Rd(r)}function Rd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(i){const a=ks(i);return`time(${a.seconds},${a.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(i){return ja(i).toBase64()}(r.bytesValue):"referenceValue"in r?function(i){return vt.fromName(i).toString()}(r.referenceValue):"geoPointValue"in r?function(i){return`geo(${i.latitude},${i.longitude})`}(r.geoPointValue):"arrayValue"in r?function(i){let a="[",l=!0;for(const h of i.values||[])l?l=!1:a+=",",a+=Rd(h);return a+"]"}(r.arrayValue):"mapValue"in r?function(i){const a=Object.keys(i.fields||{}).sort();let l="{",h=!0;for(const d of a)h?h=!1:l+=",",l+=`${d}:${Rd(i.fields[d])}`;return l+"}"}(r.mapValue):bt()}function cc(r){switch(Ls(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=am(r);return t?16+cc(t):16;case 5:return 2*r.stringValue.length;case 6:return ja(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((l,h)=>l+cc(h),0)}(r.arrayValue);case 10:case 11:return function(a){let l=0;return Xa(a.fields,(h,d)=>{l+=h.length+cc(d)}),l}(r.mapValue);default:throw bt()}}function Id(r){return!!r&&"integerValue"in r}function om(r){return!!r&&"arrayValue"in r}function hc(r){return!!r&&"mapValue"in r}function X2(r){var t,i;return((i=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[k0])===null||i===void 0?void 0:i.stringValue)===L0}function cl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Xa(r.mapValue.fields,(i,a)=>t.mapValue.fields[i]=cl(a)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=cl(r.arrayValue.values[i]);return t}return Object.assign({},r)}function $2(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Q2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t){this.value=t}static empty(){return new Bn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!hc(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=cl(i)}setAll(t){let i=Le.emptyPath(),a={},l=[];t.forEach((d,p)=>{if(!i.isImmediateParentOf(p)){const g=this.getFieldsMap(i);this.applyChanges(g,a,l),a={},l=[],i=p.popLast()}d?a[p.lastSegment()]=cl(d):l.push(p.lastSegment())});const h=this.getFieldsMap(i);this.applyChanges(h,a,l)}delete(t){const i=this.field(t.popLast());hc(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return di(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=i.mapValue.fields[t.get(a)];hc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,a){Xa(i,(l,h)=>t[l]=h);for(const l of a)delete t[l]}clone(){return new Bn(cl(this.value))}}function P0(r){const t=[];return Xa(r.fields,(i,a)=>{const l=new Le([i]);if(hc(a)){const h=P0(a.mapValue).fields;if(h.length===0)t.push(l);else for(const d of h)t.push(l.child(d))}else t.push(l)}),new jn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,i,a,l,h,d,p){this.key=t,this.documentType=i,this.version=a,this.readTime=l,this.createTime=h,this.data=d,this.documentState=p}static newInvalidDocument(t){return new zn(t,0,Qt.min(),Qt.min(),Qt.min(),Bn.empty(),0)}static newFoundDocument(t,i,a,l){return new zn(t,1,i,Qt.min(),a,l,0)}static newNoDocument(t,i){return new zn(t,2,i,Qt.min(),Qt.min(),Bn.empty(),0)}static newUnknownDocument(t,i){return new zn(t,3,i,Qt.min(),Qt.min(),Bn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(Qt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Bn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Qt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof zn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new zn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,i){this.position=t,this.inclusive=i}}function C_(r,t,i){let a=0;for(let l=0;l<r.position.length;l++){const h=t[l],d=r.position[l];if(h.field.isKeyField()?a=vt.comparator(vt.fromName(d.referenceValue),i.key):a=Ha(d,i.data.field(h.field)),h.dir==="desc"&&(a*=-1),a!==0)break}return a}function O_(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!di(r.position[i],t.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t,i="asc"){this.field=t,this.dir=i}}function Z2(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{}class Ce extends x0{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new J2(t,i,a):i==="array-contains"?new nR(t,a):i==="in"?new iR(t,a):i==="not-in"?new rR(t,a):i==="array-contains-any"?new sR(t,a):new Ce(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new tR(t,a):new eR(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison(Ha(i,this.value)):i!==null&&Ls(this.value)===Ls(i)&&this.matchesComparison(Ha(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return bt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jr extends x0{constructor(t,i){super(),this.filters=t,this.op=i,this.ce=null}static create(t,i){return new jr(t,i)}matches(t){return z0(this)?this.filters.find(i=>!i.matches(t))===void 0:this.filters.find(i=>i.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,i)=>t.concat(i.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function z0(r){return r.op==="and"}function B0(r){return W2(r)&&z0(r)}function W2(r){for(const t of r.filters)if(t instanceof jr)return!1;return!0}function Cd(r){if(r instanceof Ce)return r.field.canonicalString()+r.op.toString()+qa(r.value);if(B0(r))return r.filters.map(t=>Cd(t)).join(",");{const t=r.filters.map(i=>Cd(i)).join(",");return`${r.op}(${t})`}}function j0(r,t){return r instanceof Ce?function(a,l){return l instanceof Ce&&a.op===l.op&&a.field.isEqual(l.field)&&di(a.value,l.value)}(r,t):r instanceof jr?function(a,l){return l instanceof jr&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce((h,d,p)=>h&&j0(d,l.filters[p]),!0):!1}(r,t):void bt()}function H0(r){return r instanceof Ce?function(i){return`${i.field.canonicalString()} ${i.op} ${qa(i.value)}`}(r):r instanceof jr?function(i){return i.op.toString()+" {"+i.getFilters().map(H0).join(" ,")+"}"}(r):"Filter"}class J2 extends Ce{constructor(t,i,a){super(t,i,a),this.key=vt.fromName(a.referenceValue)}matches(t){const i=vt.comparator(t.key,this.key);return this.matchesComparison(i)}}class tR extends Ce{constructor(t,i){super(t,"in",i),this.keys=q0("in",i)}matches(t){return this.keys.some(i=>i.isEqual(t.key))}}class eR extends Ce{constructor(t,i){super(t,"not-in",i),this.keys=q0("not-in",i)}matches(t){return!this.keys.some(i=>i.isEqual(t.key))}}function q0(r,t){var i;return(((i=t.arrayValue)===null||i===void 0?void 0:i.values)||[]).map(a=>vt.fromName(a.referenceValue))}class nR extends Ce{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return om(i)&&_l(i.arrayValue,this.value)}}class iR extends Ce{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&_l(this.value.arrayValue,i)}}class rR extends Ce{constructor(t,i){super(t,"not-in",i)}matches(t){if(_l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&!_l(this.value.arrayValue,i)}}class sR extends Ce{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!om(i)||!i.arrayValue.values)&&i.arrayValue.values.some(a=>_l(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(t,i=null,a=[],l=[],h=null,d=null,p=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=h,this.startAt=d,this.endAt=p,this.le=null}}function D_(r,t=null,i=[],a=[],l=null,h=null,d=null){return new aR(r,t,i,a,l,h,d)}function lm(r){const t=Yt(r);if(t.le===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map(a=>Cd(a)).join(","),i+="|ob:",i+=t.orderBy.map(a=>function(h){return h.field.canonicalString()+h.dir}(a)).join(","),rm(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>qa(a)).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>qa(a)).join(",")),t.le=i}return t.le}function um(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!Z2(r.orderBy[i],t.orderBy[i]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!j0(r.filters[i],t.filters[i]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!O_(r.startAt,t.startAt)&&O_(r.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,i=null,a=[],l=[],h=null,d="F",p=null,g=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=h,this.limitType=d,this.startAt=p,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function oR(r,t,i,a,l,h,d,p){return new Hc(r,t,i,a,l,h,d,p)}function lR(r){return new Hc(r)}function N_(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function uR(r){return r.collectionGroup!==null}function hl(r){const t=Yt(r);if(t.he===null){t.he=[];const i=new Set;for(const h of t.explicitOrderBy)t.he.push(h),i.add(h.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new Pe(Le.comparator);return d.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(p=p.add(v.field))})}),p})(t).forEach(h=>{i.has(h.canonicalString())||h.isKeyField()||t.he.push(new Ic(h,a))}),i.has(Le.keyField().canonicalString())||t.he.push(new Ic(Le.keyField(),a))}return t.he}function Cs(r){const t=Yt(r);return t.Pe||(t.Pe=cR(t,hl(r))),t.Pe}function cR(r,t){if(r.limitType==="F")return D_(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(l=>{const h=l.dir==="desc"?"asc":"desc";return new Ic(l.field,h)});const i=r.endAt?new Rc(r.endAt.position,r.endAt.inclusive):null,a=r.startAt?new Rc(r.startAt.position,r.startAt.inclusive):null;return D_(r.path,r.collectionGroup,t,r.filters,r.limit,i,a)}}function Od(r,t,i){return new Hc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,i,r.startAt,r.endAt)}function G0(r,t){return um(Cs(r),Cs(t))&&r.limitType===t.limitType}function F0(r){return`${lm(Cs(r))}|lt:${r.limitType}`}function rl(r){return`Query(target=${function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map(l=>H0(l)).join(", ")}]`),rm(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map(l=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(l)).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map(l=>qa(l)).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map(l=>qa(l)).join(",")),`Target(${a})`}(Cs(r))}; limitType=${r.limitType})`}function cm(r,t){return t.isFoundDocument()&&function(a,l){const h=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(h):vt.isDocumentKey(a.path)?a.path.isEqual(h):a.path.isImmediateParentOf(h)}(r,t)&&function(a,l){for(const h of hl(a))if(!h.field.isKeyField()&&l.data.field(h.field)===null)return!1;return!0}(r,t)&&function(a,l){for(const h of a.filters)if(!h.matches(l))return!1;return!0}(r,t)&&function(a,l){return!(a.startAt&&!function(d,p,g){const v=C_(d,p,g);return d.inclusive?v<=0:v<0}(a.startAt,hl(a),l)||a.endAt&&!function(d,p,g){const v=C_(d,p,g);return d.inclusive?v>=0:v>0}(a.endAt,hl(a),l))}(r,t)}function hR(r){return(t,i)=>{let a=!1;for(const l of hl(r)){const h=fR(l,t,i);if(h!==0)return h;a=a||l.field.isKeyField()}return 0}}function fR(r,t,i){const a=r.field.isKeyField()?vt.comparator(t.key,i.key):function(h,d,p){const g=d.data.field(h),v=p.data.field(h);return g!==null&&v!==null?Ha(g,v):bt()}(r.field,t,i);switch(r.dir){case"asc":return a;case"desc":return-1*a;default:return bt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[l,h]of a)if(this.equalsFn(l,t))return h}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let h=0;h<l.length;h++)if(this.equalsFn(l[h][0],t))return void(l[h]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Xa(this.inner,(i,a)=>{for(const[l,h]of a)t(l,h)})}isEmpty(){return D0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=new rn(vt.comparator);function Cc(){return dR}const K0=new rn(vt.comparator);function ic(...r){let t=K0;for(const i of r)t=t.insert(i.key,i);return t}function Y0(r){let t=K0;return r.forEach((i,a)=>t=t.insert(i,a.overlayedDocument)),t}function Rs(){return fl()}function Q0(){return fl()}function fl(){return new Bs(r=>r.toString(),(r,t)=>r.isEqual(t))}const mR=new rn(vt.comparator),pR=new Pe(vt.comparator);function qe(...r){let t=pR;for(const i of r)t=t.add(i);return t}const gR=new Pe(Bt);function yR(){return gR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ac(t)?"-0":t}}function X0(r){return{integerValue:""+r}}function _R(r,t){return H2(t)?X0(t):hm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this._=void 0}}function vR(r,t,i){return r instanceof Oc?function(l,h){const d={fields:{[M0]:{stringValue:N0},[U0]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return h&&sm(h)&&(h=am(h)),h&&(d.fields[V0]=h),{mapValue:d}}(i,t):r instanceof vl?Z0(r,t):r instanceof El?W0(r,t):function(l,h){const d=$0(l,h),p=M_(d)+M_(l.Ie);return Id(d)&&Id(l.Ie)?X0(p):hm(l.serializer,p)}(r,t)}function ER(r,t,i){return r instanceof vl?Z0(r,t):r instanceof El?W0(r,t):i}function $0(r,t){return r instanceof Dc?function(a){return Id(a)||function(h){return!!h&&"doubleValue"in h}(a)}(t)?t:{integerValue:0}:null}class Oc extends qc{}class vl extends qc{constructor(t){super(),this.elements=t}}function Z0(r,t){const i=J0(t);for(const a of r.elements)i.some(l=>di(l,a))||i.push(a);return{arrayValue:{values:i}}}class El extends qc{constructor(t){super(),this.elements=t}}function W0(r,t){let i=J0(t);for(const a of r.elements)i=i.filter(l=>!di(l,a));return{arrayValue:{values:i}}}class Dc extends qc{constructor(t,i){super(),this.serializer=t,this.Ie=i}}function M_(r){return ke(r.integerValue||r.doubleValue)}function J0(r){return om(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function TR(r,t){return r.field.isEqual(t.field)&&function(a,l){return a instanceof vl&&l instanceof vl||a instanceof El&&l instanceof El?Ba(a.elements,l.elements,di):a instanceof Dc&&l instanceof Dc?di(a.Ie,l.Ie):a instanceof Oc&&l instanceof Oc}(r.transform,t.transform)}class AR{constructor(t,i){this.version=t,this.transformResults=i}}class Fi{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Fi}static exists(t){return new Fi(void 0,t)}static updateTime(t){return new Fi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Gc{}function tE(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new nE(r.key,Fi.none()):new Cl(r.key,r.data,Fi.none());{const i=r.data,a=Bn.empty();let l=new Pe(Le.comparator);for(let h of t.fields)if(!l.has(h)){let d=i.field(h);d===null&&h.length>1&&(h=h.popLast(),d=i.field(h)),d===null?a.delete(h):a.set(h,d),l=l.add(h)}return new js(r.key,a,new jn(l.toArray()),Fi.none())}}function SR(r,t,i){r instanceof Cl?function(l,h,d){const p=l.value.clone(),g=U_(l.fieldTransforms,h,d.transformResults);p.setAll(g),h.convertToFoundDocument(d.version,p).setHasCommittedMutations()}(r,t,i):r instanceof js?function(l,h,d){if(!fc(l.precondition,h))return void h.convertToUnknownDocument(d.version);const p=U_(l.fieldTransforms,h,d.transformResults),g=h.data;g.setAll(eE(l)),g.setAll(p),h.convertToFoundDocument(d.version,g).setHasCommittedMutations()}(r,t,i):function(l,h,d){h.convertToNoDocument(d.version).setHasCommittedMutations()}(0,t,i)}function dl(r,t,i,a){return r instanceof Cl?function(h,d,p,g){if(!fc(h.precondition,d))return p;const v=h.value.clone(),w=k_(h.fieldTransforms,g,d);return v.setAll(w),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),null}(r,t,i,a):r instanceof js?function(h,d,p,g){if(!fc(h.precondition,d))return p;const v=k_(h.fieldTransforms,g,d),w=d.data;return w.setAll(eE(h)),w.setAll(v),d.convertToFoundDocument(d.version,w).setHasLocalMutations(),p===null?null:p.unionWith(h.fieldMask.fields).unionWith(h.fieldTransforms.map(D=>D.field))}(r,t,i,a):function(h,d,p){return fc(h.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p}(r,t,i)}function bR(r,t){let i=null;for(const a of r.fieldTransforms){const l=t.data.field(a.field),h=$0(a.transform,l||null);h!=null&&(i===null&&(i=Bn.empty()),i.set(a.field,h))}return i||null}function V_(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&Ba(a,l,(h,d)=>TR(h,d))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Cl extends Gc{constructor(t,i,a,l=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class js extends Gc{constructor(t,i,a,l,h=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=h,this.type=1}getFieldMask(){return this.fieldMask}}function eE(r){const t=new Map;return r.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const a=r.data.field(i);t.set(i,a)}}),t}function U_(r,t,i){const a=new Map;re(r.length===i.length);for(let l=0;l<i.length;l++){const h=r[l],d=h.transform,p=t.data.field(h.field);a.set(h.field,ER(d,p,i[l]))}return a}function k_(r,t,i){const a=new Map;for(const l of r){const h=l.transform,d=i.data.field(l.field);a.set(l.field,vR(h,d,t))}return a}class nE extends Gc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wR extends Gc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(t,i,a,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const h=this.mutations[l];h.key.isEqual(t.key)&&SR(h,t,a[l])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=dl(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=dl(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=Q0();return this.mutations.forEach(l=>{const h=t.get(l.key),d=h.overlayedDocument;let p=this.applyToLocalView(d,h.mutatedFields);p=i.has(l.key)?null:p;const g=tE(d,p);g!==null&&a.set(l.key,g),d.isValidDocument()||d.convertToNoDocument(Qt.min())}),a}keys(){return this.mutations.reduce((t,i)=>t.add(i.key),qe())}isEqual(t){return this.batchId===t.batchId&&Ba(this.mutations,t.mutations,(i,a)=>V_(i,a))&&Ba(this.baseMutations,t.baseMutations,(i,a)=>V_(i,a))}}class fm{constructor(t,i,a,l){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(t,i,a){re(t.mutations.length===a.length);let l=function(){return mR}();const h=t.mutations;for(let d=0;d<h.length;d++)l=l.insert(h[d].key,a[d].version);return new fm(t,i,a,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,Nt;function CR(r){switch(r){case Q.OK:return bt();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return bt()}}function OR(r){if(r===void 0)return Us("GRPC error has no .code"),Q.UNKNOWN;switch(r){case fe.OK:return Q.OK;case fe.CANCELLED:return Q.CANCELLED;case fe.UNKNOWN:return Q.UNKNOWN;case fe.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case fe.INTERNAL:return Q.INTERNAL;case fe.UNAVAILABLE:return Q.UNAVAILABLE;case fe.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case fe.NOT_FOUND:return Q.NOT_FOUND;case fe.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case fe.ABORTED:return Q.ABORTED;case fe.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case fe.DATA_LOSS:return Q.DATA_LOSS;default:return bt()}}(Nt=fe||(fe={}))[Nt.OK=0]="OK",Nt[Nt.CANCELLED=1]="CANCELLED",Nt[Nt.UNKNOWN=2]="UNKNOWN",Nt[Nt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Nt[Nt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Nt[Nt.NOT_FOUND=5]="NOT_FOUND",Nt[Nt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Nt[Nt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Nt[Nt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Nt[Nt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Nt[Nt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Nt[Nt.ABORTED=10]="ABORTED",Nt[Nt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Nt[Nt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Nt[Nt.INTERNAL=13]="INTERNAL",Nt[Nt.UNAVAILABLE=14]="UNAVAILABLE",Nt[Nt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Jd([4294967295,4294967295],0);class DR{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function Dd(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function NR(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function MR(r,t){return Dd(r,t.toTimestamp())}function za(r){return re(!!r),Qt.fromTimestamp(function(i){const a=ks(i);return new Oe(a.seconds,a.nanos)}(r))}function iE(r,t){return Nd(r,t).canonicalString()}function Nd(r,t){const i=function(l){return new ie(["projects",l.projectId,"databases",l.database])}(r).child("documents");return t===void 0?i:i.child(t)}function VR(r){const t=ie.fromString(r);return re(jR(t)),t}function Md(r,t){return iE(r.databaseId,t.path)}function UR(r){const t=VR(r);return t.length===4?ie.emptyPath():LR(t)}function kR(r){return new ie(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function LR(r){return re(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function L_(r,t,i){return{name:Md(r,t),fields:i.value.mapValue.fields}}function PR(r,t){let i;if(t instanceof Cl)i={update:L_(r,t.key,t.value)};else if(t instanceof nE)i={delete:Md(r,t.key)};else if(t instanceof js)i={update:L_(r,t.key,t.data),updateMask:BR(t.fieldMask)};else{if(!(t instanceof wR))return bt();i={verify:Md(r,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(a=>function(h,d){const p=d.transform;if(p instanceof Oc)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof vl)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof El)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Dc)return{fieldPath:d.field.canonicalString(),increment:p.Ie};throw bt()}(0,a))),t.precondition.isNone||(i.currentDocument=function(l,h){return h.updateTime!==void 0?{updateTime:MR(l,h.updateTime)}:h.exists!==void 0?{exists:h.exists}:bt()}(r,t.precondition)),i}function xR(r,t){return r&&r.length>0?(re(t!==void 0),r.map(i=>function(l,h){let d=l.updateTime?za(l.updateTime):za(h);return d.isEqual(Qt.min())&&(d=za(h)),new AR(d,l.transformResults||[])}(i,t))):[]}function zR(r){let t=UR(r.parent);const i=r.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){re(a===1);const w=i.from[0];w.allDescendants?l=w.collectionId:t=t.child(w.collectionId)}let h=[];i.where&&(h=function(D){const B=rE(D);return B instanceof jr&&B0(B)?B.getFilters():[B]}(i.where));let d=[];i.orderBy&&(d=function(D){return D.map(B=>function($){return new Ic(Va($.field),function(tt){switch(tt){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(B))}(i.orderBy));let p=null;i.limit&&(p=function(D){let B;return B=typeof D=="object"?D.value:D,rm(B)?null:B}(i.limit));let g=null;i.startAt&&(g=function(D){const B=!!D.before,K=D.values||[];return new Rc(K,B)}(i.startAt));let v=null;return i.endAt&&(v=function(D){const B=!D.before,K=D.values||[];return new Rc(K,B)}(i.endAt)),oR(t,l,d,h,p,"F",g,v)}function rE(r){return r.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=Va(i.unaryFilter.field);return Ce.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=Va(i.unaryFilter.field);return Ce.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const h=Va(i.unaryFilter.field);return Ce.create(h,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Va(i.unaryFilter.field);return Ce.create(d,"!=",{nullValue:"NULL_VALUE"});default:return bt()}}(r):r.fieldFilter!==void 0?function(i){return Ce.create(Va(i.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return bt()}}(i.fieldFilter.op),i.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(i){return jr.create(i.compositeFilter.filters.map(a=>rE(a)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return bt()}}(i.compositeFilter.op))}(r):bt()}function Va(r){return Le.fromServerFormat(r.fieldPath)}function BR(r){const t=[];return r.fields.forEach(i=>t.push(i.canonicalString())),{fieldPaths:t}}function jR(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(t){this.Tt=t}}function qR(r){const t=zR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Od(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(){this.Tn=new FR}addToCollectionParentIndex(t,i){return this.Tn.add(i),G.resolve()}getCollectionParents(t,i){return G.resolve(this.Tn.getEntries(i))}addFieldIndex(t,i){return G.resolve()}deleteFieldIndex(t,i){return G.resolve()}deleteAllFieldIndexes(t){return G.resolve()}createTargetIndexes(t,i){return G.resolve()}getDocumentsMatchingTarget(t,i){return G.resolve(null)}getIndexType(t,i){return G.resolve(0)}getFieldIndexes(t,i){return G.resolve([])}getNextCollectionGroupToUpdate(t){return G.resolve(null)}getMinOffset(t,i){return G.resolve(Br.min())}getMinOffsetFromCollectionGroup(t,i){return G.resolve(Br.min())}updateCollectionGroup(t,i,a){return G.resolve()}updateIndexEntries(t,i){return G.resolve()}}class FR{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i]||new Pe(ie.comparator),h=!l.has(a);return this.index[i]=l.add(a),h}has(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(t){return(this.index[t]||new Pe(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sE=41943040;class en{static withCacheSize(t){return new en(t,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(sE,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new Ga(0)}static Un(){return new Ga(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="LruGarbageCollector",KR=1048576;function z_([r,t],[i,a]){const l=Bt(r,i);return l===0?Bt(t,a):l}class YR{constructor(t){this.Hn=t,this.buffer=new Pe(z_),this.Jn=0}Yn(){return++this.Jn}Zn(t){const i=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();z_(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class QR{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){nt(x_,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){Il(i)?nt(x_,"Ignoring IndexedDB error during garbage collection: ",i):await em(i)}await this.er(3e5)})}}class XR{constructor(t,i){this.tr=t,this.params=i}calculateTargetCount(t,i){return this.tr.nr(t).next(a=>Math.floor(i/100*a))}nthSequenceNumber(t,i){if(i===0)return G.resolve(nm.ae);const a=new YR(i);return this.tr.forEachTarget(t,l=>a.Zn(l.sequenceNumber)).next(()=>this.tr.rr(t,l=>a.Zn(l))).next(()=>a.maxValue)}removeTargets(t,i,a){return this.tr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.tr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(nt("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(P_)):this.getCacheSize(t).next(a=>a<this.params.cacheSizeCollectionThreshold?(nt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),P_):this.ir(t,i))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,i){let a,l,h,d,p,g,v;const w=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(D=>(D>this.params.maximumSequenceNumbersToCollect?(nt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${D}`),l=this.params.maximumSequenceNumbersToCollect):l=D,d=Date.now(),this.nthSequenceNumber(t,l))).next(D=>(a=D,p=Date.now(),this.removeTargets(t,a,i))).next(D=>(h=D,g=Date.now(),this.removeOrphanedDocuments(t,a))).next(D=>(v=Date.now(),Ma()<=wt.DEBUG&&nt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-w}ms
	Determined least recently used ${l} in `+(p-d)+`ms
	Removed ${h} targets in `+(g-p)+`ms
	Removed ${D} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:h,documentsRemoved:D})))}}function $R(r,t){return new XR(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.changes=new Bs(t=>t.toString(),(t,i)=>t.isEqual(i)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,zn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?G.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(t,i,a,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next(l=>(a=l,this.remoteDocumentCache.getEntry(t,i))).next(l=>(a!==null&&dl(a.mutation,l,jn.empty(),Oe.now()),l))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.getLocalViewOfDocuments(t,a,qe()).next(()=>a))}getLocalViewOfDocuments(t,i,a=qe()){const l=Rs();return this.populateOverlays(t,l,i).next(()=>this.computeViews(t,i,l,a).next(h=>{let d=ic();return h.forEach((p,g)=>{d=d.insert(p,g.overlayedDocument)}),d}))}getOverlayedDocuments(t,i){const a=Rs();return this.populateOverlays(t,a,i).next(()=>this.computeViews(t,i,a,qe()))}populateOverlays(t,i,a){const l=[];return a.forEach(h=>{i.has(h)||l.push(h)}),this.documentOverlayCache.getOverlays(t,l).next(h=>{h.forEach((d,p)=>{i.set(d,p)})})}computeViews(t,i,a,l){let h=Cc();const d=fl(),p=function(){return fl()}();return i.forEach((g,v)=>{const w=a.get(v.key);l.has(v.key)&&(w===void 0||w.mutation instanceof js)?h=h.insert(v.key,v):w!==void 0?(d.set(v.key,w.mutation.getFieldMask()),dl(w.mutation,v,w.mutation.getFieldMask(),Oe.now())):d.set(v.key,jn.empty())}),this.recalculateAndSaveOverlays(t,h).next(g=>(g.forEach((v,w)=>d.set(v,w)),i.forEach((v,w)=>{var D;return p.set(v,new WR(w,(D=d.get(v))!==null&&D!==void 0?D:null))}),p))}recalculateAndSaveOverlays(t,i){const a=fl();let l=new rn((d,p)=>d-p),h=qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next(d=>{for(const p of d)p.keys().forEach(g=>{const v=i.get(g);if(v===null)return;let w=a.get(g)||jn.empty();w=p.applyToLocalView(v,w),a.set(g,w);const D=(l.get(p.batchId)||qe()).add(g);l=l.insert(p.batchId,D)})}).next(()=>{const d=[],p=l.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),v=g.key,w=g.value,D=Q0();w.forEach(B=>{if(!h.has(B)){const K=tE(i.get(B),a.get(B));K!==null&&D.set(B,K),h=h.add(B)}}),d.push(this.documentOverlayCache.saveOverlays(t,v,D))}return G.waitFor(d)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.recalculateAndSaveOverlays(t,a))}getDocumentsMatchingQuery(t,i,a,l){return function(d){return vt.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):uR(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,l):this.getDocumentsMatchingCollectionQuery(t,i,a,l)}getNextDocuments(t,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,l).next(h=>{const d=l-h.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,l-h.size):G.resolve(Rs());let p=yl,g=h;return d.next(v=>G.forEach(v,(w,D)=>(p<D.largestBatchId&&(p=D.largestBatchId),h.get(w)?G.resolve():this.remoteDocumentCache.getEntry(t,w).next(B=>{g=g.insert(w,B)}))).next(()=>this.populateOverlays(t,v,h)).next(()=>this.computeViews(t,g,v,qe())).next(w=>({batchId:p,changes:Y0(w)})))})}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new vt(i)).next(a=>{let l=ic();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l})}getDocumentsMatchingCollectionGroupQuery(t,i,a,l){const h=i.collectionGroup;let d=ic();return this.indexManager.getCollectionParents(t,h).next(p=>G.forEach(p,g=>{const v=function(D,B){return new Hc(B,null,D.explicitOrderBy.slice(),D.filters.slice(),D.limit,D.limitType,D.startAt,D.endAt)}(i,g.child(h));return this.getDocumentsMatchingCollectionQuery(t,v,a,l).next(w=>{w.forEach((D,B)=>{d=d.insert(D,B)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(t,i,a,l){let h;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next(d=>(h=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,h,l))).next(d=>{h.forEach((g,v)=>{const w=v.getKey();d.get(w)===null&&(d=d.insert(w,zn.newInvalidDocument(w)))});let p=ic();return d.forEach((g,v)=>{const w=h.get(g);w!==void 0&&dl(w.mutation,v,jn.empty(),Oe.now()),cm(i,v)&&(p=p.insert(g,v))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,i){return G.resolve(this.dr.get(i))}saveBundleMetadata(t,i){return this.dr.set(i.id,function(l){return{id:l.id,version:l.version,createTime:za(l.createTime)}}(i)),G.resolve()}getNamedQuery(t,i){return G.resolve(this.Ar.get(i))}saveNamedQuery(t,i){return this.Ar.set(i.name,function(l){return{name:l.name,query:qR(l.bundledQuery),readTime:za(l.readTime)}}(i)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(){this.overlays=new rn(vt.comparator),this.Rr=new Map}getOverlay(t,i){return G.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Rs();return G.forEach(i,l=>this.getOverlay(t,l).next(h=>{h!==null&&a.set(l,h)})).next(()=>a)}saveOverlays(t,i,a){return a.forEach((l,h)=>{this.Et(t,i,h)}),G.resolve()}removeOverlaysForBatchId(t,i,a){const l=this.Rr.get(a);return l!==void 0&&(l.forEach(h=>this.overlays=this.overlays.remove(h)),this.Rr.delete(a)),G.resolve()}getOverlaysForCollection(t,i,a){const l=Rs(),h=i.length+1,d=new vt(i.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const g=p.getNext().value,v=g.getKey();if(!i.isPrefixOf(v.path))break;v.path.length===h&&g.largestBatchId>a&&l.set(g.getKey(),g)}return G.resolve(l)}getOverlaysForCollectionGroup(t,i,a,l){let h=new rn((v,w)=>v-w);const d=this.overlays.getIterator();for(;d.hasNext();){const v=d.getNext().value;if(v.getKey().getCollectionGroup()===i&&v.largestBatchId>a){let w=h.get(v.largestBatchId);w===null&&(w=Rs(),h=h.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const p=Rs(),g=h.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,w)=>p.set(v,w)),!(p.size()>=l)););return G.resolve(p)}Et(t,i,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.Rr.get(l.largestBatchId).delete(a.key);this.Rr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new IR(i,a));let h=this.Rr.get(i);h===void 0&&(h=qe(),this.Rr.set(i,h)),this.Rr.set(i,h.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.sessionToken=fi.EMPTY_BYTE_STRING}getSessionToken(t){return G.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.Vr=new Pe(Ie.mr),this.gr=new Pe(Ie.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,i){const a=new Ie(t,i);this.Vr=this.Vr.add(a),this.gr=this.gr.add(a)}yr(t,i){t.forEach(a=>this.addReference(a,i))}removeReference(t,i){this.wr(new Ie(t,i))}br(t,i){t.forEach(a=>this.removeReference(a,i))}Sr(t){const i=new vt(new ie([])),a=new Ie(i,t),l=new Ie(i,t+1),h=[];return this.gr.forEachInRange([a,l],d=>{this.wr(d),h.push(d.key)}),h}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const i=new vt(new ie([])),a=new Ie(i,t),l=new Ie(i,t+1);let h=qe();return this.gr.forEachInRange([a,l],d=>{h=h.add(d.key)}),h}containsKey(t){const i=new Ie(t,0),a=this.Vr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class Ie{constructor(t,i){this.key=t,this.Cr=i}static mr(t,i){return vt.comparator(t.key,i.key)||Bt(t.Cr,i.Cr)}static pr(t,i){return Bt(t.Cr,i.Cr)||vt.comparator(t.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.Fr=1,this.Mr=new Pe(Ie.mr)}checkEmpty(t){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,l){const h=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new RR(h,i,a,l);this.mutationQueue.push(d);for(const p of l)this.Mr=this.Mr.add(new Ie(p.key,h)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return G.resolve(d)}lookupMutationBatch(t,i){return G.resolve(this.Or(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,l=this.Nr(a),h=l<0?0:l;return G.resolve(this.mutationQueue.length>h?this.mutationQueue[h]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?im:this.Fr-1)}getAllMutationBatches(t){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new Ie(i,0),l=new Ie(i,Number.POSITIVE_INFINITY),h=[];return this.Mr.forEachInRange([a,l],d=>{const p=this.Or(d.Cr);h.push(p)}),G.resolve(h)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Pe(Bt);return i.forEach(l=>{const h=new Ie(l,0),d=new Ie(l,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([h,d],p=>{a=a.add(p.Cr)})}),G.resolve(this.Br(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,l=a.length+1;let h=a;vt.isDocumentKey(h)||(h=h.child(""));const d=new Ie(new vt(h),0);let p=new Pe(Bt);return this.Mr.forEachWhile(g=>{const v=g.key.path;return!!a.isPrefixOf(v)&&(v.length===l&&(p=p.add(g.Cr)),!0)},d),G.resolve(this.Br(p))}Br(t){const i=[];return t.forEach(a=>{const l=this.Or(a);l!==null&&i.push(l)}),i}removeMutationBatch(t,i){re(this.Lr(i.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Mr;return G.forEach(i.mutations,l=>{const h=new Ie(l.key,i.batchId);return a=a.delete(h),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Mr=a})}qn(t){}containsKey(t,i){const a=new Ie(i,0),l=this.Mr.firstAfterOrEqual(a);return G.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,G.resolve()}Lr(t,i){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const i=this.Nr(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(t){this.kr=t,this.docs=function(){return new rn(vt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,l=this.docs.get(a),h=l?l.size:0,d=this.kr(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-h,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return G.resolve(a?a.document.mutableCopy():zn.newInvalidDocument(i))}getEntries(t,i){let a=Cc();return i.forEach(l=>{const h=this.docs.get(l);a=a.insert(l,h?h.document.mutableCopy():zn.newInvalidDocument(l))}),G.resolve(a)}getDocumentsMatchingQuery(t,i,a,l){let h=Cc();const d=i.path,p=new vt(d.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!d.isPrefixOf(v.path))break;v.path.length>d.length+1||x2(P2(w),a)<=0||(l.has(w.key)||cm(i,w))&&(h=h.insert(w.key,w.mutableCopy()))}return G.resolve(h)}getAllFromCollectionGroup(t,i,a,l){bt()}qr(t,i){return G.forEach(this.docs,a=>i(a))}newChangeBuffer(t){return new sI(this)}getSize(t){return G.resolve(this.size)}}class sI extends ZR{constructor(t){super(),this.Ir=t}applyChanges(t){const i=[];return this.changes.forEach((a,l)=>{l.isValidDocument()?i.push(this.Ir.addEntry(t,l)):this.Ir.removeEntry(a)}),G.waitFor(i)}getFromCache(t,i){return this.Ir.getEntry(t,i)}getAllFromCache(t,i){return this.Ir.getEntries(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(t){this.persistence=t,this.Qr=new Bs(i=>lm(i),um),this.lastRemoteSnapshotVersion=Qt.min(),this.highestTargetId=0,this.$r=0,this.Kr=new dm,this.targetCount=0,this.Ur=Ga.Kn()}forEachTarget(t,i){return this.Qr.forEach((a,l)=>i(l)),G.resolve()}getLastRemoteSnapshotVersion(t){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return G.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.$r&&(this.$r=i),G.resolve()}zn(t){this.Qr.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.Ur=new Ga(i),this.highestTargetId=i),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,i){return this.zn(i),this.targetCount+=1,G.resolve()}updateTargetData(t,i){return this.zn(i),G.resolve()}removeTargetData(t,i){return this.Qr.delete(i.target),this.Kr.Sr(i.targetId),this.targetCount-=1,G.resolve()}removeTargets(t,i,a){let l=0;const h=[];return this.Qr.forEach((d,p)=>{p.sequenceNumber<=i&&a.get(p.targetId)===null&&(this.Qr.delete(d),h.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)}),G.waitFor(h).next(()=>l)}getTargetCount(t){return G.resolve(this.targetCount)}getTargetData(t,i){const a=this.Qr.get(i)||null;return G.resolve(a)}addMatchingKeys(t,i,a){return this.Kr.yr(i,a),G.resolve()}removeMatchingKeys(t,i,a){this.Kr.br(i,a);const l=this.persistence.referenceDelegate,h=[];return l&&i.forEach(d=>{h.push(l.markPotentiallyOrphaned(t,d))}),G.waitFor(h)}removeMatchingKeysForTargetId(t,i){return this.Kr.Sr(i),G.resolve()}getMatchingKeysForTargetId(t,i){const a=this.Kr.vr(i);return G.resolve(a)}containsKey(t,i){return G.resolve(this.Kr.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(t,i){this.Wr={},this.overlays={},this.Gr=new nm(0),this.zr=!1,this.zr=!0,this.jr=new nI,this.referenceDelegate=t(this),this.Hr=new aI(this),this.indexManager=new GR,this.remoteDocumentCache=function(l){return new rI(l)}(a=>this.referenceDelegate.Jr(a)),this.serializer=new HR(i),this.Yr=new tI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new eI,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.Wr[t.toKey()];return a||(a=new iI(i,this.referenceDelegate),this.Wr[t.toKey()]=a),a}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,i,a){nt("MemoryPersistence","Starting transaction:",t);const l=new oI(this.Gr.next());return this.referenceDelegate.Zr(),a(l).next(h=>this.referenceDelegate.Xr(l).next(()=>h)).toPromise().then(h=>(l.raiseOnCommittedEvent(),h))}ei(t,i){return G.or(Object.values(this.Wr).map(a=>()=>a.containsKey(t,i)))}}class oI extends B2{constructor(t){super(),this.currentSequenceNumber=t}}class mm{constructor(t){this.persistence=t,this.ti=new dm,this.ni=null}static ri(t){return new mm(t)}get ii(){if(this.ni)return this.ni;throw bt()}addReference(t,i,a){return this.ti.addReference(a,i),this.ii.delete(a.toString()),G.resolve()}removeReference(t,i,a){return this.ti.removeReference(a,i),this.ii.add(a.toString()),G.resolve()}markPotentiallyOrphaned(t,i){return this.ii.add(i.toString()),G.resolve()}removeTarget(t,i){this.ti.Sr(i.targetId).forEach(l=>this.ii.add(l.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next(l=>{l.forEach(h=>this.ii.add(h.toString()))}).next(()=>a.removeTargetData(t,i))}Zr(){this.ni=new Set}Xr(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ii,a=>{const l=vt.fromPath(a);return this.si(t,l).next(h=>{h||i.removeEntry(l,Qt.min())})}).next(()=>(this.ni=null,i.apply(t)))}updateLimboDocument(t,i){return this.si(t,i).next(a=>{a?this.ii.delete(i.toString()):this.ii.add(i.toString())})}Jr(t){return 0}si(t,i){return G.or([()=>G.resolve(this.ti.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.ei(t,i)])}}class Nc{constructor(t,i){this.persistence=t,this.oi=new Bs(a=>q2(a.path),(a,l)=>a.isEqual(l)),this.garbageCollector=$R(this,i)}static ri(t,i){return new Nc(t,i)}Zr(){}Xr(t){return G.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}nr(t){const i=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(a=>i.next(l=>a+l))}sr(t){let i=0;return this.rr(t,a=>{i++}).next(()=>i)}rr(t,i){return G.forEach(this.oi,(a,l)=>this.ar(t,a,l).next(h=>h?G.resolve():i(l)))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),h=l.newChangeBuffer();return l.qr(t,d=>this.ar(t,d,i).next(p=>{p||(a++,h.removeEntry(d,Qt.min()))})).next(()=>h.apply(t)).next(()=>a)}markPotentiallyOrphaned(t,i){return this.oi.set(i,t.currentSequenceNumber),G.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.oi.set(a,t.currentSequenceNumber),G.resolve()}removeReference(t,i,a){return this.oi.set(a,t.currentSequenceNumber),G.resolve()}updateLimboDocument(t,i){return this.oi.set(i,t.currentSequenceNumber),G.resolve()}Jr(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=cc(t.data.value)),i}ar(t,i,a){return G.or([()=>this.persistence.ei(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.oi.get(i);return G.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t,i,a,l){this.targetId=t,this.fromCache=i,this.Hi=a,this.Ji=l}static Yi(t,i){let a=qe(),l=qe();for(const h of i.docChanges)switch(h.type){case 0:a=a.add(h.doc.key);break;case 1:l=l.add(h.doc.key)}return new pm(t,i.fromCache,a,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return OA()?8:j2(Ge())>0?6:4}()}initialize(t,i){this.ns=t,this.indexManager=i,this.Zi=!0}getDocumentsMatchingQuery(t,i,a,l){const h={result:null};return this.rs(t,i).next(d=>{h.result=d}).next(()=>{if(!h.result)return this.ss(t,i,l,a).next(d=>{h.result=d})}).next(()=>{if(h.result)return;const d=new lI;return this._s(t,i,d).next(p=>{if(h.result=p,this.Xi)return this.us(t,i,d,p.size)})}).next(()=>h.result)}us(t,i,a,l){return a.documentReadCount<this.es?(Ma()<=wt.DEBUG&&nt("QueryEngine","SDK will not create cache indexes for query:",rl(i),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),G.resolve()):(Ma()<=wt.DEBUG&&nt("QueryEngine","Query:",rl(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.ts*l?(Ma()<=wt.DEBUG&&nt("QueryEngine","The SDK decides to create cache indexes for query:",rl(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Cs(i))):G.resolve())}rs(t,i){if(N_(i))return G.resolve(null);let a=Cs(i);return this.indexManager.getIndexType(t,a).next(l=>l===0?null:(i.limit!==null&&l===1&&(i=Od(i,null,"F"),a=Cs(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next(h=>{const d=qe(...h);return this.ns.getDocuments(t,d).next(p=>this.indexManager.getMinOffset(t,a).next(g=>{const v=this.cs(i,p);return this.ls(i,v,d,g.readTime)?this.rs(t,Od(i,null,"F")):this.hs(t,v,i,g)}))})))}ss(t,i,a,l){return N_(i)||l.isEqual(Qt.min())?G.resolve(null):this.ns.getDocuments(t,a).next(h=>{const d=this.cs(i,h);return this.ls(i,d,a,l)?G.resolve(null):(Ma()<=wt.DEBUG&&nt("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),rl(i)),this.hs(t,d,i,L2(l,yl)).next(p=>p))})}cs(t,i){let a=new Pe(hR(t));return i.forEach((l,h)=>{cm(t,h)&&(a=a.add(h))}),a}ls(t,i,a,l){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const h=t.limitType==="F"?i.last():i.first();return!!h&&(h.hasPendingWrites||h.version.compareTo(l)>0)}_s(t,i,a){return Ma()<=wt.DEBUG&&nt("QueryEngine","Using full collection scan to execute query:",rl(i)),this.ns.getDocumentsMatchingQuery(t,i,Br.min(),a)}hs(t,i,a,l){return this.ns.getDocumentsMatchingQuery(t,a,l).next(h=>(i.forEach(d=>{h=h.insert(d.key,d)}),h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI="LocalStore";class hI{constructor(t,i,a,l){this.persistence=t,this.Ps=i,this.serializer=l,this.Ts=new rn(Bt),this.Is=new Bs(h=>lm(h),um),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(a)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new JR(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>t.collect(i,this.Ts))}}function fI(r,t,i,a){return new hI(r,t,i,a)}async function oE(r,t){const i=Yt(r);return await i.persistence.runTransaction("Handle user change","readonly",a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next(h=>(l=h,i.As(t),i.mutationQueue.getAllMutationBatches(a))).next(h=>{const d=[],p=[];let g=qe();for(const v of l){d.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of h){p.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return i.localDocuments.getDocuments(a,g).next(v=>({Rs:v,removedBatchIds:d,addedBatchIds:p}))})})}function dI(r,t){const i=Yt(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const l=t.batch.keys(),h=i.ds.newChangeBuffer({trackRemovals:!0});return function(p,g,v,w){const D=v.batch,B=D.keys();let K=G.resolve();return B.forEach($=>{K=K.next(()=>w.getEntry(g,$)).next(at=>{const tt=v.docVersions.get($);re(tt!==null),at.version.compareTo(tt)<0&&(D.applyToRemoteDocument(at,v),at.isValidDocument()&&(at.setReadTime(v.commitVersion),w.addEntry(at)))})}),K.next(()=>p.mutationQueue.removeMutationBatch(g,D))}(i,a,t,h).next(()=>h.apply(a)).next(()=>i.mutationQueue.performConsistencyCheck(a)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(p){let g=qe();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(g=g.add(p.batch.mutations[v].key));return g}(t))).next(()=>i.localDocuments.getDocuments(a,l))})}function mI(r){const t=Yt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",i=>t.Hr.getLastRemoteSnapshotVersion(i))}function pI(r,t){const i=Yt(r);return i.persistence.runTransaction("Get next mutation batch","readonly",a=>(t===void 0&&(t=im),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t)))}class B_{constructor(){this.activeTargetIds=yR()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gI{constructor(){this.ho=new B_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,i,a){this.Po[t]=i}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new B_,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="ConnectivityMonitor";class H_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){nt(j_,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){nt(j_,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc=null;function Vd(){return rc===null?rc=function(){return 268435456+Math.round(2147483648*Math.random())}():rc++,"0x"+rc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="RestConnection",_I={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vI{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.po=i+"://"+t.host,this.yo=`projects/${a}/databases/${l}`,this.wo=this.databaseId.database===bc?`project_id=${a}`:`project_id=${a}&database_id=${l}`}bo(t,i,a,l,h){const d=Vd(),p=this.So(t,i.toUriEncodedString());nt(hd,`Sending RPC '${t}' ${d}:`,p,a);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,l,h),this.vo(t,p,g,a).then(v=>(nt(hd,`Received RPC '${t}' ${d}: `,v),v),v=>{throw jc(hd,`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",a),v})}Co(t,i,a,l,h,d){return this.bo(t,i,a,l,h)}Do(t,i,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),a&&a.headers.forEach((l,h)=>t[h]=l)}So(t,i){const a=_I[t];return`${this.po}/v1/${i}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="WebChannelConnection";class TI extends vI{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,i,a,l){const h=Vd();return new Promise((d,p)=>{const g=new A0;g.setWithCredentials(!0),g.listenOnce(S0.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case uc.NO_ERROR:const w=g.getResponseJson();nt(je,`XHR for RPC '${t}' ${h} received:`,JSON.stringify(w)),d(w);break;case uc.TIMEOUT:nt(je,`RPC '${t}' ${h} timed out`),p(new ht(Q.DEADLINE_EXCEEDED,"Request time out"));break;case uc.HTTP_ERROR:const D=g.getStatus();if(nt(je,`RPC '${t}' ${h} failed with status:`,D,"response text:",g.getResponseText()),D>0){let B=g.getResponseJson();Array.isArray(B)&&(B=B[0]);const K=B==null?void 0:B.error;if(K&&K.status&&K.message){const $=function(tt){const Rt=tt.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(Rt)>=0?Rt:Q.UNKNOWN}(K.status);p(new ht($,K.message))}else p(new ht(Q.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ht(Q.UNAVAILABLE,"Connection failed."));break;default:bt()}}finally{nt(je,`RPC '${t}' ${h} completed.`)}});const v=JSON.stringify(l);nt(je,`RPC '${t}' ${h} sending request:`,l),g.send(i,"POST",v,a,15)})}Wo(t,i,a){const l=Vd(),h=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=R0(),p=w0(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,i,a),g.encodeInitMessageHeaders=!0;const w=h.join("");nt(je,`Creating RPC '${t}' stream ${l}: ${w}`,g);const D=d.createWebChannel(w,g);let B=!1,K=!1;const $=new EI({Fo:tt=>{K?nt(je,`Not sending because RPC '${t}' stream ${l} is closed:`,tt):(B||(nt(je,`Opening RPC '${t}' stream ${l} transport.`),D.open(),B=!0),nt(je,`RPC '${t}' stream ${l} sending:`,tt),D.send(tt))},Mo:()=>D.close()}),at=(tt,Rt,dt)=>{tt.listen(Rt,Tt=>{try{dt(Tt)}catch(jt){setTimeout(()=>{throw jt},0)}})};return at(D,ol.EventType.OPEN,()=>{K||(nt(je,`RPC '${t}' stream ${l} transport opened.`),$.Qo())}),at(D,ol.EventType.CLOSE,()=>{K||(K=!0,nt(je,`RPC '${t}' stream ${l} transport closed`),$.Ko())}),at(D,ol.EventType.ERROR,tt=>{K||(K=!0,jc(je,`RPC '${t}' stream ${l} transport errored:`,tt),$.Ko(new ht(Q.UNAVAILABLE,"The operation could not be completed")))}),at(D,ol.EventType.MESSAGE,tt=>{var Rt;if(!K){const dt=tt.data[0];re(!!dt);const Tt=dt,jt=(Tt==null?void 0:Tt.error)||((Rt=Tt[0])===null||Rt===void 0?void 0:Rt.error);if(jt){nt(je,`RPC '${t}' stream ${l} received error:`,jt);const mt=jt.status;let Mt=function(A){const I=fe[A];if(I!==void 0)return OR(I)}(mt),V=jt.message;Mt===void 0&&(Mt=Q.INTERNAL,V="Unknown error status: "+mt+" with message "+jt.message),K=!0,$.Ko(new ht(Mt,V)),D.close()}else nt(je,`RPC '${t}' stream ${l} received:`,dt),$.Uo(dt)}}),at(p,b0.STAT_EVENT,tt=>{tt.stat===bd.PROXY?nt(je,`RPC '${t}' stream ${l} detected buffering proxy`):tt.stat===bd.NOPROXY&&nt(je,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{$.$o()},0),$}}function fd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(r){return new DR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(t,i,a=1e3,l=1.5,h=6e4){this.Ti=t,this.timerId=i,this.Go=a,this.zo=l,this.jo=h,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const i=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),l=Math.max(0,i-a);l>0&&nt("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,l,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="PersistentStream";class AI{constructor(t,i,a,l,h,d,p,g){this.Ti=t,this.n_=a,this.r_=l,this.connection=h,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new lE(t,i)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,i){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():i&&i.code===Q.RESOURCE_EXHAUSTED?(Us(i.toString()),Us("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):i&&i.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(i)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),i=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,l])=>{this.i_===i&&this.V_(a,l)},a=>{t(()=>{const l=new ht(Q.UNKNOWN,"Fetching auth token failed: "+a.message);return this.m_(l)})})}V_(t,i){const a=this.R_(this.i_);this.stream=this.f_(t,i),this.stream.xo(()=>{a(()=>this.listener.xo())}),this.stream.No(()=>{a(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(l=>{a(()=>this.m_(l))}),this.stream.onMessage(l=>{a(()=>++this.__==1?this.g_(l):this.onNext(l))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return nt(q_,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return i=>{this.Ti.enqueueAndForget(()=>this.i_===t?i():(nt(q_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SI extends AI{constructor(t,i,a,l,h,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,d),this.serializer=h}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,i){return this.connection.Wo("Write",t,i)}g_(t){return re(!!t.streamToken),this.lastStreamToken=t.streamToken,re(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){re(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const i=xR(t.writeResults,t.commitTime),a=za(t.commitTime);return this.listener.v_(a,i)}C_(){const t={};t.database=kR(this.serializer),this.I_(t)}S_(t){const i={streamToken:this.lastStreamToken,writes:t.map(a=>PR(this.serializer,a))};this.I_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{}class wI extends bI{constructor(t,i,a,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.F_=!1}M_(){if(this.F_)throw new ht(Q.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,i,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.bo(t,Nd(i,a),l,h,d)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ht(Q.UNKNOWN,h.toString())})}Co(t,i,a,l,h){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,p])=>this.connection.Co(t,Nd(i,a),l,d,p,h)).catch(d=>{throw d.name==="FirebaseError"?(d.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ht(Q.UNKNOWN,d.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class RI{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Us(i),this.N_=!1):nt("OnlineStateTracker",i)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="RemoteStore";class II{constructor(t,i,a,l,h){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=h,this.z_.To(d=>{a.enqueueAndForget(async()=>{Nl(this)&&(nt(Ol,"Restarting streams for network reachability change."),await async function(g){const v=Yt(g);v.W_.add(4),await Dl(v),v.j_.set("Unknown"),v.W_.delete(4),await Kc(v)}(this))})}),this.j_=new RI(a,l)}}async function Kc(r){if(Nl(r))for(const t of r.G_)await t(!0)}async function Dl(r){for(const t of r.G_)await t(!1)}function Nl(r){return Yt(r).W_.size===0}async function uE(r,t,i){if(!Il(t))throw t;r.W_.add(1),await Dl(r),r.j_.set("Offline"),i||(i=()=>mI(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{nt(Ol,"Retrying IndexedDB access"),await i(),r.W_.delete(1),await Kc(r)})}function cE(r,t){return t().catch(i=>uE(r,i,t))}async function Yc(r){const t=Yt(r),i=Hr(t);let a=t.K_.length>0?t.K_[t.K_.length-1].batchId:im;for(;CI(t);)try{const l=await pI(t.localStore,a);if(l===null){t.K_.length===0&&i.P_();break}a=l.batchId,OI(t,l)}catch(l){await uE(t,l)}hE(t)&&fE(t)}function CI(r){return Nl(r)&&r.K_.length<10}function OI(r,t){r.K_.push(t);const i=Hr(r);i.c_()&&i.b_&&i.S_(t.mutations)}function hE(r){return Nl(r)&&!Hr(r).u_()&&r.K_.length>0}function fE(r){Hr(r).start()}async function DI(r){Hr(r).C_()}async function NI(r){const t=Hr(r);for(const i of r.K_)t.S_(i.mutations)}async function MI(r,t,i){const a=r.K_.shift(),l=fm.from(a,t,i);await cE(r,()=>r.remoteSyncer.applySuccessfulWrite(l)),await Yc(r)}async function VI(r,t){t&&Hr(r).b_&&await async function(a,l){if(function(d){return CR(d)&&d!==Q.ABORTED}(l.code)){const h=a.K_.shift();Hr(a).h_(),await cE(a,()=>a.remoteSyncer.rejectFailedWrite(h.batchId,l)),await Yc(a)}}(r,t),hE(r)&&fE(r)}async function G_(r,t){const i=Yt(r);i.asyncQueue.verifyOperationInProgress(),nt(Ol,"RemoteStore received new credentials");const a=Nl(i);i.W_.add(3),await Dl(i),a&&i.j_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.W_.delete(3),await Kc(i)}async function UI(r,t){const i=Yt(r);t?(i.W_.delete(2),await Kc(i)):t||(i.W_.add(2),await Dl(i),i.j_.set("Unknown"))}function Hr(r){return r.Y_||(r.Y_=function(i,a,l){const h=Yt(i);return h.M_(),new SI(a,h.connection,h.authCredentials,h.appCheckCredentials,h.serializer,l)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:DI.bind(null,r),Lo:VI.bind(null,r),D_:NI.bind(null,r),v_:MI.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await Yc(r)):(await r.Y_.stop(),r.K_.length>0&&(nt(Ol,`Stopping write stream with ${r.K_.length} pending writes`),r.K_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(t,i,a,l,h){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=h,this.deferred=new Is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,l,h){const d=Date.now()+a,p=new gm(t,i,d,l,h);return p.start(a),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ht(Q.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dE(r,t){if(Us("AsyncQueue",`${t}: ${r}`),Il(r))return new ht(Q.UNAVAILABLE,`${t}: ${r}`);throw r}class kI{constructor(){this.queries=F_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(i,a){const l=Yt(i),h=l.queries;l.queries=F_(),h.forEach((d,p)=>{for(const g of p.ta)g.onError(a)})})(this,new ht(Q.ABORTED,"Firestore shutting down"))}}function F_(){return new Bs(r=>F0(r),G0)}function LI(r){r.ia.forEach(t=>{t.next()})}var K_,Y_;(Y_=K_||(K_={}))._a="default",Y_.Cache="cache";const PI="SyncEngine";class xI{constructor(t,i,a,l,h,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=h,this.maxConcurrentLimboResolutions=d,this.La={},this.ka=new Bs(p=>F0(p),G0),this.qa=new Map,this.Qa=new Set,this.$a=new rn(vt.comparator),this.Ka=new Map,this.Ua=new dm,this.Wa={},this.Ga=new Map,this.za=Ga.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function zI(r,t,i){const a=qI(r);try{const l=await function(d,p){const g=Yt(d),v=Oe.now(),w=p.reduce((K,$)=>K.add($.key),qe());let D,B;return g.persistence.runTransaction("Locally write mutations","readwrite",K=>{let $=Cc(),at=qe();return g.ds.getEntries(K,w).next(tt=>{$=tt,$.forEach((Rt,dt)=>{dt.isValidDocument()||(at=at.add(Rt))})}).next(()=>g.localDocuments.getOverlayedDocuments(K,$)).next(tt=>{D=tt;const Rt=[];for(const dt of p){const Tt=bR(dt,D.get(dt.key).overlayedDocument);Tt!=null&&Rt.push(new js(dt.key,Tt,P0(Tt.value.mapValue),Fi.exists(!0)))}return g.mutationQueue.addMutationBatch(K,v,Rt,p)}).next(tt=>{B=tt;const Rt=tt.applyToLocalDocumentSet(D,at);return g.documentOverlayCache.saveOverlays(K,tt.batchId,Rt)})}).then(()=>({batchId:B.batchId,changes:Y0(D)}))}(a.localStore,t);a.sharedClientState.addPendingMutation(l.batchId),function(d,p,g){let v=d.Wa[d.currentUser.toKey()];v||(v=new rn(Bt)),v=v.insert(p,g),d.Wa[d.currentUser.toKey()]=v}(a,l.batchId,i),await Qc(a,l.changes),await Yc(a.remoteStore)}catch(l){const h=dE(l,"Failed to persist write");i.reject(h)}}function Q_(r,t,i){const a=Yt(r);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.ka.forEach((h,d)=>{const p=d.view.sa(t);p.snapshot&&l.push(p.snapshot)}),function(d,p){const g=Yt(d);g.onlineState=p;let v=!1;g.queries.forEach((w,D)=>{for(const B of D.ta)B.sa(p)&&(v=!0)}),v&&LI(g)}(a.eventManager,t),l.length&&a.La.p_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function BI(r,t){const i=Yt(r),a=t.batch.batchId;try{const l=await dI(i.localStore,t);pE(i,a,null),mE(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await Qc(i,l)}catch(l){await em(l)}}async function jI(r,t,i){const a=Yt(r);try{const l=await function(d,p){const g=Yt(d);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return g.mutationQueue.lookupMutationBatch(v,p).next(D=>(re(D!==null),w=D.keys(),g.mutationQueue.removeMutationBatch(v,D))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>g.localDocuments.getDocuments(v,w))})}(a.localStore,t);pE(a,t,i),mE(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await Qc(a,l)}catch(l){await em(l)}}function mE(r,t){(r.Ga.get(t)||[]).forEach(i=>{i.resolve()}),r.Ga.delete(t)}function pE(r,t,i){const a=Yt(r);let l=a.Wa[a.currentUser.toKey()];if(l){const h=l.get(t);h&&(i?h.reject(i):h.resolve(),l=l.remove(t)),a.Wa[a.currentUser.toKey()]=l}}async function Qc(r,t,i){const a=Yt(r),l=[],h=[],d=[];a.ka.isEmpty()||(a.ka.forEach((p,g)=>{d.push(a.Ha(g,t,i).then(v=>{var w;if((v||i)&&a.isPrimaryClient){const D=v?!v.fromCache:(w=void 0)===null||w===void 0?void 0:w.current;a.sharedClientState.updateQueryState(g.targetId,D?"current":"not-current")}if(v){l.push(v);const D=pm.Yi(g.targetId,v);h.push(D)}}))}),await Promise.all(d),a.La.p_(l),await async function(g,v){const w=Yt(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",D=>G.forEach(v,B=>G.forEach(B.Hi,K=>w.persistence.referenceDelegate.addReference(D,B.targetId,K)).next(()=>G.forEach(B.Ji,K=>w.persistence.referenceDelegate.removeReference(D,B.targetId,K)))))}catch(D){if(!Il(D))throw D;nt(cI,"Failed to update sequence numbers: "+D)}for(const D of v){const B=D.targetId;if(!D.fromCache){const K=w.Ts.get(B),$=K.snapshotVersion,at=K.withLastLimboFreeSnapshotVersion($);w.Ts=w.Ts.insert(B,at)}}}(a.localStore,h))}async function HI(r,t){const i=Yt(r);if(!i.currentUser.isEqual(t)){nt(PI,"User change. New user:",t.toKey());const a=await oE(i.localStore,t);i.currentUser=t,function(h,d){h.Ga.forEach(p=>{p.forEach(g=>{g.reject(new ht(Q.CANCELLED,d))})}),h.Ga.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await Qc(i,a.Rs)}}function qI(r){const t=Yt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=BI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jI.bind(null,t),t}class Mc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Fc(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,i){return null}nu(t,i){return null}eu(t){return fI(this.persistence,new uI,t.initialUser,this.serializer)}Xa(t){return new aE(mm.ri,this.serializer)}Za(t){return new gI}async terminate(){var t,i;(t=this.gcScheduler)===null||t===void 0||t.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mc.provider={build:()=>new Mc};class GI extends Mc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,i){re(this.persistence.referenceDelegate instanceof Nc);const a=this.persistence.referenceDelegate.garbageCollector;return new QR(a,t.asyncQueue,i)}Xa(t){const i=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new aE(a=>Nc.ri(a,i),this.serializer)}}class Ud{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>Q_(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=HI.bind(null,this.syncEngine),await UI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new kI}()}createDatastore(t){const i=Fc(t.databaseInfo.databaseId),a=function(h){return new TI(h)}(t.databaseInfo);return function(h,d,p,g){return new wI(h,d,p,g)}(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return function(a,l,h,d,p){return new II(a,l,h,d,p)}(this.localStore,this.datastore,t.asyncQueue,i=>Q_(this.syncEngine,i,0),function(){return H_.D()?new H_:new yI}())}createSyncEngine(t,i){return function(l,h,d,p,g,v,w){const D=new xI(l,h,d,p,g,v);return w&&(D.ja=!0),D}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await async function(l){const h=Yt(l);nt(Ol,"RemoteStore shutting down."),h.W_.add(5),await Dl(h),h.z_.shutdown(),h.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}Ud.provider={build:()=>new Ud};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="FirestoreClient";class FI{constructor(t,i,a,l,h){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=He.UNAUTHENTICATED,this.clientId=C0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=h,this.authCredentials.start(a,async d=>{nt(qr,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(a,d=>(nt(qr,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=dE(i,"Failed to shutdown persistence");t.reject(a)}}),t.promise}}async function dd(r,t){r.asyncQueue.verifyOperationInProgress(),nt(qr,"Initializing OfflineComponentProvider");const i=r.configuration;await t.initialize(i);let a=i.initialUser;r.setCredentialChangeListener(async l=>{a.isEqual(l)||(await oE(t.localStore,l),a=l)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function X_(r,t){r.asyncQueue.verifyOperationInProgress();const i=await KI(r);nt(qr,"Initializing OnlineComponentProvider"),await t.initialize(i,r.configuration),r.setCredentialChangeListener(a=>G_(t.remoteStore,a)),r.setAppCheckTokenChangeListener((a,l)=>G_(t.remoteStore,l)),r._onlineComponents=t}async function KI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){nt(qr,"Using user provided OfflineComponentProvider");try{await dd(r,r._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(l){return l.name==="FirebaseError"?l.code===Q.FAILED_PRECONDITION||l.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(i))throw i;jc("Error using user provided cache. Falling back to memory cache: "+i),await dd(r,new Mc)}}else nt(qr,"Using default OfflineComponentProvider"),await dd(r,new GI(void 0));return r._offlineComponents}async function YI(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(nt(qr,"Using user provided OnlineComponentProvider"),await X_(r,r._uninitializedComponentsProvider._online)):(nt(qr,"Using default OnlineComponentProvider"),await X_(r,new Ud))),r._onlineComponents}function QI(r){return YI(r).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(r,t,i){if(!i)throw new ht(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function XI(r,t,i,a){if(t===!0&&a===!0)throw new ht(Q.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function Z_(r){if(!vt.isDocumentKey(r))throw new ht(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function W_(r){if(vt.isDocumentKey(r))throw new ht(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ym(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(a){return a.constructor?a.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":bt()}function kd(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ht(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=ym(r);throw new ht(Q.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="firestore.googleapis.com",J_=!0;class tv{constructor(t){var i,a;if(t.host===void 0){if(t.ssl!==void 0)throw new ht(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_E,this.ssl=J_}else this.host=t.host,this.ssl=(i=t.ssl)!==null&&i!==void 0?i:J_;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=sE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<KR)throw new ht(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}XI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gE((a=t.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(h){if(h.timeoutSeconds!==void 0){if(isNaN(h.timeoutSeconds))throw new ht(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (must not be NaN)`);if(h.timeoutSeconds<5)throw new ht(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (minimum allowed value is 5)`);if(h.timeoutSeconds>30)throw new ht(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(a,l){return a.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Xc{constructor(t,i,a,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ht(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ht(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new C2;switch(a.type){case"firstParty":return new M2(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ht(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const a=$_.get(i);a&&(nt("ComponentProvider","Removing Datastore"),$_.delete(i),a.terminate())}(this),Promise.resolve()}}function $I(r,t,i,a={}){var l;const h=(r=kd(r,Xc))._getSettings(),d=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),p=`${t}:${i}`;h.host!==_E&&h.host!==p&&jc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},h),{host:p,ssl:!1,emulatorOptions:a});if(!zr(g,d)&&(r._setSettings(g),a.mockUserToken)){let v,w;if(typeof a.mockUserToken=="string")v=a.mockUserToken,w=He.MOCK_USER;else{v=SA(a.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const D=a.mockUserToken.sub||a.mockUserToken.user_id;if(!D)throw new ht(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new He(D)}r._authCredentials=new O2(new I0(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new _m(this.firestore,t,this._query)}}class ci{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ci(this.firestore,t,this._key)}}class xr extends _m{constructor(t,i,a){super(t,i,lR(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ci(this.firestore,null,new vt(t))}withConverter(t){return new xr(this.firestore,t,this._path)}}function ZI(r,t,...i){if(r=Ze(r),yE("collection","path",t),r instanceof Xc){const a=ie.fromString(t,...i);return W_(a),new xr(r,null,a)}{if(!(r instanceof ci||r instanceof xr))throw new ht(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(ie.fromString(t,...i));return W_(a),new xr(r.firestore,null,a)}}function WI(r,t,...i){if(r=Ze(r),arguments.length===1&&(t=C0.newId()),yE("doc","path",t),r instanceof Xc){const a=ie.fromString(t,...i);return Z_(a),new ci(r,null,new vt(a))}{if(!(r instanceof ci||r instanceof xr))throw new ht(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=r._path.child(ie.fromString(t,...i));return Z_(a),new ci(r.firestore,r instanceof xr?r.converter:null,new vt(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="AsyncQueue";class nv{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new lE(this,"async_queue_retry"),this.bu=()=>{const a=fd();a&&nt(ev,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.Su=t;const i=fd();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const i=fd();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const i=new Is;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Il(t))throw t;nt(ev,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const i=this.Su.then(()=>(this.pu=!0,t().catch(a=>{this.gu=a,this.pu=!1;const l=function(d){let p=d.message||"";return d.stack&&(p=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),p}(a);throw Us("INTERNAL UNHANDLED ERROR: ",l),a}).then(a=>(this.pu=!1,a))));return this.Su=i,i}enqueueAfterDelay(t,i,a){this.Du(),this.wu.indexOf(t)>-1&&(i=0);const l=gm.createAndSchedule(this,t,i,a,h=>this.Fu(h));return this.fu.push(l),l}Du(){this.gu&&bt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const i of this.fu)if(i.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((i,a)=>i.targetTimeMs-a.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const i=this.fu.indexOf(t);this.fu.splice(i,1)}}class vE extends Xc{constructor(t,i,a,l){super(t,i,a,l),this.type="firestore",this._queue=new nv,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new nv(t),this._firestoreClient=void 0,await t}}}function EE(r,t){const i=typeof r=="object"?r:xd(),a=typeof r=="string"?r:bc,l=xs(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const h=TA("firestore");h&&$I(l,...h)}return l}function JI(r){if(r._terminated)throw new ht(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||tC(r),r._firestoreClient}function tC(r){var t,i,a;const l=r._freezeSettings(),h=function(p,g,v,w){return new Y2(p,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,gE(w.experimentalLongPollingOptions),w.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,l);r._componentsProvider||!((i=l.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((a=l.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(r._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),r._firestoreClient=new FI(r._authCredentials,r._appCheckCredentials,r._queue,h,r._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Tl(fi.fromBase64String(t))}catch(i){throw new ht(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new Tl(fi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new ht(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new ht(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new ht(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Bt(this._lat,t._lat)||Bt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t){this._values=(t||[]).map(i=>i)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(a,l){if(a.length!==l.length)return!1;for(let h=0;h<a.length;++h)if(a[h]!==l[h])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=/^__.*__$/;class nC{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new js(t,this.data,this.fieldMask,i,this.fieldTransforms):new Cl(t,this.data,i,this.fieldTransforms)}}function wE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw bt()}}class vm{constructor(t,i,a,l,h,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,h===void 0&&this.Bu(),this.fieldTransforms=h||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new vm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:a,Qu:!1});return l.$u(t),l}Ku(t){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:a,Qu:!1});return l.Bu(),l}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Vc(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(i=>t.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>t.isPrefixOf(i.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(wE(this.Lu)&&eC.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class iC{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||Fc(t)}ju(t,i,a,l=!1){return new vm({Lu:t,methodName:i,zu:a,path:Le.emptyPath(),Qu:!1,Gu:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rC(r){const t=r._freezeSettings(),i=Fc(r._databaseId);return new iC(r._databaseId,!!t.ignoreUndefinedProperties,i)}function sC(r,t,i,a,l,h={}){const d=r.ju(h.merge||h.mergeFields?2:0,t,i,l);OE("Data must be an object, but it was:",d,a);const p=IE(a,d);let g,v;if(h.merge)g=new jn(d.fieldMask),v=d.fieldTransforms;else if(h.mergeFields){const w=[];for(const D of h.mergeFields){const B=aC(t,D,i);if(!d.contains(B))throw new ht(Q.INVALID_ARGUMENT,`Field '${B}' is specified in your field mask but missing from your input data.`);uC(w,B)||w.push(B)}g=new jn(w),v=d.fieldTransforms.filter(D=>g.covers(D.field))}else g=null,v=d.fieldTransforms;return new nC(new Bn(p),g,v)}function RE(r,t){if(CE(r=Ze(r)))return OE("Unsupported field value:",t,r),IE(r,t);if(r instanceof AE)return function(a,l){if(!wE(l.Lu))throw l.Wu(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Wu(`${a._methodName}() is not currently supported inside arrays`);const h=a._toFieldTransform(l);h&&l.fieldTransforms.push(h)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(a,l){const h=[];let d=0;for(const p of a){let g=RE(p,l.Uu(d));g==null&&(g={nullValue:"NULL_VALUE"}),h.push(g),d++}return{arrayValue:{values:h}}}(r,t)}return function(a,l){if((a=Ze(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return _R(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const h=Oe.fromDate(a);return{timestampValue:Dd(l.serializer,h)}}if(a instanceof Oe){const h=new Oe(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Dd(l.serializer,h)}}if(a instanceof SE)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Tl)return{bytesValue:NR(l.serializer,a._byteString)};if(a instanceof ci){const h=l.databaseId,d=a.firestore._databaseId;if(!d.isEqual(h))throw l.Wu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${h.projectId}/${h.database}`);return{referenceValue:iE(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof bE)return function(d,p){return{mapValue:{fields:{[k0]:{stringValue:L0},[wd]:{arrayValue:{values:d.toArray().map(v=>{if(typeof v!="number")throw p.Wu("VectorValues must only contain numeric values.");return hm(p.serializer,v)})}}}}}}(a,l);throw l.Wu(`Unsupported field value: ${ym(a)}`)}(r,t)}function IE(r,t){const i={};return D0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xa(r,(a,l)=>{const h=RE(l,t.qu(a));h!=null&&(i[a]=h)}),{mapValue:{fields:i}}}function CE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Oe||r instanceof SE||r instanceof Tl||r instanceof ci||r instanceof AE||r instanceof bE)}function OE(r,t,i){if(!CE(i)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(i)){const a=ym(i);throw a==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+a)}}function aC(r,t,i){if((t=Ze(t))instanceof TE)return t._internalPath;if(typeof t=="string")return lC(r,t);throw Vc("Field path arguments must be of type string or ",r,!1,void 0,i)}const oC=new RegExp("[~\\*/\\[\\]]");function lC(r,t,i){if(t.search(oC)>=0)throw Vc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new TE(...t.split("."))._internalPath}catch{throw Vc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function Vc(r,t,i,a,l){const h=a&&!a.isEmpty(),d=l!==void 0;let p=`Function ${t}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(h||d)&&(g+=" (found",h&&(g+=` in field ${a}`),d&&(g+=` in document ${l}`),g+=")"),new ht(Q.INVALID_ARGUMENT,p+r+g)}function uC(r,t){return r.some(i=>i.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(r,t,i){let a;return a=r?r.toFirestore(t):t,a}function hC(r,t,i){r=kd(r,ci);const a=kd(r.firestore,vE),l=cC(r.converter,t);return fC(a,[sC(rC(a),"setDoc",r._key,l,r.converter!==null,i).toMutation(r._key,Fi.none())])}function fC(r,t){return function(a,l){const h=new Is;return a.asyncQueue.enqueueAndForget(async()=>zI(await QI(a),l,h)),h.promise}(JI(r),t)}(function(t,i=!0){(function(l){Qa=l})(Ka),hi(new Hn("firestore",(a,{instanceIdentifier:l,options:h})=>{const d=a.getProvider("app").getImmediate(),p=new vE(new D2(a.getProvider("auth-internal")),new V2(d,a.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ht(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wc(v.options.projectId,w)}(d,l),d);return h=Object.assign({useFetchStreams:i},h),p._setSettings(h),p},"PUBLIC").setMultipleInstances(!0)),Mn(y_,__,t),Mn(y_,__,"esm2017")})();const DE={apiKey:"AIzaSyDqvs9hShjoBZG5_iAyTuBJBgYWNzjr-oc",authDomain:"tome-artworks.firebaseapp.com",projectId:"tome-artworks",storageBucket:"tome-artworks.firebasestorage.app",messagingSenderId:"890971951408",appId:"1:890971951408:web:a9cf474d61a4e4b8e678f5",measurementId:"G-JG1KNRR6NW"};console.log("Firebase API Key:","AIzaSyDqvs9hShjoBZG5_iAyTuBJBgYWNzjr-oc");console.log("Firebase Config:",DE);const Em=pv(DE);b2(Em);const Fa=sw(Em);EE(Em);function dC(){const[r,t]=fn.useState(""),[i,a]=fn.useState(""),[l,h]=fn.useState(!0),d=async p=>{p.preventDefault();try{let g;if(l){const w=(await Fb(Fa,r,i)).user,D=EE(),B={useruid:w.uid,email:w.email,createdAt:new Date};await hC(WI(ZI(D,"accounts"),w.uid),B),console.log("Successful signup: ",w)}else g=await Kb(Fa,r,i),console.log("Successful sign in: ",g.user)}catch(g){console.log("Unsuccessful: ",g.message)}};return yt.jsx("div",{children:yt.jsxs("form",{onSubmit:d,className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-120",children:[yt.jsx("h2",{className:"text-xl font-semibold",children:l?"Create account":"Sign in"}),yt.jsxs("div",{className:"mb-6",children:[yt.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),yt.jsx("input",{type:"text",id:"email",className:"shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","data-form-type":"other",placeholder:"Your email",value:r,onChange:p=>t(p.target.value)})]}),yt.jsxs("div",{className:"mb-6",children:[yt.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),yt.jsx("input",{type:"password",id:"password",className:"shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","data-form-type":"other",placeholder:"6+ character password",value:i,onChange:p=>a(p.target.value)})]}),yt.jsxs("div",{className:"flex items-center justify-between",children:[l?yt.jsx(yt.Fragment,{children:yt.jsxs("div",{children:[yt.jsx("p",{children:"Have an account?"}),yt.jsxs("p",{children:[yt.jsx("button",{onClick:()=>h(!l),children:" Sign in "}),"instead"]})]})}):yt.jsx(yt.Fragment,{children:yt.jsxs("div",{children:[yt.jsx("p",{children:"Don't have an account?"}),yt.jsxs("p",{children:[yt.jsx("button",{onClick:()=>h(!l),children:" Create one "}),"instead"]})]})}),yt.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:l?"Create account":"Sign in"})]})]})})}const mC="data:image/svg+xml,%3csvg%20width='57'%20height='13'%20viewBox='0%200%2057%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M49.3354%2012V0.800049H56.8874V2.91205H51.6874V9.88805H56.9994V12H49.3354ZM50.4554%207.31205V5.26405H56.1194V7.31205H50.4554Z'%20fill='black'/%3e%3cpath%20d='M31.5266%2012V0.800049H33.7186L37.7826%207.42405L36.3586%207.40805L40.4866%200.800049H42.5986V12H40.2466V8.20805C40.2466%207.23738%2040.2679%206.36272%2040.3106%205.58405C40.3639%204.80538%2040.4493%204.03738%2040.5666%203.28005L40.8386%204.03205L37.5586%209.10405H36.4866L33.2866%204.06405L33.5426%203.28005C33.6706%203.99472%2033.7559%204.73072%2033.7986%205.48805C33.8519%206.24538%2033.8786%207.15205%2033.8786%208.20805V12H31.5266Z'%20fill='black'/%3e%3cpath%20d='M19.8341%2012.1601C19.0128%2012.1601%2018.2501%2012.0161%2017.5461%2011.7281C16.8528%2011.4401%2016.2501%2011.0401%2015.7381%2010.5281C15.2368%2010.0054%2014.8421%209.39205%2014.5541%208.68805C14.2768%207.98405%2014.1381%207.21072%2014.1381%206.36805C14.1381%205.53605%2014.2768%204.76805%2014.5541%204.06405C14.8421%203.36005%2015.2368%202.74672%2015.7381%202.22405C16.2501%201.70138%2016.8528%201.29605%2017.5461%201.00805C18.2501%200.72005%2019.0128%200.57605%2019.8341%200.57605C20.6555%200.57605%2021.4075%200.72005%2022.0901%201.00805C22.7835%201.29605%2023.3861%201.70138%2023.8981%202.22405C24.4101%202.74672%2024.8048%203.36538%2025.0821%204.08005C25.3701%204.78405%2025.5141%205.54672%2025.5141%206.36805C25.5141%207.20005%2025.3701%207.96805%2025.0821%208.67205C24.8048%209.37605%2024.4101%209.98938%2023.8981%2010.5121C23.3861%2011.0347%2022.7835%2011.4401%2022.0901%2011.7281C21.4075%2012.0161%2020.6555%2012.1601%2019.8341%2012.1601ZM19.8341%209.88805C20.3035%209.88805%2020.7355%209.80272%2021.1301%209.63205C21.5248%209.45072%2021.8661%209.20538%2022.1541%208.89605C22.4528%208.57605%2022.6821%208.20272%2022.8421%207.77605C23.0021%207.34938%2023.0821%206.88005%2023.0821%206.36805C23.0821%205.86672%2023.0021%205.40272%2022.8421%204.97605C22.6821%204.54938%2022.4528%204.17605%2022.1541%203.85605C21.8661%203.53605%2021.5248%203.29072%2021.1301%203.12005C20.7355%202.93872%2020.3035%202.84805%2019.8341%202.84805C19.3648%202.84805%2018.9275%202.93872%2018.5221%203.12005C18.1275%203.29072%2017.7808%203.53605%2017.4821%203.85605C17.1941%204.16538%2016.9701%204.53872%2016.8101%204.97605C16.6501%205.40272%2016.5701%205.87205%2016.5701%206.38405C16.5701%207.05605%2016.7088%207.65872%2016.9861%208.19205C17.2741%208.71472%2017.6581%209.13072%2018.1381%209.44005C18.6288%209.73872%2019.1941%209.88805%2019.8341%209.88805Z'%20fill='black'/%3e%3cpath%20d='M3.77601%2012V2.96005H0.544006V0.800049H9.53601V2.96005H6.17601V12H3.77601Z'%20fill='black'/%3e%3c/svg%3e";function pC(){const[r,t]=fn.useState(null);fn.useEffect(()=>{const a=qv(Fa,l=>{t(l)});return()=>a()},[]);const i=()=>{Fa.signOut().then(()=>{console.log("User signed out")}).catch(a=>{console.log("Error with signout: ",a.message)})};return yt.jsxs("div",{className:"flex flex-row justify-between border-b border-gray-300 items-center p-4 pl-6 pr-6 w-full m-0 relative top-0 left-0 bg-white",children:[yt.jsx("img",{src:mC,alt:"Tome Logo",className:"sm"}),r?yt.jsxs("div",{className:"flex flex-row gap-2",children:[yt.jsx("p",{children:r.email}),yt.jsx("button",{onClick:i,children:"Sign out"})]}):yt.jsx("p",{children:"Sign in"})]})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function gC(r,t,i,a){function l(h){return h instanceof i?h:new i(function(d){d(h)})}return new(i||(i=Promise))(function(h,d){function p(w){try{v(a.next(w))}catch(D){d(D)}}function g(w){try{v(a.throw(w))}catch(D){d(D)}}function v(w){w.done?h(w.value):l(w.value).then(p,g)}v((a=a.apply(r,[])).next())})}function yC(r,t){var i={label:0,sent:function(){if(h[0]&1)throw h[1];return h[1]},trys:[],ops:[]},a,l,h,d;return d={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function p(v){return function(w){return g([v,w])}}function g(v){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,l&&(h=v[0]&2?l.return:v[0]?l.throw||((h=l.return)&&h.call(l),0):l.next)&&!(h=h.call(l,v[1])).done)return h;switch(l=0,h&&(v=[v[0]&2,h.value]),v[0]){case 0:case 1:h=v;break;case 4:return i.label++,{value:v[1],done:!1};case 5:i.label++,l=v[1],v=[0];continue;case 7:v=i.ops.pop(),i.trys.pop();continue;default:if(h=i.trys,!(h=h.length>0&&h[h.length-1])&&(v[0]===6||v[0]===2)){i=0;continue}if(v[0]===3&&(!h||v[1]>h[0]&&v[1]<h[3])){i.label=v[1];break}if(v[0]===6&&i.label<h[1]){i.label=h[1],h=v;break}if(h&&i.label<h[2]){i.label=h[2],i.ops.push(v);break}h[2]&&i.ops.pop(),i.trys.pop();continue}v=t.call(r,i)}catch(w){v=[6,w],l=0}finally{a=h=0}if(v[0]&5)throw v[1];return{value:v[0]?v[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ka=function(){return ka=Object.assign||function(t){for(var i,a=1,l=arguments.length;a<l;a++){i=arguments[a];for(var h in i)Object.prototype.hasOwnProperty.call(i,h)&&(t[h]=i[h])}return t},ka.apply(this,arguments)},NE=function(r){return{loading:r==null,value:r}},_C=function(){return function(r,t){switch(t.type){case"error":return ka(ka({},r),{error:t.error,loading:!1,value:void 0});case"reset":return NE(t.defaultValue);case"value":return ka(ka({},r),{error:void 0,loading:!1,value:t.value});default:return r}}},vC=function(r){var t=r?r():void 0,i=fn.useReducer(_C(),NE(t)),a=i[0],l=i[1],h=fn.useCallback(function(){var g=r?r():void 0;l({type:"reset",defaultValue:g})},[r]),d=fn.useCallback(function(g){l({type:"error",error:g})},[]),p=fn.useCallback(function(g){l({type:"value",value:g})},[]);return fn.useMemo(function(){return{error:a.error,loading:a.loading,reset:h,setError:d,setValue:p,value:a.value}},[a.error,a.loading,h,d,p,a.value])},ME=function(r,t){var i=vC(function(){return r.currentUser}),a=i.error,l=i.loading,h=i.setError,d=i.setValue,p=i.value;return fn.useEffect(function(){var g=qv(r,function(v){return gC(void 0,void 0,void 0,function(){var w;return yC(this,function(D){switch(D.label){case 0:return[3,4];case 1:return D.trys.push([1,3,,4]),[4,t.onUserChanged(v)];case 2:return D.sent(),[3,4];case 3:return w=D.sent(),h(w),[3,4];case 4:return d(v),[2]}})})},h);return function(){g()}},[r]),[p,l,a]};function EC(){const[r]=ME(Fa);return console.log(r),yt.jsx(yt.Fragment,{children:"List of artworks"})}function TC(){const[r]=ME(Fa);return console.log(r),yt.jsxs("div",{className:"flex flex-col min-h-screen w-full p-0",children:[yt.jsx(pC,{}),yt.jsx("div",{className:"flex-grow",children:r?yt.jsx(EC,{}):yt.jsx(dC,{})})]})}function AC(){const[r,t]=fn.useState(0);return yt.jsx(yt.Fragment,{children:yt.jsx(TC,{})})}fA.createRoot(document.getElementById("root")).render(yt.jsx(fn.StrictMode,{children:yt.jsx(AC,{})}));
