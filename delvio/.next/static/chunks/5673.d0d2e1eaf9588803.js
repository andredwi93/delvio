"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5673],{28500:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(20132),l=t(5724),r=/<(\w+) *>(.*?)<\/\1 *>|<(\w+) *\/>/,s=/(?:\r\n|\r|\n)/g;function i(e){var n=e.i18nKey,t=e.values,i=e.components,o=e.fallback,c=e.defaultTrans,p=e.ns,g=(0,l.Z)(p),x=g.t,u=g.lang;return(0,a.useMemo)(function(){var e=x(n,t,{fallback:o,default:c});return e&&i&&0!==i.length?function e(n,t){void 0===t&&(t=[]);var l=n.replace(s,"").split(r);if(1===l.length)return n;var i=[],o=l.shift();return o&&i.push(o),(function e(n){if(!n.length)return[];var t=n.slice(0,4),a=t[0],l=t[1],r=t[2];return[[a||r,l||"",t[3]]].concat(e(n.slice(4,n.length)))})(l).forEach(function(n,l){var r=n[0],s=n[1],o=n[2],c=t[r]||a.createElement(a.Fragment,null);i.push((0,a.cloneElement)(c,{key:l},s?e(s,t):c.props.children)),o&&i.push(o)}),i}(e,i):e},[n,t,i,u])}},26303:function(e,n,t){t.d(n,{Z:function(){return l}});var a=t(15311);function l(e){let{title:n,onClick:t,padding:l="py-[11px] px-5 lg:py-[13px] lg:px-[32px]",className:r,href:s,link:i}=e;return i?(0,a.jsx)("a",{href:s,target:"_blank",className:"".concat(l," ").concat(r," text-dark-green text-xsm lg:text-reg leading-[18px] lg:leading-[21px] poppins font-semibold bg-white rounded-[100px] border border-dark-green hover:bg-soft-green transition-all ease-in-out"),children:n}):(0,a.jsx)("button",{onClick:t,className:"".concat(l," ").concat(r," text-dark-green text-xsm lg:text-reg leading-[18px] lg:leading-[21px] poppins font-semibold bg-white rounded-[100px] border border-dark-green hover:bg-soft-green transition-all ease-in-out"),children:n})}},35673:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var a=t(15311),l=t(28500),r=t(26303);function s(){return(0,a.jsx)("section",{id:"get",className:"bg-light-white px-6 py-8 lg:px-0 lg:py-[80px]",children:(0,a.jsxs)("div",{className:"wrapper bg-white rounded-[32px] p-6 lg:p-[42px] flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-[60px]",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("h2",{className:"font-mono font-semibold text-xl leading-7 lg:text-4xl text-dark-green lg:leading-[57px]",children:(0,a.jsx)(l.Z,{i18nKey:"research:section3.title",components:[(0,a.jsx)("span",{className:"text-light-green"})]})}),(0,a.jsx)("p",{className:"font-sans font-normal text-xsm leading-[18px] lg:text-lg text-light-black lg:leading-[27px] mt-2 lg:mt-4",children:(0,a.jsx)(l.Z,{i18nKey:"research:section3.desc",components:[(0,a.jsx)("i",{})]})}),(0,a.jsx)(r.Z,{link:!0,href:"https://api.whatsapp.com/send/?phone=6281930563377&text=Halo!+Saya+tertarik+untuk+mengetahui+lebih+lanjut+tentang+layanan+Delvio.+Bisakah+Anda+membantu+saya?&type=phone_number&app_absent=0",title:(0,a.jsx)(l.Z,{i18nKey:"common:navbar.contact"}),className:"mt-6 lg:mt-8 inline-block"})]}),(0,a.jsx)("figure",{className:"w-[275px] h-[160px] lg:w-[350px] lg:h-[203px] object-cover mx-auto",children:(0,a.jsx)("img",{src:"/images/research/section-3.webp",alt:"section-3",className:"w-full"})})]})})}}}]);