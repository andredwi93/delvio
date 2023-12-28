exports.id=9532,exports.ids=[9532],exports.modules={1766:(e,t,n)=>{"use strict";e.exports=n(9849).vendored.contexts.AppRouterContext},9532:(e,t,n)=>{e.exports=n(2125)},8338:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return r},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return f},ACTION_FAST_REFRESH:function(){return a},ACTION_SERVER_ACTION:function(){return i},isThenable:function(){return c}});let r="refresh",o="navigate",u="restore",l="server-patch",f="prefetch",a="fast-refresh",i="server-action";function c(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3346:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}});let r=n(3947);function o(e,t,o,u){{let l=n(4507).normalizeLocalePath,f=n(6550).detectDomainLocale,a=t||l(e,o).detectedLocale,i=f(u,void 0,a);if(i){let t="http"+(i.http?"":"s")+"://",n=a===i.defaultLocale?"":"/"+a;return""+t+i.domain+(0,r.normalizePathTrailingSlash)(""+n+e)}return!1}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2125:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=n(167)._(n(6689)),o=n(40),u=n(7618),l=n(8967),f=n(9170),a=n(6240),i=n(7715),c=n(1766),s=n(9054),d=n(3346),p=n(7499),b=n(8338);function y(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let v=r.default.forwardRef(function(e,t){let n,l;let{href:v,as:_,children:h,prefetch:O=null,passHref:g,replace:m,shallow:j,scroll:P,locale:E,onClick:C,onMouseEnter:M,onTouchStart:T,legacyBehavior:R=!1,...A}=e;n=h,R&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let x=r.default.useContext(i.RouterContext),L=r.default.useContext(c.AppRouterContext),I=null!=x?x:L,S=!x,N=!1!==O,k=null===O?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:U,as:K}=r.default.useMemo(()=>{if(!x){let e=y(v);return{href:e,as:_?y(_):e}}let[e,t]=(0,o.resolveHref)(x,v,!0);return{href:e,as:_?(0,o.resolveHref)(x,_):t||e}},[x,v,_]),F=r.default.useRef(U),H=r.default.useRef(K);R&&(l=r.default.Children.only(n));let w=R?l&&"object"==typeof l&&l.ref:t,[z,D,V]=(0,s.useIntersection)({rootMargin:"200px"}),q=r.default.useCallback(e=>{(H.current!==K||F.current!==U)&&(V(),H.current=K,F.current=U),z(e),w&&("function"==typeof w?w(e):"object"==typeof w&&(w.current=e))},[K,w,U,V,z]);r.default.useEffect(()=>{},[K,U,D,E,N,null==x?void 0:x.locale,I,S,k]);let B={ref:q,onClick(e){R||"function"!=typeof C||C(e),R&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,o,l,f,a,i,c){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[l?"replace":"push"](n,o,{shallow:f,locale:i,scroll:e}):t[l?"replace":"push"](o||n,{scroll:e})};c?r.default.startTransition(d):d()}(e,I,U,K,m,j,P,E,S)},onMouseEnter(e){R||"function"!=typeof M||M(e),R&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e)},onTouchStart(e){R||"function"!=typeof T||T(e),R&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e)}};if((0,f.isAbsoluteUrl)(K))B.href=K;else if(!R||g||"a"===l.type&&!("href"in l.props)){let e=void 0!==E?E:null==x?void 0:x.locale,t=(null==x?void 0:x.isLocaleDomain)&&(0,d.getDomainLocale)(K,e,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);B.href=t||(0,p.addBasePath)((0,a.addLocale)(K,e,null==x?void 0:x.defaultLocale))}return R?r.default.cloneElement(l,B):r.default.createElement("a",{...A,...B},n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4507:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}});let r=(e,t)=>n(5316).normalizeLocalePath(e,t);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9054:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(6689),o=n(5937),u="function"==typeof IntersectionObserver,l=new Map,f=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,i=a||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(i||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}};