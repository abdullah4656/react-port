(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Ju(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qu={exports:{}},Jl={},ec={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=Symbol.for("react.element"),Z0=Symbol.for("react.portal"),J0=Symbol.for("react.fragment"),q0=Symbol.for("react.strict_mode"),ed=Symbol.for("react.profiler"),td=Symbol.for("react.provider"),nd=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),ld=Symbol.for("react.suspense"),id=Symbol.for("react.memo"),od=Symbol.for("react.lazy"),hs=Symbol.iterator;function ad(e){return e===null||typeof e!="object"?null:(e=hs&&e[hs]||e["@@iterator"],typeof e=="function"?e:null)}var tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nc=Object.assign,rc={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=rc,this.updater=n||tc}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lc(){}lc.prototype=Bn.prototype;function ca(e,t,n){this.props=e,this.context=t,this.refs=rc,this.updater=n||tc}var fa=ca.prototype=new lc;fa.constructor=ca;nc(fa,Bn.prototype);fa.isPureReactComponent=!0;var gs=Array.isArray,ic=Object.prototype.hasOwnProperty,da={current:null},oc={key:!0,ref:!0,__self:!0,__source:!0};function ac(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)ic.call(t,r)&&!oc.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Dr,type:e,key:i,ref:o,props:l,_owner:da.current}}function sd(e,t){return{$$typeof:Dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr}function ud(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vs=/\/+/g;function wi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ud(""+e.key):t.toString(36)}function fl(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Dr:case Z0:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+wi(o,0):r,gs(l)?(n="",e!=null&&(n=e.replace(vs,"$&/")+"/"),fl(l,t,n,"",function(c){return c})):l!=null&&(pa(l)&&(l=sd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(vs,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",gs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+wi(i,a);o+=fl(i,t,n,s,l)}else if(s=ad(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+wi(i,a++),o+=fl(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Xr(e,t,n){if(e==null)return e;var r=[],l=0;return fl(e,r,"","",function(i){return t.call(n,i,l++)}),r}function cd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},dl={transition:null},fd={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:dl,ReactCurrentOwner:da};function sc(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Xr,forEach:function(e,t,n){Xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xr(e,function(){t++}),t},toArray:function(e){return Xr(e,function(t){return t})||[]},only:function(e){if(!pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Bn;A.Fragment=J0;A.Profiler=ed;A.PureComponent=ca;A.StrictMode=q0;A.Suspense=ld;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fd;A.act=sc;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nc({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=da.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ic.call(t,s)&&!oc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Dr,type:e.type,key:l,ref:i,props:r,_owner:o}};A.createContext=function(e){return e={$$typeof:nd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:td,_context:e},e.Consumer=e};A.createElement=ac;A.createFactory=function(e){var t=ac.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:rd,render:e}};A.isValidElement=pa;A.lazy=function(e){return{$$typeof:od,_payload:{_status:-1,_result:e},_init:cd}};A.memo=function(e,t){return{$$typeof:id,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=dl.transition;dl.transition={};try{e()}finally{dl.transition=t}};A.unstable_act=sc;A.useCallback=function(e,t){return me.current.useCallback(e,t)};A.useContext=function(e){return me.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return me.current.useDeferredValue(e)};A.useEffect=function(e,t){return me.current.useEffect(e,t)};A.useId=function(){return me.current.useId()};A.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return me.current.useMemo(e,t)};A.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};A.useRef=function(e){return me.current.useRef(e)};A.useState=function(e){return me.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return me.current.useTransition()};A.version="18.3.1";ec.exports=A;var X=ec.exports;const xr=Ju(X);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd=X,pd=Symbol.for("react.element"),md=Symbol.for("react.fragment"),hd=Object.prototype.hasOwnProperty,gd=dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vd={key:!0,ref:!0,__self:!0,__source:!0};function uc(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)hd.call(t,r)&&!vd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:pd,type:e,key:i,ref:o,props:l,_owner:gd.current}}Jl.Fragment=md;Jl.jsx=uc;Jl.jsxs=uc;qu.exports=Jl;var u=qu.exports,Ji={},cc={exports:{}},ze={},fc={exports:{}},dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,T){var E=C.length;C.push(T);e:for(;0<E;){var M=E-1>>>1,F=C[M];if(0<l(F,T))C[M]=T,C[E]=F,E=M;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var T=C[0],E=C.pop();if(E!==T){C[0]=E;e:for(var M=0,F=C.length,ne=F>>>1;M<ne;){var ge=2*(M+1)-1,xi=C[ge],Wt=ge+1,Yr=C[Wt];if(0>l(xi,E))Wt<F&&0>l(Yr,xi)?(C[M]=Yr,C[Wt]=E,M=Wt):(C[M]=xi,C[ge]=E,M=ge);else if(Wt<F&&0>l(Yr,E))C[M]=Yr,C[Wt]=E,M=Wt;else break e}}return T}function l(C,T){var E=C.sortIndex-T.sortIndex;return E!==0?E:C.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],d=1,g=null,h=3,v=!1,w=!1,k=!1,O=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=C)r(c),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(c)}}function y(C){if(k=!1,m(C),!w)if(n(s)!==null)w=!0,vt(S);else{var T=n(c);T!==null&&fn(y,T.startTime-C)}}function S(C,T){w=!1,k&&(k=!1,p(z),z=-1),v=!0;var E=h;try{for(m(T),g=n(s);g!==null&&(!(g.expirationTime>T)||C&&!W());){var M=g.callback;if(typeof M=="function"){g.callback=null,h=g.priorityLevel;var F=M(g.expirationTime<=T);T=e.unstable_now(),typeof F=="function"?g.callback=F:g===n(s)&&r(s),m(T)}else r(s);g=n(s)}if(g!==null)var ne=!0;else{var ge=n(c);ge!==null&&fn(y,ge.startTime-T),ne=!1}return ne}finally{g=null,h=E,v=!1}}var j=!1,N=null,z=-1,D=5,b=-1;function W(){return!(e.unstable_now()-b<D)}function Se(){if(N!==null){var C=e.unstable_now();b=C;var T=!0;try{T=N(!0,C)}finally{T?Re():(j=!1,N=null)}}else j=!1}var Re;if(typeof f=="function")Re=function(){f(Se)};else if(typeof MessageChannel<"u"){var gt=new MessageChannel,Xn=gt.port2;gt.port1.onmessage=Se,Re=function(){Xn.postMessage(null)}}else Re=function(){O(Se,0)};function vt(C){N=C,j||(j=!0,Re())}function fn(C,T){z=O(function(){C(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,vt(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var E=h;h=T;try{return C()}finally{h=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,T){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var E=h;h=C;try{return T()}finally{h=E}},e.unstable_scheduleCallback=function(C,T,E){var M=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?M+E:M):E=M,C){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=E+F,C={id:d++,callback:T,priorityLevel:C,startTime:E,expirationTime:F,sortIndex:-1},E>M?(C.sortIndex=E,t(c,C),n(s)===null&&C===n(c)&&(k?(p(z),z=-1):k=!0,fn(y,E-M))):(C.sortIndex=F,t(s,C),w||v||(w=!0,vt(S))),C},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(C){var T=h;return function(){var E=h;h=T;try{return C.apply(this,arguments)}finally{h=E}}}})(dc);fc.exports=dc;var yd=fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd=X,Pe=yd;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pc=new Set,wr={};function un(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(wr[e]=t,e=0;e<t.length;e++)pc.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qi=Object.prototype.hasOwnProperty,wd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ys={},xs={};function kd(e){return qi.call(xs,e)?!0:qi.call(ys,e)?!1:wd.test(e)?xs[e]=!0:(ys[e]=!0,!1)}function Sd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nd(e,t,n,r){if(t===null||typeof t>"u"||Sd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var ma=/[\-:]([a-z])/g;function ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ma,ha);ae[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ma,ha);ae[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ma,ha);ae[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function ga(e,t,n,r){var l=ae.hasOwnProperty(t)?ae[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nd(t,n,l,r)&&(n=null),r||l===null?kd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mt=xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),pn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),va=Symbol.for("react.strict_mode"),eo=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),ya=Symbol.for("react.forward_ref"),to=Symbol.for("react.suspense"),no=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),wt=Symbol.for("react.lazy"),gc=Symbol.for("react.offscreen"),ws=Symbol.iterator;function Qn(e){return e===null||typeof e!="object"?null:(e=ws&&e[ws]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,ki;function nr(e){if(ki===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ki=t&&t[1]||""}return`
`+ki+e}var Si=!1;function Ni(e,t){if(!e||Si)return"";Si=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Si=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?nr(e):""}function jd(e){switch(e.tag){case 5:return nr(e.type);case 16:return nr("Lazy");case 13:return nr("Suspense");case 19:return nr("SuspenseList");case 0:case 2:case 15:return e=Ni(e.type,!1),e;case 11:return e=Ni(e.type.render,!1),e;case 1:return e=Ni(e.type,!0),e;default:return""}}function ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case pn:return"Portal";case eo:return"Profiler";case va:return"StrictMode";case to:return"Suspense";case no:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hc:return(e.displayName||"Context")+".Consumer";case mc:return(e._context.displayName||"Context")+".Provider";case ya:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xa:return t=e.displayName||null,t!==null?t:ro(e.type)||"Memo";case wt:t=e._payload,e=e._init;try{return ro(e(t))}catch{}}return null}function Ed(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ro(t);case 8:return t===va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function It(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cd(e){var t=vc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=Cd(e))}function yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function El(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lo(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ks(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=It(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xc(e,t){t=t.checked,t!=null&&ga(e,"checked",t,!1)}function io(e,t){xc(e,t);var n=It(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oo(e,t.type,n):t.hasOwnProperty("defaultValue")&&oo(e,t.type,It(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ss(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oo(e,t,n){(t!=="number"||El(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rr=Array.isArray;function _n(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ns(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(rr(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:It(n)}}function wc(e,t){var n=It(t.value),r=It(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function js(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function so(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,Sc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_d=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){_d.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function Nc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function jc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Nc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Pd=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uo(e,t){if(t){if(Pd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function co(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fo=null;function wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var po=null,Pn=null,zn=null;function Es(e){if(e=$r(e)){if(typeof po!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ri(t),po(e.stateNode,e.type,t))}}function Ec(e){Pn?zn?zn.push(e):zn=[e]:Pn=e}function Cc(){if(Pn){var e=Pn,t=zn;if(zn=Pn=null,Es(e),t)for(e=0;e<t.length;e++)Es(t[e])}}function _c(e,t){return e(t)}function Pc(){}var ji=!1;function zc(e,t,n){if(ji)return e(t,n);ji=!0;try{return _c(e,t,n)}finally{ji=!1,(Pn!==null||zn!==null)&&(Pc(),Cc())}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var r=ri(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var mo=!1;if(st)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){mo=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{mo=!1}function zd(e,t,n,r,l,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ur=!1,Cl=null,_l=!1,ho=null,Od={onError:function(e){ur=!0,Cl=e}};function Td(e,t,n,r,l,i,o,a,s){ur=!1,Cl=null,zd.apply(Od,arguments)}function bd(e,t,n,r,l,i,o,a,s){if(Td.apply(this,arguments),ur){if(ur){var c=Cl;ur=!1,Cl=null}else throw Error(x(198));_l||(_l=!0,ho=c)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Oc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cs(e){if(cn(e)!==e)throw Error(x(188))}function Ld(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Cs(l),e;if(i===r)return Cs(l),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Tc(e){return e=Ld(e),e!==null?bc(e):null}function bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bc(e);if(t!==null)return t;e=e.sibling}return null}var Lc=Pe.unstable_scheduleCallback,_s=Pe.unstable_cancelCallback,Ad=Pe.unstable_shouldYield,Md=Pe.unstable_requestPaint,J=Pe.unstable_now,Id=Pe.unstable_getCurrentPriorityLevel,ka=Pe.unstable_ImmediatePriority,Ac=Pe.unstable_UserBlockingPriority,Pl=Pe.unstable_NormalPriority,Fd=Pe.unstable_LowPriority,Mc=Pe.unstable_IdlePriority,ql=null,et=null;function Rd(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(ql,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Hd,Dd=Math.log,Ud=Math.LN2;function Hd(e){return e>>>=0,e===0?32:31-(Dd(e)/Ud|0)|0}var Zr=64,Jr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=lr(a):(i&=o,i!==0&&(r=lr(i)))}else o=n&~l,o!==0?r=lr(o):i!==0&&(r=lr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),l=1<<n,r|=e[n],t&=~l;return r}function $d(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-We(i),a=1<<o,s=l[o];s===-1?(!(a&n)||a&r)&&(l[o]=$d(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ic(){var e=Zr;return Zr<<=1,!(Zr&4194240)&&(Zr=64),e}function Ei(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function Wd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-We(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function Fc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rc,Na,Dc,Uc,Hc,vo=!1,qr=[],_t=null,Pt=null,zt=null,Nr=new Map,jr=new Map,St=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ps(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function Kn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=$r(t),t!==null&&Na(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Yd(e,t,n,r,l){switch(t){case"focusin":return _t=Kn(_t,e,t,n,r,l),!0;case"dragenter":return Pt=Kn(Pt,e,t,n,r,l),!0;case"mouseover":return zt=Kn(zt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Nr.set(i,Kn(Nr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,jr.set(i,Kn(jr.get(i)||null,e,t,n,r,l)),!0}return!1}function $c(e){var t=Qt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Oc(n),t!==null){e.blockedOn=t,Hc(e.priority,function(){Dc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fo=r,n.target.dispatchEvent(r),fo=null}else return t=$r(n),t!==null&&Na(t),e.blockedOn=n,!1;t.shift()}return!0}function zs(e,t,n){pl(e)&&n.delete(t)}function Xd(){vo=!1,_t!==null&&pl(_t)&&(_t=null),Pt!==null&&pl(Pt)&&(Pt=null),zt!==null&&pl(zt)&&(zt=null),Nr.forEach(zs),jr.forEach(zs)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,vo||(vo=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,Xd)))}function Er(e){function t(l){return Zn(l,e)}if(0<qr.length){Zn(qr[0],e);for(var n=1;n<qr.length;n++){var r=qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_t!==null&&Zn(_t,e),Pt!==null&&Zn(Pt,e),zt!==null&&Zn(zt,e),Nr.forEach(t),jr.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)$c(n),n.blockedOn===null&&St.shift()}var On=mt.ReactCurrentBatchConfig,Ol=!0;function Qd(e,t,n,r){var l=R,i=On.transition;On.transition=null;try{R=1,ja(e,t,n,r)}finally{R=l,On.transition=i}}function Gd(e,t,n,r){var l=R,i=On.transition;On.transition=null;try{R=4,ja(e,t,n,r)}finally{R=l,On.transition=i}}function ja(e,t,n,r){if(Ol){var l=yo(e,t,n,r);if(l===null)Mi(e,t,r,Tl,n),Ps(e,r);else if(Yd(l,e,t,n,r))r.stopPropagation();else if(Ps(e,r),t&4&&-1<Vd.indexOf(e)){for(;l!==null;){var i=$r(l);if(i!==null&&Rc(i),i=yo(e,t,n,r),i===null&&Mi(e,t,r,Tl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Mi(e,t,r,null,n)}}var Tl=null;function yo(e,t,n,r){if(Tl=null,e=wa(r),e=Qt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Oc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tl=e,null}function Bc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Id()){case ka:return 1;case Ac:return 4;case Pl:case Fd:return 16;case Mc:return 536870912;default:return 16}default:return 16}}var jt=null,Ea=null,ml=null;function Wc(){if(ml)return ml;var e,t=Ea,n=t.length,r,l="value"in jt?jt.value:jt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return ml=l.slice(e,1<r?1-r:void 0)}function hl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Os(){return!1}function Oe(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?el:Os,this.isPropagationStopped=Os,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=Oe(Wn),Hr=K({},Wn,{view:0,detail:0}),Kd=Oe(Hr),Ci,_i,Jn,ei=K({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(Ci=e.screenX-Jn.screenX,_i=e.screenY-Jn.screenY):_i=Ci=0,Jn=e),Ci)},movementY:function(e){return"movementY"in e?e.movementY:_i}}),Ts=Oe(ei),Zd=K({},ei,{dataTransfer:0}),Jd=Oe(Zd),qd=K({},Hr,{relatedTarget:0}),Pi=Oe(qd),e1=K({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),t1=Oe(e1),n1=K({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r1=Oe(n1),l1=K({},Wn,{data:0}),bs=Oe(l1),i1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=a1[e])?!!t[e]:!1}function _a(){return s1}var u1=K({},Hr,{key:function(e){if(e.key){var t=i1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?o1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c1=Oe(u1),f1=K({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=Oe(f1),d1=K({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),p1=Oe(d1),m1=K({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),h1=Oe(m1),g1=K({},ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),v1=Oe(g1),y1=[9,13,27,32],Pa=st&&"CompositionEvent"in window,cr=null;st&&"documentMode"in document&&(cr=document.documentMode);var x1=st&&"TextEvent"in window&&!cr,Vc=st&&(!Pa||cr&&8<cr&&11>=cr),As=" ",Ms=!1;function Yc(e,t){switch(e){case"keyup":return y1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function w1(e,t){switch(e){case"compositionend":return Xc(t);case"keypress":return t.which!==32?null:(Ms=!0,As);case"textInput":return e=t.data,e===As&&Ms?null:e;default:return null}}function k1(e,t){if(hn)return e==="compositionend"||!Pa&&Yc(e,t)?(e=Wc(),ml=Ea=jt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vc&&t.locale!=="ko"?null:t.data;default:return null}}var S1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S1[e.type]:t==="textarea"}function Qc(e,t,n,r){Ec(r),t=bl(t,"onChange"),0<t.length&&(n=new Ca("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,Cr=null;function N1(e){of(e,0)}function ti(e){var t=yn(e);if(yc(t))return e}function j1(e,t){if(e==="change")return t}var Gc=!1;if(st){var zi;if(st){var Oi="oninput"in document;if(!Oi){var Fs=document.createElement("div");Fs.setAttribute("oninput","return;"),Oi=typeof Fs.oninput=="function"}zi=Oi}else zi=!1;Gc=zi&&(!document.documentMode||9<document.documentMode)}function Rs(){fr&&(fr.detachEvent("onpropertychange",Kc),Cr=fr=null)}function Kc(e){if(e.propertyName==="value"&&ti(Cr)){var t=[];Qc(t,Cr,e,wa(e)),zc(N1,t)}}function E1(e,t,n){e==="focusin"?(Rs(),fr=t,Cr=n,fr.attachEvent("onpropertychange",Kc)):e==="focusout"&&Rs()}function C1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(Cr)}function _1(e,t){if(e==="click")return ti(t)}function P1(e,t){if(e==="input"||e==="change")return ti(t)}function z1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:z1;function _r(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!qi.call(t,l)||!Ye(e[l],t[l]))return!1}return!0}function Ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Us(e,t){var n=Ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ds(n)}}function Zc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jc(){for(var e=window,t=El();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=El(e.document)}return t}function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function O1(e){var t=Jc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zc(n.ownerDocument.documentElement,n)){if(r!==null&&za(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Us(n,i);var o=Us(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var T1=st&&"documentMode"in document&&11>=document.documentMode,gn=null,xo=null,dr=null,wo=!1;function Hs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wo||gn==null||gn!==El(r)||(r=gn,"selectionStart"in r&&za(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&_r(dr,r)||(dr=r,r=bl(xo,"onSelect"),0<r.length&&(t=new Ca("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Ti={},qc={};st&&(qc=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function ni(e){if(Ti[e])return Ti[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qc)return Ti[e]=t[n];return e}var ef=ni("animationend"),tf=ni("animationiteration"),nf=ni("animationstart"),rf=ni("transitionend"),lf=new Map,$s="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){lf.set(e,t),un(t,[e])}for(var bi=0;bi<$s.length;bi++){var Li=$s[bi],b1=Li.toLowerCase(),L1=Li[0].toUpperCase()+Li.slice(1);Ht(b1,"on"+L1)}Ht(ef,"onAnimationEnd");Ht(tf,"onAnimationIteration");Ht(nf,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(rf,"onTransitionEnd");An("onMouseEnter",["mouseout","mouseover"]);An("onMouseLeave",["mouseout","mouseover"]);An("onPointerEnter",["pointerout","pointerover"]);An("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));function Bs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bd(r,t,void 0,e),e.currentTarget=null}function of(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;Bs(l,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;Bs(l,a,c),i=s}}}if(_l)throw e=ho,_l=!1,ho=null,e}function H(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(af(t,e,2,!1),n.add(r))}function Ai(e,t,n){var r=0;t&&(r|=4),af(n,e,r,t)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[nl]){e[nl]=!0,pc.forEach(function(n){n!=="selectionchange"&&(A1.has(n)||Ai(n,!1,e),Ai(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nl]||(t[nl]=!0,Ai("selectionchange",!1,t))}}function af(e,t,n,r){switch(Bc(t)){case 1:var l=Qd;break;case 4:l=Gd;break;default:l=ja}n=l.bind(null,t,n,e),l=void 0,!mo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Mi(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Qt(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}zc(function(){var c=i,d=wa(n),g=[];e:{var h=lf.get(e);if(h!==void 0){var v=Ca,w=e;switch(e){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":v=c1;break;case"focusin":w="focus",v=Pi;break;case"focusout":w="blur",v=Pi;break;case"beforeblur":case"afterblur":v=Pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=p1;break;case ef:case tf:case nf:v=t1;break;case rf:v=h1;break;case"scroll":v=Kd;break;case"wheel":v=v1;break;case"copy":case"cut":case"paste":v=r1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ls}var k=(t&4)!==0,O=!k&&e==="scroll",p=k?h!==null?h+"Capture":null:h;k=[];for(var f=c,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Sr(f,p),y!=null&&k.push(zr(f,y,m)))),O)break;f=f.return}0<k.length&&(h=new v(h,w,null,n,d),g.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==fo&&(w=n.relatedTarget||n.fromElement)&&(Qt(w)||w[ut]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=c,w=w?Qt(w):null,w!==null&&(O=cn(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=c),v!==w)){if(k=Ts,y="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ls,y="onPointerLeave",p="onPointerEnter",f="pointer"),O=v==null?h:yn(v),m=w==null?h:yn(w),h=new k(y,f+"leave",v,n,d),h.target=O,h.relatedTarget=m,y=null,Qt(d)===c&&(k=new k(p,f+"enter",w,n,d),k.target=m,k.relatedTarget=O,y=k),O=y,v&&w)t:{for(k=v,p=w,f=0,m=k;m;m=dn(m))f++;for(m=0,y=p;y;y=dn(y))m++;for(;0<f-m;)k=dn(k),f--;for(;0<m-f;)p=dn(p),m--;for(;f--;){if(k===p||p!==null&&k===p.alternate)break t;k=dn(k),p=dn(p)}k=null}else k=null;v!==null&&Ws(g,h,v,k,!1),w!==null&&O!==null&&Ws(g,O,w,k,!0)}}e:{if(h=c?yn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=j1;else if(Is(h))if(Gc)S=P1;else{S=C1;var j=E1}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=_1);if(S&&(S=S(e,c))){Qc(g,S,n,d);break e}j&&j(e,h,c),e==="focusout"&&(j=h._wrapperState)&&j.controlled&&h.type==="number"&&oo(h,"number",h.value)}switch(j=c?yn(c):window,e){case"focusin":(Is(j)||j.contentEditable==="true")&&(gn=j,xo=c,dr=null);break;case"focusout":dr=xo=gn=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,Hs(g,n,d);break;case"selectionchange":if(T1)break;case"keydown":case"keyup":Hs(g,n,d)}var N;if(Pa)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else hn?Yc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Vc&&n.locale!=="ko"&&(hn||z!=="onCompositionStart"?z==="onCompositionEnd"&&hn&&(N=Wc()):(jt=d,Ea="value"in jt?jt.value:jt.textContent,hn=!0)),j=bl(c,z),0<j.length&&(z=new bs(z,e,null,n,d),g.push({event:z,listeners:j}),N?z.data=N:(N=Xc(n),N!==null&&(z.data=N)))),(N=x1?w1(e,n):k1(e,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(d=new bs("onBeforeInput","beforeinput",null,n,d),g.push({event:d,listeners:c}),d.data=N))}of(g,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Sr(e,n),i!=null&&r.unshift(zr(e,i,l)),i=Sr(e,t),i!=null&&r.push(zr(e,i,l))),e=e.return}return r}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ws(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Sr(n,i),s!=null&&o.unshift(zr(n,s,a))):l||(s=Sr(n,i),s!=null&&o.push(zr(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var M1=/\r\n?/g,I1=/\u0000|\uFFFD/g;function Vs(e){return(typeof e=="string"?e:""+e).replace(M1,`
`).replace(I1,"")}function rl(e,t,n){if(t=Vs(t),Vs(e)!==t&&n)throw Error(x(425))}function Ll(){}var ko=null,So=null;function No(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jo=typeof setTimeout=="function"?setTimeout:void 0,F1=typeof clearTimeout=="function"?clearTimeout:void 0,Ys=typeof Promise=="function"?Promise:void 0,R1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ys<"u"?function(e){return Ys.resolve(null).then(e).catch(D1)}:jo;function D1(e){setTimeout(function(){throw e})}function Ii(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Er(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+Vn,Or="__reactProps$"+Vn,ut="__reactContainer$"+Vn,Eo="__reactEvents$"+Vn,U1="__reactListeners$"+Vn,H1="__reactHandles$"+Vn;function Qt(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ut]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xs(e);e!==null;){if(n=e[Ke])return n;e=Xs(e)}return t}e=n,n=e.parentNode}return null}function $r(e){return e=e[Ke]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ri(e){return e[Or]||null}var Co=[],xn=-1;function $t(e){return{current:e}}function $(e){0>xn||(e.current=Co[xn],Co[xn]=null,xn--)}function U(e,t){xn++,Co[xn]=e.current,e.current=t}var Ft={},fe=$t(Ft),xe=$t(!1),tn=Ft;function Mn(e,t){var n=e.type.contextTypes;if(!n)return Ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function Al(){$(xe),$(fe)}function Qs(e,t,n){if(fe.current!==Ft)throw Error(x(168));U(fe,t),U(xe,n)}function sf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(x(108,Ed(e)||"Unknown",l));return K({},n,r)}function Ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ft,tn=fe.current,U(fe,e),U(xe,xe.current),!0}function Gs(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=sf(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,$(xe),$(fe),U(fe,e)):$(xe),U(xe,n)}var lt=null,li=!1,Fi=!1;function uf(e){lt===null?lt=[e]:lt.push(e)}function $1(e){li=!0,uf(e)}function Bt(){if(!Fi&&lt!==null){Fi=!0;var e=0,t=R;try{var n=lt;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,li=!1}catch(l){throw lt!==null&&(lt=lt.slice(e+1)),Lc(ka,Bt),l}finally{R=t,Fi=!1}}return null}var wn=[],kn=0,Il=null,Fl=0,be=[],Le=0,nn=null,it=1,ot="";function Vt(e,t){wn[kn++]=Fl,wn[kn++]=Il,Il=e,Fl=t}function cf(e,t,n){be[Le++]=it,be[Le++]=ot,be[Le++]=nn,nn=e;var r=it;e=ot;var l=32-We(r)-1;r&=~(1<<l),n+=1;var i=32-We(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,it=1<<32-We(t)+l|n<<l|r,ot=i+e}else it=1<<i|n<<l|r,ot=e}function Oa(e){e.return!==null&&(Vt(e,1),cf(e,1,0))}function Ta(e){for(;e===Il;)Il=wn[--kn],wn[kn]=null,Fl=wn[--kn],wn[kn]=null;for(;e===nn;)nn=be[--Le],be[Le]=null,ot=be[--Le],be[Le]=null,it=be[--Le],be[Le]=null}var Ee=null,je=null,V=!1,$e=null;function ff(e,t){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ks(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,je=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:it,overflow:ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,je=null,!0):!1;default:return!1}}function _o(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Po(e){if(V){var t=je;if(t){var n=t;if(!Ks(e,t)){if(_o(e))throw Error(x(418));t=Ot(n.nextSibling);var r=Ee;t&&Ks(e,t)?ff(r,n):(e.flags=e.flags&-4097|2,V=!1,Ee=e)}}else{if(_o(e))throw Error(x(418));e.flags=e.flags&-4097|2,V=!1,Ee=e}}}function Zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function ll(e){if(e!==Ee)return!1;if(!V)return Zs(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!No(e.type,e.memoizedProps)),t&&(t=je)){if(_o(e))throw df(),Error(x(418));for(;t;)ff(e,t),t=Ot(t.nextSibling)}if(Zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Ee?Ot(e.stateNode.nextSibling):null;return!0}function df(){for(var e=je;e;)e=Ot(e.nextSibling)}function In(){je=Ee=null,V=!1}function ba(e){$e===null?$e=[e]:$e.push(e)}var B1=mt.ReactCurrentBatchConfig;function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function il(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Js(e){var t=e._init;return t(e._payload)}function pf(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function l(p,f){return p=At(p,f),p.index=0,p.sibling=null,p}function i(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,y){return f===null||f.tag!==6?(f=Wi(m,p.mode,y),f.return=p,f):(f=l(f,m),f.return=p,f)}function s(p,f,m,y){var S=m.type;return S===mn?d(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===wt&&Js(S)===f.type)?(y=l(f,m.props),y.ref=qn(p,f,m),y.return=p,y):(y=Sl(m.type,m.key,m.props,null,p.mode,y),y.ref=qn(p,f,m),y.return=p,y)}function c(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Vi(m,p.mode,y),f.return=p,f):(f=l(f,m.children||[]),f.return=p,f)}function d(p,f,m,y,S){return f===null||f.tag!==7?(f=Jt(m,p.mode,y,S),f.return=p,f):(f=l(f,m),f.return=p,f)}function g(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Wi(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qr:return m=Sl(f.type,f.key,f.props,null,p.mode,m),m.ref=qn(p,null,f),m.return=p,m;case pn:return f=Vi(f,p.mode,m),f.return=p,f;case wt:var y=f._init;return g(p,y(f._payload),m)}if(rr(f)||Qn(f))return f=Jt(f,p.mode,m,null),f.return=p,f;il(p,f)}return null}function h(p,f,m,y){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qr:return m.key===S?s(p,f,m,y):null;case pn:return m.key===S?c(p,f,m,y):null;case wt:return S=m._init,h(p,f,S(m._payload),y)}if(rr(m)||Qn(m))return S!==null?null:d(p,f,m,y,null);il(p,m)}return null}function v(p,f,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(f,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qr:return p=p.get(y.key===null?m:y.key)||null,s(f,p,y,S);case pn:return p=p.get(y.key===null?m:y.key)||null,c(f,p,y,S);case wt:var j=y._init;return v(p,f,m,j(y._payload),S)}if(rr(y)||Qn(y))return p=p.get(m)||null,d(f,p,y,S,null);il(f,y)}return null}function w(p,f,m,y){for(var S=null,j=null,N=f,z=f=0,D=null;N!==null&&z<m.length;z++){N.index>z?(D=N,N=null):D=N.sibling;var b=h(p,N,m[z],y);if(b===null){N===null&&(N=D);break}e&&N&&b.alternate===null&&t(p,N),f=i(b,f,z),j===null?S=b:j.sibling=b,j=b,N=D}if(z===m.length)return n(p,N),V&&Vt(p,z),S;if(N===null){for(;z<m.length;z++)N=g(p,m[z],y),N!==null&&(f=i(N,f,z),j===null?S=N:j.sibling=N,j=N);return V&&Vt(p,z),S}for(N=r(p,N);z<m.length;z++)D=v(N,p,z,m[z],y),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?z:D.key),f=i(D,f,z),j===null?S=D:j.sibling=D,j=D);return e&&N.forEach(function(W){return t(p,W)}),V&&Vt(p,z),S}function k(p,f,m,y){var S=Qn(m);if(typeof S!="function")throw Error(x(150));if(m=S.call(m),m==null)throw Error(x(151));for(var j=S=null,N=f,z=f=0,D=null,b=m.next();N!==null&&!b.done;z++,b=m.next()){N.index>z?(D=N,N=null):D=N.sibling;var W=h(p,N,b.value,y);if(W===null){N===null&&(N=D);break}e&&N&&W.alternate===null&&t(p,N),f=i(W,f,z),j===null?S=W:j.sibling=W,j=W,N=D}if(b.done)return n(p,N),V&&Vt(p,z),S;if(N===null){for(;!b.done;z++,b=m.next())b=g(p,b.value,y),b!==null&&(f=i(b,f,z),j===null?S=b:j.sibling=b,j=b);return V&&Vt(p,z),S}for(N=r(p,N);!b.done;z++,b=m.next())b=v(N,p,z,b.value,y),b!==null&&(e&&b.alternate!==null&&N.delete(b.key===null?z:b.key),f=i(b,f,z),j===null?S=b:j.sibling=b,j=b);return e&&N.forEach(function(Se){return t(p,Se)}),V&&Vt(p,z),S}function O(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===mn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Qr:e:{for(var S=m.key,j=f;j!==null;){if(j.key===S){if(S=m.type,S===mn){if(j.tag===7){n(p,j.sibling),f=l(j,m.props.children),f.return=p,p=f;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===wt&&Js(S)===j.type){n(p,j.sibling),f=l(j,m.props),f.ref=qn(p,j,m),f.return=p,p=f;break e}n(p,j);break}else t(p,j);j=j.sibling}m.type===mn?(f=Jt(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=Sl(m.type,m.key,m.props,null,p.mode,y),y.ref=qn(p,f,m),y.return=p,p=y)}return o(p);case pn:e:{for(j=m.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=l(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=Vi(m,p.mode,y),f.return=p,p=f}return o(p);case wt:return j=m._init,O(p,f,j(m._payload),y)}if(rr(m))return w(p,f,m,y);if(Qn(m))return k(p,f,m,y);il(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=l(f,m),f.return=p,p=f):(n(p,f),f=Wi(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return O}var Fn=pf(!0),mf=pf(!1),Rl=$t(null),Dl=null,Sn=null,La=null;function Aa(){La=Sn=Dl=null}function Ma(e){var t=Rl.current;$(Rl),e._currentValue=t}function zo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){Dl=e,La=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if(La!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(Dl===null)throw Error(x(308));Sn=e,Dl.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var Gt=null;function Ia(e){Gt===null?Gt=[e]:Gt.push(e)}function hf(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ia(t)):(n.next=l.next,l.next=n),t.interleaved=n,ct(e,r)}function ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kt=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,ct(e,n)}return l=r.interleaved,l===null?(t.next=t,Ia(r)):(t.next=l.next,l.next=t),r.interleaved=t,ct(e,n)}function gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}function qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ul(e,t,n,r){var l=e.updateQueue;kt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=s))}if(i!==null){var g=l.baseState;o=0,d=c=s=null,a=i;do{var h=a.lane,v=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(h=t,v=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){g=w.call(v,g,h);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,h=typeof w=="function"?w.call(v,g,h):w,h==null)break e;g=K({},g,h);break e;case 2:kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,s=g):d=d.next=v,o|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(d===null&&(s=g),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=d,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);ln|=o,e.lanes=o,e.memoizedState=g}}function eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(x(191,l));l.call(r)}}}var Br={},tt=$t(Br),Tr=$t(Br),br=$t(Br);function Kt(e){if(e===Br)throw Error(x(174));return e}function Ra(e,t){switch(U(br,t),U(Tr,e),U(tt,Br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:so(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=so(t,e)}$(tt),U(tt,t)}function Rn(){$(tt),$(Tr),$(br)}function vf(e){Kt(br.current);var t=Kt(tt.current),n=so(t,e.type);t!==n&&(U(Tr,e),U(tt,n))}function Da(e){Tr.current===e&&($(tt),$(Tr))}var Q=$t(0);function Hl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ri=[];function Ua(){for(var e=0;e<Ri.length;e++)Ri[e]._workInProgressVersionPrimary=null;Ri.length=0}var vl=mt.ReactCurrentDispatcher,Di=mt.ReactCurrentBatchConfig,rn=0,G=null,ee=null,re=null,$l=!1,pr=!1,Lr=0,W1=0;function se(){throw Error(x(321))}function Ha(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function $a(e,t,n,r,l,i){if(rn=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vl.current=e===null||e.memoizedState===null?Q1:G1,e=n(r,l),pr){i=0;do{if(pr=!1,Lr=0,25<=i)throw Error(x(301));i+=1,re=ee=null,t.updateQueue=null,vl.current=K1,e=n(r,l)}while(pr)}if(vl.current=Bl,t=ee!==null&&ee.next!==null,rn=0,re=ee=G=null,$l=!1,t)throw Error(x(300));return e}function Ba(){var e=Lr!==0;return Lr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?G.memoizedState=re=e:re=re.next=e,re}function Fe(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?G.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(x(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?G.memoizedState=re=e:re=re.next=e}return re}function Ar(e,t){return typeof t=="function"?t(e):t}function Ui(e){var t=Fe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,c=i;do{var d=c.lane;if((rn&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=g,o=r):s=s.next=g,G.lanes|=d,ln|=d}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,Ye(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,G.lanes|=i,ln|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hi(e){var t=Fe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ye(i,t.memoizedState)||(ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function yf(){}function xf(e,t){var n=G,r=Fe(),l=t(),i=!Ye(r.memoizedState,l);if(i&&(r.memoizedState=l,ye=!0),r=r.queue,Wa(Sf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,Mr(9,kf.bind(null,n,r,l,t),void 0,null),le===null)throw Error(x(349));rn&30||wf(n,t,l)}return l}function wf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kf(e,t,n,r){t.value=n,t.getSnapshot=r,Nf(t)&&jf(e)}function Sf(e,t,n){return n(function(){Nf(t)&&jf(e)})}function Nf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function jf(e){var t=ct(e,1);t!==null&&Ve(t,e,1,-1)}function tu(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ar,lastRenderedState:e},t.queue=e,e=e.dispatch=X1.bind(null,G,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ef(){return Fe().memoizedState}function yl(e,t,n,r){var l=Qe();G.flags|=e,l.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function ii(e,t,n,r){var l=Fe();r=r===void 0?null:r;var i=void 0;if(ee!==null){var o=ee.memoizedState;if(i=o.destroy,r!==null&&Ha(r,o.deps)){l.memoizedState=Mr(t,n,i,r);return}}G.flags|=e,l.memoizedState=Mr(1|t,n,i,r)}function nu(e,t){return yl(8390656,8,e,t)}function Wa(e,t){return ii(2048,8,e,t)}function Cf(e,t){return ii(4,2,e,t)}function _f(e,t){return ii(4,4,e,t)}function Pf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zf(e,t,n){return n=n!=null?n.concat([e]):null,ii(4,4,Pf.bind(null,t,e),n)}function Va(){}function Of(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ha(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tf(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ha(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bf(e,t,n){return rn&21?(Ye(n,t)||(n=Ic(),G.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function V1(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Di.transition;Di.transition={};try{e(!1),t()}finally{R=n,Di.transition=r}}function Lf(){return Fe().memoizedState}function Y1(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Af(e))Mf(t,n);else if(n=hf(e,t,n,r),n!==null){var l=pe();Ve(n,e,r,l),If(n,t,r)}}function X1(e,t,n){var r=Lt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Af(e))Mf(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,Ye(a,o)){var s=t.interleaved;s===null?(l.next=l,Ia(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=hf(e,t,l,r),n!==null&&(l=pe(),Ve(n,e,r,l),If(n,t,r))}}function Af(e){var t=e.alternate;return e===G||t!==null&&t===G}function Mf(e,t){pr=$l=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function If(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}var Bl={readContext:Ie,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Q1={readContext:Ie,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:nu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yl(4194308,4,Pf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yl(4194308,4,e,t)},useInsertionEffect:function(e,t){return yl(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Y1.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:tu,useDebugValue:Va,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=tu(!1),t=e[0];return e=V1.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,l=Qe();if(V){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),le===null)throw Error(x(349));rn&30||wf(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,nu(Sf.bind(null,r,i,e),[e]),r.flags|=2048,Mr(9,kf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Qe(),t=le.identifierPrefix;if(V){var n=ot,r=it;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=W1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G1={readContext:Ie,useCallback:Of,useContext:Ie,useEffect:Wa,useImperativeHandle:zf,useInsertionEffect:Cf,useLayoutEffect:_f,useMemo:Tf,useReducer:Ui,useRef:Ef,useState:function(){return Ui(Ar)},useDebugValue:Va,useDeferredValue:function(e){var t=Fe();return bf(t,ee.memoizedState,e)},useTransition:function(){var e=Ui(Ar)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:yf,useSyncExternalStore:xf,useId:Lf,unstable_isNewReconciler:!1},K1={readContext:Ie,useCallback:Of,useContext:Ie,useEffect:Wa,useImperativeHandle:zf,useInsertionEffect:Cf,useLayoutEffect:_f,useMemo:Tf,useReducer:Hi,useRef:Ef,useState:function(){return Hi(Ar)},useDebugValue:Va,useDeferredValue:function(e){var t=Fe();return ee===null?t.memoizedState=e:bf(t,ee.memoizedState,e)},useTransition:function(){var e=Hi(Ar)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:yf,useSyncExternalStore:xf,useId:Lf,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Oo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var oi={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),l=Lt(e),i=at(r,l);i.payload=t,n!=null&&(i.callback=n),t=Tt(e,i,l),t!==null&&(Ve(t,e,l,r),gl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),l=Lt(e),i=at(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Tt(e,i,l),t!==null&&(Ve(t,e,l,r),gl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=Lt(e),l=at(n,r);l.tag=2,t!=null&&(l.callback=t),t=Tt(e,l,r),t!==null&&(Ve(t,e,r,n),gl(t,e,r))}};function ru(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(l,i):!0}function Ff(e,t,n){var r=!1,l=Ft,i=t.contextType;return typeof i=="object"&&i!==null?i=Ie(i):(l=we(t)?tn:fe.current,r=t.contextTypes,i=(r=r!=null)?Mn(e,l):Ft),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function lu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&oi.enqueueReplaceState(t,t.state,null)}function To(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Fa(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ie(i):(i=we(t)?tn:fe.current,l.context=Mn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Oo(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&oi.enqueueReplaceState(l,l.state,null),Ul(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Dn(e,t){try{var n="",r=t;do n+=jd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function $i(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z1=typeof WeakMap=="function"?WeakMap:Map;function Rf(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vl||(Vl=!0,$o=r),bo(e,t)},n}function Df(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){bo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bo(e,t),typeof r!="function"&&(bt===null?bt=new Set([this]):bt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function iu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z1;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=fp.bind(null,e,t,n),t.then(e,e))}function ou(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function au(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var J1=mt.ReactCurrentOwner,ye=!1;function de(e,t,n,r){t.child=e===null?mf(t,null,n,r):Fn(t,e.child,n,r)}function su(e,t,n,r,l){n=n.render;var i=t.ref;return Tn(t,l),r=$a(e,t,n,r,i,l),n=Ba(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ft(e,t,l)):(V&&n&&Oa(t),t.flags|=1,de(e,t,r,l),t.child)}function uu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!qa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Uf(e,t,i,r,l)):(e=Sl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:_r,n(o,r)&&e.ref===t.ref)return ft(e,t,l)}return t.flags|=1,e=At(i,r),e.ref=t.ref,e.return=t,t.child=e}function Uf(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(_r(i,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,ft(e,t,l)}return Lo(e,t,n,r,l)}function Hf(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(jn,Ne),Ne|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(jn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(jn,Ne),Ne|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(jn,Ne),Ne|=r;return de(e,t,l,n),t.child}function $f(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lo(e,t,n,r,l){var i=we(n)?tn:fe.current;return i=Mn(t,i),Tn(t,l),n=$a(e,t,n,r,i,l),r=Ba(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ft(e,t,l)):(V&&r&&Oa(t),t.flags|=1,de(e,t,n,l),t.child)}function cu(e,t,n,r,l){if(we(n)){var i=!0;Ml(t)}else i=!1;if(Tn(t,l),t.stateNode===null)xl(e,t),Ff(t,n,r),To(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ie(c):(c=we(n)?tn:fe.current,c=Mn(t,c));var d=n.getDerivedStateFromProps,g=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&lu(t,o,r,c),kt=!1;var h=t.memoizedState;o.state=h,Ul(t,r,o,l),s=t.memoizedState,a!==r||h!==s||xe.current||kt?(typeof d=="function"&&(Oo(t,n,d,r),s=t.memoizedState),(a=kt||ru(t,n,a,r,h,s,c))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,gf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ue(t.type,a),o.props=c,g=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ie(s):(s=we(n)?tn:fe.current,s=Mn(t,s));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||h!==s)&&lu(t,o,r,s),kt=!1,h=t.memoizedState,o.state=h,Ul(t,r,o,l);var w=t.memoizedState;a!==g||h!==w||xe.current||kt?(typeof v=="function"&&(Oo(t,n,v,r),w=t.memoizedState),(c=kt||ru(t,n,c,r,h,w,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ao(e,t,n,r,i,l)}function Ao(e,t,n,r,l,i){$f(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Gs(t,n,!1),ft(e,t,i);r=t.stateNode,J1.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fn(t,e.child,null,i),t.child=Fn(t,null,a,i)):de(e,t,a,i),t.memoizedState=r.state,l&&Gs(t,n,!0),t.child}function Bf(e){var t=e.stateNode;t.pendingContext?Qs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qs(e,t.context,!1),Ra(e,t.containerInfo)}function fu(e,t,n,r,l){return In(),ba(l),t.flags|=256,de(e,t,n,r),t.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function Io(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wf(e,t,n){var r=t.pendingProps,l=Q.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(Q,l&1),e===null)return Po(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ui(o,r,0,null),e=Jt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Io(n),t.memoizedState=Mo,e):Ya(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return q1(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=At(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=At(a,i):(i=Jt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Io(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Mo,r}return i=e.child,e=i.sibling,r=At(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ya(e,t){return t=ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ol(e,t,n,r){return r!==null&&ba(r),Fn(t,e.child,null,n),e=Ya(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function q1(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=$i(Error(x(422))),ol(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=ui({mode:"visible",children:r.children},l,0,null),i=Jt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Fn(t,e.child,null,o),t.child.memoizedState=Io(o),t.memoizedState=Mo,i);if(!(t.mode&1))return ol(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=$i(i,r,void 0),ol(e,t,o,r)}if(a=(o&e.childLanes)!==0,ye||a){if(r=le,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,ct(e,l),Ve(r,e,l,-1))}return Ja(),r=$i(Error(x(421))),ol(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=dp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,je=Ot(l.nextSibling),Ee=t,V=!0,$e=null,e!==null&&(be[Le++]=it,be[Le++]=ot,be[Le++]=nn,it=e.id,ot=e.overflow,nn=t),t=Ya(t,r.children),t.flags|=4096,t)}function du(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zo(e.return,t,n)}function Bi(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Vf(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(de(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&du(e,n,t);else if(e.tag===19)du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Hl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Bi(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Hl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Bi(t,!0,n,null,i);break;case"together":Bi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ep(e,t,n){switch(t.tag){case 3:Bf(t),In();break;case 5:vf(t);break;case 1:we(t.type)&&Ml(t);break;case 4:Ra(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;U(Rl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Wf(e,t,n):(U(Q,Q.current&1),e=ft(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Hf(e,t,n)}return ft(e,t,n)}var Yf,Fo,Xf,Qf;Yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fo=function(){};Xf=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Kt(tt.current);var i=null;switch(n){case"input":l=lo(e,l),r=lo(e,r),i=[];break;case"select":l=K({},l,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":l=ao(e,l),r=ao(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ll)}uo(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&H("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Qf=function(e,t,n,r){n!==r&&(t.flags|=4)};function er(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tp(e,t,n){var r=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return we(t.type)&&Al(),ue(t),null;case 3:return r=t.stateNode,Rn(),$(xe),$(fe),Ua(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ll(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(Vo($e),$e=null))),Fo(e,t),ue(t),null;case 5:Da(t);var l=Kt(br.current);if(n=t.type,e!==null&&t.stateNode!=null)Xf(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ue(t),null}if(e=Kt(tt.current),ll(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ke]=t,r[Or]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(l=0;l<ir.length;l++)H(ir[l],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ks(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":Ns(r,i),H("invalid",r)}uo(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&rl(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&rl(r.textContent,a,e),l=["children",""+a]):wr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Gr(r),Ss(r,i,!0);break;case"textarea":Gr(r),js(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ll)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ke]=t,e[Or]=r,Yf(e,t,!1,!1),t.stateNode=e;e:{switch(o=co(n,r),n){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<ir.length;l++)H(ir[l],e);l=r;break;case"source":H("error",e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"input":ks(e,r),l=lo(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=K({},r,{value:void 0}),H("invalid",e);break;case"textarea":Ns(e,r),l=ao(e,r),H("invalid",e);break;default:l=r}uo(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?jc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Sc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&kr(e,s):typeof s=="number"&&kr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(wr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&ga(e,i,s,o))}switch(n){case"input":Gr(e),Ss(e,r,!1);break;case"textarea":Gr(e),js(e);break;case"option":r.value!=null&&e.setAttribute("value",""+It(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?_n(e,!!r.multiple,i,!1):r.defaultValue!=null&&_n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Qf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Kt(br.current),Kt(tt.current),ll(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(i=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:rl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return ue(t),null;case 13:if($(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&je!==null&&t.mode&1&&!(t.flags&128))df(),In(),t.flags|=98560,i=!1;else if(i=ll(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Ke]=t}else In(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),i=!1}else $e!==null&&(Vo($e),$e=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):Ja())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return Rn(),Fo(e,t),e===null&&Pr(t.stateNode.containerInfo),ue(t),null;case 10:return Ma(t.type._context),ue(t),null;case 17:return we(t.type)&&Al(),ue(t),null;case 19:if($(Q),i=t.memoizedState,i===null)return ue(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)er(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Hl(e),o!==null){for(t.flags|=128,er(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>Un&&(t.flags|=128,r=!0,er(i,!1),t.lanes=4194304)}else{if(!r)if(e=Hl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),er(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!V)return ue(t),null}else 2*J()-i.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,er(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return Za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function np(e,t){switch(Ta(t),t.tag){case 1:return we(t.type)&&Al(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),$(xe),$(fe),Ua(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Da(t),null;case 13:if($(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(Q),null;case 4:return Rn(),null;case 10:return Ma(t.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var al=!1,ce=!1,rp=typeof WeakSet=="function"?WeakSet:Set,_=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function Ro(e,t,n){try{n()}catch(r){Z(e,t,r)}}var pu=!1;function lp(e,t){if(ko=Ol,e=Jc(),za(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,c=0,d=0,g=e,h=null;t:for(;;){for(var v;g!==n||l!==0&&g.nodeType!==3||(a=o+l),g!==i||r!==0&&g.nodeType!==3||(s=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(v=g.firstChild)!==null;)h=g,g=v;for(;;){if(g===e)break t;if(h===n&&++c===l&&(a=o),h===i&&++d===r&&(s=o),(v=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(So={focusedElem:e,selectionRange:n},Ol=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,O=w.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ue(t.type,k),O);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){Z(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return w=pu,pu=!1,w}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ro(t,n,i)}l=l.next}while(l!==r)}}function ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Do(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gf(e){var t=e.alternate;t!==null&&(e.alternate=null,Gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[Or],delete t[Eo],delete t[U1],delete t[H1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kf(e){return e.tag===5||e.tag===3||e.tag===4}function mu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ll));else if(r!==4&&(e=e.child,e!==null))for(Uo(e,t,n),e=e.sibling;e!==null;)Uo(e,t,n),e=e.sibling}function Ho(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ho(e,t,n),e=e.sibling;e!==null;)Ho(e,t,n),e=e.sibling}var ie=null,He=!1;function yt(e,t,n){for(n=n.child;n!==null;)Zf(e,t,n),n=n.sibling}function Zf(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 5:ce||Nn(n,t);case 6:var r=ie,l=He;ie=null,yt(e,t,n),ie=r,He=l,ie!==null&&(He?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(He?(e=ie,n=n.stateNode,e.nodeType===8?Ii(e.parentNode,n):e.nodeType===1&&Ii(e,n),Er(e)):Ii(ie,n.stateNode));break;case 4:r=ie,l=He,ie=n.stateNode.containerInfo,He=!0,yt(e,t,n),ie=r,He=l;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ro(n,t,o),l=l.next}while(l!==r)}yt(e,t,n);break;case 1:if(!ce&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,yt(e,t,n),ce=r):yt(e,t,n);break;default:yt(e,t,n)}}function hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rp),t.forEach(function(r){var l=pp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ie=a.stateNode,He=!1;break e;case 3:ie=a.stateNode.containerInfo,He=!0;break e;case 4:ie=a.stateNode.containerInfo,He=!0;break e}a=a.return}if(ie===null)throw Error(x(160));Zf(i,o,l),ie=null,He=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){Z(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jf(t,e),t=t.sibling}function Jf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Xe(e),r&4){try{mr(3,e,e.return),ai(3,e)}catch(k){Z(e,e.return,k)}try{mr(5,e,e.return)}catch(k){Z(e,e.return,k)}}break;case 1:De(t,e),Xe(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(De(t,e),Xe(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var l=e.stateNode;try{kr(l,"")}catch(k){Z(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&xc(l,i),co(a,o);var c=co(a,i);for(o=0;o<s.length;o+=2){var d=s[o],g=s[o+1];d==="style"?jc(l,g):d==="dangerouslySetInnerHTML"?Sc(l,g):d==="children"?kr(l,g):ga(l,d,g,c)}switch(a){case"input":io(l,i);break;case"textarea":wc(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?_n(l,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?_n(l,!!i.multiple,i.defaultValue,!0):_n(l,!!i.multiple,i.multiple?[]:"",!1))}l[Or]=i}catch(k){Z(e,e.return,k)}}break;case 6:if(De(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(x(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){Z(e,e.return,k)}}break;case 3:if(De(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(k){Z(e,e.return,k)}break;case 4:De(t,e),Xe(e);break;case 13:De(t,e),Xe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ga=J())),r&4&&hu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(c=ce)||d,De(t,e),ce=c):De(t,e),Xe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(g=_=d;_!==null;){switch(h=_,v=h.child,h.tag){case 0:case 11:case 14:case 15:mr(4,h,h.return);break;case 1:Nn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){Z(r,n,k)}}break;case 5:Nn(h,h.return);break;case 22:if(h.memoizedState!==null){vu(g);continue}}v!==null?(v.return=h,_=v):vu(g)}d=d.sibling}e:for(d=null,g=e;;){if(g.tag===5){if(d===null){d=g;try{l=g.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=g.stateNode,s=g.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Nc("display",o))}catch(k){Z(e,e.return,k)}}}else if(g.tag===6){if(d===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(k){Z(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;d===g&&(d=null),g=g.return}d===g&&(d=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:De(t,e),Xe(e),r&4&&hu(e);break;case 21:break;default:De(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kf(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(kr(l,""),r.flags&=-33);var i=mu(e);Ho(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=mu(e);Uo(e,a,o);break;default:throw Error(x(161))}}catch(s){Z(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ip(e,t,n){_=e,qf(e)}function qf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var l=_,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||al;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ce;a=al;var c=ce;if(al=o,(ce=s)&&!c)for(_=l;_!==null;)o=_,s=o.child,o.tag===22&&o.memoizedState!==null?yu(l):s!==null?(s.return=o,_=s):yu(l);for(;i!==null;)_=i,qf(i),i=i.sibling;_=l,al=a,ce=c}gu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,_=i):gu(e)}}function gu(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||ai(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&eu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eu(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var g=d.dehydrated;g!==null&&Er(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ce||t.flags&512&&Do(t)}catch(h){Z(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function vu(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function yu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ai(4,t)}catch(s){Z(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){Z(t,l,s)}}var i=t.return;try{Do(t)}catch(s){Z(t,i,s)}break;case 5:var o=t.return;try{Do(t)}catch(s){Z(t,o,s)}}}catch(s){Z(t,t.return,s)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var op=Math.ceil,Wl=mt.ReactCurrentDispatcher,Xa=mt.ReactCurrentOwner,Me=mt.ReactCurrentBatchConfig,I=0,le=null,q=null,oe=0,Ne=0,jn=$t(0),te=0,Ir=null,ln=0,si=0,Qa=0,hr=null,ve=null,Ga=0,Un=1/0,rt=null,Vl=!1,$o=null,bt=null,sl=!1,Et=null,Yl=0,gr=0,Bo=null,wl=-1,kl=0;function pe(){return I&6?J():wl!==-1?wl:wl=J()}function Lt(e){return e.mode&1?I&2&&oe!==0?oe&-oe:B1.transition!==null?(kl===0&&(kl=Ic()),kl):(e=R,e!==0||(e=window.event,e=e===void 0?16:Bc(e.type)),e):1}function Ve(e,t,n,r){if(50<gr)throw gr=0,Bo=null,Error(x(185));Ur(e,n,r),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(si|=n),te===4&&Nt(e,oe)),ke(e,r),n===1&&I===0&&!(t.mode&1)&&(Un=J()+500,li&&Bt()))}function ke(e,t){var n=e.callbackNode;Bd(e,t);var r=zl(e,e===le?oe:0);if(r===0)n!==null&&_s(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_s(n),t===1)e.tag===0?$1(xu.bind(null,e)):uf(xu.bind(null,e)),R1(function(){!(I&6)&&Bt()}),n=null;else{switch(Fc(r)){case 1:n=ka;break;case 4:n=Ac;break;case 16:n=Pl;break;case 536870912:n=Mc;break;default:n=Pl}n=a0(n,e0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function e0(e,t){if(wl=-1,kl=0,I&6)throw Error(x(327));var n=e.callbackNode;if(bn()&&e.callbackNode!==n)return null;var r=zl(e,e===le?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xl(e,r);else{t=r;var l=I;I|=2;var i=n0();(le!==e||oe!==t)&&(rt=null,Un=J()+500,Zt(e,t));do try{up();break}catch(a){t0(e,a)}while(!0);Aa(),Wl.current=i,I=l,q!==null?t=0:(le=null,oe=0,t=te)}if(t!==0){if(t===2&&(l=go(e),l!==0&&(r=l,t=Wo(e,l))),t===1)throw n=Ir,Zt(e,0),Nt(e,r),ke(e,J()),n;if(t===6)Nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!ap(l)&&(t=Xl(e,r),t===2&&(i=go(e),i!==0&&(r=i,t=Wo(e,i))),t===1))throw n=Ir,Zt(e,0),Nt(e,r),ke(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:Yt(e,ve,rt);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=Ga+500-J(),10<t)){if(zl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=jo(Yt.bind(null,e,ve,rt),t);break}Yt(e,ve,rt);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-We(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*op(r/1960))-r,10<r){e.timeoutHandle=jo(Yt.bind(null,e,ve,rt),r);break}Yt(e,ve,rt);break;case 5:Yt(e,ve,rt);break;default:throw Error(x(329))}}}return ke(e,J()),e.callbackNode===n?e0.bind(null,e):null}function Wo(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=Xl(e,t),e!==2&&(t=ve,ve=n,t!==null&&Vo(t)),e}function Vo(e){ve===null?ve=e:ve.push.apply(ve,e)}function ap(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ye(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~Qa,t&=~si,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function xu(e){if(I&6)throw Error(x(327));bn();var t=zl(e,0);if(!(t&1))return ke(e,J()),null;var n=Xl(e,t);if(e.tag!==0&&n===2){var r=go(e);r!==0&&(t=r,n=Wo(e,r))}if(n===1)throw n=Ir,Zt(e,0),Nt(e,t),ke(e,J()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,ve,rt),ke(e,J()),null}function Ka(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Un=J()+500,li&&Bt())}}function on(e){Et!==null&&Et.tag===0&&!(I&6)&&bn();var t=I;I|=1;var n=Me.transition,r=R;try{if(Me.transition=null,R=1,e)return e()}finally{R=r,Me.transition=n,I=t,!(I&6)&&Bt()}}function Za(){Ne=jn.current,$(jn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,F1(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Al();break;case 3:Rn(),$(xe),$(fe),Ua();break;case 5:Da(r);break;case 4:Rn();break;case 13:$(Q);break;case 19:$(Q);break;case 10:Ma(r.type._context);break;case 22:case 23:Za()}n=n.return}if(le=e,q=e=At(e.current,null),oe=Ne=t,te=0,Ir=null,Qa=si=ln=0,ve=hr=null,Gt!==null){for(t=0;t<Gt.length;t++)if(n=Gt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Gt=null}return e}function t0(e,t){do{var n=q;try{if(Aa(),vl.current=Bl,$l){for(var r=G.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}$l=!1}if(rn=0,re=ee=G=null,pr=!1,Lr=0,Xa.current=null,n===null||n.return===null){te=1,Ir=t,q=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=oe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=a,g=d.tag;if(!(d.mode&1)&&(g===0||g===11||g===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=ou(o);if(v!==null){v.flags&=-257,au(v,o,a,i,t),v.mode&1&&iu(i,c,t),t=v,s=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(s),t.updateQueue=k}else w.add(s);break e}else{if(!(t&1)){iu(i,c,t),Ja();break e}s=Error(x(426))}}else if(V&&a.mode&1){var O=ou(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),au(O,o,a,i,t),ba(Dn(s,a));break e}}i=s=Dn(s,a),te!==4&&(te=2),hr===null?hr=[i]:hr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Rf(i,s,t);qs(i,p);break e;case 1:a=s;var f=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(bt===null||!bt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Df(i,a,t);qs(i,y);break e}}i=i.return}while(i!==null)}l0(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function n0(){var e=Wl.current;return Wl.current=Bl,e===null?Bl:e}function Ja(){(te===0||te===3||te===2)&&(te=4),le===null||!(ln&268435455)&&!(si&268435455)||Nt(le,oe)}function Xl(e,t){var n=I;I|=2;var r=n0();(le!==e||oe!==t)&&(rt=null,Zt(e,t));do try{sp();break}catch(l){t0(e,l)}while(!0);if(Aa(),I=n,Wl.current=r,q!==null)throw Error(x(261));return le=null,oe=0,te}function sp(){for(;q!==null;)r0(q)}function up(){for(;q!==null&&!Ad();)r0(q)}function r0(e){var t=o0(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?l0(e):q=t,Xa.current=null}function l0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=np(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=tp(n,t,Ne),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Yt(e,t,n){var r=R,l=Me.transition;try{Me.transition=null,R=1,cp(e,t,n,r)}finally{Me.transition=l,R=r}return null}function cp(e,t,n,r){do bn();while(Et!==null);if(I&6)throw Error(x(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Wd(e,i),e===le&&(q=le=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,a0(Pl,function(){return bn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Me.transition,Me.transition=null;var o=R;R=1;var a=I;I|=4,Xa.current=null,lp(e,n),Jf(n,e),O1(So),Ol=!!ko,So=ko=null,e.current=n,ip(n),Md(),I=a,R=o,Me.transition=i}else e.current=n;if(sl&&(sl=!1,Et=e,Yl=l),i=e.pendingLanes,i===0&&(bt=null),Rd(n.stateNode),ke(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Vl)throw Vl=!1,e=$o,$o=null,e;return Yl&1&&e.tag!==0&&bn(),i=e.pendingLanes,i&1?e===Bo?gr++:(gr=0,Bo=e):gr=0,Bt(),null}function bn(){if(Et!==null){var e=Fc(Yl),t=Me.transition,n=R;try{if(Me.transition=null,R=16>e?16:e,Et===null)var r=!1;else{if(e=Et,Et=null,Yl=0,I&6)throw Error(x(331));var l=I;for(I|=4,_=e.current;_!==null;){var i=_,o=i.child;if(_.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(_=c;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:mr(8,d,i)}var g=d.child;if(g!==null)g.return=d,_=g;else for(;_!==null;){d=_;var h=d.sibling,v=d.return;if(Gf(d),d===c){_=null;break}if(h!==null){h.return=v,_=h;break}_=v}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var O=k.sibling;k.sibling=null,k=O}while(k!==null)}}_=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,_=o;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,_=p;break e}_=i.return}}var f=e.current;for(_=f;_!==null;){o=_;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,_=m;else e:for(o=f;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ai(9,a)}}catch(S){Z(a,a.return,S)}if(a===o){_=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,_=y;break e}_=a.return}}if(I=l,Bt(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(ql,e)}catch{}r=!0}return r}finally{R=n,Me.transition=t}}return!1}function wu(e,t,n){t=Dn(n,t),t=Rf(e,t,1),e=Tt(e,t,1),t=pe(),e!==null&&(Ur(e,1,t),ke(e,t))}function Z(e,t,n){if(e.tag===3)wu(e,e,n);else for(;t!==null;){if(t.tag===3){wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bt===null||!bt.has(r))){e=Dn(n,e),e=Df(t,e,1),t=Tt(t,e,1),e=pe(),t!==null&&(Ur(t,1,e),ke(t,e));break}}t=t.return}}function fp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(oe&n)===n&&(te===4||te===3&&(oe&130023424)===oe&&500>J()-Ga?Zt(e,0):Qa|=n),ke(e,t)}function i0(e,t){t===0&&(e.mode&1?(t=Jr,Jr<<=1,!(Jr&130023424)&&(Jr=4194304)):t=1);var n=pe();e=ct(e,t),e!==null&&(Ur(e,t,n),ke(e,n))}function dp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),i0(e,n)}function pp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),i0(e,n)}var o0;o0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,ep(e,t,n);ye=!!(e.flags&131072)}else ye=!1,V&&t.flags&1048576&&cf(t,Fl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xl(e,t),e=t.pendingProps;var l=Mn(t,fe.current);Tn(t,n),l=$a(null,t,r,e,l,n);var i=Ba();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(i=!0,Ml(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Fa(t),l.updater=oi,t.stateNode=l,l._reactInternals=t,To(t,r,e,n),t=Ao(null,t,r,!0,i,n)):(t.tag=0,V&&i&&Oa(t),de(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=hp(r),e=Ue(r,e),l){case 0:t=Lo(null,t,r,e,n);break e;case 1:t=cu(null,t,r,e,n);break e;case 11:t=su(null,t,r,e,n);break e;case 14:t=uu(null,t,r,Ue(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),Lo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),cu(e,t,r,l,n);case 3:e:{if(Bf(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,l=i.element,gf(e,t),Ul(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Dn(Error(x(423)),t),t=fu(e,t,r,n,l);break e}else if(r!==l){l=Dn(Error(x(424)),t),t=fu(e,t,r,n,l);break e}else for(je=Ot(t.stateNode.containerInfo.firstChild),Ee=t,V=!0,$e=null,n=mf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(In(),r===l){t=ft(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return vf(t),e===null&&Po(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,No(r,l)?o=null:i!==null&&No(r,i)&&(t.flags|=32),$f(e,t),de(e,t,o,n),t.child;case 6:return e===null&&Po(t),null;case 13:return Wf(e,t,n);case 4:return Ra(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),su(e,t,r,l,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,U(Rl,r._currentValue),r._currentValue=o,i!==null)if(Ye(i.value,o)){if(i.children===l.children&&!xe.current){t=ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=at(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),zo(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zo(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}de(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Tn(t,n),l=Ie(l),r=r(l),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,l=Ue(r,t.pendingProps),l=Ue(r.type,l),uu(e,t,r,l,n);case 15:return Uf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ue(r,l),xl(e,t),t.tag=1,we(r)?(e=!0,Ml(t)):e=!1,Tn(t,n),Ff(t,r,l),To(t,r,l,n),Ao(null,t,r,!0,e,n);case 19:return Vf(e,t,n);case 22:return Hf(e,t,n)}throw Error(x(156,t.tag))};function a0(e,t){return Lc(e,t)}function mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,t,n,r){return new mp(e,t,n,r)}function qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hp(e){if(typeof e=="function")return qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ya)return 11;if(e===xa)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=Ae(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")qa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case mn:return Jt(n.children,l,i,t);case va:o=8,l|=8;break;case eo:return e=Ae(12,n,t,l|2),e.elementType=eo,e.lanes=i,e;case to:return e=Ae(13,n,t,l),e.elementType=to,e.lanes=i,e;case no:return e=Ae(19,n,t,l),e.elementType=no,e.lanes=i,e;case gc:return ui(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mc:o=10;break e;case hc:o=9;break e;case ya:o=11;break e;case xa:o=14;break e;case wt:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ae(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Jt(e,t,n,r){return e=Ae(7,e,r,t),e.lanes=n,e}function ui(e,t,n,r){return e=Ae(22,e,r,t),e.elementType=gc,e.lanes=n,e.stateNode={isHidden:!1},e}function Wi(e,t,n){return e=Ae(6,e,null,t),e.lanes=n,e}function Vi(e,t,n){return t=Ae(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ei(0),this.expirationTimes=Ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function es(e,t,n,r,l,i,o,a,s){return e=new gp(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ae(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(i),e}function vp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function s0(e){if(!e)return Ft;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(we(n))return sf(e,n,t)}return t}function u0(e,t,n,r,l,i,o,a,s){return e=es(n,r,!0,e,l,i,o,a,s),e.context=s0(null),n=e.current,r=pe(),l=Lt(n),i=at(r,l),i.callback=t??null,Tt(n,i,l),e.current.lanes=l,Ur(e,l,r),ke(e,r),e}function ci(e,t,n,r){var l=t.current,i=pe(),o=Lt(l);return n=s0(n),t.context===null?t.context=n:t.pendingContext=n,t=at(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(l,t,o),e!==null&&(Ve(e,l,o,i),gl(e,l,o)),o}function Ql(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ts(e,t){ku(e,t),(e=e.alternate)&&ku(e,t)}function yp(){return null}var c0=typeof reportError=="function"?reportError:function(e){console.error(e)};function ns(e){this._internalRoot=e}fi.prototype.render=ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));ci(e,t,null,null)};fi.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){ci(null,e,null,null)}),t[ut]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&$c(e)}};function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Su(){}function xp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Ql(o);i.call(c)}}var o=u0(t,r,e,0,null,!1,!1,"",Su);return e._reactRootContainer=o,e[ut]=o.current,Pr(e.nodeType===8?e.parentNode:e),on(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=Ql(s);a.call(c)}}var s=es(e,0,!1,null,null,!1,!1,"",Su);return e._reactRootContainer=s,e[ut]=s.current,Pr(e.nodeType===8?e.parentNode:e),on(function(){ci(t,s,n,r)}),s}function pi(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=Ql(o);a.call(s)}}ci(t,o,e,l)}else o=xp(n,t,e,l,r);return Ql(o)}Rc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(Sa(t,n|1),ke(t,J()),!(I&6)&&(Un=J()+500,Bt()))}break;case 13:on(function(){var r=ct(e,1);if(r!==null){var l=pe();Ve(r,e,1,l)}}),ts(e,1)}};Na=function(e){if(e.tag===13){var t=ct(e,134217728);if(t!==null){var n=pe();Ve(t,e,134217728,n)}ts(e,134217728)}};Dc=function(e){if(e.tag===13){var t=Lt(e),n=ct(e,t);if(n!==null){var r=pe();Ve(n,e,t,r)}ts(e,t)}};Uc=function(){return R};Hc=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};po=function(e,t,n){switch(t){case"input":if(io(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ri(r);if(!l)throw Error(x(90));yc(r),io(r,l)}}}break;case"textarea":wc(e,n);break;case"select":t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}};_c=Ka;Pc=on;var wp={usingClientEntryPoint:!1,Events:[$r,yn,ri,Ec,Cc,Ka]},tr={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kp={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tc(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||yp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{ql=ul.inject(kp),et=ul}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wp;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rs(t))throw Error(x(200));return vp(e,t,null,n)};ze.createRoot=function(e,t){if(!rs(e))throw Error(x(299));var n=!1,r="",l=c0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=es(e,1,!1,null,null,n,!1,r,l),e[ut]=t.current,Pr(e.nodeType===8?e.parentNode:e),new ns(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Tc(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return on(e)};ze.hydrate=function(e,t,n){if(!di(t))throw Error(x(200));return pi(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!rs(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=c0;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=u0(t,null,e,1,n??null,l,!1,i,o),e[ut]=t.current,Pr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new fi(t)};ze.render=function(e,t,n){if(!di(t))throw Error(x(200));return pi(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!di(e))throw Error(x(40));return e._reactRootContainer?(on(function(){pi(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1};ze.unstable_batchedUpdates=Ka;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!di(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return pi(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function f0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f0)}catch(e){console.error(e)}}f0(),cc.exports=ze;var Sp=cc.exports,Nu=Sp;Ji.createRoot=Nu.createRoot,Ji.hydrateRoot=Nu.hydrateRoot;const Np=({contactFormRef:e,Serviceformref:t})=>{const[n,r]=X.useState(!1),l=()=>{r(!n)},i=()=>{e.current.scrollIntoView({behavior:"smooth"})};return u.jsxs(u.Fragment,{children:[u.jsxs("nav",{className:"flex sticky-header justify-between items-center bg-blue-800  transition-all duration-300 ",children:[u.jsx("a",{className:"p-2 font-bold text-4xl",href:"/",children:u.jsx("img",{className:"w-20",src:"images/logoo.png",alt:"Logo"})}),u.jsx("div",{className:"hidden md:flex"}),u.jsx("div",{className:`flex flex-col justify-center absolute top-16 right-1 bg-white w-32 font-semibold py-5 transition-transform duration-300 ease-in-out transform ${n?"scale-100 opacity-100":"scale-95 opacity-0"} md:hidden`}),u.jsx("button",{onClick:i,className:"m-5 bg-blue-900 focus:ring-2 font-semibold shadow-2xl text-white border-0 py-2 px-8 rounded text-lg transition-transform duration-300 hover:scale-105 focus:outline-none hidden md:flex",children:"Get IT Support"}),u.jsx("button",{onClick:l,className:"flex md:hidden items-center justify-center w-10 h-10 text-white focus:outline-none",children:u.jsxs("div",{className:`hamburger ${n?"open":""}`,children:[u.jsx("div",{className:"bar"}),u.jsx("div",{className:"bar"}),u.jsx("div",{className:"bar"})]})})]}),u.jsx("style",{jsx:!0,children:`
        .hamburger {
          display: block;
          cursor: pointer;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: white;
          margin: 4px 0;
          transition: 0.4s;
        }

        .hamburger.open .bar:nth-child(1) {
          transform: rotate(45deg);
          position: relative;
          top: 8px;
        }

        .hamburger.open .bar:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open .bar:nth-child(3) {
          transform: rotate(-45deg);
          position: relative;
          top: -8px;
        }
   
    .underl {
    position: relative;
    display: inline-block;  /* Ensures the underline fits properly */
}

.underl::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;  /* Adjust the height as needed */
    left: 0;
    bottom: -2px;  /* Adjust the offset distance as needed */
    background-color: blue;
    transition: width 0.3s ease;
    bottom: -5px
}

.underl:hover::after {
    width: 100%;
}

      `})]})};function mi(e,t,n,r){return new(n||(n=Promise))(function(l,i){function o(c){try{s(r.next(c))}catch(d){i(d)}}function a(c){try{s(r.throw(c))}catch(d){i(d)}}function s(c){var d;c.done?l(c.value):(d=c.value,d instanceof n?d:new n(function(g){g(d)})).then(o,a)}s((r=r.apply(e,[])).next())})}function Mt(e,t){var n,r,l,i,o={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(s){return function(c){return function(d){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(l=2&d[0]?r.return:d[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,d[1])).done)return l;switch(r=0,l&&(d=[2&d[0],l.value]),d[0]){case 0:case 1:l=d;break;case 4:return o.label++,{value:d[1],done:!1};case 5:o.label++,r=d[1],d=[0];continue;case 7:d=o.ops.pop(),o.trys.pop();continue;default:if(l=o.trys,!((l=l.length>0&&l[l.length-1])||d[0]!==6&&d[0]!==2)){o=0;continue}if(d[0]===3&&(!l||d[1]>l[0]&&d[1]<l[3])){o.label=d[1];break}if(d[0]===6&&o.label<l[1]){o.label=l[1],l=d;break}if(l&&o.label<l[2]){o.label=l[2],o.ops.push(d);break}l[2]&&o.ops.pop(),o.trys.pop();continue}d=t.call(e,o)}catch(g){d=[6,g],r=0}finally{n=l=0}if(5&d[0])throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}([s,c])}}}function Yo(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Be(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r,l,i=n.call(e),o=[];try{for(;(t===void 0||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(a){l={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(l)throw l.error}}return o}function Ze(e,t,n){if(arguments.length===2)for(var r,l=0,i=t.length;l<i;l++)!r&&l in t||(r||(r=Array.prototype.slice.call(t,0,l)),r[l]=t[l]);return e.concat(r||Array.prototype.slice.call(t))}function ju(e,t,n,r,l){for(var i=[],o=5;o<arguments.length;o++)i[o-5]=arguments[o];return mi(this,void 0,void 0,function(){var a,s,c,d,g,h;return Mt(this,function(v){switch(v.label){case 0:v.trys.push([0,12,13,14]),a=Yo(i),s=a.next(),v.label=1;case 1:if(s.done)return[3,11];switch(c=s.value,typeof c){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,jp(e,t,c,n,r,l)];case 3:return v.sent(),[3,10];case 4:return[4,d0(c)];case 5:return v.sent(),[3,10];case 6:return[4,c.apply(void 0,Ze([e,t,n,r,l],Be(i),!1))];case 7:return v.sent(),[3,10];case 8:return[4,c];case 9:v.sent(),v.label=10;case 10:return s=a.next(),[3,1];case 11:return[3,14];case 12:return d=v.sent(),g={error:d},[3,14];case 13:try{s&&!s.done&&(h=a.return)&&h.call(a)}finally{if(g)throw g.error}return[7];case 14:return[2]}})})}function jp(e,t,n,r,l,i){return mi(this,void 0,void 0,function(){var o,a;return Mt(this,function(s){switch(s.label){case 0:return o=e.textContent||"",a=function(c,d){var g=Be(d).slice(0);return Ze(Ze([],Be(c),!1),[NaN],!1).findIndex(function(h,v){return g[v]!==h})}(o,n),[4,Ep(e,Ze(Ze([],Be(_p(o,t,a)),!1),Be(Cp(n,t,a)),!1),r,l,i)];case 1:return s.sent(),[2]}})})}function d0(e){return mi(this,void 0,void 0,function(){return Mt(this,function(t){switch(t.label){case 0:return[4,new Promise(function(n){return setTimeout(n,e)})];case 1:return t.sent(),[2]}})})}function Ep(e,t,n,r,l){return mi(this,void 0,void 0,function(){var i,o,a,s,c,d,g,h,v,w,k,O,p;return Mt(this,function(f){switch(f.label){case 0:if(i=t,l){for(o=0,a=1;a<t.length;a++)if(s=Be([t[a-1],t[a]],2),c=s[0],(d=s[1]).length>c.length||d===""){o=a;break}i=t.slice(o,t.length)}f.label=1;case 1:f.trys.push([1,6,7,8]),g=Yo(function(m){var y,S,j,N,z,D,b;return Mt(this,function(W){switch(W.label){case 0:y=function(Se){return Mt(this,function(Re){switch(Re.label){case 0:return[4,{op:function(gt){return requestAnimationFrame(function(){return gt.textContent=Se})},opCode:function(gt){var Xn=gt.textContent||"";return Se===""||Xn.length>Se.length?"DELETE":"WRITING"}}];case 1:return Re.sent(),[2]}})},W.label=1;case 1:W.trys.push([1,6,7,8]),S=Yo(m),j=S.next(),W.label=2;case 2:return j.done?[3,5]:(N=j.value,[5,y(N)]);case 3:W.sent(),W.label=4;case 4:return j=S.next(),[3,2];case 5:return[3,8];case 6:return z=W.sent(),D={error:z},[3,8];case 7:try{j&&!j.done&&(b=S.return)&&b.call(S)}finally{if(D)throw D.error}return[7];case 8:return[2]}})}(i)),h=g.next(),f.label=2;case 2:return h.done?[3,5]:(v=h.value,w=v.opCode(e)==="WRITING"?n+n*(Math.random()-.5):r+r*(Math.random()-.5),v.op(e),[4,d0(w)]);case 3:f.sent(),f.label=4;case 4:return h=g.next(),[3,2];case 5:return[3,8];case 6:return k=f.sent(),O={error:k},[3,8];case 7:try{h&&!h.done&&(p=g.return)&&p.call(g)}finally{if(O)throw O.error}return[7];case 8:return[2]}})})}function Cp(e,t,n){var r,l;return n===void 0&&(n=0),Mt(this,function(i){switch(i.label){case 0:r=t(e),l=r.length,i.label=1;case 1:return n<l?[4,r.slice(0,++n).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}function _p(e,t,n){var r,l;return n===void 0&&(n=0),Mt(this,function(i){switch(i.label){case 0:r=t(e),l=r.length,i.label=1;case 1:return l>n?[4,r.slice(0,--l).join("")]:[3,3];case 2:return i.sent(),[3,1];case 3:return[2]}})}var Pp="index-module_type__E-SaG";(function(e,t){t===void 0&&(t={});var n=t.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var zp=X.memo(X.forwardRef(function(e,t){var n=e.sequence,r=e.repeat,l=e.className,i=e.speed,o=i===void 0?40:i,a=e.deletionSpeed,s=e.omitDeletionAnimation,c=s!==void 0&&s,d=e.preRenderFirstString,g=d!==void 0&&d,h=e.wrapper,v=h===void 0?"span":h,w=e.splitter,k=w===void 0?function(E){return Ze([],Be(E),!1)}:w,O=e.cursor,p=O===void 0||O,f=e.style,m=function(E,M){var F={};for(var ne in E)Object.prototype.hasOwnProperty.call(E,ne)&&M.indexOf(ne)<0&&(F[ne]=E[ne]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function"){var ge=0;for(ne=Object.getOwnPropertySymbols(E);ge<ne.length;ge++)M.indexOf(ne[ge])<0&&Object.prototype.propertyIsEnumerable.call(E,ne[ge])&&(F[ne[ge]]=E[ne[ge]])}return F}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),y=m["aria-label"],S=m["aria-hidden"],j=m.role;a||(a=o);var N=new Array(2).fill(40);[o,a].forEach(function(E,M){switch(typeof E){case"number":N[M]=Math.abs(E-100);break;case"object":var F=E.type,ne=E.value;if(typeof ne!="number")break;F==="keyStrokeDelayInMs"&&(N[M]=ne)}});var z,D,b,W,Se,Re,gt=N[0],Xn=N[1],vt=function(E,M){M===void 0&&(M=null);var F=X.useRef(M);return X.useEffect(function(){E&&(typeof E=="function"?E(F.current):E.current=F.current)},[E]),F}(t),fn=Pp;z=l?"".concat(p?fn+" ":"").concat(l):p?fn:"",D=X.useRef(function(){var E,M=n;r===1/0?E=ju:typeof r=="number"&&(M=Array(1+r).fill(n).flat());var F=E?Ze(Ze([],Be(M),!1),[E],!1):Ze([],Be(M),!1);return ju.apply(void 0,Ze([vt.current,k,gt,Xn,c],Be(F),!1)),function(){vt.current}}),b=X.useRef(),W=X.useRef(!1),Se=X.useRef(!1),Re=Be(X.useState(0),2)[1],W.current&&(Se.current=!0),X.useEffect(function(){return W.current||(b.current=D.current(),W.current=!0),Re(function(E){return E+1}),function(){Se.current&&b.current&&b.current()}},[]);var C=v,T=g?n.find(function(E){return typeof E=="string"})||"":null;return xr.createElement(C,{"aria-hidden":S,"aria-label":y,role:j,style:f,className:z,children:y?xr.createElement("span",{"aria-hidden":"true",ref:vt,children:T}):T,ref:y?void 0:vt})}),function(e,t){return!0});const Op="/react-port/assets/home-BogEVynH.png",Tp=()=>u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"flex    bg-gray-50 p-5 md:p-20 lg:pt-10 2xl:p-20 flex-col backimg items-center lg:flex-row justify-center gap-5",children:[u.jsxs("div",{className:"p-5 text-center lg:text-left",children:[u.jsxs("p",{className:"text-4xl p-2 sm:text-5xl md:text-6xl",children:[u.jsx("span",{className:"zz text-blue-900 zz",children:"Innovate and Elevate with"}),"-",u.jsx("strong",{className:"zz text-4xl logo-main sm:text-5xl md:text-6xl text-blue-800",children:"Code Viper"})]}),u.jsx("h3",{className:"flex zz logo-mainn p-2 items-center justify-cente text-2xl sm:text-3xl md:text-4xl intro-desc",children:u.jsx(zp,{sequence:["Leading Software Solutions Company",2e3],wrapper:"span",speed:60,className:"text-blue-800 font-arial font-semibold",repeat:0})}),u.jsx("br",{}),u.jsx("div",{className:"flex flex-col items-center justify-center lg:items-start",children:u.jsx("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 text-center lg:text-left mx-auto lg:mx-0",children:"Transform your business with custom IT solutions designed to meet specific needs. Expertise ensures competitiveness and success through innovative technology and digital strategies."})})]}),u.jsx("img",{className:"w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 mt-2 rounded-xl",src:"images/home-2.png",alt:"home visual"})]}),u.jsxs("div",{className:"home-shape-animation",children:[u.jsx("div",{className:"shape-1",children:u.jsx("img",{src:"images/1.png",loading:"lazy",alt:"shape image"})}),u.jsx("div",{className:"shape-2",children:u.jsx("img",{src:"images/2.png",loading:"lazy",alt:"shape image"})}),u.jsx("div",{className:"shape-3",children:u.jsx("img",{src:"images/3.png",loading:"lazy",alt:"shape image"})}),u.jsx("div",{className:"shape-4",children:u.jsx("img",{src:"images/4.png",loading:"lazy",alt:"shape image"})}),u.jsx("div",{className:"shape-5",children:u.jsx("img",{src:"images/5.png",loading:"lazy",alt:"shape image"})}),u.jsx("div",{className:"shape-6",children:u.jsx("img",{src:"images/6.png",loading:"lazy",alt:"shape image"})}),u.jsx("div",{className:"shape-7",children:u.jsx("img",{src:"images/7.png",loading:"lazy",alt:"shape image"})})]}),u.jsx("style",{jsx:!0,children:`
      .zz{
      position:relative;
      z-index: 10;
      }
        .logo-main {
          font-family: "Audiowide", sans-serif;
        }

        .logo-mainn {
          font-family: 'Nunito', sans-serif;
        }

        .backimg {
          background-image: url(${Op});
        }

        
        .home-shape-animation .shape-1 {
          position: absolute;
          right: 10%;
          top: 16%;
          z-index: 1;
          -webkit-animation-name: rotateMe;
          animation-name: rotateMe;
          -webkit-animation-duration: 10s;
          animation-duration: 10s;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
        }

        .home-shape-animation .shape-2 {
          position: absolute;
          left: 33%;
          top: 18%;
          z-index: 2;;
        }

        .home-shape-animation .shape-2 img {
          -webkit-animation-name: rotateMe;
          animation-name: rotateMe;
          -webkit-animation-duration: 10s;
          animation-duration: 10s;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
        }

        .home-shape-animation .shape-3 {
          position: absolute;
          left: 5%;
          bottom: 25%;
          z-index: 2;;
          -webkit-animation: animationFramesOne 20s infinite linear;
          animation: animationFramesOne 20s infinite linear;
        }

        .home-shape-animation .shape-4 {
          position: absolute;
          right: 10%;
          bottom: 25%;
          z-index: 2;;
          -webkit-animation: animationFramesTwo 20s infinite linear;
          animation: animationFramesTwo 20s infinite linear;
        }

        .home-shape-animation .shape-5 {
          position: absolute;
          left: 10%;
          top: 16%;
          z-index: 2;     
              -webkit-animation: moveLeftBounce 3s linear infinite;
          animation: moveLeftBounce 3s linear infinite;
        }

        .home-shape-animation .shape-6 {
          position: absolute;
          left: 50%;
          bottom: 15%;
          z-index: 2;;
          -webkit-animation: rotate3d 4s linear infinite;
          animation: rotate3d 4s linear infinite;
        }

        .home-shape-animation .shape-7 {
          position: absolute;
          left: 50%;
          top: 15%;
          z-index: 2;
          -webkit-animation: moveScale 3s linear infinite;
          animation: moveScale 3s linear infinite;
        }

        @-webkit-keyframes rotateMe {
          from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        @keyframes rotateMe {
          from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        @-webkit-keyframes animationFramesOne {
          0% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
          20% {
            -webkit-transform: translate(73px, -1px) rotate(36deg);
            transform: translate(73px, -1px) rotate(36deg);
          }
          40% {
            -webkit-transform: translate(141px, 72px) rotate(72deg);
            transform: translate(141px, 72px) rotate(72deg);
          }
          60% {
            -webkit-transform: translate(83px, 122px) rotate(108deg);
            transform: translate(83px, 122px) rotate(108deg);
          }
          80% {
            -webkit-transform: translate(-40px, 72px) rotate(144deg);
            transform: translate(-40px, 72px) rotate(144deg);
          }
          100% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
        }

        @keyframes animationFramesOne {
          0% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
          20% {
            -webkit-transform: translate(73px, -1px) rotate(36deg);
            transform: translate(73px, -1px) rotate(36deg);
          }
          40% {
            -webkit-transform: translate(141px, 72px) rotate(72deg);
            transform: translate(141px, 72px) rotate(72deg);
          }
          60% {
            -webkit-transform: translate(83px, 122px) rotate(108deg);
            transform: translate(83px, 122px) rotate(108deg);
          }
          80% {
            -webkit-transform: translate(-40px, 72px) rotate(144deg);
            transform: translate(-40px, 72px) rotate(144deg);
          }
          100% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
        }

        @-webkit-keyframes animationFramesTwo {
          0% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
          20% {
            -webkit-transform: translate(-73px, 1px) rotate(-36deg);
            transform: translate(-73px, 1px) rotate(-36deg);
          }
          40% {
            -webkit-transform: translate(-141px, -72px) rotate(-72deg);
            transform: translate(-141px, -72px) rotate(-72deg);
          }
          60% {
            -webkit-transform: translate(-83px, -122px) rotate(-108deg);
            transform: translate(-83px, -122px) rotate(-108deg);
          }
          80% {
            -webkit-transform: translate(40px, -72px) rotate(-144deg);
            transform: translate(40px, -72px) rotate(-144deg);
          }
          100% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
        }

        @keyframes animationFramesTwo {
          0% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
          20% {
            -webkit-transform: translate(-73px, 1px) rotate(-36deg);
            transform: translate(-73px, 1px) rotate(-36deg);
          }
          40% {
            -webkit-transform: translate(-141px, -72px) rotate(-72deg);
            transform: translate(-141px, -72px) rotate(-72deg);
          }
          60% {
            -webkit-transform: translate(-83px, -122px) rotate(-108deg);
            transform: translate(-83px, -122px) rotate(-108deg);
          }
          80% {
            -webkit-transform: translate(40px, -72px) rotate(-144deg);
            transform: translate(40px, -72px) rotate(-144deg);
          }
          100% {
            -webkit-transform: translate(0px, 0px) rotate(0deg);
            transform: translate(0px, 0px) rotate(0deg);
          }
        }

        @-webkit-keyframes rotate3d {
          0% {
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
          }
          100% {
            -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
          }
        }

        @keyframes rotate3d {
          0% {
            -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
          }
          100% {
            -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
          }
        }

        @-webkit-keyframes moveScale {
          0% {
            -webkit-transform: scale(.6);
            transform: scale(.6);
          }
          50% {
            -webkit-transform: scale(.8);
            transform: scale(.8);
          }
          100% {
            -webkit-transform: scale(.6);
            transform: scale(.6);
          }
        }

        @keyframes moveScale {
          0% {
            -webkit-transform: scale(.6);
            transform: scale(.6);
          }
          50% {
            -webkit-transform: scale(.8);
            transform: scale(.8);
          }
          100% {
            -webkit-transform: scale(.6);
            transform: scale(.6);
          }
        }

        @-webkit-keyframes moveLeftBounce {
          0% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
          }
          50% {
            -webkit-transform: translateX(20px);
            transform: translateX(20px);
          }
          100% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
          }
        }

        @keyframes moveLeftBounce {
          0% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
          }
          50% {
            -webkit-transform: translateX(20px);
            transform: translateX(20px);
          }
          100% {
            -webkit-transform: translateX(0px);
            transform: translateX(0px);
          }
        }

        @-webkit-keyframes moveBounce {
          0% {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
          50% {
            -webkit-transform: translateY(20px);
            transform: translateY(20px);
          }
          100% {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
        }

        @keyframes moveBounce {
          0% {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
          50% {
            -webkit-transform: translateY(20px);
            transform: translateY(20px);
          }
          100% {
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
          }
        }
      `})]}),bp="/react-port/assets/dot-bg-C9iTMc-j.png",Lp=()=>u.jsxs("footer",{className:"footer  text-white p-20",children:[u.jsxs("div",{className:"flex justify-between gap-3 p-10 mq-footer ",children:[u.jsxs("div",{children:[u.jsx("img",{className:"w-3/4 ",src:"images/cv.png",alt:""}),u.jsx("p",{className:"w-3/4 mt-2",children:"Discover top-notch service aligned with your needs. Our expert team delivers quality, efficiency, and support to drive your success. Connect with us for a partnership built on excellence. Your satisfaction, our commitment."}),u.jsxs("div",{className:"flex space-x-4 mt-4",children:[u.jsx("a",{href:"",className:"ft-icon  rounded-md  p-1 linkdin  w-9 h-9  bg-white ",children:u.jsx("svg",{className:"w-6 m-auto",xmlnsXlink:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:u.jsx("path",{d:"M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"})})}),u.jsx("a",{href:"#",className:"ft-icon p-1 rounded-md facebook h-9 w-9 bg-white",children:u.jsx("svg",{className:"w-5 m-auto ",xmlnsXlink:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:u.jsx("path",{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"})})}),u.jsxs("a",{href:"#",className:"ft-icon p-1 rounded-md whatsapp h-9 w-9 bg-white",children:[" ",u.jsx("svg",{className:"w-6 m-auto ",xmlnsXlink:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:u.jsx("path",{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"})})]}),u.jsx("a",{href:"#",className:"ft-icon p-1 rounded-md insta h-9 w-9 bg-white",children:u.jsx("svg",{className:"w-6 m-auto ",xmlnsXlink:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:u.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})}),u.jsx("a",{href:"",className:"ft-icon p-1 rounded-md github h-9 w-9 bg-white ",children:u.jsx("svg",{className:"w-6 m-auto ",xmlnsXlink:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:u.jsx("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})})]})]}),u.jsxs("div",{className:"w-1/2 ",children:[u.jsx("div",{className:"font-bold text-2xl ",children:"Our Services"}),u.jsx("span",{className:"p-1",children:u.jsx("span",{})}),u.jsx("hr",{}),u.jsx("h1",{className:"m-2 text-lg",children:"Startup Solutions"}),u.jsx("h1",{className:"m-2 text-lg",children:"Web Development"}),u.jsx("h1",{className:"m-2 text-lg",children:"Networking Services"}),u.jsx("h1",{className:"m-2 text-lg",children:"Apps Development"})]}),u.jsxs("div",{className:"w-1/2",children:[u.jsx("div",{className:"font-bold text-2xl",children:"Useful Links"}),u.jsx("hr",{}),u.jsx("h1",{className:"m-2",children:"About Us"}),u.jsx("h1",{className:"m-2 text-lg",children:"Case Study"})]}),u.jsxs("div",{className:"w-1/2",children:[u.jsx("div",{className:"font-bold text-2xl",children:"Contact Info"}),u.jsx("hr",{}),u.jsx("p",{className:"m-2 text-lg",children:" info@example.com"}),u.jsx("p",{className:"m-2 text-lg",children:" (123) 456-7890"})]})]}),u.jsx("hr",{}),u.jsx("div",{className:"text-center mt-8",children:u.jsxs("p",{className:"font-semibold text-lg",children:[" Code Viper ",u.jsx("span",{}),"All rights reserved © ",new Date().getFullYear()]})}),u.jsx("style",{jsx:!0,children:`
        
          .footer{
         background-image: url(${bp});
  background-color: #1e3a8a;
  }
        
      `})]}),Ap=()=>u.jsx(u.Fragment,{children:u.jsxs("section",{className:"w-full  psec",children:[u.jsx("h2",{className:"flex justify-center text-5xl m-10 font-extrabold ",style:{color:"#404040"},children:"Our Portfolio"}),u.jsxs("div",{className:"flex gap-10 p-5 justify-evenly flex-wrap pb-40",children:[u.jsx("a",{href:"",className:"none",children:u.jsx("img",{className:"",src:"images/Buses_Plus_1.png",alt:""})}),u.jsx("a",{href:"",children:u.jsx("img",{className:"w-1/4",src:"images/sponge_3.png",alt:""})}),u.jsx("a",{href:"",children:u.jsx("img",{className:"w-1/4",src:"images/Watermart.png",alt:""})}),u.jsx("a",{href:"",children:u.jsx("img",{className:"w-1/4",src:"images/Thorai.jpeg",alt:""})}),u.jsx("a",{href:"",children:u.jsx("img",{className:"w-1/4",src:"images/wise_eye_1.png",alt:""})}),u.jsx("a",{href:"",children:u.jsx("img",{className:"w-1/4",src:"images/Buses_Plus_1.png",alt:""})})]})]})}),Eu=()=>{};let ls={},p0={},m0=null,h0={mark:Eu,measure:Eu};try{typeof window<"u"&&(ls=window),typeof document<"u"&&(p0=document),typeof MutationObserver<"u"&&(m0=MutationObserver),typeof performance<"u"&&(h0=performance)}catch{}const{userAgent:Cu=""}=ls.navigator||{},Rt=ls,B=p0,_u=m0,cl=h0;Rt.document;const ht=!!B.documentElement&&!!B.head&&typeof B.addEventListener=="function"&&typeof B.createElement=="function",g0=~Cu.indexOf("MSIE")||~Cu.indexOf("Trident/");var Y="classic",v0="duotone",Ce="sharp",_e="sharp-duotone",Mp=[Y,v0,Ce,_e],Ip={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Pu={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Fp=["kit"],Rp=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Dp=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Up={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Hp={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},$p={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Bp={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Wp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Vp={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},y0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Yp=["solid","regular","light","thin","duotone","brands"],x0=[1,2,3,4,5,6,7,8,9,10],Xp=x0.concat([11,12,13,14,15,16,17,18,19,20]),or={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qp=[...Object.keys(Bp),...Yp,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",or.GROUP,or.SWAP_OPACITY,or.PRIMARY,or.SECONDARY].concat(x0.map(e=>"".concat(e,"x"))).concat(Xp.map(e=>"w-".concat(e))),Gp={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Kp={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Zp={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},zu={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const dt="___FONT_AWESOME___",Xo=16,w0="fa",k0="svg-inline--fa",an="data-fa-i2svg",Qo="data-fa-pseudo-element",Jp="data-fa-pseudo-element-pending",is="data-prefix",os="data-icon",Ou="fontawesome-i2svg",qp="async",em=["HTML","HEAD","STYLE","SCRIPT"],S0=(()=>{try{return!0}catch{return!1}})(),N0=[Y,Ce,_e];function Wr(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[Y]}})}const j0={...y0};j0[Y]={...y0[Y],...Pu.kit,...Pu["kit-duotone"]};const qt=Wr(j0),Go={...Vp};Go[Y]={...Go[Y],...zu.kit,...zu["kit-duotone"]};const Fr=Wr(Go),Ko={...Wp};Ko[Y]={...Ko[Y],...Zp.kit};const en=Wr(Ko),Zo={...$p};Zo[Y]={...Zo[Y],...Kp.kit};const tm=Wr(Zo),nm=Rp,E0="fa-layers-text",rm=Dp,lm={...Ip};Wr(lm);const im=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yi=or,Hn=new Set;Object.keys(Fr[Y]).map(Hn.add.bind(Hn));Object.keys(Fr[Ce]).map(Hn.add.bind(Hn));Object.keys(Fr[_e]).map(Hn.add.bind(Hn));const om=[...Fp,...Qp],vr=Rt.FontAwesomeConfig||{};function am(e){var t=B.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function sm(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}B&&typeof B.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const l=sm(am(n));l!=null&&(vr[r]=l)});const C0={styleDefault:"solid",familyDefault:"classic",cssPrefix:w0,replacementClass:k0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vr.familyPrefix&&(vr.cssPrefix=vr.familyPrefix);const $n={...C0,...vr};$n.autoReplaceSvg||($n.observeMutations=!1);const P={};Object.keys(C0).forEach(e=>{Object.defineProperty(P,e,{enumerable:!0,set:function(t){$n[e]=t,yr.forEach(n=>n(P))},get:function(){return $n[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(e){$n.cssPrefix=e,yr.forEach(t=>t(P))},get:function(){return $n.cssPrefix}});Rt.FontAwesomeConfig=P;const yr=[];function um(e){return yr.push(e),()=>{yr.splice(yr.indexOf(e),1)}}const xt=Xo,Je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cm(e){if(!e||!ht)return;const t=B.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=B.head.childNodes;let r=null;for(let l=n.length-1;l>-1;l--){const i=n[l],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return B.head.insertBefore(t,r),e}const fm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rr(){let e=12,t="";for(;e-- >0;)t+=fm[Math.random()*62|0];return t}function Yn(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function as(e){return e.classList?Yn(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function _0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dm(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(_0(e[n]),'" '),"").trim()}function hi(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function ss(e){return e.size!==Je.size||e.x!==Je.x||e.y!==Je.y||e.rotate!==Je.rotate||e.flipX||e.flipY}function pm(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const l={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:l,inner:s,path:c}}function mm(e){let{transform:t,width:n=Xo,height:r=Xo,startCentered:l=!1}=e,i="";return l&&g0?i+="translate(".concat(t.x/xt-n/2,"em, ").concat(t.y/xt-r/2,"em) "):l?i+="translate(calc(-50% + ".concat(t.x/xt,"em), calc(-50% + ").concat(t.y/xt,"em)) "):i+="translate(".concat(t.x/xt,"em, ").concat(t.y/xt,"em) "),i+="scale(".concat(t.size/xt*(t.flipX?-1:1),", ").concat(t.size/xt*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var hm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function P0(){const e=w0,t=k0,n=P.cssPrefix,r=P.replacementClass;let l=hm;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");l=l.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return l}let Tu=!1;function Xi(){P.autoAddCss&&!Tu&&(cm(P0()),Tu=!0)}var gm={mixout(){return{dom:{css:P0,insertCss:Xi}}},hooks(){return{beforeDOMElementCreation(){Xi()},beforeI2svg(){Xi()}}}};const pt=Rt||{};pt[dt]||(pt[dt]={});pt[dt].styles||(pt[dt].styles={});pt[dt].hooks||(pt[dt].hooks={});pt[dt].shims||(pt[dt].shims=[]);var qe=pt[dt];const z0=[],O0=function(){B.removeEventListener("DOMContentLoaded",O0),Gl=1,z0.map(e=>e())};let Gl=!1;ht&&(Gl=(B.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(B.readyState),Gl||B.addEventListener("DOMContentLoaded",O0));function vm(e){ht&&(Gl?setTimeout(e,0):z0.push(e))}function Vr(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?_0(e):"<".concat(t," ").concat(dm(n),">").concat(r.map(Vr).join(""),"</").concat(t,">")}function bu(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qi=function(t,n,r,l){var i=Object.keys(t),o=i.length,a=n,s,c,d;for(r===void 0?(s=1,d=t[i[0]]):(s=0,d=r);s<o;s++)c=i[s],d=a(d,t[c],c,t);return d};function ym(e){const t=[];let n=0;const r=e.length;for(;n<r;){const l=e.charCodeAt(n++);if(l>=55296&&l<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((l&1023)<<10)+(i&1023)+65536):(t.push(l),n--)}else t.push(l)}return t}function Jo(e){const t=ym(e);return t.length===1?t[0].toString(16):null}function xm(e,t){const n=e.length;let r=e.charCodeAt(t),l;return r>=55296&&r<=56319&&n>t+1&&(l=e.charCodeAt(t+1),l>=56320&&l<=57343)?(r-55296)*1024+l-56320+65536:r}function Lu(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function qo(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,l=Lu(t);typeof qe.hooks.addPack=="function"&&!r?qe.hooks.addPack(e,Lu(t)):qe.styles[e]={...qe.styles[e]||{},...l},e==="fas"&&qo("fa",t)}const{styles:Xt,shims:wm}=qe,km={[Y]:Object.values(en[Y]),[Ce]:Object.values(en[Ce]),[_e]:Object.values(en[_e])};let us=null,T0={},b0={},L0={},A0={},M0={};const Sm={[Y]:Object.keys(qt[Y]),[Ce]:Object.keys(qt[Ce]),[_e]:Object.keys(qt[_e])};function Nm(e){return~om.indexOf(e)}function jm(e,t){const n=t.split("-"),r=n[0],l=n.slice(1).join("-");return r===e&&l!==""&&!Nm(l)?l:null}const I0=()=>{const e=r=>Qi(Xt,(l,i,o)=>(l[o]=Qi(i,r,{}),l),{});T0=e((r,l,i)=>(l[3]&&(r[l[3]]=i),l[2]&&l[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=i}),r)),b0=e((r,l,i)=>(r[i]=i,l[2]&&l[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=i}),r)),M0=e((r,l,i)=>{const o=l[2];return r[i]=i,o.forEach(a=>{r[a]=i}),r});const t="far"in Xt||P.autoFetchSvg,n=Qi(wm,(r,l)=>{const i=l[0];let o=l[1];const a=l[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:a}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:a}),r},{names:{},unicodes:{}});L0=n.names,A0=n.unicodes,us=gi(P.styleDefault,{family:P.familyDefault})};um(e=>{us=gi(e.styleDefault,{family:P.familyDefault})});I0();function cs(e,t){return(T0[e]||{})[t]}function Em(e,t){return(b0[e]||{})[t]}function Ct(e,t){return(M0[e]||{})[t]}function F0(e){return L0[e]||{prefix:null,iconName:null}}function Cm(e){const t=A0[e],n=cs("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dt(){return us}const fs=()=>({prefix:null,iconName:null,rest:[]});function gi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Y}=t,r=qt[n][e],l=Fr[n][e]||Fr[n][r],i=e in qe.styles?e:null;return l||i||null}const _m={[Y]:Object.keys(en[Y]),[Ce]:Object.keys(en[Ce]),[_e]:Object.keys(en[_e])};function vi(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[Y]:"".concat(P.cssPrefix,"-").concat(Y),[Ce]:"".concat(P.cssPrefix,"-").concat(Ce),[_e]:"".concat(P.cssPrefix,"-").concat(_e)};let l=null,i=Y;const o=Mp.filter(s=>s!==v0);o.forEach(s=>{(e.includes(r[s])||e.some(c=>_m[s].includes(c)))&&(i=s)});const a=e.reduce((s,c)=>{const d=jm(P.cssPrefix,c);if(Xt[c]?(c=km[i].includes(c)?tm[i][c]:c,l=c,s.prefix=c):Sm[i].indexOf(c)>-1?(l=c,s.prefix=gi(c,{family:i})):d?s.iconName=d:c!==P.replacementClass&&!o.some(g=>c===r[g])&&s.rest.push(c),!n&&s.prefix&&s.iconName){const g=l==="fa"?F0(s.iconName):{},h=Ct(s.prefix,s.iconName);g.prefix&&(l=null),s.iconName=g.iconName||h||s.iconName,s.prefix=g.prefix||s.prefix,s.prefix==="far"&&!Xt.far&&Xt.fas&&!P.autoFetchSvg&&(s.prefix="fas")}return s},fs());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===Ce&&(Xt.fass||P.autoFetchSvg)&&(a.prefix="fass",a.iconName=Ct(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===_e&&(Xt.fasds||P.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Ct(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||l==="fa")&&(a.prefix=Dt()||"fas"),a}class Pm{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const l=n.reduce(this._pullDefinitions,{});Object.keys(l).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...l[i]},qo(i,l[i]);const o=en[Y][i];o&&qo(o,l[i]),I0()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(l=>{const{prefix:i,iconName:o,icon:a}=r[l],s=a[2];t[i]||(t[i]={}),s.length>0&&s.forEach(c=>{typeof c=="string"&&(t[i][c]=a)}),t[i][o]=a}),t}}let Au=[],En={};const Ln={},zm=Object.keys(Ln);function Om(e,t){let{mixoutsTo:n}=t;return Au=e,En={},Object.keys(Ln).forEach(r=>{zm.indexOf(r)===-1&&delete Ln[r]}),Au.forEach(r=>{const l=r.mixout?r.mixout():{};if(Object.keys(l).forEach(i=>{typeof l[i]=="function"&&(n[i]=l[i]),typeof l[i]=="object"&&Object.keys(l[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=l[i][o]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(o=>{En[o]||(En[o]=[]),En[o].push(i[o])})}r.provides&&r.provides(Ln)}),n}function ea(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),l=2;l<n;l++)r[l-2]=arguments[l];return(En[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function sn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(En[e]||[]).forEach(i=>{i.apply(null,n)})}function Ut(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ln[e]?Ln[e].apply(null,t):void 0}function ta(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Dt();if(t)return t=Ct(n,t)||t,bu(R0.definitions,n,t)||bu(qe.styles,n,t)}const R0=new Pm,Tm=()=>{P.autoReplaceSvg=!1,P.observeMutations=!1,sn("noAuto")},bm={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ht?(sn("beforeI2svg",e),Ut("pseudoElements2svg",e),Ut("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,vm(()=>{Am({autoReplaceSvgRoot:t}),sn("watch",e)})}},Lm={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ct(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=gi(e[0]);return{prefix:n,iconName:Ct(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(P.cssPrefix,"-"))>-1||e.match(nm))){const t=vi(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Dt(),iconName:Ct(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Dt();return{prefix:t,iconName:Ct(t,e)||e}}}},Te={noAuto:Tm,config:P,dom:bm,parse:Lm,library:R0,findIconDefinition:ta,toHtml:Vr},Am=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=B}=e;(Object.keys(qe.styles).length>0||P.autoFetchSvg)&&ht&&P.autoReplaceSvg&&Te.dom.i2svg({node:t})};function yi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Vr(n))}}),Object.defineProperty(e,"node",{get:function(){if(!ht)return;const n=B.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Mm(e){let{children:t,main:n,mask:r,attributes:l,styles:i,transform:o}=e;if(ss(o)&&n.found&&!r.found){const{width:a,height:s}=n,c={x:a/s/2,y:.5};l.style=hi({...i,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:l,children:t}]}function Im(e){let{prefix:t,iconName:n,children:r,attributes:l,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...l,id:o},children:r}]}]}function ds(e){const{icons:{main:t,mask:n},prefix:r,iconName:l,transform:i,symbol:o,title:a,maskId:s,titleId:c,extra:d,watchable:g=!1}=e,{width:h,height:v}=n.found?n:t,w=r==="fak",k=[P.replacementClass,l?"".concat(P.cssPrefix,"-").concat(l):""].filter(S=>d.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(d.classes).join(" ");let O={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":l,class:k,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(v)}};const p=w&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/v*16*.0625,"em")}:{};g&&(O.attributes[an]=""),a&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||Rr())},children:[a]}),delete O.attributes.title);const f={...O,prefix:r,iconName:l,main:t,mask:n,maskId:s,transform:i,symbol:o,styles:{...p,...d.styles}},{children:m,attributes:y}=n.found&&t.found?Ut("generateAbstractMask",f)||{children:[],attributes:{}}:Ut("generateAbstractIcon",f)||{children:[],attributes:{}};return f.children=m,f.attributes=y,o?Im(f):Mm(f)}function Mu(e){const{content:t,width:n,height:r,transform:l,title:i,extra:o,watchable:a=!1}=e,s={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};a&&(s[an]="");const c={...o.styles};ss(l)&&(c.transform=mm({transform:l,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=hi(c);d.length>0&&(s.style=d);const g=[];return g.push({tag:"span",attributes:s,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Fm(e){const{content:t,title:n,extra:r}=e,l={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=hi(r.styles);i.length>0&&(l.style=i);const o=[];return o.push({tag:"span",attributes:l,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Gi}=qe;function na(e){const t=e[0],n=e[1],[r]=e.slice(4);let l=null;return Array.isArray(r)?l={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(Yi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Yi.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(Yi.PRIMARY),fill:"currentColor",d:r[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:l}}const Rm={found:!1,width:512,height:512};function Dm(e,t){!S0&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ra(e,t){let n=t;return t==="fa"&&P.styleDefault!==null&&(t=Dt()),new Promise((r,l)=>{if(n==="fa"){const i=F0(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Gi[t]&&Gi[t][e]){const i=Gi[t][e];return r(na(i))}Dm(e,t),r({...Rm,icon:P.showMissingIcons&&e?Ut("missingIconAbstract")||{}:{}})})}const Iu=()=>{},la=P.measurePerformance&&cl&&cl.mark&&cl.measure?cl:{mark:Iu,measure:Iu},ar='FA "6.6.0"',Um=e=>(la.mark("".concat(ar," ").concat(e," begins")),()=>D0(e)),D0=e=>{la.mark("".concat(ar," ").concat(e," ends")),la.measure("".concat(ar," ").concat(e),"".concat(ar," ").concat(e," begins"),"".concat(ar," ").concat(e," ends"))};var ps={begin:Um,end:D0};const Nl=()=>{};function Fu(e){return typeof(e.getAttribute?e.getAttribute(an):null)=="string"}function Hm(e){const t=e.getAttribute?e.getAttribute(is):null,n=e.getAttribute?e.getAttribute(os):null;return t&&n}function $m(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Bm(){return P.autoReplaceSvg===!0?jl.replace:jl[P.autoReplaceSvg]||jl.replace}function Wm(e){return B.createElementNS("http://www.w3.org/2000/svg",e)}function Vm(e){return B.createElement(e)}function U0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Wm:Vm}=t;if(typeof e=="string")return B.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(U0(i,{ceFn:n}))}),r}function Ym(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const jl={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(U0(n),t)}),t.getAttribute(an)===null&&P.keepOriginalSource){let n=B.createComment(Ym(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~as(t).indexOf(P.replacementClass))return jl.replace(e);const r=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,a)=>(a===P.replacementClass||a.match(r)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const l=n.map(i=>Vr(i)).join(`
`);t.setAttribute(an,""),t.innerHTML=l}};function Ru(e){e()}function H0(e,t){const n=typeof t=="function"?t:Nl;if(e.length===0)n();else{let r=Ru;P.mutateApproach===qp&&(r=Rt.requestAnimationFrame||Ru),r(()=>{const l=Bm(),i=ps.begin("mutate");e.map(l),i(),n()})}}let ms=!1;function $0(){ms=!0}function ia(){ms=!1}let Kl=null;function Du(e){if(!_u||!P.observeMutations)return;const{treeCallback:t=Nl,nodeCallback:n=Nl,pseudoElementsCallback:r=Nl,observeMutationsRoot:l=B}=e;Kl=new _u(i=>{if(ms)return;const o=Dt();Yn(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Fu(a.addedNodes[0])&&(P.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&P.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Fu(a.target)&&~im.indexOf(a.attributeName))if(a.attributeName==="class"&&Hm(a.target)){const{prefix:s,iconName:c}=vi(as(a.target));a.target.setAttribute(is,s||o),c&&a.target.setAttribute(os,c)}else $m(a.target)&&n(a.target)})}),ht&&Kl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Xm(){Kl&&Kl.disconnect()}function Qm(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,l)=>{const i=l.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Gm(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let l=vi(as(e));return l.prefix||(l.prefix=Dt()),t&&n&&(l.prefix=t,l.iconName=n),l.iconName&&l.prefix||(l.prefix&&r.length>0&&(l.iconName=Em(l.prefix,e.innerText)||cs(l.prefix,Jo(e.innerText))),!l.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(l.iconName=e.firstChild.data)),l}function Km(e){const t=Yn(e.attributes).reduce((l,i)=>(l.name!=="class"&&l.name!=="style"&&(l[i.name]=i.value),l),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Rr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Zm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Uu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:l}=Gm(e),i=Km(e),o=ea("parseNodeAttributes",{},e);let a=t.styleParser?Qm(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:l,styles:a,attributes:i},...o}}const{styles:Jm}=qe;function B0(e){const t=P.autoReplaceSvg==="nest"?Uu(e,{styleParser:!1}):Uu(e);return~t.extra.classes.indexOf(E0)?Ut("generateLayersText",e,t):Ut("generateSvgReplacementMutation",e,t)}let nt=new Set;N0.map(e=>{nt.add("fa-".concat(e))});Object.keys(qt[Y]).map(nt.add.bind(nt));Object.keys(qt[Ce]).map(nt.add.bind(nt));Object.keys(qt[_e]).map(nt.add.bind(nt));nt=[...nt];function Hu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ht)return Promise.resolve();const n=B.documentElement.classList,r=d=>n.add("".concat(Ou,"-").concat(d)),l=d=>n.remove("".concat(Ou,"-").concat(d)),i=P.autoFetchSvg?nt:N0.map(d=>"fa-".concat(d)).concat(Object.keys(Jm));i.includes("fa")||i.push("fa");const o=[".".concat(E0,":not([").concat(an,"])")].concat(i.map(d=>".".concat(d,":not([").concat(an,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Yn(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),l("complete");else return Promise.resolve();const s=ps.begin("onTree"),c=a.reduce((d,g)=>{try{const h=B0(g);h&&d.push(h)}catch(h){S0||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise((d,g)=>{Promise.all(c).then(h=>{H0(h,()=>{r("active"),r("complete"),l("pending"),typeof t=="function"&&t(),s(),d()})}).catch(h=>{s(),g(h)})})}function qm(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;B0(e).then(n=>{n&&H0([n],t)})}function eh(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:ta(t||{});let{mask:l}=n;return l&&(l=(l||{}).icon?l:ta(l||{})),e(r,{...n,mask:l})}}const th=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Je,symbol:r=!1,mask:l=null,maskId:i=null,title:o=null,titleId:a=null,classes:s=[],attributes:c={},styles:d={}}=t;if(!e)return;const{prefix:g,iconName:h,icon:v}=e;return yi({type:"icon",...e},()=>(sn("beforeDOMElementCreation",{iconDefinition:e,params:t}),P.autoA11y&&(o?c["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(a||Rr()):(c["aria-hidden"]="true",c.focusable="false")),ds({icons:{main:na(v),mask:l?na(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:h,transform:{...Je,...n},symbol:r,title:o,maskId:i,titleId:a,extra:{attributes:c,styles:d,classes:s}})))};var nh={mixout(){return{icon:eh(th)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Hu,e.nodeCallback=qm,e}}},provides(e){e.i2svg=function(t){const{node:n=B,callback:r=()=>{}}=t;return Hu(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:l,titleId:i,prefix:o,transform:a,symbol:s,mask:c,maskId:d,extra:g}=n;return new Promise((h,v)=>{Promise.all([ra(r,o),c.iconName?ra(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(w=>{let[k,O]=w;h([t,ds({icons:{main:k,mask:O},prefix:o,iconName:r,transform:a,symbol:s,maskId:d,title:l,titleId:i,extra:g,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:l,transform:i,styles:o}=t;const a=hi(o);a.length>0&&(r.style=a);let s;return ss(i)&&(s=Ut("generateAbstractTransformGrouping",{main:l,transform:i,containerWidth:l.width,iconWidth:l.width})),n.push(s||l.icon),{children:n,attributes:r}}}},rh={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return yi({type:"layer"},()=>{sn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(l=>{Array.isArray(l)?l.map(i=>{r=r.concat(i.abstract)}):r=r.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},lh={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:l={},styles:i={}}=t;return yi({type:"counter",content:e},()=>(sn("beforeDOMElementCreation",{content:e,params:t}),Fm({content:e.toString(),title:n,extra:{attributes:l,styles:i,classes:["".concat(P.cssPrefix,"-layers-counter"),...r]}})))}}}},ih={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Je,title:r=null,classes:l=[],attributes:i={},styles:o={}}=t;return yi({type:"text",content:e},()=>(sn("beforeDOMElementCreation",{content:e,params:t}),Mu({content:e,transform:{...Je,...n},title:r,extra:{attributes:i,styles:o,classes:["".concat(P.cssPrefix,"-layers-text"),...l]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:l,extra:i}=n;let o=null,a=null;if(g0){const s=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/s,a=c.height/s}return P.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,Mu({content:t.innerHTML,width:o,height:a,transform:l,title:r,extra:i,watchable:!0})])}}};const oh=new RegExp('"',"ug"),$u=[1105920,1112319],Bu={FontAwesome:{normal:"fas",400:"fas"},...Hp,...Up,...Gp},oa=Object.keys(Bu).reduce((e,t)=>(e[t.toLowerCase()]=Bu[t],e),{}),ah=Object.keys(oa).reduce((e,t)=>{const n=oa[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function sh(e){const t=e.replace(oh,""),n=xm(t,0),r=n>=$u[0]&&n<=$u[1],l=t.length===2?t[0]===t[1]:!1;return{value:Jo(l?t[0]:t),isSecondary:r||l}}function uh(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),l=isNaN(r)?"normal":r;return(oa[n]||{})[l]||ah[n]}function Wu(e,t){const n="".concat(Jp).concat(t.replace(":","-"));return new Promise((r,l)=>{if(e.getAttribute(n)!==null)return r();const o=Yn(e.children).filter(h=>h.getAttribute(Qo)===t)[0],a=Rt.getComputedStyle(e,t),s=a.getPropertyValue("font-family"),c=s.match(rm),d=a.getPropertyValue("font-weight"),g=a.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&g!=="none"&&g!==""){const h=a.getPropertyValue("content");let v=uh(s,d);const{value:w,isSecondary:k}=sh(h),O=c[0].startsWith("FontAwesome");let p=cs(v,w),f=p;if(O){const m=Cm(w);m.iconName&&m.prefix&&(p=m.iconName,v=m.prefix)}if(p&&!k&&(!o||o.getAttribute(is)!==v||o.getAttribute(os)!==f)){e.setAttribute(n,f),o&&e.removeChild(o);const m=Zm(),{extra:y}=m;y.attributes[Qo]=t,ra(p,v).then(S=>{const j=ds({...m,icons:{main:S,mask:fs()},prefix:v,iconName:f,extra:y,watchable:!0}),N=B.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(N,e.firstChild):e.appendChild(N),N.outerHTML=j.map(z=>Vr(z)).join(`
`),e.removeAttribute(n),r()}).catch(l)}else r()}else r()})}function ch(e){return Promise.all([Wu(e,"::before"),Wu(e,"::after")])}function fh(e){return e.parentNode!==document.head&&!~em.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Qo)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Vu(e){if(ht)return new Promise((t,n)=>{const r=Yn(e.querySelectorAll("*")).filter(fh).map(ch),l=ps.begin("searchPseudoElements");$0(),Promise.all(r).then(()=>{l(),ia(),t()}).catch(()=>{l(),ia(),n()})})}var dh={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Vu,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=B}=t;P.searchPseudoElements&&Vu(n)}}};let Yu=!1;var ph={mixout(){return{dom:{unwatch(){$0(),Yu=!0}}}},hooks(){return{bootstrap(){Du(ea("mutationObserverCallbacks",{}))},noAuto(){Xm()},watch(e){const{observeMutationsRoot:t}=e;Yu?ia():Du(ea("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Xu=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const l=r.toLowerCase().split("-"),i=l[0];let o=l.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var mh={mixout(){return{parse:{transform:e=>Xu(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Xu(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:l,iconWidth:i}=t;const o={transform:"translate(".concat(l/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),s="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(a," ").concat(s," ").concat(c)},g={transform:"translate(".concat(i/2*-1," -256)")},h={outer:o,inner:d,path:g};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const Ki={x:0,y:0,width:"100%",height:"100%"};function Qu(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function hh(e){return e.tag==="g"?e.children:[e]}var gh={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?vi(n.split(" ").map(l=>l.trim())):fs();return r.prefix||(r.prefix=Dt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:l,mask:i,maskId:o,transform:a}=t;const{width:s,icon:c}=l,{width:d,icon:g}=i,h=pm({transform:a,containerWidth:d,iconWidth:s}),v={tag:"rect",attributes:{...Ki,fill:"white"}},w=c.children?{children:c.children.map(Qu)}:{},k={tag:"g",attributes:{...h.inner},children:[Qu({tag:c.tag,attributes:{...c.attributes,...h.path},...w})]},O={tag:"g",attributes:{...h.outer},children:[k]},p="mask-".concat(o||Rr()),f="clip-".concat(o||Rr()),m={tag:"mask",attributes:{...Ki,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[v,O]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:hh(g)},m]};return n.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(p,")"),...Ki}}),{children:n,attributes:r}}}},vh={provides(e){let t=!1;Rt.matchMedia&&(t=Rt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},l={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...l,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...l,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},yh={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},xh=[gm,nh,rh,lh,ih,dh,ph,mh,gh,vh,yh];Om(xh,{mixoutsTo:Te});Te.noAuto;Te.config;Te.library;Te.dom;const aa=Te.parse;Te.findIconDefinition;Te.toHtml;const wh=Te.icon;Te.layer;Te.text;Te.counter;var W0={exports:{}},kh="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Sh=kh,Nh=Sh;function V0(){}function Y0(){}Y0.resetWarningCache=V0;var jh=function(){function e(r,l,i,o,a,s){if(s!==Nh){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Y0,resetWarningCache:V0};return n.PropTypes=n,n};W0.exports=jh();var Eh=W0.exports;const L=Ju(Eh);function Gu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function Ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gu(Object(n),!0).forEach(function(r){Cn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Zl(e){"@babel/helpers - typeof";return Zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Zl(e)}function Cn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ch(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function _h(e,t){if(e==null)return{};var n=Ch(e,t),r,l;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sa(e){return Ph(e)||zh(e)||Oh(e)||Th()}function Ph(e){if(Array.isArray(e))return ua(e)}function zh(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Oh(e,t){if(e){if(typeof e=="string")return ua(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ua(e,t)}}function ua(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Th(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bh(e){var t,n=e.beat,r=e.fade,l=e.beatFade,i=e.bounce,o=e.shake,a=e.flash,s=e.spin,c=e.spinPulse,d=e.spinReverse,g=e.pulse,h=e.fixedWidth,v=e.inverse,w=e.border,k=e.listItem,O=e.flip,p=e.size,f=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":l,"fa-bounce":i,"fa-shake":o,"fa-flash":a,"fa-spin":s,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":g,"fa-fw":h,"fa-inverse":v,"fa-border":w,"fa-li":k,"fa-flip":O===!0,"fa-flip-horizontal":O==="horizontal"||O==="both","fa-flip-vertical":O==="vertical"||O==="both"},Cn(t,"fa-".concat(p),typeof p<"u"&&p!==null),Cn(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Cn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Cn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(S){return y[S]?S:null}).filter(function(S){return S})}function Lh(e){return e=e-0,e===e}function X0(e){return Lh(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ah=["style"];function Mh(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Ih(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),l=X0(n.slice(0,r)),i=n.slice(r+1).trim();return l.startsWith("webkit")?t[Mh(l)]=i:t[l]=i,t},{})}function Q0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return Q0(e,s)}),l=Object.keys(t.attributes||{}).reduce(function(s,c){var d=t.attributes[c];switch(c){case"class":s.attrs.className=d,delete t.attributes.class;break;case"style":s.attrs.style=Ih(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?s.attrs[c.toLowerCase()]=d:s.attrs[X0(c)]=d}return s},{attrs:{}}),i=n.style,o=i===void 0?{}:i,a=_h(n,Ah);return l.attrs.style=Ge(Ge({},l.attrs.style),o),e.apply(void 0,[t.tag,Ge(Ge({},l.attrs),a)].concat(sa(r)))}var G0=!1;try{G0=!0}catch{}function Fh(){if(!G0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ku(e){if(e&&Zl(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(aa.icon)return aa.icon(e);if(e===null)return null;if(e&&Zl(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Zi(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Cn({},e,t):{}}var Zu={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},K0=xr.forwardRef(function(e,t){var n=Ge(Ge({},Zu),e),r=n.icon,l=n.mask,i=n.symbol,o=n.className,a=n.title,s=n.titleId,c=n.maskId,d=Ku(r),g=Zi("classes",[].concat(sa(bh(n)),sa((o||"").split(" ")))),h=Zi("transform",typeof n.transform=="string"?aa.transform(n.transform):n.transform),v=Zi("mask",Ku(l)),w=wh(d,Ge(Ge(Ge(Ge({},g),h),v),{},{symbol:i,title:a,titleId:s,maskId:c}));if(!w)return Fh("Could not find icon",d),null;var k=w.abstract,O={ref:t};return Object.keys(n).forEach(function(p){Zu.hasOwnProperty(p)||(O[p]=n[p])}),Rh(k[0],O)});K0.displayName="FontAwesomeIcon";K0.propTypes={beat:L.bool,border:L.bool,beatFade:L.bool,bounce:L.bool,className:L.string,fade:L.bool,flash:L.bool,mask:L.oneOfType([L.object,L.array,L.string]),maskId:L.string,fixedWidth:L.bool,inverse:L.bool,flip:L.oneOf([!0,!1,"horizontal","vertical","both"]),icon:L.oneOfType([L.object,L.array,L.string]),listItem:L.bool,pull:L.oneOf(["right","left"]),pulse:L.bool,rotation:L.oneOf([0,90,180,270]),shake:L.bool,size:L.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.bool,spinPulse:L.bool,spinReverse:L.bool,symbol:L.oneOfType([L.bool,L.string]),title:L.string,titleId:L.string,transform:L.oneOfType([L.string,L.object]),swapOpacity:L.bool};var Rh=Q0.bind(null,xr.createElement);const Dh=()=>u.jsx(u.Fragment,{children:u.jsxs("section",{className:"w-full  h-full",children:[u.jsx("h2",{className:"flex  justify-center text-5xl font-extrabold m-10",style:{color:"#404040"},children:"Our Services"}),u.jsxs("div",{className:"flex flex-wrap justify-start m-8 items-center bg-slate-200",children:[u.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4 ",children:u.jsxs("div",{className:"h-full p-8  bg-slate-100  shadow-xl card rounded-md",children:[u.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",id:"SvgjsSvg1035",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[u.jsx("defs",{id:"SvgjsDefs1036"}),u.jsx("g",{id:"SvgjsG1037",children:u.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 47.5 47.5",viewBox:"0 0 47.5 47.5",children:[u.jsx("defs",{children:u.jsx("clipPath",{id:"a",children:u.jsx("path",{d:"M0 38h38V0H0v38Z",className:"color000 svgShape"})})}),u.jsx("g",{clipPath:"url(#a)",transform:"matrix(1.25 0 0 -1.25 0 47.5)",children:u.jsx("path",{d:"M0 0c1.014 1.184 1.902 2.594 2.619 4.198h2.503A16.053 16.053 0 0 0 0 0m-19.837 4.198h2.503c.716-1.604 1.605-3.014 2.619-4.198a16.042 16.042 0 0 0-5.122 4.198m5.122 24.199c-1.014-1.184-1.903-2.594-2.619-4.199h-2.503a16.056 16.056 0 0 0 5.122 4.199m19.837-4.199H2.619C1.902 25.803 1.014 27.213 0 28.397a16.043 16.043 0 0 0 5.122-4.199m-.513-9c-.092 2.506-.522 4.871-1.228 7h3.103a15.868 15.868 0 0 0 2.108-7H4.609zm0-2h3.983a15.872 15.872 0 0 0-2.108-7H3.381c.706 2.129 1.136 4.494 1.228 7m-10.966-7v7h8.968c-.098-2.541-.563-4.917-1.317-7h-7.651zm0-7.919v5.919H.442C-1.194.935-3.61-1.284-6.357-1.721m-2 5.919v-5.919c-2.747.437-5.164 2.656-6.8 5.919h6.8zm-8.969 9h8.969v-7h-7.652c-.754 2.083-1.219 4.459-1.317 7m-1.998 2h-3.983a15.893 15.893 0 0 0 2.107 7h3.105c-.707-2.129-1.136-4.494-1.229-7m10.967 7v-7h-8.969c.098 2.541.563 4.917 1.317 7h7.652zm0 7.92v-5.92h-6.8c1.637 3.264 4.053 5.483 6.8 5.92m9.651-7.92c.754-2.083 1.219-4.459 1.317-7h-8.968v7h7.651zm-7.651 2v5.92c2.747-.437 5.162-2.656 6.798-5.92h-6.798zm-16.95-11h3.983c.092-2.506.522-4.871 1.229-7H-21.2a15.897 15.897 0 0 0-2.107 7m15.95 19c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18",transform:"translate(26.357 4.802)",className:"color3b88c3 svgShape"})})]})})]}),u.jsx("h3",{className:"font-semibold  text-2xl mb-4",children:"Web Development"}),u.jsxs("p",{className:" text-gray-600 hover:text-white  mb-4   flex flex-grow ",children:["Create a stunning online presence with ",u.jsx("br",{})," our  bespoke web development services.  ",u.jsx("br",{}),"Our team employs the latest ",u.jsx("br",{})," technologies to build websites that ",u.jsx("br",{})," captivate and convert."]})]})}),u.jsx("div",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4",children:u.jsxs("div",{className:"h-full p-6 bg-slate-100  card rounded-md shadow-xl",children:[u.jsxs("svg",{id:"SvgjsSvg1057",className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[u.jsx("defs",{id:"SvgjsDefs1058"}),u.jsx("g",{id:"SvgjsG1059",children:u.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 512 512",children:[u.jsx("path",{d:"M437.023 143.9a18.079 18.079 0 0 0-17.018 12.065h-23.161a19.661 19.661 0 0 0-19.1 15.4 7.6 7.6 0 0 1-7.379 5.947h-17.687V92.675a41.911 41.911 0 0 0-41.864-41.863H167.361A41.911 41.911 0 0 0 125.5 92.675v84.638h-17.685a7.594 7.594 0 0 1-7.379-5.947 19.662 19.662 0 0 0-19.105-15.4h-23.16a18.064 18.064 0 1 0 0 12h23.16a7.594 7.594 0 0 1 7.379 5.947 19.662 19.662 0 0 0 19.105 15.4H125.5v36.093h-1.23a12.064 12.064 0 0 1-11.166-7.444 24.033 24.033 0 0 0-22.243-14.829H86.94a18.064 18.064 0 1 0 0 12h3.921a12.064 12.064 0 0 1 11.166 7.444 24.035 24.035 0 0 0 22.243 14.829h1.23v13.308l-21.31-.1a25.208 25.208 0 0 0-22.2 13.241 13.22 13.22 0 0 1-11.649 6.945H62.2a18.056 18.056 0 1 0 .17 12h7.967a25.207 25.207 0 0 0 22.2-13.24 13.21 13.21 0 0 1 11.616-6.945l21.339.1v36.92h-1.482a28.135 28.135 0 0 0-26.841 20.083 16.065 16.065 0 0 1-15.329 11.47h-8.7a18.064 18.064 0 1 0 0 12h8.7a28.135 28.135 0 0 0 26.842-20.088 16.066 16.066 0 0 1 15.328-11.469h1.49v94.845a41.911 41.911 0 0 0 41.863 41.864h143.451a41.746 41.746 0 0 0 32.345-15.285 6 6 0 1 0-9.267-7.623 29.785 29.785 0 0 1-23.078 10.908H167.361a29.9 29.9 0 0 1-29.861-29.861v-22.69h166.972v-12H137.5V116.607h145.52a6 6 0 0 0 0-12H137.5V92.675a29.9 29.9 0 0 1 29.863-29.863h143.451a29.9 29.9 0 0 1 29.864 29.863v11.932h-11.932a6 6 0 0 0 0 12h11.932v139.778a6 6 0 0 0 12 0v-18.979h1.227a24.035 24.035 0 0 0 22.244-14.829 12.064 12.064 0 0 1 11.166-7.444h3.92a18.065 18.065 0 1 0 0-12h-3.92a24.033 24.033 0 0 0-22.243 14.829 12.067 12.067 0 0 1-11.167 7.444h-1.227v-36.093h17.683a19.664 19.664 0 0 0 19.105-15.4 7.593 7.593 0 0 1 7.378-5.947h23.161a18.056 18.056 0 1 0 17.018-24.066ZM41.152 168.032a6.065 6.065 0 1 1 6.065-6.064 6.07 6.07 0 0 1-6.065 6.064Zm28.77 47.168a6.065 6.065 0 1 1 6.064-6.064 6.071 6.071 0 0 1-6.064 6.064Zm-24.651 67.9a6.065 6.065 0 1 1 6.064-6.065 6.072 6.072 0 0 1-6.064 6.059Zm10.846 60.157a6.064 6.064 0 1 1 6.065-6.064 6.071 6.071 0 0 1-6.065 6.058Zm352.137-140.189a6.065 6.065 0 1 1-6.065 6.065 6.071 6.071 0 0 1 6.065-6.065Zm28.769-35.036a6.065 6.065 0 1 1 6.065-6.064 6.07 6.07 0 0 1-6.065 6.064Z",className:"color0635c9 svgShape"}),u.jsx("path",{d:"M316.644 110.607a6 6 0 0 0-6-6h-9.966a6 6 0 0 0 0 12h9.966a6 6 0 0 0 6-6zm-97.005 299.458a19.449 19.449 0 1 0 19.449-19.448 19.471 19.471 0 0 0-19.449 19.448zm26.9 0a7.449 7.449 0 1 1-7.448-7.448 7.456 7.456 0 0 1 7.445 7.448zm58.221-159.918a75.992 75.992 0 1 0-48.153 70.717L252.2 309.7a64.111 64.111 0 1 1 29.618-23.8l9.941 6.722a75.546 75.546 0 0 0 13.001-42.475z",className:"color0635c9 svgShape"}),u.jsx("path",{d:"M278.059 276.731a55.914 55.914 0 1 0-33.94 27.283l-3.285-11.542a43.988 43.988 0 1 1 26.666-21.445Z",className:"color0635c9 svgShape"}),u.jsx("path",{d:"M410.387 243.5a25.979 25.979 0 0 0-45.838 9.461 26.007 26.007 0 0 0-38.416 19.309c-.107.8-.172 1.6-.2 2.4a25.944 25.944 0 0 0-30.7 17.974l-45.235-57.338a26 26 0 1 0-41.242 31.67l83.704 106.731a40.035 40.035 0 0 0-26.374 23.9 6 6 0 0 0 3.146 7.667l76.308 33.98A86 86 0 0 0 471.187 322.9ZM300.784 384.32l26.36 33.608-47.258-21.044a28.018 28.018 0 0 1 20.898-12.564ZM447.9 433.935a74.1 74.1 0 0 1-103.786-13.814l-125.877-160.49a14 14 0 1 1 22.283-16.956l101.6 128.787a6.048 6.048 0 0 0 .413.471c.015.016.032.029.047.045q.213.213.441.4c.051.042.1.079.158.12.121.093.244.183.37.266.062.04.125.078.188.115.124.076.251.146.38.212.064.032.128.064.193.094.137.063.275.12.415.172.06.022.119.046.179.067.166.056.335.1.5.145.035.009.069.02.105.028a6.059 6.059 0 0 0 .642.109h.04c.2.021.393.031.59.033h.049c.025 0 .049-.006.074-.006a5.957 5.957 0 0 0 .832-.067l.064-.007a6.026 6.026 0 0 0 .838-.206l.153-.05a5.969 5.969 0 0 0 .8-.341c.036-.018.07-.041.106-.06a6.1 6.1 0 0 0 .713-.457c.021-.016.045-.027.067-.043s.021-.02.033-.029l.035-.024c.068-.054.128-.114.194-.17s.161-.135.237-.207.136-.14.2-.211.144-.149.211-.226.12-.153.18-.229.125-.158.183-.24.105-.165.157-.248.106-.164.154-.249.089-.176.133-.264.087-.17.125-.257.073-.185.108-.278.069-.173.1-.262.055-.19.081-.286.052-.179.072-.27.036-.192.053-.289.034-.185.046-.279.017-.191.024-.287.018-.191.02-.287 0-.19 0-.286 0-.194-.007-.291-.02-.191-.031-.286-.02-.192-.036-.288-.038-.19-.059-.286-.038-.189-.063-.283-.058-.189-.089-.284-.056-.184-.09-.274-.079-.189-.12-.283-.073-.175-.115-.261-.1-.185-.152-.277-.091-.167-.142-.249-.12-.176-.182-.264c-.048-.069-.091-.14-.143-.208l-42.56-55.576a14 14 0 0 1 22.23-17.023l42.56 55.575a6.156 6.156 0 0 0 .44.509c.05.052.1.1.154.148.108.1.216.206.33.3.063.052.128.1.193.152a6.3 6.3 0 0 0 .542.371 6.5 6.5 0 0 0 .356.2c.07.036.139.073.21.107.135.063.273.118.412.17.059.023.117.049.177.069a5.815 5.815 0 0 0 .606.174c.029.007.059.01.088.016.176.038.354.069.533.091.071.009.143.012.214.018.139.012.278.021.417.023.032 0 .064.006.1.006s.063-.007.095-.008a5.915 5.915 0 0 0 .85-.068l.032-.006a5.988 5.988 0 0 0 .818-.2c.05-.016.1-.03.151-.047a5.979 5.979 0 0 0 .784-.335c.05-.026.1-.054.147-.081a5.91 5.91 0 0 0 .766-.491 6 6 0 0 0 1.116-8.412L340.792 284.2a14 14 0 1 1 22.23-17.024l42.56 55.575a6 6 0 1 0 9.527-7.3l-36.48-47.636a14 14 0 1 1 22.23-17.024l60.8 79.394a74.083 74.083 0 0 1-13.759 103.75Z",className:"color1ae5be svgShape"})]})})]}),u.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"Mobile App Development"}),u.jsxs("p",{className:" text-gray-600 hover:text-white  mb-4",children:["Stay in touch with your clients while on ",u.jsx("br",{})," the move using personalized mobile ",u.jsx("br",{})," apps. Our development team creates ",u.jsx("br",{})," intuitive applications for iOS and ",u.jsx("br",{})," Android, ensuring seamless user ",u.jsx("br",{}),"experiences."]})]})}),u.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4 min-h-96",children:u.jsxs("div",{className:"h-full p-6 bg-slate-100  card rounded-md shadow-xl min-h-96",children:[u.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",id:"SvgjsSvg1408",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[u.jsx("defs",{id:"SvgjsDefs1409"}),u.jsx("g",{id:"SvgjsG1410",children:u.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","image-rendering":"optimizeQuality","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision",viewBox:"0 0 512 512",children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"a",x1:"256",x2:"256",y1:"63.4",y2:"448.8",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{offset:"0","stop-color":"#fff",className:"stopColor5cc6d0 svgShape"}),u.jsx("stop",{offset:".49","stop-color":"#fff",className:"stopColora53692 svgShape"}),u.jsx("stop",{offset:"1","stop-color":"#fff",className:"stopColorf06277 svgShape"})]})}),u.jsx("path",{d:"M460.83 378.84l0 -221.57c0,-1.61 -1.35,-2.96 -2.95,-2.96l-68.51 0c36.14,92.27 -30.37,194.91 -134.6,195.2 -98.28,0.27 -168.86,-101.5 -132.14,-195.2l-68.51 0c-1.6,0 -2.95,1.35 -2.95,2.95l0 221.58 409.66 0zm-423.65 0l0 -221.57c0,-9.35 7.6,-16.95 16.94,-16.95l74.89 0c53.55,-102.56 200.44,-102.56 253.98,0l74.89 0c9.34,0 16.94,7.6 16.94,16.95l0 221.57 30.03 0c3.87,0 7,3.13 7,7l0 27.98c0,19.29 -15.69,34.98 -34.98,34.98l-441.74 0c-19.29,0 -34.98,-15.69 -34.98,-34.98l0 -27.98c0,-3.87 3.13,-7 7,-7l30.03 0zm-23.04 13.99l0 20.99c0,11.58 9.42,20.99 20.99,20.99l441.74 0c11.57,0 20.99,-9.41 20.99,-20.99l0 -20.99 -177.99 0 0 24c0,3.87 -3.13,7 -7,7l-113.74 0c-3.86,0 -7,-3.13 -7,-7l0 -24 -177.99 0zm291.74 0l-99.75 0 0 17.01 99.75 0 0 -17.01zm-49.88 -315.64c-71.23,0 -129.17,57.94 -129.17,129.17 0,56.97 37.07,105.44 88.36,122.56l0 -105.37c0,-2.6 -1.15,-4.94 -2.97,-6.54 -11.72,26.6 -51.78,18.24 -51.78,-10.86 0,-14.9 12.12,-27.03 27.03,-27.03 13.57,0 24.83,10.05 26.74,23.1 8.76,3.17 14.97,11.57 14.97,21.32l0 109.18c5.95,1.27 12.06,2.12 18.28,2.52l0 -155.79 -21.81 -13.27c-20.05,19.38 -53.78,5.15 -53.78,-22.81 0,-17.5 14.23,-31.74 31.73,-31.74 22.24,0 37.43,22.31 29.73,42.85l24.76 15.06c2.09,1.27 3.36,3.54 3.36,5.98l0 159.89c6.22,-0.26 12.32,-0.96 18.29,-2.07l0 -103.62c0,-9.75 6.2,-18.15 14.96,-21.33 1.91,-13.04 13.17,-23.1 26.74,-23.1 14.91,0 27.03,12.13 27.03,27.04 0,29.1 -40.06,37.45 -51.78,10.86 -1.82,1.59 -2.96,3.94 -2.96,6.53l0 100.19c52.88,-16.18 91.44,-65.44 91.44,-123.55 0,-71.23 -57.94,-129.17 -129.17,-129.17zm-52.4 48.44c-23.35,0 -23.35,35.49 0,35.49 23.36,0 23.36,-35.49 0,-35.49zm-16.13 67.48c-17.16,0 -17.16,26.08 0,26.08 17.16,0 17.16,-26.08 0,-26.08zm133.97 6.18c-17.16,0 -17.16,26.07 0,26.07 17.17,0 17.17,-26.07 0,-26.07z"})]})})]}),u.jsx("h3",{className:"font-semibold text-black text-2xl mb-4 ",children:"Desktop App Development"}),u.jsxs("p",{className:"  text-gray-600 hover:text-white  mb-4",children:["Empower your business with robust ",u.jsx("br",{}),"desktop applications built for ",u.jsx("br",{})," performance. Our applications are  ",u.jsx("br",{}),"tailored to your business needs and ",u.jsx("br",{})," promote efficiency.         "]})]})}),u.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:u.jsxs("div",{className:"h-full p-6 bg-slate-100  card rounded-md shadow-xl",children:[u.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",id:"SvgjsSvg1035",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[u.jsx("defs",{id:"SvgjsDefs1036"}),u.jsx("g",{id:"SvgjsG1037",children:u.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 64 64",viewBox:"0 0 64 64",children:[u.jsx("path",{d:"M6,54h52c1.105,0,2-0.895,2-2V16c0-1.105-0.895-2-2-2H6c-1.105,0-2,0.895-2,2v36C4,53.105,4.895,54,6,54z",className:"color0a5078 svgShape"}),u.jsx("path",{fill:"#7b68ee",d:"M43,14v26l3.106,6.211c0.369,0.737,1.42,0.737,1.789,0L51,40V14H43z",className:"color00325a svgShape"}),u.jsx("path",{d:"M9,50h46c0.552,0,1-0.448,1-1V19c0-0.552-0.448-1-1-1H9c-0.552,0-1,0.448-1,1v30C8,49.552,8.448,50,9,50z",className:"color00a0c8 svgShape"}),u.jsx("path",{fill:"orange",d:"M18,43h-7c-0.553,0-1-0.447-1-1V31c0-0.553,0.447-1,1-1s1,0.447,1,1v10h6c0.553,0,1,0.447,1,1S18.553,43,18,43z",className:"colorc80a50 svgShape"}),u.jsx("polygon",{fill:"orange",points:"18 39 18 45 21 42",className:"colorc80a50 svgShape"}),u.jsx("path",{fill:"orange",d:"M18,46c-0.129,0-0.259-0.024-0.383-0.076C17.243,45.77,17,45.404,17,45v-6c0-0.404,0.243-0.77,0.617-0.924c0.375-0.155,0.804-0.069,1.09,0.217l3,3c0.391,0.391,0.391,1.023,0,1.414l-3,3C18.516,45.898,18.26,46,18,46z M19,41.414v1.172L19.586,42L19,41.414z",className:"colorc80a50 svgShape"}),u.jsx("path",{fill:"#0082aa",d:"M43,18v22l3.106,6.211c0.369,0.737,1.42,0.737,1.789,0L51,40V18H43z",className:"color0082aa svgShape"}),u.jsx("rect",{width:"8",height:"4",x:"28",y:"54",fill:"#0a5078",transform:"rotate(-180 32 56)",className:"color0a5078 svgShape"}),u.jsx("path",{fill:"#0a5078",d:"M20,60h24v0c0-1.105-0.895-2-2-2H22C20.895,58,20,58.895,20,60L20,60z",className:"color0a5078 svgShape"}),u.jsx("rect",{width:"8",height:"1",x:"28",y:"54",fill:"#00325a",transform:"rotate(-180 32 54.5)",className:"color00325a svgShape"}),u.jsx("rect",{width:"8",height:"28",x:"44",y:"12",fill:"#fab400",className:"colorfab400 svgShape"}),u.jsx("polygon",{fill:"#f0c8a0",points:"52 40 44 40 46 44 50 44",className:"colorf0c8a0 svgShape"}),u.jsx("path",{fill:"#0a5078",d:"M46,44l1.106,2.211c0.369,0.737,1.42,0.737,1.789,0L50,44H46z",className:"color0a5078 svgShape"}),u.jsx("rect",{width:"8",height:"2",x:"44",y:"10",fill:"#f0f0f0",className:"colorf0f0f0 svgShape"}),u.jsx("path",{fill:"#0a5078",d:"M50,4h-4c-1.105,0-2,0.895-2,2v4h8V6C52,4.895,51.105,4,50,4z",className:"color0a5078 svgShape"}),u.jsx("rect",{width:"16",height:"10",x:"11",y:"21",fill:"#f0f0f0",className:"colorf0f0f0 svgShape"}),u.jsx("path",{fill:"#d2d2d2",d:"M27,32H11c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h16c0.553,0,1,0.447,1,1v10C28,31.553,27.553,32,27,32z M12,30h14v-8H12V30z",className:"colord2d2d2 svgShape"}),u.jsx("rect",{width:"2",height:"18.868",x:"18",y:"16.566",fill:"#d2d2d2",transform:"rotate(-58 19 26)",className:"colord2d2d2 svgShape"}),u.jsx("rect",{width:"18.868",height:"2",x:"9.566",y:"25",fill:"#d2d2d2",transform:"rotate(-32.031 18.998 25.998)",className:"colord2d2d2 svgShape"}),u.jsx("rect",{width:"16",height:"10",x:"23",y:"37",fill:"#f0f0f0",className:"colorf0f0f0 svgShape"}),u.jsx("path",{fill:"#d2d2d2",d:"M39,48H23c-0.553,0-1-0.447-1-1V37c0-0.553,0.447-1,1-1h16c0.553,0,1,0.447,1,1v10C40,47.553,39.553,48,39,48z M24,46h14v-8H24V46z",className:"colord2d2d2 svgShape"}),u.jsx("rect",{width:"2",height:"18.868",x:"30",y:"32.566",fill:"#d2d2d2",transform:"rotate(-58 31 42)",className:"colord2d2d2 svgShape"}),u.jsx("rect",{width:"18.868",height:"2",x:"21.566",y:"41",fill:"#d2d2d2",transform:"rotate(-32.031 30.996 41.996)",className:"colord2d2d2 svgShape"}),u.jsx("g",{children:u.jsx("path",{fill:"orange",d:"M39 22h-8c-.552 0-1-.448-1-1v0c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v0C40 21.552 39.552 22 39 22zM39 26h-8c-.552 0-1-.448-1-1v0c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v0C40 25.552 39.552 26 39 26zM39 30h-8c-.552 0-1-.448-1-1v0c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v0C40 29.552 39.552 30 39 30zM39 34h-8c-.552 0-1-.448-1-1l0 0c0-.552.448-1 1-1h8c.552 0 1 .448 1 1l0 0C40 33.552 39.552 34 39 34z",className:"color0082aa svgShape"})})]})})]}),u.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"UI/UX Design"}),u.jsx("p",{className:"  text-gray-600 hover:text-white  mb-4",children:"Transform your concepts into visually stunning and user-friendly designs. Our UI/UX designers craft interfaces that captivate users and enhance engagement.        "})]})}),u.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:u.jsxs("div",{className:"h-full p-6 bg-slate-100 hover:text-white card rounded-md shadow-xl",children:[u.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[u.jsx("defs",{id:"SvgjsDefs1038"}),u.jsx("g",{id:"SvgjsG1039",children:u.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg","data-name":"glipy copy",viewBox:"0 0 64 64",children:[u.jsx("defs",{children:u.jsxs("linearGradient",{id:"a",x1:"4.04",x2:"59.96",y1:"32",y2:"32",gradientUnits:"userSpaceOnUse",children:[u.jsx("stop",{offset:"0","stop-color":"#00c0ff",className:"stopColor00c0ff svgShape"}),u.jsx("stop",{offset:"1","stop-color":"#5558ff",className:"stopColor5558ff svgShape"})]})}),u.jsx("path",{d:"M31.25159,55.0238a16.8148,16.8148,0,0,1,0-23.72989c13.29233-14.41419-6.461-34.19612-20.89715-20.897a14.778,14.778,0,0,0-.10965,20.77735v-2.364a.99766.99766,0,0,1,1.99495.00006v4.7878a1.00038,1.00038,0,0,1-.99748.99747H6.46445a.99766.99766,0,0,1-.00007-1.99494h2.374A16.81,16.81,0,0,1,8.9381,8.98042C25.35856-6.08562,47.72976,16.30361,32.668,32.71037c-13.29245,14.41491,6.46172,34.19581,20.89722,20.897A14.778,14.778,0,0,0,53.67485,32.83v2.36407a.99748.99748,0,0,1-1.99495,0V30.40614a1.00038,1.00038,0,0,1,.99748-.99747h4.77788a.99766.99766,0,0,1-.00006,1.99495H55.08127C69.95577,47.861,47.578,70.02755,31.25159,55.0238ZM25.586,29.289l-.59846-.60845a8.88068,8.88068,0,0,1-3.90016,1.03735l-.21942.82786a1.79349,1.79349,0,0,1-2.18447,1.26687l-1.53609-.41892a1.78911,1.78911,0,0,1-1.26681-2.18447l.2294-.82792a8.80994,8.80994,0,0,1-2.85276-2.85276l-.81794.22934a1.80435,1.80435,0,0,1-2.19445-1.26675L9.83585,22.955a1.79371,1.79371,0,0,1,1.26681-2.18447l.82786-.2294A9.013,9.013,0,0,1,12.96794,16.651l-.59853-.59846a1.782,1.782,0,0,1,0-2.52363l1.12716-1.12716a1.782,1.782,0,0,1,2.52363,0l.60845.60845a8.8396,8.8396,0,0,1,3.89017-1.03735l.21942-.82792a1.79834,1.79834,0,0,1,2.18447-1.26675l1.53609.41892a1.79362,1.79362,0,0,1,1.26681,2.18447l-.21942.82792A8.97432,8.97432,0,0,1,28.349,16.16224l.82792-.21947a1.79566,1.79566,0,0,1,2.18447,1.25682l.40894,1.53615a1.78586,1.78586,0,0,1-1.26681,2.18447l-.82786.2294a8.83959,8.83959,0,0,1-1.03741,3.89012l.59852.59852a1.782,1.782,0,0,1,0,2.52357L28.11957,29.289A1.79408,1.79408,0,0,1,25.586,29.289Zm-8.2789-11.93986C12.825,22.07835,19.56,28.82555,24.29923,24.34154,28.786,19.60762,22.03774,12.86572,17.30705,17.34912Zm1.41639,1.41639c-2.68552,2.776,1.38425,6.86263,4.15939,4.15958A2.94134,2.94134,0,0,0,18.72344,18.76551ZM38.3337,34.71524l.59846.60844a8.88148,8.88148,0,0,1,3.90021-1.03735c.16584-.68686.34928-1.56927,1.04728-1.91507.79334-.5707,2.0719.08067,2.89264.23932a1.74691,1.74691,0,0,1,1.08721.82792,2.609,2.609,0,0,1-.0498,2.18447,8.80868,8.80868,0,0,1,2.85276,2.85276l.81794-.2294a1.80448,1.80448,0,0,1,2.19445,1.26676l.40894,1.53614A1.79374,1.79374,0,0,1,52.817,43.23371l-.82786.22939a9.01326,9.01326,0,0,1-1.03741,3.89018l.59852.59846a1.782,1.782,0,0,1,0,2.52358l-1.12715,1.12715a1.782,1.782,0,0,1-2.52364,0L47.291,50.994a8.83866,8.83866,0,0,1-3.89017,1.03735l-.21941.82792A1.791,1.791,0,0,1,40.997,54.12611c-.78446-.264-2.22594-.37448-2.62337-1.24691a2.6541,2.6541,0,0,1,.03982-2.18441A8.976,8.976,0,0,1,35.57067,47.842l-.82792.21942a1.79567,1.79567,0,0,1-2.18447-1.25683l-.40894-1.53609a1.78584,1.78584,0,0,1,1.26682-2.18447l.82786-.2294a8.83953,8.83953,0,0,1,1.03741-3.89017l-.59852-.59846a1.78211,1.78211,0,0,1,0-2.52364l1.11716-1.12715A1.79407,1.79407,0,0,1,38.3337,34.71524Zm8.279,11.93979c4.49186-4.72789-2.25808-11.47789-6.99218-6.99242C35.13732,44.39556,41.87685,51.1377,46.61272,46.655Zm-1.4164-1.41645A2.94138,2.94138,0,0,0,41.03687,41.079C38.33418,43.85335,42.42088,47.93165,45.19632,45.23858Z"})]})})]}),u.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"DevOps"}),u.jsx("p",{className:"  text-gray-600 hover:text-white  mb-4",children:"    Enhance collaboration, streamline workflows, and accelerate delivery with our DevOps practices. We integrate and automate your pipeline from code to cloud.         "})]})}),u.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:u.jsxs("div",{className:"h-full p-6 bg-slate-100  card rounded-md shadow-xl",children:[u.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",xmlnsXlink:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"180",height:"180",children:[u.jsx("circle",{cx:"60",cy:"60",r:"45",fill:"none","stroke-width":"3"}),u.jsx("rect",{x:"30",y:"35",width:"13",height:"50"}),u.jsx("rect",{x:"45",y:"45",width:"13",height:"40"}),u.jsx("rect",{x:"60",y:"55",width:"13",height:"30"}),u.jsx("path",{d:"M25 80 l50 0",stroke:"#ff9800","stroke-width":"2"}),u.jsx("circle",{cx:"50",cy:"50",r:"15",stroke:"#ff9800",fill:"none","stroke-width":"3"}),u.jsx("line",{x1:"50",y1:"35",x2:"50",y2:"65",stroke:"#ff9800","stroke-width":"2"}),u.jsx("line",{x1:"35",y1:"50",x2:"65",y2:"50",stroke:"#ff9800","stroke-width":"2"})]}),u.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"Data Analysis"}),u.jsx("p",{className:" text-gray-600 hover:text-white  mb-4",children:"Uncover critical insights and drive smarter decision making with our comprehensive data analysis solutions. Transform raw data into actionable intelligence.         "})]})})]})]})}),Uh=()=>u.jsx(u.Fragment,{children:u.jsxs("section",{className:"bg-gray-100 p-6 lg:p-11",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row  text-center lg:text-left",children:[u.jsx("div",{className:"w-full lg:w-1/2",children:u.jsxs("div",{className:"text-gray-800",children:[u.jsxs("h2",{className:"text-3xl sm:text-4xl font-bold",children:["Welcome to"," ",u.jsx("span",{className:"logo-main text-blue-600 pt-1 text-3xl sm:text-4xl lg:text-5xl font-serif italic",children:"CodeViper  –"})," ","Where Technology Meets Passion"]}),u.jsxs("p",{className:"pt-5 text-sm sm:text-base md:text-lg",children:["At"," ",u.jsx("span",{className:"italic text-blue-600 logo",children:"Code Viper"}),", we're more than just tech enthusiasts – we're problem solvers with a passion for bringing bold ideas to life. Our goal? To help your business stand out in the digital age. Whether you're starting from scratch or enhancing what you already have, we provide IT solutions tailored specifically to your needs, guiding you through every step of the process."]}),u.jsxs("p",{className:"pt-3 text-sm sm:text-base md:text-lg",children:["At"," ",u.jsx("span",{className:"italic text-blue-600 logo",children:"Code Viper"}),", it's not just about delivering tech – it's about building partnerships. We take the time to learn about your goals, collaborate closely, and support your journey to new levels of success. Ready to transform your business? Let's make it happen, together."]}),u.jsxs("div",{className:"flex flex-row   gap-5 pt-7 justify-center lg:justify-start",children:[u.jsx("a",{class:"text-blue-600 button mq-buttons w-1/3 h-12 flex items-center justify-center text-lg font-sans font-bold rounded-md button bg-white button-white",href:"",children:u.jsx("span",{children:"Contact Us"})}),u.jsx("a",{className:"bg-blue-600 hover:bg-blue-800 w-2/5 flex items-center justify-center h-12 text-lg font-bold rounded-md text-white",href:"tel:+923035313249",children:"Call Now"})]})]})}),u.jsx("div",{className:"w-full lg:w-1/2 mt-6 lg:mt-0",children:u.jsx("img",{src:"images/aboutus.png",alt:"About CodeEssence",loading:"lazy",className:"w-full h-auto object-cover"})})]}),u.jsx("style",{jsx:!0,children:`
        .logo{
  font-family: "Audiowide", sans-serif;
 font-size:18px;
}
 .logo-main{
  font-family: "Audiowide", sans-serif;
  
 }
         .button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    width:40%;
    overflow: hidden;  
    text-align: center;
    /* Text color matching 'text-blue-600' */
    background-color: white;  /* Initial background color */
    border-radius: 8px;  /* Matches 'rounded-md' */
    transition: color 0.3s ease;  /* Text color transition */
}

.button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
      background-color: #1e40af;/* Background fill color (same as 'text-blue-600') */
    transition: width 0.4s ease;
    z-index: 0;  /* Ensures background is behind the text */
}

.button:hover::before {
    width: 100%;  /* Expands to cover the entire button */
}

.button:hover {
    color: white;  /* Changes text color to white */
}

.button span {
    position: relative;
    z-index: 1;  /* Keeps text above the expanding background */
}


      `})]})}),Hh=()=>u.jsx(u.Fragment,{children:u.jsxs("div",{className:"bg-slate-900 text-white",children:[u.jsx("h2",{className:"flex  justify-center items-center text-5xl font-extrabold m-10",style:{color:"#404040"},children:" How We  Work"}),u.jsx("p",{className:"text-center mx-auto text-xl font-medium px-4 sm:px-8 lg:px-20   text-gray-800",children:"Explore our streamlined, efficient approach to project management and how it ensures your success every step of the way."}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-20",children:[u.jsxs("div",{className:"h-full p-5 bg-slate-100 shadow-xl rounded-md text-black",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512 512",className:"mb-4",children:u.jsxs("g",{children:[u.jsx("path",{d:"M236 336c0-33.57 20.687-62.292 50-74.163A79.746 79.746 0 0 0 256 256c-44.183 0-80 35.817-80 80 0 22.091 17.909 40 40 40h60c-22.091 0-40-17.909-40-40z",fill:"#cee1f2"}),u.jsx("path",{d:"M296 376h-80c-22.091 0-40-17.909-40-40 0-44.183 35.817-80 80-80s80 35.817 80 80c0 22.091-17.909 40-40 40z",fill:"none",stroke:"#7b68ee",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("circle",{cx:"256",cy:"176",r:"40",fill:"none",stroke:"#7b68ee",strokeWidth:"40"})]})}),u.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Discover"}),u.jsx("p",{className:"text-gray-600",children:"Our discovery phase is dedicated to understanding your vision, goals, and expectations to craft a precise project blueprint."})]}),u.jsxs("div",{className:"h-full p-5 bg-slate-100 shadow-xl rounded-md text-black",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512 512",className:"mb-4",children:u.jsxs("g",{children:[u.jsx("path",{d:"M236 420c0-9.935-5.439-19.09-14.198-23.779-72.477-38.793-118.37-120.733-102.752-211.648 13.529-78.756 75.602-143.727 153.824-160.064a215.935 215.935 0 0 1 12.925-2.284c-23.244-3.473-47.789-2.965-72.925 2.284C134.652 40.847 72.579 105.817 59.05 184.574c-15.631 90.993 30.354 172.995 102.938 211.747C170.637 400.939 176 409.985 176 419.79v.21c0 44.183 35.817 72 80 72 10.613 0 20.733-1.621 30-4.672-29.313-9.651-50-33.758-50-67.328z",fill:"#cee1f2"}),u.jsx("path",{d:"m176 180-40 40 40 40M336 180l40 40-40 40M276 140l-40 160",fill:"none",stroke:"#ff9800",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"})]})}),u.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Design & Development"}),u.jsx("p",{className:"text-gray-600",children:"With a blend of aesthetic design and cutting-edge development, we transform ideas into engaging digital experiences."})]}),u.jsxs("div",{className:"h-full p-5 bg-slate-100 shadow-xl rounded-md text-black",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512.004 512.004",className:"mb-4",children:u.jsxs("g",{children:[u.jsx("path",{d:"M80 432.002v-352c0-33.137 26.863-60 60-60H80c-33.137 0-60 26.863-60 60v352c0 33.137 26.863 60 60 60h60c-33.137 0-60-26.863-60-60z",fill:"#cee1f2"}),u.jsx("path",{d:"M432 492.002H80c-33.137 0-60-26.863-60-60v-352c0-33.137 26.863-60 60-60h352c33.137 0 60 26.863 60 60v352c0 33.137-26.863 60-60 60z",fill:"none",stroke:"#7b68ee",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"})]})}),u.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Testing & Refinement"}),u.jsx("p",{className:"text-gray-600",children:"In our rigorous testing phase, every feature is refined to perfection, ensuring high performance and reliability."})]}),u.jsxs("div",{className:"h-full p-5 bg-slate-100 shadow-xl rounded-md text-black",children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512 512",className:"mb-4",children:u.jsxs("g",{children:[u.jsx("path",{d:"M80 220c0-35.748 19.446-66.018 51.797-76.274 13.619-4.317 23.931-15.629 26.996-29.584 9.679-44.072 43.585-79.062 87.047-90.313A117.586 117.586 0 0 0 216 20c-57.397 0-105.382 40.296-117.207 94.142-3.065 13.955-13.376 25.267-26.996 29.584C39.446 153.982 20 184.252 20 220c0 44.182 31.818 80 76 80h60c-44.182 0-76-35.818-76-80z",fill:"#cee1f2"}),u.jsx("path",{d:"M376 412v40c0 22.091-17.909 40-40 40H176c-22.091 0-40-17.909-40-40v-40M336 300h80c44.182 0 76-35.818 76-80 0-36.099-19.908-66.611-52.752-76.57a40.041 40.041 0 0 1-26.684-26.697C402.599 83.897 372.09 60 336 60c-3.03 0-6.008.197-8.933.564a40.02 40.02 0 0 1-31.72-9.938C274.253 31.684 246.601 20 216 20c-57.397 0-105.382 40.296-117.207 94.142-3.065 13.955-13.376 25.267-26.996 29.585C39.446 153.982 20 184.252 20 220c0 44.182 31.818 80 76 80h80",fill:"none",stroke:"#7b68ee",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"})]})}),u.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Launch & Support"}),u.jsx("p",{className:"text-gray-600",children:"Experience a seamless project delivery that not only meets deadlines but also provides continuous support post-launch."})]})]})]})}),$h="/react-port/assets/banner-bg-B7enHBXL.jpg",Bh=()=>{const[e,t]=X.useState(0),[n,r]=X.useState(0),[l,i]=X.useState(0),[o,a]=X.useState(0);return X.useEffect(()=>{const s=setInterval(()=>{e<4&&t(h=>h+1)},1e3),c=setInterval(()=>{n<15&&r(h=>h+1)},10),d=setInterval(()=>{l<50&&i(h=>h+1)},20),g=setInterval(()=>{o<98&&a(h=>h+1)},20);return()=>{clearInterval(s),clearInterval(c),clearInterval(d),clearInterval(g)}},[e,n,l,o]),u.jsxs("div",{className:"count relative text-white text-center p-8 flex flex-col lg:flex-row justify-around items-center h-auto lg:h-64",children:[u.jsxs("div",{className:"mb-8 lg:mb-0",children:[u.jsxs("h1",{className:"font-sans font-normal text-4xl",children:[e," ",u.jsx("span",{children:"+"})]}),u.jsx("h2",{className:"text-lg lg:text-xl",children:"Years Helping Business"})]}),u.jsxs("div",{className:"mb-8 lg:mb-0",children:[u.jsxs("h1",{className:"font-sans text-4xl",children:[n," ",u.jsx("span",{children:"+"})]}),u.jsx("h2",{className:"text-lg lg:text-xl",children:"Working Employees"})]}),u.jsxs("div",{className:"mb-8 lg:mb-0",children:[u.jsxs("h1",{className:"font-sans text-4xl",children:[l," ",u.jsx("span",{children:"+"})]}),u.jsx("h2",{className:"text-lg lg:text-xl",children:"Complete Projects"})]}),u.jsxs("div",{children:[u.jsxs("h1",{className:"font-sans text-4xl",children:[o," ",u.jsx("span",{children:"%"})]}),u.jsx("h2",{className:"text-lg lg:text-xl",children:"Client Satisfaction"})]}),u.jsx("style",{jsx:!0,children:`
        .count {
          background-image: url(${$h});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          z-index: 1;
          padding: 80px 20px;
        }
        
        .count::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.6;
          background-color: #1f1f54;
        }
      `})]})},Wh=()=>u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"loader-container",children:u.jsxs("div",{"aria-label":"Orange and tan hamster running in a metal wheel",role:"img",className:"wheel-and-hamster",children:[u.jsx("div",{className:"wheel"}),u.jsx("div",{className:"hamster",children:u.jsxs("div",{className:"hamster__body",children:[u.jsxs("div",{className:"hamster__head",children:[u.jsx("div",{className:"hamster__ear"}),u.jsx("div",{className:"hamster__eye"}),u.jsx("div",{className:"hamster__nose"})]}),u.jsx("div",{className:"hamster__limb hamster__limb--fr"}),u.jsx("div",{className:"hamster__limb hamster__limb--fl"}),u.jsx("div",{className:"hamster__limb hamster__limb--br"}),u.jsx("div",{className:"hamster__limb hamster__limb--bl"}),u.jsx("div",{className:"hamster__tail"})]})}),u.jsx("div",{className:"spoke"})]})}),u.jsx("style",{jsx:!0,children:`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Full viewport height */
          width: 100vw; /* Full viewport width */
          background-color: #f0f0f0; /* Optional: Add background color for better visibility */
        }

        .wheel-and-hamster {
          --dur: 1s;
          position: relative;
          width: 12em;
          height: 12em;
          font-size: 14px;
        }

        .wheel,
        .hamster,
        .hamster div,
        .spoke {
          position: absolute;
        }

        .wheel,
        .spoke {
          border-radius: 50%;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .wheel {
          background: radial-gradient(100% 100% at center, hsla(0, 0%, 60%, 0) 47.8%, hsl(0, 0%, 60%) 48%);
          z-index: 2;
        }

        .hamster {
          animation: hamster var(--dur) ease-in-out infinite;
          top: 50%;
          left: calc(50% - 3.5em);
          width: 7em;
          height: 3.75em;
          transform: rotate(4deg) translate(-0.8em, 1.85em);
          transform-origin: 50% 0;
          z-index: 1;
        }

        .hamster__head {
          animation: hamsterHead var(--dur) ease-in-out infinite;
          background: hsl(30, 90%, 55%);
          border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
          box-shadow: 0 -0.25em 0 hsl(30, 90%, 80%) inset,
            0.75em -1.55em 0 hsl(30, 90%, 90%) inset;
          top: 0;
          left: -2em;
          width: 2.75em;
          height: 2.5em;
          transform-origin: 100% 50%;
        }

        .hamster__ear {
          animation: hamsterEar var(--dur) ease-in-out infinite;
          background: hsl(0, 90%, 85%);
          border-radius: 50%;
          box-shadow: -0.25em 0 hsl(30, 90%, 55%) inset;
          top: -0.25em;
          right: -0.25em;
          width: 0.75em;
          height: 0.75em;
          transform-origin: 50% 75%;
        }

        .hamster__eye {
          animation: hamsterEye var(--dur) linear infinite;
          background-color: hsl(0, 0%, 0%);
          border-radius: 50%;
          top: 0.375em;
          left: 1.25em;
          width: 0.5em;
          height: 0.5em;
        }

        .hamster__nose {
          background: hsl(0, 90%, 75%);
          border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
          top: 0.75em;
          left: 0;
          width: 0.2em;
          height: 0.25em;
        }

        .hamster__body {
          animation: hamsterBody var(--dur) ease-in-out infinite;
          background: hsl(30, 90%, 90%);
          border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
          box-shadow: 0.1em 0.75em 0 hsl(30, 90%, 55%) inset,
            0.15em -0.5em 0 hsl(30, 90%, 80%) inset;
          top: 0.25em;
          left: 2em;
          width: 4.5em;
          height: 3em;
          transform-origin: 17% 50%;
          transform-style: preserve-3d;
        }

        .hamster__limb--fr,
        .hamster__limb--fl {
          clip-path: polygon(0 0, 100% 0, 70% 80%, 60% 100%, 0% 100%, 40% 80%);
          top: 2em;
          left: 0.5em;
          width: 1em;
          height: 1.5em;
          transform-origin: 50% 0;
        }

        .hamster__limb--fr {
          animation: hamsterFRLimb var(--dur) linear infinite;
          background: linear-gradient(hsl(30, 90%, 80%) 80%, hsl(0, 90%, 75%) 80%);
          transform: rotate(15deg) translateZ(-1px);
        }

        .hamster__limb--fl {
          animation: hamsterFLLimb var(--dur) linear infinite;
          background: linear-gradient(hsl(30, 90%, 90%) 80%, hsl(0, 90%, 85%) 80%);
          transform: rotate(15deg);
        }

        .hamster__limb--br,
        .hamster__limb--bl {
          border-radius: 0.75em 0.75em 0 0;
          clip-path: polygon(0 0, 100% 0, 100% 30%, 70% 90%, 70% 100%, 30% 100%, 40% 90%, 0% 30%);
          top: 1em;
          left: 2.8em;
          width: 1.5em;
          height: 2.5em;
          transform-origin: 50% 30%;
        }

        .hamster__limb--br {
          animation: hamsterBRLimb var(--dur) linear infinite;
          background: linear-gradient(hsl(30, 90%, 80%) 90%, hsl(0, 90%, 75%) 90%);
          transform: rotate(-25deg) translateZ(-1px);
        }

        .hamster__limb--bl {
          animation: hamsterBLLimb var(--dur) linear infinite;
          background: linear-gradient(hsl(30, 90%, 90%) 90%, hsl(0, 90%, 85%) 90%);
          transform: rotate(-25deg);
        }

        .hamster__tail {
          animation: hamsterTail var(--dur) linear infinite;
          background: hsl(0, 90%, 85%);
          border-radius: 0.25em 50% 50% 0.25em;
          box-shadow: 0 -0.2em 0 hsl(0, 90%, 75%) inset;
          top: 1.5em;
          right: -0.5em;
          width: 1em;
          height: 0.5em;
          transform: rotate(30deg) translateZ(-1px);
          transform-origin: 0.25em 0.25em;
        }

        .spoke {
          animation: spoke var(--dur) linear infinite;
          background: radial-gradient(100% 100% at center, hsl(0, 0%, 60%) 4.8%, hsla(0, 0%, 60%, 0) 5%),
            linear-gradient(hsla(0, 0%, 55%, 0) 46.9%, hsl(0, 0%, 65%) 47% 52.9%, hsla(0, 0%, 65%, 0) 53%) 50% 50% / 99% 99% no-repeat;
        }

        /* Animations */
        @keyframes hamster {
          from,
          to {
            transform: rotate(4deg) translate(-0.8em, 1.85em);
          }

          50% {
            transform: rotate(0) translate(-0.8em, 1.85em);
          }
        }

        @keyframes hamsterHead {
          from,
          25%,
          50%,
          75%,
          to {
            transform: rotate(0);
          }

          12.5%,
          37.5%,
          62.5%,
          87.5% {
            transform: rotate(8deg);
          }
        }

        @keyframes hamsterEye {
          from,
          90%,
          to {
            transform: scaleY(1);
          }

          95% {
            transform: scaleY(0);
          }
        }

        @keyframes hamsterEar {
          from,
          25%,
          50%,
          75%,
          to {
            transform: rotate(0);
          }

          12.5%,
          37.5%,
          62.5%,
          87.5% {
            transform: rotate(12deg);
          }
        }

        @keyframes hamsterBody {
          from,
          25%,
          50%,
          75%,
          to {
            transform: rotate(0);
          }

          12.5%,
          37.5%,
          62.5%,
          87.5% {
            transform: rotate(-2deg);
          }
        }

        @keyframes hamsterFRLimb {
          from,
          25%,
          50%,
          75%,
          to {
            transform: rotate(50deg) translateZ(-1px);
          }

          12.5%,
          37.5%,
          62.5%,
          87.5% {
            transform: rotate(-30deg) translateZ(-1px);
          }
        }

        @keyframes hamsterFLLimb {
          from,
          25%,
          50%,
          75%,
          to {
            transform: rotate(-30deg);
          }

          12.5%,
          37.5%,
          62.5%,
          87.5% {
            transform: rotate(50deg);
          }
        }

        @keyframes hamsterBRLimb {
          from,
          25%,
          50%,
          75%,
          to {
            transform: rotate(-60deg) translateZ(-1px);
          }

          12.5%,
          37.5%,
          62.5%,
          87.5% {
            transform: rotate(20deg) translateZ(-1px);
          }
        }

        @keyframes hamsterBLLimb {
          from,
          25%,
          50%,
          75%,
          to {
            transform: rotate(20deg);
          }

          12.5%,
          37.5%,
          62.5%,
          87.5% {
            transform: rotate(-60deg);
          }
        }

        @keyframes hamsterTail {
          from,
          25%,
          50%,
          75%,
          to {
            transform: rotate(30deg) translateZ(-1px);
          }

          12.5%,
          37.5%,
          62.5%,
          87.5% {
            transform: rotate(10deg) translateZ(-1px);
          }
        }

        @keyframes spoke {
          from {
            transform: rotate(0);
          }

          to {
            transform: rotate(-1turn);
          }
        }
      `})]});function Vh(){const[e,t]=X.useState(!0);return X.useEffect(()=>{setTimeout(()=>{t(!1)},500)},[]),X.useRef(null),X.useRef(null),u.jsx(u.Fragment,{children:e?u.jsx(Wh,{}):u.jsxs("div",{className:"bg-slate-300",children:[u.jsx(Np,{}),u.jsx(Tp,{}),u.jsxs("div",{className:"bg-gray-50 ",children:[u.jsx(Dh,{}),u.jsx(Uh,{})]}),u.jsx(Ap,{}),u.jsx(Bh,{}),u.jsx(Hh,{}),u.jsx(Lp,{})]})})}const Yh=document.getElementById("root"),Xh=Ji.createRoot(Yh);Xh.render(u.jsx(xr.StrictMode,{children:u.jsx(Vh,{})}));
