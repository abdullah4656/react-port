import{r as f,R as q,j as e,N as $,L as K}from"./index-yRG35Bxm.js";import{N as J,F as ee}from"./Footer-DuOsGQQn.js";import"./index.es-CAcru7-o.js";function H(r,o,s,a){return new(s||(s=Promise))(function(t,l){function i(x){try{h(a.next(x))}catch(n){l(n)}}function c(x){try{h(a.throw(x))}catch(n){l(n)}}function h(x){var n;x.done?t(x.value):(n=x.value,n instanceof s?n:new s(function(p){p(n)})).then(i,c)}h((a=a.apply(r,[])).next())})}function z(r,o){var s,a,t,l,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(h){return function(x){return function(n){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,a&&(t=2&n[0]?a.return:n[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,n[1])).done)return t;switch(a=0,t&&(n=[2&n[0],t.value]),n[0]){case 0:case 1:t=n;break;case 4:return i.label++,{value:n[1],done:!1};case 5:i.label++,a=n[1],n=[0];continue;case 7:n=i.ops.pop(),i.trys.pop();continue;default:if(t=i.trys,!((t=t.length>0&&t[t.length-1])||n[0]!==6&&n[0]!==2)){i=0;continue}if(n[0]===3&&(!t||n[1]>t[0]&&n[1]<t[3])){i.label=n[1];break}if(n[0]===6&&i.label<t[1]){i.label=t[1],t=n;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(n);break}t[2]&&i.ops.pop(),i.trys.pop();continue}n=o.call(r,i)}catch(p){n=[6,p],a=0}finally{s=t=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([h,x])}}}function R(r){var o=typeof Symbol=="function"&&Symbol.iterator,s=o&&r[o],a=0;if(s)return s.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&a>=r.length&&(r=void 0),{value:r&&r[a++],done:!r}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")}function j(r,o){var s=typeof Symbol=="function"&&r[Symbol.iterator];if(!s)return r;var a,t,l=s.call(r),i=[];try{for(;(o===void 0||o-- >0)&&!(a=l.next()).done;)i.push(a.value)}catch(c){t={error:c}}finally{try{a&&!a.done&&(s=l.return)&&s.call(l)}finally{if(t)throw t.error}}return i}function k(r,o,s){if(arguments.length===2)for(var a,t=0,l=o.length;t<l;t++)!a&&t in o||(a||(a=Array.prototype.slice.call(o,0,t)),a[t]=o[t]);return r.concat(a||Array.prototype.slice.call(o))}function V(r,o,s,a,t){for(var l=[],i=5;i<arguments.length;i++)l[i-5]=arguments[i];return H(this,void 0,void 0,function(){var c,h,x,n,p,m;return z(this,function(u){switch(u.label){case 0:u.trys.push([0,12,13,14]),c=R(l),h=c.next(),u.label=1;case 1:if(h.done)return[3,11];switch(x=h.value,typeof x){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,te(r,o,x,s,a,t)];case 3:return u.sent(),[3,10];case 4:return[4,U(x)];case 5:return u.sent(),[3,10];case 6:return[4,x.apply(void 0,k([r,o,s,a,t],j(l),!1))];case 7:return u.sent(),[3,10];case 8:return[4,x];case 9:u.sent(),u.label=10;case 10:return h=c.next(),[3,1];case 11:return[3,14];case 12:return n=u.sent(),p={error:n},[3,14];case 13:try{h&&!h.done&&(m=c.return)&&m.call(c)}finally{if(p)throw p.error}return[7];case 14:return[2]}})})}function te(r,o,s,a,t,l){return H(this,void 0,void 0,function(){var i,c;return z(this,function(h){switch(h.label){case 0:return i=r.textContent||"",c=function(x,n){var p=j(n).slice(0);return k(k([],j(x),!1),[NaN],!1).findIndex(function(m,u){return p[u]!==m})}(i,s),[4,re(r,k(k([],j(se(i,o,c)),!1),j(ae(s,o,c)),!1),a,t,l)];case 1:return h.sent(),[2]}})})}function U(r){return H(this,void 0,void 0,function(){return z(this,function(o){switch(o.label){case 0:return[4,new Promise(function(s){return setTimeout(s,r)})];case 1:return o.sent(),[2]}})})}function re(r,o,s,a,t){return H(this,void 0,void 0,function(){var l,i,c,h,x,n,p,m,u,L,T,F,D;return z(this,function(y){switch(y.label){case 0:if(l=o,t){for(i=0,c=1;c<o.length;c++)if(h=j([o[c-1],o[c]],2),x=h[0],(n=h[1]).length>x.length||n===""){i=c;break}l=o.slice(i,o.length)}y.label=1;case 1:y.trys.push([1,6,7,8]),p=R(function(E){var B,_,N,C,Y,A,M;return z(this,function(w){switch(w.label){case 0:B=function(S){return z(this,function(I){switch(I.label){case 0:return[4,{op:function(O){return requestAnimationFrame(function(){return O.textContent=S})},opCode:function(O){var W=O.textContent||"";return S===""||W.length>S.length?"DELETE":"WRITING"}}];case 1:return I.sent(),[2]}})},w.label=1;case 1:w.trys.push([1,6,7,8]),_=R(E),N=_.next(),w.label=2;case 2:return N.done?[3,5]:(C=N.value,[5,B(C)]);case 3:w.sent(),w.label=4;case 4:return N=_.next(),[3,2];case 5:return[3,8];case 6:return Y=w.sent(),A={error:Y},[3,8];case 7:try{N&&!N.done&&(M=_.return)&&M.call(_)}finally{if(A)throw A.error}return[7];case 8:return[2]}})}(l)),m=p.next(),y.label=2;case 2:return m.done?[3,5]:(u=m.value,L=u.opCode(r)==="WRITING"?s+s*(Math.random()-.5):a+a*(Math.random()-.5),u.op(r),[4,U(L)]);case 3:y.sent(),y.label=4;case 4:return m=p.next(),[3,2];case 5:return[3,8];case 6:return T=y.sent(),F={error:T},[3,8];case 7:try{m&&!m.done&&(D=p.return)&&D.call(p)}finally{if(F)throw F.error}return[7];case 8:return[2]}})})}function ae(r,o,s){var a,t;return s===void 0&&(s=0),z(this,function(l){switch(l.label){case 0:a=o(r),t=a.length,l.label=1;case 1:return s<t?[4,a.slice(0,++s).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}function se(r,o,s){var a,t;return s===void 0&&(s=0),z(this,function(l){switch(l.label){case 0:a=o(r),t=a.length,l.label=1;case 1:return t>s?[4,a.slice(0,--t).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}var ne="index-module_type__E-SaG";(function(r,o){o===void 0&&(o={});var s=o.insertAt;if(typeof document<"u"){var a=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",s==="top"&&a.firstChild?a.insertBefore(t,a.firstChild):a.appendChild(t),t.styleSheet?t.styleSheet.cssText=r:t.appendChild(document.createTextNode(r))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var oe=f.memo(f.forwardRef(function(r,o){var s=r.sequence,a=r.repeat,t=r.className,l=r.speed,i=l===void 0?40:l,c=r.deletionSpeed,h=r.omitDeletionAnimation,x=h!==void 0&&h,n=r.preRenderFirstString,p=n!==void 0&&n,m=r.wrapper,u=m===void 0?"span":m,L=r.splitter,T=L===void 0?function(d){return k([],j(d),!1)}:L,F=r.cursor,D=F===void 0||F,y=r.style,E=function(d,g){var v={};for(var b in d)Object.prototype.hasOwnProperty.call(d,b)&&g.indexOf(b)<0&&(v[b]=d[b]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var X=0;for(b=Object.getOwnPropertySymbols(d);X<b.length;X++)g.indexOf(b[X])<0&&Object.prototype.propertyIsEnumerable.call(d,b[X])&&(v[b[X]]=d[b[X]])}return v}(r,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),B=E["aria-label"],_=E["aria-hidden"],N=E.role;c||(c=i);var C=new Array(2).fill(40);[i,c].forEach(function(d,g){switch(typeof d){case"number":C[g]=Math.abs(d-100);break;case"object":var v=d.type,b=d.value;if(typeof b!="number")break;v==="keyStrokeDelayInMs"&&(C[g]=b)}});var Y,A,M,w,S,I,O=C[0],W=C[1],P=function(d,g){g===void 0&&(g=null);var v=f.useRef(g);return f.useEffect(function(){d&&(typeof d=="function"?d(v.current):d.current=v.current)},[d]),v}(o),Z=ne;Y=t?"".concat(D?Z+" ":"").concat(t):D?Z:"",A=f.useRef(function(){var d,g=s;a===1/0?d=V:typeof a=="number"&&(g=Array(1+a).fill(s).flat());var v=d?k(k([],j(g),!1),[d],!1):k([],j(g),!1);return V.apply(void 0,k([P.current,T,O,W,x],j(v),!1)),function(){P.current}}),M=f.useRef(),w=f.useRef(!1),S=f.useRef(!1),I=j(f.useState(0),2)[1],w.current&&(S.current=!0),f.useEffect(function(){return w.current||(M.current=A.current(),w.current=!0),I(function(d){return d+1}),function(){S.current&&M.current&&M.current()}},[]);var Q=u,G=p?s.find(function(d){return typeof d=="string"})||"":null;return q.createElement(Q,{"aria-hidden":_,"aria-label":B,role:N,style:y,className:Y,children:B?q.createElement("span",{"aria-hidden":"true",ref:P,children:G}):G,ref:B?void 0:P})}),function(r,o){return!0});const ie="/react-port/assets/home-BogEVynH.png",le=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex    bg-gray-50 p-5 md:p-20 lg:pt-10 2xl:p-20 flex-col backimg items-center lg:flex-row justify-center gap-5",children:[e.jsxs("div",{className:"p-5 text-center lg:text-left",children:[e.jsxs("p",{className:"text-4xl p-2 sm:text-5xl md:text-6xl",children:[e.jsx("span",{className:"zz text-blue-900 zz",children:"Innovate and Elevate with"}),"-",e.jsx("strong",{className:"zz text-4xl logo-main sm:text-5xl md:text-6xl text-blue-800",children:"Code Viper"})]}),e.jsx("h3",{className:"flex zz logo-mainn p-2 items-center justify-cente text-2xl sm:text-3xl md:text-4xl intro-desc",children:e.jsx(oe,{sequence:["Leading Software Solutions Company",2e3],wrapper:"span",speed:60,className:"text-blue-800 font-arial font-semibold",repeat:0})}),e.jsx("br",{}),e.jsx("div",{className:"flex flex-col items-center justify-center lg:items-start",children:e.jsx("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 text-center lg:text-left mx-auto lg:mx-0",children:"Transform your business with custom IT solutions designed to meet specific needs. Expertise ensures competitiveness and success through innovative technology and digital strategies."})})]}),e.jsx("img",{className:"w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 mt-2 rounded-xl",src:"images/home-2.png",alt:"home visual"})]}),e.jsxs("div",{className:"home-shape-animation",children:[e.jsx("div",{className:"shape-1",children:e.jsx("img",{src:"images/1.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-2",children:e.jsx("img",{src:"images/2.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-3",children:e.jsx("img",{src:"images/3.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-4",children:e.jsx("img",{src:"images/4.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-5",children:e.jsx("img",{src:"images/5.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-6",children:e.jsx("img",{src:"images/6.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-7",children:e.jsx("img",{src:"images/7.png",loading:"lazy",alt:"shape image"})})]}),e.jsxs("div",{className:"tooltip-container p-10",children:[e.jsx("span",{className:"tooltip",children:"chat on whatsapp  "}),e.jsx("a",{href:"https://wa.me/3186840896?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services",target:"_blank",rel:"noopener noreferrer",children:e.jsx("span",{className:"text",children:"Contact us"})}),e.jsx("svg",{id:"Calque_1",viewBox:"0 0 377 270",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{id:"phone",children:[e.jsxs("g",{id:"caractere_x5F_1",children:[e.jsxs("g",{children:[e.jsx("path",{id:"right_x5F_hair",className:"st1",d:`M199,87.1c-0.9-2.6-1.2-5.3-1.2-8.2c0.2,0.4,0.3,0.8,0.5,1.1c1.4,3.1,2.9,5.8,4.4,8\r
				c-1.2-2.8-2.6-6.9-3.2-12.1c-0.4-4.6,0-8.5,0.5-11.3c2.2-10.3,4.6-21.2-1.6-31.5c-10.9-18.3-33.6-8.4-33.6-8.4L151,110.2\r
				c0,0,17.8,28.2,42,18.3C217.2,118.7,204.4,102.4,199,87.1z`}),e.jsxs("g",{id:"neck_2_",children:[e.jsx("path",{id:"neck_x5F_and_x5F_shoulder",className:"st2",d:`M175.4,146.4c-12.7,2.3-56.5-13-69.2-11c-1.1-8.3,6.2-16.7,9.8-19.2\r
					c10-6.9,28,4.2,27.3-17.8c-0.8-22.9-1.6-28.3-1.6-28.3l26.2,17.5c0,0-5.6,8.1,0,19.7c5.2,10.6,23-2,29.8,11\r
					C180.1,123.5,193.3,143.2,175.4,146.4z`}),e.jsx("path",{id:"shadow_x5F_head",className:"st3",d:`M166.8,104.9c-10.9,1.5-20.9-4.5-23.9-14.5c-0.7-16.2-1.2-20.4-1.2-20.4l26.2,17.5\r
					C167.8,87.6,163,94.6,166.8,104.9z`})]}),e.jsxs("g",{id:"face",children:[e.jsx("path",{id:"face_4_",className:"st2",d:`M188.2,78c-0.5,4.5-2.8,7.9-4,9.8c-1.1,1.7-1,1.1-5.4,6.3c-3.8,4.5-4,5-5.2,5.5\r
					c-1.5,0.6-3.7,0.6-10.4-3.1c-4.9-2.7-8-4.4-11.8-8c-4.2-3.9-11.5-10.6-13.8-21.6c-0.9-4.2-3.3-16.1,23.3-31.2\r
					c0,0,10.4-4.1,18.5,1.2c7.5,5,8.5,14.4,8.7,16.2c0.6,6.2-1.8,8.2-1.1,15.2c0.1,0.5,0.1,1,0.2,1.6l0,0\r
					C187.8,73.4,188.6,74.8,188.2,78z`}),e.jsxs("g",{children:[e.jsx("g",{id:"nose",children:e.jsx("path",{className:"st4",d:`M176.7,63.3c0.9,1.9,1.6,3.8,2.4,5.5c0.4,0.9,0.9,1.8,1.3,2.5c0.5,0.8,1.1,1.5,1.8,1.8l1.3,0.6l-1.2,0.6\r
							c-1.1,0.5-2.1,1-3.2,1.4c-1.1,0.4-2.2,0.8-3.4,0.9c0.5-0.2,1.1-0.5,1.6-0.8s1-0.6,1.5-0.9c1-0.6,2-1.2,2.9-1.8l0.1,1.2\r
							c-1.2-0.4-2-1.3-2.6-2.2c-0.6-0.9-1.1-1.9-1.4-2.9c-0.4-1-0.6-2-0.8-3C176.7,65.4,176.6,64.4,176.7,63.3z`})}),e.jsx("g",{id:"left_x5F_eyebrow",children:e.jsx("path",{className:"st5",d:`M153.1,55.8c0.3-0.7,0.8-1.4,1.3-2s1.1-1.1,1.8-1.6c1.3-0.9,3-1.5,4.7-1.6c1.8-0.1,3.6,0.5,4.9,1.5\r
							c1.4,1,2.4,2.4,2.6,4.1c-1.5-0.7-2.8-1.2-4-1.4c-1.2-0.3-2.3-0.4-3.4-0.4c-1.1,0.1-2.3,0.2-3.6,0.5c-0.6,0.1-1.3,0.3-2,0.5\r
							C154.6,55.5,153.9,55.7,153.1,55.8z`})}),e.jsx("g",{id:"right_x5F_eyebrow",children:e.jsx("path",{className:"st5",d:`M188.6,55.7c-1.2-0.8-2.2-1.3-3.1-1.5c-0.9-0.2-1.6-0.1-2.6,0h-0.3l-0.4,0.1l-0.7,0.2\r
							c-0.5,0.2-1,0.3-1.6,0.4c-0.6,0.2-1.1,0.3-1.8,0.5c-0.6,0.1-1.3,0.3-2,0.3c0.2-0.7,0.6-1.3,1-1.9c0.4-0.6,0.9-1,1.4-1.5\r
							s1.1-0.8,1.7-1.2c0.3-0.2,0.7-0.3,1-0.4l0.5-0.2l0.6-0.1c1.5-0.3,3.4,0,4.6,1.1C188.2,52.7,188.8,54.3,188.6,55.7z`})})]}),e.jsx("path",{id:"mouth",className:"st5",d:`M159.1,79.6c0,0,0.3,3.2,2.5,5.8c0.3,0.4,0.7,0.8,1.1,1.1c1.9,1.6,4.7,2.7,9.1,2.1\r
					c0.5-0.1,0.9-0.2,1.3-0.4c0.4-0.2,0.9-0.4,1.2-0.6c3.4-2.1,3.9-6.4,3.9-6.4s-0.7,0.2-1.8,0.4c-2.8,0.6-8.5,1.1-14.8-1.1\r
					C160.7,80.3,159.9,80,159.1,79.6z`}),e.jsx("path",{id:"tongue",className:"st6",d:`M162.7,86.5c1.9,1.6,4.7,2.7,9.1,2.1c0.5-0.1,0.9-0.2,1.3-0.4c-0.3-1.5-2.9-2.7-6-2.7\r
					C165.3,85.5,163.8,85.9,162.7,86.5z`}),e.jsx("path",{id:"thoot",className:"st7",d:`M161.6,80.6c0,0.7,0.4,1.6,1.7,1.9c2.5,0.5,8.6,1.4,12.4,0.4c0,0,0.5-0.4,0.7-1.2\r
					C173.6,82.3,167.8,82.9,161.6,80.6z`}),e.jsx("path",{id:"eye_x5F_right",className:"st5",d:`M186,63.8c-1.2-0.5-2.1-0.9-3.2-0.9c-1-0.1-2.1,0.1-3.3,0.4c0.3-0.6,0.9-1,1.4-1.3\r
					c0.6-0.3,1.3-0.4,2-0.3C184.2,61.7,185.5,62.5,186,63.8z`}),e.jsx("path",{id:"eye_x5F_left",className:"st5",d:`M158.4,62.6c1-1.4,2.9-2.3,4.7-2.1c0.9,0.1,1.8,0.3,2.6,0.8s1.4,1.1,1.9,1.9\r
					c-0.8-0.4-1.5-0.8-2.3-1c-0.8-0.3-1.5-0.4-2.3-0.5s-1.5,0-2.3,0.2C160,62,159.2,62.3,158.4,62.6z`})]}),e.jsx("path",{id:"hair_x5F_left",className:"st5",d:`M171.3,32.2c0.1-1.7-0.1-3.7-1.1-5.7c-4.5-8.2-21.3-6.8-29.6-5.2\r
				C107,27.8,120.4,92,120.4,92c-21.2,9.9-11.9,28.2-11.9,28.2c1.5-1.5,4-3.4,7.4-3.9c4.6-0.7,7.1,1.7,12.1,1.9\r
				c3.9,0.2,8.2-1.4,11.1-2.9c14.7-7.8-1-32.5,5.5-46.7c-0.1,1.2-0.1,2.4-0.2,3.7c-0.1,3.5,0.6,6.4,1.1,8.3\r
				c-0.2-2.1-0.6-9.3,4.2-15.8c1.9-2.5,3.9-4.1,5.7-5.2c0.3-0.2,0.6-0.3,0.9-0.5c0.1-0.1,0.2-0.1,0.3-0.2l0,0\r
				C173.4,48.2,171.3,32.2,171.3,32.2z`}),e.jsx("ellipse",{id:"left_x5F_cheek_2_",transform:"matrix(8.249854e-02 -0.9966 0.9966 8.249854e-02 79.3047 221.9763)",className:"st8",cx:"160.2",cy:"67.9",rx:"1.3",ry:"3.7"}),e.jsx("path",{id:"right_x5F_cheeck",className:"st8",d:`M187.3,69.9L187.3,69.9c-0.6,0.1-1.3,0.2-2.1,0.1c-1.6-0.1-2.9-0.7-2.9-1.3\r
				c0.1-0.6,1.4-0.9,3.1-0.8c0.6,0.1,1.2,0.2,1.7,0.3C187.1,68.8,187.2,69.3,187.3,69.9z`})]}),e.jsxs("g",{id:"left_x5F_arm_2_",children:[e.jsx("path",{className:"st3",d:`M253.8,129.2c1.8-0.9,3.4-0.4,3.9,0.4c0.4,0.6-0.8,0.8-2.2,2.4c-1.4,1.7-3.4,5.2-3.4,5.2l-2.1-3.8\r
				C249.9,133.4,251.6,130.3,253.8,129.2z`}),e.jsx("path",{className:"st2",d:`M252.4,140.8c-0.4,5.4-0.7,9.3-1.9,13.4c-0.2,0.7-0.8,2.7-1.6,5.1c-0.1,0.3-0.2,0.7-0.3,1\r
				c-0.4,1.1-0.7,2.1-0.9,2.7c0,0.1-0.1,0.2-0.1,0.3c-3.6-2.6-6.1-3-7.7-2.7c-0.4,0.1-1.6,0.3-2.8-0.2c-1-0.4-1.6-1.2-2-1.8\r
				c1.2-1.4,2.1-2.7,2.6-3.6c0.5-1,1.1-2.1,1.3-2.6c0.3-0.7,0.6-1.3,0.8-1.7c-0.1-1-0.3-2-0.4-2.9c-0.4-2.8-0.6-5.5-0.9-8.2\r
				c0,0-1.6-2.2-1.8-2.5c-0.2-0.2-0.7-0.4-0.9-0.9c-0.4-1.8,0.7-3.2,0.7-3.2s-0.4-0.9,0-2.1s1.3-2.2,1.3-2.2s-0.5-2.7,0-3.3\r
				c0.5-0.6,5.4-3.1,6.4-2.8c1,0.3,4.1,5.2,4.1,5.2s-0.3-2.2-0.8-3.4c-0.5-1.2-0.5-2.7-3.8-4.5c-3.8-2.1-3.8-3.7-3.3-4.3\r
				c0.5-0.5,2.9,0.8,4.5,1.6c1.6,0.8,3.1,2.3,5.1,4c2,1.6,1.5,3.1,1.9,4.9c0.5,1.8,0.2,3.6,0.6,4.7\r
				C252.8,131.3,252.9,134.4,252.4,140.8z`}),e.jsx("path",{className:"st3",d:`M237.8,136c0.5,0.1,1.3,2.5,2.2,2.3c0.2-0.1,1.3-0.5,1.3-0.8c0,0-0.9-1.2-1.6-1.7c-0.7-0.5-1.4-1.2-2.1-1.4\r
				c-0.9-0.1-2,0.7-1.7,1.6c0.1,0.4,0,0.7,0.6,1.8c0.4,0.8,1.4,2.2,1.9,2.6c0.4,0.3,0.6-0.7,0.7-1.5\r
				C239.1,138.6,238.1,136.5,237.8,136z`}),e.jsx("path",{className:"st3",d:`M243.3,135c0.4,0-1.6-2.7-1.9-3c-0.6-0.7-1.3-1.7-2.1-2.2c-0.9-0.5-2-0.2-2.5,0.7c-0.3,0.7-0.5,1.6-0.2,2.4\r
				c0.6-1.1,1.2-1.6,2.4-1C240.4,132.5,243.3,135,243.3,135z`}),e.jsx("path",{className:"st3",d:`M244.9,127.7c-0.4-1.1-0.8-1.4-1.3-2.4c-0.2-0.4-0.4-0.9-0.9-0.9c-0.4,0-1.3,0.4-1.7,0.6\r
				c-1.3,0.6-2.9,0.9-3.1,1.1c-0.2,0.2-0.4,1.4,0,2.1c0.3-0.6,1-1.1,1.5-1.2c0.6-0.1,1.2,0.2,1.7,0.4c1,0.5,2,1.4,2.8,2.1\r
				c0.9,0.8,2.4,2.6,2.4,2.6C246.5,130.9,245.2,128.4,244.9,127.7z`}),e.jsxs("g",{children:[e.jsx("path",{className:"st9",d:"M240.6,137.4h0.1l0,0H240.6z"}),e.jsx("path",{className:"st3",d:`M240.9,151.1c-0.2-0.6-1.9-7.6-0.1-12.6c0.1-0.4,0.5-1.1,0.5-1.1c-3.4,0.5-3,4.1-3,5.6\r
					c0.1,2.2,0.6,5.5,1.5,7.6c0.3,0.7,1.2,2.2,2,2.1C241.4,152.4,241.1,151.6,240.9,151.1z`})]}),e.jsx("path",{id:"right_x5F_arm_4_",className:"st2",d:`M248.9,159.3c-0.1,0.7-0.3,1.5-0.6,2.2c0,0-0.2,0.6-0.6,1.5c-0.1,0.1-0.1,0.3-0.1,0.3\r
				c-0.1,0.4-14,34.6-27.3,35.5c-10.5,0.7-24.5-19-29.5-49.2c-1.3-7.7-2.6-15.3-3.9-23c0,0,17.1,2.4,22.2,15.5\r
				c7.1,18.2,12.2,34.6,12.2,34.6c7.4-7.6,10.5-11.9,11.9-14.5c0.6-1.2,1.3-2.4,2-3.6c1.2-1.4,2.1-2.7,2.6-3.6\r
				c0.5-1,1.1-2.1,1.3-2.6c1.6-1.3,4.5-2.2,6.7-1.2C248.1,152.3,249.6,155.6,248.9,159.3z`}),e.jsx("path",{id:"shadow_x5F_right_x5F_arm_2_",className:"st3",d:"M221.3,176.7l-3.3,2.8c0,0-1.1-16.2-2.6-20.4L221.3,176.7z"})]}),e.jsx("path",{id:"skirt_2_",className:"st10",d:`M211.4,267.9H96.7c0.7-2.3,1.5-4.5,2.3-6.4c6.2-15.6,14.1-23.9,23.3-47.3\r
			c2.6-6.4,4.5-12.3,6.1-17.2c1.2-3.8,2.1-7.1,2.8-9.8c19.9,1.1,39.9,2.2,59.8,3.3c0.6,2.1,1.2,4.3,1.9,6.5\r
			c3.3,11.6,6.5,23.4,9.6,35.5C205.6,244.4,208.6,256.3,211.4,267.9z`}),e.jsx("path",{id:"back_x5F_left_x5F_arm_2_",className:"st3",d:`M111.4,188.1c3.9-2.5,6.7-13.2,10.4-37.9c1.2-8,1.7-11.5,1-16.5\r
			c-0.3-2.3-1.6-11.8-7-13.6c-3.6-1.2-7.3,0.8-8,1.2c-8,5.2-8.6,16.5-8.5,38.6c0.1,17.5,0.5,28.3,3.4,29.6\r
			C106.3,191.3,110.8,188.5,111.4,188.1z`}),e.jsxs("g",{id:"chest_1_",children:[e.jsx("g",{id:"chest_4_",children:e.jsx("g",{children:e.jsx("path",{className:"st11",d:`M99.9,140.4c0-1.8,0.2-12.4,8.6-20.2c7.2-6.6,17.7-8.7,27.4-5.6c3.9,7.3,7.6,9.3,10.4,9.7\r
						c3.3,0.4,5.5-1.4,8.2,0.1c3.4,1.9,3.1,6.6,5.1,6.8c1.4,0.1,1.9-2.2,4.1-4.7c4.1-4.4,8.4-2.9,13.1-6.4c1.9-1.4,4.3-4,5.8-8.9\r
						c3.1-0.2,7.4-0.1,12.3,1.5c0,0,0.5,0.1,0.9,0.3c14.4,5.4,18.3,23.5,18.3,23.5c-4.4,5.7-10.2,10-15.1,12.9\r
						c2.7,20.4-8,41.1-8,41.1c-8,1.5-18,2.7-29.6,2.5c-12.2-0.2-22.6-1.9-30.8-3.9c-2.9-11.9-5.8-23.8-8.7-35.7L99.9,140.4z`})})}),e.jsx("g",{id:"shadow_x5F_chest_2_",className:"st12",children:e.jsx("g",{children:e.jsx("path",{className:"st13",d:`M141.3,169.8c9.2,4,19.3,6.2,29.2,7.7c8.2,1.2,16.8,2.5,25.1,1.7c-2.2,6.8-4.5,11.3-4.5,11.3\r
						c-10.4,1.9-23.9,3.3-39.5,2c-7.8-0.7-14.8-1.9-20.9-3.3c-2.7-11.2-5.4-22.4-8.1-33.7C126.8,162.2,134,166.6,141.3,169.8z`})})})]}),e.jsxs("g",{id:"right_x5F_arm_1_",children:[e.jsx("path",{className:"st2",d:`M111.6,147.8c1.3,8.4,2.2,8.5,3.4,18c0.8,6.5,0.2,10.7-1.2,15.1c-0.9,2.9-1.2,6-4.9,8\r
				c-0.6,0.3-3.4,2.3-7.5,0.7c-0.6-0.2-5.8-4.1-7.5-15.3c-0.9-6.1-0.6-21.9,2.7-35.2c4-16.7,3.4-14,4.9-19\r
				c1.5-4.9,1.9-13.4,7.3-14.6c1.8-0.4,3.7,1,4.6,2.4c1.2,1.9-0.2,4-0.7,7.3C110.3,128.8,110.3,139.2,111.6,147.8z`}),e.jsx("path",{className:"st3",d:`M114.5,93.9c0.7-2.5,2.1-4.4,2.7-6.9c0-0.2,0.1-0.8,0.6-1.2c1.2-0.9,3.9-1.2,6.7-2.7\r
				c0.3-0.2,2.2-1.4,2.7-1.1c0.4,0.3,0.8,0.9,0.7,1.4c-0.1,0.3,0,1.5-1.5,2.5c-2.5,1.6-5.4,2.3-5.7,2.6c-0.6,0.5-0.1,2.4-0.1,3.2\r
				c-0.1,6-3.3,7.1-3,9.7c0.1,0.5,0.3,1.4,0.9,1.6c0.9,0.4,1.6,0.1,4.3-1c0.5-0.2,6.1-2.5,7.3-0.9c0.4,0.6-0.1,1.6-0.7,2\r
				c-0.5,0.3-2.3,1.3-4.1,2c-2.6,1.1-3.1,1.3-4.1,2c-1,0.8-0.8,0.4-1.9,1.7c-1.6,1.9-3.7,2.8-4.8,3.2c-1.9,0.7-4.5,0.6-5.8-0.5\r
				c-1.2-1.1-0.5-2.4,0.4-5.6C111.2,99.3,113.1,99.3,114.5,93.9z`}),e.jsx("path",{className:"st2",d:`M126.2,96.5c0.3,0,0.8-0.1,1.4,0c0.6,0.1,1,0.4,1.9,0.8c2.1,1.2,1.9,0.9,2.3,1.2c1,0.8,0.8,1.2,1.9,2.1\r
				c0.5,0.4,1.9,1.1,3.3,0.2c0.5-0.3,0.2-1.1,0.2-1.2c-0.1-0.4-0.3-0.6-1.2-1.7c-0.7-0.8-0.9-1.1-0.8-1.2c0.1-0.1,1.2,0.2,1.2-0.8\r
				c0-0.5-0.3-0.9-0.8-1.4c-1.7-1.9-1.9-2.5-3.1-3.3c-0.2-0.1-0.7-0.5-1.9-0.8c-3.1-0.8-4.8-2.1-6.2-1.7c-1.4,0.4-10.4,3.2-11,3.5\r
				c-1.1,0.6-1.5,1.7-1.7,2.1c-1.4,3.5-2.6,4.4-5.8,11.6c-1.3,2.8-1.8,3.9-1.3,5c0.7,1.3,2.4,1.6,3.3,1.8c0.4,0.1,2.9,0.6,5-0.8\r
				c1-0.7,1.5-1.6,2.5-3.3c1.7-3.1,1.7-4.7,3.1-5.4c0.1-0.1,1-0.5,2.3-0.8c0.4-0.1,0.7-0.2,0.8-0.2c1.7-0.2,4.1,0.5,4.4,0.6\r
				c0.4,0.1,1.5,1.3,4.8,3.1c0.4,0.2,2.3,1.2,3.1,0.4c0.4-0.4,0.2-1,0.2-1c-0.2-0.7-1-1.1-1.7-1.4c-2-1.1-1.6-2-3.9-3.5\r
				c-0.7-0.5-1.4-0.9-2.3-1.2c-3.1-1.2-5.2-0.2-5.4-1C120.6,97.4,122.9,97,126.2,96.5z`})]})]}),e.jsxs("g",{id:"white-shirt",children:[e.jsx("path",{id:"shirt",className:"st7",d:`M191,190.5c-5.2,1-11.1,1.8-17.6,2.2c-0.7-9.1-1.3-18.1-2-27.2v-18.8l1.1-19.1l-4-8\r
			c-1.2,0.6-2.6,1.4-4.1,2.7c-0.7,0.6-1.3,1.2-1.8,1.8c-0.4,0.4-1,0.9-1.5,1.6c-0.8,1.1-1.3,2.2-1.5,3c-0.3-0.8-0.9-2-2-3.1\r
			c-0.6-0.6-1.2-1.1-1.7-1.4c-1.5-1.8-2.9-3.5-4.4-5.3l-3.3,7.5l4.9,22.1l0.8,18.6c-1.3,8.4-2.5,16.8-3.8,25.2c0.1,0,0.2,0,0.2,0\r
			l0,0c-7.2-0.7-13.8-1.9-19.6-3.2c-1.7,5.5-3.3,11-5,16.5c8.3,2.1,19.3,4.1,32.1,4.3c15.4,0.2,28.2-2.2,37.5-4.7\r
			C193.8,200.3,192.4,195.4,191,190.5z`}),e.jsx("path",{id:"left_x5F_shadow",className:"st14",d:`M135.7,107.1l4.3,6.8l3.7-0.4l-0.2-0.6c0,0,0.7-1.3,1.4-2.9c0.6-1.1,0.7-4.2,0.8-5.9\r
			L135.7,107.1z`}),e.jsx("path",{id:"shadow_x5F_right",className:"st14",d:"M179,104.9l-12.9-2.1c0,0,1.2,5.4,3.9,7.3c2,1.4,2.9,1.4,2.9,1.4L179,104.9z"}),e.jsx("path",{id:"right_x5F_collar",className:"st7",d:`M184.8,109.7c-1.9-1.6-3.9-3.2-5.8-4.8c-4.4,4.8-8.8,9.5-13.1,14.2l-1.9,9.5l4.5-4.5\r
			l4.2,7.9C176.7,124.6,180.8,117.1,184.8,109.7z`}),e.jsx("path",{id:"left_x5F_collar",className:"st7",d:`M135.6,107l-6.1,4.2l17.8,20.8c1.2-3,2.5-6,3.8-8.9c2.2,2,4.5,3.9,6.7,5.9\r
			c-2.1-3.4-4.2-6.8-6.3-10.1C146.2,114.9,140.9,111,135.6,107z`}),e.jsx("path",{id:"front_x5F_left_x5F_collar",className:"st14",d:`M147.4,132c1.4-4.4,2.8-8.8,4.1-13.1c2,2.2,4.1,4.5,6.1,6.7\r
			c-1.6-0.8-3.2-1.6-4.8-2.4c-0.6,0.8-1.2,1.7-1.9,2.6C149.5,128,148.3,130.1,147.4,132z`}),e.jsx("path",{id:"front_x5F_right_x5F_collar",className:"st14",d:`M172.7,132c-2.3-4.3-4.6-8.5-6.9-12.8c-1.6,2.1-3.1,4.3-4.7,6.4\r
			c1.5-0.6,2.9-1.3,4.4-2c1,0.7,2.1,1.6,3.1,2.8C170.5,128.5,171.8,130.4,172.7,132z`})]}),e.jsxs("g",{id:"headphone_2_",children:[e.jsx("path",{className:"st7",d:`M158.6,21.9c5.4-0.1,8.1,1.2,9.2,1.9l0,0l-0.1-0.1c-0.5-0.5-3.6-3.1-10.5-3.1c-16.4-0.2-28.7,13-30.1,30.8\r
			c-0.9,0.1-1.8,0.5-2.3,1.2c-2.5,3.3-2.9,8.6-2.9,13.2c0,4.2,1.8,12.4,3.4,13.6c1.9,1.4,4.7,0.8,5.1,0.6c0.5-0.2,0.9-0.5,1.3-0.9\r
			c3.3,7.9,9.8,13.1,17.1,13.1c1.2,0,2.3-0.1,3.3-0.4c0.7,0.6,1.8,1.1,3.2,1.1c2.1,0,3.8-1,3.8-2.3s-1.7-2.3-3.8-2.3s-3.8,1-3.8,2.3\r
			v0.1c-0.6,0.1-1.2,0.1-1.8,0.1c-7.1,0-13.3-6.8-15.8-15.8c0.8-2.4,1.2-5.5,1.2-9.2c0-7.3-1.7-12.9-4.2-14\r
			C132.5,35.9,144.9,22.1,158.6,21.9z`}),e.jsx("ellipse",{className:"st15",cx:"127.2",cy:"65.8",rx:"4.1",ry:"12.4"})]})]})})]}),e.jsx("style",{jsx:!0,children:`
  .tooltip-container {
  --background: #1e40af;
  --support-size: 50px;
  --tooltip-radius: 10px 10px 10px 0;
  --outline-border-color:  #1e3a8a;
  position: relative;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  font-weight: bold;
  padding: 0.7em 1.8em;
  color: var(--background);
  border: solid 2px var(--background);
z-index:1000;
width:150px;
  left:40px;
  margin:5px;
  border-radius:5px;
}
.tooltip-container::before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: all 0.5s linear;
  outline: 3px solid transparent;
  background: var(--background);
}
.tooltip-container:hover {
  color: white;
}
.tooltip-container:hover:before {
  width: 100%;
  height: 100%;
  border-radius: 0;
  outline-offset: 5px;
  outline-color: var(--outline-border-color);
}
.tooltip {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 50%;
  transform: translateX(-5%);
  padding: 0.3em 0.6em;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  background: var(--background);
  border-radius: var(--tooltip-radius);
  color: white;
  box-shadow: 3px 3px 0px var(--outline-border-color);
}

.tooltip::after {
  content: "Hello!👋";
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--background);
  text-align: center;
  border-radius: var(--tooltip-radius);
}
.tooltip::before {
  position: absolute;
  content: "";
  bottom: 0;
  border-style: solid;
  border-width: 10px;
  left: 0;
  transform: translateX(-50%);
  border-color: transparent var(--background) var(--background) transparent;
  box-shadow: 0px 3px 0px var(--outline-border-color);
}

.tooltip-container:hover .tooltip::after {
  animation: hidden 0.5s 1.5s linear forwards;
}

.tooltip-container:hover .tooltip {
  top: calc(-100% - var(--support-size) * 0.5);
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  animation: shake 0.5s 1s linear;
  transition: all 0.3s 0.5s;
}

@keyframes hidden {
  50% {
    transform: translate(-50%, -50%) scale(0.5);
    background-color: #1ca0f5;
  }
  100% {
    transform: translate(0, -50%) scale(0.5);
    opacity: 0;
  }
}

@keyframes shake {
  0%,
  40%,
  80% {
    transform: translateX(-10%);
  }
  20%,
  60%,
  100% {
    transform: translateX(0);
  }
}

.st2 {
  fill: #f9c8a7;
}
.st3 {
  fill: #ff9e97;
}
.st6 {
  fill: #d72e48;
}
.st7 {
  fill: #ffffff;
}
.st8 {
  fill: #ff8d7f;
}
.st10 {
  fill: #3d3d3b;
}
.st11 {
  fill: #1ca0f5;
}
.st12 {
  opacity: 0.2;
}
.st14 {
  fill: #b7b7b7;
}
.st15 {
  fill: #ead9cf;
}
#Calque_1 {
  display: inline-block;
  height: var(--support-size);
  position: absolute;
  opacity: 0;
  transition: all 0.5s;
  z-index: -1;
  left: 0;
  top: 0;
}
#left_x5F_arm_2_ {
  transform: translateX(2px);
}

.tooltip-container:hover #Calque_1 {
  top: calc(var(--support-size) * -1);
  opacity: 1;
}

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
          background-image: url(${ie});
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
      `})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"w-full psec",children:[e.jsx("h2",{className:"flex justify-center text-4xl sm:text-4xl md:text-5xl m-10 font-extrabold",style:{color:"#404040"},children:"Our Portfolio"}),e.jsxs("div",{className:"flex gap-10 p-5 justify-evenly flex-wrap pb-40",children:[e.jsxs("p",{className:"transform hover:scale-110 transition duration-300 ease-in-out",children:[" ",e.jsx("img",{className:"w-1/4",src:"images/sponge_3.png",alt:"Sponge Project Screenshot"})]}),e.jsx("p",{className:"transform hover:scale-110 transition duration-300 ease-in-out",children:e.jsx("img",{className:"w-1/4",src:"images/Watermart.png",alt:"Watermart Project Screenshot"})}),e.jsx("p",{className:"transform hover:scale-110 transition duration-300 ease-in-out",children:e.jsx("img",{className:"w-1/4",src:"images/Thorai.jpeg",alt:"Thorai Project Screenshot"})}),e.jsx("p",{className:"transform hover:scale-110 transition duration-300 ease-in-out",children:e.jsx("img",{className:"w-1/4",src:"images/wise_eye_1.png",alt:"Wise Eye Project Screenshot"})}),e.jsx("p",{className:"transform hover:scale-110 transition duration-300 ease-in-out",children:e.jsx("img",{className:"w-1/4",src:"images/Buses_Plus_1.png",alt:"Buses Plus Project Screenshot"})})]})]}),e.jsx("style",{jsx:!0,children:`
        .a {
          height: 100px;
          width: 300px;
        }
      `})]}),de=()=>e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"w-full  h-full",children:[e.jsx("h2",{className:"flex  justify-center text-5xl font-extrabold m-10",style:{color:"#404040"},children:"Our Services"}),e.jsxs("div",{className:"flex flex-wrap justify-start m-8 items-center bg-slate-200",children:[e.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4 ",children:e.jsxs("div",{className:"h-full p-8  bg-slate-100  shadow-xl card rounded-md",children:[e.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",id:"SvgjsSvg1035",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1036"}),e.jsx("g",{id:"SvgjsG1037",children:e.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 47.5 47.5",viewBox:"0 0 47.5 47.5",children:[e.jsx("defs",{children:e.jsx("clipPath",{id:"a",children:e.jsx("path",{d:"M0 38h38V0H0v38Z",className:"color000 svgShape"})})}),e.jsx("g",{clipPath:"url(#a)",transform:"matrix(1.25 0 0 -1.25 0 47.5)",children:e.jsx("path",{d:"M0 0c1.014 1.184 1.902 2.594 2.619 4.198h2.503A16.053 16.053 0 0 0 0 0m-19.837 4.198h2.503c.716-1.604 1.605-3.014 2.619-4.198a16.042 16.042 0 0 0-5.122 4.198m5.122 24.199c-1.014-1.184-1.903-2.594-2.619-4.199h-2.503a16.056 16.056 0 0 0 5.122 4.199m19.837-4.199H2.619C1.902 25.803 1.014 27.213 0 28.397a16.043 16.043 0 0 0 5.122-4.199m-.513-9c-.092 2.506-.522 4.871-1.228 7h3.103a15.868 15.868 0 0 0 2.108-7H4.609zm0-2h3.983a15.872 15.872 0 0 0-2.108-7H3.381c.706 2.129 1.136 4.494 1.228 7m-10.966-7v7h8.968c-.098-2.541-.563-4.917-1.317-7h-7.651zm0-7.919v5.919H.442C-1.194.935-3.61-1.284-6.357-1.721m-2 5.919v-5.919c-2.747.437-5.164 2.656-6.8 5.919h6.8zm-8.969 9h8.969v-7h-7.652c-.754 2.083-1.219 4.459-1.317 7m-1.998 2h-3.983a15.893 15.893 0 0 0 2.107 7h3.105c-.707-2.129-1.136-4.494-1.229-7m10.967 7v-7h-8.969c.098 2.541.563 4.917 1.317 7h7.652zm0 7.92v-5.92h-6.8c1.637 3.264 4.053 5.483 6.8 5.92m9.651-7.92c.754-2.083 1.219-4.459 1.317-7h-8.968v7h7.651zm-7.651 2v5.92c2.747-.437 5.162-2.656 6.798-5.92h-6.798zm-16.95-11h3.983c.092-2.506.522-4.871 1.229-7H-21.2a15.897 15.897 0 0 0-2.107 7m15.95 19c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18",transform:"translate(26.357 4.802)",className:"color3b88c3 svgShape"})})]})})]}),e.jsx("h3",{className:"font-semibold  text-2xl mb-4",children:"Web Development"}),e.jsxs("p",{className:" text-gray-600 hover:text-white  mb-4   flex flex-grow ",children:["Create a stunning online presence with ",e.jsx("br",{})," our  bespoke web development services.  ",e.jsx("br",{}),"Our team employs the latest ",e.jsx("br",{})," technologies to build websites that ",e.jsx("br",{})," captivate and convert."]})]})}),e.jsx("div",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4",children:e.jsxs("div",{className:"h-full p-6 bg-slate-100  card rounded-md shadow-xl",children:[e.jsxs("svg",{id:"SvgjsSvg1057",className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1058"}),e.jsx("g",{id:"SvgjsG1059",children:e.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 512 512",children:[e.jsx("path",{d:"M437.023 143.9a18.079 18.079 0 0 0-17.018 12.065h-23.161a19.661 19.661 0 0 0-19.1 15.4 7.6 7.6 0 0 1-7.379 5.947h-17.687V92.675a41.911 41.911 0 0 0-41.864-41.863H167.361A41.911 41.911 0 0 0 125.5 92.675v84.638h-17.685a7.594 7.594 0 0 1-7.379-5.947 19.662 19.662 0 0 0-19.105-15.4h-23.16a18.064 18.064 0 1 0 0 12h23.16a7.594 7.594 0 0 1 7.379 5.947 19.662 19.662 0 0 0 19.105 15.4H125.5v36.093h-1.23a12.064 12.064 0 0 1-11.166-7.444 24.033 24.033 0 0 0-22.243-14.829H86.94a18.064 18.064 0 1 0 0 12h3.921a12.064 12.064 0 0 1 11.166 7.444 24.035 24.035 0 0 0 22.243 14.829h1.23v13.308l-21.31-.1a25.208 25.208 0 0 0-22.2 13.241 13.22 13.22 0 0 1-11.649 6.945H62.2a18.056 18.056 0 1 0 .17 12h7.967a25.207 25.207 0 0 0 22.2-13.24 13.21 13.21 0 0 1 11.616-6.945l21.339.1v36.92h-1.482a28.135 28.135 0 0 0-26.841 20.083 16.065 16.065 0 0 1-15.329 11.47h-8.7a18.064 18.064 0 1 0 0 12h8.7a28.135 28.135 0 0 0 26.842-20.088 16.066 16.066 0 0 1 15.328-11.469h1.49v94.845a41.911 41.911 0 0 0 41.863 41.864h143.451a41.746 41.746 0 0 0 32.345-15.285 6 6 0 1 0-9.267-7.623 29.785 29.785 0 0 1-23.078 10.908H167.361a29.9 29.9 0 0 1-29.861-29.861v-22.69h166.972v-12H137.5V116.607h145.52a6 6 0 0 0 0-12H137.5V92.675a29.9 29.9 0 0 1 29.863-29.863h143.451a29.9 29.9 0 0 1 29.864 29.863v11.932h-11.932a6 6 0 0 0 0 12h11.932v139.778a6 6 0 0 0 12 0v-18.979h1.227a24.035 24.035 0 0 0 22.244-14.829 12.064 12.064 0 0 1 11.166-7.444h3.92a18.065 18.065 0 1 0 0-12h-3.92a24.033 24.033 0 0 0-22.243 14.829 12.067 12.067 0 0 1-11.167 7.444h-1.227v-36.093h17.683a19.664 19.664 0 0 0 19.105-15.4 7.593 7.593 0 0 1 7.378-5.947h23.161a18.056 18.056 0 1 0 17.018-24.066ZM41.152 168.032a6.065 6.065 0 1 1 6.065-6.064 6.07 6.07 0 0 1-6.065 6.064Zm28.77 47.168a6.065 6.065 0 1 1 6.064-6.064 6.071 6.071 0 0 1-6.064 6.064Zm-24.651 67.9a6.065 6.065 0 1 1 6.064-6.065 6.072 6.072 0 0 1-6.064 6.059Zm10.846 60.157a6.064 6.064 0 1 1 6.065-6.064 6.071 6.071 0 0 1-6.065 6.058Zm352.137-140.189a6.065 6.065 0 1 1-6.065 6.065 6.071 6.071 0 0 1 6.065-6.065Zm28.769-35.036a6.065 6.065 0 1 1 6.065-6.064 6.07 6.07 0 0 1-6.065 6.064Z",className:"color0635c9 svgShape"}),e.jsx("path",{d:"M316.644 110.607a6 6 0 0 0-6-6h-9.966a6 6 0 0 0 0 12h9.966a6 6 0 0 0 6-6zm-97.005 299.458a19.449 19.449 0 1 0 19.449-19.448 19.471 19.471 0 0 0-19.449 19.448zm26.9 0a7.449 7.449 0 1 1-7.448-7.448 7.456 7.456 0 0 1 7.445 7.448zm58.221-159.918a75.992 75.992 0 1 0-48.153 70.717L252.2 309.7a64.111 64.111 0 1 1 29.618-23.8l9.941 6.722a75.546 75.546 0 0 0 13.001-42.475z",className:"color0635c9 svgShape"}),e.jsx("path",{d:"M278.059 276.731a55.914 55.914 0 1 0-33.94 27.283l-3.285-11.542a43.988 43.988 0 1 1 26.666-21.445Z",className:"color0635c9 svgShape"}),e.jsx("path",{d:"M410.387 243.5a25.979 25.979 0 0 0-45.838 9.461 26.007 26.007 0 0 0-38.416 19.309c-.107.8-.172 1.6-.2 2.4a25.944 25.944 0 0 0-30.7 17.974l-45.235-57.338a26 26 0 1 0-41.242 31.67l83.704 106.731a40.035 40.035 0 0 0-26.374 23.9 6 6 0 0 0 3.146 7.667l76.308 33.98A86 86 0 0 0 471.187 322.9ZM300.784 384.32l26.36 33.608-47.258-21.044a28.018 28.018 0 0 1 20.898-12.564ZM447.9 433.935a74.1 74.1 0 0 1-103.786-13.814l-125.877-160.49a14 14 0 1 1 22.283-16.956l101.6 128.787a6.048 6.048 0 0 0 .413.471c.015.016.032.029.047.045q.213.213.441.4c.051.042.1.079.158.12.121.093.244.183.37.266.062.04.125.078.188.115.124.076.251.146.38.212.064.032.128.064.193.094.137.063.275.12.415.172.06.022.119.046.179.067.166.056.335.1.5.145.035.009.069.02.105.028a6.059 6.059 0 0 0 .642.109h.04c.2.021.393.031.59.033h.049c.025 0 .049-.006.074-.006a5.957 5.957 0 0 0 .832-.067l.064-.007a6.026 6.026 0 0 0 .838-.206l.153-.05a5.969 5.969 0 0 0 .8-.341c.036-.018.07-.041.106-.06a6.1 6.1 0 0 0 .713-.457c.021-.016.045-.027.067-.043s.021-.02.033-.029l.035-.024c.068-.054.128-.114.194-.17s.161-.135.237-.207.136-.14.2-.211.144-.149.211-.226.12-.153.18-.229.125-.158.183-.24.105-.165.157-.248.106-.164.154-.249.089-.176.133-.264.087-.17.125-.257.073-.185.108-.278.069-.173.1-.262.055-.19.081-.286.052-.179.072-.27.036-.192.053-.289.034-.185.046-.279.017-.191.024-.287.018-.191.02-.287 0-.19 0-.286 0-.194-.007-.291-.02-.191-.031-.286-.02-.192-.036-.288-.038-.19-.059-.286-.038-.189-.063-.283-.058-.189-.089-.284-.056-.184-.09-.274-.079-.189-.12-.283-.073-.175-.115-.261-.1-.185-.152-.277-.091-.167-.142-.249-.12-.176-.182-.264c-.048-.069-.091-.14-.143-.208l-42.56-55.576a14 14 0 0 1 22.23-17.023l42.56 55.575a6.156 6.156 0 0 0 .44.509c.05.052.1.1.154.148.108.1.216.206.33.3.063.052.128.1.193.152a6.3 6.3 0 0 0 .542.371 6.5 6.5 0 0 0 .356.2c.07.036.139.073.21.107.135.063.273.118.412.17.059.023.117.049.177.069a5.815 5.815 0 0 0 .606.174c.029.007.059.01.088.016.176.038.354.069.533.091.071.009.143.012.214.018.139.012.278.021.417.023.032 0 .064.006.1.006s.063-.007.095-.008a5.915 5.915 0 0 0 .85-.068l.032-.006a5.988 5.988 0 0 0 .818-.2c.05-.016.1-.03.151-.047a5.979 5.979 0 0 0 .784-.335c.05-.026.1-.054.147-.081a5.91 5.91 0 0 0 .766-.491 6 6 0 0 0 1.116-8.412L340.792 284.2a14 14 0 1 1 22.23-17.024l42.56 55.575a6 6 0 1 0 9.527-7.3l-36.48-47.636a14 14 0 1 1 22.23-17.024l60.8 79.394a74.083 74.083 0 0 1-13.759 103.75Z",className:"color1ae5be svgShape"})]})})]}),e.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"Mobile App Development"}),e.jsxs("p",{className:" text-gray-600 hover:text-white  mb-4",children:["Stay in touch with your clients while on ",e.jsx("br",{})," the move using personalized mobile ",e.jsx("br",{})," apps. Our development team creates ",e.jsx("br",{})," intuitive applications for iOS and ",e.jsx("br",{})," Android, ensuring seamless user ",e.jsx("br",{}),"experiences."]})]})}),e.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4 min-h-96",children:e.jsxs("div",{className:"h-full p-6 bg-slate-100  card rounded-md shadow-xl min-h-96",children:[e.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",id:"SvgjsSvg1408",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1409"}),e.jsx("g",{id:"SvgjsG1410",children:e.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg","fill-rule":"evenodd",clipRule:"evenodd","image-rendering":"optimizeQuality","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision",viewBox:"0 0 512 512",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"a",x1:"256",x2:"256",y1:"63.4",y2:"448.8",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0","stop-color":"#fff",className:"stopColor5cc6d0 svgShape"}),e.jsx("stop",{offset:".49","stop-color":"#fff",className:"stopColora53692 svgShape"}),e.jsx("stop",{offset:"1","stop-color":"#fff",className:"stopColorf06277 svgShape"})]})}),e.jsx("path",{d:"M460.83 378.84l0 -221.57c0,-1.61 -1.35,-2.96 -2.95,-2.96l-68.51 0c36.14,92.27 -30.37,194.91 -134.6,195.2 -98.28,0.27 -168.86,-101.5 -132.14,-195.2l-68.51 0c-1.6,0 -2.95,1.35 -2.95,2.95l0 221.58 409.66 0zm-423.65 0l0 -221.57c0,-9.35 7.6,-16.95 16.94,-16.95l74.89 0c53.55,-102.56 200.44,-102.56 253.98,0l74.89 0c9.34,0 16.94,7.6 16.94,16.95l0 221.57 30.03 0c3.87,0 7,3.13 7,7l0 27.98c0,19.29 -15.69,34.98 -34.98,34.98l-441.74 0c-19.29,0 -34.98,-15.69 -34.98,-34.98l0 -27.98c0,-3.87 3.13,-7 7,-7l30.03 0zm-23.04 13.99l0 20.99c0,11.58 9.42,20.99 20.99,20.99l441.74 0c11.57,0 20.99,-9.41 20.99,-20.99l0 -20.99 -177.99 0 0 24c0,3.87 -3.13,7 -7,7l-113.74 0c-3.86,0 -7,-3.13 -7,-7l0 -24 -177.99 0zm291.74 0l-99.75 0 0 17.01 99.75 0 0 -17.01zm-49.88 -315.64c-71.23,0 -129.17,57.94 -129.17,129.17 0,56.97 37.07,105.44 88.36,122.56l0 -105.37c0,-2.6 -1.15,-4.94 -2.97,-6.54 -11.72,26.6 -51.78,18.24 -51.78,-10.86 0,-14.9 12.12,-27.03 27.03,-27.03 13.57,0 24.83,10.05 26.74,23.1 8.76,3.17 14.97,11.57 14.97,21.32l0 109.18c5.95,1.27 12.06,2.12 18.28,2.52l0 -155.79 -21.81 -13.27c-20.05,19.38 -53.78,5.15 -53.78,-22.81 0,-17.5 14.23,-31.74 31.73,-31.74 22.24,0 37.43,22.31 29.73,42.85l24.76 15.06c2.09,1.27 3.36,3.54 3.36,5.98l0 159.89c6.22,-0.26 12.32,-0.96 18.29,-2.07l0 -103.62c0,-9.75 6.2,-18.15 14.96,-21.33 1.91,-13.04 13.17,-23.1 26.74,-23.1 14.91,0 27.03,12.13 27.03,27.04 0,29.1 -40.06,37.45 -51.78,10.86 -1.82,1.59 -2.96,3.94 -2.96,6.53l0 100.19c52.88,-16.18 91.44,-65.44 91.44,-123.55 0,-71.23 -57.94,-129.17 -129.17,-129.17zm-52.4 48.44c-23.35,0 -23.35,35.49 0,35.49 23.36,0 23.36,-35.49 0,-35.49zm-16.13 67.48c-17.16,0 -17.16,26.08 0,26.08 17.16,0 17.16,-26.08 0,-26.08zm133.97 6.18c-17.16,0 -17.16,26.07 0,26.07 17.17,0 17.17,-26.07 0,-26.07z"})]})})]}),e.jsx("h3",{className:"font-semibold text-black text-2xl mb-4 ",children:"Desktop App Development"}),e.jsxs("p",{className:"  text-gray-600 hover:text-white  mb-4",children:["Empower your business with robust ",e.jsx("br",{}),"desktop applications built for ",e.jsx("br",{})," performance. Our applications are  ",e.jsx("br",{}),"tailored to your business needs and ",e.jsx("br",{})," promote efficiency.         "]})]})}),e.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:e.jsxs("div",{className:"h-full p-6 bg-slate-100   card rounded-md shadow-xl ",children:[e.jsxs("svg",{className:"w-full m-10 svg sm:w-1/2 lg:w-1/3  transition-transform duration-300",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",fill:"currentColor",children:[e.jsx("circle",{cx:"12",cy:"12",r:"6"}),e.jsx("circle",{cx:"52",cy:"12",r:"6"}),e.jsx("circle",{cx:"12",cy:"52",r:"6"}),e.jsx("circle",{cx:"52",cy:"52",r:"6"}),e.jsx("circle",{cx:"32",cy:"32",r:"6"}),e.jsx("line",{x1:"18",y1:"12",x2:"26",y2:"32",stroke:"currentColor","stroke-width":"2"}),e.jsx("line",{x1:"46",y1:"12",x2:"38",y2:"32",stroke:"currentColor","stroke-width":"2"}),e.jsx("line",{x1:"32",y1:"38",x2:"12",y2:"46",stroke:"currentColor","stroke-width":"2"}),e.jsx("line",{x1:"32",y1:"38",x2:"52",y2:"46",stroke:"currentColor","stroke-width":"2"}),e.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"46",stroke:"currentColor","stroke-width":"2"}),e.jsx("line",{x1:"52",y1:"18",x2:"52",y2:"46",stroke:"currentColor","stroke-width":"2"})]}),e.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"Machine Learning"}),e.jsx("p",{className:"  text-gray-600 hover:text-white  mb-4",children:"Transform your data into actionable insights with our machine learning services. We develop models that identify patterns, predict trends, and provide intelligent automation      "})]})}),e.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:e.jsxs("div",{className:"h-full p-6 bg-slate-100 hover:text-white card rounded-md shadow-xl",children:[e.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1038"}),e.jsx("g",{id:"SvgjsG1039",children:e.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg","data-name":"glipy copy",viewBox:"0 0 64 64",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"a",x1:"4.04",x2:"59.96",y1:"32",y2:"32",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0","stop-color":"#00c0ff",className:"stopColor00c0ff svgShape"}),e.jsx("stop",{offset:"1","stop-color":"#5558ff",className:"stopColor5558ff svgShape"})]})}),e.jsx("path",{d:"M31.25159,55.0238a16.8148,16.8148,0,0,1,0-23.72989c13.29233-14.41419-6.461-34.19612-20.89715-20.897a14.778,14.778,0,0,0-.10965,20.77735v-2.364a.99766.99766,0,0,1,1.99495.00006v4.7878a1.00038,1.00038,0,0,1-.99748.99747H6.46445a.99766.99766,0,0,1-.00007-1.99494h2.374A16.81,16.81,0,0,1,8.9381,8.98042C25.35856-6.08562,47.72976,16.30361,32.668,32.71037c-13.29245,14.41491,6.46172,34.19581,20.89722,20.897A14.778,14.778,0,0,0,53.67485,32.83v2.36407a.99748.99748,0,0,1-1.99495,0V30.40614a1.00038,1.00038,0,0,1,.99748-.99747h4.77788a.99766.99766,0,0,1-.00006,1.99495H55.08127C69.95577,47.861,47.578,70.02755,31.25159,55.0238ZM25.586,29.289l-.59846-.60845a8.88068,8.88068,0,0,1-3.90016,1.03735l-.21942.82786a1.79349,1.79349,0,0,1-2.18447,1.26687l-1.53609-.41892a1.78911,1.78911,0,0,1-1.26681-2.18447l.2294-.82792a8.80994,8.80994,0,0,1-2.85276-2.85276l-.81794.22934a1.80435,1.80435,0,0,1-2.19445-1.26675L9.83585,22.955a1.79371,1.79371,0,0,1,1.26681-2.18447l.82786-.2294A9.013,9.013,0,0,1,12.96794,16.651l-.59853-.59846a1.782,1.782,0,0,1,0-2.52363l1.12716-1.12716a1.782,1.782,0,0,1,2.52363,0l.60845.60845a8.8396,8.8396,0,0,1,3.89017-1.03735l.21942-.82792a1.79834,1.79834,0,0,1,2.18447-1.26675l1.53609.41892a1.79362,1.79362,0,0,1,1.26681,2.18447l-.21942.82792A8.97432,8.97432,0,0,1,28.349,16.16224l.82792-.21947a1.79566,1.79566,0,0,1,2.18447,1.25682l.40894,1.53615a1.78586,1.78586,0,0,1-1.26681,2.18447l-.82786.2294a8.83959,8.83959,0,0,1-1.03741,3.89012l.59852.59852a1.782,1.782,0,0,1,0,2.52357L28.11957,29.289A1.79408,1.79408,0,0,1,25.586,29.289Zm-8.2789-11.93986C12.825,22.07835,19.56,28.82555,24.29923,24.34154,28.786,19.60762,22.03774,12.86572,17.30705,17.34912Zm1.41639,1.41639c-2.68552,2.776,1.38425,6.86263,4.15939,4.15958A2.94134,2.94134,0,0,0,18.72344,18.76551ZM38.3337,34.71524l.59846.60844a8.88148,8.88148,0,0,1,3.90021-1.03735c.16584-.68686.34928-1.56927,1.04728-1.91507.79334-.5707,2.0719.08067,2.89264.23932a1.74691,1.74691,0,0,1,1.08721.82792,2.609,2.609,0,0,1-.0498,2.18447,8.80868,8.80868,0,0,1,2.85276,2.85276l.81794-.2294a1.80448,1.80448,0,0,1,2.19445,1.26676l.40894,1.53614A1.79374,1.79374,0,0,1,52.817,43.23371l-.82786.22939a9.01326,9.01326,0,0,1-1.03741,3.89018l.59852.59846a1.782,1.782,0,0,1,0,2.52358l-1.12715,1.12715a1.782,1.782,0,0,1-2.52364,0L47.291,50.994a8.83866,8.83866,0,0,1-3.89017,1.03735l-.21941.82792A1.791,1.791,0,0,1,40.997,54.12611c-.78446-.264-2.22594-.37448-2.62337-1.24691a2.6541,2.6541,0,0,1,.03982-2.18441A8.976,8.976,0,0,1,35.57067,47.842l-.82792.21942a1.79567,1.79567,0,0,1-2.18447-1.25683l-.40894-1.53609a1.78584,1.78584,0,0,1,1.26682-2.18447l.82786-.2294a8.83953,8.83953,0,0,1,1.03741-3.89017l-.59852-.59846a1.78211,1.78211,0,0,1,0-2.52364l1.11716-1.12715A1.79407,1.79407,0,0,1,38.3337,34.71524Zm8.279,11.93979c4.49186-4.72789-2.25808-11.47789-6.99218-6.99242C35.13732,44.39556,41.87685,51.1377,46.61272,46.655Zm-1.4164-1.41645A2.94138,2.94138,0,0,0,41.03687,41.079C38.33418,43.85335,42.42088,47.93165,45.19632,45.23858Z"})]})})]}),e.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"Project Managment"}),e.jsx("p",{className:"  text-gray-600 hover:text-white  mb-4",children:" We provide mechanical design services .Our expertise in SOLIDWORKS allows us to create precise 3D models, while ANSYST enables advanced simulations, including stress, thermal analyses.        "})]})}),e.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:e.jsxs("div",{className:"h-full p-6 bg-slate-100  card rounded-md shadow-xl",children:[e.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",xmlnsXlink:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"180",height:"180",children:[e.jsx("circle",{cx:"60",cy:"60",r:"45",fill:"none","stroke-width":"3"}),e.jsx("rect",{x:"30",y:"35",width:"13",height:"50"}),e.jsx("rect",{x:"45",y:"45",width:"13",height:"40"}),e.jsx("rect",{x:"60",y:"55",width:"13",height:"30"}),e.jsx("path",{d:"M25 80 l50 0",stroke:"#ff9800","stroke-width":"2"}),e.jsx("circle",{cx:"50",cy:"50",r:"15",stroke:"#ff9800",fill:"none","stroke-width":"3"}),e.jsx("line",{x1:"50",y1:"35",x2:"50",y2:"65",stroke:"#ff9800","stroke-width":"2"}),e.jsx("line",{x1:"35",y1:"50",x2:"65",y2:"50",stroke:"#ff9800","stroke-width":"2"})]}),e.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"Data Analysis"}),e.jsx("p",{className:" text-gray-600 hover:text-white text-lg  mb-4",children:"Uncover critical insights and drive smarter decision making with our comprehensive data analysis solutions. Transform raw data into actionable intelligence.         "})]})})]})]}),e.jsx("style",{jsx:!0,children:`

.t-card {
      position: relative;
      z-index: 1;
      min-width: 22%;
      background-color: rgba(255, 255, 255, 1); 
      transition: background-color 0.3s ease-in-out;
    }
    
    .t-card:hover {
      background-color: rgba(255, 255, 255, 0.5); 
    
    }
    
    
    .t-card img {
      transition: opacity 0.3s ease-in-out;
    }
    .t-card:hover img {
      opacity: 0.5;
    }
    .card {
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }
.card:hover {
  transform: translateY(-10px); 
  background-color: rgb(32, 88, 157);

  
  color:white;
}
  

.services{
  color:rgb(64, 64, 64)
}
.facebook:hover{
  background-color: #3B5998;
  fill: white;
  
}
.insta:hover{
 background: linear-gradient(to right, #F58529, #DD2A7B, #8134B9);
  fill: white;
}
.linkdin:hover{
  background-color: #0077B5;
    fill:white; 
}
.t-linkdin{
  background-color:#0077B5;
  fill:white;
}
.t-github{
  background-color:#181717;
  fill: white;
}
.t-facebook{
background-color: #3B5998;
  fill: white;

}
.github:hover{
  background-color:#181717;
  fill: white;
}
.twitter:hover{
  fill: white;
  background-color:  #181717;
}
.whatsapp:hover{
  fill: white;
  background-color: #25D366; 
}
.t-whatsapp{
  fill: white;
  background-color: #25D366; 
}
.t-insta{
  background: linear-gradient(to right, #F58529, #DD2A7B, #8134B9);
  fill: white;
}
.stylish-regular {
  font-family: "Stylish", serif;
  font-weight: 400;
  font-style: normal;
}
.logo{
  font-family: "Audiowide", sans-serif;
  font: 24px;
}
.getin{
  background-color: rgb(221, 149, 16);
  color: black;
}
.getin:hover{
  background-color: orange;
  
}
.introcont{
  display: flex;
  align-items: center;
justify-content: space-evenly;
gap: 20px;
background-image: url('images/home-bottom-shape.png');

}
.container{
height: 80vh;
margin: auto;
z-index: 10;
background-color:rgb(62, 59, 59);
color: white;
width: 80%;
border-radius: 10px;
box-shadow: 5px 5px 5px 5px rgba(38, 38, 38, 0.25);
}
.icon {
  transition: transform 0.30s ease; 
  fill: rgb(255, 255, 255);

  
}
.iconn{
  fill: #25D366;
}
.card:hover .icon {


transform:rotateX(180deg);

fill:darkslateblue;
}


.ul:hover{
  text-decoration: underline;
  
text-underline-offset:8px ; 
text-decoration-color: #1e40af;
transition: text-decoration-color 0.3s ; 
cursor: pointer;
}
/* body{
  background-color: whitesmoke;
}

.App {
  position: relative;
}
.phone{
  fill: white;
}

button {
  margin: 20px;
}



.custom-tooltip {
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  text-align: center;
}

.custom-tooltip::after {
  border-top: 6px solid #333; 
}


.App {
  font-family: sans-serif;
  text-align: center;
}


.card {
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }


.card:hover {
  transform: translateY(-10px); 
  background-color: rgb(96 165 250 );

  
  color:white; 
}
.card:hover p{
  color: white;
}
.card:hover h3{
  color: white;
}
.card:hover .svg{
  fill: #fff;
  transform: scaleX(-1);
}
.w-card{
  transition: transform 0.3s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  

}
.w-card:hover {
  transform: translateY(-5px); 
}
.w-card:hover .svg{
background-color: white;
padding: 3px;
border: 2px solid white;
border-radius: 10px;
}
.svg{
    fill: #0077B5;
  }
  
    

.serv{
  width: 70%;
}
.serv img{
  height: 0vh;
  width: 50 ;

}
.psec img{
  height: 100px;
  width: 300px;
}

.count{
width: 100%;
height: 50vh;
position: relative;
    z-index: 1;
    padding: 120px 0;
    text-align: center;
    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
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
.footer{
  background-image: url('images/dot-bg.png');
  background-color: #0077B5 ;
  }
.team{
  background-image: url('images/dot-bg.png');
}
.t-img{
  width: 200px;
  height: 40vh;
}
 


.sticky-header{
  position: sticky; 
    top: 0; 
    z-index: 1000;
}
.ft-icon{
  
  fill: #0077B5;
}
.button-blue{
    
  cursor: pointer;     
  transition: background-color 0.4s, color 0.4s;
}

.button-white:hover{

  border: none;


}
.button-white {
  
  cursor: pointer;               
  transition: background-color 0.4s, color 0.4s,  box-shadow 0.4s; 
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}
.hamburger {

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  width: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.hamburger .bar {
  height: 3px;
  background-color: white;
  transition: all 0.3s ease-in-out;
}

.hamburger.open .bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.open .bar:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
.ham-button{
  display: none;
} */

@tailwind base;
@tailwind components;
@tailwind utilities;
button {
  margin: 20px;
}
.card {
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }
.card:hover {
  transform: translateY(-10px); 
  background-color: rgb(32, 88, 157);

  
  color:white;
}
.card:hover p{
  color: white;
}
.card:hover h3{
  color: white;
}
.card:hover .svg{
  fill: #fff;
  transform: scaleX(-1);
}
.svg{
    fill: #0077B5;
  }
 
.psec img{
  height: 100px;
  width: 300px;
 
}
.t-icon{
  opacity: 0;
}

/* 
.count{

width: 100%;
height: 50vh;
position: relative;
    z-index: 1;
    padding: 120px 0;
    text-align: center;
    
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
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
} */
/* .footer{
  background-image: url('images/dot-bg.png');
  background-color: #0077B5 ;
  } */
.team{
  background-image: url('images/dot-bg.png');
}



.sticky-header{
  position: sticky; 
    top: 0; 
    z-index: 1000;
}
.ft-icon{
  
  fill: #0077B5;
}
.button-blue{
    
  cursor: pointer;               
  transition: background-color 0.4s, color 0.4s;
}

.button-white:hover{

  border: none;


}
.button-white {
  
  cursor: pointer;               
  transition: background-color 0.4s, color 0.4s,  box-shadow 0.4s; 
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

.services{
  color:rgb(64, 64, 64)
}
.facebook:hover{
  background-color: #3B5998;
  fill: white;
  
}
.insta:hover{
 background: linear-gradient(to right, #F58529, #DD2A7B, #8134B9);
  fill: white;
}
.linkdin:hover{
  background-color: #0077B5;
    fill:white; 
}
.t-linkdin{
  background-color:#0077B5;
  fill:white;
}
.t-github{
  background-color:#181717;
  fill: white;
}
.t-facebook{
background-color: #3B5998;
  fill: white;

}
.github:hover{
  background-color:#181717;
  fill: white;
}
.twitter:hover{
  fill: white;
  background-color:  #181717;
}
.whatsapp:hover{
  fill: white;
  background-color: #25D366; 
}
.t-whatsapp{
  fill: white;
  background-color: #25D366; 
}
.t-insta{
  background: linear-gradient(to right, #F58529, #DD2A7B, #8134B9);
  fill: white;
}
.stylish-regular {
  font-family: "Stylish", serif;
  font-weight: 400;
  font-style: normal;
}
.logo{
  font-family: "Audiowide", sans-serif;
  font: 24px;
}
.getin{
  background-color: rgb(221, 149, 16);
  color: black;
}
.getin:hover{
  background-color: orange;
  
}
.introcont{
  display: flex;
  align-items: center;
justify-content: space-evenly;
gap: 20px;
background-image: url('images/home-bottom-shape.png');

}
.container{
height: 80vh;
margin: auto;
z-index: 10;
background-color:rgb(62, 59, 59);
color: white;
width: 80%;
border-radius: 10px;
box-shadow: 5px 5px 5px 5px rgba(38, 38, 38, 0.25);
}
.icon {
  transition: transform 0.30s ease; 
  fill: rgb(255, 255, 255);

  
}
.iconn{
  fill: #25D366;
}
.card:hover .icon {


transform:rotateX(180deg);

fill:darkslateblue;
}


.ul:hover{
  text-decoration: underline;
  
text-underline-offset:8px ; 
text-decoration-color: #1e40af;
transition: text-decoration-color 0.3s ; 
cursor: pointer;
}




  `})]}),xe=()=>e.jsx(e.Fragment,{children:e.jsxs("section",{className:"bg-gray-100 p-6 lg:p-11",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row  text-center lg:text-left",children:[e.jsx("div",{className:"w-full lg:w-1/2",children:e.jsxs("div",{className:"text-gray-800",children:[e.jsxs("h2",{className:"text-3xl sm:text-4xl font-bold",children:["Welcome to"," ",e.jsx("span",{className:"logo-main text-blue-600 pt-1 text-3xl sm:text-4xl lg:text-5xl font-serif italic",children:"CodeViper  –"})," ","Where Technology Meets Passion"]}),e.jsxs("p",{className:"pt-5 text-sm sm:text-base md:text-lg",children:["At"," ",e.jsx("span",{className:"italic text-blue-600 logo",children:"Code Viper"}),", we're more than just tech enthusiasts – we're problem solvers with a passion for bringing bold ideas to life. Our goal? To help your business stand out in the digital age. Whether you're starting from scratch or enhancing what you already have, we provide IT solutions tailored specifically to your needs, guiding you through every step of the process."]}),e.jsxs("p",{className:"pt-3 text-sm sm:text-base md:text-lg",children:["At"," ",e.jsx("span",{className:"italic text-blue-600 logo",children:"Code Viper"}),", it's not just about delivering tech – it's about building partnerships. We take the time to learn about your goals, collaborate closely, and support your journey to new levels of success. Ready to transform your business? Let's make it happen, together."]}),e.jsxs("div",{className:"flex flex-row   gap-5 pt-7 justify-center lg:justify-start",children:[e.jsx($,{to:"/contact",className:"text-blue-600 button  sm:w-1/3 mq-buttons  h-12 flex items-center justify-center  font-sans font-bold rounded-md bg-white button-white",children:e.jsx("span",{children:"Contact us"})}),e.jsx("a",{className:"bg-blue-600 hover:bg-blue-800 w-1/2 sm:w-1/3  flex items-center justify-center h-12 text-lg font-bold rounded-md text-white",target:"_blank",href:"tel:+923186840896",children:"Call Now"})]})]})}),e.jsx("div",{className:"w-full lg:w-1/2 mt-6 lg:mt-0",children:e.jsx("img",{src:"images/aboutus.png",alt:"About CodeEssence",loading:"lazy",className:"w-full h-auto object-cover"})})]}),e.jsx("style",{jsx:!0,children:`
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


      `})]})}),he=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-slate-900 text-white",children:[e.jsx("h2",{className:"flex justify-center text-4xl sm:text-4xl md:text-5xl m-10 font-extrabold",style:{color:"#404040"},children:"How We Work"}),e.jsx("p",{className:"text-center mx-auto text-xl font-medium px-4 sm:px-8 lg:px-20   text-gray-800",children:"Explore our streamlined, efficient approach to project management and how it ensures your success every step of the way."}),e.jsxs("div",{className:"grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-20",children:[e.jsxs("div",{className:"h-full transition-transform cards p-5 bg-slate-100 shadow-xl rounded-md text-black",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512 512",className:"mb-4",children:e.jsxs("g",{children:[e.jsx("path",{d:"M236 336c0-33.57 20.687-62.292 50-74.163A79.746 79.746 0 0 0 256 256c-44.183 0-80 35.817-80 80 0 22.091 17.909 40 40 40h60c-22.091 0-40-17.909-40-40z",fill:"#cee1f2"}),e.jsx("path",{d:"M296 376h-80c-22.091 0-40-17.909-40-40 0-44.183 35.817-80 80-80s80 35.817 80 80c0 22.091-17.909 40-40 40z",fill:"none",stroke:"#7b68ee",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"256",cy:"176",r:"40",fill:"none",stroke:"#7b68ee",strokeWidth:"40"})]})}),e.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Discover"}),e.jsx("p",{className:"text-gray-600",children:"Our discovery phase is dedicated to understanding your vision, goals, and expectations to craft a precise project blueprint."})]}),e.jsxs("div",{className:"h-full p-5 transition-transform cards  bg-slate-100 shadow-xl rounded-md text-black",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512 512",className:"mb-4",children:e.jsxs("g",{children:[e.jsx("path",{d:"M236 420c0-9.935-5.439-19.09-14.198-23.779-72.477-38.793-118.37-120.733-102.752-211.648 13.529-78.756 75.602-143.727 153.824-160.064a215.935 215.935 0 0 1 12.925-2.284c-23.244-3.473-47.789-2.965-72.925 2.284C134.652 40.847 72.579 105.817 59.05 184.574c-15.631 90.993 30.354 172.995 102.938 211.747C170.637 400.939 176 409.985 176 419.79v.21c0 44.183 35.817 72 80 72 10.613 0 20.733-1.621 30-4.672-29.313-9.651-50-33.758-50-67.328z",fill:"#cee1f2"}),e.jsx("path",{d:"m176 180-40 40 40 40M336 180l40 40-40 40M276 140l-40 160",fill:"none",stroke:"#ff9800",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Design & Development"}),e.jsx("p",{className:"text-gray-600",children:"With a blend of aesthetic design and cutting-edge development, we transform ideas into engaging digital experiences."})]}),e.jsxs("div",{className:"h-full p-5 transition-transform cards  bg-slate-100 shadow-xl rounded-md text-black",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512.004 512.004",className:"mb-4",children:e.jsxs("g",{children:[e.jsx("path",{d:"M80 432.002v-352c0-33.137 26.863-60 60-60H80c-33.137 0-60 26.863-60 60v352c0 33.137 26.863 60 60 60h60c-33.137 0-60-26.863-60-60z",fill:"#cee1f2"}),e.jsx("path",{d:"M432 492.002H80c-33.137 0-60-26.863-60-60v-352c0-33.137 26.863-60 60-60h352c33.137 0 60 26.863 60 60v352c0 33.137-26.863 60-60 60z",fill:"none",stroke:"#7b68ee",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Testing & Refinement"}),e.jsx("p",{className:"text-gray-600",children:"In our rigorous testing phase, every feature is refined to perfection, ensuring high performance and reliability."})]}),e.jsxs("div",{className:"h-full transition-transform cards  p-5 bg-slate-100 shadow-xl rounded-md text-black",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512 512",className:"mb-4",children:e.jsxs("g",{children:[e.jsx("path",{d:"M80 220c0-35.748 19.446-66.018 51.797-76.274 13.619-4.317 23.931-15.629 26.996-29.584 9.679-44.072 43.585-79.062 87.047-90.313A117.586 117.586 0 0 0 216 20c-57.397 0-105.382 40.296-117.207 94.142-3.065 13.955-13.376 25.267-26.996 29.584C39.446 153.982 20 184.252 20 220c0 44.182 31.818 80 76 80h60c-44.182 0-76-35.818-76-80z",fill:"#cee1f2"}),e.jsx("path",{d:"M376 412v40c0 22.091-17.909 40-40 40H176c-22.091 0-40-17.909-40-40v-40M336 300h80c44.182 0 76-35.818 76-80 0-36.099-19.908-66.611-52.752-76.57a40.041 40.041 0 0 1-26.684-26.697C402.599 83.897 372.09 60 336 60c-3.03 0-6.008.197-8.933.564a40.02 40.02 0 0 1-31.72-9.938C274.253 31.684 246.601 20 216 20c-57.397 0-105.382 40.296-117.207 94.142-3.065 13.955-13.376 25.267-26.996 29.585C39.446 153.982 20 184.252 20 220c0 44.182 31.818 80 76 80h80",fill:"none",stroke:"#7b68ee",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Launch & Support"}),e.jsx("p",{className:"text-gray-600",children:"Experience a seamless project delivery that not only meets deadlines but also provides continuous support post-launch."})]})]})]}),e.jsx("style",{jsx:!0,children:`

.cards:hover  {

  transform: translateY(-5px); 
  transform: translateY(-5px); 

}
  `})]}),me="/react-port/assets/banner-bg-B7enHBXL.jpg",pe=()=>{const[r,o]=f.useState(0),[s,a]=f.useState(0),[t,l]=f.useState(0),[i,c]=f.useState(0);return f.useEffect(()=>{const h=setInterval(()=>{r<4&&o(m=>m+1)},1e3),x=setInterval(()=>{s<15&&a(m=>m+1)},10),n=setInterval(()=>{t<50&&l(m=>m+1)},20),p=setInterval(()=>{i<98&&c(m=>m+1)},20);return()=>{clearInterval(h),clearInterval(x),clearInterval(n),clearInterval(p)}},[r,s,t,i]),e.jsxs("div",{className:"count relative text-white text-center p-8 flex flex-col lg:flex-row justify-around items-center h-auto lg:h-64",children:[e.jsxs("div",{className:"mb-8 lg:mb-0",children:[e.jsxs("h1",{className:"font-sans font-normal text-4xl",children:[r," ",e.jsx("span",{children:"+"})]}),e.jsx("h2",{className:"text-lg lg:text-xl",children:"Years Helping Business"})]}),e.jsxs("div",{className:"mb-8 lg:mb-0",children:[e.jsxs("h1",{className:"font-sans text-4xl",children:[s," ",e.jsx("span",{children:"+"})]}),e.jsx("h2",{className:"text-lg lg:text-xl",children:"Working Employees"})]}),e.jsxs("div",{className:"mb-8 lg:mb-0",children:[e.jsxs("h1",{className:"font-sans text-4xl",children:[t," ",e.jsx("span",{children:"+"})]}),e.jsx("h2",{className:"text-lg lg:text-xl",children:"Complete Projects"})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"font-sans text-4xl",children:[i," ",e.jsx("span",{children:"%"})]}),e.jsx("h2",{className:"text-lg lg:text-xl",children:"Client Satisfaction"})]}),e.jsx("style",{jsx:!0,children:`
        .count {
          background-image: url(${me});
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
      `})]})};function be(){const[r,o]=f.useState(!0);f.useEffect(()=>{setTimeout(()=>{o(!1)},500)},[]);const s=f.useRef(null);return e.jsx(e.Fragment,{children:r?e.jsx(K,{}):e.jsxs("div",{className:"bg-slate-300",children:[e.jsx(J,{aboutusRef:s}),e.jsx(le,{}),e.jsxs("div",{className:"bg-gray-50 ",children:[e.jsx(de,{}),e.jsx("div",{ref:s,children:e.jsx(xe,{})})]}),e.jsx(ce,{}),e.jsx(pe,{}),e.jsx(he,{}),e.jsx(ee,{})]})})}export{be as default};
