"use strict";(self.webpackChunklab_nckh=self.webpackChunklab_nckh||[]).push([[178],{90178:(oe,W,n)=>{n.r(W),n.d(W,{default:()=>_e});var e=n(67294),j=n(16550),k=n(69307),U=n(274),z=n.n(U),R=n(41580),T=n(86896),r=n(76835);const K=async()=>{try{return await(0,k.WY)(`/${z()}/component`,{method:"GET"})}catch{return null}},V=async()=>{try{return await(0,k.WY)(`/${z()}/content-types`,{method:"GET"})}catch{return null}},q=async()=>{try{return(await(0,k.WY)(`/${z()}/component`,{method:"POST"},!0)).json()}catch{return null}};var B=n(11047),a=n(85893),x=n(73727),h=n(1565),p=n(92577),O=n(21817),g=n(75515);const N=(0,h.ZP)(O.G)`
  &[aria-disabled='true'] {
    ${p.sg}
    &:active {
      ${p.sg}
    }
  }
  &:hover {
    ${p.yP}
  }
  &:active {
    ${p.tB}
  }
  ${p.PD}
`,$=e.forwardRef(({variant:t="default",startIcon:o,endIcon:l,disabled:s=!1,children:E,size:C="S",href:v,to:m,...b},S)=>{const M=v?"_blank":void 0,P=v?"noreferrer noopener":void 0,c=C==="S"?2:"10px",u=4;return(0,a.jsxs)(N,{ref:S,"aria-disabled":s,size:C,variant:t,target:M,rel:P,to:s?void 0:m,href:s?"#":v,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:c,paddingLeft:u,paddingRight:u,paddingTop:c,pointerEvents:s?"none":void 0,...b,as:m&&!s?x.OL:"a",children:[o&&(0,a.jsx)(B.k,{"aria-hidden":!0,children:o}),(0,a.jsx)(g.Z,{variant:C==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:E}),l&&(0,a.jsx)(B.k,{"aria-hidden":!0,children:l})]})});var F=n(89722);const G=t=>{const o=t.querySelector('[tabindex="0"]');o&&o.focus()},le=(0,e.createContext)({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),Se=()=>(0,e.useContext)(le);var Z=n(7801);const we=({colCount:t,rowCount:o,jumpStep:l=3,initialCol:s=0,initialRow:E=0,...C})=>{const v=(0,e.useRef)(null),m=(0,e.useRef)(!1),[b,S]=(0,e.useState)(E),[M,P]=(0,e.useState)(s),c=(0,e.useCallback)(({colIndex:f,rowIndex:i})=>{P(f),S(i)},[]);(0,e.useEffect)(()=>{m.current&&G(v.current),m.current||(m.current=!0)},[M,b]);const u=f=>{switch(f.key){case Z.y.RIGHT:{f.preventDefault(),P(i=>i<t-1?i+1:i);break}case Z.y.LEFT:{f.preventDefault(),P(i=>i>0?i-1:i);break}case Z.y.UP:{f.preventDefault(),S(i=>i>0?i-1:i);break}case Z.y.DOWN:{f.preventDefault(),S(i=>i<o-1?i+1:i);break}case Z.y.HOME:{f.preventDefault(),f.ctrlKey&&S(0),P(0);break}case Z.y.END:{f.preventDefault(),f.ctrlKey&&S(o-1),P(t-1);break}case Z.y.PAGE_DOWN:{f.preventDefault(),S(i=>i+l<o?i+l:o-1);break}case Z.y.PAGE_UP:{f.preventDefault(),S(i=>i-l>0?i-l:0);break}}},L=(0,e.useMemo)(()=>({rowIndex:b,colIndex:M,setTableValues:c}),[M,b,c]);return(0,a.jsx)(le.Provider,{value:L,children:(0,a.jsx)("table",{role:"grid",ref:v,"aria-rowcount":o,"aria-colcount":t,onKeyDown:u,...C})})},Oe=(0,h.ZP)(R.x)`
  overflow: hidden;
  border: 1px solid ${({theme:t})=>t.colors.neutral150};
`,Ce=(0,h.ZP)(we)`
  width: 100%;
  white-space: nowrap;
`,Me=(0,h.ZP)(R.x)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:t})=>t==="both"||t==="left"?"''":void 0};
    box-shadow: ${({theme:t})=>t.shadows.tableShadow};
    width: ${({theme:t})=>t.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:t})=>t==="both"||t==="right"?"''":void 0};
    box-shadow: ${({theme:t})=>t.shadows.tableShadow};
    width: ${({theme:t})=>t.spaces[2]};
    right: 0;
    top: 0;
  }
`,Pe=(0,h.ZP)(R.x)`
  overflow-x: auto;
`,re=({footer:t,...o})=>{const l=(0,e.useRef)(null),[s,E]=(0,e.useState)(),C=v=>{const m=v.target.scrollWidth-v.target.clientWidth;if(v.target.scrollLeft===0){E("right");return}if(v.target.scrollLeft===m){E("left");return}v.target.scrollLeft>0&&E("both")};return(0,e.useEffect)(()=>{l.current.scrollWidth>l.current.clientWidth&&E("right")},[]),(0,a.jsxs)(Oe,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[(0,a.jsx)(Me,{overflowing:s,position:"relative",children:(0,a.jsx)(Pe,{ref:l,onScroll:C,paddingLeft:6,paddingRight:6,children:(0,a.jsx)(Ce,{...o})})}),t]})},je=({children:t,...o})=>{const l=e.Children.toArray(t).map(s=>(0,e.isValidElement)(s)?(0,e.cloneElement)(s,{"aria-rowindex":1}):s);return(0,a.jsx)("thead",{...o,children:l})},ke=(0,h.ZP)(je)`
  border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};
`,se=({children:t,...o})=>(0,a.jsx)(ke,{...o,children:t}),Te=({children:t,...o})=>{const l=e.Children.toArray(t).map((s,E)=>(0,e.isValidElement)(s)?(0,e.cloneElement)(s,{"aria-colindex":E+1,coords:{col:E+1,row:o["aria-rowindex"]}}):s);return(0,a.jsx)(R.x,{as:"tr",...o,children:l})},Re=(0,h.ZP)(Te)`
  border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:t})=>t.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:t})=>t.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,Y=t=>(0,a.jsx)(Re,{...t});var H=n(42895);const Ze=t=>(0,a.jsx)(ie,{...t,as:"th"}),ie=({coords:t={col:0,row:0},as:o="td",...l})=>{const s=(0,e.useRef)(null),{rowIndex:E,colIndex:C,setTableValues:v}=Se(),[m,b]=(0,e.useState)(!1),S=c=>{const u=(0,H.p)(s.current,!0);if(u.length===0||u.length===1&&(0,H.u)(u).length===0)return;if(u.length>1&&!u.find(f=>f.tagName!=="BUTTON")){c.preventDefault();const f=u.findIndex(i=>i===document.activeElement);if(c.key===Z.y.RIGHT){const i=u[f+1];i&&(c.stopPropagation(),i.focus())}else if(c.key===Z.y.LEFT){const i=u[f-1];i&&(c.stopPropagation(),i.focus())}return}const L=c.key===Z.y.ENTER;if(L&&!m)b(!0);else if((c.key===Z.y.ESCAPE||L)&&m){if(L&&document.activeElement?.tagName==="A")return;b(!1),s.current.focus()}else m&&c.stopPropagation()},M=E===t.row-1&&C===t.col-1;(0,e.useLayoutEffect)(()=>{const c=(0,H.p)(s.current,!0);c.length===0||c.length===1&&(0,H.u)(c).length!==0||c.length>1&&c.find(u=>u.tagName!=="BUTTON")?(s.current.setAttribute("tabIndex",!m&&M?"0":"-1"),c.forEach((u,L)=>{u.setAttribute("tabIndex",m?"0":"-1"),m&&L===0&&u.focus()})):c.forEach(u=>{u.setAttribute("tabIndex",M?"0":"-1")})},[m,M]);const P=(0,e.useCallback)(()=>{const c=(0,H.p)(s.current,!0);c.length>=1&&((0,H.u)(c).length!==0||!c.find(u=>u.tagName!=="BUTTON"))&&b(!0),v({rowIndex:t.row-1,colIndex:t.col-1})},[t,v]);return(0,e.useLayoutEffect)(()=>{const c=s.current;return(0,H.p)(c,!0).forEach(u=>{u.addEventListener("focus",P)}),()=>{(0,H.p)(c,!0).forEach(u=>{u.removeEventListener("focus",P)})}},[P]),(0,a.jsx)(R.x,{role:"gridcell",as:o,ref:s,onKeyDown:S,...l})},ce=(0,h.ZP)(ie)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:t})=>t.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,Ie=h.ZP.span`
  svg {
    height: ${4/16}rem;
  }
`,de=({children:t,action:o,...l})=>(0,a.jsx)(ce,{as:Ze,...l,children:(0,a.jsxs)(B.k,{children:[t,(0,a.jsx)(Ie,{children:o})]})}),J=({children:t,...o})=>(0,a.jsx)(ce,{...o,children:t}),Ae=({children:t,...o})=>{const l=e.Children.toArray(t).map((s,E)=>(0,e.isValidElement)(s)?(0,e.cloneElement)(s,{"aria-rowindex":E+2}):s);return(0,a.jsx)("tbody",{...o,children:l})},De=(0,h.ZP)(Ae)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,ue=({children:t,...o})=>(0,a.jsx)(De,{...o,children:t}),Le=t=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...t,children:(0,a.jsx)("path",{fill:"#212134",d:"M24 13.604a.3.3 0 0 1-.3.3h-9.795V23.7a.3.3 0 0 1-.3.3h-3.21a.3.3 0 0 1-.3-.3v-9.795H.3a.3.3 0 0 1-.3-.3v-3.21a.3.3 0 0 1 .3-.3h9.795V.3a.3.3 0 0 1 .3-.3h3.21a.3.3 0 0 1 .3.3v9.795H23.7a.3.3 0 0 1 .3.3v3.21Z"})}),Q=Le;var ge=n(94228),I=n(50781),A=n(76687),D=n(3566),_=n(29728),Be=n(62372),He=n(60881),$e=n(18189),We=n(48683),ze=n(45124);const Ke=t=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...t,children:(0,a.jsx)("path",{fill:"#212134",d:"M6.17 18a3 3 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2v-2h4.17Zm6-7a3 3 0 0 1 5.66 0H22v2h-4.17a3 3 0 0 1-5.66 0H2v-2h10.17Zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2V4h4.17Z"})}),Ne=Ke,Ue=t=>(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...t,children:[(0,a.jsx)("path",{fill:"#4945FF",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,a.jsx)("path",{fill:"#fff",d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 0 1-.474.942 1.705 1.705 0 0 1-.887.504 1.64 1.64 0 0 1-1.002-.105 1.76 1.76 0 0 1-.778-.678A1.924 1.924 0 0 1 14 9.841a1.9 1.9 0 0 1 .508-1.302c.325-.345.766-.539 1.225-.539ZM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24Z"})]}),he=Ue,me=n(25309).Z,fe=({item:t})=>{const[o,l]=(0,e.useState)(!0),[s,E]=(0,e.useState)(!0),[C,v]=(0,e.useState)(!0),[m,b]=(0,e.useState)(!0),[S,M]=(0,e.useState)(!0),[P,c]=(0,e.useState)(!0),[u,L]=(0,e.useState)(!0),[f,i]=(0,e.useState)(!0),[Ee,ve]=(0,e.useState)(!0),[xe,ye]=(0,e.useState)(!0),[ae,be]=(0,e.useState)(null),[et,X]=(0,e.useState)(!1),{formatMessage:y}=(0,T.Z)();(0,e.useEffect)(()=>{(async()=>{const w=await me.get();be(w)})()},[]);const tt=d=>{const w=ae[t?.uid];l(w?.seoChecks?.metaTitle),E(w?.seoChecks?.metaDescription),v(w?.seoChecks?.metaRobots),b(w?.seoChecks?.metaSocial),M(w?.seoChecks?.wordCount),c(w?.seoChecks?.canonicalUrl),L(w?.seoChecks?.keywordDensity),i(w?.seoChecks?.structuredData),ve(w?.seoChecks?.alternativeText),ye(w?.seoChecks?.lastUpdatedAt),X(ne=>!ne)},at=d=>{const w={...ae,[t?.uid]:{collectionName:ae[t?.uid]?.collectionName,seoChecks:{metaTitle:o,metaDescription:s,metaRobots:C,metaSocial:m,wordCount:S,canonicalUrl:P,keywordDensity:u,structuredData:f,alternativeText:Ee,lastUpdatedAt:xe}}};me.set(w).then(async()=>{be(w),X(ne=>!ne)})};return e.createElement(e.Fragment,null,e.createElement(_.z,{variant:"tertiary",startIcon:e.createElement(Ne,null),onClick:d=>tt(d)},y({id:(0,r.O)("SEOPage.info.config"),defaultMessage:"Settings"})),et&&e.createElement(He.P,{onClose:()=>X(d=>!d),labelledBy:"title"},e.createElement($e.x,null,e.createElement(g.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},y({id:(0,r.O)("SEOPage.info.settings"),defaultMessage:"Settings"}))),e.createElement(We.f,null,e.createElement(I.x,{paddingBottom:8,paddingTop:4},e.createElement(k.Y_,{title:y({id:"Information",defaultMessage:"Information"}),subtitle:y({id:(0,r.O)("HomePage.info.settings.information"),defaultMessage:"Disable SEO checks for this specific content-type."}),icon:e.createElement(he,null),iconBackground:"primary100"})),e.createElement(Be.M,null,e.createElement(I.x,{padding:4,hasRadius:!0,background:"neutral0"},e.createElement(A.K,{horizontal:!0,spacing:4,padding:3},e.createElement(D.r,{label:"Switch",selected:o,onChange:()=>l(d=>!d)}),e.createElement(g.Z,{variant:"delta"},y({id:(0,r.O)("SEOPage.info.settings.meta-title-check"),defaultMessage:"Meta Title"})))),e.createElement(I.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(A.K,{horizontal:!0,spacing:4,padding:3},e.createElement(D.r,{label:"Switch",selected:s,onChange:()=>E(d=>!d)}),e.createElement(g.Z,{variant:"delta"},y({id:(0,r.O)("SEOPage.info.settings.meta-description-check"),defaultMessage:"Meta Description"})))),e.createElement(I.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(A.K,{horizontal:!0,spacing:4,padding:3},e.createElement(D.r,{label:"Switch",selected:C,onChange:()=>v(d=>!d)}),e.createElement(g.Z,{variant:"delta"},y({id:(0,r.O)("SEOPage.info.settings.meta-robots-check"),defaultMessage:"Meta Robots"})))),e.createElement(I.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(A.K,{horizontal:!0,spacing:4,padding:3},e.createElement(D.r,{label:"Switch",selected:m,onChange:()=>b(d=>!d)}),e.createElement(g.Z,{variant:"delta"},y({id:(0,r.O)("SEOPage.info.settings.meta-social-check"),defaultMessage:"Meta Social"})))),e.createElement(I.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(A.K,{horizontal:!0,spacing:4,padding:3},e.createElement(D.r,{label:"Switch",selected:S,onChange:()=>M(d=>!d)}),e.createElement(g.Z,{variant:"delta"},y({id:(0,r.O)("SEOPage.info.settings.word-count-check"),defaultMessage:"Word Count"})))),e.createElement(I.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(A.K,{horizontal:!0,spacing:4,padding:3},e.createElement(D.r,{label:"Switch",selected:P,onChange:()=>c(d=>!d)}),e.createElement(g.Z,{variant:"delta"},y({id:(0,r.O)("SEOPage.info.settings.canonical-url-check"),defaultMessage:"Canonical URL"})))),e.createElement(I.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(A.K,{horizontal:!0,spacing:4,padding:3},e.createElement(D.r,{label:"Switch",selected:u,onChange:()=>L(d=>!d)}),e.createElement(g.Z,{variant:"delta"},y({id:(0,r.O)("SEOPage.info.settings.keyword-density-check"),defaultMessage:"Keyword Density"})))),e.createElement(I.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(A.K,{horizontal:!0,spacing:4,padding:3},e.createElement(D.r,{label:"Switch",selected:f,onChange:()=>i(d=>!d)}),e.createElement(g.Z,{variant:"delta"},y({id:(0,r.O)("SEOPage.info.settings.structured-data-check"),defaultMessage:"Structured Data"})))),e.createElement(I.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(A.K,{horizontal:!0,spacing:4,padding:3},e.createElement(D.r,{label:"Switch",selected:Ee,onChange:()=>ve(d=>!d)}),e.createElement(g.Z,{variant:"delta"},y({id:(0,r.O)("SEOPage.info.settings.alternative-text-check"),defaultMessage:"Alt Text"})))),e.createElement(I.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(A.K,{horizontal:!0,spacing:4,padding:3},e.createElement(D.r,{label:"Switch",selected:xe,onChange:()=>ye(d=>!d)}),e.createElement(g.Z,{variant:"delta"},y({id:(0,r.O)("SEOPage.info.settings.last-updated-at-check"),defaultMessage:"Last Updated At"})))))),e.createElement(ze.m,{startActions:e.createElement(_.z,{onClick:()=>X(d=>!d),variant:"tertiary"},y({id:(0,r.O)("SEOPage.info.settings.cancel.button"),defaultMessage:"Cancel"})),endActions:e.createElement(e.Fragment,null,e.createElement(_.z,{onClick:d=>at(d)},y({id:(0,r.O)("SEOPage.info.settings.save.button"),defaultMessage:"Save"})))})))};var Ve=n(82777),ee=n(77296),te=n(42761),Fe=n(96486),pe=n.n(Fe);const Ge=({contentTypes:t})=>{const{formatMessage:o}=(0,T.Z)();return e.createElement(e.Fragment,null,e.createElement(R.x,{padding:8},e.createElement(Ve.v,{label:"label",id:"tabs",variant:"simple"},e.createElement(ee.m,null,e.createElement(ee.O,null,e.createElement(g.Z,null,o({id:(0,r.O)("SEOPage.tab.collection-type-title"),defaultMessage:"Collection Types"}))),e.createElement(ee.O,null,e.createElement(g.Z,{variant:"omega"},o({id:(0,r.O)("SEOPage.tab.single-type-title"),defaultMessage:"Single Types"})))),e.createElement(te.n,null,e.createElement(te.x,null,e.createElement(re,{colCount:2,rowCount:t.collectionTypes.length},e.createElement(se,null,e.createElement(Y,null,e.createElement(de,null,e.createElement(g.Z,{variant:"sigma"},o({id:(0,r.O)("SEOPage.tab-panel.column-name"),defaultMessage:"Name"}))))),e.createElement(ue,null,t&&t.collectionTypes&&!pe().isEmpty(t.collectionTypes)?t.collectionTypes.map(l=>e.createElement(Y,{key:l.uid},e.createElement(J,null,e.createElement(g.Z,{textColor:"neutral800"},l.globalId)),e.createElement(J,null,e.createElement(B.k,{justifyContent:"right",alignItems:"right"},l.seo?e.createElement(fe,{item:l}):e.createElement($,{startIcon:e.createElement(Q,null),variant:"secondary",to:`/plugins/content-type-builder/content-types/${l.uid}`},o({id:(0,r.O)("SEOPage.info.add"),defaultMessage:"Add component"})))))):e.createElement(R.x,{padding:8,background:"neutral0"},e.createElement(F.x,{icon:e.createElement(ge.w,null),content:o({id:(0,r.O)("SEOPage.info.no-collection-types"),defaultMessage:"You don't have any collection-types yet..."}),action:e.createElement($,{to:"/plugins/content-type-builder",variant:"secondary",startIcon:e.createElement(Q,null)},o({id:(0,r.O)("SEOPage.info.create-collection-type"),defaultMessage:"Create your first collection-type"}))}))))),e.createElement(te.x,null,e.createElement(re,{colCount:2,rowCount:t.singleTypes.length},e.createElement(se,null,e.createElement(Y,null,e.createElement(de,null,e.createElement(g.Z,{variant:"sigma"},o({id:(0,r.O)("SEOPage.tab-panel.column-name"),defaultMessage:"Name"}))))),e.createElement(ue,null,t&&t.singleTypes&&!pe().isEmpty(t.singleTypes)?t.singleTypes.map(l=>e.createElement(Y,{key:l.uid},e.createElement(J,null,e.createElement(g.Z,{textColor:"neutral800"},l.globalId)),e.createElement(J,null,e.createElement(B.k,{justifyContent:"right",alignItems:"right"},l.seo?e.createElement(fe,{item:l}):e.createElement($,{startIcon:e.createElement(Q,null),variant:"secondary",to:`/plugins/content-type-builder/content-types/${l.uid}`},o({id:(0,r.O)("SEOPage.info.add"),defaultMessage:"Add component"})))))):e.createElement(R.x,{padding:8,background:"neutral0"},e.createElement(F.x,{icon:e.createElement(ge.w,null),content:o({id:(0,r.O)("SEOPage.info.no-single-types"),defaultMessage:"You don't have any single-types yet..."}),action:e.createElement($,{to:"/plugins/content-type-builder",variant:"secondary",startIcon:e.createElement(Q,null)},o({id:(0,r.O)("SEOPage.info.create-single-type"),defaultMessage:"Create your first single-type"}))})))))))))};var Ye=n(53979);const Je=t=>{const{formatMessage:o}=(0,T.Z)();return e.createElement(R.x,{background:"neutral100"},e.createElement(Ye.A,{secondaryAction:t?null:e.createElement(LinkButton,{variant:"tertiary",to:"/plugins/content-type-builder/component-categories/shared/shared.seo",startIcon:e.createElement(Pencil,null)},o({id:(0,r.O)("SEOPage.header.button.edit-component"),defaultMessage:"Edit SEO component"})),title:o({id:(0,r.O)("SEOPage.header.title"),defaultMessage:"SEO"}),subtitle:o({id:(0,r.O)("SEOPage.header.subtitle"),defaultMessage:"Optimize your content to be SEO friendly"}),as:"h2"}))},Qe=()=>{const{formatMessage:t}=(0,T.Z)(),{lockAppWithAutoreload:o,unlockAppWithAutoreload:l}=(0,k.Vu)(),[s,E]=(0,e.useState)(!0),[C,v]=(0,e.useState)(!1),m=(0,e.useRef)({}),b=(0,e.useRef)({});return(0,e.useEffect)(()=>{(async()=>{if(m.current=await K(),b.current=await V(),!m.current)try{o(),await q()}catch(M){console.log(M)}finally{l(),v(!0)}})().then(()=>{E(!1)})},[C]),s?e.createElement(k.dO,null):e.createElement(e.Fragment,null,e.createElement(Je,{seoComponent:m.current}),e.createElement(R.x,{paddingLeft:8,paddingRight:8},e.createElement(k.Y_,{title:t({id:"Information",defaultMessage:"Information"}),subtitle:t({id:(0,r.O)("HomePage.info.information"),defaultMessage:"When adding your SEO component, make sure to name it 'seo' and to include it in the root of your Content-Type."}),icon:e.createElement(he,null),iconBackground:"primary100"})),e.createElement(Ge,{contentTypes:b.current}))},Xe=(0,e.memo)(Qe);var qe=n(53487);const _e=()=>e.createElement(k.O4,{permissions:qe.Z.main},e.createElement("div",null,e.createElement(j.rs,null,e.createElement(j.AW,{path:`/plugins/${z()}`,component:Xe,exact:!0}))))},62372:(oe,W,n)=>{n.d(W,{M:()=>k});var e=n(45697),j=n(1565);const k=j.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:U})=>U.spaces[4]};
`;k.propTypes={children:e.node.isRequired}},53979:(oe,W,n)=>{n.d(W,{A:()=>B,T:()=>V});var e=n(85893),j=n(67294),k=n(1565);const U=a=>{const x=(0,j.useRef)(null),[h,p]=(0,j.useState)(!0),O=([g])=>{p(g.isIntersecting)};return(0,j.useEffect)(()=>{const g=x.current,N=new IntersectionObserver(O,a);return g&&N.observe(x.current),()=>{g&&N.disconnect()}},[x,a]),[x,h]};var z=n(79698);const R=(a,x)=>{const h=(0,z.W)(x);(0,j.useLayoutEffect)(()=>{const p=new ResizeObserver(h);return Array.isArray(a)?a.forEach(O=>{O.current&&p.observe(O.current)}):a.current&&p.observe(a.current),()=>{p.disconnect()}},[a,h])};var T=n(41580),r=n(11047),K=n(75515);const V=a=>{const x=(0,j.useRef)(null),[h,p]=(0,j.useState)(null),[O,g]=U({root:null,rootMargin:"0px",threshold:0});return R(O,()=>{O.current&&p(O.current.getBoundingClientRect())}),(0,j.useEffect)(()=>{x.current&&p(x.current.getBoundingClientRect())},[x]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:h?.height},ref:O,children:g&&(0,e.jsx)(B,{ref:x,...a})}),!g&&(0,e.jsx)(B,{...a,sticky:!0,width:h?.width})]})};V.displayName="HeaderLayout";const q=(0,k.ZP)(T.x)`
  width: ${({width:a})=>a?`${a/16}rem`:void 0};
  z-index: ${({theme:a})=>a.zIndices[1]};
`,B=j.forwardRef(({navigationAction:a,primaryAction:x,secondaryAction:h,subtitle:p,title:O,sticky:g,width:N,...$},F)=>{const G=typeof p=="string";return g?(0,e.jsx)(q,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:N,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(r.k,{justifyContent:"space-between",children:[(0,e.jsxs)(r.k,{children:[a&&(0,e.jsx)(T.x,{paddingRight:3,children:a}),(0,e.jsxs)(T.x,{children:[(0,e.jsx)(K.Z,{variant:"beta",as:"h1",...$,children:O}),G?(0,e.jsx)(K.Z,{variant:"pi",textColor:"neutral600",children:p}):p]}),h?(0,e.jsx)(T.x,{paddingLeft:4,children:h}):null]}),(0,e.jsx)(r.k,{children:x?(0,e.jsx)(T.x,{paddingLeft:2,children:x}):void 0})]})}):(0,e.jsxs)(T.x,{ref:F,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:a?6:8,background:"neutral100","data-strapi-header":!0,children:[a?(0,e.jsx)(T.x,{paddingBottom:2,children:a}):null,(0,e.jsxs)(r.k,{justifyContent:"space-between",children:[(0,e.jsxs)(r.k,{minWidth:0,children:[(0,e.jsx)(K.Z,{as:"h1",variant:"alpha",...$,children:O}),h?(0,e.jsx)(T.x,{paddingLeft:4,children:h}):null]}),x]}),G?(0,e.jsx)(K.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:p}):p]})})}}]);