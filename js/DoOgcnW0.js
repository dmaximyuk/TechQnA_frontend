import{a as e,i as t,B as r,b as n}from"./BgDTSmIO.js";import{c as s,a,b as o,s as i,d as c,u as l,e as d,O as p,f as u,g as m,P as f,R as h}from"./XXcnJkoY.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var g,y,x={exports:{}},j={},w=(y||(y=1,x.exports=function(){if(g)return j;g=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(t,r,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),"key"in r)for(var a in n={},r)"key"!==a&&(n[a]=r[a]);else n=r;return r=n.ref,{$$typeof:e,type:t,key:s,ref:void 0!==r?r:null,props:n}}return j.Fragment=t,j.jsx=r,j.jsxs=r,j}()),x.exports);const v={prepare:!0,question:null,items:{}},{reducer:N,actions:b}=s({name:"questions",initialState:v,reducers:{prepare(e){e.items={},e.question=parseInt(localStorage.getItem("qId")||String(1)),e.prepare=!1},navigateQuestion(e,t){if("number"==typeof e.question&&!Number.isNaN(e.question)){switch(t.payload){case"next":e.question+=1;break;case"back":e.question-=1}localStorage.setItem("qId",String(e.question))}},clear(e){e.items=v.items,e.prepare=v.prepare,e.question=v.question}}}),_=e=>e.questions,C=a({questions:N});const k=i(),T=(()=>{const e=c({reducer:(t=C,function e(r,n){switch(n.type){case"BATCH_ACTIONS":return n.actions.reduce(e,r);case"RESET_ALL":return t(void 0,n);default:return t(r,n)}}),devTools:!0,middleware:e=>[...e({thunk:!1,serializableCheck:!1}),k]});var t;return k.run((function*(){yield o([])})),e})();function S(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=S(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function E(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=S(e))&&(n&&(n+=" "),n+=t);return n}Object.assign(window,{store:T}),e.forwardRef((({reverse:e=!1,unit:t="px",gap:r,className:n,direction:s="row",horizontal:a="start",vertical:o="start",style:i={},...c},l)=>{const d=e=>{let t="";return"start"!==e&&"end"!==e||(t+="flex-"),t+=e,t};return w.jsx("div",{ref:l,className:E("Flex",n),style:{"--direction":(()=>{let t=s;return t.length>=1&&e&&(t+="-reverse"),t})(),"--justifyContent":d(a),"--alignItems":d(o),"--gap":(e=>{switch(typeof e){case"string":return e;case"number":return`${e}${t}`;default:return"normal"}})(r),...i},...c})}));const q=()=>{const[t,r]=e.useState("android");return e.useEffect((()=>{if("undefined"!=typeof navigator){const e=navigator.userAgent.toLowerCase(),t=navigator.platform.toLowerCase();/mac|iphone|ipad|ipod/.test(t)||/mac|iphone|ipad|ipod/.test(e)?r("ios"):r("android")}}),[]),t},A=({className:e,...t})=>w.jsx("hr",{className:E("Divider",e),...t}),B=e=>void 0!==e&&!1!==e&&null!==e&&""!==e,I=e.forwardRef((({type:e,size:t="m",before:r,after:n,stretched:s,children:a,className:o,mode:i="filled",loading:c,Component:l="button",...d},p)=>{const u=q();return w.jsxs($,{ref:p,type:e||"button",Component:l,className:E("Button",`Button--${i}`,`Button--${t}`,"ios"===u&&"Button--ios",s&&"Button--stretched",c&&"Button--loading",o),...d,children:[c&&w.jsx(K,{className:"Button--spinner",size:"s"}),B(r)&&w.jsx("div",{className:"Button__before",children:r}),w.jsx(F,{className:"Button__content",size:t,children:a}),B(n)&&w.jsx("div",{className:"Button__after",children:n})]})})),R=e=>w.jsx("div",{className:E("Tag","Tag--default"),children:w.jsx(O,{weight:"2",children:e.children})}),$=e.forwardRef((({Component:t="div",children:r,className:n,interactiveAnimation:s="background",readOnly:a,...o},i)=>{const c=q(),{clicks:l,onPointerCancel:d,onPointerDown:p}=(()=>{const[t,r]=e.useState([]),n=e.useMemo((()=>new Map),[]),s=((t,r)=>{const n=e.useRef({callbackFunction:t,duration:r});e.useEffect((()=>{n.current.callbackFunction=t,n.current.duration=r}),[t,r]);const s=e.useRef(null),a=e.useCallback((()=>s.current&&clearTimeout(null==s?void 0:s.current)),[]);return{set:e.useCallback((()=>{a(),s.current=setTimeout(n.current.callbackFunction,n.current.duration)}),[a]),clear:a}})((()=>r([])),225);return{clicks:t,onPointerDown:e=>{const{top:a,left:o}=e.currentTarget.getBoundingClientRect(),i=e.clientX-(o??0),c=e.clientY-(a??0);n.set(e.pointerId,setTimeout((()=>function(e,a,o){const i=Date.now(),c=t.filter((e=>e.date+225>i));r([...c,{x:e,y:a,date:i,pointerId:o}]),s.set(),n.delete(o)}(i,c,e.pointerId)),70))},onPointerCancel:e=>{const t=n.get(e.pointerId);clearTimeout(t),n.delete(e.pointerId)}}})(),u="android"===c&&"background"===s&&!a;return w.jsxs(t,{ref:i,className:E("Tappable","ios"===c&&"Tappable--ios","opacity"===s&&"Tappable--opacity",n),onPointerCancel:d,onPointerDown:p,readOnly:a,...o,children:[u&&w.jsx(Y,{clicks:l}),r]})})),O=({level:e="1",className:t="",Component:r="span",...n})=>w.jsx(M,{...n,className:E("Caption",`Caption__wrapper--${e}`,t),Component:r}),P=e.forwardRef((({level:e="1",className:t="",Component:r="h6",...n},s)=>w.jsx(M,{...n,ref:s,className:E("Subheadline",`Subheadline__wrapper--${e}`,t),Component:r}))),L=e.forwardRef((({weight:e,className:t="",...r},n)=>w.jsx(M,{ref:n,...r,weight:e,className:E("Text",t)}))),Q={1:"h2",2:"h3",3:"h4"},z=({level:e="2",className:t="",Component:r,...n})=>w.jsx(M,{...n,className:E("Title",`Title__wrapper--${e}`,t),Component:r||Q[e]}),M=e.forwardRef((({Component:e="p",weight:t="3",plain:r=!0,caps:n=!1,className:s="",opacity:a=!1,center:o=!1,...i},c)=>w.jsx(e,{ref:c,className:E("Typography",`Typography__wrapper--weight-${t}`,a&&"Typography__wrapper--opacity",r&&"Typography__wrapper--plain",n&&"Typography__wrapper--caps",o&&"Typography__wrapper--center",s),...i}))),F=({size:e,...t})=>"l"===e?w.jsx(L,{weight:"2",...t}):w.jsx(P,{level:"2",weight:"2",...t}),D=t=>e.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...t},e.createElement("style",null,".spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}"),e.createElement("path",{d:"M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z",className:"spinner_aj0A"})),H=t=>e.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...t},e.createElement("style",null,".spinner_OSmW{transform-origin:center;animation:spinner_T6mA .75s step-end infinite}@keyframes spinner_T6mA{8.3%{transform:rotate(30deg)}16.6%{transform:rotate(60deg)}25%{transform:rotate(90deg)}33.3%{transform:rotate(120deg)}41.6%{transform:rotate(150deg)}50%{transform:rotate(180deg)}58.3%{transform:rotate(210deg)}66.6%{transform:rotate(240deg)}75%{transform:rotate(270deg)}83.3%{transform:rotate(300deg)}91.6%{transform:rotate(330deg)}100%{transform:rotate(360deg)}}"),e.createElement("g",{className:"spinner_OSmW"},e.createElement("rect",{x:11,y:1,width:2,height:5,opacity:.14}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(30 12 12)",opacity:.29}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(60 12 12)",opacity:.43}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(90 12 12)",opacity:.57}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(120 12 12)",opacity:.71}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(150 12 12)",opacity:.86}),e.createElement("rect",{x:11,y:1,width:2,height:5,transform:"rotate(180 12 12)"}))),K=({size:e="m",className:t})=>{const r=q(),n="ios"===r?H:D;return w.jsx("div",{role:"status",className:E("Spinner",`Spinner--${e}`,"ios"===r&&"Spinner--ios",t),children:w.jsx(n,{})})},Y=({clicks:e})=>w.jsx("span",{"aria-hidden":!0,className:"Ripple",children:e.map((e=>w.jsx("span",{className:"Ripple__wave",style:{top:e.y,left:e.x}},e.date)))}),W=["javascript","react"],U=e=>{const{question:t}=l(_);return w.jsxs("div",{className:"Questions",children:[w.jsxs("div",{className:"Questions__tags",children:[w.jsx(R,{children:`#${String(t)}`}),W.map((e=>w.jsx(R,{children:e.toUpperCase()},`tag-${e}`)))]}),w.jsxs(z,{center:!0,children:["Question ",t]}),w.jsx(L,{center:!0,children:"My otvetochka"})]})},V=e=>{const t=d();return w.jsxs("div",{className:"QuestionsNavigation",children:[w.jsx(I,{stretched:!0,onClick:()=>t(b.navigateQuestion("next")),children:w.jsx(L,{children:"Следующий"})}),w.jsx(I,{stretched:!0,mode:"gray",onClick:()=>t(b.navigateQuestion("back")),children:w.jsx(L,{children:"Предыдущий"})})]})},X=()=>w.jsxs("div",{className:"Home",children:[w.jsx(U,{questionId:1}),w.jsx(A,{}),w.jsx(V,{questionId:1})]}),Z=()=>{const t=d();return e.useEffect((()=>{t(b.prepare())}),[]),w.jsx(w.Fragment,{children:w.jsx(p,{})})},G=e=>{const t=["id"];return e.map((e=>{const{children:r,...n}=Object.keys(e).filter((e=>!t.includes(e))).reduce(((t,r)=>(t[r]=e[r],t)),{});return{...n,children:r?G(r):void 0}}))};var J=(e=>(e.App="app",e.Home="home",e))(J||{});const ee=[{id:J.App,path:"/",element:w.jsx(Z,{}),children:[{id:J.Home,path:"/",element:w.jsx(X,{})}]}],te=u(G(ee),{basename:"/TechQnA_frontend"}),re=[{en:{app:{name:"Best template",description:"Template. Min 80 symbols"}}},{ru:{app:{name:"Лучший шаблон",description:"Шаблон. Минимум 80 символов"}}}].reduce(((e,t)=>{const[r,n]=Object.entries(t)[0];return{...e,[r]:{translation:n}}}),{});t.use(r).use(n).init({resources:re,fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}}),m.createRoot(document.getElementById("root")).render(w.jsx(e.StrictMode,{children:w.jsx(f,{store:T,children:w.jsx(h,{router:te})})}));