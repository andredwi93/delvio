(()=>{var e={};e.id=2521,e.ids=[2521,2888,660],e.modules={7655:(e,t,r)=>{var n={"./en/about":[9740,9740],"./en/about.json":[9740,9740],"./en/common":[464,464],"./en/common.json":[464,464],"./en/home":[2482,2482],"./en/home.json":[2482,2482],"./en/research":[5803,5803],"./en/research.json":[5803,5803],"./en/service":[2675,2675],"./en/service.json":[2675,2675],"./id/about":[9146,9146],"./id/about.json":[9146,9146],"./id/common":[1610,1610],"./id/common.json":[1610,1610],"./id/home":[6903,6903],"./id/home.json":[6903,6903],"./id/research":[1547,1547],"./id/research.json":[1547,1547],"./id/service":[4284,4284],"./id/service.json":[4284,4284]};function s(e){if(!r.o(n,e))return Promise.resolve().then(()=>{var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],s=t[0];return r.e(t[1]).then(()=>r.t(s,19))}s.keys=()=>Object.keys(n),s.id=7655,e.exports=s},4451:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4278:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},9178:(e,t,r)=>{"use strict";e.exports=r(9849).vendored.contexts.Loadable},8708:(e,t,r)=>{e.exports=r(6369)},3055:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>_,default:()=>P,getServerSideProps:()=>S,getStaticPaths:()=>j,getStaticProps:()=>g,reportWebVitals:()=>y,routeModule:()=>G,unstable_getServerProps:()=>E,unstable_getServerSideProps:()=>O,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>A,unstable_getStaticProps:()=>q});var n={};r.r(n),r.d(n,{default:()=>h,getStaticProps:()=>v});var s=r(9849),o=r(4278),a=r(4451),i=r(2677),l=r(8091),u=r(997),d=r(608),c=r(7462),p=r.n(c),f=r(8708),m=r.n(f);let x=m()(()=>r.e(8084).then(r.bind(r,8084)),{loadableGenerated:{modules:["about\\index.js -> @/components/PageLayout"]}}),b=m()(()=>r.e(1250).then(r.bind(r,1250)),{loadableGenerated:{modules:["about\\index.js -> @/components/About"]}});function h(){return u.jsx(x,{title:"About Service",children:u.jsx(b,{})})}async function v(e){return{props:{...await p()({...e,...d,pathname:"/about/index",loaderName:"getStaticProps",loadLocaleFrom:d&&d.loadLocaleFrom||((e,t)=>r(7655)(`./${e}/${t}`).then(e=>e.default))})}}}let P=(0,a.l)(n,"default"),g=(0,a.l)(n,"getStaticProps"),j=(0,a.l)(n,"getStaticPaths"),S=(0,a.l)(n,"getServerSideProps"),_=(0,a.l)(n,"config"),y=(0,a.l)(n,"reportWebVitals"),q=(0,a.l)(n,"unstable_getStaticProps"),A=(0,a.l)(n,"unstable_getStaticPaths"),w=(0,a.l)(n,"unstable_getStaticParams"),E=(0,a.l)(n,"unstable_getServerProps"),O=(0,a.l)(n,"unstable_getServerSideProps"),G=new s.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/about",pathname:"/about",bundlePath:"",filename:""},components:{App:l.default,Document:i.default},userland:n})},4887:(e,t,r)=>{"use strict";r.d(t,{F:()=>l,Z:()=>u});var n=r(997),s=r(6689),o=r.n(s),a=r(5600),i=r.n(a);let l=o().createContext(!1),u=e=>{let[t,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{i().events.on("routeChangeComplete",()=>{window.scrollTo(0,0)}),r(window.innerWidth<991),window.addEventListener("resize",()=>{r(window.innerWidth<991)})},[]),n.jsx(l.Provider,{value:t,children:e.children})}},6369:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return i},default:function(){return l}});let n=r(167),s=n._(r(6689)),o=n._(r(9178));function a(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){delete t.webpack,delete t.modules;let r=t.loading;return()=>s.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function l(e,t){let r=o.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let s=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=s?s().then(a):Promise.resolve(a(()=>null))}):(delete n.webpack,delete n.modules,i(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8091:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var n=r(997),s=r(6332),o=r.n(s),a=r(4590),i=r.n(a),l=r(608);let u=require("next-translate/appWithI18n");var d=r.n(u);let c=require("nextjs-progressbar");var p=r.n(c);r(6764);var f=r(4887);function m({children:e}){return n.jsx(f.Z,{children:e})}let x=d()(function({Component:e,pageProps:t}){return n.jsx("main",{className:`${o().variable} ${i().variable}`,children:(0,n.jsxs)(m,{children:[n.jsx(p(),{color:"#58B276"}),n.jsx(e,{...t})]})})},{...l,isLoader:!0,skipInitialProps:!0,loadLocaleFrom:l&&l.loadLocaleFrom||((e,t)=>r(7655)(`./${e}/${t}`).then(e=>e.default))})},2677:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(997),s=r(1507);function o(){return(0,n.jsxs)(s.Html,{lang:"en",style:{scrollBehavior:"smooth"},children:[(0,n.jsxs)(s.Head,{children:[n.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),n.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),n.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),n.jsx("link",{rel:"manifest",href:"/site.webmanifest"})]}),(0,n.jsxs)("body",{children:[n.jsx(s.Main,{}),n.jsx(s.NextScript,{})]})]})}},6764:()=>{},4137:e=>{"use strict";e.exports=require("next-translate/Trans")},7462:e=>{"use strict";e.exports=require("next-translate/loadNamespaces")},5508:e=>{"use strict";e.exports=require("next-translate/setLanguage")},866:e=>{"use strict";e.exports=require("next-translate/useTranslation")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7412:e=>{"use strict";e.exports=import("@radix-ui/react-accordion")},6774:e=>{"use strict";e.exports=import("@radix-ui/react-navigation-menu")},3554:e=>{"use strict";e.exports=import("react-select")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")},608:e=>{"use strict";e.exports=JSON.parse('{"locales":["id","en"],"defaultLocale":"id","pages":{"*":["common"],"/":["home"],"/research":["research"],"/survey":["service"],"/about":["about"]}}')}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[5524,4291,1507],()=>r(3055));module.exports=n})();