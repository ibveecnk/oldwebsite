_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{D85t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("RHEb")}])},LQbt:function(e,t,n){e.exports={container:"Projects_container__5dFV2",item:"Projects_item__1vXUZ",projectName:"Projects_projectName__3x-DT",info:"Projects_info__3rYzx",description:"Projects_description__1loMz"}},RHEb:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n("nKUr"),i=n("W9HR"),o=n("LQbt"),u=n.n(o),c=n("5Yp1"),a=n("q1tI"),s=Object.prototype.hasOwnProperty;var f=new WeakMap,l=0;var d=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):f.has(e[n])?r=f.get(e[n]):(r=l,f.set(e[n],l++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.subs.push(e),function(){if(n){n=!1;var r=t.subs.indexOf(e);r>-1&&(t.subs[r]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),h=!0,p={isOnline:function(){return h},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){h=!0,e()}),!1),window.addEventListener("offline",(function(){return h=!1}),!1))}},v=function(){return(v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},b=new d;var y="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),g=v({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount,8),u=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,u,i)}},errorRetryInterval:1e3*(y?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(y?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,i;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((i=t.length)===n.length)for(;i--&&e(t[i],n[i]););return-1===i}if(!r||"object"===typeof t){for(r in i=0,t){if(s.call(t,r)&&++i&&!s.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===i}}return t!==t&&n!==n},isPaused:function(){return!1}},p),j="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),m=j?null:window.requestAnimationFrame||function(e){return setTimeout(e,1)},O=j?a.useEffect:a.useLayoutEffect,w=Object(a.createContext)({});w.displayName="SWRConfigContext";var x=w,_=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(t){o(t)}}function c(e){try{a(r.throw(e))}catch(t){o(t)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,c)}a((r=r.apply(e,t||[])).next())}))},E=function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},R={},T={},P={},N={},V={},k={},D={},C=function(){var e=0;return function(){return++e}}();if(!j){var I=function(e){if(g.isDocumentVisible()&&g.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof g.registerOnFocus&&g.registerOnFocus((function(){return I(P)})),"function"===typeof g.registerOnReconnect&&g.registerOnReconnect((function(){return I(N)}))}var S=function(e,t){void 0===t&&(t=!0);var n=b.serializeKey(e),r=n[0],i=n[2],o=n[3];if(!r)return Promise.resolve();var u=V[r];if(r&&u){for(var c=b.get(r),a=b.get(i),s=b.get(o),f=[],l=0;l<u.length;++l)f.push(u[l](t,c,a,s,l>0));return Promise.all(f).then((function(){return b.get(r)}))}return Promise.resolve(b.get(r))},L=function(e,t,n,r){var i=V[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,n,r)},W=function(e,t,n){return void 0===n&&(n=!0),_(void 0,void 0,void 0,(function(){var r,i,o,u,c,a,s,f,l,d,h,p,v;return E(this,(function(y){switch(y.label){case 0:if(r=b.serializeKey(e),i=r[0],o=r[2],!i)return[2];if("undefined"===typeof t)return[2,S(e,n)];if(k[i]=C()-1,D[i]=0,u=k[i],c=T[i],f=!1,t&&"function"===typeof t)try{t=t(b.get(i))}catch(g){t=void 0,s=g}if(!t||"function"!==typeof t.then)return[3,5];f=!0,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,t];case 2:return a=y.sent(),[3,4];case 3:return l=y.sent(),s=l,[3,4];case 4:return[3,6];case 5:a=t,y.label=6;case 6:if((d=function(){if(u!==k[i]||c!==T[i]){if(s)throw s;return!0}})())return[2,a];if("undefined"!==typeof a&&b.set(i,a),b.set(o,s),D[i]=C()-1,!f&&d())return[2,a];if(h=V[i]){for(p=[],v=0;v<h.length;++v)p.push(h[v](!!n,a,s,void 0,v>0));return[2,Promise.all(p).then((function(){if(s)throw s;return b.get(i)}))]}if(s)throw s;return[2,a]}}))}))};x.Provider;var z=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=t[0],i=Object.assign({},g,Object(a.useContext)(x),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),o=t.length>2||2===t.length&&"function"===typeof t[1]||null===t[1]?t[1]:i.fetcher,u=b.serializeKey(r),c=u[0],s=u[1],f=u[2],l=u[3],d=Object(a.useRef)(i);O((function(){d.current=i}));var h=function(){return i.revalidateOnMount||!i.initialData&&void 0===i.revalidateOnMount},p=function(){var e=b.get(c);return"undefined"===typeof e?i.initialData:e},v=function(){return!!b.get(l)||c&&h()},y=p(),w=b.get(f),I=v(),S=Object(a.useRef)({data:!1,error:!1,isValidating:!1}),z=Object(a.useRef)({data:y,error:w,isValidating:I});Object(a.useDebugValue)(z.current.data);var K,H,F=Object(a.useState)({})[1],M=Object(a.useCallback)((function(e){var t=!1;for(var n in e)z.current[n]!==e[n]&&(z.current[n]=e[n],S.current[n]&&(t=!0));if(t){if(A.current||!q.current)return;F({})}}),[]),A=Object(a.useRef)(!1),Y=Object(a.useRef)(c),q=Object(a.useRef)(!1),U=Object(a.useCallback)((function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];A.current||q.current&&c===Y.current&&(t=d.current)[e].apply(t,n)}),[c]),X=Object(a.useCallback)((function(e,t){return W(Y.current,e,t)}),[]),G=function(e,t){return e[c]?e[c].push(t):e[c]=[t],function(){var n=e[c],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},J=Object(a.useCallback)((function(t){return void 0===t&&(t={}),_(e,void 0,void 0,(function(){var e,n,r,u,a,h,p,v,y,g;return E(this,(function(j){switch(j.label){case 0:if(!c||!o)return[2,!1];if(A.current)return[2,!1];if(d.current.isPaused())return[2,!1];e=t.retryCount,n=void 0===e?0:e,r=t.dedupe,u=void 0!==r&&r,a=!0,h="undefined"!==typeof R[c]&&u,j.label=1;case 1:return j.trys.push([1,6,,7]),M({isValidating:!0}),b.set(l,!0),h||L(c,z.current.data,z.current.error,!0),p=void 0,v=void 0,h?(v=T[c],[4,R[c]]):[3,3];case 2:return p=j.sent(),[3,5];case 3:return i.loadingTimeout&&!b.get(c)&&setTimeout((function(){a&&U("onLoadingSlow",c,i)}),i.loadingTimeout),R[c]=null!==s?o.apply(void 0,s):o(c),T[c]=v=C(),[4,R[c]];case 4:p=j.sent(),setTimeout((function(){delete R[c],delete T[c]}),i.dedupingInterval),U("onSuccess",p,c,i),j.label=5;case 5:return T[c]>v?[2,!1]:k[c]&&(v<=k[c]||v<=D[c]||0===D[c])?(M({isValidating:!1}),[2,!1]):(b.set(f,void 0),b.set(l,!1),y={isValidating:!1},"undefined"!==typeof z.current.error&&(y.error=void 0),i.compare(z.current.data,p)||(y.data=p,b.set(c,p)),M(y),h||L(c,p,y.error,!1),[3,7]);case 6:return g=j.sent(),delete R[c],delete T[c],d.current.isPaused()?(M({isValidating:!1}),[2,!1]):(b.set(f,g),z.current.error!==g&&(M({isValidating:!1,error:g}),h||L(c,void 0,g,!1)),U("onError",g,c,i),i.shouldRetryOnError&&U("onErrorRetry",g,c,i,J,{retryCount:n+1,dedupe:!0}),[3,7]);case 7:return a=!1,[2,!0]}}))}))}),[c]);if(O((function(){if(c){A.current=!1;var e=q.current;q.current=!0;var t=z.current.data,n=p();Y.current=c,i.compare(t,n)||M({data:n});var r=function(){return J({dedupe:!0})};(e||h())&&("undefined"===typeof n||j?r():m(r));var o=!1,u=G(P,(function(){!o&&d.current.revalidateOnFocus&&(o=!0,r(),setTimeout((function(){return o=!1}),d.current.focusThrottleInterval))})),a=G(N,(function(){d.current.revalidateOnReconnect&&r()})),s=G(V,(function(e,t,n,o,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var c={},a=!1;return"undefined"===typeof t||i.compare(z.current.data,t)||(c.data=t,a=!0),z.current.error!==n&&(c.error=n,a=!0),"undefined"!==typeof o&&z.current.isValidating!==o&&(c.isValidating=o,a=!0),a&&M(c),!!e&&(u?r():J())}));return function(){M=function(){return null},A.current=!0,u(),a(),s()}}}),[c,J]),O((function(){var t=null,n=function(){return _(e,void 0,void 0,(function(){return E(this,(function(e){switch(e.label){case 0:return z.current.error||!d.current.refreshWhenHidden&&!d.current.isDocumentVisible()||!d.current.refreshWhenOffline&&!d.current.isOnline()?[3,2]:[4,J({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return d.current.refreshInterval&&t&&(t=setTimeout(n,d.current.refreshInterval)),[2]}}))}))};return d.current.refreshInterval&&(t=setTimeout(n,d.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[i.refreshInterval,i.refreshWhenHidden,i.refreshWhenOffline,J]),i.suspense){if(K=b.get(c),H=b.get(f),"undefined"===typeof K&&(K=y),"undefined"===typeof H&&(H=w),"undefined"===typeof K&&"undefined"===typeof H){if(R[c]||J(),R[c]&&"function"===typeof R[c].then)throw R[c];K=R[c]}if("undefined"===typeof K&&H)throw H}var Q=Object(a.useMemo)((function(){var e={revalidate:J,mutate:X};return Object.defineProperties(e,{error:{get:function(){return S.current.error=!0,i.suspense?H:Y.current===c?z.current.error:w},enumerable:!0},data:{get:function(){return S.current.data=!0,i.suspense?K:Y.current===c?z.current.data:y},enumerable:!0},isValidating:{get:function(){return S.current.isValidating=!0,!!c&&z.current.isValidating},enumerable:!0}}),e}),[J,y,w,X,c,i.suspense,H,K]);return Q};var K=z,H=n("YFqc"),F=n.n(H);function M(){var e=K("https://api.github.com/users/ibveecnk/repos"),t=e.data;return e.error?Object(r.jsx)("div",{children:"failed to load"}):t?"https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting"==t.documentation_url?Object(r.jsx)("div",{children:"You have been ratelimited by GitHub, please check back later."}):Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:u.a.info,children:["Total repos: ",t.length]}),Object(r.jsx)("ul",{className:u.a.container,children:t.map((function(e,t){return Object(r.jsx)("li",{className:u.a.item,children:Object(r.jsxs)("div",{className:u.a.projectWrapper,children:[Object(r.jsx)(F.a,{href:e.html_url,children:Object(r.jsx)("span",{className:u.a.projectName,children:Object(r.jsx)("b",{children:e.name})})}),e.description?Object(r.jsx)("span",{className:u.a.description,children:" "+e.description}):Object(r.jsx)("span",{className:u.a.description,children:" No description was provided!"})]})},t)}))})]}):Object(r.jsx)("div",{children:"loading..."})}function A(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(c.a,{content:null,title:"projects"}),Object(r.jsx)(i.a,{text:"Projects"}),Object(r.jsx)("p",{children:"Here you can find a list of my projects which I open-sourced on github - some are great and some are even better."}),M()]})}},W9HR:function(e,t,n){"use strict";var r=n("nKUr");t.a=function(e){var t=e.text;return Object(r.jsx)("div",{className:"tWrapper",children:Object(r.jsx)("h1",{className:"title",children:t||""})})}}},[["D85t",0,2,1,3]]]);