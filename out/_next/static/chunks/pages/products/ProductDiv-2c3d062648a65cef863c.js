_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"20a2":function(e,t,n){e.exports=n("nOHt")},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=l.length;s<u;s++){var d=l[s];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var p=a.props[d],f=r[d]||new Set;"name"===d&&c||!f.has(p)?(f.add(p),r[d]=f):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},OTRV:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("o0o1"),o=n.n(a),c=n("HaE+"),i=n("rePB"),s=n("q1tI"),u=(n("YFqc"),n("vDqi")),d=n.n(u),p=n("FGyW");n("jDDT");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}p.a.configure(),t.default=function(){var e=Object(s.useState)({name:"",phone:"",email:"",company:""}),t=e[0],n=e[1],a=Object(s.useState)({submitted:!1}),u=a[0],l=a[1],m=function(e){return n(f(f({},t),{},Object(i.a)({},e.target.name,e.target.value)))},h=function(){var e=Object(c.a)(o.a.mark((function e(r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l({submitted:!0}),(a=new FormData).append("name",t.name),a.append("email",t.email),a.append("phone",t.phone),a.append("company",t.company),d()({method:"post",url:"https://admin.specialistmattresssystems.com/api/home/enquirysub",data:a}).then((function(e){console.log(e.data.rs),0==e.data.rs?(p.a.error(e.data.errors.name),p.a.error(e.data.errors.email),p.a.error(e.data.errors.phone),p.a.error(e.data.errors.company),l({submitted:!1})):(p.a.success(e.data.msg),n({name:"",email:"",phone:"",company:""}),l({submitted:!1}))})).catch((function(e){console.log(e)})),r.preventDefault();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"enquire-form col-12",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col-12",children:Object(r.jsx)("h2",{children:"Make an enquiry"})}),Object(r.jsx)("form",{className:"custom-form",onSubmit:h,children:Object(r.jsx)("div",{className:"col-12 mt-2",children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-12 col-md-6",children:[Object(r.jsx)("input",{id:"name",name:"name",onChange:m,value:t.name,type:"text",className:"form-control  py-4 rounded-0",placeholder:"Name"}),Object(r.jsx)("input",{id:"email",name:"email",onChange:m,value:t.email,type:"text",className:"form-control  py-4 rounded-0",placeholder:"Email"})]}),Object(r.jsxs)("div",{className:"col-12 col-md-6",children:[Object(r.jsx)("input",{id:"phone",name:"phone",onChange:m,value:t.phone,type:"text",className:"form-control py-4 rounded-0",placeholder:"Phone"}),Object(r.jsx)("input",{id:"company",name:"company",onChange:m,value:t.company,type:"text",className:"form-control py-4 rounded-0",placeholder:"Company"}),Object(r.jsx)("span",{id:"spinner",style:{display:"none"},children:Object(r.jsx)("i",{className:"fa fa-spin fa-spinner"})}),u.submitted?Object(r.jsx)("img",{height:"100",width:"100",src:"https://admin.specialistmattresssystems.com/assets/admin/images/spinner.gif",alt:"image"}):Object(r.jsx)("button",{className:"btn btn-primary d-flex align-items-center rounded-0 px-3 send-btn",children:"SEND"})]})]})})})]})})})}},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},T5Xs:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/ProductDiv",function(){return n("dSC5")}])},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),p=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=p},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},dSC5:function(e,t,n){"use strict";n.r(t);var r=n("nKUr");n("q1tI"),n("YFqc"),n("20a2"),n("g4pe"),n("vDqi"),n("jDDT"),n("OTRV");t.default=function(e){return console.log(e.slug),Object(r.jsx)("div",{children:e.path})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a}},[["T5Xs",0,1,2,3,4,5]]]);