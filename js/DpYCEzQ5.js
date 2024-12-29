import{a as e,i as t,B as r,b as n}from"./BgDTSmIO.js";import{c as a,a as s,b as o,d as i,t as c,e as l,s as d,f as p,O as m,g as u,h as f,P as h,R as g}from"./Cr0ruzua.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var y,x,j={exports:{}},w={},v=(x||(x=1,j.exports=function(){if(y)return w;y=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(t,r,n){var a=null;if(void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),"key"in r)for(var s in n={},r)"key"!==s&&(n[s]=r[s]);else n=r;return r=n.ref,{$$typeof:e,type:t,key:a,ref:void 0!==r?r:null,props:n}}return w.Fragment=t,w.jsx=r,w.jsxs=r,w}()),j.exports);const N={isLoading:!1},{reducer:_,actions:b}=a({name:"example",initialState:N,reducers:{clear(e){e.isLoading=N.isLoading}}}),C=s({example:_});var k=(e=>(e.App="app",e.Home="home",e))(k||{}),T=(e=>(e.Light="light",e.Dark="dark",e))(T||{});localStorage.getItem("theme")||T.Light,localStorage.getItem("lang")||navigator.language;const S=o.create({baseURL:"https://api_url_example",withCredentials:!0});function*E(){try{yield l(S.get,"/")}catch(e){}}function*A(){yield i([c(b.clear,E)])}S.interceptors.request.use((e=>({...e,headers:{"Content-Type":"application/json","Accept-Language":"*"}})),(e=>Promise.reject(e))),o.interceptors.response.use(void 0,(async e=>e));const B=d(),L=(()=>{const e=p({reducer:(t=C,function e(r,n){switch(n.type){case"BATCH_ACTIONS":return n.actions.reduce(e,r);case"RESET_ALL":return t(void 0,n);default:return t(r,n)}}),devTools:!0,middleware:e=>[...e({thunk:!1,serializableCheck:!1}),B]});var t;return B.run((function*(){yield i([A()])})),e})();function I(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=I(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function R(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=I(e))&&(n&&(n+=" "),n+=t);return n}Object.assign(window,{store:L}),e.forwardRef((({reverse:e=!1,unit:t="px",gap:r,className:n,direction:a="row",horizontal:s="start",vertical:o="start",style:i={},...c},l)=>{const d=e=>{let t="";return"start"!==e&&"end"!==e||(t+="flex-"),t+=e,t};return v.jsx("div",{ref:l,className:R("Flex",n),style:{"--direction":(()=>{let t=a;return t.length>=1&&e&&(t+="-reverse"),t})(),"--justifyContent":d(s),"--alignItems":d(o),"--gap":(e=>{switch(typeof e){case"string":return e;case"number":return`${e}${t}`;default:return"normal"}})(r),...i},...c})}));const $=()=>{const[t,r]=e.useState("android");return e.useEffect((()=>{if("undefined"!=typeof navigator){const e=navigator.userAgent.toLowerCase(),t=navigator.platform.toLowerCase();/mac|iphone|ipad|ipod/.test(t)||/mac|iphone|ipad|ipod/.test(e)?r("ios"):r("android")}}),[]),t},O=({className:e,...t})=>v.jsx("hr",{className:R("Divider",e),...t}),P=e=>void 0!==e&&!1!==e&&null!==e&&""!==e,q=e.forwardRef((({type:e,size:t="m",before:r,after:n,stretched:a,children:s,className:o,mode:i="filled",loading:c,Component:l="button",...d},p)=>{const m=$();return v.jsxs(M,{ref:p,type:e||"button",Component:l,className:R("Button",`Button--${i}`,`Button--${t}`,"ios"===m&&"Button--ios",a&&"Button--stretched",c&&"Button--loading",o),...d,children:[c&&v.jsx(X,{className:"Button--spinner",size:"s"}),P(r)&&v.jsx("div",{className:"Button__before",children:r}),v.jsx(U,{className:"Button__content",size:t,children:s}),P(n)&&v.jsx("div",{className:"Button__after",children:n})]})})),z=e=>v.jsx("div",{className:R("Tag","Tag--default"),children:v.jsx(D,{weight:"2",children:e.children})}),M=e.forwardRef((({Component:t="div",children:r,className:n,interactiveAnimation:a="background",readOnly:s,...o},i)=>{const c=$(),{clicks:l,onPointerCancel:d,onPointerDown:p}=(()=>{const[t,r]=e.useState([]),n=e.useMemo((()=>new Map),[]),a=((t,r)=>{const n=e.useRef({callbackFunction:t,duration:r});e.useEffect((()=>{n.current.callbackFunction=t,n.current.duration=r}),[t,r]);const a=e.useRef(null),s=e.useCallback((()=>a.current&&clearTimeout(null==a?void 0:a.current)),[]);return{set:e.useCallback((()=>{s(),a.current=setTimeout(n.current.callbackFunction,n.current.duration)}),[s]),clear:s}})((()=>r([])),225);return{clicks:t,onPointerDown:e=>{const{top:s,left:o}=e.currentTarget.getBoundingClientRect(),i=e.clientX-(o??0),c=e.clientY-(s??0);n.set(e.pointerId,setTimeout((()=>function(e,s,o){const i=Date.now(),c=t.filter((e=>e.date+225>i));r([...c,{x:e,y:s,date:i,pointerId:o}]),a.set(),n.delete(o)}(i,c,e.pointerId)),70))},onPointerCancel:e=>{const t=n.get(e.pointerId);clearTimeout(t),n.delete(e.pointerId)}}})(),m="android"===c&&"background"===a&&!s;return v.jsxs(t,{ref:i,className:R("Tappable","ios"===c&&"Tappable--ios","opacity"===a&&"Tappable--opacity",n),onPointerCancel:d,onPointerDown:p,readOnly:s,...o,children:[m&&v.jsx(Z,{clicks:l}),r]})})),D=({level:e="1",className:t="",Component:r="span",...n})=>v.jsx(Y,{...n,className:R("Caption",`Caption__wrapper--${e}`,t),Component:r}),F=e.forwardRef((({level:e="1",className:t="",Component:r="h6",...n},a)=>v.jsx(Y,{...n,ref:a,className:R("Subheadline",`Subheadline__wrapper--${e}`,t),Component:r}))),H=e.forwardRef((({weight:e,className:t="",...r},n)=>v.jsx(Y,{ref:n,...r,weight:e,className:R("Text",t)}))),Q={1:"h2",2:"h3",3:"h4"},K=({level:e="2",className:t="",Component:r,...n})=>v.jsx(Y,{...n,className:R("Title",`Title__wrapper--${e}`,t),Component:r||Q[e]}),Y=e.forwardRef((({Component:e="p",weight:t="3",plain:r=!0,caps:n=!1,className:a="",opacity:s=!1,center:o=!1,...i},c)=>v.jsx(e,{ref:c,className:R("Typography",`Typography__wrapper--weight-${t}`,s&&"Typography__wrapper--opacity",r&&"Typography__wrapper--plain",n&&"Typography__wrapper--caps",o&&"Typography__wrapper--center",a),...i}))),U=({size:e,...t})=>"l"===e?v.jsx(H,{weight:"2",...t}):v.jsx(F,{level:"2",weight:"2",...t}),W=t=>e.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...t},e.createElement("style",null,".spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}"),e.createElement("path",{d:"M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z",className:"spinner_aj0A"})),V=t=>e.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...t},e.createElement("style",null,".spinner_OSmW{transform-origin:center;animation:spinner_T6mA .75s step-end infinite}@keyframes spinner_T6mA{8.3%{transform:rotate(30deg)}16.6%{transform:rotate(60deg)}25%{transform:rotate(90deg)}33.3%{transform:rotate(120deg)}41.6%{transform:rotate(150deg)}50%{transform:rotate(180deg)}58.3%{transform:rotate(210deg)}66.6%{transform:rotate(240deg)}75%{transform:rotate(270deg)}83.3%{transform:rotate(300deg)}91.6%{transform:rotate(330deg)}100%{transform:rotate(360deg)}}"),e.createElement("g",{className:"spinner_OSmW"},e.createElement("rect",{x:11,y:1,width:2,height:5,opacity:.14}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(30 12 12)",opacity:.29}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(60 12 12)",opacity:.43}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(90 12 12)",opacity:.57}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(120 12 12)",opacity:.71}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(150 12 12)",opacity:.86}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(180 12 12)"}))),X=({size:e="m",className:t})=>{const r=$(),n="ios"===r?V:W;return v.jsx("div",{role:"status",className:R("Spinner",`Spinner--${e}`,"ios"===r&&"Spinner--ios",t),children:v.jsx(n,{})})},Z=({clicks:e})=>v.jsx("span",{"aria-hidden":!0,className:"Ripple",children:e.map((e=>v.jsx("span",{className:"Ripple__wave",style:{top:e.y,left:e.x}},e.date)))}),G=["javascript","react"],J=e=>v.jsxs("div",{className:"Questions",children:[v.jsxs("div",{className:"Questions__tags",children:[v.jsx(z,{children:`#${String(e.questionId)}`}),G.map((e=>v.jsx(z,{children:e.toUpperCase()},`tag-${e}`)))]}),v.jsxs(K,{center:!0,children:["Question ",e.questionId]}),v.jsx(H,{center:!0,children:"My otvetochka"})]}),ee=e=>v.jsxs("div",{className:"QuestionsNavigation",children:[v.jsx(q,{stretched:!0,children:v.jsx(H,{children:"Следующий"})}),v.jsx(q,{stretched:!0,mode:"gray",children:v.jsx(H,{children:"Предыдущий"})})]}),te=()=>v.jsxs("div",{className:"Home",children:[v.jsx(J,{questionId:1}),v.jsx(O,{}),v.jsx(ee,{questionId:1})]}),re=()=>v.jsx(v.Fragment,{children:v.jsx(m,{})}),ne=e=>{const t=["id"];return e.map((e=>{const{children:r,...n}=Object.keys(e).filter((e=>!t.includes(e))).reduce(((t,r)=>(t[r]=e[r],t)),{});return{...n,children:r?ne(r):void 0}}))},ae=[{id:k.App,path:"/",element:v.jsx(re,{}),children:[{id:k.Home,path:"/",element:v.jsx(te,{})}]}],se=u(ne(ae),{basename:"/techqna"}),oe=[{en:{app:{name:"Best template",description:"Template. Min 80 symbols"}}},{ru:{app:{name:"Лучший шаблон",description:"Шаблон. Минимум 80 символов"}}}].reduce(((e,t)=>{const[r,n]=Object.entries(t)[0];return{...e,[r]:{translation:n}}}),{});t.use(r).use(n).init({resources:oe,fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}}),f.createRoot(document.getElementById("root")).render(v.jsx(e.StrictMode,{children:v.jsx(h,{store:L,children:v.jsx(g,{router:se})})}));
