(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(l){if(l.ep)return;l.ep=!0;const h=i(l);fetch(l.href,h)}})();var Qf={exports:{}},tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function WT(){if(Ey)return tl;Ey=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,h){var d=null;if(h!==void 0&&(d=""+h),l.key!==void 0&&(d=""+l.key),"key"in l){h={};for(var p in l)p!=="key"&&(h[p]=l[p])}else h=l;return l=h.ref,{$$typeof:s,type:a,key:d,ref:l!==void 0?l:null,props:h}}return tl.Fragment=t,tl.jsx=i,tl.jsxs=i,tl}var Ty;function JT(){return Ty||(Ty=1,Qf.exports=WT()),Qf.exports}var ae=JT(),Xf={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function tA(){if(Ay)return gt;Ay=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),V=Symbol.iterator;function B(C){return C===null||typeof C!="object"?null:(C=V&&C[V]||C["@@iterator"],typeof C=="function"?C:null)}var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,at={};function tt(C,Y,rt){this.props=C,this.context=Y,this.refs=at,this.updater=rt||K}tt.prototype.isReactComponent={},tt.prototype.setState=function(C,Y){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Y,"setState")},tt.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function wt(){}wt.prototype=tt.prototype;function dt(C,Y,rt){this.props=C,this.context=Y,this.refs=at,this.updater=rt||K}var Et=dt.prototype=new wt;Et.constructor=dt,$(Et,tt.prototype),Et.isPureReactComponent=!0;var Bt=Array.isArray,mt={H:null,A:null,T:null,S:null},Nt=Object.prototype.hasOwnProperty;function M(C,Y,rt,W,J,yt){return rt=yt.ref,{$$typeof:s,type:C,key:Y,ref:rt!==void 0?rt:null,props:yt}}function b(C,Y){return M(C.type,Y,void 0,void 0,void 0,C.props)}function A(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function I(C){var Y={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(rt){return Y[rt]})}var N=/\/+/g;function P(C,Y){return typeof C=="object"&&C!==null&&C.key!=null?I(""+C.key):Y.toString(36)}function w(){}function de(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(w,w):(C.status="pending",C.then(function(Y){C.status==="pending"&&(C.status="fulfilled",C.value=Y)},function(Y){C.status==="pending"&&(C.status="rejected",C.reason=Y)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function oe(C,Y,rt,W,J){var yt=typeof C;(yt==="undefined"||yt==="boolean")&&(C=null);var pt=!1;if(C===null)pt=!0;else switch(yt){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(C.$$typeof){case s:case t:pt=!0;break;case R:return pt=C._init,oe(pt(C._payload),Y,rt,W,J)}}if(pt)return J=J(C),pt=W===""?"."+P(C,0):W,Bt(J)?(rt="",pt!=null&&(rt=pt.replace(N,"$&/")+"/"),oe(J,Y,rt,"",function(Zt){return Zt})):J!=null&&(A(J)&&(J=b(J,rt+(J.key==null||C&&C.key===J.key?"":(""+J.key).replace(N,"$&/")+"/")+pt)),Y.push(J)),1;pt=0;var le=W===""?".":W+":";if(Bt(C))for(var Mt=0;Mt<C.length;Mt++)W=C[Mt],yt=le+P(W,Mt),pt+=oe(W,Y,rt,yt,J);else if(Mt=B(C),typeof Mt=="function")for(C=Mt.call(C),Mt=0;!(W=C.next()).done;)W=W.value,yt=le+P(W,Mt++),pt+=oe(W,Y,rt,yt,J);else if(yt==="object"){if(typeof C.then=="function")return oe(de(C),Y,rt,W,J);throw Y=String(C),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return pt}function Z(C,Y,rt){if(C==null)return C;var W=[],J=0;return oe(C,W,"","",function(yt){return Y.call(rt,yt,J++)}),W}function ct(C){if(C._status===-1){var Y=C._result;Y=Y(),Y.then(function(rt){(C._status===0||C._status===-1)&&(C._status=1,C._result=rt)},function(rt){(C._status===0||C._status===-1)&&(C._status=2,C._result=rt)}),C._status===-1&&(C._status=0,C._result=Y)}if(C._status===1)return C._result.default;throw C._result}var ot=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function Pt(){}return gt.Children={map:Z,forEach:function(C,Y,rt){Z(C,function(){Y.apply(this,arguments)},rt)},count:function(C){var Y=0;return Z(C,function(){Y++}),Y},toArray:function(C){return Z(C,function(Y){return Y})||[]},only:function(C){if(!A(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},gt.Component=tt,gt.Fragment=i,gt.Profiler=l,gt.PureComponent=dt,gt.StrictMode=a,gt.Suspense=y,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mt,gt.act=function(){throw Error("act(...) is not supported in production builds of React.")},gt.cache=function(C){return function(){return C.apply(null,arguments)}},gt.cloneElement=function(C,Y,rt){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var W=$({},C.props),J=C.key,yt=void 0;if(Y!=null)for(pt in Y.ref!==void 0&&(yt=void 0),Y.key!==void 0&&(J=""+Y.key),Y)!Nt.call(Y,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&Y.ref===void 0||(W[pt]=Y[pt]);var pt=arguments.length-2;if(pt===1)W.children=rt;else if(1<pt){for(var le=Array(pt),Mt=0;Mt<pt;Mt++)le[Mt]=arguments[Mt+2];W.children=le}return M(C.type,J,void 0,void 0,yt,W)},gt.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:h,_context:C},C},gt.createElement=function(C,Y,rt){var W,J={},yt=null;if(Y!=null)for(W in Y.key!==void 0&&(yt=""+Y.key),Y)Nt.call(Y,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(J[W]=Y[W]);var pt=arguments.length-2;if(pt===1)J.children=rt;else if(1<pt){for(var le=Array(pt),Mt=0;Mt<pt;Mt++)le[Mt]=arguments[Mt+2];J.children=le}if(C&&C.defaultProps)for(W in pt=C.defaultProps,pt)J[W]===void 0&&(J[W]=pt[W]);return M(C,yt,void 0,void 0,null,J)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(C){return{$$typeof:p,render:C}},gt.isValidElement=A,gt.lazy=function(C){return{$$typeof:R,_payload:{_status:-1,_result:C},_init:ct}},gt.memo=function(C,Y){return{$$typeof:v,type:C,compare:Y===void 0?null:Y}},gt.startTransition=function(C){var Y=mt.T,rt={};mt.T=rt;try{var W=C(),J=mt.S;J!==null&&J(rt,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Pt,ot)}catch(yt){ot(yt)}finally{mt.T=Y}},gt.unstable_useCacheRefresh=function(){return mt.H.useCacheRefresh()},gt.use=function(C){return mt.H.use(C)},gt.useActionState=function(C,Y,rt){return mt.H.useActionState(C,Y,rt)},gt.useCallback=function(C,Y){return mt.H.useCallback(C,Y)},gt.useContext=function(C){return mt.H.useContext(C)},gt.useDebugValue=function(){},gt.useDeferredValue=function(C,Y){return mt.H.useDeferredValue(C,Y)},gt.useEffect=function(C,Y){return mt.H.useEffect(C,Y)},gt.useId=function(){return mt.H.useId()},gt.useImperativeHandle=function(C,Y,rt){return mt.H.useImperativeHandle(C,Y,rt)},gt.useInsertionEffect=function(C,Y){return mt.H.useInsertionEffect(C,Y)},gt.useLayoutEffect=function(C,Y){return mt.H.useLayoutEffect(C,Y)},gt.useMemo=function(C,Y){return mt.H.useMemo(C,Y)},gt.useOptimistic=function(C,Y){return mt.H.useOptimistic(C,Y)},gt.useReducer=function(C,Y,rt){return mt.H.useReducer(C,Y,rt)},gt.useRef=function(C){return mt.H.useRef(C)},gt.useState=function(C){return mt.H.useState(C)},gt.useSyncExternalStore=function(C,Y,rt){return mt.H.useSyncExternalStore(C,Y,rt)},gt.useTransition=function(){return mt.H.useTransition()},gt.version="19.0.0",gt}var Sy;function kd(){return Sy||(Sy=1,Xf.exports=tA()),Xf.exports}var Rs=kd(),$f={exports:{}},el={},Zf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by;function eA(){return by||(by=1,function(s){function t(Z,ct){var ot=Z.length;Z.push(ct);t:for(;0<ot;){var Pt=ot-1>>>1,C=Z[Pt];if(0<l(C,ct))Z[Pt]=ct,Z[ot]=C,ot=Pt;else break t}}function i(Z){return Z.length===0?null:Z[0]}function a(Z){if(Z.length===0)return null;var ct=Z[0],ot=Z.pop();if(ot!==ct){Z[0]=ot;t:for(var Pt=0,C=Z.length,Y=C>>>1;Pt<Y;){var rt=2*(Pt+1)-1,W=Z[rt],J=rt+1,yt=Z[J];if(0>l(W,ot))J<C&&0>l(yt,W)?(Z[Pt]=yt,Z[J]=ot,Pt=J):(Z[Pt]=W,Z[rt]=ot,Pt=rt);else if(J<C&&0>l(yt,ot))Z[Pt]=yt,Z[J]=ot,Pt=J;else break t}}return ct}function l(Z,ct){var ot=Z.sortIndex-ct.sortIndex;return ot!==0?ot:Z.id-ct.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var y=[],v=[],R=1,V=null,B=3,K=!1,$=!1,at=!1,tt=typeof setTimeout=="function"?setTimeout:null,wt=typeof clearTimeout=="function"?clearTimeout:null,dt=typeof setImmediate<"u"?setImmediate:null;function Et(Z){for(var ct=i(v);ct!==null;){if(ct.callback===null)a(v);else if(ct.startTime<=Z)a(v),ct.sortIndex=ct.expirationTime,t(y,ct);else break;ct=i(v)}}function Bt(Z){if(at=!1,Et(Z),!$)if(i(y)!==null)$=!0,de();else{var ct=i(v);ct!==null&&oe(Bt,ct.startTime-Z)}}var mt=!1,Nt=-1,M=5,b=-1;function A(){return!(s.unstable_now()-b<M)}function I(){if(mt){var Z=s.unstable_now();b=Z;var ct=!0;try{t:{$=!1,at&&(at=!1,wt(Nt),Nt=-1),K=!0;var ot=B;try{e:{for(Et(Z),V=i(y);V!==null&&!(V.expirationTime>Z&&A());){var Pt=V.callback;if(typeof Pt=="function"){V.callback=null,B=V.priorityLevel;var C=Pt(V.expirationTime<=Z);if(Z=s.unstable_now(),typeof C=="function"){V.callback=C,Et(Z),ct=!0;break e}V===i(y)&&a(y),Et(Z)}else a(y);V=i(y)}if(V!==null)ct=!0;else{var Y=i(v);Y!==null&&oe(Bt,Y.startTime-Z),ct=!1}}break t}finally{V=null,B=ot,K=!1}ct=void 0}}finally{ct?N():mt=!1}}}var N;if(typeof dt=="function")N=function(){dt(I)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,w=P.port2;P.port1.onmessage=I,N=function(){w.postMessage(null)}}else N=function(){tt(I,0)};function de(){mt||(mt=!0,N())}function oe(Z,ct){Nt=tt(function(){Z(s.unstable_now())},ct)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){$||K||($=!0,de())},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_getFirstCallbackNode=function(){return i(y)},s.unstable_next=function(Z){switch(B){case 1:case 2:case 3:var ct=3;break;default:ct=B}var ot=B;B=ct;try{return Z()}finally{B=ot}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,ct){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ot=B;B=Z;try{return ct()}finally{B=ot}},s.unstable_scheduleCallback=function(Z,ct,ot){var Pt=s.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?Pt+ot:Pt):ot=Pt,Z){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=ot+C,Z={id:R++,callback:ct,priorityLevel:Z,startTime:ot,expirationTime:C,sortIndex:-1},ot>Pt?(Z.sortIndex=ot,t(v,Z),i(y)===null&&Z===i(v)&&(at?(wt(Nt),Nt=-1):at=!0,oe(Bt,ot-Pt))):(Z.sortIndex=C,t(y,Z),$||K||($=!0,de())),Z},s.unstable_shouldYield=A,s.unstable_wrapCallback=function(Z){var ct=B;return function(){var ot=B;B=ct;try{return Z.apply(this,arguments)}finally{B=ot}}}}(Wf)),Wf}var wy;function nA(){return wy||(wy=1,Zf.exports=eA()),Zf.exports}var Jf={exports:{}},Be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry;function iA(){if(Ry)return Be;Ry=1;var s=kd();function t(y){var v="https://react.dev/errors/"+y;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)v+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+y+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function h(y,v,R){var V=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:V==null?null:""+V,children:y,containerInfo:v,implementation:R}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,v){if(y==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Be.createPortal=function(y,v){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return h(y,v,null,R)},Be.flushSync=function(y){var v=d.T,R=a.p;try{if(d.T=null,a.p=2,y)return y()}finally{d.T=v,a.p=R,a.d.f()}},Be.preconnect=function(y,v){typeof y=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,a.d.C(y,v))},Be.prefetchDNS=function(y){typeof y=="string"&&a.d.D(y)},Be.preinit=function(y,v){if(typeof y=="string"&&v&&typeof v.as=="string"){var R=v.as,V=p(R,v.crossOrigin),B=typeof v.integrity=="string"?v.integrity:void 0,K=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;R==="style"?a.d.S(y,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:V,integrity:B,fetchPriority:K}):R==="script"&&a.d.X(y,{crossOrigin:V,integrity:B,fetchPriority:K,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Be.preinitModule=function(y,v){if(typeof y=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var R=p(v.as,v.crossOrigin);a.d.M(y,{crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&a.d.M(y)},Be.preload=function(y,v){if(typeof y=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var R=v.as,V=p(R,v.crossOrigin);a.d.L(y,R,{crossOrigin:V,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Be.preloadModule=function(y,v){if(typeof y=="string")if(v){var R=p(v.as,v.crossOrigin);a.d.m(y,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:R,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else a.d.m(y)},Be.requestFormReset=function(y){a.d.r(y)},Be.unstable_batchedUpdates=function(y,v){return y(v)},Be.useFormState=function(y,v,R){return d.H.useFormState(y,v,R)},Be.useFormStatus=function(){return d.H.useHostTransitionStatus()},Be.version="19.0.0",Be}var Iy;function rA(){if(Iy)return Jf.exports;Iy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Jf.exports=iA(),Jf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy;function sA(){if(Cy)return el;Cy=1;var s=nA(),t=kd(),i=rA();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var h=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),K=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),Et=Symbol.for("react.offscreen"),Bt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Nt(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var M=Symbol.for("react.client.reference");function b(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===M?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case y:return"Fragment";case p:return"Portal";case R:return"Profiler";case v:return"StrictMode";case at:return"Suspense";case tt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case K:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case $:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wt:return n=e.displayName||null,n!==null?n:b(e.type)||"Memo";case dt:n=e._payload,e=e._init;try{return b(e(n))}catch{}}return null}var A=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.assign,N,P;function w(e){if(N===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||"",P=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N+e+P}var de=!1;function oe(e,n){if(!e||de)return"";de=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(H){var x=H}Reflect.construct(e,[],F)}else{try{F.call()}catch(H){x=H}e.call(F.prototype)}}else{try{throw Error()}catch(H){x=H}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(H){if(H&&x&&typeof H.stack=="string")return[H.stack,x.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var S=_.split(`
`),D=E.split(`
`);for(c=o=0;o<S.length&&!S[o].includes("DetermineComponentFrameRoot");)o++;for(;c<D.length&&!D[c].includes("DetermineComponentFrameRoot");)c++;if(o===S.length||c===D.length)for(o=S.length-1,c=D.length-1;1<=o&&0<=c&&S[o]!==D[c];)c--;for(;1<=o&&0<=c;o--,c--)if(S[o]!==D[c]){if(o!==1||c!==1)do if(o--,c--,0>c||S[o]!==D[c]){var j=`
`+S[o].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=o&&0<=c);break}}}finally{de=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?w(r):""}function Z(e){switch(e.tag){case 26:case 27:case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function ct(e){try{var n="";do n+=Z(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function ot(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function Pt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function C(e){if(ot(e)!==e)throw Error(a(188))}function Y(e){var n=e.alternate;if(!n){if(n=ot(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===r)return C(c),e;if(f===o)return C(c),n;f=f.sibling}throw Error(a(188))}if(r.return!==o.return)r=c,o=f;else{for(var _=!1,E=c.child;E;){if(E===r){_=!0,r=c,o=f;break}if(E===o){_=!0,o=c,r=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===r){_=!0,r=f,o=c;break}if(E===o){_=!0,o=f,r=c;break}E=E.sibling}if(!_)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=rt(e),n!==null)return n;e=e.sibling}return null}var W=Array.isArray,J=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yt={pending:!1,data:null,method:null,action:null},pt=[],le=-1;function Mt(e){return{current:e}}function Zt(e){0>le||(e.current=pt[le],pt[le]=null,le--)}function xt(e,n){le++,pt[le]=e.current,e.current=n}var Fe=Mt(null),di=Mt(null),dn=Mt(null),Yi=Mt(null);function Qi(e,n){switch(xt(dn,n),xt(di,e),xt(Fe,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Xg(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=Xg(e),n=$g(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Zt(Fe),xt(Fe,n)}function mi(){Zt(Fe),Zt(di),Zt(dn)}function Qa(e){e.memoizedState!==null&&xt(Yi,e);var n=Fe.current,r=$g(n,e.type);n!==r&&(xt(di,e),xt(Fe,r))}function js(e){di.current===e&&(Zt(Fe),Zt(di)),Yi.current===e&&(Zt(Yi),Xo._currentValue=yt)}var qs=Object.prototype.hasOwnProperty,Fr=s.unstable_scheduleCallback,Gs=s.unstable_cancelCallback,Xc=s.unstable_shouldYield,Xa=s.unstable_requestPaint,We=s.unstable_now,Dl=s.unstable_getCurrentPriorityLevel,me=s.unstable_ImmediatePriority,Ee=s.unstable_UserBlockingPriority,pi=s.unstable_NormalPriority,Nl=s.unstable_LowPriority,$a=s.unstable_IdlePriority,$c=s.log,Kr=s.unstable_setDisableYieldValue,Xi=null,xe=null;function Za(e){if(xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(Xi,e,void 0,(e.current.flags&128)===128)}catch{}}function Gn(e){if(typeof $c=="function"&&Kr(e),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(Xi,e)}catch{}}var Ke=Math.clz32?Math.clz32:Vl,Wa=Math.log,Ml=Math.LN2;function Vl(e){return e>>>=0,e===0?32:31-(Wa(e)/Ml|0)|0}var Fn=128,$i=4194304;function Mn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mn(e,n){var r=e.pendingLanes;if(r===0)return 0;var o=0,c=e.suspendedLanes,f=e.pingedLanes,_=e.warmLanes;e=e.finishedLanes!==0;var E=r&134217727;return E!==0?(r=E&~c,r!==0?o=Mn(r):(f&=E,f!==0?o=Mn(f):e||(_=E&~_,_!==0&&(o=Mn(_))))):(E=r&~c,E!==0?o=Mn(E):f!==0?o=Mn(f):e||(_=r&~_,_!==0&&(o=Mn(_)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,_=n&-n,c>=_||c===32&&(_&4194176)!==0)?n:o}function Zi(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Fs(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ja(){var e=Fn;return Fn<<=1,(Fn&4194176)===0&&(Fn=128),e}function Wi(){var e=$i;return $i<<=1,($i&62914560)===0&&($i=4194304),e}function Ks(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function re(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ul(e,n,r,o,c,f){var _=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var E=e.entanglements,S=e.expirationTimes,D=e.hiddenUpdates;for(r=_&~r;0<r;){var j=31-Ke(r),F=1<<j;E[j]=0,S[j]=-1;var x=D[j];if(x!==null)for(D[j]=null,j=0;j<x.length;j++){var H=x[j];H!==null&&(H.lane&=-536870913)}r&=~F}o!==0&&Ji(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Ji(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ke(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&4194218}function tr(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-Ke(r),c=1<<o;c&n|e[o]&n&&(e[o]|=n),r&=~c}}function kl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pl(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:my(e.type))}function er(e,n){var r=J.p;try{return J.p=e,n()}finally{J.p=r}}var Kn=Math.random().toString(36).slice(2),Te="__reactFiber$"+Kn,pe="__reactProps$"+Kn,gi="__reactContainer$"+Kn,Yr="__reactEvents$"+Kn,Ys="__reactListeners$"+Kn,Yn="__reactHandles$"+Kn,to="__reactResources$"+Kn,nr="__reactMarker$"+Kn;function Qr(e){delete e[Te],delete e[pe],delete e[Yr],delete e[Ys],delete e[Yn]}function Vn(e){var n=e[Te];if(n)return n;for(var r=e.parentNode;r;){if(n=r[gi]||r[Te]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Jg(e);e!==null;){if(r=e[Te])return r;e=Jg(e)}return n}e=r,r=e.parentNode}return null}function yi(e){if(e=e[Te]||e[gi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ir(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function rr(e){var n=e[to];return n||(n=e[to]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qt(e){e[nr]=!0}var eo=new Set,Qs={};function sn(e,n){Je(e,n),Je(e+"Capture",n)}function Je(e,n){for(Qs[e]=n,e=0;e<n.length;e++)eo.add(n[e])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),no={},io={};function Ll(e){return qs.call(io,e)?!0:qs.call(no,e)?!1:Zc.test(e)?io[e]=!0:(no[e]=!0,!1)}function sr(e,n,r){if(Ll(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function ar(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function pn(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+o)}}function Ye(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wc(e){var n=xl(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){o=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(_){o=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xr(e){e._valueTracker||(e._valueTracker=Wc(e))}function ro(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=xl(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}function Xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _i=/[\n"\\]/g;function Wt(e){return e.replace(_i,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function or(e,n,r,o,c,f,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ye(n)):e.value!==""+Ye(n)&&(e.value=""+Ye(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?$s(e,_,Ye(n)):r!=null?$s(e,_,Ye(r)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Ye(E):e.removeAttribute("name")}function $r(e,n,r,o,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+Ye(r):"",n=n!=null?""+Ye(n):r,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function $s(e,n,r){n==="number"&&Xs(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Vt(e,n,r,o){if(e=e.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=n.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Ye(r),n=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Zr(e,n,r){if(n!=null&&(n=""+Ye(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+Ye(r):""}function lr(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(W(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Ye(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o)}function gn(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Jc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function so(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||Jc.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function zl(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&so(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&so(e,f,n[f])}function ao(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var th=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),eh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qn(e){return eh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yn=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vi=null,Ei=null;function Ti(e){var n=yi(e);if(n&&(e=n.stateNode)){var r=e[pe]||null;t:switch(e=n.stateNode,n.type){case"input":if(or(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Wt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var c=o[pe]||null;if(!c)throw Error(a(90));or(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&ro(o)}break t;case"textarea":Zr(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&Vt(e,!!r.multiple,n,!1)}}}var oo=!1;function Bl(e,n,r){if(oo)return e(n,r);oo=!0;try{var o=e(n);return o}finally{if(oo=!1,(vi!==null||Ei!==null)&&(Nu(),vi&&(n=vi,e=Ei,Ei=vi=null,Ti(n),e)))for(n=0;n<e.length;n++)Ti(e[n])}}function Wr(e,n){var r=e.stateNode;if(r===null)return null;var o=r[pe]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var _n=!1;if(an)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){_n=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{_n=!1}var Xn=null,ur=null,Ai=null;function lo(){if(Ai)return Ai;var e,n=ur,r=n.length,o,c="value"in Xn?Xn.value:Xn.textContent,f=c.length;for(e=0;e<r&&n[e]===c[e];e++);var _=r-e;for(o=1;o<=_&&n[r-o]===c[f-o];o++);return Ai=c.slice(e,1<o?1-o:void 0)}function $n(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Zn(){return!0}function uo(){return!1}function Ae(e){function n(r,o,c,f,_){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(r=e[E],this[E]=r?r(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zn:uo,this.isPropagationStopped=uo,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Zn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Zn)},persist:function(){},isPersistent:Zn}),n}var Lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=Ae(Lt),ts=I({},Lt,{view:0,detail:0}),Hl=Ae(ts),Js,ta,Wn,es=I({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(Js=e.screenX-Wn.screenX,ta=e.screenY-Wn.screenY):ta=Js=0,Wn=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:ta}}),vn=Ae(es),jl=I({},es,{dataTransfer:0}),nh=Ae(jl),ns=I({},ts,{relatedTarget:0}),ea=Ae(ns),co=I({},Lt,{animationName:0,elapsedTime:0,pseudoElement:0}),na=Ae(co),ql=I({},Lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ia=Ae(ql),ih=I({},Lt,{data:0}),ho=Ae(ih),is={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fo(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fl[e])?!!n[e]:!1}function rs(){return fo}var Kl=I({},ts,{key:function(e){if(e.key){var n=is[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?$n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ra=Ae(Kl),Yl=I({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mo=Ae(Yl),Si=I({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),Ql=Ae(Si),Xl=I({},Lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),$l=Ae(Xl),Zl=I({},es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sa=Ae(Zl),Qe=I({},Lt,{newState:0,oldState:0}),Wl=Ae(Qe),Jl=[9,13,27,32],Jn=an&&"CompositionEvent"in window,u=null;an&&"documentMode"in document&&(u=document.documentMode);var m=an&&"TextEvent"in window&&!u,g=an&&(!Jn||u&&8<u&&11>=u),T=" ",k=!1;function z(e,n){switch(e){case"keyup":return Jl.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function ge(e,n){switch(e){case"compositionend":return X(n);case"keypress":return n.which!==32?null:(k=!0,T);case"textInput":return e=n.data,e===T&&k?null:e;default:return null}}function Ct(e,n){if(It)return e==="compositionend"||!Jn&&z(e,n)?(e=lo(),Ai=ur=Xn=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return g&&n.locale!=="ko"?null:n.data;default:return null}}var Se={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ye(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Se[e.type]:n==="textarea"}function bi(e,n,r,o){vi?Ei?Ei.push(o):Ei=[o]:vi=o,n=Pu(n,"onChange"),0<n.length&&(r=new Ws("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var De=null,ti=null;function po(e){Gg(e,0)}function tu(e){var n=ir(e);if(ro(n))return e}function vm(e,n){if(e==="change")return n}var Em=!1;if(an){var rh;if(an){var sh="oninput"in document;if(!sh){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),sh=typeof Tm.oninput=="function"}rh=sh}else rh=!1;Em=rh&&(!document.documentMode||9<document.documentMode)}function Am(){De&&(De.detachEvent("onpropertychange",Sm),ti=De=null)}function Sm(e){if(e.propertyName==="value"&&tu(ti)){var n=[];bi(n,ti,e,Zs(e)),Bl(po,n)}}function C0(e,n,r){e==="focusin"?(Am(),De=n,ti=r,De.attachEvent("onpropertychange",Sm)):e==="focusout"&&Am()}function O0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tu(ti)}function D0(e,n){if(e==="click")return tu(n)}function N0(e,n){if(e==="input"||e==="change")return tu(n)}function M0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:M0;function go(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!qs.call(n,c)||!on(e[c],n[c]))return!1}return!0}function bm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wm(e,n){var r=bm(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=bm(r)}}function Rm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Im(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Xs(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Xs(e.document)}return n}function ah(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function V0(e,n){var r=Im(n);n=e.focusedElem;var o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Rm(n.ownerDocument.documentElement,n)){if(o!==null&&ah(n)){if(e=o.start,r=o.end,r===void 0&&(r=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(r,n.value.length);else if(r=(e=n.ownerDocument||document)&&e.defaultView||window,r.getSelection){r=r.getSelection();var c=n.textContent.length,f=Math.min(o.start,c);o=o.end===void 0?f:Math.min(o.end,c),!r.extend&&f>o&&(c=o,o=f,f=c),c=wm(n,f);var _=wm(n,o);c&&_&&(r.rangeCount!==1||r.anchorNode!==c.node||r.anchorOffset!==c.offset||r.focusNode!==_.node||r.focusOffset!==_.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),r.removeAllRanges(),f>o?(r.addRange(e),r.extend(_.node,_.offset)):(e.setEnd(_.node,_.offset),r.addRange(e)))}}for(e=[],r=n;r=r.parentNode;)r.nodeType===1&&e.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)r=e[n],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var U0=an&&"documentMode"in document&&11>=document.documentMode,aa=null,oh=null,yo=null,lh=!1;function Cm(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;lh||aa==null||aa!==Xs(o)||(o=aa,"selectionStart"in o&&ah(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yo&&go(yo,o)||(yo=o,o=Pu(oh,"onSelect"),0<o.length&&(n=new Ws("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=aa)))}function ss(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var oa={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},uh={},Om={};an&&(Om=document.createElement("div").style,"AnimationEvent"in window||(delete oa.animationend.animation,delete oa.animationiteration.animation,delete oa.animationstart.animation),"TransitionEvent"in window||delete oa.transitionend.transition);function as(e){if(uh[e])return uh[e];if(!oa[e])return e;var n=oa[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Om)return uh[e]=n[r];return e}var Dm=as("animationend"),Nm=as("animationiteration"),Mm=as("animationstart"),k0=as("transitionrun"),P0=as("transitionstart"),L0=as("transitioncancel"),Vm=as("transitionend"),Um=new Map,km="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Un(e,n){Um.set(e,n),sn(n,[e])}var En=[],la=0,ch=0;function eu(){for(var e=la,n=ch=la=0;n<e;){var r=En[n];En[n++]=null;var o=En[n];En[n++]=null;var c=En[n];En[n++]=null;var f=En[n];if(En[n++]=null,o!==null&&c!==null){var _=o.pending;_===null?c.next=c:(c.next=_.next,_.next=c),o.pending=c}f!==0&&Pm(r,c,f)}}function nu(e,n,r,o){En[la++]=e,En[la++]=n,En[la++]=r,En[la++]=o,ch|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function hh(e,n,r,o){return nu(e,n,r,o),iu(e)}function cr(e,n){return nu(e,null,null,n),iu(e)}function Pm(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var c=!1,f=e.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-Ke(r),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=r|536870912)}function iu(e){if(50<jo)throw jo=0,_f=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ua={},Lm=new WeakMap;function Tn(e,n){if(typeof e=="object"&&e!==null){var r=Lm.get(e);return r!==void 0?r:(n={value:e,source:n,stack:ct(n)},Lm.set(e,n),n)}return{value:e,source:n,stack:ct(n)}}var ca=[],ha=0,ru=null,su=0,An=[],Sn=0,os=null,wi=1,Ri="";function ls(e,n){ca[ha++]=su,ca[ha++]=ru,ru=e,su=n}function xm(e,n,r){An[Sn++]=wi,An[Sn++]=Ri,An[Sn++]=os,os=e;var o=wi;e=Ri;var c=32-Ke(o)-1;o&=~(1<<c),r+=1;var f=32-Ke(n)+c;if(30<f){var _=c-c%5;f=(o&(1<<_)-1).toString(32),o>>=_,c-=_,wi=1<<32-Ke(n)+c|r<<c|o,Ri=f+e}else wi=1<<f|r<<c|o,Ri=e}function fh(e){e.return!==null&&(ls(e,1),xm(e,1,0))}function dh(e){for(;e===ru;)ru=ca[--ha],ca[ha]=null,su=ca[--ha],ca[ha]=null;for(;e===os;)os=An[--Sn],An[Sn]=null,Ri=An[--Sn],An[Sn]=null,wi=An[--Sn],An[Sn]=null}var Xe=null,Ne=null,Ut=!1,kn=null,ei=!1,mh=Error(a(519));function us(e){var n=Error(a(418,""));throw Eo(Tn(n,e)),mh}function zm(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[Te]=e,n[pe]=o,r){case"dialog":Rt("cancel",n),Rt("close",n);break;case"iframe":case"object":case"embed":Rt("load",n);break;case"video":case"audio":for(r=0;r<Go.length;r++)Rt(Go[r],n);break;case"source":Rt("error",n);break;case"img":case"image":case"link":Rt("error",n),Rt("load",n);break;case"details":Rt("toggle",n);break;case"input":Rt("invalid",n),$r(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Xr(n);break;case"select":Rt("invalid",n);break;case"textarea":Rt("invalid",n),lr(n,o.value,o.defaultValue,o.children),Xr(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Qg(n.textContent,r)?(o.popover!=null&&(Rt("beforetoggle",n),Rt("toggle",n)),o.onScroll!=null&&Rt("scroll",n),o.onScrollEnd!=null&&Rt("scrollend",n),o.onClick!=null&&(n.onclick=Lu),n=!0):n=!1,n||us(e)}function Bm(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 3:case 27:ei=!0;return;case 5:case 13:ei=!1;return;default:Xe=Xe.return}}function _o(e){if(e!==Xe)return!1;if(!Ut)return Bm(e),Ut=!0,!1;var n=!1,r;if((r=e.tag!==3&&e.tag!==27)&&((r=e.tag===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||kf(e.type,e.memoizedProps)),r=!r),r&&(n=!0),n&&Ne&&us(e),Bm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){Ne=Ln(e.nextSibling);break t}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}Ne=null}}else Ne=Xe?Ln(e.stateNode.nextSibling):null;return!0}function vo(){Ne=Xe=null,Ut=!1}function Eo(e){kn===null?kn=[e]:kn.push(e)}var To=Error(a(460)),Hm=Error(a(474)),ph={then:function(){}};function jm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function au(){}function qm(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(au,au),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===To?Error(a(483)):e;default:if(typeof n.status=="string")n.then(au,au);else{if(e=Gt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===To?Error(a(483)):e}throw Ao=n,To}}var Ao=null;function Gm(){if(Ao===null)throw Error(a(459));var e=Ao;return Ao=null,e}var fa=null,So=0;function ou(e){var n=So;return So+=1,fa===null&&(fa=[]),qm(fa,e,n)}function bo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function lu(e,n){throw n.$$typeof===h?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Fm(e){var n=e._init;return n(e._payload)}function Km(e){function n(U,O){if(e){var L=U.deletions;L===null?(U.deletions=[O],U.flags|=16):L.push(O)}}function r(U,O){if(!e)return null;for(;O!==null;)n(U,O),O=O.sibling;return null}function o(U){for(var O=new Map;U!==null;)U.key!==null?O.set(U.key,U):O.set(U.index,U),U=U.sibling;return O}function c(U,O){return U=Ar(U,O),U.index=0,U.sibling=null,U}function f(U,O,L){return U.index=L,e?(L=U.alternate,L!==null?(L=L.index,L<O?(U.flags|=33554434,O):L):(U.flags|=33554434,O)):(U.flags|=1048576,O)}function _(U){return e&&U.alternate===null&&(U.flags|=33554434),U}function E(U,O,L,q){return O===null||O.tag!==6?(O=cf(L,U.mode,q),O.return=U,O):(O=c(O,L),O.return=U,O)}function S(U,O,L,q){var et=L.type;return et===y?j(U,O,L.props.children,q,L.key):O!==null&&(O.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===dt&&Fm(et)===O.type)?(O=c(O,L.props),bo(O,L),O.return=U,O):(O=Ru(L.type,L.key,L.props,null,U.mode,q),bo(O,L),O.return=U,O)}function D(U,O,L,q){return O===null||O.tag!==4||O.stateNode.containerInfo!==L.containerInfo||O.stateNode.implementation!==L.implementation?(O=hf(L,U.mode,q),O.return=U,O):(O=c(O,L.children||[]),O.return=U,O)}function j(U,O,L,q,et){return O===null||O.tag!==7?(O=vs(L,U.mode,q,et),O.return=U,O):(O=c(O,L),O.return=U,O)}function F(U,O,L){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=cf(""+O,U.mode,L),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case d:return L=Ru(O.type,O.key,O.props,null,U.mode,L),bo(L,O),L.return=U,L;case p:return O=hf(O,U.mode,L),O.return=U,O;case dt:var q=O._init;return O=q(O._payload),F(U,O,L)}if(W(O)||Nt(O))return O=vs(O,U.mode,L,null),O.return=U,O;if(typeof O.then=="function")return F(U,ou(O),L);if(O.$$typeof===K)return F(U,Su(U,O),L);lu(U,O)}return null}function x(U,O,L,q){var et=O!==null?O.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return et!==null?null:E(U,O,""+L,q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case d:return L.key===et?S(U,O,L,q):null;case p:return L.key===et?D(U,O,L,q):null;case dt:return et=L._init,L=et(L._payload),x(U,O,L,q)}if(W(L)||Nt(L))return et!==null?null:j(U,O,L,q,null);if(typeof L.then=="function")return x(U,O,ou(L),q);if(L.$$typeof===K)return x(U,O,Su(U,L),q);lu(U,L)}return null}function H(U,O,L,q,et){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return U=U.get(L)||null,E(O,U,""+q,et);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case d:return U=U.get(q.key===null?L:q.key)||null,S(O,U,q,et);case p:return U=U.get(q.key===null?L:q.key)||null,D(O,U,q,et);case dt:var Tt=q._init;return q=Tt(q._payload),H(U,O,L,q,et)}if(W(q)||Nt(q))return U=U.get(L)||null,j(O,U,q,et,null);if(typeof q.then=="function")return H(U,O,L,ou(q),et);if(q.$$typeof===K)return H(U,O,L,Su(O,q),et);lu(O,q)}return null}function it(U,O,L,q){for(var et=null,Tt=null,st=O,lt=O=0,Re=null;st!==null&&lt<L.length;lt++){st.index>lt?(Re=st,st=null):Re=st.sibling;var kt=x(U,st,L[lt],q);if(kt===null){st===null&&(st=Re);break}e&&st&&kt.alternate===null&&n(U,st),O=f(kt,O,lt),Tt===null?et=kt:Tt.sibling=kt,Tt=kt,st=Re}if(lt===L.length)return r(U,st),Ut&&ls(U,lt),et;if(st===null){for(;lt<L.length;lt++)st=F(U,L[lt],q),st!==null&&(O=f(st,O,lt),Tt===null?et=st:Tt.sibling=st,Tt=st);return Ut&&ls(U,lt),et}for(st=o(st);lt<L.length;lt++)Re=H(st,U,lt,L[lt],q),Re!==null&&(e&&Re.alternate!==null&&st.delete(Re.key===null?lt:Re.key),O=f(Re,O,lt),Tt===null?et=Re:Tt.sibling=Re,Tt=Re);return e&&st.forEach(function(Or){return n(U,Or)}),Ut&&ls(U,lt),et}function ft(U,O,L,q){if(L==null)throw Error(a(151));for(var et=null,Tt=null,st=O,lt=O=0,Re=null,kt=L.next();st!==null&&!kt.done;lt++,kt=L.next()){st.index>lt?(Re=st,st=null):Re=st.sibling;var Or=x(U,st,kt.value,q);if(Or===null){st===null&&(st=Re);break}e&&st&&Or.alternate===null&&n(U,st),O=f(Or,O,lt),Tt===null?et=Or:Tt.sibling=Or,Tt=Or,st=Re}if(kt.done)return r(U,st),Ut&&ls(U,lt),et;if(st===null){for(;!kt.done;lt++,kt=L.next())kt=F(U,kt.value,q),kt!==null&&(O=f(kt,O,lt),Tt===null?et=kt:Tt.sibling=kt,Tt=kt);return Ut&&ls(U,lt),et}for(st=o(st);!kt.done;lt++,kt=L.next())kt=H(st,U,lt,kt.value,q),kt!==null&&(e&&kt.alternate!==null&&st.delete(kt.key===null?lt:kt.key),O=f(kt,O,lt),Tt===null?et=kt:Tt.sibling=kt,Tt=kt);return e&&st.forEach(function(ZT){return n(U,ZT)}),Ut&&ls(U,lt),et}function ee(U,O,L,q){if(typeof L=="object"&&L!==null&&L.type===y&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case d:t:{for(var et=L.key;O!==null;){if(O.key===et){if(et=L.type,et===y){if(O.tag===7){r(U,O.sibling),q=c(O,L.props.children),q.return=U,U=q;break t}}else if(O.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===dt&&Fm(et)===O.type){r(U,O.sibling),q=c(O,L.props),bo(q,L),q.return=U,U=q;break t}r(U,O);break}else n(U,O);O=O.sibling}L.type===y?(q=vs(L.props.children,U.mode,q,L.key),q.return=U,U=q):(q=Ru(L.type,L.key,L.props,null,U.mode,q),bo(q,L),q.return=U,U=q)}return _(U);case p:t:{for(et=L.key;O!==null;){if(O.key===et)if(O.tag===4&&O.stateNode.containerInfo===L.containerInfo&&O.stateNode.implementation===L.implementation){r(U,O.sibling),q=c(O,L.children||[]),q.return=U,U=q;break t}else{r(U,O);break}else n(U,O);O=O.sibling}q=hf(L,U.mode,q),q.return=U,U=q}return _(U);case dt:return et=L._init,L=et(L._payload),ee(U,O,L,q)}if(W(L))return it(U,O,L,q);if(Nt(L)){if(et=Nt(L),typeof et!="function")throw Error(a(150));return L=et.call(L),ft(U,O,L,q)}if(typeof L.then=="function")return ee(U,O,ou(L),q);if(L.$$typeof===K)return ee(U,O,Su(U,L),q);lu(U,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,O!==null&&O.tag===6?(r(U,O.sibling),q=c(O,L),q.return=U,U=q):(r(U,O),q=cf(L,U.mode,q),q.return=U,U=q),_(U)):r(U,O)}return function(U,O,L,q){try{So=0;var et=ee(U,O,L,q);return fa=null,et}catch(st){if(st===To)throw st;var Tt=In(29,st,null,U.mode);return Tt.lanes=q,Tt.return=U,Tt}finally{}}}var cs=Km(!0),Ym=Km(!1),da=Mt(null),uu=Mt(0);function Qm(e,n){e=Li,xt(uu,e),xt(da,n),Li=e|n.baseLanes}function gh(){xt(uu,Li),xt(da,da.current)}function yh(){Li=uu.current,Zt(da),Zt(uu)}var bn=Mt(null),ni=null;function hr(e){var n=e.alternate;xt(_e,_e.current&1),xt(bn,e),ni===null&&(n===null||da.current!==null||n.memoizedState!==null)&&(ni=e)}function Xm(e){if(e.tag===22){if(xt(_e,_e.current),xt(bn,e),ni===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ni=e)}}else fr()}function fr(){xt(_e,_e.current),xt(bn,bn.current)}function Ii(e){Zt(bn),ni===e&&(ni=null),Zt(_e)}var _e=Mt(0);function cu(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var x0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},z0=s.unstable_scheduleCallback,B0=s.unstable_NormalPriority,ve={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _h(){return{controller:new x0,data:new Map,refCount:0}}function wo(e){e.refCount--,e.refCount===0&&z0(B0,function(){e.controller.abort()})}var Ro=null,vh=0,ma=0,pa=null;function H0(e,n){if(Ro===null){var r=Ro=[];vh=0,ma=Rf(),pa={status:"pending",value:void 0,then:function(o){r.push(o)}}}return vh++,n.then($m,$m),n}function $m(){if(--vh===0&&Ro!==null){pa!==null&&(pa.status="fulfilled");var e=Ro;Ro=null,ma=0,pa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function j0(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var Zm=A.S;A.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&H0(e,n),Zm!==null&&Zm(e,n)};var hs=Mt(null);function Eh(){var e=hs.current;return e!==null?e:Gt.pooledCache}function hu(e,n){n===null?xt(hs,hs.current):xt(hs,n.pool)}function Wm(){var e=Eh();return e===null?null:{parent:ve._currentValue,pool:e}}var dr=0,vt=null,Ht=null,ue=null,fu=!1,ga=!1,fs=!1,du=0,Io=0,ya=null,q0=0;function se(){throw Error(a(321))}function Th(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!on(e[r],n[r]))return!1;return!0}function Ah(e,n,r,o,c,f){return dr=f,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,A.H=e===null||e.memoizedState===null?ds:mr,fs=!1,f=r(o,c),fs=!1,ga&&(f=tp(n,r,o,c)),Jm(e),f}function Jm(e){A.H=ii;var n=Ht!==null&&Ht.next!==null;if(dr=0,ue=Ht=vt=null,fu=!1,Io=0,ya=null,n)throw Error(a(300));e===null||be||(e=e.dependencies,e!==null&&Au(e)&&(be=!0))}function tp(e,n,r,o){vt=e;var c=0;do{if(ga&&(ya=null),Io=0,ga=!1,25<=c)throw Error(a(301));if(c+=1,ue=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}A.H=ms,f=n(r,o)}while(ga);return f}function G0(){var e=A.H,n=e.useState()[0];return n=typeof n.then=="function"?Co(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(vt.flags|=1024),n}function Sh(){var e=du!==0;return du=0,e}function bh(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function wh(e){if(fu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fu=!1}dr=0,ue=Ht=vt=null,ga=!1,Io=du=0,ya=null}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?vt.memoizedState=ue=e:ue=ue.next=e,ue}function ce(){if(Ht===null){var e=vt.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=ue===null?vt.memoizedState:ue.next;if(n!==null)ue=n,Ht=e;else{if(e===null)throw vt.alternate===null?Error(a(467)):Error(a(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},ue===null?vt.memoizedState=ue=e:ue=ue.next=e}return ue}var mu;mu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Co(e){var n=Io;return Io+=1,ya===null&&(ya=[]),e=qm(ya,e,n),n=vt,(ue===null?n.memoizedState:ue.next)===null&&(n=n.alternate,A.H=n===null||n.memoizedState===null?ds:mr),e}function pu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Co(e);if(e.$$typeof===K)return ze(e)}throw Error(a(438,String(e)))}function Rh(e){var n=null,r=vt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=mu(),vt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=Bt;return n.index++,r}function Ci(e,n){return typeof n=="function"?n(e):n}function gu(e){var n=ce();return Ih(n,Ht,e)}function Ih(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=_=null,S=null,D=n,j=!1;do{var F=D.lane&-536870913;if(F!==D.lane?(Ot&F)===F:(dr&F)===F){var x=D.revertLane;if(x===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),F===ma&&(j=!0);else if((dr&x)===x){D=D.next,x===ma&&(j=!0);continue}else F={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(E=S=F,_=f):S=S.next=F,vt.lanes|=x,Sr|=x;F=D.action,fs&&r(f,F),f=D.hasEagerState?D.eagerState:r(f,F)}else x={lane:F,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},S===null?(E=S=x,_=f):S=S.next=x,vt.lanes|=F,Sr|=F;D=D.next}while(D!==null&&D!==n);if(S===null?_=f:S.next=E,!on(f,e.memoizedState)&&(be=!0,j&&(r=pa,r!==null)))throw r;e.memoizedState=f,e.baseState=_,e.baseQueue=S,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ch(e){var n=ce(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,c=r.pending,f=n.memoizedState;if(c!==null){r.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);on(f,n.memoizedState)||(be=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,o]}function ep(e,n,r){var o=vt,c=ce(),f=Ut;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var _=!on((Ht||c).memoizedState,r);if(_&&(c.memoizedState=r,be=!0),c=c.queue,Nh(rp.bind(null,o,c,e),[e]),c.getSnapshot!==n||_||ue!==null&&ue.memoizedState.tag&1){if(o.flags|=2048,_a(9,ip.bind(null,o,c,r,n),{destroy:void 0},null),Gt===null)throw Error(a(349));f||(dr&60)!==0||np(o,n,r)}return r}function np(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=vt.updateQueue,n===null?(n=mu(),vt.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function ip(e,n,r,o){n.value=r,n.getSnapshot=o,sp(n)&&ap(e)}function rp(e,n,r){return r(function(){sp(n)&&ap(e)})}function sp(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!on(e,r)}catch{return!0}}function ap(e){var n=cr(e,2);n!==null&&$e(n,e,2)}function Oh(e){var n=tn();if(typeof e=="function"){var r=e;if(e=r(),fs){Gn(!0);try{r()}finally{Gn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:e},n}function op(e,n,r,o){return e.baseState=r,Ih(e,Ht,typeof o=="function"?o:Ci)}function F0(e,n,r,o,c){if(vu(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};A.T!==null?r(!0):f.isTransition=!1,o(f),r=n.pending,r===null?(f.next=n.pending=f,lp(n,f)):(f.next=r.next,n.pending=r.next=f)}}function lp(e,n){var r=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=A.T,_={};A.T=_;try{var E=r(c,o),S=A.S;S!==null&&S(_,E),up(e,n,E)}catch(D){Dh(e,n,D)}finally{A.T=f}}else try{f=r(c,o),up(e,n,f)}catch(D){Dh(e,n,D)}}function up(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){cp(e,n,o)},function(o){return Dh(e,n,o)}):cp(e,n,r)}function cp(e,n,r){n.status="fulfilled",n.value=r,hp(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,lp(e,r)))}function Dh(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,hp(n),n=n.next;while(n!==o)}e.action=null}function hp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function fp(e,n){return n}function dp(e,n){if(Ut){var r=Gt.formState;if(r!==null){t:{var o=vt;if(Ut){if(Ne){e:{for(var c=Ne,f=ei;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ln(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ne=Ln(c.nextSibling),o=c.data==="F!";break t}}us(o)}o=!1}o&&(n=r[0])}}return r=tn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fp,lastRenderedState:n},r.queue=o,r=Np.bind(null,vt,o),o.dispatch=r,o=Oh(!1),f=Ph.bind(null,vt,!1,o.queue),o=tn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,r=F0.bind(null,vt,c,f,r),c.dispatch=r,o.memoizedState=e,[n,r,!1]}function mp(e){var n=ce();return pp(n,Ht,e)}function pp(e,n,r){n=Ih(e,n,fp)[0],e=gu(Ci)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Co(n):n;var o=ce(),c=o.queue,f=c.dispatch;return r!==o.memoizedState&&(vt.flags|=2048,_a(9,K0.bind(null,c,r),{destroy:void 0},null)),[n,f,e]}function K0(e,n){e.action=n}function gp(e){var n=ce(),r=Ht;if(r!==null)return pp(n,r,e);ce(),n=n.memoizedState,r=ce();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function _a(e,n,r,o){return e={tag:e,create:n,inst:r,deps:o,next:null},n=vt.updateQueue,n===null&&(n=mu(),vt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function yp(){return ce().memoizedState}function yu(e,n,r,o){var c=tn();vt.flags|=e,c.memoizedState=_a(1|n,r,{destroy:void 0},o===void 0?null:o)}function _u(e,n,r,o){var c=ce();o=o===void 0?null:o;var f=c.memoizedState.inst;Ht!==null&&o!==null&&Th(o,Ht.memoizedState.deps)?c.memoizedState=_a(n,r,f,o):(vt.flags|=e,c.memoizedState=_a(1|n,r,f,o))}function _p(e,n){yu(8390656,8,e,n)}function Nh(e,n){_u(2048,8,e,n)}function vp(e,n){return _u(4,2,e,n)}function Ep(e,n){return _u(4,4,e,n)}function Tp(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ap(e,n,r){r=r!=null?r.concat([e]):null,_u(4,4,Tp.bind(null,n,e),r)}function Mh(){}function Sp(e,n){var r=ce();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Th(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function bp(e,n){var r=ce();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Th(n,o[1]))return o[0];if(o=e(),fs){Gn(!0);try{e()}finally{Gn(!1)}}return r.memoizedState=[o,n],o}function Vh(e,n,r){return r===void 0||(dr&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=Rg(),vt.lanes|=e,Sr|=e,r)}function wp(e,n,r,o){return on(r,n)?r:da.current!==null?(e=Vh(e,r,o),on(e,n)||(be=!0),e):(dr&42)===0?(be=!0,e.memoizedState=r):(e=Rg(),vt.lanes|=e,Sr|=e,n)}function Rp(e,n,r,o,c){var f=J.p;J.p=f!==0&&8>f?f:8;var _=A.T,E={};A.T=E,Ph(e,!1,n,r);try{var S=c(),D=A.S;if(D!==null&&D(E,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var j=j0(S,o);Oo(e,n,j,hn(e))}else Oo(e,n,o,hn(e))}catch(F){Oo(e,n,{then:function(){},status:"rejected",reason:F},hn())}finally{J.p=f,A.T=_}}function Y0(){}function Uh(e,n,r,o){if(e.tag!==5)throw Error(a(476));var c=Ip(e).queue;Rp(e,c,n,yt,r===null?Y0:function(){return Cp(e),r(o)})}function Ip(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:yt,baseState:yt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:yt},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cp(e){var n=Ip(e).next.queue;Oo(e,n,{},hn())}function kh(){return ze(Xo)}function Op(){return ce().memoizedState}function Dp(){return ce().memoizedState}function Q0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=hn();e=yr(r);var o=_r(n,e,r);o!==null&&($e(o,n,r),Mo(o,n,r)),n={cache:_h()},e.payload=n;return}n=n.return}}function X0(e,n,r){var o=hn();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},vu(e)?Mp(n,r):(r=hh(e,n,r,o),r!==null&&($e(r,e,o),Vp(r,n,o)))}function Np(e,n,r){var o=hn();Oo(e,n,r,o)}function Oo(e,n,r,o){var c={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(vu(e))Mp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,r);if(c.hasEagerState=!0,c.eagerState=E,on(E,_))return nu(e,n,c,0),Gt===null&&eu(),!1}catch{}finally{}if(r=hh(e,n,c,o),r!==null)return $e(r,e,o),Vp(r,n,o),!0}return!1}function Ph(e,n,r,o){if(o={lane:2,revertLane:Rf(),action:o,hasEagerState:!1,eagerState:null,next:null},vu(e)){if(n)throw Error(a(479))}else n=hh(e,r,o,2),n!==null&&$e(n,e,2)}function vu(e){var n=e.alternate;return e===vt||n!==null&&n===vt}function Mp(e,n){ga=fu=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Vp(e,n,r){if((r&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,tr(e,r)}}var ii={readContext:ze,use:pu,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useLayoutEffect:se,useInsertionEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useSyncExternalStore:se,useId:se};ii.useCacheRefresh=se,ii.useMemoCache=se,ii.useHostTransitionStatus=se,ii.useFormState=se,ii.useActionState=se,ii.useOptimistic=se;var ds={readContext:ze,use:pu,useCallback:function(e,n){return tn().memoizedState=[e,n===void 0?null:n],e},useContext:ze,useEffect:_p,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,yu(4194308,4,Tp.bind(null,n,e),r)},useLayoutEffect:function(e,n){return yu(4194308,4,e,n)},useInsertionEffect:function(e,n){yu(4,2,e,n)},useMemo:function(e,n){var r=tn();n=n===void 0?null:n;var o=e();if(fs){Gn(!0);try{e()}finally{Gn(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=tn();if(r!==void 0){var c=r(n);if(fs){Gn(!0);try{r(n)}finally{Gn(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=X0.bind(null,vt,e),[o.memoizedState,e]},useRef:function(e){var n=tn();return e={current:e},n.memoizedState=e},useState:function(e){e=Oh(e);var n=e.queue,r=Np.bind(null,vt,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Mh,useDeferredValue:function(e,n){var r=tn();return Vh(r,e,n)},useTransition:function(){var e=Oh(!1);return e=Rp.bind(null,vt,e.queue,!0,!1),tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=vt,c=tn();if(Ut){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Gt===null)throw Error(a(349));(Ot&60)!==0||np(o,n,r)}c.memoizedState=r;var f={value:r,getSnapshot:n};return c.queue=f,_p(rp.bind(null,o,f,e),[e]),o.flags|=2048,_a(9,ip.bind(null,o,f,r,n),{destroy:void 0},null),r},useId:function(){var e=tn(),n=Gt.identifierPrefix;if(Ut){var r=Ri,o=wi;r=(o&~(1<<32-Ke(o)-1)).toString(32)+r,n=":"+n+"R"+r,r=du++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=q0++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return tn().memoizedState=Q0.bind(null,vt)}};ds.useMemoCache=Rh,ds.useHostTransitionStatus=kh,ds.useFormState=dp,ds.useActionState=dp,ds.useOptimistic=function(e){var n=tn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Ph.bind(null,vt,!0,r),r.dispatch=n,[e,n]};var mr={readContext:ze,use:pu,useCallback:Sp,useContext:ze,useEffect:Nh,useImperativeHandle:Ap,useInsertionEffect:vp,useLayoutEffect:Ep,useMemo:bp,useReducer:gu,useRef:yp,useState:function(){return gu(Ci)},useDebugValue:Mh,useDeferredValue:function(e,n){var r=ce();return wp(r,Ht.memoizedState,e,n)},useTransition:function(){var e=gu(Ci)[0],n=ce().memoizedState;return[typeof e=="boolean"?e:Co(e),n]},useSyncExternalStore:ep,useId:Op};mr.useCacheRefresh=Dp,mr.useMemoCache=Rh,mr.useHostTransitionStatus=kh,mr.useFormState=mp,mr.useActionState=mp,mr.useOptimistic=function(e,n){var r=ce();return op(r,Ht,e,n)};var ms={readContext:ze,use:pu,useCallback:Sp,useContext:ze,useEffect:Nh,useImperativeHandle:Ap,useInsertionEffect:vp,useLayoutEffect:Ep,useMemo:bp,useReducer:Ch,useRef:yp,useState:function(){return Ch(Ci)},useDebugValue:Mh,useDeferredValue:function(e,n){var r=ce();return Ht===null?Vh(r,e,n):wp(r,Ht.memoizedState,e,n)},useTransition:function(){var e=Ch(Ci)[0],n=ce().memoizedState;return[typeof e=="boolean"?e:Co(e),n]},useSyncExternalStore:ep,useId:Op};ms.useCacheRefresh=Dp,ms.useMemoCache=Rh,ms.useHostTransitionStatus=kh,ms.useFormState=gp,ms.useActionState=gp,ms.useOptimistic=function(e,n){var r=ce();return Ht!==null?op(r,Ht,e,n):(r.baseState=e,[e,r.queue.dispatch])};function Lh(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:I({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xh={isMounted:function(e){return(e=e._reactInternals)?ot(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var o=hn(),c=yr(o);c.payload=n,r!=null&&(c.callback=r),n=_r(e,c,o),n!==null&&($e(n,e,o),Mo(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=hn(),c=yr(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=_r(e,c,o),n!==null&&($e(n,e,o),Mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=hn(),o=yr(r);o.tag=2,n!=null&&(o.callback=n),n=_r(e,o,r),n!==null&&($e(n,e,r),Mo(n,e,r))}};function Up(e,n,r,o,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!go(r,o)||!go(c,f):!0}function kp(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&xh.enqueueReplaceState(n,n.state,null)}function ps(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=I({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}var Eu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Pp(e){Eu(e)}function Lp(e){console.error(e)}function xp(e){Eu(e)}function Tu(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function zp(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function zh(e,n,r){return r=yr(r),r.tag=3,r.payload={element:null},r.callback=function(){Tu(e,n)},r}function Bp(e){return e=yr(e),e.tag=3,e}function Hp(e,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){zp(n,r,o)}}var _=r.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){zp(n,r,o),typeof c!="function"&&(br===null?br=new Set([this]):br.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function $0(e,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&No(n,r,c,!0),r=bn.current,r!==null){switch(r.tag){case 13:return ni===null?Tf():r.alternate===null&&te===0&&(te=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===ph?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Sf(e,o,c)),!1;case 22:return r.flags|=65536,o===ph?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Sf(e,o,c)),!1}throw Error(a(435,r.tag))}return Sf(e,o,c),Tf(),!1}if(Ut)return n=bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==mh&&(e=Error(a(422),{cause:o}),Eo(Tn(e,r)))):(o!==mh&&(n=Error(a(423),{cause:o}),Eo(Tn(n,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Tn(o,r),c=zh(e.stateNode,o,c),tf(e,c),te!==4&&(te=2)),!1;var f=Error(a(520),{cause:o});if(f=Tn(f,r),Bo===null?Bo=[f]:Bo.push(f),te!==4&&(te=2),n===null)return!0;o=Tn(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=zh(r.stateNode,o,e),tf(r,e),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(br===null||!br.has(f))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Bp(c),Hp(c,e,r,o),tf(r,c),!1}r=r.return}while(r!==null);return!1}var jp=Error(a(461)),be=!1;function Me(e,n,r,o){n.child=e===null?Ym(n,null,r,o):cs(n,e.child,r,o)}function qp(e,n,r,o,c){r=r.render;var f=n.ref;if("ref"in o){var _={};for(var E in o)E!=="ref"&&(_[E]=o[E])}else _=o;return ys(n),o=Ah(e,n,r,_,f,c),E=Sh(),e!==null&&!be?(bh(e,n,c),Oi(e,n,c)):(Ut&&E&&fh(n),n.flags|=1,Me(e,n,o,c),n.child)}function Gp(e,n,r,o,c){if(e===null){var f=r.type;return typeof f=="function"&&!uf(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,Fp(e,n,f,o,c)):(e=Ru(r.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Qh(e,c)){var _=f.memoizedProps;if(r=r.compare,r=r!==null?r:go,r(_,o)&&e.ref===n.ref)return Oi(e,n,c)}return n.flags|=1,e=Ar(f,o),e.ref=n.ref,e.return=n,n.child=e}function Fp(e,n,r,o,c){if(e!==null){var f=e.memoizedProps;if(go(f,o)&&e.ref===n.ref)if(be=!1,n.pendingProps=o=f,Qh(e,c))(e.flags&131072)!==0&&(be=!0);else return n.lanes=e.lanes,Oi(e,n,c)}return Bh(e,n,r,o,c)}function Kp(e,n,r){var o=n.pendingProps,c=o.children,f=(n.stateNode._pendingVisibility&2)!==0,_=e!==null?e.memoizedState:null;if(Do(e,n),o.mode==="hidden"||f){if((n.flags&128)!==0){if(o=_!==null?_.baseLanes|r:r,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Yp(e,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hu(n,_!==null?_.cachePool:null),_!==null?Qm(n,_):gh(),Xm(n);else return n.lanes=n.childLanes=536870912,Yp(e,n,_!==null?_.baseLanes|r:r,r)}else _!==null?(hu(n,_.cachePool),Qm(n,_),fr(),n.memoizedState=null):(e!==null&&hu(n,null),gh(),fr());return Me(e,n,c,r),n.child}function Yp(e,n,r,o){var c=Eh();return c=c===null?null:{parent:ve._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},e!==null&&hu(n,null),gh(),Xm(n),e!==null&&No(e,n,o,!0),null}function Do(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=2097664)}}function Bh(e,n,r,o,c){return ys(n),r=Ah(e,n,r,o,void 0,c),o=Sh(),e!==null&&!be?(bh(e,n,c),Oi(e,n,c)):(Ut&&o&&fh(n),n.flags|=1,Me(e,n,r,c),n.child)}function Qp(e,n,r,o,c,f){return ys(n),n.updateQueue=null,r=tp(n,o,r,c),Jm(e),o=Sh(),e!==null&&!be?(bh(e,n,f),Oi(e,n,f)):(Ut&&o&&fh(n),n.flags|=1,Me(e,n,r,f),n.child)}function Xp(e,n,r,o,c){if(ys(n),n.stateNode===null){var f=ua,_=r.contextType;typeof _=="object"&&_!==null&&(f=ze(_)),f=new r(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=xh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Wh(n),_=r.contextType,f.context=typeof _=="object"&&_!==null?ze(_):ua,f.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(Lh(n,r,_,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&xh.enqueueReplaceState(f,f.state,null),Uo(n,o,f,c),Vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,S=ps(r,E);f.props=S;var D=f.context,j=r.contextType;_=ua,typeof j=="object"&&j!==null&&(_=ze(j));var F=r.getDerivedStateFromProps;j=typeof F=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,j||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||D!==_)&&kp(n,f,o,_),gr=!1;var x=n.memoizedState;f.state=x,Uo(n,o,f,c),Vo(),D=n.memoizedState,E||x!==D||gr?(typeof F=="function"&&(Lh(n,r,F,o),D=n.memoizedState),(S=gr||Up(n,r,S,o,x,D,_))?(j||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=D),f.props=o,f.state=D,f.context=_,o=S):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Jh(e,n),_=n.memoizedProps,j=ps(r,_),f.props=j,F=n.pendingProps,x=f.context,D=r.contextType,S=ua,typeof D=="object"&&D!==null&&(S=ze(D)),E=r.getDerivedStateFromProps,(D=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==F||x!==S)&&kp(n,f,o,S),gr=!1,x=n.memoizedState,f.state=x,Uo(n,o,f,c),Vo();var H=n.memoizedState;_!==F||x!==H||gr||e!==null&&e.dependencies!==null&&Au(e.dependencies)?(typeof E=="function"&&(Lh(n,r,E,o),H=n.memoizedState),(j=gr||Up(n,r,j,o,x,H,S)||e!==null&&e.dependencies!==null&&Au(e.dependencies))?(D||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,H,S),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,H,S)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=H),f.props=o,f.state=H,f.context=S,o=j):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Do(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=cs(n,e.child,null,c),n.child=cs(n,null,r,c)):Me(e,n,r,c),n.memoizedState=f.state,e=n.child):e=Oi(e,n,c),e}function $p(e,n,r,o){return vo(),n.flags|=256,Me(e,n,r,o),n.child}var Hh={dehydrated:null,treeContext:null,retryLane:0};function jh(e){return{baseLanes:e,cachePool:Wm()}}function qh(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=Cn),e}function Zp(e,n,r){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ut){if(c?hr(n):fr(),Ut){var E=Ne,S;if(S=E){t:{for(S=E,E=ei;S.nodeType!==8;){if(!E){E=null;break t}if(S=Ln(S.nextSibling),S===null){E=null;break t}}E=S}E!==null?(n.memoizedState={dehydrated:E,treeContext:os!==null?{id:wi,overflow:Ri}:null,retryLane:536870912},S=In(18,null,null,0),S.stateNode=E,S.return=n,n.child=S,Xe=n,Ne=null,S=!0):S=!1}S||us(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ii(n)}return E=o.children,o=o.fallback,c?(fr(),c=n.mode,E=Fh({mode:"hidden",children:E},c),o=vs(o,c,r,null),E.return=n,o.return=n,E.sibling=o,n.child=E,c=n.child,c.memoizedState=jh(r),c.childLanes=qh(e,_,r),n.memoizedState=Hh,o):(hr(n),Gh(n,E))}if(S=e.memoizedState,S!==null&&(E=S.dehydrated,E!==null)){if(f)n.flags&256?(hr(n),n.flags&=-257,n=Kh(e,n,r)):n.memoizedState!==null?(fr(),n.child=e.child,n.flags|=128,n=null):(fr(),c=o.fallback,E=n.mode,o=Fh({mode:"visible",children:o.children},E),c=vs(c,E,r,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,cs(n,e.child,null,r),o=n.child,o.memoizedState=jh(r),o.childLanes=qh(e,_,r),n.memoizedState=Hh,n=c);else if(hr(n),E.data==="$!"){if(_=E.nextSibling&&E.nextSibling.dataset,_)var D=_.dgst;_=D,o=Error(a(419)),o.stack="",o.digest=_,Eo({value:o,source:null,stack:null}),n=Kh(e,n,r)}else if(be||No(e,n,r,!1),_=(r&e.childLanes)!==0,be||_){if(_=Gt,_!==null){if(o=r&-r,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(_.suspendedLanes|r))!==0?0:o,o!==0&&o!==S.retryLane)throw S.retryLane=o,cr(e,o),$e(_,e,o),jp}E.data==="$?"||Tf(),n=Kh(e,n,r)}else E.data==="$?"?(n.flags|=128,n.child=e.child,n=hT.bind(null,e),E._reactRetry=n,n=null):(e=S.treeContext,Ne=Ln(E.nextSibling),Xe=n,Ut=!0,kn=null,ei=!1,e!==null&&(An[Sn++]=wi,An[Sn++]=Ri,An[Sn++]=os,wi=e.id,Ri=e.overflow,os=n),n=Gh(n,o.children),n.flags|=4096);return n}return c?(fr(),c=o.fallback,E=n.mode,S=e.child,D=S.sibling,o=Ar(S,{mode:"hidden",children:o.children}),o.subtreeFlags=S.subtreeFlags&31457280,D!==null?c=Ar(D,c):(c=vs(c,E,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,E=e.child.memoizedState,E===null?E=jh(r):(S=E.cachePool,S!==null?(D=ve._currentValue,S=S.parent!==D?{parent:D,pool:D}:S):S=Wm(),E={baseLanes:E.baseLanes|r,cachePool:S}),c.memoizedState=E,c.childLanes=qh(e,_,r),n.memoizedState=Hh,o):(hr(n),r=e.child,e=r.sibling,r=Ar(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=r,n.memoizedState=null,r)}function Gh(e,n){return n=Fh({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fh(e,n){return Sg(e,n,0,null)}function Kh(e,n,r){return cs(n,e.child,null,r),e=Gh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wp(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),$h(e.return,n,r)}function Yh(e,n,r,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=r,f.tailMode=c)}function Jp(e,n,r){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Me(e,n,o.children,r),o=_e.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wp(e,r,n);else if(e.tag===19)Wp(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(xt(_e,o),c){case"forwards":for(r=n.child,c=null;r!==null;)e=r.alternate,e!==null&&cu(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Yh(n,!1,c,r,f);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&cu(e)===null){n.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}Yh(n,!0,r,null,f);break;case"together":Yh(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Oi(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Sr|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(No(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Ar(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Ar(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Qh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Au(e)))}function Z0(e,n,r){switch(n.tag){case 3:Qi(n,n.stateNode.containerInfo),pr(n,ve,e.memoizedState.cache),vo();break;case 27:case 5:Qa(n);break;case 4:Qi(n,n.stateNode.containerInfo);break;case 10:pr(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(hr(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Zp(e,n,r):(hr(n),e=Oi(e,n,r),e!==null?e.sibling:null);hr(n);break;case 19:var c=(e.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(No(e,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return Jp(e,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),xt(_e,_e.current),o)break;return null;case 22:case 23:return n.lanes=0,Kp(e,n,r);case 24:pr(n,ve,e.memoizedState.cache)}return Oi(e,n,r)}function tg(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)be=!0;else{if(!Qh(e,r)&&(n.flags&128)===0)return be=!1,Z0(e,n,r);be=(e.flags&131072)!==0}else be=!1,Ut&&(n.flags&1048576)!==0&&xm(n,su,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")uf(o)?(e=ps(o,e),n.tag=1,n=Xp(null,n,o,e,r)):(n.tag=0,n=Bh(null,n,o,e,r));else{if(o!=null){if(c=o.$$typeof,c===$){n.tag=11,n=qp(null,n,o,e,r);break t}else if(c===wt){n.tag=14,n=Gp(null,n,o,e,r);break t}}throw n=b(o)||o,Error(a(306,n,""))}}return n;case 0:return Bh(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=ps(o,n.pendingProps),Xp(e,n,o,c,r);case 3:t:{if(Qi(n,n.stateNode.containerInfo),e===null)throw Error(a(387));var f=n.pendingProps;c=n.memoizedState,o=c.element,Jh(e,n),Uo(n,f,null,r);var _=n.memoizedState;if(f=_.cache,pr(n,ve,f),f!==c.cache&&Zh(n,[ve],r,!0),Vo(),f=_.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=$p(e,n,f,r);break t}else if(f!==o){o=Tn(Error(a(424)),n),Eo(o),n=$p(e,n,f,r);break t}else for(Ne=Ln(n.stateNode.containerInfo.firstChild),Xe=n,Ut=!0,kn=null,ei=!0,r=Ym(n,null,f,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(vo(),f===o){n=Oi(e,n,r);break t}Me(e,n,f,r)}n=n.child}return n;case 26:return Do(e,n),e===null?(r=iy(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ut||(r=n.type,e=n.pendingProps,o=xu(dn.current).createElement(r),o[Te]=n,o[pe]=e,Ve(o,r,e),Qt(o),n.stateNode=o):n.memoizedState=iy(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qa(n),e===null&&Ut&&(o=n.stateNode=ty(n.type,n.pendingProps,dn.current),Xe=n,ei=!0,Ne=Ln(o.firstChild)),o=n.pendingProps.children,e!==null||Ut?Me(e,n,o,r):n.child=cs(n,null,o,r),Do(e,n),n.child;case 5:return e===null&&Ut&&((c=o=Ne)&&(o=IT(o,n.type,n.pendingProps,ei),o!==null?(n.stateNode=o,Xe=n,Ne=Ln(o.firstChild),ei=!1,c=!0):c=!1),c||us(n)),Qa(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,o=f.children,kf(c,f)?o=null:_!==null&&kf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Ah(e,n,G0,null,null,r),Xo._currentValue=c),Do(e,n),Me(e,n,o,r),n.child;case 6:return e===null&&Ut&&((e=r=Ne)&&(r=CT(r,n.pendingProps,ei),r!==null?(n.stateNode=r,Xe=n,Ne=null,e=!0):e=!1),e||us(n)),null;case 13:return Zp(e,n,r);case 4:return Qi(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=cs(n,null,o,r):Me(e,n,o,r),n.child;case 11:return qp(e,n,n.type,n.pendingProps,r);case 7:return Me(e,n,n.pendingProps,r),n.child;case 8:return Me(e,n,n.pendingProps.children,r),n.child;case 12:return Me(e,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,pr(n,n.type,o.value),Me(e,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ys(n),c=ze(c),o=o(c),n.flags|=1,Me(e,n,o,r),n.child;case 14:return Gp(e,n,n.type,n.pendingProps,r);case 15:return Fp(e,n,n.type,n.pendingProps,r);case 19:return Jp(e,n,r);case 22:return Kp(e,n,r);case 24:return ys(n),o=ze(ve),e===null?(c=Eh(),c===null&&(c=Gt,f=_h(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=r),c=f),n.memoizedState={parent:o,cache:c},Wh(n),pr(n,ve,c)):((e.lanes&r)!==0&&(Jh(e,n),Uo(n,null,null,r),Vo()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pr(n,ve,o)):(o=f.cache,pr(n,ve,o),o!==c.cache&&Zh(n,[ve],r,!0))),Me(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}var Xh=Mt(null),gs=null,Di=null;function pr(e,n,r){xt(Xh,n._currentValue),n._currentValue=r}function Ni(e){e._currentValue=Xh.current,Zt(Xh)}function $h(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Zh(e,n,r,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var S=0;S<n.length;S++)if(E.context===n[S]){f.lanes|=r,E=f.alternate,E!==null&&(E.lanes|=r),$h(f.return,r,e),o||(_=null);break t}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(a(341));_.lanes|=r,f=_.alternate,f!==null&&(f.lanes|=r),$h(_,r,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function No(e,n,r,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var E=c.type;on(c.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(c===Yi.current){if(_=c.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Xo):e=[Xo])}c=c.return}e!==null&&Zh(n,e,r,o),n.flags|=262144}function Au(e){for(e=e.firstContext;e!==null;){if(!on(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ys(e){gs=e,Di=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ze(e){return eg(gs,e)}function Su(e,n){return gs===null&&ys(e),eg(e,n)}function eg(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Di===null){if(e===null)throw Error(a(308));Di=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Di=Di.next=n;return r}var gr=!1;function Wh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _r(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,($t&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=iu(e),Pm(e,null,r),n}return nu(e,o,n,r),iu(e)}function Mo(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,tr(e,r)}}function tf(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var _={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,r=r.next}while(r!==null);f===null?c=f=n:f=f.next=n}else c=f=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var ef=!1;function Vo(){if(ef){var e=pa;if(e!==null)throw e}}function Uo(e,n,r,o){ef=!1;var c=e.updateQueue;gr=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var S=E,D=S.next;S.next=null,_===null?f=D:_.next=D,_=S;var j=e.alternate;j!==null&&(j=j.updateQueue,E=j.lastBaseUpdate,E!==_&&(E===null?j.firstBaseUpdate=D:E.next=D,j.lastBaseUpdate=S))}if(f!==null){var F=c.baseState;_=0,j=D=S=null,E=f;do{var x=E.lane&-536870913,H=x!==E.lane;if(H?(Ot&x)===x:(o&x)===x){x!==0&&x===ma&&(ef=!0),j!==null&&(j=j.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var it=e,ft=E;x=n;var ee=r;switch(ft.tag){case 1:if(it=ft.payload,typeof it=="function"){F=it.call(ee,F,x);break t}F=it;break t;case 3:it.flags=it.flags&-65537|128;case 0:if(it=ft.payload,x=typeof it=="function"?it.call(ee,F,x):it,x==null)break t;F=I({},F,x);break t;case 2:gr=!0}}x=E.callback,x!==null&&(e.flags|=64,H&&(e.flags|=8192),H=c.callbacks,H===null?c.callbacks=[x]:H.push(x))}else H={lane:x,tag:E.tag,payload:E.payload,callback:E.callback,next:null},j===null?(D=j=H,S=F):j=j.next=H,_|=x;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;H=E,E=H.next,H.next=null,c.lastBaseUpdate=H,c.shared.pending=null}}while(!0);j===null&&(S=F),c.baseState=S,c.firstBaseUpdate=D,c.lastBaseUpdate=j,f===null&&(c.shared.lanes=0),Sr|=_,e.lanes=_,e.memoizedState=F}}function ng(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function ig(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)ng(r[e],n)}function ko(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&e)===e){o=void 0;var f=r.create,_=r.inst;o=f(),_.destroy=o}r=r.next}while(r!==c)}}catch(E){qt(n,n.return,E)}}function vr(e,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var _=o.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var S=r;try{E()}catch(D){qt(c,S,D)}}}o=o.next}while(o!==f)}}catch(D){qt(n,n.return,D)}}function rg(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{ig(n,r)}catch(o){qt(e,e.return,o)}}}function sg(e,n,r){r.props=ps(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){qt(e,n,o)}}function _s(e,n){try{var r=e.ref;if(r!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof r=="function"?e.refCleanup=r(c):r.current=c}}catch(f){qt(e,n,f)}}function ln(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){qt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){qt(e,n,c)}else r.current=null}function ag(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){qt(e,e.return,c)}}function og(e,n,r){try{var o=e.stateNode;AT(o,e.type,r,n),o[pe]=n}catch(c){qt(e,e.return,c)}}function lg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||lg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rf(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Lu));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(rf(e,n,r),e=e.sibling;e!==null;)rf(e,n,r),e=e.sibling}function bu(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(bu(e,n,r),e=e.sibling;e!==null;)bu(e,n,r),e=e.sibling}var Mi=!1,Jt=!1,sf=!1,ug=typeof WeakSet=="function"?WeakSet:Set,we=null,cg=!1;function W0(e,n){if(e=e.containerInfo,Vf=Gu,e=Im(e),ah(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break t}var _=0,E=-1,S=-1,D=0,j=0,F=e,x=null;e:for(;;){for(var H;F!==r||c!==0&&F.nodeType!==3||(E=_+c),F!==f||o!==0&&F.nodeType!==3||(S=_+o),F.nodeType===3&&(_+=F.nodeValue.length),(H=F.firstChild)!==null;)x=F,F=H;for(;;){if(F===e)break e;if(x===r&&++D===c&&(E=_),x===f&&++j===o&&(S=_),(H=F.nextSibling)!==null)break;F=x,x=F.parentNode}F=H}r=E===-1||S===-1?null:{start:E,end:S}}else r=null}r=r||{start:0,end:0}}else r=null;for(Uf={focusedElem:e,selectionRange:r},Gu=!1,we=n;we!==null;)if(n=we,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,we=e;else for(;we!==null;){switch(n=we,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=n,c=f.memoizedProps,f=f.memoizedState,o=r.stateNode;try{var it=ps(r.type,c,r.elementType===r.type);e=o.getSnapshotBeforeUpdate(it,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ft){qt(r,r.return,ft)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)xf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,we=e;break}we=n.return}return it=cg,cg=!1,it}function hg(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Ui(e,r),o&4&&ko(5,r);break;case 1:if(Ui(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(E){qt(r,r.return,E)}else{var c=ps(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){qt(r,r.return,E)}}o&64&&rg(r),o&512&&_s(r,r.return);break;case 3:if(Ui(e,r),o&64&&(o=r.updateQueue,o!==null)){if(e=null,r.child!==null)switch(r.child.tag){case 27:case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}try{ig(o,e)}catch(E){qt(r,r.return,E)}}break;case 26:Ui(e,r),o&512&&_s(r,r.return);break;case 27:case 5:Ui(e,r),n===null&&o&4&&ag(r),o&512&&_s(r,r.return);break;case 12:Ui(e,r);break;case 13:Ui(e,r),o&4&&mg(e,r);break;case 22:if(c=r.memoizedState!==null||Mi,!c){n=n!==null&&n.memoizedState!==null||Jt;var f=Mi,_=Jt;Mi=c,(Jt=n)&&!_?Er(e,r,(r.subtreeFlags&8772)!==0):Ui(e,r),Mi=f,Jt=_}o&512&&(r.memoizedProps.mode==="manual"?_s(r,r.return):ln(r,r.return));break;default:Ui(e,r)}}function fg(e){var n=e.alternate;n!==null&&(e.alternate=null,fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var he=null,un=!1;function Vi(e,n,r){for(r=r.child;r!==null;)dg(e,n,r),r=r.sibling}function dg(e,n,r){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(Xi,r)}catch{}switch(r.tag){case 26:Jt||ln(r,n),Vi(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Jt||ln(r,n);var o=he,c=un;for(he=r.stateNode,Vi(e,n,r),r=r.stateNode,n=r.attributes;n.length;)r.removeAttributeNode(n[0]);Qr(r),he=o,un=c;break;case 5:Jt||ln(r,n);case 6:c=he;var f=un;if(he=null,Vi(e,n,r),he=c,un=f,he!==null)if(un)try{e=he,o=r.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(_){qt(r,n,_)}else try{he.removeChild(r.stateNode)}catch(_){qt(r,n,_)}break;case 18:he!==null&&(un?(n=he,r=r.stateNode,n.nodeType===8?Lf(n.parentNode,r):n.nodeType===1&&Lf(n,r),Jo(n)):Lf(he,r.stateNode));break;case 4:o=he,c=un,he=r.stateNode.containerInfo,un=!0,Vi(e,n,r),he=o,un=c;break;case 0:case 11:case 14:case 15:Jt||vr(2,r,n),Jt||vr(4,r,n),Vi(e,n,r);break;case 1:Jt||(ln(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&sg(r,n,o)),Vi(e,n,r);break;case 21:Vi(e,n,r);break;case 22:Jt||ln(r,n),Jt=(o=Jt)||r.memoizedState!==null,Vi(e,n,r),Jt=o;break;default:Vi(e,n,r)}}function mg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jo(e)}catch(r){qt(n,n.return,r)}}function J0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ug),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ug),n;default:throw Error(a(435,e.tag))}}function af(e,n){var r=J0(e);n.forEach(function(o){var c=fT.bind(null,e,o);r.has(o)||(r.add(o),o.then(c,c))})}function wn(e,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],f=e,_=n,E=_;t:for(;E!==null;){switch(E.tag){case 27:case 5:he=E.stateNode,un=!1;break t;case 3:he=E.stateNode.containerInfo,un=!0;break t;case 4:he=E.stateNode.containerInfo,un=!0;break t}E=E.return}if(he===null)throw Error(a(160));dg(f,_,c),he=null,un=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)pg(n,e),n=n.sibling}var Pn=null;function pg(e,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wn(n,e),Rn(e),o&4&&(vr(3,e,e.return),ko(3,e),vr(5,e,e.return));break;case 1:wn(n,e),Rn(e),o&512&&(Jt||r===null||ln(r,r.return)),o&64&&Mi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=Pn;if(wn(n,e),Rn(e),o&512&&(Jt||r===null||ln(r,r.return)),o&4){var f=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[nr]||f[Te]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Ve(f,o,r),f[Te]=e,Qt(f),o=f;break t;case"link":var _=ay("link","href",c).get(o+(r.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(r.href==null?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){_.splice(E,1);break e}}f=c.createElement(o),Ve(f,o,r),c.head.appendChild(f);break;case"meta":if(_=ay("meta","content",c).get(o+(r.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){_.splice(E,1);break e}}f=c.createElement(o),Ve(f,o,r),c.head.appendChild(f);break;default:throw Error(a(468,o))}f[Te]=e,Qt(f),o=f}e.stateNode=o}else oy(c,e.type,e.stateNode);else e.stateNode=sy(c,o,e.memoizedProps);else f!==o?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,o===null?oy(c,e.type,e.stateNode):sy(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&og(e,e.memoizedProps,r.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var S=c.firstChild;S;){var D=S.nextSibling,j=S.nodeName;S[nr]||j==="HEAD"||j==="BODY"||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&S.rel.toLowerCase()==="stylesheet"||c.removeChild(S),S=D}for(var F=e.type,x=c.attributes;x.length;)c.removeAttributeNode(x[0]);Ve(c,F,f),c[Te]=e,c[pe]=f}catch(it){qt(e,e.return,it)}}case 5:if(wn(n,e),Rn(e),o&512&&(Jt||r===null||ln(r,r.return)),e.flags&32){c=e.stateNode;try{gn(c,"")}catch(it){qt(e,e.return,it)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,og(e,c,r!==null?r.memoizedProps:c)),o&1024&&(sf=!0);break;case 6:if(wn(n,e),Rn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(it){qt(e,e.return,it)}}break;case 3:if(Hu=null,c=Pn,Pn=zu(n.containerInfo),wn(n,e),Pn=c,Rn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Jo(n.containerInfo)}catch(it){qt(e,e.return,it)}sf&&(sf=!1,gg(e));break;case 4:o=Pn,Pn=zu(e.stateNode.containerInfo),wn(n,e),Rn(e),Pn=o;break;case 12:wn(n,e),Rn(e);break;case 13:wn(n,e),Rn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(pf=We()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,af(e,o)));break;case 22:if(o&512&&(Jt||r===null||ln(r,r.return)),S=e.memoizedState!==null,D=r!==null&&r.memoizedState!==null,j=Mi,F=Jt,Mi=j||S,Jt=F||D,wn(n,e),Jt=F,Mi=j,Rn(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=S?n._visibility&-2:n._visibility|1,S&&(n=Mi||Jt,r===null||D||n||va(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(r=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(r===null){D=r=n;try{if(c=D.stateNode,S)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{_=D.stateNode,E=D.memoizedProps.style;var H=E!=null&&E.hasOwnProperty("display")?E.display:null;_.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(it){qt(D,D.return,it)}}}else if(n.tag===6){if(r===null){D=n;try{D.stateNode.nodeValue=S?"":D.memoizedProps}catch(it){qt(D,D.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,af(e,r))));break;case 19:wn(n,e),Rn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,af(e,o)));break;case 21:break;default:wn(n,e),Rn(e)}}function Rn(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var r=e.return;r!==null;){if(lg(r)){var o=r;break t}r=r.return}throw Error(a(160))}switch(o.tag){case 27:var c=o.stateNode,f=nf(e);bu(e,f,c);break;case 5:var _=o.stateNode;o.flags&32&&(gn(_,""),o.flags&=-33);var E=nf(e);bu(e,E,_);break;case 3:case 4:var S=o.stateNode.containerInfo,D=nf(e);rf(e,D,S);break;default:throw Error(a(161))}}}catch(j){qt(e,e.return,j)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ui(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hg(e,n.alternate,n),n=n.sibling}function va(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:vr(4,n,n.return),va(n);break;case 1:ln(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&sg(n,n.return,r),va(n);break;case 26:case 27:case 5:ln(n,n.return),va(n);break;case 22:ln(n,n.return),n.memoizedState===null&&va(n);break;default:va(n)}e=e.sibling}}function Er(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Er(c,f,r),ko(4,f);break;case 1:if(Er(c,f,r),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(D){qt(o,o.return,D)}if(o=f,c=o.updateQueue,c!==null){var E=o.stateNode;try{var S=c.shared.hiddenCallbacks;if(S!==null)for(c.shared.hiddenCallbacks=null,c=0;c<S.length;c++)ng(S[c],E)}catch(D){qt(o,o.return,D)}}r&&_&64&&rg(f),_s(f,f.return);break;case 26:case 27:case 5:Er(c,f,r),r&&o===null&&_&4&&ag(f),_s(f,f.return);break;case 12:Er(c,f,r);break;case 13:Er(c,f,r),r&&_&4&&mg(c,f);break;case 22:f.memoizedState===null&&Er(c,f,r),_s(f,f.return);break;default:Er(c,f,r)}n=n.sibling}}function of(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&wo(r))}function lf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&wo(e))}function Tr(e,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)yg(e,n,r,o),n=n.sibling}function yg(e,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Tr(e,n,r,o),c&2048&&ko(9,n);break;case 3:Tr(e,n,r,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&wo(e)));break;case 12:if(c&2048){Tr(e,n,r,o),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){qt(n,n.return,S)}}else Tr(e,n,r,o);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Tr(e,n,r,o):Po(e,n):f._visibility&4?Tr(e,n,r,o):(f._visibility|=4,Ea(e,n,r,o,(n.subtreeFlags&10256)!==0)),c&2048&&of(n.alternate,n);break;case 24:Tr(e,n,r,o),c&2048&&lf(n.alternate,n);break;default:Tr(e,n,r,o)}}function Ea(e,n,r,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,_=n,E=r,S=o,D=_.flags;switch(_.tag){case 0:case 11:case 15:Ea(f,_,E,S,c),ko(8,_);break;case 23:break;case 22:var j=_.stateNode;_.memoizedState!==null?j._visibility&4?Ea(f,_,E,S,c):Po(f,_):(j._visibility|=4,Ea(f,_,E,S,c)),c&&D&2048&&of(_.alternate,_);break;case 24:Ea(f,_,E,S,c),c&&D&2048&&lf(_.alternate,_);break;default:Ea(f,_,E,S,c)}n=n.sibling}}function Po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,c=o.flags;switch(o.tag){case 22:Po(r,o),c&2048&&of(o.alternate,o);break;case 24:Po(r,o),c&2048&&lf(o.alternate,o);break;default:Po(r,o)}n=n.sibling}}var Lo=8192;function Ta(e){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)_g(e),e=e.sibling}function _g(e){switch(e.tag){case 26:Ta(e),e.flags&Lo&&e.memoizedState!==null&&HT(Pn,e.memoizedState,e.memoizedProps);break;case 5:Ta(e);break;case 3:case 4:var n=Pn;Pn=zu(e.stateNode.containerInfo),Ta(e),Pn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Lo,Lo=16777216,Ta(e),Lo=n):Ta(e));break;default:Ta(e)}}function vg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];we=o,Tg(o,e)}vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Eg(e),e=e.sibling}function Eg(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&vr(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,wu(e)):xo(e);break;default:xo(e)}}function wu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];we=o,Tg(o,e)}vg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:vr(8,n,n.return),wu(n);break;case 22:r=n.stateNode,r._visibility&4&&(r._visibility&=-5,wu(n));break;default:wu(n)}e=e.sibling}}function Tg(e,n){for(;we!==null;){var r=we;switch(r.tag){case 0:case 11:case 15:vr(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:wo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,we=o;else t:for(r=e;we!==null;){o=we;var c=o.sibling,f=o.return;if(fg(o),o===r){we=null;break t}if(c!==null){c.return=f,we=c;break t}we=f}}}function tT(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(e,n,r,o){return new tT(e,n,r,o)}function uf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ar(e,n){var r=e.alternate;return r===null?(r=In(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&31457280,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Ag(e,n){e.flags&=31457282;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ru(e,n,r,o,c,f){var _=0;if(o=e,typeof e=="function")uf(e)&&(_=1);else if(typeof e=="string")_=zT(e,r,Fe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case y:return vs(r.children,c,f,n);case v:_=8,c|=24;break;case R:return e=In(12,r,n,c|2),e.elementType=R,e.lanes=f,e;case at:return e=In(13,r,n,c),e.elementType=at,e.lanes=f,e;case tt:return e=In(19,r,n,c),e.elementType=tt,e.lanes=f,e;case Et:return Sg(r,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case K:_=10;break t;case B:_=9;break t;case $:_=11;break t;case wt:_=14;break t;case dt:_=16,o=null;break t}_=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=In(_,r,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function vs(e,n,r,o){return e=In(7,e,o,n),e.lanes=r,e}function Sg(e,n,r,o){e=In(22,e,o,n),e.elementType=Et,e.lanes=r;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(a(456));if((c._pendingVisibility&2)===0){var _=cr(f,2);_!==null&&(c._pendingVisibility|=2,$e(_,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(a(456));if((c._pendingVisibility&2)!==0){var _=cr(f,2);_!==null&&(c._pendingVisibility&=-3,$e(_,f,2))}}};return e.stateNode=c,e}function cf(e,n,r){return e=In(6,e,null,n),e.lanes=r,e}function hf(e,n,r){return n=In(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ki(e){e.flags|=4}function bg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ly(n)){if(n=bn.current,n!==null&&((Ot&4194176)===Ot?ni!==null:(Ot&62914560)!==Ot&&(Ot&536870912)===0||n!==ni))throw Ao=ph,Hm;e.flags|=8192}}function Iu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Wi():536870912,e.lanes|=n,Sa|=n)}function zo(e,n){if(!Ut)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Xt(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function eT(e,n,r){var o=n.pendingProps;switch(dh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(n),null;case 1:return Xt(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ni(ve),mi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,kn!==null&&(vf(kn),kn=null))),Xt(n),null;case 26:return r=n.memoizedState,e===null?(ki(n),r!==null?(Xt(n),bg(n,r)):(Xt(n),n.flags&=-16777217)):r?r!==e.memoizedState?(ki(n),Xt(n),bg(n,r)):(Xt(n),n.flags&=-16777217):(e.memoizedProps!==o&&ki(n),Xt(n),n.flags&=-16777217),null;case 27:js(n),r=dn.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Xt(n),null}e=Fe.current,_o(n)?zm(n):(e=ty(c,o,r),n.stateNode=e,ki(n))}return Xt(n),null;case 5:if(js(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Xt(n),null}if(e=Fe.current,_o(n))zm(n);else{switch(c=xu(dn.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(r,{is:o.is}):c.createElement(r)}}e[Te]=n,e[pe]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Ve(e,r,o),r){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return Xt(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=dn.current,_o(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,c=Xe,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Te]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Qg(e.nodeValue,r)),e||us(n)}else e=xu(e).createTextNode(o),e[Te]=n,n.stateNode=e}return Xt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=_o(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[Te]=n}else vo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xt(n),c=!1}else kn!==null&&(vf(kn),kn=null),c=!0;if(!c)return n.flags&256?(Ii(n),n):(Ii(n),null)}if(Ii(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,e=e!==null&&e.memoizedState!==null,r){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),Iu(n,n.updateQueue),Xt(n),null;case 4:return mi(),e===null&&Df(n.stateNode.containerInfo),Xt(n),null;case 10:return Ni(n.type),Xt(n),null;case 19:if(Zt(_e),c=n.memoizedState,c===null)return Xt(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)zo(c,!1);else{if(te!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=cu(e),f!==null){for(n.flags|=128,zo(c,!1),e=f.updateQueue,n.updateQueue=e,Iu(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)Ag(r,e),r=r.sibling;return xt(_e,_e.current&1|2),n.child}e=e.sibling}c.tail!==null&&We()>Cu&&(n.flags|=128,o=!0,zo(c,!1),n.lanes=4194304)}else{if(!o)if(e=cu(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Iu(n,e),zo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ut)return Xt(n),null}else 2*We()-c.renderingStartTime>Cu&&r!==536870912&&(n.flags|=128,o=!0,zo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=We(),n.sibling=null,e=_e.current,xt(_e,o?e&1|2:e&1),n):(Xt(n),null);case 22:case 23:return Ii(n),yh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Xt(n),n.subtreeFlags&6&&(n.flags|=8192)):Xt(n),r=n.updateQueue,r!==null&&Iu(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&Zt(hs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ni(ve),Xt(n),null;case 25:return null}throw Error(a(156,n.tag))}function nT(e,n){switch(dh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ni(ve),mi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return js(n),null;case 13:if(Ii(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));vo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Zt(_e),null;case 4:return mi(),null;case 10:return Ni(n.type),null;case 22:case 23:return Ii(n),yh(),e!==null&&Zt(hs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ni(ve),null;case 25:return null;default:return null}}function wg(e,n){switch(dh(n),n.tag){case 3:Ni(ve),mi();break;case 26:case 27:case 5:js(n);break;case 4:mi();break;case 13:Ii(n);break;case 19:Zt(_e);break;case 10:Ni(n.type);break;case 22:case 23:Ii(n),yh(),e!==null&&Zt(hs);break;case 24:Ni(ve)}}var iT={getCacheForType:function(e){var n=ze(ve),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},rT=typeof WeakMap=="function"?WeakMap:Map,$t=0,Gt=null,At=null,Ot=0,Ft=0,cn=null,Pi=!1,Aa=!1,ff=!1,Li=0,te=0,Sr=0,Es=0,df=0,Cn=0,Sa=0,Bo=null,ri=null,mf=!1,pf=0,Cu=1/0,Ou=null,br=null,Du=!1,Ts=null,Ho=0,gf=0,yf=null,jo=0,_f=null;function hn(){if(($t&2)!==0&&Ot!==0)return Ot&-Ot;if(A.T!==null){var e=ma;return e!==0?e:Rf()}return Pl()}function Rg(){Cn===0&&(Cn=(Ot&536870912)===0||Ut?Ja():536870912);var e=bn.current;return e!==null&&(e.flags|=32),Cn}function $e(e,n,r){(e===Gt&&Ft===2||e.cancelPendingCommit!==null)&&(ba(e,0),xi(e,Ot,Cn,!1)),re(e,r),(($t&2)===0||e!==Gt)&&(e===Gt&&(($t&2)===0&&(Es|=r),te===4&&xi(e,Ot,Cn,!1)),si(e))}function Ig(e,n,r){if(($t&6)!==0)throw Error(a(327));var o=!r&&(n&60)===0&&(n&e.expiredLanes)===0||Zi(e,n),c=o?oT(e,n):Af(e,n,!0),f=o;do{if(c===0){Aa&&!o&&xi(e,n,0,!1);break}else if(c===6)xi(e,n,0,!Pi);else{if(r=e.current.alternate,f&&!sT(r)){c=Af(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=e;c=Bo;var S=E.current.memoizedState.isDehydrated;if(S&&(ba(E,_).flags|=256),_=Af(E,_,!1),_!==2){if(ff&&!S){E.errorRecoveryDisabledLanes|=f,Es|=f,c=4;break t}f=ri,ri=c,f!==null&&vf(f)}c=_}if(f=!1,c!==2)continue}}if(c===1){ba(e,0),xi(e,n,0,!0);break}t:{switch(o=e,c){case 0:case 1:throw Error(a(345));case 4:if((n&4194176)===n){xi(o,n,Cn,!Pi);break t}break;case 2:ri=null;break;case 3:case 5:break;default:throw Error(a(329))}if(o.finishedWork=r,o.finishedLanes=n,(n&62914560)===n&&(f=pf+300-We(),10<f)){if(xi(o,n,Cn,!Pi),mn(o,0)!==0)break t;o.timeoutHandle=Zg(Cg.bind(null,o,r,ri,Ou,mf,n,Cn,Es,Sa,Pi,2,-0,0),f);break t}Cg(o,r,ri,Ou,mf,n,Cn,Es,Sa,Pi,0,-0,0)}}break}while(!0);si(e)}function vf(e){ri===null?ri=e:ri.push.apply(ri,e)}function Cg(e,n,r,o,c,f,_,E,S,D,j,F,x){var H=n.subtreeFlags;if((H&8192||(H&16785408)===16785408)&&(Qo={stylesheets:null,count:0,unsuspend:BT},_g(n),n=jT(),n!==null)){e.cancelPendingCommit=n(kg.bind(null,e,r,o,c,_,E,S,1,F,x)),xi(e,f,_,!D);return}kg(e,r,o,c,_,E,S,j,F,x)}function sT(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],f=c.getSnapshot;c=c.value;try{if(!on(f(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xi(e,n,r,o){n&=~df,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Ke(c),_=1<<f;o[f]=-1,c&=~_}r!==0&&Ji(e,r,n)}function Nu(){return($t&6)===0?(qo(0),!1):!0}function Ef(){if(At!==null){if(Ft===0)var e=At.return;else e=At,Di=gs=null,wh(e),fa=null,So=0,e=At;for(;e!==null;)wg(e.alternate,e),e=e.return;At=null}}function ba(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,bT(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ef(),Gt=e,At=r=Ar(e.current,null),Ot=n,Ft=0,cn=null,Pi=!1,Aa=Zi(e,n),ff=!1,Sa=Cn=df=Es=Sr=te=0,ri=Bo=null,mf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ke(o),f=1<<c;n|=e[c],o&=~f}return Li=n,eu(),r}function Og(e,n){vt=null,A.H=ii,n===To?(n=Gm(),Ft=3):n===Hm?(n=Gm(),Ft=4):Ft=n===jp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,cn=n,At===null&&(te=1,Tu(e,Tn(n,e.current)))}function Dg(){var e=A.H;return A.H=ii,e===null?ii:e}function Ng(){var e=A.A;return A.A=iT,e}function Tf(){te=4,Pi||(Ot&4194176)!==Ot&&bn.current!==null||(Aa=!0),(Sr&134217727)===0&&(Es&134217727)===0||Gt===null||xi(Gt,Ot,Cn,!1)}function Af(e,n,r){var o=$t;$t|=2;var c=Dg(),f=Ng();(Gt!==e||Ot!==n)&&(Ou=null,ba(e,n)),n=!1;var _=te;t:do try{if(Ft!==0&&At!==null){var E=At,S=cn;switch(Ft){case 8:Ef(),_=6;break t;case 3:case 2:case 6:bn.current===null&&(n=!0);var D=Ft;if(Ft=0,cn=null,wa(e,E,S,D),r&&Aa){_=0;break t}break;default:D=Ft,Ft=0,cn=null,wa(e,E,S,D)}}aT(),_=te;break}catch(j){Og(e,j)}while(!0);return n&&e.shellSuspendCounter++,Di=gs=null,$t=o,A.H=c,A.A=f,At===null&&(Gt=null,Ot=0,eu()),_}function aT(){for(;At!==null;)Mg(At)}function oT(e,n){var r=$t;$t|=2;var o=Dg(),c=Ng();Gt!==e||Ot!==n?(Ou=null,Cu=We()+500,ba(e,n)):Aa=Zi(e,n);t:do try{if(Ft!==0&&At!==null){n=At;var f=cn;e:switch(Ft){case 1:Ft=0,cn=null,wa(e,n,f,1);break;case 2:if(jm(f)){Ft=0,cn=null,Vg(n);break}n=function(){Ft===2&&Gt===e&&(Ft=7),si(e)},f.then(n,n);break t;case 3:Ft=7;break t;case 4:Ft=5;break t;case 7:jm(f)?(Ft=0,cn=null,Vg(n)):(Ft=0,cn=null,wa(e,n,f,7));break;case 5:var _=null;switch(At.tag){case 26:_=At.memoizedState;case 5:case 27:var E=At;if(!_||ly(_)){Ft=0,cn=null;var S=E.sibling;if(S!==null)At=S;else{var D=E.return;D!==null?(At=D,Mu(D)):At=null}break e}}Ft=0,cn=null,wa(e,n,f,5);break;case 6:Ft=0,cn=null,wa(e,n,f,6);break;case 8:Ef(),te=6;break t;default:throw Error(a(462))}}lT();break}catch(j){Og(e,j)}while(!0);return Di=gs=null,A.H=o,A.A=c,$t=r,At!==null?0:(Gt=null,Ot=0,eu(),te)}function lT(){for(;At!==null&&!Xc();)Mg(At)}function Mg(e){var n=tg(e.alternate,e,Li);e.memoizedProps=e.pendingProps,n===null?Mu(e):At=n}function Vg(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Qp(r,n,n.pendingProps,n.type,void 0,Ot);break;case 11:n=Qp(r,n,n.pendingProps,n.type.render,n.ref,Ot);break;case 5:wh(n);default:wg(r,n),n=At=Ag(n,Li),n=tg(r,n,Li)}e.memoizedProps=e.pendingProps,n===null?Mu(e):At=n}function wa(e,n,r,o){Di=gs=null,wh(n),fa=null,So=0;var c=n.return;try{if($0(e,c,n,r,Ot)){te=1,Tu(e,Tn(r,e.current)),At=null;return}}catch(f){if(c!==null)throw At=c,f;te=1,Tu(e,Tn(r,e.current)),At=null;return}n.flags&32768?(Ut||o===1?e=!0:Aa||(Ot&536870912)!==0?e=!1:(Pi=e=!0,(o===2||o===3||o===6)&&(o=bn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ug(n,e)):Mu(n)}function Mu(e){var n=e;do{if((n.flags&32768)!==0){Ug(n,Pi);return}e=n.return;var r=eT(n.alternate,n,Li);if(r!==null){At=r;return}if(n=n.sibling,n!==null){At=n;return}At=n=e}while(n!==null);te===0&&(te=5)}function Ug(e,n){do{var r=nT(e.alternate,e);if(r!==null){r.flags&=32767,At=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){At=e;return}At=e=r}while(e!==null);te=6,At=null}function kg(e,n,r,o,c,f,_,E,S,D){var j=A.T,F=J.p;try{J.p=2,A.T=null,uT(e,n,r,o,F,c,f,_,E,S,D)}finally{A.T=j,J.p=F}}function uT(e,n,r,o,c,f,_,E){do Ra();while(Ts!==null);if(($t&6)!==0)throw Error(a(327));var S=e.finishedWork;if(o=e.finishedLanes,S===null)return null;if(e.finishedWork=null,e.finishedLanes=0,S===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var D=S.lanes|S.childLanes;if(D|=ch,Ul(e,o,D,f,_,E),e===Gt&&(At=Gt=null,Ot=0),(S.subtreeFlags&10256)===0&&(S.flags&10256)===0||Du||(Du=!0,gf=D,yf=r,dT(pi,function(){return Ra(),null})),r=(S.flags&15990)!==0,(S.subtreeFlags&15990)!==0||r?(r=A.T,A.T=null,f=J.p,J.p=2,_=$t,$t|=4,W0(e,S),pg(S,e),V0(Uf,e.containerInfo),Gu=!!Vf,Uf=Vf=null,e.current=S,hg(e,S.alternate,S),Xa(),$t=_,J.p=f,A.T=r):e.current=S,Du?(Du=!1,Ts=e,Ho=o):Pg(e,D),D=e.pendingLanes,D===0&&(br=null),Za(S.stateNode),si(e),n!==null)for(c=e.onRecoverableError,S=0;S<n.length;S++)D=n[S],c(D.value,{componentStack:D.stack});return(Ho&3)!==0&&Ra(),D=e.pendingLanes,(o&4194218)!==0&&(D&42)!==0?e===_f?jo++:(jo=0,_f=e):jo=0,qo(0),null}function Pg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,wo(n)))}function Ra(){if(Ts!==null){var e=Ts,n=gf;gf=0;var r=kl(Ho),o=A.T,c=J.p;try{if(J.p=32>r?32:r,A.T=null,Ts===null)var f=!1;else{r=yf,yf=null;var _=Ts,E=Ho;if(Ts=null,Ho=0,($t&6)!==0)throw Error(a(331));var S=$t;if($t|=4,Eg(_.current),yg(_,_.current,E,r),$t=S,qo(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(Xi,_)}catch{}f=!0}return f}finally{J.p=c,A.T=o,Pg(e,n)}}return!1}function Lg(e,n,r){n=Tn(r,n),n=zh(e.stateNode,n,2),e=_r(e,n,2),e!==null&&(re(e,2),si(e))}function qt(e,n,r){if(e.tag===3)Lg(e,e,r);else for(;n!==null;){if(n.tag===3){Lg(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(br===null||!br.has(o))){e=Tn(r,e),r=Bp(2),o=_r(n,r,2),o!==null&&(Hp(r,o,n,e),re(o,2),si(o));break}}n=n.return}}function Sf(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new rT;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(ff=!0,c.add(r),e=cT.bind(null,e,n,r),n.then(e,e))}function cT(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Gt===e&&(Ot&r)===r&&(te===4||te===3&&(Ot&62914560)===Ot&&300>We()-pf?($t&2)===0&&ba(e,0):df|=r,Sa===Ot&&(Sa=0)),si(e)}function xg(e,n){n===0&&(n=Wi()),e=cr(e,n),e!==null&&(re(e,n),si(e))}function hT(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),xg(e,r)}function fT(e,n){var r=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),xg(e,r)}function dT(e,n){return Fr(e,n)}var Vu=null,Ia=null,bf=!1,Uu=!1,wf=!1,As=0;function si(e){e!==Ia&&e.next===null&&(Ia===null?Vu=Ia=e:Ia=Ia.next=e),Uu=!0,bf||(bf=!0,pT(mT))}function qo(e,n){if(!wf&&Uu){wf=!0;do for(var r=!1,o=Vu;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var _=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-Ke(42|e)+1)-1,f&=c&~(_&~E),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(r=!0,Hg(o,f))}else f=Ot,f=mn(o,o===Gt?f:0),(f&3)===0||Zi(o,f)||(r=!0,Hg(o,f));o=o.next}while(r);wf=!1}}function mT(){Uu=bf=!1;var e=0;As!==0&&(ST()&&(e=As),As=0);for(var n=We(),r=null,o=Vu;o!==null;){var c=o.next,f=zg(o,n);f===0?(o.next=null,r===null?Vu=c:r.next=c,c===null&&(Ia=r)):(r=o,(e!==0||(f&3)!==0)&&(Uu=!0)),o=c}qo(e)}function zg(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Ke(f),E=1<<_,S=c[_];S===-1?((E&r)===0||(E&o)!==0)&&(c[_]=Fs(E,n)):S<=n&&(e.expiredLanes|=E),f&=~E}if(n=Gt,r=Ot,r=mn(e,e===n?r:0),o=e.callbackNode,r===0||e===n&&Ft===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Gs(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Zi(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&Gs(o),kl(r)){case 2:case 8:r=Ee;break;case 32:r=pi;break;case 268435456:r=$a;break;default:r=pi}return o=Bg.bind(null,e),r=Fr(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&Gs(o),e.callbackPriority=2,e.callbackNode=null,2}function Bg(e,n){var r=e.callbackNode;if(Ra()&&e.callbackNode!==r)return null;var o=Ot;return o=mn(e,e===Gt?o:0),o===0?null:(Ig(e,o,n),zg(e,We()),e.callbackNode!=null&&e.callbackNode===r?Bg.bind(null,e):null)}function Hg(e,n){if(Ra())return null;Ig(e,n,!0)}function pT(e){wT(function(){($t&6)!==0?Fr(me,e):e()})}function Rf(){return As===0&&(As=Ja()),As}function jg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qn(""+e)}function qg(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function gT(e,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var f=jg((c[pe]||null).action),_=o.submitter;_&&(n=(n=_[pe]||null)?jg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Ws("action","action",null,o,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(As!==0){var S=_?qg(c,_):new FormData(c);Uh(r,{pending:!0,data:S,method:c.method,action:f},null,S)}}else typeof f=="function"&&(E.preventDefault(),S=_?qg(c,_):new FormData(c),Uh(r,{pending:!0,data:S,method:c.method,action:f},f,S))},currentTarget:c}]})}}for(var If=0;If<km.length;If++){var Cf=km[If],yT=Cf.toLowerCase(),_T=Cf[0].toUpperCase()+Cf.slice(1);Un(yT,"on"+_T)}Un(Dm,"onAnimationEnd"),Un(Nm,"onAnimationIteration"),Un(Mm,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(k0,"onTransitionRun"),Un(P0,"onTransitionStart"),Un(L0,"onTransitionCancel"),Un(Vm,"onTransitionEnd"),Je("onMouseEnter",["mouseout","mouseover"]),Je("onMouseLeave",["mouseout","mouseover"]),Je("onPointerEnter",["pointerout","pointerover"]),Je("onPointerLeave",["pointerout","pointerover"]),sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sn("onBeforeInput",["compositionend","keypress","textInput","paste"]),sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function Gg(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var E=o[_],S=E.instance,D=E.currentTarget;if(E=E.listener,S!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=D;try{f(c)}catch(j){Eu(j)}c.currentTarget=null,f=S}else for(_=0;_<o.length;_++){if(E=o[_],S=E.instance,D=E.currentTarget,E=E.listener,S!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=D;try{f(c)}catch(j){Eu(j)}c.currentTarget=null,f=S}}}}function Rt(e,n){var r=n[Yr];r===void 0&&(r=n[Yr]=new Set);var o=e+"__bubble";r.has(o)||(Fg(n,e,2,!1),r.add(o))}function Of(e,n,r){var o=0;n&&(o|=4),Fg(r,e,o,n)}var ku="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[ku]){e[ku]=!0,eo.forEach(function(r){r!=="selectionchange"&&(vT.has(r)||Of(r,!1,e),Of(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ku]||(n[ku]=!0,Of("selectionchange",!1,n))}}function Fg(e,n,r,o){switch(my(n)){case 2:var c=FT;break;case 8:c=KT;break;default:c=qf}r=c.bind(null,n,r,e),c=void 0,!_n||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,r,{capture:!0,passive:c}):e.addEventListener(n,r,!0):c!==void 0?e.addEventListener(n,r,{passive:c}):e.addEventListener(n,r,!1)}function Nf(e,n,r,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var E=o.stateNode.containerInfo;if(E===c||E.nodeType===8&&E.parentNode===c)break;if(_===4)for(_=o.return;_!==null;){var S=_.tag;if((S===3||S===4)&&(S=_.stateNode.containerInfo,S===c||S.nodeType===8&&S.parentNode===c))return;_=_.return}for(;E!==null;){if(_=Vn(E),_===null)return;if(S=_.tag,S===5||S===6||S===26||S===27){o=f=_;continue t}E=E.parentNode}}o=o.return}Bl(function(){var D=f,j=Zs(r),F=[];t:{var x=Um.get(e);if(x!==void 0){var H=Ws,it=e;switch(e){case"keypress":if($n(r)===0)break t;case"keydown":case"keyup":H=ra;break;case"focusin":it="focus",H=ea;break;case"focusout":it="blur",H=ea;break;case"beforeblur":case"afterblur":H=ea;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=vn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Ql;break;case Dm:case Nm:case Mm:H=na;break;case Vm:H=$l;break;case"scroll":case"scrollend":H=Hl;break;case"wheel":H=sa;break;case"copy":case"cut":case"paste":H=ia;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=mo;break;case"toggle":case"beforetoggle":H=Wl}var ft=(n&4)!==0,ee=!ft&&(e==="scroll"||e==="scrollend"),U=ft?x!==null?x+"Capture":null:x;ft=[];for(var O=D,L;O!==null;){var q=O;if(L=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||L===null||U===null||(q=Wr(O,U),q!=null&&ft.push(Fo(O,q,L))),ee)break;O=O.return}0<ft.length&&(x=new H(x,it,null,r,j),F.push({event:x,listeners:ft}))}}if((n&7)===0){t:{if(x=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",x&&r!==yn&&(it=r.relatedTarget||r.fromElement)&&(Vn(it)||it[gi]))break t;if((H||x)&&(x=j.window===j?j:(x=j.ownerDocument)?x.defaultView||x.parentWindow:window,H?(it=r.relatedTarget||r.toElement,H=D,it=it?Vn(it):null,it!==null&&(ee=ot(it),ft=it.tag,it!==ee||ft!==5&&ft!==27&&ft!==6)&&(it=null)):(H=null,it=D),H!==it)){if(ft=vn,q="onMouseLeave",U="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(ft=mo,q="onPointerLeave",U="onPointerEnter",O="pointer"),ee=H==null?x:ir(H),L=it==null?x:ir(it),x=new ft(q,O+"leave",H,r,j),x.target=ee,x.relatedTarget=L,q=null,Vn(j)===D&&(ft=new ft(U,O+"enter",it,r,j),ft.target=L,ft.relatedTarget=ee,q=ft),ee=q,H&&it)e:{for(ft=H,U=it,O=0,L=ft;L;L=Ca(L))O++;for(L=0,q=U;q;q=Ca(q))L++;for(;0<O-L;)ft=Ca(ft),O--;for(;0<L-O;)U=Ca(U),L--;for(;O--;){if(ft===U||U!==null&&ft===U.alternate)break e;ft=Ca(ft),U=Ca(U)}ft=null}else ft=null;H!==null&&Kg(F,x,H,ft,!1),it!==null&&ee!==null&&Kg(F,ee,it,ft,!0)}}t:{if(x=D?ir(D):window,H=x.nodeName&&x.nodeName.toLowerCase(),H==="select"||H==="input"&&x.type==="file")var et=vm;else if(ye(x))if(Em)et=N0;else{et=O0;var Tt=C0}else H=x.nodeName,!H||H.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?D&&ao(D.elementType)&&(et=vm):et=D0;if(et&&(et=et(e,D))){bi(F,et,r,j);break t}Tt&&Tt(e,x,D),e==="focusout"&&D&&x.type==="number"&&D.memoizedProps.value!=null&&$s(x,"number",x.value)}switch(Tt=D?ir(D):window,e){case"focusin":(ye(Tt)||Tt.contentEditable==="true")&&(aa=Tt,oh=D,yo=null);break;case"focusout":yo=oh=aa=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,Cm(F,r,j);break;case"selectionchange":if(U0)break;case"keydown":case"keyup":Cm(F,r,j)}var st;if(Jn)t:{switch(e){case"compositionstart":var lt="onCompositionStart";break t;case"compositionend":lt="onCompositionEnd";break t;case"compositionupdate":lt="onCompositionUpdate";break t}lt=void 0}else It?z(e,r)&&(lt="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(lt="onCompositionStart");lt&&(g&&r.locale!=="ko"&&(It||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&It&&(st=lo()):(Xn=j,ur="value"in Xn?Xn.value:Xn.textContent,It=!0)),Tt=Pu(D,lt),0<Tt.length&&(lt=new ho(lt,e,null,r,j),F.push({event:lt,listeners:Tt}),st?lt.data=st:(st=X(r),st!==null&&(lt.data=st)))),(st=m?ge(e,r):Ct(e,r))&&(lt=Pu(D,"onBeforeInput"),0<lt.length&&(Tt=new ho("onBeforeInput","beforeinput",null,r,j),F.push({event:Tt,listeners:lt}),Tt.data=st)),gT(F,e,D,r,j)}Gg(F,n)})}function Fo(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Pu(e,n){for(var r=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Wr(e,r),c!=null&&o.unshift(Fo(e,c,f)),c=Wr(e,n),c!=null&&o.push(Fo(e,c,f))),e=e.return}return o}function Ca(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kg(e,n,r,o,c){for(var f=n._reactName,_=[];r!==null&&r!==o;){var E=r,S=E.alternate,D=E.stateNode;if(E=E.tag,S!==null&&S===o)break;E!==5&&E!==26&&E!==27||D===null||(S=D,c?(D=Wr(r,f),D!=null&&_.unshift(Fo(r,D,S))):c||(D=Wr(r,f),D!=null&&_.push(Fo(r,D,S)))),r=r.return}_.length!==0&&e.push({event:n,listeners:_})}var ET=/\r\n?/g,TT=/\u0000|\uFFFD/g;function Yg(e){return(typeof e=="string"?e:""+e).replace(ET,`
`).replace(TT,"")}function Qg(e,n){return n=Yg(n),Yg(e)===n}function Lu(){}function jt(e,n,r,o,c,f){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||gn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&gn(e,""+o);break;case"className":ar(e,"class",o);break;case"tabIndex":ar(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ar(e,r,o);break;case"style":zl(e,o,f);break;case"data":if(n!=="object"){ar(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Qn(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&jt(e,n,"name",c.name,c,null),jt(e,n,"formEncType",c.formEncType,c,null),jt(e,n,"formMethod",c.formMethod,c,null),jt(e,n,"formTarget",c.formTarget,c,null)):(jt(e,n,"encType",c.encType,c,null),jt(e,n,"method",c.method,c,null),jt(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Qn(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=Lu);break;case"onScroll":o!=null&&Rt("scroll",e);break;case"onScrollEnd":o!=null&&Rt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=Qn(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":Rt("beforetoggle",e),Rt("toggle",e),sr(e,"popover",o);break;case"xlinkActuate":pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":sr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=th.get(r)||r,sr(e,r,o))}}function Mf(e,n,r,o,c,f){switch(r){case"style":zl(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof o=="string"?gn(e,o):(typeof o=="number"||typeof o=="bigint")&&gn(e,""+o);break;case"onScroll":o!=null&&Rt("scroll",e);break;case"onScrollEnd":o!=null&&Rt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Lu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qs.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),f=e[pe]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,o,c);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):sr(e,r,o)}}}function Ve(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",e),Rt("load",e);var o=!1,c=!1,f;for(f in r)if(r.hasOwnProperty(f)){var _=r[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:jt(e,n,f,_,r,null)}}c&&jt(e,n,"srcSet",r.srcSet,r,null),o&&jt(e,n,"src",r.src,r,null);return;case"input":Rt("invalid",e);var E=f=_=c=null,S=null,D=null;for(o in r)if(r.hasOwnProperty(o)){var j=r[o];if(j!=null)switch(o){case"name":c=j;break;case"type":_=j;break;case"checked":S=j;break;case"defaultChecked":D=j;break;case"value":f=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(a(137,n));break;default:jt(e,n,o,j,r,null)}}$r(e,f,E,S,D,_,c,!1),Xr(e);return;case"select":Rt("invalid",e),o=_=f=null;for(c in r)if(r.hasOwnProperty(c)&&(E=r[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":o=E;default:jt(e,n,c,E,r,null)}n=f,r=_,e.multiple=!!o,n!=null?Vt(e,!!o,n,!1):r!=null&&Vt(e,!!o,r,!0);return;case"textarea":Rt("invalid",e),f=c=o=null;for(_ in r)if(r.hasOwnProperty(_)&&(E=r[_],E!=null))switch(_){case"value":o=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:jt(e,n,_,E,r,null)}lr(e,o,c,f),Xr(e);return;case"option":for(S in r)if(r.hasOwnProperty(S)&&(o=r[S],o!=null))switch(S){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:jt(e,n,S,o,r,null)}return;case"dialog":Rt("cancel",e),Rt("close",e);break;case"iframe":case"object":Rt("load",e);break;case"video":case"audio":for(o=0;o<Go.length;o++)Rt(Go[o],e);break;case"image":Rt("error",e),Rt("load",e);break;case"details":Rt("toggle",e);break;case"embed":case"source":case"link":Rt("error",e),Rt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in r)if(r.hasOwnProperty(D)&&(o=r[D],o!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:jt(e,n,D,o,r,null)}return;default:if(ao(n)){for(j in r)r.hasOwnProperty(j)&&(o=r[j],o!==void 0&&Mf(e,n,j,o,r,void 0));return}}for(E in r)r.hasOwnProperty(E)&&(o=r[E],o!=null&&jt(e,n,E,o,r,null))}function AT(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,S=null,D=null,j=null;for(H in r){var F=r[H];if(r.hasOwnProperty(H)&&F!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":S=F;default:o.hasOwnProperty(H)||jt(e,n,H,null,o,F)}}for(var x in o){var H=o[x];if(F=r[x],o.hasOwnProperty(x)&&(H!=null||F!=null))switch(x){case"type":f=H;break;case"name":c=H;break;case"checked":D=H;break;case"defaultChecked":j=H;break;case"value":_=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,n));break;default:H!==F&&jt(e,n,x,H,o,F)}}or(e,_,E,S,D,j,f,c);return;case"select":H=_=E=x=null;for(f in r)if(S=r[f],r.hasOwnProperty(f)&&S!=null)switch(f){case"value":break;case"multiple":H=S;default:o.hasOwnProperty(f)||jt(e,n,f,null,o,S)}for(c in o)if(f=o[c],S=r[c],o.hasOwnProperty(c)&&(f!=null||S!=null))switch(c){case"value":x=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==S&&jt(e,n,c,f,o,S)}n=E,r=_,o=H,x!=null?Vt(e,!!r,x,!1):!!o!=!!r&&(n!=null?Vt(e,!!r,n,!0):Vt(e,!!r,r?[]:"",!1));return;case"textarea":H=x=null;for(E in r)if(c=r[E],r.hasOwnProperty(E)&&c!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:jt(e,n,E,null,o,c)}for(_ in o)if(c=o[_],f=r[_],o.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":x=c;break;case"defaultValue":H=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==f&&jt(e,n,_,c,o,f)}Zr(e,x,H);return;case"option":for(var it in r)if(x=r[it],r.hasOwnProperty(it)&&x!=null&&!o.hasOwnProperty(it))switch(it){case"selected":e.selected=!1;break;default:jt(e,n,it,null,o,x)}for(S in o)if(x=o[S],H=r[S],o.hasOwnProperty(S)&&x!==H&&(x!=null||H!=null))switch(S){case"selected":e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:jt(e,n,S,x,o,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in r)x=r[ft],r.hasOwnProperty(ft)&&x!=null&&!o.hasOwnProperty(ft)&&jt(e,n,ft,null,o,x);for(D in o)if(x=o[D],H=r[D],o.hasOwnProperty(D)&&x!==H&&(x!=null||H!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(a(137,n));break;default:jt(e,n,D,x,o,H)}return;default:if(ao(n)){for(var ee in r)x=r[ee],r.hasOwnProperty(ee)&&x!==void 0&&!o.hasOwnProperty(ee)&&Mf(e,n,ee,void 0,o,x);for(j in o)x=o[j],H=r[j],!o.hasOwnProperty(j)||x===H||x===void 0&&H===void 0||Mf(e,n,j,x,o,H);return}}for(var U in r)x=r[U],r.hasOwnProperty(U)&&x!=null&&!o.hasOwnProperty(U)&&jt(e,n,U,null,o,x);for(F in o)x=o[F],H=r[F],!o.hasOwnProperty(F)||x===H||x==null&&H==null||jt(e,n,F,x,o,H)}var Vf=null,Uf=null;function xu(e){return e.nodeType===9?e:e.ownerDocument}function Xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $g(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function ST(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var Zg=typeof setTimeout=="function"?setTimeout:void 0,bT=typeof clearTimeout=="function"?clearTimeout:void 0,Wg=typeof Promise=="function"?Promise:void 0,wT=typeof queueMicrotask=="function"?queueMicrotask:typeof Wg<"u"?function(e){return Wg.resolve(null).then(e).catch(RT)}:Zg;function RT(e){setTimeout(function(){throw e})}function Lf(e,n){var r=n,o=0;do{var c=r.nextSibling;if(e.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(o===0){e.removeChild(c),Jo(n);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=c}while(r);Jo(n)}function xf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":xf(r),Qr(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function IT(e,n,r,o){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[nr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ln(e.nextSibling),e===null)break}return null}function CT(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ln(e.nextSibling),e===null))return null;return e}function Ln(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function Jg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function ty(e,n,r){switch(n=xu(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}var On=new Map,ey=new Set;function zu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var zi=J.d;J.d={f:OT,r:DT,D:NT,C:MT,L:VT,m:UT,X:PT,S:kT,M:LT};function OT(){var e=zi.f(),n=Nu();return e||n}function DT(e){var n=yi(e);n!==null&&n.tag===5&&n.type==="form"?Cp(n):zi.r(e)}var Oa=typeof document>"u"?null:document;function ny(e,n,r){var o=Oa;if(o&&typeof n=="string"&&n){var c=Wt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),ey.has(c)||(ey.add(c),e={rel:e,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Ve(n,"link",e),Qt(n),o.head.appendChild(n)))}}function NT(e){zi.D(e),ny("dns-prefetch",e,null)}function MT(e,n){zi.C(e,n),ny("preconnect",e,n)}function VT(e,n,r){zi.L(e,n,r);var o=Oa;if(o&&e&&n){var c='link[rel="preload"][as="'+Wt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+Wt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+Wt(r.imageSizes)+'"]')):c+='[href="'+Wt(e)+'"]';var f=c;switch(n){case"style":f=Da(e);break;case"script":f=Na(e)}On.has(f)||(e=I({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),On.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ko(f))||n==="script"&&o.querySelector(Yo(f))||(n=o.createElement("link"),Ve(n,"link",e),Qt(n),o.head.appendChild(n)))}}function UT(e,n){zi.m(e,n);var r=Oa;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Wt(o)+'"][href="'+Wt(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Na(e)}if(!On.has(f)&&(e=I({rel:"modulepreload",href:e},n),On.set(f,e),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Yo(f)))return}o=r.createElement("link"),Ve(o,"link",e),Qt(o),r.head.appendChild(o)}}}function kT(e,n,r){zi.S(e,n,r);var o=Oa;if(o&&e){var c=rr(o).hoistableStyles,f=Da(e);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=o.querySelector(Ko(f)))E.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":n},r),(r=On.get(f))&&zf(e,r);var S=_=o.createElement("link");Qt(S),Ve(S,"link",e),S._p=new Promise(function(D,j){S.onload=D,S.onerror=j}),S.addEventListener("load",function(){E.loading|=1}),S.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Bu(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function PT(e,n){zi.X(e,n);var r=Oa;if(r&&e){var o=rr(r).hoistableScripts,c=Na(e),f=o.get(c);f||(f=r.querySelector(Yo(c)),f||(e=I({src:e,async:!0},n),(n=On.get(c))&&Bf(e,n),f=r.createElement("script"),Qt(f),Ve(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function LT(e,n){zi.M(e,n);var r=Oa;if(r&&e){var o=rr(r).hoistableScripts,c=Na(e),f=o.get(c);f||(f=r.querySelector(Yo(c)),f||(e=I({src:e,async:!0,type:"module"},n),(n=On.get(c))&&Bf(e,n),f=r.createElement("script"),Qt(f),Ve(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function iy(e,n,r,o){var c=(c=dn.current)?zu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Da(r.href),r=rr(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Da(r.href);var f=rr(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(Ko(e)))&&!f._p&&(_.instance=f,_.state.loading=5),On.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},On.set(e,r),f||xT(c,e,r,_.state))),n&&o===null)throw Error(a(528,""));return _}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Na(r),r=rr(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Da(e){return'href="'+Wt(e)+'"'}function Ko(e){return'link[rel="stylesheet"]['+e+"]"}function ry(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function xT(e,n,r,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Ve(n,"link",r),Qt(n),e.head.appendChild(n))}function Na(e){return'[src="'+Wt(e)+'"]'}function Yo(e){return"script[async]"+e}function sy(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Wt(r.href)+'"]');if(o)return n.instance=o,Qt(o),o;var c=I({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Qt(o),Ve(o,"style",c),Bu(o,r.precedence,e),n.instance=o;case"stylesheet":c=Da(r.href);var f=e.querySelector(Ko(c));if(f)return n.state.loading|=4,n.instance=f,Qt(f),f;o=ry(r),(c=On.get(c))&&zf(o,c),f=(e.ownerDocument||e).createElement("link"),Qt(f);var _=f;return _._p=new Promise(function(E,S){_.onload=E,_.onerror=S}),Ve(f,"link",o),n.state.loading|=4,Bu(f,r.precedence,e),n.instance=f;case"script":return f=Na(r.src),(c=e.querySelector(Yo(f)))?(n.instance=c,Qt(c),c):(o=r,(c=On.get(f))&&(o=I({},r),Bf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Qt(c),Ve(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Bu(o,r.precedence,e));return n.instance}function Bu(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,_=0;_<o.length;_++){var E=o[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Hu=null;function ay(e,n,r){if(Hu===null){var o=new Map,c=Hu=new Map;c.set(r,o)}else c=Hu,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var f=r[c];if(!(f[nr]||f[Te]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var E=o.get(_);E?E.push(f):o.set(_,[f])}}return o}function oy(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function zT(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ly(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Qo=null;function BT(){}function HT(e,n,r){if(Qo===null)throw Error(a(475));var o=Qo;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Da(r.href),f=e.querySelector(Ko(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=ju.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,Qt(f);return}f=e.ownerDocument||e,r=ry(r),(c=On.get(c))&&zf(r,c),f=f.createElement("link"),Qt(f);var _=f;_._p=new Promise(function(E,S){_.onload=E,_.onerror=S}),Ve(f,"link",r),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ju.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function jT(){if(Qo===null)throw Error(a(475));var e=Qo;return e.stylesheets&&e.count===0&&Hf(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&Hf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function ju(){if(this.count--,this.count===0){if(this.stylesheets)Hf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qu=null;function Hf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qu=new Map,n.forEach(qT,e),qu=null,ju.call(e))}function qT(e,n){if(!(n.state.loading&4)){var r=qu.get(e);if(r)var o=r.get(null);else{r=new Map,qu.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(r.set(_.dataset.precedence,_),o=_)}o&&r.set(null,o)}c=n.instance,_=c.getAttribute("data-precedence"),f=r.get(_)||o,f===o&&r.set(null,c),r.set(_,c),this.count++,o=ju.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Xo={$$typeof:K,Provider:null,Consumer:null,_currentValue:yt,_currentValue2:yt,_threadCount:0};function GT(e,n,r,o,c,f,_,E){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ks(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ks(0),this.hiddenUpdates=Ks(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function uy(e,n,r,o,c,f,_,E,S,D,j,F){return e=new GT(e,n,r,_,E,S,D,F),n=1,f===!0&&(n|=24),f=In(3,null,null,n),e.current=f,f.stateNode=e,n=_h(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:n},Wh(f),e}function cy(e){return e?(e=ua,e):ua}function hy(e,n,r,o,c,f){c=cy(c),o.context===null?o.context=c:o.pendingContext=c,o=yr(n),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=_r(e,o,n),r!==null&&($e(r,e,n),Mo(r,e,n))}function fy(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function jf(e,n){fy(e,n),(e=e.alternate)&&fy(e,n)}function dy(e){if(e.tag===13){var n=cr(e,67108864);n!==null&&$e(n,e,67108864),jf(e,67108864)}}var Gu=!0;function FT(e,n,r,o){var c=A.T;A.T=null;var f=J.p;try{J.p=2,qf(e,n,r,o)}finally{J.p=f,A.T=c}}function KT(e,n,r,o){var c=A.T;A.T=null;var f=J.p;try{J.p=8,qf(e,n,r,o)}finally{J.p=f,A.T=c}}function qf(e,n,r,o){if(Gu){var c=Gf(o);if(c===null)Nf(e,n,o,Fu,r),py(e,o);else if(QT(c,e,n,r,o))o.stopPropagation();else if(py(e,o),n&4&&-1<YT.indexOf(e)){for(;c!==null;){var f=yi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Mn(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var S=1<<31-Ke(_);E.entanglements[1]|=S,_&=~S}si(f),($t&6)===0&&(Cu=We()+500,qo(0))}}break;case 13:E=cr(f,2),E!==null&&$e(E,f,2),Nu(),jf(f,2)}if(f=Gf(o),f===null&&Nf(e,n,o,Fu,r),f===c)break;c=f}c!==null&&o.stopPropagation()}else Nf(e,n,o,null,r)}}function Gf(e){return e=Zs(e),Ff(e)}var Fu=null;function Ff(e){if(Fu=null,e=Vn(e),e!==null){var n=ot(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=Pt(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Fu=e,null}function my(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dl()){case me:return 2;case Ee:return 8;case pi:case Nl:return 32;case $a:return 268435456;default:return 32}default:return 32}}var Kf=!1,wr=null,Rr=null,Ir=null,$o=new Map,Zo=new Map,Cr=[],YT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function py(e,n){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":$o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(n.pointerId)}}function Wo(e,n,r,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=yi(n),n!==null&&dy(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function QT(e,n,r,o,c){switch(n){case"focusin":return wr=Wo(wr,e,n,r,o,c),!0;case"dragenter":return Rr=Wo(Rr,e,n,r,o,c),!0;case"mouseover":return Ir=Wo(Ir,e,n,r,o,c),!0;case"pointerover":var f=c.pointerId;return $o.set(f,Wo($o.get(f)||null,e,n,r,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Zo.set(f,Wo(Zo.get(f)||null,e,n,r,o,c)),!0}return!1}function gy(e){var n=Vn(e.target);if(n!==null){var r=ot(n);if(r!==null){if(n=r.tag,n===13){if(n=Pt(r),n!==null){e.blockedOn=n,er(e.priority,function(){if(r.tag===13){var o=hn(),c=cr(r,o);c!==null&&$e(c,r,o),jf(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ku(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Gf(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);yn=o,r.target.dispatchEvent(o),yn=null}else return n=yi(r),n!==null&&dy(n),e.blockedOn=r,!1;n.shift()}return!0}function yy(e,n,r){Ku(e)&&r.delete(n)}function XT(){Kf=!1,wr!==null&&Ku(wr)&&(wr=null),Rr!==null&&Ku(Rr)&&(Rr=null),Ir!==null&&Ku(Ir)&&(Ir=null),$o.forEach(yy),Zo.forEach(yy)}function Yu(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,XT)))}var Qu=null;function _y(e){Qu!==e&&(Qu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Qu===e&&(Qu=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Ff(o||r)===null)continue;break}var f=yi(r);f!==null&&(e.splice(n,3),n-=3,Uh(f,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function Jo(e){function n(S){return Yu(S,e)}wr!==null&&Yu(wr,e),Rr!==null&&Yu(Rr,e),Ir!==null&&Yu(Ir,e),$o.forEach(n),Zo.forEach(n);for(var r=0;r<Cr.length;r++){var o=Cr[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Cr.length&&(r=Cr[0],r.blockedOn===null);)gy(r),r.blockedOn===null&&Cr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],f=r[o+1],_=c[pe]||null;if(typeof f=="function")_||_y(r);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[pe]||null)E=_.formAction;else if(Ff(c)!==null)continue}else E=_.action;typeof E=="function"?r[o+1]=E:(r.splice(o,3),o-=3),_y(r)}}}function Yf(e){this._internalRoot=e}Xu.prototype.render=Yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=hn();hy(r,o,e,n,null,null)},Xu.prototype.unmount=Yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Ra(),hy(e.current,2,null,e,null,null),Nu(),n[gi]=null}};function Xu(e){this._internalRoot=e}Xu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pl();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Cr.length&&n!==0&&n<Cr[r].priority;r++);Cr.splice(r,0,e),r===0&&gy(e)}};var vy=t.version;if(vy!=="19.0.0")throw Error(a(527,vy,"19.0.0"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Y(n),e=e!==null?rt(e):null,e=e===null?null:e.stateNode,e};var $T={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Vn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Xi=$u.inject($T),xe=$u}catch{}}return el.createRoot=function(e,n){if(!l(e))throw Error(a(299));var r=!1,o="",c=Pp,f=Lp,_=xp,E=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=uy(e,1,!1,null,null,r,o,c,f,_,E,null),e[gi]=n.current,Df(e.nodeType===8?e.parentNode:e),new Yf(n)},el.hydrateRoot=function(e,n,r){if(!l(e))throw Error(a(299));var o=!1,c="",f=Pp,_=Lp,E=xp,S=null,D=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(_=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks),r.formState!==void 0&&(D=r.formState)),n=uy(e,1,!0,n,r??null,o,c,f,_,E,S,D),n.context=cy(null),r=n.current,o=hn(),c=yr(o),c.callback=null,_r(r,c,o),n.current.lanes=o,re(n,o),si(n),e[gi]=n.current,Df(e),new Xu(n)},el.version="19.0.0",el}var Oy;function aA(){if(Oy)return $f.exports;Oy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),$f.exports=sA(),$f.exports}var oA=aA();const lA=()=>{};var Dy={};/**
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
 */const ev=function(s){const t=[];let i=0;for(let a=0;a<s.length;a++){let l=s.charCodeAt(a);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(s.charCodeAt(++a)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},uA=function(s){const t=[];let i=0,a=0;for(;i<s.length;){const l=s[i++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const h=s[i++];t[a++]=String.fromCharCode((l&31)<<6|h&63)}else if(l>239&&l<365){const h=s[i++],d=s[i++],p=s[i++],y=((l&7)<<18|(h&63)<<12|(d&63)<<6|p&63)-65536;t[a++]=String.fromCharCode(55296+(y>>10)),t[a++]=String.fromCharCode(56320+(y&1023))}else{const h=s[i++],d=s[i++];t[a++]=String.fromCharCode((l&15)<<12|(h&63)<<6|d&63)}}return t.join("")},nv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<s.length;l+=3){const h=s[l],d=l+1<s.length,p=d?s[l+1]:0,y=l+2<s.length,v=y?s[l+2]:0,R=h>>2,V=(h&3)<<4|p>>4;let B=(p&15)<<2|v>>6,K=v&63;y||(K=64,d||(B=64)),a.push(i[R],i[V],i[B],i[K])}return a.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(ev(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):uA(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<s.length;){const h=i[s.charAt(l++)],p=l<s.length?i[s.charAt(l)]:0;++l;const v=l<s.length?i[s.charAt(l)]:64;++l;const V=l<s.length?i[s.charAt(l)]:64;if(++l,h==null||p==null||v==null||V==null)throw new cA;const B=h<<2|p>>4;if(a.push(B),v!==64){const K=p<<4&240|v>>2;if(a.push(K),V!==64){const $=v<<6&192|V;a.push($)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class cA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hA=function(s){const t=ev(s);return nv.encodeByteArray(t,!0)},hc=function(s){return hA(s).replace(/\./g,"")},iv=function(s){try{return nv.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function fA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dA=()=>fA().__FIREBASE_DEFAULTS__,mA=()=>{if(typeof process>"u"||typeof Dy>"u")return;const s=Dy.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},pA=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&iv(s[1]);return t&&JSON.parse(t)},Vc=()=>{try{return lA()||dA()||mA()||pA()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},rv=s=>{var t,i;return(i=(t=Vc())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[s]},gA=s=>{const t=rv(s);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},sv=()=>{var s;return(s=Vc())===null||s===void 0?void 0:s.config},av=s=>{var t;return(t=Vc())===null||t===void 0?void 0:t[`_${s}`]};/**
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
 */class yA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function _A(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",l=s.iat||0,h=s.sub||s.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},s);return[hc(JSON.stringify(i)),hc(JSON.stringify(d)),""].join(".")}/**
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function EA(){var s;const t=(s=Vc())===null||s===void 0?void 0:s.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ov(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function AA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SA(){const s=Ge();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function bA(){return!EA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lv(){try{return typeof indexedDB=="object"}catch{return!1}}function uv(){return new Promise((s,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var h;t(((h=l.error)===null||h===void 0?void 0:h.message)||"")}}catch(i){t(i)}})}function wA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const RA="FirebaseError";class qn extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=RA,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},l=`${this.service}/${t}`,h=this.errors[t],d=h?IA(h,a):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new qn(l,p,a)}}function IA(s,t){return s.replace(CA,(i,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const CA=/\{\$([^}]+)}/g;function OA(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function xr(s,t){if(s===t)return!0;const i=Object.keys(s),a=Object.keys(t);for(const l of i){if(!a.includes(l))return!1;const h=s[l],d=t[l];if(Ny(h)&&Ny(d)){if(!xr(h,d))return!1}else if(h!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function Ny(s){return s!==null&&typeof s=="object"}/**
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
 */function El(s){const t=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function il(s){const t={};return s.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[l,h]=a.split("=");t[decodeURIComponent(l)]=decodeURIComponent(h)}}),t}function rl(s){const t=s.indexOf("?");if(!t)return"";const i=s.indexOf("#",t);return s.substring(t,i>0?i:void 0)}function DA(s,t){const i=new NA(s,t);return i.subscribe.bind(i)}class NA{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let l;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");MA(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:a},l.next===void 0&&(l.next=td),l.error===void 0&&(l.error=td),l.complete===void 0&&(l.complete=td);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),h}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MA(s,t){if(typeof s!="object"||s===null)return!1;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}function td(){}/**
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
 */const VA=1e3,UA=2,kA=4*60*60*1e3,PA=.5;function My(s,t=VA,i=UA){const a=t*Math.pow(i,s),l=Math.round(PA*a*(Math.random()-.5)*2);return Math.min(kA,a+l)}/**
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
 */function Ze(s){return s&&s._delegate?s._delegate:s}class Hn{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ss="[DEFAULT]";/**
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
 */class LA{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new yA;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),l=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(h){if(l)return null;throw h}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zA(t))try{this.getOrInitializeService({instanceIdentifier:Ss})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const h=this.getOrInitializeService({instanceIdentifier:l});a.resolve(h)}catch{}}}}clearInstance(t=Ss){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ss){return this.instances.has(t)}getOptions(t=Ss){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[h,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(h);a===p&&d.resolve(l)}return l}onInit(t,i){var a;const l=this.normalizeInstanceIdentifier(i),h=(a=this.onInitCallbacks.get(l))!==null&&a!==void 0?a:new Set;h.add(t),this.onInitCallbacks.set(l,h);const d=this.instances.get(l);return d&&t(d,l),()=>{h.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:xA(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Ss){return this.component?this.component.multipleInstances?t:Ss:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xA(s){return s===Ss?void 0:s}function zA(s){return s.instantiationMode==="EAGER"}/**
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
 */class BA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new LA(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var bt;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(bt||(bt={}));const HA={debug:bt.DEBUG,verbose:bt.VERBOSE,info:bt.INFO,warn:bt.WARN,error:bt.ERROR,silent:bt.SILENT},jA=bt.INFO,qA={[bt.DEBUG]:"log",[bt.VERBOSE]:"log",[bt.INFO]:"info",[bt.WARN]:"warn",[bt.ERROR]:"error"},GA=(s,t,...i)=>{if(t<s.logLevel)return;const a=new Date().toISOString(),l=qA[t];if(l)console[l](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Uc{constructor(t){this.name=t,this._logLevel=jA,this._logHandler=GA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in bt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?HA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,bt.DEBUG,...t),this._logHandler(this,bt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,bt.VERBOSE,...t),this._logHandler(this,bt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,bt.INFO,...t),this._logHandler(this,bt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,bt.WARN,...t),this._logHandler(this,bt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,bt.ERROR,...t),this._logHandler(this,bt.ERROR,...t)}}const FA=(s,t)=>t.some(i=>s instanceof i);let Vy,Uy;function KA(){return Vy||(Vy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YA(){return Uy||(Uy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cv=new WeakMap,dd=new WeakMap,hv=new WeakMap,ed=new WeakMap,Pd=new WeakMap;function QA(s){const t=new Promise((i,a)=>{const l=()=>{s.removeEventListener("success",h),s.removeEventListener("error",d)},h=()=>{i(kr(s.result)),l()},d=()=>{a(s.error),l()};s.addEventListener("success",h),s.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&cv.set(i,s)}).catch(()=>{}),Pd.set(t,s),t}function XA(s){if(dd.has(s))return;const t=new Promise((i,a)=>{const l=()=>{s.removeEventListener("complete",h),s.removeEventListener("error",d),s.removeEventListener("abort",d)},h=()=>{i(),l()},d=()=>{a(s.error||new DOMException("AbortError","AbortError")),l()};s.addEventListener("complete",h),s.addEventListener("error",d),s.addEventListener("abort",d)});dd.set(s,t)}let md={get(s,t,i){if(s instanceof IDBTransaction){if(t==="done")return dd.get(s);if(t==="objectStoreNames")return s.objectStoreNames||hv.get(s);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return kr(s[t])},set(s,t,i){return s[t]=i,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function $A(s){md=s(md)}function ZA(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=s.call(nd(this),t,...i);return hv.set(a,t.sort?t.sort():[t]),kr(a)}:YA().includes(s)?function(...t){return s.apply(nd(this),t),kr(cv.get(this))}:function(...t){return kr(s.apply(nd(this),t))}}function WA(s){return typeof s=="function"?ZA(s):(s instanceof IDBTransaction&&XA(s),FA(s,KA())?new Proxy(s,md):s)}function kr(s){if(s instanceof IDBRequest)return QA(s);if(ed.has(s))return ed.get(s);const t=WA(s);return t!==s&&(ed.set(s,t),Pd.set(t,s)),t}const nd=s=>Pd.get(s);function fv(s,t,{blocked:i,upgrade:a,blocking:l,terminated:h}={}){const d=indexedDB.open(s,t),p=kr(d);return a&&d.addEventListener("upgradeneeded",y=>{a(kr(d.result),y.oldVersion,y.newVersion,kr(d.transaction),y)}),i&&d.addEventListener("blocked",y=>i(y.oldVersion,y.newVersion,y)),p.then(y=>{h&&y.addEventListener("close",()=>h()),l&&y.addEventListener("versionchange",v=>l(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const JA=["get","getKey","getAll","getAllKeys","count"],tS=["put","add","delete","clear"],id=new Map;function ky(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(id.get(t))return id.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,l=tS.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||JA.includes(i)))return;const h=async function(d,...p){const y=this.transaction(d,l?"readwrite":"readonly");let v=y.store;return a&&(v=v.index(p.shift())),(await Promise.all([v[i](...p),l&&y.done]))[0]};return id.set(t,h),h}$A(s=>({...s,get:(t,i,a)=>ky(t,i)||s.get(t,i,a),has:(t,i)=>!!ky(t,i)||s.has(t,i)}));/**
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
 */class eS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(nS(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function nS(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const pd="@firebase/app",Py="0.11.2";/**
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
 */const Fi=new Uc("@firebase/app"),iS="@firebase/app-compat",rS="@firebase/analytics-compat",sS="@firebase/analytics",aS="@firebase/app-check-compat",oS="@firebase/app-check",lS="@firebase/auth",uS="@firebase/auth-compat",cS="@firebase/database",hS="@firebase/data-connect",fS="@firebase/database-compat",dS="@firebase/functions",mS="@firebase/functions-compat",pS="@firebase/installations",gS="@firebase/installations-compat",yS="@firebase/messaging",_S="@firebase/messaging-compat",vS="@firebase/performance",ES="@firebase/performance-compat",TS="@firebase/remote-config",AS="@firebase/remote-config-compat",SS="@firebase/storage",bS="@firebase/storage-compat",wS="@firebase/firestore",RS="@firebase/vertexai",IS="@firebase/firestore-compat",CS="firebase",OS="11.4.0";/**
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
 */const gd="[DEFAULT]",DS={[pd]:"fire-core",[iS]:"fire-core-compat",[sS]:"fire-analytics",[rS]:"fire-analytics-compat",[oS]:"fire-app-check",[aS]:"fire-app-check-compat",[lS]:"fire-auth",[uS]:"fire-auth-compat",[cS]:"fire-rtdb",[hS]:"fire-data-connect",[fS]:"fire-rtdb-compat",[dS]:"fire-fn",[mS]:"fire-fn-compat",[pS]:"fire-iid",[gS]:"fire-iid-compat",[yS]:"fire-fcm",[_S]:"fire-fcm-compat",[vS]:"fire-perf",[ES]:"fire-perf-compat",[TS]:"fire-rc",[AS]:"fire-rc-compat",[SS]:"fire-gcs",[bS]:"fire-gcs-compat",[wS]:"fire-fst",[IS]:"fire-fst-compat",[RS]:"fire-vertex","fire-js":"fire-js",[CS]:"fire-js-all"};/**
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
 */const fc=new Map,NS=new Map,yd=new Map;function Ly(s,t){try{s.container.addComponent(t)}catch(i){Fi.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,i)}}function ci(s){const t=s.name;if(yd.has(t))return Fi.debug(`There were multiple attempts to register component ${t}.`),!1;yd.set(t,s);for(const i of fc.values())Ly(i,s);for(const i of NS.values())Ly(i,s);return!0}function xs(s,t){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(t)}function Dn(s){return s==null?!1:s.settings!==void 0}/**
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
 */const MS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new Ls("app","Firebase",MS);/**
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
 */class VS{constructor(t,i,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ga=OS;function dv(s,t={}){let i=s;typeof t!="object"&&(t={name:t});const a=Object.assign({name:gd,automaticDataCollectionEnabled:!1},t),l=a.name;if(typeof l!="string"||!l)throw Pr.create("bad-app-name",{appName:String(l)});if(i||(i=sv()),!i)throw Pr.create("no-options");const h=fc.get(l);if(h){if(xr(i,h.options)&&xr(a,h.config))return h;throw Pr.create("duplicate-app",{appName:l})}const d=new BA(l);for(const y of yd.values())d.addComponent(y);const p=new VS(i,a,d);return fc.set(l,p),p}function Ld(s=gd){const t=fc.get(s);if(!t&&s===gd&&sv())return dv();if(!t)throw Pr.create("no-app",{appName:s});return t}function Nn(s,t,i){var a;let l=(a=DS[s])!==null&&a!==void 0?a:s;i&&(l+=`-${i}`);const h=l.match(/\s|\//),d=t.match(/\s|\//);if(h||d){const p=[`Unable to register library "${l}" with version "${t}":`];h&&p.push(`library name "${l}" contains illegal characters (whitespace or "/")`),h&&d&&p.push("and"),d&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Fi.warn(p.join(" "));return}ci(new Hn(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
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
 */const US="firebase-heartbeat-database",kS=1,fl="firebase-heartbeat-store";let rd=null;function mv(){return rd||(rd=fv(US,kS,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(fl)}catch(i){console.warn(i)}}}}).catch(s=>{throw Pr.create("idb-open",{originalErrorMessage:s.message})})),rd}async function PS(s){try{const i=(await mv()).transaction(fl),a=await i.objectStore(fl).get(pv(s));return await i.done,a}catch(t){if(t instanceof qn)Fi.warn(t.message);else{const i=Pr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Fi.warn(i.message)}}}async function xy(s,t){try{const a=(await mv()).transaction(fl,"readwrite");await a.objectStore(fl).put(t,pv(s)),await a.done}catch(i){if(i instanceof qn)Fi.warn(i.message);else{const a=Pr.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Fi.warn(a.message)}}}function pv(s){return`${s.name}!${s.options.appId}`}/**
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
 */const LS=1024,xS=30;class zS{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new HS(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=zy();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(d=>d.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:l}),this._heartbeatsCache.heartbeats.length>xS){const d=jS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Fi.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=zy(),{heartbeatsToSend:a,unsentEntries:l}=BS(this._heartbeatsCache.heartbeats),h=hc(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(i){return Fi.warn(i),""}}}function zy(){return new Date().toISOString().substring(0,10)}function BS(s,t=LS){const i=[];let a=s.slice();for(const l of s){const h=i.find(d=>d.agent===l.agent);if(h){if(h.dates.push(l.date),By(i)>t){h.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),By(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class HS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lv()?uv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await PS(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return xy(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return xy(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function By(s){return hc(JSON.stringify({version:2,heartbeats:s})).length}function jS(s){if(s.length===0)return-1;let t=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,t=a);return t}/**
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
 */function qS(s){ci(new Hn("platform-logger",t=>new eS(t),"PRIVATE")),ci(new Hn("heartbeat",t=>new zS(t),"PRIVATE")),Nn(pd,Py,s),Nn(pd,Py,"esm2017"),Nn("fire-js","")}qS("");function xd(s,t){var i={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&t.indexOf(a)<0&&(i[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(s);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(s,a[l])&&(i[a[l]]=s[a[l]]);return i}function gv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GS=gv,yv=new Ls("auth","Firebase",gv());/**
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
 */const dc=new Uc("@firebase/auth");function FS(s,...t){dc.logLevel<=bt.WARN&&dc.warn(`Auth (${Ga}): ${s}`,...t)}function ic(s,...t){dc.logLevel<=bt.ERROR&&dc.error(`Auth (${Ga}): ${s}`,...t)}/**
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
 */function jn(s,...t){throw zd(s,...t)}function oi(s,...t){return zd(s,...t)}function _v(s,t,i){const a=Object.assign(Object.assign({},GS()),{[t]:i});return new Ls("auth","Firebase",a).create(t,{appName:s.name})}function qi(s){return _v(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zd(s,...t){if(typeof s!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return yv.create(s,...t)}function ut(s,t,...i){if(!s)throw zd(t,...i)}function Bi(s){const t="INTERNAL ASSERTION FAILED: "+s;throw ic(t),new Error(t)}function Ki(s,t){s||Bi(t)}/**
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
 */function _d(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function KS(){return Hy()==="http:"||Hy()==="https:"}function Hy(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
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
 */function YS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KS()||ov()||"connection"in navigator)?navigator.onLine:!0}function QS(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class Tl{constructor(t,i){this.shortDelay=t,this.longDelay=i,Ki(i>t,"Short delay should be less than long delay!"),this.isMobile=vA()||AA()}get(){return YS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bd(s,t){Ki(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class vv{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const XS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $S=new Tl(3e4,6e4);function qr(s,t){return s.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:s.tenantId}):t}async function Gr(s,t,i,a,l={}){return Ev(s,l,async()=>{let h={},d={};a&&(t==="GET"?d=a:h={body:JSON.stringify(a)});const p=El(Object.assign({key:s.config.apiKey},d)).slice(1),y=await s._getAdditionalHeaders();y["Content-Type"]="application/json",s.languageCode&&(y["X-Firebase-Locale"]=s.languageCode);const v=Object.assign({method:t,headers:y},h);return TA()||(v.referrerPolicy="no-referrer"),vv.fetch()(Tv(s,s.config.apiHost,i,p),v)})}async function Ev(s,t,i){s._canInitEmulator=!1;const a=Object.assign(Object.assign({},XS),t);try{const l=new WS(s),h=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await h.json();if("needConfirmation"in d)throw Zu(s,"account-exists-with-different-credential",d);if(h.ok&&!("errorMessage"in d))return d;{const p=h.ok?d.errorMessage:d.error.message,[y,v]=p.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zu(s,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw Zu(s,"email-already-in-use",d);if(y==="USER_DISABLED")throw Zu(s,"user-disabled",d);const R=a[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw _v(s,R,v);jn(s,R)}}catch(l){if(l instanceof qn)throw l;jn(s,"network-request-failed",{message:String(l)})}}async function Al(s,t,i,a,l={}){const h=await Gr(s,t,i,a,l);return"mfaPendingCredential"in h&&jn(s,"multi-factor-auth-required",{_serverResponse:h}),h}function Tv(s,t,i,a){const l=`${t}${i}?${a}`;return s.config.emulator?Bd(s.config,l):`${s.config.apiScheme}://${l}`}function ZS(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(oi(this.auth,"network-request-failed")),$S.get())})}}function Zu(s,t,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=oi(s,t,a);return l.customData._tokenResponse=i,l}function jy(s){return s!==void 0&&s.enterprise!==void 0}class JS{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return ZS(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tb(s,t){return Gr(s,"GET","/v2/recaptchaConfig",qr(s,t))}/**
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
 */async function eb(s,t){return Gr(s,"POST","/v1/accounts:delete",t)}async function Av(s,t){return Gr(s,"POST","/v1/accounts:lookup",t)}/**
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
 */function al(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function nb(s,t=!1){const i=Ze(s),a=await i.getIdToken(t),l=Hd(a);ut(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const h=typeof l.firebase=="object"?l.firebase:void 0,d=h==null?void 0:h.sign_in_provider;return{claims:l,token:a,authTime:al(sd(l.auth_time)),issuedAtTime:al(sd(l.iat)),expirationTime:al(sd(l.exp)),signInProvider:d||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function sd(s){return Number(s)*1e3}function Hd(s){const[t,i,a]=s.split(".");if(t===void 0||i===void 0||a===void 0)return ic("JWT malformed, contained fewer than 3 sections"),null;try{const l=iv(i);return l?JSON.parse(l):(ic("Failed to decode base64 JWT payload"),null)}catch(l){return ic("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function qy(s){const t=Hd(s);return ut(t,"internal-error"),ut(typeof t.exp<"u","internal-error"),ut(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function dl(s,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof qn&&ib(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function ib({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class rb{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const l=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vd{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=al(this.lastLoginAt),this.creationTime=al(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mc(s){var t;const i=s.auth,a=await s.getIdToken(),l=await dl(s,Av(i,{idToken:a}));ut(l==null?void 0:l.users.length,i,"internal-error");const h=l.users[0];s._notifyReloadListener(h);const d=!((t=h.providerUserInfo)===null||t===void 0)&&t.length?Sv(h.providerUserInfo):[],p=ab(s.providerData,d),y=s.isAnonymous,v=!(s.email&&h.passwordHash)&&!(p!=null&&p.length),R=y?v:!1,V={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:p,metadata:new vd(h.createdAt,h.lastLoginAt),isAnonymous:R};Object.assign(s,V)}async function sb(s){const t=Ze(s);await mc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ab(s,t){return[...s.filter(a=>!t.some(l=>l.providerId===a.providerId)),...t]}function Sv(s){return s.map(t=>{var{providerId:i}=t,a=xd(t,["providerId"]);return{providerId:i,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function ob(s,t){const i=await Ev(s,{},async()=>{const a=El({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:h}=s.config,d=Tv(s,l,"/v1/token",`key=${h}`),p=await s._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",vv.fetch()(d,{method:"POST",headers:p,body:a})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function lb(s,t){return Gr(s,"POST","/v2/accounts:revokeToken",qr(s,t))}/**
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
 */class ka{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ut(t.idToken,"internal-error"),ut(typeof t.idToken<"u","internal-error"),ut(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):qy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){ut(t.length!==0,"internal-error");const i=qy(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ut(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:l,expiresIn:h}=await ob(t,i);this.updateTokensAndExpiration(a,l,Number(h))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:l,expirationTime:h}=i,d=new ka;return a&&(ut(typeof a=="string","internal-error",{appName:t}),d.refreshToken=a),l&&(ut(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),h&&(ut(typeof h=="number","internal-error",{appName:t}),d.expirationTime=h),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ka,this.toJSON())}_performRefresh(){return Bi("not implemented")}}/**
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
 */function Dr(s,t){ut(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class Hi{constructor(t){var{uid:i,auth:a,stsTokenManager:l}=t,h=xd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=a,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new vd(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(t){const i=await dl(this,this.stsTokenManager.getToken(this.auth,t));return ut(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return nb(this,t)}reload(){return sb(this)}_assign(t){this!==t&&(ut(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Hi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){ut(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await mc(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(qi(this.auth));const t=await this.getIdToken();return await dl(this,eb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var a,l,h,d,p,y,v,R;const V=(a=i.displayName)!==null&&a!==void 0?a:void 0,B=(l=i.email)!==null&&l!==void 0?l:void 0,K=(h=i.phoneNumber)!==null&&h!==void 0?h:void 0,$=(d=i.photoURL)!==null&&d!==void 0?d:void 0,at=(p=i.tenantId)!==null&&p!==void 0?p:void 0,tt=(y=i._redirectEventId)!==null&&y!==void 0?y:void 0,wt=(v=i.createdAt)!==null&&v!==void 0?v:void 0,dt=(R=i.lastLoginAt)!==null&&R!==void 0?R:void 0,{uid:Et,emailVerified:Bt,isAnonymous:mt,providerData:Nt,stsTokenManager:M}=i;ut(Et&&M,t,"internal-error");const b=ka.fromJSON(this.name,M);ut(typeof Et=="string",t,"internal-error"),Dr(V,t.name),Dr(B,t.name),ut(typeof Bt=="boolean",t,"internal-error"),ut(typeof mt=="boolean",t,"internal-error"),Dr(K,t.name),Dr($,t.name),Dr(at,t.name),Dr(tt,t.name),Dr(wt,t.name),Dr(dt,t.name);const A=new Hi({uid:Et,auth:t,email:B,emailVerified:Bt,displayName:V,isAnonymous:mt,photoURL:$,phoneNumber:K,tenantId:at,stsTokenManager:b,createdAt:wt,lastLoginAt:dt});return Nt&&Array.isArray(Nt)&&(A.providerData=Nt.map(I=>Object.assign({},I))),tt&&(A._redirectEventId=tt),A}static async _fromIdTokenResponse(t,i,a=!1){const l=new ka;l.updateFromServerResponse(i);const h=new Hi({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a});return await mc(h),h}static async _fromGetAccountInfoResponse(t,i,a){const l=i.users[0];ut(l.localId!==void 0,"internal-error");const h=l.providerUserInfo!==void 0?Sv(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(h!=null&&h.length),p=new ka;p.updateFromIdToken(a);const y=new Hi({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:d}),v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new vd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(h!=null&&h.length)};return Object.assign(y,v),y}}/**
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
 */const Gy=new Map;function ji(s){Ki(s instanceof Function,"Expected a class definition");let t=Gy.get(s);return t?(Ki(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,Gy.set(s,t),t)}/**
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
 */class bv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}bv.type="NONE";const Fy=bv;/**
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
 */function rc(s,t,i){return`firebase:${s}:${t}:${i}`}class Pa{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:l,name:h}=this.auth;this.fullUserKey=rc(this.userKey,l.apiKey,h),this.fullPersistenceKey=rc("persistence",l.apiKey,h),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Hi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new Pa(ji(Fy),t,a);const l=(await Promise.all(i.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let h=l[0]||ji(Fy);const d=rc(a,t.config.apiKey,t.name);let p=null;for(const v of i)try{const R=await v._get(d);if(R){const V=Hi._fromJSON(t,R);v!==h&&(p=V),h=v;break}}catch{}const y=l.filter(v=>v._shouldAllowMigration);return!h._shouldAllowMigration||!y.length?new Pa(h,t,a):(h=y[0],p&&await h._set(d,p.toJSON()),await Promise.all(i.map(async v=>{if(v!==h)try{await v._remove(d)}catch{}})),new Pa(h,t,a))}}/**
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
 */function Ky(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Cv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Dv(t))return"Blackberry";if(Nv(t))return"Webos";if(Rv(t))return"Safari";if((t.includes("chrome/")||Iv(t))&&!t.includes("edge/"))return"Chrome";if(Ov(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function wv(s=Ge()){return/firefox\//i.test(s)}function Rv(s=Ge()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Iv(s=Ge()){return/crios\//i.test(s)}function Cv(s=Ge()){return/iemobile/i.test(s)}function Ov(s=Ge()){return/android/i.test(s)}function Dv(s=Ge()){return/blackberry/i.test(s)}function Nv(s=Ge()){return/webos/i.test(s)}function jd(s=Ge()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function ub(s=Ge()){var t;return jd(s)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function cb(){return SA()&&document.documentMode===10}function Mv(s=Ge()){return jd(s)||Ov(s)||Nv(s)||Dv(s)||/windows phone/i.test(s)||Cv(s)}/**
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
 */function Vv(s,t=[]){let i;switch(s){case"Browser":i=Ky(Ge());break;case"Worker":i=`${Ky(Ge())}-${s}`;break;default:i=s}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${Ga}/${a}`}/**
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
 */class hb{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=h=>new Promise((d,p)=>{try{const y=t(h);d(y)}catch(y){p(y)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */async function fb(s,t={}){return Gr(s,"GET","/v2/passwordPolicy",qr(s,t))}/**
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
 */const db=6;class mb{constructor(t){var i,a,l,h;const d=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=d.minPasswordLength)!==null&&i!==void 0?i:db,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(h=t.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,a,l,h,d,p;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,y),this.validatePasswordCharacterOptions(t,y),y.isValid&&(y.isValid=(i=y.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),y.isValid&&(y.isValid=(a=y.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),y.isValid&&(y.isValid=(l=y.containsLowercaseLetter)!==null&&l!==void 0?l:!0),y.isValid&&(y.isValid=(h=y.containsUppercaseLetter)!==null&&h!==void 0?h:!0),y.isValid&&(y.isValid=(d=y.containsNumericCharacter)!==null&&d!==void 0?d:!0),y.isValid&&(y.isValid=(p=y.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),y}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<t.length;l++)a=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,l,h){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=h))}}/**
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
 */class pb{constructor(t,i,a,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yy(this),this.idTokenSubscription=new Yy(this),this.beforeStateQueue=new hb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=ji(i)),this._initializationPromise=this.queue(async()=>{var a,l;if(!this._deleted&&(this.persistenceManager=await Pa.create(this,t),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await Av(this,{idToken:t}),a=await Hi._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Dn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(p,p))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let l=a,h=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=l==null?void 0:l._redirectEventId,y=await this.tryRedirectSignIn(t);(!d||d===p)&&(y!=null&&y.user)&&(l=y.user,h=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ut(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await mc(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=QS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Dn(this.app))return Promise.reject(qi(this));const i=t?Ze(t):null;return i&&ut(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&ut(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(qi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Dn(this.app)?Promise.reject(qi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ji(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await fb(this),i=new mb(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ls("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await lb(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&ji(t)||this._popupRedirectResolver;ut(i,this,"argument-error"),this.redirectPersistenceManager=await Pa.create(this,[ji(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,l){if(this._deleted)return()=>{};const h=typeof i=="function"?i:i.next.bind(i);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ut(p,this,"internal-error"),p.then(()=>{d||h(this.currentUser)}),typeof i=="function"){const y=t.addObserver(i,a,l);return()=>{d=!0,y()}}else{const y=t.addObserver(i);return()=>{d=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ut(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(i["X-Firebase-Client"]=a);const l=await this._getAppCheckToken();return l&&(i["X-Firebase-AppCheck"]=l),i}async _getAppCheckToken(){var t;if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&FS(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function zs(s){return Ze(s)}class Yy{constructor(t){this.auth=t,this.observer=null,this.addObserver=DA(i=>this.observer=i)}get next(){return ut(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gb(s){kc=s}function Uv(s){return kc.loadJS(s)}function yb(){return kc.recaptchaEnterpriseScript}function _b(){return kc.gapiScript}function vb(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class Eb{constructor(){this.enterprise=new Tb}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class Tb{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const Ab="recaptcha-enterprise",kv="NO_RECAPTCHA";class Sb{constructor(t){this.type=Ab,this.auth=zs(t)}async verify(t="verify",i=!1){async function a(h){if(!i){if(h.tenantId==null&&h._agentRecaptchaConfig!=null)return h._agentRecaptchaConfig.siteKey;if(h.tenantId!=null&&h._tenantRecaptchaConfigs[h.tenantId]!==void 0)return h._tenantRecaptchaConfigs[h.tenantId].siteKey}return new Promise(async(d,p)=>{tb(h,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new JS(y);return h.tenantId==null?h._agentRecaptchaConfig=v:h._tenantRecaptchaConfigs[h.tenantId]=v,d(v.siteKey)}}).catch(y=>{p(y)})})}function l(h,d,p){const y=window.grecaptcha;jy(y)?y.enterprise.ready(()=>{y.enterprise.execute(h,{action:t}).then(v=>{d(v)}).catch(()=>{d(kv)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Eb().execute("siteKey",{action:"verify"}):new Promise((h,d)=>{a(this.auth).then(p=>{if(!i&&jy(window.grecaptcha))l(p,h,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let y=yb();y.length!==0&&(y+=p),Uv(y).then(()=>{l(p,h,d)}).catch(v=>{d(v)})}}).catch(p=>{d(p)})})}}async function Qy(s,t,i,a=!1,l=!1){const h=new Sb(s);let d;if(l)d=kv;else try{d=await h.verify(i)}catch{d=await h.verify(i,!0)}const p=Object.assign({},t);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const y=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:v,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const y=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return a?Object.assign(p,{captchaResp:d}):Object.assign(p,{captchaResponse:d}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Ed(s,t,i,a,l){var h;if(!((h=s._getRecaptchaConfig())===null||h===void 0)&&h.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await Qy(s,t,i,i==="getOobCode");return a(s,d)}else return a(s,t).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Qy(s,t,i,i==="getOobCode");return a(s,p)}else return Promise.reject(d)})}/**
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
 */function bb(s,t){const i=xs(s,"auth");if(i.isInitialized()){const l=i.getImmediate(),h=i.getOptions();if(xr(h,t??{}))return l;jn(l,"already-initialized")}return i.initialize({options:t})}function wb(s,t){const i=(t==null?void 0:t.persistence)||[],a=(Array.isArray(i)?i:[i]).map(ji);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function Rb(s,t,i){const a=zs(s);ut(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const l=!1,h=Pv(t),{host:d,port:p}=Ib(t),y=p===null?"":`:${p}`,v={url:`${h}//${d}${y}/`},R=Object.freeze({host:d,port:p,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){ut(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),ut(xr(v,a.config.emulator)&&xr(R,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=v,a.emulatorConfig=R,a.settings.appVerificationDisabledForTesting=!0,Cb()}function Pv(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function Ib(s){const t=Pv(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const h=l[1];return{host:h,port:Xy(a.substr(h.length+1))}}else{const[h,d]=a.split(":");return{host:h,port:Xy(d)}}}function Xy(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function Cb(){function s(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class qd{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return Bi("not implemented")}_getIdTokenResponse(t){return Bi("not implemented")}_linkToIdToken(t,i){return Bi("not implemented")}_getReauthenticationResolver(t){return Bi("not implemented")}}async function Ob(s,t){return Gr(s,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Db(s,t){return Al(s,"POST","/v1/accounts:signInWithPassword",qr(s,t))}/**
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
 */async function Nb(s,t){return Al(s,"POST","/v1/accounts:signInWithEmailLink",qr(s,t))}async function Mb(s,t){return Al(s,"POST","/v1/accounts:signInWithEmailLink",qr(s,t))}/**
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
 */class ml extends qd{constructor(t,i,a,l=null){super("password",a),this._email=t,this._password=i,this._tenantId=l}static _fromEmailAndPassword(t,i){return new ml(t,i,"password")}static _fromEmailAndCode(t,i,a=null){return new ml(t,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ed(t,i,"signInWithPassword",Db);case"emailLink":return Nb(t,{email:this._email,oobCode:this._password});default:jn(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ed(t,a,"signUpPassword",Ob);case"emailLink":return Mb(t,{idToken:i,email:this._email,oobCode:this._password});default:jn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function La(s,t){return Al(s,"POST","/v1/accounts:signInWithIdp",qr(s,t))}/**
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
 */const Vb="http://localhost";class Os extends qd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Os(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):jn("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:l}=i,h=xd(i,["providerId","signInMethod"]);if(!a||!l)return null;const d=new Os(a,l);return d.idToken=h.idToken||void 0,d.accessToken=h.accessToken||void 0,d.secret=h.secret,d.nonce=h.nonce,d.pendingToken=h.pendingToken||null,d}_getIdTokenResponse(t){const i=this.buildRequest();return La(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,La(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,La(t,i)}buildRequest(){const t={requestUri:Vb,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=El(i)}return t}}/**
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
 */function Ub(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kb(s){const t=il(rl(s)).link,i=t?il(rl(t)).deep_link_id:null,a=il(rl(s)).deep_link_id;return(a?il(rl(a)).link:null)||a||i||t||s}class Gd{constructor(t){var i,a,l,h,d,p;const y=il(rl(t)),v=(i=y.apiKey)!==null&&i!==void 0?i:null,R=(a=y.oobCode)!==null&&a!==void 0?a:null,V=Ub((l=y.mode)!==null&&l!==void 0?l:null);ut(v&&R&&V,"argument-error"),this.apiKey=v,this.operation=V,this.code=R,this.continueUrl=(h=y.continueUrl)!==null&&h!==void 0?h:null,this.languageCode=(d=y.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(p=y.tenantId)!==null&&p!==void 0?p:null}static parseLink(t){const i=kb(t);try{return new Gd(i)}catch{return null}}}/**
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
 */class Fa{constructor(){this.providerId=Fa.PROVIDER_ID}static credential(t,i){return ml._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const a=Gd.parseLink(i);return ut(a,"argument-error"),ml._fromEmailAndCode(t,a.code,a.tenantId)}}Fa.PROVIDER_ID="password";Fa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sl extends Lv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nr extends Sl{constructor(){super("facebook.com")}static credential(t){return Os._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Nr.credential(t.oauthAccessToken)}catch{return null}}}Nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nr.PROVIDER_ID="facebook.com";/**
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
 */class Mr extends Sl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Os._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return Mr.credential(i,a)}catch{return null}}}Mr.GOOGLE_SIGN_IN_METHOD="google.com";Mr.PROVIDER_ID="google.com";/**
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
 */class Vr extends Sl{constructor(){super("github.com")}static credential(t){return Os._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vr.credentialFromTaggedObject(t)}static credentialFromError(t){return Vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vr.credential(t.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
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
 */class Ur extends Sl{constructor(){super("twitter.com")}static credential(t,i){return Os._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return Ur.credentialFromTaggedObject(t)}static credentialFromError(t){return Ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return Ur.credential(i,a)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
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
 */async function Pb(s,t){return Al(s,"POST","/v1/accounts:signUp",qr(s,t))}/**
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
 */class Ds{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,l=!1){const h=await Hi._fromIdTokenResponse(t,a,l),d=$y(a);return new Ds({user:h,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const l=$y(a);return new Ds({user:t,providerId:l,_tokenResponse:a,operationType:i})}}function $y(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class pc extends qn{constructor(t,i,a,l){var h;super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:t.name,tenantId:(h=t.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,l){return new pc(t,i,a,l)}}function xv(s,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(s,h,t,a):h})}async function Lb(s,t,i=!1){const a=await dl(s,t._linkToIdToken(s.auth,await s.getIdToken()),i);return Ds._forOperation(s,"link",a)}/**
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
 */async function xb(s,t,i=!1){const{auth:a}=s;if(Dn(a.app))return Promise.reject(qi(a));const l="reauthenticate";try{const h=await dl(s,xv(a,l,t,s),i);ut(h.idToken,a,"internal-error");const d=Hd(h.idToken);ut(d,a,"internal-error");const{sub:p}=d;return ut(s.uid===p,a,"user-mismatch"),Ds._forOperation(s,l,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&jn(a,"user-mismatch"),h}}/**
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
 */async function zv(s,t,i=!1){if(Dn(s.app))return Promise.reject(qi(s));const a="signIn",l=await xv(s,a,t),h=await Ds._fromIdTokenResponse(s,a,l);return i||await s._updateCurrentUser(h.user),h}async function zb(s,t){return zv(zs(s),t)}/**
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
 */async function Bv(s){const t=zs(s);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Bb(s,t,i){if(Dn(s.app))return Promise.reject(qi(s));const a=zs(s),d=await Ed(a,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Pb).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&Bv(s),y}),p=await Ds._fromIdTokenResponse(a,"signIn",d);return await a._updateCurrentUser(p.user),p}function Hb(s,t,i){return Dn(s.app)?Promise.reject(qi(s)):zb(Ze(s),Fa.credential(t,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Bv(s),a})}function jb(s,t,i,a){return Ze(s).onIdTokenChanged(t,i,a)}function qb(s,t,i){return Ze(s).beforeAuthStateChanged(t,i)}function Gb(s,t,i,a){return Ze(s).onAuthStateChanged(t,i,a)}const gc="__sak";/**
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
 */class Hv{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fb=1e3,Kb=10;class jv extends Hv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&t(i,l,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((d,p,y)=>{this.notifyListeners(d,y)});return}const a=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},h=this.storage.getItem(a);cb()&&h!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,Kb):l()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}jv.type="LOCAL";const Yb=jv;/**
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
 */class qv extends Hv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}qv.type="SESSION";const Gv=qv;/**
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
 */function Qb(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Pc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const a=new Pc(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:l,data:h}=i.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const p=Array.from(d).map(async v=>v(i.origin,h)),y=await Qb(p);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:y})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pc.receivers=[];/**
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
 */function Fd(s="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return s+i}/**
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
 */class Xb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let h,d;return new Promise((p,y)=>{const v=Fd("",20);l.port1.start();const R=setTimeout(()=>{y(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(V){const B=V;if(B.data.eventId===v)switch(B.data.status){case"ack":clearTimeout(R),h=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),p(B.data.response);break;default:clearTimeout(R),clearTimeout(h),y(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:v,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function li(){return window}function $b(s){li().location.href=s}/**
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
 */function Fv(){return typeof li().WorkerGlobalScope<"u"&&typeof li().importScripts=="function"}async function Zb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wb(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function Jb(){return Fv()?self:null}/**
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
 */const Kv="firebaseLocalStorageDb",tw=1,yc="firebaseLocalStorage",Yv="fbase_key";class bl{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Lc(s,t){return s.transaction([yc],t?"readwrite":"readonly").objectStore(yc)}function ew(){const s=indexedDB.deleteDatabase(Kv);return new bl(s).toPromise()}function Td(){const s=indexedDB.open(Kv,tw);return new Promise((t,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(yc,{keyPath:Yv})}catch(l){i(l)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(yc)?t(a):(a.close(),await ew(),t(await Td()))})})}async function Zy(s,t,i){const a=Lc(s,!0).put({[Yv]:t,value:i});return new bl(a).toPromise()}async function nw(s,t){const i=Lc(s,!1).get(t),a=await new bl(i).toPromise();return a===void 0?null:a.value}function Wy(s,t){const i=Lc(s,!0).delete(t);return new bl(i).toPromise()}const iw=800,rw=3;class Qv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>rw)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pc._getInstance(Jb()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await Zb(),!this.activeServiceWorker)return;this.sender=new Xb(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((i=a[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Wb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Td();return await Zy(t,gc,"1"),await Wy(t,gc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>Zy(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>nw(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Wy(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const h=Lc(l,!1).getAll();return new bl(h).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:l,value:h}of t)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(h)&&(this.notifyListeners(l,h),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qv.type="LOCAL";const sw=Qv;new Tl(3e4,6e4);/**
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
 */function aw(s,t){return t?ji(t):(ut(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class Kd extends qd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return La(t,this._buildIdpRequest())}_linkToIdToken(t,i){return La(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return La(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function ow(s){return zv(s.auth,new Kd(s),s.bypassAuthState)}function lw(s){const{auth:t,user:i}=s;return ut(i,t,"internal-error"),xb(i,new Kd(s),s.bypassAuthState)}async function uw(s){const{auth:t,user:i}=s;return ut(i,t,"internal-error"),Lb(i,new Kd(s),s.bypassAuthState)}/**
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
 */class Xv{constructor(t,i,a,l,h=!1){this.auth=t,this.resolver=a,this.user=l,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:l,tenantId:h,error:d,type:p}=t;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:i,sessionId:a,tenantId:h||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(y))}catch(v){this.reject(v)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ow;case"linkViaPopup":case"linkViaRedirect":return uw;case"reauthViaPopup":case"reauthViaRedirect":return lw;default:jn(this.auth,"internal-error")}}resolve(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cw=new Tl(2e3,1e4);class Ua extends Xv{constructor(t,i,a,l,h){super(t,i,l,h),this.provider=a,this.authWindow=null,this.pollId=null,Ua.currentPopupAction&&Ua.currentPopupAction.cancel(),Ua.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ut(t,this.auth,"internal-error"),t}async onExecution(){Ki(this.filter.length===1,"Popup operations only handle one event");const t=Fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(oi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(oi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ua.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,a;if(!((a=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(oi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cw.get())};t()}}Ua.currentPopupAction=null;/**
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
 */const hw="pendingRedirect",sc=new Map;class fw extends Xv{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=sc.get(this.auth._key());if(!t){try{const a=await dw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}sc.set(this.auth._key(),t)}return this.bypassAuthState||sc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dw(s,t){const i=gw(t),a=pw(s);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function mw(s,t){sc.set(s._key(),t)}function pw(s){return ji(s._redirectPersistence)}function gw(s){return rc(hw,s.config.apiKey,s.name)}async function yw(s,t,i=!1){if(Dn(s.app))return Promise.reject(qi(s));const a=zs(s),l=aw(a,t),d=await new fw(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,t)),d}/**
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
 */const _w=10*60*1e3;class vw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ew(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var a;if(t.error&&!$v(t)){const l=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";i.onError(oi(this.auth,l))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=_w&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jy(t))}saveEventToCache(t){this.cachedEventUids.add(Jy(t)),this.lastProcessedEventTime=Date.now()}}function Jy(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function $v({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ew(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $v(s);default:return!1}}/**
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
 */async function Tw(s,t={}){return Gr(s,"GET","/v1/projects",t)}/**
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
 */const Aw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sw=/^https?/;async function bw(s){if(s.config.emulator)return;const{authorizedDomains:t}=await Tw(s);for(const i of t)try{if(ww(i))return}catch{}jn(s,"unauthorized-domain")}function ww(s){const t=_d(),{protocol:i,hostname:a}=new URL(t);if(s.startsWith("chrome-extension://")){const d=new URL(s);return d.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!Sw.test(i))return!1;if(Aw.test(s))return a===s;const l=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
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
 */const Rw=new Tl(3e4,6e4);function t_(){const s=li().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function Iw(s){return new Promise((t,i)=>{var a,l,h;function d(){t_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{t_(),i(oi(s,"network-request-failed"))},timeout:Rw.get()})}if(!((l=(a=li().gapi)===null||a===void 0?void 0:a.iframes)===null||l===void 0)&&l.Iframe)t(gapi.iframes.getContext());else if(!((h=li().gapi)===null||h===void 0)&&h.load)d();else{const p=vb("iframefcb");return li()[p]=()=>{gapi.load?d():i(oi(s,"network-request-failed"))},Uv(`${_b()}?onload=${p}`).catch(y=>i(y))}}).catch(t=>{throw ac=null,t})}let ac=null;function Cw(s){return ac=ac||Iw(s),ac}/**
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
 */const Ow=new Tl(5e3,15e3),Dw="__/auth/iframe",Nw="emulator/auth/iframe",Mw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uw(s){const t=s.config;ut(t.authDomain,s,"auth-domain-config-required");const i=t.emulator?Bd(t,Nw):`https://${s.config.authDomain}/${Dw}`,a={apiKey:t.apiKey,appName:s.name,v:Ga},l=Vw.get(s.config.apiHost);l&&(a.eid=l);const h=s._getFrameworks();return h.length&&(a.fw=h.join(",")),`${i}?${El(a).slice(1)}`}async function kw(s){const t=await Cw(s),i=li().gapi;return ut(i,s,"internal-error"),t.open({where:document.body,url:Uw(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mw,dontclear:!0},a=>new Promise(async(l,h)=>{await a.restyle({setHideOnLeave:!1});const d=oi(s,"network-request-failed"),p=li().setTimeout(()=>{h(d)},Ow.get());function y(){li().clearTimeout(p),l(a)}a.ping(y).then(y,()=>{h(d)})}))}/**
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
 */const Pw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lw=500,xw=600,zw="_blank",Bw="http://localhost";class e_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hw(s,t,i,a=Lw,l=xw){const h=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let p="";const y=Object.assign(Object.assign({},Pw),{width:a.toString(),height:l.toString(),top:h,left:d}),v=Ge().toLowerCase();i&&(p=Iv(v)?zw:i),wv(v)&&(t=t||Bw,y.scrollbars="yes");const R=Object.entries(y).reduce((B,[K,$])=>`${B}${K}=${$},`,"");if(ub(v)&&p!=="_self")return jw(t||"",p),new e_(null);const V=window.open(t||"",p,R);ut(V,s,"popup-blocked");try{V.focus()}catch{}return new e_(V)}function jw(s,t){const i=document.createElement("a");i.href=s,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
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
 */const qw="__/auth/handler",Gw="emulator/auth/handler",Fw=encodeURIComponent("fac");async function n_(s,t,i,a,l,h){ut(s.config.authDomain,s,"auth-domain-config-required"),ut(s.config.apiKey,s,"invalid-api-key");const d={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:Ga,eventId:l};if(t instanceof Lv){t.setDefaultLanguage(s.languageCode),d.providerId=t.providerId||"",OA(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[R,V]of Object.entries({}))d[R]=V}if(t instanceof Sl){const R=t.getScopes().filter(V=>V!=="");R.length>0&&(d.scopes=R.join(","))}s.tenantId&&(d.tid=s.tenantId);const p=d;for(const R of Object.keys(p))p[R]===void 0&&delete p[R];const y=await s._getAppCheckToken(),v=y?`#${Fw}=${encodeURIComponent(y)}`:"";return`${Kw(s)}?${El(p).slice(1)}${v}`}function Kw({config:s}){return s.emulator?Bd(s,Gw):`https://${s.authDomain}/${qw}`}/**
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
 */const ad="webStorageSupport";class Yw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gv,this._completeRedirectFn=yw,this._overrideRedirectResult=mw}async _openPopup(t,i,a,l){var h;Ki((h=this.eventManagers[t._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const d=await n_(t,i,a,_d(),l);return Hw(t,d,Fd())}async _openRedirect(t,i,a,l){await this._originValidation(t);const h=await n_(t,i,a,_d(),l);return $b(h),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:h}=this.eventManagers[i];return l?Promise.resolve(l):(Ki(h,"If manager is not set, promise should be"),h)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await kw(t),a=new vw(t);return i.register("authEvent",l=>(ut(l==null?void 0:l.authEvent,t,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(ad,{type:ad},l=>{var h;const d=(h=l==null?void 0:l[0])===null||h===void 0?void 0:h[ad];d!==void 0&&i(!!d),jn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=bw(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return Mv()||Rv()||jd()}}const Qw=Yw;var i_="@firebase/auth",r_="1.9.1";/**
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
 */class Xw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ut(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $w(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zw(s){ci(new Hn("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),h=t.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=a.options;ut(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const y={apiKey:d,authDomain:p,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vv(s)},v=new pb(a,l,h,y);return wb(v,i),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),ci(new Hn("auth-internal",t=>{const i=zs(t.getProvider("auth").getImmediate());return(a=>new Xw(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(i_,r_,$w(s)),Nn(i_,r_,"esm2017")}/**
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
 */const Ww=5*60,Jw=av("authIdTokenMaxAge")||Ww;let s_=null;const tR=s=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>Jw)return;const l=i==null?void 0:i.token;s_!==l&&(s_=l,await fetch(s,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function eR(s=Ld()){const t=xs(s,"auth");if(t.isInitialized())return t.getImmediate();const i=bb(s,{popupRedirectResolver:Qw,persistence:[sw,Yb,Gv]}),a=av("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(a,location.origin);if(location.origin===h.origin){const d=tR(h.toString());qb(i,d,()=>d(i.currentUser)),jb(i,p=>d(p))}}const l=rv("auth");return l&&Rb(i,`http://${l}`),i}function nR(){var s,t;return(t=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&t!==void 0?t:document}gb({loadJS(s){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=t,a.onerror=l=>{const h=oi("internal-error");h.customData=l,i(h)},a.type="text/javascript",a.charset="UTF-8",nR().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zw("Browser");var iR="firebase",rR="11.4.0";/**
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
 */Nn(iR,rR,"app");const Zv="@firebase/installations",Yd="0.6.13";/**
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
 */const Wv=1e4,Jv=`w:${Yd}`,tE="FIS_v2",sR="https://firebaseinstallations.googleapis.com/v1",aR=60*60*1e3,oR="installations",lR="Installations";/**
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
 */const uR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ns=new Ls(oR,lR,uR);function eE(s){return s instanceof qn&&s.code.includes("request-failed")}/**
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
 */function nE({projectId:s}){return`${sR}/projects/${s}/installations`}function iE(s){return{token:s.token,requestStatus:2,expiresIn:hR(s.expiresIn),creationTime:Date.now()}}async function rE(s,t){const a=(await t.json()).error;return Ns.create("request-failed",{requestName:s,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function sE({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function cR(s,{refreshToken:t}){const i=sE(s);return i.append("Authorization",fR(t)),i}async function aE(s){const t=await s();return t.status>=500&&t.status<600?s():t}function hR(s){return Number(s.replace("s","000"))}function fR(s){return`${tE} ${s}`}/**
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
 */async function dR({appConfig:s,heartbeatServiceProvider:t},{fid:i}){const a=nE(s),l=sE(s),h=t.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={fid:i,authVersion:tE,appId:s.appId,sdkVersion:Jv},p={method:"POST",headers:l,body:JSON.stringify(d)},y=await aE(()=>fetch(a,p));if(y.ok){const v=await y.json();return{fid:v.fid||i,registrationStatus:2,refreshToken:v.refreshToken,authToken:iE(v.authToken)}}else throw await rE("Create Installation",y)}/**
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
 */function oE(s){return new Promise(t=>{setTimeout(t,s)})}/**
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
 */function mR(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const pR=/^[cdef][\w-]{21}$/,Ad="";function gR(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const i=yR(s);return pR.test(i)?i:Ad}catch{return Ad}}function yR(s){return mR(s).substr(0,22)}/**
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
 */function xc(s){return`${s.appName}!${s.appId}`}/**
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
 */const lE=new Map;function uE(s,t){const i=xc(s);cE(i,t),_R(i,t)}function cE(s,t){const i=lE.get(s);if(i)for(const a of i)a(t)}function _R(s,t){const i=vR();i&&i.postMessage({key:s,fid:t}),ER()}let bs=null;function vR(){return!bs&&"BroadcastChannel"in self&&(bs=new BroadcastChannel("[Firebase] FID Change"),bs.onmessage=s=>{cE(s.data.key,s.data.fid)}),bs}function ER(){lE.size===0&&bs&&(bs.close(),bs=null)}/**
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
 */const TR="firebase-installations-database",AR=1,Ms="firebase-installations-store";let od=null;function Qd(){return od||(od=fv(TR,AR,{upgrade:(s,t)=>{switch(t){case 0:s.createObjectStore(Ms)}}})),od}async function _c(s,t){const i=xc(s),l=(await Qd()).transaction(Ms,"readwrite"),h=l.objectStore(Ms),d=await h.get(i);return await h.put(t,i),await l.done,(!d||d.fid!==t.fid)&&uE(s,t.fid),t}async function hE(s){const t=xc(s),a=(await Qd()).transaction(Ms,"readwrite");await a.objectStore(Ms).delete(t),await a.done}async function zc(s,t){const i=xc(s),l=(await Qd()).transaction(Ms,"readwrite"),h=l.objectStore(Ms),d=await h.get(i),p=t(d);return p===void 0?await h.delete(i):await h.put(p,i),await l.done,p&&(!d||d.fid!==p.fid)&&uE(s,p.fid),p}/**
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
 */async function Xd(s){let t;const i=await zc(s.appConfig,a=>{const l=SR(a),h=bR(s,l);return t=h.registrationPromise,h.installationEntry});return i.fid===Ad?{installationEntry:await t}:{installationEntry:i,registrationPromise:t}}function SR(s){const t=s||{fid:gR(),registrationStatus:0};return fE(t)}function bR(s,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Ns.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const i={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=wR(s,i);return{installationEntry:i,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:RR(s)}:{installationEntry:t}}async function wR(s,t){try{const i=await dR(s,t);return _c(s.appConfig,i)}catch(i){throw eE(i)&&i.customData.serverCode===409?await hE(s.appConfig):await _c(s.appConfig,{fid:t.fid,registrationStatus:0}),i}}async function RR(s){let t=await a_(s.appConfig);for(;t.registrationStatus===1;)await oE(100),t=await a_(s.appConfig);if(t.registrationStatus===0){const{installationEntry:i,registrationPromise:a}=await Xd(s);return a||i}return t}function a_(s){return zc(s,t=>{if(!t)throw Ns.create("installation-not-found");return fE(t)})}function fE(s){return IR(s)?{fid:s.fid,registrationStatus:0}:s}function IR(s){return s.registrationStatus===1&&s.registrationTime+Wv<Date.now()}/**
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
 */async function CR({appConfig:s,heartbeatServiceProvider:t},i){const a=OR(s,i),l=cR(s,i),h=t.getImmediate({optional:!0});if(h){const v=await h.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const d={installation:{sdkVersion:Jv,appId:s.appId}},p={method:"POST",headers:l,body:JSON.stringify(d)},y=await aE(()=>fetch(a,p));if(y.ok){const v=await y.json();return iE(v)}else throw await rE("Generate Auth Token",y)}function OR(s,{fid:t}){return`${nE(s)}/${t}/authTokens:generate`}/**
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
 */async function $d(s,t=!1){let i;const a=await zc(s.appConfig,h=>{if(!dE(h))throw Ns.create("not-registered");const d=h.authToken;if(!t&&MR(d))return h;if(d.requestStatus===1)return i=DR(s,t),h;{if(!navigator.onLine)throw Ns.create("app-offline");const p=UR(h);return i=NR(s,p),p}});return i?await i:a.authToken}async function DR(s,t){let i=await o_(s.appConfig);for(;i.authToken.requestStatus===1;)await oE(100),i=await o_(s.appConfig);const a=i.authToken;return a.requestStatus===0?$d(s,t):a}function o_(s){return zc(s,t=>{if(!dE(t))throw Ns.create("not-registered");const i=t.authToken;return kR(i)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function NR(s,t){try{const i=await CR(s,t),a=Object.assign(Object.assign({},t),{authToken:i});return await _c(s.appConfig,a),i}catch(i){if(eE(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await hE(s.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _c(s.appConfig,a)}throw i}}function dE(s){return s!==void 0&&s.registrationStatus===2}function MR(s){return s.requestStatus===2&&!VR(s)}function VR(s){const t=Date.now();return t<s.creationTime||s.creationTime+s.expiresIn<t+aR}function UR(s){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},s),{authToken:t})}function kR(s){return s.requestStatus===1&&s.requestTime+Wv<Date.now()}/**
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
 */async function PR(s){const t=s,{installationEntry:i,registrationPromise:a}=await Xd(t);return a?a.catch(console.error):$d(t).catch(console.error),i.fid}/**
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
 */async function LR(s,t=!1){const i=s;return await xR(i),(await $d(i,t)).token}async function xR(s){const{registrationPromise:t}=await Xd(s);t&&await t}/**
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
 */function zR(s){if(!s||!s.options)throw ld("App Configuration");if(!s.name)throw ld("App Name");const t=["projectId","apiKey","appId"];for(const i of t)if(!s.options[i])throw ld(i);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function ld(s){return Ns.create("missing-app-config-values",{valueName:s})}/**
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
 */const mE="installations",BR="installations-internal",HR=s=>{const t=s.getProvider("app").getImmediate(),i=zR(t),a=xs(t,"heartbeat");return{app:t,appConfig:i,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},jR=s=>{const t=s.getProvider("app").getImmediate(),i=xs(t,mE).getImmediate();return{getId:()=>PR(i),getToken:l=>LR(i,l)}};function qR(){ci(new Hn(mE,HR,"PUBLIC")),ci(new Hn(BR,jR,"PRIVATE"))}qR();Nn(Zv,Yd);Nn(Zv,Yd,"esm2017");/**
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
 */const vc="analytics",GR="firebase_id",FR="origin",KR=60*1e3,YR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zd="https://www.googletagmanager.com/gtag/js";/**
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
 */const nn=new Uc("@firebase/analytics");/**
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
 */const QR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},fn=new Ls("analytics","Analytics",QR);/**
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
 */function XR(s){if(!s.startsWith(Zd)){const t=fn.create("invalid-gtag-resource",{gtagURL:s});return nn.warn(t.message),""}return s}function pE(s){return Promise.all(s.map(t=>t.catch(i=>i)))}function $R(s,t){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(s,t)),i}function ZR(s,t){const i=$R("firebase-js-sdk-policy",{createScriptURL:XR}),a=document.createElement("script"),l=`${Zd}?l=${s}&id=${t}`;a.src=i?i==null?void 0:i.createScriptURL(l):l,a.async=!0,document.head.appendChild(a)}function WR(s){let t=[];return Array.isArray(window[s])?t=window[s]:window[s]=t,t}async function JR(s,t,i,a,l,h){const d=a[l];try{if(d)await t[d];else{const y=(await pE(i)).find(v=>v.measurementId===l);y&&await t[y.appId]}}catch(p){nn.error(p)}s("config",l,h)}async function t1(s,t,i,a,l){try{let h=[];if(l&&l.send_to){let d=l.send_to;Array.isArray(d)||(d=[d]);const p=await pE(i);for(const y of d){const v=p.find(V=>V.measurementId===y),R=v&&t[v.appId];if(R)h.push(R);else{h=[];break}}}h.length===0&&(h=Object.values(t)),await Promise.all(h),s("event",a,l||{})}catch(h){nn.error(h)}}function e1(s,t,i,a){async function l(h,...d){try{if(h==="event"){const[p,y]=d;await t1(s,t,i,p,y)}else if(h==="config"){const[p,y]=d;await JR(s,t,i,a,p,y)}else if(h==="consent"){const[p,y]=d;s("consent",p,y)}else if(h==="get"){const[p,y,v]=d;s("get",p,y,v)}else if(h==="set"){const[p]=d;s("set",p)}else s(h,...d)}catch(p){nn.error(p)}}return l}function n1(s,t,i,a,l){let h=function(...d){window[a].push(arguments)};return window[l]&&typeof window[l]=="function"&&(h=window[l]),window[l]=e1(h,s,t,i),{gtagCore:h,wrappedGtag:window[l]}}function i1(s){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(Zd)&&i.src.includes(s))return i;return null}/**
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
 */const r1=30,s1=1e3;class a1{constructor(t={},i=s1){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const gE=new a1;function o1(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function l1(s){var t;const{appId:i,apiKey:a}=s,l={method:"GET",headers:o1(a)},h=YR.replace("{app-id}",i),d=await fetch(h,l);if(d.status!==200&&d.status!==304){let p="";try{const y=await d.json();!((t=y.error)===null||t===void 0)&&t.message&&(p=y.error.message)}catch{}throw fn.create("config-fetch-failed",{httpStatus:d.status,responseMessage:p})}return d.json()}async function u1(s,t=gE,i){const{appId:a,apiKey:l,measurementId:h}=s.options;if(!a)throw fn.create("no-app-id");if(!l){if(h)return{measurementId:h,appId:a};throw fn.create("no-api-key")}const d=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new f1;return setTimeout(async()=>{p.abort()},KR),yE({appId:a,apiKey:l,measurementId:h},d,p,t)}async function yE(s,{throttleEndTimeMillis:t,backoffCount:i},a,l=gE){var h;const{appId:d,measurementId:p}=s;try{await c1(a,t)}catch(y){if(p)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:d,measurementId:p};throw y}try{const y=await l1(s);return l.deleteThrottleMetadata(d),y}catch(y){const v=y;if(!h1(v)){if(l.deleteThrottleMetadata(d),p)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${v==null?void 0:v.message}]`),{appId:d,measurementId:p};throw y}const R=Number((h=v==null?void 0:v.customData)===null||h===void 0?void 0:h.httpStatus)===503?My(i,l.intervalMillis,r1):My(i,l.intervalMillis),V={throttleEndTimeMillis:Date.now()+R,backoffCount:i+1};return l.setThrottleMetadata(d,V),nn.debug(`Calling attemptFetch again in ${R} millis`),yE(s,V,a,l)}}function c1(s,t){return new Promise((i,a)=>{const l=Math.max(t-Date.now(),0),h=setTimeout(i,l);s.addEventListener(()=>{clearTimeout(h),a(fn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function h1(s){if(!(s instanceof qn)||!s.customData)return!1;const t=Number(s.customData.httpStatus);return t===429||t===500||t===503||t===504}class f1{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function d1(s,t,i,a,l){if(l&&l.global){s("event",i,a);return}else{const h=await t,d=Object.assign(Object.assign({},a),{send_to:h});s("event",i,d)}}/**
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
 */async function m1(){if(lv())try{await uv()}catch(s){return nn.warn(fn.create("indexeddb-unavailable",{errorInfo:s==null?void 0:s.toString()}).message),!1}else return nn.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function p1(s,t,i,a,l,h,d){var p;const y=u1(s);y.then(K=>{i[K.measurementId]=K.appId,s.options.measurementId&&K.measurementId!==s.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${K.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(K=>nn.error(K)),t.push(y);const v=m1().then(K=>{if(K)return a.getId()}),[R,V]=await Promise.all([y,v]);i1(h)||ZR(h,R.measurementId),l("js",new Date);const B=(p=d==null?void 0:d.config)!==null&&p!==void 0?p:{};return B[FR]="firebase",B.update=!0,V!=null&&(B[GR]=V),l("config",R.measurementId,B),R.measurementId}/**
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
 */class g1{constructor(t){this.app=t}_delete(){return delete ol[this.app.options.appId],Promise.resolve()}}let ol={},l_=[];const u_={};let ud="dataLayer",y1="gtag",c_,_E,h_=!1;function _1(){const s=[];if(ov()&&s.push("This is a browser extension environment."),wA()||s.push("Cookies are not available."),s.length>0){const t=s.map((a,l)=>`(${l+1}) ${a}`).join(" "),i=fn.create("invalid-analytics-context",{errorInfo:t});nn.warn(i.message)}}function v1(s,t,i){_1();const a=s.options.appId;if(!a)throw fn.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fn.create("no-api-key");if(ol[a]!=null)throw fn.create("already-exists",{id:a});if(!h_){WR(ud);const{wrappedGtag:h,gtagCore:d}=n1(ol,l_,u_,ud,y1);_E=h,c_=d,h_=!0}return ol[a]=p1(s,l_,u_,t,c_,ud,i),new g1(s)}function E1(s=Ld()){s=Ze(s);const t=xs(s,vc);return t.isInitialized()?t.getImmediate():T1(s)}function T1(s,t={}){const i=xs(s,vc);if(i.isInitialized()){const l=i.getImmediate();if(xr(t,i.getOptions()))return l;throw fn.create("already-initialized")}return i.initialize({options:t})}function A1(s,t,i,a){s=Ze(s),d1(_E,ol[s.app.options.appId],t,i,a).catch(l=>nn.error(l))}const f_="@firebase/analytics",d_="0.10.12";function S1(){ci(new Hn(vc,(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return v1(a,l,i)},"PUBLIC")),ci(new Hn("analytics-internal",s,"PRIVATE")),Nn(f_,d_),Nn(f_,d_,"esm2017");function s(t){try{const i=t.getProvider(vc).getImmediate();return{logEvent:(a,l,h)=>A1(i,a,l,h)}}catch(i){throw fn.create("interop-component-reg-failed",{reason:i})}}}S1();const vE={apiKey:"AIzaSyDqvs9hShjoBZG5_iAyTuBJBgYWNzjr-oc",authDomain:"tome-artworks.firebaseapp.com",projectId:"tome-artworks",storageBucket:"tome-artworks.firebasestorage.app",messagingSenderId:"890971951408",appId:"1:890971951408:web:a9cf474d61a4e4b8e678f5",measurementId:"G-JG1KNRR6NW"};console.log("Firebase API Key:","AIzaSyDqvs9hShjoBZG5_iAyTuBJBgYWNzjr-oc");console.log("Firebase Config:",vE);const EE=dv(vE);E1(EE);const Ec=eR(EE);var m_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wd;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,b){function A(){}A.prototype=b.prototype,M.D=b.prototype,M.prototype=new A,M.prototype.constructor=M,M.C=function(I,N,P){for(var w=Array(arguments.length-2),de=2;de<arguments.length;de++)w[de-2]=arguments[de];return b.prototype[N].apply(I,w)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(a,i),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(M,b,A){A||(A=0);var I=Array(16);if(typeof b=="string")for(var N=0;16>N;++N)I[N]=b.charCodeAt(A++)|b.charCodeAt(A++)<<8|b.charCodeAt(A++)<<16|b.charCodeAt(A++)<<24;else for(N=0;16>N;++N)I[N]=b[A++]|b[A++]<<8|b[A++]<<16|b[A++]<<24;b=M.g[0],A=M.g[1],N=M.g[2];var P=M.g[3],w=b+(P^A&(N^P))+I[0]+3614090360&4294967295;b=A+(w<<7&4294967295|w>>>25),w=P+(N^b&(A^N))+I[1]+3905402710&4294967295,P=b+(w<<12&4294967295|w>>>20),w=N+(A^P&(b^A))+I[2]+606105819&4294967295,N=P+(w<<17&4294967295|w>>>15),w=A+(b^N&(P^b))+I[3]+3250441966&4294967295,A=N+(w<<22&4294967295|w>>>10),w=b+(P^A&(N^P))+I[4]+4118548399&4294967295,b=A+(w<<7&4294967295|w>>>25),w=P+(N^b&(A^N))+I[5]+1200080426&4294967295,P=b+(w<<12&4294967295|w>>>20),w=N+(A^P&(b^A))+I[6]+2821735955&4294967295,N=P+(w<<17&4294967295|w>>>15),w=A+(b^N&(P^b))+I[7]+4249261313&4294967295,A=N+(w<<22&4294967295|w>>>10),w=b+(P^A&(N^P))+I[8]+1770035416&4294967295,b=A+(w<<7&4294967295|w>>>25),w=P+(N^b&(A^N))+I[9]+2336552879&4294967295,P=b+(w<<12&4294967295|w>>>20),w=N+(A^P&(b^A))+I[10]+4294925233&4294967295,N=P+(w<<17&4294967295|w>>>15),w=A+(b^N&(P^b))+I[11]+2304563134&4294967295,A=N+(w<<22&4294967295|w>>>10),w=b+(P^A&(N^P))+I[12]+1804603682&4294967295,b=A+(w<<7&4294967295|w>>>25),w=P+(N^b&(A^N))+I[13]+4254626195&4294967295,P=b+(w<<12&4294967295|w>>>20),w=N+(A^P&(b^A))+I[14]+2792965006&4294967295,N=P+(w<<17&4294967295|w>>>15),w=A+(b^N&(P^b))+I[15]+1236535329&4294967295,A=N+(w<<22&4294967295|w>>>10),w=b+(N^P&(A^N))+I[1]+4129170786&4294967295,b=A+(w<<5&4294967295|w>>>27),w=P+(A^N&(b^A))+I[6]+3225465664&4294967295,P=b+(w<<9&4294967295|w>>>23),w=N+(b^A&(P^b))+I[11]+643717713&4294967295,N=P+(w<<14&4294967295|w>>>18),w=A+(P^b&(N^P))+I[0]+3921069994&4294967295,A=N+(w<<20&4294967295|w>>>12),w=b+(N^P&(A^N))+I[5]+3593408605&4294967295,b=A+(w<<5&4294967295|w>>>27),w=P+(A^N&(b^A))+I[10]+38016083&4294967295,P=b+(w<<9&4294967295|w>>>23),w=N+(b^A&(P^b))+I[15]+3634488961&4294967295,N=P+(w<<14&4294967295|w>>>18),w=A+(P^b&(N^P))+I[4]+3889429448&4294967295,A=N+(w<<20&4294967295|w>>>12),w=b+(N^P&(A^N))+I[9]+568446438&4294967295,b=A+(w<<5&4294967295|w>>>27),w=P+(A^N&(b^A))+I[14]+3275163606&4294967295,P=b+(w<<9&4294967295|w>>>23),w=N+(b^A&(P^b))+I[3]+4107603335&4294967295,N=P+(w<<14&4294967295|w>>>18),w=A+(P^b&(N^P))+I[8]+1163531501&4294967295,A=N+(w<<20&4294967295|w>>>12),w=b+(N^P&(A^N))+I[13]+2850285829&4294967295,b=A+(w<<5&4294967295|w>>>27),w=P+(A^N&(b^A))+I[2]+4243563512&4294967295,P=b+(w<<9&4294967295|w>>>23),w=N+(b^A&(P^b))+I[7]+1735328473&4294967295,N=P+(w<<14&4294967295|w>>>18),w=A+(P^b&(N^P))+I[12]+2368359562&4294967295,A=N+(w<<20&4294967295|w>>>12),w=b+(A^N^P)+I[5]+4294588738&4294967295,b=A+(w<<4&4294967295|w>>>28),w=P+(b^A^N)+I[8]+2272392833&4294967295,P=b+(w<<11&4294967295|w>>>21),w=N+(P^b^A)+I[11]+1839030562&4294967295,N=P+(w<<16&4294967295|w>>>16),w=A+(N^P^b)+I[14]+4259657740&4294967295,A=N+(w<<23&4294967295|w>>>9),w=b+(A^N^P)+I[1]+2763975236&4294967295,b=A+(w<<4&4294967295|w>>>28),w=P+(b^A^N)+I[4]+1272893353&4294967295,P=b+(w<<11&4294967295|w>>>21),w=N+(P^b^A)+I[7]+4139469664&4294967295,N=P+(w<<16&4294967295|w>>>16),w=A+(N^P^b)+I[10]+3200236656&4294967295,A=N+(w<<23&4294967295|w>>>9),w=b+(A^N^P)+I[13]+681279174&4294967295,b=A+(w<<4&4294967295|w>>>28),w=P+(b^A^N)+I[0]+3936430074&4294967295,P=b+(w<<11&4294967295|w>>>21),w=N+(P^b^A)+I[3]+3572445317&4294967295,N=P+(w<<16&4294967295|w>>>16),w=A+(N^P^b)+I[6]+76029189&4294967295,A=N+(w<<23&4294967295|w>>>9),w=b+(A^N^P)+I[9]+3654602809&4294967295,b=A+(w<<4&4294967295|w>>>28),w=P+(b^A^N)+I[12]+3873151461&4294967295,P=b+(w<<11&4294967295|w>>>21),w=N+(P^b^A)+I[15]+530742520&4294967295,N=P+(w<<16&4294967295|w>>>16),w=A+(N^P^b)+I[2]+3299628645&4294967295,A=N+(w<<23&4294967295|w>>>9),w=b+(N^(A|~P))+I[0]+4096336452&4294967295,b=A+(w<<6&4294967295|w>>>26),w=P+(A^(b|~N))+I[7]+1126891415&4294967295,P=b+(w<<10&4294967295|w>>>22),w=N+(b^(P|~A))+I[14]+2878612391&4294967295,N=P+(w<<15&4294967295|w>>>17),w=A+(P^(N|~b))+I[5]+4237533241&4294967295,A=N+(w<<21&4294967295|w>>>11),w=b+(N^(A|~P))+I[12]+1700485571&4294967295,b=A+(w<<6&4294967295|w>>>26),w=P+(A^(b|~N))+I[3]+2399980690&4294967295,P=b+(w<<10&4294967295|w>>>22),w=N+(b^(P|~A))+I[10]+4293915773&4294967295,N=P+(w<<15&4294967295|w>>>17),w=A+(P^(N|~b))+I[1]+2240044497&4294967295,A=N+(w<<21&4294967295|w>>>11),w=b+(N^(A|~P))+I[8]+1873313359&4294967295,b=A+(w<<6&4294967295|w>>>26),w=P+(A^(b|~N))+I[15]+4264355552&4294967295,P=b+(w<<10&4294967295|w>>>22),w=N+(b^(P|~A))+I[6]+2734768916&4294967295,N=P+(w<<15&4294967295|w>>>17),w=A+(P^(N|~b))+I[13]+1309151649&4294967295,A=N+(w<<21&4294967295|w>>>11),w=b+(N^(A|~P))+I[4]+4149444226&4294967295,b=A+(w<<6&4294967295|w>>>26),w=P+(A^(b|~N))+I[11]+3174756917&4294967295,P=b+(w<<10&4294967295|w>>>22),w=N+(b^(P|~A))+I[2]+718787259&4294967295,N=P+(w<<15&4294967295|w>>>17),w=A+(P^(N|~b))+I[9]+3951481745&4294967295,M.g[0]=M.g[0]+b&4294967295,M.g[1]=M.g[1]+(N+(w<<21&4294967295|w>>>11))&4294967295,M.g[2]=M.g[2]+N&4294967295,M.g[3]=M.g[3]+P&4294967295}a.prototype.u=function(M,b){b===void 0&&(b=M.length);for(var A=b-this.blockSize,I=this.B,N=this.h,P=0;P<b;){if(N==0)for(;P<=A;)l(this,M,P),P+=this.blockSize;if(typeof M=="string"){for(;P<b;)if(I[N++]=M.charCodeAt(P++),N==this.blockSize){l(this,I),N=0;break}}else for(;P<b;)if(I[N++]=M[P++],N==this.blockSize){l(this,I),N=0;break}}this.h=N,this.o+=b},a.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var b=1;b<M.length-8;++b)M[b]=0;var A=8*this.o;for(b=M.length-8;b<M.length;++b)M[b]=A&255,A/=256;for(this.u(M),M=Array(16),b=A=0;4>b;++b)for(var I=0;32>I;I+=8)M[A++]=this.g[b]>>>I&255;return M};function h(M,b){var A=p;return Object.prototype.hasOwnProperty.call(A,M)?A[M]:A[M]=b(M)}function d(M,b){this.h=b;for(var A=[],I=!0,N=M.length-1;0<=N;N--){var P=M[N]|0;I&&P==b||(A[N]=P,I=!1)}this.g=A}var p={};function y(M){return-128<=M&&128>M?h(M,function(b){return new d([b|0],0>b?-1:0)}):new d([M|0],0>M?-1:0)}function v(M){if(isNaN(M)||!isFinite(M))return V;if(0>M)return tt(v(-M));for(var b=[],A=1,I=0;M>=A;I++)b[I]=M/A|0,A*=4294967296;return new d(b,0)}function R(M,b){if(M.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(M.charAt(0)=="-")return tt(R(M.substring(1),b));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(b,8)),I=V,N=0;N<M.length;N+=8){var P=Math.min(8,M.length-N),w=parseInt(M.substring(N,N+P),b);8>P?(P=v(Math.pow(b,P)),I=I.j(P).add(v(w))):(I=I.j(A),I=I.add(v(w)))}return I}var V=y(0),B=y(1),K=y(16777216);s=d.prototype,s.m=function(){if(at(this))return-tt(this).m();for(var M=0,b=1,A=0;A<this.g.length;A++){var I=this.i(A);M+=(0<=I?I:4294967296+I)*b,b*=4294967296}return M},s.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if($(this))return"0";if(at(this))return"-"+tt(this).toString(M);for(var b=v(Math.pow(M,6)),A=this,I="";;){var N=Bt(A,b).g;A=wt(A,N.j(b));var P=((0<A.g.length?A.g[0]:A.h)>>>0).toString(M);if(A=N,$(A))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},s.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function $(M){if(M.h!=0)return!1;for(var b=0;b<M.g.length;b++)if(M.g[b]!=0)return!1;return!0}function at(M){return M.h==-1}s.l=function(M){return M=wt(this,M),at(M)?-1:$(M)?0:1};function tt(M){for(var b=M.g.length,A=[],I=0;I<b;I++)A[I]=~M.g[I];return new d(A,~M.h).add(B)}s.abs=function(){return at(this)?tt(this):this},s.add=function(M){for(var b=Math.max(this.g.length,M.g.length),A=[],I=0,N=0;N<=b;N++){var P=I+(this.i(N)&65535)+(M.i(N)&65535),w=(P>>>16)+(this.i(N)>>>16)+(M.i(N)>>>16);I=w>>>16,P&=65535,w&=65535,A[N]=w<<16|P}return new d(A,A[A.length-1]&-2147483648?-1:0)};function wt(M,b){return M.add(tt(b))}s.j=function(M){if($(this)||$(M))return V;if(at(this))return at(M)?tt(this).j(tt(M)):tt(tt(this).j(M));if(at(M))return tt(this.j(tt(M)));if(0>this.l(K)&&0>M.l(K))return v(this.m()*M.m());for(var b=this.g.length+M.g.length,A=[],I=0;I<2*b;I++)A[I]=0;for(I=0;I<this.g.length;I++)for(var N=0;N<M.g.length;N++){var P=this.i(I)>>>16,w=this.i(I)&65535,de=M.i(N)>>>16,oe=M.i(N)&65535;A[2*I+2*N]+=w*oe,dt(A,2*I+2*N),A[2*I+2*N+1]+=P*oe,dt(A,2*I+2*N+1),A[2*I+2*N+1]+=w*de,dt(A,2*I+2*N+1),A[2*I+2*N+2]+=P*de,dt(A,2*I+2*N+2)}for(I=0;I<b;I++)A[I]=A[2*I+1]<<16|A[2*I];for(I=b;I<2*b;I++)A[I]=0;return new d(A,0)};function dt(M,b){for(;(M[b]&65535)!=M[b];)M[b+1]+=M[b]>>>16,M[b]&=65535,b++}function Et(M,b){this.g=M,this.h=b}function Bt(M,b){if($(b))throw Error("division by zero");if($(M))return new Et(V,V);if(at(M))return b=Bt(tt(M),b),new Et(tt(b.g),tt(b.h));if(at(b))return b=Bt(M,tt(b)),new Et(tt(b.g),b.h);if(30<M.g.length){if(at(M)||at(b))throw Error("slowDivide_ only works with positive integers.");for(var A=B,I=b;0>=I.l(M);)A=mt(A),I=mt(I);var N=Nt(A,1),P=Nt(I,1);for(I=Nt(I,2),A=Nt(A,2);!$(I);){var w=P.add(I);0>=w.l(M)&&(N=N.add(A),P=w),I=Nt(I,1),A=Nt(A,1)}return b=wt(M,N.j(b)),new Et(N,b)}for(N=V;0<=M.l(b);){for(A=Math.max(1,Math.floor(M.m()/b.m())),I=Math.ceil(Math.log(A)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=v(A),w=P.j(b);at(w)||0<w.l(M);)A-=I,P=v(A),w=P.j(b);$(P)&&(P=B),N=N.add(P),M=wt(M,w)}return new Et(N,M)}s.A=function(M){return Bt(this,M).h},s.and=function(M){for(var b=Math.max(this.g.length,M.g.length),A=[],I=0;I<b;I++)A[I]=this.i(I)&M.i(I);return new d(A,this.h&M.h)},s.or=function(M){for(var b=Math.max(this.g.length,M.g.length),A=[],I=0;I<b;I++)A[I]=this.i(I)|M.i(I);return new d(A,this.h|M.h)},s.xor=function(M){for(var b=Math.max(this.g.length,M.g.length),A=[],I=0;I<b;I++)A[I]=this.i(I)^M.i(I);return new d(A,this.h^M.h)};function mt(M){for(var b=M.g.length+1,A=[],I=0;I<b;I++)A[I]=M.i(I)<<1|M.i(I-1)>>>31;return new d(A,M.h)}function Nt(M,b){var A=b>>5;b%=32;for(var I=M.g.length-A,N=[],P=0;P<I;P++)N[P]=0<b?M.i(P+A)>>>b|M.i(P+A+1)<<32-b:M.i(P+A);return new d(N,M.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=v,d.fromString=R,Wd=d}).apply(typeof m_<"u"?m_:typeof self<"u"?self:typeof window<"u"?window:{});var Wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var TE,sl,AE,oc,Sd,SE,bE,wE;(function(){var s,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,g){return u==Array.prototype||u==Object.prototype||(u[m]=g.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wu=="object"&&Wu];for(var m=0;m<u.length;++m){var g=u[m];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var a=i(this);function l(u,m){if(m)t:{var g=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var k=u[T];if(!(k in g))break t;g=g[k]}u=u[u.length-1],T=g[u],m=m(T),m!=T&&m!=null&&t(g,u,{configurable:!0,writable:!0,value:m})}}function h(u,m){u instanceof String&&(u+="");var g=0,T=!1,k={next:function(){if(!T&&g<u.length){var z=g++;return{value:m(z,u[z]),done:!1}}return T=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}l("Array.prototype.values",function(u){return u||function(){return h(this,function(m,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},p=this||self;function y(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function v(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function R(u,m,g){return u.call.apply(u.bind,arguments)}function V(u,m,g){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,T),u.apply(m,k)}}return function(){return u.apply(m,arguments)}}function B(u,m,g){return B=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?R:V,B.apply(null,arguments)}function K(u,m){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function $(u,m){function g(){}g.prototype=m.prototype,u.aa=m.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(T,k,z){for(var X=Array(arguments.length-2),It=2;It<arguments.length;It++)X[It-2]=arguments[It];return m.prototype[k].apply(T,X)}}function at(u){const m=u.length;if(0<m){const g=Array(m);for(let T=0;T<m;T++)g[T]=u[T];return g}return[]}function tt(u,m){for(let g=1;g<arguments.length;g++){const T=arguments[g];if(y(T)){const k=u.length||0,z=T.length||0;u.length=k+z;for(let X=0;X<z;X++)u[k+X]=T[X]}else u.push(T)}}class wt{constructor(m,g){this.i=m,this.j=g,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function dt(u){return/^[\s\xa0]*$/.test(u)}function Et(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function Bt(u){return Bt[" "](u),u}Bt[" "]=function(){};var mt=Et().indexOf("Gecko")!=-1&&!(Et().toLowerCase().indexOf("webkit")!=-1&&Et().indexOf("Edge")==-1)&&!(Et().indexOf("Trident")!=-1||Et().indexOf("MSIE")!=-1)&&Et().indexOf("Edge")==-1;function Nt(u,m,g){for(const T in u)m.call(g,u[T],T,u)}function M(u,m){for(const g in u)m.call(void 0,u[g],g,u)}function b(u){const m={};for(const g in u)m[g]=u[g];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(u,m){let g,T;for(let k=1;k<arguments.length;k++){T=arguments[k];for(g in T)u[g]=T[g];for(let z=0;z<A.length;z++)g=A[z],Object.prototype.hasOwnProperty.call(T,g)&&(u[g]=T[g])}}function N(u){var m=1;u=u.split(":");const g=[];for(;0<m&&u.length;)g.push(u.shift()),m--;return u.length&&g.push(u.join(":")),g}function P(u){p.setTimeout(()=>{throw u},0)}function w(){var u=Pt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class de{constructor(){this.h=this.g=null}add(m,g){const T=oe.get();T.set(m,g),this.h?this.h.next=T:this.g=T,this.h=T}}var oe=new wt(()=>new Z,u=>u.reset());class Z{constructor(){this.next=this.g=this.h=null}set(m,g){this.h=m,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,ot=!1,Pt=new de,C=()=>{const u=p.Promise.resolve(void 0);ct=()=>{u.then(Y)}};var Y=()=>{for(var u;u=w();){try{u.h.call(u.g)}catch(g){P(g)}var m=oe;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ot=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};p.addEventListener("test",g,m),p.removeEventListener("test",g,m)}catch{}return u}();function yt(u,m){if(W.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(mt){t:{try{Bt(m.nodeName);var k=!0;break t}catch{}k=!1}k||(m=null)}}else g=="mouseover"?m=u.fromElement:g=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:pt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&yt.aa.h.call(this)}}$(yt,W);var pt={2:"touch",3:"pen",4:"mouse"};yt.prototype.h=function(){yt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),Mt=0;function Zt(u,m,g,T,k){this.listener=u,this.proxy=null,this.src=m,this.type=g,this.capture=!!T,this.ha=k,this.key=++Mt,this.da=this.fa=!1}function xt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Fe(u){this.src=u,this.g={},this.h=0}Fe.prototype.add=function(u,m,g,T,k){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var X=dn(u,m,T,k);return-1<X?(m=u[X],g||(m.fa=!1)):(m=new Zt(m,this.src,z,!!T,k),m.fa=g,u.push(m)),m};function di(u,m){var g=m.type;if(g in u.g){var T=u.g[g],k=Array.prototype.indexOf.call(T,m,void 0),z;(z=0<=k)&&Array.prototype.splice.call(T,k,1),z&&(xt(m),u.g[g].length==0&&(delete u.g[g],u.h--))}}function dn(u,m,g,T){for(var k=0;k<u.length;++k){var z=u[k];if(!z.da&&z.listener==m&&z.capture==!!g&&z.ha==T)return k}return-1}var Yi="closure_lm_"+(1e6*Math.random()|0),Qi={};function mi(u,m,g,T,k){if(Array.isArray(m)){for(var z=0;z<m.length;z++)mi(u,m[z],g,T,k);return null}return g=Dl(g),u&&u[le]?u.K(m,g,v(T)?!!T.capture:!1,k):Qa(u,m,g,!1,T,k)}function Qa(u,m,g,T,k,z){if(!m)throw Error("Invalid event type");var X=v(k)?!!k.capture:!!k,It=Xa(u);if(It||(u[Yi]=It=new Fe(u)),g=It.add(m,g,T,X,z),g.proxy)return g;if(T=js(),g.proxy=T,T.src=u,T.listener=g,u.addEventListener)J||(k=X),k===void 0&&(k=!1),u.addEventListener(m.toString(),T,k);else if(u.attachEvent)u.attachEvent(Gs(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function js(){function u(g){return m.call(u.src,u.listener,g)}const m=Xc;return u}function qs(u,m,g,T,k){if(Array.isArray(m))for(var z=0;z<m.length;z++)qs(u,m[z],g,T,k);else T=v(T)?!!T.capture:!!T,g=Dl(g),u&&u[le]?(u=u.i,m=String(m).toString(),m in u.g&&(z=u.g[m],g=dn(z,g,T,k),-1<g&&(xt(z[g]),Array.prototype.splice.call(z,g,1),z.length==0&&(delete u.g[m],u.h--)))):u&&(u=Xa(u))&&(m=u.g[m.toString()],u=-1,m&&(u=dn(m,g,T,k)),(g=-1<u?m[u]:null)&&Fr(g))}function Fr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[le])di(m.i,u);else{var g=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(g,T,u.capture):m.detachEvent?m.detachEvent(Gs(g),T):m.addListener&&m.removeListener&&m.removeListener(T),(g=Xa(m))?(di(g,u),g.h==0&&(g.src=null,m[Yi]=null)):xt(u)}}}function Gs(u){return u in Qi?Qi[u]:Qi[u]="on"+u}function Xc(u,m){if(u.da)u=!0;else{m=new yt(m,this);var g=u.listener,T=u.ha||u.src;u.fa&&Fr(u),u=g.call(T,m)}return u}function Xa(u){return u=u[Yi],u instanceof Fe?u:null}var We="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dl(u){return typeof u=="function"?u:(u[We]||(u[We]=function(m){return u.handleEvent(m)}),u[We])}function me(){rt.call(this),this.i=new Fe(this),this.M=this,this.F=null}$(me,rt),me.prototype[le]=!0,me.prototype.removeEventListener=function(u,m,g,T){qs(this,u,m,g,T)};function Ee(u,m){var g,T=u.F;if(T)for(g=[];T;T=T.F)g.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new W(m,u);else if(m instanceof W)m.target=m.target||u;else{var k=m;m=new W(T,u),I(m,k)}if(k=!0,g)for(var z=g.length-1;0<=z;z--){var X=m.g=g[z];k=pi(X,T,!0,m)&&k}if(X=m.g=u,k=pi(X,T,!0,m)&&k,k=pi(X,T,!1,m)&&k,g)for(z=0;z<g.length;z++)X=m.g=g[z],k=pi(X,T,!1,m)&&k}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var g=u.g[m],T=0;T<g.length;T++)xt(g[T]);delete u.g[m],u.h--}}this.F=null},me.prototype.K=function(u,m,g,T){return this.i.add(String(u),m,!1,g,T)},me.prototype.L=function(u,m,g,T){return this.i.add(String(u),m,!0,g,T)};function pi(u,m,g,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var k=!0,z=0;z<m.length;++z){var X=m[z];if(X&&!X.da&&X.capture==g){var It=X.listener,ge=X.ha||X.src;X.fa&&di(u.i,X),k=It.call(ge,T)!==!1&&k}}return k&&!T.defaultPrevented}function Nl(u,m,g){if(typeof u=="function")g&&(u=B(u,g));else if(u&&typeof u.handleEvent=="function")u=B(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(u,m||0)}function $a(u){u.g=Nl(()=>{u.g=null,u.i&&(u.i=!1,$a(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class $c extends rt{constructor(m,g){super(),this.m=m,this.l=g,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:$a(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kr(u){rt.call(this),this.h=u,this.g={}}$(Kr,rt);var Xi=[];function xe(u){Nt(u.g,function(m,g){this.g.hasOwnProperty(g)&&Fr(m)},u),u.g={}}Kr.prototype.N=function(){Kr.aa.N.call(this),xe(this)},Kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Za=p.JSON.stringify,Gn=p.JSON.parse,Ke=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function Wa(){}Wa.prototype.h=null;function Ml(u){return u.h||(u.h=u.i())}function Vl(){}var Fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $i(){W.call(this,"d")}$($i,W);function Mn(){W.call(this,"c")}$(Mn,W);var mn={},Zi=null;function Fs(){return Zi=Zi||new me}mn.La="serverreachability";function Ja(u){W.call(this,mn.La,u)}$(Ja,W);function Wi(u){const m=Fs();Ee(m,new Ja(m))}mn.STAT_EVENT="statevent";function Ks(u,m){W.call(this,mn.STAT_EVENT,u),this.stat=m}$(Ks,W);function re(u){const m=Fs();Ee(m,new Ks(m,u))}mn.Ma="timingevent";function Ul(u,m){W.call(this,mn.Ma,u),this.size=m}$(Ul,W);function Ji(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},m)}function tr(){this.g=!0}tr.prototype.xa=function(){this.g=!1};function kl(u,m,g,T,k,z){u.info(function(){if(u.g)if(z)for(var X="",It=z.split("&"),ge=0;ge<It.length;ge++){var Ct=It[ge].split("=");if(1<Ct.length){var Se=Ct[0];Ct=Ct[1];var ye=Se.split("_");X=2<=ye.length&&ye[1]=="type"?X+(Se+"="+Ct+"&"):X+(Se+"=redacted&")}}else X=null;else X=z;return"XMLHTTP REQ ("+T+") [attempt "+k+"]: "+m+`
`+g+`
`+X})}function Pl(u,m,g,T,k,z,X){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+k+"]: "+m+`
`+g+`
`+z+" "+X})}function er(u,m,g,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Te(u,g)+(T?" "+T:"")})}function Kn(u,m){u.info(function(){return"TIMEOUT: "+m})}tr.prototype.info=function(){};function Te(u,m){if(!u.g)return m;if(!m)return null;try{var g=JSON.parse(m);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var T=g[u];if(!(2>T.length)){var k=T[1];if(Array.isArray(k)&&!(1>k.length)){var z=k[0];if(z!="noop"&&z!="stop"&&z!="close")for(var X=1;X<k.length;X++)k[X]=""}}}}return Za(g)}catch{return m}}var pe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yr;function Ys(){}$(Ys,Wa),Ys.prototype.g=function(){return new XMLHttpRequest},Ys.prototype.i=function(){return{}},Yr=new Ys;function Yn(u,m,g,T){this.j=u,this.i=m,this.l=g,this.R=T||1,this.U=new Kr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new to}function to(){this.i=null,this.g="",this.h=!1}var nr={},Qr={};function Vn(u,m,g){u.L=1,u.v=Zr(Wt(m)),u.m=g,u.P=!0,yi(u,null)}function yi(u,m){u.F=Date.now(),Qt(u),u.A=Wt(u.v);var g=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Ei(g.i,"t",T),u.C=0,g=u.j.J,u.h=new to,u.g=$l(u.j,g?m:null,!u.m),0<u.O&&(u.M=new $c(B(u.Y,u,u.g),u.O)),m=u.U,g=u.g,T=u.ca;var k="readystatechange";Array.isArray(k)||(k&&(Xi[0]=k.toString()),k=Xi);for(var z=0;z<k.length;z++){var X=mi(g,k[z],T||m.handleEvent,!1,m.h||m);if(!X)break;m.g[X.key]=X}m=u.H?b(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Wi(),kl(u.i,u.u,u.A,u.l,u.R,u.m)}Yn.prototype.ca=function(u){u=u.target;const m=this.M;m&&vn(u)==3?m.j():this.Y(u)},Yn.prototype.Y=function(u){try{if(u==this.g)t:{const ye=vn(this.g);var m=this.g.Ba();const bi=this.g.Z();if(!(3>ye)&&(ye!=3||this.g&&(this.h.h||this.g.oa()||jl(this.g)))){this.J||ye!=4||m==7||(m==8||0>=bi?Wi(3):Wi(2)),Qs(this);var g=this.g.Z();this.X=g;e:if(ir(this)){var T=jl(this.g);u="";var k=T.length,z=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Je(this),sn(this);var X="";break e}this.h.i=new p.TextDecoder}for(m=0;m<k;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(z&&m==k-1)});T.length=0,this.h.g+=u,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,Pl(this.i,this.u,this.A,this.l,this.R,ye,g),this.o){if(this.T&&!this.K){e:{if(this.g){var It,ge=this.g;if((It=ge.g?ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!dt(It)){var Ct=It;break e}}Ct=null}if(g=Ct)er(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,an(this,g);else{this.o=!1,this.s=3,re(12),Je(this),sn(this);break t}}if(this.P){g=!0;let De;for(;!this.J&&this.C<X.length;)if(De=rr(this,X),De==Qr){ye==4&&(this.s=4,re(14),g=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(De==nr){this.s=4,re(15),er(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else er(this.i,this.l,De,null),an(this,De);if(ir(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ye!=4||X.length!=0||this.h.h||(this.s=1,re(16),g=!1),this.o=this.o&&g,!g)er(this.i,this.l,X,"[Invalid Chunked Response]"),Je(this),sn(this);else if(0<X.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),rs(Se),Se.M=!0,re(11))}}else er(this.i,this.l,X,null),an(this,X);ye==4&&Je(this),this.o&&!this.J&&(ye==4?Yl(this.j,this):(this.o=!1,Qt(this)))}else nh(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,re(12)):(this.s=0,re(13)),Je(this),sn(this)}}}catch{}finally{}};function ir(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function rr(u,m){var g=u.C,T=m.indexOf(`
`,g);return T==-1?Qr:(g=Number(m.substring(g,T)),isNaN(g)?nr:(T+=1,T+g>m.length?Qr:(m=m.slice(T,T+g),u.C=T+g,m)))}Yn.prototype.cancel=function(){this.J=!0,Je(this)};function Qt(u){u.S=Date.now()+u.I,eo(u,u.I)}function eo(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ji(B(u.ba,u),m)}function Qs(u){u.B&&(p.clearTimeout(u.B),u.B=null)}Yn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Kn(this.i,this.A),this.L!=2&&(Wi(),re(17)),Je(this),this.s=2,sn(this)):eo(this,this.S-u)};function sn(u){u.j.G==0||u.J||Yl(u.j,u)}function Je(u){Qs(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,xe(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function an(u,m){try{var g=u.j;if(g.G!=0&&(g.g==u||sr(g.h,u))){if(!u.K&&sr(g.h,u)&&g.G==3){try{var T=g.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var k=T;if(k[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)ra(g),na(g);else break t;fo(g),re(18)}}else g.za=k[1],0<g.za-g.T&&37500>k[2]&&g.F&&g.v==0&&!g.C&&(g.C=Ji(B(g.Za,g),6e3));if(1>=Ll(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Si(g,11)}else if((u.K||g.g==u)&&ra(g),!dt(m))for(k=g.Da.g.parse(m),m=0;m<k.length;m++){let Ct=k[m];if(g.T=Ct[0],Ct=Ct[1],g.G==2)if(Ct[0]=="c"){g.K=Ct[1],g.ia=Ct[2];const Se=Ct[3];Se!=null&&(g.la=Se,g.j.info("VER="+g.la));const ye=Ct[4];ye!=null&&(g.Aa=ye,g.j.info("SVER="+g.Aa));const bi=Ct[5];bi!=null&&typeof bi=="number"&&0<bi&&(T=1.5*bi,g.L=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const De=u.g;if(De){const ti=De.g?De.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ti){var z=T.h;z.g||ti.indexOf("spdy")==-1&&ti.indexOf("quic")==-1&&ti.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(ar(z,z.h),z.h=null))}if(T.D){const po=De.g?De.g.getResponseHeader("X-HTTP-Session-Id"):null;po&&(T.ya=po,Vt(T.I,T.D,po))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),T=g;var X=u;if(T.qa=Xl(T,T.J?T.ia:null,T.W),X.K){pn(T.h,X);var It=X,ge=T.L;ge&&(It.I=ge),It.B&&(Qs(It),Qt(It)),T.g=X}else Fl(T);0<g.i.length&&ia(g)}else Ct[0]!="stop"&&Ct[0]!="close"||Si(g,7);else g.G==3&&(Ct[0]=="stop"||Ct[0]=="close"?Ct[0]=="stop"?Si(g,7):co(g):Ct[0]!="noop"&&g.l&&g.l.ta(Ct),g.v=0)}}Wi(4)}catch{}}var Zc=class{constructor(u,m){this.g=u,this.map=m}};function no(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function io(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ll(u){return u.h?1:u.g?u.g.size:0}function sr(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ar(u,m){u.g?u.g.add(m):u.h=m}function pn(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}no.prototype.cancel=function(){if(this.i=Ye(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ye(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const g of u.g.values())m=m.concat(g.D);return m}return at(u.i)}function xl(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(y(u)){for(var m=[],g=u.length,T=0;T<g;T++)m.push(u[T]);return m}m=[],g=0;for(T in u)m[g++]=u[T];return m}function Wc(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(y(u)||typeof u=="string"){var m=[];u=u.length;for(var g=0;g<u;g++)m.push(g);return m}m=[],g=0;for(const T in u)m[g++]=T;return m}}}function Xr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(y(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var g=Wc(u),T=xl(u),k=T.length,z=0;z<k;z++)m.call(void 0,T[z],g&&g[z],u)}var ro=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xs(u,m){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var T=u[g].indexOf("="),k=null;if(0<=T){var z=u[g].substring(0,T);k=u[g].substring(T+1)}else z=u[g];m(z,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function _i(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _i){this.h=u.h,or(this,u.j),this.o=u.o,this.g=u.g,$r(this,u.s),this.l=u.l;var m=u.i,g=new Qn;g.i=m.i,m.g&&(g.g=new Map(m.g),g.h=m.h),$s(this,g),this.m=u.m}else u&&(m=String(u).match(ro))?(this.h=!1,or(this,m[1]||"",!0),this.o=lr(m[2]||""),this.g=lr(m[3]||"",!0),$r(this,m[4]),this.l=lr(m[5]||"",!0),$s(this,m[6]||"",!0),this.m=lr(m[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}_i.prototype.toString=function(){var u=[],m=this.j;m&&u.push(gn(m,so,!0),":");var g=this.g;return(g||m=="file")&&(u.push("//"),(m=this.o)&&u.push(gn(m,so,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(gn(g,g.charAt(0)=="/"?ao:zl,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",gn(g,eh)),u.join("")};function Wt(u){return new _i(u)}function or(u,m,g){u.j=g?lr(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function $r(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function $s(u,m,g){m instanceof Qn?(u.i=m,oo(u.i,u.h)):(g||(m=gn(m,th)),u.i=new Qn(m,u.h))}function Vt(u,m,g){u.i.set(m,g)}function Zr(u){return Vt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function lr(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function gn(u,m,g){return typeof u=="string"?(u=encodeURI(u).replace(m,Jc),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Jc(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var so=/[#\/\?@]/g,zl=/[#\?:]/g,ao=/[#\?]/g,th=/[#\?@]/g,eh=/#/g;function Qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function yn(u){u.g||(u.g=new Map,u.h=0,u.i&&Xs(u.i,function(m,g){u.add(decodeURIComponent(m.replace(/\+/g," ")),g)}))}s=Qn.prototype,s.add=function(u,m){yn(this),this.i=null,u=Ti(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(m),this.h+=1,this};function Zs(u,m){yn(u),m=Ti(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function vi(u,m){return yn(u),m=Ti(u,m),u.g.has(m)}s.forEach=function(u,m){yn(this),this.g.forEach(function(g,T){g.forEach(function(k){u.call(m,k,T,this)},this)},this)},s.na=function(){yn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),g=[];for(let T=0;T<m.length;T++){const k=u[T];for(let z=0;z<k.length;z++)g.push(m[T])}return g},s.V=function(u){yn(this);let m=[];if(typeof u=="string")vi(this,u)&&(m=m.concat(this.g.get(Ti(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)m=m.concat(u[g])}return m},s.set=function(u,m){return yn(this),this.i=null,u=Ti(this,u),vi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},s.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Ei(u,m,g){Zs(u,m),0<g.length&&(u.i=null,u.g.set(Ti(u,m),at(g)),u.h+=g.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var g=0;g<m.length;g++){var T=m[g];const z=encodeURIComponent(String(T)),X=this.V(T);for(T=0;T<X.length;T++){var k=z;X[T]!==""&&(k+="="+encodeURIComponent(String(X[T]))),u.push(k)}}return this.i=u.join("&")};function Ti(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function oo(u,m){m&&!u.j&&(yn(u),u.i=null,u.g.forEach(function(g,T){var k=T.toLowerCase();T!=k&&(Zs(this,T),Ei(this,k,g))},u)),u.j=m}function Bl(u,m){const g=new tr;if(p.Image){const T=new Image;T.onload=K(_n,g,"TestLoadImage: loaded",!0,m,T),T.onerror=K(_n,g,"TestLoadImage: error",!1,m,T),T.onabort=K(_n,g,"TestLoadImage: abort",!1,m,T),T.ontimeout=K(_n,g,"TestLoadImage: timeout",!1,m,T),p.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Wr(u,m){const g=new tr,T=new AbortController,k=setTimeout(()=>{T.abort(),_n(g,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(z=>{clearTimeout(k),z.ok?_n(g,"TestPingServer: ok",!0,m):_n(g,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(k),_n(g,"TestPingServer: error",!1,m)})}function _n(u,m,g,T,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),T(g)}catch{}}function Jr(){this.g=new Ke}function Xn(u,m,g){const T=g||"";try{Xr(u,function(k,z){let X=k;v(k)&&(X=Za(k)),m.push(T+z+"="+encodeURIComponent(X))})}catch(k){throw m.push(T+"type="+encodeURIComponent("_badmap")),k}}function ur(u){this.l=u.Ub||null,this.j=u.eb||!1}$(ur,Wa),ur.prototype.g=function(){return new Ai(this.l,this.j)},ur.prototype.i=function(u){return function(){return u}}({});function Ai(u,m){me.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Ai,me),s=Ai.prototype,s.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Zn(this)},s.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},s.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Zn(this)),this.g&&(this.readyState=3,Zn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function lo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}s.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?$n(this):Zn(this),this.readyState==3&&lo(this)}},s.Ra=function(u){this.g&&(this.response=this.responseText=u,$n(this))},s.Qa=function(u){this.g&&(this.response=u,$n(this))},s.ga=function(){this.g&&$n(this)};function $n(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Zn(u)}s.setRequestHeader=function(u,m){this.u.append(u,m)},s.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var g=m.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=m.next();return u.join(`\r
`)};function Zn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function uo(u){let m="";return Nt(u,function(g,T){m+=T,m+=":",m+=g,m+=`\r
`}),m}function Ae(u,m,g){t:{for(T in g){var T=!1;break t}T=!0}T||(g=uo(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):Vt(u,m,g))}function Lt(u){me.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Lt,me);var Ws=/^https?$/i,ts=["POST","PUT"];s=Lt.prototype,s.Ha=function(u){this.J=u},s.ea=function(u,m,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yr.g(),this.v=this.o?Ml(this.o):Ml(Yr),this.g.onreadystatechange=B(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(z){Hl(this,z);return}if(u=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var k in T)g.set(k,T[k]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const z of T.keys())g.set(z,T.get(z));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(z=>z.toLowerCase()=="content-type"),k=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ts,m,void 0))||T||k||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,X]of g)this.g.setRequestHeader(z,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{es(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){Hl(this,z)}};function Hl(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Js(u),Wn(u)}function Js(u){u.A||(u.A=!0,Ee(u,"complete"),Ee(u,"error"))}s.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ee(this,"complete"),Ee(this,"abort"),Wn(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wn(this,!0)),Lt.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},s.bb=function(){ta(this)};function ta(u){if(u.h&&typeof d<"u"&&(!u.v[1]||vn(u)!=4||u.Z()!=2)){if(u.u&&vn(u)==4)Nl(u.Ea,0,u);else if(Ee(u,"readystatechange"),vn(u)==4){u.h=!1;try{const X=u.Z();t:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var g;if(!(g=m)){var T;if(T=X===0){var k=String(u.D).match(ro)[1]||null;!k&&p.self&&p.self.location&&(k=p.self.location.protocol.slice(0,-1)),T=!Ws.test(k?k.toLowerCase():"")}g=T}if(g)Ee(u,"complete"),Ee(u,"success");else{u.m=6;try{var z=2<vn(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",Js(u)}}finally{Wn(u)}}}}function Wn(u,m){if(u.g){es(u);const g=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Ee(u,"ready");try{g.onreadystatechange=T}catch{}}}function es(u){u.I&&(p.clearTimeout(u.I),u.I=null)}s.isActive=function(){return!!this.g};function vn(u){return u.g?u.g.readyState:0}s.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Gn(m)}};function jl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function nh(u){const m={};u=(u.g&&2<=vn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(dt(u[T]))continue;var g=N(u[T]);const k=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const z=m[k]||[];m[k]=z,z.push(g)}M(m,function(T){return T.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ns(u,m,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||m}function ea(u){this.Aa=0,this.i=[],this.j=new tr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ns("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ns("baseRetryDelayMs",5e3,u),this.cb=ns("retryDelaySeedMs",1e4,u),this.Wa=ns("forwardChannelMaxRetries",2,u),this.wa=ns("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new no(u&&u.concurrentRequestLimit),this.Da=new Jr,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=ea.prototype,s.la=8,s.G=1,s.connect=function(u,m,g,T){re(0),this.W=u,this.H=m||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.I=Xl(this,null,this.W),ia(this)};function co(u){if(ql(u),u.G==3){var m=u.U++,g=Wt(u.I);if(Vt(g,"SID",u.K),Vt(g,"RID",m),Vt(g,"TYPE","terminate"),is(u,g),m=new Yn(u,u.j,m),m.L=2,m.v=Zr(Wt(g)),g=!1,p.navigator&&p.navigator.sendBeacon)try{g=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!g&&p.Image&&(new Image().src=m.v,g=!0),g||(m.g=$l(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Qt(m)}Ql(u)}function na(u){u.g&&(rs(u),u.g.cancel(),u.g=null)}function ql(u){na(u),u.u&&(p.clearTimeout(u.u),u.u=null),ra(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function ia(u){if(!io(u.h)&&!u.s){u.s=!0;var m=u.Ga;ct||C(),ot||(ct(),ot=!0),Pt.add(m,u),u.B=0}}function ih(u,m){return Ll(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ji(B(u.Ga,u,m),mo(u,u.B)),u.B++,!0)}s.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const k=new Yn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=b(z),I(z,this.S)):z=this.S),this.m!==null||this.O||(k.H=z,z=null),this.P)t:{for(var m=0,g=0;g<this.i.length;g++){e:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=g;break t}if(m===4096||g===this.i.length-1){m=g+1;break t}}m=1e3}else m=1e3;m=Gl(this,k,m),g=Wt(this.I),Vt(g,"RID",u),Vt(g,"CVER",22),this.D&&Vt(g,"X-HTTP-Session-Id",this.D),is(this,g),z&&(this.O?m="headers="+encodeURIComponent(String(uo(z)))+"&"+m:this.m&&Ae(g,this.m,z)),ar(this.h,k),this.Ua&&Vt(g,"TYPE","init"),this.P?(Vt(g,"$req",m),Vt(g,"SID","null"),k.T=!0,Vn(k,g,null)):Vn(k,g,m),this.G=2}}else this.G==3&&(u?ho(this,u):this.i.length==0||io(this.h)||ho(this))};function ho(u,m){var g;m?g=m.l:g=u.U++;const T=Wt(u.I);Vt(T,"SID",u.K),Vt(T,"RID",g),Vt(T,"AID",u.T),is(u,T),u.m&&u.o&&Ae(T,u.m,u.o),g=new Yn(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Gl(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ar(u.h,g),Vn(g,T,m)}function is(u,m){u.H&&Nt(u.H,function(g,T){Vt(m,T,g)}),u.l&&Xr({},function(g,T){Vt(m,T,g)})}function Gl(u,m,g){g=Math.min(u.i.length,g);var T=u.l?B(u.l.Na,u.l,u):null;t:{var k=u.i;let z=-1;for(;;){const X=["count="+g];z==-1?0<g?(z=k[0].g,X.push("ofs="+z)):z=0:X.push("ofs="+z);let It=!0;for(let ge=0;ge<g;ge++){let Ct=k[ge].g;const Se=k[ge].map;if(Ct-=z,0>Ct)z=Math.max(0,k[ge].g-100),It=!1;else try{Xn(Se,X,"req"+Ct+"_")}catch{T&&T(Se)}}if(It){T=X.join("&");break t}}}return u=u.i.splice(0,g),m.D=u,T}function Fl(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ct||C(),ot||(ct(),ot=!0),Pt.add(m,u),u.v=0}}function fo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ji(B(u.Fa,u),mo(u,u.v)),u.v++,!0)}s.Fa=function(){if(this.u=null,Kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ji(B(this.ab,this),u)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,re(10),na(this),Kl(this))};function rs(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function Kl(u){u.g=new Yn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=Wt(u.qa);Vt(m,"RID","rpc"),Vt(m,"SID",u.K),Vt(m,"AID",u.T),Vt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Vt(m,"TO",u.ja),Vt(m,"TYPE","xmlhttp"),is(u,m),u.m&&u.o&&Ae(m,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Zr(Wt(m)),g.m=null,g.P=!0,yi(g,u)}s.Za=function(){this.C!=null&&(this.C=null,na(this),fo(this),re(19))};function ra(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Yl(u,m){var g=null;if(u.g==m){ra(u),rs(u),u.g=null;var T=2}else if(sr(u.h,m))g=m.D,pn(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){g=m.m?m.m.length:0,m=Date.now()-m.F;var k=u.B;T=Fs(),Ee(T,new Ul(T,g)),ia(u)}else Fl(u);else if(k=m.s,k==3||k==0&&0<m.X||!(T==1&&ih(u,m)||T==2&&fo(u)))switch(g&&0<g.length&&(m=u.h,m.i=m.i.concat(g)),k){case 1:Si(u,5);break;case 4:Si(u,10);break;case 3:Si(u,6);break;default:Si(u,2)}}}function mo(u,m){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*m}function Si(u,m){if(u.j.info("Error code "+m),m==2){var g=B(u.fb,u),T=u.Xa;const k=!T;T=new _i(T||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||or(T,"https"),Zr(T),k?Bl(T.toString(),g):Wr(T.toString(),g)}else re(2);u.G=0,u.l&&u.l.sa(m),Ql(u),ql(u)}s.fb=function(u){u?(this.j.info("Successfully pinged google.com"),re(2)):(this.j.info("Failed to ping google.com"),re(1))};function Ql(u){if(u.G=0,u.ka=[],u.l){const m=Ye(u.h);(m.length!=0||u.i.length!=0)&&(tt(u.ka,m),tt(u.ka,u.i),u.h.i.length=0,at(u.i),u.i.length=0),u.l.ra()}}function Xl(u,m,g){var T=g instanceof _i?Wt(g):new _i(g);if(T.g!="")m&&(T.g=m+"."+T.g),$r(T,T.s);else{var k=p.location;T=k.protocol,m=m?m+"."+k.hostname:k.hostname,k=+k.port;var z=new _i(null);T&&or(z,T),m&&(z.g=m),k&&$r(z,k),g&&(z.l=g),T=z}return g=u.D,m=u.ya,g&&m&&Vt(T,g,m),Vt(T,"VER",u.la),is(u,T),T}function $l(u,m,g){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Lt(new ur({eb:g})):new Lt(u.pa),m.Ha(u.J),m}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zl(){}s=Zl.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function sa(){}sa.prototype.g=function(u,m){return new Qe(u,m)};function Qe(u,m){me.call(this),this.g=new ea(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!dt(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!dt(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Jn(this)}$(Qe,me),Qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){co(this.g)},Qe.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=Za(u),u=g);m.i.push(new Zc(m.Ya++,u)),m.G==3&&ia(m)},Qe.prototype.N=function(){this.g.l=null,delete this.j,co(this.g),delete this.g,Qe.aa.N.call(this)};function Wl(u){$i.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const g in m){u=g;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}$(Wl,$i);function Jl(){Mn.call(this),this.status=1}$(Jl,Mn);function Jn(u){this.g=u}$(Jn,Zl),Jn.prototype.ua=function(){Ee(this.g,"a")},Jn.prototype.ta=function(u){Ee(this.g,new Wl(u))},Jn.prototype.sa=function(u){Ee(this.g,new Jl)},Jn.prototype.ra=function(){Ee(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,wE=function(){return new sa},bE=function(){return Fs()},SE=mn,Sd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pe.NO_ERROR=0,pe.TIMEOUT=8,pe.HTTP_ERROR=6,oc=pe,gi.COMPLETE="complete",AE=gi,Vl.EventType=Fn,Fn.OPEN="a",Fn.CLOSE="b",Fn.ERROR="c",Fn.MESSAGE="d",me.prototype.listen=me.prototype.K,sl=Vl,Lt.prototype.listenOnce=Lt.prototype.L,Lt.prototype.getLastError=Lt.prototype.Ka,Lt.prototype.getLastErrorCode=Lt.prototype.Ba,Lt.prototype.getStatus=Lt.prototype.Z,Lt.prototype.getResponseJson=Lt.prototype.Oa,Lt.prototype.getResponseText=Lt.prototype.oa,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Ha,TE=Lt}).apply(typeof Wu<"u"?Wu:typeof self<"u"?self:typeof window<"u"?window:{});const p_="@firebase/firestore",g_="4.7.9";/**
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
 */class je{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */let Ka="11.4.0";/**
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
 */const Vs=new Uc("@firebase/firestore");function Ma(){return Vs.logLevel}function nt(s,...t){if(Vs.logLevel<=bt.DEBUG){const i=t.map(Jd);Vs.debug(`Firestore (${Ka}): ${s}`,...i)}}function Us(s,...t){if(Vs.logLevel<=bt.ERROR){const i=t.map(Jd);Vs.error(`Firestore (${Ka}): ${s}`,...i)}}function Bc(s,...t){if(Vs.logLevel<=bt.WARN){const i=t.map(Jd);Vs.warn(`Firestore (${Ka}): ${s}`,...i)}}function Jd(s){if(typeof s=="string")return s;try{/**
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
*/return function(i){return JSON.stringify(i)}(s)}catch{return s}}/**
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
 */function St(s="Unexpected state"){const t=`FIRESTORE (${Ka}) INTERNAL ASSERTION FAILED: `+s;throw Us(t),new Error(t)}function ie(s,t){s||St()}function Kt(s,t){return s}/**
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
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ht extends qn{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class RE{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class b1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(je.UNAUTHENTICATED))}shutdown(){}}class w1{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class R1{constructor(t){this.t=t,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){ie(this.o===void 0);let a=this.i;const l=y=>this.i!==a?(a=this.i,i(y)):Promise.resolve();let h=new Is;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Is,t.enqueueRetryable(()=>l(this.currentUser))};const d=()=>{const y=h;t.enqueueRetryable(async()=>{await y.promise,await l(this.currentUser)})},p=y=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(y=>p(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?p(y):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Is)}},0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(a=>this.i!==t?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(ie(typeof a.accessToken=="string"),new RE(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ie(t===null||typeof t=="string"),new je(t)}}class I1{constructor(t,i,a){this.l=t,this.h=i,this.P=a,this.type="FirstParty",this.user=je.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class C1{constructor(t,i,a){this.l=t,this.h=i,this.P=a}getToken(){return Promise.resolve(new I1(this.l,this.h,this.P))}start(t,i){t.enqueueRetryable(()=>i(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class y_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O1{constructor(t,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Dn(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,i){ie(this.o===void 0);const a=h=>{h.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const d=h.token!==this.R;return this.R=h.token,nt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(h.token):Promise.resolve()};this.o=h=>{t.enqueueRetryable(()=>a(h))};const l=h=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(h=>l(h)),setTimeout(()=>{if(!this.appCheck){const h=this.A.getImmediate({optional:!0});h?l(h):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new y_(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(i=>i?(ie(typeof i.token=="string"),this.R=i.token,new y_(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function D1(s){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(s);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<s;a++)i[a]=Math.floor(256*Math.random());return i}/**
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
 */class IE{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=D1(40);for(let h=0;h<l.length;++h)a.length<20&&l[h]<i&&(a+=t.charAt(l[h]%62))}return a}}function zt(s,t){return s<t?-1:s>t?1:0}function za(s,t,i){return s.length===t.length&&s.every((a,l)=>i(a,t[l]))}/**
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
 */const __=-62135596800,v_=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(t){return Oe.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*v_);return new Oe(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new ht(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ht(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<__)throw new ht(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ht(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/v_}_compareTo(t){return this.seconds===t.seconds?zt(this.nanoseconds,t.nanoseconds):zt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-__;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Yt{static fromTimestamp(t){return new Yt(t)}static min(){return new Yt(new Oe(0,0))}static max(){return new Yt(new Oe(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const E_="__name__";class ai{constructor(t,i,a){i===void 0?i=0:i>t.length&&St(),a===void 0?a=t.length-i:a>t.length-i&&St(),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return ai.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof ai?t.forEach(a=>{i.push(a)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let l=0;l<a;l++){const h=ai.compareSegments(t.get(l),i.get(l));if(h!==0)return h}return Math.sign(t.length-i.length)}static compareSegments(t,i){const a=ai.isNumericId(t),l=ai.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?ai.extractNumericId(t).compare(ai.extractNumericId(i)):t<i?-1:t>i?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wd.fromString(t.substring(4,t.length-2))}}class ne extends ai{construct(t,i,a){return new ne(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new ht(Q.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter(l=>l.length>0))}return new ne(i)}static emptyPath(){return new ne([])}}const N1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends ai{construct(t,i,a){return new Pe(t,i,a)}static isValidIdentifier(t){return N1.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===E_}static keyField(){return new Pe([E_])}static fromServerFormat(t){const i=[];let a="",l=0;const h=()=>{if(a.length===0)throw new ht(Q.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new ht(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[l+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ht(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=y,l+=2}else p==="`"?(d=!d,l++):p!=="."||d?(a+=p,l++):(h(),l++)}if(h(),d)throw new ht(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Pe(i)}static emptyPath(){return new Pe([])}}/**
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
 */class _t{constructor(t){this.path=t}static fromPath(t){return new _t(ne.fromString(t))}static fromName(t){return new _t(ne.fromString(t).popFirst(5))}static empty(){return new _t(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ne.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return ne.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _t(new ne(t.slice()))}}/**
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
 */const pl=-1;function M1(s,t){const i=s.toTimestamp().seconds,a=s.toTimestamp().nanoseconds+1,l=Yt.fromTimestamp(a===1e9?new Oe(i+1,0):new Oe(i,a));return new zr(l,_t.empty(),t)}function V1(s){return new zr(s.readTime,s.key,pl)}class zr{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new zr(Yt.min(),_t.empty(),pl)}static max(){return new zr(Yt.max(),_t.empty(),pl)}}function U1(s,t){let i=s.readTime.compareTo(t.readTime);return i!==0?i:(i=_t.comparator(s.documentKey,t.documentKey),i!==0?i:zt(s.largestBatchId,t.largestBatchId))}/**
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
 */const k1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class P1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function tm(s){if(s.code!==Q.FAILED_PRECONDITION||s.message!==k1)throw s;nt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&St(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new G((a,l)=>{this.nextCallback=h=>{this.wrapSuccess(t,h).next(a,l)},this.catchCallback=h=>{this.wrapFailure(i,h).next(a,l)}})}toPromise(){return new Promise((t,i)=>{this.next(t,i)})}wrapUserFunction(t){try{const i=t();return i instanceof G?i:G.resolve(i)}catch(i){return G.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction(()=>t(i)):G.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction(()=>t(i)):G.reject(i)}static resolve(t){return new G((i,a)=>{i(t)})}static reject(t){return new G((i,a)=>{a(t)})}static waitFor(t){return new G((i,a)=>{let l=0,h=0,d=!1;t.forEach(p=>{++l,p.next(()=>{++h,d&&h===l&&i()},y=>a(y))}),d=!0,h===l&&i()})}static or(t){let i=G.resolve(!1);for(const a of t)i=i.next(l=>l?G.resolve(l):a());return i}static forEach(t,i){const a=[];return t.forEach((l,h)=>{a.push(i.call(this,l,h))}),this.waitFor(a)}static mapArray(t,i){return new G((a,l)=>{const h=t.length,d=new Array(h);let p=0;for(let y=0;y<h;y++){const v=y;i(t[v]).next(R=>{d[v]=R,++p,p===h&&a(d)},R=>l(R))}})}static doWhile(t,i){return new G((a,l)=>{const h=()=>{t()===!0?i().next(()=>{h()},l):a()};h()})}}function L1(s){const t=s.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function wl(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class em{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.oe(a),this._e=a=>i.writeSequenceNumber(a))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}em.ae=-1;/**
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
 */const nm=-1;function im(s){return s==null}function Tc(s){return s===0&&1/s==-1/0}function x1(s){return typeof s=="number"&&Number.isInteger(s)&&!Tc(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */const CE="";function z1(s){let t="";for(let i=0;i<s.length;i++)t.length>0&&(t=T_(t)),t=B1(s.get(i),t);return T_(t)}function B1(s,t){let i=t;const a=s.length;for(let l=0;l<a;l++){const h=s.charAt(l);switch(h){case"\0":i+="";break;case CE:i+="";break;default:i+=h}}return i}function T_(s){return s+CE+""}/**
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
 */function A_(s){let t=0;for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&t++;return t}function Ya(s,t){for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&t(i,s[i])}function OE(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}/**
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
 */class rn{constructor(t,i){this.comparator=t,this.root=i||Ue.EMPTY}insert(t,i){return new rn(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(t){return new rn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((i,a)=>(t(i,a),!1))}toString(){const t=[];return this.inorderTraversal((i,a)=>(t.push(`${i}:${a}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ju(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ju(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ju(this.root,t,this.comparator,!0)}}class Ju{constructor(t,i,a,l){this.isReverse=l,this.nodeStack=[];let h=1;for(;!t.isEmpty();)if(h=i?a(t.key,i):1,i&&l&&(h*=-1),h<0)t=this.isReverse?t.left:t.right;else{if(h===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ue{constructor(t,i,a,l,h){this.key=t,this.value=i,this.color=a??Ue.RED,this.left=l??Ue.EMPTY,this.right=h??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,l,h){return new Ue(t??this.key,i??this.value,a??this.color,l??this.left,h??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let l=this;const h=a(t,l.key);return l=h<0?l.copy(null,null,null,l.left.insert(t,i,a),null):h===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return Ue.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw St();const t=this.left.check();if(t!==this.right.check())throw St();return t+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw St()}get value(){throw St()}get color(){throw St()}get left(){throw St()}get right(){throw St()}copy(t,i,a,l,h){return this}insert(t,i,a){return new Ue(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(t){this.comparator=t,this.data=new rn(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((i,a)=>(t(i),!1))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new S_(this.data.getIterator())}getIteratorFrom(t){return new S_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach(a=>{i=i.add(a)}),i}isEqual(t){if(!(t instanceof Le)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,h=a.getNext().key;if(this.comparator(l,h)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(i=>{t.push(i)}),t}toString(){const t=[];return this.forEach(i=>t.push(i)),"SortedSet("+t.toString()+")"}copy(t){const i=new Le(this.comparator);return i.data=t,i}}class S_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bn{constructor(t){this.fields=t,t.sort(Pe.comparator)}static empty(){return new Bn([])}unionWith(t){let i=new Le(Pe.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new Bn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return za(this.fields,t.fields,(i,a)=>i.isEqual(a))}}/**
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
 */class H1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class hi{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(l){try{return atob(l)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new H1("Invalid base64 string: "+h):h}}(t);return new hi(i)}static fromUint8Array(t){const i=function(l){let h="";for(let d=0;d<l.length;++d)h+=String.fromCharCode(l[d]);return h}(t);return new hi(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return zt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}hi.EMPTY_BYTE_STRING=new hi("");const j1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ks(s){if(ie(!!s),typeof s=="string"){let t=0;const i=j1.exec(s);if(ie(!!i),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(s);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:ke(s.seconds),nanos:ke(s.nanos)}}function ke(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Ba(s){return typeof s=="string"?hi.fromBase64String(s):hi.fromUint8Array(s)}/**
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
 */const DE="server_timestamp",NE="__type__",ME="__previous_value__",VE="__local_write_time__";function rm(s){var t,i;return((i=(((t=s==null?void 0:s.mapValue)===null||t===void 0?void 0:t.fields)||{})[NE])===null||i===void 0?void 0:i.stringValue)===DE}function sm(s){const t=s.mapValue.fields[ME];return rm(t)?sm(t):t}function Ac(s){const t=ks(s.mapValue.fields[VE].timestampValue);return new Oe(t.seconds,t.nanos)}/**
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
 */class q1{constructor(t,i,a,l,h,d,p,y,v){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=h,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=y,this.useFetchStreams=v}}const Sc="(default)";class bc{constructor(t,i){this.projectId=t,this.database=i||Sc}static empty(){return new bc("","")}get isDefaultDatabase(){return this.database===Sc}isEqual(t){return t instanceof bc&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const UE="__type__",G1="__max__",tc={mapValue:{}},kE="__vector__",bd="value";function Ps(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?rm(s)?4:K1(s)?9007199254740991:F1(s)?10:11:St()}function fi(s,t){if(s===t)return!0;const i=Ps(s);if(i!==Ps(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===t.booleanValue;case 4:return Ac(s).isEqual(Ac(t));case 3:return function(l,h){if(typeof l.timestampValue=="string"&&typeof h.timestampValue=="string"&&l.timestampValue.length===h.timestampValue.length)return l.timestampValue===h.timestampValue;const d=ks(l.timestampValue),p=ks(h.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos}(s,t);case 5:return s.stringValue===t.stringValue;case 6:return function(l,h){return Ba(l.bytesValue).isEqual(Ba(h.bytesValue))}(s,t);case 7:return s.referenceValue===t.referenceValue;case 8:return function(l,h){return ke(l.geoPointValue.latitude)===ke(h.geoPointValue.latitude)&&ke(l.geoPointValue.longitude)===ke(h.geoPointValue.longitude)}(s,t);case 2:return function(l,h){if("integerValue"in l&&"integerValue"in h)return ke(l.integerValue)===ke(h.integerValue);if("doubleValue"in l&&"doubleValue"in h){const d=ke(l.doubleValue),p=ke(h.doubleValue);return d===p?Tc(d)===Tc(p):isNaN(d)&&isNaN(p)}return!1}(s,t);case 9:return za(s.arrayValue.values||[],t.arrayValue.values||[],fi);case 10:case 11:return function(l,h){const d=l.mapValue.fields||{},p=h.mapValue.fields||{};if(A_(d)!==A_(p))return!1;for(const y in d)if(d.hasOwnProperty(y)&&(p[y]===void 0||!fi(d[y],p[y])))return!1;return!0}(s,t);default:return St()}}function gl(s,t){return(s.values||[]).find(i=>fi(i,t))!==void 0}function Ha(s,t){if(s===t)return 0;const i=Ps(s),a=Ps(t);if(i!==a)return zt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return zt(s.booleanValue,t.booleanValue);case 2:return function(h,d){const p=ke(h.integerValue||h.doubleValue),y=ke(d.integerValue||d.doubleValue);return p<y?-1:p>y?1:p===y?0:isNaN(p)?isNaN(y)?0:-1:1}(s,t);case 3:return b_(s.timestampValue,t.timestampValue);case 4:return b_(Ac(s),Ac(t));case 5:return zt(s.stringValue,t.stringValue);case 6:return function(h,d){const p=Ba(h),y=Ba(d);return p.compareTo(y)}(s.bytesValue,t.bytesValue);case 7:return function(h,d){const p=h.split("/"),y=d.split("/");for(let v=0;v<p.length&&v<y.length;v++){const R=zt(p[v],y[v]);if(R!==0)return R}return zt(p.length,y.length)}(s.referenceValue,t.referenceValue);case 8:return function(h,d){const p=zt(ke(h.latitude),ke(d.latitude));return p!==0?p:zt(ke(h.longitude),ke(d.longitude))}(s.geoPointValue,t.geoPointValue);case 9:return w_(s.arrayValue,t.arrayValue);case 10:return function(h,d){var p,y,v,R;const V=h.fields||{},B=d.fields||{},K=(p=V[bd])===null||p===void 0?void 0:p.arrayValue,$=(y=B[bd])===null||y===void 0?void 0:y.arrayValue,at=zt(((v=K==null?void 0:K.values)===null||v===void 0?void 0:v.length)||0,((R=$==null?void 0:$.values)===null||R===void 0?void 0:R.length)||0);return at!==0?at:w_(K,$)}(s.mapValue,t.mapValue);case 11:return function(h,d){if(h===tc.mapValue&&d===tc.mapValue)return 0;if(h===tc.mapValue)return 1;if(d===tc.mapValue)return-1;const p=h.fields||{},y=Object.keys(p),v=d.fields||{},R=Object.keys(v);y.sort(),R.sort();for(let V=0;V<y.length&&V<R.length;++V){const B=zt(y[V],R[V]);if(B!==0)return B;const K=Ha(p[y[V]],v[R[V]]);if(K!==0)return K}return zt(y.length,R.length)}(s.mapValue,t.mapValue);default:throw St()}}function b_(s,t){if(typeof s=="string"&&typeof t=="string"&&s.length===t.length)return zt(s,t);const i=ks(s),a=ks(t),l=zt(i.seconds,a.seconds);return l!==0?l:zt(i.nanos,a.nanos)}function w_(s,t){const i=s.values||[],a=t.values||[];for(let l=0;l<i.length&&l<a.length;++l){const h=Ha(i[l],a[l]);if(h)return h}return zt(i.length,a.length)}function ja(s){return wd(s)}function wd(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(i){const a=ks(i);return`time(${a.seconds},${a.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(i){return Ba(i).toBase64()}(s.bytesValue):"referenceValue"in s?function(i){return _t.fromName(i).toString()}(s.referenceValue):"geoPointValue"in s?function(i){return`geo(${i.latitude},${i.longitude})`}(s.geoPointValue):"arrayValue"in s?function(i){let a="[",l=!0;for(const h of i.values||[])l?l=!1:a+=",",a+=wd(h);return a+"]"}(s.arrayValue):"mapValue"in s?function(i){const a=Object.keys(i.fields||{}).sort();let l="{",h=!0;for(const d of a)h?h=!1:l+=",",l+=`${d}:${wd(i.fields[d])}`;return l+"}"}(s.mapValue):St()}function lc(s){switch(Ps(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=sm(s);return t?16+lc(t):16;case 5:return 2*s.stringValue.length;case 6:return Ba(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((l,h)=>l+lc(h),0)}(s.arrayValue);case 10:case 11:return function(a){let l=0;return Ya(a.fields,(h,d)=>{l+=h.length+lc(d)}),l}(s.mapValue);default:throw St()}}function Rd(s){return!!s&&"integerValue"in s}function am(s){return!!s&&"arrayValue"in s}function uc(s){return!!s&&"mapValue"in s}function F1(s){var t,i;return((i=(((t=s==null?void 0:s.mapValue)===null||t===void 0?void 0:t.fields)||{})[UE])===null||i===void 0?void 0:i.stringValue)===kE}function ll(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const t={mapValue:{fields:{}}};return Ya(s.mapValue.fields,(i,a)=>t.mapValue.fields[i]=ll(a)),t}if(s.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(s.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=ll(s.arrayValue.values[i]);return t}return Object.assign({},s)}function K1(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===G1}/**
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
 */class zn{constructor(t){this.value=t}static empty(){return new zn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!uc(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=ll(i)}setAll(t){let i=Pe.emptyPath(),a={},l=[];t.forEach((d,p)=>{if(!i.isImmediateParentOf(p)){const y=this.getFieldsMap(i);this.applyChanges(y,a,l),a={},l=[],i=p.popLast()}d?a[p.lastSegment()]=ll(d):l.push(p.lastSegment())});const h=this.getFieldsMap(i);this.applyChanges(h,a,l)}delete(t){const i=this.field(t.popLast());uc(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return fi(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=i.mapValue.fields[t.get(a)];uc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,a){Ya(i,(l,h)=>t[l]=h);for(const l of a)delete t[l]}clone(){return new zn(ll(this.value))}}function PE(s){const t=[];return Ya(s.fields,(i,a)=>{const l=new Pe([i]);if(uc(a)){const h=PE(a.mapValue).fields;if(h.length===0)t.push(l);else for(const d of h)t.push(l.child(d))}else t.push(l)}),new Bn(t)}/**
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
 */class xn{constructor(t,i,a,l,h,d,p){this.key=t,this.documentType=i,this.version=a,this.readTime=l,this.createTime=h,this.data=d,this.documentState=p}static newInvalidDocument(t){return new xn(t,0,Yt.min(),Yt.min(),Yt.min(),zn.empty(),0)}static newFoundDocument(t,i,a,l){return new xn(t,1,i,Yt.min(),a,l,0)}static newNoDocument(t,i){return new xn(t,2,i,Yt.min(),Yt.min(),zn.empty(),0)}static newUnknownDocument(t,i){return new xn(t,3,i,Yt.min(),Yt.min(),zn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual(Yt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=zn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=zn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Yt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wc{constructor(t,i){this.position=t,this.inclusive=i}}function R_(s,t,i){let a=0;for(let l=0;l<s.position.length;l++){const h=t[l],d=s.position[l];if(h.field.isKeyField()?a=_t.comparator(_t.fromName(d.referenceValue),i.key):a=Ha(d,i.data.field(h.field)),h.dir==="desc"&&(a*=-1),a!==0)break}return a}function I_(s,t){if(s===null)return t===null;if(t===null||s.inclusive!==t.inclusive||s.position.length!==t.position.length)return!1;for(let i=0;i<s.position.length;i++)if(!fi(s.position[i],t.position[i]))return!1;return!0}/**
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
 */class Rc{constructor(t,i="asc"){this.field=t,this.dir=i}}function Y1(s,t){return s.dir===t.dir&&s.field.isEqual(t.field)}/**
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
 */class LE{}class Ce extends LE{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new X1(t,i,a):i==="array-contains"?new W1(t,a):i==="in"?new J1(t,a):i==="not-in"?new tI(t,a):i==="array-contains-any"?new eI(t,a):new Ce(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new $1(t,a):new Z1(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison(Ha(i,this.value)):i!==null&&Ps(this.value)===Ps(i)&&this.matchesComparison(Ha(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return St()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Br extends LE{constructor(t,i){super(),this.filters=t,this.op=i,this.ce=null}static create(t,i){return new Br(t,i)}matches(t){return xE(this)?this.filters.find(i=>!i.matches(t))===void 0:this.filters.find(i=>i.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,i)=>t.concat(i.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function xE(s){return s.op==="and"}function zE(s){return Q1(s)&&xE(s)}function Q1(s){for(const t of s.filters)if(t instanceof Br)return!1;return!0}function Id(s){if(s instanceof Ce)return s.field.canonicalString()+s.op.toString()+ja(s.value);if(zE(s))return s.filters.map(t=>Id(t)).join(",");{const t=s.filters.map(i=>Id(i)).join(",");return`${s.op}(${t})`}}function BE(s,t){return s instanceof Ce?function(a,l){return l instanceof Ce&&a.op===l.op&&a.field.isEqual(l.field)&&fi(a.value,l.value)}(s,t):s instanceof Br?function(a,l){return l instanceof Br&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce((h,d,p)=>h&&BE(d,l.filters[p]),!0):!1}(s,t):void St()}function HE(s){return s instanceof Ce?function(i){return`${i.field.canonicalString()} ${i.op} ${ja(i.value)}`}(s):s instanceof Br?function(i){return i.op.toString()+" {"+i.getFilters().map(HE).join(" ,")+"}"}(s):"Filter"}class X1 extends Ce{constructor(t,i,a){super(t,i,a),this.key=_t.fromName(a.referenceValue)}matches(t){const i=_t.comparator(t.key,this.key);return this.matchesComparison(i)}}class $1 extends Ce{constructor(t,i){super(t,"in",i),this.keys=jE("in",i)}matches(t){return this.keys.some(i=>i.isEqual(t.key))}}class Z1 extends Ce{constructor(t,i){super(t,"not-in",i),this.keys=jE("not-in",i)}matches(t){return!this.keys.some(i=>i.isEqual(t.key))}}function jE(s,t){var i;return(((i=t.arrayValue)===null||i===void 0?void 0:i.values)||[]).map(a=>_t.fromName(a.referenceValue))}class W1 extends Ce{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return am(i)&&gl(i.arrayValue,this.value)}}class J1 extends Ce{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&gl(this.value.arrayValue,i)}}class tI extends Ce{constructor(t,i){super(t,"not-in",i)}matches(t){if(gl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&!gl(this.value.arrayValue,i)}}class eI extends Ce{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!am(i)||!i.arrayValue.values)&&i.arrayValue.values.some(a=>gl(this.value.arrayValue,a))}}/**
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
 */class nI{constructor(t,i=null,a=[],l=[],h=null,d=null,p=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=h,this.startAt=d,this.endAt=p,this.le=null}}function C_(s,t=null,i=[],a=[],l=null,h=null,d=null){return new nI(s,t,i,a,l,h,d)}function om(s){const t=Kt(s);if(t.le===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map(a=>Id(a)).join(","),i+="|ob:",i+=t.orderBy.map(a=>function(h){return h.field.canonicalString()+h.dir}(a)).join(","),im(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>ja(a)).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>ja(a)).join(",")),t.le=i}return t.le}function lm(s,t){if(s.limit!==t.limit||s.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<s.orderBy.length;i++)if(!Y1(s.orderBy[i],t.orderBy[i]))return!1;if(s.filters.length!==t.filters.length)return!1;for(let i=0;i<s.filters.length;i++)if(!BE(s.filters[i],t.filters[i]))return!1;return s.collectionGroup===t.collectionGroup&&!!s.path.isEqual(t.path)&&!!I_(s.startAt,t.startAt)&&I_(s.endAt,t.endAt)}/**
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
 */class Hc{constructor(t,i=null,a=[],l=[],h=null,d="F",p=null,y=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=h,this.limitType=d,this.startAt=p,this.endAt=y,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function iI(s,t,i,a,l,h,d,p){return new Hc(s,t,i,a,l,h,d,p)}function rI(s){return new Hc(s)}function O_(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function sI(s){return s.collectionGroup!==null}function ul(s){const t=Kt(s);if(t.he===null){t.he=[];const i=new Set;for(const h of t.explicitOrderBy)t.he.push(h),i.add(h.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new Le(Pe.comparator);return d.filters.forEach(y=>{y.getFlattenedFilters().forEach(v=>{v.isInequality()&&(p=p.add(v.field))})}),p})(t).forEach(h=>{i.has(h.canonicalString())||h.isKeyField()||t.he.push(new Rc(h,a))}),i.has(Pe.keyField().canonicalString())||t.he.push(new Rc(Pe.keyField(),a))}return t.he}function Cs(s){const t=Kt(s);return t.Pe||(t.Pe=aI(t,ul(s))),t.Pe}function aI(s,t){if(s.limitType==="F")return C_(s.path,s.collectionGroup,t,s.filters,s.limit,s.startAt,s.endAt);{t=t.map(l=>{const h=l.dir==="desc"?"asc":"desc";return new Rc(l.field,h)});const i=s.endAt?new wc(s.endAt.position,s.endAt.inclusive):null,a=s.startAt?new wc(s.startAt.position,s.startAt.inclusive):null;return C_(s.path,s.collectionGroup,t,s.filters,s.limit,i,a)}}function Cd(s,t,i){return new Hc(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),t,i,s.startAt,s.endAt)}function qE(s,t){return lm(Cs(s),Cs(t))&&s.limitType===t.limitType}function GE(s){return`${om(Cs(s))}|lt:${s.limitType}`}function nl(s){return`Query(target=${function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map(l=>HE(l)).join(", ")}]`),im(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map(l=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(l)).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map(l=>ja(l)).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map(l=>ja(l)).join(",")),`Target(${a})`}(Cs(s))}; limitType=${s.limitType})`}function um(s,t){return t.isFoundDocument()&&function(a,l){const h=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(h):_t.isDocumentKey(a.path)?a.path.isEqual(h):a.path.isImmediateParentOf(h)}(s,t)&&function(a,l){for(const h of ul(a))if(!h.field.isKeyField()&&l.data.field(h.field)===null)return!1;return!0}(s,t)&&function(a,l){for(const h of a.filters)if(!h.matches(l))return!1;return!0}(s,t)&&function(a,l){return!(a.startAt&&!function(d,p,y){const v=R_(d,p,y);return d.inclusive?v<=0:v<0}(a.startAt,ul(a),l)||a.endAt&&!function(d,p,y){const v=R_(d,p,y);return d.inclusive?v>=0:v>0}(a.endAt,ul(a),l))}(s,t)}function oI(s){return(t,i)=>{let a=!1;for(const l of ul(s)){const h=lI(l,t,i);if(h!==0)return h;a=a||l.field.isKeyField()}return 0}}function lI(s,t,i){const a=s.field.isKeyField()?_t.comparator(t.key,i.key):function(h,d,p){const y=d.data.field(h),v=p.data.field(h);return y!==null&&v!==null?Ha(y,v):St()}(s.field,t,i);switch(s.dir){case"asc":return a;case"desc":return-1*a;default:return St()}}/**
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
 */class Bs{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[l,h]of a)if(this.equalsFn(l,t))return h}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let h=0;h<l.length;h++)if(this.equalsFn(l[h][0],t))return void(l[h]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){Ya(this.inner,(i,a)=>{for(const[l,h]of a)t(l,h)})}isEmpty(){return OE(this.inner)}size(){return this.innerSize}}/**
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
 */const uI=new rn(_t.comparator);function Ic(){return uI}const FE=new rn(_t.comparator);function ec(...s){let t=FE;for(const i of s)t=t.insert(i.key,i);return t}function KE(s){let t=FE;return s.forEach((i,a)=>t=t.insert(i,a.overlayedDocument)),t}function ws(){return cl()}function YE(){return cl()}function cl(){return new Bs(s=>s.toString(),(s,t)=>s.isEqual(t))}const cI=new rn(_t.comparator),hI=new Le(_t.comparator);function qe(...s){let t=hI;for(const i of s)t=t.add(i);return t}const fI=new Le(zt);function dI(){return fI}/**
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
 */function cm(s,t){if(s.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(t)?"-0":t}}function QE(s){return{integerValue:""+s}}function mI(s,t){return x1(t)?QE(t):cm(s,t)}/**
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
 */class jc{constructor(){this._=void 0}}function pI(s,t,i){return s instanceof Cc?function(l,h){const d={fields:{[NE]:{stringValue:DE},[VE]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return h&&rm(h)&&(h=sm(h)),h&&(d.fields[ME]=h),{mapValue:d}}(i,t):s instanceof yl?$E(s,t):s instanceof _l?ZE(s,t):function(l,h){const d=XE(l,h),p=D_(d)+D_(l.Ie);return Rd(d)&&Rd(l.Ie)?QE(p):cm(l.serializer,p)}(s,t)}function gI(s,t,i){return s instanceof yl?$E(s,t):s instanceof _l?ZE(s,t):i}function XE(s,t){return s instanceof Oc?function(a){return Rd(a)||function(h){return!!h&&"doubleValue"in h}(a)}(t)?t:{integerValue:0}:null}class Cc extends jc{}class yl extends jc{constructor(t){super(),this.elements=t}}function $E(s,t){const i=WE(t);for(const a of s.elements)i.some(l=>fi(l,a))||i.push(a);return{arrayValue:{values:i}}}class _l extends jc{constructor(t){super(),this.elements=t}}function ZE(s,t){let i=WE(t);for(const a of s.elements)i=i.filter(l=>!fi(l,a));return{arrayValue:{values:i}}}class Oc extends jc{constructor(t,i){super(),this.serializer=t,this.Ie=i}}function D_(s){return ke(s.integerValue||s.doubleValue)}function WE(s){return am(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function yI(s,t){return s.field.isEqual(t.field)&&function(a,l){return a instanceof yl&&l instanceof yl||a instanceof _l&&l instanceof _l?za(a.elements,l.elements,fi):a instanceof Oc&&l instanceof Oc?fi(a.Ie,l.Ie):a instanceof Cc&&l instanceof Cc}(s.transform,t.transform)}class _I{constructor(t,i){this.version=t,this.transformResults=i}}class Gi{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new Gi}static exists(t){return new Gi(void 0,t)}static updateTime(t){return new Gi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cc(s,t){return s.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(s.updateTime):s.exists===void 0||s.exists===t.isFoundDocument()}class qc{}function JE(s,t){if(!s.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return s.isNoDocument()?new e0(s.key,Gi.none()):new Rl(s.key,s.data,Gi.none());{const i=s.data,a=zn.empty();let l=new Le(Pe.comparator);for(let h of t.fields)if(!l.has(h)){let d=i.field(h);d===null&&h.length>1&&(h=h.popLast(),d=i.field(h)),d===null?a.delete(h):a.set(h,d),l=l.add(h)}return new Hs(s.key,a,new Bn(l.toArray()),Gi.none())}}function vI(s,t,i){s instanceof Rl?function(l,h,d){const p=l.value.clone(),y=M_(l.fieldTransforms,h,d.transformResults);p.setAll(y),h.convertToFoundDocument(d.version,p).setHasCommittedMutations()}(s,t,i):s instanceof Hs?function(l,h,d){if(!cc(l.precondition,h))return void h.convertToUnknownDocument(d.version);const p=M_(l.fieldTransforms,h,d.transformResults),y=h.data;y.setAll(t0(l)),y.setAll(p),h.convertToFoundDocument(d.version,y).setHasCommittedMutations()}(s,t,i):function(l,h,d){h.convertToNoDocument(d.version).setHasCommittedMutations()}(0,t,i)}function hl(s,t,i,a){return s instanceof Rl?function(h,d,p,y){if(!cc(h.precondition,d))return p;const v=h.value.clone(),R=V_(h.fieldTransforms,y,d);return v.setAll(R),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),null}(s,t,i,a):s instanceof Hs?function(h,d,p,y){if(!cc(h.precondition,d))return p;const v=V_(h.fieldTransforms,y,d),R=d.data;return R.setAll(t0(h)),R.setAll(v),d.convertToFoundDocument(d.version,R).setHasLocalMutations(),p===null?null:p.unionWith(h.fieldMask.fields).unionWith(h.fieldTransforms.map(V=>V.field))}(s,t,i,a):function(h,d,p){return cc(h.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p}(s,t,i)}function EI(s,t){let i=null;for(const a of s.fieldTransforms){const l=t.data.field(a.field),h=XE(a.transform,l||null);h!=null&&(i===null&&(i=zn.empty()),i.set(a.field,h))}return i||null}function N_(s,t){return s.type===t.type&&!!s.key.isEqual(t.key)&&!!s.precondition.isEqual(t.precondition)&&!!function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&za(a,l,(h,d)=>yI(h,d))}(s.fieldTransforms,t.fieldTransforms)&&(s.type===0?s.value.isEqual(t.value):s.type!==1||s.data.isEqual(t.data)&&s.fieldMask.isEqual(t.fieldMask))}class Rl extends qc{constructor(t,i,a,l=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Hs extends qc{constructor(t,i,a,l,h=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=h,this.type=1}getFieldMask(){return this.fieldMask}}function t0(s){const t=new Map;return s.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const a=s.data.field(i);t.set(i,a)}}),t}function M_(s,t,i){const a=new Map;ie(s.length===i.length);for(let l=0;l<i.length;l++){const h=s[l],d=h.transform,p=t.data.field(h.field);a.set(h.field,gI(d,p,i[l]))}return a}function V_(s,t,i){const a=new Map;for(const l of s){const h=l.transform,d=i.data.field(l.field);a.set(l.field,pI(h,d,t))}return a}class e0 extends qc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TI extends qc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class AI{constructor(t,i,a,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const h=this.mutations[l];h.key.isEqual(t.key)&&vI(h,t,a[l])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=hl(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=hl(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=YE();return this.mutations.forEach(l=>{const h=t.get(l.key),d=h.overlayedDocument;let p=this.applyToLocalView(d,h.mutatedFields);p=i.has(l.key)?null:p;const y=JE(d,p);y!==null&&a.set(l.key,y),d.isValidDocument()||d.convertToNoDocument(Yt.min())}),a}keys(){return this.mutations.reduce((t,i)=>t.add(i.key),qe())}isEqual(t){return this.batchId===t.batchId&&za(this.mutations,t.mutations,(i,a)=>N_(i,a))&&za(this.baseMutations,t.baseMutations,(i,a)=>N_(i,a))}}class hm{constructor(t,i,a,l){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(t,i,a){ie(t.mutations.length===a.length);let l=function(){return cI}();const h=t.mutations;for(let d=0;d<h.length;d++)l=l.insert(h[d].key,a[d].version);return new hm(t,i,a,l)}}/**
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
 */class SI{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var fe,Dt;function bI(s){switch(s){case Q.OK:return St();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return St()}}function wI(s){if(s===void 0)return Us("GRPC error has no .code"),Q.UNKNOWN;switch(s){case fe.OK:return Q.OK;case fe.CANCELLED:return Q.CANCELLED;case fe.UNKNOWN:return Q.UNKNOWN;case fe.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case fe.INTERNAL:return Q.INTERNAL;case fe.UNAVAILABLE:return Q.UNAVAILABLE;case fe.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case fe.NOT_FOUND:return Q.NOT_FOUND;case fe.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case fe.ABORTED:return Q.ABORTED;case fe.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case fe.DATA_LOSS:return Q.DATA_LOSS;default:return St()}}(Dt=fe||(fe={}))[Dt.OK=0]="OK",Dt[Dt.CANCELLED=1]="CANCELLED",Dt[Dt.UNKNOWN=2]="UNKNOWN",Dt[Dt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Dt[Dt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Dt[Dt.NOT_FOUND=5]="NOT_FOUND",Dt[Dt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Dt[Dt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Dt[Dt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Dt[Dt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Dt[Dt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Dt[Dt.ABORTED=10]="ABORTED",Dt[Dt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Dt[Dt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Dt[Dt.INTERNAL=13]="INTERNAL",Dt[Dt.UNAVAILABLE=14]="UNAVAILABLE",Dt[Dt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Wd([4294967295,4294967295],0);class RI{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function Od(s,t){return s.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function II(s,t){return s.useProto3Json?t.toBase64():t.toUint8Array()}function CI(s,t){return Od(s,t.toTimestamp())}function xa(s){return ie(!!s),Yt.fromTimestamp(function(i){const a=ks(i);return new Oe(a.seconds,a.nanos)}(s))}function n0(s,t){return Dd(s,t).canonicalString()}function Dd(s,t){const i=function(l){return new ne(["projects",l.projectId,"databases",l.database])}(s).child("documents");return t===void 0?i:i.child(t)}function OI(s){const t=ne.fromString(s);return ie(LI(t)),t}function Nd(s,t){return n0(s.databaseId,t.path)}function DI(s){const t=OI(s);return t.length===4?ne.emptyPath():MI(t)}function NI(s){return new ne(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function MI(s){return ie(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}function U_(s,t,i){return{name:Nd(s,t),fields:i.value.mapValue.fields}}function VI(s,t){let i;if(t instanceof Rl)i={update:U_(s,t.key,t.value)};else if(t instanceof e0)i={delete:Nd(s,t.key)};else if(t instanceof Hs)i={update:U_(s,t.key,t.data),updateMask:PI(t.fieldMask)};else{if(!(t instanceof TI))return St();i={verify:Nd(s,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(a=>function(h,d){const p=d.transform;if(p instanceof Cc)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof yl)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof _l)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Oc)return{fieldPath:d.field.canonicalString(),increment:p.Ie};throw St()}(0,a))),t.precondition.isNone||(i.currentDocument=function(l,h){return h.updateTime!==void 0?{updateTime:CI(l,h.updateTime)}:h.exists!==void 0?{exists:h.exists}:St()}(s,t.precondition)),i}function UI(s,t){return s&&s.length>0?(ie(t!==void 0),s.map(i=>function(l,h){let d=l.updateTime?xa(l.updateTime):xa(h);return d.isEqual(Yt.min())&&(d=xa(h)),new _I(d,l.transformResults||[])}(i,t))):[]}function kI(s){let t=DI(s.parent);const i=s.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){ie(a===1);const R=i.from[0];R.allDescendants?l=R.collectionId:t=t.child(R.collectionId)}let h=[];i.where&&(h=function(V){const B=i0(V);return B instanceof Br&&zE(B)?B.getFilters():[B]}(i.where));let d=[];i.orderBy&&(d=function(V){return V.map(B=>function($){return new Rc(Va($.field),function(tt){switch(tt){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(B))}(i.orderBy));let p=null;i.limit&&(p=function(V){let B;return B=typeof V=="object"?V.value:V,im(B)?null:B}(i.limit));let y=null;i.startAt&&(y=function(V){const B=!!V.before,K=V.values||[];return new wc(K,B)}(i.startAt));let v=null;return i.endAt&&(v=function(V){const B=!V.before,K=V.values||[];return new wc(K,B)}(i.endAt)),iI(t,l,d,h,p,"F",y,v)}function i0(s){return s.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=Va(i.unaryFilter.field);return Ce.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=Va(i.unaryFilter.field);return Ce.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const h=Va(i.unaryFilter.field);return Ce.create(h,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Va(i.unaryFilter.field);return Ce.create(d,"!=",{nullValue:"NULL_VALUE"});default:return St()}}(s):s.fieldFilter!==void 0?function(i){return Ce.create(Va(i.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return St()}}(i.fieldFilter.op),i.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(i){return Br.create(i.compositeFilter.filters.map(a=>i0(a)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return St()}}(i.compositeFilter.op))}(s):St()}function Va(s){return Pe.fromServerFormat(s.fieldPath)}function PI(s){const t=[];return s.fields.forEach(i=>t.push(i.canonicalString())),{fieldPaths:t}}function LI(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class xI{constructor(t){this.Tt=t}}function zI(s){const t=kI({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Cd(t,t.limit,"L"):t}/**
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
 */class BI{constructor(){this.Tn=new HI}addToCollectionParentIndex(t,i){return this.Tn.add(i),G.resolve()}getCollectionParents(t,i){return G.resolve(this.Tn.getEntries(i))}addFieldIndex(t,i){return G.resolve()}deleteFieldIndex(t,i){return G.resolve()}deleteAllFieldIndexes(t){return G.resolve()}createTargetIndexes(t,i){return G.resolve()}getDocumentsMatchingTarget(t,i){return G.resolve(null)}getIndexType(t,i){return G.resolve(0)}getFieldIndexes(t,i){return G.resolve([])}getNextCollectionGroupToUpdate(t){return G.resolve(null)}getMinOffset(t,i){return G.resolve(zr.min())}getMinOffsetFromCollectionGroup(t,i){return G.resolve(zr.min())}updateCollectionGroup(t,i,a){return G.resolve()}updateIndexEntries(t,i){return G.resolve()}}class HI{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i]||new Le(ne.comparator),h=!l.has(a);return this.index[i]=l.add(a),h}has(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(t){return(this.index[t]||new Le(ne.comparator)).toArray()}}/**
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
 */const k_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},r0=41943040;class en{static withCacheSize(t){return new en(t,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
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
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(r0,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
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
 */class qa{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new qa(0)}static Un(){return new qa(-1)}}/**
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
 */const P_="LruGarbageCollector",jI=1048576;function L_([s,t],[i,a]){const l=zt(s,i);return l===0?zt(t,a):l}class qI{constructor(t){this.Hn=t,this.buffer=new Le(L_),this.Jn=0}Yn(){return++this.Jn}Zn(t){const i=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();L_(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class GI{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){nt(P_,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){wl(i)?nt(P_,"Ignoring IndexedDB error during garbage collection: ",i):await tm(i)}await this.er(3e5)})}}class FI{constructor(t,i){this.tr=t,this.params=i}calculateTargetCount(t,i){return this.tr.nr(t).next(a=>Math.floor(i/100*a))}nthSequenceNumber(t,i){if(i===0)return G.resolve(em.ae);const a=new qI(i);return this.tr.forEachTarget(t,l=>a.Zn(l.sequenceNumber)).next(()=>this.tr.rr(t,l=>a.Zn(l))).next(()=>a.maxValue)}removeTargets(t,i,a){return this.tr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.tr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(nt("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(k_)):this.getCacheSize(t).next(a=>a<this.params.cacheSizeCollectionThreshold?(nt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),k_):this.ir(t,i))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,i){let a,l,h,d,p,y,v;const R=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(V=>(V>this.params.maximumSequenceNumbersToCollect?(nt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${V}`),l=this.params.maximumSequenceNumbersToCollect):l=V,d=Date.now(),this.nthSequenceNumber(t,l))).next(V=>(a=V,p=Date.now(),this.removeTargets(t,a,i))).next(V=>(h=V,y=Date.now(),this.removeOrphanedDocuments(t,a))).next(V=>(v=Date.now(),Ma()<=bt.DEBUG&&nt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-R}ms
	Determined least recently used ${l} in `+(p-d)+`ms
	Removed ${h} targets in `+(y-p)+`ms
	Removed ${V} documents in `+(v-y)+`ms
Total Duration: ${v-R}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:h,documentsRemoved:V})))}}function KI(s,t){return new FI(s,t)}/**
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
 */class YI{constructor(){this.changes=new Bs(t=>t.toString(),(t,i)=>t.isEqual(i)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,xn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?G.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class QI{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
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
 */class XI{constructor(t,i,a,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next(l=>(a=l,this.remoteDocumentCache.getEntry(t,i))).next(l=>(a!==null&&hl(a.mutation,l,Bn.empty(),Oe.now()),l))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.getLocalViewOfDocuments(t,a,qe()).next(()=>a))}getLocalViewOfDocuments(t,i,a=qe()){const l=ws();return this.populateOverlays(t,l,i).next(()=>this.computeViews(t,i,l,a).next(h=>{let d=ec();return h.forEach((p,y)=>{d=d.insert(p,y.overlayedDocument)}),d}))}getOverlayedDocuments(t,i){const a=ws();return this.populateOverlays(t,a,i).next(()=>this.computeViews(t,i,a,qe()))}populateOverlays(t,i,a){const l=[];return a.forEach(h=>{i.has(h)||l.push(h)}),this.documentOverlayCache.getOverlays(t,l).next(h=>{h.forEach((d,p)=>{i.set(d,p)})})}computeViews(t,i,a,l){let h=Ic();const d=cl(),p=function(){return cl()}();return i.forEach((y,v)=>{const R=a.get(v.key);l.has(v.key)&&(R===void 0||R.mutation instanceof Hs)?h=h.insert(v.key,v):R!==void 0?(d.set(v.key,R.mutation.getFieldMask()),hl(R.mutation,v,R.mutation.getFieldMask(),Oe.now())):d.set(v.key,Bn.empty())}),this.recalculateAndSaveOverlays(t,h).next(y=>(y.forEach((v,R)=>d.set(v,R)),i.forEach((v,R)=>{var V;return p.set(v,new QI(R,(V=d.get(v))!==null&&V!==void 0?V:null))}),p))}recalculateAndSaveOverlays(t,i){const a=cl();let l=new rn((d,p)=>d-p),h=qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next(d=>{for(const p of d)p.keys().forEach(y=>{const v=i.get(y);if(v===null)return;let R=a.get(y)||Bn.empty();R=p.applyToLocalView(v,R),a.set(y,R);const V=(l.get(p.batchId)||qe()).add(y);l=l.insert(p.batchId,V)})}).next(()=>{const d=[],p=l.getReverseIterator();for(;p.hasNext();){const y=p.getNext(),v=y.key,R=y.value,V=YE();R.forEach(B=>{if(!h.has(B)){const K=JE(i.get(B),a.get(B));K!==null&&V.set(B,K),h=h.add(B)}}),d.push(this.documentOverlayCache.saveOverlays(t,v,V))}return G.waitFor(d)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.recalculateAndSaveOverlays(t,a))}getDocumentsMatchingQuery(t,i,a,l){return function(d){return _t.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):sI(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,l):this.getDocumentsMatchingCollectionQuery(t,i,a,l)}getNextDocuments(t,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,l).next(h=>{const d=l-h.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,l-h.size):G.resolve(ws());let p=pl,y=h;return d.next(v=>G.forEach(v,(R,V)=>(p<V.largestBatchId&&(p=V.largestBatchId),h.get(R)?G.resolve():this.remoteDocumentCache.getEntry(t,R).next(B=>{y=y.insert(R,B)}))).next(()=>this.populateOverlays(t,v,h)).next(()=>this.computeViews(t,y,v,qe())).next(R=>({batchId:p,changes:KE(R)})))})}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new _t(i)).next(a=>{let l=ec();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l})}getDocumentsMatchingCollectionGroupQuery(t,i,a,l){const h=i.collectionGroup;let d=ec();return this.indexManager.getCollectionParents(t,h).next(p=>G.forEach(p,y=>{const v=function(V,B){return new Hc(B,null,V.explicitOrderBy.slice(),V.filters.slice(),V.limit,V.limitType,V.startAt,V.endAt)}(i,y.child(h));return this.getDocumentsMatchingCollectionQuery(t,v,a,l).next(R=>{R.forEach((V,B)=>{d=d.insert(V,B)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(t,i,a,l){let h;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next(d=>(h=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,h,l))).next(d=>{h.forEach((y,v)=>{const R=v.getKey();d.get(R)===null&&(d=d.insert(R,xn.newInvalidDocument(R)))});let p=ec();return d.forEach((y,v)=>{const R=h.get(y);R!==void 0&&hl(R.mutation,v,Bn.empty(),Oe.now()),um(i,v)&&(p=p.insert(y,v))}),p})}}/**
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
 */class $I{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,i){return G.resolve(this.dr.get(i))}saveBundleMetadata(t,i){return this.dr.set(i.id,function(l){return{id:l.id,version:l.version,createTime:xa(l.createTime)}}(i)),G.resolve()}getNamedQuery(t,i){return G.resolve(this.Ar.get(i))}saveNamedQuery(t,i){return this.Ar.set(i.name,function(l){return{name:l.name,query:zI(l.bundledQuery),readTime:xa(l.readTime)}}(i)),G.resolve()}}/**
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
 */class ZI{constructor(){this.overlays=new rn(_t.comparator),this.Rr=new Map}getOverlay(t,i){return G.resolve(this.overlays.get(i))}getOverlays(t,i){const a=ws();return G.forEach(i,l=>this.getOverlay(t,l).next(h=>{h!==null&&a.set(l,h)})).next(()=>a)}saveOverlays(t,i,a){return a.forEach((l,h)=>{this.Et(t,i,h)}),G.resolve()}removeOverlaysForBatchId(t,i,a){const l=this.Rr.get(a);return l!==void 0&&(l.forEach(h=>this.overlays=this.overlays.remove(h)),this.Rr.delete(a)),G.resolve()}getOverlaysForCollection(t,i,a){const l=ws(),h=i.length+1,d=new _t(i.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const y=p.getNext().value,v=y.getKey();if(!i.isPrefixOf(v.path))break;v.path.length===h&&y.largestBatchId>a&&l.set(y.getKey(),y)}return G.resolve(l)}getOverlaysForCollectionGroup(t,i,a,l){let h=new rn((v,R)=>v-R);const d=this.overlays.getIterator();for(;d.hasNext();){const v=d.getNext().value;if(v.getKey().getCollectionGroup()===i&&v.largestBatchId>a){let R=h.get(v.largestBatchId);R===null&&(R=ws(),h=h.insert(v.largestBatchId,R)),R.set(v.getKey(),v)}}const p=ws(),y=h.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((v,R)=>p.set(v,R)),!(p.size()>=l)););return G.resolve(p)}Et(t,i,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.Rr.get(l.largestBatchId).delete(a.key);this.Rr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new SI(i,a));let h=this.Rr.get(i);h===void 0&&(h=qe(),this.Rr.set(i,h)),this.Rr.set(i,h.add(a.key))}}/**
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
 */class WI{constructor(){this.sessionToken=hi.EMPTY_BYTE_STRING}getSessionToken(t){return G.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,G.resolve()}}/**
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
 */class fm{constructor(){this.Vr=new Le(Ie.mr),this.gr=new Le(Ie.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,i){const a=new Ie(t,i);this.Vr=this.Vr.add(a),this.gr=this.gr.add(a)}yr(t,i){t.forEach(a=>this.addReference(a,i))}removeReference(t,i){this.wr(new Ie(t,i))}br(t,i){t.forEach(a=>this.removeReference(a,i))}Sr(t){const i=new _t(new ne([])),a=new Ie(i,t),l=new Ie(i,t+1),h=[];return this.gr.forEachInRange([a,l],d=>{this.wr(d),h.push(d.key)}),h}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const i=new _t(new ne([])),a=new Ie(i,t),l=new Ie(i,t+1);let h=qe();return this.gr.forEachInRange([a,l],d=>{h=h.add(d.key)}),h}containsKey(t){const i=new Ie(t,0),a=this.Vr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class Ie{constructor(t,i){this.key=t,this.Cr=i}static mr(t,i){return _t.comparator(t.key,i.key)||zt(t.Cr,i.Cr)}static pr(t,i){return zt(t.Cr,i.Cr)||_t.comparator(t.key,i.key)}}/**
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
 */class JI{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.Fr=1,this.Mr=new Le(Ie.mr)}checkEmpty(t){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,l){const h=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new AI(h,i,a,l);this.mutationQueue.push(d);for(const p of l)this.Mr=this.Mr.add(new Ie(p.key,h)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return G.resolve(d)}lookupMutationBatch(t,i){return G.resolve(this.Or(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,l=this.Nr(a),h=l<0?0:l;return G.resolve(this.mutationQueue.length>h?this.mutationQueue[h]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?nm:this.Fr-1)}getAllMutationBatches(t){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new Ie(i,0),l=new Ie(i,Number.POSITIVE_INFINITY),h=[];return this.Mr.forEachInRange([a,l],d=>{const p=this.Or(d.Cr);h.push(p)}),G.resolve(h)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new Le(zt);return i.forEach(l=>{const h=new Ie(l,0),d=new Ie(l,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([h,d],p=>{a=a.add(p.Cr)})}),G.resolve(this.Br(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,l=a.length+1;let h=a;_t.isDocumentKey(h)||(h=h.child(""));const d=new Ie(new _t(h),0);let p=new Le(zt);return this.Mr.forEachWhile(y=>{const v=y.key.path;return!!a.isPrefixOf(v)&&(v.length===l&&(p=p.add(y.Cr)),!0)},d),G.resolve(this.Br(p))}Br(t){const i=[];return t.forEach(a=>{const l=this.Or(a);l!==null&&i.push(l)}),i}removeMutationBatch(t,i){ie(this.Lr(i.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Mr;return G.forEach(i.mutations,l=>{const h=new Ie(l.key,i.batchId);return a=a.delete(h),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Mr=a})}qn(t){}containsKey(t,i){const a=new Ie(i,0),l=this.Mr.firstAfterOrEqual(a);return G.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,G.resolve()}Lr(t,i){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const i=this.Nr(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class tC{constructor(t){this.kr=t,this.docs=function(){return new rn(_t.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,l=this.docs.get(a),h=l?l.size:0,d=this.kr(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-h,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return G.resolve(a?a.document.mutableCopy():xn.newInvalidDocument(i))}getEntries(t,i){let a=Ic();return i.forEach(l=>{const h=this.docs.get(l);a=a.insert(l,h?h.document.mutableCopy():xn.newInvalidDocument(l))}),G.resolve(a)}getDocumentsMatchingQuery(t,i,a,l){let h=Ic();const d=i.path,p=new _t(d.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(p);for(;y.hasNext();){const{key:v,value:{document:R}}=y.getNext();if(!d.isPrefixOf(v.path))break;v.path.length>d.length+1||U1(V1(R),a)<=0||(l.has(R.key)||um(i,R))&&(h=h.insert(R.key,R.mutableCopy()))}return G.resolve(h)}getAllFromCollectionGroup(t,i,a,l){St()}qr(t,i){return G.forEach(this.docs,a=>i(a))}newChangeBuffer(t){return new eC(this)}getSize(t){return G.resolve(this.size)}}class eC extends YI{constructor(t){super(),this.Ir=t}applyChanges(t){const i=[];return this.changes.forEach((a,l)=>{l.isValidDocument()?i.push(this.Ir.addEntry(t,l)):this.Ir.removeEntry(a)}),G.waitFor(i)}getFromCache(t,i){return this.Ir.getEntry(t,i)}getAllFromCache(t,i){return this.Ir.getEntries(t,i)}}/**
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
 */class nC{constructor(t){this.persistence=t,this.Qr=new Bs(i=>om(i),lm),this.lastRemoteSnapshotVersion=Yt.min(),this.highestTargetId=0,this.$r=0,this.Kr=new fm,this.targetCount=0,this.Ur=qa.Kn()}forEachTarget(t,i){return this.Qr.forEach((a,l)=>i(l)),G.resolve()}getLastRemoteSnapshotVersion(t){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return G.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.$r&&(this.$r=i),G.resolve()}zn(t){this.Qr.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.Ur=new qa(i),this.highestTargetId=i),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,i){return this.zn(i),this.targetCount+=1,G.resolve()}updateTargetData(t,i){return this.zn(i),G.resolve()}removeTargetData(t,i){return this.Qr.delete(i.target),this.Kr.Sr(i.targetId),this.targetCount-=1,G.resolve()}removeTargets(t,i,a){let l=0;const h=[];return this.Qr.forEach((d,p)=>{p.sequenceNumber<=i&&a.get(p.targetId)===null&&(this.Qr.delete(d),h.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)}),G.waitFor(h).next(()=>l)}getTargetCount(t){return G.resolve(this.targetCount)}getTargetData(t,i){const a=this.Qr.get(i)||null;return G.resolve(a)}addMatchingKeys(t,i,a){return this.Kr.yr(i,a),G.resolve()}removeMatchingKeys(t,i,a){this.Kr.br(i,a);const l=this.persistence.referenceDelegate,h=[];return l&&i.forEach(d=>{h.push(l.markPotentiallyOrphaned(t,d))}),G.waitFor(h)}removeMatchingKeysForTargetId(t,i){return this.Kr.Sr(i),G.resolve()}getMatchingKeysForTargetId(t,i){const a=this.Kr.vr(i);return G.resolve(a)}containsKey(t,i){return G.resolve(this.Kr.containsKey(i))}}/**
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
 */class s0{constructor(t,i){this.Wr={},this.overlays={},this.Gr=new em(0),this.zr=!1,this.zr=!0,this.jr=new WI,this.referenceDelegate=t(this),this.Hr=new nC(this),this.indexManager=new BI,this.remoteDocumentCache=function(l){return new tC(l)}(a=>this.referenceDelegate.Jr(a)),this.serializer=new xI(i),this.Yr=new $I(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new ZI,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.Wr[t.toKey()];return a||(a=new JI(i,this.referenceDelegate),this.Wr[t.toKey()]=a),a}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,i,a){nt("MemoryPersistence","Starting transaction:",t);const l=new iC(this.Gr.next());return this.referenceDelegate.Zr(),a(l).next(h=>this.referenceDelegate.Xr(l).next(()=>h)).toPromise().then(h=>(l.raiseOnCommittedEvent(),h))}ei(t,i){return G.or(Object.values(this.Wr).map(a=>()=>a.containsKey(t,i)))}}class iC extends P1{constructor(t){super(),this.currentSequenceNumber=t}}class dm{constructor(t){this.persistence=t,this.ti=new fm,this.ni=null}static ri(t){return new dm(t)}get ii(){if(this.ni)return this.ni;throw St()}addReference(t,i,a){return this.ti.addReference(a,i),this.ii.delete(a.toString()),G.resolve()}removeReference(t,i,a){return this.ti.removeReference(a,i),this.ii.add(a.toString()),G.resolve()}markPotentiallyOrphaned(t,i){return this.ii.add(i.toString()),G.resolve()}removeTarget(t,i){this.ti.Sr(i.targetId).forEach(l=>this.ii.add(l.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next(l=>{l.forEach(h=>this.ii.add(h.toString()))}).next(()=>a.removeTargetData(t,i))}Zr(){this.ni=new Set}Xr(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ii,a=>{const l=_t.fromPath(a);return this.si(t,l).next(h=>{h||i.removeEntry(l,Yt.min())})}).next(()=>(this.ni=null,i.apply(t)))}updateLimboDocument(t,i){return this.si(t,i).next(a=>{a?this.ii.delete(i.toString()):this.ii.add(i.toString())})}Jr(t){return 0}si(t,i){return G.or([()=>G.resolve(this.ti.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.ei(t,i)])}}class Dc{constructor(t,i){this.persistence=t,this.oi=new Bs(a=>z1(a.path),(a,l)=>a.isEqual(l)),this.garbageCollector=KI(this,i)}static ri(t,i){return new Dc(t,i)}Zr(){}Xr(t){return G.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}nr(t){const i=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(a=>i.next(l=>a+l))}sr(t){let i=0;return this.rr(t,a=>{i++}).next(()=>i)}rr(t,i){return G.forEach(this.oi,(a,l)=>this.ar(t,a,l).next(h=>h?G.resolve():i(l)))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),h=l.newChangeBuffer();return l.qr(t,d=>this.ar(t,d,i).next(p=>{p||(a++,h.removeEntry(d,Yt.min()))})).next(()=>h.apply(t)).next(()=>a)}markPotentiallyOrphaned(t,i){return this.oi.set(i,t.currentSequenceNumber),G.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.oi.set(a,t.currentSequenceNumber),G.resolve()}removeReference(t,i,a){return this.oi.set(a,t.currentSequenceNumber),G.resolve()}updateLimboDocument(t,i){return this.oi.set(i,t.currentSequenceNumber),G.resolve()}Jr(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=lc(t.data.value)),i}ar(t,i,a){return G.or([()=>this.persistence.ei(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.oi.get(i);return G.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class mm{constructor(t,i,a,l){this.targetId=t,this.fromCache=i,this.Hi=a,this.Ji=l}static Yi(t,i){let a=qe(),l=qe();for(const h of i.docChanges)switch(h.type){case 0:a=a.add(h.doc.key);break;case 1:l=l.add(h.doc.key)}return new mm(t,i.fromCache,a,l)}}/**
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
 */class rC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class sC{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return bA()?8:L1(Ge())>0?6:4}()}initialize(t,i){this.ns=t,this.indexManager=i,this.Zi=!0}getDocumentsMatchingQuery(t,i,a,l){const h={result:null};return this.rs(t,i).next(d=>{h.result=d}).next(()=>{if(!h.result)return this.ss(t,i,l,a).next(d=>{h.result=d})}).next(()=>{if(h.result)return;const d=new rC;return this._s(t,i,d).next(p=>{if(h.result=p,this.Xi)return this.us(t,i,d,p.size)})}).next(()=>h.result)}us(t,i,a,l){return a.documentReadCount<this.es?(Ma()<=bt.DEBUG&&nt("QueryEngine","SDK will not create cache indexes for query:",nl(i),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),G.resolve()):(Ma()<=bt.DEBUG&&nt("QueryEngine","Query:",nl(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.ts*l?(Ma()<=bt.DEBUG&&nt("QueryEngine","The SDK decides to create cache indexes for query:",nl(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Cs(i))):G.resolve())}rs(t,i){if(O_(i))return G.resolve(null);let a=Cs(i);return this.indexManager.getIndexType(t,a).next(l=>l===0?null:(i.limit!==null&&l===1&&(i=Cd(i,null,"F"),a=Cs(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next(h=>{const d=qe(...h);return this.ns.getDocuments(t,d).next(p=>this.indexManager.getMinOffset(t,a).next(y=>{const v=this.cs(i,p);return this.ls(i,v,d,y.readTime)?this.rs(t,Cd(i,null,"F")):this.hs(t,v,i,y)}))})))}ss(t,i,a,l){return O_(i)||l.isEqual(Yt.min())?G.resolve(null):this.ns.getDocuments(t,a).next(h=>{const d=this.cs(i,h);return this.ls(i,d,a,l)?G.resolve(null):(Ma()<=bt.DEBUG&&nt("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),nl(i)),this.hs(t,d,i,M1(l,pl)).next(p=>p))})}cs(t,i){let a=new Le(oI(t));return i.forEach((l,h)=>{um(t,h)&&(a=a.add(h))}),a}ls(t,i,a,l){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const h=t.limitType==="F"?i.last():i.first();return!!h&&(h.hasPendingWrites||h.version.compareTo(l)>0)}_s(t,i,a){return Ma()<=bt.DEBUG&&nt("QueryEngine","Using full collection scan to execute query:",nl(i)),this.ns.getDocumentsMatchingQuery(t,i,zr.min(),a)}hs(t,i,a,l){return this.ns.getDocumentsMatchingQuery(t,a,l).next(h=>(i.forEach(d=>{h=h.insert(d.key,d)}),h))}}/**
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
 */const aC="LocalStore";class oC{constructor(t,i,a,l){this.persistence=t,this.Ps=i,this.serializer=l,this.Ts=new rn(zt),this.Is=new Bs(h=>om(h),lm),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(a)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new XI(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>t.collect(i,this.Ts))}}function lC(s,t,i,a){return new oC(s,t,i,a)}async function a0(s,t){const i=Kt(s);return await i.persistence.runTransaction("Handle user change","readonly",a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next(h=>(l=h,i.As(t),i.mutationQueue.getAllMutationBatches(a))).next(h=>{const d=[],p=[];let y=qe();for(const v of l){d.push(v.batchId);for(const R of v.mutations)y=y.add(R.key)}for(const v of h){p.push(v.batchId);for(const R of v.mutations)y=y.add(R.key)}return i.localDocuments.getDocuments(a,y).next(v=>({Rs:v,removedBatchIds:d,addedBatchIds:p}))})})}function uC(s,t){const i=Kt(s);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const l=t.batch.keys(),h=i.ds.newChangeBuffer({trackRemovals:!0});return function(p,y,v,R){const V=v.batch,B=V.keys();let K=G.resolve();return B.forEach($=>{K=K.next(()=>R.getEntry(y,$)).next(at=>{const tt=v.docVersions.get($);ie(tt!==null),at.version.compareTo(tt)<0&&(V.applyToRemoteDocument(at,v),at.isValidDocument()&&(at.setReadTime(v.commitVersion),R.addEntry(at)))})}),K.next(()=>p.mutationQueue.removeMutationBatch(y,V))}(i,a,t,h).next(()=>h.apply(a)).next(()=>i.mutationQueue.performConsistencyCheck(a)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(p){let y=qe();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(y=y.add(p.batch.mutations[v].key));return y}(t))).next(()=>i.localDocuments.getDocuments(a,l))})}function cC(s){const t=Kt(s);return t.persistence.runTransaction("Get last remote snapshot version","readonly",i=>t.Hr.getLastRemoteSnapshotVersion(i))}function hC(s,t){const i=Kt(s);return i.persistence.runTransaction("Get next mutation batch","readonly",a=>(t===void 0&&(t=nm),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t)))}class x_{constructor(){this.activeTargetIds=dI()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class fC{constructor(){this.ho=new x_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,i,a){this.Po[t]=i}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new x_,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class dC{To(t){}shutdown(){}}/**
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
 */const z_="ConnectivityMonitor";class B_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){nt(z_,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){nt(z_,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nc=null;function Md(){return nc===null?nc=function(){return 268435456+Math.round(2147483648*Math.random())}():nc++,"0x"+nc.toString(16)}/**
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
 */const cd="RestConnection",mC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pC{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.po=i+"://"+t.host,this.yo=`projects/${a}/databases/${l}`,this.wo=this.databaseId.database===Sc?`project_id=${a}`:`project_id=${a}&database_id=${l}`}bo(t,i,a,l,h){const d=Md(),p=this.So(t,i.toUriEncodedString());nt(cd,`Sending RPC '${t}' ${d}:`,p,a);const y={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(y,l,h),this.vo(t,p,y,a).then(v=>(nt(cd,`Received RPC '${t}' ${d}: `,v),v),v=>{throw Bc(cd,`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",a),v})}Co(t,i,a,l,h,d){return this.bo(t,i,a,l,h)}Do(t,i,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ka}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),a&&a.headers.forEach((l,h)=>t[h]=l)}So(t,i){const a=mC[t];return`${this.po}/v1/${i}:${a}`}terminate(){}}/**
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
 */class gC{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const He="WebChannelConnection";class yC extends pC{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,i,a,l){const h=Md();return new Promise((d,p)=>{const y=new TE;y.setWithCredentials(!0),y.listenOnce(AE.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case oc.NO_ERROR:const R=y.getResponseJson();nt(He,`XHR for RPC '${t}' ${h} received:`,JSON.stringify(R)),d(R);break;case oc.TIMEOUT:nt(He,`RPC '${t}' ${h} timed out`),p(new ht(Q.DEADLINE_EXCEEDED,"Request time out"));break;case oc.HTTP_ERROR:const V=y.getStatus();if(nt(He,`RPC '${t}' ${h} failed with status:`,V,"response text:",y.getResponseText()),V>0){let B=y.getResponseJson();Array.isArray(B)&&(B=B[0]);const K=B==null?void 0:B.error;if(K&&K.status&&K.message){const $=function(tt){const wt=tt.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(wt)>=0?wt:Q.UNKNOWN}(K.status);p(new ht($,K.message))}else p(new ht(Q.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ht(Q.UNAVAILABLE,"Connection failed."));break;default:St()}}finally{nt(He,`RPC '${t}' ${h} completed.`)}});const v=JSON.stringify(l);nt(He,`RPC '${t}' ${h} sending request:`,l),y.send(i,"POST",v,a,15)})}Wo(t,i,a){const l=Md(),h=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=wE(),p=bE(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(y.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Do(y.initMessageHeaders,i,a),y.encodeInitMessageHeaders=!0;const R=h.join("");nt(He,`Creating RPC '${t}' stream ${l}: ${R}`,y);const V=d.createWebChannel(R,y);let B=!1,K=!1;const $=new gC({Fo:tt=>{K?nt(He,`Not sending because RPC '${t}' stream ${l} is closed:`,tt):(B||(nt(He,`Opening RPC '${t}' stream ${l} transport.`),V.open(),B=!0),nt(He,`RPC '${t}' stream ${l} sending:`,tt),V.send(tt))},Mo:()=>V.close()}),at=(tt,wt,dt)=>{tt.listen(wt,Et=>{try{dt(Et)}catch(Bt){setTimeout(()=>{throw Bt},0)}})};return at(V,sl.EventType.OPEN,()=>{K||(nt(He,`RPC '${t}' stream ${l} transport opened.`),$.Qo())}),at(V,sl.EventType.CLOSE,()=>{K||(K=!0,nt(He,`RPC '${t}' stream ${l} transport closed`),$.Ko())}),at(V,sl.EventType.ERROR,tt=>{K||(K=!0,Bc(He,`RPC '${t}' stream ${l} transport errored:`,tt),$.Ko(new ht(Q.UNAVAILABLE,"The operation could not be completed")))}),at(V,sl.EventType.MESSAGE,tt=>{var wt;if(!K){const dt=tt.data[0];ie(!!dt);const Et=dt,Bt=(Et==null?void 0:Et.error)||((wt=Et[0])===null||wt===void 0?void 0:wt.error);if(Bt){nt(He,`RPC '${t}' stream ${l} received error:`,Bt);const mt=Bt.status;let Nt=function(A){const I=fe[A];if(I!==void 0)return wI(I)}(mt),M=Bt.message;Nt===void 0&&(Nt=Q.INTERNAL,M="Unknown error status: "+mt+" with message "+Bt.message),K=!0,$.Ko(new ht(Nt,M)),V.close()}else nt(He,`RPC '${t}' stream ${l} received:`,dt),$.Uo(dt)}}),at(p,SE.STAT_EVENT,tt=>{tt.stat===Sd.PROXY?nt(He,`RPC '${t}' stream ${l} detected buffering proxy`):tt.stat===Sd.NOPROXY&&nt(He,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{$.$o()},0),$}}function hd(){return typeof document<"u"?document:null}/**
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
 */function Gc(s){return new RI(s,!0)}/**
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
 */class o0{constructor(t,i,a=1e3,l=1.5,h=6e4){this.Ti=t,this.timerId=i,this.Go=a,this.zo=l,this.jo=h,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const i=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),l=Math.max(0,i-a);l>0&&nt("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,l,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const H_="PersistentStream";class _C{constructor(t,i,a,l,h,d,p,y){this.Ti=t,this.n_=a,this.r_=l,this.connection=h,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=y,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new o0(t,i)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,i){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():i&&i.code===Q.RESOURCE_EXHAUSTED?(Us(i.toString()),Us("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):i&&i.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(i)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),i=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,l])=>{this.i_===i&&this.V_(a,l)},a=>{t(()=>{const l=new ht(Q.UNKNOWN,"Fetching auth token failed: "+a.message);return this.m_(l)})})}V_(t,i){const a=this.R_(this.i_);this.stream=this.f_(t,i),this.stream.xo(()=>{a(()=>this.listener.xo())}),this.stream.No(()=>{a(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(l=>{a(()=>this.m_(l))}),this.stream.onMessage(l=>{a(()=>++this.__==1?this.g_(l):this.onNext(l))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return nt(H_,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return i=>{this.Ti.enqueueAndForget(()=>this.i_===t?i():(nt(H_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vC extends _C{constructor(t,i,a,l,h,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,d),this.serializer=h}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,i){return this.connection.Wo("Write",t,i)}g_(t){return ie(!!t.streamToken),this.lastStreamToken=t.streamToken,ie(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){ie(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const i=UI(t.writeResults,t.commitTime),a=xa(t.commitTime);return this.listener.v_(a,i)}C_(){const t={};t.database=NI(this.serializer),this.I_(t)}S_(t){const i={streamToken:this.lastStreamToken,writes:t.map(a=>VI(this.serializer,a))};this.I_(i)}}/**
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
 */class EC{}class TC extends EC{constructor(t,i,a,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.F_=!1}M_(){if(this.F_)throw new ht(Q.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,i,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.bo(t,Dd(i,a),l,h,d)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ht(Q.UNKNOWN,h.toString())})}Co(t,i,a,l,h){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,p])=>this.connection.Co(t,Dd(i,a),l,d,p,h)).catch(d=>{throw d.name==="FirebaseError"?(d.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ht(Q.UNKNOWN,d.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class AC{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const i=`Could not reach Cloud Firestore backend. ${t}
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
 */const Il="RemoteStore";class SC{constructor(t,i,a,l,h){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=h,this.z_.To(d=>{a.enqueueAndForget(async()=>{Ol(this)&&(nt(Il,"Restarting streams for network reachability change."),await async function(y){const v=Kt(y);v.W_.add(4),await Cl(v),v.j_.set("Unknown"),v.W_.delete(4),await Fc(v)}(this))})}),this.j_=new AC(a,l)}}async function Fc(s){if(Ol(s))for(const t of s.G_)await t(!0)}async function Cl(s){for(const t of s.G_)await t(!1)}function Ol(s){return Kt(s).W_.size===0}async function l0(s,t,i){if(!wl(t))throw t;s.W_.add(1),await Cl(s),s.j_.set("Offline"),i||(i=()=>cC(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{nt(Il,"Retrying IndexedDB access"),await i(),s.W_.delete(1),await Fc(s)})}function u0(s,t){return t().catch(i=>l0(s,i,t))}async function Kc(s){const t=Kt(s),i=Hr(t);let a=t.K_.length>0?t.K_[t.K_.length-1].batchId:nm;for(;bC(t);)try{const l=await hC(t.localStore,a);if(l===null){t.K_.length===0&&i.P_();break}a=l.batchId,wC(t,l)}catch(l){await l0(t,l)}c0(t)&&h0(t)}function bC(s){return Ol(s)&&s.K_.length<10}function wC(s,t){s.K_.push(t);const i=Hr(s);i.c_()&&i.b_&&i.S_(t.mutations)}function c0(s){return Ol(s)&&!Hr(s).u_()&&s.K_.length>0}function h0(s){Hr(s).start()}async function RC(s){Hr(s).C_()}async function IC(s){const t=Hr(s);for(const i of s.K_)t.S_(i.mutations)}async function CC(s,t,i){const a=s.K_.shift(),l=hm.from(a,t,i);await u0(s,()=>s.remoteSyncer.applySuccessfulWrite(l)),await Kc(s)}async function OC(s,t){t&&Hr(s).b_&&await async function(a,l){if(function(d){return bI(d)&&d!==Q.ABORTED}(l.code)){const h=a.K_.shift();Hr(a).h_(),await u0(a,()=>a.remoteSyncer.rejectFailedWrite(h.batchId,l)),await Kc(a)}}(s,t),c0(s)&&h0(s)}async function j_(s,t){const i=Kt(s);i.asyncQueue.verifyOperationInProgress(),nt(Il,"RemoteStore received new credentials");const a=Ol(i);i.W_.add(3),await Cl(i),a&&i.j_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.W_.delete(3),await Fc(i)}async function DC(s,t){const i=Kt(s);t?(i.W_.delete(2),await Fc(i)):t||(i.W_.add(2),await Cl(i),i.j_.set("Unknown"))}function Hr(s){return s.Y_||(s.Y_=function(i,a,l){const h=Kt(i);return h.M_(),new vC(a,h.connection,h.authCredentials,h.appCheckCredentials,h.serializer,l)}(s.datastore,s.asyncQueue,{xo:()=>Promise.resolve(),No:RC.bind(null,s),Lo:OC.bind(null,s),D_:IC.bind(null,s),v_:CC.bind(null,s)}),s.G_.push(async t=>{t?(s.Y_.h_(),await Kc(s)):(await s.Y_.stop(),s.K_.length>0&&(nt(Il,`Stopping write stream with ${s.K_.length} pending writes`),s.K_=[]))})),s.Y_}/**
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
 */class pm{constructor(t,i,a,l,h){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=h,this.deferred=new Is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,l,h){const d=Date.now()+a,p=new pm(t,i,d,l,h);return p.start(a),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ht(Q.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function f0(s,t){if(Us("AsyncQueue",`${t}: ${s}`),wl(s))return new ht(Q.UNAVAILABLE,`${t}: ${s}`);throw s}class NC{constructor(){this.queries=q_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(i,a){const l=Kt(i),h=l.queries;l.queries=q_(),h.forEach((d,p)=>{for(const y of p.ta)y.onError(a)})})(this,new ht(Q.ABORTED,"Firestore shutting down"))}}function q_(){return new Bs(s=>GE(s),qE)}function MC(s){s.ia.forEach(t=>{t.next()})}var G_,F_;(F_=G_||(G_={}))._a="default",F_.Cache="cache";const VC="SyncEngine";class UC{constructor(t,i,a,l,h,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=h,this.maxConcurrentLimboResolutions=d,this.La={},this.ka=new Bs(p=>GE(p),qE),this.qa=new Map,this.Qa=new Set,this.$a=new rn(_t.comparator),this.Ka=new Map,this.Ua=new fm,this.Wa={},this.Ga=new Map,this.za=qa.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function kC(s,t,i){const a=zC(s);try{const l=await function(d,p){const y=Kt(d),v=Oe.now(),R=p.reduce((K,$)=>K.add($.key),qe());let V,B;return y.persistence.runTransaction("Locally write mutations","readwrite",K=>{let $=Ic(),at=qe();return y.ds.getEntries(K,R).next(tt=>{$=tt,$.forEach((wt,dt)=>{dt.isValidDocument()||(at=at.add(wt))})}).next(()=>y.localDocuments.getOverlayedDocuments(K,$)).next(tt=>{V=tt;const wt=[];for(const dt of p){const Et=EI(dt,V.get(dt.key).overlayedDocument);Et!=null&&wt.push(new Hs(dt.key,Et,PE(Et.value.mapValue),Gi.exists(!0)))}return y.mutationQueue.addMutationBatch(K,v,wt,p)}).next(tt=>{B=tt;const wt=tt.applyToLocalDocumentSet(V,at);return y.documentOverlayCache.saveOverlays(K,tt.batchId,wt)})}).then(()=>({batchId:B.batchId,changes:KE(V)}))}(a.localStore,t);a.sharedClientState.addPendingMutation(l.batchId),function(d,p,y){let v=d.Wa[d.currentUser.toKey()];v||(v=new rn(zt)),v=v.insert(p,y),d.Wa[d.currentUser.toKey()]=v}(a,l.batchId,i),await Yc(a,l.changes),await Kc(a.remoteStore)}catch(l){const h=f0(l,"Failed to persist write");i.reject(h)}}function K_(s,t,i){const a=Kt(s);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.ka.forEach((h,d)=>{const p=d.view.sa(t);p.snapshot&&l.push(p.snapshot)}),function(d,p){const y=Kt(d);y.onlineState=p;let v=!1;y.queries.forEach((R,V)=>{for(const B of V.ta)B.sa(p)&&(v=!0)}),v&&MC(y)}(a.eventManager,t),l.length&&a.La.p_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function PC(s,t){const i=Kt(s),a=t.batch.batchId;try{const l=await uC(i.localStore,t);m0(i,a,null),d0(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await Yc(i,l)}catch(l){await tm(l)}}async function LC(s,t,i){const a=Kt(s);try{const l=await function(d,p){const y=Kt(d);return y.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let R;return y.mutationQueue.lookupMutationBatch(v,p).next(V=>(ie(V!==null),R=V.keys(),y.mutationQueue.removeMutationBatch(v,V))).next(()=>y.mutationQueue.performConsistencyCheck(v)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(v,R,p)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,R)).next(()=>y.localDocuments.getDocuments(v,R))})}(a.localStore,t);m0(a,t,i),d0(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await Yc(a,l)}catch(l){await tm(l)}}function d0(s,t){(s.Ga.get(t)||[]).forEach(i=>{i.resolve()}),s.Ga.delete(t)}function m0(s,t,i){const a=Kt(s);let l=a.Wa[a.currentUser.toKey()];if(l){const h=l.get(t);h&&(i?h.reject(i):h.resolve(),l=l.remove(t)),a.Wa[a.currentUser.toKey()]=l}}async function Yc(s,t,i){const a=Kt(s),l=[],h=[],d=[];a.ka.isEmpty()||(a.ka.forEach((p,y)=>{d.push(a.Ha(y,t,i).then(v=>{var R;if((v||i)&&a.isPrimaryClient){const V=v?!v.fromCache:(R=void 0)===null||R===void 0?void 0:R.current;a.sharedClientState.updateQueryState(y.targetId,V?"current":"not-current")}if(v){l.push(v);const V=mm.Yi(y.targetId,v);h.push(V)}}))}),await Promise.all(d),a.La.p_(l),await async function(y,v){const R=Kt(y);try{await R.persistence.runTransaction("notifyLocalViewChanges","readwrite",V=>G.forEach(v,B=>G.forEach(B.Hi,K=>R.persistence.referenceDelegate.addReference(V,B.targetId,K)).next(()=>G.forEach(B.Ji,K=>R.persistence.referenceDelegate.removeReference(V,B.targetId,K)))))}catch(V){if(!wl(V))throw V;nt(aC,"Failed to update sequence numbers: "+V)}for(const V of v){const B=V.targetId;if(!V.fromCache){const K=R.Ts.get(B),$=K.snapshotVersion,at=K.withLastLimboFreeSnapshotVersion($);R.Ts=R.Ts.insert(B,at)}}}(a.localStore,h))}async function xC(s,t){const i=Kt(s);if(!i.currentUser.isEqual(t)){nt(VC,"User change. New user:",t.toKey());const a=await a0(i.localStore,t);i.currentUser=t,function(h,d){h.Ga.forEach(p=>{p.forEach(y=>{y.reject(new ht(Q.CANCELLED,d))})}),h.Ga.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await Yc(i,a.Rs)}}function zC(s){const t=Kt(s);return t.remoteStore.remoteSyncer.applySuccessfulWrite=PC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=LC.bind(null,t),t}class Nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Gc(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,i){return null}nu(t,i){return null}eu(t){return lC(this.persistence,new sC,t.initialUser,this.serializer)}Xa(t){return new s0(dm.ri,this.serializer)}Za(t){return new fC}async terminate(){var t,i;(t=this.gcScheduler)===null||t===void 0||t.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nc.provider={build:()=>new Nc};class BC extends Nc{constructor(t){super(),this.cacheSizeBytes=t}tu(t,i){ie(this.persistence.referenceDelegate instanceof Dc);const a=this.persistence.referenceDelegate.garbageCollector;return new GI(a,t.asyncQueue,i)}Xa(t){const i=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new s0(a=>Dc.ri(a,i),this.serializer)}}class Vd{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>K_(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=xC.bind(null,this.syncEngine),await DC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new NC}()}createDatastore(t){const i=Gc(t.databaseInfo.databaseId),a=function(h){return new yC(h)}(t.databaseInfo);return function(h,d,p,y){return new TC(h,d,p,y)}(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return function(a,l,h,d,p){return new SC(a,l,h,d,p)}(this.localStore,this.datastore,t.asyncQueue,i=>K_(this.syncEngine,i,0),function(){return B_.D()?new B_:new dC}())}createSyncEngine(t,i){return function(l,h,d,p,y,v,R){const V=new UC(l,h,d,p,y,v);return R&&(V.ja=!0),V}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await async function(l){const h=Kt(l);nt(Il,"RemoteStore shutting down."),h.W_.add(5),await Cl(h),h.z_.shutdown(),h.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}Vd.provider={build:()=>new Vd};/**
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
 */const jr="FirestoreClient";class HC{constructor(t,i,a,l,h){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=je.UNAUTHENTICATED,this.clientId=IE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=h,this.authCredentials.start(a,async d=>{nt(jr,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(a,d=>(nt(jr,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=f0(i,"Failed to shutdown persistence");t.reject(a)}}),t.promise}}async function fd(s,t){s.asyncQueue.verifyOperationInProgress(),nt(jr,"Initializing OfflineComponentProvider");const i=s.configuration;await t.initialize(i);let a=i.initialUser;s.setCredentialChangeListener(async l=>{a.isEqual(l)||(await a0(t.localStore,l),a=l)}),t.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=t}async function Y_(s,t){s.asyncQueue.verifyOperationInProgress();const i=await jC(s);nt(jr,"Initializing OnlineComponentProvider"),await t.initialize(i,s.configuration),s.setCredentialChangeListener(a=>j_(t.remoteStore,a)),s.setAppCheckTokenChangeListener((a,l)=>j_(t.remoteStore,l)),s._onlineComponents=t}async function jC(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){nt(jr,"Using user provided OfflineComponentProvider");try{await fd(s,s._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(l){return l.name==="FirebaseError"?l.code===Q.FAILED_PRECONDITION||l.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(i))throw i;Bc("Error using user provided cache. Falling back to memory cache: "+i),await fd(s,new Nc)}}else nt(jr,"Using default OfflineComponentProvider"),await fd(s,new BC(void 0));return s._offlineComponents}async function qC(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(nt(jr,"Using user provided OnlineComponentProvider"),await Y_(s,s._uninitializedComponentsProvider._online)):(nt(jr,"Using default OnlineComponentProvider"),await Y_(s,new Vd))),s._onlineComponents}function GC(s){return qC(s).then(t=>t.syncEngine)}/**
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
 */function p0(s){const t={};return s.timeoutSeconds!==void 0&&(t.timeoutSeconds=s.timeoutSeconds),t}/**
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
 */const Q_=new Map;/**
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
 */function g0(s,t,i){if(!i)throw new ht(Q.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${t}.`)}function FC(s,t,i,a){if(t===!0&&a===!0)throw new ht(Q.INVALID_ARGUMENT,`${s} and ${i} cannot be used together.`)}function X_(s){if(!_t.isDocumentKey(s))throw new ht(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function $_(s){if(_t.isDocumentKey(s))throw new ht(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function gm(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const t=function(a){return a.constructor?a.constructor.name:null}(s);return t?`a custom ${t} object`:"an object"}}return typeof s=="function"?"a function":St()}function Ud(s,t){if("_delegate"in s&&(s=s._delegate),!(s instanceof t)){if(t.name===s.constructor.name)throw new ht(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=gm(s);throw new ht(Q.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return s}/**
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
 */const y0="firestore.googleapis.com",Z_=!0;class W_{constructor(t){var i,a;if(t.host===void 0){if(t.ssl!==void 0)throw new ht(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=y0,this.ssl=Z_}else this.host=t.host,this.ssl=(i=t.ssl)!==null&&i!==void 0?i:Z_;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=r0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<jI)throw new ht(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}FC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=p0((a=t.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(h){if(h.timeoutSeconds!==void 0){if(isNaN(h.timeoutSeconds))throw new ht(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (must not be NaN)`);if(h.timeoutSeconds<5)throw new ht(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (minimum allowed value is 5)`);if(h.timeoutSeconds>30)throw new ht(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(a,l){return a.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qc{constructor(t,i,a,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new W_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ht(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ht(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new W_(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new b1;switch(a.type){case"firstParty":return new C1(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ht(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const a=Q_.get(i);a&&(nt("ComponentProvider","Removing Datastore"),Q_.delete(i),a.terminate())}(this),Promise.resolve()}}function KC(s,t,i,a={}){var l;const h=(s=Ud(s,Qc))._getSettings(),d=Object.assign(Object.assign({},h),{emulatorOptions:s._getEmulatorOptions()}),p=`${t}:${i}`;h.host!==y0&&h.host!==p&&Bc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},h),{host:p,ssl:!1,emulatorOptions:a});if(!xr(y,d)&&(s._setSettings(y),a.mockUserToken)){let v,R;if(typeof a.mockUserToken=="string")v=a.mockUserToken,R=je.MOCK_USER;else{v=_A(a.mockUserToken,(l=s._app)===null||l===void 0?void 0:l.options.projectId);const V=a.mockUserToken.sub||a.mockUserToken.user_id;if(!V)throw new ht(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");R=new je(V)}s._authCredentials=new w1(new RE(v,R))}}/**
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
 */class ym{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new ym(this.firestore,t,this._query)}}class ui{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ui(this.firestore,t,this._key)}}class Lr extends ym{constructor(t,i,a){super(t,i,rI(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ui(this.firestore,null,new _t(t))}withConverter(t){return new Lr(this.firestore,t,this._path)}}function YC(s,t,...i){if(s=Ze(s),g0("collection","path",t),s instanceof Qc){const a=ne.fromString(t,...i);return $_(a),new Lr(s,null,a)}{if(!(s instanceof ui||s instanceof Lr))throw new ht(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=s._path.child(ne.fromString(t,...i));return $_(a),new Lr(s.firestore,null,a)}}function QC(s,t,...i){if(s=Ze(s),arguments.length===1&&(t=IE.newId()),g0("doc","path",t),s instanceof Qc){const a=ne.fromString(t,...i);return X_(a),new ui(s,null,new _t(a))}{if(!(s instanceof ui||s instanceof Lr))throw new ht(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=s._path.child(ne.fromString(t,...i));return X_(a),new ui(s.firestore,s instanceof Lr?s.converter:null,new _t(a))}}/**
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
 */const J_="AsyncQueue";class tv{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new o0(this,"async_queue_retry"),this.bu=()=>{const a=hd();a&&nt(J_,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.Su=t;const i=hd();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const i=hd();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const i=new Is;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!wl(t))throw t;nt(J_,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const i=this.Su.then(()=>(this.pu=!0,t().catch(a=>{this.gu=a,this.pu=!1;const l=function(d){let p=d.message||"";return d.stack&&(p=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),p}(a);throw Us("INTERNAL UNHANDLED ERROR: ",l),a}).then(a=>(this.pu=!1,a))));return this.Su=i,i}enqueueAfterDelay(t,i,a){this.Du(),this.wu.indexOf(t)>-1&&(i=0);const l=pm.createAndSchedule(this,t,i,a,h=>this.Fu(h));return this.fu.push(l),l}Du(){this.gu&&St()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const i of this.fu)if(i.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((i,a)=>i.targetTimeMs-a.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const i=this.fu.indexOf(t);this.fu.splice(i,1)}}class _0 extends Qc{constructor(t,i,a,l){super(t,i,a,l),this.type="firestore",this._queue=new tv,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new tv(t),this._firestoreClient=void 0,await t}}}function XC(s,t){const i=Ld(),a=Sc,l=xs(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const h=gA("firestore");h&&KC(l,...h)}return l}function $C(s){if(s._terminated)throw new ht(Q.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||ZC(s),s._firestoreClient}function ZC(s){var t,i,a;const l=s._freezeSettings(),h=function(p,y,v,R){return new q1(p,y,v,R.host,R.ssl,R.experimentalForceLongPolling,R.experimentalAutoDetectLongPolling,p0(R.experimentalLongPollingOptions),R.useFetchStreams)}(s._databaseId,((t=s._app)===null||t===void 0?void 0:t.options.appId)||"",s._persistenceKey,l);s._componentsProvider||!((i=l.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((a=l.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(s._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),s._firestoreClient=new HC(s._authCredentials,s._appCheckCredentials,s._queue,h,s._componentsProvider&&function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}}(s._componentsProvider))}/**
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
 */class vl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new vl(hi.fromBase64String(t))}catch(i){throw new ht(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new vl(hi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class v0{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new ht(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class E0{constructor(t){this._methodName=t}}/**
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
 */class T0{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new ht(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new ht(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return zt(this._lat,t._lat)||zt(this._long,t._long)}}/**
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
 */class A0{constructor(t){this._values=(t||[]).map(i=>i)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(a,l){if(a.length!==l.length)return!1;for(let h=0;h<a.length;++h)if(a[h]!==l[h])return!1;return!0}(this._values,t._values)}}/**
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
 */const WC=/^__.*__$/;class JC{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new Hs(t,this.data,this.fieldMask,i,this.fieldTransforms):new Rl(t,this.data,i,this.fieldTransforms)}}function S0(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw St()}}class _m{constructor(t,i,a,l,h,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,h===void 0&&this.Bu(),this.fieldTransforms=h||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new _m(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:a,Qu:!1});return l.$u(t),l}Ku(t){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:a,Qu:!1});return l.Bu(),l}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Mc(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(i=>t.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>t.isPrefixOf(i.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(S0(this.Lu)&&WC.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class tO{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||Gc(t)}ju(t,i,a,l=!1){return new _m({Lu:t,methodName:i,zu:a,path:Pe.emptyPath(),Qu:!1,Gu:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eO(s){const t=s._freezeSettings(),i=Gc(s._databaseId);return new tO(s._databaseId,!!t.ignoreUndefinedProperties,i)}function nO(s,t,i,a,l,h={}){const d=s.ju(h.merge||h.mergeFields?2:0,t,i,l);I0("Data must be an object, but it was:",d,a);const p=w0(a,d);let y,v;if(h.merge)y=new Bn(d.fieldMask),v=d.fieldTransforms;else if(h.mergeFields){const R=[];for(const V of h.mergeFields){const B=iO(t,V,i);if(!d.contains(B))throw new ht(Q.INVALID_ARGUMENT,`Field '${B}' is specified in your field mask but missing from your input data.`);aO(R,B)||R.push(B)}y=new Bn(R),v=d.fieldTransforms.filter(V=>y.covers(V.field))}else y=null,v=d.fieldTransforms;return new JC(new zn(p),y,v)}function b0(s,t){if(R0(s=Ze(s)))return I0("Unsupported field value:",t,s),w0(s,t);if(s instanceof E0)return function(a,l){if(!S0(l.Lu))throw l.Wu(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Wu(`${a._methodName}() is not currently supported inside arrays`);const h=a._toFieldTransform(l);h&&l.fieldTransforms.push(h)}(s,t),null;if(s===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),s instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(a,l){const h=[];let d=0;for(const p of a){let y=b0(p,l.Uu(d));y==null&&(y={nullValue:"NULL_VALUE"}),h.push(y),d++}return{arrayValue:{values:h}}}(s,t)}return function(a,l){if((a=Ze(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return mI(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const h=Oe.fromDate(a);return{timestampValue:Od(l.serializer,h)}}if(a instanceof Oe){const h=new Oe(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Od(l.serializer,h)}}if(a instanceof T0)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof vl)return{bytesValue:II(l.serializer,a._byteString)};if(a instanceof ui){const h=l.databaseId,d=a.firestore._databaseId;if(!d.isEqual(h))throw l.Wu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${h.projectId}/${h.database}`);return{referenceValue:n0(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof A0)return function(d,p){return{mapValue:{fields:{[UE]:{stringValue:kE},[bd]:{arrayValue:{values:d.toArray().map(v=>{if(typeof v!="number")throw p.Wu("VectorValues must only contain numeric values.");return cm(p.serializer,v)})}}}}}}(a,l);throw l.Wu(`Unsupported field value: ${gm(a)}`)}(s,t)}function w0(s,t){const i={};return OE(s)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ya(s,(a,l)=>{const h=b0(l,t.qu(a));h!=null&&(i[a]=h)}),{mapValue:{fields:i}}}function R0(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Oe||s instanceof T0||s instanceof vl||s instanceof ui||s instanceof E0||s instanceof A0)}function I0(s,t,i){if(!R0(i)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(i)){const a=gm(i);throw a==="an object"?t.Wu(s+" a custom object"):t.Wu(s+" "+a)}}function iO(s,t,i){if((t=Ze(t))instanceof v0)return t._internalPath;if(typeof t=="string")return sO(s,t);throw Mc("Field path arguments must be of type string or ",s,!1,void 0,i)}const rO=new RegExp("[~\\*/\\[\\]]");function sO(s,t,i){if(t.search(rO)>=0)throw Mc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,i);try{return new v0(...t.split("."))._internalPath}catch{throw Mc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,i)}}function Mc(s,t,i,a,l){const h=a&&!a.isEmpty(),d=l!==void 0;let p=`Function ${t}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let y="";return(h||d)&&(y+=" (found",h&&(y+=` in field ${a}`),d&&(y+=` in document ${l}`),y+=")"),new ht(Q.INVALID_ARGUMENT,p+s+y)}function aO(s,t){return s.some(i=>i.isEqual(t))}/**
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
 */function oO(s,t,i){let a;return a=s?s.toFirestore(t):t,a}function lO(s,t,i){s=Ud(s,ui);const a=Ud(s.firestore,_0),l=oO(s.converter,t);return uO(a,[nO(eO(a),"setDoc",s._key,l,s.converter!==null,i).toMutation(s._key,Gi.none())])}function uO(s,t){return function(a,l){const h=new Is;return a.asyncQueue.enqueueAndForget(async()=>kC(await GC(a),l,h)),h.promise}($C(s),t)}(function(t,i=!0){(function(l){Ka=l})(Ga),ci(new Hn("firestore",(a,{instanceIdentifier:l,options:h})=>{const d=a.getProvider("app").getImmediate(),p=new _0(new R1(a.getProvider("auth-internal")),new O1(d,a.getProvider("app-check-internal")),function(v,R){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ht(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bc(v.options.projectId,R)}(d,l),d);return h=Object.assign({useFetchStreams:i},h),p._setSettings(h),p},"PUBLIC").setMultipleInstances(!0)),Nn(p_,g_,t),Nn(p_,g_,"esm2017")})();function cO(){const[s,t]=Rs.useState(""),[i,a]=Rs.useState(""),[l,h]=Rs.useState(!0),d=async p=>{p.preventDefault();try{let y;if(l){const R=(await Bb(Ec,s,i)).user,V=XC(),B={useruid:R.uid,email:R.email,createdAt:new Date};await lO(QC(YC(V,"accounts"),R.uid),B),console.log("Successful signup: ",R)}else y=await Hb(Ec,s,i),console.log("Successful sign in: ",y.user)}catch(y){console.log("Unsuccessful: ",y.message)}};return ae.jsxs("div",{children:[ae.jsx("h2",{children:l?"Create account":"Sign in"}),ae.jsxs("form",{onSubmit:d,children:[ae.jsx("label",{htmlFor:"email",children:"Email"}),ae.jsx("input",{type:"text",id:"email","data-form-type":"other",value:s,onChange:p=>t(p.target.value)}),ae.jsx("label",{htmlFor:"password",children:"Password"}),ae.jsx("input",{type:"password",id:"password","data-form-type":"other",value:i,onChange:p=>a(p.target.value)}),ae.jsx("button",{type:"submit",children:l?"Create account":"Sign in"})]}),ae.jsx("button",{onClick:()=>h(!l),type:"submit",children:l?"Sign in":"No account yet? Sign up"})]})}function hO(){const[s,t]=Rs.useState(null);Rs.useEffect(()=>{const a=Gb(Ec,l=>{t(l)});return()=>a()},[]);const i=()=>{Ec.signOut().then(()=>{console.log("User signed out")}).catch(a=>{console.log("Error with signout: ",a.message)})};return ae.jsxs("div",{children:[ae.jsx("p",{children:"This is the top nav"}),s?ae.jsxs("div",{children:[ae.jsx("p",{children:s.email}),ae.jsx("button",{onClick:i,children:"Sign out"})]}):ae.jsx("p",{children:"Sign in"})]})}function fO(){const[s,t]=Rs.useState(0);return ae.jsxs(ae.Fragment,{children:[ae.jsx(hO,{}),ae.jsx(cO,{})]})}oA.createRoot(document.getElementById("root")).render(ae.jsx(Rs.StrictMode,{children:ae.jsx(fO,{})}));
