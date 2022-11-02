"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[327],{444:function(e,t,n){n.r(t),n.d(t,{default:function(){return xe}});var o=n(885),r=n(791),a=n(434),i=n(382),s=n(329),c=function(e){var t=e.children;return(0,s.jsx)("div",{className:"Container",children:t})},l=function(e){var t=e.title,n=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:t}),(0,s.jsx)("div",{children:n})]})},u=n(942),d=n(413),f=function(){return(0,s.jsx)("div",{children:(0,s.jsx)("button",{type:"submit",name:"add",className:"Contacts__btn",children:"Add contact"})})};function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=n(982);function v(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=v(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var h=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=v(e))&&(o&&(o+=" "),o+=t);return o},g=["theme","type"],y=["delay","staleId"];function b(e){return"number"===typeof e&&!isNaN(e)}function T(e){return"boolean"===typeof e}function E(e){return"string"===typeof e}function C(e){return"function"===typeof e}function O(e){return E(e)||C(e)?e:null}function _(e){return null!=e}function x(e){return(0,r.isValidElement)(e)||E(e)||C(e)||b(e)}var I={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},w={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function Z(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,p=a?t+"--"+i:t,v=a?n+"--"+i:n,h=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e=d.current,t=p.split(" "),n=function n(o){var r;o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,m.Z)(t)))};!function(){var o;(o=e.classList).add.apply(o,(0,m.Z)(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,r.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,u,l):u()};f||(c?t():(h.current=1,e.className+=" "+v,e.addEventListener("animationend",t)))}),[f]),r.createElement(r.Fragment,null,o)}}function L(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var N={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,m.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},j=function(e){var t=e.theme,n=e.type,o=p(e,g);return r.createElement("svg",(0,d.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))};var k={info:function(e){return r.createElement(j,(0,d.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(j,(0,d.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(j,(0,d.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(j,(0,d.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function P(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(C(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):E(a)||b(a)?i=a:o?i=k.spinner():function(e){return e in k}(n)&&(i=k[n](s))),i}function R(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],a=(0,r.useState)([]),i=(0,o.Z)(a,2),s=i[0],c=i[1],l=(0,r.useRef)(null),u=(0,r.useRef)(new Map).current,d=function(e){return-1!==s.indexOf(e)},f=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return u.get(e)}}).current;function v(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function h(e){c((function(t){return _(e)?t.filter((function(t){return t!==e})):[]}))}function g(){var e=f.queue.shift();w(e.toastContent,e.toastProps,e.staleId)}function I(e,t){var o=t.delay,a=t.staleId,i=p(t,y);if(x(e)&&!function(e){return!l.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||u.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,c=i.updateId,d=i.data,m=f.props,v=function(){return h(s)},I=null==c;I&&f.count++;var Z,j,k={toastId:s,updateId:c,data:d,containerId:i.containerId,isLoading:i.isLoading,theme:i.theme||m.theme,icon:null!=i.icon?i.icon:m.icon,isIn:!1,key:i.key||f.toastKey++,type:i.type,closeToast:v,closeButton:i.closeButton,rtl:m.rtl,position:i.position||m.position,transition:i.transition||m.transition,className:O(i.className||m.toastClassName),bodyClassName:O(i.bodyClassName||m.bodyClassName),style:i.style||m.toastStyle,bodyStyle:i.bodyStyle||m.bodyStyle,onClick:i.onClick||m.onClick,pauseOnHover:T(i.pauseOnHover)?i.pauseOnHover:m.pauseOnHover,pauseOnFocusLoss:T(i.pauseOnFocusLoss)?i.pauseOnFocusLoss:m.pauseOnFocusLoss,draggable:T(i.draggable)?i.draggable:m.draggable,draggablePercent:i.draggablePercent||m.draggablePercent,draggableDirection:i.draggableDirection||m.draggableDirection,closeOnClick:T(i.closeOnClick)?i.closeOnClick:m.closeOnClick,progressClassName:O(i.progressClassName||m.progressClassName),progressStyle:i.progressStyle||m.progressStyle,autoClose:!i.isLoading&&(Z=i.autoClose,j=m.autoClose,!1===Z||b(Z)&&Z>0?Z:j),hideProgressBar:T(i.hideProgressBar)?i.hideProgressBar:m.hideProgressBar,progress:i.progress,role:i.role||m.role,deleteToast:function(){var e=L(u.get(s),"removed");u.delete(s),N.emit(4,e);var t=f.queue.length;if(f.count=_(s)?f.count-1:f.count-f.displayedToast,f.count<0&&(f.count=0),t>0){var o=_(s)?1:f.props.limit;if(1===t||1===o)f.displayedToast++,g();else{var r=o>t?t:o;f.displayedToast=r;for(var a=0;a<r;a++)g()}}else n()}};k.iconOut=P(k),C(i.onOpen)&&(k.onOpen=i.onOpen),C(i.onClose)&&(k.onClose=i.onClose),k.closeButton=m.closeButton,!1===i.closeButton||x(i.closeButton)?k.closeButton=i.closeButton:!0===i.closeButton&&(k.closeButton=!x(m.closeButton)||m.closeButton);var R=e;(0,r.isValidElement)(e)&&!E(e.type)?R=(0,r.cloneElement)(e,{closeToast:v,toastProps:k,data:d}):C(e)&&(R=e({closeToast:v,toastProps:k,data:d})),m.limit&&m.limit>0&&f.count>m.limit&&I?f.queue.push({toastContent:R,toastProps:k,staleId:a}):b(o)?setTimeout((function(){w(R,k,a)}),o):w(R,k,a)}}function w(e,t,n){var o=t.toastId;n&&u.delete(n);var r={content:e,props:t};u.set(o,r),c((function(e){return[].concat((0,m.Z)(e),[o]).filter((function(e){return e!==n}))})),N.emit(4,L(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return f.containerId=e.containerId,N.cancelEmit(3).on(0,I).on(1,(function(e){return l.current&&h(e)})).on(5,v).emit(2,f),function(){u.clear(),N.emit(3,f)}}),[]),(0,r.useEffect)((function(){f.props=e,f.isToastActive=d,f.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(u.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:d}}function M(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function S(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function B(e){var t=(0,r.useState)(!1),n=(0,o.Z)(t,2),a=n[0],i=n[1],s=(0,r.useState)(!1),c=(0,o.Z)(s,2),l=c[0],u=c[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",x),document.addEventListener("touchmove",_),document.addEventListener("touchend",x);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=M(t.nativeEvent),f.y=S(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?O():E()}}function E(){i(!0)}function O(){i(!1)}function _(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&O(),f.x=M(t),f.y=S(t),"x"===e.draggableDirection?f.delta=f.x-f.start:f.delta=f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function x(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",x);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",E,{once:!0}),C(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;C(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||O();window.addEventListener("focus",E),window.addEventListener("blur",O)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(I.onMouseEnter=O,I.onMouseLeave=E),y&&(I.onClick=function(e){g&&g(e),f.canCloseOnClick&&h()}),{playToast:E,pauseToast:O,isRunning:a,preventExitTransition:l,toastRef:d,eventHandlers:I}}function D(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function A(e){var t=e.delay,n=e.isRunning,o=e.closeToast,a=e.type,i=e.hide,s=e.className,c=e.style,l=e.controlledProgress,f=e.progress,p=e.rtl,m=e.isIn,v=e.theme,g=(0,d.Z)((0,d.Z)({},c),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:i?0:1});l&&(g.transform="scaleX("+f+")");var y=h("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+a,(0,u.Z)({},"Toastify__progress-bar--rtl",p)),b=C(s)?s({rtl:p,type:a,defaultClassName:y}):h(y,s),T=(0,u.Z)({},l&&f>=1?"onTransitionEnd":"onAnimationEnd",l&&f<1?null:function(){m&&o()});return r.createElement("div",(0,d.Z)({role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:b,style:g},T))}A.defaultProps={type:w.DEFAULT,hide:!1};var F=function(e){var t=B(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,l=e.autoClose,f=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,y=e.position,b=e.className,T=e.style,E=e.bodyClassName,O=e.bodyStyle,_=e.progressClassName,x=e.progressStyle,I=e.updateId,w=e.role,Z=e.progress,L=e.rtl,N=e.toastId,j=e.deleteToast,k=e.isIn,P=e.isLoading,R=e.iconOut,M=e.theme,S=h("Toastify__toast","Toastify__toast-theme--"+M,"Toastify__toast--"+p,(0,u.Z)({},"Toastify__toast--rtl",L)),F=C(b)?b({rtl:L,position:y,type:p,defaultClassName:S}):h(S,b),z=!!Z,H={closeToast:v,type:p,theme:M},q=null;return!1===s||(q=C(s)?s(H):r.isValidElement(s)?r.cloneElement(s,H):D(H)),r.createElement(g,{isIn:k,done:j,position:y,preventExitTransition:o,nodeRef:a},r.createElement("div",(0,d.Z)((0,d.Z)({id:N,onClick:f,className:F},i),{},{style:T,ref:a}),r.createElement("div",(0,d.Z)((0,d.Z)({},k&&{role:w}),{},{className:C(E)?E({type:p}):h("Toastify__toast-body",E),style:O}),null!=R&&r.createElement("div",{className:h("Toastify__toast-icon",(0,u.Z)({},"Toastify--animate-icon Toastify__zoom-enter",!P))},R),r.createElement("div",null,c)),q,(l||z)&&r.createElement(A,(0,d.Z)((0,d.Z)({},I&&!z?{key:"pb-"+I}:{}),{},{rtl:L,theme:M,delay:l,isRunning:n,isIn:k,closeToast:v,hide:m,type:p,style:x,className:_,controlledProgress:z,progress:Z}))))},z=Z({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),H=(Z({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),Z({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),Z({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,r.forwardRef)((function(e,t){var n=R(e),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,l=e.rtl,f=e.containerId;function p(e){var t=h("Toastify__toast-container","Toastify__toast-container--"+e,(0,u.Z)({},"Toastify__toast-container--rtl",l));return C(s)?s({position:e,rtl:l,defaultClassName:t}):h(t,O(s))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:f},o((function(e,t){var n=t.length?(0,d.Z)({},c):(0,d.Z)((0,d.Z)({},c),{},{pointerEvents:"none"});return r.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(F,(0,d.Z)((0,d.Z)({},a),{},{isIn:i(a.toastId),style:(0,d.Z)((0,d.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+a.key}),o)})))})))})));H.displayName="ToastContainer",H.defaultProps={position:I.TOP_RIGHT,transition:z,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:D,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var q,V=new Map,U=[];function G(){return Math.random().toString(36).substring(2,9)}function Q(e){return e&&(E(e.toastId)||b(e.toastId))?e.toastId:G()}function K(e,t){return V.size>0?N.emit(0,e,t):U.push({content:e,options:t}),t.toastId}function W(e,t){return(0,d.Z)((0,d.Z)({},t),{},{type:t&&t.type||e,toastId:Q(t)})}function X(e){return function(t,n){return K(t,W(e,n))}}function Y(e,t){return K(e,W(w.DEFAULT,t))}function J(e){var t=e.onSubmit,n=(0,r.useState)({name:"",phone:""}),a=(0,o.Z)(n,2),i=a[0],c=a[1],l=function(e){var t=e.target,n=t.name,o=t.value;c((function(e){return(0,d.Z)((0,d.Z)({},e),{},(0,u.Z)({},n,o))}))},p=function(){c({name:"",phone:""})};return(0,s.jsxs)("form",{className:"ContactForm",onSubmit:function(e){e.preventDefault(),t(i),p(),Y.success("Contact added!")},children:[(0,s.jsxs)("label",{children:["Name",(0,s.jsx)("input",{className:"ContactForm__textarea",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:i.name,onChange:l})]}),(0,s.jsxs)("label",{children:["Number",(0,s.jsx)("input",{className:"ContactForm__textarea",type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:i.phone,onChange:l}),(0,s.jsx)(f,{})]})]})}Y.loading=function(e,t){return K(e,W(w.DEFAULT,(0,d.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Y.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=E(r)?Y.loading(r,n):Y.loading(r.render,(0,d.Z)((0,d.Z)({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,r){if(null!=t){var a=(0,d.Z)((0,d.Z)((0,d.Z)({type:e},s),n),{},{data:r}),i=E(t)?{render:t}:t;return o?Y.update(o,(0,d.Z)((0,d.Z)({},a),i)):Y(i.render,(0,d.Z)((0,d.Z)({},a),i)),r}Y.dismiss(o)},l=C(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),l},Y.success=X(w.SUCCESS),Y.info=X(w.INFO),Y.error=X(w.ERROR),Y.warning=X(w.WARNING),Y.warn=Y.warning,Y.dark=function(e,t){return K(e,W(w.DEFAULT,(0,d.Z)({theme:"dark"},t)))},Y.dismiss=function(e){V.size>0?N.emit(1,e):U=U.filter((function(t){return _(e)&&t.options.toastId!==e}))},Y.clearWaitingQueue=function(e){return void 0===e&&(e={}),N.emit(5,e)},Y.isActive=function(e){var t=!1;return V.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Y.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=V.get(n||q);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=(0,d.Z)((0,d.Z)((0,d.Z)({},o),t),{},{toastId:t.toastId||e,updateId:G()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,K(i,a)}}),0)},Y.done=function(e){Y.update(e,{progress:1})},Y.onChange=function(e){return N.on(4,e),function(){N.off(4,e)}},Y.POSITION=I,Y.TYPE=w,N.on(2,(function(e){q=e.containerId||e,V.set(q,e),U.forEach((function(e){N.emit(0,e.content,e.options)})),U=[]})).on(3,(function(e){V.delete(e.containerId||e),0===V.size&&N.off(0).off(1).off(5)}));var $=n(208),ee=["children","onClick"],te=function(e){var t=e.children,n=e.onClick,o=p(e,ee);return(0,s.jsx)("button",(0,d.Z)((0,d.Z)({type:"button",className:"IconButton",onClick:n},o),{},{children:t}))};te.defaultProps={onClick:function(){return null},children:null};var ne,oe,re=te,ae=["title","titleId"];function ie(){return ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ie.apply(this,arguments)}function se(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ce(e,t){var n=e.title,o=e.titleId,a=se(e,ae);return r.createElement("svg",ie({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,ne||(ne=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),oe||(oe=r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var le=r.forwardRef(ce),ue=(n.p,function(e){var t=e.contact,n=(e.onDeleteContact,(0,a.I0)());return(0,s.jsxs)("div",{children:[t.name,": ",t.phone,(0,s.jsx)(re,{className:"IconButtonDelete",onClick:function(){return n((0,$.GK)(t.id))},"aria-label":"Delete contact",children:(0,s.jsx)(le,{width:"15",height:"15",fill:"#fff"})})]})}),de=function(e){var t=e.contacts,n=e.onDeleteContact;return(0,s.jsx)("ul",{className:"ContactList",children:t&&t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(ue,{contact:e,onDeleteContact:n})},e.id)}))})},fe=function(e){var t=e.value,n=e.onChange;return(0,s.jsxs)("label",{className:"Filter",children:["Find contacts by name",(0,s.jsx)("input",{className:"Filter__textarea",type:"text",value:t,onChange:n})]})},pe=n(164),me=document.querySelector("#modal-root");function ve(e){var t=e.onClose,n=e.children;function o(e){"Escape"===e.code&&t()}(0,r.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}),[]);return(0,pe.createPortal)((0,s.jsx)("div",{className:"Modal__backdrop",onClick:function(e){e.currentTarget===e.target&&t()},children:(0,s.jsx)("div",{className:"Modal__content",children:n})}),me)}var he,ge,ye=function(e){return e.contacts},be=n(467),Te=["title","titleId"];function Ee(){return Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ee.apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Oe(e,t){var n=e.title,o=e.titleId,a=Ce(e,Te);return r.createElement("svg",Ee({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,he||(he=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),ge||(ge=r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var _e=r.forwardRef(Oe);n.p;function xe(e){var t=(0,a.I0)(),n=(0,r.useState)(!1),u=(0,o.Z)(n,2),d=u[0],f=u[1];(0,r.useEffect)((function(){t((0,$.yF)())}),[t]);var p=(0,a.v9)(ye),m=p.filterTerm,v=p.contacts,h=p.isLoading,g=p.error,y=function(){f(!d)},b=function(){var e=m.toLowerCase();return e?v.filter((function(t){return t.name.toLowerCase().includes(e)})):v}();return(0,s.jsxs)(c,{children:[(0,s.jsx)(l,{title:"Phonebook"}),(0,s.jsx)(re,{onClick:y,"aria-label":"Add contact",children:(0,s.jsx)(_e,{width:"40",height:"40",fill:"#fff"})}),d&&(0,s.jsx)(ve,{onClose:y,children:(0,s.jsx)(J,{onSubmit:function(e){var n={id:(0,i.x0)(),name:e.name,phone:e.number};void 0===v.find((function(e){return e.name===n.name}))?t((0,$.uK)(n)):alert("".concat(n.name," is already in contacts?")),y()}})}),(0,s.jsx)(l,{title:"Contacts"}),(0,s.jsx)(fe,{value:m,onChange:function(e){t((0,be.T)(e.currentTarget.value))}}),h&&!g&&(0,s.jsx)("b",{children:"Request in progress..."}),void 0!==v?(0,s.jsx)(de,{contacts:b,onDeleteContact:function(e){t((0,$.GK)(e))}}):""]})}}}]);
//# sourceMappingURL=327.3e0d8a46.chunk.js.map