import{E as c,F as d,j as e,T as s,I as v,b as P,P as _,M as R,z as A,G as L,H as O,J as B}from"./index-09e4fc66.js";import{u as H,G as l,S as o,A as S}from"./index-850a9108.js";var x={},T=d;Object.defineProperty(x,"__esModule",{value:!0});var b=x.default=void 0,E=T(c()),q=e,G=(0,E.default)((0,q.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");b=x.default=G;const V="/api/",F=async t=>{const a=await fetch(V+t,{method:"GET"});if(!a.ok){const n=await a.json();throw new Error(n.statusText)}return await a.json()},J={revalidateOnFocus:!1,revalidateIfStale:!1,revalidateOnReconnect:!1};function U(t){const{data:a,error:r,isLoading:n}=H(`pets/${t}`,i=>F(i),J);return{petData:a,error:r,isLoading:n}}function W(){return e.jsxs(l,{container:!0,justifyContent:"center",columnSpacing:4,rowSpacing:4,alignItems:"center",children:[e.jsx(l,{item:!0,xs:12,textAlign:"center",mt:2,children:e.jsx(s,{variant:"h2",children:e.jsx(o,{})})}),e.jsx(l,{item:!0,marginTop:"0",children:e.jsx(o,{width:300,height:300})}),e.jsxs(l,{item:!0,textAlign:"center",children:[e.jsx(o,{width:100,variant:"text"}),e.jsx(o,{width:100,variant:"text"}),e.jsx(o,{width:100,variant:"text"}),e.jsx(o,{width:100,variant:"text"})]}),e.jsxs(l,{item:!0,textAlign:"center",xs:12,children:[e.jsx(s,{variant:"h4",children:"Description"}),e.jsx(s,{variant:"body1",children:e.jsx(o,{})})]})]})}function K(t){return e.jsx(s,{variant:"h2",children:t.name})}var h={},Q=d;Object.defineProperty(h,"__esModule",{value:!0});var y=h.default=void 0,X=Q(c()),p=e,Y=(0,X.default)([(0,p.jsx)("path",{d:"m16.17 19-2-2H6l3-4 2.25 3 .82-1.1L5 7.83V19zM7.83 5 19 16.17V5z",opacity:".3"},"0"),(0,p.jsx)("path",{d:"M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2H19zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41L2.81 2.81zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2H5z"},"1")],"HideImageTwoTone");y=h.default=Y;var j={},Z=d;Object.defineProperty(j,"__esModule",{value:!0});var C=j.default=void 0,ee=Z(c()),te=e,ae=(0,ee.default)((0,te.jsx)("path",{d:"M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm18 0c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8 8 3.58 8 8zM8 12l4-4 1.41 1.41L11.83 11H16v2h-4.17l1.59 1.59L12 16l-4-4z"}),"ArrowCircleLeftOutlined");C=j.default=ae;var m={},ne=d;Object.defineProperty(m,"__esModule",{value:!0});var I=m.default=void 0,re=ne(c()),ie=e,se=(0,re.default)((0,ie.jsx)("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zM4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8zm12 0-4 4-1.41-1.41L12.17 13H8v-2h4.17l-1.59-1.59L12 8l4 4z"}),"ArrowCircleRightOutlined");I=m.default=se;const le={opacity:"0.7","&:hover":{opacity:"0.9"}};function D(t){return e.jsx(v,{"aria-label":"next-image",color:"primary",onClick:t.onClickNavigation,sx:le,children:t.children})}var f={},oe=d;Object.defineProperty(f,"__esModule",{value:!0});var $=f.default=void 0,ce=oe(c()),de=e,ue=(0,ce.default)((0,de.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}),"Circle");$=f.default=ue;var g={},ve=d;Object.defineProperty(g,"__esModule",{value:!0});var N=g.default=void 0,xe=ve(c()),he=e,je=(0,xe.default)((0,he.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CircleOutlined");N=g.default=je;const me="_navDots_6qhvl_1",fe={navDots:me};function ge(t,a,r){const n=Array(t);for(let i=0;i<n.length;i++)i===a?n[i]=e.jsx("li",{children:e.jsx(v,{"aria-label":`Select image ${i+1}`,disabled:!0,children:e.jsx($,{fontSize:"medium",color:"primary"})})},i):n[i]=e.jsx("li",{children:e.jsx(v,{"aria-label":`Select image ${i+1}`,onClick:()=>r(i),sx:_e,children:e.jsx(N,{fontSize:"medium",color:"primary"})})},i);return n}const _e={"&:hover":{backgroundColor:"rgb(189,189,189,0.4)"}};function pe(t){return e.jsx("div",{className:fe.navDots,children:e.jsx("menu",{children:ge(t.totalNavDots,t.currentIndex,t.onSelectDotNav)})})}const De="_imageContainer_g8rbm_1",Se="_blankImage_g8rbm_18",be="_imgNavButtons_g8rbm_25",u={imageContainer:De,blankImage:Se,imgNavButtons:be};function ye(t){const[a,r]=P.useState(0);if(t.photos.length<1)return e.jsx(_,{elevation:4,children:e.jsx("div",{className:u.blankImage,children:e.jsx(y,{fontSize:"large",color:"primary"})})});const n=a>0,i=a<t.photos.length-1,z=()=>{r(n?a-1:t.photos.length-1)},M=()=>{r(i?a+1:0)},k=w=>{r(w)};return e.jsx(_,{elevation:4,children:e.jsxs("div",{className:u.imageContainer,children:[e.jsx("img",{src:t.photos[a].full,alt:t.name,sizes:"500px"}),t.photos.length>1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:u.imgNavButtons,children:[e.jsx(D,{onClickNavigation:z,children:e.jsx(C,{fontSize:"large"})}),e.jsx(D,{onClickNavigation:M,children:e.jsx(I,{fontSize:"large"})})]}),e.jsx(pe,{totalNavDots:t.photos.length,currentIndex:a,onSelectDotNav:k})]})]})})}function Ce(t){return e.jsxs(s,{variant:"body1",component:"section",children:[e.jsx(s,{variant:"subtitle1",children:e.jsx("b",{children:"Age"})}),t.petData.age,e.jsx(s,{variant:"subtitle1",children:e.jsx("b",{children:"Size"})}),t.petData.size,e.jsx(s,{variant:"subtitle1",children:e.jsx("b",{children:"Gender"})}),t.petData.gender,e.jsx(s,{variant:"subtitle1",children:e.jsx("b",{children:"Status"})}),t.petData.status]})}function Ie(t){if(!t)return"No description provided.";const a=document.createElement("div");return a.innerHTML=t,a.textContent}function $e(t){const a=Ie(t.description);return e.jsxs("section",{children:[e.jsx(s,{variant:"h4",children:"Description"}),e.jsx(s,{variant:"body1",children:a}),e.jsx(R,{href:t.url,children:"More at PetFinder.com."})]})}function Ne(t){return e.jsxs(l,{container:!0,justifyContent:"center",columnSpacing:4,rowSpacing:3,alignItems:"center",children:[e.jsx(l,{item:!0,xs:12,textAlign:"center",mt:2,children:e.jsx(K,{name:t.petData.name})}),e.jsx(l,{item:!0,children:e.jsx(ye,{name:t.petData.name,photos:t.petData.photos})}),e.jsx(l,{item:!0,textAlign:"center",children:e.jsx(Ce,{petData:t.petData})}),e.jsx(l,{item:!0,textAlign:"center",xs:12,children:e.jsx($e,{description:t.petData.description,url:t.petData.url})})]})}function ze(t){const{petData:a,error:r,isLoading:n}=U(t.id);return r&&!n?e.jsx(S,{severity:"error",children:r.message?r.message:"Could not fetch pet data."}):n||!a?e.jsx(W,{}):e.jsx(Ne,{petData:a})}function we(){const t=A(),{state:a}=L(),r=O(),n=t.id??"error";return n==="error"||Number.isNaN(parseInt(n))?e.jsx("main",{children:e.jsx(S,{severity:"error",children:"Invalid pet id entered."})}):e.jsxs("main",{children:[(a==null?void 0:a.fromSearch)&&e.jsx(B,{startIcon:e.jsx(b,{}),onClick:()=>r(-1),size:"large",children:"Back to search results"}),e.jsx(ze,{id:n})]})}export{we as default};
