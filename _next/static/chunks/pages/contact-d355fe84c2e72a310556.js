_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{ALdH:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));var r=t("nKUr"),c=t("ZHh6");function a(){return Object(r.jsx)("div",{children:Object(r.jsx)(c.a,{page:"contact"})})}},YFqc:function(e,n,t){e.exports=t("cTJO")},ZHh6:function(e,n,t){"use strict";var r=t("nKUr"),c=t("YFqc"),a=t.n(c);n.a=function(e){var n=e.page;return Object(r.jsx)("header",{id:"header",children:Object(r.jsx)("div",{className:"center",children:Object(r.jsx)("nav",{id:"mainNav",children:Object(r.jsxs)("ul",{className:"navContainer",children:[Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("a",{className:"mainName",children:Object(r.jsx)("b",{children:Object(r.jsx)("i",{children:"ibveecnk"})})})})}),Object(r.jsx)("li",{className:"about"==n?"active":"",children:Object(r.jsx)(a.a,{href:"/about",children:Object(r.jsx)("a",{children:"about"})})}),Object(r.jsx)("li",{className:"contact"==n?"active":"",children:Object(r.jsx)(a.a,{href:"/contact",children:Object(r.jsx)("a",{children:"contact"})})})]})})})})}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),c=t("284h");n.__esModule=!0,n.default=void 0;var a=c(t("q1tI")),o=t("elyg"),i=t("nOHt"),l=t("vNVm"),s={};function u(e,n,t,r){if(e&&(0,o.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),c=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,o.resolveHref)(c,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,o.resolveHref)(c,e.as):i||a}}),[c,e.href,e.as]),d=f.href,v=f.as,p=e.children,h=e.replace,b=e.shallow,j=e.scroll,m=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var O=a.Children.only(p),x=O&&"object"===typeof O&&O.ref,y=(0,l.useIntersection)({rootMargin:"200px"}),g=r(y,2),_=g[0],w=g[1],N=a.default.useCallback((function(e){_(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,_]);(0,a.useEffect)((function(){var e=w&&n&&(0,o.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,c=s[d+"%"+v+(r?"%"+r:"")];e&&!c&&u(t,d,v,{locale:r})}),[v,d,w,m,n,t]);var E={ref:N,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[c?"replace":"push"](t,r,{shallow:a,locale:l,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,v,h,b,j,m)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(t,d,v,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var L="undefined"!==typeof m?m:t&&t.locale,M=t&&t.isLocaleDomain&&(0,o.getDomainLocale)(v,L,t&&t.locales,t&&t.domainLocales);E.href=M||(0,o.addBasePath)((0,o.addLocale)(v,L,t&&t.defaultLocale))}return a.default.cloneElement(O,E)};n.default=f},lqnA:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t("ALdH")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,l=(0,c.useRef)(),s=(0,c.useState)(!1),u=r(s,2),f=u[0],d=u[1],v=(0,c.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:c,elements:r}),t}(t),c=r.id,a=r.observer,o=r.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){if(!o&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[v,f]};var c=t("q1tI"),a=t("0G5g"),o="undefined"!==typeof IntersectionObserver;var i=new Map}},[["lqnA",0,2,1]]]);