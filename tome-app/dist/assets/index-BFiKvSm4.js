(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var gm={exports:{}},Kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function ZS(){if(xv)return Kl;xv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var d in o)d!=="key"&&(u[d]=o[d])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:h,ref:o!==void 0?o:null,props:u}}return Kl.Fragment=e,Kl.jsx=t,Kl.jsxs=t,Kl}var Vv;function JS(){return Vv||(Vv=1,gm.exports=ZS()),gm.exports}var J=JS(),_m={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function eR(){if(Pv)return Re;Pv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=w&&N[w]||N["@@iterator"],typeof N=="function"?N:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,K={};function U(N,ne,de){this.props=N,this.context=ne,this.refs=K,this.updater=de||O}U.prototype.isReactComponent={},U.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},U.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function G(){}G.prototype=U.prototype;function te(N,ne,de){this.props=N,this.context=ne,this.refs=K,this.updater=de||O}var Y=te.prototype=new G;Y.constructor=te,P(Y,U.prototype),Y.isPureReactComponent=!0;var se=Array.isArray,ae={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function k(N,ne,de,oe,le,Ie){return de=Ie.ref,{$$typeof:i,type:N,key:ne,ref:de!==void 0?de:null,props:Ie}}function R(N,ne){return k(N.type,ne,void 0,void 0,void 0,N.props)}function A(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function C(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(de){return ne[de]})}var x=/\/+/g;function B(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):ne.toString(36)}function D(){}function wt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(D,D):(N.status="pending",N.then(function(ne){N.status==="pending"&&(N.status="fulfilled",N.value=ne)},function(ne){N.status==="pending"&&(N.status="rejected",N.reason=ne)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function pt(N,ne,de,oe,le){var Ie=typeof N;(Ie==="undefined"||Ie==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(Ie){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case i:case e:Se=!0;break;case E:return Se=N._init,pt(Se(N._payload),ne,de,oe,le)}}if(Se)return le=le(N),Se=oe===""?"."+B(N,0):oe,se(le)?(de="",Se!=null&&(de=Se.replace(x,"$&/")+"/"),pt(le,ne,de,"",function(at){return at})):le!=null&&(A(le)&&(le=R(le,de+(le.key==null||N&&N.key===le.key?"":(""+le.key).replace(x,"$&/")+"/")+Se)),ne.push(le)),1;Se=0;var gt=oe===""?".":oe+":";if(se(N))for(var ze=0;ze<N.length;ze++)oe=N[ze],Ie=gt+B(oe,ze),Se+=pt(oe,ne,de,Ie,le);else if(ze=S(N),typeof ze=="function")for(N=ze.call(N),ze=0;!(oe=N.next()).done;)oe=oe.value,Ie=gt+B(oe,ze++),Se+=pt(oe,ne,de,Ie,le);else if(Ie==="object"){if(typeof N.then=="function")return pt(wt(N),ne,de,oe,le);throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Se}function re(N,ne,de){if(N==null)return N;var oe=[],le=0;return pt(N,oe,"","",function(Ie){return ne.call(de,Ie,le++)}),oe}function Ee(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(de){(N._status===0||N._status===-1)&&(N._status=1,N._result=de)},function(de){(N._status===0||N._status===-1)&&(N._status=2,N._result=de)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function He(){}return Re.Children={map:re,forEach:function(N,ne,de){re(N,function(){ne.apply(this,arguments)},de)},count:function(N){var ne=0;return re(N,function(){ne++}),ne},toArray:function(N){return re(N,function(ne){return ne})||[]},only:function(N){if(!A(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Re.Component=U,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=te,Re.StrictMode=s,Re.Suspense=p,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Re.act=function(){throw Error("act(...) is not supported in production builds of React.")},Re.cache=function(N){return function(){return N.apply(null,arguments)}},Re.cloneElement=function(N,ne,de){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var oe=P({},N.props),le=N.key,Ie=void 0;if(ne!=null)for(Se in ne.ref!==void 0&&(Ie=void 0),ne.key!==void 0&&(le=""+ne.key),ne)!_e.call(ne,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ne.ref===void 0||(oe[Se]=ne[Se]);var Se=arguments.length-2;if(Se===1)oe.children=de;else if(1<Se){for(var gt=Array(Se),ze=0;ze<Se;ze++)gt[ze]=arguments[ze+2];oe.children=gt}return k(N.type,le,void 0,void 0,Ie,oe)},Re.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},Re.createElement=function(N,ne,de){var oe,le={},Ie=null;if(ne!=null)for(oe in ne.key!==void 0&&(Ie=""+ne.key),ne)_e.call(ne,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(le[oe]=ne[oe]);var Se=arguments.length-2;if(Se===1)le.children=de;else if(1<Se){for(var gt=Array(Se),ze=0;ze<Se;ze++)gt[ze]=arguments[ze+2];le.children=gt}if(N&&N.defaultProps)for(oe in Se=N.defaultProps,Se)le[oe]===void 0&&(le[oe]=Se[oe]);return k(N,Ie,void 0,void 0,null,le)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(N){return{$$typeof:d,render:N}},Re.isValidElement=A,Re.lazy=function(N){return{$$typeof:E,_payload:{_status:-1,_result:N},_init:Ee}},Re.memo=function(N,ne){return{$$typeof:g,type:N,compare:ne===void 0?null:ne}},Re.startTransition=function(N){var ne=ae.T,de={};ae.T=de;try{var oe=N(),le=ae.S;le!==null&&le(de,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(He,pe)}catch(Ie){pe(Ie)}finally{ae.T=ne}},Re.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Re.use=function(N){return ae.H.use(N)},Re.useActionState=function(N,ne,de){return ae.H.useActionState(N,ne,de)},Re.useCallback=function(N,ne){return ae.H.useCallback(N,ne)},Re.useContext=function(N){return ae.H.useContext(N)},Re.useDebugValue=function(){},Re.useDeferredValue=function(N,ne){return ae.H.useDeferredValue(N,ne)},Re.useEffect=function(N,ne){return ae.H.useEffect(N,ne)},Re.useId=function(){return ae.H.useId()},Re.useImperativeHandle=function(N,ne,de){return ae.H.useImperativeHandle(N,ne,de)},Re.useInsertionEffect=function(N,ne){return ae.H.useInsertionEffect(N,ne)},Re.useLayoutEffect=function(N,ne){return ae.H.useLayoutEffect(N,ne)},Re.useMemo=function(N,ne){return ae.H.useMemo(N,ne)},Re.useOptimistic=function(N,ne){return ae.H.useOptimistic(N,ne)},Re.useReducer=function(N,ne,de){return ae.H.useReducer(N,ne,de)},Re.useRef=function(N){return ae.H.useRef(N)},Re.useState=function(N){return ae.H.useState(N)},Re.useSyncExternalStore=function(N,ne,de){return ae.H.useSyncExternalStore(N,ne,de)},Re.useTransition=function(){return ae.H.useTransition()},Re.version="19.0.0",Re}var Uv;function yp(){return Uv||(Uv=1,_m.exports=eR()),_m.exports}var H=yp(),ym={exports:{}},$l={},vm={exports:{}},Em={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function tR(){return Lv||(Lv=1,function(i){function e(re,Ee){var pe=re.length;re.push(Ee);e:for(;0<pe;){var He=pe-1>>>1,N=re[He];if(0<o(N,Ee))re[He]=Ee,re[pe]=N,pe=He;else break e}}function t(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var Ee=re[0],pe=re.pop();if(pe!==Ee){re[0]=pe;e:for(var He=0,N=re.length,ne=N>>>1;He<ne;){var de=2*(He+1)-1,oe=re[de],le=de+1,Ie=re[le];if(0>o(oe,pe))le<N&&0>o(Ie,oe)?(re[He]=Ie,re[le]=pe,He=le):(re[He]=oe,re[de]=pe,He=de);else if(le<N&&0>o(Ie,pe))re[He]=Ie,re[le]=pe,He=le;else break e}}return Ee}function o(re,Ee){var pe=re.sortIndex-Ee.sortIndex;return pe!==0?pe:re.id-Ee.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();i.unstable_now=function(){return h.now()-d}}var p=[],g=[],E=1,w=null,S=3,O=!1,P=!1,K=!1,U=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function Y(re){for(var Ee=t(g);Ee!==null;){if(Ee.callback===null)s(g);else if(Ee.startTime<=re)s(g),Ee.sortIndex=Ee.expirationTime,e(p,Ee);else break;Ee=t(g)}}function se(re){if(K=!1,Y(re),!P)if(t(p)!==null)P=!0,wt();else{var Ee=t(g);Ee!==null&&pt(se,Ee.startTime-re)}}var ae=!1,_e=-1,k=5,R=-1;function A(){return!(i.unstable_now()-R<k)}function C(){if(ae){var re=i.unstable_now();R=re;var Ee=!0;try{e:{P=!1,K&&(K=!1,G(_e),_e=-1),O=!0;var pe=S;try{t:{for(Y(re),w=t(p);w!==null&&!(w.expirationTime>re&&A());){var He=w.callback;if(typeof He=="function"){w.callback=null,S=w.priorityLevel;var N=He(w.expirationTime<=re);if(re=i.unstable_now(),typeof N=="function"){w.callback=N,Y(re),Ee=!0;break t}w===t(p)&&s(p),Y(re)}else s(p);w=t(p)}if(w!==null)Ee=!0;else{var ne=t(g);ne!==null&&pt(se,ne.startTime-re),Ee=!1}}break e}finally{w=null,S=pe,O=!1}Ee=void 0}}finally{Ee?x():ae=!1}}}var x;if(typeof te=="function")x=function(){te(C)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,D=B.port2;B.port1.onmessage=C,x=function(){D.postMessage(null)}}else x=function(){U(C,0)};function wt(){ae||(ae=!0,x())}function pt(re,Ee){_e=U(function(){re(i.unstable_now())},Ee)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(re){re.callback=null},i.unstable_continueExecution=function(){P||O||(P=!0,wt())},i.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<re?Math.floor(1e3/re):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_getFirstCallbackNode=function(){return t(p)},i.unstable_next=function(re){switch(S){case 1:case 2:case 3:var Ee=3;break;default:Ee=S}var pe=S;S=Ee;try{return re()}finally{S=pe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(re,Ee){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var pe=S;S=re;try{return Ee()}finally{S=pe}},i.unstable_scheduleCallback=function(re,Ee,pe){var He=i.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?He+pe:He):pe=He,re){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=pe+N,re={id:E++,callback:Ee,priorityLevel:re,startTime:pe,expirationTime:N,sortIndex:-1},pe>He?(re.sortIndex=pe,e(g,re),t(p)===null&&re===t(g)&&(K?(G(_e),_e=-1):K=!0,pt(se,pe-He))):(re.sortIndex=N,e(p,re),P||O||(P=!0,wt())),re},i.unstable_shouldYield=A,i.unstable_wrapCallback=function(re){var Ee=S;return function(){var pe=S;S=Ee;try{return re.apply(this,arguments)}finally{S=pe}}}}(Em)),Em}var zv;function nR(){return zv||(zv=1,vm.exports=tR()),vm.exports}var Tm={exports:{}},Qt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function iR(){if(Bv)return Qt;Bv=1;var i=yp();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,E){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:w==null?null:""+w,children:p,containerInfo:g,implementation:E}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Qt.createPortal=function(p,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(p,g,null,E)},Qt.flushSync=function(p){var g=h.T,E=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=g,s.p=E,s.d.f()}},Qt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},Qt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Qt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var E=g.as,w=d(E,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,O=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:O}):E==="script"&&s.d.X(p,{crossOrigin:w,integrity:S,fetchPriority:O,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Qt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},Qt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,w=d(E,g.crossOrigin);s.d.L(p,E,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Qt.preloadModule=function(p,g){if(typeof p=="string")if(g){var E=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},Qt.requestFormReset=function(p){s.d.r(p)},Qt.unstable_batchedUpdates=function(p,g){return p(g)},Qt.useFormState=function(p,g,E){return h.H.useFormState(p,g,E)},Qt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Qt.version="19.0.0",Qt}var jv;function rR(){if(jv)return Tm.exports;jv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Tm.exports=iR(),Tm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function sR(){if(qv)return $l;qv=1;var i=nR(),e=yp(),t=rR();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),O=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),se=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function _e(n){return n===null||typeof n!="object"?null:(n=ae&&n[ae]||n["@@iterator"],typeof n=="function"?n:null)}var k=Symbol.for("react.client.reference");function R(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===k?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case p:return"Fragment";case d:return"Portal";case E:return"Profiler";case g:return"StrictMode";case K:return"Suspense";case U:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Provider";case S:return(n._context.displayName||"Context")+".Consumer";case P:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return r=n.displayName||null,r!==null?r:R(n.type)||"Memo";case te:r=n._payload,n=n._init;try{return R(n(r))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,x,B;function D(n){if(x===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||"",B=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+x+n+B}var wt=!1;function pt(n,r){if(!n||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch($){var q=$}Reflect.construct(n,[],ee)}else{try{ee.call()}catch($){q=$}n.call(ee.prototype)}}else{try{throw Error()}catch($){q=$}(ee=n())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch($){if($&&q&&typeof $.stack=="string")return[$.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),v=m[0],T=m[1];if(v&&T){var I=v.split(`
`),V=T.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<V.length&&!V[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===V.length)for(l=I.length-1,f=V.length-1;1<=l&&0<=f&&I[l]!==V[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==V[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==V[f]){var Q=`
`+I[l].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=l&&0<=f);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?D(a):""}function re(n){switch(n.tag){case 26:case 27:case 5:return D(n.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 15:return n=pt(n.type,!1),n;case 11:return n=pt(n.type.render,!1),n;case 1:return n=pt(n.type,!0),n;default:return""}}function Ee(n){try{var r="";do r+=re(n),n=n.return;while(n);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pe(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function He(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function N(n){if(pe(n)!==n)throw Error(s(188))}function ne(n){var r=n.alternate;if(!r){if(r=pe(n),r===null)throw Error(s(188));return r!==n?null:n}for(var a=n,l=r;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return N(f),n;if(m===l)return N(f),r;m=m.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=m;else{for(var v=!1,T=f.child;T;){if(T===a){v=!0,a=f,l=m;break}if(T===l){v=!0,l=f,a=m;break}T=T.sibling}if(!v){for(T=m.child;T;){if(T===a){v=!0,a=m,l=f;break}if(T===l){v=!0,l=m,a=f;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:r}function de(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=de(n),r!==null)return r;n=n.sibling}return null}var oe=Array.isArray,le=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ie={pending:!1,data:null,method:null,action:null},Se=[],gt=-1;function ze(n){return{current:n}}function at(n){0>gt||(n.current=Se[gt],Se[gt]=null,gt--)}function Ke(n,r){gt++,Se[gt]=n.current,n.current=r}var Jt=ze(null),Oi=ze(null),Sn=ze(null),dr=ze(null);function mr(n,r){switch(Ke(Sn,r),Ke(Oi,n),Ke(Jt,null),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?uv(r):0;break;default:if(n=n===8?r.parentNode:r,r=n.tagName,n=n.namespaceURI)n=uv(n),r=cv(n,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}at(Jt),Ke(Jt,r)}function Ni(){at(Jt),at(Oi),at(Sn)}function jo(n){n.memoizedState!==null&&Ke(dr,n);var r=Jt.current,a=cv(r,n.type);r!==a&&(Ke(Oi,n),Ke(Jt,a))}function ya(n){Oi.current===n&&(at(Jt),at(Oi)),dr.current===n&&(at(dr),jl._currentValue=Ie)}var va=Object.prototype.hasOwnProperty,Es=i.unstable_scheduleCallback,Ea=i.unstable_cancelCallback,yf=i.unstable_shouldYield,qo=i.unstable_requestPaint,ln=i.unstable_now,Vu=i.unstable_getCurrentPriorityLevel,bt=i.unstable_ImmediatePriority,Nt=i.unstable_UserBlockingPriority,ki=i.unstable_NormalPriority,Pu=i.unstable_LowPriority,Ho=i.unstable_IdlePriority,vf=i.log,Ts=i.unstable_setDisableYieldValue,pr=null,Kt=null;function Fo(n){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(pr,n,void 0,(n.current.flags&128)===128)}catch{}}function si(n){if(typeof vf=="function"&&Ts(n),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(pr,n)}catch{}}var en=Math.clz32?Math.clz32:Lu,Go=Math.log,Uu=Math.LN2;function Lu(n){return n>>>=0,n===0?32:31-(Go(n)/Uu|0)|0}var ai=128,gr=4194304;function Gn(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Rn(n,r){var a=n.pendingLanes;if(a===0)return 0;var l=0,f=n.suspendedLanes,m=n.pingedLanes,v=n.warmLanes;n=n.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~f,a!==0?l=Gn(a):(m&=T,m!==0?l=Gn(m):n||(v=T&~v,v!==0&&(l=Gn(v))))):(T=a&~f,T!==0?l=Gn(T):m!==0?l=Gn(m):n||(v=a&~v,v!==0&&(l=Gn(v)))),l===0?0:r!==0&&r!==l&&(r&f)===0&&(f=l&-l,v=r&-r,f>=v||f===32&&(v&4194176)!==0)?r:l}function _r(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Ta(n,r){switch(n){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ko(){var n=ai;return ai<<=1,(ai&4194176)===0&&(ai=128),n}function yr(){var n=gr;return gr<<=1,(gr&62914560)===0&&(gr=4194304),n}function wa(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function ht(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function zu(n,r,a,l,f,m){var v=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var T=n.entanglements,I=n.expirationTimes,V=n.hiddenUpdates;for(a=v&~a;0<a;){var Q=31-en(a),ee=1<<Q;T[Q]=0,I[Q]=-1;var q=V[Q];if(q!==null)for(V[Q]=null,Q=0;Q<q.length;Q++){var $=q[Q];$!==null&&($.lane&=-536870913)}a&=~ee}l!==0&&vr(n,l,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(v&~r))}function vr(n,r,a){n.pendingLanes|=r,n.suspendedLanes&=~r;var l=31-en(r);n.entangledLanes|=r,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194218}function Er(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var l=31-en(a),f=1<<l;f&r|n[l]&r&&(n[l]|=r),a&=~f}}function Bu(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ju(){var n=le.p;return n!==0?n:(n=window.event,n===void 0?32:Cv(n.type))}function Tr(n,r){var a=le.p;try{return le.p=n,r()}finally{le.p=a}}var oi=Math.random().toString(36).slice(2),kt="__reactFiber$"+oi,At="__reactProps$"+oi,Mi="__reactContainer$"+oi,ws="__reactEvents$"+oi,ba="__reactListeners$"+oi,li="__reactHandles$"+oi,$o="__reactResources$"+oi,wr="__reactMarker$"+oi;function bs(n){delete n[kt],delete n[At],delete n[ws],delete n[ba],delete n[li]}function Kn(n){var r=n[kt];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Mi]||a[kt]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=dv(n);n!==null;){if(a=n[kt])return a;n=dv(n)}return r}n=a,a=n.parentNode}return null}function xi(n){if(n=n[kt]||n[Mi]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function br(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function Ar(n){var r=n[$o];return r||(r=n[$o]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function tt(n){n[wr]=!0}var Qo=new Set,Aa={};function pn(n,r){un(n,r),un(n+"Capture",r)}function un(n,r){for(Aa[n]=r,n=0;n<r.length;n++)Qo.add(r[n])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yo={},Xo={};function qu(n){return va.call(Xo,n)?!0:va.call(Yo,n)?!1:Ef.test(n)?Xo[n]=!0:(Yo[n]=!0,!1)}function Sr(n,r,a){if(qu(r))if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+a)}}function Rr(n,r,a){if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+a)}}function In(n,r,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(r,a,""+l)}}function tn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Hu(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Tf(n){var r=Hu(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),l=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){l=""+v,m.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function As(n){n._valueTracker||(n._valueTracker=Tf(n))}function Wo(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return n&&(l=Hu(n)?n.checked?"true":"false":n.value),n=l,n!==a?(r.setValue(n),!0):!1}function Sa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Vi=/[\n"\\]/g;function ot(n){return n.replace(Vi,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Ir(n,r,a,l,f,m,v,T){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),r!=null?v==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+tn(r)):n.value!==""+tn(r)&&(n.value=""+tn(r)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),r!=null?Ra(n,v,tn(r)):a!=null?Ra(n,v,tn(a)):l!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+tn(T):n.removeAttribute("name")}function Ss(n,r,a,l,f,m,v,T){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;a=a!=null?""+tn(a):"",r=r!=null?""+tn(r):a,T||r===n.value||(n.value=r),n.defaultValue=r}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function Ra(n,r,a){r==="number"&&Sa(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Be(n,r,a,l){if(n=n.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=r.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+tn(a),r=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Rs(n,r,a){if(r!=null&&(r=""+tn(r),r!==n.value&&(n.value=r),a==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=a!=null?""+tn(a):""}function Cr(n,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(oe(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=tn(r),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Cn(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var wf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zo(n,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":l?n.setProperty(r,a):typeof a!="number"||a===0||wf.has(r)?r==="float"?n.cssFloat=a:n[r]=(""+a).trim():n[r]=a+"px"}function Fu(n,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in r)l=r[f],r.hasOwnProperty(f)&&a[f]!==l&&Zo(n,f,l)}else for(var m in r)r.hasOwnProperty(m)&&Zo(n,m,r[m])}function Jo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Af=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ui(n){return Af.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Dn=null;function Ia(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pi=null,Ui=null;function Li(n){var r=xi(n);if(r&&(n=r.stateNode)){var a=n[At]||null;e:switch(n=r.stateNode,r.type){case"input":if(Ir(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ot(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==n&&l.form===n.form){var f=l[At]||null;if(!f)throw Error(s(90));Ir(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===n.form&&Wo(l)}break e;case"textarea":Rs(n,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&Be(n,!!a.multiple,r,!1)}}}var el=!1;function Gu(n,r,a){if(el)return n(r,a);el=!0;try{var l=n(r);return l}finally{if(el=!1,(Pi!==null||Ui!==null)&&(Pc(),Pi&&(r=Pi,n=Ui,Ui=Pi=null,Li(r),n)))for(r=0;r<n.length;r++)Li(n[r])}}function Is(n,r){var a=n.stateNode;if(a===null)return null;var l=a[At]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var On=!1;if(gn)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){On=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{On=!1}var ci=null,Dr=null,zi=null;function tl(){if(zi)return zi;var n,r=Dr,a=r.length,l,f="value"in ci?ci.value:ci.textContent,m=f.length;for(n=0;n<a&&r[n]===f[n];n++);var v=a-n;for(l=1;l<=v&&r[a-l]===f[m-l];l++);return zi=f.slice(n,1<l?1-l:void 0)}function hi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function fi(){return!0}function nl(){return!1}function Mt(n){function r(a,l,f,m,v){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(m):m[T]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?fi:nl,this.isPropagationStopped=nl,this}return C(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fi)},persist:function(){},isPersistent:fi}),r}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=Mt(Fe),Ds=C({},Fe,{view:0,detail:0}),Ku=Mt(Ds),Da,Oa,di,Os=C({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ms,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==di&&(di&&n.type==="mousemove"?(Da=n.screenX-di.screenX,Oa=n.screenY-di.screenY):Oa=Da=0,di=n),Da)},movementY:function(n){return"movementY"in n?n.movementY:Oa}}),Nn=Mt(Os),$u=C({},Os,{dataTransfer:0}),Sf=Mt($u),Ns=C({},Ds,{relatedTarget:0}),Na=Mt(Ns),il=C({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),ka=Mt(il),Qu=C({},Fe,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ma=Mt(Qu),Rf=C({},Fe,{data:0}),rl=Mt(Rf),ks={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Xu[n])?!!r[n]:!1}function Ms(){return sl}var Wu=C({},Ds,{key:function(n){if(n.key){var r=ks[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=hi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Yu[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ms,charCode:function(n){return n.type==="keypress"?hi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?hi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xa=Mt(Wu),Zu=C({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),al=Mt(Zu),Bi=C({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ms}),Ju=Mt(Bi),ec=C({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),tc=Mt(ec),nc=C({},Os,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Va=Mt(nc),nn=C({},Fe,{newState:0,oldState:0}),ic=Mt(nn),rc=[9,13,27,32],mi=gn&&"CompositionEvent"in window,c=null;gn&&"documentMode"in document&&(c=document.documentMode);var _=gn&&"TextEvent"in window&&!c,y=gn&&(!mi||c&&8<c&&11>=c),b=" ",z=!1;function F(n,r){switch(n){case"keyup":return rc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ie(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ve=!1;function St(n,r){switch(n){case"compositionend":return ie(r);case"keypress":return r.which!==32?null:(z=!0,b);case"textInput":return n=r.data,n===b&&z?null:n;default:return null}}function Pe(n,r){if(Ve)return n==="compositionend"||!mi&&F(n,r)?(n=tl(),zi=Dr=ci=null,Ve=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var xt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!xt[n.type]:r==="textarea"}function ji(n,r,a,l){Pi?Ui?Ui.push(l):Ui=[l]:Pi=l,r=jc(r,"onChange"),0<r.length&&(a=new Ca("onChange","change",null,a,l),n.push({event:a,listeners:r}))}var zt=null,pi=null;function ol(n){rv(n,0)}function sc(n){var r=br(n);if(Wo(r))return n}function Mg(n,r){if(n==="change")return r}var xg=!1;if(gn){var If;if(gn){var Cf="oninput"in document;if(!Cf){var Vg=document.createElement("div");Vg.setAttribute("oninput","return;"),Cf=typeof Vg.oninput=="function"}If=Cf}else If=!1;xg=If&&(!document.documentMode||9<document.documentMode)}function Pg(){zt&&(zt.detachEvent("onpropertychange",Ug),pi=zt=null)}function Ug(n){if(n.propertyName==="value"&&sc(pi)){var r=[];ji(r,pi,n,Ia(n)),Gu(ol,r)}}function CA(n,r,a){n==="focusin"?(Pg(),zt=r,pi=a,zt.attachEvent("onpropertychange",Ug)):n==="focusout"&&Pg()}function DA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sc(pi)}function OA(n,r){if(n==="click")return sc(r)}function NA(n,r){if(n==="input"||n==="change")return sc(r)}function kA(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var _n=typeof Object.is=="function"?Object.is:kA;function ll(n,r){if(_n(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!va.call(r,f)||!_n(n[f],r[f]))return!1}return!0}function Lg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zg(n,r){var a=Lg(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=r&&l>=r)return{node:a,offset:r-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lg(a)}}function Bg(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Bg(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function jg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Sa(n.document);r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Sa(n.document)}return r}function Df(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function MA(n,r){var a=jg(r);r=n.focusedElem;var l=n.selectionRange;if(a!==r&&r&&r.ownerDocument&&Bg(r.ownerDocument.documentElement,r)){if(l!==null&&Df(r)){if(n=l.start,a=l.end,a===void 0&&(a=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(a,r.value.length);else if(a=(n=r.ownerDocument||document)&&n.defaultView||window,a.getSelection){a=a.getSelection();var f=r.textContent.length,m=Math.min(l.start,f);l=l.end===void 0?m:Math.min(l.end,f),!a.extend&&m>l&&(f=l,l=m,m=f),f=zg(r,m);var v=zg(r,l);f&&v&&(a.rangeCount!==1||a.anchorNode!==f.node||a.anchorOffset!==f.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(f.node,f.offset),a.removeAllRanges(),m>l?(a.addRange(n),a.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),a.addRange(n)))}}for(n=[],a=r;a=a.parentNode;)a.nodeType===1&&n.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)a=n[r],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var xA=gn&&"documentMode"in document&&11>=document.documentMode,Pa=null,Of=null,ul=null,Nf=!1;function qg(n,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nf||Pa==null||Pa!==Sa(l)||(l=Pa,"selectionStart"in l&&Df(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ul&&ll(ul,l)||(ul=l,l=jc(Of,"onSelect"),0<l.length&&(r=new Ca("onSelect","select",null,r,a),n.push({event:r,listeners:l}),r.target=Pa)))}function xs(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ua={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},kf={},Hg={};gn&&(Hg=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function Vs(n){if(kf[n])return kf[n];if(!Ua[n])return n;var r=Ua[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Hg)return kf[n]=r[a];return n}var Fg=Vs("animationend"),Gg=Vs("animationiteration"),Kg=Vs("animationstart"),VA=Vs("transitionrun"),PA=Vs("transitionstart"),UA=Vs("transitioncancel"),$g=Vs("transitionend"),Qg=new Map,Yg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function $n(n,r){Qg.set(n,r),pn(r,[n])}var kn=[],La=0,Mf=0;function ac(){for(var n=La,r=Mf=La=0;r<n;){var a=kn[r];kn[r++]=null;var l=kn[r];kn[r++]=null;var f=kn[r];kn[r++]=null;var m=kn[r];if(kn[r++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}m!==0&&Xg(a,f,m)}}function oc(n,r,a,l){kn[La++]=n,kn[La++]=r,kn[La++]=a,kn[La++]=l,Mf|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function xf(n,r,a,l){return oc(n,r,a,l),lc(n)}function Or(n,r){return oc(n,null,null,r),lc(n)}function Xg(n,r,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,m=n.return;m!==null;)m.childLanes|=a,l=m.alternate,l!==null&&(l.childLanes|=a),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;f&&r!==null&&n.tag===3&&(m=n.stateNode,f=31-en(a),m=m.hiddenUpdates,n=m[f],n===null?m[f]=[r]:n.push(r),r.lane=a|536870912)}function lc(n){if(50<xl)throw xl=0,Bd=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var za={},Wg=new WeakMap;function Mn(n,r){if(typeof n=="object"&&n!==null){var a=Wg.get(n);return a!==void 0?a:(r={value:n,source:r,stack:Ee(r)},Wg.set(n,r),r)}return{value:n,source:r,stack:Ee(r)}}var Ba=[],ja=0,uc=null,cc=0,xn=[],Vn=0,Ps=null,qi=1,Hi="";function Us(n,r){Ba[ja++]=cc,Ba[ja++]=uc,uc=n,cc=r}function Zg(n,r,a){xn[Vn++]=qi,xn[Vn++]=Hi,xn[Vn++]=Ps,Ps=n;var l=qi;n=Hi;var f=32-en(l)-1;l&=~(1<<f),a+=1;var m=32-en(r)+f;if(30<m){var v=f-f%5;m=(l&(1<<v)-1).toString(32),l>>=v,f-=v,qi=1<<32-en(r)+f|a<<f|l,Hi=m+n}else qi=1<<m|a<<f|l,Hi=n}function Vf(n){n.return!==null&&(Us(n,1),Zg(n,1,0))}function Pf(n){for(;n===uc;)uc=Ba[--ja],Ba[ja]=null,cc=Ba[--ja],Ba[ja]=null;for(;n===Ps;)Ps=xn[--Vn],xn[Vn]=null,Hi=xn[--Vn],xn[Vn]=null,qi=xn[--Vn],xn[Vn]=null}var rn=null,Bt=null,je=!1,Qn=null,gi=!1,Uf=Error(s(519));function Ls(n){var r=Error(s(418,""));throw fl(Mn(r,n)),Uf}function Jg(n){var r=n.stateNode,a=n.type,l=n.memoizedProps;switch(r[kt]=n,r[At]=l,a){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(a=0;a<Pl.length;a++)Me(Pl[a],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Me("invalid",r),Ss(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),As(r);break;case"select":Me("invalid",r);break;case"textarea":Me("invalid",r),Cr(r,l.value,l.defaultValue,l.children),As(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||lv(r.textContent,a)?(l.popover!=null&&(Me("beforetoggle",r),Me("toggle",r)),l.onScroll!=null&&Me("scroll",r),l.onScrollEnd!=null&&Me("scrollend",r),l.onClick!=null&&(r.onclick=qc),r=!0):r=!1,r||Ls(n)}function e_(n){for(rn=n.return;rn;)switch(rn.tag){case 3:case 27:gi=!0;return;case 5:case 13:gi=!1;return;default:rn=rn.return}}function cl(n){if(n!==rn)return!1;if(!je)return e_(n),je=!0,!1;var r=!1,a;if((a=n.tag!==3&&n.tag!==27)&&((a=n.tag===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||im(n.type,n.memoizedProps)),a=!a),a&&(r=!0),r&&Bt&&Ls(n),e_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(r===0){Bt=Xn(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;n=n.nextSibling}Bt=null}}else Bt=rn?Xn(n.stateNode.nextSibling):null;return!0}function hl(){Bt=rn=null,je=!1}function fl(n){Qn===null?Qn=[n]:Qn.push(n)}var dl=Error(s(460)),t_=Error(s(474)),Lf={then:function(){}};function n_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function hc(){}function i_(n,r,a){switch(a=n[a],a===void 0?n.push(r):a!==r&&(r.then(hc,hc),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,n===dl?Error(s(483)):n;default:if(typeof r.status=="string")r.then(hc,hc);else{if(n=Xe,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(l){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=l}},function(l){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,n===dl?Error(s(483)):n}throw ml=r,dl}}var ml=null;function r_(){if(ml===null)throw Error(s(459));var n=ml;return ml=null,n}var qa=null,pl=0;function fc(n){var r=pl;return pl+=1,qa===null&&(qa=[]),i_(qa,n,r)}function gl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function dc(n,r){throw r.$$typeof===u?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function s_(n){var r=n._init;return r(n._payload)}function a_(n){function r(L,M){if(n){var j=L.deletions;j===null?(L.deletions=[M],L.flags|=16):j.push(M)}}function a(L,M){if(!n)return null;for(;M!==null;)r(L,M),M=M.sibling;return null}function l(L){for(var M=new Map;L!==null;)L.key!==null?M.set(L.key,L):M.set(L.index,L),L=L.sibling;return M}function f(L,M){return L=qr(L,M),L.index=0,L.sibling=null,L}function m(L,M,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<M?(L.flags|=33554434,M):j):(L.flags|=33554434,M)):(L.flags|=1048576,M)}function v(L){return n&&L.alternate===null&&(L.flags|=33554434),L}function T(L,M,j,X){return M===null||M.tag!==6?(M=kd(j,L.mode,X),M.return=L,M):(M=f(M,j),M.return=L,M)}function I(L,M,j,X){var he=j.type;return he===p?Q(L,M,j.props.children,X,j.key):M!==null&&(M.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===te&&s_(he)===M.type)?(M=f(M,j.props),gl(M,j),M.return=L,M):(M=Nc(j.type,j.key,j.props,null,L.mode,X),gl(M,j),M.return=L,M)}function V(L,M,j,X){return M===null||M.tag!==4||M.stateNode.containerInfo!==j.containerInfo||M.stateNode.implementation!==j.implementation?(M=Md(j,L.mode,X),M.return=L,M):(M=f(M,j.children||[]),M.return=L,M)}function Q(L,M,j,X,he){return M===null||M.tag!==7?(M=Qs(j,L.mode,X,he),M.return=L,M):(M=f(M,j),M.return=L,M)}function ee(L,M,j){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=kd(""+M,L.mode,j),M.return=L,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case h:return j=Nc(M.type,M.key,M.props,null,L.mode,j),gl(j,M),j.return=L,j;case d:return M=Md(M,L.mode,j),M.return=L,M;case te:var X=M._init;return M=X(M._payload),ee(L,M,j)}if(oe(M)||_e(M))return M=Qs(M,L.mode,j,null),M.return=L,M;if(typeof M.then=="function")return ee(L,fc(M),j);if(M.$$typeof===O)return ee(L,Cc(L,M),j);dc(L,M)}return null}function q(L,M,j,X){var he=M!==null?M.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return he!==null?null:T(L,M,""+j,X);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case h:return j.key===he?I(L,M,j,X):null;case d:return j.key===he?V(L,M,j,X):null;case te:return he=j._init,j=he(j._payload),q(L,M,j,X)}if(oe(j)||_e(j))return he!==null?null:Q(L,M,j,X,null);if(typeof j.then=="function")return q(L,M,fc(j),X);if(j.$$typeof===O)return q(L,M,Cc(L,j),X);dc(L,j)}return null}function $(L,M,j,X,he){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return L=L.get(j)||null,T(M,L,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case h:return L=L.get(X.key===null?j:X.key)||null,I(M,L,X,he);case d:return L=L.get(X.key===null?j:X.key)||null,V(M,L,X,he);case te:var De=X._init;return X=De(X._payload),$(L,M,j,X,he)}if(oe(X)||_e(X))return L=L.get(j)||null,Q(M,L,X,he,null);if(typeof X.then=="function")return $(L,M,j,fc(X),he);if(X.$$typeof===O)return $(L,M,j,Cc(M,X),he);dc(M,X)}return null}function fe(L,M,j,X){for(var he=null,De=null,me=M,ye=M=0,Ut=null;me!==null&&ye<j.length;ye++){me.index>ye?(Ut=me,me=null):Ut=me.sibling;var qe=q(L,me,j[ye],X);if(qe===null){me===null&&(me=Ut);break}n&&me&&qe.alternate===null&&r(L,me),M=m(qe,M,ye),De===null?he=qe:De.sibling=qe,De=qe,me=Ut}if(ye===j.length)return a(L,me),je&&Us(L,ye),he;if(me===null){for(;ye<j.length;ye++)me=ee(L,j[ye],X),me!==null&&(M=m(me,M,ye),De===null?he=me:De.sibling=me,De=me);return je&&Us(L,ye),he}for(me=l(me);ye<j.length;ye++)Ut=$(me,L,ye,j[ye],X),Ut!==null&&(n&&Ut.alternate!==null&&me.delete(Ut.key===null?ye:Ut.key),M=m(Ut,M,ye),De===null?he=Ut:De.sibling=Ut,De=Ut);return n&&me.forEach(function(Yr){return r(L,Yr)}),je&&Us(L,ye),he}function be(L,M,j,X){if(j==null)throw Error(s(151));for(var he=null,De=null,me=M,ye=M=0,Ut=null,qe=j.next();me!==null&&!qe.done;ye++,qe=j.next()){me.index>ye?(Ut=me,me=null):Ut=me.sibling;var Yr=q(L,me,qe.value,X);if(Yr===null){me===null&&(me=Ut);break}n&&me&&Yr.alternate===null&&r(L,me),M=m(Yr,M,ye),De===null?he=Yr:De.sibling=Yr,De=Yr,me=Ut}if(qe.done)return a(L,me),je&&Us(L,ye),he;if(me===null){for(;!qe.done;ye++,qe=j.next())qe=ee(L,qe.value,X),qe!==null&&(M=m(qe,M,ye),De===null?he=qe:De.sibling=qe,De=qe);return je&&Us(L,ye),he}for(me=l(me);!qe.done;ye++,qe=j.next())qe=$(me,L,ye,qe.value,X),qe!==null&&(n&&qe.alternate!==null&&me.delete(qe.key===null?ye:qe.key),M=m(qe,M,ye),De===null?he=qe:De.sibling=qe,De=qe);return n&&me.forEach(function(WS){return r(L,WS)}),je&&Us(L,ye),he}function ct(L,M,j,X){if(typeof j=="object"&&j!==null&&j.type===p&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case h:e:{for(var he=j.key;M!==null;){if(M.key===he){if(he=j.type,he===p){if(M.tag===7){a(L,M.sibling),X=f(M,j.props.children),X.return=L,L=X;break e}}else if(M.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===te&&s_(he)===M.type){a(L,M.sibling),X=f(M,j.props),gl(X,j),X.return=L,L=X;break e}a(L,M);break}else r(L,M);M=M.sibling}j.type===p?(X=Qs(j.props.children,L.mode,X,j.key),X.return=L,L=X):(X=Nc(j.type,j.key,j.props,null,L.mode,X),gl(X,j),X.return=L,L=X)}return v(L);case d:e:{for(he=j.key;M!==null;){if(M.key===he)if(M.tag===4&&M.stateNode.containerInfo===j.containerInfo&&M.stateNode.implementation===j.implementation){a(L,M.sibling),X=f(M,j.children||[]),X.return=L,L=X;break e}else{a(L,M);break}else r(L,M);M=M.sibling}X=Md(j,L.mode,X),X.return=L,L=X}return v(L);case te:return he=j._init,j=he(j._payload),ct(L,M,j,X)}if(oe(j))return fe(L,M,j,X);if(_e(j)){if(he=_e(j),typeof he!="function")throw Error(s(150));return j=he.call(j),be(L,M,j,X)}if(typeof j.then=="function")return ct(L,M,fc(j),X);if(j.$$typeof===O)return ct(L,M,Cc(L,j),X);dc(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,M!==null&&M.tag===6?(a(L,M.sibling),X=f(M,j),X.return=L,L=X):(a(L,M),X=kd(j,L.mode,X),X.return=L,L=X),v(L)):a(L,M)}return function(L,M,j,X){try{pl=0;var he=ct(L,M,j,X);return qa=null,he}catch(me){if(me===dl)throw me;var De=zn(29,me,null,L.mode);return De.lanes=X,De.return=L,De}finally{}}}var zs=a_(!0),o_=a_(!1),Ha=ze(null),mc=ze(0);function l_(n,r){n=er,Ke(mc,n),Ke(Ha,r),er=n|r.baseLanes}function zf(){Ke(mc,er),Ke(Ha,Ha.current)}function Bf(){er=mc.current,at(Ha),at(mc)}var Pn=ze(null),_i=null;function Nr(n){var r=n.alternate;Ke(It,It.current&1),Ke(Pn,n),_i===null&&(r===null||Ha.current!==null||r.memoizedState!==null)&&(_i=n)}function u_(n){if(n.tag===22){if(Ke(It,It.current),Ke(Pn,n),_i===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(_i=n)}}else kr()}function kr(){Ke(It,It.current),Ke(Pn,Pn.current)}function Fi(n){at(Pn),_i===n&&(_i=null),at(It)}var It=ze(0);function pc(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var LA=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){r.aborted=!0,n.forEach(function(a){return a()})}},zA=i.unstable_scheduleCallback,BA=i.unstable_NormalPriority,Ct={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jf(){return{controller:new LA,data:new Map,refCount:0}}function _l(n){n.refCount--,n.refCount===0&&zA(BA,function(){n.controller.abort()})}var yl=null,qf=0,Fa=0,Ga=null;function jA(n,r){if(yl===null){var a=yl=[];qf=0,Fa=Qd(),Ga={status:"pending",value:void 0,then:function(l){a.push(l)}}}return qf++,r.then(c_,c_),r}function c_(){if(--qf===0&&yl!==null){Ga!==null&&(Ga.status="fulfilled");var n=yl;yl=null,Fa=0,Ga=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function qA(n,r){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=r;for(var f=0;f<a.length;f++)(0,a[f])(r)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var h_=A.S;A.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&jA(n,r),h_!==null&&h_(n,r)};var Bs=ze(null);function Hf(){var n=Bs.current;return n!==null?n:Xe.pooledCache}function gc(n,r){r===null?Ke(Bs,Bs.current):Ke(Bs,r.pool)}function f_(){var n=Hf();return n===null?null:{parent:Ct._currentValue,pool:n}}var Mr=0,Ce=null,$e=null,_t=null,_c=!1,Ka=!1,js=!1,yc=0,vl=0,$a=null,HA=0;function ft(){throw Error(s(321))}function Ff(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!_n(n[a],r[a]))return!1;return!0}function Gf(n,r,a,l,f,m){return Mr=m,Ce=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,A.H=n===null||n.memoizedState===null?qs:xr,js=!1,m=a(l,f),js=!1,Ka&&(m=m_(r,a,l,f)),d_(n),m}function d_(n){A.H=yi;var r=$e!==null&&$e.next!==null;if(Mr=0,_t=$e=Ce=null,_c=!1,vl=0,$a=null,r)throw Error(s(300));n===null||Vt||(n=n.dependencies,n!==null&&Ic(n)&&(Vt=!0))}function m_(n,r,a,l){Ce=n;var f=0;do{if(Ka&&($a=null),vl=0,Ka=!1,25<=f)throw Error(s(301));if(f+=1,_t=$e=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}A.H=Hs,m=r(a,l)}while(Ka);return m}function FA(){var n=A.H,r=n.useState()[0];return r=typeof r.then=="function"?El(r):r,n=n.useState()[0],($e!==null?$e.memoizedState:null)!==n&&(Ce.flags|=1024),r}function Kf(){var n=yc!==0;return yc=0,n}function $f(n,r,a){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a}function Qf(n){if(_c){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}_c=!1}Mr=0,_t=$e=Ce=null,Ka=!1,vl=yc=0,$a=null}function cn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Ce.memoizedState=_t=n:_t=_t.next=n,_t}function yt(){if($e===null){var n=Ce.alternate;n=n!==null?n.memoizedState:null}else n=$e.next;var r=_t===null?Ce.memoizedState:_t.next;if(r!==null)_t=r,$e=n;else{if(n===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));$e=n,n={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},_t===null?Ce.memoizedState=_t=n:_t=_t.next=n}return _t}var vc;vc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function El(n){var r=vl;return vl+=1,$a===null&&($a=[]),n=i_($a,n,r),r=Ce,(_t===null?r.memoizedState:_t.next)===null&&(r=r.alternate,A.H=r===null||r.memoizedState===null?qs:xr),n}function Ec(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return El(n);if(n.$$typeof===O)return $t(n)}throw Error(s(438,String(n)))}function Yf(n){var r=null,a=Ce.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=vc(),Ce.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(n),l=0;l<n;l++)a[l]=se;return r.index++,a}function Gi(n,r){return typeof r=="function"?r(n):r}function Tc(n){var r=yt();return Xf(r,$e,n)}function Xf(n,r,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,m=l.pending;if(m!==null){if(f!==null){var v=f.next;f.next=m.next,m.next=v}r.baseQueue=f=m,l.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{r=f.next;var T=v=null,I=null,V=r,Q=!1;do{var ee=V.lane&-536870913;if(ee!==V.lane?(Ue&ee)===ee:(Mr&ee)===ee){var q=V.revertLane;if(q===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),ee===Fa&&(Q=!0);else if((Mr&q)===q){V=V.next,q===Fa&&(Q=!0);continue}else ee={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},I===null?(T=I=ee,v=m):I=I.next=ee,Ce.lanes|=q,Hr|=q;ee=V.action,js&&a(m,ee),m=V.hasEagerState?V.eagerState:a(m,ee)}else q={lane:ee,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},I===null?(T=I=q,v=m):I=I.next=q,Ce.lanes|=ee,Hr|=ee;V=V.next}while(V!==null&&V!==r);if(I===null?v=m:I.next=T,!_n(m,n.memoizedState)&&(Vt=!0,Q&&(a=Ga,a!==null)))throw a;n.memoizedState=m,n.baseState=v,n.baseQueue=I,l.lastRenderedState=m}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Wf(n){var r=yt(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,m=r.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do m=n(m,v.action),v=v.next;while(v!==f);_n(m,r.memoizedState)||(Vt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,l]}function p_(n,r,a){var l=Ce,f=yt(),m=je;if(m){if(a===void 0)throw Error(s(407));a=a()}else a=r();var v=!_n(($e||f).memoizedState,a);if(v&&(f.memoizedState=a,Vt=!0),f=f.queue,ed(y_.bind(null,l,f,n),[n]),f.getSnapshot!==r||v||_t!==null&&_t.memoizedState.tag&1){if(l.flags|=2048,Qa(9,__.bind(null,l,f,a,r),{destroy:void 0},null),Xe===null)throw Error(s(349));m||(Mr&60)!==0||g_(l,r,a)}return a}function g_(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ce.updateQueue,r===null?(r=vc(),Ce.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function __(n,r,a,l){r.value=a,r.getSnapshot=l,v_(r)&&E_(n)}function y_(n,r,a){return a(function(){v_(r)&&E_(n)})}function v_(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!_n(n,a)}catch{return!0}}function E_(n){var r=Or(n,2);r!==null&&sn(r,n,2)}function Zf(n){var r=cn();if(typeof n=="function"){var a=n;if(n=a(),js){si(!0);try{a()}finally{si(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:n},r}function T_(n,r,a,l){return n.baseState=a,Xf(n,$e,typeof l=="function"?l:Gi)}function GA(n,r,a,l,f){if(Ac(n))throw Error(s(485));if(n=r.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){m.listeners.push(v)}};A.T!==null?a(!0):m.isTransition=!1,l(m),a=r.pending,a===null?(m.next=r.pending=m,w_(r,m)):(m.next=a.next,r.pending=a.next=m)}}function w_(n,r){var a=r.action,l=r.payload,f=n.state;if(r.isTransition){var m=A.T,v={};A.T=v;try{var T=a(f,l),I=A.S;I!==null&&I(v,T),b_(n,r,T)}catch(V){Jf(n,r,V)}finally{A.T=m}}else try{m=a(f,l),b_(n,r,m)}catch(V){Jf(n,r,V)}}function b_(n,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){A_(n,r,l)},function(l){return Jf(n,r,l)}):A_(n,r,a)}function A_(n,r,a){r.status="fulfilled",r.value=a,S_(r),n.state=a,r=n.pending,r!==null&&(a=r.next,a===r?n.pending=null:(a=a.next,r.next=a,w_(n,a)))}function Jf(n,r,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,S_(r),r=r.next;while(r!==l)}n.action=null}function S_(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function R_(n,r){return r}function I_(n,r){if(je){var a=Xe.formState;if(a!==null){e:{var l=Ce;if(je){if(Bt){t:{for(var f=Bt,m=gi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Xn(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Bt=Xn(f.nextSibling),l=f.data==="F!";break e}}Ls(l)}l=!1}l&&(r=a[0])}}return a=cn(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:R_,lastRenderedState:r},a.queue=l,a=G_.bind(null,Ce,l),l.dispatch=a,l=Zf(!1),m=sd.bind(null,Ce,!1,l.queue),l=cn(),f={state:r,dispatch:null,action:n,pending:null},l.queue=f,a=GA.bind(null,Ce,f,m,a),f.dispatch=a,l.memoizedState=n,[r,a,!1]}function C_(n){var r=yt();return D_(r,$e,n)}function D_(n,r,a){r=Xf(n,r,R_)[0],n=Tc(Gi)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?El(r):r;var l=yt(),f=l.queue,m=f.dispatch;return a!==l.memoizedState&&(Ce.flags|=2048,Qa(9,KA.bind(null,f,a),{destroy:void 0},null)),[r,m,n]}function KA(n,r){n.action=r}function O_(n){var r=yt(),a=$e;if(a!==null)return D_(r,a,n);yt(),r=r.memoizedState,a=yt();var l=a.queue.dispatch;return a.memoizedState=n,[r,l,!1]}function Qa(n,r,a,l){return n={tag:n,create:r,inst:a,deps:l,next:null},r=Ce.updateQueue,r===null&&(r=vc(),Ce.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,r.lastEffect=n),n}function N_(){return yt().memoizedState}function wc(n,r,a,l){var f=cn();Ce.flags|=n,f.memoizedState=Qa(1|r,a,{destroy:void 0},l===void 0?null:l)}function bc(n,r,a,l){var f=yt();l=l===void 0?null:l;var m=f.memoizedState.inst;$e!==null&&l!==null&&Ff(l,$e.memoizedState.deps)?f.memoizedState=Qa(r,a,m,l):(Ce.flags|=n,f.memoizedState=Qa(1|r,a,m,l))}function k_(n,r){wc(8390656,8,n,r)}function ed(n,r){bc(2048,8,n,r)}function M_(n,r){return bc(4,2,n,r)}function x_(n,r){return bc(4,4,n,r)}function V_(n,r){if(typeof r=="function"){n=n();var a=r(n);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function P_(n,r,a){a=a!=null?a.concat([n]):null,bc(4,4,V_.bind(null,r,n),a)}function td(){}function U_(n,r){var a=yt();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Ff(r,l[1])?l[0]:(a.memoizedState=[n,r],n)}function L_(n,r){var a=yt();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Ff(r,l[1]))return l[0];if(l=n(),js){si(!0);try{n()}finally{si(!1)}}return a.memoizedState=[l,r],l}function nd(n,r,a){return a===void 0||(Mr&1073741824)!==0?n.memoizedState=r:(n.memoizedState=a,n=By(),Ce.lanes|=n,Hr|=n,a)}function z_(n,r,a,l){return _n(a,r)?a:Ha.current!==null?(n=nd(n,a,l),_n(n,r)||(Vt=!0),n):(Mr&42)===0?(Vt=!0,n.memoizedState=a):(n=By(),Ce.lanes|=n,Hr|=n,r)}function B_(n,r,a,l,f){var m=le.p;le.p=m!==0&&8>m?m:8;var v=A.T,T={};A.T=T,sd(n,!1,r,a);try{var I=f(),V=A.S;if(V!==null&&V(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Q=qA(I,l);Tl(n,r,Q,Tn(n))}else Tl(n,r,l,Tn(n))}catch(ee){Tl(n,r,{then:function(){},status:"rejected",reason:ee},Tn())}finally{le.p=m,A.T=v}}function $A(){}function id(n,r,a,l){if(n.tag!==5)throw Error(s(476));var f=j_(n).queue;B_(n,f,r,Ie,a===null?$A:function(){return q_(n),a(l)})}function j_(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:Ie,baseState:Ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Ie},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function q_(n){var r=j_(n).next.queue;Tl(n,r,{},Tn())}function rd(){return $t(jl)}function H_(){return yt().memoizedState}function F_(){return yt().memoizedState}function QA(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var a=Tn();n=Ur(a);var l=Lr(r,n,a);l!==null&&(sn(l,r,a),Al(l,r,a)),r={cache:jf()},n.payload=r;return}r=r.return}}function YA(n,r,a){var l=Tn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ac(n)?K_(r,a):(a=xf(n,r,a,l),a!==null&&(sn(a,n,l),$_(a,r,l)))}function G_(n,r,a){var l=Tn();Tl(n,r,a,l)}function Tl(n,r,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ac(n))K_(r,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var v=r.lastRenderedState,T=m(v,a);if(f.hasEagerState=!0,f.eagerState=T,_n(T,v))return oc(n,r,f,0),Xe===null&&ac(),!1}catch{}finally{}if(a=xf(n,r,f,l),a!==null)return sn(a,n,l),$_(a,r,l),!0}return!1}function sd(n,r,a,l){if(l={lane:2,revertLane:Qd(),action:l,hasEagerState:!1,eagerState:null,next:null},Ac(n)){if(r)throw Error(s(479))}else r=xf(n,a,l,2),r!==null&&sn(r,n,2)}function Ac(n){var r=n.alternate;return n===Ce||r!==null&&r===Ce}function K_(n,r){Ka=_c=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function $_(n,r,a){if((a&4194176)!==0){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,Er(n,a)}}var yi={readContext:$t,use:Ec,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft};yi.useCacheRefresh=ft,yi.useMemoCache=ft,yi.useHostTransitionStatus=ft,yi.useFormState=ft,yi.useActionState=ft,yi.useOptimistic=ft;var qs={readContext:$t,use:Ec,useCallback:function(n,r){return cn().memoizedState=[n,r===void 0?null:r],n},useContext:$t,useEffect:k_,useImperativeHandle:function(n,r,a){a=a!=null?a.concat([n]):null,wc(4194308,4,V_.bind(null,r,n),a)},useLayoutEffect:function(n,r){return wc(4194308,4,n,r)},useInsertionEffect:function(n,r){wc(4,2,n,r)},useMemo:function(n,r){var a=cn();r=r===void 0?null:r;var l=n();if(js){si(!0);try{n()}finally{si(!1)}}return a.memoizedState=[l,r],l},useReducer:function(n,r,a){var l=cn();if(a!==void 0){var f=a(r);if(js){si(!0);try{a(r)}finally{si(!1)}}}else f=r;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=YA.bind(null,Ce,n),[l.memoizedState,n]},useRef:function(n){var r=cn();return n={current:n},r.memoizedState=n},useState:function(n){n=Zf(n);var r=n.queue,a=G_.bind(null,Ce,r);return r.dispatch=a,[n.memoizedState,a]},useDebugValue:td,useDeferredValue:function(n,r){var a=cn();return nd(a,n,r)},useTransition:function(){var n=Zf(!1);return n=B_.bind(null,Ce,n.queue,!0,!1),cn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,a){var l=Ce,f=cn();if(je){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),Xe===null)throw Error(s(349));(Ue&60)!==0||g_(l,r,a)}f.memoizedState=a;var m={value:a,getSnapshot:r};return f.queue=m,k_(y_.bind(null,l,m,n),[n]),l.flags|=2048,Qa(9,__.bind(null,l,m,a,r),{destroy:void 0},null),a},useId:function(){var n=cn(),r=Xe.identifierPrefix;if(je){var a=Hi,l=qi;a=(l&~(1<<32-en(l)-1)).toString(32)+a,r=":"+r+"R"+a,a=yc++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=HA++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},useCacheRefresh:function(){return cn().memoizedState=QA.bind(null,Ce)}};qs.useMemoCache=Yf,qs.useHostTransitionStatus=rd,qs.useFormState=I_,qs.useActionState=I_,qs.useOptimistic=function(n){var r=cn();r.memoizedState=r.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=sd.bind(null,Ce,!0,a),a.dispatch=r,[n,r]};var xr={readContext:$t,use:Ec,useCallback:U_,useContext:$t,useEffect:ed,useImperativeHandle:P_,useInsertionEffect:M_,useLayoutEffect:x_,useMemo:L_,useReducer:Tc,useRef:N_,useState:function(){return Tc(Gi)},useDebugValue:td,useDeferredValue:function(n,r){var a=yt();return z_(a,$e.memoizedState,n,r)},useTransition:function(){var n=Tc(Gi)[0],r=yt().memoizedState;return[typeof n=="boolean"?n:El(n),r]},useSyncExternalStore:p_,useId:H_};xr.useCacheRefresh=F_,xr.useMemoCache=Yf,xr.useHostTransitionStatus=rd,xr.useFormState=C_,xr.useActionState=C_,xr.useOptimistic=function(n,r){var a=yt();return T_(a,$e,n,r)};var Hs={readContext:$t,use:Ec,useCallback:U_,useContext:$t,useEffect:ed,useImperativeHandle:P_,useInsertionEffect:M_,useLayoutEffect:x_,useMemo:L_,useReducer:Wf,useRef:N_,useState:function(){return Wf(Gi)},useDebugValue:td,useDeferredValue:function(n,r){var a=yt();return $e===null?nd(a,n,r):z_(a,$e.memoizedState,n,r)},useTransition:function(){var n=Wf(Gi)[0],r=yt().memoizedState;return[typeof n=="boolean"?n:El(n),r]},useSyncExternalStore:p_,useId:H_};Hs.useCacheRefresh=F_,Hs.useMemoCache=Yf,Hs.useHostTransitionStatus=rd,Hs.useFormState=O_,Hs.useActionState=O_,Hs.useOptimistic=function(n,r){var a=yt();return $e!==null?T_(a,$e,n,r):(a.baseState=n,[n,a.queue.dispatch])};function ad(n,r,a,l){r=n.memoizedState,a=a(l,r),a=a==null?r:C({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var od={isMounted:function(n){return(n=n._reactInternals)?pe(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var l=Tn(),f=Ur(l);f.payload=r,a!=null&&(f.callback=a),r=Lr(n,f,l),r!==null&&(sn(r,n,l),Al(r,n,l))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var l=Tn(),f=Ur(l);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=Lr(n,f,l),r!==null&&(sn(r,n,l),Al(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Tn(),l=Ur(a);l.tag=2,r!=null&&(l.callback=r),r=Lr(n,l,a),r!==null&&(sn(r,n,a),Al(r,n,a))}};function Q_(n,r,a,l,f,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,v):r.prototype&&r.prototype.isPureReactComponent?!ll(a,l)||!ll(f,m):!0}function Y_(n,r,a,l){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==n&&od.enqueueReplaceState(r,r.state,null)}function Fs(n,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(n=n.defaultProps){a===r&&(a=C({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var Sc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function X_(n){Sc(n)}function W_(n){console.error(n)}function Z_(n){Sc(n)}function Rc(n,r){try{var a=n.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function J_(n,r,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ld(n,r,a){return a=Ur(a),a.tag=3,a.payload={element:null},a.callback=function(){Rc(n,r)},a}function ey(n){return n=Ur(n),n.tag=3,n}function ty(n,r,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;n.payload=function(){return f(m)},n.callback=function(){J_(r,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){J_(r,a,l),typeof f!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function XA(n,r,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&bl(r,a,f,!0),a=Pn.current,a!==null){switch(a.tag){case 13:return _i===null?Hd():a.alternate===null&&ut===0&&(ut=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Lf?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),Gd(n,l,f)),!1;case 22:return a.flags|=65536,l===Lf?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),Gd(n,l,f)),!1}throw Error(s(435,a.tag))}return Gd(n,l,f),Hd(),!1}if(je)return r=Pn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,l!==Uf&&(n=Error(s(422),{cause:l}),fl(Mn(n,a)))):(l!==Uf&&(r=Error(s(423),{cause:l}),fl(Mn(r,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=Mn(l,a),f=ld(n.stateNode,l,f),bd(n,f),ut!==4&&(ut=2)),!1;var m=Error(s(520),{cause:l});if(m=Mn(m,a),kl===null?kl=[m]:kl.push(m),ut!==4&&(ut=2),r===null)return!0;l=Mn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=ld(a.stateNode,l,n),bd(a,n),!1;case 1:if(r=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Fr===null||!Fr.has(m))))return a.flags|=65536,f&=-f,a.lanes|=f,f=ey(f),ty(f,n,a,l),bd(a,f),!1}a=a.return}while(a!==null);return!1}var ny=Error(s(461)),Vt=!1;function jt(n,r,a,l){r.child=n===null?o_(r,null,a,l):zs(r,n.child,a,l)}function iy(n,r,a,l,f){a=a.render;var m=r.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ks(r),l=Gf(n,r,a,v,m,f),T=Kf(),n!==null&&!Vt?($f(n,r,f),Ki(n,r,f)):(je&&T&&Vf(r),r.flags|=1,jt(n,r,l,f),r.child)}function ry(n,r,a,l,f){if(n===null){var m=a.type;return typeof m=="function"&&!Nd(m)&&m.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=m,sy(n,r,m,l,f)):(n=Nc(a.type,null,l,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!_d(n,f)){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:ll,a(v,l)&&n.ref===r.ref)return Ki(n,r,f)}return r.flags|=1,n=qr(m,l),n.ref=r.ref,n.return=r,r.child=n}function sy(n,r,a,l,f){if(n!==null){var m=n.memoizedProps;if(ll(m,l)&&n.ref===r.ref)if(Vt=!1,r.pendingProps=l=m,_d(n,f))(n.flags&131072)!==0&&(Vt=!0);else return r.lanes=n.lanes,Ki(n,r,f)}return ud(n,r,a,l,f)}function ay(n,r,a){var l=r.pendingProps,f=l.children,m=(r.stateNode._pendingVisibility&2)!==0,v=n!==null?n.memoizedState:null;if(wl(n,r),l.mode==="hidden"||m){if((r.flags&128)!==0){if(l=v!==null?v.baseLanes|a:a,n!==null){for(f=r.child=n.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~l}else r.childLanes=0,r.child=null;return oy(n,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&gc(r,v!==null?v.cachePool:null),v!==null?l_(r,v):zf(),u_(r);else return r.lanes=r.childLanes=536870912,oy(n,r,v!==null?v.baseLanes|a:a,a)}else v!==null?(gc(r,v.cachePool),l_(r,v),kr(),r.memoizedState=null):(n!==null&&gc(r,null),zf(),kr());return jt(n,r,f,a),r.child}function oy(n,r,a,l){var f=Hf();return f=f===null?null:{parent:Ct._currentValue,pool:f},r.memoizedState={baseLanes:a,cachePool:f},n!==null&&gc(r,null),zf(),u_(r),n!==null&&bl(n,r,l,!0),null}function wl(n,r){var a=r.ref;if(a===null)n!==null&&n.ref!==null&&(r.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(r.flags|=2097664)}}function ud(n,r,a,l,f){return Ks(r),a=Gf(n,r,a,l,void 0,f),l=Kf(),n!==null&&!Vt?($f(n,r,f),Ki(n,r,f)):(je&&l&&Vf(r),r.flags|=1,jt(n,r,a,f),r.child)}function ly(n,r,a,l,f,m){return Ks(r),r.updateQueue=null,a=m_(r,l,a,f),d_(n),l=Kf(),n!==null&&!Vt?($f(n,r,m),Ki(n,r,m)):(je&&l&&Vf(r),r.flags|=1,jt(n,r,a,m),r.child)}function uy(n,r,a,l,f){if(Ks(r),r.stateNode===null){var m=za,v=a.contextType;typeof v=="object"&&v!==null&&(m=$t(v)),m=new a(l,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=od,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=l,m.state=r.memoizedState,m.refs={},Td(r),v=a.contextType,m.context=typeof v=="object"&&v!==null?$t(v):za,m.state=r.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ad(r,a,v,l),m.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(v=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),v!==m.state&&od.enqueueReplaceState(m,m.state,null),Rl(r,l,m,f),Sl(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(n===null){m=r.stateNode;var T=r.memoizedProps,I=Fs(a,T);m.props=I;var V=m.context,Q=a.contextType;v=za,typeof Q=="object"&&Q!==null&&(v=$t(Q));var ee=a.getDerivedStateFromProps;Q=typeof ee=="function"||typeof m.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T||V!==v)&&Y_(r,m,l,v),Pr=!1;var q=r.memoizedState;m.state=q,Rl(r,l,m,f),Sl(),V=r.memoizedState,T||q!==V||Pr?(typeof ee=="function"&&(ad(r,a,ee,l),V=r.memoizedState),(I=Pr||Q_(r,a,I,l,q,V,v))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=V),m.props=l,m.state=V,m.context=v,l=I):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{m=r.stateNode,wd(n,r),v=r.memoizedProps,Q=Fs(a,v),m.props=Q,ee=r.pendingProps,q=m.context,V=a.contextType,I=za,typeof V=="object"&&V!==null&&(I=$t(V)),T=a.getDerivedStateFromProps,(V=typeof T=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==ee||q!==I)&&Y_(r,m,l,I),Pr=!1,q=r.memoizedState,m.state=q,Rl(r,l,m,f),Sl();var $=r.memoizedState;v!==ee||q!==$||Pr||n!==null&&n.dependencies!==null&&Ic(n.dependencies)?(typeof T=="function"&&(ad(r,a,T,l),$=r.memoizedState),(Q=Pr||Q_(r,a,Q,l,q,$,I)||n!==null&&n.dependencies!==null&&Ic(n.dependencies))?(V||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,$,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,$,I)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=$),m.props=l,m.state=$,m.context=I,l=Q):(typeof m.componentDidUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),l=!1)}return m=l,wl(n,r),l=(r.flags&128)!==0,m||l?(m=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&l?(r.child=zs(r,n.child,null,f),r.child=zs(r,null,a,f)):jt(n,r,a,f),r.memoizedState=m.state,n=r.child):n=Ki(n,r,f),n}function cy(n,r,a,l){return hl(),r.flags|=256,jt(n,r,a,l),r.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function hd(n){return{baseLanes:n,cachePool:f_()}}function fd(n,r,a){return n=n!==null?n.childLanes&~a:0,r&&(n|=Bn),n}function hy(n,r,a){var l=r.pendingProps,f=!1,m=(r.flags&128)!==0,v;if((v=m)||(v=n!==null&&n.memoizedState===null?!1:(It.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,n===null){if(je){if(f?Nr(r):kr(),je){var T=Bt,I;if(I=T){e:{for(I=T,T=gi;I.nodeType!==8;){if(!T){T=null;break e}if(I=Xn(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(r.memoizedState={dehydrated:T,treeContext:Ps!==null?{id:qi,overflow:Hi}:null,retryLane:536870912},I=zn(18,null,null,0),I.stateNode=T,I.return=r,r.child=I,rn=r,Bt=null,I=!0):I=!1}I||Ls(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?r.lanes=16:r.lanes=536870912,null;Fi(r)}return T=l.children,l=l.fallback,f?(kr(),f=r.mode,T=md({mode:"hidden",children:T},f),l=Qs(l,f,a,null),T.return=r,l.return=r,T.sibling=l,r.child=T,f=r.child,f.memoizedState=hd(a),f.childLanes=fd(n,v,a),r.memoizedState=cd,l):(Nr(r),dd(r,T))}if(I=n.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(m)r.flags&256?(Nr(r),r.flags&=-257,r=pd(n,r,a)):r.memoizedState!==null?(kr(),r.child=n.child,r.flags|=128,r=null):(kr(),f=l.fallback,T=r.mode,l=md({mode:"visible",children:l.children},T),f=Qs(f,T,a,null),f.flags|=2,l.return=r,f.return=r,l.sibling=f,r.child=l,zs(r,n.child,null,a),l=r.child,l.memoizedState=hd(a),l.childLanes=fd(n,v,a),r.memoizedState=cd,r=f);else if(Nr(r),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var V=v.dgst;v=V,l=Error(s(419)),l.stack="",l.digest=v,fl({value:l,source:null,stack:null}),r=pd(n,r,a)}else if(Vt||bl(n,r,a,!1),v=(a&n.childLanes)!==0,Vt||v){if(v=Xe,v!==null){if(l=a&-a,(l&42)!==0)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane)throw I.retryLane=l,Or(n,l),sn(v,n,l),ny}T.data==="$?"||Hd(),r=pd(n,r,a)}else T.data==="$?"?(r.flags|=128,r.child=n.child,r=hS.bind(null,n),T._reactRetry=r,r=null):(n=I.treeContext,Bt=Xn(T.nextSibling),rn=r,je=!0,Qn=null,gi=!1,n!==null&&(xn[Vn++]=qi,xn[Vn++]=Hi,xn[Vn++]=Ps,qi=n.id,Hi=n.overflow,Ps=r),r=dd(r,l.children),r.flags|=4096);return r}return f?(kr(),f=l.fallback,T=r.mode,I=n.child,V=I.sibling,l=qr(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&31457280,V!==null?f=qr(V,f):(f=Qs(f,T,a,null),f.flags|=2),f.return=r,l.return=r,l.sibling=f,r.child=l,l=f,f=r.child,T=n.child.memoizedState,T===null?T=hd(a):(I=T.cachePool,I!==null?(V=Ct._currentValue,I=I.parent!==V?{parent:V,pool:V}:I):I=f_(),T={baseLanes:T.baseLanes|a,cachePool:I}),f.memoizedState=T,f.childLanes=fd(n,v,a),r.memoizedState=cd,l):(Nr(r),a=n.child,n=a.sibling,a=qr(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,n!==null&&(v=r.deletions,v===null?(r.deletions=[n],r.flags|=16):v.push(n)),r.child=a,r.memoizedState=null,a)}function dd(n,r){return r=md({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function md(n,r){return Uy(n,r,0,null)}function pd(n,r,a){return zs(r,n.child,null,a),n=dd(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function fy(n,r,a){n.lanes|=r;var l=n.alternate;l!==null&&(l.lanes|=r),vd(n.return,r,a)}function gd(n,r,a,l,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=f)}function dy(n,r,a){var l=r.pendingProps,f=l.revealOrder,m=l.tail;if(jt(n,r,l.children,a),l=It.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fy(n,a,r);else if(n.tag===19)fy(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(Ke(It,l),f){case"forwards":for(a=r.child,f=null;a!==null;)n=a.alternate,n!==null&&pc(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),gd(r,!1,f,a,m);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&pc(n)===null){r.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}gd(r,!0,a,null,m);break;case"together":gd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ki(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Hr|=r.lanes,(a&r.childLanes)===0)if(n!==null){if(bl(n,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,a=qr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=qr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function _d(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Ic(n)))}function WA(n,r,a){switch(r.tag){case 3:mr(r,r.stateNode.containerInfo),Vr(r,Ct,n.memoizedState.cache),hl();break;case 27:case 5:jo(r);break;case 4:mr(r,r.stateNode.containerInfo);break;case 10:Vr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Nr(r),r.flags|=128,null):(a&r.child.childLanes)!==0?hy(n,r,a):(Nr(r),n=Ki(n,r,a),n!==null?n.sibling:null);Nr(r);break;case 19:var f=(n.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(bl(n,r,a,!1),l=(a&r.childLanes)!==0),f){if(l)return dy(n,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(It,It.current),l)break;return null;case 22:case 23:return r.lanes=0,ay(n,r,a);case 24:Vr(r,Ct,n.memoizedState.cache)}return Ki(n,r,a)}function my(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps)Vt=!0;else{if(!_d(n,a)&&(r.flags&128)===0)return Vt=!1,WA(n,r,a);Vt=(n.flags&131072)!==0}else Vt=!1,je&&(r.flags&1048576)!==0&&Zg(r,cc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var l=r.elementType,f=l._init;if(l=f(l._payload),r.type=l,typeof l=="function")Nd(l)?(n=Fs(l,n),r.tag=1,r=uy(null,r,l,n,a)):(r.tag=0,r=ud(null,r,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===P){r.tag=11,r=iy(null,r,l,n,a);break e}else if(f===G){r.tag=14,r=ry(null,r,l,n,a);break e}}throw r=R(l)||l,Error(s(306,r,""))}}return r;case 0:return ud(n,r,r.type,r.pendingProps,a);case 1:return l=r.type,f=Fs(l,r.pendingProps),uy(n,r,l,f,a);case 3:e:{if(mr(r,r.stateNode.containerInfo),n===null)throw Error(s(387));var m=r.pendingProps;f=r.memoizedState,l=f.element,wd(n,r),Rl(r,m,null,a);var v=r.memoizedState;if(m=v.cache,Vr(r,Ct,m),m!==f.cache&&Ed(r,[Ct],a,!0),Sl(),m=v.element,f.isDehydrated)if(f={element:m,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=cy(n,r,m,a);break e}else if(m!==l){l=Mn(Error(s(424)),r),fl(l),r=cy(n,r,m,a);break e}else for(Bt=Xn(r.stateNode.containerInfo.firstChild),rn=r,je=!0,Qn=null,gi=!0,a=o_(r,null,m,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hl(),m===l){r=Ki(n,r,a);break e}jt(n,r,m,a)}r=r.child}return r;case 26:return wl(n,r),n===null?(a=_v(r.type,null,r.pendingProps,null))?r.memoizedState=a:je||(a=r.type,n=r.pendingProps,l=Hc(Sn.current).createElement(a),l[kt]=r,l[At]=n,qt(l,a,n),tt(l),r.stateNode=l):r.memoizedState=_v(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return jo(r),n===null&&je&&(l=r.stateNode=mv(r.type,r.pendingProps,Sn.current),rn=r,gi=!0,Bt=Xn(l.firstChild)),l=r.pendingProps.children,n!==null||je?jt(n,r,l,a):r.child=zs(r,null,l,a),wl(n,r),r.child;case 5:return n===null&&je&&((f=l=Bt)&&(l=IS(l,r.type,r.pendingProps,gi),l!==null?(r.stateNode=l,rn=r,Bt=Xn(l.firstChild),gi=!1,f=!0):f=!1),f||Ls(r)),jo(r),f=r.type,m=r.pendingProps,v=n!==null?n.memoizedProps:null,l=m.children,im(f,m)?l=null:v!==null&&im(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=Gf(n,r,FA,null,null,a),jl._currentValue=f),wl(n,r),jt(n,r,l,a),r.child;case 6:return n===null&&je&&((n=a=Bt)&&(a=CS(a,r.pendingProps,gi),a!==null?(r.stateNode=a,rn=r,Bt=null,n=!0):n=!1),n||Ls(r)),null;case 13:return hy(n,r,a);case 4:return mr(r,r.stateNode.containerInfo),l=r.pendingProps,n===null?r.child=zs(r,null,l,a):jt(n,r,l,a),r.child;case 11:return iy(n,r,r.type,r.pendingProps,a);case 7:return jt(n,r,r.pendingProps,a),r.child;case 8:return jt(n,r,r.pendingProps.children,a),r.child;case 12:return jt(n,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Vr(r,r.type,l.value),jt(n,r,l.children,a),r.child;case 9:return f=r.type._context,l=r.pendingProps.children,Ks(r),f=$t(f),l=l(f),r.flags|=1,jt(n,r,l,a),r.child;case 14:return ry(n,r,r.type,r.pendingProps,a);case 15:return sy(n,r,r.type,r.pendingProps,a);case 19:return dy(n,r,a);case 22:return ay(n,r,a);case 24:return Ks(r),l=$t(Ct),n===null?(f=Hf(),f===null&&(f=Xe,m=jf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=a),f=m),r.memoizedState={parent:l,cache:f},Td(r),Vr(r,Ct,f)):((n.lanes&a)!==0&&(wd(n,r),Rl(r,null,null,a),Sl()),f=n.memoizedState,m=r.memoizedState,f.parent!==l?(f={parent:l,cache:l},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Vr(r,Ct,l)):(l=m.cache,Vr(r,Ct,l),l!==f.cache&&Ed(r,[Ct],a,!0))),jt(n,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}var yd=ze(null),Gs=null,$i=null;function Vr(n,r,a){Ke(yd,r._currentValue),r._currentValue=a}function Qi(n){n._currentValue=yd.current,at(yd)}function vd(n,r,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),n===a)break;n=n.return}}function Ed(n,r,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var v=f.child;m=m.firstContext;e:for(;m!==null;){var T=m;m=f;for(var I=0;I<r.length;I++)if(T.context===r[I]){m.lanes|=a,T=m.alternate,T!==null&&(T.lanes|=a),vd(m.return,a,n),l||(v=null);break e}m=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=a,m=v.alternate,m!==null&&(m.lanes|=a),vd(v,a,n),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function bl(n,r,a,l){n=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=f.type;_n(f.pendingProps.value,v.value)||(n!==null?n.push(T):n=[T])}}else if(f===dr.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(jl):n=[jl])}f=f.return}n!==null&&Ed(r,n,a,l),r.flags|=262144}function Ic(n){for(n=n.firstContext;n!==null;){if(!_n(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ks(n){Gs=n,$i=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function $t(n){return py(Gs,n)}function Cc(n,r){return Gs===null&&Ks(n),py(n,r)}function py(n,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},$i===null){if(n===null)throw Error(s(308));$i=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else $i=$i.next=r;return a}var Pr=!1;function Td(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wd(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ur(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Lr(n,r,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(it&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,r=lc(n),Xg(n,null,a),r}return oc(n,l,r,a),lc(n)}function Al(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194176)!==0)){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,Er(n,a)}}function bd(n,r){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?f=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?f=m=r:m=m.next=r}else f=m=r;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}var Ad=!1;function Sl(){if(Ad){var n=Ga;if(n!==null)throw n}}function Rl(n,r,a,l){Ad=!1;var f=n.updateQueue;Pr=!1;var m=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var I=T,V=I.next;I.next=null,v===null?m=V:v.next=V,v=I;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==v&&(T===null?Q.firstBaseUpdate=V:T.next=V,Q.lastBaseUpdate=I))}if(m!==null){var ee=f.baseState;v=0,Q=V=I=null,T=m;do{var q=T.lane&-536870913,$=q!==T.lane;if($?(Ue&q)===q:(l&q)===q){q!==0&&q===Fa&&(Ad=!0),Q!==null&&(Q=Q.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var fe=n,be=T;q=r;var ct=a;switch(be.tag){case 1:if(fe=be.payload,typeof fe=="function"){ee=fe.call(ct,ee,q);break e}ee=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=be.payload,q=typeof fe=="function"?fe.call(ct,ee,q):fe,q==null)break e;ee=C({},ee,q);break e;case 2:Pr=!0}}q=T.callback,q!==null&&(n.flags|=64,$&&(n.flags|=8192),$=f.callbacks,$===null?f.callbacks=[q]:$.push(q))}else $={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(V=Q=$,I=ee):Q=Q.next=$,v|=q;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;$=T,T=$.next,$.next=null,f.lastBaseUpdate=$,f.shared.pending=null}}while(!0);Q===null&&(I=ee),f.baseState=I,f.firstBaseUpdate=V,f.lastBaseUpdate=Q,m===null&&(f.shared.lanes=0),Hr|=v,n.lanes=v,n.memoizedState=ee}}function gy(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function _y(n,r){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)gy(a[n],r)}function Il(n,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var m=a.create,v=a.inst;l=m(),v.destroy=l}a=a.next}while(a!==f)}}catch(T){Ye(r,r.return,T)}}function zr(n,r,a){try{var l=r.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&n)===n){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=r;var I=a;try{T()}catch(V){Ye(f,I,V)}}}l=l.next}while(l!==m)}}catch(V){Ye(r,r.return,V)}}function yy(n){var r=n.updateQueue;if(r!==null){var a=n.stateNode;try{_y(r,a)}catch(l){Ye(n,n.return,l)}}}function vy(n,r,a){a.props=Fs(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){Ye(n,r,l)}}function $s(n,r){try{var a=n.ref;if(a!==null){var l=n.stateNode;switch(n.tag){case 26:case 27:case 5:var f=l;break;default:f=l}typeof a=="function"?n.refCleanup=a(f):a.current=f}}catch(m){Ye(n,r,m)}}function yn(n,r){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){Ye(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){Ye(n,r,f)}else a.current=null}function Ey(n){var r=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){Ye(n,n.return,f)}}function Ty(n,r,a){try{var l=n.stateNode;wS(l,n.type,a,r),l[At]=r}catch(f){Ye(n,n.return,f)}}function wy(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27||n.tag===4}function Sd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||wy(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==27&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Rd(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=qc));else if(l!==4&&l!==27&&(n=n.child,n!==null))for(Rd(n,r,a),n=n.sibling;n!==null;)Rd(n,r,a),n=n.sibling}function Dc(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(l!==4&&l!==27&&(n=n.child,n!==null))for(Dc(n,r,a),n=n.sibling;n!==null;)Dc(n,r,a),n=n.sibling}var Yi=!1,lt=!1,Id=!1,by=typeof WeakSet=="function"?WeakSet:Set,Pt=null,Ay=!1;function ZA(n,r){if(n=n.containerInfo,tm=Yc,n=jg(n),Df(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,T=-1,I=-1,V=0,Q=0,ee=n,q=null;t:for(;;){for(var $;ee!==a||f!==0&&ee.nodeType!==3||(T=v+f),ee!==m||l!==0&&ee.nodeType!==3||(I=v+l),ee.nodeType===3&&(v+=ee.nodeValue.length),($=ee.firstChild)!==null;)q=ee,ee=$;for(;;){if(ee===n)break t;if(q===a&&++V===f&&(T=v),q===m&&++Q===l&&(I=v),($=ee.nextSibling)!==null)break;ee=q,q=ee.parentNode}ee=$}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(nm={focusedElem:n,selectionRange:a},Yc=!1,Pt=r;Pt!==null;)if(r=Pt,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Pt=n;else for(;Pt!==null;){switch(r=Pt,m=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,a=r,f=m.memoizedProps,m=m.memoizedState,l=a.stateNode;try{var fe=Fs(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(fe,m),l.__reactInternalSnapshotBeforeUpdate=n}catch(be){Ye(a,a.return,be)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,a=n.nodeType,a===9)am(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":am(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Pt=n;break}Pt=r.return}return fe=Ay,Ay=!1,fe}function Sy(n,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(n,a),l&4&&Il(5,a);break;case 1:if(Wi(n,a),l&4)if(n=a.stateNode,r===null)try{n.componentDidMount()}catch(T){Ye(a,a.return,T)}else{var f=Fs(a.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(T){Ye(a,a.return,T)}}l&64&&yy(a),l&512&&$s(a,a.return);break;case 3:if(Wi(n,a),l&64&&(l=a.updateQueue,l!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_y(l,n)}catch(T){Ye(a,a.return,T)}}break;case 26:Wi(n,a),l&512&&$s(a,a.return);break;case 27:case 5:Wi(n,a),r===null&&l&4&&Ey(a),l&512&&$s(a,a.return);break;case 12:Wi(n,a);break;case 13:Wi(n,a),l&4&&Cy(n,a);break;case 22:if(f=a.memoizedState!==null||Yi,!f){r=r!==null&&r.memoizedState!==null||lt;var m=Yi,v=lt;Yi=f,(lt=r)&&!v?Br(n,a,(a.subtreeFlags&8772)!==0):Wi(n,a),Yi=m,lt=v}l&512&&(a.memoizedProps.mode==="manual"?$s(a,a.return):yn(a,a.return));break;default:Wi(n,a)}}function Ry(n){var r=n.alternate;r!==null&&(n.alternate=null,Ry(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&bs(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var vt=null,vn=!1;function Xi(n,r,a){for(a=a.child;a!==null;)Iy(n,r,a),a=a.sibling}function Iy(n,r,a){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(pr,a)}catch{}switch(a.tag){case 26:lt||yn(a,r),Xi(n,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:lt||yn(a,r);var l=vt,f=vn;for(vt=a.stateNode,Xi(n,r,a),a=a.stateNode,r=a.attributes;r.length;)a.removeAttributeNode(r[0]);bs(a),vt=l,vn=f;break;case 5:lt||yn(a,r);case 6:f=vt;var m=vn;if(vt=null,Xi(n,r,a),vt=f,vn=m,vt!==null)if(vn)try{n=vt,l=a.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)}catch(v){Ye(a,r,v)}else try{vt.removeChild(a.stateNode)}catch(v){Ye(a,r,v)}break;case 18:vt!==null&&(vn?(r=vt,a=a.stateNode,r.nodeType===8?sm(r.parentNode,a):r.nodeType===1&&sm(r,a),Gl(r)):sm(vt,a.stateNode));break;case 4:l=vt,f=vn,vt=a.stateNode.containerInfo,vn=!0,Xi(n,r,a),vt=l,vn=f;break;case 0:case 11:case 14:case 15:lt||zr(2,a,r),lt||zr(4,a,r),Xi(n,r,a);break;case 1:lt||(yn(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&vy(a,r,l)),Xi(n,r,a);break;case 21:Xi(n,r,a);break;case 22:lt||yn(a,r),lt=(l=lt)||a.memoizedState!==null,Xi(n,r,a),lt=l;break;default:Xi(n,r,a)}}function Cy(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Gl(n)}catch(a){Ye(r,r.return,a)}}function JA(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new by),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new by),r;default:throw Error(s(435,n.tag))}}function Cd(n,r){var a=JA(n);r.forEach(function(l){var f=fS.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function Un(n,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],m=n,v=r,T=v;e:for(;T!==null;){switch(T.tag){case 27:case 5:vt=T.stateNode,vn=!1;break e;case 3:vt=T.stateNode.containerInfo,vn=!0;break e;case 4:vt=T.stateNode.containerInfo,vn=!0;break e}T=T.return}if(vt===null)throw Error(s(160));Iy(m,v,f),vt=null,vn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Dy(r,n),r=r.sibling}var Yn=null;function Dy(n,r){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Un(r,n),Ln(n),l&4&&(zr(3,n,n.return),Il(3,n),zr(5,n,n.return));break;case 1:Un(r,n),Ln(n),l&512&&(lt||a===null||yn(a,a.return)),l&64&&Yi&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=Yn;if(Un(r,n),Ln(n),l&512&&(lt||a===null||yn(a,a.return)),l&4){var m=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[wr]||m[kt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),qt(m,l,a),m[kt]=n,tt(m),l=m;break e;case"link":var v=Ev("link","href",f).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(m=v[T],m.getAttribute("href")===(a.href==null?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}m=f.createElement(l),qt(m,l,a),f.head.appendChild(m);break;case"meta":if(v=Ev("meta","content",f).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(m=v[T],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}m=f.createElement(l),qt(m,l,a),f.head.appendChild(m);break;default:throw Error(s(468,l))}m[kt]=n,tt(m),l=m}n.stateNode=l}else Tv(f,n.type,n.stateNode);else n.stateNode=vv(f,l,n.memoizedProps);else m!==l?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,l===null?Tv(f,n.type,n.stateNode):vv(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Ty(n,n.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&n.alternate===null){f=n.stateNode,m=n.memoizedProps;try{for(var I=f.firstChild;I;){var V=I.nextSibling,Q=I.nodeName;I[wr]||Q==="HEAD"||Q==="BODY"||Q==="SCRIPT"||Q==="STYLE"||Q==="LINK"&&I.rel.toLowerCase()==="stylesheet"||f.removeChild(I),I=V}for(var ee=n.type,q=f.attributes;q.length;)f.removeAttributeNode(q[0]);qt(f,ee,m),f[kt]=n,f[At]=m}catch(fe){Ye(n,n.return,fe)}}case 5:if(Un(r,n),Ln(n),l&512&&(lt||a===null||yn(a,a.return)),n.flags&32){f=n.stateNode;try{Cn(f,"")}catch(fe){Ye(n,n.return,fe)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,Ty(n,f,a!==null?a.memoizedProps:f)),l&1024&&(Id=!0);break;case 6:if(Un(r,n),Ln(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(fe){Ye(n,n.return,fe)}}break;case 3:if(Kc=null,f=Yn,Yn=Fc(r.containerInfo),Un(r,n),Yn=f,Ln(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Gl(r.containerInfo)}catch(fe){Ye(n,n.return,fe)}Id&&(Id=!1,Oy(n));break;case 4:l=Yn,Yn=Fc(n.stateNode.containerInfo),Un(r,n),Ln(n),Yn=l;break;case 12:Un(r,n),Ln(n);break;case 13:Un(r,n),Ln(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ud=ln()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Cd(n,l)));break;case 22:if(l&512&&(lt||a===null||yn(a,a.return)),I=n.memoizedState!==null,V=a!==null&&a.memoizedState!==null,Q=Yi,ee=lt,Yi=Q||I,lt=ee||V,Un(r,n),lt=ee,Yi=Q,Ln(n),r=n.stateNode,r._current=n,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,l&8192&&(r._visibility=I?r._visibility&-2:r._visibility|1,I&&(r=Yi||lt,a===null||V||r||Ya(n)),n.memoizedProps===null||n.memoizedProps.mode!=="manual"))e:for(a=null,r=n;;){if(r.tag===5||r.tag===26||r.tag===27){if(a===null){V=a=r;try{if(f=V.stateNode,I)m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=V.stateNode,T=V.memoizedProps.style;var $=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(fe){Ye(V,V.return,fe)}}}else if(r.tag===6){if(a===null){V=r;try{V.stateNode.nodeValue=I?"":V.memoizedProps}catch(fe){Ye(V,V.return,fe)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Cd(n,a))));break;case 19:Un(r,n),Ln(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Cd(n,l)));break;case 21:break;default:Un(r,n),Ln(n)}}function Ln(n){var r=n.flags;if(r&2){try{if(n.tag!==27){e:{for(var a=n.return;a!==null;){if(wy(a)){var l=a;break e}a=a.return}throw Error(s(160))}switch(l.tag){case 27:var f=l.stateNode,m=Sd(n);Dc(n,m,f);break;case 5:var v=l.stateNode;l.flags&32&&(Cn(v,""),l.flags&=-33);var T=Sd(n);Dc(n,T,v);break;case 3:case 4:var I=l.stateNode.containerInfo,V=Sd(n);Rd(n,V,I);break;default:throw Error(s(161))}}}catch(Q){Ye(n,n.return,Q)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Oy(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Oy(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Wi(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Sy(n,r.alternate,r),r=r.sibling}function Ya(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:zr(4,r,r.return),Ya(r);break;case 1:yn(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&vy(r,r.return,a),Ya(r);break;case 26:case 27:case 5:yn(r,r.return),Ya(r);break;case 22:yn(r,r.return),r.memoizedState===null&&Ya(r);break;default:Ya(r)}n=n.sibling}}function Br(n,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,f=n,m=r,v=m.flags;switch(m.tag){case 0:case 11:case 15:Br(f,m,a),Il(4,m);break;case 1:if(Br(f,m,a),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(V){Ye(l,l.return,V)}if(l=m,f=l.updateQueue,f!==null){var T=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)gy(I[f],T)}catch(V){Ye(l,l.return,V)}}a&&v&64&&yy(m),$s(m,m.return);break;case 26:case 27:case 5:Br(f,m,a),a&&l===null&&v&4&&Ey(m),$s(m,m.return);break;case 12:Br(f,m,a);break;case 13:Br(f,m,a),a&&v&4&&Cy(f,m);break;case 22:m.memoizedState===null&&Br(f,m,a),$s(m,m.return);break;default:Br(f,m,a)}r=r.sibling}}function Dd(n,r){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&_l(a))}function Od(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&_l(n))}function jr(n,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Ny(n,r,a,l),r=r.sibling}function Ny(n,r,a,l){var f=r.flags;switch(r.tag){case 0:case 11:case 15:jr(n,r,a,l),f&2048&&Il(9,r);break;case 3:jr(n,r,a,l),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&_l(n)));break;case 12:if(f&2048){jr(n,r,a,l),n=r.stateNode;try{var m=r.memoizedProps,v=m.id,T=m.onPostCommit;typeof T=="function"&&T(v,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){Ye(r,r.return,I)}}else jr(n,r,a,l);break;case 23:break;case 22:m=r.stateNode,r.memoizedState!==null?m._visibility&4?jr(n,r,a,l):Cl(n,r):m._visibility&4?jr(n,r,a,l):(m._visibility|=4,Xa(n,r,a,l,(r.subtreeFlags&10256)!==0)),f&2048&&Dd(r.alternate,r);break;case 24:jr(n,r,a,l),f&2048&&Od(r.alternate,r);break;default:jr(n,r,a,l)}}function Xa(n,r,a,l,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=n,v=r,T=a,I=l,V=v.flags;switch(v.tag){case 0:case 11:case 15:Xa(m,v,T,I,f),Il(8,v);break;case 23:break;case 22:var Q=v.stateNode;v.memoizedState!==null?Q._visibility&4?Xa(m,v,T,I,f):Cl(m,v):(Q._visibility|=4,Xa(m,v,T,I,f)),f&&V&2048&&Dd(v.alternate,v);break;case 24:Xa(m,v,T,I,f),f&&V&2048&&Od(v.alternate,v);break;default:Xa(m,v,T,I,f)}r=r.sibling}}function Cl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=n,l=r,f=l.flags;switch(l.tag){case 22:Cl(a,l),f&2048&&Dd(l.alternate,l);break;case 24:Cl(a,l),f&2048&&Od(l.alternate,l);break;default:Cl(a,l)}r=r.sibling}}var Dl=8192;function Wa(n){if(n.subtreeFlags&Dl)for(n=n.child;n!==null;)ky(n),n=n.sibling}function ky(n){switch(n.tag){case 26:Wa(n),n.flags&Dl&&n.memoizedState!==null&&jS(Yn,n.memoizedState,n.memoizedProps);break;case 5:Wa(n);break;case 3:case 4:var r=Yn;Yn=Fc(n.stateNode.containerInfo),Wa(n),Yn=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Dl,Dl=16777216,Wa(n),Dl=r):Wa(n));break;default:Wa(n)}}function My(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Ol(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Pt=l,Vy(l,n)}My(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xy(n),n=n.sibling}function xy(n){switch(n.tag){case 0:case 11:case 15:Ol(n),n.flags&2048&&zr(9,n,n.return);break;case 3:Ol(n);break;case 12:Ol(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&4&&(n.return===null||n.return.tag!==13)?(r._visibility&=-5,Oc(n)):Ol(n);break;default:Ol(n)}}function Oc(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Pt=l,Vy(l,n)}My(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:zr(8,r,r.return),Oc(r);break;case 22:a=r.stateNode,a._visibility&4&&(a._visibility&=-5,Oc(r));break;default:Oc(r)}n=n.sibling}}function Vy(n,r){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:zr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:_l(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Pt=l;else e:for(a=n;Pt!==null;){l=Pt;var f=l.sibling,m=l.return;if(Ry(l),l===a){Pt=null;break e}if(f!==null){f.return=m,Pt=f;break e}Pt=m}}}function eS(n,r,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(n,r,a,l){return new eS(n,r,a,l)}function Nd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qr(n,r){var a=n.alternate;return a===null?(a=zn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&31457280,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Py(n,r){n.flags&=31457282;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,r=a.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Nc(n,r,a,l,f,m){var v=0;if(l=n,typeof n=="function")Nd(n)&&(v=1);else if(typeof n=="string")v=zS(n,a,Jt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case p:return Qs(a.children,f,m,r);case g:v=8,f|=24;break;case E:return n=zn(12,a,r,f|2),n.elementType=E,n.lanes=m,n;case K:return n=zn(13,a,r,f),n.elementType=K,n.lanes=m,n;case U:return n=zn(19,a,r,f),n.elementType=U,n.lanes=m,n;case Y:return Uy(a,f,m,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:case O:v=10;break e;case S:v=9;break e;case P:v=11;break e;case G:v=14;break e;case te:v=16,l=null;break e}v=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return r=zn(v,a,r,f),r.elementType=n,r.type=l,r.lanes=m,r}function Qs(n,r,a,l){return n=zn(7,n,l,r),n.lanes=a,n}function Uy(n,r,a,l){n=zn(22,n,l,r),n.elementType=Y,n.lanes=a;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var m=f._current;if(m===null)throw Error(s(456));if((f._pendingVisibility&2)===0){var v=Or(m,2);v!==null&&(f._pendingVisibility|=2,sn(v,m,2))}},attach:function(){var m=f._current;if(m===null)throw Error(s(456));if((f._pendingVisibility&2)!==0){var v=Or(m,2);v!==null&&(f._pendingVisibility&=-3,sn(v,m,2))}}};return n.stateNode=f,n}function kd(n,r,a){return n=zn(6,n,null,r),n.lanes=a,n}function Md(n,r,a){return r=zn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Zi(n){n.flags|=4}function Ly(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!wv(r)){if(r=Pn.current,r!==null&&((Ue&4194176)===Ue?_i!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||r!==_i))throw ml=Lf,t_;n.flags|=8192}}function kc(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?yr():536870912,n.lanes|=r,Ja|=r)}function Nl(n,r){if(!je)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function nt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(r)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&31457280,l|=f.flags&31457280,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,r}function tS(n,r,a){var l=r.pendingProps;switch(Pf(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(r),null;case 1:return nt(r),null;case 3:return a=r.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Qi(Ct),Ni(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(cl(r)?Zi(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Qn!==null&&(jd(Qn),Qn=null))),nt(r),null;case 26:return a=r.memoizedState,n===null?(Zi(r),a!==null?(nt(r),Ly(r,a)):(nt(r),r.flags&=-16777217)):a?a!==n.memoizedState?(Zi(r),nt(r),Ly(r,a)):(nt(r),r.flags&=-16777217):(n.memoizedProps!==l&&Zi(r),nt(r),r.flags&=-16777217),null;case 27:ya(r),a=Sn.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==l&&Zi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return nt(r),null}n=Jt.current,cl(r)?Jg(r):(n=mv(f,l,a),r.stateNode=n,Zi(r))}return nt(r),null;case 5:if(ya(r),a=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&Zi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return nt(r),null}if(n=Jt.current,cl(r))Jg(r);else{switch(f=Hc(Sn.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[kt]=r,n[At]=l;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(qt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Zi(r)}}return nt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==l&&Zi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(n=Sn.current,cl(r)){if(n=r.stateNode,a=r.memoizedProps,l=null,f=rn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[kt]=r,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||lv(n.nodeValue,a)),n||Ls(r)}else n=Hc(n).createTextNode(l),n[kt]=r,r.stateNode=n}return nt(r),null;case 13:if(l=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=cl(r),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[kt]=r}else hl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nt(r),f=!1}else Qn!==null&&(jd(Qn),Qn=null),f=!0;if(!f)return r.flags&256?(Fi(r),r):(Fi(r),null)}if(Fi(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=r.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return a!==n&&a&&(r.child.flags|=8192),kc(r,r.updateQueue),nt(r),null;case 4:return Ni(),n===null&&Zd(r.stateNode.containerInfo),nt(r),null;case 10:return Qi(r.type),nt(r),null;case 19:if(at(It),f=r.memoizedState,f===null)return nt(r),null;if(l=(r.flags&128)!==0,m=f.rendering,m===null)if(l)Nl(f,!1);else{if(ut!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=pc(n),m!==null){for(r.flags|=128,Nl(f,!1),n=m.updateQueue,r.updateQueue=n,kc(r,n),r.subtreeFlags=0,n=a,a=r.child;a!==null;)Py(a,n),a=a.sibling;return Ke(It,It.current&1|2),r.child}n=n.sibling}f.tail!==null&&ln()>Mc&&(r.flags|=128,l=!0,Nl(f,!1),r.lanes=4194304)}else{if(!l)if(n=pc(m),n!==null){if(r.flags|=128,l=!0,n=n.updateQueue,r.updateQueue=n,kc(r,n),Nl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!je)return nt(r),null}else 2*ln()-f.renderingStartTime>Mc&&a!==536870912&&(r.flags|=128,l=!0,Nl(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(n=f.last,n!==null?n.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=ln(),r.sibling=null,n=It.current,Ke(It,l?n&1|2:n&1),r):(nt(r),null);case 22:case 23:return Fi(r),Bf(),l=r.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(nt(r),r.subtreeFlags&6&&(r.flags|=8192)):nt(r),a=r.updateQueue,a!==null&&kc(r,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),n!==null&&at(Bs),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),Qi(Ct),nt(r),null;case 25:return null}throw Error(s(156,r.tag))}function nS(n,r){switch(Pf(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Qi(Ct),Ni(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return ya(r),null;case 13:if(Fi(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));hl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return at(It),null;case 4:return Ni(),null;case 10:return Qi(r.type),null;case 22:case 23:return Fi(r),Bf(),n!==null&&at(Bs),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Qi(Ct),null;case 25:return null;default:return null}}function zy(n,r){switch(Pf(r),r.tag){case 3:Qi(Ct),Ni();break;case 26:case 27:case 5:ya(r);break;case 4:Ni();break;case 13:Fi(r);break;case 19:at(It);break;case 10:Qi(r.type);break;case 22:case 23:Fi(r),Bf(),n!==null&&at(Bs);break;case 24:Qi(Ct)}}var iS={getCacheForType:function(n){var r=$t(Ct),a=r.data.get(n);return a===void 0&&(a=n(),r.data.set(n,a)),a}},rS=typeof WeakMap=="function"?WeakMap:Map,it=0,Xe=null,Oe=null,Ue=0,We=0,En=null,Ji=!1,Za=!1,xd=!1,er=0,ut=0,Hr=0,Ys=0,Vd=0,Bn=0,Ja=0,kl=null,vi=null,Pd=!1,Ud=0,Mc=1/0,xc=null,Fr=null,Vc=!1,Xs=null,Ml=0,Ld=0,zd=null,xl=0,Bd=null;function Tn(){if((it&2)!==0&&Ue!==0)return Ue&-Ue;if(A.T!==null){var n=Fa;return n!==0?n:Qd()}return ju()}function By(){Bn===0&&(Bn=(Ue&536870912)===0||je?Ko():536870912);var n=Pn.current;return n!==null&&(n.flags|=32),Bn}function sn(n,r,a){(n===Xe&&We===2||n.cancelPendingCommit!==null)&&(eo(n,0),tr(n,Ue,Bn,!1)),ht(n,a),((it&2)===0||n!==Xe)&&(n===Xe&&((it&2)===0&&(Ys|=a),ut===4&&tr(n,Ue,Bn,!1)),Ei(n))}function jy(n,r,a){if((it&6)!==0)throw Error(s(327));var l=!a&&(r&60)===0&&(r&n.expiredLanes)===0||_r(n,r),f=l?oS(n,r):Fd(n,r,!0),m=l;do{if(f===0){Za&&!l&&tr(n,r,0,!1);break}else if(f===6)tr(n,r,0,!Ji);else{if(a=n.current.alternate,m&&!sS(a)){f=Fd(n,r,!1),m=!1;continue}if(f===2){if(m=r,n.errorRecoveryDisabledLanes&m)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var T=n;f=kl;var I=T.current.memoizedState.isDehydrated;if(I&&(eo(T,v).flags|=256),v=Fd(T,v,!1),v!==2){if(xd&&!I){T.errorRecoveryDisabledLanes|=m,Ys|=m,f=4;break e}m=vi,vi=f,m!==null&&jd(m)}f=v}if(m=!1,f!==2)continue}}if(f===1){eo(n,0),tr(n,r,0,!0);break}e:{switch(l=n,f){case 0:case 1:throw Error(s(345));case 4:if((r&4194176)===r){tr(l,r,Bn,!Ji);break e}break;case 2:vi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(l.finishedWork=a,l.finishedLanes=r,(r&62914560)===r&&(m=Ud+300-ln(),10<m)){if(tr(l,r,Bn,!Ji),Rn(l,0)!==0)break e;l.timeoutHandle=hv(qy.bind(null,l,a,vi,xc,Pd,r,Bn,Ys,Ja,Ji,2,-0,0),m);break e}qy(l,a,vi,xc,Pd,r,Bn,Ys,Ja,Ji,0,-0,0)}}break}while(!0);Ei(n)}function jd(n){vi===null?vi=n:vi.push.apply(vi,n)}function qy(n,r,a,l,f,m,v,T,I,V,Q,ee,q){var $=r.subtreeFlags;if(($&8192||($&16785408)===16785408)&&(Bl={stylesheets:null,count:0,unsuspend:BS},ky(r),r=qS(),r!==null)){n.cancelPendingCommit=r(Yy.bind(null,n,a,l,f,v,T,I,1,ee,q)),tr(n,m,v,!V);return}Yy(n,a,l,f,v,T,I,Q,ee,q)}function sS(n){for(var r=n;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],m=f.getSnapshot;f=f.value;try{if(!_n(m(),f))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function tr(n,r,a,l){r&=~Vd,r&=~Ys,n.suspendedLanes|=r,n.pingedLanes&=~r,l&&(n.warmLanes|=r),l=n.expirationTimes;for(var f=r;0<f;){var m=31-en(f),v=1<<m;l[m]=-1,f&=~v}a!==0&&vr(n,a,r)}function Pc(){return(it&6)===0?(Vl(0),!1):!0}function qd(){if(Oe!==null){if(We===0)var n=Oe.return;else n=Oe,$i=Gs=null,Qf(n),qa=null,pl=0,n=Oe;for(;n!==null;)zy(n.alternate,n),n=n.return;Oe=null}}function eo(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,AS(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),qd(),Xe=n,Oe=a=qr(n.current,null),Ue=r,We=0,En=null,Ji=!1,Za=_r(n,r),xd=!1,Ja=Bn=Vd=Ys=Hr=ut=0,vi=kl=null,Pd=!1,(r&8)!==0&&(r|=r&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=r;0<l;){var f=31-en(l),m=1<<f;r|=n[f],l&=~m}return er=r,ac(),a}function Hy(n,r){Ce=null,A.H=yi,r===dl?(r=r_(),We=3):r===t_?(r=r_(),We=4):We=r===ny?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,En=r,Oe===null&&(ut=1,Rc(n,Mn(r,n.current)))}function Fy(){var n=A.H;return A.H=yi,n===null?yi:n}function Gy(){var n=A.A;return A.A=iS,n}function Hd(){ut=4,Ji||(Ue&4194176)!==Ue&&Pn.current!==null||(Za=!0),(Hr&134217727)===0&&(Ys&134217727)===0||Xe===null||tr(Xe,Ue,Bn,!1)}function Fd(n,r,a){var l=it;it|=2;var f=Fy(),m=Gy();(Xe!==n||Ue!==r)&&(xc=null,eo(n,r)),r=!1;var v=ut;e:do try{if(We!==0&&Oe!==null){var T=Oe,I=En;switch(We){case 8:qd(),v=6;break e;case 3:case 2:case 6:Pn.current===null&&(r=!0);var V=We;if(We=0,En=null,to(n,T,I,V),a&&Za){v=0;break e}break;default:V=We,We=0,En=null,to(n,T,I,V)}}aS(),v=ut;break}catch(Q){Hy(n,Q)}while(!0);return r&&n.shellSuspendCounter++,$i=Gs=null,it=l,A.H=f,A.A=m,Oe===null&&(Xe=null,Ue=0,ac()),v}function aS(){for(;Oe!==null;)Ky(Oe)}function oS(n,r){var a=it;it|=2;var l=Fy(),f=Gy();Xe!==n||Ue!==r?(xc=null,Mc=ln()+500,eo(n,r)):Za=_r(n,r);e:do try{if(We!==0&&Oe!==null){r=Oe;var m=En;t:switch(We){case 1:We=0,En=null,to(n,r,m,1);break;case 2:if(n_(m)){We=0,En=null,$y(r);break}r=function(){We===2&&Xe===n&&(We=7),Ei(n)},m.then(r,r);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:n_(m)?(We=0,En=null,$y(r)):(We=0,En=null,to(n,r,m,7));break;case 5:var v=null;switch(Oe.tag){case 26:v=Oe.memoizedState;case 5:case 27:var T=Oe;if(!v||wv(v)){We=0,En=null;var I=T.sibling;if(I!==null)Oe=I;else{var V=T.return;V!==null?(Oe=V,Uc(V)):Oe=null}break t}}We=0,En=null,to(n,r,m,5);break;case 6:We=0,En=null,to(n,r,m,6);break;case 8:qd(),ut=6;break e;default:throw Error(s(462))}}lS();break}catch(Q){Hy(n,Q)}while(!0);return $i=Gs=null,A.H=l,A.A=f,it=a,Oe!==null?0:(Xe=null,Ue=0,ac(),ut)}function lS(){for(;Oe!==null&&!yf();)Ky(Oe)}function Ky(n){var r=my(n.alternate,n,er);n.memoizedProps=n.pendingProps,r===null?Uc(n):Oe=r}function $y(n){var r=n,a=r.alternate;switch(r.tag){case 15:case 0:r=ly(a,r,r.pendingProps,r.type,void 0,Ue);break;case 11:r=ly(a,r,r.pendingProps,r.type.render,r.ref,Ue);break;case 5:Qf(r);default:zy(a,r),r=Oe=Py(r,er),r=my(a,r,er)}n.memoizedProps=n.pendingProps,r===null?Uc(n):Oe=r}function to(n,r,a,l){$i=Gs=null,Qf(r),qa=null,pl=0;var f=r.return;try{if(XA(n,f,r,a,Ue)){ut=1,Rc(n,Mn(a,n.current)),Oe=null;return}}catch(m){if(f!==null)throw Oe=f,m;ut=1,Rc(n,Mn(a,n.current)),Oe=null;return}r.flags&32768?(je||l===1?n=!0:Za||(Ue&536870912)!==0?n=!1:(Ji=n=!0,(l===2||l===3||l===6)&&(l=Pn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Qy(r,n)):Uc(r)}function Uc(n){var r=n;do{if((r.flags&32768)!==0){Qy(r,Ji);return}n=r.return;var a=tS(r.alternate,r,er);if(a!==null){Oe=a;return}if(r=r.sibling,r!==null){Oe=r;return}Oe=r=n}while(r!==null);ut===0&&(ut=5)}function Qy(n,r){do{var a=nS(n.alternate,n);if(a!==null){a.flags&=32767,Oe=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(n=n.sibling,n!==null)){Oe=n;return}Oe=n=a}while(n!==null);ut=6,Oe=null}function Yy(n,r,a,l,f,m,v,T,I,V){var Q=A.T,ee=le.p;try{le.p=2,A.T=null,uS(n,r,a,l,ee,f,m,v,T,I,V)}finally{A.T=Q,le.p=ee}}function uS(n,r,a,l,f,m,v,T){do no();while(Xs!==null);if((it&6)!==0)throw Error(s(327));var I=n.finishedWork;if(l=n.finishedLanes,I===null)return null;if(n.finishedWork=null,n.finishedLanes=0,I===n.current)throw Error(s(177));n.callbackNode=null,n.callbackPriority=0,n.cancelPendingCommit=null;var V=I.lanes|I.childLanes;if(V|=Mf,zu(n,l,V,m,v,T),n===Xe&&(Oe=Xe=null,Ue=0),(I.subtreeFlags&10256)===0&&(I.flags&10256)===0||Vc||(Vc=!0,Ld=V,zd=a,dS(ki,function(){return no(),null})),a=(I.flags&15990)!==0,(I.subtreeFlags&15990)!==0||a?(a=A.T,A.T=null,m=le.p,le.p=2,v=it,it|=4,ZA(n,I),Dy(I,n),MA(nm,n.containerInfo),Yc=!!tm,nm=tm=null,n.current=I,Sy(n,I.alternate,I),qo(),it=v,le.p=m,A.T=a):n.current=I,Vc?(Vc=!1,Xs=n,Ml=l):Xy(n,V),V=n.pendingLanes,V===0&&(Fr=null),Fo(I.stateNode),Ei(n),r!==null)for(f=n.onRecoverableError,I=0;I<r.length;I++)V=r[I],f(V.value,{componentStack:V.stack});return(Ml&3)!==0&&no(),V=n.pendingLanes,(l&4194218)!==0&&(V&42)!==0?n===Bd?xl++:(xl=0,Bd=n):xl=0,Vl(0),null}function Xy(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,_l(r)))}function no(){if(Xs!==null){var n=Xs,r=Ld;Ld=0;var a=Bu(Ml),l=A.T,f=le.p;try{if(le.p=32>a?32:a,A.T=null,Xs===null)var m=!1;else{a=zd,zd=null;var v=Xs,T=Ml;if(Xs=null,Ml=0,(it&6)!==0)throw Error(s(331));var I=it;if(it|=4,xy(v.current),Ny(v,v.current,T,a),it=I,Vl(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(pr,v)}catch{}m=!0}return m}finally{le.p=f,A.T=l,Xy(n,r)}}return!1}function Wy(n,r,a){r=Mn(a,r),r=ld(n.stateNode,r,2),n=Lr(n,r,2),n!==null&&(ht(n,2),Ei(n))}function Ye(n,r,a){if(n.tag===3)Wy(n,n,a);else for(;r!==null;){if(r.tag===3){Wy(r,n,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Fr===null||!Fr.has(l))){n=Mn(a,n),a=ey(2),l=Lr(r,a,2),l!==null&&(ty(a,l,r,n),ht(l,2),Ei(l));break}}r=r.return}}function Gd(n,r,a){var l=n.pingCache;if(l===null){l=n.pingCache=new rS;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(a)||(xd=!0,f.add(a),n=cS.bind(null,n,r,a),r.then(n,n))}function cS(n,r,a){var l=n.pingCache;l!==null&&l.delete(r),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,Xe===n&&(Ue&a)===a&&(ut===4||ut===3&&(Ue&62914560)===Ue&&300>ln()-Ud?(it&2)===0&&eo(n,0):Vd|=a,Ja===Ue&&(Ja=0)),Ei(n)}function Zy(n,r){r===0&&(r=yr()),n=Or(n,r),n!==null&&(ht(n,r),Ei(n))}function hS(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Zy(n,a)}function fS(n,r){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),Zy(n,a)}function dS(n,r){return Es(n,r)}var Lc=null,io=null,Kd=!1,zc=!1,$d=!1,Ws=0;function Ei(n){n!==io&&n.next===null&&(io===null?Lc=io=n:io=io.next=n),zc=!0,Kd||(Kd=!0,pS(mS))}function Vl(n,r){if(!$d&&zc){$d=!0;do for(var a=!1,l=Lc;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var v=l.suspendedLanes,T=l.pingedLanes;m=(1<<31-en(42|n)+1)-1,m&=f&~(v&~T),m=m&201326677?m&201326677|1:m?m|2:0}m!==0&&(a=!0,tv(l,m))}else m=Ue,m=Rn(l,l===Xe?m:0),(m&3)===0||_r(l,m)||(a=!0,tv(l,m));l=l.next}while(a);$d=!1}}function mS(){zc=Kd=!1;var n=0;Ws!==0&&(bS()&&(n=Ws),Ws=0);for(var r=ln(),a=null,l=Lc;l!==null;){var f=l.next,m=Jy(l,r);m===0?(l.next=null,a===null?Lc=f:a.next=f,f===null&&(io=a)):(a=l,(n!==0||(m&3)!==0)&&(zc=!0)),l=f}Vl(n)}function Jy(n,r){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var v=31-en(m),T=1<<v,I=f[v];I===-1?((T&a)===0||(T&l)!==0)&&(f[v]=Ta(T,r)):I<=r&&(n.expiredLanes|=T),m&=~T}if(r=Xe,a=Ue,a=Rn(n,n===r?a:0),l=n.callbackNode,a===0||n===r&&We===2||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Ea(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||_r(n,a)){if(r=a&-a,r===n.callbackPriority)return r;switch(l!==null&&Ea(l),Bu(a)){case 2:case 8:a=Nt;break;case 32:a=ki;break;case 268435456:a=Ho;break;default:a=ki}return l=ev.bind(null,n),a=Es(a,l),n.callbackPriority=r,n.callbackNode=a,r}return l!==null&&l!==null&&Ea(l),n.callbackPriority=2,n.callbackNode=null,2}function ev(n,r){var a=n.callbackNode;if(no()&&n.callbackNode!==a)return null;var l=Ue;return l=Rn(n,n===Xe?l:0),l===0?null:(jy(n,l,r),Jy(n,ln()),n.callbackNode!=null&&n.callbackNode===a?ev.bind(null,n):null)}function tv(n,r){if(no())return null;jy(n,r,!0)}function pS(n){SS(function(){(it&6)!==0?Es(bt,n):n()})}function Qd(){return Ws===0&&(Ws=Ko()),Ws}function nv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ui(""+n)}function iv(n,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,n.id&&a.setAttribute("form",n.id),r.parentNode.insertBefore(a,r),n=new FormData(n),a.parentNode.removeChild(a),n}function gS(n,r,a,l,f){if(r==="submit"&&a&&a.stateNode===f){var m=nv((f[At]||null).action),v=l.submitter;v&&(r=(r=v[At]||null)?nv(r.formAction):v.getAttribute("formAction"),r!==null&&(m=r,v=null));var T=new Ca("action","action",null,l,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ws!==0){var I=v?iv(f,v):new FormData(f);id(a,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(T.preventDefault(),I=v?iv(f,v):new FormData(f),id(a,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var Yd=0;Yd<Yg.length;Yd++){var Xd=Yg[Yd],_S=Xd.toLowerCase(),yS=Xd[0].toUpperCase()+Xd.slice(1);$n(_S,"on"+yS)}$n(Fg,"onAnimationEnd"),$n(Gg,"onAnimationIteration"),$n(Kg,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(VA,"onTransitionRun"),$n(PA,"onTransitionStart"),$n(UA,"onTransitionCancel"),$n($g,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pl));function rv(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var m=void 0;if(r)for(var v=l.length-1;0<=v;v--){var T=l[v],I=T.instance,V=T.currentTarget;if(T=T.listener,I!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=V;try{m(f)}catch(Q){Sc(Q)}f.currentTarget=null,m=I}else for(v=0;v<l.length;v++){if(T=l[v],I=T.instance,V=T.currentTarget,T=T.listener,I!==m&&f.isPropagationStopped())break e;m=T,f.currentTarget=V;try{m(f)}catch(Q){Sc(Q)}f.currentTarget=null,m=I}}}}function Me(n,r){var a=r[ws];a===void 0&&(a=r[ws]=new Set);var l=n+"__bubble";a.has(l)||(sv(r,n,2,!1),a.add(l))}function Wd(n,r,a){var l=0;r&&(l|=4),sv(a,n,l,r)}var Bc="_reactListening"+Math.random().toString(36).slice(2);function Zd(n){if(!n[Bc]){n[Bc]=!0,Qo.forEach(function(a){a!=="selectionchange"&&(vS.has(a)||Wd(a,!1,n),Wd(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Bc]||(r[Bc]=!0,Wd("selectionchange",!1,r))}}function sv(n,r,a,l){switch(Cv(r)){case 2:var f=GS;break;case 8:f=KS;break;default:f=hm}a=f.bind(null,r,a,n),f=void 0,!On||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(r,a,{capture:!0,passive:f}):n.addEventListener(r,a,!0):f!==void 0?n.addEventListener(r,a,{passive:f}):n.addEventListener(r,a,!1)}function Jd(n,r,a,l,f){var m=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===f||T.nodeType===8&&T.parentNode===f)break;if(v===4)for(v=l.return;v!==null;){var I=v.tag;if((I===3||I===4)&&(I=v.stateNode.containerInfo,I===f||I.nodeType===8&&I.parentNode===f))return;v=v.return}for(;T!==null;){if(v=Kn(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){l=m=v;continue e}T=T.parentNode}}l=l.return}Gu(function(){var V=m,Q=Ia(a),ee=[];e:{var q=Qg.get(n);if(q!==void 0){var $=Ca,fe=n;switch(n){case"keypress":if(hi(a)===0)break e;case"keydown":case"keyup":$=xa;break;case"focusin":fe="focus",$=Na;break;case"focusout":fe="blur",$=Na;break;case"beforeblur":case"afterblur":$=Na;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Ju;break;case Fg:case Gg:case Kg:$=ka;break;case $g:$=tc;break;case"scroll":case"scrollend":$=Ku;break;case"wheel":$=Va;break;case"copy":case"cut":case"paste":$=Ma;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=al;break;case"toggle":case"beforetoggle":$=ic}var be=(r&4)!==0,ct=!be&&(n==="scroll"||n==="scrollend"),L=be?q!==null?q+"Capture":null:q;be=[];for(var M=V,j;M!==null;){var X=M;if(j=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||j===null||L===null||(X=Is(M,L),X!=null&&be.push(Ul(M,X,j))),ct)break;M=M.return}0<be.length&&(q=new $(q,fe,null,a,Q),ee.push({event:q,listeners:be}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",$=n==="mouseout"||n==="pointerout",q&&a!==Dn&&(fe=a.relatedTarget||a.fromElement)&&(Kn(fe)||fe[Mi]))break e;if(($||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,$?(fe=a.relatedTarget||a.toElement,$=V,fe=fe?Kn(fe):null,fe!==null&&(ct=pe(fe),be=fe.tag,fe!==ct||be!==5&&be!==27&&be!==6)&&(fe=null)):($=null,fe=V),$!==fe)){if(be=Nn,X="onMouseLeave",L="onMouseEnter",M="mouse",(n==="pointerout"||n==="pointerover")&&(be=al,X="onPointerLeave",L="onPointerEnter",M="pointer"),ct=$==null?q:br($),j=fe==null?q:br(fe),q=new be(X,M+"leave",$,a,Q),q.target=ct,q.relatedTarget=j,X=null,Kn(Q)===V&&(be=new be(L,M+"enter",fe,a,Q),be.target=j,be.relatedTarget=ct,X=be),ct=X,$&&fe)t:{for(be=$,L=fe,M=0,j=be;j;j=ro(j))M++;for(j=0,X=L;X;X=ro(X))j++;for(;0<M-j;)be=ro(be),M--;for(;0<j-M;)L=ro(L),j--;for(;M--;){if(be===L||L!==null&&be===L.alternate)break t;be=ro(be),L=ro(L)}be=null}else be=null;$!==null&&av(ee,q,$,be,!1),fe!==null&&ct!==null&&av(ee,ct,fe,be,!0)}}e:{if(q=V?br(V):window,$=q.nodeName&&q.nodeName.toLowerCase(),$==="select"||$==="input"&&q.type==="file")var he=Mg;else if(Rt(q))if(xg)he=NA;else{he=DA;var De=CA}else $=q.nodeName,!$||$.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?V&&Jo(V.elementType)&&(he=Mg):he=OA;if(he&&(he=he(n,V))){ji(ee,he,a,Q);break e}De&&De(n,q,V),n==="focusout"&&V&&q.type==="number"&&V.memoizedProps.value!=null&&Ra(q,"number",q.value)}switch(De=V?br(V):window,n){case"focusin":(Rt(De)||De.contentEditable==="true")&&(Pa=De,Of=V,ul=null);break;case"focusout":ul=Of=Pa=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,qg(ee,a,Q);break;case"selectionchange":if(xA)break;case"keydown":case"keyup":qg(ee,a,Q)}var me;if(mi)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Ve?F(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(y&&a.locale!=="ko"&&(Ve||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ve&&(me=tl()):(ci=Q,Dr="value"in ci?ci.value:ci.textContent,Ve=!0)),De=jc(V,ye),0<De.length&&(ye=new rl(ye,n,null,a,Q),ee.push({event:ye,listeners:De}),me?ye.data=me:(me=ie(a),me!==null&&(ye.data=me)))),(me=_?St(n,a):Pe(n,a))&&(ye=jc(V,"onBeforeInput"),0<ye.length&&(De=new rl("onBeforeInput","beforeinput",null,a,Q),ee.push({event:De,listeners:ye}),De.data=me)),gS(ee,n,V,a,Q)}rv(ee,r)})}function Ul(n,r,a){return{instance:n,listener:r,currentTarget:a}}function jc(n,r){for(var a=r+"Capture",l=[];n!==null;){var f=n,m=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Is(n,a),f!=null&&l.unshift(Ul(n,f,m)),f=Is(n,r),f!=null&&l.push(Ul(n,f,m))),n=n.return}return l}function ro(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function av(n,r,a,l,f){for(var m=r._reactName,v=[];a!==null&&a!==l;){var T=a,I=T.alternate,V=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||V===null||(I=V,f?(V=Is(a,m),V!=null&&v.unshift(Ul(a,V,I))):f||(V=Is(a,m),V!=null&&v.push(Ul(a,V,I)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var ES=/\r\n?/g,TS=/\u0000|\uFFFD/g;function ov(n){return(typeof n=="string"?n:""+n).replace(ES,`
`).replace(TS,"")}function lv(n,r){return r=ov(r),ov(n)===r}function qc(){}function Qe(n,r,a,l,f,m){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Cn(n,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Cn(n,""+l);break;case"className":Rr(n,"class",l);break;case"tabIndex":Rr(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Rr(n,a,l);break;case"style":Fu(n,l,m);break;case"data":if(r!=="object"){Rr(n,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=ui(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(r!=="input"&&Qe(n,r,"name",f.name,f,null),Qe(n,r,"formEncType",f.formEncType,f,null),Qe(n,r,"formMethod",f.formMethod,f,null),Qe(n,r,"formTarget",f.formTarget,f,null)):(Qe(n,r,"encType",f.encType,f,null),Qe(n,r,"method",f.method,f,null),Qe(n,r,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=ui(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=qc);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=ui(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Me("beforetoggle",n),Me("toggle",n),Sr(n,"popover",l);break;case"xlinkActuate":In(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":In(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":In(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":In(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":In(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":In(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":In(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":In(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":In(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Sr(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bf.get(a)||a,Sr(n,a,l))}}function em(n,r,a,l,f,m){switch(a){case"style":Fu(n,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Cn(n,l):(typeof l=="number"||typeof l=="bigint")&&Cn(n,""+l);break;case"onScroll":l!=null&&Me("scroll",n);break;case"onScrollEnd":l!=null&&Me("scrollend",n);break;case"onClick":l!=null&&(n.onclick=qc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Aa.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),r=a.slice(2,f?a.length-7:void 0),m=n[At]||null,m=m!=null?m[a]:null,typeof m=="function"&&n.removeEventListener(r,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(r,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Sr(n,a,l)}}}function qt(n,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",n),Me("load",n);var l=!1,f=!1,m;for(m in a)if(a.hasOwnProperty(m)){var v=a[m];if(v!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Qe(n,r,m,v,a,null)}}f&&Qe(n,r,"srcSet",a.srcSet,a,null),l&&Qe(n,r,"src",a.src,a,null);return;case"input":Me("invalid",n);var T=m=v=f=null,I=null,V=null;for(l in a)if(a.hasOwnProperty(l)){var Q=a[l];if(Q!=null)switch(l){case"name":f=Q;break;case"type":v=Q;break;case"checked":I=Q;break;case"defaultChecked":V=Q;break;case"value":m=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,r));break;default:Qe(n,r,l,Q,a,null)}}Ss(n,m,T,I,V,v,f,!1),As(n);return;case"select":Me("invalid",n),l=v=m=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":m=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Qe(n,r,f,T,a,null)}r=m,a=v,n.multiple=!!l,r!=null?Be(n,!!l,r,!1):a!=null&&Be(n,!!l,a,!0);return;case"textarea":Me("invalid",n),m=f=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":f=T;break;case"children":m=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Qe(n,r,v,T,a,null)}Cr(n,l,f,m),As(n);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Qe(n,r,I,l,a,null)}return;case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":Me("load",n);break;case"video":case"audio":for(l=0;l<Pl.length;l++)Me(Pl[l],n);break;case"image":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"embed":case"source":case"link":Me("error",n),Me("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(l=a[V],l!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Qe(n,r,V,l,a,null)}return;default:if(Jo(r)){for(Q in a)a.hasOwnProperty(Q)&&(l=a[Q],l!==void 0&&em(n,r,Q,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Qe(n,r,T,l,a,null))}function wS(n,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,v=null,T=null,I=null,V=null,Q=null;for($ in a){var ee=a[$];if(a.hasOwnProperty($)&&ee!=null)switch($){case"checked":break;case"value":break;case"defaultValue":I=ee;default:l.hasOwnProperty($)||Qe(n,r,$,null,l,ee)}}for(var q in l){var $=l[q];if(ee=a[q],l.hasOwnProperty(q)&&($!=null||ee!=null))switch(q){case"type":m=$;break;case"name":f=$;break;case"checked":V=$;break;case"defaultChecked":Q=$;break;case"value":v=$;break;case"defaultValue":T=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,r));break;default:$!==ee&&Qe(n,r,q,$,l,ee)}}Ir(n,v,T,I,V,Q,m,f);return;case"select":$=v=T=q=null;for(m in a)if(I=a[m],a.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":$=I;default:l.hasOwnProperty(m)||Qe(n,r,m,null,l,I)}for(f in l)if(m=l[f],I=a[f],l.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":q=m;break;case"defaultValue":T=m;break;case"multiple":v=m;default:m!==I&&Qe(n,r,f,m,l,I)}r=T,a=v,l=$,q!=null?Be(n,!!a,q,!1):!!l!=!!a&&(r!=null?Be(n,!!a,r,!0):Be(n,!!a,a?[]:"",!1));return;case"textarea":$=q=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Qe(n,r,T,null,l,f)}for(v in l)if(f=l[v],m=a[v],l.hasOwnProperty(v)&&(f!=null||m!=null))switch(v){case"value":q=f;break;case"defaultValue":$=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&Qe(n,r,v,f,l,m)}Rs(n,q,$);return;case"option":for(var fe in a)if(q=a[fe],a.hasOwnProperty(fe)&&q!=null&&!l.hasOwnProperty(fe))switch(fe){case"selected":n.selected=!1;break;default:Qe(n,r,fe,null,l,q)}for(I in l)if(q=l[I],$=a[I],l.hasOwnProperty(I)&&q!==$&&(q!=null||$!=null))switch(I){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Qe(n,r,I,q,l,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in a)q=a[be],a.hasOwnProperty(be)&&q!=null&&!l.hasOwnProperty(be)&&Qe(n,r,be,null,l,q);for(V in l)if(q=l[V],$=a[V],l.hasOwnProperty(V)&&q!==$&&(q!=null||$!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:Qe(n,r,V,q,l,$)}return;default:if(Jo(r)){for(var ct in a)q=a[ct],a.hasOwnProperty(ct)&&q!==void 0&&!l.hasOwnProperty(ct)&&em(n,r,ct,void 0,l,q);for(Q in l)q=l[Q],$=a[Q],!l.hasOwnProperty(Q)||q===$||q===void 0&&$===void 0||em(n,r,Q,q,l,$);return}}for(var L in a)q=a[L],a.hasOwnProperty(L)&&q!=null&&!l.hasOwnProperty(L)&&Qe(n,r,L,null,l,q);for(ee in l)q=l[ee],$=a[ee],!l.hasOwnProperty(ee)||q===$||q==null&&$==null||Qe(n,r,ee,q,l,$)}var tm=null,nm=null;function Hc(n){return n.nodeType===9?n:n.ownerDocument}function uv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cv(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function im(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var rm=null;function bS(){var n=window.event;return n&&n.type==="popstate"?n===rm?!1:(rm=n,!0):(rm=null,!1)}var hv=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(n){return fv.resolve(null).then(n).catch(RS)}:hv;function RS(n){setTimeout(function(){throw n})}function sm(n,r){var a=r,l=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){n.removeChild(f),Gl(r);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);Gl(r)}function am(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":am(a),bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function IS(n,r,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[wr])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Xn(n.nextSibling),n===null)break}return null}function CS(n,r,a){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Xn(n.nextSibling),n===null))return null;return n}function Xn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}function dv(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}function mv(n,r,a){switch(r=Hc(a),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}var jn=new Map,pv=new Set;function Fc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.ownerDocument}var nr=le.d;le.d={f:DS,r:OS,D:NS,C:kS,L:MS,m:xS,X:PS,S:VS,M:US};function DS(){var n=nr.f(),r=Pc();return n||r}function OS(n){var r=xi(n);r!==null&&r.tag===5&&r.type==="form"?q_(r):nr.r(n)}var so=typeof document>"u"?null:document;function gv(n,r,a){var l=so;if(l&&typeof r=="string"&&r){var f=ot(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),pv.has(f)||(pv.add(f),n={rel:n,crossOrigin:a,href:r},l.querySelector(f)===null&&(r=l.createElement("link"),qt(r,"link",n),tt(r),l.head.appendChild(r)))}}function NS(n){nr.D(n),gv("dns-prefetch",n,null)}function kS(n,r){nr.C(n,r),gv("preconnect",n,r)}function MS(n,r,a){nr.L(n,r,a);var l=so;if(l&&n&&r){var f='link[rel="preload"][as="'+ot(r)+'"]';r==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+ot(a.imageSizes)+'"]')):f+='[href="'+ot(n)+'"]';var m=f;switch(r){case"style":m=ao(n);break;case"script":m=oo(n)}jn.has(m)||(n=C({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:n,as:r},a),jn.set(m,n),l.querySelector(f)!==null||r==="style"&&l.querySelector(Ll(m))||r==="script"&&l.querySelector(zl(m))||(r=l.createElement("link"),qt(r,"link",n),tt(r),l.head.appendChild(r)))}}function xS(n,r){nr.m(n,r);var a=so;if(a&&n){var l=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+ot(l)+'"][href="'+ot(n)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=oo(n)}if(!jn.has(m)&&(n=C({rel:"modulepreload",href:n},r),jn.set(m,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zl(m)))return}l=a.createElement("link"),qt(l,"link",n),tt(l),a.head.appendChild(l)}}}function VS(n,r,a){nr.S(n,r,a);var l=so;if(l&&n){var f=Ar(l).hoistableStyles,m=ao(n);r=r||"default";var v=f.get(m);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(Ll(m)))T.loading=5;else{n=C({rel:"stylesheet",href:n,"data-precedence":r},a),(a=jn.get(m))&&om(n,a);var I=v=l.createElement("link");tt(I),qt(I,"link",n),I._p=new Promise(function(V,Q){I.onload=V,I.onerror=Q}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Gc(v,r,l)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(m,v)}}}function PS(n,r){nr.X(n,r);var a=so;if(a&&n){var l=Ar(a).hoistableScripts,f=oo(n),m=l.get(f);m||(m=a.querySelector(zl(f)),m||(n=C({src:n,async:!0},r),(r=jn.get(f))&&lm(n,r),m=a.createElement("script"),tt(m),qt(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function US(n,r){nr.M(n,r);var a=so;if(a&&n){var l=Ar(a).hoistableScripts,f=oo(n),m=l.get(f);m||(m=a.querySelector(zl(f)),m||(n=C({src:n,async:!0,type:"module"},r),(r=jn.get(f))&&lm(n,r),m=a.createElement("script"),tt(m),qt(m,"link",n),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function _v(n,r,a,l){var f=(f=Sn.current)?Fc(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=ao(a.href),a=Ar(f).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=ao(a.href);var m=Ar(f).hoistableStyles,v=m.get(n);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,v),(m=f.querySelector(Ll(n)))&&!m._p&&(v.instance=m,v.state.loading=5),jn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},jn.set(n,a),m||LS(f,n,a,v.state))),r&&l===null)throw Error(s(528,""));return v}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=oo(a),a=Ar(f).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function ao(n){return'href="'+ot(n)+'"'}function Ll(n){return'link[rel="stylesheet"]['+n+"]"}function yv(n){return C({},n,{"data-precedence":n.precedence,precedence:null})}function LS(n,r,a,l){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=n.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),qt(r,"link",a),tt(r),n.head.appendChild(r))}function oo(n){return'[src="'+ot(n)+'"]'}function zl(n){return"script[async]"+n}function vv(n,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=n.querySelector('style[data-href~="'+ot(a.href)+'"]');if(l)return r.instance=l,tt(l),l;var f=C({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),tt(l),qt(l,"style",f),Gc(l,a.precedence,n),r.instance=l;case"stylesheet":f=ao(a.href);var m=n.querySelector(Ll(f));if(m)return r.state.loading|=4,r.instance=m,tt(m),m;l=yv(a),(f=jn.get(f))&&om(l,f),m=(n.ownerDocument||n).createElement("link"),tt(m);var v=m;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),qt(m,"link",l),r.state.loading|=4,Gc(m,a.precedence,n),r.instance=m;case"script":return m=oo(a.src),(f=n.querySelector(zl(m)))?(r.instance=f,tt(f),f):(l=a,(f=jn.get(m))&&(l=C({},a),lm(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),tt(f),qt(f,"link",l),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Gc(l,a.precedence,n));return r.instance}function Gc(n,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===r)m=T;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(n,r.firstChild))}function om(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function lm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Kc=null;function Ev(n,r,a){if(Kc===null){var l=new Map,f=Kc=new Map;f.set(a,l)}else f=Kc,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var m=a[f];if(!(m[wr]||m[kt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var v=m.getAttribute(r)||"";v=n+v;var T=l.get(v);T?T.push(m):l.set(v,[m])}}return l}function Tv(n,r,a){n=n.ownerDocument||n,n.head.insertBefore(a,r==="title"?n.querySelector("head > title"):null)}function zS(n,r,a){if(a===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function wv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Bl=null;function BS(){}function jS(n,r,a){if(Bl===null)throw Error(s(475));var l=Bl;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=ao(a.href),m=n.querySelector(Ll(f));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=$c.bind(l),n.then(l,l)),r.state.loading|=4,r.instance=m,tt(m);return}m=n.ownerDocument||n,a=yv(a),(f=jn.get(f))&&om(a,f),m=m.createElement("link"),tt(m);var v=m;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),qt(m,"link",a),r.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=$c.bind(l),n.addEventListener("load",r),n.addEventListener("error",r))}}function qS(){if(Bl===null)throw Error(s(475));var n=Bl;return n.stylesheets&&n.count===0&&um(n,n.stylesheets),0<n.count?function(r){var a=setTimeout(function(){if(n.stylesheets&&um(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(a)}}:null}function $c(){if(this.count--,this.count===0){if(this.stylesheets)um(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Qc=null;function um(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Qc=new Map,r.forEach(HS,n),Qc=null,$c.call(n))}function HS(n,r){if(!(r.state.loading&4)){var a=Qc.get(n);if(a)var l=a.get(null);else{a=new Map,Qc.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var v=f[m];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}f=r.instance,v=f.getAttribute("data-precedence"),m=a.get(v)||l,m===l&&a.set(null,f),a.set(v,f),this.count++,l=$c.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var jl={$$typeof:O,Provider:null,Consumer:null,_currentValue:Ie,_currentValue2:Ie,_threadCount:0};function FS(n,r,a,l,f,m,v,T){this.tag=1,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.hiddenUpdates=wa(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function bv(n,r,a,l,f,m,v,T,I,V,Q,ee){return n=new FS(n,r,a,v,T,I,V,ee),r=1,m===!0&&(r|=24),m=zn(3,null,null,r),n.current=m,m.stateNode=n,r=jf(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:l,isDehydrated:a,cache:r},Td(m),n}function Av(n){return n?(n=za,n):za}function Sv(n,r,a,l,f,m){f=Av(f),l.context===null?l.context=f:l.pendingContext=f,l=Ur(r),l.payload={element:a},m=m===void 0?null:m,m!==null&&(l.callback=m),a=Lr(n,l,r),a!==null&&(sn(a,n,r),Al(a,n,r))}function Rv(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function cm(n,r){Rv(n,r),(n=n.alternate)&&Rv(n,r)}function Iv(n){if(n.tag===13){var r=Or(n,67108864);r!==null&&sn(r,n,67108864),cm(n,67108864)}}var Yc=!0;function GS(n,r,a,l){var f=A.T;A.T=null;var m=le.p;try{le.p=2,hm(n,r,a,l)}finally{le.p=m,A.T=f}}function KS(n,r,a,l){var f=A.T;A.T=null;var m=le.p;try{le.p=8,hm(n,r,a,l)}finally{le.p=m,A.T=f}}function hm(n,r,a,l){if(Yc){var f=fm(l);if(f===null)Jd(n,r,l,Xc,a),Dv(n,l);else if(QS(f,n,r,a,l))l.stopPropagation();else if(Dv(n,l),r&4&&-1<$S.indexOf(n)){for(;f!==null;){var m=xi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var v=Gn(m.pendingLanes);if(v!==0){var T=m;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-en(v);T.entanglements[1]|=I,v&=~I}Ei(m),(it&6)===0&&(Mc=ln()+500,Vl(0))}}break;case 13:T=Or(m,2),T!==null&&sn(T,m,2),Pc(),cm(m,2)}if(m=fm(l),m===null&&Jd(n,r,l,Xc,a),m===f)break;f=m}f!==null&&l.stopPropagation()}else Jd(n,r,l,null,a)}}function fm(n){return n=Ia(n),dm(n)}var Xc=null;function dm(n){if(Xc=null,n=Kn(n),n!==null){var r=pe(n);if(r===null)n=null;else{var a=r.tag;if(a===13){if(n=He(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Xc=n,null}function Cv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vu()){case bt:return 2;case Nt:return 8;case ki:case Pu:return 32;case Ho:return 268435456;default:return 32}default:return 32}}var mm=!1,Gr=null,Kr=null,$r=null,ql=new Map,Hl=new Map,Qr=[],$S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dv(n,r){switch(n){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":ql.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hl.delete(r.pointerId)}}function Fl(n,r,a,l,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},r!==null&&(r=xi(r),r!==null&&Iv(r)),n):(n.eventSystemFlags|=l,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function QS(n,r,a,l,f){switch(r){case"focusin":return Gr=Fl(Gr,n,r,a,l,f),!0;case"dragenter":return Kr=Fl(Kr,n,r,a,l,f),!0;case"mouseover":return $r=Fl($r,n,r,a,l,f),!0;case"pointerover":var m=f.pointerId;return ql.set(m,Fl(ql.get(m)||null,n,r,a,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Hl.set(m,Fl(Hl.get(m)||null,n,r,a,l,f)),!0}return!1}function Ov(n){var r=Kn(n.target);if(r!==null){var a=pe(r);if(a!==null){if(r=a.tag,r===13){if(r=He(a),r!==null){n.blockedOn=r,Tr(n.priority,function(){if(a.tag===13){var l=Tn(),f=Or(a,l);f!==null&&sn(f,a,l),cm(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wc(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=fm(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Dn=l,a.target.dispatchEvent(l),Dn=null}else return r=xi(a),r!==null&&Iv(r),n.blockedOn=a,!1;r.shift()}return!0}function Nv(n,r,a){Wc(n)&&a.delete(r)}function YS(){mm=!1,Gr!==null&&Wc(Gr)&&(Gr=null),Kr!==null&&Wc(Kr)&&(Kr=null),$r!==null&&Wc($r)&&($r=null),ql.forEach(Nv),Hl.forEach(Nv)}function Zc(n,r){n.blockedOn===r&&(n.blockedOn=null,mm||(mm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,YS)))}var Jc=null;function kv(n){Jc!==n&&(Jc=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Jc===n&&(Jc=null);for(var r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],f=n[r+2];if(typeof l!="function"){if(dm(l||a)===null)continue;break}var m=xi(a);m!==null&&(n.splice(r,3),r-=3,id(m,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function Gl(n){function r(I){return Zc(I,n)}Gr!==null&&Zc(Gr,n),Kr!==null&&Zc(Kr,n),$r!==null&&Zc($r,n),ql.forEach(r),Hl.forEach(r);for(var a=0;a<Qr.length;a++){var l=Qr[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Qr.length&&(a=Qr[0],a.blockedOn===null);)Ov(a),a.blockedOn===null&&Qr.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],m=a[l+1],v=f[At]||null;if(typeof m=="function")v||kv(a);else if(v){var T=null;if(m&&m.hasAttribute("formAction")){if(f=m,v=m[At]||null)T=v.formAction;else if(dm(f)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),kv(a)}}}function pm(n){this._internalRoot=n}eh.prototype.render=pm.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=Tn();Sv(a,l,n,r,null,null)},eh.prototype.unmount=pm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;n.tag===0&&no(),Sv(n.current,2,null,n,null,null),Pc(),r[Mi]=null}};function eh(n){this._internalRoot=n}eh.prototype.unstable_scheduleHydration=function(n){if(n){var r=ju();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Qr.length&&r!==0&&r<Qr[a].priority;a++);Qr.splice(a,0,n),a===0&&Ov(n)}};var Mv=e.version;if(Mv!=="19.0.0")throw Error(s(527,Mv,"19.0.0"));le.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=ne(r),n=n!==null?de(n):null,n=n===null?null:n.stateNode,n};var XS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Kn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var th=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!th.isDisabled&&th.supportsFiber)try{pr=th.inject(XS),Kt=th}catch{}}return $l.createRoot=function(n,r){if(!o(n))throw Error(s(299));var a=!1,l="",f=X_,m=W_,v=Z_,T=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=bv(n,1,!1,null,null,a,l,f,m,v,T,null),n[Mi]=r.current,Zd(n.nodeType===8?n.parentNode:n),new pm(r)},$l.hydrateRoot=function(n,r,a){if(!o(n))throw Error(s(299));var l=!1,f="",m=X_,v=W_,T=Z_,I=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),r=bv(n,1,!0,r,a??null,l,f,m,v,T,I,V),r.context=Av(null),a=r.current,l=Tn(),f=Ur(l),f.callback=null,Lr(a,f,l),r.current.lanes=l,ht(r,l),Ei(r),n[Mi]=r.current,Zd(n),new eh(r)},$l.version="19.0.0",$l}var Hv;function aR(){if(Hv)return ym.exports;Hv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),ym.exports=sR(),ym.exports}var oR=aR();const lR=()=>{};var Fv={};/**
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
 */const BE=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},uR=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],d=i[t++],p=((o&7)<<18|(u&63)<<12|(h&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},jE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,d=h?i[o+1]:0,p=o+2<i.length,g=p?i[o+2]:0,E=u>>2,w=(u&3)<<4|d>>4;let S=(d&15)<<2|g>>6,O=g&63;p||(O=64,h||(S=64)),s.push(t[E],t[w],t[S],t[O])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(BE(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):uR(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],d=o<i.length?t[i.charAt(o)]:0;++o;const g=o<i.length?t[i.charAt(o)]:64;++o;const w=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||d==null||g==null||w==null)throw new cR;const S=u<<2|d>>4;if(s.push(S),g!==64){const O=d<<4&240|g>>2;if(s.push(O),w!==64){const P=g<<6&192|w;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class cR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hR=function(i){const e=BE(i);return jE.encodeByteArray(e,!0)},bh=function(i){return hR(i).replace(/\./g,"")},qE=function(i){try{return jE.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dR=()=>fR().__FIREBASE_DEFAULTS__,mR=()=>{if(typeof process>"u"||typeof Fv>"u")return;const i=Fv.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},pR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&qE(i[1]);return e&&JSON.parse(e)},Gh=()=>{try{return lR()||dR()||mR()||pR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},HE=i=>{var e,t;return(t=(e=Gh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},FE=i=>{const e=HE(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},GE=()=>{var i;return(i=Gh())===null||i===void 0?void 0:i.config},KE=i=>{var e;return(e=Gh())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class gR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function $E(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[bh(JSON.stringify(t)),bh(JSON.stringify(h)),""].join(".")}/**
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
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _R(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function yR(){var i;const e=(i=Gh())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ER(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TR(){const i=Zt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function wR(){return!yR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YE(){try{return typeof indexedDB=="object"}catch{return!1}}function XE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}function bR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const AR="FirebaseError";class Fn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=AR,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ca.prototype.create)}}class ca{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?SR(u,s):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new Fn(o,d,s)}}function SR(i,e){return i.replace(RR,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const RR=/\{\$([^}]+)}/g;function IR(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function ls(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Gv(u)&&Gv(h)){if(!ls(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Gv(i){return i!==null&&typeof i=="object"}/**
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
 */function wu(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Wl(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Zl(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function CR(i,e){const t=new DR(i,e);return t.subscribe.bind(t)}class DR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");OR(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=wm),o.error===void 0&&(o.error=wm),o.complete===void 0&&(o.complete=wm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OR(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function wm(){}/**
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
 */const NR=1e3,kR=2,MR=4*60*60*1e3,xR=.5;function Kv(i,e=NR,t=kR){const s=e*Math.pow(t,i),o=Math.round(xR*s*(Math.random()-.5)*2);return Math.min(MR,s+o)}/**
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
 */function mt(i){return i&&i._delegate?i._delegate:i}class Hn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zs="[DEFAULT]";/**
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
 */class VR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new gR;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UR(e))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zs){return this.instances.has(e)}getOptions(e=Zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(u);s===d&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:PR(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zs){return this.component?this.component.multipleInstances?e:Zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PR(i){return i===Zs?void 0:i}function UR(i){return i.instantiationMode==="EAGER"}/**
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
 */class LR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new VR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ne||(Ne={}));const zR={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},BR=Ne.INFO,jR={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},qR=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=jR[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kh{constructor(e){this.name=e,this._logLevel=BR,this._logHandler=qR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const HR=(i,e)=>e.some(t=>i instanceof t);let $v,Qv;function FR(){return $v||($v=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GR(){return Qv||(Qv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WE=new WeakMap,qm=new WeakMap,ZE=new WeakMap,bm=new WeakMap,vp=new WeakMap;function KR(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(is(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&WE.set(t,i)}).catch(()=>{}),vp.set(e,i),e}function $R(i){if(qm.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});qm.set(i,e)}let Hm={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return qm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ZE.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return is(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function QR(i){Hm=i(Hm)}function YR(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Am(this),e,...t);return ZE.set(s,e.sort?e.sort():[e]),is(s)}:GR().includes(i)?function(...e){return i.apply(Am(this),e),is(WE.get(this))}:function(...e){return is(i.apply(Am(this),e))}}function XR(i){return typeof i=="function"?YR(i):(i instanceof IDBTransaction&&$R(i),HR(i,FR())?new Proxy(i,Hm):i)}function is(i){if(i instanceof IDBRequest)return KR(i);if(bm.has(i))return bm.get(i);const e=XR(i);return e!==i&&(bm.set(i,e),vp.set(e,i)),e}const Am=i=>vp.get(i);function JE(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),d=is(h);return s&&h.addEventListener("upgradeneeded",p=>{s(is(h.result),p.oldVersion,p.newVersion,is(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const WR=["get","getKey","getAll","getAllKeys","count"],ZR=["put","add","delete","clear"],Sm=new Map;function Yv(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Sm.get(e))return Sm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=ZR.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||WR.includes(t)))return;const u=async function(h,...d){const p=this.transaction(h,o?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),o&&p.done]))[0]};return Sm.set(e,u),u}QR(i=>({...i,get:(e,t,s)=>Yv(e,t)||i.get(e,t,s),has:(e,t)=>!!Yv(e,t)||i.has(e,t)}));/**
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
 */class JR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(e1(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function e1(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fm="@firebase/app",Xv="0.11.2";/**
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
 */const ur=new Kh("@firebase/app"),t1="@firebase/app-compat",n1="@firebase/analytics-compat",i1="@firebase/analytics",r1="@firebase/app-check-compat",s1="@firebase/app-check",a1="@firebase/auth",o1="@firebase/auth-compat",l1="@firebase/database",u1="@firebase/data-connect",c1="@firebase/database-compat",h1="@firebase/functions",f1="@firebase/functions-compat",d1="@firebase/installations",m1="@firebase/installations-compat",p1="@firebase/messaging",g1="@firebase/messaging-compat",_1="@firebase/performance",y1="@firebase/performance-compat",v1="@firebase/remote-config",E1="@firebase/remote-config-compat",T1="@firebase/storage",w1="@firebase/storage-compat",b1="@firebase/firestore",A1="@firebase/vertexai",S1="@firebase/firestore-compat",R1="firebase",I1="11.4.0";/**
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
 */const Gm="[DEFAULT]",C1={[Fm]:"fire-core",[t1]:"fire-core-compat",[i1]:"fire-analytics",[n1]:"fire-analytics-compat",[s1]:"fire-app-check",[r1]:"fire-app-check-compat",[a1]:"fire-auth",[o1]:"fire-auth-compat",[l1]:"fire-rtdb",[u1]:"fire-data-connect",[c1]:"fire-rtdb-compat",[h1]:"fire-fn",[f1]:"fire-fn-compat",[d1]:"fire-iid",[m1]:"fire-iid-compat",[p1]:"fire-fcm",[g1]:"fire-fcm-compat",[_1]:"fire-perf",[y1]:"fire-perf-compat",[v1]:"fire-rc",[E1]:"fire-rc-compat",[T1]:"fire-gcs",[w1]:"fire-gcs-compat",[b1]:"fire-fst",[S1]:"fire-fst-compat",[A1]:"fire-vertex","fire-js":"fire-js",[R1]:"fire-js-all"};/**
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
 */const Ah=new Map,D1=new Map,Km=new Map;function Wv(i,e){try{i.container.addComponent(e)}catch(t){ur.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Jn(i){const e=i.name;if(Km.has(e))return ur.debug(`There were multiple attempts to register component ${e}.`),!1;Km.set(e,i);for(const t of Ah.values())Wv(t,i);for(const t of D1.values())Wv(t,i);return!0}function gs(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function wn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const O1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rs=new ca("app","Firebase",O1);/**
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
 */class N1{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rs.create("app-deleted",{appName:this._name})}}/**
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
 */const ha=I1;function eT(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gm,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw rs.create("bad-app-name",{appName:String(o)});if(t||(t=GE()),!t)throw rs.create("no-options");const u=Ah.get(o);if(u){if(ls(t,u.options)&&ls(s,u.config))return u;throw rs.create("duplicate-app",{appName:o})}const h=new LR(o);for(const p of Km.values())h.addComponent(p);const d=new N1(t,s,h);return Ah.set(o,d),d}function $h(i=Gm){const e=Ah.get(i);if(!e&&i===Gm&&GE())return eT();if(!e)throw rs.create("no-app",{appName:i});return e}function dn(i,e,t){var s;let o=(s=C1[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const d=[`Unable to register library "${o}" with version "${e}":`];u&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ur.warn(d.join(" "));return}Jn(new Hn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const k1="firebase-heartbeat-database",M1=1,hu="firebase-heartbeat-store";let Rm=null;function tT(){return Rm||(Rm=JE(k1,M1,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(hu)}catch(t){console.warn(t)}}}}).catch(i=>{throw rs.create("idb-open",{originalErrorMessage:i.message})})),Rm}async function x1(i){try{const t=(await tT()).transaction(hu),s=await t.objectStore(hu).get(nT(i));return await t.done,s}catch(e){if(e instanceof Fn)ur.warn(e.message);else{const t=rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ur.warn(t.message)}}}async function Zv(i,e){try{const s=(await tT()).transaction(hu,"readwrite");await s.objectStore(hu).put(e,nT(i)),await s.done}catch(t){if(t instanceof Fn)ur.warn(t.message);else{const s=rs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ur.warn(s.message)}}}function nT(i){return`${i.name}!${i.options.appId}`}/**
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
 */const V1=1024,P1=30;class U1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new z1(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Jv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>P1){const h=B1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ur.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jv(),{heartbeatsToSend:s,unsentEntries:o}=L1(this._heartbeatsCache.heartbeats),u=bh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return ur.warn(t),""}}}function Jv(){return new Date().toISOString().substring(0,10)}function L1(i,e=V1){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),e0(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),e0(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class z1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YE()?XE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await x1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function e0(i){return bh(JSON.stringify({version:2,heartbeats:i})).length}function B1(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function j1(i){Jn(new Hn("platform-logger",e=>new JR(e),"PRIVATE")),Jn(new Hn("heartbeat",e=>new U1(e),"PRIVATE")),dn(Fm,Xv,i),dn(Fm,Xv,"esm2017"),dn("fire-js","")}j1("");function Ep(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function iT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q1=iT,rT=new ca("auth","Firebase",iT());/**
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
 */const Sh=new Kh("@firebase/auth");function H1(i,...e){Sh.logLevel<=Ne.WARN&&Sh.warn(`Auth (${ha}): ${i}`,...e)}function hh(i,...e){Sh.logLevel<=Ne.ERROR&&Sh.error(`Auth (${ha}): ${i}`,...e)}/**
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
 */function ei(i,...e){throw Tp(i,...e)}function bi(i,...e){return Tp(i,...e)}function sT(i,e,t){const s=Object.assign(Object.assign({},q1()),{[e]:t});return new ca("auth","Firebase",s).create(e,{appName:i.name})}function ar(i){return sT(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tp(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return rT.create(i,...e)}function ve(i,e,...t){if(!i)throw Tp(e,...t)}function ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw hh(e),new Error(e)}function cr(i,e){i||ir(e)}/**
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
 */function $m(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function F1(){return t0()==="http:"||t0()==="https:"}function t0(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function G1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(F1()||QE()||"connection"in navigator)?navigator.onLine:!0}function K1(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class bu{constructor(e,t){this.shortDelay=e,this.longDelay=t,cr(t>e,"Short delay should be less than long delay!"),this.isMobile=_R()||ER()}get(){return G1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wp(i,e){cr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class aT{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Q1=new bu(3e4,6e4);function _s(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function ys(i,e,t,s,o={}){return oT(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const d=wu(Object.assign({key:i.config.apiKey},h)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return vR()||(g.referrerPolicy="no-referrer"),aT.fetch()(lT(i,i.config.apiHost,t,d),g)})}async function oT(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},$1),e);try{const o=new X1(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw nh(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const d=u.ok?h.errorMessage:h.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw nh(i,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw nh(i,"email-already-in-use",h);if(p==="USER_DISABLED")throw nh(i,"user-disabled",h);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw sT(i,E,g);ei(i,E)}}catch(o){if(o instanceof Fn)throw o;ei(i,"network-request-failed",{message:String(o)})}}async function Au(i,e,t,s,o={}){const u=await ys(i,e,t,s,o);return"mfaPendingCredential"in u&&ei(i,"multi-factor-auth-required",{_serverResponse:u}),u}function lT(i,e,t,s){const o=`${e}${t}?${s}`;return i.config.emulator?wp(i.config,o):`${i.config.apiScheme}://${o}`}function Y1(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class X1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(bi(this.auth,"network-request-failed")),Q1.get())})}}function nh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=bi(i,e,s);return o.customData._tokenResponse=t,o}function n0(i){return i!==void 0&&i.enterprise!==void 0}class W1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Y1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Z1(i,e){return ys(i,"GET","/v2/recaptchaConfig",_s(i,e))}/**
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
 */async function J1(i,e){return ys(i,"POST","/v1/accounts:delete",e)}async function uT(i,e){return ys(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function ru(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eI(i,e=!1){const t=mt(i),s=await t.getIdToken(e),o=bp(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:ru(Im(o.auth_time)),issuedAtTime:ru(Im(o.iat)),expirationTime:ru(Im(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Im(i){return Number(i)*1e3}function bp(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return hh("JWT malformed, contained fewer than 3 sections"),null;try{const o=qE(t);return o?JSON.parse(o):(hh("Failed to decode base64 JWT payload"),null)}catch(o){return hh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function i0(i){const e=bp(i);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fu(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Fn&&tI(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function tI({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class nI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ru(this.lastLoginAt),this.creationTime=ru(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rh(i){var e;const t=i.auth,s=await i.getIdToken(),o=await fu(i,uT(t,{idToken:s}));ve(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?cT(u.providerUserInfo):[],d=rI(i.providerData,h),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(d!=null&&d.length),E=p?g:!1,w={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:d,metadata:new Qm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,w)}async function iI(i){const e=mt(i);await Rh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rI(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function cT(i){return i.map(e=>{var{providerId:t}=e,s=Ep(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function sI(i,e){const t=await oT(i,{},async()=>{const s=wu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=lT(i,o,"/v1/token",`key=${u}`),d=await i._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",aT.fetch()(h,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function aI(i,e){return ys(i,"POST","/v2/accounts:revokeToken",_s(i,e))}/**
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
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):i0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=i0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await sI(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new _o;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
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
 */function Xr(i,e){ve(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Ep(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Qm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await fu(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eI(this,e)}reload(){return iI(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Rh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await fu(this,J1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,d,p,g,E;const w=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,O=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,P=(h=t.photoURL)!==null&&h!==void 0?h:void 0,K=(d=t.tenantId)!==null&&d!==void 0?d:void 0,U=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,G=(g=t.createdAt)!==null&&g!==void 0?g:void 0,te=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Y,emailVerified:se,isAnonymous:ae,providerData:_e,stsTokenManager:k}=t;ve(Y&&k,e,"internal-error");const R=_o.fromJSON(this.name,k);ve(typeof Y=="string",e,"internal-error"),Xr(w,e.name),Xr(S,e.name),ve(typeof se=="boolean",e,"internal-error"),ve(typeof ae=="boolean",e,"internal-error"),Xr(O,e.name),Xr(P,e.name),Xr(K,e.name),Xr(U,e.name),Xr(G,e.name),Xr(te,e.name);const A=new rr({uid:Y,auth:e,email:S,emailVerified:se,displayName:w,isAnonymous:ae,photoURL:P,phoneNumber:O,tenantId:K,stsTokenManager:R,createdAt:G,lastLoginAt:te});return _e&&Array.isArray(_e)&&(A.providerData=_e.map(C=>Object.assign({},C))),U&&(A._redirectEventId=U),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new _o;o.updateFromServerResponse(t);const u=new rr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Rh(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?cT(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),d=new _o;d.updateFromIdToken(s);const p=new rr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Qm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const r0=new Map;function sr(i){cr(i instanceof Function,"Expected a class definition");let e=r0.get(i);return e?(cr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,r0.set(i,e),e)}/**
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
 */class hT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hT.type="NONE";const s0=hT;/**
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
 */function fh(i,e,t){return`firebase:${i}:${e}:${t}`}class yo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=fh(this.userKey,o.apiKey,u),this.fullPersistenceKey=fh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new yo(sr(s0),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||sr(s0);const h=fh(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const E=await g._get(h);if(E){const w=rr._fromJSON(e,E);g!==u&&(d=w),u=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new yo(u,e,s):(u=p[0],d&&await u._set(h,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new yo(u,e,s))}}/**
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
 */function a0(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_T(e))return"Blackberry";if(yT(e))return"Webos";if(dT(e))return"Safari";if((e.includes("chrome/")||mT(e))&&!e.includes("edge/"))return"Chrome";if(gT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function fT(i=Zt()){return/firefox\//i.test(i)}function dT(i=Zt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mT(i=Zt()){return/crios\//i.test(i)}function pT(i=Zt()){return/iemobile/i.test(i)}function gT(i=Zt()){return/android/i.test(i)}function _T(i=Zt()){return/blackberry/i.test(i)}function yT(i=Zt()){return/webos/i.test(i)}function Ap(i=Zt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function oI(i=Zt()){var e;return Ap(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lI(){return TR()&&document.documentMode===10}function vT(i=Zt()){return Ap(i)||gT(i)||yT(i)||_T(i)||/windows phone/i.test(i)||pT(i)}/**
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
 */function ET(i,e=[]){let t;switch(i){case"Browser":t=a0(Zt());break;case"Worker":t=`${a0(Zt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ha}/${s}`}/**
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
 */class uI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,d)=>{try{const p=e(u);h(p)}catch(p){d(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function cI(i,e={}){return ys(i,"GET","/v2/passwordPolicy",_s(i,e))}/**
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
 */const hI=6;class fI{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:hI,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class dI{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new o0(this),this.idTokenSubscription=new o0(this),this.beforeStateQueue=new uI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=sr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await uT(this,{idToken:e}),s=await rr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===d)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(ar(this));const t=e?mt(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cI(this),t=new fI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ca("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await aI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&sr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[sr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(d,this,"internal-error"),d.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ET(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&H1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function fa(i){return mt(i)}class o0{constructor(e){this.auth=e,this.observer=null,this.addObserver=CR(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mI(i){Qh=i}function TT(i){return Qh.loadJS(i)}function pI(){return Qh.recaptchaEnterpriseScript}function gI(){return Qh.gapiScript}function _I(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class yI{constructor(){this.enterprise=new vI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const EI="recaptcha-enterprise",wT="NO_RECAPTCHA";class TI{constructor(e){this.type=EI,this.auth=fa(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,d)=>{Z1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new W1(p);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(p=>{d(p)})})}function o(u,h,d){const p=window.grecaptcha;n0(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(wT)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yI().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(d=>{if(!t&&n0(window.grecaptcha))o(d,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=pI();p.length!==0&&(p+=d),TT(p).then(()=>{o(d,u,h)}).catch(g=>{h(g)})}}).catch(d=>{h(d)})})}}async function l0(i,e,t,s=!1,o=!1){const u=new TI(i);let h;if(o)h=wT;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Ym(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await l0(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await l0(i,e,t,t==="getOobCode");return s(i,d)}else return Promise.reject(h)})}/**
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
 */function wI(i,e){const t=gs(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(ls(u,e??{}))return o;ei(o,"already-initialized")}return t.initialize({options:e})}function bI(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(sr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function AI(i,e,t){const s=fa(i);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=bT(e),{host:h,port:d}=SI(e),p=d===null?"":`:${d}`,g={url:`${u}//${h}${p}/`},E=Object.freeze({host:h,port:d,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(ls(g,s.config.emulator)&&ls(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,RI()}function bT(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function SI(i){const e=bT(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:u0(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:u0(h)}}}function u0(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function RI(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Sp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,t){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}async function II(i,e){return ys(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function CI(i,e){return Au(i,"POST","/v1/accounts:signInWithPassword",_s(i,e))}/**
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
 */async function DI(i,e){return Au(i,"POST","/v1/accounts:signInWithEmailLink",_s(i,e))}async function OI(i,e){return Au(i,"POST","/v1/accounts:signInWithEmailLink",_s(i,e))}/**
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
 */class du extends Sp{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new du(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new du(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ym(e,t,"signInWithPassword",CI);case"emailLink":return DI(e,{email:this._email,oobCode:this._password});default:ei(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ym(e,s,"signUpPassword",II);case"emailLink":return OI(e,{idToken:t,email:this._email,oobCode:this._password});default:ei(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vo(i,e){return Au(i,"POST","/v1/accounts:signInWithIdp",_s(i,e))}/**
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
 */const NI="http://localhost";class na extends Sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new na(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ei("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Ep(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new na(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return vo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,vo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vo(e,t)}buildRequest(){const e={requestUri:NI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wu(t)}return e}}/**
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
 */function kI(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MI(i){const e=Wl(Zl(i)).link,t=e?Wl(Zl(e)).deep_link_id:null,s=Wl(Zl(i)).deep_link_id;return(s?Wl(Zl(s)).link:null)||s||t||e||i}class Rp{constructor(e){var t,s,o,u,h,d;const p=Wl(Zl(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(s=p.oobCode)!==null&&s!==void 0?s:null,w=kI((o=p.mode)!==null&&o!==void 0?o:null);ve(g&&E&&w,"argument-error"),this.apiKey=g,this.operation=w,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=MI(e);try{return new Rp(t)}catch{return null}}}/**
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
 */class Oo{constructor(){this.providerId=Oo.PROVIDER_ID}static credential(e,t){return du._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Rp.parseLink(t);return ve(s,"argument-error"),du._fromEmailAndCode(e,s.code,s.tenantId)}}Oo.PROVIDER_ID="password";Oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class AT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Su extends AT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wr extends Su{constructor(){super("facebook.com")}static credential(e){return na._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch{return null}}}Wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wr.PROVIDER_ID="facebook.com";/**
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
 */class Zr extends Su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return na._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Zr.credential(t,s)}catch{return null}}}Zr.GOOGLE_SIGN_IN_METHOD="google.com";Zr.PROVIDER_ID="google.com";/**
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
 */class Jr extends Su{constructor(){super("github.com")}static credential(e){return na._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
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
 */class es extends Su{constructor(){super("twitter.com")}static credential(e,t){return na._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return es.credential(t,s)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
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
 */async function xI(i,e){return Au(i,"POST","/v1/accounts:signUp",_s(i,e))}/**
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
 */class ia{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await rr._fromIdTokenResponse(e,s,o),h=c0(s);return new ia({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=c0(s);return new ia({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function c0(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Ih extends Fn{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ih.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ih(e,t,s,o)}}function ST(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ih._fromErrorAndOperation(i,u,e,s):u})}async function VI(i,e,t=!1){const s=await fu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ia._forOperation(i,"link",s)}/**
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
 */async function PI(i,e,t=!1){const{auth:s}=i;if(wn(s.app))return Promise.reject(ar(s));const o="reauthenticate";try{const u=await fu(i,ST(s,o,e,i),t);ve(u.idToken,s,"internal-error");const h=bp(u.idToken);ve(h,s,"internal-error");const{sub:d}=h;return ve(i.uid===d,s,"user-mismatch"),ia._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&ei(s,"user-mismatch"),u}}/**
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
 */async function RT(i,e,t=!1){if(wn(i.app))return Promise.reject(ar(i));const s="signIn",o=await ST(i,s,e),u=await ia._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function UI(i,e){return RT(fa(i),e)}/**
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
 */async function IT(i){const e=fa(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LI(i,e,t){if(wn(i.app))return Promise.reject(ar(i));const s=fa(i),h=await Ym(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xI).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&IT(i),p}),d=await ia._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(d.user),d}function zI(i,e,t){return wn(i.app)?Promise.reject(ar(i)):UI(mt(i),Oo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&IT(i),s})}function BI(i,e,t,s){return mt(i).onIdTokenChanged(e,t,s)}function jI(i,e,t){return mt(i).beforeAuthStateChanged(e,t)}function CT(i,e,t,s){return mt(i).onAuthStateChanged(e,t,s)}const Ch="__sak";/**
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
 */class DT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ch,"1"),this.storage.removeItem(Ch),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qI=1e3,HI=10;class OT extends DT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,p)=>{this.notifyListeners(h,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);lI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,HI):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},qI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}OT.type="LOCAL";const FI=OT;/**
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
 */class NT extends DT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}NT.type="SESSION";const kT=NT;/**
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
 */function GI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Yh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Yh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const d=Array.from(h).map(async g=>g(t.origin,u)),p=await GI(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yh.receivers=[];/**
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
 */function Ip(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class KI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((d,p)=>{const g=Ip("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(w){const S=w;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),d(S.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Ai(){return window}function $I(i){Ai().location.href=i}/**
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
 */function MT(){return typeof Ai().WorkerGlobalScope<"u"&&typeof Ai().importScripts=="function"}async function QI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function XI(){return MT()?self:null}/**
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
 */const xT="firebaseLocalStorageDb",WI=1,Dh="firebaseLocalStorage",VT="fbase_key";class Ru{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xh(i,e){return i.transaction([Dh],e?"readwrite":"readonly").objectStore(Dh)}function ZI(){const i=indexedDB.deleteDatabase(xT);return new Ru(i).toPromise()}function Xm(){const i=indexedDB.open(xT,WI);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Dh,{keyPath:VT})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Dh)?e(s):(s.close(),await ZI(),e(await Xm()))})})}async function h0(i,e,t){const s=Xh(i,!0).put({[VT]:e,value:t});return new Ru(s).toPromise()}async function JI(i,e){const t=Xh(i,!1).get(e),s=await new Ru(t).toPromise();return s===void 0?null:s.value}function f0(i,e){const t=Xh(i,!0).delete(e);return new Ru(t).toPromise()}const eC=800,tC=3;class PT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>tC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yh._getInstance(XI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await QI(),!this.activeServiceWorker)return;this.sender=new KI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xm();return await h0(e,Ch,"1"),await f0(e,Ch),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>h0(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>JI(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>f0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Xh(o,!1).getAll();return new Ru(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PT.type="LOCAL";const nC=PT;new bu(3e4,6e4);/**
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
 */function iC(i,e){return e?sr(e):(ve(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Cp extends Sp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rC(i){return RT(i.auth,new Cp(i),i.bypassAuthState)}function sC(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),PI(t,new Cp(i),i.bypassAuthState)}async function aC(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),VI(t,new Cp(i),i.bypassAuthState)}/**
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
 */class UT{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:d}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rC;case"linkViaPopup":case"linkViaRedirect":return aC;case"reauthViaPopup":case"reauthViaRedirect":return sC;default:ei(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oC=new bu(2e3,1e4);class po extends UT{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,po.currentPopupAction&&po.currentPopupAction.cancel(),po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=Ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(bi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,po.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oC.get())};e()}}po.currentPopupAction=null;/**
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
 */const lC="pendingRedirect",dh=new Map;class uC extends UT{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=dh.get(this.auth._key());if(!e){try{const s=await cC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}dh.set(this.auth._key(),e)}return this.bypassAuthState||dh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cC(i,e){const t=dC(e),s=fC(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function hC(i,e){dh.set(i._key(),e)}function fC(i){return sr(i._redirectPersistence)}function dC(i){return fh(lC,i.config.apiKey,i.name)}async function mC(i,e,t=!1){if(wn(i.app))return Promise.reject(ar(i));const s=fa(i),o=iC(s,e),h=await new uC(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const pC=10*60*1e3;class gC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_C(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!LT(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(bi(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pC&&this.cachedEventUids.clear(),this.cachedEventUids.has(d0(e))}saveEventToCache(e){this.cachedEventUids.add(d0(e)),this.lastProcessedEventTime=Date.now()}}function d0(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function LT({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _C(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LT(i);default:return!1}}/**
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
 */async function yC(i,e={}){return ys(i,"GET","/v1/projects",e)}/**
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
 */const vC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EC=/^https?/;async function TC(i){if(i.config.emulator)return;const{authorizedDomains:e}=await yC(i);for(const t of e)try{if(wC(t))return}catch{}ei(i,"unauthorized-domain")}function wC(i){const e=$m(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!EC.test(t))return!1;if(vC.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const bC=new bu(3e4,6e4);function m0(){const i=Ai().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function AC(i){return new Promise((e,t)=>{var s,o,u;function h(){m0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{m0(),t(bi(i,"network-request-failed"))},timeout:bC.get()})}if(!((o=(s=Ai().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Ai().gapi)===null||u===void 0)&&u.load)h();else{const d=_I("iframefcb");return Ai()[d]=()=>{gapi.load?h():t(bi(i,"network-request-failed"))},TT(`${gI()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw mh=null,e})}let mh=null;function SC(i){return mh=mh||AC(i),mh}/**
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
 */const RC=new bu(5e3,15e3),IC="__/auth/iframe",CC="emulator/auth/iframe",DC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NC(i){const e=i.config;ve(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?wp(e,CC):`https://${i.config.authDomain}/${IC}`,s={apiKey:e.apiKey,appName:i.name,v:ha},o=OC.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${wu(s).slice(1)}`}async function kC(i){const e=await SC(i),t=Ai().gapi;return ve(t,i,"internal-error"),e.open({where:document.body,url:NC(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DC,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=bi(i,"network-request-failed"),d=Ai().setTimeout(()=>{u(h)},RC.get());function p(){Ai().clearTimeout(d),o(s)}s.ping(p).then(p,()=>{u(h)})}))}/**
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
 */const MC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xC=500,VC=600,PC="_blank",UC="http://localhost";class p0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LC(i,e,t,s=xC,o=VC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p=Object.assign(Object.assign({},MC),{width:s.toString(),height:o.toString(),top:u,left:h}),g=Zt().toLowerCase();t&&(d=mT(g)?PC:t),fT(g)&&(e=e||UC,p.scrollbars="yes");const E=Object.entries(p).reduce((S,[O,P])=>`${S}${O}=${P},`,"");if(oI(g)&&d!=="_self")return zC(e||"",d),new p0(null);const w=window.open(e||"",d,E);ve(w,i,"popup-blocked");try{w.focus()}catch{}return new p0(w)}function zC(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const BC="__/auth/handler",jC="emulator/auth/handler",qC=encodeURIComponent("fac");async function g0(i,e,t,s,o,u){ve(i.config.authDomain,i,"auth-domain-config-required"),ve(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:ha,eventId:o};if(e instanceof AT){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",IR(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,w]of Object.entries({}))h[E]=w}if(e instanceof Su){const E=e.getScopes().filter(w=>w!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const d=h;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const p=await i._getAppCheckToken(),g=p?`#${qC}=${encodeURIComponent(p)}`:"";return`${HC(i)}?${wu(d).slice(1)}${g}`}function HC({config:i}){return i.emulator?wp(i,jC):`https://${i.authDomain}/${BC}`}/**
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
 */const Cm="webStorageSupport";class FC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kT,this._completeRedirectFn=mC,this._overrideRedirectResult=hC}async _openPopup(e,t,s,o){var u;cr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await g0(e,t,s,$m(),o);return LC(e,h,Ip())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await g0(e,t,s,$m(),o);return $I(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(cr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await kC(e),s=new gC(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cm,{type:Cm},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Cm];h!==void 0&&t(!!h),ei(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=TC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vT()||dT()||Ap()}}const GC=FC;var _0="@firebase/auth",y0="1.9.1";/**
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
 */class KC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $C(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QC(i){Jn(new Hn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:h,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ET(i)},g=new dI(s,o,u,p);return bI(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Jn(new Hn("auth-internal",e=>{const t=fa(e.getProvider("auth").getImmediate());return(s=>new KC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(_0,y0,$C(i)),dn(_0,y0,"esm2017")}/**
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
 */const YC=5*60,XC=KE("authIdTokenMaxAge")||YC;let v0=null;const WC=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>XC)return;const o=t==null?void 0:t.token;v0!==o&&(v0=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ZC(i=$h()){const e=gs(i,"auth");if(e.isInitialized())return e.getImmediate();const t=wI(i,{popupRedirectResolver:GC,persistence:[nC,FI,kT]}),s=KE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=WC(u.toString());jI(t,h,()=>h(t.currentUser)),BI(t,d=>h(d))}}const o=HE("auth");return o&&AI(t,`http://${o}`),t}function JC(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}mI({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=bi("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",JC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QC("Browser");var e2="firebase",t2="11.4.0";/**
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
 */dn(e2,t2,"app");const zT="@firebase/installations",Dp="0.6.13";/**
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
 */const BT=1e4,jT=`w:${Dp}`,qT="FIS_v2",n2="https://firebaseinstallations.googleapis.com/v1",i2=60*60*1e3,r2="installations",s2="Installations";/**
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
 */const a2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ra=new ca(r2,s2,a2);function HT(i){return i instanceof Fn&&i.code.includes("request-failed")}/**
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
 */function FT({projectId:i}){return`${n2}/projects/${i}/installations`}function GT(i){return{token:i.token,requestStatus:2,expiresIn:l2(i.expiresIn),creationTime:Date.now()}}async function KT(i,e){const s=(await e.json()).error;return ra.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function $T({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function o2(i,{refreshToken:e}){const t=$T(i);return t.append("Authorization",u2(e)),t}async function QT(i){const e=await i();return e.status>=500&&e.status<600?i():e}function l2(i){return Number(i.replace("s","000"))}function u2(i){return`${qT} ${i}`}/**
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
 */async function c2({appConfig:i,heartbeatServiceProvider:e},{fid:t}){const s=FT(i),o=$T(i),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={fid:t,authVersion:qT,appId:i.appId,sdkVersion:jT},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await QT(()=>fetch(s,d));if(p.ok){const g=await p.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:GT(g.authToken)}}else throw await KT("Create Installation",p)}/**
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
 */function YT(i){return new Promise(e=>{setTimeout(e,i)})}/**
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
 */function h2(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const f2=/^[cdef][\w-]{21}$/,Wm="";function d2(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const t=m2(i);return f2.test(t)?t:Wm}catch{return Wm}}function m2(i){return h2(i).substr(0,22)}/**
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
 */function Wh(i){return`${i.appName}!${i.appId}`}/**
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
 */const XT=new Map;function WT(i,e){const t=Wh(i);ZT(t,e),p2(t,e)}function ZT(i,e){const t=XT.get(i);if(t)for(const s of t)s(e)}function p2(i,e){const t=g2();t&&t.postMessage({key:i,fid:e}),_2()}let Js=null;function g2(){return!Js&&"BroadcastChannel"in self&&(Js=new BroadcastChannel("[Firebase] FID Change"),Js.onmessage=i=>{ZT(i.data.key,i.data.fid)}),Js}function _2(){XT.size===0&&Js&&(Js.close(),Js=null)}/**
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
 */const y2="firebase-installations-database",v2=1,sa="firebase-installations-store";let Dm=null;function Op(){return Dm||(Dm=JE(y2,v2,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(sa)}}})),Dm}async function Oh(i,e){const t=Wh(i),o=(await Op()).transaction(sa,"readwrite"),u=o.objectStore(sa),h=await u.get(t);return await u.put(e,t),await o.done,(!h||h.fid!==e.fid)&&WT(i,e.fid),e}async function JT(i){const e=Wh(i),s=(await Op()).transaction(sa,"readwrite");await s.objectStore(sa).delete(e),await s.done}async function Zh(i,e){const t=Wh(i),o=(await Op()).transaction(sa,"readwrite"),u=o.objectStore(sa),h=await u.get(t),d=e(h);return d===void 0?await u.delete(t):await u.put(d,t),await o.done,d&&(!h||h.fid!==d.fid)&&WT(i,d.fid),d}/**
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
 */async function Np(i){let e;const t=await Zh(i.appConfig,s=>{const o=E2(s),u=T2(i,o);return e=u.registrationPromise,u.installationEntry});return t.fid===Wm?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function E2(i){const e=i||{fid:d2(),registrationStatus:0};return ew(e)}function T2(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ra.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=w2(i,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:b2(i)}:{installationEntry:e}}async function w2(i,e){try{const t=await c2(i,e);return Oh(i.appConfig,t)}catch(t){throw HT(t)&&t.customData.serverCode===409?await JT(i.appConfig):await Oh(i.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function b2(i){let e=await E0(i.appConfig);for(;e.registrationStatus===1;)await YT(100),e=await E0(i.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Np(i);return s||t}return e}function E0(i){return Zh(i,e=>{if(!e)throw ra.create("installation-not-found");return ew(e)})}function ew(i){return A2(i)?{fid:i.fid,registrationStatus:0}:i}function A2(i){return i.registrationStatus===1&&i.registrationTime+BT<Date.now()}/**
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
 */async function S2({appConfig:i,heartbeatServiceProvider:e},t){const s=R2(i,t),o=o2(i,t),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={installation:{sdkVersion:jT,appId:i.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await QT(()=>fetch(s,d));if(p.ok){const g=await p.json();return GT(g)}else throw await KT("Generate Auth Token",p)}function R2(i,{fid:e}){return`${FT(i)}/${e}/authTokens:generate`}/**
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
 */async function kp(i,e=!1){let t;const s=await Zh(i.appConfig,u=>{if(!tw(u))throw ra.create("not-registered");const h=u.authToken;if(!e&&D2(h))return u;if(h.requestStatus===1)return t=I2(i,e),u;{if(!navigator.onLine)throw ra.create("app-offline");const d=N2(u);return t=C2(i,d),d}});return t?await t:s.authToken}async function I2(i,e){let t=await T0(i.appConfig);for(;t.authToken.requestStatus===1;)await YT(100),t=await T0(i.appConfig);const s=t.authToken;return s.requestStatus===0?kp(i,e):s}function T0(i){return Zh(i,e=>{if(!tw(e))throw ra.create("not-registered");const t=e.authToken;return k2(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function C2(i,e){try{const t=await S2(i,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Oh(i.appConfig,s),t}catch(t){if(HT(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await JT(i.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Oh(i.appConfig,s)}throw t}}function tw(i){return i!==void 0&&i.registrationStatus===2}function D2(i){return i.requestStatus===2&&!O2(i)}function O2(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+i2}function N2(i){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:e})}function k2(i){return i.requestStatus===1&&i.requestTime+BT<Date.now()}/**
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
 */async function M2(i){const e=i,{installationEntry:t,registrationPromise:s}=await Np(e);return s?s.catch(console.error):kp(e).catch(console.error),t.fid}/**
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
 */async function x2(i,e=!1){const t=i;return await V2(t),(await kp(t,e)).token}async function V2(i){const{registrationPromise:e}=await Np(i);e&&await e}/**
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
 */function P2(i){if(!i||!i.options)throw Om("App Configuration");if(!i.name)throw Om("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!i.options[t])throw Om(t);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Om(i){return ra.create("missing-app-config-values",{valueName:i})}/**
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
 */const nw="installations",U2="installations-internal",L2=i=>{const e=i.getProvider("app").getImmediate(),t=P2(e),s=gs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},z2=i=>{const e=i.getProvider("app").getImmediate(),t=gs(e,nw).getImmediate();return{getId:()=>M2(t),getToken:o=>x2(t,o)}};function B2(){Jn(new Hn(nw,L2,"PUBLIC")),Jn(new Hn(U2,z2,"PRIVATE"))}B2();dn(zT,Dp);dn(zT,Dp,"esm2017");/**
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
 */const Nh="analytics",j2="firebase_id",q2="origin",H2=60*1e3,F2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mp="https://www.googletagmanager.com/gtag/js";/**
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
 */const mn=new Kh("@firebase/analytics");/**
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
 */const G2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},An=new ca("analytics","Analytics",G2);/**
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
 */function K2(i){if(!i.startsWith(Mp)){const e=An.create("invalid-gtag-resource",{gtagURL:i});return mn.warn(e.message),""}return i}function iw(i){return Promise.all(i.map(e=>e.catch(t=>t)))}function $2(i,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(i,e)),t}function Q2(i,e){const t=$2("firebase-js-sdk-policy",{createScriptURL:K2}),s=document.createElement("script"),o=`${Mp}?l=${i}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function Y2(i){let e=[];return Array.isArray(window[i])?e=window[i]:window[i]=e,e}async function X2(i,e,t,s,o,u){const h=s[o];try{if(h)await e[h];else{const p=(await iw(t)).find(g=>g.measurementId===o);p&&await e[p.appId]}}catch(d){mn.error(d)}i("config",o,u)}async function W2(i,e,t,s,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await iw(t);for(const p of h){const g=d.find(w=>w.measurementId===p),E=g&&e[g.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),i("event",s,o||{})}catch(u){mn.error(u)}}function Z2(i,e,t,s){async function o(u,...h){try{if(u==="event"){const[d,p]=h;await W2(i,e,t,d,p)}else if(u==="config"){const[d,p]=h;await X2(i,e,t,s,d,p)}else if(u==="consent"){const[d,p]=h;i("consent",d,p)}else if(u==="get"){const[d,p,g]=h;i("get",d,p,g)}else if(u==="set"){const[d]=h;i("set",d)}else i(u,...h)}catch(d){mn.error(d)}}return o}function J2(i,e,t,s,o){let u=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=Z2(u,i,e,t),{gtagCore:u,wrappedGtag:window[o]}}function eD(i){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Mp)&&t.src.includes(i))return t;return null}/**
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
 */const tD=30,nD=1e3;class iD{constructor(e={},t=nD){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const rw=new iD;function rD(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function sD(i){var e;const{appId:t,apiKey:s}=i,o={method:"GET",headers:rD(s)},u=F2.replace("{app-id}",t),h=await fetch(u,o);if(h.status!==200&&h.status!==304){let d="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw An.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function aD(i,e=rw,t){const{appId:s,apiKey:o,measurementId:u}=i.options;if(!s)throw An.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw An.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new uD;return setTimeout(async()=>{d.abort()},H2),sw({appId:s,apiKey:o,measurementId:u},h,d,e)}async function sw(i,{throttleEndTimeMillis:e,backoffCount:t},s,o=rw){var u;const{appId:h,measurementId:d}=i;try{await oD(s,e)}catch(p){if(d)return mn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:d};throw p}try{const p=await sD(i);return o.deleteThrottleMetadata(h),p}catch(p){const g=p;if(!lD(g)){if(o.deleteThrottleMetadata(h),d)return mn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:d};throw p}const E=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?Kv(t,o.intervalMillis,tD):Kv(t,o.intervalMillis),w={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,w),mn.debug(`Calling attemptFetch again in ${E} millis`),sw(i,w,s,o)}}function oD(i,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(t,o);i.addEventListener(()=>{clearTimeout(u),s(An.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function lD(i){if(!(i instanceof Fn)||!i.customData)return!1;const e=Number(i.customData.httpStatus);return e===429||e===500||e===503||e===504}class uD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cD(i,e,t,s,o){if(o&&o.global){i("event",t,s);return}else{const u=await e,h=Object.assign(Object.assign({},s),{send_to:u});i("event",t,h)}}/**
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
 */async function hD(){if(YE())try{await XE()}catch(i){return mn.warn(An.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return mn.warn(An.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fD(i,e,t,s,o,u,h){var d;const p=aD(i);p.then(O=>{t[O.measurementId]=O.appId,i.options.measurementId&&O.measurementId!==i.options.measurementId&&mn.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>mn.error(O)),e.push(p);const g=hD().then(O=>{if(O)return s.getId()}),[E,w]=await Promise.all([p,g]);eD(u)||Q2(u,E.measurementId),o("js",new Date);const S=(d=h==null?void 0:h.config)!==null&&d!==void 0?d:{};return S[q2]="firebase",S.update=!0,w!=null&&(S[j2]=w),o("config",E.measurementId,S),E.measurementId}/**
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
 */class dD{constructor(e){this.app=e}_delete(){return delete su[this.app.options.appId],Promise.resolve()}}let su={},w0=[];const b0={};let Nm="dataLayer",mD="gtag",A0,aw,S0=!1;function pD(){const i=[];if(QE()&&i.push("This is a browser extension environment."),bR()||i.push("Cookies are not available."),i.length>0){const e=i.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=An.create("invalid-analytics-context",{errorInfo:e});mn.warn(t.message)}}function gD(i,e,t){pD();const s=i.options.appId;if(!s)throw An.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)mn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw An.create("no-api-key");if(su[s]!=null)throw An.create("already-exists",{id:s});if(!S0){Y2(Nm);const{wrappedGtag:u,gtagCore:h}=J2(su,w0,b0,Nm,mD);aw=u,A0=h,S0=!0}return su[s]=fD(i,w0,b0,e,A0,Nm,t),new dD(i)}function _D(i=$h()){i=mt(i);const e=gs(i,Nh);return e.isInitialized()?e.getImmediate():yD(i)}function yD(i,e={}){const t=gs(i,Nh);if(t.isInitialized()){const o=t.getImmediate();if(ls(e,t.getOptions()))return o;throw An.create("already-initialized")}return t.initialize({options:e})}function vD(i,e,t,s){i=mt(i),cD(aw,su[i.app.options.appId],e,t,s).catch(o=>mn.error(o))}const R0="@firebase/analytics",I0="0.10.12";function ED(){Jn(new Hn(Nh,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return gD(s,o,t)},"PUBLIC")),Jn(new Hn("analytics-internal",i,"PRIVATE")),dn(R0,I0),dn(R0,I0,"esm2017");function i(e){try{const t=e.getProvider(Nh).getImmediate();return{logEvent:(s,o,u)=>vD(t,s,o,u)}}catch(t){throw An.create("interop-component-reg-failed",{reason:t})}}}ED();var C0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ss,ow;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,R){function A(){}A.prototype=R.prototype,k.D=R.prototype,k.prototype=new A,k.prototype.constructor=k,k.C=function(C,x,B){for(var D=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)D[wt-2]=arguments[wt];return R.prototype[x].apply(C,D)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,R,A){A||(A=0);var C=Array(16);if(typeof R=="string")for(var x=0;16>x;++x)C[x]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(x=0;16>x;++x)C[x]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=k.g[0],A=k.g[1],x=k.g[2];var B=k.g[3],D=R+(B^A&(x^B))+C[0]+3614090360&4294967295;R=A+(D<<7&4294967295|D>>>25),D=B+(x^R&(A^x))+C[1]+3905402710&4294967295,B=R+(D<<12&4294967295|D>>>20),D=x+(A^B&(R^A))+C[2]+606105819&4294967295,x=B+(D<<17&4294967295|D>>>15),D=A+(R^x&(B^R))+C[3]+3250441966&4294967295,A=x+(D<<22&4294967295|D>>>10),D=R+(B^A&(x^B))+C[4]+4118548399&4294967295,R=A+(D<<7&4294967295|D>>>25),D=B+(x^R&(A^x))+C[5]+1200080426&4294967295,B=R+(D<<12&4294967295|D>>>20),D=x+(A^B&(R^A))+C[6]+2821735955&4294967295,x=B+(D<<17&4294967295|D>>>15),D=A+(R^x&(B^R))+C[7]+4249261313&4294967295,A=x+(D<<22&4294967295|D>>>10),D=R+(B^A&(x^B))+C[8]+1770035416&4294967295,R=A+(D<<7&4294967295|D>>>25),D=B+(x^R&(A^x))+C[9]+2336552879&4294967295,B=R+(D<<12&4294967295|D>>>20),D=x+(A^B&(R^A))+C[10]+4294925233&4294967295,x=B+(D<<17&4294967295|D>>>15),D=A+(R^x&(B^R))+C[11]+2304563134&4294967295,A=x+(D<<22&4294967295|D>>>10),D=R+(B^A&(x^B))+C[12]+1804603682&4294967295,R=A+(D<<7&4294967295|D>>>25),D=B+(x^R&(A^x))+C[13]+4254626195&4294967295,B=R+(D<<12&4294967295|D>>>20),D=x+(A^B&(R^A))+C[14]+2792965006&4294967295,x=B+(D<<17&4294967295|D>>>15),D=A+(R^x&(B^R))+C[15]+1236535329&4294967295,A=x+(D<<22&4294967295|D>>>10),D=R+(x^B&(A^x))+C[1]+4129170786&4294967295,R=A+(D<<5&4294967295|D>>>27),D=B+(A^x&(R^A))+C[6]+3225465664&4294967295,B=R+(D<<9&4294967295|D>>>23),D=x+(R^A&(B^R))+C[11]+643717713&4294967295,x=B+(D<<14&4294967295|D>>>18),D=A+(B^R&(x^B))+C[0]+3921069994&4294967295,A=x+(D<<20&4294967295|D>>>12),D=R+(x^B&(A^x))+C[5]+3593408605&4294967295,R=A+(D<<5&4294967295|D>>>27),D=B+(A^x&(R^A))+C[10]+38016083&4294967295,B=R+(D<<9&4294967295|D>>>23),D=x+(R^A&(B^R))+C[15]+3634488961&4294967295,x=B+(D<<14&4294967295|D>>>18),D=A+(B^R&(x^B))+C[4]+3889429448&4294967295,A=x+(D<<20&4294967295|D>>>12),D=R+(x^B&(A^x))+C[9]+568446438&4294967295,R=A+(D<<5&4294967295|D>>>27),D=B+(A^x&(R^A))+C[14]+3275163606&4294967295,B=R+(D<<9&4294967295|D>>>23),D=x+(R^A&(B^R))+C[3]+4107603335&4294967295,x=B+(D<<14&4294967295|D>>>18),D=A+(B^R&(x^B))+C[8]+1163531501&4294967295,A=x+(D<<20&4294967295|D>>>12),D=R+(x^B&(A^x))+C[13]+2850285829&4294967295,R=A+(D<<5&4294967295|D>>>27),D=B+(A^x&(R^A))+C[2]+4243563512&4294967295,B=R+(D<<9&4294967295|D>>>23),D=x+(R^A&(B^R))+C[7]+1735328473&4294967295,x=B+(D<<14&4294967295|D>>>18),D=A+(B^R&(x^B))+C[12]+2368359562&4294967295,A=x+(D<<20&4294967295|D>>>12),D=R+(A^x^B)+C[5]+4294588738&4294967295,R=A+(D<<4&4294967295|D>>>28),D=B+(R^A^x)+C[8]+2272392833&4294967295,B=R+(D<<11&4294967295|D>>>21),D=x+(B^R^A)+C[11]+1839030562&4294967295,x=B+(D<<16&4294967295|D>>>16),D=A+(x^B^R)+C[14]+4259657740&4294967295,A=x+(D<<23&4294967295|D>>>9),D=R+(A^x^B)+C[1]+2763975236&4294967295,R=A+(D<<4&4294967295|D>>>28),D=B+(R^A^x)+C[4]+1272893353&4294967295,B=R+(D<<11&4294967295|D>>>21),D=x+(B^R^A)+C[7]+4139469664&4294967295,x=B+(D<<16&4294967295|D>>>16),D=A+(x^B^R)+C[10]+3200236656&4294967295,A=x+(D<<23&4294967295|D>>>9),D=R+(A^x^B)+C[13]+681279174&4294967295,R=A+(D<<4&4294967295|D>>>28),D=B+(R^A^x)+C[0]+3936430074&4294967295,B=R+(D<<11&4294967295|D>>>21),D=x+(B^R^A)+C[3]+3572445317&4294967295,x=B+(D<<16&4294967295|D>>>16),D=A+(x^B^R)+C[6]+76029189&4294967295,A=x+(D<<23&4294967295|D>>>9),D=R+(A^x^B)+C[9]+3654602809&4294967295,R=A+(D<<4&4294967295|D>>>28),D=B+(R^A^x)+C[12]+3873151461&4294967295,B=R+(D<<11&4294967295|D>>>21),D=x+(B^R^A)+C[15]+530742520&4294967295,x=B+(D<<16&4294967295|D>>>16),D=A+(x^B^R)+C[2]+3299628645&4294967295,A=x+(D<<23&4294967295|D>>>9),D=R+(x^(A|~B))+C[0]+4096336452&4294967295,R=A+(D<<6&4294967295|D>>>26),D=B+(A^(R|~x))+C[7]+1126891415&4294967295,B=R+(D<<10&4294967295|D>>>22),D=x+(R^(B|~A))+C[14]+2878612391&4294967295,x=B+(D<<15&4294967295|D>>>17),D=A+(B^(x|~R))+C[5]+4237533241&4294967295,A=x+(D<<21&4294967295|D>>>11),D=R+(x^(A|~B))+C[12]+1700485571&4294967295,R=A+(D<<6&4294967295|D>>>26),D=B+(A^(R|~x))+C[3]+2399980690&4294967295,B=R+(D<<10&4294967295|D>>>22),D=x+(R^(B|~A))+C[10]+4293915773&4294967295,x=B+(D<<15&4294967295|D>>>17),D=A+(B^(x|~R))+C[1]+2240044497&4294967295,A=x+(D<<21&4294967295|D>>>11),D=R+(x^(A|~B))+C[8]+1873313359&4294967295,R=A+(D<<6&4294967295|D>>>26),D=B+(A^(R|~x))+C[15]+4264355552&4294967295,B=R+(D<<10&4294967295|D>>>22),D=x+(R^(B|~A))+C[6]+2734768916&4294967295,x=B+(D<<15&4294967295|D>>>17),D=A+(B^(x|~R))+C[13]+1309151649&4294967295,A=x+(D<<21&4294967295|D>>>11),D=R+(x^(A|~B))+C[4]+4149444226&4294967295,R=A+(D<<6&4294967295|D>>>26),D=B+(A^(R|~x))+C[11]+3174756917&4294967295,B=R+(D<<10&4294967295|D>>>22),D=x+(R^(B|~A))+C[2]+718787259&4294967295,x=B+(D<<15&4294967295|D>>>17),D=A+(B^(x|~R))+C[9]+3951481745&4294967295,k.g[0]=k.g[0]+R&4294967295,k.g[1]=k.g[1]+(x+(D<<21&4294967295|D>>>11))&4294967295,k.g[2]=k.g[2]+x&4294967295,k.g[3]=k.g[3]+B&4294967295}s.prototype.u=function(k,R){R===void 0&&(R=k.length);for(var A=R-this.blockSize,C=this.B,x=this.h,B=0;B<R;){if(x==0)for(;B<=A;)o(this,k,B),B+=this.blockSize;if(typeof k=="string"){for(;B<R;)if(C[x++]=k.charCodeAt(B++),x==this.blockSize){o(this,C),x=0;break}}else for(;B<R;)if(C[x++]=k[B++],x==this.blockSize){o(this,C),x=0;break}}this.h=x,this.o+=R},s.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var R=1;R<k.length-8;++R)k[R]=0;var A=8*this.o;for(R=k.length-8;R<k.length;++R)k[R]=A&255,A/=256;for(this.u(k),k=Array(16),R=A=0;4>R;++R)for(var C=0;32>C;C+=8)k[A++]=this.g[R]>>>C&255;return k};function u(k,R){var A=d;return Object.prototype.hasOwnProperty.call(A,k)?A[k]:A[k]=R(k)}function h(k,R){this.h=R;for(var A=[],C=!0,x=k.length-1;0<=x;x--){var B=k[x]|0;C&&B==R||(A[x]=B,C=!1)}this.g=A}var d={};function p(k){return-128<=k&&128>k?u(k,function(R){return new h([R|0],0>R?-1:0)}):new h([k|0],0>k?-1:0)}function g(k){if(isNaN(k)||!isFinite(k))return w;if(0>k)return U(g(-k));for(var R=[],A=1,C=0;k>=A;C++)R[C]=k/A|0,A*=4294967296;return new h(R,0)}function E(k,R){if(k.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(k.charAt(0)=="-")return U(E(k.substring(1),R));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=g(Math.pow(R,8)),C=w,x=0;x<k.length;x+=8){var B=Math.min(8,k.length-x),D=parseInt(k.substring(x,x+B),R);8>B?(B=g(Math.pow(R,B)),C=C.j(B).add(g(D))):(C=C.j(A),C=C.add(g(D)))}return C}var w=p(0),S=p(1),O=p(16777216);i=h.prototype,i.m=function(){if(K(this))return-U(this).m();for(var k=0,R=1,A=0;A<this.g.length;A++){var C=this.i(A);k+=(0<=C?C:4294967296+C)*R,R*=4294967296}return k},i.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(P(this))return"0";if(K(this))return"-"+U(this).toString(k);for(var R=g(Math.pow(k,6)),A=this,C="";;){var x=se(A,R).g;A=G(A,x.j(R));var B=((0<A.g.length?A.g[0]:A.h)>>>0).toString(k);if(A=x,P(A))return B+C;for(;6>B.length;)B="0"+B;C=B+C}},i.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function P(k){if(k.h!=0)return!1;for(var R=0;R<k.g.length;R++)if(k.g[R]!=0)return!1;return!0}function K(k){return k.h==-1}i.l=function(k){return k=G(this,k),K(k)?-1:P(k)?0:1};function U(k){for(var R=k.g.length,A=[],C=0;C<R;C++)A[C]=~k.g[C];return new h(A,~k.h).add(S)}i.abs=function(){return K(this)?U(this):this},i.add=function(k){for(var R=Math.max(this.g.length,k.g.length),A=[],C=0,x=0;x<=R;x++){var B=C+(this.i(x)&65535)+(k.i(x)&65535),D=(B>>>16)+(this.i(x)>>>16)+(k.i(x)>>>16);C=D>>>16,B&=65535,D&=65535,A[x]=D<<16|B}return new h(A,A[A.length-1]&-2147483648?-1:0)};function G(k,R){return k.add(U(R))}i.j=function(k){if(P(this)||P(k))return w;if(K(this))return K(k)?U(this).j(U(k)):U(U(this).j(k));if(K(k))return U(this.j(U(k)));if(0>this.l(O)&&0>k.l(O))return g(this.m()*k.m());for(var R=this.g.length+k.g.length,A=[],C=0;C<2*R;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var x=0;x<k.g.length;x++){var B=this.i(C)>>>16,D=this.i(C)&65535,wt=k.i(x)>>>16,pt=k.i(x)&65535;A[2*C+2*x]+=D*pt,te(A,2*C+2*x),A[2*C+2*x+1]+=B*pt,te(A,2*C+2*x+1),A[2*C+2*x+1]+=D*wt,te(A,2*C+2*x+1),A[2*C+2*x+2]+=B*wt,te(A,2*C+2*x+2)}for(C=0;C<R;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=R;C<2*R;C++)A[C]=0;return new h(A,0)};function te(k,R){for(;(k[R]&65535)!=k[R];)k[R+1]+=k[R]>>>16,k[R]&=65535,R++}function Y(k,R){this.g=k,this.h=R}function se(k,R){if(P(R))throw Error("division by zero");if(P(k))return new Y(w,w);if(K(k))return R=se(U(k),R),new Y(U(R.g),U(R.h));if(K(R))return R=se(k,U(R)),new Y(U(R.g),R.h);if(30<k.g.length){if(K(k)||K(R))throw Error("slowDivide_ only works with positive integers.");for(var A=S,C=R;0>=C.l(k);)A=ae(A),C=ae(C);var x=_e(A,1),B=_e(C,1);for(C=_e(C,2),A=_e(A,2);!P(C);){var D=B.add(C);0>=D.l(k)&&(x=x.add(A),B=D),C=_e(C,1),A=_e(A,1)}return R=G(k,x.j(R)),new Y(x,R)}for(x=w;0<=k.l(R);){for(A=Math.max(1,Math.floor(k.m()/R.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),B=g(A),D=B.j(R);K(D)||0<D.l(k);)A-=C,B=g(A),D=B.j(R);P(B)&&(B=S),x=x.add(B),k=G(k,D)}return new Y(x,k)}i.A=function(k){return se(this,k).h},i.and=function(k){for(var R=Math.max(this.g.length,k.g.length),A=[],C=0;C<R;C++)A[C]=this.i(C)&k.i(C);return new h(A,this.h&k.h)},i.or=function(k){for(var R=Math.max(this.g.length,k.g.length),A=[],C=0;C<R;C++)A[C]=this.i(C)|k.i(C);return new h(A,this.h|k.h)},i.xor=function(k){for(var R=Math.max(this.g.length,k.g.length),A=[],C=0;C<R;C++)A[C]=this.i(C)^k.i(C);return new h(A,this.h^k.h)};function ae(k){for(var R=k.g.length+1,A=[],C=0;C<R;C++)A[C]=k.i(C)<<1|k.i(C-1)>>>31;return new h(A,k.h)}function _e(k,R){var A=R>>5;R%=32;for(var C=k.g.length-A,x=[],B=0;B<C;B++)x[B]=0<R?k.i(B+A)>>>R|k.i(B+A+1)<<32-R:k.i(B+A);return new h(x,k.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,ow=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=E,ss=h}).apply(typeof C0<"u"?C0:typeof self<"u"?self:typeof window<"u"?window:{});var ih=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lw,Jl,uw,ph,Zm,cw,hw,fw;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,_,y){return c==Array.prototype||c==Object.prototype||(c[_]=y.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof ih=="object"&&ih];for(var _=0;_<c.length;++_){var y=c[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(c,_){if(_)e:{var y=s;c=c.split(".");for(var b=0;b<c.length-1;b++){var z=c[b];if(!(z in y))break e;y=y[z]}c=c[c.length-1],b=y[c],_=_(b),_!=b&&_!=null&&e(y,c,{configurable:!0,writable:!0,value:_})}}function u(c,_){c instanceof String&&(c+="");var y=0,b=!1,z={next:function(){if(!b&&y<c.length){var F=y++;return{value:_(F,c[F]),done:!1}}return b=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}o("Array.prototype.values",function(c){return c||function(){return u(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function p(c){var _=typeof c;return _=_!="object"?_:c?Array.isArray(c)?"array":_:"null",_=="array"||_=="object"&&typeof c.length=="number"}function g(c){var _=typeof c;return _=="object"&&c!=null||_=="function"}function E(c,_,y){return c.call.apply(c.bind,arguments)}function w(c,_,y){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,b),c.apply(_,z)}}return function(){return c.apply(_,arguments)}}function S(c,_,y){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:w,S.apply(null,arguments)}function O(c,_){var y=Array.prototype.slice.call(arguments,1);return function(){var b=y.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function P(c,_){function y(){}y.prototype=_.prototype,c.aa=_.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(b,z,F){for(var ie=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)ie[Ve-2]=arguments[Ve];return _.prototype[z].apply(b,ie)}}function K(c){const _=c.length;if(0<_){const y=Array(_);for(let b=0;b<_;b++)y[b]=c[b];return y}return[]}function U(c,_){for(let y=1;y<arguments.length;y++){const b=arguments[y];if(p(b)){const z=c.length||0,F=b.length||0;c.length=z+F;for(let ie=0;ie<F;ie++)c[z+ie]=b[ie]}else c.push(b)}}class G{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function te(c){return/^[\s\xa0]*$/.test(c)}function Y(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function se(c){return se[" "](c),c}se[" "]=function(){};var ae=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function _e(c,_,y){for(const b in c)_.call(y,c[b],b,c)}function k(c,_){for(const y in c)_.call(void 0,c[y],y,c)}function R(c){const _={};for(const y in c)_[y]=c[y];return _}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(c,_){let y,b;for(let z=1;z<arguments.length;z++){b=arguments[z];for(y in b)c[y]=b[y];for(let F=0;F<A.length;F++)y=A[F],Object.prototype.hasOwnProperty.call(b,y)&&(c[y]=b[y])}}function x(c){var _=1;c=c.split(":");const y=[];for(;0<_&&c.length;)y.push(c.shift()),_--;return c.length&&y.push(c.join(":")),y}function B(c){d.setTimeout(()=>{throw c},0)}function D(){var c=He;let _=null;return c.g&&(_=c.g,c.g=c.g.next,c.g||(c.h=null),_.next=null),_}class wt{constructor(){this.h=this.g=null}add(_,y){const b=pt.get();b.set(_,y),this.h?this.h.next=b:this.g=b,this.h=b}}var pt=new G(()=>new re,c=>c.reset());class re{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,pe=!1,He=new wt,N=()=>{const c=d.Promise.resolve(void 0);Ee=()=>{c.then(ne)}};var ne=()=>{for(var c;c=D();){try{c.h.call(c.g)}catch(y){B(y)}var _=pt;_.j(c),100>_.h&&(_.h++,c.next=_.g,_.g=c)}pe=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(c,_){this.type=c,this.g=this.target=_,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var le=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,_=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};d.addEventListener("test",y,_),d.removeEventListener("test",y,_)}catch{}return c}();function Ie(c,_){if(oe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=_,_=c.relatedTarget){if(ae){e:{try{se(_.nodeName);var z=!0;break e}catch{}z=!1}z||(_=null)}}else y=="mouseover"?_=c.fromElement:y=="mouseout"&&(_=c.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Se[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ie.aa.h.call(this)}}P(Ie,oe);var Se={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var gt="closure_listenable_"+(1e6*Math.random()|0),ze=0;function at(c,_,y,b,z){this.listener=c,this.proxy=null,this.src=_,this.type=y,this.capture=!!b,this.ha=z,this.key=++ze,this.da=this.fa=!1}function Ke(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Jt(c){this.src=c,this.g={},this.h=0}Jt.prototype.add=function(c,_,y,b,z){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var ie=Sn(c,_,b,z);return-1<ie?(_=c[ie],y||(_.fa=!1)):(_=new at(_,this.src,F,!!b,z),_.fa=y,c.push(_)),_};function Oi(c,_){var y=_.type;if(y in c.g){var b=c.g[y],z=Array.prototype.indexOf.call(b,_,void 0),F;(F=0<=z)&&Array.prototype.splice.call(b,z,1),F&&(Ke(_),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Sn(c,_,y,b){for(var z=0;z<c.length;++z){var F=c[z];if(!F.da&&F.listener==_&&F.capture==!!y&&F.ha==b)return z}return-1}var dr="closure_lm_"+(1e6*Math.random()|0),mr={};function Ni(c,_,y,b,z){if(Array.isArray(_)){for(var F=0;F<_.length;F++)Ni(c,_[F],y,b,z);return null}return y=Vu(y),c&&c[gt]?c.K(_,y,g(b)?!!b.capture:!1,z):jo(c,_,y,!1,b,z)}function jo(c,_,y,b,z,F){if(!_)throw Error("Invalid event type");var ie=g(z)?!!z.capture:!!z,Ve=qo(c);if(Ve||(c[dr]=Ve=new Jt(c)),y=Ve.add(_,y,b,ie,F),y.proxy)return y;if(b=ya(),y.proxy=b,b.src=c,b.listener=y,c.addEventListener)le||(z=ie),z===void 0&&(z=!1),c.addEventListener(_.toString(),b,z);else if(c.attachEvent)c.attachEvent(Ea(_.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ya(){function c(y){return _.call(c.src,c.listener,y)}const _=yf;return c}function va(c,_,y,b,z){if(Array.isArray(_))for(var F=0;F<_.length;F++)va(c,_[F],y,b,z);else b=g(b)?!!b.capture:!!b,y=Vu(y),c&&c[gt]?(c=c.i,_=String(_).toString(),_ in c.g&&(F=c.g[_],y=Sn(F,y,b,z),-1<y&&(Ke(F[y]),Array.prototype.splice.call(F,y,1),F.length==0&&(delete c.g[_],c.h--)))):c&&(c=qo(c))&&(_=c.g[_.toString()],c=-1,_&&(c=Sn(_,y,b,z)),(y=-1<c?_[c]:null)&&Es(y))}function Es(c){if(typeof c!="number"&&c&&!c.da){var _=c.src;if(_&&_[gt])Oi(_.i,c);else{var y=c.type,b=c.proxy;_.removeEventListener?_.removeEventListener(y,b,c.capture):_.detachEvent?_.detachEvent(Ea(y),b):_.addListener&&_.removeListener&&_.removeListener(b),(y=qo(_))?(Oi(y,c),y.h==0&&(y.src=null,_[dr]=null)):Ke(c)}}}function Ea(c){return c in mr?mr[c]:mr[c]="on"+c}function yf(c,_){if(c.da)c=!0;else{_=new Ie(_,this);var y=c.listener,b=c.ha||c.src;c.fa&&Es(c),c=y.call(b,_)}return c}function qo(c){return c=c[dr],c instanceof Jt?c:null}var ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vu(c){return typeof c=="function"?c:(c[ln]||(c[ln]=function(_){return c.handleEvent(_)}),c[ln])}function bt(){de.call(this),this.i=new Jt(this),this.M=this,this.F=null}P(bt,de),bt.prototype[gt]=!0,bt.prototype.removeEventListener=function(c,_,y,b){va(this,c,_,y,b)};function Nt(c,_){var y,b=c.F;if(b)for(y=[];b;b=b.F)y.push(b);if(c=c.M,b=_.type||_,typeof _=="string")_=new oe(_,c);else if(_ instanceof oe)_.target=_.target||c;else{var z=_;_=new oe(b,c),C(_,z)}if(z=!0,y)for(var F=y.length-1;0<=F;F--){var ie=_.g=y[F];z=ki(ie,b,!0,_)&&z}if(ie=_.g=c,z=ki(ie,b,!0,_)&&z,z=ki(ie,b,!1,_)&&z,y)for(F=0;F<y.length;F++)ie=_.g=y[F],z=ki(ie,b,!1,_)&&z}bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var c=this.i,_;for(_ in c.g){for(var y=c.g[_],b=0;b<y.length;b++)Ke(y[b]);delete c.g[_],c.h--}}this.F=null},bt.prototype.K=function(c,_,y,b){return this.i.add(String(c),_,!1,y,b)},bt.prototype.L=function(c,_,y,b){return this.i.add(String(c),_,!0,y,b)};function ki(c,_,y,b){if(_=c.i.g[String(_)],!_)return!0;_=_.concat();for(var z=!0,F=0;F<_.length;++F){var ie=_[F];if(ie&&!ie.da&&ie.capture==y){var Ve=ie.listener,St=ie.ha||ie.src;ie.fa&&Oi(c.i,ie),z=Ve.call(St,b)!==!1&&z}}return z&&!b.defaultPrevented}function Pu(c,_,y){if(typeof c=="function")y&&(c=S(c,y));else if(c&&typeof c.handleEvent=="function")c=S(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(c,_||0)}function Ho(c){c.g=Pu(()=>{c.g=null,c.i&&(c.i=!1,Ho(c))},c.l);const _=c.h;c.h=null,c.m.apply(null,_)}class vf extends de{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Ho(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ts(c){de.call(this),this.h=c,this.g={}}P(Ts,de);var pr=[];function Kt(c){_e(c.g,function(_,y){this.g.hasOwnProperty(y)&&Es(_)},c),c.g={}}Ts.prototype.N=function(){Ts.aa.N.call(this),Kt(this)},Ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fo=d.JSON.stringify,si=d.JSON.parse,en=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Go(){}Go.prototype.h=null;function Uu(c){return c.h||(c.h=c.i())}function Lu(){}var ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gr(){oe.call(this,"d")}P(gr,oe);function Gn(){oe.call(this,"c")}P(Gn,oe);var Rn={},_r=null;function Ta(){return _r=_r||new bt}Rn.La="serverreachability";function Ko(c){oe.call(this,Rn.La,c)}P(Ko,oe);function yr(c){const _=Ta();Nt(_,new Ko(_))}Rn.STAT_EVENT="statevent";function wa(c,_){oe.call(this,Rn.STAT_EVENT,c),this.stat=_}P(wa,oe);function ht(c){const _=Ta();Nt(_,new wa(_,c))}Rn.Ma="timingevent";function zu(c,_){oe.call(this,Rn.Ma,c),this.size=_}P(zu,oe);function vr(c,_){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},_)}function Er(){this.g=!0}Er.prototype.xa=function(){this.g=!1};function Bu(c,_,y,b,z,F){c.info(function(){if(c.g)if(F)for(var ie="",Ve=F.split("&"),St=0;St<Ve.length;St++){var Pe=Ve[St].split("=");if(1<Pe.length){var xt=Pe[0];Pe=Pe[1];var Rt=xt.split("_");ie=2<=Rt.length&&Rt[1]=="type"?ie+(xt+"="+Pe+"&"):ie+(xt+"=redacted&")}}else ie=null;else ie=F;return"XMLHTTP REQ ("+b+") [attempt "+z+"]: "+_+`
`+y+`
`+ie})}function ju(c,_,y,b,z,F,ie){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+z+"]: "+_+`
`+y+`
`+F+" "+ie})}function Tr(c,_,y,b){c.info(function(){return"XMLHTTP TEXT ("+_+"): "+kt(c,y)+(b?" "+b:"")})}function oi(c,_){c.info(function(){return"TIMEOUT: "+_})}Er.prototype.info=function(){};function kt(c,_){if(!c.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var b=y[c];if(!(2>b.length)){var z=b[1];if(Array.isArray(z)&&!(1>z.length)){var F=z[0];if(F!="noop"&&F!="stop"&&F!="close")for(var ie=1;ie<z.length;ie++)z[ie]=""}}}}return Fo(y)}catch{return _}}var At={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ws;function ba(){}P(ba,Go),ba.prototype.g=function(){return new XMLHttpRequest},ba.prototype.i=function(){return{}},ws=new ba;function li(c,_,y,b){this.j=c,this.i=_,this.l=y,this.R=b||1,this.U=new Ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $o}function $o(){this.i=null,this.g="",this.h=!1}var wr={},bs={};function Kn(c,_,y){c.L=1,c.v=Rs(ot(_)),c.m=y,c.P=!0,xi(c,null)}function xi(c,_){c.F=Date.now(),tt(c),c.A=ot(c.v);var y=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),Ui(y.i,"t",b),c.C=0,y=c.j.J,c.h=new $o,c.g=tc(c.j,y?_:null,!c.m),0<c.O&&(c.M=new vf(S(c.Y,c,c.g),c.O)),_=c.U,y=c.g,b=c.ca;var z="readystatechange";Array.isArray(z)||(z&&(pr[0]=z.toString()),z=pr);for(var F=0;F<z.length;F++){var ie=Ni(y,z[F],b||_.handleEvent,!1,_.h||_);if(!ie)break;_.g[ie.key]=ie}_=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,_)):(c.u="GET",c.g.ea(c.A,c.u,null,_)),yr(),Bu(c.i,c.u,c.A,c.l,c.R,c.m)}li.prototype.ca=function(c){c=c.target;const _=this.M;_&&Nn(c)==3?_.j():this.Y(c)},li.prototype.Y=function(c){try{if(c==this.g)e:{const Rt=Nn(this.g);var _=this.g.Ba();const ji=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||$u(this.g)))){this.J||Rt!=4||_==7||(_==8||0>=ji?yr(3):yr(2)),Aa(this);var y=this.g.Z();this.X=y;t:if(br(this)){var b=$u(this.g);c="";var z=b.length,F=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),pn(this);var ie="";break t}this.h.i=new d.TextDecoder}for(_=0;_<z;_++)this.h.h=!0,c+=this.h.i.decode(b[_],{stream:!(F&&_==z-1)});b.length=0,this.h.g+=c,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=y==200,ju(this.i,this.u,this.A,this.l,this.R,Rt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,St=this.g;if((Ve=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(Ve)){var Pe=Ve;break t}}Pe=null}if(y=Pe)Tr(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gn(this,y);else{this.o=!1,this.s=3,ht(12),un(this),pn(this);break e}}if(this.P){y=!0;let zt;for(;!this.J&&this.C<ie.length;)if(zt=Ar(this,ie),zt==bs){Rt==4&&(this.s=4,ht(14),y=!1),Tr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==wr){this.s=4,ht(15),Tr(this.i,this.l,ie,"[Invalid Chunk]"),y=!1;break}else Tr(this.i,this.l,zt,null),gn(this,zt);if(br(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||ie.length!=0||this.h.h||(this.s=1,ht(16),y=!1),this.o=this.o&&y,!y)Tr(this.i,this.l,ie,"[Invalid Chunked Response]"),un(this),pn(this);else if(0<ie.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Ms(xt),xt.M=!0,ht(11))}}else Tr(this.i,this.l,ie,null),gn(this,ie);Rt==4&&un(this),this.o&&!this.J&&(Rt==4?Zu(this.j,this):(this.o=!1,tt(this)))}else Sf(this.g),y==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),un(this),pn(this)}}}catch{}finally{}};function br(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ar(c,_){var y=c.C,b=_.indexOf(`
`,y);return b==-1?bs:(y=Number(_.substring(y,b)),isNaN(y)?wr:(b+=1,b+y>_.length?bs:(_=_.slice(b,b+y),c.C=b+y,_)))}li.prototype.cancel=function(){this.J=!0,un(this)};function tt(c){c.S=Date.now()+c.I,Qo(c,c.I)}function Qo(c,_){if(c.B!=null)throw Error("WatchDog timer not null");c.B=vr(S(c.ba,c),_)}function Aa(c){c.B&&(d.clearTimeout(c.B),c.B=null)}li.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(oi(this.i,this.A),this.L!=2&&(yr(),ht(17)),un(this),this.s=2,pn(this)):Qo(this,this.S-c)};function pn(c){c.j.G==0||c.J||Zu(c.j,c)}function un(c){Aa(c);var _=c.M;_&&typeof _.ma=="function"&&_.ma(),c.M=null,Kt(c.U),c.g&&(_=c.g,c.g=null,_.abort(),_.ma())}function gn(c,_){try{var y=c.j;if(y.G!=0&&(y.g==c||Sr(y.h,c))){if(!c.K&&Sr(y.h,c)&&y.G==3){try{var b=y.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var z=b;if(z[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)xa(y),ka(y);else break e;sl(y),ht(18)}}else y.za=z[1],0<y.za-y.T&&37500>z[2]&&y.F&&y.v==0&&!y.C&&(y.C=vr(S(y.Za,y),6e3));if(1>=qu(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Bi(y,11)}else if((c.K||y.g==c)&&xa(y),!te(_))for(z=y.Da.g.parse(_),_=0;_<z.length;_++){let Pe=z[_];if(y.T=Pe[0],Pe=Pe[1],y.G==2)if(Pe[0]=="c"){y.K=Pe[1],y.ia=Pe[2];const xt=Pe[3];xt!=null&&(y.la=xt,y.j.info("VER="+y.la));const Rt=Pe[4];Rt!=null&&(y.Aa=Rt,y.j.info("SVER="+y.Aa));const ji=Pe[5];ji!=null&&typeof ji=="number"&&0<ji&&(b=1.5*ji,y.L=b,y.j.info("backChannelRequestTimeoutMs_="+b)),b=y;const zt=c.g;if(zt){const pi=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pi){var F=b.h;F.g||pi.indexOf("spdy")==-1&&pi.indexOf("quic")==-1&&pi.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Rr(F,F.h),F.h=null))}if(b.D){const ol=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;ol&&(b.ya=ol,Be(b.I,b.D,ol))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),b=y;var ie=c;if(b.qa=ec(b,b.J?b.ia:null,b.W),ie.K){In(b.h,ie);var Ve=ie,St=b.L;St&&(Ve.I=St),Ve.B&&(Aa(Ve),tt(Ve)),b.g=ie}else Xu(b);0<y.i.length&&Ma(y)}else Pe[0]!="stop"&&Pe[0]!="close"||Bi(y,7);else y.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Bi(y,7):il(y):Pe[0]!="noop"&&y.l&&y.l.ta(Pe),y.v=0)}}yr(4)}catch{}}var Ef=class{constructor(c,_){this.g=c,this.map=_}};function Yo(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function qu(c){return c.h?1:c.g?c.g.size:0}function Sr(c,_){return c.h?c.h==_:c.g?c.g.has(_):!1}function Rr(c,_){c.g?c.g.add(_):c.h=_}function In(c,_){c.h&&c.h==_?c.h=null:c.g&&c.g.has(_)&&c.g.delete(_)}Yo.prototype.cancel=function(){if(this.i=tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function tn(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let _=c.i;for(const y of c.g.values())_=_.concat(y.D);return _}return K(c.i)}function Hu(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var _=[],y=c.length,b=0;b<y;b++)_.push(c[b]);return _}_=[],y=0;for(b in c)_[y++]=c[b];return _}function Tf(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var _=[];c=c.length;for(var y=0;y<c;y++)_.push(y);return _}_=[],y=0;for(const b in c)_[y++]=b;return _}}}function As(c,_){if(c.forEach&&typeof c.forEach=="function")c.forEach(_,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,_,void 0);else for(var y=Tf(c),b=Hu(c),z=b.length,F=0;F<z;F++)_.call(void 0,b[F],y&&y[F],c)}var Wo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sa(c,_){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var b=c[y].indexOf("="),z=null;if(0<=b){var F=c[y].substring(0,b);z=c[y].substring(b+1)}else F=c[y];_(F,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Vi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Vi){this.h=c.h,Ir(this,c.j),this.o=c.o,this.g=c.g,Ss(this,c.s),this.l=c.l;var _=c.i,y=new ui;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),Ra(this,y),this.m=c.m}else c&&(_=String(c).match(Wo))?(this.h=!1,Ir(this,_[1]||"",!0),this.o=Cr(_[2]||""),this.g=Cr(_[3]||"",!0),Ss(this,_[4]),this.l=Cr(_[5]||"",!0),Ra(this,_[6]||"",!0),this.m=Cr(_[7]||"")):(this.h=!1,this.i=new ui(null,this.h))}Vi.prototype.toString=function(){var c=[],_=this.j;_&&c.push(Cn(_,Zo,!0),":");var y=this.g;return(y||_=="file")&&(c.push("//"),(_=this.o)&&c.push(Cn(_,Zo,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Cn(y,y.charAt(0)=="/"?Jo:Fu,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Cn(y,Af)),c.join("")};function ot(c){return new Vi(c)}function Ir(c,_,y){c.j=y?Cr(_,!0):_,c.j&&(c.j=c.j.replace(/:$/,""))}function Ss(c,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);c.s=_}else c.s=null}function Ra(c,_,y){_ instanceof ui?(c.i=_,el(c.i,c.h)):(y||(_=Cn(_,bf)),c.i=new ui(_,c.h))}function Be(c,_,y){c.i.set(_,y)}function Rs(c){return Be(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Cr(c,_){return c?_?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Cn(c,_,y){return typeof c=="string"?(c=encodeURI(c).replace(_,wf),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function wf(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Zo=/[#\/\?@]/g,Fu=/[#\?:]/g,Jo=/[#\?]/g,bf=/[#\?@]/g,Af=/#/g;function ui(c,_){this.h=this.g=null,this.i=c||null,this.j=!!_}function Dn(c){c.g||(c.g=new Map,c.h=0,c.i&&Sa(c.i,function(_,y){c.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}i=ui.prototype,i.add=function(c,_){Dn(this),this.i=null,c=Li(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(_),this.h+=1,this};function Ia(c,_){Dn(c),_=Li(c,_),c.g.has(_)&&(c.i=null,c.h-=c.g.get(_).length,c.g.delete(_))}function Pi(c,_){return Dn(c),_=Li(c,_),c.g.has(_)}i.forEach=function(c,_){Dn(this),this.g.forEach(function(y,b){y.forEach(function(z){c.call(_,z,b,this)},this)},this)},i.na=function(){Dn(this);const c=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let b=0;b<_.length;b++){const z=c[b];for(let F=0;F<z.length;F++)y.push(_[b])}return y},i.V=function(c){Dn(this);let _=[];if(typeof c=="string")Pi(this,c)&&(_=_.concat(this.g.get(Li(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)_=_.concat(c[y])}return _},i.set=function(c,_){return Dn(this),this.i=null,c=Li(this,c),Pi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[_]),this.h+=1,this},i.get=function(c,_){return c?(c=this.V(c),0<c.length?String(c[0]):_):_};function Ui(c,_,y){Ia(c,_),0<y.length&&(c.i=null,c.g.set(Li(c,_),K(y)),c.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var b=_[y];const F=encodeURIComponent(String(b)),ie=this.V(b);for(b=0;b<ie.length;b++){var z=F;ie[b]!==""&&(z+="="+encodeURIComponent(String(ie[b]))),c.push(z)}}return this.i=c.join("&")};function Li(c,_){return _=String(_),c.j&&(_=_.toLowerCase()),_}function el(c,_){_&&!c.j&&(Dn(c),c.i=null,c.g.forEach(function(y,b){var z=b.toLowerCase();b!=z&&(Ia(this,b),Ui(this,z,y))},c)),c.j=_}function Gu(c,_){const y=new Er;if(d.Image){const b=new Image;b.onload=O(On,y,"TestLoadImage: loaded",!0,_,b),b.onerror=O(On,y,"TestLoadImage: error",!1,_,b),b.onabort=O(On,y,"TestLoadImage: abort",!1,_,b),b.ontimeout=O(On,y,"TestLoadImage: timeout",!1,_,b),d.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else _(!1)}function Is(c,_){const y=new Er,b=new AbortController,z=setTimeout(()=>{b.abort(),On(y,"TestPingServer: timeout",!1,_)},1e4);fetch(c,{signal:b.signal}).then(F=>{clearTimeout(z),F.ok?On(y,"TestPingServer: ok",!0,_):On(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(z),On(y,"TestPingServer: error",!1,_)})}function On(c,_,y,b,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),b(y)}catch{}}function Cs(){this.g=new en}function ci(c,_,y){const b=y||"";try{As(c,function(z,F){let ie=z;g(z)&&(ie=Fo(z)),_.push(b+F+"="+encodeURIComponent(ie))})}catch(z){throw _.push(b+"type="+encodeURIComponent("_badmap")),z}}function Dr(c){this.l=c.Ub||null,this.j=c.eb||!1}P(Dr,Go),Dr.prototype.g=function(){return new zi(this.l,this.j)},Dr.prototype.i=function(c){return function(){return c}}({});function zi(c,_){bt.call(this),this.D=c,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(zi,bt),i=zi.prototype,i.open=function(c,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=_,this.readyState=1,fi(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(_.body=c),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function tl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var _=c.value?c.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!c.done}))&&(this.response=this.responseText+=_)}c.done?hi(this):fi(this),this.readyState==3&&tl(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,hi(this))},i.Qa=function(c){this.g&&(this.response=c,hi(this))},i.ga=function(){this.g&&hi(this)};function hi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,fi(c)}i.setRequestHeader=function(c,_){this.u.append(c,_)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=_.next();return c.join(`\r
`)};function fi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function nl(c){let _="";return _e(c,function(y,b){_+=b,_+=":",_+=y,_+=`\r
`}),_}function Mt(c,_,y){e:{for(b in y){var b=!1;break e}b=!0}b||(y=nl(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):Be(c,_,y))}function Fe(c){bt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Fe,bt);var Ca=/^https?$/i,Ds=["POST","PUT"];i=Fe.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,_,y,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);_=_?_.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ws.g(),this.v=this.o?Uu(this.o):Uu(ws),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(c),!0),this.B=!1}catch(F){Ku(this,F);return}if(c=y||"",y=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var z in b)y.set(z,b[z]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const F of b.keys())y.set(F,b.get(F));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(y.keys()).find(F=>F.toLowerCase()=="content-type"),z=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ds,_,void 0))||b||z||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,ie]of y)this.g.setRequestHeader(F,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Os(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Ku(this,F)}};function Ku(c,_){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=_,c.m=5,Da(c),di(c)}function Da(c){c.A||(c.A=!0,Nt(c,"complete"),Nt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Nt(this,"complete"),Nt(this,"abort"),di(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),di(this,!0)),Fe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Oa(this):this.bb())},i.bb=function(){Oa(this)};function Oa(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Nn(c)!=4||c.Z()!=2)){if(c.u&&Nn(c)==4)Pu(c.Ea,0,c);else if(Nt(c,"readystatechange"),Nn(c)==4){c.h=!1;try{const ie=c.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var b;if(b=ie===0){var z=String(c.D).match(Wo)[1]||null;!z&&d.self&&d.self.location&&(z=d.self.location.protocol.slice(0,-1)),b=!Ca.test(z?z.toLowerCase():"")}y=b}if(y)Nt(c,"complete"),Nt(c,"success");else{c.m=6;try{var F=2<Nn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Da(c)}}finally{di(c)}}}}function di(c,_){if(c.g){Os(c);const y=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,_||Nt(c,"ready");try{y.onreadystatechange=b}catch{}}}function Os(c){c.I&&(d.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function Nn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var _=this.g.responseText;return c&&_.indexOf(c)==0&&(_=_.substring(c.length)),si(_)}};function $u(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Sf(c){const _={};c=(c.g&&2<=Nn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(te(c[b]))continue;var y=x(c[b]);const z=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const F=_[z]||[];_[z]=F,F.push(y)}k(_,function(b){return b.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(c,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||_}function Na(c){this.Aa=0,this.i=[],this.j=new Er,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ns("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ns("baseRetryDelayMs",5e3,c),this.cb=Ns("retryDelaySeedMs",1e4,c),this.Wa=Ns("forwardChannelMaxRetries",2,c),this.wa=Ns("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Yo(c&&c.concurrentRequestLimit),this.Da=new Cs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Na.prototype,i.la=8,i.G=1,i.connect=function(c,_,y,b){ht(0),this.W=c,this.H=_||{},y&&b!==void 0&&(this.H.OSID=y,this.H.OAID=b),this.F=this.X,this.I=ec(this,null,this.W),Ma(this)};function il(c){if(Qu(c),c.G==3){var _=c.U++,y=ot(c.I);if(Be(y,"SID",c.K),Be(y,"RID",_),Be(y,"TYPE","terminate"),ks(c,y),_=new li(c,c.j,_),_.L=2,_.v=Rs(ot(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=_.v,y=!0),y||(_.g=tc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),tt(_)}Ju(c)}function ka(c){c.g&&(Ms(c),c.g.cancel(),c.g=null)}function Qu(c){ka(c),c.u&&(d.clearTimeout(c.u),c.u=null),xa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Ma(c){if(!Xo(c.h)&&!c.s){c.s=!0;var _=c.Ga;Ee||N(),pe||(Ee(),pe=!0),He.add(_,c),c.B=0}}function Rf(c,_){return qu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=_.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=vr(S(c.Ga,c,_),al(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const z=new li(this,this.j,c);let F=this.o;if(this.S&&(F?(F=R(F),C(F,this.S)):F=this.S),this.m!==null||this.O||(z.H=F,F=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var b=this.i[y];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=Yu(this,z,_),y=ot(this.I),Be(y,"RID",c),Be(y,"CVER",22),this.D&&Be(y,"X-HTTP-Session-Id",this.D),ks(this,y),F&&(this.O?_="headers="+encodeURIComponent(String(nl(F)))+"&"+_:this.m&&Mt(y,this.m,F)),Rr(this.h,z),this.Ua&&Be(y,"TYPE","init"),this.P?(Be(y,"$req",_),Be(y,"SID","null"),z.T=!0,Kn(z,y,null)):Kn(z,y,_),this.G=2}}else this.G==3&&(c?rl(this,c):this.i.length==0||Xo(this.h)||rl(this))};function rl(c,_){var y;_?y=_.l:y=c.U++;const b=ot(c.I);Be(b,"SID",c.K),Be(b,"RID",y),Be(b,"AID",c.T),ks(c,b),c.m&&c.o&&Mt(b,c.m,c.o),y=new li(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),_&&(c.i=_.D.concat(c.i)),_=Yu(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Rr(c.h,y),Kn(y,b,_)}function ks(c,_){c.H&&_e(c.H,function(y,b){Be(_,b,y)}),c.l&&As({},function(y,b){Be(_,b,y)})}function Yu(c,_,y){y=Math.min(c.i.length,y);var b=c.l?S(c.l.Na,c.l,c):null;e:{var z=c.i;let F=-1;for(;;){const ie=["count="+y];F==-1?0<y?(F=z[0].g,ie.push("ofs="+F)):F=0:ie.push("ofs="+F);let Ve=!0;for(let St=0;St<y;St++){let Pe=z[St].g;const xt=z[St].map;if(Pe-=F,0>Pe)F=Math.max(0,z[St].g-100),Ve=!1;else try{ci(xt,ie,"req"+Pe+"_")}catch{b&&b(xt)}}if(Ve){b=ie.join("&");break e}}}return c=c.i.splice(0,y),_.D=c,b}function Xu(c){if(!c.g&&!c.u){c.Y=1;var _=c.Fa;Ee||N(),pe||(Ee(),pe=!0),He.add(_,c),c.v=0}}function sl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=vr(S(c.Fa,c),al(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,Wu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=vr(S(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),ka(this),Wu(this))};function Ms(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Wu(c){c.g=new li(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var _=ot(c.qa);Be(_,"RID","rpc"),Be(_,"SID",c.K),Be(_,"AID",c.T),Be(_,"CI",c.F?"0":"1"),!c.F&&c.ja&&Be(_,"TO",c.ja),Be(_,"TYPE","xmlhttp"),ks(c,_),c.m&&c.o&&Mt(_,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=Rs(ot(_)),y.m=null,y.P=!0,xi(y,c)}i.Za=function(){this.C!=null&&(this.C=null,ka(this),sl(this),ht(19))};function xa(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Zu(c,_){var y=null;if(c.g==_){xa(c),Ms(c),c.g=null;var b=2}else if(Sr(c.h,_))y=_.D,In(c.h,_),b=1;else return;if(c.G!=0){if(_.o)if(b==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var z=c.B;b=Ta(),Nt(b,new zu(b,y)),Ma(c)}else Xu(c);else if(z=_.s,z==3||z==0&&0<_.X||!(b==1&&Rf(c,_)||b==2&&sl(c)))switch(y&&0<y.length&&(_=c.h,_.i=_.i.concat(y)),z){case 1:Bi(c,5);break;case 4:Bi(c,10);break;case 3:Bi(c,6);break;default:Bi(c,2)}}}function al(c,_){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*_}function Bi(c,_){if(c.j.info("Error code "+_),_==2){var y=S(c.fb,c),b=c.Xa;const z=!b;b=new Vi(b||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ir(b,"https"),Rs(b),z?Gu(b.toString(),y):Is(b.toString(),y)}else ht(2);c.G=0,c.l&&c.l.sa(_),Ju(c),Qu(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Ju(c){if(c.G=0,c.ka=[],c.l){const _=tn(c.h);(_.length!=0||c.i.length!=0)&&(U(c.ka,_),U(c.ka,c.i),c.h.i.length=0,K(c.i),c.i.length=0),c.l.ra()}}function ec(c,_,y){var b=y instanceof Vi?ot(y):new Vi(y);if(b.g!="")_&&(b.g=_+"."+b.g),Ss(b,b.s);else{var z=d.location;b=z.protocol,_=_?_+"."+z.hostname:z.hostname,z=+z.port;var F=new Vi(null);b&&Ir(F,b),_&&(F.g=_),z&&Ss(F,z),y&&(F.l=y),b=F}return y=c.D,_=c.ya,y&&_&&Be(b,y,_),Be(b,"VER",c.la),ks(c,b),b}function tc(c,_,y){if(_&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=c.Ca&&!c.pa?new Fe(new Dr({eb:y})):new Fe(c.pa),_.Ha(c.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function nc(){}i=nc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Va(){}Va.prototype.g=function(c,_){return new nn(c,_)};function nn(c,_){bt.call(this),this.g=new Na(_),this.l=c,this.h=_&&_.messageUrlParams||null,c=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(c?c["X-WebChannel-Content-Type"]=_.messageContentType:c={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(c?c["X-WebChannel-Client-Profile"]=_.va:c={"X-WebChannel-Client-Profile":_.va}),this.g.S=c,(c=_&&_.Sb)&&!te(c)&&(this.g.m=c),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!te(_)&&(this.g.D=_,c=this.h,c!==null&&_ in c&&(c=this.h,_ in c&&delete c[_])),this.j=new mi(this)}P(nn,bt),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){il(this.g)},nn.prototype.o=function(c){var _=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=Fo(c),c=y);_.i.push(new Ef(_.Ya++,c)),_.G==3&&Ma(_)},nn.prototype.N=function(){this.g.l=null,delete this.j,il(this.g),delete this.g,nn.aa.N.call(this)};function ic(c){gr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var _=c.__sm__;if(_){e:{for(const y in _){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,_=_!==null&&c in _?_[c]:void 0),this.data=_}else this.data=c}P(ic,gr);function rc(){Gn.call(this),this.status=1}P(rc,Gn);function mi(c){this.g=c}P(mi,nc),mi.prototype.ua=function(){Nt(this.g,"a")},mi.prototype.ta=function(c){Nt(this.g,new ic(c))},mi.prototype.sa=function(c){Nt(this.g,new rc)},mi.prototype.ra=function(){Nt(this.g,"b")},Va.prototype.createWebChannel=Va.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,fw=function(){return new Va},hw=function(){return Ta()},cw=Rn,Zm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},At.NO_ERROR=0,At.TIMEOUT=8,At.HTTP_ERROR=6,ph=At,Mi.COMPLETE="complete",uw=Mi,Lu.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",bt.prototype.listen=bt.prototype.K,Jl=Lu,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,lw=Fe}).apply(typeof ih<"u"?ih:typeof self<"u"?self:typeof window<"u"?window:{});const D0="@firebase/firestore",O0="4.7.9";/**
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
 */class Xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
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
 */let No="11.4.0";/**
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
 */const aa=new Kh("@firebase/firestore");function uo(){return aa.logLevel}function ue(i,...e){if(aa.logLevel<=Ne.DEBUG){const t=e.map(xp);aa.debug(`Firestore (${No}): ${i}`,...t)}}function hr(i,...e){if(aa.logLevel<=Ne.ERROR){const t=e.map(xp);aa.error(`Firestore (${No}): ${i}`,...t)}}function wo(i,...e){if(aa.logLevel<=Ne.WARN){const t=e.map(xp);aa.warn(`Firestore (${No}): ${i}`,...t)}}function xp(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
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
 */function Te(i="Unexpected state"){const e=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: `+i;throw hr(e),new Error(e)}function Ge(i,e){i||Te()}function Ae(i,e){return i}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Fn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class as{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class dw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Xt.UNAUTHENTICATED))}shutdown(){}}class wD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class bD{constructor(e){this.t=e,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ge(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let u=new as;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new as,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=u;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new as)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ge(typeof s.accessToken=="string"),new dw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string"),new Xt(e)}}class AD{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class SD{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new AD(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class N0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RD{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,wn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Ge(this.o===void 0);const s=u=>{u.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new N0(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ge(typeof t.token=="string"),this.R=t.token,new N0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ID(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class mw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=ID(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function xe(i,e){return i<e?-1:i>e?1:0}function bo(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
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
 */const k0=-62135596800,M0=1e6;class Dt{static now(){return Dt.fromMillis(Date.now())}static fromDate(e){return Dt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*M0);return new Dt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<k0)throw new ce(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/M0}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-k0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Dt(0,0))}static max(){return new we(new Dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const x0="__name__";class Ti{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(),s===void 0?s=e.length-t:s>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ti.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ti?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Ti.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Ti.isNumericId(e),o=Ti.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Ti.extractNumericId(e).compare(Ti.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ss.fromString(e.substring(4,e.length-2))}}class Ze extends Ti{construct(e,t,s){return new Ze(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ze(t)}static emptyPath(){return new Ze([])}}const CD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends Ti{construct(e,t,s){return new Ft(e,t,s)}static isValidIdentifier(e){return CD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===x0}static keyField(){return new Ft([x0])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ce(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ce(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ce(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(s+=d,o++):(u(),o++)}if(u(),h)throw new ce(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(t)}static emptyPath(){return new Ft([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(Ze.fromString(e))}static fromName(e){return new ge(Ze.fromString(e).popFirst(5))}static empty(){return new ge(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new Ze(e.slice()))}}/**
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
 */const mu=-1;function DD(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new Dt(t+1,0):new Dt(t,s));return new us(o,ge.empty(),e)}function OD(i){return new us(i.readTime,i.key,mu)}class us{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new us(we.min(),ge.empty(),mu)}static max(){return new us(we.max(),ge.empty(),mu)}}function ND(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(i.documentKey,e.documentKey),t!==0?t:xe(i.largestBatchId,e.largestBatchId))}/**
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
 */const kD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ko(i){if(i.code!==Z.FAILED_PRECONDITION||i.message!==kD)throw i;ue("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,s)=>{t(e)})}static reject(e){return new W((t,s)=>{s(e)})}static waitFor(e){return new W((t,s)=>{let o=0,u=0,h=!1;e.forEach(d=>{++o,d.next(()=>{++u,h&&u===o&&t()},p=>s(p))}),h=!0,u===o&&t()})}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next(o=>o?W.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new W((s,o)=>{const u=e.length,h=new Array(u);let d=0;for(let p=0;p<u;p++){const g=p;t(e[g]).next(E=>{h[g]=E,++d,d===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new W((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function xD(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Mo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Jh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Jh.ae=-1;/**
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
 */const Vp=-1;function ef(i){return i==null}function kh(i){return i===0&&1/i==-1/0}function VD(i){return typeof i=="number"&&Number.isInteger(i)&&!kh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const pw="";function PD(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=V0(e)),e=UD(i.get(t),e);return V0(e)}function UD(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case pw:t+="";break;default:t+=u}}return t}function V0(i){return i+pw+""}/**
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
 */function P0(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function da(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function gw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Ht.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rh(this.root,e,this.comparator,!1)}getReverseIterator(){return new rh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rh(this.root,e,this.comparator,!0)}}class rh{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ht.RED,this.left=o??Ht.EMPTY,this.right=u??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ht(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ht.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ht(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new U0(this.data.getIterator())}getIteratorFrom(e){return new U0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ot(this.comparator);return t.data=e,t}}class U0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wn{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new Wn([])}unionWith(e){let t=new Ot(Ft.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class _w extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new _w("Invalid base64 string: "+u):u}}(e);return new Gt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Gt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const LD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cs(i){if(Ge(!!i),typeof i=="string"){let e=0;const t=LD.exec(i);if(Ge(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:dt(i.seconds),nanos:dt(i.nanos)}}function dt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function hs(i){return typeof i=="string"?Gt.fromBase64String(i):Gt.fromUint8Array(i)}/**
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
 */const yw="server_timestamp",vw="__type__",Ew="__previous_value__",Tw="__local_write_time__";function Pp(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[vw])===null||t===void 0?void 0:t.stringValue)===yw}function tf(i){const e=i.mapValue.fields[Ew];return Pp(e)?tf(e):e}function pu(i){const e=cs(i.mapValue.fields[Tw].timestampValue);return new Dt(e.seconds,e.nanos)}/**
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
 */class zD{constructor(e,t,s,o,u,h,d,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g}}const Mh="(default)";class gu{constructor(e,t){this.projectId=e,this.database=t||Mh}static empty(){return new gu("","")}get isDefaultDatabase(){return this.database===Mh}isEqual(e){return e instanceof gu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ww="__type__",BD="__max__",sh={mapValue:{}},bw="__vector__",xh="value";function fs(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Pp(i)?4:qD(i)?9007199254740991:jD(i)?10:11:Te()}function Ci(i,e){if(i===e)return!0;const t=fs(i);if(t!==fs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return pu(i).isEqual(pu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=cs(o.timestampValue),d=cs(u.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return hs(o.bytesValue).isEqual(hs(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return dt(o.geoPointValue.latitude)===dt(u.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return dt(o.integerValue)===dt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=dt(o.doubleValue),d=dt(u.doubleValue);return h===d?kh(h)===kh(d):isNaN(h)&&isNaN(d)}return!1}(i,e);case 9:return bo(i.arrayValue.values||[],e.arrayValue.values||[],Ci);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},d=u.mapValue.fields||{};if(P0(h)!==P0(d))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(d[p]===void 0||!Ci(h[p],d[p])))return!1;return!0}(i,e);default:return Te()}}function _u(i,e){return(i.values||[]).find(t=>Ci(t,e))!==void 0}function Ao(i,e){if(i===e)return 0;const t=fs(i),s=fs(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(i.booleanValue,e.booleanValue);case 2:return function(u,h){const d=dt(u.integerValue||u.doubleValue),p=dt(h.integerValue||h.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(i,e);case 3:return L0(i.timestampValue,e.timestampValue);case 4:return L0(pu(i),pu(e));case 5:return xe(i.stringValue,e.stringValue);case 6:return function(u,h){const d=hs(u),p=hs(h);return d.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const d=u.split("/"),p=h.split("/");for(let g=0;g<d.length&&g<p.length;g++){const E=xe(d[g],p[g]);if(E!==0)return E}return xe(d.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const d=xe(dt(u.latitude),dt(h.latitude));return d!==0?d:xe(dt(u.longitude),dt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return z0(i.arrayValue,e.arrayValue);case 10:return function(u,h){var d,p,g,E;const w=u.fields||{},S=h.fields||{},O=(d=w[xh])===null||d===void 0?void 0:d.arrayValue,P=(p=S[xh])===null||p===void 0?void 0:p.arrayValue,K=xe(((g=O==null?void 0:O.values)===null||g===void 0?void 0:g.length)||0,((E=P==null?void 0:P.values)===null||E===void 0?void 0:E.length)||0);return K!==0?K:z0(O,P)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===sh.mapValue&&h===sh.mapValue)return 0;if(u===sh.mapValue)return 1;if(h===sh.mapValue)return-1;const d=u.fields||{},p=Object.keys(d),g=h.fields||{},E=Object.keys(g);p.sort(),E.sort();for(let w=0;w<p.length&&w<E.length;++w){const S=xe(p[w],E[w]);if(S!==0)return S;const O=Ao(d[p[w]],g[E[w]]);if(O!==0)return O}return xe(p.length,E.length)}(i.mapValue,e.mapValue);default:throw Te()}}function L0(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return xe(i,e);const t=cs(i),s=cs(e),o=xe(t.seconds,s.seconds);return o!==0?o:xe(t.nanos,s.nanos)}function z0(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Ao(t[o],s[o]);if(u)return u}return xe(t.length,s.length)}function So(i){return Jm(i)}function Jm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=cs(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return hs(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ge.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Jm(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Jm(t.fields[h])}`;return o+"}"}(i.mapValue):Te()}function gh(i){switch(fs(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tf(i);return e?16+gh(e):16;case 5:return 2*i.stringValue.length;case 6:return hs(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+gh(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return da(s.fields,(u,h)=>{o+=u.length+gh(h)}),o}(i.mapValue);default:throw Te()}}function B0(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function ep(i){return!!i&&"integerValue"in i}function Up(i){return!!i&&"arrayValue"in i}function j0(i){return!!i&&"nullValue"in i}function q0(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function _h(i){return!!i&&"mapValue"in i}function jD(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[ww])===null||t===void 0?void 0:t.stringValue)===bw}function au(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return da(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=au(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=au(i.arrayValue.values[t]);return e}return Object.assign({},i)}function qD(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===BD}/**
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
 */class qn{constructor(e){this.value=e}static empty(){return new qn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!_h(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=au(t)}setAll(e){let t=Ft.emptyPath(),s={},o=[];e.forEach((h,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=d.popLast()}h?s[d.lastSegment()]=au(h):o.push(d.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());_h(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ci(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];_h(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){da(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new qn(au(this.value))}}function Aw(i){const e=[];return da(i.fields,(t,s)=>{const o=new Ft([t]);if(_h(s)){const u=Aw(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Wn(e)}/**
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
 */class Wt{constructor(e,t,s,o,u,h,d){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=d}static newInvalidDocument(e){return new Wt(e,0,we.min(),we.min(),we.min(),qn.empty(),0)}static newFoundDocument(e,t,s,o){return new Wt(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new Wt(e,2,t,we.min(),we.min(),qn.empty(),0)}static newUnknownDocument(e,t){return new Wt(e,3,t,we.min(),we.min(),qn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vh{constructor(e,t){this.position=e,this.inclusive=t}}function H0(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=ge.comparator(ge.fromName(h.referenceValue),t.key):s=Ao(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function F0(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Ci(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class yu{constructor(e,t="asc"){this.field=e,this.dir=t}}function HD(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Sw{}class Tt extends Sw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new GD(e,t,s):t==="array-contains"?new QD(e,s):t==="in"?new YD(e,s):t==="not-in"?new XD(e,s):t==="array-contains-any"?new WD(e,s):new Tt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new KD(e,s):new $D(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ao(t,this.value)):t!==null&&fs(this.value)===fs(t)&&this.matchesComparison(Ao(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ti extends Sw{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new ti(e,t)}matches(e){return Rw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Rw(i){return i.op==="and"}function Iw(i){return FD(i)&&Rw(i)}function FD(i){for(const e of i.filters)if(e instanceof ti)return!1;return!0}function tp(i){if(i instanceof Tt)return i.field.canonicalString()+i.op.toString()+So(i.value);if(Iw(i))return i.filters.map(e=>tp(e)).join(",");{const e=i.filters.map(t=>tp(t)).join(",");return`${i.op}(${e})`}}function Cw(i,e){return i instanceof Tt?function(s,o){return o instanceof Tt&&s.op===o.op&&s.field.isEqual(o.field)&&Ci(s.value,o.value)}(i,e):i instanceof ti?function(s,o){return o instanceof ti&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,d)=>u&&Cw(h,o.filters[d]),!0):!1}(i,e):void Te()}function Dw(i){return i instanceof Tt?function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`}(i):i instanceof ti?function(t){return t.op.toString()+" {"+t.getFilters().map(Dw).join(" ,")+"}"}(i):"Filter"}class GD extends Tt{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class KD extends Tt{constructor(e,t){super(e,"in",t),this.keys=Ow("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $D extends Tt{constructor(e,t){super(e,"not-in",t),this.keys=Ow("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ow(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ge.fromName(s.referenceValue))}class QD extends Tt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Up(t)&&_u(t.arrayValue,this.value)}}class YD extends Tt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&_u(this.value.arrayValue,t)}}class XD extends Tt{constructor(e,t){super(e,"not-in",t)}matches(e){if(_u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!_u(this.value.arrayValue,t)}}class WD extends Tt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Up(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>_u(this.value.arrayValue,s))}}/**
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
 */class ZD{constructor(e,t=null,s=[],o=[],u=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=d,this.le=null}}function G0(i,e=null,t=[],s=[],o=null,u=null,h=null){return new ZD(i,e,t,s,o,u,h)}function Lp(i){const e=Ae(i);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>tp(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ef(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>So(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>So(s)).join(",")),e.le=t}return e.le}function zp(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!HD(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Cw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!F0(i.startAt,e.startAt)&&F0(i.endAt,e.endAt)}function np(i){return ge.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class xo{constructor(e,t=null,s=[],o=[],u=null,h="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function JD(i,e,t,s,o,u,h,d){return new xo(i,e,t,s,o,u,h,d)}function nf(i){return new xo(i)}function K0(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Nw(i){return i.collectionGroup!==null}function ou(i){const e=Ae(i);if(e.he===null){e.he=[];const t=new Set;for(const u of e.explicitOrderBy)e.he.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new Ot(Ft.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.he.push(new yu(u,s))}),t.has(Ft.keyField().canonicalString())||e.he.push(new yu(Ft.keyField(),s))}return e.he}function Si(i){const e=Ae(i);return e.Pe||(e.Pe=eO(e,ou(i))),e.Pe}function eO(i,e){if(i.limitType==="F")return G0(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new yu(o.field,u)});const t=i.endAt?new Vh(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Vh(i.startAt.position,i.startAt.inclusive):null;return G0(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function ip(i,e){const t=i.filters.concat([e]);return new xo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function rp(i,e,t){return new xo(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function rf(i,e){return zp(Si(i),Si(e))&&i.limitType===e.limitType}function kw(i){return`${Lp(Si(i))}|lt:${i.limitType}`}function co(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Dw(o)).join(", ")}]`),ef(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>So(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>So(o)).join(",")),`Target(${s})`}(Si(i))}; limitType=${i.limitType})`}function sf(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ge.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of ou(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,d,p){const g=H0(h,d,p);return h.inclusive?g<=0:g<0}(s.startAt,ou(s),o)||s.endAt&&!function(h,d,p){const g=H0(h,d,p);return h.inclusive?g>=0:g>0}(s.endAt,ou(s),o))}(i,e)}function tO(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Mw(i){return(e,t)=>{let s=!1;for(const o of ou(i)){const u=nO(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function nO(i,e,t){const s=i.field.isKeyField()?ge.comparator(e.key,t.key):function(u,h,d){const p=h.data.field(u),g=d.data.field(u);return p!==null&&g!==null?Ao(p,g):Te()}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Te()}}/**
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
 */class ma{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){da(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return gw(this.inner)}size(){return this.innerSize}}/**
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
 */const iO=new rt(ge.comparator);function fr(){return iO}const xw=new rt(ge.comparator);function eu(...i){let e=xw;for(const t of i)e=e.insert(t.key,t);return e}function Vw(i){let e=xw;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ea(){return lu()}function Pw(){return lu()}function lu(){return new ma(i=>i.toString(),(i,e)=>i.isEqual(e))}const rO=new rt(ge.comparator),sO=new Ot(ge.comparator);function ke(...i){let e=sO;for(const t of i)e=e.add(t);return e}const aO=new Ot(xe);function oO(){return aO}/**
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
 */function Bp(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kh(e)?"-0":e}}function Uw(i){return{integerValue:""+i}}function lO(i,e){return VD(e)?Uw(e):Bp(i,e)}/**
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
 */class af{constructor(){this._=void 0}}function uO(i,e,t){return i instanceof Ph?function(o,u){const h={fields:{[vw]:{stringValue:yw},[Tw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Pp(u)&&(u=tf(u)),u&&(h.fields[Ew]=u),{mapValue:h}}(t,e):i instanceof vu?zw(i,e):i instanceof Eu?Bw(i,e):function(o,u){const h=Lw(o,u),d=$0(h)+$0(o.Ie);return ep(h)&&ep(o.Ie)?Uw(d):Bp(o.serializer,d)}(i,e)}function cO(i,e,t){return i instanceof vu?zw(i,e):i instanceof Eu?Bw(i,e):t}function Lw(i,e){return i instanceof Uh?function(s){return ep(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Ph extends af{}class vu extends af{constructor(e){super(),this.elements=e}}function zw(i,e){const t=jw(e);for(const s of i.elements)t.some(o=>Ci(o,s))||t.push(s);return{arrayValue:{values:t}}}class Eu extends af{constructor(e){super(),this.elements=e}}function Bw(i,e){let t=jw(e);for(const s of i.elements)t=t.filter(o=>!Ci(o,s));return{arrayValue:{values:t}}}class Uh extends af{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function $0(i){return dt(i.integerValue||i.doubleValue)}function jw(i){return Up(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function hO(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof vu&&o instanceof vu||s instanceof Eu&&o instanceof Eu?bo(s.elements,o.elements,Ci):s instanceof Uh&&o instanceof Uh?Ci(s.Ie,o.Ie):s instanceof Ph&&o instanceof Ph}(i.transform,e.transform)}class fO{constructor(e,t){this.version=e,this.transformResults=t}}class Zn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zn}static exists(e){return new Zn(void 0,e)}static updateTime(e){return new Zn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class of{}function qw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new jp(i.key,Zn.none()):new Iu(i.key,i.data,Zn.none());{const t=i.data,s=qn.empty();let o=new Ot(Ft.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new pa(i.key,s,new Wn(o.toArray()),Zn.none())}}function dO(i,e,t){i instanceof Iu?function(o,u,h){const d=o.value.clone(),p=Y0(o.fieldTransforms,u,h.transformResults);d.setAll(p),u.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(i,e,t):i instanceof pa?function(o,u,h){if(!yh(o.precondition,u))return void u.convertToUnknownDocument(h.version);const d=Y0(o.fieldTransforms,u,h.transformResults),p=u.data;p.setAll(Hw(o)),p.setAll(d),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function uu(i,e,t,s){return i instanceof Iu?function(u,h,d,p){if(!yh(u.precondition,h))return d;const g=u.value.clone(),E=X0(u.fieldTransforms,p,h);return g.setAll(E),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(i,e,t,s):i instanceof pa?function(u,h,d,p){if(!yh(u.precondition,h))return d;const g=X0(u.fieldTransforms,p,h),E=h.data;return E.setAll(Hw(u)),E.setAll(g),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),d===null?null:d.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(w=>w.field))}(i,e,t,s):function(u,h,d){return yh(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(i,e,t)}function mO(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=Lw(s.transform,o||null);u!=null&&(t===null&&(t=qn.empty()),t.set(s.field,u))}return t||null}function Q0(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&bo(s,o,(u,h)=>hO(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Iu extends of{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class pa extends of{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Hw(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function Y0(i,e,t){const s=new Map;Ge(i.length===t.length);for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,d=e.data.field(u.field);s.set(u.field,cO(h,d,t[o]))}return s}function X0(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,uO(u,h,e))}return s}class jp extends of{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pO extends of{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gO{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&dO(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=uu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=uu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Pw();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let d=this.applyToLocalView(h,u.mutatedFields);d=t.has(o.key)?null:d;const p=qw(h,d);p!==null&&s.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,(t,s)=>Q0(t,s))&&bo(this.baseMutations,e.baseMutations,(t,s)=>Q0(t,s))}}class qp{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ge(e.mutations.length===s.length);let o=function(){return rO}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new qp(e,t,s,o)}}/**
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
 */class _O{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Et,Le;function vO(i){switch(i){case Z.OK:return Te();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return Te()}}function Fw(i){if(i===void 0)return hr("GRPC error has no .code"),Z.UNKNOWN;switch(i){case Et.OK:return Z.OK;case Et.CANCELLED:return Z.CANCELLED;case Et.UNKNOWN:return Z.UNKNOWN;case Et.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Et.INTERNAL:return Z.INTERNAL;case Et.UNAVAILABLE:return Z.UNAVAILABLE;case Et.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Et.NOT_FOUND:return Z.NOT_FOUND;case Et.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Et.ABORTED:return Z.ABORTED;case Et.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Et.DATA_LOSS:return Z.DATA_LOSS;default:return Te()}}(Le=Et||(Et={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function EO(){return new TextEncoder}/**
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
 */const TO=new ss([4294967295,4294967295],0);function W0(i){const e=EO().encode(i),t=new ow;return t.update(e),new Uint8Array(t.digest())}function Z0(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ss([t,s],0),new ss([o,u],0)]}class Hp{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new tu(`Invalid padding: ${t}`);if(s<0)throw new tu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new tu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new tu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ss.fromNumber(this.Ee)}Ae(e,t,s){let o=e.add(t.multiply(ss.fromNumber(s)));return o.compare(TO)===1&&(o=new ss([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=W0(e),[s,o]=Z0(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);if(!this.Re(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Hp(u,o,t);return s.forEach(d=>h.insert(d)),h}insert(e){if(this.Ee===0)return;const t=W0(e),[s,o]=Z0(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);this.Ve(h)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class tu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class lf{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Cu.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new lf(we.min(),o,new rt(xe),fr(),ke())}}class Cu{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Cu(s,t,ke(),ke(),ke())}}/**
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
 */class vh{constructor(e,t,s,o){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=o}}class Gw{constructor(e,t){this.targetId=e,this.ge=t}}class Kw{constructor(e,t,s=Gt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class J0{constructor(){this.pe=0,this.ye=eE(),this.we=Gt.EMPTY_BYTE_STRING,this.be=!1,this.Se=!0}get current(){return this.be}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.we=e)}Fe(){let e=ke(),t=ke(),s=ke();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Te()}}),new Cu(this.we,this.be,e,t,s)}Me(){this.Se=!1,this.ye=eE()}xe(e,t){this.Se=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.Se=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ge(this.pe>=0)}Le(){this.Se=!0,this.be=!0}}class wO{constructor(e){this.ke=e,this.qe=new Map,this.Qe=fr(),this.$e=ah(),this.Ke=ah(),this.Ue=new rt(xe)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,s=e.ge.count,o=this.Xe(t);if(o){const u=o.target;if(np(u))if(s===0){const h=new ge(u.path);this.ze(t,h,Wt.newNoDocument(h,we.min()))}else Ge(s===1);else{const h=this.et(t);if(h!==s){const d=this.tt(e),p=d?this.nt(d,e,h):1;if(p!==0){this.Ye(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,g)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,d;try{h=hs(s).toUint8Array()}catch(p){if(p instanceof _w)return wo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Hp(h,o,u)}catch(p){return wo(p instanceof tu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ke.it(),d=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,u,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((u,h)=>{const d=this.Xe(h);if(d){if(u.current&&np(d.target)){const p=new ge(d.target.path);this._t(p).has(h)||this.ut(h,p)||this.ze(h,p,Wt.newNoDocument(p,e))}u.ve&&(t.set(h,u.Fe()),u.Me())}});let s=ke();this.Ke.forEach((u,h)=>{let d=!0;h.forEachWhile(p=>{const g=this.Xe(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(u))}),this.Qe.forEach((u,h)=>h.setReadTime(e));const o=new lf(e,t,this.Ue,this.Qe,s);return this.Qe=fr(),this.$e=ah(),this.Ke=ah(),this.Ue=new rt(xe),o}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new J0,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Ot(xe),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ot(xe),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new J0),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ah(){return new rt(ge.comparator)}function eE(){return new rt(ge.comparator)}const bO={asc:"ASCENDING",desc:"DESCENDING"},AO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SO={and:"AND",or:"OR"};class RO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sp(i,e){return i.useProto3Json||ef(e)?e:{value:e}}function Lh(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $w(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function IO(i,e){return Lh(i,e.toTimestamp())}function Ri(i){return Ge(!!i),we.fromTimestamp(function(t){const s=cs(t);return new Dt(s.seconds,s.nanos)}(i))}function Fp(i,e){return ap(i,e).canonicalString()}function ap(i,e){const t=function(o){return new Ze(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function Qw(i){const e=Ze.fromString(i);return Ge(Jw(e)),e}function op(i,e){return Fp(i.databaseId,e.path)}function km(i,e){const t=Qw(e);if(t.get(1)!==i.databaseId.projectId)throw new ce(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ce(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ge(Xw(t))}function Yw(i,e){return Fp(i.databaseId,e)}function CO(i){const e=Qw(i);return e.length===4?Ze.emptyPath():Xw(e)}function lp(i){return new Ze(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Xw(i){return Ge(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function tE(i,e,t){return{name:op(i,e),fields:t.value.mapValue.fields}}function DO(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,E){return g.useProto3Json?(Ge(E===void 0||typeof E=="string"),Gt.fromBase64String(E||"")):(Ge(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Gt.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(g){const E=g.code===void 0?Z.UNKNOWN:Fw(g.code);return new ce(E,g.message||"")}(h);t=new Kw(s,o,u,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=km(i,s.document.name),u=Ri(s.document.updateTime),h=s.document.createTime?Ri(s.document.createTime):we.min(),d=new qn({mapValue:{fields:s.document.fields}}),p=Wt.newFoundDocument(o,u,h,d),g=s.targetIds||[],E=s.removedTargetIds||[];t=new vh(g,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=km(i,s.document),u=s.readTime?Ri(s.readTime):we.min(),h=Wt.newNoDocument(o,u),d=s.removedTargetIds||[];t=new vh([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=km(i,s.document),u=s.removedTargetIds||[];t=new vh([],u,o,null)}else{if(!("filter"in e))return Te();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new yO(o,u),d=s.targetId;t=new Gw(d,h)}}return t}function OO(i,e){let t;if(e instanceof Iu)t={update:tE(i,e.key,e.value)};else if(e instanceof jp)t={delete:op(i,e.key)};else if(e instanceof pa)t={update:tE(i,e.key,e.data),updateMask:zO(e.fieldMask)};else{if(!(e instanceof pO))return Te();t={verify:op(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const d=h.transform;if(d instanceof Ph)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof vu)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Eu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Uh)return{fieldPath:h.field.canonicalString(),increment:d.Ie};throw Te()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:IO(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Te()}(i,e.precondition)),t}function NO(i,e){return i&&i.length>0?(Ge(e!==void 0),i.map(t=>function(o,u){let h=o.updateTime?Ri(o.updateTime):Ri(u);return h.isEqual(we.min())&&(h=Ri(u)),new fO(h,o.transformResults||[])}(t,e))):[]}function kO(i,e){return{documents:[Yw(i,e.path)]}}function MO(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Yw(i,o);const u=function(g){if(g.length!==0)return Zw(ti.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(E=>function(S){return{field:ho(S.field),direction:PO(S.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=sp(i,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:t,parent:o}}function xO(i){let e=CO(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ge(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(w){const S=Ww(w);return S instanceof ti&&Iw(S)?S.getFilters():[S]}(t.where));let h=[];t.orderBy&&(h=function(w){return w.map(S=>function(P){return new yu(fo(P.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(w){let S;return S=typeof w=="object"?w.value:w,ef(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(w){const S=!!w.before,O=w.values||[];return new Vh(O,S)}(t.startAt));let g=null;return t.endAt&&(g=function(w){const S=!w.before,O=w.values||[];return new Vh(O,S)}(t.endAt)),JD(e,o,h,u,d,"F",p,g)}function VO(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ww(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=fo(t.unaryFilter.field);return Tt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=fo(t.unaryFilter.field);return Tt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=fo(t.unaryFilter.field);return Tt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=fo(t.unaryFilter.field);return Tt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(i):i.fieldFilter!==void 0?function(t){return Tt.create(fo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return ti.create(t.compositeFilter.filters.map(s=>Ww(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(i):Te()}function PO(i){return bO[i]}function UO(i){return AO[i]}function LO(i){return SO[i]}function ho(i){return{fieldPath:i.canonicalString()}}function fo(i){return Ft.fromServerFormat(i.fieldPath)}function Zw(i){return i instanceof Tt?function(t){if(t.op==="=="){if(q0(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NAN"}};if(j0(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(q0(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NOT_NAN"}};if(j0(t.value))return{unaryFilter:{field:ho(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(t.field),op:UO(t.op),value:t.value}}}(i):i instanceof ti?function(t){const s=t.getFilters().map(o=>Zw(o));return s.length===1?s[0]:{compositeFilter:{op:LO(t.op),filters:s}}}(i):Te()}function zO(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Jw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class ns{constructor(e,t,s,o,u=we.min(),h=we.min(),d=Gt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class BO{constructor(e){this.Tt=e}}function jO(i){const e=xO({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?rp(e,e.limit,"L"):e}/**
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
 */class qO{constructor(){this.Tn=new HO}addToCollectionParentIndex(e,t){return this.Tn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(us.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(us.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class HO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Ot(Ze.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ot(Ze.comparator)).toArray()}}/**
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
 */const nE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eb=41943040;class hn{static withCacheSize(e){return new hn(e,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */hn.DEFAULT_COLLECTION_PERCENTILE=10,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hn.DEFAULT=new hn(eb,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hn.DISABLED=new hn(-1,0,0);/**
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
 */class Ro{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Ro(0)}static Un(){return new Ro(-1)}}/**
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
 */const iE="LruGarbageCollector",FO=1048576;function rE([i,e],[t,s]){const o=xe(i,t);return o===0?xe(e,s):o}class GO{constructor(e){this.Hn=e,this.buffer=new Ot(rE),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();rE(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class KO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ue(iE,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Mo(t)?ue(iE,"Ignoring IndexedDB error during garbage collection: ",t):await ko(t)}await this.er(3e5)})}}class $O{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Jh.ae);const s=new GO(t);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(nE)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nE):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,o,u,h,d,p,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,h=Date.now(),this.nthSequenceNumber(e,o))).next(w=>(s=w,d=Date.now(),this.removeTargets(e,s,t))).next(w=>(u=w,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(w=>(g=Date.now(),uo()<=Ne.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(d-h)+`ms
	Removed ${u} targets in `+(p-d)+`ms
	Removed ${w} documents in `+(g-p)+`ms
Total Duration: ${g-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:w})))}}function QO(i,e){return new $O(i,e)}/**
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
 */class YO{constructor(){this.changes=new ma(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Wt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class WO{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&uu(s.mutation,o,Wn.empty(),Dt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ke()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ke()){const o=ea();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=eu();return u.forEach((d,p)=>{h=h.insert(d,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ea();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ke()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,d)=>{t.set(h,d)})})}computeViews(e,t,s,o){let u=fr();const h=lu(),d=function(){return lu()}();return t.forEach((p,g)=>{const E=s.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof pa)?u=u.insert(g.key,g):E!==void 0?(h.set(g.key,E.mutation.getFieldMask()),uu(E.mutation,g,E.mutation.getFieldMask(),Dt.now())):h.set(g.key,Wn.empty())}),this.recalculateAndSaveOverlays(e,u).next(p=>(p.forEach((g,E)=>h.set(g,E)),t.forEach((g,E)=>{var w;return d.set(g,new XO(E,(w=h.get(g))!==null&&w!==void 0?w:null))}),d))}recalculateAndSaveOverlays(e,t){const s=lu();let o=new rt((h,d)=>h-d),u=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const d of h)d.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let E=s.get(p)||Wn.empty();E=d.applyToLocalView(g,E),s.set(p,E);const w=(o.get(d.batchId)||ke()).add(p);o=o.insert(d.batchId,w)})}).next(()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,E=p.value,w=Pw();E.forEach(S=>{if(!u.has(S)){const O=qw(t.get(S),s.get(S));O!==null&&w.set(S,O),u=u.add(S)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,w))}return W.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ge.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Nw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):W.resolve(ea());let d=mu,p=u;return h.next(g=>W.forEach(g,(E,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),u.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next(S=>{p=p.insert(E,S)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,p,g,ke())).next(E=>({batchId:d,changes:Vw(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(s=>{let o=eu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=eu();return this.indexManager.getCollectionParents(e,u).next(d=>W.forEach(d,p=>{const g=function(w,S){return new xo(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(t,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(E=>{E.forEach((w,S)=>{h=h.insert(w,S)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((p,g)=>{const E=g.getKey();h.get(E)===null&&(h=h.insert(E,Wt.newInvalidDocument(E)))});let d=eu();return h.forEach((p,g)=>{const E=u.get(p);E!==void 0&&uu(E.mutation,g,Wn.empty(),Dt.now()),sf(t,g)&&(d=d.insert(p,g))}),d})}}/**
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
 */class ZO{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return W.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Ri(o.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:jO(o.bundledQuery),readTime:Ri(o.readTime)}}(t)),W.resolve()}}/**
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
 */class JO{constructor(){this.overlays=new rt(ge.comparator),this.Rr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ea();return W.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Et(e,t,u)}),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=ea(),u=t.length+1,h=new ge(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new rt((g,E)=>g-E);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=u.get(g.largestBatchId);E===null&&(E=ea(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const d=ea(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,E)=>d.set(g,E)),!(d.size()>=o)););return W.resolve(d)}Et(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new _O(t,s));let u=this.Rr.get(t);u===void 0&&(u=ke(),this.Rr.set(t,u)),this.Rr.set(t,u.add(s.key))}}/**
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
 */class eN{constructor(){this.sessionToken=Gt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class Gp{constructor(){this.Vr=new Ot(Lt.mr),this.gr=new Ot(Lt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new Lt(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new Lt(e,t))}br(e,t){e.forEach(s=>this.removeReference(s,t))}Sr(e){const t=new ge(new Ze([])),s=new Lt(t,e),o=new Lt(t,e+1),u=[];return this.gr.forEachInRange([s,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ge(new Ze([])),s=new Lt(t,e),o=new Lt(t,e+1);let u=ke();return this.gr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Lt(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Lt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ge.comparator(e.key,t.key)||xe(e.Cr,t.Cr)}static pr(e,t){return xe(e.Cr,t.Cr)||ge.comparator(e.key,t.key)}}/**
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
 */class tN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Ot(Lt.mr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new gO(u,t,s,o);this.mutationQueue.push(h);for(const d of o)this.Mr=this.Mr.add(new Lt(d.key,u)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Nr(s),u=o<0?0:o;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Vp:this.Fr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Lt(t,0),o=new Lt(t,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],h=>{const d=this.Or(h.Cr);u.push(d)}),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ot(xe);return t.forEach(o=>{const u=new Lt(o,0),h=new Lt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],d=>{s=s.add(d.Cr)})}),W.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ge.isDocumentKey(u)||(u=u.child(""));const h=new Lt(new ge(u),0);let d=new Ot(xe);return this.Mr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(d=d.add(p.Cr)),!0)},h),W.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ge(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return W.forEach(t.mutations,o=>{const u=new Lt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new Lt(t,0),o=this.Mr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class nN{constructor(e){this.kr=e,this.docs=function(){return new rt(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():Wt.newInvalidDocument(t))}getEntries(e,t){let s=fr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Wt.newInvalidDocument(o))}),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=fr();const h=t.path,d=new ge(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:E}}=p.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||ND(OD(E),s)<=0||(o.has(E.key)||sf(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Te()}qr(e,t){return W.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new iN(this)}getSize(e){return W.resolve(this.size)}}class iN extends YO{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),W.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class rN{constructor(e){this.persistence=e,this.Qr=new ma(t=>Lp(t),zp),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Gp,this.targetCount=0,this.Ur=Ro.Kn()}forEachTarget(e,t){return this.Qr.forEach((s,o)=>t(o)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),W.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Ro(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.zn(t),W.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Qr.forEach((h,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),W.waitFor(u).next(()=>o)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.Kr.yr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.Kr.br(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),W.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Kr.vr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.Kr.containsKey(t))}}/**
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
 */class tb{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Jh(0),this.zr=!1,this.zr=!0,this.jr=new eN,this.referenceDelegate=e(this),this.Hr=new rN(this),this.indexManager=new qO,this.remoteDocumentCache=function(o){return new nN(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new BO(t),this.Yr=new ZO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new JO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new tN(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){ue("MemoryPersistence","Starting transaction:",e);const o=new sN(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,t){return W.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class sN extends MD{constructor(e){super(),this.currentSequenceNumber=e}}class Kp{constructor(e){this.persistence=e,this.ti=new Gp,this.ni=null}static ri(e){return new Kp(e)}get ii(){if(this.ni)return this.ni;throw Te()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),W.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.ii,s=>{const o=ge.fromPath(s);return this.si(e,o).next(u=>{u||t.removeEntry(o,we.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return W.or([()=>W.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class zh{constructor(e,t){this.persistence=e,this.oi=new ma(s=>PD(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=QO(this,t)}static ri(e,t){return new zh(e,t)}Zr(){}Xr(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return W.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?W.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,h=>this.ar(e,h,t).next(d=>{d||(s++,u.removeEntry(h,we.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),W.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gh(e.data.value)),t}ar(e,t,s){return W.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class $p{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=o}static Yi(e,t){let s=ke(),o=ke();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new $p(e,t.fromCache,s,o)}}/**
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
 */class aN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oN{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return wR()?8:xD(Zt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.rs(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new aN;return this._s(e,t,h).next(d=>{if(u.result=d,this.Xi)return this.us(e,t,h,d.size)})}).next(()=>u.result)}us(e,t,s,o){return s.documentReadCount<this.es?(uo()<=Ne.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),W.resolve()):(uo()<=Ne.DEBUG&&ue("QueryEngine","Query:",co(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(uo()<=Ne.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Si(t))):W.resolve())}rs(e,t){if(K0(t))return W.resolve(null);let s=Si(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=rp(t,null,"F"),s=Si(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=ke(...u);return this.ns.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.cs(t,d);return this.ls(t,g,h,p.readTime)?this.rs(e,rp(t,null,"F")):this.hs(e,g,t,p)}))})))}ss(e,t,s,o){return K0(t)||o.isEqual(we.min())?W.resolve(null):this.ns.getDocuments(e,s).next(u=>{const h=this.cs(t,u);return this.ls(t,h,s,o)?W.resolve(null):(uo()<=Ne.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),co(t)),this.hs(e,h,t,DD(o,mu)).next(d=>d))})}cs(e,t){let s=new Ot(Mw(e));return t.forEach((o,u)=>{sf(e,u)&&(s=s.add(u))}),s}ls(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,t,s){return uo()<=Ne.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",co(t)),this.ns.getDocumentsMatchingQuery(e,t,us.min(),s)}hs(e,t,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const Qp="LocalStore",lN=3e8;class uN{constructor(e,t,s,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new rt(xe),this.Is=new ma(u=>Lp(u),zp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WO(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function cN(i,e,t,s){return new uN(i,e,t,s)}async function nb(i,e){const t=Ae(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],d=[];let p=ke();for(const g of o){h.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}for(const g of u){d.push(g.batchId);for(const E of g.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(s,p).next(g=>({Rs:g,removedBatchIds:h,addedBatchIds:d}))})})}function hN(i,e){const t=Ae(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,g,E){const w=g.batch,S=w.keys();let O=W.resolve();return S.forEach(P=>{O=O.next(()=>E.getEntry(p,P)).next(K=>{const U=g.docVersions.get(P);Ge(U!==null),K.version.compareTo(U)<0&&(w.applyToRemoteDocument(K,g),K.isValidDocument()&&(K.setReadTime(g.commitVersion),E.addEntry(K)))})}),O.next(()=>d.mutationQueue.removeMutationBatch(p,w))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let p=ke();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function ib(i){const e=Ae(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function fN(i,e){const t=Ae(i),s=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const d=[];e.targetChanges.forEach((E,w)=>{const S=o.get(w);if(!S)return;d.push(t.Hr.removeMatchingKeys(u,E.removedDocuments,w).next(()=>t.Hr.addMatchingKeys(u,E.addedDocuments,w)));let O=S.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(w)!==null?O=O.withResumeToken(Gt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(E.resumeToken,s)),o=o.insert(w,O),function(K,U,G){return K.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=lN?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(S,O,E)&&d.push(t.Hr.updateTargetData(u,O))});let p=fr(),g=ke();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),d.push(dN(u,h,e.documentUpdates).next(E=>{p=E.Vs,g=E.fs})),!s.isEqual(we.min())){const E=t.Hr.getLastRemoteSnapshotVersion(u).next(w=>t.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));d.push(E)}return W.waitFor(d).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,p,g)).next(()=>p)}).then(u=>(t.Ts=o,u))}function dN(i,e,t){let s=ke(),o=ke();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=fr();return t.forEach((d,p)=>{const g=u.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(d,p.readTime),h=h.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),h=h.insert(d,p)):ue(Qp,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{Vs:h,fs:o}})}function mN(i,e){const t=Ae(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Vp),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function pN(i,e){const t=Ae(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Hr.getTargetData(s,e).next(u=>u?(o=u,W.resolve(o)):t.Hr.allocateTargetId(s).next(h=>(o=new ns(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function up(i,e,t){const s=Ae(i),o=s.Ts.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Mo(h))throw h;ue(Qp,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function sE(i,e,t){const s=Ae(i);let o=we.min(),u=ke();return s.persistence.runTransaction("Execute query","readwrite",h=>function(p,g,E){const w=Ae(p),S=w.Is.get(E);return S!==void 0?W.resolve(w.Ts.get(S)):w.Hr.getTargetData(g,E)}(s,h,Si(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(h,d.targetId).next(p=>{u=p})}).next(()=>s.Ps.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?u:ke())).next(d=>(gN(s,tO(e),d),{documents:d,gs:u})))}function gN(i,e,t){let s=i.Es.get(e)||we.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Es.set(e,s)}class aE{constructor(){this.activeTargetIds=oO()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _N{constructor(){this.ho=new aE,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new aE,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yN{To(e){}shutdown(){}}/**
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
 */const oE="ConnectivityMonitor";class lE{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ue(oE,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ue(oE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oh=null;function cp(){return oh===null?oh=function(){return 268435456+Math.round(2147483648*Math.random())}():oh++,"0x"+oh.toString(16)}/**
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
 */const Mm="RestConnection",vN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class EN{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===Mh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}bo(e,t,s,o,u){const h=cp(),d=this.So(e,t.toUriEncodedString());ue(Mm,`Sending RPC '${e}' ${h}:`,d,s);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,u),this.vo(e,d,p,s).then(g=>(ue(Mm,`Received RPC '${e}' ${h}: `,g),g),g=>{throw wo(Mm,`RPC '${e}' ${h} failed with error: `,g,"url: ",d,"request:",s),g})}Co(e,t,s,o,u,h){return this.bo(e,t,s,o,u)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+No}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}So(e,t){const s=vN[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
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
 */class TN{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const Yt="WebChannelConnection";class wN extends EN{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,o){const u=cp();return new Promise((h,d)=>{const p=new lw;p.setWithCredentials(!0),p.listenOnce(uw.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case ph.NO_ERROR:const E=p.getResponseJson();ue(Yt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),h(E);break;case ph.TIMEOUT:ue(Yt,`RPC '${e}' ${u} timed out`),d(new ce(Z.DEADLINE_EXCEEDED,"Request time out"));break;case ph.HTTP_ERROR:const w=p.getStatus();if(ue(Yt,`RPC '${e}' ${u} failed with status:`,w,"response text:",p.getResponseText()),w>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const O=S==null?void 0:S.error;if(O&&O.status&&O.message){const P=function(U){const G=U.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(G)>=0?G:Z.UNKNOWN}(O.status);d(new ce(P,O.message))}else d(new ce(Z.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ce(Z.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{ue(Yt,`RPC '${e}' ${u} completed.`)}});const g=JSON.stringify(o);ue(Yt,`RPC '${e}' ${u} sending request:`,o),p.send(t,"POST",g,s,15)})}Wo(e,t,s){const o=cp(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=fw(),d=hw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const E=u.join("");ue(Yt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const w=h.createWebChannel(E,p);let S=!1,O=!1;const P=new TN({Fo:U=>{O?ue(Yt,`Not sending because RPC '${e}' stream ${o} is closed:`,U):(S||(ue(Yt,`Opening RPC '${e}' stream ${o} transport.`),w.open(),S=!0),ue(Yt,`RPC '${e}' stream ${o} sending:`,U),w.send(U))},Mo:()=>w.close()}),K=(U,G,te)=>{U.listen(G,Y=>{try{te(Y)}catch(se){setTimeout(()=>{throw se},0)}})};return K(w,Jl.EventType.OPEN,()=>{O||(ue(Yt,`RPC '${e}' stream ${o} transport opened.`),P.Qo())}),K(w,Jl.EventType.CLOSE,()=>{O||(O=!0,ue(Yt,`RPC '${e}' stream ${o} transport closed`),P.Ko())}),K(w,Jl.EventType.ERROR,U=>{O||(O=!0,wo(Yt,`RPC '${e}' stream ${o} transport errored:`,U),P.Ko(new ce(Z.UNAVAILABLE,"The operation could not be completed")))}),K(w,Jl.EventType.MESSAGE,U=>{var G;if(!O){const te=U.data[0];Ge(!!te);const Y=te,se=(Y==null?void 0:Y.error)||((G=Y[0])===null||G===void 0?void 0:G.error);if(se){ue(Yt,`RPC '${e}' stream ${o} received error:`,se);const ae=se.status;let _e=function(A){const C=Et[A];if(C!==void 0)return Fw(C)}(ae),k=se.message;_e===void 0&&(_e=Z.INTERNAL,k="Unknown error status: "+ae+" with message "+se.message),O=!0,P.Ko(new ce(_e,k)),w.close()}else ue(Yt,`RPC '${e}' stream ${o} received:`,te),P.Uo(te)}}),K(d,cw.STAT_EVENT,U=>{U.stat===Zm.PROXY?ue(Yt,`RPC '${e}' stream ${o} detected buffering proxy`):U.stat===Zm.NOPROXY&&ue(Yt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}function xm(){return typeof document<"u"?document:null}/**
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
 */function uf(i){return new RO(i,!0)}/**
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
 */class rb{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-s);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const uE="PersistentStream";class sb{constructor(e,t,s,o,u,h,d,p){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new rb(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(hr(t.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===t&&this.V_(s,o)},s=>{e(()=>{const o=new ce(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ue(uE,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ue(uE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bN extends sb{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=DO(this.serializer,e),s=function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?Ri(h.readTime):we.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=lp(this.serializer),t.addTarget=function(u,h){let d;const p=h.target;if(d=np(p)?{documents:kO(u,p)}:{query:MO(u,p).ht},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=$w(u,h.resumeToken);const g=sp(u,h.expectedCount);g!==null&&(d.expectedCount=g)}else if(h.snapshotVersion.compareTo(we.min())>0){d.readTime=Lh(u,h.snapshotVersion.toTimestamp());const g=sp(u,h.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const s=VO(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=lp(this.serializer),t.removeTarget=e,this.I_(t)}}class AN extends sb{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=NO(e.writeResults,e.commitTime),s=Ri(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=lp(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>OO(this.serializer,s))};this.I_(t)}}/**
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
 */class SN{}class RN extends SN{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new ce(Z.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.bo(e,ap(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ce(Z.UNKNOWN,u.toString())})}Co(e,t,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.Co(e,ap(t,s),o,h,d,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ce(Z.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class IN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(hr(t),this.N_=!1):ue("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const oa="RemoteStore";class CN{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{s.enqueueAndForget(async()=>{ga(this)&&(ue(oa,"Restarting streams for network reachability change."),await async function(p){const g=Ae(p);g.W_.add(4),await Du(g),g.j_.set("Unknown"),g.W_.delete(4),await cf(g)}(this))})}),this.j_=new IN(s,o)}}async function cf(i){if(ga(i))for(const e of i.G_)await e(!0)}async function Du(i){for(const e of i.G_)await e(!1)}function ab(i,e){const t=Ae(i);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),Zp(t)?Wp(t):Vo(t).c_()&&Xp(t,e))}function Yp(i,e){const t=Ae(i),s=Vo(t);t.U_.delete(e),s.c_()&&ob(t,e),t.U_.size===0&&(s.c_()?s.P_():ga(t)&&t.j_.set("Unknown"))}function Xp(i,e){if(i.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vo(i).y_(e)}function ob(i,e){i.H_.Ne(e),Vo(i).w_(e)}function Wp(i){i.H_=new wO({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>i.U_.get(e)||null,it:()=>i.datastore.serializer.databaseId}),Vo(i).start(),i.j_.B_()}function Zp(i){return ga(i)&&!Vo(i).u_()&&i.U_.size>0}function ga(i){return Ae(i).W_.size===0}function lb(i){i.H_=void 0}async function DN(i){i.j_.set("Online")}async function ON(i){i.U_.forEach((e,t)=>{Xp(i,e)})}async function NN(i,e){lb(i),Zp(i)?(i.j_.q_(e),Wp(i)):i.j_.set("Unknown")}async function kN(i,e,t){if(i.j_.set("Online"),e instanceof Kw&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const d of u.targetIds)o.U_.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.U_.delete(d),o.H_.removeTarget(d))}(i,e)}catch(s){ue(oa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Bh(i,s)}else if(e instanceof vh?i.H_.We(e):e instanceof Gw?i.H_.Ze(e):i.H_.je(e),!t.isEqual(we.min()))try{const s=await ib(i.localStore);t.compareTo(s)>=0&&await function(u,h){const d=u.H_.ot(h);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.U_.get(g);E&&u.U_.set(g,E.withResumeToken(p.resumeToken,h))}}),d.targetMismatches.forEach((p,g)=>{const E=u.U_.get(p);if(!E)return;u.U_.set(p,E.withResumeToken(Gt.EMPTY_BYTE_STRING,E.snapshotVersion)),ob(u,p);const w=new ns(E.target,p,g,E.sequenceNumber);Xp(u,w)}),u.remoteSyncer.applyRemoteEvent(d)}(i,t)}catch(s){ue(oa,"Failed to raise snapshot:",s),await Bh(i,s)}}async function Bh(i,e,t){if(!Mo(e))throw e;i.W_.add(1),await Du(i),i.j_.set("Offline"),t||(t=()=>ib(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ue(oa,"Retrying IndexedDB access"),await t(),i.W_.delete(1),await cf(i)})}function ub(i,e){return e().catch(t=>Bh(i,t,e))}async function hf(i){const e=Ae(i),t=ds(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:Vp;for(;MN(e);)try{const o=await mN(e.localStore,s);if(o===null){e.K_.length===0&&t.P_();break}s=o.batchId,xN(e,o)}catch(o){await Bh(e,o)}cb(e)&&hb(e)}function MN(i){return ga(i)&&i.K_.length<10}function xN(i,e){i.K_.push(e);const t=ds(i);t.c_()&&t.b_&&t.S_(e.mutations)}function cb(i){return ga(i)&&!ds(i).u_()&&i.K_.length>0}function hb(i){ds(i).start()}async function VN(i){ds(i).C_()}async function PN(i){const e=ds(i);for(const t of i.K_)e.S_(t.mutations)}async function UN(i,e,t){const s=i.K_.shift(),o=qp.from(s,e,t);await ub(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await hf(i)}async function LN(i,e){e&&ds(i).b_&&await async function(s,o){if(function(h){return vO(h)&&h!==Z.ABORTED}(o.code)){const u=s.K_.shift();ds(s).h_(),await ub(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await hf(s)}}(i,e),cb(i)&&hb(i)}async function cE(i,e){const t=Ae(i);t.asyncQueue.verifyOperationInProgress(),ue(oa,"RemoteStore received new credentials");const s=ga(t);t.W_.add(3),await Du(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await cf(t)}async function zN(i,e){const t=Ae(i);e?(t.W_.delete(2),await cf(t)):e||(t.W_.add(2),await Du(t),t.j_.set("Unknown"))}function Vo(i){return i.J_||(i.J_=function(t,s,o){const u=Ae(t);return u.M_(),new bN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:DN.bind(null,i),No:ON.bind(null,i),Lo:NN.bind(null,i),p_:kN.bind(null,i)}),i.G_.push(async e=>{e?(i.J_.h_(),Zp(i)?Wp(i):i.j_.set("Unknown")):(await i.J_.stop(),lb(i))})),i.J_}function ds(i){return i.Y_||(i.Y_=function(t,s,o){const u=Ae(t);return u.M_(),new AN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:VN.bind(null,i),Lo:LN.bind(null,i),D_:PN.bind(null,i),v_:UN.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await hf(i)):(await i.Y_.stop(),i.K_.length>0&&(ue(oa,`Stopping write stream with ${i.K_.length} pending writes`),i.K_=[]))})),i.Y_}/**
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
 */class Jp{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new as,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,d=new Jp(e,t,h,o,u);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eg(i,e){if(hr("AsyncQueue",`${e}: ${i}`),Mo(i))return new ce(Z.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Eo{static emptySet(e){return new Eo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=eu(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Eo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Eo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class hE{constructor(){this.Z_=new rt(ge.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Te():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Io{constructor(e,t,s,o,u,h,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(d=>{h.push({type:0,doc:d})}),new Io(e,t,Eo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class BN{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class jN{constructor(){this.queries=fE(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const o=Ae(t),u=o.queries;o.queries=fE(),u.forEach((h,d)=>{for(const p of d.ta)p.onError(s)})})(this,new ce(Z.ABORTED,"Firestore shutting down"))}}function fE(){return new ma(i=>kw(i),rf)}async function fb(i,e){const t=Ae(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new BN,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await t.onListen(o,!0);break;case 1:u.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=eg(h,`Initialization of query '${co(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,u),u.ta.push(e),e.sa(t.onlineState),u.ea&&e.oa(u.ea)&&tg(t)}async function db(i,e){const t=Ae(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ta.indexOf(e);h>=0&&(u.ta.splice(h,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function qN(i,e){const t=Ae(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const d of h.ta)d.oa(o)&&(s=!0);h.ea=o}}s&&tg(t)}function HN(i,e,t){const s=Ae(i),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(t);s.queries.delete(e)}function tg(i){i.ia.forEach(e=>{e.next()})}var hp,dE;(dE=hp||(hp={}))._a="default",dE.Cache="cache";class mb{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Io(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==hp.Cache}}/**
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
 */class pb{constructor(e){this.key=e}}class gb{constructor(e){this.key=e}}class FN{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ke(),this.mutatedKeys=ke(),this.ya=Mw(e),this.wa=new Eo(this.ya)}get ba(){return this.fa}Sa(e,t){const s=t?t.Da:new hE,o=t?t.wa:this.wa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,w)=>{const S=o.get(E),O=sf(this.query,w)?w:null,P=!!S&&this.mutatedKeys.has(S.key),K=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let U=!1;S&&O?S.data.isEqual(O.data)?P!==K&&(s.track({type:3,doc:O}),U=!0):this.va(S,O)||(s.track({type:2,doc:O}),U=!0,(p&&this.ya(O,p)>0||g&&this.ya(O,g)<0)&&(d=!0)):!S&&O?(s.track({type:0,doc:O}),U=!0):S&&!O&&(s.track({type:1,doc:S}),U=!0,(p||g)&&(d=!0)),U&&(O?(h=h.add(O),u=K?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{wa:h,Da:s,ls:d,mutatedKeys:u}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const h=e.Da.X_();h.sort((E,w)=>function(O,P){const K=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return K(O)-K(P)}(E.type,w.type)||this.ya(E.doc,w.doc)),this.Ca(s),o=o!=null&&o;const d=t&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,g=p!==this.ga;return this.ga=p,h.length!==0||g?{snapshot:new Io(this.query,e.wa,u,h,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new hE,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=ke(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new gb(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new pb(s))}),t}Oa(e){this.fa=e.gs,this.pa=ke();const t=this.Sa(e.documents);return this.applyChanges(t,!0)}Na(){return Io.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ng="SyncEngine";class GN{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class KN{constructor(e){this.key=e,this.Ba=!1}}class $N{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new ma(d=>kw(d),rf),this.qa=new Map,this.Qa=new Set,this.$a=new rt(ge.comparator),this.Ka=new Map,this.Ua=new Gp,this.Wa={},this.Ga=new Map,this.za=Ro.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function QN(i,e,t=!0){const s=wb(i);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await _b(s,e,t,!0),o}async function YN(i,e){const t=wb(i);await _b(t,e,!0,!1)}async function _b(i,e,t,s){const o=await pN(i.localStore,Si(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let d;return s&&(d=await XN(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&ab(i.remoteStore,o),d}async function XN(i,e,t,s,o){i.Ha=(w,S,O)=>async function(K,U,G,te){let Y=U.view.Sa(G);Y.ls&&(Y=await sE(K.localStore,U.query,!1).then(({documents:k})=>U.view.Sa(k,Y)));const se=te&&te.targetChanges.get(U.targetId),ae=te&&te.targetMismatches.get(U.targetId)!=null,_e=U.view.applyChanges(Y,K.isPrimaryClient,se,ae);return pE(K,U.targetId,_e.Ma),_e.snapshot}(i,w,S,O);const u=await sE(i.localStore,e,!0),h=new FN(e,u.gs),d=h.Sa(u.documents),p=Cu.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),g=h.applyChanges(d,i.isPrimaryClient,p);pE(i,t,g.Ma);const E=new GN(e,t,h);return i.ka.set(e,E),i.qa.has(t)?i.qa.get(t).push(e):i.qa.set(t,[e]),g.snapshot}async function WN(i,e,t){const s=Ae(i),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(h=>!rf(h,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await up(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Yp(s.remoteStore,o.targetId),fp(s,o.targetId)}).catch(ko)):(fp(s,o.targetId),await up(s.localStore,o.targetId,!0))}async function ZN(i,e){const t=Ae(i),s=t.ka.get(e),o=t.qa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Yp(t.remoteStore,s.targetId))}async function JN(i,e,t){const s=ak(i);try{const o=await function(h,d){const p=Ae(h),g=Dt.now(),E=d.reduce((O,P)=>O.add(P.key),ke());let w,S;return p.persistence.runTransaction("Locally write mutations","readwrite",O=>{let P=fr(),K=ke();return p.ds.getEntries(O,E).next(U=>{P=U,P.forEach((G,te)=>{te.isValidDocument()||(K=K.add(G))})}).next(()=>p.localDocuments.getOverlayedDocuments(O,P)).next(U=>{w=U;const G=[];for(const te of d){const Y=mO(te,w.get(te.key).overlayedDocument);Y!=null&&G.push(new pa(te.key,Y,Aw(Y.value.mapValue),Zn.exists(!0)))}return p.mutationQueue.addMutationBatch(O,g,G,d)}).next(U=>{S=U;const G=U.applyToLocalDocumentSet(w,K);return p.documentOverlayCache.saveOverlays(O,U.batchId,G)})}).then(()=>({batchId:S.batchId,changes:Vw(w)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,d,p){let g=h.Wa[h.currentUser.toKey()];g||(g=new rt(xe)),g=g.insert(d,p),h.Wa[h.currentUser.toKey()]=g}(s,o.batchId,t),await Ou(s,o.changes),await hf(s.remoteStore)}catch(o){const u=eg(o,"Failed to persist write");t.reject(u)}}async function yb(i,e){const t=Ae(i);try{const s=await fN(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ka.get(u);h&&(Ge(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Ba=!0:o.modifiedDocuments.size>0?Ge(h.Ba):o.removedDocuments.size>0&&(Ge(h.Ba),h.Ba=!1))}),await Ou(t,s,e)}catch(s){await ko(s)}}function mE(i,e,t){const s=Ae(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ka.forEach((u,h)=>{const d=h.view.sa(e);d.snapshot&&o.push(d.snapshot)}),function(h,d){const p=Ae(h);p.onlineState=d;let g=!1;p.queries.forEach((E,w)=>{for(const S of w.ta)S.sa(d)&&(g=!0)}),g&&tg(p)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ek(i,e,t){const s=Ae(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ka.get(e),u=o&&o.key;if(u){let h=new rt(ge.comparator);h=h.insert(u,Wt.newNoDocument(u,we.min()));const d=ke().add(u),p=new lf(we.min(),new Map,new rt(xe),h,d);await yb(s,p),s.$a=s.$a.remove(u),s.Ka.delete(e),ig(s)}else await up(s.localStore,e,!1).then(()=>fp(s,e,t)).catch(ko)}async function tk(i,e){const t=Ae(i),s=e.batch.batchId;try{const o=await hN(t.localStore,e);Eb(t,s,null),vb(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ou(t,o)}catch(o){await ko(o)}}async function nk(i,e,t){const s=Ae(i);try{const o=await function(h,d){const p=Ae(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return p.mutationQueue.lookupMutationBatch(g,d).next(w=>(Ge(w!==null),E=w.keys(),p.mutationQueue.removeMutationBatch(g,w))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,E,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>p.localDocuments.getDocuments(g,E))})}(s.localStore,e);Eb(s,e,t),vb(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ou(s,o)}catch(o){await ko(o)}}function vb(i,e){(i.Ga.get(e)||[]).forEach(t=>{t.resolve()}),i.Ga.delete(e)}function Eb(i,e,t){const s=Ae(i);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function fp(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.qa.get(e))i.ka.delete(s),t&&i.La.Ja(s,t);i.qa.delete(e),i.isPrimaryClient&&i.Ua.Sr(e).forEach(s=>{i.Ua.containsKey(s)||Tb(i,s)})}function Tb(i,e){i.Qa.delete(e.path.canonicalString());const t=i.$a.get(e);t!==null&&(Yp(i.remoteStore,t),i.$a=i.$a.remove(e),i.Ka.delete(t),ig(i))}function pE(i,e,t){for(const s of t)s instanceof pb?(i.Ua.addReference(s.key,e),ik(i,s)):s instanceof gb?(ue(ng,"Document no longer in limbo: "+s.key),i.Ua.removeReference(s.key,e),i.Ua.containsKey(s.key)||Tb(i,s.key)):Te()}function ik(i,e){const t=e.key,s=t.path.canonicalString();i.$a.get(t)||i.Qa.has(s)||(ue(ng,"New document in limbo: "+t),i.Qa.add(s),ig(i))}function ig(i){for(;i.Qa.size>0&&i.$a.size<i.maxConcurrentLimboResolutions;){const e=i.Qa.values().next().value;i.Qa.delete(e);const t=new ge(Ze.fromString(e)),s=i.za.next();i.Ka.set(s,new KN(t)),i.$a=i.$a.insert(t,s),ab(i.remoteStore,new ns(Si(nf(t.path)),s,"TargetPurposeLimboResolution",Jh.ae))}}async function Ou(i,e,t){const s=Ae(i),o=[],u=[],h=[];s.ka.isEmpty()||(s.ka.forEach((d,p)=>{h.push(s.Ha(p,e,t).then(g=>{var E;if((g||t)&&s.isPrimaryClient){const w=g?!g.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(g){o.push(g);const w=$p.Yi(p.targetId,g);u.push(w)}}))}),await Promise.all(h),s.La.p_(o),await async function(p,g){const E=Ae(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>W.forEach(g,S=>W.forEach(S.Hi,O=>E.persistence.referenceDelegate.addReference(w,S.targetId,O)).next(()=>W.forEach(S.Ji,O=>E.persistence.referenceDelegate.removeReference(w,S.targetId,O)))))}catch(w){if(!Mo(w))throw w;ue(Qp,"Failed to update sequence numbers: "+w)}for(const w of g){const S=w.targetId;if(!w.fromCache){const O=E.Ts.get(S),P=O.snapshotVersion,K=O.withLastLimboFreeSnapshotVersion(P);E.Ts=E.Ts.insert(S,K)}}}(s.localStore,u))}async function rk(i,e){const t=Ae(i);if(!t.currentUser.isEqual(e)){ue(ng,"User change. New user:",e.toKey());const s=await nb(t.localStore,e);t.currentUser=e,function(u,h){u.Ga.forEach(d=>{d.forEach(p=>{p.reject(new ce(Z.CANCELLED,h))})}),u.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ou(t,s.Rs)}}function sk(i,e){const t=Ae(i),s=t.Ka.get(e);if(s&&s.Ba)return ke().add(s.key);{let o=ke();const u=t.qa.get(e);if(!u)return o;for(const h of u){const d=t.ka.get(h);o=o.unionWith(d.view.ba)}return o}}function wb(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=yb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ek.bind(null,e),e.La.p_=qN.bind(null,e.eventManager),e.La.Ja=HN.bind(null,e.eventManager),e}function ak(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nk.bind(null,e),e}class jh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uf(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return cN(this.persistence,new oN,e.initialUser,this.serializer)}Xa(e){return new tb(Kp.ri,this.serializer)}Za(e){return new _N}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jh.provider={build:()=>new jh};class ok extends jh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Ge(this.persistence.referenceDelegate instanceof zh);const s=this.persistence.referenceDelegate.garbageCollector;return new KO(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?hn.withCacheSize(this.cacheSizeBytes):hn.DEFAULT;return new tb(s=>zh.ri(s,t),this.serializer)}}class dp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>mE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rk.bind(null,this.syncEngine),await zN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jN}()}createDatastore(e){const t=uf(e.databaseInfo.databaseId),s=function(u){return new wN(u)}(e.databaseInfo);return function(u,h,d,p){return new RN(u,h,d,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,d){return new CN(s,o,u,h,d)}(this.localStore,this.datastore,e.asyncQueue,t=>mE(this.syncEngine,t,0),function(){return lE.D()?new lE:new yN}())}createSyncEngine(e,t){return function(o,u,h,d,p,g,E){const w=new $N(o,u,h,d,p,g);return E&&(w.ja=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Ae(o);ue(oa,"RemoteStore shutting down."),u.W_.add(5),await Du(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}dp.provider={build:()=>new dp};/**
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
 *//**
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
 */class bb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const ms="FirestoreClient";class lk{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Xt.UNAUTHENTICATED,this.clientId=mw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ue(ms,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ue(ms,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new as;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=eg(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Vm(i,e){i.asyncQueue.verifyOperationInProgress(),ue(ms,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await nb(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function gE(i,e){i.asyncQueue.verifyOperationInProgress();const t=await uk(i);ue(ms,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>cE(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>cE(e.remoteStore,o)),i._onlineComponents=e}async function uk(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ue(ms,"Using user provided OfflineComponentProvider");try{await Vm(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;wo("Error using user provided cache. Falling back to memory cache: "+t),await Vm(i,new jh)}}else ue(ms,"Using default OfflineComponentProvider"),await Vm(i,new ok(void 0));return i._offlineComponents}async function Ab(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ue(ms,"Using user provided OnlineComponentProvider"),await gE(i,i._uninitializedComponentsProvider._online)):(ue(ms,"Using default OnlineComponentProvider"),await gE(i,new dp))),i._onlineComponents}function ck(i){return Ab(i).then(e=>e.syncEngine)}async function mp(i){const e=await Ab(i),t=e.eventManager;return t.onListen=QN.bind(null,e.syncEngine),t.onUnlisten=WN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=YN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ZN.bind(null,e.syncEngine),t}function hk(i,e,t={}){const s=new as;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,d,p,g){const E=new bb({next:S=>{E.su(),h.enqueueAndForget(()=>db(u,w));const O=S.docs.has(d);!O&&S.fromCache?g.reject(new ce(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&S.fromCache&&p&&p.source==="server"?g.reject(new ce(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(S)},error:S=>g.reject(S)}),w=new mb(nf(d.path),E,{includeMetadataChanges:!0,Ta:!0});return fb(u,w)}(await mp(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function Sb(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const _E=new Map;/**
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
 */function Rb(i,e,t){if(!t)throw new ce(Z.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function fk(i,e,t,s){if(e===!0&&s===!0)throw new ce(Z.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function yE(i){if(!ge.isDocumentKey(i))throw new ce(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function vE(i){if(ge.isDocumentKey(i))throw new ce(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function ff(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te()}function Ii(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ce(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ff(i);throw new ce(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const Ib="firestore.googleapis.com",EE=!0;class TE{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ib,this.ssl=EE}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:EE;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<FO)throw new ce(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class df{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new TE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new TE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new TD;switch(s.type){case"firstParty":return new SD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=_E.get(t);s&&(ue("ComponentProvider","Removing Datastore"),_E.delete(t),s.terminate())}(this),Promise.resolve()}}function dk(i,e,t,s={}){var o;const u=(i=Ii(i,df))._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:i._getEmulatorOptions()}),d=`${e}:${t}`;u.host!==Ib&&u.host!==d&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},u),{host:d,ssl:!1,emulatorOptions:s});if(!ls(p,h)&&(i._setSettings(p),s.mockUserToken)){let g,E;if(typeof s.mockUserToken=="string")g=s.mockUserToken,E=Xt.MOCK_USER;else{g=$E(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new ce(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Xt(w)}i._authCredentials=new wD(new dw(g,E))}}/**
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
 */class _a{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _a(this.firestore,e,this._query)}}class on{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class os extends _a{constructor(e,t,s){super(e,t,nf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new ge(e))}withConverter(e){return new os(this.firestore,e,this._path)}}function rg(i,e,...t){if(i=mt(i),Rb("collection","path",e),i instanceof df){const s=Ze.fromString(e,...t);return vE(s),new os(i,null,s)}{if(!(i instanceof on||i instanceof os))throw new ce(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ze.fromString(e,...t));return vE(s),new os(i.firestore,null,s)}}function Po(i,e,...t){if(i=mt(i),arguments.length===1&&(e=mw.newId()),Rb("doc","path",e),i instanceof df){const s=Ze.fromString(e,...t);return yE(s),new on(i,null,new ge(s))}{if(!(i instanceof on||i instanceof os))throw new ce(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ze.fromString(e,...t));return yE(s),new on(i.firestore,i instanceof os?i.converter:null,new ge(s))}}/**
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
 */const wE="AsyncQueue";class bE{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new rb(this,"async_queue_retry"),this.bu=()=>{const s=xm();s&&ue(wE,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const t=xm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=xm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new as;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Mo(e))throw e;ue(wE,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(h){let d=h.message||"";return h.stack&&(d=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),d}(s);throw hr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.Su=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=Jp.createAndSchedule(this,e,t,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&Te()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function AE(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(i,["next","error","complete"])}class la extends df{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new bE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bE(e),this._firestoreClient=void 0,await e}}}function Cb(i,e){const t=typeof i=="object"?i:$h(),s=typeof i=="string"?i:Mh,o=gs(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=FE("firestore");u&&dk(o,...u)}return o}function sg(i){if(i._terminated)throw new ce(Z.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||mk(i),i._firestoreClient}function mk(i){var e,t,s;const o=i._freezeSettings(),u=function(d,p,g,E){return new zD(d,p,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Sb(E.experimentalLongPollingOptions),E.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new lk(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(i._componentsProvider))}/**
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
 */class Co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Co(Gt.fromBase64String(e))}catch(t){throw new ce(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Co(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ag{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Db{constructor(e){this._methodName=e}}/**
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
 */class og{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */class lg{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const pk=/^__.*__$/;class gk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new pa(e,this.data,this.fieldMask,t,this.fieldTransforms):new Iu(e,this.data,t,this.fieldTransforms)}}function Ob(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class ug{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ug(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Ku(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return qh(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Ob(this.Lu)&&pk.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class _k{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||uf(e)}ju(e,t,s,o=!1){return new ug({Lu:e,methodName:t,zu:s,path:Ft.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cg(i){const e=i._freezeSettings(),t=uf(i._databaseId);return new _k(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Nb(i,e,t,s,o,u={}){const h=i.ju(u.merge||u.mergeFields?2:0,e,t,o);xb("Data must be an object, but it was:",h,s);const d=kb(s,h);let p,g;if(u.merge)p=new Wn(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const w of u.mergeFields){const S=vk(e,w,t);if(!h.contains(S))throw new ce(Z.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Tk(E,S)||E.push(S)}p=new Wn(E),g=h.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,g=h.fieldTransforms;return new gk(new qn(d),p,g)}function yk(i,e,t,s=!1){return hg(t,i.ju(s?4:3,e))}function hg(i,e){if(Mb(i=mt(i)))return xb("Unsupported field value:",e,i),kb(i,e);if(i instanceof Db)return function(s,o){if(!Ob(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const d of s){let p=hg(d,o.Uu(h));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=mt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return lO(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Dt.fromDate(s);return{timestampValue:Lh(o.serializer,u)}}if(s instanceof Dt){const u=new Dt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Lh(o.serializer,u)}}if(s instanceof og)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Co)return{bytesValue:$w(o.serializer,s._byteString)};if(s instanceof on){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Fp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof lg)return function(h,d){return{mapValue:{fields:{[ww]:{stringValue:bw},[xh]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw d.Wu("VectorValues must only contain numeric values.");return Bp(d.serializer,g)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${ff(s)}`)}(i,e)}function kb(i,e){const t={};return gw(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):da(i,(s,o)=>{const u=hg(o,e.qu(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Mb(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Dt||i instanceof og||i instanceof Co||i instanceof on||i instanceof Db||i instanceof lg)}function xb(i,e,t){if(!Mb(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=ff(t);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function vk(i,e,t){if((e=mt(e))instanceof ag)return e._internalPath;if(typeof e=="string")return Vb(i,e);throw qh("Field path arguments must be of type string or ",i,!1,void 0,t)}const Ek=new RegExp("[~\\*/\\[\\]]");function Vb(i,e,t){if(e.search(Ek)>=0)throw qh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new ag(...e.split("."))._internalPath}catch{throw qh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function qh(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(u||h)&&(p+=" (found",u&&(p+=` in field ${s}`),h&&(p+=` in document ${o}`),p+=")"),new ce(Z.INVALID_ARGUMENT,d+i+p)}function Tk(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class Pb{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(fg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wk extends Pb{data(){return super.data()}}function fg(i,e){return typeof e=="string"?Vb(i,e):e instanceof ag?e._internalPath:e._delegate._internalPath}/**
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
 */function bk(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ce(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dg{}class Ub extends dg{}function Ak(i,e,...t){let s=[];e instanceof dg&&s.push(e),s=s.concat(t),function(u){const h=u.filter(p=>p instanceof pg).length,d=u.filter(p=>p instanceof mg).length;if(h>1||h>0&&d>0)throw new ce(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class mg extends Ub{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new mg(e,t,s)}_apply(e){const t=this._parse(e);return Lb(e._query,t),new _a(e.firestore,e.converter,ip(e._query,t))}_parse(e){const t=cg(e.firestore);return function(u,h,d,p,g,E,w){let S;if(g.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ce(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){RE(w,E);const P=[];for(const K of w)P.push(SE(p,u,K));S={arrayValue:{values:P}}}else S=SE(p,u,w)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||RE(w,E),S=yk(d,h,w,E==="in"||E==="not-in");return Tt.create(g,E,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class pg extends dg{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pg(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:ti.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const d=u.getFlattenedFilters();for(const p of d)Lb(h,p),h=ip(h,p)}(e._query,t),new _a(e.firestore,e.converter,ip(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gg extends Ub{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new gg(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new ce(Z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ce(Z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new yu(u,h)}(e._query,this._field,this._direction);return new _a(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new xo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function Sk(i,e="asc"){const t=e,s=fg("orderBy",i);return gg._create(s,t)}function SE(i,e,t){if(typeof(t=mt(t))=="string"){if(t==="")throw new ce(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nw(e)&&t.indexOf("/")!==-1)throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ze.fromString(t));if(!ge.isDocumentKey(s))throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return B0(i,new ge(s))}if(t instanceof on)return B0(i,t._key);throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ff(t)}.`)}function RE(i,e){if(!Array.isArray(i)||i.length===0)throw new ce(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lb(i,e){const t=function(o,u){for(const h of o)for(const d of h.getFlattenedFilters())if(u.indexOf(d.op)>=0)return d.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ce(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Rk{convertValue(e,t="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return da(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[xh].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>dt(h.doubleValue));return new lg(u)}convertGeoPoint(e){return new og(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=tf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(pu(e));default:return null}}convertTimestamp(e){const t=cs(e);return new Dt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ze.fromString(e);Ge(Jw(s));const o=new gu(s.get(1),s.get(3)),u=new ge(s.popFirst(5));return o.isEqual(t)||hr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function zb(i,e,t){let s;return s=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,s}/**
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
 */class nu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Bb extends Pb{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Eh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(fg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Eh extends Bb{data(e={}){return super.data(e)}}class Ik{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new nu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Eh(this._firestore,this._userDataWriter,s.key,s,new nu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(d=>{const p=new Eh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new nu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>u||d.type!==3).map(d=>{const p=new Eh(o._firestore,o._userDataWriter,d.doc.key,d.doc,new nu(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return d.type!==0&&(g=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),E=h.indexOf(d.doc.key)),{type:Ck(d.type),doc:p,oldIndex:g,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ck(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}/**
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
 */function jb(i){i=Ii(i,on);const e=Ii(i.firestore,la);return hk(sg(e),i._key).then(t=>Fb(e,i,t))}class qb extends Rk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Co(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new on(this.firestore,null,t)}}function Hb(i,e,t){i=Ii(i,on);const s=Ii(i.firestore,la),o=zb(i.converter,e,t);return _g(s,[Nb(cg(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Zn.none())])}function Dk(i){return _g(Ii(i.firestore,la),[new jp(i._key,Zn.none())])}function Ok(i,e){const t=Ii(i.firestore,la),s=Po(i),o=zb(i.converter,e);return _g(t,[Nb(cg(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Zn.exists(!1))]).then(()=>s)}function IE(i,...e){var t,s,o;i=mt(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||AE(e[h])||(u=e[h],h++);const d={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(AE(e[h])){const w=e[h];e[h]=(t=w.next)===null||t===void 0?void 0:t.bind(w),e[h+1]=(s=w.error)===null||s===void 0?void 0:s.bind(w),e[h+2]=(o=w.complete)===null||o===void 0?void 0:o.bind(w)}let p,g,E;if(i instanceof on)g=Ii(i.firestore,la),E=nf(i._key.path),p={next:w=>{e[h]&&e[h](Fb(g,i,w))},error:e[h+1],complete:e[h+2]};else{const w=Ii(i,_a);g=Ii(w.firestore,la),E=w._query;const S=new qb(g);p={next:O=>{e[h]&&e[h](new Ik(g,S,w,O))},error:e[h+1],complete:e[h+2]},bk(i._query)}return function(S,O,P,K){const U=new bb(K),G=new mb(O,U,P);return S.asyncQueue.enqueueAndForget(async()=>fb(await mp(S),G)),()=>{U.su(),S.asyncQueue.enqueueAndForget(async()=>db(await mp(S),G))}}(sg(g),E,d,p)}function _g(i,e){return function(s,o){const u=new as;return s.asyncQueue.enqueueAndForget(async()=>JN(await ck(s),o,u)),u.promise}(sg(i),e)}function Fb(i,e,t){const s=t.docs.get(e._key),o=new qb(i);return new Bb(i,o,e._key,s,new nu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){No=o})(ha),Jn(new Hn("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),d=new la(new bD(s.getProvider("auth-internal")),new RD(h,s.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ce(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gu(g.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),d._setSettings(u),d},"PUBLIC").setMultipleInstances(!0)),dn(D0,O0,e),dn(D0,O0,"esm2017")})();/**
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
 */const Gb="firebasestorage.googleapis.com",Kb="storageBucket",Nk=2*60*1e3,kk=10*60*1e3,Mk=1e3;/**
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
 */class st extends Fn{constructor(e,t,s=0){super(Pm(e),`Firebase Storage: ${t} (${Pm(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,st.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Je;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Je||(Je={}));function Pm(i){return"storage/"+i}function yg(){const i="An unknown error occurred, please check the error payload for server response.";return new st(Je.UNKNOWN,i)}function xk(i){return new st(Je.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")}function Vk(i){return new st(Je.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Pk(){const i="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new st(Je.UNAUTHENTICATED,i)}function Uk(){return new st(Je.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Lk(i){return new st(Je.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")}function $b(){return new st(Je.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Qb(){return new st(Je.CANCELED,"User canceled the upload/download.")}function zk(i){return new st(Je.INVALID_URL,"Invalid URL '"+i+"'.")}function Bk(i){return new st(Je.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function jk(){return new st(Je.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Kb+"' property when initializing the app?")}function Yb(){return new st(Je.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qk(){return new st(Je.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Hk(){return new st(Je.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Fk(i){return new st(Je.UNSUPPORTED_ENVIRONMENT,`${i} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pp(i){return new st(Je.INVALID_ARGUMENT,i)}function Xb(){return new st(Je.APP_DELETED,"The Firebase app was deleted.")}function Gk(i){return new st(Je.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function cu(i,e){return new st(Je.INVALID_FORMAT,"String does not match format '"+i+"': "+e)}function Ql(i){throw new st(Je.INTERNAL_ERROR,"Internal error: "+i)}/**
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
 */class bn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=bn.makeFromUrl(e,t)}catch{return new bn(e,"")}if(s.path==="")return s;throw Bk(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(se){se.path.charAt(se.path.length-1)==="/"&&(se.path_=se.path_.slice(0,-1))}const h="(/(.*))?$",d=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function g(se){se.path_=decodeURIComponent(se.path)}const E="v[A-Za-z0-9_]+",w=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",O=new RegExp(`^https?://${w}/${E}/b/${o}/o${S}`,"i"),P={bucket:1,path:3},K=t===Gb?"(?:storage.googleapis.com|storage.cloud.google.com)":t,U="([^?#]*)",G=new RegExp(`^https?://${K}/${o}/${U}`,"i"),Y=[{regex:d,indices:p,postModify:u},{regex:O,indices:P,postModify:g},{regex:G,indices:{bucket:1,path:2},postModify:g}];for(let se=0;se<Y.length;se++){const ae=Y[se],_e=ae.regex.exec(e);if(_e){const k=_e[ae.indices.bucket];let R=_e[ae.indices.path];R||(R=""),s=new bn(k,R),ae.postModify(s);break}}if(s==null)throw zk(e);return s}}class Kk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function $k(i,e,t){let s=1,o=null,u=null,h=!1,d=0;function p(){return d===2}let g=!1;function E(...U){g||(g=!0,e.apply(null,U))}function w(U){o=setTimeout(()=>{o=null,i(O,p())},U)}function S(){u&&clearTimeout(u)}function O(U,...G){if(g){S();return}if(U){S(),E.call(null,U,...G);return}if(p()||h){S(),E.call(null,U,...G);return}s<64&&(s*=2);let Y;d===1?(d=2,Y=0):Y=(s+Math.random())*1e3,w(Y)}let P=!1;function K(U){P||(P=!0,S(),!g&&(o!==null?(U||(d=2),clearTimeout(o),w(0)):U||(d=1)))}return w(0),u=setTimeout(()=>{h=!0,K(!0)},t),K}function Qk(i){i(!1)}/**
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
 */function Yk(i){return i!==void 0}function Xk(i){return typeof i=="function"}function Wk(i){return typeof i=="object"&&!Array.isArray(i)}function mf(i){return typeof i=="string"||i instanceof String}function CE(i){return vg()&&i instanceof Blob}function vg(){return typeof Blob<"u"}function DE(i,e,t,s){if(s<e)throw pp(`Invalid value for '${i}'. Expected ${e} or greater.`);if(s>t)throw pp(`Invalid value for '${i}'. Expected ${t} or less.`)}/**
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
 */function Nu(i,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${i}`}function Wb(i){const e=encodeURIComponent;let t="?";for(const s in i)if(i.hasOwnProperty(s)){const o=e(s)+"="+e(i[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var ta;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(ta||(ta={}));/**
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
 */function Zb(i,e){const t=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,u=e.indexOf(i)!==-1;return t||o||u}/**
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
 */class Zk{constructor(e,t,s,o,u,h,d,p,g,E,w,S=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=h,this.callback_=d,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=E,this.connectionFactory_=w,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,P)=>{this.resolve_=O,this.reject_=P,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new lh(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const h=d=>{const p=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&u.addUploadProgressListener(h),u.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(h),this.pendingConnection_=null;const d=u.getErrorCode()===ta.NO_ERROR,p=u.getStatus();if(!d||Zb(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===ta.ABORT;s(!1,new lh(!1,null,E));return}const g=this.successCodes_.indexOf(p)!==-1;s(!0,new lh(g,u))})},t=(s,o)=>{const u=this.resolve_,h=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());Yk(p)?u(p):u()}catch(p){h(p)}else if(d!==null){const p=yg();p.serverResponse=d.getErrorText(),this.errorCallback_?h(this.errorCallback_(d,p)):h(p)}else if(o.canceled){const p=this.appDelete_?Xb():Qb();h(p)}else{const p=$b();h(p)}};this.canceled_?t(!1,new lh(!1,null,!0)):this.backoffId_=$k(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Qk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lh{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Jk(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function eM(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tM(i,e){e&&(i["X-Firebase-GMPID"]=e)}function nM(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function iM(i,e,t,s,o,u,h=!0){const d=Wb(i.urlParams),p=i.url+d,g=Object.assign({},i.headers);return tM(g,e),Jk(g,t),eM(g,u),nM(g,s),new Zk(p,i.method,g,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,h)}/**
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
 */function rM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sM(...i){const e=rM();if(e!==void 0){const t=new e;for(let s=0;s<i.length;s++)t.append(i[s]);return t.getBlob()}else{if(vg())return new Blob(i);throw new st(Je.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function aM(i,e,t){return i.webkitSlice?i.webkitSlice(e,t):i.mozSlice?i.mozSlice(e,t):i.slice?i.slice(e,t):null}/**
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
 */function oM(i){if(typeof atob>"u")throw Fk("base-64");return atob(i)}/**
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
 */const wi={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Um{constructor(e,t){this.data=e,this.contentType=t||null}}function lM(i,e){switch(i){case wi.RAW:return new Um(Jb(e));case wi.BASE64:case wi.BASE64URL:return new Um(eA(i,e));case wi.DATA_URL:return new Um(cM(e),hM(e))}throw yg()}function Jb(i){const e=[];for(let t=0;t<i.length;t++){let s=i.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<i.length-1&&(i.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const u=s,h=i.charCodeAt(++t);s=65536|(u&1023)<<10|h&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function uM(i){let e;try{e=decodeURIComponent(i)}catch{throw cu(wi.DATA_URL,"Malformed data URL.")}return Jb(e)}function eA(i,e){switch(i){case wi.BASE64:{const o=e.indexOf("-")!==-1,u=e.indexOf("_")!==-1;if(o||u)throw cu(i,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case wi.BASE64URL:{const o=e.indexOf("+")!==-1,u=e.indexOf("/")!==-1;if(o||u)throw cu(i,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=oM(e)}catch(o){throw o.message.includes("polyfill")?o:cu(i,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class tA{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw cu(wi.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=fM(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function cM(i){const e=new tA(i);return e.base64?eA(wi.BASE64,e.rest):uM(e.rest)}function hM(i){return new tA(i).contentType}function fM(i,e){return i.length>=e.length?i.substring(i.length-e.length)===e:!1}/**
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
 */class ts{constructor(e,t){let s=0,o="";CE(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(CE(this.data_)){const s=this.data_,o=aM(s,e,t);return o===null?null:new ts(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new ts(s,!0)}}static getBlob(...e){if(vg()){const t=e.map(s=>s instanceof ts?s.data_:s);return new ts(sM.apply(null,t))}else{const t=e.map(h=>mf(h)?lM(wi.RAW,h).data:h.data_);let s=0;t.forEach(h=>{s+=h.byteLength});const o=new Uint8Array(s);let u=0;return t.forEach(h=>{for(let d=0;d<h.length;d++)o[u++]=h[d]}),new ts(o,!0)}}uploadData(){return this.data_}}/**
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
 */function nA(i){let e;try{e=JSON.parse(i)}catch{return null}return Wk(e)?e:null}/**
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
 */function dM(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function mM(i,e){const t=e.split("/").filter(s=>s.length>0).join("/");return i.length===0?t:i+"/"+t}function iA(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
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
 */function pM(i,e){return e}class an{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||pM}}let uh=null;function gM(i){return!mf(i)||i.length<2?i:iA(i)}function rA(){if(uh)return uh;const i=[];i.push(new an("bucket")),i.push(new an("generation")),i.push(new an("metageneration")),i.push(new an("name","fullPath",!0));function e(u,h){return gM(h)}const t=new an("name");t.xform=e,i.push(t);function s(u,h){return h!==void 0?Number(h):h}const o=new an("size");return o.xform=s,i.push(o),i.push(new an("timeCreated")),i.push(new an("updated")),i.push(new an("md5Hash",null,!0)),i.push(new an("cacheControl",null,!0)),i.push(new an("contentDisposition",null,!0)),i.push(new an("contentEncoding",null,!0)),i.push(new an("contentLanguage",null,!0)),i.push(new an("contentType",null,!0)),i.push(new an("metadata","customMetadata",!0)),uh=i,uh}function _M(i,e){function t(){const s=i.bucket,o=i.fullPath,u=new bn(s,o);return e._makeStorageReference(u)}Object.defineProperty(i,"ref",{get:t})}function yM(i,e,t){const s={};s.type="file";const o=t.length;for(let u=0;u<o;u++){const h=t[u];s[h.local]=h.xform(s,e[h.server])}return _M(s,i),s}function sA(i,e,t){const s=nA(e);return s===null?null:yM(i,s,t)}function vM(i,e,t,s){const o=nA(e);if(o===null||!mf(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const h=encodeURIComponent;return u.split(",").map(g=>{const E=i.bucket,w=i.fullPath,S="/b/"+h(E)+"/o/"+h(w),O=Nu(S,t,s),P=Wb({alt:"media",token:g});return O+P})[0]}function aA(i,e){const t={},s=e.length;for(let o=0;o<s;o++){const u=e[o];u.writable&&(t[u.server]=i[u.local])}return JSON.stringify(t)}class Uo{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function or(i){if(!i)throw yg()}function Eg(i,e){function t(s,o){const u=sA(i,o,e);return or(u!==null),u}return t}function EM(i,e){function t(s,o){const u=sA(i,o,e);return or(u!==null),vM(u,o,i.host,i._protocol)}return t}function ku(i){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=Uk():o=Pk():t.getStatus()===402?o=Vk(i.bucket):t.getStatus()===403?o=Lk(i.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function oA(i){const e=ku(i);function t(s,o){let u=e(s,o);return s.getStatus()===404&&(u=xk(i.path)),u.serverResponse=o.serverResponse,u}return t}function TM(i,e,t){const s=e.fullServerUrl(),o=Nu(s,i.host,i._protocol),u="GET",h=i.maxOperationRetryTime,d=new Uo(o,u,Eg(i,t),h);return d.errorHandler=oA(e),d}function wM(i,e,t){const s=e.fullServerUrl(),o=Nu(s,i.host,i._protocol),u="GET",h=i.maxOperationRetryTime,d=new Uo(o,u,EM(i,t),h);return d.errorHandler=oA(e),d}function bM(i,e){return i&&i.contentType||e&&e.type()||"application/octet-stream"}function lA(i,e,t){const s=Object.assign({},t);return s.fullPath=i.path,s.size=e.size(),s.contentType||(s.contentType=bM(null,e)),s}function AM(i,e,t,s,o){const u=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function d(){let Y="";for(let se=0;se<2;se++)Y=Y+Math.random().toString().slice(2);return Y}const p=d();h["Content-Type"]="multipart/related; boundary="+p;const g=lA(e,s,o),E=aA(g,t),w="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+g.contentType+`\r
\r
`,S=`\r
--`+p+"--",O=ts.getBlob(w,s,S);if(O===null)throw Yb();const P={name:g.fullPath},K=Nu(u,i.host,i._protocol),U="POST",G=i.maxUploadRetryTime,te=new Uo(K,U,Eg(i,t),G);return te.urlParams=P,te.headers=h,te.body=O.uploadData(),te.errorHandler=ku(e),te}class Hh{constructor(e,t,s,o){this.current=e,this.total=t,this.finalized=!!s,this.metadata=o||null}}function Tg(i,e){let t=null;try{t=i.getResponseHeader("X-Goog-Upload-Status")}catch{or(!1)}return or(!!t&&(e||["active"]).indexOf(t)!==-1),t}function SM(i,e,t,s,o){const u=e.bucketOnlyServerUrl(),h=lA(e,s,o),d={name:h.fullPath},p=Nu(u,i.host,i._protocol),g="POST",E={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":h.contentType,"Content-Type":"application/json; charset=utf-8"},w=aA(h,t),S=i.maxUploadRetryTime;function O(K){Tg(K);let U;try{U=K.getResponseHeader("X-Goog-Upload-URL")}catch{or(!1)}return or(mf(U)),U}const P=new Uo(p,g,O,S);return P.urlParams=d,P.headers=E,P.body=w,P.errorHandler=ku(e),P}function RM(i,e,t,s){const o={"X-Goog-Upload-Command":"query"};function u(g){const E=Tg(g,["active","final"]);let w=null;try{w=g.getResponseHeader("X-Goog-Upload-Size-Received")}catch{or(!1)}w||or(!1);const S=Number(w);return or(!isNaN(S)),new Hh(S,s.size(),E==="final")}const h="POST",d=i.maxUploadRetryTime,p=new Uo(t,h,u,d);return p.headers=o,p.errorHandler=ku(e),p}const OE=256*1024;function IM(i,e,t,s,o,u,h,d){const p=new Hh(0,0);if(h?(p.current=h.current,p.total=h.total):(p.current=0,p.total=s.size()),s.size()!==p.total)throw qk();const g=p.total-p.current;let E=g;o>0&&(E=Math.min(E,o));const w=p.current,S=w+E;let O="";E===0?O="finalize":g===E?O="upload, finalize":O="upload";const P={"X-Goog-Upload-Command":O,"X-Goog-Upload-Offset":`${p.current}`},K=s.slice(w,S);if(K===null)throw Yb();function U(se,ae){const _e=Tg(se,["active","final"]),k=p.current+E,R=s.size();let A;return _e==="final"?A=Eg(e,u)(se,ae):A=null,new Hh(k,R,_e==="final",A)}const G="POST",te=e.maxUploadRetryTime,Y=new Uo(t,G,U,te);return Y.headers=P,Y.body=K.uploadData(),Y.progressCallback=d||null,Y.errorHandler=ku(i),Y}const fn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Lm(i){switch(i){case"running":case"pausing":case"canceling":return fn.RUNNING;case"paused":return fn.PAUSED;case"success":return fn.SUCCESS;case"canceled":return fn.CANCELED;case"error":return fn.ERROR;default:return fn.ERROR}}/**
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
 */class CM{constructor(e,t,s){if(Xk(e)||t!=null||s!=null)this.next=e,this.error=t??void 0,this.complete=s??void 0;else{const u=e;this.next=u.next,this.error=u.error,this.complete=u.complete}}}/**
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
 */function lo(i){return(...e)=>{Promise.resolve().then(()=>i(...e))}}class DM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ta.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ta.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ta.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o){if(this.sent_)throw Ql("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const u in o)o.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,o[u].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ql("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ql("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ql("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ql("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class OM extends DM{initXhr(){this.xhr_.responseType="text"}}function mo(){return new OM}/**
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
 */class NM{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=rA(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=o=>{if(this._request=void 0,this._chunkMultiplier=1,o._codeEquals(Je.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const u=this.isExponentialBackoffExpired();if(Zb(o.status,[]))if(u)o=$b();else{this.sleepTime=Math.max(this.sleepTime*2,Mk),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=o,this._transition("error")}},this._metadataErrorHandler=o=>{this._request=void 0,o._codeEquals(Je.CANCELED)?this.completeTransitions_():(this._error=o,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((o,u)=>{this._resolve=o,this._reject=u,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=SM(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,mo,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._uploadUrl=u,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const o=RM(this._ref.storage,this._ref._location,e,this._blob),u=this._ref.storage._makeRequest(o,mo,t,s);this._request=u,u.getPromise().then(h=>{h=h,this._request=void 0,this._updateProgress(h.current),this._needToFetchStatus=!1,h.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=OE*this._chunkMultiplier,t=new Hh(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((o,u)=>{let h;try{h=IM(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(p){this._error=p,this._transition("error");return}const d=this._ref.storage._makeRequest(h,mo,o,u,!1);this._request=d,d.getPromise().then(p=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(p.current),p.finalized?(this._metadata=p.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){OE*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=TM(this._ref.storage,this._ref._location,this._mappings),o=this._ref.storage._makeRequest(s,mo,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._metadata=u,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=AM(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,mo,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._metadata=u,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Qb(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Lm(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,o){const u=new CM(t||void 0,s||void 0,o||void 0);return this._addObserver(u),()=>{this._removeObserver(u)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Lm(this._state)){case fn.SUCCESS:lo(this._resolve.bind(null,this.snapshot))();break;case fn.CANCELED:case fn.ERROR:const t=this._reject;lo(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Lm(this._state)){case fn.RUNNING:case fn.PAUSED:e.next&&lo(e.next.bind(e,this.snapshot))();break;case fn.SUCCESS:e.complete&&lo(e.complete.bind(e))();break;case fn.CANCELED:case fn.ERROR:e.error&&lo(e.error.bind(e,this._error))();break;default:e.error&&lo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ua{constructor(e,t){this._service=e,t instanceof bn?this._location=t:this._location=bn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ua(e,t)}get root(){const e=new bn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iA(this._location.path)}get storage(){return this._service}get parent(){const e=dM(this._location.path);if(e===null)return null;const t=new bn(this._location.bucket,e);return new ua(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Gk(e)}}function kM(i,e,t){return i._throwIfRoot("uploadBytesResumable"),new NM(i,new ts(e),t)}function MM(i){i._throwIfRoot("getDownloadURL");const e=wM(i.storage,i._location,rA());return i.storage.makeRequestWithTokens(e,mo).then(t=>{if(t===null)throw Hk();return t})}function xM(i,e){const t=mM(i._location.path,e),s=new bn(i._location.bucket,t);return new ua(i.storage,s)}/**
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
 */function VM(i){return/^[A-Za-z]+:\/\//.test(i)}function PM(i,e){return new ua(i,e)}function uA(i,e){if(i instanceof wg){const t=i;if(t._bucket==null)throw jk();const s=new ua(t,t._bucket);return e!=null?uA(s,e):s}else return e!==void 0?xM(i,e):i}function UM(i,e){if(e&&VM(e)){if(i instanceof wg)return PM(i,e);throw pp("To use ref(service, url), the first argument must be a Storage instance.")}else return uA(i,e)}function NE(i,e){const t=e==null?void 0:e[Kb];return t==null?null:bn.makeFromBucketSpec(t,i)}function LM(i,e,t,s={}){i.host=`${e}:${t}`,i._protocol="http";const{mockUserToken:o}=s;o&&(i._overrideAuthToken=typeof o=="string"?o:$E(o,i.app.options.projectId))}class wg{constructor(e,t,s,o,u){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._bucket=null,this._host=Gb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Nk,this._maxUploadRetryTime=kk,this._requests=new Set,o!=null?this._bucket=bn.makeFromBucketSpec(o,this._host):this._bucket=NE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bn.makeFromBucketSpec(this._url,e):this._bucket=NE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){DE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){DE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ua(this,e)}_makeRequest(e,t,s,o,u=!0){if(this._deleted)return new Kk(Xb());{const h=iM(e,this._appId,s,o,t,this._firebaseVersion,u);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const kE="@firebase/storage",ME="0.13.7";/**
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
 */const cA="storage";function zM(i,e,t){return i=mt(i),kM(i,e,t)}function BM(i){return i=mt(i),MM(i)}function jM(i,e){return i=mt(i),UM(i,e)}function qM(i=$h(),e){i=mt(i);const s=gs(i,cA).getImmediate({identifier:e}),o=FE("storage");return o&&HM(s,...o),s}function HM(i,e,t,s={}){LM(i,e,t,s)}function FM(i,{instanceIdentifier:e}){const t=i.getProvider("app").getImmediate(),s=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new wg(t,s,o,e,ha)}function GM(){Jn(new Hn(cA,FM,"PUBLIC").setMultipleInstances(!0)),dn(kE,ME,""),dn(kE,ME,"esm2017")}GM();const KM={apiKey:"AIzaSyDqvs9hShjoBZG5_iAyTuBJBgYWNzjr-oc",authDomain:"tome-artworks.firebaseapp.com",projectId:"tome-artworks",storageBucket:"tome-artworks.firebasestorage.app",messagingSenderId:"890971951408",appId:"1:890971951408:web:a9cf474d61a4e4b8e678f5",measurementId:"G-JG1KNRR6NW"},bg=eT(KM);_D(bg);const Di=ZC(bg),Do=Cb(bg),$M=qM(),hA="data:image/svg+xml,%3csvg%20width='57'%20height='13'%20viewBox='0%200%2057%2013'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M49.3354%2012V0.800049H56.8874V2.91205H51.6874V9.88805H56.9994V12H49.3354ZM50.4554%207.31205V5.26405H56.1194V7.31205H50.4554Z'%20fill='black'/%3e%3cpath%20d='M31.5266%2012V0.800049H33.7186L37.7826%207.42405L36.3586%207.40805L40.4866%200.800049H42.5986V12H40.2466V8.20805C40.2466%207.23738%2040.2679%206.36272%2040.3106%205.58405C40.3639%204.80538%2040.4493%204.03738%2040.5666%203.28005L40.8386%204.03205L37.5586%209.10405H36.4866L33.2866%204.06405L33.5426%203.28005C33.6706%203.99472%2033.7559%204.73072%2033.7986%205.48805C33.8519%206.24538%2033.8786%207.15205%2033.8786%208.20805V12H31.5266Z'%20fill='black'/%3e%3cpath%20d='M19.8341%2012.1601C19.0128%2012.1601%2018.2501%2012.0161%2017.5461%2011.7281C16.8528%2011.4401%2016.2501%2011.0401%2015.7381%2010.5281C15.2368%2010.0054%2014.8421%209.39205%2014.5541%208.68805C14.2768%207.98405%2014.1381%207.21072%2014.1381%206.36805C14.1381%205.53605%2014.2768%204.76805%2014.5541%204.06405C14.8421%203.36005%2015.2368%202.74672%2015.7381%202.22405C16.2501%201.70138%2016.8528%201.29605%2017.5461%201.00805C18.2501%200.72005%2019.0128%200.57605%2019.8341%200.57605C20.6555%200.57605%2021.4075%200.72005%2022.0901%201.00805C22.7835%201.29605%2023.3861%201.70138%2023.8981%202.22405C24.4101%202.74672%2024.8048%203.36538%2025.0821%204.08005C25.3701%204.78405%2025.5141%205.54672%2025.5141%206.36805C25.5141%207.20005%2025.3701%207.96805%2025.0821%208.67205C24.8048%209.37605%2024.4101%209.98938%2023.8981%2010.5121C23.3861%2011.0347%2022.7835%2011.4401%2022.0901%2011.7281C21.4075%2012.0161%2020.6555%2012.1601%2019.8341%2012.1601ZM19.8341%209.88805C20.3035%209.88805%2020.7355%209.80272%2021.1301%209.63205C21.5248%209.45072%2021.8661%209.20538%2022.1541%208.89605C22.4528%208.57605%2022.6821%208.20272%2022.8421%207.77605C23.0021%207.34938%2023.0821%206.88005%2023.0821%206.36805C23.0821%205.86672%2023.0021%205.40272%2022.8421%204.97605C22.6821%204.54938%2022.4528%204.17605%2022.1541%203.85605C21.8661%203.53605%2021.5248%203.29072%2021.1301%203.12005C20.7355%202.93872%2020.3035%202.84805%2019.8341%202.84805C19.3648%202.84805%2018.9275%202.93872%2018.5221%203.12005C18.1275%203.29072%2017.7808%203.53605%2017.4821%203.85605C17.1941%204.16538%2016.9701%204.53872%2016.8101%204.97605C16.6501%205.40272%2016.5701%205.87205%2016.5701%206.38405C16.5701%207.05605%2016.7088%207.65872%2016.9861%208.19205C17.2741%208.71472%2017.6581%209.13072%2018.1381%209.44005C18.6288%209.73872%2019.1941%209.88805%2019.8341%209.88805Z'%20fill='black'/%3e%3cpath%20d='M3.77601%2012V2.96005H0.544006V0.800049H9.53601V2.96005H6.17601V12H3.77601Z'%20fill='black'/%3e%3c/svg%3e";var Yl={},xE;function QM(){if(xE)return Yl;xE=1,Object.defineProperty(Yl,"__esModule",{value:!0}),Yl.parse=h,Yl.serialize=g;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function h(S,O){const P=new u,K=S.length;if(K<2)return P;const U=(O==null?void 0:O.decode)||E;let G=0;do{const te=S.indexOf("=",G);if(te===-1)break;const Y=S.indexOf(";",G),se=Y===-1?K:Y;if(te>se){G=S.lastIndexOf(";",te-1)+1;continue}const ae=d(S,G,te),_e=p(S,te,ae),k=S.slice(ae,_e);if(P[k]===void 0){let R=d(S,te+1,se),A=p(S,se,R);const C=U(S.slice(R,A));P[k]=C}G=se+1}while(G<K);return P}function d(S,O,P){do{const K=S.charCodeAt(O);if(K!==32&&K!==9)return O}while(++O<P);return P}function p(S,O,P){for(;O>P;){const K=S.charCodeAt(--O);if(K!==32&&K!==9)return O+1}return P}function g(S,O,P){const K=(P==null?void 0:P.encode)||encodeURIComponent;if(!i.test(S))throw new TypeError(`argument name is invalid: ${S}`);const U=K(O);if(!e.test(U))throw new TypeError(`argument val is invalid: ${O}`);let G=S+"="+U;if(!P)return G;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);G+="; Max-Age="+P.maxAge}if(P.domain){if(!t.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);G+="; Domain="+P.domain}if(P.path){if(!s.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);G+="; Path="+P.path}if(P.expires){if(!w(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);G+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(G+="; HttpOnly"),P.secure&&(G+="; Secure"),P.partitioned&&(G+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":G+="; Priority=Low";break;case"medium":G+="; Priority=Medium";break;case"high":G+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":G+="; SameSite=Strict";break;case"lax":G+="; SameSite=Lax";break;case"none":G+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return G}function E(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function w(S){return o.call(S)==="[object Date]"}return Yl}QM();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var VE="popstate";function YM(i={}){function e(s,o){let{pathname:u,search:h,hash:d}=s.location;return gp("",{pathname:u,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Tu(o)}return WM(e,t,null,i)}function et(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function ni(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XM(){return Math.random().toString(36).substring(2,10)}function PE(i,e){return{usr:i.state,key:i.key,idx:e}}function gp(i,e,t=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?Lo(e):e,state:t,key:e&&e.key||s||XM()}}function Tu({pathname:i="/",search:e="",hash:t=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(i+=t.charAt(0)==="#"?t:"#"+t),i}function Lo(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substring(t),i=i.substring(0,t));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function WM(i,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,d="POP",p=null,g=E();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function E(){return(h.state||{idx:null}).idx}function w(){d="POP";let U=E(),G=U==null?null:U-g;g=U,p&&p({action:d,location:K.location,delta:G})}function S(U,G){d="PUSH";let te=gp(K.location,U,G);g=E()+1;let Y=PE(te,g),se=K.createHref(te);try{h.pushState(Y,"",se)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;o.location.assign(se)}u&&p&&p({action:d,location:K.location,delta:1})}function O(U,G){d="REPLACE";let te=gp(K.location,U,G);g=E();let Y=PE(te,g),se=K.createHref(te);h.replaceState(Y,"",se),u&&p&&p({action:d,location:K.location,delta:0})}function P(U){let G=o.location.origin!=="null"?o.location.origin:o.location.href,te=typeof U=="string"?U:Tu(U);return te=te.replace(/ $/,"%20"),et(G,`No window.location.(origin|href) available to create URL for href: ${te}`),new URL(te,G)}let K={get action(){return d},get location(){return i(o,h)},listen(U){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(VE,w),p=U,()=>{o.removeEventListener(VE,w),p=null}},createHref(U){return e(o,U)},createURL:P,encodeLocation(U){let G=P(U);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:S,replace:O,go(U){return h.go(U)}};return K}function fA(i,e,t="/"){return ZM(i,e,t,!1)}function ZM(i,e,t,s){let o=typeof e=="string"?Lo(e):e,u=ps(o.pathname||"/",t);if(u==null)return null;let h=dA(i);JM(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let g=cx(u);d=lx(h[p],g,s)}return d}function dA(i,e=[],t=[],s=""){let o=(u,h,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};p.relativePath.startsWith("/")&&(et(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=lr([s,p.relativePath]),E=t.concat(p);u.children&&u.children.length>0&&(et(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),dA(u.children,e,E,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:ax(g,u.index),routesMeta:E})};return i.forEach((u,h)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))o(u,h);else for(let p of mA(u.path))o(u,h,p)}),e}function mA(i){let e=i.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=mA(s.join("/")),d=[];return d.push(...h.map(p=>p===""?u:[u,p].join("/"))),o&&d.push(...h),d.map(p=>i.startsWith("/")&&p===""?"/":p)}function JM(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:ox(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var ex=/^:[\w-]+$/,tx=3,nx=2,ix=1,rx=10,sx=-2,UE=i=>i==="*";function ax(i,e){let t=i.split("/"),s=t.length;return t.some(UE)&&(s+=sx),e&&(s+=nx),t.filter(o=>!UE(o)).reduce((o,u)=>o+(ex.test(u)?tx:u===""?ix:rx),s)}function ox(i,e){return i.length===e.length&&i.slice(0,-1).every((s,o)=>s===e[o])?i[i.length-1]-e[e.length-1]:0}function lx(i,e,t=!1){let{routesMeta:s}=i,o={},u="/",h=[];for(let d=0;d<s.length;++d){let p=s[d],g=d===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",w=Fh({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},E),S=p.route;if(!w&&g&&t&&!s[s.length-1].route.index&&(w=Fh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!w)return null;Object.assign(o,w.params),h.push({params:o,pathname:lr([u,w.pathname]),pathnameBase:mx(lr([u,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(u=lr([u,w.pathnameBase]))}return h}function Fh(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,s]=ux(i.path,i.caseSensitive,i.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((g,{paramName:E,isOptional:w},S)=>{if(E==="*"){let P=d[S]||"";h=u.slice(0,u.length-P.length).replace(/(.)\/+$/,"$1")}const O=d[S];return w&&!O?g[E]=void 0:g[E]=(O||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:i}}function ux(i,e=!1,t=!0){ni(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function cx(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ni(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function ps(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=i.charAt(t);return s&&s!=="/"?null:i.slice(t)||"/"}function hx(i,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof i=="string"?Lo(i):i;return{pathname:t?t.startsWith("/")?t:fx(t,e):e,search:px(s),hash:gx(o)}}function fx(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function zm(i,e,t,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dx(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ag(i){let e=dx(i);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Sg(i,e,t,s=!1){let o;typeof i=="string"?o=Lo(i):(o={...i},et(!o.pathname||!o.pathname.includes("?"),zm("?","pathname","search",o)),et(!o.pathname||!o.pathname.includes("#"),zm("#","pathname","hash",o)),et(!o.search||!o.search.includes("#"),zm("#","search","hash",o)));let u=i===""||o.pathname==="",h=u?"/":o.pathname,d;if(h==null)d=t;else{let w=e.length-1;if(!s&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),w-=1;o.pathname=S.join("/")}d=w>=0?e[w]:"/"}let p=hx(o,d),g=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||E)&&(p.pathname+="/"),p}var lr=i=>i.join("/").replace(/\/\/+/g,"/"),mx=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),px=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,gx=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function _x(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var pA=["POST","PUT","PATCH","DELETE"];new Set(pA);var yx=["GET",...pA];new Set(yx);var zo=H.createContext(null);zo.displayName="DataRouter";var pf=H.createContext(null);pf.displayName="DataRouterState";var gA=H.createContext({isTransitioning:!1});gA.displayName="ViewTransition";var vx=H.createContext(new Map);vx.displayName="Fetchers";var Ex=H.createContext(null);Ex.displayName="Await";var ii=H.createContext(null);ii.displayName="Navigation";var Mu=H.createContext(null);Mu.displayName="Location";var ri=H.createContext({outlet:null,matches:[],isDataRoute:!1});ri.displayName="Route";var Rg=H.createContext(null);Rg.displayName="RouteError";function Tx(i,{relative:e}={}){et(Bo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=H.useContext(ii),{hash:o,pathname:u,search:h}=xu(i,{relative:e}),d=u;return t!=="/"&&(d=u==="/"?t:lr([t,u])),s.createHref({pathname:d,search:h,hash:o})}function Bo(){return H.useContext(Mu)!=null}function vs(){return et(Bo(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Mu).location}var _A="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yA(i){H.useContext(ii).static||H.useLayoutEffect(i)}function Ig(){let{isDataRoute:i}=H.useContext(ri);return i?xx():wx()}function wx(){et(Bo(),"useNavigate() may be used only in the context of a <Router> component.");let i=H.useContext(zo),{basename:e,navigator:t}=H.useContext(ii),{matches:s}=H.useContext(ri),{pathname:o}=vs(),u=JSON.stringify(Ag(s)),h=H.useRef(!1);return yA(()=>{h.current=!0}),H.useCallback((p,g={})=>{if(ni(h.current,_A),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=Sg(p,JSON.parse(u),o,g.relative==="path");i==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:lr([e,E.pathname])),(g.replace?t.replace:t.push)(E,g.state,g)},[e,t,u,o,i])}H.createContext(null);function Cg(){let{matches:i}=H.useContext(ri),e=i[i.length-1];return e?e.params:{}}function xu(i,{relative:e}={}){let{matches:t}=H.useContext(ri),{pathname:s}=vs(),o=JSON.stringify(Ag(t));return H.useMemo(()=>Sg(i,JSON.parse(o),s,e==="path"),[i,o,s,e])}function bx(i,e){return vA(i,e)}function vA(i,e,t,s){var te;et(Bo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=H.useContext(ii),{matches:h}=H.useContext(ri),d=h[h.length-1],p=d?d.params:{},g=d?d.pathname:"/",E=d?d.pathnameBase:"/",w=d&&d.route;{let Y=w&&w.path||"";EA(g,!w||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let S=vs(),O;if(e){let Y=typeof e=="string"?Lo(e):e;et(E==="/"||((te=Y.pathname)==null?void 0:te.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),O=Y}else O=S;let P=O.pathname||"/",K=P;if(E!=="/"){let Y=E.replace(/^\//,"").split("/");K="/"+P.replace(/^\//,"").split("/").slice(Y.length).join("/")}let U=!u&&t&&t.matches&&t.matches.length>0?t.matches:fA(i,{pathname:K});ni(w||U!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),ni(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Cx(U&&U.map(Y=>Object.assign({},Y,{params:Object.assign({},p,Y.params),pathname:lr([E,o.encodeLocation?o.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?E:lr([E,o.encodeLocation?o.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),h,t,s);return e&&G?H.createElement(Mu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},G):G}function Ax(){let i=Mx(),e=_x(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",i),h=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:u},"ErrorBoundary")," or"," ",H.createElement("code",{style:u},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,h)}var Sx=H.createElement(Ax,null),Rx=class extends H.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?H.createElement(ri.Provider,{value:this.props.routeContext},H.createElement(Rg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ix({routeContext:i,match:e,children:t}){let s=H.useContext(zo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(ri.Provider,{value:i},t)}function Cx(i,e=[],t=null,s=null){if(i==null){if(!t)return null;if(t.errors)i=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let o=i,u=t==null?void 0:t.errors;if(u!=null){let p=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);et(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let g=o[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:E,errors:w}=t,S=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!w||w[g.route.id]===void 0);if(g.route.lazy||S){h=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,g,E)=>{let w,S=!1,O=null,P=null;t&&(w=u&&g.route.id?u[g.route.id]:void 0,O=g.route.errorElement||Sx,h&&(d<0&&E===0?(EA("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,P=null):d===E&&(S=!0,P=g.route.hydrateFallbackElement||null)));let K=e.concat(o.slice(0,E+1)),U=()=>{let G;return w?G=O:S?G=P:g.route.Component?G=H.createElement(g.route.Component,null):g.route.element?G=g.route.element:G=p,H.createElement(Ix,{match:g,routeContext:{outlet:p,matches:K,isDataRoute:t!=null},children:G})};return t&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?H.createElement(Rx,{location:t.location,revalidation:t.revalidation,component:O,error:w,children:U(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):U()},null)}function Dg(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dx(i){let e=H.useContext(zo);return et(e,Dg(i)),e}function Ox(i){let e=H.useContext(pf);return et(e,Dg(i)),e}function Nx(i){let e=H.useContext(ri);return et(e,Dg(i)),e}function Og(i){let e=Nx(i),t=e.matches[e.matches.length-1];return et(t.route.id,`${i} can only be used on routes that contain a unique "id"`),t.route.id}function kx(){return Og("useRouteId")}function Mx(){var s;let i=H.useContext(Rg),e=Ox("useRouteError"),t=Og("useRouteError");return i!==void 0?i:(s=e.errors)==null?void 0:s[t]}function xx(){let{router:i}=Dx("useNavigate"),e=Og("useNavigate"),t=H.useRef(!1);return yA(()=>{t.current=!0}),H.useCallback(async(o,u={})=>{ni(t.current,_A),t.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...u}))},[i,e])}var LE={};function EA(i,e,t){!e&&!LE[i]&&(LE[i]=!0,ni(!1,t))}H.memo(Vx);function Vx({routes:i,future:e,state:t}){return vA(i,void 0,t,e)}function Px({to:i,replace:e,state:t,relative:s}){et(Bo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=H.useContext(ii);ni(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=H.useContext(ri),{pathname:h}=vs(),d=Ig(),p=Sg(i,Ag(u),h,s==="path"),g=JSON.stringify(p);return H.useEffect(()=>{d(JSON.parse(g),{replace:e,state:t,relative:s})},[d,g,s,e,t]),null}function iu(i){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ux({basename:i="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){et(!Bo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),d=H.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=Lo(t));let{pathname:p="/",search:g="",hash:E="",state:w=null,key:S="default"}=t,O=H.useMemo(()=>{let P=ps(p,h);return P==null?null:{location:{pathname:P,search:g,hash:E,state:w,key:S},navigationType:s}},[h,p,g,E,w,S,s]);return ni(O!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:H.createElement(ii.Provider,{value:d},H.createElement(Mu.Provider,{children:e,value:O}))}function Lx({children:i,location:e}){return bx(_p(i),e)}function _p(i,e=[]){let t=[];return H.Children.forEach(i,(s,o)=>{if(!H.isValidElement(s))return;let u=[...e,o];if(s.type===H.Fragment){t.push.apply(t,_p(s.props.children,u));return}et(s.type===iu,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=_p(s.props.children,u)),t.push(h)}),t}var Th="get",wh="application/x-www-form-urlencoded";function gf(i){return i!=null&&typeof i.tagName=="string"}function zx(i){return gf(i)&&i.tagName.toLowerCase()==="button"}function Bx(i){return gf(i)&&i.tagName.toLowerCase()==="form"}function jx(i){return gf(i)&&i.tagName.toLowerCase()==="input"}function qx(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Hx(i,e){return i.button===0&&(!e||e==="_self")&&!qx(i)}var ch=null;function Fx(){if(ch===null)try{new FormData(document.createElement("form"),0),ch=!1}catch{ch=!0}return ch}var Gx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bm(i){return i!=null&&!Gx.has(i)?(ni(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wh}"`),null):i}function Kx(i,e){let t,s,o,u,h;if(Bx(i)){let d=i.getAttribute("action");s=d?ps(d,e):null,t=i.getAttribute("method")||Th,o=Bm(i.getAttribute("enctype"))||wh,u=new FormData(i)}else if(zx(i)||jx(i)&&(i.type==="submit"||i.type==="image")){let d=i.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||d.getAttribute("action");if(s=p?ps(p,e):null,t=i.getAttribute("formmethod")||d.getAttribute("method")||Th,o=Bm(i.getAttribute("formenctype"))||Bm(d.getAttribute("enctype"))||wh,u=new FormData(d,i),!Fx()){let{name:g,type:E,value:w}=i;if(E==="image"){let S=g?`${g}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else g&&u.append(g,w)}}else{if(gf(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Th,s=null,o=wh,h=i}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}function Ng(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function $x(i,e){if(i.id in e)return e[i.id];try{let t=await import(i.module);return e[i.id]=t,t}catch(t){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qx(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Yx(i,e,t){let s=await Promise.all(i.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await $x(u,t);return h.links?h.links():[]}return[]}));return Jx(s.flat(1).filter(Qx).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function zE(i,e,t,s,o,u){let h=(p,g)=>t[g]?p.route.id!==t[g].route.id:!0,d=(p,g)=>{var E;return t[g].pathname!==p.pathname||((E=t[g].route.path)==null?void 0:E.endsWith("*"))&&t[g].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,g)=>h(p,g)||d(p,g)):u==="data"?e.filter((p,g)=>{var w;let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((w=t[0])==null?void 0:w.params)||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Xx(i,e,{includeHydrateFallback:t}={}){return Wx(i.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function Wx(i){return[...new Set(i)]}function Zx(i){let e={},t=Object.keys(i).sort();for(let s of t)e[s]=i[s];return e}function Jx(i,e){let t=new Set;return new Set(e),i.reduce((s,o)=>{let u=JSON.stringify(Zx(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function eV(i){let e=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function tV(){let i=H.useContext(zo);return Ng(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function nV(){let i=H.useContext(pf);return Ng(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var kg=H.createContext(void 0);kg.displayName="FrameworkContext";function TA(){let i=H.useContext(kg);return Ng(i,"You must render this element inside a <HydratedRouter> element"),i}function iV(i,e){let t=H.useContext(kg),[s,o]=H.useState(!1),[u,h]=H.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:E,onTouchStart:w}=e,S=H.useRef(null);H.useEffect(()=>{if(i==="render"&&h(!0),i==="viewport"){let K=G=>{G.forEach(te=>{h(te.isIntersecting)})},U=new IntersectionObserver(K,{threshold:.5});return S.current&&U.observe(S.current),()=>{U.disconnect()}}},[i]),H.useEffect(()=>{if(s){let K=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(K)}}},[s]);let O=()=>{o(!0)},P=()=>{o(!1),h(!1)};return t?i!=="intent"?[u,S,{}]:[u,S,{onFocus:Xl(d,O),onBlur:Xl(p,P),onMouseEnter:Xl(g,O),onMouseLeave:Xl(E,P),onTouchStart:Xl(w,O)}]:[!1,S,{}]}function Xl(i,e){return t=>{i&&i(t),t.defaultPrevented||e(t)}}function rV({page:i,...e}){let{router:t}=tV(),s=H.useMemo(()=>fA(t.routes,i,t.basename),[t.routes,i,t.basename]);return s?H.createElement(aV,{page:i,matches:s,...e}):null}function sV(i){let{manifest:e,routeModules:t}=TA(),[s,o]=H.useState([]);return H.useEffect(()=>{let u=!1;return Yx(i,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[i,e,t]),s}function aV({page:i,matches:e,...t}){let s=vs(),{manifest:o,routeModules:u}=TA(),{loaderData:h,matches:d}=nV(),p=H.useMemo(()=>zE(i,e,d,o,s,"data"),[i,e,d,o,s]),g=H.useMemo(()=>zE(i,e,d,o,s,"assets"),[i,e,d,o,s]),E=H.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let O=new Set,P=!1;if(e.forEach(U=>{var te;let G=o.routes[U.route.id];!G||!G.hasLoader||(!p.some(Y=>Y.route.id===U.route.id)&&U.route.id in h&&((te=u[U.route.id])!=null&&te.shouldRevalidate)||G.hasClientLoader?P=!0:O.add(U.route.id))}),O.size===0)return[];let K=eV(i);return P&&O.size>0&&K.searchParams.set("_routes",e.filter(U=>O.has(U.route.id)).map(U=>U.route.id).join(",")),[K.pathname+K.search]},[h,s,o,p,e,i,u]),w=H.useMemo(()=>Xx(g,o),[g,o]),S=sV(g);return H.createElement(H.Fragment,null,E.map(O=>H.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...t})),w.map(O=>H.createElement("link",{key:O,rel:"modulepreload",href:O,...t})),S.map(({key:O,link:P})=>H.createElement("link",{key:O,...P})))}function oV(...i){return e=>{i.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var wA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wA&&(window.__reactRouterVersion="7.2.0")}catch{}function lV({basename:i,children:e,window:t}){let s=H.useRef();s.current==null&&(s.current=YM({window:t,v5Compat:!0}));let o=s.current,[u,h]=H.useState({action:o.action,location:o.location}),d=H.useCallback(p=>{H.startTransition(()=>h(p))},[h]);return H.useLayoutEffect(()=>o.listen(d),[o,d]),H.createElement(Ux,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:o})}var bA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,To=H.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:d,target:p,to:g,preventScrollReset:E,viewTransition:w,...S},O){let{basename:P}=H.useContext(ii),K=typeof g=="string"&&bA.test(g),U,G=!1;if(typeof g=="string"&&K&&(U=g,wA))try{let A=new URL(window.location.href),C=g.startsWith("//")?new URL(A.protocol+g):new URL(g),x=ps(C.pathname,P);C.origin===A.origin&&x!=null?g=x+C.search+C.hash:G=!0}catch{ni(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let te=Tx(g,{relative:o}),[Y,se,ae]=iV(s,S),_e=fV(g,{replace:h,state:d,target:p,preventScrollReset:E,relative:o,viewTransition:w});function k(A){e&&e(A),A.defaultPrevented||_e(A)}let R=H.createElement("a",{...S,...ae,href:U||te,onClick:G||u?e:k,ref:oV(O,se),target:p,"data-discover":!K&&t==="render"?"true":void 0});return Y&&!K?H.createElement(H.Fragment,null,R,H.createElement(rV,{page:te})):R});To.displayName="Link";var uV=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:d,children:p,...g},E){let w=xu(h,{relative:g.relative}),S=vs(),O=H.useContext(pf),{navigator:P,basename:K}=H.useContext(ii),U=O!=null&&_V(w)&&d===!0,G=P.encodeLocation?P.encodeLocation(w).pathname:w.pathname,te=S.pathname,Y=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;t||(te=te.toLowerCase(),Y=Y?Y.toLowerCase():null,G=G.toLowerCase()),Y&&K&&(Y=ps(Y,K)||Y);const se=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let ae=te===G||!o&&te.startsWith(G)&&te.charAt(se)==="/",_e=Y!=null&&(Y===G||!o&&Y.startsWith(G)&&Y.charAt(G.length)==="/"),k={isActive:ae,isPending:_e,isTransitioning:U},R=ae?e:void 0,A;typeof s=="function"?A=s(k):A=[s,ae?"active":null,_e?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(k):u;return H.createElement(To,{...g,"aria-current":R,className:A,ref:E,style:C,to:h,viewTransition:d},typeof p=="function"?p(k):p)});uV.displayName="NavLink";var cV=H.forwardRef(({discover:i="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=Th,action:d,onSubmit:p,relative:g,preventScrollReset:E,viewTransition:w,...S},O)=>{let P=pV(),K=gV(d,{relative:g}),U=h.toLowerCase()==="get"?"get":"post",G=typeof d=="string"&&bA.test(d),te=Y=>{if(p&&p(Y),Y.defaultPrevented)return;Y.preventDefault();let se=Y.nativeEvent.submitter,ae=(se==null?void 0:se.getAttribute("formmethod"))||h;P(se||Y.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:o,state:u,relative:g,preventScrollReset:E,viewTransition:w})};return H.createElement("form",{ref:O,method:U,action:K,onSubmit:s?p:te,...S,"data-discover":!G&&i==="render"?"true":void 0})});cV.displayName="Form";function hV(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function AA(i){let e=H.useContext(zo);return et(e,hV(i)),e}function fV(i,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let d=Ig(),p=vs(),g=xu(i,{relative:u});return H.useCallback(E=>{if(Hx(E,e)){E.preventDefault();let w=t!==void 0?t:Tu(p)===Tu(g);d(i,{replace:w,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[p,d,g,t,s,e,i,o,u,h])}var dV=0,mV=()=>`__${String(++dV)}__`;function pV(){let{router:i}=AA("useSubmit"),{basename:e}=H.useContext(ii),t=kx();return H.useCallback(async(s,o={})=>{let{action:u,method:h,encType:d,formData:p,body:g}=Kx(s,e);if(o.navigate===!1){let E=o.fetcherKey||mV();await i.fetch(E,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||h,formEncType:o.encType||d,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||h,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,t])}function gV(i,{relative:e}={}){let{basename:t}=H.useContext(ii),s=H.useContext(ri);et(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...xu(i||".",{relative:e})},h=vs();if(i==null){u.search=h.search;let d=new URLSearchParams(u.search),p=d.getAll("index");if(p.some(E=>E==="")){d.delete("index"),p.filter(w=>w).forEach(w=>d.append("index",w));let E=d.toString();u.search=E?`?${E}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:lr([t,u.pathname])),Tu(u)}function _V(i,e={}){let t=H.useContext(gA);et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=AA("useViewTransitionState"),o=xu(i,{relative:e.relative});if(!t.isTransitioning)return!1;let u=ps(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=ps(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Fh(o.pathname,h)!=null||Fh(o.pathname,u)!=null}new TextEncoder;function SA(){const[i,e]=H.useState(null);H.useEffect(()=>{const s=CT(Di,o=>{e(o)});return()=>s()},[]);const t=()=>{Di.signOut().then(()=>{console.log("User signed out")}).catch(s=>{console.log("Error with signout: ",s.message)})};return J.jsxs("div",{className:"flex flex-row justify-between border-b border-gray-300 items-center p-4 pl-6 pr-6 w-full m-0 relative top-0 left-0 bg-white",children:[J.jsx(To,{to:"/",children:J.jsx("img",{src:hA,alt:"Tome Logo",className:"sm"})}),i?J.jsxs("div",{className:"flex flex-row gap-2",children:[J.jsx("p",{children:i.email}),J.jsx("button",{onClick:t,children:"Sign out"})]}):J.jsx("p",{children:"Sign in"})]})}/*! *****************************************************************************
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
***************************************************************************** */function yV(i,e,t,s){function o(u){return u instanceof t?u:new t(function(h){h(u)})}return new(t||(t=Promise))(function(u,h){function d(E){try{g(s.next(E))}catch(w){h(w)}}function p(E){try{g(s.throw(E))}catch(w){h(w)}}function g(E){E.done?u(E.value):o(E.value).then(d,p)}g((s=s.apply(i,[])).next())})}function vV(i,e){var t={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},s,o,u,h;return h={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function d(g){return function(E){return p([g,E])}}function p(g){if(s)throw new TypeError("Generator is already executing.");for(;t;)try{if(s=1,o&&(u=g[0]&2?o.return:g[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,g[1])).done)return u;switch(o=0,u&&(g=[g[0]&2,u.value]),g[0]){case 0:case 1:u=g;break;case 4:return t.label++,{value:g[1],done:!1};case 5:t.label++,o=g[1],g=[0];continue;case 7:g=t.ops.pop(),t.trys.pop();continue;default:if(u=t.trys,!(u=u.length>0&&u[u.length-1])&&(g[0]===6||g[0]===2)){t=0;continue}if(g[0]===3&&(!u||g[1]>u[0]&&g[1]<u[3])){t.label=g[1];break}if(g[0]===6&&t.label<u[1]){t.label=u[1],u=g;break}if(u&&t.label<u[2]){t.label=u[2],t.ops.push(g);break}u[2]&&t.ops.pop(),t.trys.pop();continue}g=e.call(i,t)}catch(E){g=[6,E],o=0}finally{s=u=0}if(g[0]&5)throw g[1];return{value:g[0]?g[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var go=function(){return go=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},go.apply(this,arguments)},RA=function(i){return{loading:i==null,value:i}},EV=function(){return function(i,e){switch(e.type){case"error":return go(go({},i),{error:e.error,loading:!1,value:void 0});case"reset":return RA(e.defaultValue);case"value":return go(go({},i),{error:void 0,loading:!1,value:e.value});default:return i}}},TV=function(i){var e=i?i():void 0,t=H.useReducer(EV(),RA(e)),s=t[0],o=t[1],u=H.useCallback(function(){var p=i?i():void 0;o({type:"reset",defaultValue:p})},[i]),h=H.useCallback(function(p){o({type:"error",error:p})},[]),d=H.useCallback(function(p){o({type:"value",value:p})},[]);return H.useMemo(function(){return{error:s.error,loading:s.loading,reset:u,setError:h,setValue:d,value:s.value}},[s.error,s.loading,u,h,d,s.value])},_f=function(i,e){var t=TV(function(){return i.currentUser}),s=t.error,o=t.loading,u=t.setError,h=t.setValue,d=t.value;return H.useEffect(function(){var p=CT(i,function(g){return yV(void 0,void 0,void 0,function(){var E;return vV(this,function(w){switch(w.label){case 0:return[3,4];case 1:return w.trys.push([1,3,,4]),[4,e.onUserChanged(g)];case 2:return w.sent(),[3,4];case 3:return E=w.sent(),u(E),[3,4];case 4:return h(g),[2]}})})},u);return function(){p()}},[i]),[d,o,s]};const wV=async(i,e,t)=>{try{await Dk(Po(Do,"accounts",e.uid,"artworks",i)),t(s=>s.filter(o=>o.id!==i)),console.log("Deleted artwork:",i)}catch(s){console.error("Error with the delete:",s)}};function bV(){const[i]=_f(Di),[e,t]=H.useState([]),[s,o]=H.useState(!0),[u,h]=H.useState(!1);return H.useEffect(()=>{if(!i){console.log("No authenticated user. Skipping Firestore request.");return}(async()=>{try{const p=Ak(rg(Do,"accounts",i.uid,"artworks"),Sk("createdAt"));IE(p,E=>{t(E.docs)});const g=IE(p,E=>{t(E.docs)});return()=>g()}catch(p){console.log("An error happened:",p),h(!0)}finally{o(!1)}})()},[i]),s?J.jsx("h2",{children:"Loading..."}):u?J.jsx("h2",{children:"There was an error. Peter wrote this"}):J.jsx(J.Fragment,{children:J.jsxs("div",{className:"grid grid-rows-auto gap-4 w-full items-center px-12 pt-4",children:[J.jsxs("div",{className:"border border-gray-200 bg-gray-50 rounded flex space-x-between w-full p-4 items-center",children:[J.jsxs("p",{className:"flex flex-grow-1 ",children:["You have ",e.length," ",e.length===1?"artwork":"artworks"," in Tome."]}),J.jsx(To,{to:"/new",children:J.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Add an artwork"})})]}),J.jsx("div",{className:"grid grid-cols-3 gap-4 w-full",children:e.map(d=>J.jsxs("div",{className:"flex flex-col gap-2 items-center border border-gray-300 w-full rounded m-auto",children:[J.jsx(To,{to:`/artwork/${d.id}`,children:J.jsxs("div",{className:"w-full flex flex-col flex-shrink-0",children:[J.jsx("div",{className:"w-full h-60 flex-shrink-0",children:J.jsx("img",{src:d.data().image,alt:d.data().title,className:"w-full h-full object-cover"})}),d.data().title]})}),J.jsxs("div",{className:"w-full flex flex-row gap-2 p-2",children:[J.jsx(To,{to:`/edit/${d.id}`,children:J.jsx("button",{className:"border border-gray-400 hover:bg-blue-200 text-gray-800 py-1 px-2 rounded focus:outline-none focus:shadow-outline",children:"Edit"})}),J.jsx("button",{onClick:()=>wV(d.id),className:"border border-gray-400 hover:bg-blue-200 text-gray-800 py-1 px-2 rounded focus:outline-none focus:shadow-outline",children:"Delete"})]})]},d.id))})]})})}function AV(){return J.jsxs("div",{className:"flex flex-col min-h-screen w-full p-0",children:[J.jsx(SA,{}),J.jsx("div",{className:"flex-grow",children:J.jsx(bV,{})})]})}function SV(){var p;const i=Di.currentUser,{id:e}=Cg(),[t,s]=H.useState(null),[o,u]=H.useState(!0),[h,d]=H.useState(!1);return H.useEffect(()=>{if(!i){console.log("No authenticated user. Skipping Firestore request.");return}(async()=>{try{const E=Po(Do,"accounts",i.uid,"artworks",e),w=await jb(E);w.exists()?s(w.data()):d(!0),w.exists()?s(w.data()):(console.log("Didn't find that artwork"),d(!0))}catch(E){console.error("Updated error fetching document:",E),d(!0)}finally{u(!1)}})()},[e,i]),console.log(t),J.jsx(J.Fragment,{children:o?J.jsx("p",{children:"Loading..."}):h?J.jsx("p",{children:"There was a problem loading the artwork."}):t?J.jsxs("div",{className:"flex flex-col min-h-screen w-full p-0",children:[J.jsx(SA,{}),J.jsxs("div",{className:"flex flex-row gap-8 h-full p-20",children:[J.jsx("div",{className:"",children:J.jsx("img",{src:t.image,alt:`An artwork titled ${t.title} done in ${t.medium}`,className:"object-contain h-full"})}),J.jsxs("div",{className:"flex flex-col gap-4 w-1/2",children:[J.jsx("h1",{className:"text-xl",children:t.title}),J.jsx("p",{children:t.medium}),J.jsx("p",{children:`Added ${(p=t.createdAt)==null?void 0:p.toDate().toLocaleString()}`})]})]})]}):J.jsx("p",{children:"Artwork not found"})})}function IA({existingData:i}){const e=Di.currentUser,{id:t}=Cg(),s=Ig(),[o,u]=H.useState(null),[h,d]=H.useState(null),[p,g]=H.useState(""),[E,w]=H.useState(""),[S,O]=H.useState(!1);H.useEffect(()=>{i&&(g(i.title||""),w(i.medium||""),d(i.image||""))},[i]);function P(U){const G=U.target.files[0];G&&(u(G),d(URL.createObjectURL(G)))}const K=async U=>{U.preventDefault();try{let G=h;if(o){O(!0);const Y=jM($M,`artworks/${e.uid}/${o.name}`),se=zM(Y,o);await new Promise((ae,_e)=>{se.on("state_changed",null,k=>_e(k),async()=>{G=await BM(se.snapshot.ref),d(G),ae()})})}const te={title:p,medium:E,image:G,updatedAt:new Date};if(t)await Hb(Po(Do,"accounts",e.uid,"artworks",t),te,{merge:!0}),console.log("Document updated:",t);else{const Y=await Ok(rg(Do,"accounts",e.uid,"artworks"),{...te,createdAt:new Date});console.log("Doc written, id:",Y.id),g(""),w(""),u(null),d(null)}s("/")}catch(G){console.error("There was a problem:",G)}finally{O(!1)}};return J.jsx(J.Fragment,{children:J.jsx("div",{className:"flex items-center justify-center bg-gray-100 w-full h-svh",children:J.jsx("div",{className:"bg-white shadow-md rounded w-[80%] h-[80%] bg-clip-border overflow-hidden",children:J.jsxs("form",{onSubmit:K,className:"flex flex-row w-full h-full",children:[J.jsxs("div",{className:"flex items-center flex-col justify-center w-1/2 h-full bg-blue-200",children:[J.jsx("img",{src:h}),J.jsx("button",{className:"border border-gray-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:J.jsx("input",{type:"file",onChange:P,className:"border text-blue-600 flex justify-center w-full"})})]}),J.jsxs("div",{className:"w-1/2 space-y-8 p-8 flex flex-col justify-between",children:[J.jsxs("div",{className:"flex flex-col gap-x-6 gap-y-8 sm:grid-cols-1",children:[J.jsx("div",{className:"",children:J.jsxs("div",{className:"w-full space-y-6",children:[J.jsx("label",{htmlFor:"artwork-title",className:"block text-gray-700 text-sm font-bold mb-2 text-left",children:"Title"}),J.jsx("input",{type:"text",id:"artwork-title",value:p,onChange:U=>g(U.target.value),className:"shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","data-form-type":"other"})]})}),J.jsx("div",{className:"grid grid-cols-1 gap-y-8 sm:grid-cols-1",children:J.jsxs("div",{className:"w-full space-y-6",children:[J.jsx("label",{htmlFor:"artwork-medium",className:"block text-gray-700 text-sm font-bold mb-2 text-left",children:"Medium"}),J.jsx("input",{type:"text",id:"artwork-medium",value:E,onChange:U=>w(U.target.value),className:"shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","data-form-type":"other"})]})})]}),J.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",disabled:S,children:S?"Uploading...":"Save artwork"})]})]})})})})}function RV(){const[i]=_f(Di),{id:e}=Cg(),[t,s]=H.useState(null);return H.useEffect(()=>{if(!i){console.log("No authenticated user. Skipping Firestore request.");return}(async()=>{try{const u=Po(Do,"accounts",i.uid,"artworks",e),h=await jb(u);h.exists()?s(h.data()):console.log("No such document")}catch(u){console.error("Error fecthing document:",u)}})()},[i,e]),console.log(t),J.jsx(J.Fragment,{children:t?J.jsx(IA,{existingData:t}):J.jsx("p",{children:"Loading..."})})}function IV(){const[i,e]=H.useState(""),[t,s]=H.useState(""),[o,u]=H.useState(!0),h=async d=>{if(d.preventDefault(),!i.trim()||!t.trim()){console.log("Error: Email and password cannot be empty.");return}try{if(o){const g=(await LI(Di,i,t)).user,E=Cb(),w={useruid:g.uid,email:g.email,createdAt:new Date};await Hb(Po(rg(E,"accounts"),g.uid),w),console.log("Successful signup: ",g),u(!1)}else userCredential=await zI(Di,i,t),console.log("Successful sign in: ",userCredential.user)}catch(p){console.log("Unsuccessful: ",p.message)}};return J.jsx("div",{className:"flex items-center justify-center bg-gray-100 w-full h-svh",children:J.jsxs("div",{className:"bg-white shadow-md rounded w-112 border-gray-300 bg-clip-border overflow-hidden",children:[J.jsx("div",{className:"flex items-center justify-center w-full h-40 bg-blue-200",children:J.jsx("img",{src:hA,alt:"Tome Logo",className:"sm"})}),J.jsxs("form",{onSubmit:h,className:"px-8 pt-6 pb-8 mb-4",children:[J.jsx("h2",{className:"text-xl font-semibold pt-4 pb-8",children:o?"Create an account":"Sign into an existing account"}),J.jsxs("div",{className:"mb-6",children:[J.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2 text-left",htmlFor:"email",children:"Email"}),J.jsx("input",{type:"text",id:"email",className:"shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","data-form-type":"other",placeholder:"Your email",value:i,onChange:d=>e(d.target.value)})]}),J.jsxs("div",{className:"mb-6",children:[J.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2 text-left",htmlFor:"password",children:"Password"}),J.jsx("input",{type:"password",id:"password",className:"shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","data-form-type":"other",placeholder:"6+ character password",value:t,onChange:d=>s(d.target.value)})]}),J.jsxs("div",{className:"flex items-center justify-between",children:[J.jsxs("p",{className:"text-sm",children:[o?"Already have an account?":"Don't have an account?",J.jsx("button",{type:"button",className:"text-blue-500 hover:underline ml-1",onClick:()=>u(!o),children:o?"Sign In":"Create one"})]}),J.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:o?"Create account":"Sign in"})]})]})]})})}function jm({children:i}){const[e]=_f(Di);return e?i:J.jsx(Px,{to:"/"})}function CV(){const[i,e]=_f(Di);return e?J.jsx("h2",{children:"Loading..."}):J.jsx(J.Fragment,{children:J.jsx(lV,{children:J.jsxs(Lx,{children:[J.jsx(iu,{path:"/",element:i?J.jsx(AV,{}):J.jsx(IV,{})}),J.jsx(iu,{path:"/artwork/:id",element:J.jsx(jm,{children:J.jsx(SV,{})})}),J.jsx(iu,{path:"/new",element:J.jsx(jm,{children:J.jsx(IA,{})})}),J.jsx(iu,{path:"/edit/:id",element:J.jsx(jm,{children:J.jsx(RV,{})})})]})})})}oR.createRoot(document.getElementById("root")).render(J.jsx(H.StrictMode,{children:J.jsx(CV,{})}));
