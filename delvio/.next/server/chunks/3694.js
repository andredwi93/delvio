"use strict";exports.id=3694,exports.ids=[3694],exports.modules={9036:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(997);function r({title:e,onClick:t,type:l="button",padding:r="py-[11px] px-5 lg:py-[13px] lg:px-[32px]",className:s,href:i,link:x}){return x?n.jsx("a",{href:i,target:"_blank",className:`${r} ${s} text-white text-xsm lg:text-reg leading-[18px] mdleading-[21px] poppins font-semibold bg-dark-green rounded-[100px] hover:bg-light-green transition-all ease-in-out`,children:e}):n.jsx("button",{type:l,onClick:t,className:`${r} ${s} text-white text-xsm lg:text-reg leading-[18px] mdleading-[21px] poppins font-semibold bg-dark-green rounded-[100px] hover:bg-light-green transition-all ease-in-out`,children:e})}},3399:(e,t,l)=>{l.d(t,{Z:()=>i});var n=l(997);function r({title:e,onClick:t,padding:l="py-[11px] px-5 lg:py-[13px] lg:px-[32px]",className:r}){return n.jsx("button",{onClick:t,className:`${l} ${r} text-dark-green text-xsm lg:text-reg leading-[18px] lg:leading-[21px] poppins font-semibold rounded-[100px] border border-light-white hover:bg-light-white hover:border hover:border-dark-green transition-all ease-in-out`,children:e})}var s=l(9036);function i({title:e,desc:t,onGetStart:l,onLearn:i,titlePrimary:x,titleOutline:a}){return(0,n.jsxs)("div",{className:"flex-1",children:[n.jsx("h3",{className:"text-med lg:text-4xl text-dark-green leading-[21px] lg:leading-[57px] font-mono font-semibold",children:e}),n.jsx("p",{className:"text-xsm leading-[18px] lg:text-lg lg:leading-[27px] mt-2 lg:mt-4 text-light-black font-sans font-normal",children:t}),(0,n.jsxs)("div",{className:"flex items-center gap-3 mt-6 lg:mt-8",children:[n.jsx(s.Z,{title:x,onClick:l}),n.jsx(r,{title:a,onClick:i})]})]})}},3694:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var n=l(997),r=l(3399),s=l(5284),i=l.n(s),x=l(866),a=l.n(x),o=l(4137),d=l.n(o);let g={src:"/_next/static/media/section-1-survey.d994f9b5.webp",height:1227,width:1600,blurDataURL:"data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSCsAAAABUBIATLNC82iq0QaJXQZCTIL6T/0QETEBIAuzVYBhvYLWl+Zv+p/T/WsAAFZQOCBaAAAA0AEAnQEqCAAGAAJAOCWwAnQA9DGLQAAA/sj/xUF8Cd5e21tAlstVlyQZZyMzhNa/UV8ezd9B3kru582A58AEc+nx3cVtJjb7/GqXT++scOai/yb/B0gwpAAA",blurWidth:8,blurHeight:6};var p=l(5600);function c(){let{t:e}=a()("common"),t=(0,p.useRouter)();return(0,n.jsxs)("div",{className:"flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-[60px] text-center lg:text-left",children:[n.jsx(r.Z,{title:n.jsx(d(),{i18nKey:"home:section1.tab2.title",components:[n.jsx("i",{})]}),desc:n.jsx(d(),{i18nKey:"home:section1.tab2.desc",components:[n.jsx("i",{})]}),titlePrimary:e("tryFree"),titleOutline:e("btnFitur"),onGetStart:()=>t.push("/#demo"),onLearn:()=>t.push("/survey")}),n.jsx("figure",{className:"w-[180px] h-[138px] lg:w-[400px] lg:h-[306px] object-cover",children:n.jsx(i(),{src:g,priority:"low",sizes:"100vw",style:{width:"100%",height:"auto"},alt:"section survey",placeholder:"blur"})})]})}}};