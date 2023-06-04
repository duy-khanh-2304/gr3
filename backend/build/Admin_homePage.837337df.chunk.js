"use strict";(self.webpackChunklab_nckh=self.webpackChunklab_nckh||[]).push([[3981],{28048:(S,u,t)=>{t.r(u),t.d(u,{default:()=>fe});var n=t(67294),E=t(64593),x=t(16550),r=t(97285);const j=t.p+"7e9af4fb7e723fcebf1f.svg";var B=t(48474);const T=e=>Object.entries(e).every(([,l])=>Object.entries(l).every(([,o])=>o));var M=t(45697),a=t.n(M),c=t(50781),v=t(86896),g=t(75878),h=t(78549),R=t(96392),k=t(89285),d=t(99872);const L=({type:e,title:l,number:o,content:s,hasLine:p})=>{const{formatMessage:f}=(0,v.Z)();return n.createElement(c.x,null,n.createElement(g.k,null,n.createElement(c.x,{minWidth:(0,r.Q1)(30),marginRight:5},n.createElement(R.Z,{type:e,number:o})),n.createElement(h.Z,{variant:"delta",as:"h3"},f(l))),n.createElement(g.k,{alignItems:"flex-start"},n.createElement(g.k,{justifyContent:"center",minWidth:(0,r.Q1)(30),marginBottom:3,marginTop:3,marginRight:5},p&&n.createElement(k.Z,{type:e,minHeight:e===d.lW?(0,r.Q1)(85):(0,r.Q1)(65)})),n.createElement(c.x,{marginTop:2},e===d.lW&&s)))};L.defaultProps={content:void 0,number:void 0,type:d.VM,hasLine:!0},L.propTypes={content:a().node,number:a().number,title:a().shape({id:a().string,defaultMessage:a().string}).isRequired,type:a().oneOf([d.lW,d.hx,d.VM]),hasLine:a().bool};const w=L,Z=(e,l)=>e===-1||l<e?d.hx:l>e?d.VM:d.lW,b=({sections:e,currentSectionKey:l})=>{const o=e.findIndex(s=>s.key===l);return n.createElement(c.x,null,e.map((s,p)=>n.createElement(w,{key:s.key,title:s.title,content:s.content,number:p+1,type:Z(o,p),hasLine:p!==e.length-1})))};b.defaultProps={currentSectionKey:void 0},b.propTypes={sections:a().arrayOf(a().shape({key:a().string.isRequired,title:a().shape({id:a().string,defaultMessage:a().string}).isRequired,content:a().node})).isRequired,currentSectionKey:a().string};const ke=null;var Ce=t(64729);const Be=()=>{const{guidedTourState:e,setSkipped:l}=useGuidedTour(),{formatMessage:o}=useIntl(),{trackUsage:s}=useTracking(),p=Object.entries(layout).map(([y,C])=>({key:y,title:C.home.title,content:React.createElement(LinkButton,{onClick:()=>s(C.home.trackingEvent),to:C.home.cta.target,endIcon:React.createElement(ArrowRight,null)},o(C.home.cta.title))})),H=p.map(y=>({isDone:Object.entries(e[y.key]).every(([,C])=>C),...y})).find(y=>!y.isDone)?.key,O=()=>{l(!0),s("didSkipGuidedtour")};return React.createElement(Box,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},React.createElement(Flex,{direction:"column",alignItems:"stretch",gap:6},React.createElement(Typography,{variant:"beta",as:"h2"},o({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),React.createElement(StepperHomepage,{sections:p,currentSectionKey:H})),React.createElement(Flex,{justifyContent:"flex-end"},React.createElement(Button,{variant:"tertiary",onClick:O},o({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},Me=null;var m=t(1565),G=t(9370),K=t(80994),i=t(85893);const U=e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"#7289DA",d:"M20.04 0H3.96A2.464 2.464 0 0 0 1.5 2.468v16.2a2.464 2.464 0 0 0 2.46 2.469h13.608l-.636-2.217 1.536 1.426 1.452 1.342 2.58 2.277V2.468A2.464 2.464 0 0 0 20.04 0Zm-4.632 15.65s-.432-.516-.792-.972c1.572-.443 2.172-1.425 2.172-1.425-.492.323-.96.55-1.38.707-.6.251-1.176.419-1.74.515a8.417 8.417 0 0 1-3.108-.012 10.086 10.086 0 0 1-1.764-.515 7.053 7.053 0 0 1-.876-.408c-.036-.024-.072-.036-.108-.06a.166.166 0 0 1-.048-.036 4.202 4.202 0 0 1-.336-.203s.576.958 2.1 1.414c-.36.455-.804.994-.804.994-2.652-.084-3.66-1.821-3.66-1.821 0-3.859 1.728-6.986 1.728-6.986 1.728-1.294 3.372-1.258 3.372-1.258l.12.144c-2.16.623-3.156 1.57-3.156 1.57s.264-.144.708-.348c1.284-.563 2.304-.72 2.724-.755.072-.012.132-.024.204-.024A9.792 9.792 0 0 1 16.8 7.297s-.948-.898-2.988-1.521l.168-.192s1.644-.036 3.372 1.258c0 0 1.728 3.127 1.728 6.986 0 0-1.02 1.737-3.672 1.821Zm-5.58-5.597c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33.012-.73-.54-1.33-1.224-1.33Zm4.38 0c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33 0-.73-.54-1.33-1.224-1.33Z"})}),$=U,_=e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"#FF4500",fillRule:"evenodd",d:"M23.634 12.018c0 6.583-5.263 11.92-11.754 11.92C5.388 23.938.125 18.6.125 12.018S5.388.098 11.88.098c6.491 0 11.754 5.337 11.754 11.92ZM17.94 10.34a1.73 1.73 0 0 1 1.779 1.677c.012.67-.36 1.286-.95 1.585.012.175.012.35 0 .524 0 2.673-3.067 4.842-6.851 4.842s-6.852-2.172-6.852-4.842a3.925 3.925 0 0 1 0-.524 1.662 1.662 0 0 1-.461-.314 1.756 1.756 0 0 1-.076-2.46 1.697 1.697 0 0 1 2.425-.076 8.339 8.339 0 0 1 4.584-1.467l.868-4.136v-.006a.364.364 0 0 1 .435-.282l2.881.584c.184-.326.517-.545.888-.584a1.18 1.18 0 0 1 1.295 1.058 1.188 1.188 0 0 1-1.044 1.313 1.18 1.18 0 0 1-1.294-1.058l-2.515-.536-.763 3.718a8.277 8.277 0 0 1 4.526 1.467 1.71 1.71 0 0 1 1.125-.483Zm-8.798 1.677c-.648 0-1.177.536-1.177 1.194a1.19 1.19 0 0 0 1.177 1.194c.649 0 1.178-.536 1.178-1.194 0-.658-.53-1.194-1.178-1.194Zm2.747 5.39a4.47 4.47 0 0 0 2.904-.919v.047a.339.339 0 0 0 .006-.47.327.327 0 0 0-.465-.007 3.83 3.83 0 0 1-2.457.726 3.802 3.802 0 0 1-2.446-.75.314.314 0 0 0-.403 0 .327.327 0 0 0-.044.454 4.47 4.47 0 0 0 2.905.918Zm1.516-4.155c0 .658.529 1.194 1.178 1.194l-.01.045h.06a1.186 1.186 0 0 0 1.127-1.239c0-.657-.529-1.194-1.178-1.194-.648 0-1.177.537-1.177 1.194Z",clipRule:"evenodd"})}),V=_,z=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 80 80",...e,children:[(0,i.jsx)("path",{fill:"#4945FF",d:"M0 27.7c0-13 0-19.6 4-23.6C8.2 0 14.8 0 27.8 0h24.6C65.4 0 72 0 76 4c4 4.2 4 10.8 4 23.8v24.6c0 13 0 19.6-4 23.6-4.2 4-10.8 4-23.8 4H27.7c-13 0-19.6 0-23.6-4C0 71.8 0 65.2 0 52.2V27.7Z"}),(0,i.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M55.2 24.3h-27V38H42v13.7h13.7V24.8c0-.3-.2-.5-.5-.5Z",clipRule:"evenodd"}),(0,i.jsx)("path",{fill:"#fff",d:"M41.5 38h.5v.5h-.5z"}),(0,i.jsx)("path",{fill:"#9593FF",d:"M28.3 38h13.2c.3 0 .5.2.5.5v13.2H28.8a.5.5 0 0 1-.5-.5V38ZM42 51.7h13.7L42.5 65c-.2.2-.5 0-.5-.2v-13ZM28.3 38H15.2a.3.3 0 0 1-.2-.5l13.3-13.2V38Z"})]}),N=z,Q=e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{fill:"#1DA1F2",d:"M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557Z"})}),J=Q,X=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...e,children:[(0,i.jsx)("path",{fill:"#231F20",d:"M12.103 0C5.533 0 0 5.278 0 11.79V24l12.1-.012c6.57 0 11.9-5.481 11.9-11.992C24 5.486 18.666 0 12.103 0Z"}),(0,i.jsx)("path",{fill:"#FFF9AE",d:"M12.22 4.564a7.43 7.43 0 0 0-3.644.956 7.346 7.346 0 0 0-2.692 2.614 7.26 7.26 0 0 0-.149 7.22L4.4 19.606l4.793-1.072a7.433 7.433 0 0 0 6.355-.14 7.36 7.36 0 0 0 2.513-2.057 7.28 7.28 0 0 0 1.372-2.93 7.243 7.243 0 0 0-.035-3.228A7.281 7.281 0 0 0 17.96 7.28a7.365 7.365 0 0 0-2.557-2.002 7.432 7.432 0 0 0-3.178-.715h-.007Z"}),(0,i.jsx)("path",{fill:"#00AEEF",d:"M18.071 7.426a7.262 7.262 0 0 1 1.51 4.499 7.264 7.264 0 0 1-1.595 4.47 7.38 7.38 0 0 1-4.028 2.558 7.437 7.437 0 0 1-4.765-.43L4.4 19.61l4.88-.571a7.432 7.432 0 0 0 5.181.858 7.381 7.381 0 0 0 4.443-2.778 7.258 7.258 0 0 0-.833-9.693Z"}),(0,i.jsx)("path",{fill:"#00A94F",d:"M16.713 6.078a7.253 7.253 0 0 1 .86 8.928 7.361 7.361 0 0 1-3.736 2.962 7.437 7.437 0 0 1-4.784.065L4.4 19.61l4.793-1.075a7.436 7.436 0 0 0 5.24.313 7.362 7.362 0 0 0 4.123-3.22 7.249 7.249 0 0 0 .914-5.123 7.296 7.296 0 0 0-2.757-4.427Z"}),(0,i.jsx)("path",{fill:"#F15D22",d:"M6.176 15.515a7.246 7.246 0 0 1-.26-4.876 7.312 7.312 0 0 1 2.9-3.95 7.427 7.427 0 0 1 9.26.735 7.387 7.387 0 0 0-4.603-2.771 7.431 7.431 0 0 0-5.277 1.068A7.311 7.311 0 0 0 5.06 10.06a7.249 7.249 0 0 0 .676 5.294L4.4 19.607l1.776-4.092Z"}),(0,i.jsx)("path",{fill:"#E31B23",d:"M5.735 15.353a7.25 7.25 0 0 1-.764-4.818 7.294 7.294 0 0 1 2.465-4.222 7.415 7.415 0 0 1 4.596-1.744 7.42 7.42 0 0 1 4.681 1.509 7.404 7.404 0 0 0-4.865-2.26 7.421 7.421 0 0 0-5.12 1.61 7.293 7.293 0 0 0-2.66 4.626A7.256 7.256 0 0 0 5.28 15.24l-.877 4.37 1.332-4.257Z"})]}),Y=X;var q=t(86820);const ee=(0,m.ZP)($)`
  path {
    fill: #7289da !important;
  }
`,te=(0,m.ZP)(V)`
  > path:first-child {
    fill: #ff4500;
  }
`,I=(0,m.ZP)(N)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,ne=(0,m.ZP)(J)`
  path {
    fill: #1da1f2 !important;
  }
`,ae=(0,m.ZP)(Y)`
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
`,oe=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:n.createElement(q.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:n.createElement(ee,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:n.createElement(te,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:n.createElement(ne,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:n.createElement(ae,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:n.createElement(I,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:n.createElement(I,null),alt:"career"}],le=(0,m.ZP)(K.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:e})=>e.spaces[6]};
    height: ${({theme:e})=>e.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,ie=(0,m.ZP)(G.r)`
  row-gap: ${({theme:e})=>e.spaces[2]};
  column-gap: ${({theme:e})=>e.spaces[4]};
`,Re=()=>{const{formatMessage:e}=useIntl(),{communityEdition:l}=useAppInfo(),o=[...oe,{icon:React.createElement(I,null),link:l?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return React.createElement(Box,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},React.createElement(Box,{paddingBottom:7},React.createElement(Flex,{direction:"column",alignItems:"stretch",gap:5},React.createElement(Flex,{direction:"column",alignItems:"stretch",gap:3},React.createElement(Typography,{variant:"delta",as:"h2",id:"join-the-community"},e({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),React.createElement(Typography,{textColor:"neutral600"},e({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),React.createElement(Link,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:React.createElement(ExternalLink,null)},e({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),React.createElement(ie,null,o.map(({icon:s,link:p,name:f})=>React.createElement(GridItem,{col:6,s:12,key:f.id},React.createElement(le,{size:"L",startIcon:s,variant:"tertiary",href:p,isExternal:!0},e(f))))))},Pe=null;var se=t(19442),re=t(36182),ce=t(69858);const de=(0,m.ZP)(h.Z)`
  word-break: break-word;
`,F=({hasCreatedContentType:e,onCreateCT:l})=>{const{formatMessage:o}=(0,v.Z)();return n.createElement("div",null,n.createElement(c.x,{paddingLeft:6,paddingBottom:10},n.createElement(g.k,{direction:"column",alignItems:"flex-start",gap:5},n.createElement(h.Z,{as:"h1",variant:"alpha"},o(e?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),n.createElement(de,{textColor:"neutral600",variant:"epsilon"},o(e?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),e?n.createElement(re.r,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):n.createElement(se.z,{size:"L",onClick:l,endIcon:n.createElement(ce.Z,null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};F.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},F.propTypes={hasCreatedContentType:a().bool,onCreateCT:a().func};const Te=null,Le=t.p+"27d16aefee06412db90a.png",be=t.p+"bb3108f7fd1e6179bde1.svg",Se=t.p+"bb4d0d527bdfb161bc5a.svg",me=m.ZP.a`
  text-decoration: none;
`,pe=(0,m.ZP)(c.x)`
  background-image: url(${({backgroundImage:e})=>e});
`,ue=(0,m.ZP)(g.k)`
  background: rgba(255, 255, 255, 0.3);
`,je=()=>{const{formatMessage:e}=useIntl(),{trackUsage:l}=useTracking();return React.createElement(me,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{l("didClickOnTryStrapiCloudSection")}},React.createElement(Flex,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},React.createElement(pe,{backgroundImage:cloudIconBackgroundImage,hasRadius:!0,padding:3},React.createElement(ue,{width:pxToRem(32),height:pxToRem(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},React.createElement("img",{src:cloudIcon,alt:e({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),React.createElement(Flex,{gap:1,direction:"column",alignItems:"start"},React.createElement(Flex,null,React.createElement(Typography,{fontWeight:"semiBold",variant:"pi"},e({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),React.createElement(Typography,{textColor:"neutral600"},e({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),React.createElement(Box,{src:cloudFlagsImage,position:"absolute",top:0,right:0,as:"img"}))))},Ze=null,D=m.ZP.a`
  text-decoration: none;
`,De=()=>{const{formatMessage:e}=useIntl(),{trackUsage:l}=useTracking(),o=s=>{l(s)};return React.createElement(Flex,{direction:"column",alignItems:"stretch",gap:5},React.createElement(CloudBox,null),React.createElement(D,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},React.createElement(ContentBox,{title:e({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:e({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:React.createElement(InformationSquare,null),iconBackground:"primary100"})),React.createElement(D,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},React.createElement(ContentBox,{title:e({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:e({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:React.createElement(CodeSquare,null),iconBackground:"warning100"})),React.createElement(D,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},React.createElement(ContentBox,{title:e({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:e({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:React.createElement(PlaySquare,null),iconBackground:"secondary100"})),React.createElement(D,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},React.createElement(ContentBox,{title:e({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:e({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:React.createElement(FeatherSquare,null),iconBackground:"alternative100"})))},we=null;var ge=function(){return window&&window.strapi&&window.strapi.isEE?t(94018).Z:t(67875).Z}(),Ie=null,he=function(){var l=(0,B.bP)(),o=l.collectionTypes,s=l.singleTypes,p=l.isLoading,f=(0,r.c1)(),H=f.guidedTourState,O=f.isGuidedTourVisible,y=f.isSkipped;ge();var C=!T(H)&&O&&!y,Ee=(0,x.k6)(),ve=Ee.push,He=function(W){W.preventDefault(),ve("/plugins/content-type-builder/content-types/create-content-type")},Oe=(0,n.useMemo)(function(){var A=function(ye){return ye.filter(function(xe){return xe.isDisplayed})};return A(o).length>1||A(s).length>0},[o,s]);return p?n.createElement(r.dO,null):n.createElement("div",null,"Duy Khanh")};const fe=(0,n.memo)(he)},67875:(S,u,t)=>{t.d(u,{Z:()=>E});const E=()=>null},86820:(S,u,t)=>{t.d(u,{Z:()=>x});var n=t(85893);const E=r=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...r,children:(0,n.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),x=E},36182:(S,u,t)=>{t.d(u,{r:()=>M});var n=t(85893),E=t(67294),x=t(91393),r=t(1565),j=t(15585),B=t(63507),P=t(75515);const T=(0,r.ZP)(B.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:a})=>a.spaces[2]};
  pointer-events: ${({disabled:a})=>a?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:a,theme:c})=>a?c.colors.neutral600:c.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:a})=>a.colors.primary500};
  }

  &:active {
    color: ${({theme:a})=>a.colors.primary700};
  }

  ${j.BF};
`,M=E.forwardRef(({children:a,href:c,disabled:v=!1,startIcon:g,endIcon:h,isExternal:R=!0,...k},d)=>(0,n.jsxs)(T,{ref:d,href:c,disabled:v,isExternal:R,...k,children:[g,(0,n.jsx)(P.Z,{textColor:v?"neutral600":"primary600",children:a}),h,c&&!h&&R&&(0,n.jsx)(x.Z,{})]}));M.displayName="Link"},80994:(S,u,t)=>{t.d(u,{Q:()=>a});var n=t(85893),E=t(67294),x=t(1565),r=t(92577),j=t(21817),B=t(63507),P=t(11047),T=t(75515);const M=(0,x.ZP)(j.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${r.sg}
    &:active {
      ${r.sg}
    }
  }

  &:hover {
    ${r.yP}
  }

  &:active {
    ${r.tB}
  }

  ${r.PD}
`,a=E.forwardRef(({variant:c="default",startIcon:v,endIcon:g,disabled:h=!1,children:R,size:k="S",as:d=B.f,...L},w)=>{const Z=k==="S"?2:"10px",b=4;return(0,n.jsxs)(M,{ref:w,"aria-disabled":h,size:k,variant:c,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:Z,paddingLeft:b,paddingRight:b,paddingTop:Z,pointerEvents:h?"none":void 0,...L,as:d||B.f,children:[v&&(0,n.jsx)(P.k,{"aria-hidden":!0,children:v}),(0,n.jsx)(T.Z,{variant:k==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:R}),g&&(0,n.jsx)(P.k,{"aria-hidden":!0,children:g})]})});a.displayName="LinkButton"}}]);
