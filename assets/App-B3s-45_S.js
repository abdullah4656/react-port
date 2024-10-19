import{r as f,R as G,j as e,L as $}from"./index-CjhKd7m4.js";import{N as K,F as J}from"./Footer-DSr8AIvV.js";import"./index.es-CPQBbCHw.js";function W(a,o,n,r){return new(n||(n=Promise))(function(t,l){function i(h){try{m(r.next(h))}catch(s){l(s)}}function c(h){try{m(r.throw(h))}catch(s){l(s)}}function m(h){var s;h.done?t(h.value):(s=h.value,s instanceof n?s:new n(function(p){p(s)})).then(i,c)}m((r=r.apply(a,[])).next())})}function S(a,o){var n,r,t,l,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function c(m){return function(h){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(t=2&s[0]?r.return:s[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,s[1])).done)return t;switch(r=0,t&&(s=[2&s[0],t.value]),s[0]){case 0:case 1:t=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(t=i.trys,!((t=t.length>0&&t[t.length-1])||s[0]!==6&&s[0]!==2)){i=0;continue}if(s[0]===3&&(!t||s[1]>t[0]&&s[1]<t[3])){i.label=s[1];break}if(s[0]===6&&i.label<t[1]){i.label=t[1],t=s;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(s);break}t[2]&&i.ops.pop(),i.trys.pop();continue}s=o.call(a,i)}catch(p){s=[6,p],r=0}finally{n=t=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([m,h])}}}function _(a){var o=typeof Symbol=="function"&&Symbol.iterator,n=o&&a[o],r=0;if(n)return n.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&r>=a.length&&(a=void 0),{value:a&&a[r++],done:!a}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")}function j(a,o){var n=typeof Symbol=="function"&&a[Symbol.iterator];if(!n)return a;var r,t,l=n.call(a),i=[];try{for(;(o===void 0||o-- >0)&&!(r=l.next()).done;)i.push(r.value)}catch(c){t={error:c}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return i}function k(a,o,n){if(arguments.length===2)for(var r,t=0,l=o.length;t<l;t++)!r&&t in o||(r||(r=Array.prototype.slice.call(o,0,t)),r[t]=o[t]);return a.concat(r||Array.prototype.slice.call(o))}function U(a,o,n,r,t){for(var l=[],i=5;i<arguments.length;i++)l[i-5]=arguments[i];return W(this,void 0,void 0,function(){var c,m,h,s,p,x;return S(this,function(g){switch(g.label){case 0:g.trys.push([0,12,13,14]),c=_(l),m=c.next(),g.label=1;case 1:if(m.done)return[3,11];switch(h=m.value,typeof h){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,ee(a,o,h,n,r,t)];case 3:return g.sent(),[3,10];case 4:return[4,q(h)];case 5:return g.sent(),[3,10];case 6:return[4,h.apply(void 0,k([a,o,n,r,t],j(l),!1))];case 7:return g.sent(),[3,10];case 8:return[4,h];case 9:g.sent(),g.label=10;case 10:return m=c.next(),[3,1];case 11:return[3,14];case 12:return s=g.sent(),p={error:s},[3,14];case 13:try{m&&!m.done&&(x=c.return)&&x.call(c)}finally{if(p)throw p.error}return[7];case 14:return[2]}})})}function ee(a,o,n,r,t,l){return W(this,void 0,void 0,function(){var i,c;return S(this,function(m){switch(m.label){case 0:return i=a.textContent||"",c=function(h,s){var p=j(s).slice(0);return k(k([],j(h),!1),[NaN],!1).findIndex(function(x,g){return p[g]!==x})}(i,n),[4,te(a,k(k([],j(re(i,o,c)),!1),j(ae(n,o,c)),!1),r,t,l)];case 1:return m.sent(),[2]}})})}function q(a){return W(this,void 0,void 0,function(){return S(this,function(o){switch(o.label){case 0:return[4,new Promise(function(n){return setTimeout(n,a)})];case 1:return o.sent(),[2]}})})}function te(a,o,n,r,t){return W(this,void 0,void 0,function(){var l,i,c,m,h,s,p,x,g,L,T,A,H;return S(this,function(y){switch(y.label){case 0:if(l=o,t){for(i=0,c=1;c<o.length;c++)if(m=j([o[c-1],o[c]],2),h=m[0],(s=m[1]).length>h.length||s===""){i=c;break}l=o.slice(i,o.length)}y.label=1;case 1:y.trys.push([1,6,7,8]),p=_(function(P){var X,z,N,M,I,D,C;return S(this,function(w){switch(w.label){case 0:X=function(B){return S(this,function(O){switch(O.label){case 0:return[4,{op:function(Y){return requestAnimationFrame(function(){return Y.textContent=B})},opCode:function(Y){var V=Y.textContent||"";return B===""||V.length>B.length?"DELETE":"WRITING"}}];case 1:return O.sent(),[2]}})},w.label=1;case 1:w.trys.push([1,6,7,8]),z=_(P),N=z.next(),w.label=2;case 2:return N.done?[3,5]:(M=N.value,[5,X(M)]);case 3:w.sent(),w.label=4;case 4:return N=z.next(),[3,2];case 5:return[3,8];case 6:return I=w.sent(),D={error:I},[3,8];case 7:try{N&&!N.done&&(C=z.return)&&C.call(z)}finally{if(D)throw D.error}return[7];case 8:return[2]}})}(l)),x=p.next(),y.label=2;case 2:return x.done?[3,5]:(g=x.value,L=g.opCode(a)==="WRITING"?n+n*(Math.random()-.5):r+r*(Math.random()-.5),g.op(a),[4,q(L)]);case 3:y.sent(),y.label=4;case 4:return x=p.next(),[3,2];case 5:return[3,8];case 6:return T=y.sent(),A={error:T},[3,8];case 7:try{x&&!x.done&&(H=p.return)&&H.call(p)}finally{if(A)throw A.error}return[7];case 8:return[2]}})})}function ae(a,o,n){var r,t;return n===void 0&&(n=0),S(this,function(l){switch(l.label){case 0:r=o(a),t=r.length,l.label=1;case 1:return n<t?[4,r.slice(0,++n).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}function re(a,o,n){var r,t;return n===void 0&&(n=0),S(this,function(l){switch(l.label){case 0:r=o(a),t=r.length,l.label=1;case 1:return t>n?[4,r.slice(0,--t).join("")]:[3,3];case 2:return l.sent(),[3,1];case 3:return[2]}})}var se="index-module_type__E-SaG";(function(a,o){o===void 0&&(o={});var n=o.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n==="top"&&r.firstChild?r.insertBefore(t,r.firstChild):r.appendChild(t),t.styleSheet?t.styleSheet.cssText=a:t.appendChild(document.createTextNode(a))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var ne=f.memo(f.forwardRef(function(a,o){var n=a.sequence,r=a.repeat,t=a.className,l=a.speed,i=l===void 0?40:l,c=a.deletionSpeed,m=a.omitDeletionAnimation,h=m!==void 0&&m,s=a.preRenderFirstString,p=s!==void 0&&s,x=a.wrapper,g=x===void 0?"span":x,L=a.splitter,T=L===void 0?function(d){return k([],j(d),!1)}:L,A=a.cursor,H=A===void 0||A,y=a.style,P=function(d,u){var v={};for(var b in d)Object.prototype.hasOwnProperty.call(d,b)&&u.indexOf(b)<0&&(v[b]=d[b]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var E=0;for(b=Object.getOwnPropertySymbols(d);E<b.length;E++)u.indexOf(b[E])<0&&Object.prototype.propertyIsEnumerable.call(d,b[E])&&(v[b[E]]=d[b[E]])}return v}(a,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),X=P["aria-label"],z=P["aria-hidden"],N=P.role;c||(c=i);var M=new Array(2).fill(40);[i,c].forEach(function(d,u){switch(typeof d){case"number":M[u]=Math.abs(d-100);break;case"object":var v=d.type,b=d.value;if(typeof b!="number")break;v==="keyStrokeDelayInMs"&&(M[u]=b)}});var I,D,C,w,B,O,Y=M[0],V=M[1],F=function(d,u){u===void 0&&(u=null);var v=f.useRef(u);return f.useEffect(function(){d&&(typeof d=="function"?d(v.current):d.current=v.current)},[d]),v}(o),Z=se;I=t?"".concat(H?Z+" ":"").concat(t):H?Z:"",D=f.useRef(function(){var d,u=n;r===1/0?d=U:typeof r=="number"&&(u=Array(1+r).fill(n).flat());var v=d?k(k([],j(u),!1),[d],!1):k([],j(u),!1);return U.apply(void 0,k([F.current,T,Y,V,h],j(v),!1)),function(){F.current}}),C=f.useRef(),w=f.useRef(!1),B=f.useRef(!1),O=j(f.useState(0),2)[1],w.current&&(B.current=!0),f.useEffect(function(){return w.current||(C.current=D.current(),w.current=!0),O(function(d){return d+1}),function(){B.current&&C.current&&C.current()}},[]);var Q=g,R=p?n.find(function(d){return typeof d=="string"})||"":null;return G.createElement(Q,{"aria-hidden":z,"aria-label":X,role:N,style:y,className:I,children:X?G.createElement("span",{"aria-hidden":"true",ref:F,children:R}):R,ref:X?void 0:F})}),function(a,o){return!0});const oe="/react-port/assets/home-BogEVynH.png",ie=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex    bg-gray-50 p-5 md:p-20 lg:pt-10 2xl:p-20 flex-col backimg items-center lg:flex-row justify-center gap-5",children:[e.jsxs("div",{className:"p-5 text-center lg:text-left",children:[e.jsxs("p",{className:"text-4xl p-2 sm:text-5xl md:text-6xl",children:[e.jsx("span",{className:"zz text-blue-900 zz",children:"Innovate and Elevate with"}),"-",e.jsx("strong",{className:"zz text-4xl logo-main sm:text-5xl md:text-6xl text-blue-800",children:"Code Viper"})]}),e.jsx("h3",{className:"flex zz logo-mainn p-2 items-center justify-cente text-2xl sm:text-3xl md:text-4xl intro-desc",children:e.jsx(ne,{sequence:["Leading Software Solutions Company",2e3],wrapper:"span",speed:60,className:"text-blue-800 font-arial font-semibold",repeat:0})}),e.jsx("br",{}),e.jsx("div",{className:"flex flex-col items-center justify-center lg:items-start",children:e.jsx("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 text-center lg:text-left mx-auto lg:mx-0",children:"Transform your business with custom IT solutions designed to meet specific needs. Expertise ensures competitiveness and success through innovative technology and digital strategies."})})]}),e.jsx("img",{className:"w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3 mt-2 rounded-xl",src:"images/home-2.png",alt:"home visual"})]}),e.jsxs("div",{className:"home-shape-animation",children:[e.jsx("div",{className:"shape-1",children:e.jsx("img",{src:"images/1.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-2",children:e.jsx("img",{src:"images/2.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-3",children:e.jsx("img",{src:"images/3.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-4",children:e.jsx("img",{src:"images/4.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-5",children:e.jsx("img",{src:"images/5.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-6",children:e.jsx("img",{src:"images/6.png",loading:"lazy",alt:"shape image"})}),e.jsx("div",{className:"shape-7",children:e.jsx("img",{src:"images/7.png",loading:"lazy",alt:"shape image"})})]}),e.jsx("style",{jsx:!0,children:`
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
          background-image: url(${oe});
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
      `})]}),le=()=>e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"w-full psec",children:[e.jsx("h2",{className:"flex justify-center text-5xl m-10 font-extrabold",style:{color:"#404040"},children:"Our Portfolio"}),e.jsxs("div",{className:"flex gap-10 p-5 justify-evenly flex-wrap pb-40",children:[e.jsx("img",{className:"w-1/4",src:"images/Buses_Plus_1.png",alt:"Buses Plus Project Screenshot"}),e.jsx("a",{href:"#",children:e.jsx("img",{className:"w-1/4",src:"images/sponge_3.png",alt:"Sponge Project Screenshot"})}),e.jsx("a",{href:"#",children:e.jsx("img",{className:"w-1/4",src:"images/Watermart.png",alt:"Watermart Project Screenshot"})}),e.jsx("a",{href:"#",children:e.jsx("img",{className:"w-1/4",src:"images/Thorai.jpeg",alt:"Thorai Project Screenshot"})}),e.jsx("a",{href:"#",children:e.jsx("img",{className:"w-1/4",src:"images/wise_eye_1.png",alt:"Wise Eye Project Screenshot"})}),e.jsx("a",{href:"#",children:e.jsx("img",{className:"w-1/4",src:"images/Buses_Plus_1.png",alt:"Buses Plus Project Screenshot"})})]})]}),e.jsx("style",{jsx:!0,children:`
        .a {
          height: 100px;
          width: 300px;
        }
      `})]}),ce=()=>e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"w-full  h-full",children:[e.jsx("h2",{className:"flex  justify-center text-5xl font-extrabold m-10",style:{color:"#404040"},children:"Our Services"}),e.jsxs("div",{className:"flex flex-wrap justify-start m-8 items-center bg-slate-200",children:[e.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4 ",children:e.jsxs("div",{className:"h-full p-8  bg-slate-100  shadow-xl card rounded-md",children:[e.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",id:"SvgjsSvg1035",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1036"}),e.jsx("g",{id:"SvgjsG1037",children:e.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 47.5 47.5",viewBox:"0 0 47.5 47.5",children:[e.jsx("defs",{children:e.jsx("clipPath",{id:"a",children:e.jsx("path",{d:"M0 38h38V0H0v38Z",className:"color000 svgShape"})})}),e.jsx("g",{clipPath:"url(#a)",transform:"matrix(1.25 0 0 -1.25 0 47.5)",children:e.jsx("path",{d:"M0 0c1.014 1.184 1.902 2.594 2.619 4.198h2.503A16.053 16.053 0 0 0 0 0m-19.837 4.198h2.503c.716-1.604 1.605-3.014 2.619-4.198a16.042 16.042 0 0 0-5.122 4.198m5.122 24.199c-1.014-1.184-1.903-2.594-2.619-4.199h-2.503a16.056 16.056 0 0 0 5.122 4.199m19.837-4.199H2.619C1.902 25.803 1.014 27.213 0 28.397a16.043 16.043 0 0 0 5.122-4.199m-.513-9c-.092 2.506-.522 4.871-1.228 7h3.103a15.868 15.868 0 0 0 2.108-7H4.609zm0-2h3.983a15.872 15.872 0 0 0-2.108-7H3.381c.706 2.129 1.136 4.494 1.228 7m-10.966-7v7h8.968c-.098-2.541-.563-4.917-1.317-7h-7.651zm0-7.919v5.919H.442C-1.194.935-3.61-1.284-6.357-1.721m-2 5.919v-5.919c-2.747.437-5.164 2.656-6.8 5.919h6.8zm-8.969 9h8.969v-7h-7.652c-.754 2.083-1.219 4.459-1.317 7m-1.998 2h-3.983a15.893 15.893 0 0 0 2.107 7h3.105c-.707-2.129-1.136-4.494-1.229-7m10.967 7v-7h-8.969c.098 2.541.563 4.917 1.317 7h7.652zm0 7.92v-5.92h-6.8c1.637 3.264 4.053 5.483 6.8 5.92m9.651-7.92c.754-2.083 1.219-4.459 1.317-7h-8.968v7h7.651zm-7.651 2v5.92c2.747-.437 5.162-2.656 6.798-5.92h-6.798zm-16.95-11h3.983c.092-2.506.522-4.871 1.229-7H-21.2a15.897 15.897 0 0 0-2.107 7m15.95 19c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18",transform:"translate(26.357 4.802)",className:"color3b88c3 svgShape"})})]})})]}),e.jsx("h3",{className:"font-semibold  text-2xl mb-4",children:"Web Development"}),e.jsxs("p",{className:" text-gray-600 hover:text-white  mb-4   flex flex-grow ",children:["Create a stunning online presence with ",e.jsx("br",{})," our  bespoke web development services.  ",e.jsx("br",{}),"Our team employs the latest ",e.jsx("br",{})," technologies to build websites that ",e.jsx("br",{})," captivate and convert."]})]})}),e.jsx("div",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4",children:e.jsxs("div",{className:"h-full p-6 bg-slate-100  card rounded-md shadow-xl",children:[e.jsxs("svg",{id:"SvgjsSvg1057",className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1058"}),e.jsx("g",{id:"SvgjsG1059",children:e.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 512 512",children:[e.jsx("path",{d:"M437.023 143.9a18.079 18.079 0 0 0-17.018 12.065h-23.161a19.661 19.661 0 0 0-19.1 15.4 7.6 7.6 0 0 1-7.379 5.947h-17.687V92.675a41.911 41.911 0 0 0-41.864-41.863H167.361A41.911 41.911 0 0 0 125.5 92.675v84.638h-17.685a7.594 7.594 0 0 1-7.379-5.947 19.662 19.662 0 0 0-19.105-15.4h-23.16a18.064 18.064 0 1 0 0 12h23.16a7.594 7.594 0 0 1 7.379 5.947 19.662 19.662 0 0 0 19.105 15.4H125.5v36.093h-1.23a12.064 12.064 0 0 1-11.166-7.444 24.033 24.033 0 0 0-22.243-14.829H86.94a18.064 18.064 0 1 0 0 12h3.921a12.064 12.064 0 0 1 11.166 7.444 24.035 24.035 0 0 0 22.243 14.829h1.23v13.308l-21.31-.1a25.208 25.208 0 0 0-22.2 13.241 13.22 13.22 0 0 1-11.649 6.945H62.2a18.056 18.056 0 1 0 .17 12h7.967a25.207 25.207 0 0 0 22.2-13.24 13.21 13.21 0 0 1 11.616-6.945l21.339.1v36.92h-1.482a28.135 28.135 0 0 0-26.841 20.083 16.065 16.065 0 0 1-15.329 11.47h-8.7a18.064 18.064 0 1 0 0 12h8.7a28.135 28.135 0 0 0 26.842-20.088 16.066 16.066 0 0 1 15.328-11.469h1.49v94.845a41.911 41.911 0 0 0 41.863 41.864h143.451a41.746 41.746 0 0 0 32.345-15.285 6 6 0 1 0-9.267-7.623 29.785 29.785 0 0 1-23.078 10.908H167.361a29.9 29.9 0 0 1-29.861-29.861v-22.69h166.972v-12H137.5V116.607h145.52a6 6 0 0 0 0-12H137.5V92.675a29.9 29.9 0 0 1 29.863-29.863h143.451a29.9 29.9 0 0 1 29.864 29.863v11.932h-11.932a6 6 0 0 0 0 12h11.932v139.778a6 6 0 0 0 12 0v-18.979h1.227a24.035 24.035 0 0 0 22.244-14.829 12.064 12.064 0 0 1 11.166-7.444h3.92a18.065 18.065 0 1 0 0-12h-3.92a24.033 24.033 0 0 0-22.243 14.829 12.067 12.067 0 0 1-11.167 7.444h-1.227v-36.093h17.683a19.664 19.664 0 0 0 19.105-15.4 7.593 7.593 0 0 1 7.378-5.947h23.161a18.056 18.056 0 1 0 17.018-24.066ZM41.152 168.032a6.065 6.065 0 1 1 6.065-6.064 6.07 6.07 0 0 1-6.065 6.064Zm28.77 47.168a6.065 6.065 0 1 1 6.064-6.064 6.071 6.071 0 0 1-6.064 6.064Zm-24.651 67.9a6.065 6.065 0 1 1 6.064-6.065 6.072 6.072 0 0 1-6.064 6.059Zm10.846 60.157a6.064 6.064 0 1 1 6.065-6.064 6.071 6.071 0 0 1-6.065 6.058Zm352.137-140.189a6.065 6.065 0 1 1-6.065 6.065 6.071 6.071 0 0 1 6.065-6.065Zm28.769-35.036a6.065 6.065 0 1 1 6.065-6.064 6.07 6.07 0 0 1-6.065 6.064Z",className:"color0635c9 svgShape"}),e.jsx("path",{d:"M316.644 110.607a6 6 0 0 0-6-6h-9.966a6 6 0 0 0 0 12h9.966a6 6 0 0 0 6-6zm-97.005 299.458a19.449 19.449 0 1 0 19.449-19.448 19.471 19.471 0 0 0-19.449 19.448zm26.9 0a7.449 7.449 0 1 1-7.448-7.448 7.456 7.456 0 0 1 7.445 7.448zm58.221-159.918a75.992 75.992 0 1 0-48.153 70.717L252.2 309.7a64.111 64.111 0 1 1 29.618-23.8l9.941 6.722a75.546 75.546 0 0 0 13.001-42.475z",className:"color0635c9 svgShape"}),e.jsx("path",{d:"M278.059 276.731a55.914 55.914 0 1 0-33.94 27.283l-3.285-11.542a43.988 43.988 0 1 1 26.666-21.445Z",className:"color0635c9 svgShape"}),e.jsx("path",{d:"M410.387 243.5a25.979 25.979 0 0 0-45.838 9.461 26.007 26.007 0 0 0-38.416 19.309c-.107.8-.172 1.6-.2 2.4a25.944 25.944 0 0 0-30.7 17.974l-45.235-57.338a26 26 0 1 0-41.242 31.67l83.704 106.731a40.035 40.035 0 0 0-26.374 23.9 6 6 0 0 0 3.146 7.667l76.308 33.98A86 86 0 0 0 471.187 322.9ZM300.784 384.32l26.36 33.608-47.258-21.044a28.018 28.018 0 0 1 20.898-12.564ZM447.9 433.935a74.1 74.1 0 0 1-103.786-13.814l-125.877-160.49a14 14 0 1 1 22.283-16.956l101.6 128.787a6.048 6.048 0 0 0 .413.471c.015.016.032.029.047.045q.213.213.441.4c.051.042.1.079.158.12.121.093.244.183.37.266.062.04.125.078.188.115.124.076.251.146.38.212.064.032.128.064.193.094.137.063.275.12.415.172.06.022.119.046.179.067.166.056.335.1.5.145.035.009.069.02.105.028a6.059 6.059 0 0 0 .642.109h.04c.2.021.393.031.59.033h.049c.025 0 .049-.006.074-.006a5.957 5.957 0 0 0 .832-.067l.064-.007a6.026 6.026 0 0 0 .838-.206l.153-.05a5.969 5.969 0 0 0 .8-.341c.036-.018.07-.041.106-.06a6.1 6.1 0 0 0 .713-.457c.021-.016.045-.027.067-.043s.021-.02.033-.029l.035-.024c.068-.054.128-.114.194-.17s.161-.135.237-.207.136-.14.2-.211.144-.149.211-.226.12-.153.18-.229.125-.158.183-.24.105-.165.157-.248.106-.164.154-.249.089-.176.133-.264.087-.17.125-.257.073-.185.108-.278.069-.173.1-.262.055-.19.081-.286.052-.179.072-.27.036-.192.053-.289.034-.185.046-.279.017-.191.024-.287.018-.191.02-.287 0-.19 0-.286 0-.194-.007-.291-.02-.191-.031-.286-.02-.192-.036-.288-.038-.19-.059-.286-.038-.189-.063-.283-.058-.189-.089-.284-.056-.184-.09-.274-.079-.189-.12-.283-.073-.175-.115-.261-.1-.185-.152-.277-.091-.167-.142-.249-.12-.176-.182-.264c-.048-.069-.091-.14-.143-.208l-42.56-55.576a14 14 0 0 1 22.23-17.023l42.56 55.575a6.156 6.156 0 0 0 .44.509c.05.052.1.1.154.148.108.1.216.206.33.3.063.052.128.1.193.152a6.3 6.3 0 0 0 .542.371 6.5 6.5 0 0 0 .356.2c.07.036.139.073.21.107.135.063.273.118.412.17.059.023.117.049.177.069a5.815 5.815 0 0 0 .606.174c.029.007.059.01.088.016.176.038.354.069.533.091.071.009.143.012.214.018.139.012.278.021.417.023.032 0 .064.006.1.006s.063-.007.095-.008a5.915 5.915 0 0 0 .85-.068l.032-.006a5.988 5.988 0 0 0 .818-.2c.05-.016.1-.03.151-.047a5.979 5.979 0 0 0 .784-.335c.05-.026.1-.054.147-.081a5.91 5.91 0 0 0 .766-.491 6 6 0 0 0 1.116-8.412L340.792 284.2a14 14 0 1 1 22.23-17.024l42.56 55.575a6 6 0 1 0 9.527-7.3l-36.48-47.636a14 14 0 1 1 22.23-17.024l60.8 79.394a74.083 74.083 0 0 1-13.759 103.75Z",className:"color1ae5be svgShape"})]})})]}),e.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"Mobile App Development"}),e.jsxs("p",{className:" text-gray-600 hover:text-white  mb-4",children:["Stay in touch with your clients while on ",e.jsx("br",{})," the move using personalized mobile ",e.jsx("br",{})," apps. Our development team creates ",e.jsx("br",{})," intuitive applications for iOS and ",e.jsx("br",{})," Android, ensuring seamless user ",e.jsx("br",{}),"experiences."]})]})}),e.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4 min-h-96",children:e.jsxs("div",{className:"h-full p-6 bg-slate-100  card rounded-md shadow-xl min-h-96",children:[e.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",id:"SvgjsSvg1408",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1409"}),e.jsx("g",{id:"SvgjsG1410",children:e.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","image-rendering":"optimizeQuality","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision",viewBox:"0 0 512 512",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"a",x1:"256",x2:"256",y1:"63.4",y2:"448.8",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0","stop-color":"#fff",className:"stopColor5cc6d0 svgShape"}),e.jsx("stop",{offset:".49","stop-color":"#fff",className:"stopColora53692 svgShape"}),e.jsx("stop",{offset:"1","stop-color":"#fff",className:"stopColorf06277 svgShape"})]})}),e.jsx("path",{d:"M460.83 378.84l0 -221.57c0,-1.61 -1.35,-2.96 -2.95,-2.96l-68.51 0c36.14,92.27 -30.37,194.91 -134.6,195.2 -98.28,0.27 -168.86,-101.5 -132.14,-195.2l-68.51 0c-1.6,0 -2.95,1.35 -2.95,2.95l0 221.58 409.66 0zm-423.65 0l0 -221.57c0,-9.35 7.6,-16.95 16.94,-16.95l74.89 0c53.55,-102.56 200.44,-102.56 253.98,0l74.89 0c9.34,0 16.94,7.6 16.94,16.95l0 221.57 30.03 0c3.87,0 7,3.13 7,7l0 27.98c0,19.29 -15.69,34.98 -34.98,34.98l-441.74 0c-19.29,0 -34.98,-15.69 -34.98,-34.98l0 -27.98c0,-3.87 3.13,-7 7,-7l30.03 0zm-23.04 13.99l0 20.99c0,11.58 9.42,20.99 20.99,20.99l441.74 0c11.57,0 20.99,-9.41 20.99,-20.99l0 -20.99 -177.99 0 0 24c0,3.87 -3.13,7 -7,7l-113.74 0c-3.86,0 -7,-3.13 -7,-7l0 -24 -177.99 0zm291.74 0l-99.75 0 0 17.01 99.75 0 0 -17.01zm-49.88 -315.64c-71.23,0 -129.17,57.94 -129.17,129.17 0,56.97 37.07,105.44 88.36,122.56l0 -105.37c0,-2.6 -1.15,-4.94 -2.97,-6.54 -11.72,26.6 -51.78,18.24 -51.78,-10.86 0,-14.9 12.12,-27.03 27.03,-27.03 13.57,0 24.83,10.05 26.74,23.1 8.76,3.17 14.97,11.57 14.97,21.32l0 109.18c5.95,1.27 12.06,2.12 18.28,2.52l0 -155.79 -21.81 -13.27c-20.05,19.38 -53.78,5.15 -53.78,-22.81 0,-17.5 14.23,-31.74 31.73,-31.74 22.24,0 37.43,22.31 29.73,42.85l24.76 15.06c2.09,1.27 3.36,3.54 3.36,5.98l0 159.89c6.22,-0.26 12.32,-0.96 18.29,-2.07l0 -103.62c0,-9.75 6.2,-18.15 14.96,-21.33 1.91,-13.04 13.17,-23.1 26.74,-23.1 14.91,0 27.03,12.13 27.03,27.04 0,29.1 -40.06,37.45 -51.78,10.86 -1.82,1.59 -2.96,3.94 -2.96,6.53l0 100.19c52.88,-16.18 91.44,-65.44 91.44,-123.55 0,-71.23 -57.94,-129.17 -129.17,-129.17zm-52.4 48.44c-23.35,0 -23.35,35.49 0,35.49 23.36,0 23.36,-35.49 0,-35.49zm-16.13 67.48c-17.16,0 -17.16,26.08 0,26.08 17.16,0 17.16,-26.08 0,-26.08zm133.97 6.18c-17.16,0 -17.16,26.07 0,26.07 17.17,0 17.17,-26.07 0,-26.07z"})]})})]}),e.jsx("h3",{className:"font-semibold text-black text-2xl mb-4 ",children:"Desktop App Development"}),e.jsxs("p",{className:"  text-gray-600 hover:text-white  mb-4",children:["Empower your business with robust ",e.jsx("br",{}),"desktop applications built for ",e.jsx("br",{})," performance. Our applications are  ",e.jsx("br",{}),"tailored to your business needs and ",e.jsx("br",{})," promote efficiency.         "]})]})}),e.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:e.jsxs("div",{className:"h-full p-6 bg-slate-100  card rounded-md shadow-xl",children:[e.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",id:"SvgjsSvg1035",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1036"}),e.jsx("g",{id:"SvgjsG1037",children:e.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 64 64",viewBox:"0 0 64 64",children:[e.jsx("path",{d:"M6,54h52c1.105,0,2-0.895,2-2V16c0-1.105-0.895-2-2-2H6c-1.105,0-2,0.895-2,2v36C4,53.105,4.895,54,6,54z",className:"color0a5078 svgShape"}),e.jsx("path",{fill:"#7b68ee",d:"M43,14v26l3.106,6.211c0.369,0.737,1.42,0.737,1.789,0L51,40V14H43z",className:"color00325a svgShape"}),e.jsx("path",{d:"M9,50h46c0.552,0,1-0.448,1-1V19c0-0.552-0.448-1-1-1H9c-0.552,0-1,0.448-1,1v30C8,49.552,8.448,50,9,50z",className:"color00a0c8 svgShape"}),e.jsx("path",{fill:"orange",d:"M18,43h-7c-0.553,0-1-0.447-1-1V31c0-0.553,0.447-1,1-1s1,0.447,1,1v10h6c0.553,0,1,0.447,1,1S18.553,43,18,43z",className:"colorc80a50 svgShape"}),e.jsx("polygon",{fill:"orange",points:"18 39 18 45 21 42",className:"colorc80a50 svgShape"}),e.jsx("path",{fill:"orange",d:"M18,46c-0.129,0-0.259-0.024-0.383-0.076C17.243,45.77,17,45.404,17,45v-6c0-0.404,0.243-0.77,0.617-0.924c0.375-0.155,0.804-0.069,1.09,0.217l3,3c0.391,0.391,0.391,1.023,0,1.414l-3,3C18.516,45.898,18.26,46,18,46z M19,41.414v1.172L19.586,42L19,41.414z",className:"colorc80a50 svgShape"}),e.jsx("path",{fill:"#0082aa",d:"M43,18v22l3.106,6.211c0.369,0.737,1.42,0.737,1.789,0L51,40V18H43z",className:"color0082aa svgShape"}),e.jsx("rect",{width:"8",height:"4",x:"28",y:"54",fill:"#0a5078",transform:"rotate(-180 32 56)",className:"color0a5078 svgShape"}),e.jsx("path",{fill:"#0a5078",d:"M20,60h24v0c0-1.105-0.895-2-2-2H22C20.895,58,20,58.895,20,60L20,60z",className:"color0a5078 svgShape"}),e.jsx("rect",{width:"8",height:"1",x:"28",y:"54",fill:"#00325a",transform:"rotate(-180 32 54.5)",className:"color00325a svgShape"}),e.jsx("rect",{width:"8",height:"28",x:"44",y:"12",fill:"#fab400",className:"colorfab400 svgShape"}),e.jsx("polygon",{fill:"#f0c8a0",points:"52 40 44 40 46 44 50 44",className:"colorf0c8a0 svgShape"}),e.jsx("path",{fill:"#0a5078",d:"M46,44l1.106,2.211c0.369,0.737,1.42,0.737,1.789,0L50,44H46z",className:"color0a5078 svgShape"}),e.jsx("rect",{width:"8",height:"2",x:"44",y:"10",fill:"#f0f0f0",className:"colorf0f0f0 svgShape"}),e.jsx("path",{fill:"#0a5078",d:"M50,4h-4c-1.105,0-2,0.895-2,2v4h8V6C52,4.895,51.105,4,50,4z",className:"color0a5078 svgShape"}),e.jsx("rect",{width:"16",height:"10",x:"11",y:"21",fill:"#f0f0f0",className:"colorf0f0f0 svgShape"}),e.jsx("path",{fill:"#d2d2d2",d:"M27,32H11c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h16c0.553,0,1,0.447,1,1v10C28,31.553,27.553,32,27,32z M12,30h14v-8H12V30z",className:"colord2d2d2 svgShape"}),e.jsx("rect",{width:"2",height:"18.868",x:"18",y:"16.566",fill:"#d2d2d2",transform:"rotate(-58 19 26)",className:"colord2d2d2 svgShape"}),e.jsx("rect",{width:"18.868",height:"2",x:"9.566",y:"25",fill:"#d2d2d2",transform:"rotate(-32.031 18.998 25.998)",className:"colord2d2d2 svgShape"}),e.jsx("rect",{width:"16",height:"10",x:"23",y:"37",fill:"#f0f0f0",className:"colorf0f0f0 svgShape"}),e.jsx("path",{fill:"#d2d2d2",d:"M39,48H23c-0.553,0-1-0.447-1-1V37c0-0.553,0.447-1,1-1h16c0.553,0,1,0.447,1,1v10C40,47.553,39.553,48,39,48z M24,46h14v-8H24V46z",className:"colord2d2d2 svgShape"}),e.jsx("rect",{width:"2",height:"18.868",x:"30",y:"32.566",fill:"#d2d2d2",transform:"rotate(-58 31 42)",className:"colord2d2d2 svgShape"}),e.jsx("rect",{width:"18.868",height:"2",x:"21.566",y:"41",fill:"#d2d2d2",transform:"rotate(-32.031 30.996 41.996)",className:"colord2d2d2 svgShape"}),e.jsx("g",{children:e.jsx("path",{fill:"orange",d:"M39 22h-8c-.552 0-1-.448-1-1v0c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v0C40 21.552 39.552 22 39 22zM39 26h-8c-.552 0-1-.448-1-1v0c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v0C40 25.552 39.552 26 39 26zM39 30h-8c-.552 0-1-.448-1-1v0c0-.552.448-1 1-1h8c.552 0 1 .448 1 1v0C40 29.552 39.552 30 39 30zM39 34h-8c-.552 0-1-.448-1-1l0 0c0-.552.448-1 1-1h8c.552 0 1 .448 1 1l0 0C40 33.552 39.552 34 39 34z",className:"color0082aa svgShape"})})]})})]}),e.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"UI/UX Design"}),e.jsx("p",{className:"  text-gray-600 hover:text-white  mb-4",children:"Transform your concepts into visually stunning and user-friendly designs. Our UI/UX designers craft interfaces that captivate users and enhance engagement.        "})]})}),e.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:e.jsxs("div",{className:"h-full p-6 bg-slate-100 hover:text-white card rounded-md shadow-xl",children:[e.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",xmlnsXlink:"http://www.w3.org/2000/svg",version:"1.1","xmlnsXlink:xlink":"http://www.w3.org/1999/xlink","xmlnsXlink:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1038"}),e.jsx("g",{id:"SvgjsG1039",children:e.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg","data-name":"glipy copy",viewBox:"0 0 64 64",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"a",x1:"4.04",x2:"59.96",y1:"32",y2:"32",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0","stop-color":"#00c0ff",className:"stopColor00c0ff svgShape"}),e.jsx("stop",{offset:"1","stop-color":"#5558ff",className:"stopColor5558ff svgShape"})]})}),e.jsx("path",{d:"M31.25159,55.0238a16.8148,16.8148,0,0,1,0-23.72989c13.29233-14.41419-6.461-34.19612-20.89715-20.897a14.778,14.778,0,0,0-.10965,20.77735v-2.364a.99766.99766,0,0,1,1.99495.00006v4.7878a1.00038,1.00038,0,0,1-.99748.99747H6.46445a.99766.99766,0,0,1-.00007-1.99494h2.374A16.81,16.81,0,0,1,8.9381,8.98042C25.35856-6.08562,47.72976,16.30361,32.668,32.71037c-13.29245,14.41491,6.46172,34.19581,20.89722,20.897A14.778,14.778,0,0,0,53.67485,32.83v2.36407a.99748.99748,0,0,1-1.99495,0V30.40614a1.00038,1.00038,0,0,1,.99748-.99747h4.77788a.99766.99766,0,0,1-.00006,1.99495H55.08127C69.95577,47.861,47.578,70.02755,31.25159,55.0238ZM25.586,29.289l-.59846-.60845a8.88068,8.88068,0,0,1-3.90016,1.03735l-.21942.82786a1.79349,1.79349,0,0,1-2.18447,1.26687l-1.53609-.41892a1.78911,1.78911,0,0,1-1.26681-2.18447l.2294-.82792a8.80994,8.80994,0,0,1-2.85276-2.85276l-.81794.22934a1.80435,1.80435,0,0,1-2.19445-1.26675L9.83585,22.955a1.79371,1.79371,0,0,1,1.26681-2.18447l.82786-.2294A9.013,9.013,0,0,1,12.96794,16.651l-.59853-.59846a1.782,1.782,0,0,1,0-2.52363l1.12716-1.12716a1.782,1.782,0,0,1,2.52363,0l.60845.60845a8.8396,8.8396,0,0,1,3.89017-1.03735l.21942-.82792a1.79834,1.79834,0,0,1,2.18447-1.26675l1.53609.41892a1.79362,1.79362,0,0,1,1.26681,2.18447l-.21942.82792A8.97432,8.97432,0,0,1,28.349,16.16224l.82792-.21947a1.79566,1.79566,0,0,1,2.18447,1.25682l.40894,1.53615a1.78586,1.78586,0,0,1-1.26681,2.18447l-.82786.2294a8.83959,8.83959,0,0,1-1.03741,3.89012l.59852.59852a1.782,1.782,0,0,1,0,2.52357L28.11957,29.289A1.79408,1.79408,0,0,1,25.586,29.289Zm-8.2789-11.93986C12.825,22.07835,19.56,28.82555,24.29923,24.34154,28.786,19.60762,22.03774,12.86572,17.30705,17.34912Zm1.41639,1.41639c-2.68552,2.776,1.38425,6.86263,4.15939,4.15958A2.94134,2.94134,0,0,0,18.72344,18.76551ZM38.3337,34.71524l.59846.60844a8.88148,8.88148,0,0,1,3.90021-1.03735c.16584-.68686.34928-1.56927,1.04728-1.91507.79334-.5707,2.0719.08067,2.89264.23932a1.74691,1.74691,0,0,1,1.08721.82792,2.609,2.609,0,0,1-.0498,2.18447,8.80868,8.80868,0,0,1,2.85276,2.85276l.81794-.2294a1.80448,1.80448,0,0,1,2.19445,1.26676l.40894,1.53614A1.79374,1.79374,0,0,1,52.817,43.23371l-.82786.22939a9.01326,9.01326,0,0,1-1.03741,3.89018l.59852.59846a1.782,1.782,0,0,1,0,2.52358l-1.12715,1.12715a1.782,1.782,0,0,1-2.52364,0L47.291,50.994a8.83866,8.83866,0,0,1-3.89017,1.03735l-.21941.82792A1.791,1.791,0,0,1,40.997,54.12611c-.78446-.264-2.22594-.37448-2.62337-1.24691a2.6541,2.6541,0,0,1,.03982-2.18441A8.976,8.976,0,0,1,35.57067,47.842l-.82792.21942a1.79567,1.79567,0,0,1-2.18447-1.25683l-.40894-1.53609a1.78584,1.78584,0,0,1,1.26682-2.18447l.82786-.2294a8.83953,8.83953,0,0,1,1.03741-3.89017l-.59852-.59846a1.78211,1.78211,0,0,1,0-2.52364l1.11716-1.12715A1.79407,1.79407,0,0,1,38.3337,34.71524Zm8.279,11.93979c4.49186-4.72789-2.25808-11.47789-6.99218-6.99242C35.13732,44.39556,41.87685,51.1377,46.61272,46.655Zm-1.4164-1.41645A2.94138,2.94138,0,0,0,41.03687,41.079C38.33418,43.85335,42.42088,47.93165,45.19632,45.23858Z"})]})})]}),e.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"DevOps"}),e.jsx("p",{className:"  text-gray-600 hover:text-white  mb-4",children:"    Enhance collaboration, streamline workflows, and accelerate delivery with our DevOps practices. We integrate and automate your pipeline from code to cloud.         "})]})}),e.jsx("div",{className:"w-full sm:w-1/2 lg:w-1/3 p-4",children:e.jsxs("div",{className:"h-full p-6 bg-slate-100  card rounded-md shadow-xl",children:[e.jsxs("svg",{className:"w-full svg sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300",xmlnsXlink:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"180",height:"180",children:[e.jsx("circle",{cx:"60",cy:"60",r:"45",fill:"none","stroke-width":"3"}),e.jsx("rect",{x:"30",y:"35",width:"13",height:"50"}),e.jsx("rect",{x:"45",y:"45",width:"13",height:"40"}),e.jsx("rect",{x:"60",y:"55",width:"13",height:"30"}),e.jsx("path",{d:"M25 80 l50 0",stroke:"#ff9800","stroke-width":"2"}),e.jsx("circle",{cx:"50",cy:"50",r:"15",stroke:"#ff9800",fill:"none","stroke-width":"3"}),e.jsx("line",{x1:"50",y1:"35",x2:"50",y2:"65",stroke:"#ff9800","stroke-width":"2"}),e.jsx("line",{x1:"35",y1:"50",x2:"65",y2:"50",stroke:"#ff9800","stroke-width":"2"})]}),e.jsx("h3",{className:"font-semibold text-black text-2xl mb-4",children:"Data Analysis"}),e.jsx("p",{className:" text-gray-600 hover:text-white  mb-4",children:"Uncover critical insights and drive smarter decision making with our comprehensive data analysis solutions. Transform raw data into actionable intelligence.         "})]})})]})]}),e.jsx("style",{jsx:!0,children:`

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




  `})]}),de=()=>e.jsx(e.Fragment,{children:e.jsxs("section",{className:"bg-gray-100 p-6 lg:p-11",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row  text-center lg:text-left",children:[e.jsx("div",{className:"w-full lg:w-1/2",children:e.jsxs("div",{className:"text-gray-800",children:[e.jsxs("h2",{className:"text-3xl sm:text-4xl font-bold",children:["Welcome to"," ",e.jsx("span",{className:"logo-main text-blue-600 pt-1 text-3xl sm:text-4xl lg:text-5xl font-serif italic",children:"CodeViper  –"})," ","Where Technology Meets Passion"]}),e.jsxs("p",{className:"pt-5 text-sm sm:text-base md:text-lg",children:["At"," ",e.jsx("span",{className:"italic text-blue-600 logo",children:"Code Viper"}),", we're more than just tech enthusiasts – we're problem solvers with a passion for bringing bold ideas to life. Our goal? To help your business stand out in the digital age. Whether you're starting from scratch or enhancing what you already have, we provide IT solutions tailored specifically to your needs, guiding you through every step of the process."]}),e.jsxs("p",{className:"pt-3 text-sm sm:text-base md:text-lg",children:["At"," ",e.jsx("span",{className:"italic text-blue-600 logo",children:"Code Viper"}),", it's not just about delivering tech – it's about building partnerships. We take the time to learn about your goals, collaborate closely, and support your journey to new levels of success. Ready to transform your business? Let's make it happen, together."]}),e.jsxs("div",{className:"flex flex-row   gap-5 pt-7 justify-center lg:justify-start",children:[e.jsx("a",{class:"text-blue-600 button mq-buttons w-1/3 h-12 flex items-center justify-center text-lg font-sans font-bold rounded-md button bg-white button-white",href:"",children:e.jsx("span",{children:"Contact Us"})}),e.jsx("a",{className:"bg-blue-600 hover:bg-blue-800 w-2/5 flex items-center justify-center h-12 text-lg font-bold rounded-md text-white",href:"tel:+923035313249",children:"Call Now"})]})]})}),e.jsx("div",{className:"w-full lg:w-1/2 mt-6 lg:mt-0",children:e.jsx("img",{src:"images/aboutus.png",alt:"About CodeEssence",loading:"lazy",className:"w-full h-auto object-cover"})})]}),e.jsx("style",{jsx:!0,children:`
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


      `})]})}),he=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-slate-900 text-white",children:[e.jsx("h2",{className:"flex  justify-center items-center text-5xl font-extrabold m-10",style:{color:"#404040"},children:" How We  Work"}),e.jsx("p",{className:"text-center mx-auto text-xl font-medium px-4 sm:px-8 lg:px-20   text-gray-800",children:"Explore our streamlined, efficient approach to project management and how it ensures your success every step of the way."}),e.jsxs("div",{className:"grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-20",children:[e.jsxs("div",{className:"h-full transition-transform cards p-5 bg-slate-100 shadow-xl rounded-md text-black",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512 512",className:"mb-4",children:e.jsxs("g",{children:[e.jsx("path",{d:"M236 336c0-33.57 20.687-62.292 50-74.163A79.746 79.746 0 0 0 256 256c-44.183 0-80 35.817-80 80 0 22.091 17.909 40 40 40h60c-22.091 0-40-17.909-40-40z",fill:"#cee1f2"}),e.jsx("path",{d:"M296 376h-80c-22.091 0-40-17.909-40-40 0-44.183 35.817-80 80-80s80 35.817 80 80c0 22.091-17.909 40-40 40z",fill:"none",stroke:"#7b68ee",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"256",cy:"176",r:"40",fill:"none",stroke:"#7b68ee",strokeWidth:"40"})]})}),e.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Discover"}),e.jsx("p",{className:"text-gray-600",children:"Our discovery phase is dedicated to understanding your vision, goals, and expectations to craft a precise project blueprint."})]}),e.jsxs("div",{className:"h-full p-5 transition-transform cards  bg-slate-100 shadow-xl rounded-md text-black",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512 512",className:"mb-4",children:e.jsxs("g",{children:[e.jsx("path",{d:"M236 420c0-9.935-5.439-19.09-14.198-23.779-72.477-38.793-118.37-120.733-102.752-211.648 13.529-78.756 75.602-143.727 153.824-160.064a215.935 215.935 0 0 1 12.925-2.284c-23.244-3.473-47.789-2.965-72.925 2.284C134.652 40.847 72.579 105.817 59.05 184.574c-15.631 90.993 30.354 172.995 102.938 211.747C170.637 400.939 176 409.985 176 419.79v.21c0 44.183 35.817 72 80 72 10.613 0 20.733-1.621 30-4.672-29.313-9.651-50-33.758-50-67.328z",fill:"#cee1f2"}),e.jsx("path",{d:"m176 180-40 40 40 40M336 180l40 40-40 40M276 140l-40 160",fill:"none",stroke:"#ff9800",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Design & Development"}),e.jsx("p",{className:"text-gray-600",children:"With a blend of aesthetic design and cutting-edge development, we transform ideas into engaging digital experiences."})]}),e.jsxs("div",{className:"h-full p-5 transition-transform cards  bg-slate-100 shadow-xl rounded-md text-black",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512.004 512.004",className:"mb-4",children:e.jsxs("g",{children:[e.jsx("path",{d:"M80 432.002v-352c0-33.137 26.863-60 60-60H80c-33.137 0-60 26.863-60 60v352c0 33.137 26.863 60 60 60h60c-33.137 0-60-26.863-60-60z",fill:"#cee1f2"}),e.jsx("path",{d:"M432 492.002H80c-33.137 0-60-26.863-60-60v-352c0-33.137 26.863-60 60-60h352c33.137 0 60 26.863 60 60v352c0 33.137-26.863 60-60 60z",fill:"none",stroke:"#7b68ee",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Testing & Refinement"}),e.jsx("p",{className:"text-gray-600",children:"In our rigorous testing phase, every feature is refined to perfection, ensuring high performance and reliability."})]}),e.jsxs("div",{className:"h-full transition-transform cards  p-5 bg-slate-100 shadow-xl rounded-md text-black",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 512 512",className:"mb-4",children:e.jsxs("g",{children:[e.jsx("path",{d:"M80 220c0-35.748 19.446-66.018 51.797-76.274 13.619-4.317 23.931-15.629 26.996-29.584 9.679-44.072 43.585-79.062 87.047-90.313A117.586 117.586 0 0 0 216 20c-57.397 0-105.382 40.296-117.207 94.142-3.065 13.955-13.376 25.267-26.996 29.584C39.446 153.982 20 184.252 20 220c0 44.182 31.818 80 76 80h60c-44.182 0-76-35.818-76-80z",fill:"#cee1f2"}),e.jsx("path",{d:"M376 412v40c0 22.091-17.909 40-40 40H176c-22.091 0-40-17.909-40-40v-40M336 300h80c44.182 0 76-35.818 76-80 0-36.099-19.908-66.611-52.752-76.57a40.041 40.041 0 0 1-26.684-26.697C402.599 83.897 372.09 60 336 60c-3.03 0-6.008.197-8.933.564a40.02 40.02 0 0 1-31.72-9.938C274.253 31.684 246.601 20 216 20c-57.397 0-105.382 40.296-117.207 94.142-3.065 13.955-13.376 25.267-26.996 29.585C39.446 153.982 20 184.252 20 220c0 44.182 31.818 80 76 80h80",fill:"none",stroke:"#7b68ee",strokeWidth:"40",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("h3",{className:"font-semibold text-xl mb-4",children:"Launch & Support"}),e.jsx("p",{className:"text-gray-600",children:"Experience a seamless project delivery that not only meets deadlines but also provides continuous support post-launch."})]})]})]}),e.jsx("style",{jsx:!0,children:`

.cards:hover  {

  transform: translateY(-5px); 
  transform: translateY(-5px); 

}
  `})]}),me="/react-port/assets/banner-bg-B7enHBXL.jpg",xe=()=>{const[a,o]=f.useState(0),[n,r]=f.useState(0),[t,l]=f.useState(0),[i,c]=f.useState(0);return f.useEffect(()=>{const m=setInterval(()=>{a<4&&o(x=>x+1)},1e3),h=setInterval(()=>{n<15&&r(x=>x+1)},10),s=setInterval(()=>{t<50&&l(x=>x+1)},20),p=setInterval(()=>{i<98&&c(x=>x+1)},20);return()=>{clearInterval(m),clearInterval(h),clearInterval(s),clearInterval(p)}},[a,n,t,i]),e.jsxs("div",{className:"count relative text-white text-center p-8 flex flex-col lg:flex-row justify-around items-center h-auto lg:h-64",children:[e.jsxs("div",{className:"mb-8 lg:mb-0",children:[e.jsxs("h1",{className:"font-sans font-normal text-4xl",children:[a," ",e.jsx("span",{children:"+"})]}),e.jsx("h2",{className:"text-lg lg:text-xl",children:"Years Helping Business"})]}),e.jsxs("div",{className:"mb-8 lg:mb-0",children:[e.jsxs("h1",{className:"font-sans text-4xl",children:[n," ",e.jsx("span",{children:"+"})]}),e.jsx("h2",{className:"text-lg lg:text-xl",children:"Working Employees"})]}),e.jsxs("div",{className:"mb-8 lg:mb-0",children:[e.jsxs("h1",{className:"font-sans text-4xl",children:[t," ",e.jsx("span",{children:"+"})]}),e.jsx("h2",{className:"text-lg lg:text-xl",children:"Complete Projects"})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:"font-sans text-4xl",children:[i," ",e.jsx("span",{children:"%"})]}),e.jsx("h2",{className:"text-lg lg:text-xl",children:"Client Satisfaction"})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})};function ue(){const[a,o]=f.useState(!0);return f.useEffect(()=>{setTimeout(()=>{o(!1)},500)},[]),f.useRef(null),f.useRef(null),e.jsx(e.Fragment,{children:a?e.jsx($,{}):e.jsxs("div",{className:"bg-slate-300",children:[e.jsx(K,{}),e.jsx(ie,{}),e.jsxs("div",{className:"bg-gray-50 ",children:[e.jsx(ce,{}),e.jsx(de,{})]}),e.jsx(le,{}),e.jsx(xe,{}),e.jsx(he,{}),e.jsx(J,{})]})})}export{ue as default};
