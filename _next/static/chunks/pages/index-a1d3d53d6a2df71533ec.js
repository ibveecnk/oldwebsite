_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{RNiq:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o}));var r=t("nKUr"),c=t("ZHh6");var a=function(e){var n=e.text;return Object(r.jsx)("div",{className:"tWrapper",children:Object(r.jsx)("h1",{className:"title",children:n||""})})};function o(){return Object(r.jsxs)("div",{className:"Wrapper",children:[Object(r.jsx)(c.a,{page:"index"}),Object(r.jsxs)("div",{className:"cWrapper",children:[Object(r.jsx)(a,{text:"ibveecnk's page"}),Object(r.jsx)("p",{children:"Welcome to my website, which is currently under construction."}),Object(r.jsx)("p",{children:"It is constructed using next.js"})]})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},ZHh6:function(e,n,t){"use strict";var r=t("nKUr"),c=t("YFqc"),a=t.n(c);n.a=function(e){var n=e.page;return Object(r.jsx)("header",{id:"header",children:Object(r.jsx)("div",{className:"center",children:Object(r.jsx)("nav",{id:"mainNav",children:Object(r.jsxs)("ul",{className:"navContainer",children:[Object(r.jsx)("li",{className:"mainLi",children:Object(r.jsx)(a.a,{href:"/",children:Object(r.jsx)("a",{className:"mainName",children:Object(r.jsx)("b",{children:"ibveecnk"})})})}),Object(r.jsx)("li",{className:"about"==n?"active":"",children:Object(r.jsx)(a.a,{href:"/about",children:Object(r.jsx)("a",{children:"about"})})}),Object(r.jsx)("li",{className:"contact"==n?"active":"",children:Object(r.jsx)(a.a,{href:"/contact",children:Object(r.jsx)("a",{children:"contact"})})})]})})})})}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),c=t("284h");n.__esModule=!0,n.default=void 0;var a=c(t("q1tI")),o=t("elyg"),i=t("nOHt"),s=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,o.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),c=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,o.resolveHref)(c,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,o.resolveHref)(c,e.as):i||a}}),[c,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,j=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var x=a.Children.only(v),O=x&&"object"===typeof x&&x.ref,N=(0,s.useIntersection)({rootMargin:"200px"}),y=r(N,2),g=y[0],w=y[1],_=a.default.useCallback((function(e){g(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,g]);(0,a.useEffect)((function(){var e=w&&n&&(0,o.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,c=l[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(t,d,p,{locale:r})}),[p,d,w,m,n,t]);var E={ref:_,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[c?"replace":"push"](t,r,{shallow:a,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,h,j,b,m)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var L="undefined"!==typeof m?m:t&&t.locale,M=t&&t.isLocaleDomain&&(0,o.getDomainLocale)(p,L,t&&t.locales,t&&t.domainLocales);E.href=M||(0,o.addBasePath)((0,o.addLocale)(p,L,t&&t.defaultLocale))}return a.default.cloneElement(x,E)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,s=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:c,elements:r}),t}(t),c=r.id,a=r.observer,o=r.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),i.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){if(!o&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=t("q1tI"),a=t("0G5g"),o="undefined"!==typeof IntersectionObserver;var i=new Map},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1]]]);