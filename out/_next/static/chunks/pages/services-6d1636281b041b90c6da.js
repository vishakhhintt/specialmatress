_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},Am4Y:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return n("eefG")}])},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return c}))},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var o=c(n("q1tI")),s=n("elyg"),i=n("nOHt"),a=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),c=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,s.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,s.resolveHref)(c,e.as):i||o}}),[c,e.href,e.as]),d=f.href,p=f.as,b=e.children,v=e.replace,h=e.shallow,j=e.scroll,y=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var m=o.Children.only(b),O=m&&"object"===typeof m&&m.ref,_=(0,a.useIntersection)({rootMargin:"200px"}),x=r(_,2),w=x[0],g=x[1],N=o.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,o.useEffect)((function(){var e=g&&t&&(0,s.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,c=u[d+"%"+p+(r?"%"+r:"")];e&&!c&&l(n,d,p,{locale:r})}),[p,d,g,y,t,n]);var E={ref:N,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,i,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o,locale:a,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,v,h,j,y)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var S="undefined"!==typeof y?y:n&&n.locale,L=n&&n.isLocaleDomain&&(0,s.getDomainLocale)(p,S,n&&n.locales,n&&n.domainLocales);E.href=L||(0,s.addBasePath)((0,s.addLocale)(p,S,n&&n.defaultLocale))}return o.default.cloneElement(m,E)};t.default=f},eefG:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return p}));var r=n("nKUr"),c=n("1OyB"),o=n("vuIU"),s=n("Ji7U"),i=n("md7G"),a=n("foSv"),u=n("q1tI"),l=n.n(u);n("YFqc");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(a.a)(e);if(t){var c=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var d=function(e){Object(s.a)(n,e);var t=f(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("section",{className:"services-banner",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("h2",{children:"Services"}),Object(r.jsxs)("p",{children:["Specialist Mattress Systems offer you a various range of services to ",Object(r.jsx)("br",{}),"enable your patient\u2019s with the best care."]}),Object(r.jsxs)("h6",{children:["Your patient\u2019s needs are our ",Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"No 1 Priority."})]}),Object(r.jsx)("div",{className:"banner-txt",children:Object(r.jsxs)("p",{className:"call-ico",children:["To discuss any of the services below ",Object(r.jsx)("br",{}),"please contact ",Object(r.jsx)("span",{children:Object(r.jsx)("a",{href:"tel: "+this.props.service_phone,children:this.props.service_phone})})]})})]})})})}),Object(r.jsx)("section",{className:"abt-cntnt",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:this.props.loaded?this.props.service.map((function(e){return Object(r.jsx)("div",{className:"col-12 col-lg-6 d-flex mb-4",children:Object(r.jsxs)("div",{className:"card card-abt-cntnt",children:[Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h1",{className:"",children:e.s_title}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.s_desc}})]}),Object(r.jsx)("div",{className:"gray-sec",children:Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.s_quote}})})]})})})):""})})})]})}}]),n}(l.a.Component),p=!0;t.default=d},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return c}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,a=(0,c.useRef)(),u=(0,c.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,s=r.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!s&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=n("q1tI"),o=n("0G5g"),s="undefined"!==typeof IntersectionObserver;var i=new Map},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return c}))}},[["Am4Y",0,1,2]]]);