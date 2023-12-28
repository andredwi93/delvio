exports.id=5540,exports.ids=[5540],exports.modules={7670:e=>{e.exports={AccordionChevron:"faq_AccordionChevron__ob72v",AccordionTrigger:"faq_AccordionTrigger__Z2vGu"}},3733:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});let a={src:"/_next/static/media/logo.8243e3de.svg",height:44,width:100,blurWidth:0,blurHeight:0}},6421:(e,t,s)=>{"use strict";s.d(t,{X:()=>n});var a=s(4887),l=s(6689);let n={option:(e,{isSelected:t})=>({...e,background:t?"#DEF2E6":"#fff",borderRadius:"11px",marginBottom:"12px","&:nth-child(2)":{marginBottom:"0"}}),menu:e=>((0,l.useContext)(a.F),{...e,width:"200px",padding:"8px",right:"0",borderRadius:"11px"}),valueContainer:e=>((0,l.useContext)(a.F),{...e,padding:"0",width:"100%"}),control:e=>((0,l.useContext)(a.F),{...e,padding:"0",border:"none",boxShadow:"none",width:"100%","&:hover":{boxShadow:"none",cursor:"pointer"}}),singleValue:e=>((0,l.useContext)(a.F),{...e,margin:"0"}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:(e,t)=>({...e,transition:"all .2s ease",transform:t.selectProps.menuIsOpen?"rotate(180deg)":null})}},6348:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(997),l=s(9532),n=s.n(l);function i({href:e,title:t}){return a.jsx(n(),{href:e,className:"font-sans font-medium text-2xsm leading-[15px] lg:text-sm lg:leading-5 text-grey hover:text-light-green",children:t})}},4910:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(997),l=s(9532),n=s.n(l);function i({href:e,icon:t,title:s,desc:l,isActive:i}){return a.jsx("li",{className:"flex-1",children:(0,a.jsxs)(n(),{href:e,className:`flex gap-2 hover:bg-soft-green p-3 rounded-xl ${i?"bg-soft-green":"bg-white"}`,children:[a.jsx("figure",{className:"w-6 h-6 object-cover",children:a.jsx("img",{src:`/images/icons/ic-product-${t}.svg`,alt:`ic-${t}`,className:"w-full h-full"})}),(0,a.jsxs)("div",{children:[a.jsx("h3",{className:"font-sans font-semibold text-xsm leading-5 text-dark-green",children:s}),a.jsx("p",{className:"font-sans font-normal text-2xsm leading-[15px] text-grey",children:l})]})]})})}},9749:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>d});var l=s(997),n=s(7412),i=s(7670),r=s.n(i),o=e([n]);function d({item:e,title:t,children:s,isActive:a}){return(0,l.jsxs)(n.Item,{value:e,className:"py-3 border-b border-b-light-white",children:[l.jsx(n.Header,{children:(0,l.jsxs)(n.Trigger,{className:`flex items-center gap-3 w-full group text-left ${r().AccordionTrigger}`,children:[l.jsx("h3",{className:`flex-1 font-sans font-semibold text-sm leading-5 text-grey group-data-[state=open]:text-light-green ${a?"text-light-green":"text-grey"}`,children:t}),l.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180 fill-grey group-data-[state=open]:fill-light-green ${a?"fill-light-green":"fill-grey"}`,children:l.jsx("path",{d:"M9 9.67809L13.071 5.58279C13.5121 5.13907 14.2281 5.13907 14.6692 5.58279C15.1103 6.02651 15.1103 6.74675 14.6692 7.19047L9.75326 12.1357C9.33668 12.5548 8.66226 12.5548 8.24674 12.1357L3.33082 7.19047C2.88973 6.74675 2.88973 6.02651 3.33082 5.58279C3.77191 5.13907 4.48788 5.13907 4.92897 5.58279L9 9.67809Z"})})]})}),l.jsx(n.Content,{children:s})]})}n=(o.then?(await o)():o)[0],a()}catch(e){a(e)}})},7528:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>u});var l=s(997),n=s(7412),i=s(4137),r=s.n(i),o=s(866),d=s.n(o),c=s(9749),x=s(4910),m=s(6348),h=s(9532),g=s.n(h),f=s(5600),p=e([n,c]);function u(){let{t:e}=d()(),t=(0,f.useRouter)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.Root,{type:"single",collapsible:!0,className:"mt-8 mb-3",children:[l.jsx(c.Z,{item:"item-1",title:e("common:navbar.product"),isActive:"/research"===t.pathname||"/survey"===t.pathname,children:(0,l.jsxs)("ul",{className:"w-full flex flex-col gap-2 mt-3",children:[l.jsx(x.Z,{isActive:"/research"===t.pathname,href:"/research",icon:"research",title:e("common:navbar.ddProduct.card1.title"),desc:e("common:navbar.ddProduct.card1.desc")}),l.jsx(x.Z,{isActive:"/survey"===t.pathname,href:"/survey",icon:"survey",title:e("common:navbar.ddProduct.card2.title"),desc:e("common:navbar.ddProduct.card2.desc")})]})}),l.jsx(c.Z,{item:"item-2",title:e("common:navbar.solution"),children:(0,l.jsxs)("ul",{className:"w-full flex flex-col gap-3 mt-2",children:[l.jsx("li",{className:"flex-1",children:(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[l.jsx("h4",{className:"font-sans font-semibold text-xsm leading-[18px] text-light-black",children:e("common:navbar.ddSolution.left.title")}),l.jsx("div",{className:"px-2 py-1 bg-[#3E6FE61A] bg-opacity-10 rounded-[100px] text-dark-blue font-sans font-semibold text-2xsm leading-[15px]",children:e("common:navbar.coming")})]}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[l.jsx(m.Z,{href:"#",title:l.jsx(r(),{i18nKey:"common:navbar.ddSolution.left.list1",components:[l.jsx("i",{})]})}),l.jsx(m.Z,{href:"#",title:l.jsx(r(),{i18nKey:"common:navbar.ddSolution.left.list2",components:[l.jsx("i",{})]})}),l.jsx(m.Z,{href:"#",title:l.jsx(r(),{i18nKey:"common:navbar.ddSolution.left.list3"})}),l.jsx(m.Z,{href:"#",title:l.jsx(r(),{i18nKey:"common:navbar.ddSolution.left.list4"})}),l.jsx(m.Z,{href:"#",title:l.jsx(r(),{i18nKey:"common:navbar.ddSolution.left.list5",components:[l.jsx("i",{})]})}),l.jsx(m.Z,{href:"#",title:l.jsx(r(),{i18nKey:"common:navbar.ddSolution.left.list6",components:[l.jsx("i",{})]})})]}),(0,l.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[l.jsx(m.Z,{href:"#",title:l.jsx(r(),{i18nKey:"common:navbar.ddSolution.left.list7",components:[l.jsx("i",{})]})}),l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.left.list8")}),l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.left.list9")}),l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.left.list10")}),l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.left.list11")}),l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.left.list12")})]})]})]})}),l.jsx("li",{className:"flex-1",children:(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[l.jsx("h4",{className:"font-sans font-semibold text-xsm leading-[18px] text-light-black",children:e("common:navbar.ddSolution.right.title")}),l.jsx("div",{className:"px-2 py-1 bg-[#3E6FE61A] bg-opacity-10 rounded-[100px] text-dark-blue font-sans font-semibold text-2xsm leading-[15px]",children:e("common:navbar.coming")})]}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.right.list1")}),l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.right.list2")}),l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.right.list3")}),l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.right.list4")})]}),(0,l.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.right.list5")}),l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.right.list6")}),l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.right.list7")}),l.jsx(m.Z,{href:"#",title:e("common:navbar.ddSolution.right.list8")})]})]})]})})]})})]}),l.jsx(g(),{href:"/about",className:`font-sans font-semibold text-sm leading-5 text-grey hover:text-light-green ${"/about"===t.pathname?"text-light-green":"text-grey"}`,children:e("common:navbar.about")})]})}[n,c]=p.then?(await p)():p,a()}catch(e){a(e)}})},6839:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>p});var l=s(997);s(6689);var n=s(6774),i=s(9532),r=s.n(i),o=s(866),d=s.n(o),c=s(4137),x=s.n(c),m=s(5476),h=s(6348),g=s(5600),f=e([n,m]);[n,m]=f.then?(await f)():f;let p=()=>{let{t:e}=d()("common"),t=(0,g.useRouter)();return(0,l.jsxs)(n.Root,{className:"relative z-[1] flex-1 flex justify-center",children:[(0,l.jsxs)(n.List,{className:"center m-0 flex items-center gap-[42px] list-none",children:[(0,l.jsxs)(n.Item,{children:[(0,l.jsxs)(n.Trigger,{className:`font-sans font-medium text-reg leading-[21px] text-grey data-[state=open]:text-light-green group select-none flex items-center gap-3 ${"/research"===t.pathname||"/survey"===t.pathname?"text-light-green":"text-grey"}`,children:[e("navbar.product"),l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180 fill-grey group-data-[state=open]:fill-light-green ${"/research"===t.pathname||"/survey"===t.pathname?"fill-light-green":"fill-grey"}`,children:l.jsx("path",{d:"M9 9.67809L13.071 5.58279C13.5121 5.13907 14.2281 5.13907 14.6692 5.58279C15.1103 6.02651 15.1103 6.74675 14.6692 7.19047L9.75326 12.1357C9.33668 12.5548 8.66226 12.5548 8.24674 12.1357L3.33082 7.19047C2.88973 6.74675 2.88973 6.02651 3.33082 5.58279C3.77191 5.13907 4.48788 5.13907 4.92897 5.58279L9 9.67809Z"})})]}),l.jsx(n.Content,{className:"data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto",children:(0,l.jsxs)("ul",{className:"p-6 flex gap-6 w-[720px]",children:[l.jsx(m.Z,{isActive:"/research"===t.pathname,href:"/research",icon:"research",title:e("navbar.ddProduct.card1.title"),desc:e("navbar.ddProduct.card1.desc")}),l.jsx(m.Z,{isActive:"/survey"===t.pathname,href:"/survey",icon:"survey",title:e("navbar.ddProduct.card2.title"),desc:e("navbar.ddProduct.card2.desc")})]})})]}),(0,l.jsxs)(n.Item,{children:[(0,l.jsxs)(n.Trigger,{className:"font-sans font-medium text-reg leading-[21px] text-grey data-[state=open]:text-light-green group select-none flex items-center gap-3",children:[e("navbar.solution"),l.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180 fill-grey group-data-[state=open]:fill-light-green",children:l.jsx("path",{d:"M9 9.67809L13.071 5.58279C13.5121 5.13907 14.2281 5.13907 14.6692 5.58279C15.1103 6.02651 15.1103 6.74675 14.6692 7.19047L9.75326 12.1357C9.33668 12.5548 8.66226 12.5548 8.24674 12.1357L3.33082 7.19047C2.88973 6.74675 2.88973 6.02651 3.33082 5.58279C3.77191 5.13907 4.48788 5.13907 4.92897 5.58279L9 9.67809Z"})})]}),l.jsx(n.Content,{className:"absolute top-0 left-0 w-full sm:w-auto",children:(0,l.jsxs)("ul",{className:"p-8 w-[800px] flex gap-8",children:[l.jsx("li",{className:"flex-1",children:l.jsx(n.Link,{asChild:!0,children:(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[l.jsx("h4",{className:"font-sans font-semibold text-reg leading-[21px] text-light-black",children:e("navbar.ddSolution.left.title")}),l.jsx("div",{className:"px-2 py-1 bg-[#3E6FE61A] bg-opacity-10 rounded-[100px] text-dark-blue font-sans font-semibold text-2xsm leading-5",children:e("navbar.coming")})]}),(0,l.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{className:"w-full flex flex-col gap-3",children:[l.jsx(h.Z,{href:"#",title:l.jsx(x(),{i18nKey:"common:navbar.ddSolution.left.list1",components:[l.jsx("i",{})]})}),l.jsx(h.Z,{href:"#",title:l.jsx(x(),{i18nKey:"common:navbar.ddSolution.left.list2",components:[l.jsx("i",{})]})}),l.jsx(h.Z,{href:"#",title:l.jsx(x(),{i18nKey:"common:navbar.ddSolution.left.list3"})}),l.jsx(h.Z,{href:"#",title:l.jsx(x(),{i18nKey:"common:navbar.ddSolution.left.list4"})}),l.jsx(h.Z,{href:"#",title:l.jsx(x(),{i18nKey:"common:navbar.ddSolution.left.list5",components:[l.jsx("i",{})]})}),l.jsx(h.Z,{href:"#",title:l.jsx(x(),{i18nKey:"common:navbar.ddSolution.left.list6",components:[l.jsx("i",{})]})})]}),(0,l.jsxs)("div",{className:"w-full flex flex-col gap-3",children:[l.jsx(h.Z,{href:"#",title:l.jsx(x(),{i18nKey:"common:navbar.ddSolution.left.list7",components:[l.jsx("i",{})]})}),l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.left.list8")}),l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.left.list9")}),l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.left.list10")}),l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.left.list11")}),l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.left.list12")})]})]})]})})}),l.jsx("li",{className:"w-[1px] h-[220px] bg-light-white"}),l.jsx("li",{className:"flex-1",children:l.jsx(n.Link,{asChild:!0,children:(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[l.jsx("h4",{className:"font-sans font-semibold text-reg leading-[21px] text-light-black",children:e("navbar.ddSolution.right.title")}),l.jsx("div",{className:"px-2 py-1 bg-[#3E6FE61A] bg-opacity-10 rounded-[100px] text-dark-blue font-sans font-semibold text-2xsm leading-5",children:e("navbar.coming")})]}),(0,l.jsxs)("div",{className:"mt-3 grid grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{className:"w-full flex flex-col gap-3",children:[l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.right.list1")}),l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.right.list2")}),l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.right.list3")}),l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.right.list4")})]}),(0,l.jsxs)("div",{className:"w-full flex flex-col gap-3",children:[l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.right.list5")}),l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.right.list6")}),l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.right.list7")}),l.jsx(h.Z,{href:"#",title:e("navbar.ddSolution.right.list8")})]})]})]})})})]})})]}),l.jsx(n.Item,{children:l.jsx(r(),{href:"/about",className:`font-sans font-medium text-reg leading-[21px] text-grey hover:text-light-green ${"/about"===t.pathname?"text-light-green":"text-grey"}`,children:e("navbar.about")})})]}),l.jsx("div",{className:"perspective-[2000px] absolute top-full left-0 flex w-auto justify-center",children:l.jsx(n.Viewport,{className:"data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full shadow-lg origin-[top_center] overflow-hidden rounded-[24px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]"})})]})};a()}catch(e){a(e)}})},5476:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(t,{Z:()=>d});var l=s(997),n=s(6774),i=s(9532),r=s.n(i),o=e([n]);function d({href:e,icon:t,title:s,desc:a,isActive:i}){return l.jsx("li",{className:"flex-1",children:l.jsx(n.Link,{asChild:!0,children:(0,l.jsxs)(r(),{href:e,className:`font-sans text-reg font-medium text-light-black flex flex-col gap-4 ${i?"bg-soft-green":"bg-white"} hover:bg-soft-green p-6 rounded-xl`,children:[l.jsx("figure",{className:"w-[42px] h-[42px] object-cover",children:l.jsx("img",{src:`/images/icons/ic-product-${t}.svg`,alt:`ic-${t}`,className:"w-full"})}),(0,l.jsxs)("div",{children:[l.jsx("h3",{className:"font-sans font-semibold text-reg leading-5 text-dark-green",children:s}),l.jsx("p",{className:"font-sans font-normal text-sm leading-5 text-grey",children:a})]})]})})})}n=(o.then?(await o)():o)[0],a()}catch(e){a(e)}})},5540:(e,t,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.r(t),s.d(t,{default:()=>w});var l=s(997),n=s(4887),i=s(5508),r=s.n(i),o=s(866),d=s.n(o),c=s(5284),x=s.n(c),m=s(9532),h=s.n(m),g=s(6689),f=s(3554),p=s(3733),u=s(6421),j=s(7528),v=s(6839),b=e([f,j,v]);[f,j,v]=b.then?(await b)():b;let N=[{value:"id",label:"Indonesia",icon:"indo-flag.svg"},{value:"en",label:"English",icon:"english-flag.svg"}],{Option:y,DropdownIndicator:Z,SingleValue:S}=f.components,C=e=>l.jsx(y,{...e,children:(0,l.jsxs)("div",{className:"flex items-center gap-2 lg:gap-3 cursor-pointer",children:[(0,l.jsxs)("div",{className:"flex-1 flex items-center gap-3",children:[l.jsx("img",{src:`/images/icons/${e.data.icon}`,className:"w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]",alt:e.data.label}),l.jsx("span",{className:"font-sans font-medium text-sm lg:text-reg leading-5 lg:leading-[21px] text-grey",children:e.data.label})]}),e.isSelected&&l.jsx("figure",{className:"w-4 h-4 lg:w-[18px] lg:h-[18px] object-cover",children:l.jsx("img",{src:"/images/icons/ic-green-check.svg",alt:"icon",className:"w-full"})})]})}),k=e=>l.jsx(S,{...e,children:(0,l.jsxs)("div",{className:"flex items-center gap-2 lg:gap-3",children:[l.jsx("img",{src:`/images/icons/${e.data.icon}`,className:"w-[18px] h-[18px] lg:w-[22px] lg:h-[22px]",alt:e.data.label}),l.jsx("span",{className:"font-sans font-medium text-sm lg:text-reg leading-5 lg:leading-[21px] text-grey",children:e.data.label})]})}),L=e=>l.jsx(Z,{...e,children:l.jsx("img",{src:"/images/icons/arrow-down.svg",className:"w-[18px] h-[18px]",alt:"ic-down"})});function w(){let{t:e,lang:t}=d()(),s=(0,g.useContext)(n.F),[a,i]=(0,g.useState)(!1),o=async e=>{await r()(e??"id")};(0,g.useEffect)(()=>{let e=sessionStorage.getItem("lang");e&&o(JSON.parse(e).value)},[]);let c=async e=>{sessionStorage.setItem("lang",JSON.stringify(e)),i(!1),await r()(e.value)};return console.log(a),(0,l.jsxs)("nav",{className:"fixed top-4 lg:top-8 left-0 right-0 px-4 lg:px-0 z-50",children:[(0,l.jsxs)("div",{className:`w-full lg:w-[1120px] mx-auto flex items-center gap-3 z-10 lg:gap-6 px-4 py-3 lg:px-[42px] lg:py-[18px] bg-white rounded-[100px] ${a?"shadow-none":"shadow-3xl"}`,children:[l.jsx(h(),{href:"/",children:l.jsx("figure",{className:"w-[66px] h-7 lg:w-[100px] lg:h-[42px] object-cover",children:l.jsx(x(),{src:p.Z,priority:!0,sizes:"100vw",style:{width:"100%",height:"auto"},alt:"logo"})})}),l.jsx("div",{className:"hidden lg:flex flex-1",children:l.jsx(v.Z,{})}),(0,l.jsxs)("div",{className:"w-full lg:w-fit flex items-center justify-end gap-3 lg:gap-6",children:[l.jsx("div",{className:"w-fit",children:l.jsx(f.default,{isClearable:!1,isSearchable:!1,options:N,styles:u.X,value:"en"===t?N[1]:N[0],onChange:c,className:"w-full",components:{Option:C,DropdownIndicator:L,SingleValue:k},id:"method-value-select",instanceId:"method-value-select",theme:e=>({...e,colors:{...e.colors,primary:"#DEF2E6",primary25:"#fff"}})})}),l.jsx("a",{href:"https://api.whatsapp.com/send/?phone=6281930563377&text=Halo!+Saya+tertarik+untuk+mengetahui+lebih+lanjut+tentang+layanan+Delvio.+Bisakah+Anda+membantu+saya?&type=phone_number&app_absent=0",target:"_blank",className:"hidden lg:flex bg-soft-green py-[10px] px-6 font-sans font-semibold text-sm leading-5 text-dark-green rounded-[100px]",children:e("common:navbar.contact")}),(0,l.jsxs)("div",{className:"box-toggle flex lg:hidden",children:[l.jsx("input",{type:"checkbox",id:"checkbox",checked:a,onChange:()=>i(e=>!e)}),(0,l.jsxs)("label",{htmlFor:"checkbox",className:"toggle",children:[l.jsx("div",{className:"bars",id:"bar1"}),l.jsx("div",{className:"bars",id:"bar2"}),l.jsx("div",{className:"bars",id:"bar3"})]})]})]})]}),s&&a&&l.jsx("div",{className:"absolute top-4 left-0 right-0 px-4 -z-10 transition-all ease-in duration-300",children:l.jsx("div",{className:"bg-white w-full rounded-3xl px-4 pt-4 pb-3 h-auto overflow-auto max-h-[450px] shadow-3xl",children:l.jsx(j.Z,{})})})]})}a()}catch(e){a(e)}})}};