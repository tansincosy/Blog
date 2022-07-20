(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[916],{4184:function(a,b){var c,d; /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !function(){"use strict";var f={}.hasOwnProperty;function e(){for(var b=[],c=0;c<arguments.length;c++){var a=arguments[c];if(a){var d=typeof a;if("string"===d||"number"===d)b.push(a);else if(Array.isArray(a)){if(a.length){var h=e.apply(null,a);h&&b.push(h)}}else if("object"===d){if(a.toString===Object.prototype.toString)for(var g in a)f.call(a,g)&&a[g]&&b.push(g);else b.push(a.toString())}}}return b.join(" ")}a.exports?(e.default=e,a.exports=e):void 0!==(d=(function(){return e}).apply(b,c=[]))&&(a.exports=d)}()},1210:function(b,a){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(a,"__esModule",{value:!0}),a.getDomainLocale=c,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),b.exports=a.default)},8418:function(e,a,b){"use strict";var c,g=b(4941).Z;b(5753).default,Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=(c=b(7294),c&&c.__esModule?c:{default:c}),h=b(6273),i=b(2725),j=b(3462),k=b(1018),l=b(7190),m=b(1210),n=b(8684),o=void 0!==d.default.useTransition,p={};function q(a,c,d,b){if(a&&h.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;p[c+"%"+d+(e?"%"+e:"")]=!0}}var f=d.default.forwardRef(function(a,A){var c,e,B=a.href,C=a.as,D=a.children,E=a.prefetch,F=a.passHref,P=a.replace,Q=a.shallow,R=a.scroll,s=a.locale,S=a.onClick,T=a.onMouseEnter,w=a.legacyBehavior,f=void 0===w?!0!==Boolean(!1):w,G=function(b,f){if(null==b)return{};var c,a,d={},e=Object.keys(b);for(a=0;a<e.length;a++)f.indexOf(c=e[a])>=0||(d[c]=b[c]);return d}(a,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=D,f&&("string"==typeof c||"number"==typeof c)&&(c=d.default.createElement("a",null,c));var H=!1!==E,I=g(o?d.default.useTransition():[],2),U=I[1],b=d.default.useContext(j.RouterContext),x=d.default.useContext(k.AppRouterContext);x&&(b=x);var y=d.default.useMemo(function(){var a=g(h.resolveHref(b,B,!0),2),c=a[0],d=a[1];return{href:c,as:C?h.resolveHref(b,C):d||c}},[b,B,C]),t=y.href,r=y.as,V=d.default.useRef(t),W=d.default.useRef(r);f&&(e=d.default.Children.only(c));var J=f?e&&"object"==typeof e&&e.ref:A,u=g(l.useIntersection({rootMargin:"200px"}),3),K=u[0],L=u[1],M=u[2],N=d.default.useCallback(function(a){(W.current!==r||V.current!==t)&&(M(),W.current=r,V.current=t),K(a),J&&("function"==typeof J?J(a):"object"==typeof J&&(J.current=a))},[r,J,t,M,K]);d.default.useEffect(function(){var c=L&&H&&h.isLocalURL(t),a=void 0!==s?s:b&&b.locale,d=p[t+"%"+r+(a?"%"+a:"")];c&&!d&&q(b,t,r,{locale:a})},[r,t,L,s,H,b]);var v={ref:N,onClick:function(a){f||"function"!=typeof S||S(a),f&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,e,d,f,g,i,j,k,b){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(d)){a.preventDefault();var l,m,c=function(){e[g?"replace":"push"](d,f,{shallow:i,locale:k,scroll:j})};b?b(c):c()}}(a,b,t,r,P,Q,R,s,x?U:void 0)},onMouseEnter:function(a){f||"function"!=typeof T||T(a),f&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(t)&&q(b,t,r,{priority:!0})}};if(!f||F||"a"===e.type&&!("href"in e.props)){var z=void 0!==s?s:b&&b.locale,O=b&&b.isLocaleDomain&&m.getDomainLocale(r,z,b.locales,b.domainLocales);v.href=O||n.addBasePath(i.addLocale(r,z,b&&b.defaultLocale))}return f?d.default.cloneElement(e,v):d.default.createElement("a",Object.assign({},G,v),c)});a.default=f,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},7190:function(c,a,b){"use strict";var d=b(4941).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var j=a.rootRef,k=a.rootMargin,l=a.disabled||!g,p=e.useRef(),b=d(e.useState(!1),2),c=b[0],q=b[1],i=d(e.useState(null),2),m=i[0],n=i[1];e.useEffect(function(){if(g){if(p.current&&(p.current(),p.current=void 0),!l&&!c)return m&&m.tagName&&(p.current=h(m,function(a){return a&&q(a)},{root:null==j?void 0:j.current,rootMargin:k})),function(){null==p.current||p.current(),p.current=void 0}}else if(!c){var a=f.requestIdleCallback(function(){return q(!0)});return function(){return f.cancelIdleCallback(a)}}},[m,l,k,j,c]);var o=e.useCallback(function(){q(!1)},[]);return[n,c,o]};var e=b(7294),f=b(9311),g="function"==typeof IntersectionObserver;function h(b,c,d){var a=k(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),i.delete(g);var a=j.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&j.splice(a,1)}}}var i=new Map,j=[];function k(b){var a,c={root:b.root||null,margin:b.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(a=i.get(d)))return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},b);return a={id:c,observer:f,elements:e},j.push(c),i.set(c,a),a}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),c.exports=a.default)},1018:function(e,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.AppRouterContext=void 0;var a,f,d=(a=c(7294),a&&a.__esModule?a:{default:a}).default.createContext(null);b.AppRouterContext=d},1664:function(a,c,b){a.exports=b(8418)},1163:function(a,c,b){a.exports=b(387)},4825:function(o,e,b){"use strict";function p(){return(p=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function q(a,d){if(null==a)return{};var b,c,e=function(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}(a,d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(c=0;c<f.length;c++)b=f[c],!(d.indexOf(b)>=0)&&Object.prototype.propertyIsEnumerable.call(a,b)&&(e[b]=a[b])}return e}function r(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}function s(d,c){for(var b=0;b<c.length;b++){var a=c[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}}function f(a,b,c){return b&&s(a.prototype,b),c&&s(a,c),Object.defineProperty(a,"prototype",{writable:!1}),a}function t(a,b){return(t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,b){return a.__proto__=b,a})(a,b)}function u(b,a){if("function"!=typeof a&&null!==a)throw TypeError("Super expression must either be null or a function");b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),a&&t(b,a)}function v(a){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function w(a){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function x(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function y(a){var b=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}();return function(){var c,d=v(a);if(b){var e=v(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return function(b,a){if(a&&("object"===w(a)||"function"==typeof a))return a;if(void 0!==a)throw TypeError("Derived constructors may only return object or undefined");return x(b)}(this,c)}}b.d(e,{Z:function(){return aj}});var z,a=b(7294),g=function(a){return+setTimeout(a,16)},h=function(a){return clearTimeout(a)};"undefined"!=typeof window&&"requestAnimationFrame"in window&&(g=function(a){return window.requestAnimationFrame(a)},h=function(a){return window.cancelAnimationFrame(a)});var A=0,B=new Map;function C(a){B.delete(a)}function i(d){var a=arguments.length>1&& void 0!==arguments[1]?arguments[1]:1,b=A+=1;function c(a){if(0===a)C(b),d();else{var e=g(function(){c(a-1)});B.set(b,e)}}return c(a),b}i.cancel=function(b){var a=B.get(b);return C(a),h(a)};var D=b(3935);function j(){return!!("undefined"!=typeof window&&window.document&&window.document.createElement)}var E=(0,a.forwardRef)(function(c,e){var i=c.didUpdate,f=c.getContainer,g=c.children,h=(0,a.useRef)(),b=(0,a.useRef)();(0,a.useImperativeHandle)(e,function(){return{}});var d=(0,a.useRef)(!1);return!d.current&&j()&&(b.current=f(),h.current=b.current.parentNode,d.current=!0),(0,a.useEffect)(function(){null==i||i(c)}),(0,a.useEffect)(function(){return null===b.current.parentNode&&null!==h.current&&h.current.appendChild(b.current),function(){var a,c;null===(a=b.current)|| void 0===a||null===(c=a.parentNode)|| void 0===c||c.removeChild(b.current)}},[]),b.current?D.createPortal(g,b.current):null});function F(f){if("undefined"==typeof document)return 0;if(f|| void 0===z){var c=document.createElement("div");c.style.width="100%",c.style.height="200px";var b=document.createElement("div"),a=b.style;a.position="absolute",a.top="0",a.left="0",a.pointerEvents="none",a.visibility="hidden",a.width="200px",a.height="150px",a.overflow="hidden",b.appendChild(c),document.body.appendChild(b);var e=c.offsetWidth;b.style.overflow="scroll";var d=c.offsetWidth;e===d&&(d=b.clientWidth),document.body.removeChild(b),z=e-d}return z}var G=function(a){var d=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{};if(!a)return{};var b=d.element,f=void 0===b?document.body:b,e={},c=Object.keys(a);return c.forEach(function(a){e[a]=f.style[a]}),c.forEach(function(b){f.style[b]=a[b]}),e},H={},I=function(c){if(document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth||c){var d="ant-scrolling-effect",b=RegExp("".concat(d),"g"),a=document.body.className;if(c){if(!b.test(a))return;G(H),H={},document.body.className=a.replace(b,"").trim();return}var e=F();if(e&&(H=G({position:"relative",width:"calc(100% - ".concat(e,"px)")}),!b.test(a))){var f="".concat(a," ").concat(d);document.body.className=f.trim()}}};function J(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function K(a){return function(a){if(Array.isArray(a))return J(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function(a,c){if(a){if("string"==typeof a)return J(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(a);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return J(a,c)}}(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=[],k="ant-scrolling-effect",M=RegExp("".concat(k),"g"),N=0,O=new Map,P=f(function a(b){var c=this;r(this,a),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var a;return null===(a=c.options)|| void 0===a?void 0:a.container},this.reLock=function(b){var a=L.find(function(a){return a.target===c.lockTarget});a&&c.unLock(),c.options=b,a&&(a.options=b,c.lock())},this.lock=function(){if(!L.some(function(a){return a.target===c.lockTarget})){if(L.some(function(d){var a,b=d.options;return(null==b?void 0:b.container)===(null===(a=c.options)|| void 0===a?void 0:a.container)})){L=[].concat(K(L),[{target:c.lockTarget,options:c.options}]);return}var b,d=0,a=(null===(b=c.options)|| void 0===b?void 0:b.container)||document.body;(a===document.body&&window.innerWidth-document.documentElement.clientWidth>0||a.scrollHeight>a.clientHeight)&&(d=F());var e=a.className;if(0===L.filter(function(d){var a,b=d.options;return(null==b?void 0:b.container)===(null===(a=c.options)|| void 0===a?void 0:a.container)}).length&&O.set(a,G({width:0!==d?"calc(100% - ".concat(d,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:a})),!M.test(e)){var f="".concat(e," ").concat(k);a.className=f.trim()}L=[].concat(K(L),[{target:c.lockTarget,options:c.options}])}},this.unLock=function(){var b,d=L.find(function(a){return a.target===c.lockTarget});if(L=L.filter(function(a){return a.target!==c.lockTarget}),!(!d||L.some(function(c){var a,b=c.options;return(null==b?void 0:b.container)===(null===(a=d.options)|| void 0===a?void 0:a.container)}))){var a=(null===(b=c.options)|| void 0===b?void 0:b.container)||document.body,e=a.className;M.test(e)&&(G(O.get(a),{element:a}),O.delete(a),a.className=a.className.replace(M,"").trim())}},this.lockTarget=N++,this.options=b}),Q=0,R=j(),S={},T=function(a){if(!R)return null;if(a){if("string"==typeof a)return document.querySelectorAll(a)[0];if("function"==typeof a)return a();if("object"===w(a)&&a instanceof window.HTMLElement)return a}return document.body},U=function(c){u(b,c);var d=y(b);function b(e){var c;return r(this,b),(c=d.call(this,e)).container=void 0,c.componentRef=a.createRef(),c.rafId=void 0,c.scrollLocker=void 0,c.renderComponent=void 0,c.updateScrollLocker=function(e){var f=(e||{}).visible,a=c.props,b=a.getContainer,d=a.visible;d&&d!==f&&R&&T(b)!==c.scrollLocker.getContainer()&&c.scrollLocker.reLock({container:T(b)})},c.updateOpenCount=function(d){var e=d||{},f=e.visible,b=e.getContainer,g=c.props,h=g.visible,a=g.getContainer;h!==f&&R&&T(a)===document.body&&(h&&!f?Q+=1:d&&(Q-=1)),("function"==typeof a&&"function"==typeof b?a.toString()!==b.toString():a!==b)&&c.removeCurrentContainer()},c.attachToParent=function(){var b=arguments.length>0&& void 0!==arguments[0]&&arguments[0];if(b||c.container&&!c.container.parentNode){var a=T(c.props.getContainer);return!!a&&(a.appendChild(c.container),!0)}return!0},c.getContainer=function(){return R?(c.container||(c.container=document.createElement("div"),c.attachToParent(!0)),c.setWrapperClassName(),c.container):null},c.setWrapperClassName=function(){var a=c.props.wrapperClassName;c.container&&a&&a!==c.container.className&&(c.container.className=a)},c.removeCurrentContainer=function(){var a,b;null===(a=c.container)|| void 0===a||null===(b=a.parentNode)|| void 0===b||b.removeChild(c.container)},c.switchScrollingEffect=function(){1!==Q||Object.keys(S).length?Q||(G(S),S={},I(!0)):(I(),S=G({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"}))},c.scrollLocker=new P({container:T(e.getContainer)}),c}return f(b,[{key:"componentDidMount",value:function(){var a=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=i(function(){a.forceUpdate()}))}},{key:"componentDidUpdate",value:function(a){this.updateOpenCount(a),this.updateScrollLocker(a),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var a=this.props,b=a.visible,c=a.getContainer;R&&T(c)===document.body&&(Q=b&&Q?Q-1:Q),this.removeCurrentContainer(),i.cancel(this.rafId)}},{key:"render",value:function(){var b=this.props,d=b.children,e=b.forceRender,f=b.visible,c=null,g={getOpenCount:function(){return Q},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(e||f||this.componentRef.current)&&(c=a.createElement(E,{getContainer:this.getContainer,ref:this.componentRef},d(g))),c}}]),b}(a.Component);function V(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function W(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function X(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?W(Object(b),!0).forEach(function(a){V(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):W(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}var l=b(4184),Y=b.n(l),m={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(a){var b=a.keyCode;if(a.altKey&&!a.ctrlKey||a.metaKey||b>=m.F1&&b<=m.F12)return!1;switch(b){case m.ALT:case m.CAPS_LOCK:case m.CONTEXT_MENU:case m.CTRL:case m.DOWN:case m.END:case m.ESC:case m.HOME:case m.INSERT:case m.LEFT:case m.MAC_FF_META:case m.META:case m.NUMLOCK:case m.NUM_CENTER:case m.PAGE_DOWN:case m.PAGE_UP:case m.PAUSE:case m.PRINT_SCREEN:case m.RIGHT:case m.SHIFT:case m.UP:case m.WIN_KEY:case m.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(a){if(a>=m.ZERO&&a<=m.NINE||a>=m.NUM_ZERO&&a<=m.NUM_MULTIPLY||a>=m.A&&a<=m.Z|| -1!==window.navigator.userAgent.indexOf("WebKit")&&0===a)return!0;switch(a){case m.SPACE:case m.QUESTION_MARK:case m.NUM_PLUS:case m.NUM_MINUS:case m.NUM_PERIOD:case m.NUM_DIVISION:case m.SEMICOLON:case m.DASH:case m.EQUALS:case m.COMMA:case m.PERIOD:case m.SLASH:case m.APOSTROPHE:case m.SINGLE_QUOTE:case m.OPEN_SQUARE_BRACKET:case m.BACKSLASH:case m.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},Z=m,c={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},n=Object.keys(c).filter(function(b){if("undefined"==typeof document)return!1;var a=document.getElementsByTagName("html")[0];return b in(a?a.style:{})})[0],$=c[n];function _(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on".concat(b),c)}function aa(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.attachEvent&&a.detachEvent("on".concat(b),c)}var ab=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},ac=!("undefined"!=typeof window&&window.document&&window.document.createElement),ad=function j(e,a,b,c){if(!a||a===document||a instanceof Document)return!1;if(a===e.parentNode)return!0;var f=a.scrollHeight-a.clientHeight,g=a.scrollWidth-a.clientWidth,d=document.defaultView.getComputedStyle(a),k="auto"===d.overflowY||"scroll"===d.overflowY,l="auto"===d.overflowX||"scroll"===d.overflowX,h=f&&k,i=g&&l;return(Math.max(Math.abs(b),Math.abs(c))===Math.abs(c)&&(!h|| !!h&&(a.scrollTop>=f&&c<0||a.scrollTop<=0&&c>0))||Math.max(Math.abs(b),Math.abs(c))===Math.abs(b)&&(!i|| !!i&&(a.scrollLeft>=g&&b<0||a.scrollLeft<=0&&b>0)))&&j(e,a.parentNode,b,c)},ae=["className","children","style","width","height","defaultOpen","open","prefixCls","placement","level","levelMove","ease","duration","getContainer","handler","onChange","afterVisibleChange","showMask","maskClosable","maskStyle","onClose","onHandleClick","keyboard","getOpenCount","scrollLocker","contentWrapperStyle"],af={},ag=function(c){u(b,c);var d=y(b);function b(c){var a;return r(this,b),(a=d.call(this,c)).levelDom=void 0,a.dom=void 0,a.contentWrapper=void 0,a.contentDom=void 0,a.maskDom=void 0,a.handlerDom=void 0,a.drawerId=void 0,a.timeout=void 0,a.passive=void 0,a.startPos=void 0,a.domFocus=function(){a.dom&&a.dom.focus()},a.removeStartHandler=function(b){if(b.touches.length>1){a.startPos=null;return}a.startPos={x:b.touches[0].clientX,y:b.touches[0].clientY}},a.removeMoveHandler=function(b){if(!(b.changedTouches.length>1)&&a.startPos){var c=b.currentTarget,d=b.changedTouches[0].clientX-a.startPos.x,e=b.changedTouches[0].clientY-a.startPos.y;(c===a.maskDom||c===a.handlerDom||c===a.contentDom&&ad(c,b.target,d,e))&&b.cancelable&&b.preventDefault()}},a.transitionEnd=function(c){var b=c.target;aa(b,$,a.transitionEnd),b.style.transition=""},a.onKeyDown=function(b){if(b.keyCode===Z.ESC){var c=a.props.onClose;b.stopPropagation(),c&&c(b)}},a.onWrapperTransitionEnd=function(b){var c=a.props,d=c.open,e=c.afterVisibleChange;b.target===a.contentWrapper&&b.propertyName.match(/transform$/)&&(a.dom.style.transition="",!d&&a.getCurrentDrawerSome()&&(document.body.style.overflowX="",a.maskDom&&(a.maskDom.style.left="",a.maskDom.style.width="")),e&&e(!!d))},a.openLevelTransition=function(){var b=a.props,e=b.open,f=b.width,g=b.height,c=a.getHorizontalBoolAndPlacementName(),d=c.isHorizontal,h=c.placementName,i=a.contentDom?a.contentDom.getBoundingClientRect()[d?"width":"height"]:0;a.setLevelAndScrolling(e,h,(d?f:g)||i)},a.setLevelTransform=function(c,d,e,f){var b=a.props,g=b.placement,h=b.levelMove,i=b.duration,j=b.ease,k=b.showMask;a.levelDom.forEach(function(m){m.style.transition="transform ".concat(i," ").concat(j),_(m,$,a.transitionEnd);var l=c?e:0;if(h){var n,p,b,q=(n=h,p={target:m,open:c},b="function"==typeof n?n(p):n,Array.isArray(b)?2===b.length?b:[b[0],b[1]]:[b]);l=c?q[0]:q[1]||0}var r="number"==typeof l?"".concat(l,"px"):l,o="left"===g||"top"===g?r:"-".concat(r);o=k&&"right"===g&&f?"calc(".concat(o," + ").concat(f,"px)"):o,m.style.transform=l?"".concat(d,"(").concat(o,")"):""})},a.setLevelAndScrolling=function(b,e,f){var c=a.props.onChange;if(!ac){var d=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?F(!0):0;a.setLevelTransform(b,e,f,d),a.toggleScrollingToDrawerAndBody(d)}c&&c(b)},a.toggleScrollingToDrawerAndBody=function(b){var c=a.props,d=c.getContainer,g=c.showMask,h=c.open,e=d&&d();if(e&&e.parentNode===document.body&&g){var i=["touchstart"],f=[document.body,a.maskDom,a.handlerDom,a.contentDom];h&&"hidden"!==document.body.style.overflow?(b&&a.addScrollingEffect(b),document.body.style.touchAction="none",f.forEach(function(b,c){b&&_(b,i[c]||"touchmove",c?a.removeMoveHandler:a.removeStartHandler,a.passive)})):a.getCurrentDrawerSome()&&(document.body.style.touchAction="",b&&a.remScrollingEffect(b),f.forEach(function(b,c){b&&aa(b,i[c]||"touchmove",c?a.removeMoveHandler:a.removeStartHandler,a.passive)}))}},a.addScrollingEffect=function(c){var b=a.props,f=b.placement,d=b.duration,e=b.ease,g="width ".concat(d," ").concat(e),h="transform ".concat(d," ").concat(e);switch(a.dom.style.transition="none",f){case"right":a.dom.style.transform="translateX(-".concat(c,"px)");break;case"top":case"bottom":a.dom.style.width="calc(100% - ".concat(c,"px)"),a.dom.style.transform="translateZ(0)"}clearTimeout(a.timeout),a.timeout=setTimeout(function(){a.dom&&(a.dom.style.transition="".concat(h,",").concat(g),a.dom.style.width="",a.dom.style.transform="")})},a.remScrollingEffect=function(d){var g,e=a.props,h=e.placement,b=e.duration,c=e.ease;n&&(document.body.style.overflowX="hidden"),a.dom.style.transition="none";var f="width ".concat(b," ").concat(c),i="transform ".concat(b," ").concat(c);switch(h){case"left":a.dom.style.width="100%",f="width 0s ".concat(c," ").concat(b);break;case"right":a.dom.style.transform="translateX(".concat(d,"px)"),a.dom.style.width="100%",f="width 0s ".concat(c," ").concat(b),a.maskDom&&(a.maskDom.style.left="-".concat(d,"px"),a.maskDom.style.width="calc(100% + ".concat(d,"px)"));break;case"top":case"bottom":a.dom.style.width="calc(100% + ".concat(d,"px)"),a.dom.style.height="100%",a.dom.style.transform="translateZ(0)",g="height 0s ".concat(c," ").concat(b)}clearTimeout(a.timeout),a.timeout=setTimeout(function(){a.dom&&(a.dom.style.transition="".concat(i,",").concat(g?"".concat(g,","):"").concat(f),a.dom.style.transform="",a.dom.style.width="",a.dom.style.height="")})},a.getCurrentDrawerSome=function(){return!Object.keys(af).some(function(a){return af[a]})},a.getLevelDom=function(d){var b,c=d.level,e=d.getContainer;if(!ac){var f=e&&e(),g=f?f.parentNode:null;(a.levelDom=[],"all"===c)?(g?Array.prototype.slice.call(g.children):[]).forEach(function(b){"SCRIPT"!==b.nodeName&&"STYLE"!==b.nodeName&&"LINK"!==b.nodeName&&b!==f&&a.levelDom.push(b)}):c&&(Array.isArray(b=c)?b:[b]).forEach(function(b){document.querySelectorAll(b).forEach(function(b){a.levelDom.push(b)})})}},a.getHorizontalBoolAndPlacementName=function(){var b=a.props.placement,c="left"===b||"right"===b,d="translate".concat(c?"X":"Y");return{isHorizontal:c,placementName:d}},a.state={_self:x(a)},a}return f(b,[{key:"componentDidMount",value:function(){var b,h=this;if(!ac){var f=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){return f=!0,null}}))}catch(i){}this.passive=!!f&&{passive:!1}}var a=this.props,c=a.open,d=a.getContainer,g=a.showMask,j=a.autoFocus,e=d&&d();this.drawerId="drawer_id_".concat(Number((Date.now()+Math.random()).toString().replace(".",Math.round(9*Math.random()).toString())).toString(16)),this.getLevelDom(this.props),c&&(e&&e.parentNode===document.body&&(af[this.drawerId]=c),this.openLevelTransition(),this.forceUpdate(function(){j&&h.domFocus()}),g&&(null===(b=this.props.scrollLocker)|| void 0===b||b.lock()))}},{key:"componentDidUpdate",value:function(f){var a=this.props,c=a.open,d=a.getContainer,b=a.scrollLocker,g=a.showMask,h=a.autoFocus,e=d&&d();c!==f.open&&(e&&e.parentNode===document.body&&(af[this.drawerId]=!!c),this.openLevelTransition(),c?(h&&this.domFocus(),g&&(null==b||b.lock())):null==b||b.unLock())}},{key:"componentWillUnmount",value:function(){var a=this.props,c=a.open,b=a.scrollLocker;delete af[this.drawerId],c&&(this.setLevelTransform(!1),document.body.style.touchAction=""),null==b||b.unLock()}},{key:"render",value:function(){var d,o,e,j,E=this,b=this.props,k=b.className,r=b.children,s=b.style,f=b.width,g=b.height,t=(b.defaultOpen,b.open),c=b.prefixCls,h=b.placement,l=(b.level,b.levelMove,b.ease,b.duration,b.getContainer,b.handler),m=(b.onChange,b.afterVisibleChange,b.showMask),u=b.maskClosable,v=b.maskStyle,w=b.onClose,F=b.onHandleClick,x=b.keyboard,y=(b.getOpenCount,b.scrollLocker,b.contentWrapperStyle),z=q(b,ae),i=!!this.dom&&t,A=Y()(c,(V(d={},"".concat(c,"-").concat(h),!0),V(d,"".concat(c,"-open"),i),V(d,k||"",!!k),V(d,"no-mask",!m),d)),B=this.getHorizontalBoolAndPlacementName(),C=B.placementName,n=i?"":"".concat(C,"(").concat("left"===h||"top"===h?"-100%":"100%",")"),D=l&&a.cloneElement(l,{onClick:function(a){l.props.onClick&&l.props.onClick(),F&&F(a)},ref:function(a){E.handlerDom=a}});return a.createElement("div",p({},(e=["switchScrollingEffect","autoFocus"],j=X({},o=z),Array.isArray(e)&&e.forEach(function(a){delete j[a]}),j),{tabIndex:-1,className:A,style:s,ref:function(a){E.dom=a},onKeyDown:i&&x?this.onKeyDown:void 0,onTransitionEnd:this.onWrapperTransitionEnd}),m&&a.createElement("div",{className:"".concat(c,"-mask"),onClick:u?w:void 0,style:v,ref:function(a){E.maskDom=a}}),a.createElement("div",{className:"".concat(c,"-content-wrapper"),style:X({transform:n,msTransform:n,width:ab(f)?"".concat(f,"px"):f,height:ab(g)?"".concat(g,"px"):g},y),ref:function(a){E.contentWrapper=a}},a.createElement("div",{className:"".concat(c,"-content"),ref:function(a){E.contentDom=a}},r),D))}}],[{key:"getDerivedStateFromProps",value:function(a,c){var b=c.prevProps,d=c._self;if(void 0!==b){var e=a.placement,f=a.level;e!==b.placement&&(d.contentDom=null),f!==b.level&&d.getLevelDom(a)}return{prevProps:a}}}]),b}(a.Component),ah=["defaultOpen","getContainer","wrapperClassName","forceRender","handler"],ai=["visible","afterClose"],d=function(c){u(b,c);var d=y(b);function b(a){r(this,b),(c=d.call(this,a)).dom=void 0,c.onHandleClick=function(d){var a=c.props,b=a.onHandleClick,e=a.open;if(b&&b(d),void 0===e){var f=c.state.open;c.setState({open:!f})}},c.onClose=function(d){var a=c.props,b=a.onClose,e=a.open;b&&b(d),void 0===e&&c.setState({open:!1})};var c,e=void 0!==a.open?a.open:!!a.defaultOpen;return c.state={open:e},"onMaskClick"in a&&console.warn("`onMaskClick` are removed, please use `onClose` instead."),c}return f(b,[{key:"render",value:function(){var i=this,b=this.props,c=(b.defaultOpen,b.getContainer),d=b.wrapperClassName,g=b.forceRender,e=b.handler,h=q(b,ah),f=this.state.open;return c?a.createElement(U,{visible:f,forceRender:!!e||g,getContainer:c,wrapperClassName:d},function(b){var c=b.visible,d=b.afterClose,g=q(b,ai);return a.createElement(ag,p({},h,g,{open:void 0!==c?c:f,afterVisibleChange:void 0!==d?d:h.afterVisibleChange,handler:e,onClose:i.onClose,onHandleClick:i.onHandleClick}))}):a.createElement("div",{className:d,ref:function(a){i.dom=a}},a.createElement(ag,p({},h,{open:f,handler:e,getContainer:function(){return i.dom},onClose:this.onClose,onHandleClick:this.onHandleClick})))}}],[{key:"getDerivedStateFromProps",value:function(a,d){var b=d.prevProps,c={prevProps:a};return void 0!==b&&a.open!==b.open&&(c.open=a.open),c}}]),b}(a.Component);d.defaultProps={prefixCls:"drawer",placement:"left",getContainer:"body",defaultOpen:!1,level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",onChange:function(){},afterVisibleChange:function(){},handler:a.createElement("div",{className:"drawer-handle"},a.createElement("i",{className:"drawer-handle-icon"})),showMask:!0,maskClosable:!0,maskStyle:{},wrapperClassName:"",className:"",keyboard:!0,forceRender:!1,autoFocus:!0};var aj=d},628:function(e,c,d){"use strict";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // This file is automatically generated. Do not modify it.
/**
 * Utility methods for mathematical operations.
 */ /**
 * The signum function.
 *
 * @return 1 if num > 0, -1 if num < 0, and 0 if num = 0
 */ function f(a){return a<0?-1:0===a?0:1}function g(b,c,a){return(1-a)*b+a*c}function h(a){return(a%=360)<0&&(a+=360),a}function i(a){return(a%=360)<0&&(a+=360),a}function j(a,b){return 180-Math.abs(Math.abs(a-b)-180)}d.d(c,{"_v":function(){return K},fq:function(){return G},qj:function(){return I}});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // This file is automatically generated. Do not modify it.
/**
 * Color science utilities.
 *
 * Utility methods for color science constants and color space
 * conversions that aren't HCT or CAM16.
 */ let k=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478],],l=[[3.2413774792388685,-1.5376652402851851,-0.49885366846268053,],[-0.9691452513005321,1.8758853451067872,.04156585616912061,],[.05562093689691305,-0.20395524564742123,1.0571799111220335,],],m=[95.047,100,108.883];function n(a){return a>>16&255}function o(a){return a>>8&255}function p(b,c,d){var e,f,g;let a=l,h=a[0][0]*b+a[0][1]*c+a[0][2]*d,i=a[1][0]*b+a[1][1]*c+a[1][2]*d,j=a[2][0]*b+a[2][1]*c+a[2][2]*d,k=u(h),m=u(i),n=u(j);return e=k,f=m,(-16777216|(255&e)<<16|(255&f)<<8|255&(g=n))>>>0}function q(b){let a=(b+16)/116,c=a,d=a,e=24389/27,g=a*a*a>216/24389,f=m;return p((g?d*d*d:b/e)*f[0],(b>8?a*a*a:b/e)*f[1],(g?c*c*c:b/e)*f[2])}function r(b){let a=function(a){var b;let c=t(n(a)),d=t(o(a)),e=t(255&(b=a));return function(a,b){let c=a[0]*b[0][0]+a[1]*b[0][1]+a[2]*b[0][2],d=a[0]*b[1][0]+a[1]*b[1][1]+a[2]*b[1][2],e=a[0]*b[2][0]+a[1]*b[2][1]+a[2]*b[2][2];return[c,d,e]}([c,d,e],k)}(b)[1]/100;if(a<=216/24389)return 24389/27*a;{let c=Math.pow(a,1/3);return 116*c-16}}function s(a){return a>8?100*Math.pow((a+16)/116,3):a/(24389/27)*100}function t(b){let a=b/255;return a<=.040449936?a/12.92*100:100*Math.pow((a+.055)/1.055,2.4)}function u(f){var b,c,a;let d=f/100,e=0;return e=d<=.0031308?12.92*d:1.055*Math.pow(d,1/2.4)-.055,b=0,c=255,a=Math.round(255*e),a<b?b:a>c?c:a}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 *
 * This class caches intermediate values of the CAM16 conversion process that
 * depend only on viewing conditions, enabling speed ups.
 */ class b{constructor(a,b,c,d,e,f,g,h,i,j){this.n=a,this.aw=b,this.nbb=c,this.ncb=d,this.c=e,this.nc=f,this.rgbD=g,this.fl=h,this.fLRoot=i,this.z=j}static make(o=m,h=200/Math.PI*s(50)/100,v=50,w=2,x=!1){let c=o,p=.401288*c[0]+.650173*c[1]+ -0.051461*c[2],q=-0.250268*c[0]+1.204414*c[1]+.045854*c[2],r=-0.002079*c[0]+.048952*c[1]+.953127*c[2],e=.8+w/10,y=e>=.9?g(.59,.69,(e-.9)*10):g(.525,.59,(e-.8)*10),a=x?1:e*(1-1/3.6*Math.exp((-h-42)/92));a=a>1?1:a<0?0:a;let i=[a*(100/p)+1-a,a*(100/q)+1-a,a*(100/r)+1-a,],j=1/(5*h+1),t=j*j*j*j,u=1-t,f=t*h+.1*u*u*Math.cbrt(5*h),k=s(v)/o[1],l=.725/Math.pow(k,.2),d=[Math.pow(f*i[0]*p/100,.42),Math.pow(f*i[1]*q/100,.42),Math.pow(f*i[2]*r/100,.42),],n=[400*d[0]/(d[0]+27.13),400*d[1]/(d[1]+27.13),400*d[2]/(d[2]+27.13),],z=(2*n[0]+n[1]+.05*n[2])*l;return new b(k,z,l,l,y,e,i,f,Math.pow(f,.25),1.48+Math.sqrt(k))}}b.DEFAULT=b.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * CAM16, a color appearance model. Colors are not just defined by their hex
 * code, but rather, a hex code and viewing conditions.
 *
 * CAM16 instances also have coordinates in the CAM16-UCS space, called J*, a*,
 * b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
 * specification, and should be used when measuring distances between colors.
 *
 * In traditional color spaces, a color can be identified solely by the
 * observer's measurement of the color. Color appearance models such as CAM16
 * also use information about the environment where the color was
 * observed, known as the viewing conditions.
 *
 * For example, white under the traditional assumption of a midday sun white
 * point is accurately measured as a slightly chromatic blue by CAM16. (roughly,
 * hue 203, chroma 3, lightness 100)
 */ class v{constructor(a,b,c,d,e,f,g,h,i){this.hue=a,this.chroma=b,this.j=c,this.q=d,this.m=e,this.s=f,this.jstar=g,this.astar=h,this.bstar=i}distance(a){let b=this.jstar-a.jstar,c=this.astar-a.astar,d=this.bstar-a.bstar;return 1.41*Math.pow(Math.sqrt(b*b+c*c+d*d),.63)}static fromInt(a){return v.fromIntInViewingConditions(a,b.DEFAULT)}static fromIntInViewingConditions(i,a){let j=t((16711680&i)>>16),k=t((65280&i)>>8),l=t(255&i),m=.41233895*j+.35762064*k+.18051042*l,n=.2126*j+.7152*k+.0722*l,o=.01932141*j+.11916382*k+.95034478*l,r=a.rgbD[0]*(.401288*m+.650173*n-.051461*o),s=a.rgbD[1]*(-0.250268*m+1.204414*n+.045854*o),u=a.rgbD[2]*(-0.002079*m+.048952*n+.953127*o),w=Math.pow(a.fl*Math.abs(r)/100,.42),x=Math.pow(a.fl*Math.abs(s)/100,.42),y=Math.pow(a.fl*Math.abs(u)/100,.42),e=400*f(r)*w/(w+27.13),g=400*f(s)*x/(x+27.13),h=400*f(u)*y/(y+27.13),p=(11*e+ -12*g+h)/11,q=(e+g-2*h)/9,b=180*Math.atan2(q,p)/Math.PI,c=b<0?b+360:b>=360?b-360:b,z=c*Math.PI/180,E=(40*e+20*g+h)/20*a.nbb,d=100*Math.pow(E/a.aw,a.c*a.z),F=4/a.c*Math.sqrt(d/100)*(a.aw+4)*a.fLRoot,G=5e4/13*(.25*(Math.cos((c<20.14?c+360:c)*Math.PI/180+2)+3.8))*a.nc*a.ncb,A=Math.pow(G*Math.sqrt(p*p+q*q)/((20*e+20*g+21*h)/20+.305),.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),B=A*Math.sqrt(d/100),C=B*a.fLRoot,H=50*Math.sqrt(A*a.c/(a.aw+4)),D=1/.0228*Math.log(1+.0228*C);return new v(c,B,d,F,C,H,(1+100*.007)*d/(1+.007*d),D*Math.cos(z),D*Math.sin(z))}static fromJch(a,c,d){return v.fromJchInViewingConditions(a,c,d,b.DEFAULT)}static fromJchInViewingConditions(b,c,d,a){let h=4/a.c*Math.sqrt(b/100)*(a.aw+4)*a.fLRoot,e=c*a.fLRoot,i=50*Math.sqrt(c/Math.sqrt(b/100)*a.c/(a.aw+4)),f=d*Math.PI/180,g=1/.0228*Math.log(1+.0228*e);return new v(d,c,b,h,e,i,(1+100*.007)*b/(1+.007*b),g*Math.cos(f),g*Math.sin(f))}static fromUcs(a,c,d){return v.fromUcsInViewingConditions(a,c,d,b.DEFAULT)}static fromUcsInViewingConditions(d,f,g,e){let a=f,b=g,h=(Math.exp(.0228*Math.sqrt(a*a+b*b))-1)/.0228/e.fLRoot,c=Math.atan2(b,a)*(180/Math.PI);return c<0&&(c+=360),v.fromJchInViewingConditions(d/(1-(d-100)*.007),h,c,e)}toInt(){return this.viewed(b.DEFAULT)}viewed(a){let r=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),c=Math.pow(r/Math.pow(1.64-Math.pow(.29,a.n),.73),1/.9),d=this.hue*Math.PI/180,s=a.aw*Math.pow(this.j/100,1/a.c/a.z),t=.25*(Math.cos(d+2)+3.8)*(5e4/13)*a.nc*a.ncb,b=s/a.nbb,n=Math.sin(d),o=Math.cos(d),q=23*(b+.305)*c/(23*t+11*c*o+108*c*n),e=q*o,g=q*n,h=(460*b+451*e+288*g)/1403,i=(460*b-891*e-261*g)/1403,j=(460*b-220*e-6300*g)/1403,u=f(h)*(100/a.fl)*Math.pow(Math.max(0,27.13*Math.abs(h)/(400-Math.abs(h))),1/.42),v=f(i)*(100/a.fl)*Math.pow(Math.max(0,27.13*Math.abs(i)/(400-Math.abs(i))),1/.42),w=f(j)*(100/a.fl)*Math.pow(Math.max(0,27.13*Math.abs(j)/(400-Math.abs(j))),1/.42),k=u/a.rgbD[0],l=v/a.rgbD[1],m=w/a.rgbD[2],x=p(1.86206786*k-1.01125463*l+.14918677*m,.38752654*k+.62144744*l-.00897398*m,-0.0158415*k-.03412294*l+1.04996444*m);return x}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A color system built using CAM16 hue and chroma, and L* from
 * L*a*b*.
 *
 * Using L* creates a link between the color system, contrast, and thus
 * accessibility. Contrast ratio depends on relative luminance, or Y in the XYZ
 * color space. L*, or perceptual luminance can be calculated from Y.
 *
 * Unlike Y, L* is linear to human perception, allowing trivial creation of
 * accurate color tones.
 *
 * Unlike contrast ratio, measuring contrast in L* is linear, and simple to
 * calculate. A difference of 40 in HCT tone guarantees a contrast ratio >= 3.0,
 * and a difference of 50 guarantees a contrast ratio >= 4.5.
 */ /**
 * HCT, hue, chroma, and tone. A color system that provides a perceptually
 * accurate color measurement system that can also accurately render what colors
 * will appear as in different lighting environments.
 */ class w{constructor(a,b,c){this.internalHue=a,this.internalChroma=b,this.internalTone=c,this.setInternalState(this.toInt())}static from(a,b,c){return new w(a,b,c)}static fromInt(a){let b=v.fromInt(a),c=r(a);return new w(b.hue,b.chroma,c)}toInt(){return x(this.internalHue,this.internalChroma,this.internalTone)}get hue(){return this.internalHue}set hue(a){this.setInternalState(x(i(a),this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(a){this.setInternalState(x(this.internalHue,a,this.internalTone))}get tone(){return this.internalTone}set tone(a){this.setInternalState(x(this.internalHue,this.internalChroma,a))}setInternalState(a){let b=v.fromInt(a),c=r(a);this.internalHue=b.hue,this.internalChroma=b.chroma,this.internalTone=c}}function x(e,f,g){var a,c,d;return y(i(e),f,(a=0,c=100,(d=g)<a?a:d>c?c:d),b.DEFAULT)}function y(f,g,b,j){if(g<1||0>=Math.round(b)||Math.round(b)>=100)return q(b);f=i(f);let d=g,c=g,a=0,k=!0,h=null;for(;Math.abs(a-d)>=.4;){let e=z(f,c,b);if(k){if(null!=e)return e.viewed(j);k=!1,c=a+(d-a)/2;continue}null===e?d=c:(h=e,a=c),c=a+(d-a)/2}return null===h?q(b):h.viewed(j)}function z(g,n,h){let a=0,d=100,b=0,i=1e3,e=1e3,j=null;for(;Math.abs(a-d)>.01;){b=a+(d-a)/2;let o=v.fromJch(b,n,g),k=o.toInt(),l=r(k),m=Math.abs(h-l);if(m<.2){let c=v.fromInt(k),f=c.distance(v.fromJch(c.j,c.chroma,g));f<=1&&f<=e&&(i=m,e=f,j=c)}if(0===i&&0===e)break;l<h?a=b:d=b}return j}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // This file is automatically generated. Do not modify it.
// libmonet is designed to have a consistent API across platforms
// and modular components that can be moved around easily. Using a class as a
// namespace facilitates this.
//
// tslint:disable:class-as-namespace
/**
 * Functions for blending in HCT and CAM16.
 */ class A{static harmonize(c,d){let a=w.fromInt(c),b=w.fromInt(d),e=j(a.hue,b.hue),f=i(a.hue+Math.min(.5*e,15)*A.rotationDirection(a.hue,b.hue));return w.from(f,a.chroma,a.tone).toInt()}static hctHue(a,b,c){let d=A.cam16Ucs(a,b,c),e=v.fromInt(d),f=v.fromInt(a),g=w.from(e.hue,f.chroma,r(a));return g.toInt()}static cam16Ucs(g,h,a){let b=v.fromInt(g),c=v.fromInt(h),d=b.jstar,e=b.astar,f=b.bstar,i=c.jstar,j=c.astar,k=c.bstar;return v.fromUcs(d+(i-d)*a,e+(j-e)*a,f+(k-f)*a).toInt()}static rotationDirection(a,b){let e=b-a,f=b-a+360,g=b-a-360,c=Math.abs(e),d=Math.abs(f),h=Math.abs(g);return c<=d&&c<=h?e>=0?1:-1:d<=c&&d<=h?f>=0?1:-1:g>=0?1:-1}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 *  A convenience class for retrieving colors that are constant in hue and
 *  chroma, but vary in tone.
 */ class B{constructor(a,b){this.hue=a,this.chroma=b,this.cache=new Map}static fromInt(b){let a=w.fromInt(b);return B.fromHueAndChroma(a.hue,a.chroma)}static fromHueAndChroma(a,b){return new B(a,b)}tone(b){let a=this.cache.get(b);return void 0===a&&(a=w.from(this.hue,this.chroma,b).toInt(),this.cache.set(b,a)),a}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An intermediate concept between the key color for a UI theme, and a full
 * color scheme. 5 sets of tones are generated, all except one use the same hue
 * as the key color, and all vary in chroma.
 */ class C{constructor(c){let b=w.fromInt(c),a=b.hue;this.a1=B.fromHueAndChroma(a,Math.max(48,b.chroma)),this.a2=B.fromHueAndChroma(a,16),this.a3=B.fromHueAndChroma(a+60,24),this.n1=B.fromHueAndChroma(a,4),this.n2=B.fromHueAndChroma(a,8),this.error=B.fromHueAndChroma(25,84)}static of(a){return new C(a)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents a Material color scheme, a mapping of color roles to colors.
 */ class D{constructor(a){this.props=a}get primary(){return this.props.primary}get primaryContainer(){return this.props.primaryContainer}get onPrimary(){return this.props.onPrimary}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondary(){return this.props.onSecondary}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get shadow(){return this.props.shadow}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(b){let a=C.of(b);return new D({primary:a.a1.tone(40),onPrimary:a.a1.tone(100),primaryContainer:a.a1.tone(90),onPrimaryContainer:a.a1.tone(10),secondary:a.a2.tone(40),onSecondary:a.a2.tone(100),secondaryContainer:a.a2.tone(90),onSecondaryContainer:a.a2.tone(10),tertiary:a.a3.tone(40),onTertiary:a.a3.tone(100),tertiaryContainer:a.a3.tone(90),onTertiaryContainer:a.a3.tone(10),error:a.error.tone(40),onError:a.error.tone(100),errorContainer:a.error.tone(90),onErrorContainer:a.error.tone(10),background:a.n1.tone(99),onBackground:a.n1.tone(10),surface:a.n1.tone(99),onSurface:a.n1.tone(10),surfaceVariant:a.n2.tone(90),onSurfaceVariant:a.n2.tone(30),outline:a.n2.tone(50),shadow:a.n1.tone(0),inverseSurface:a.n1.tone(20),inverseOnSurface:a.n1.tone(95),inversePrimary:a.a1.tone(80)})}static dark(b){let a=C.of(b);return new D({primary:a.a1.tone(80),onPrimary:a.a1.tone(20),primaryContainer:a.a1.tone(30),onPrimaryContainer:a.a1.tone(90),secondary:a.a2.tone(80),onSecondary:a.a2.tone(20),secondaryContainer:a.a2.tone(30),onSecondaryContainer:a.a2.tone(90),tertiary:a.a3.tone(80),onTertiary:a.a3.tone(20),tertiaryContainer:a.a3.tone(30),onTertiaryContainer:a.a3.tone(90),error:a.error.tone(80),onError:a.error.tone(20),errorContainer:a.error.tone(30),onErrorContainer:a.error.tone(80),background:a.n1.tone(10),onBackground:a.n1.tone(90),surface:a.n1.tone(10),onSurface:a.n1.tone(90),surfaceVariant:a.n2.tone(30),onSurfaceVariant:a.n2.tone(80),outline:a.n2.tone(60),shadow:a.n1.tone(0),inverseSurface:a.n1.tone(90),inverseOnSurface:a.n1.tone(20),inversePrimary:a.a1.tone(40)})}toJSON(){return Object.assign({},this.props)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Represents an Android 12 color scheme, a mapping of color roles to colors.
 */ class E{constructor(a){this.props=a}get colorAccentPrimary(){return this.props.colorAccentPrimary}get colorAccentPrimaryVariant(){return this.props.colorAccentPrimaryVariant}get colorAccentSecondary(){return this.props.colorAccentSecondary}get colorAccentSecondaryVariant(){return this.props.colorAccentSecondaryVariant}get colorAccentTertiary(){return this.props.colorAccentTertiary}get colorAccentTertiaryVariant(){return this.props.colorAccentTertiaryVariant}get textColorPrimary(){return this.props.textColorPrimary}get textColorSecondary(){return this.props.textColorSecondary}get textColorTertiary(){return this.props.textColorTertiary}get textColorPrimaryInverse(){return this.props.textColorPrimaryInverse}get textColorSecondaryInverse(){return this.props.textColorSecondaryInverse}get textColorTertiaryInverse(){return this.props.textColorTertiaryInverse}get colorBackground(){return this.props.colorBackground}get colorBackgroundFloating(){return this.props.colorBackgroundFloating}get colorSurface(){return this.props.colorSurface}get colorSurfaceVariant(){return this.props.colorSurfaceVariant}get colorSurfaceHighlight(){return this.props.colorSurfaceHighlight}get surfaceHeader(){return this.props.surfaceHeader}get underSurface(){return this.props.underSurface}get offState(){return this.props.offState}get accentSurface(){return this.props.accentSurface}get textPrimaryOnAccent(){return this.props.textPrimaryOnAccent}get textSecondaryOnAccent(){return this.props.textSecondaryOnAccent}get volumeBackground(){return this.props.volumeBackground}get scrim(){return this.props.scrim}static light(b){let a=CorePalette.of(b);return new E({colorAccentPrimary:a.a1.tone(90),colorAccentPrimaryVariant:a.a1.tone(40),colorAccentSecondary:a.a2.tone(90),colorAccentSecondaryVariant:a.a2.tone(40),colorAccentTertiary:a.a3.tone(90),colorAccentTertiaryVariant:a.a3.tone(40),textColorPrimary:a.n1.tone(10),textColorSecondary:a.n2.tone(30),textColorTertiary:a.n2.tone(50),textColorPrimaryInverse:a.n1.tone(95),textColorSecondaryInverse:a.n1.tone(80),textColorTertiaryInverse:a.n1.tone(60),colorBackground:a.n1.tone(95),colorBackgroundFloating:a.n1.tone(98),colorSurface:a.n1.tone(98),colorSurfaceVariant:a.n1.tone(90),colorSurfaceHighlight:a.n1.tone(100),surfaceHeader:a.n1.tone(90),underSurface:a.n1.tone(0),offState:a.n1.tone(20),accentSurface:a.a2.tone(95),textPrimaryOnAccent:a.n1.tone(10),textSecondaryOnAccent:a.n2.tone(30),volumeBackground:a.n1.tone(25),scrim:a.n1.tone(80)})}static dark(b){let a=CorePalette.of(b);return new E({colorAccentPrimary:a.a1.tone(90),colorAccentPrimaryVariant:a.a1.tone(70),colorAccentSecondary:a.a2.tone(90),colorAccentSecondaryVariant:a.a2.tone(70),colorAccentTertiary:a.a3.tone(90),colorAccentTertiaryVariant:a.a3.tone(70),textColorPrimary:a.n1.tone(95),textColorSecondary:a.n2.tone(80),textColorTertiary:a.n2.tone(60),textColorPrimaryInverse:a.n1.tone(10),textColorSecondaryInverse:a.n1.tone(30),textColorTertiaryInverse:a.n1.tone(50),colorBackground:a.n1.tone(10),colorBackgroundFloating:a.n1.tone(10),colorSurface:a.n1.tone(20),colorSurfaceVariant:a.n1.tone(30),colorSurfaceHighlight:a.n1.tone(35),surfaceHeader:a.n1.tone(30),underSurface:a.n1.tone(0),offState:a.n1.tone(20),accentSurface:a.a2.tone(95),textPrimaryOnAccent:a.n1.tone(10),textSecondaryOnAccent:a.n2.tone(30),volumeBackground:a.n1.tone(25),scrim:a.n1.tone(80)})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 *  Given a large set of colors, remove colors that are unsuitable for a UI
 *  theme, and rank the rest based on suitability.
 *
 *  Enables use of a high cluster count for image quantization, thus ensuring
 *  colors aren't muddied, while curating the high cluster count to a much
 *  smaller number of appropriate choices.
 */ class a{constructor(){}static score(k){let l=0;for(let x of k.values())l+=x;let y=new Map,b=new Map,m=Array(360).fill(0);for(let[c,z]of k.entries()){let n=z/l;y.set(c,n);let o=v.fromInt(c);b.set(c,o);let A=Math.round(o.hue);m[A]+=n}let d=new Map;for(let[B,C]of b.entries()){let p=Math.round(C.hue),q=0;for(let e=p-15;e<p+15;e++){let D=h(e);q+=m[D]}d.set(B,q)}let r=new Map;for(let[s,t]of b.entries()){let E=d.get(s),F=100*E*a.WEIGHT_PROPORTION,G=t.chroma<a.TARGET_CHROMA?a.WEIGHT_CHROMA_BELOW:a.WEIGHT_CHROMA_ABOVE,H=(t.chroma-a.TARGET_CHROMA)*G,I=F+H;r.set(s,I)}let J=a.filter(d,b),f=new Map;for(let g of J){let u=!1,K=b.get(g).hue;for(let[L,]of f){let M=b.get(L).hue;if(15>j(K,M)){u=!0;break}}!u&&f.set(g,r.get(g))}let w=Array.from(f.entries());w.sort((a,b)=>b[1]-a[1]);let i=w.map(a=>a[0]);return 0===i.length&&i.push(4282549748),i}static filter(d,e){let c=[];for(let[b,f]of e.entries()){let g=d.get(b);f.chroma>=a.CUTOFF_CHROMA&&r(b)>=a.CUTOFF_TONE&&g>=a.CUTOFF_EXCITED_PROPORTION&&c.push(b)}return c}}a.TARGET_CHROMA=48,a.WEIGHT_PROPORTION=.7,a.WEIGHT_CHROMA_ABOVE=.3,a.WEIGHT_CHROMA_BELOW=.1,a.CUTOFF_CHROMA=15,a.CUTOFF_TONE=10,a.CUTOFF_EXCITED_PROPORTION=.01;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Utility methods for hexadecimal representations of colors.
 */ /**
 * @param argb ARGB representation of a color.
 * @return Hex string representing color, ex. #ff0000 for red.
 */ let F=a=>{var d;let e=n(a),f=o(a),g=255&(d=a),b=[e.toString(16),f.toString(16),g.toString(16)];for(let[h,c]of b.entries())1===c.length&&(b[h]="0"+c);return"#"+b.join("")},G=a=>{a=a.replace("#","");let e=3===a.length,f=6===a.length,g=8===a.length;if(!e&&!f&&!g)throw Error("unexpected hex "+a);let b=0,c=0,d=0;return e?(b=H(a.slice(0,1).repeat(2)),c=H(a.slice(1,2).repeat(2)),d=H(a.slice(2,3).repeat(2))):f?(b=H(a.slice(0,2)),c=H(a.slice(2,4)),d=H(a.slice(4,6))):g&&(b=H(a.slice(2,4)),c=H(a.slice(4,6)),d=H(a.slice(6,8))),(-16777216|(255&b)<<16|(255&c)<<8|255&d)>>>0};function H(a){return parseInt(a,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Generate a theme from a source color
 *
 * @param source Source color
 * @param customColors Array of custom colors
 * @return Theme object
 */ function I(b,c=[]){let a=C.of(b);return{source:b,schemes:{light:D.light(b),dark:D.dark(b)},palettes:{primary:a.a1,secondary:a.a2,tertiary:a.a3,neutral:a.n1,neutralVariant:a.n2,error:a.error},customColors:c.map(a=>J(b,a))}}function J(d,c){let b=c.value,e=b;c.blend&&(b=A.harmonize(e,d));let f=C.of(b),a=f.a1;return{color:c,value:b,light:{color:a.tone(40),onColor:a.tone(100),colorContainer:a.tone(90),onColorContainer:a.tone(10)},dark:{color:a.tone(80),onColor:a.tone(20),colorContainer:a.tone(30),onColorContainer:a.tone(90)}}}function K(c,a){var b;let d=(null==a?void 0:a.target)||document.body,e=null!==(b=null==a?void 0:a.dark)&& void 0!==b&&b,f=e?c.schemes.dark:c.schemes.light;for(let[g,h]of Object.entries(f.toJSON())){let i=g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),j=F(h);d.style.setProperty(`--md-sys-color-${i}`,j)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ //# sourceMappingURL=index.js.map
/***/ },797:function(c,a,b){"use strict";function d(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=Array(a);b<a;b++)d[b]=c[b];return d}function e(a){return function(a){if(Array.isArray(a))return d(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function(a,c){if(a){if("string"==typeof a)return d(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return d(a,c)}}(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}b.d(a,{Z:function(){return e}})}}])