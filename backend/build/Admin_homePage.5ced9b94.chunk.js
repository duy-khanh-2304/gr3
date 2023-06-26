"use strict";(self.webpackChunklab_nckh=self.webpackChunklab_nckh||[]).push([[3981],{91550:(Z,v,t)=>{t.r(v),t.d(v,{default:()=>De});var e=t(67294),M=t(44012),l=t(1565),E=t(64593),b=t(16550),a=t(79946),s=t(50781),S=t(45349),B=t(57713),r=t(9370),u=t(61585);const T=t.p+"7e9af4fb7e723fcebf1f.svg";var P=t(48474);const x=n=>Object.entries(n).every(([,i])=>Object.entries(i).every(([,o])=>o));var p=t(86896),c=t(75878),f=t(77270),O=t(19442),D=t(69858),I=t(45697),d=t.n(I),z=t(96392),N=t(89285),h=t(99872);const j=({type:n,title:i,number:o,content:m,hasLine:g})=>{const{formatMessage:y}=(0,p.Z)();return e.createElement(s.x,null,e.createElement(c.k,null,e.createElement(s.x,{minWidth:(0,a.pxToRem)(30),marginRight:5},e.createElement(z.Z,{type:n,number:o})),e.createElement(f.Z,{variant:"delta",as:"h3"},y(i))),e.createElement(c.k,{alignItems:"flex-start"},e.createElement(c.k,{justifyContent:"center",minWidth:(0,a.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},g&&e.createElement(N.Z,{type:n,minHeight:n===h.lW?(0,a.pxToRem)(85):(0,a.pxToRem)(65)})),e.createElement(s.x,{marginTop:2},n===h.lW&&m)))};j.defaultProps={content:void 0,number:void 0,type:h.VM,hasLine:!0},j.propTypes={content:d().node,number:d().number,title:d().shape({id:d().string,defaultMessage:d().string}).isRequired,type:d().oneOf([h.lW,h.hx,h.VM]),hasLine:d().bool};const V=j,Q=(n,i)=>n===-1||i<n?h.hx:i>n?h.VM:h.lW,W=({sections:n,currentSectionKey:i})=>{const o=n.findIndex(m=>m.key===i);return e.createElement(s.x,null,n.map((m,g)=>e.createElement(V,{key:m.key,title:m.title,content:m.content,number:g+1,type:Q(o,g),hasLine:g!==n.length-1})))};W.defaultProps={currentSectionKey:void 0},W.propTypes={sections:d().arrayOf(d().shape({key:d().string.isRequired,title:d().shape({id:d().string,defaultMessage:d().string}).isRequired,content:d().node})).isRequired,currentSectionKey:d().string};const J=W;var X=t(64729);const Y=()=>{const{guidedTourState:n,setSkipped:i}=(0,a.useGuidedTour)(),{formatMessage:o}=(0,p.Z)(),{trackUsage:m}=(0,a.useTracking)(),g=Object.entries(X.Z).map(([k,C])=>({key:k,title:C.home.title,content:e.createElement(a.LinkButton,{onClick:()=>m(C.home.trackingEvent),to:C.home.cta.target,endIcon:e.createElement(D.Z,null)},o(C.home.cta.title))})),K=g.map(k=>({isDone:Object.entries(n[k.key]).every(([,C])=>C),...k})).find(k=>!k.isDone)?.key,U=()=>{i(!0),m("didSkipGuidedtour")};return e.createElement(s.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(f.Z,{variant:"beta",as:"h2"},o({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(J,{sections:g,currentSectionKey:K})),e.createElement(c.k,{justifyContent:"flex-end"},e.createElement(O.z,{variant:"tertiary",onClick:U},o({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))};var w=t(80994),$=t(36182),q=t(88514),_=t(93768),ee=t(34012),te=t(52551),ne=t(93570),oe=t(86820),ae=t(91393);const ie=(0,l.default)(q.Z)`
  path {
    fill: #7289da !important;
  }
`,re=(0,l.default)(_.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,A=(0,l.default)(ee.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,le=(0,l.default)(te.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,se=(0,l.default)(ne.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,ce=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(oe.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(ie,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(re,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(le,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(se,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(A,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(A,null),alt:"career"}],de=(0,l.default)(w.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:n})=>n.spaces[6]};
    height: ${({theme:n})=>n.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,me=(0,l.default)(r.r)`
  row-gap: ${({theme:n})=>n.spaces[2]};
  column-gap: ${({theme:n})=>n.spaces[4]};
`,ue=()=>{const{formatMessage:n}=(0,p.Z)(),{communityEdition:i}=(0,a.useAppInfo)(),o=[...ce,{icon:e.createElement(A,null),link:i?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(s.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(s.x,{paddingBottom:7},e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(f.Z,{variant:"delta",as:"h2",id:"join-the-community"},n({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(f.Z,{textColor:"neutral600"},n({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement($.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(ae.Z,null)},n({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(me,null,o.map(({icon:m,link:g,name:y})=>e.createElement(u.P,{col:6,s:12,key:y.id},e.createElement(de,{size:"L",startIcon:m,variant:"tertiary",href:g,isExternal:!0},n(y))))))},pe=(0,l.default)(f.Z)`
  word-break: break-word;
`,G=({hasCreatedContentType:n,onCreateCT:i})=>{const{formatMessage:o}=(0,p.Z)();return e.createElement("div",null,e.createElement(s.x,{paddingLeft:6,paddingBottom:10},e.createElement(c.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(f.Z,{as:"h1",variant:"alpha"},o(n?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(pe,{textColor:"neutral600",variant:"epsilon"},o(n?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),n?e.createElement($.r,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(O.z,{size:"L",onClick:i,endIcon:e.createElement(D.Z,null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};G.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},G.propTypes={hasCreatedContentType:d().bool,onCreateCT:d().func};const ge=G;var fe=t(28077),he=t(37855),Ee=t(12951),ye=t(2204);const ve=t.p+"27d16aefee06412db90a.png",ke=t.p+"bb3108f7fd1e6179bde1.svg",Ce=t.p+"bb4d0d527bdfb161bc5a.svg",Me=l.default.a`
  text-decoration: none;
`,Te=(0,l.default)(s.x)`
  background-image: url(${({backgroundImage:n})=>n});
`,Be=(0,l.default)(c.k)`
  background: rgba(255, 255, 255, 0.3);
`,Pe=()=>{const{formatMessage:n}=(0,p.Z)(),{trackUsage:i}=(0,a.useTracking)();return e.createElement(Me,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{i("didClickOnTryStrapiCloudSection")}},e.createElement(c.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(Te,{backgroundImage:ve,hasRadius:!0,padding:3},e.createElement(Be,{width:(0,a.pxToRem)(32),height:(0,a.pxToRem)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:ke,alt:n({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(c.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(c.k,null,e.createElement(f.Z,{fontWeight:"semiBold",variant:"pi"},n({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(f.Z,{textColor:"neutral600"},n({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(s.x,{src:Ce,position:"absolute",top:0,right:0,as:"img"}))))},H=l.default.a`
  text-decoration: none;
`,Le=()=>{const{formatMessage:n}=(0,p.Z)(),{trackUsage:i}=(0,a.useTracking)(),o=m=>{i(m)};return e.createElement(c.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(Pe,null),e.createElement(H,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},e.createElement(a.ContentBox,{title:n({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:n({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(fe.Z,null),iconBackground:"primary100"})),e.createElement(H,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},e.createElement(a.ContentBox,{title:n({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:n({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(he.Z,null),iconBackground:"warning100"})),e.createElement(H,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},e.createElement(a.ContentBox,{title:n({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:n({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(Ee.Z,null),iconBackground:"secondary100"})),e.createElement(H,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},e.createElement(a.ContentBox,{title:n({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:n({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(ye.Z,null),iconBackground:"alternative100"})))};var xe=function(){return window&&window.strapi&&window.strapi.isEE?t(94018).Z:t(67875).Z}(),be=(0,l.default)(s.x).withConfig({displayName:"HomePage__LogoContainer",componentId:"sc-1md9zz4-0"})(["position:absolute;top:0;right:0;img{width:","rem;}"],150/16),Se=function(){var i=(0,P.bP)(),o=i.collectionTypes,m=i.singleTypes,g=i.isLoading,y=(0,a.useGuidedTour)(),K=y.guidedTourState,U=y.isGuidedTourVisible,k=y.isSkipped;xe();var C=!x(K)&&U&&!k,Re=(0,b.k6)(),Oe=Re.push,Ie=function(F){F.preventDefault(),Oe("/plugins/content-type-builder/content-types/create-content-type")},He=(0,e.useMemo)(function(){var R=function(Ze){return Ze.filter(function(je){return je.isDisplayed})};return R(o).length>1||R(m).length>0},[o,m]);return g?e.createElement(a.LoadingIndicatorPage,null):e.createElement(S.A,null,e.createElement(M.Z,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},function(R){return e.createElement(E.q,{title:R[0]})}),e.createElement(B.o,null,e.createElement(be,null,e.createElement("img",{alt:"","aria-hidden":!0,src:T})),e.createElement(s.x,{padding:10},e.createElement(r.r,null,e.createElement(u.P,{col:8,s:12},e.createElement(ge,{onCreateCT:Ie,hasCreatedContentType:He}))),e.createElement(r.r,{gap:6},e.createElement(u.P,{col:8,s:12},C?e.createElement(Y,null):e.createElement(Le,null)),e.createElement(u.P,{col:4,s:12},e.createElement(ue,null))))))};const De=(0,e.memo)(Se)},67875:(Z,v,t)=>{t.d(v,{Z:()=>M});const M=()=>null},36182:(Z,v,t)=>{t.d(v,{r:()=>B});var e=t(85893),M=t(67294),l=t(91393),E=t(1565),b=t(15585),a=t(63507),s=t(75515);const S=(0,E.default)(a.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:r})=>r.spaces[2]};
  pointer-events: ${({disabled:r})=>r?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:r,theme:u})=>r?u.colors.neutral600:u.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:r})=>r.colors.primary500};
  }

  &:active {
    color: ${({theme:r})=>r.colors.primary700};
  }

  ${b.BF};
`,B=M.forwardRef(({children:r,href:u,disabled:T=!1,startIcon:P,endIcon:L,isExternal:x=!0,...p},c)=>(0,e.jsxs)(S,{ref:c,href:u,disabled:T,isExternal:x,...p,children:[P,(0,e.jsx)(s.Z,{textColor:T?"neutral600":"primary600",children:r}),L,u&&!L&&x&&(0,e.jsx)(l.Z,{})]}));B.displayName="Link"},80994:(Z,v,t)=>{t.d(v,{Q:()=>r});var e=t(85893),M=t(67294),l=t(1565),E=t(92577),b=t(21817),a=t(63507),s=t(11047),S=t(75515);const B=(0,l.default)(b.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${E.sg}
    &:active {
      ${E.sg}
    }
  }

  &:hover {
    ${E.yP}
  }

  &:active {
    ${E.tB}
  }

  ${E.PD}
`,r=M.forwardRef(({variant:u="default",startIcon:T,endIcon:P,disabled:L=!1,children:x,size:p="S",as:c=a.f,...f},O)=>{const D=p==="S"?2:"10px",I=4;return(0,e.jsxs)(B,{ref:O,"aria-disabled":L,size:p,variant:u,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:D,paddingLeft:I,paddingRight:I,paddingTop:D,pointerEvents:L?"none":void 0,...f,as:c||a.f,children:[T&&(0,e.jsx)(s.k,{"aria-hidden":!0,children:T}),(0,e.jsx)(S.Z,{variant:p==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:x}),P&&(0,e.jsx)(s.k,{"aria-hidden":!0,children:P})]})});r.displayName="LinkButton"}}]);
