"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[327],{444:function(e,t,n){n.r(t),n.d(t,{default:function(){return _e}});var o=n(885),r=n(791),a=n(434),i=n(329),s=function(e){var t=e.children;return(0,i.jsx)("div",{className:"Container",children:t})},c=function(e){var t=e.title,n=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:t}),(0,i.jsx)("div",{children:n})]})},l=n(942),u=n(413),d=function(){return(0,i.jsx)("div",{children:(0,i.jsx)("button",{type:"submit",name:"add",className:"Contacts__btn",children:"Add contact"})})};function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=n(982);function m(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=m(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var v=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=m(e))&&(o&&(o+=" "),o+=t);return o},h=["theme","type"],g=["delay","staleId"];function y(e){return"number"===typeof e&&!isNaN(e)}function b(e){return"boolean"===typeof e}function T(e){return"string"===typeof e}function E(e){return"function"===typeof e}function C(e){return T(e)||E(e)?e:null}function O(e){return null!=e}function _(e){return(0,r.isValidElement)(e)||T(e)||E(e)||y(e)}var x={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},I={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function w(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,m=a?t+"--"+i:t,v=a?n+"--"+i:n,h=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e=d.current,t=m.split(" "),n=function n(o){var r;o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,p.Z)(t)))};!function(){var o;(o=e.classList).add.apply(o,(0,p.Z)(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,r.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,u,l):u()};f||(c?t():(h.current=1,e.className+=" "+v,e.addEventListener("animationend",t)))}),[f]),r.createElement(r.Fragment,null,o)}}function Z(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var L={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},N=function(e){var t=e.theme,n=e.type,o=f(e,h);return r.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))};var j={info:function(e){return r.createElement(N,(0,u.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(N,(0,u.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(N,(0,u.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(N,(0,u.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function k(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(E(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):T(a)||y(a)?i=a:o?i=j.spinner():function(e){return e in j}(n)&&(i=j[n](s))),i}function P(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],a=(0,r.useState)([]),i=(0,o.Z)(a,2),s=i[0],c=i[1],l=(0,r.useRef)(null),u=(0,r.useRef)(new Map).current,d=function(e){return-1!==s.indexOf(e)},m=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return u.get(e)}}).current;function v(e){var t=e.containerId;!m.props.limit||t&&m.containerId!==t||(m.count-=m.queue.length,m.queue=[])}function h(e){c((function(t){return O(e)?t.filter((function(t){return t!==e})):[]}))}function x(){var e=m.queue.shift();w(e.toastContent,e.toastProps,e.staleId)}function I(e,t){var o=t.delay,a=t.staleId,i=f(t,g);if(_(e)&&!function(e){return!l.current||m.props.enableMultiContainer&&e.containerId!==m.props.containerId||u.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,c=i.updateId,d=i.data,p=m.props,v=function(){return h(s)},I=null==c;I&&m.count++;var N,j,P={toastId:s,updateId:c,data:d,containerId:i.containerId,isLoading:i.isLoading,theme:i.theme||p.theme,icon:null!=i.icon?i.icon:p.icon,isIn:!1,key:i.key||m.toastKey++,type:i.type,closeToast:v,closeButton:i.closeButton,rtl:p.rtl,position:i.position||p.position,transition:i.transition||p.transition,className:C(i.className||p.toastClassName),bodyClassName:C(i.bodyClassName||p.bodyClassName),style:i.style||p.toastStyle,bodyStyle:i.bodyStyle||p.bodyStyle,onClick:i.onClick||p.onClick,pauseOnHover:b(i.pauseOnHover)?i.pauseOnHover:p.pauseOnHover,pauseOnFocusLoss:b(i.pauseOnFocusLoss)?i.pauseOnFocusLoss:p.pauseOnFocusLoss,draggable:b(i.draggable)?i.draggable:p.draggable,draggablePercent:i.draggablePercent||p.draggablePercent,draggableDirection:i.draggableDirection||p.draggableDirection,closeOnClick:b(i.closeOnClick)?i.closeOnClick:p.closeOnClick,progressClassName:C(i.progressClassName||p.progressClassName),progressStyle:i.progressStyle||p.progressStyle,autoClose:!i.isLoading&&(N=i.autoClose,j=p.autoClose,!1===N||y(N)&&N>0?N:j),hideProgressBar:b(i.hideProgressBar)?i.hideProgressBar:p.hideProgressBar,progress:i.progress,role:i.role||p.role,deleteToast:function(){var e=Z(u.get(s),"removed");u.delete(s),L.emit(4,e);var t=m.queue.length;if(m.count=O(s)?m.count-1:m.count-m.displayedToast,m.count<0&&(m.count=0),t>0){var o=O(s)?1:m.props.limit;if(1===t||1===o)m.displayedToast++,x();else{var r=o>t?t:o;m.displayedToast=r;for(var a=0;a<r;a++)x()}}else n()}};P.iconOut=k(P),E(i.onOpen)&&(P.onOpen=i.onOpen),E(i.onClose)&&(P.onClose=i.onClose),P.closeButton=p.closeButton,!1===i.closeButton||_(i.closeButton)?P.closeButton=i.closeButton:!0===i.closeButton&&(P.closeButton=!_(p.closeButton)||p.closeButton);var R=e;(0,r.isValidElement)(e)&&!T(e.type)?R=(0,r.cloneElement)(e,{closeToast:v,toastProps:P,data:d}):E(e)&&(R=e({closeToast:v,toastProps:P,data:d})),p.limit&&p.limit>0&&m.count>p.limit&&I?m.queue.push({toastContent:R,toastProps:P,staleId:a}):y(o)?setTimeout((function(){w(R,P,a)}),o):w(R,P,a)}}function w(e,t,n){var o=t.toastId;n&&u.delete(n);var r={content:e,props:t};u.set(o,r),c((function(e){return[].concat((0,p.Z)(e),[o]).filter((function(e){return e!==n}))})),L.emit(4,Z(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return m.containerId=e.containerId,L.cancelEmit(3).on(0,I).on(1,(function(e){return l.current&&h(e)})).on(5,v).emit(2,m),function(){u.clear(),L.emit(3,m)}}),[]),(0,r.useEffect)((function(){m.props=e,m.isToastActive=d,m.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(u.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:d}}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function S(e){var t=(0,r.useState)(!1),n=(0,o.Z)(t,2),a=n[0],i=n[1],s=(0,r.useState)(!1),c=(0,o.Z)(s,2),l=c[0],u=c[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",x),document.addEventListener("touchmove",_),document.addEventListener("touchend",x);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=R(t.nativeEvent),f.y=M(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?O():C()}}function C(){i(!0)}function O(){i(!1)}function _(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&O(),f.x=R(t),f.y=M(t),"x"===e.draggableDirection?f.delta=f.x-f.start:f.delta=f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function x(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",x);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),E(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;E(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||O();window.addEventListener("focus",C),window.addEventListener("blur",O)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(I.onMouseEnter=O,I.onMouseLeave=C),y&&(I.onClick=function(e){g&&g(e),f.canCloseOnClick&&h()}),{playToast:C,pauseToast:O,isRunning:a,preventExitTransition:l,toastRef:d,eventHandlers:I}}function B(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function A(e){var t=e.delay,n=e.isRunning,o=e.closeToast,a=e.type,i=e.hide,s=e.className,c=e.style,d=e.controlledProgress,f=e.progress,p=e.rtl,m=e.isIn,h=e.theme,g=(0,u.Z)((0,u.Z)({},c),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:i?0:1});d&&(g.transform="scaleX("+f+")");var y=v("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+h,"Toastify__progress-bar--"+a,(0,l.Z)({},"Toastify__progress-bar--rtl",p)),b=E(s)?s({rtl:p,type:a,defaultClassName:y}):v(y,s),T=(0,l.Z)({},d&&f>=1?"onTransitionEnd":"onAnimationEnd",d&&f<1?null:function(){m&&o()});return r.createElement("div",(0,u.Z)({role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:b,style:g},T))}A.defaultProps={type:I.DEFAULT,hide:!1};var D=function(e){var t=S(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,d=e.autoClose,f=e.onClick,p=e.type,m=e.hideProgressBar,h=e.closeToast,g=e.transition,y=e.position,b=e.className,T=e.style,C=e.bodyClassName,O=e.bodyStyle,_=e.progressClassName,x=e.progressStyle,I=e.updateId,w=e.role,Z=e.progress,L=e.rtl,N=e.toastId,j=e.deleteToast,k=e.isIn,P=e.isLoading,R=e.iconOut,M=e.theme,D=v("Toastify__toast","Toastify__toast-theme--"+M,"Toastify__toast--"+p,(0,l.Z)({},"Toastify__toast--rtl",L)),F=E(b)?b({rtl:L,position:y,type:p,defaultClassName:D}):v(D,b),z=!!Z,H={closeToast:h,type:p,theme:M},q=null;return!1===s||(q=E(s)?s(H):r.isValidElement(s)?r.cloneElement(s,H):B(H)),r.createElement(g,{isIn:k,done:j,position:y,preventExitTransition:o,nodeRef:a},r.createElement("div",(0,u.Z)((0,u.Z)({id:N,onClick:f,className:F},i),{},{style:T,ref:a}),r.createElement("div",(0,u.Z)((0,u.Z)({},k&&{role:w}),{},{className:E(C)?C({type:p}):v("Toastify__toast-body",C),style:O}),null!=R&&r.createElement("div",{className:v("Toastify__toast-icon",(0,l.Z)({},"Toastify--animate-icon Toastify__zoom-enter",!P))},R),r.createElement("div",null,c)),q,(d||z)&&r.createElement(A,(0,u.Z)((0,u.Z)({},I&&!z?{key:"pb-"+I}:{}),{},{rtl:L,theme:M,delay:d,isRunning:n,isIn:k,closeToast:h,hide:m,type:p,style:x,className:_,controlledProgress:z,progress:Z}))))},F=w({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),z=(w({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),w({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),w({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,r.forwardRef)((function(e,t){var n=P(e),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,d=e.rtl,f=e.containerId;function p(e){var t=v("Toastify__toast-container","Toastify__toast-container--"+e,(0,l.Z)({},"Toastify__toast-container--rtl",d));return E(s)?s({position:e,rtl:d,defaultClassName:t}):v(t,C(s))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:f},o((function(e,t){var n=t.length?(0,u.Z)({},c):(0,u.Z)((0,u.Z)({},c),{},{pointerEvents:"none"});return r.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(D,(0,u.Z)((0,u.Z)({},a),{},{isIn:i(a.toastId),style:(0,u.Z)((0,u.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+a.key}),o)})))})))})));z.displayName="ToastContainer",z.defaultProps={position:x.TOP_RIGHT,transition:F,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:B,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var H,q=new Map,V=[];function U(){return Math.random().toString(36).substring(2,9)}function G(e){return e&&(T(e.toastId)||y(e.toastId))?e.toastId:U()}function Q(e,t){return q.size>0?L.emit(0,e,t):V.push({content:e,options:t}),t.toastId}function K(e,t){return(0,u.Z)((0,u.Z)({},t),{},{type:t&&t.type||e,toastId:G(t)})}function W(e){return function(t,n){return Q(t,K(e,n))}}function X(e,t){return Q(e,K(I.DEFAULT,t))}function Y(e){var t=e.onSubmit,n=(0,r.useState)({name:"",phone:""}),a=(0,o.Z)(n,2),s=a[0],c=a[1],f=function(e){var t=e.target,n=t.name,o=t.value;c((function(e){return(0,u.Z)((0,u.Z)({},e),{},(0,l.Z)({},n,o))}))},p=function(){c({name:"",number:""})};return(0,i.jsxs)("form",{className:"ContactForm",onSubmit:function(e){e.preventDefault(),t(s),p(),X.success("Contact added!")},children:[(0,i.jsxs)("label",{children:["Name",(0,i.jsx)("input",{className:"ContactForm__textarea",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:s.name,onChange:f})]}),(0,i.jsxs)("label",{children:["Number",(0,i.jsx)("input",{className:"ContactForm__textarea",type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:s.number,onChange:f}),(0,i.jsx)(d,{})]})]})}X.loading=function(e,t){return Q(e,K(I.DEFAULT,(0,u.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},X.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=T(r)?X.loading(r,n):X.loading(r.render,(0,u.Z)((0,u.Z)({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=(0,u.Z)((0,u.Z)((0,u.Z)({type:e},s),n),{},{data:r}),i=T(t)?{render:t}:t;return o?X.update(o,(0,u.Z)((0,u.Z)({},a),i)):X(i.render,(0,u.Z)((0,u.Z)({},a),i)),r}X.dismiss(o)},l=E(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},X.success=W(I.SUCCESS),X.info=W(I.INFO),X.error=W(I.ERROR),X.warning=W(I.WARNING),X.warn=X.warning,X.dark=function(e,t){return Q(e,K(I.DEFAULT,(0,u.Z)({theme:"dark"},t)))},X.dismiss=function(e){q.size>0?L.emit(1,e):V=V.filter((function(t){return O(e)&&t.options.toastId!==e}))},X.clearWaitingQueue=function(e){return void 0===e&&(e={}),L.emit(5,e)},X.isActive=function(e){var t=!1;return q.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},X.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=q.get(n||H);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=(0,u.Z)((0,u.Z)((0,u.Z)({},o),t),{},{toastId:t.toastId||e,updateId:U()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,Q(i,a)}}),0)},X.done=function(e){X.update(e,{progress:1})},X.onChange=function(e){return L.on(4,e),function(){L.off(4,e)}},X.POSITION=x,X.TYPE=I,L.on(2,(function(e){H=e.containerId||e,q.set(H,e),V.forEach((function(e){L.emit(0,e.content,e.options)})),V=[]})).on(3,(function(e){q.delete(e.containerId||e),0===q.size&&L.off(0).off(1).off(5)}));var J=n(208),$=["children","onClick"],ee=function(e){var t=e.children,n=e.onClick,o=f(e,$);return(0,i.jsx)("button",(0,u.Z)((0,u.Z)({type:"button",className:"IconButton",onClick:n},o),{},{children:t}))};ee.defaultProps={onClick:function(){return null},children:null};var te,ne,oe=ee,re=["title","titleId"];function ae(){return ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ae.apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function se(e,t){var n=e.title,o=e.titleId,a=ie(e,re);return r.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,te||(te=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),ne||(ne=r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var ce=r.forwardRef(se),le=(n.p,function(e){var t=e.contact,n=(0,a.I0)();return(0,i.jsxs)("div",{children:[t.name,": ",t.number,(0,i.jsx)(oe,{className:"IconButtonDelete",onClick:function(){return n((0,J.GK)(t.id))},"aria-label":"Delete contact",children:(0,i.jsx)(ce,{width:"15",height:"15",fill:"#fff"})})]})}),ue=function(e){var t=e.contacts,n=e.onDeleteContact;return(0,i.jsx)("ul",{className:"ContactList",children:t&&t.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(le,{contact:e,onDeleteContact:n})},e.id)}))})},de=function(e){var t=e.value,n=e.onChange;return(0,i.jsxs)("label",{className:"Filter",children:["Find contacts by name",(0,i.jsx)("input",{className:"Filter__textarea",type:"text",value:t,onChange:n})]})},fe=n(164),pe=document.querySelector("#modal-root");function me(e){var t=e.onClose,n=e.children;function o(e){"Escape"===e.code&&t()}(0,r.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}),[]);return(0,fe.createPortal)((0,i.jsx)("div",{className:"Modal__backdrop",onClick:function(e){e.currentTarget===e.target&&t()},children:(0,i.jsx)("div",{className:"Modal__content",children:n})}),pe)}var ve,he,ge=function(e){return e.contacts},ye=n(467),be=["title","titleId"];function Te(){return Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Te.apply(this,arguments)}function Ee(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ce(e,t){var n=e.title,o=e.titleId,a=Ee(e,be);return r.createElement("svg",Te({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,ve||(ve=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),he||(he=r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var Oe=r.forwardRef(Ce);n.p;function _e(e){var t=(0,a.I0)(),n=(0,r.useState)(!1),l=(0,o.Z)(n,2),u=l[0],d=l[1];(0,r.useEffect)((function(){t((0,J.yF)())}),[t]);var f=(0,a.v9)(ge),p=f.filterTerm,m=f.contacts,v=f.isLoading,h=f.error,g=function(){d(!u)},y=function(){var e=p.toLowerCase();return e?m.filter((function(t){return t.name.toLowerCase().includes(e)})):m}();return(0,i.jsxs)(s,{children:[(0,i.jsx)(c,{title:"Phonebook"}),(0,i.jsx)(oe,{onClick:g,"aria-label":"Add contact",children:(0,i.jsx)(Oe,{width:"40",height:"40",fill:"#fff"})}),u&&(0,i.jsx)(me,{onClose:g,children:(0,i.jsx)(Y,{onSubmit:function(e){var n={name:e.name,number:e.phone};void 0===m.find((function(e){return e.name===n.name}))?t((0,J.uK)(n)):alert("".concat(n.name," is already in contacts?")),g()}})}),(0,i.jsx)(c,{title:"Contacts"}),(0,i.jsx)(de,{value:p,onChange:function(e){t((0,ye.T)(e.currentTarget.value))}}),v&&!h&&(0,i.jsx)("b",{children:"Request in progress..."}),void 0!==m?(0,i.jsx)(ue,{contacts:y,onDeleteContact:function(e){t((0,J.GK)(e))}}):""]})}}}]);
//# sourceMappingURL=327.6976af0a.chunk.js.map