"use strict";(self.webpackChunklab_nckh=self.webpackChunklab_nckh||[]).push([[3677],{14928:(T,i,e)=>{e.r(i),e.d(i,{default:()=>I});var t=e(67294),a=e(73599),r=e(64593),d=e(86896),u=e(87751),E=e(14087),g=e(17034),s=e(185),o=e(53979),P=e(49066),y=e(38939),C=e(8060),h=e(79031),c=e(37909),m=e(75515),L=e(15234),O=e(88767);const x=async()=>{const{get:l}=(0,a.tg)(),{data:n}=await l("/admin/plugins");return n},D=l=>{const n=(0,a.lm)();return(0,O.useQuery)("list-enabled-plugins",()=>x(),{onSuccess(){l&&l()},onError(){n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},A=()=>{const{formatMessage:l}=(0,d.Z)(),{notifyStatus:n}=(0,E.G)();(0,a.go)();const f=l({id:"global.plugins",defaultMessage:"Plugins"}),Z=()=>{n(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:f}))},{status:p,data:M}=D(Z);return p!=="success"&&p!=="error"?t.createElement(g.A,null,t.createElement(s.o,{"aria-busy":!0},t.createElement(a.dO,null))):t.createElement(g.A,null,t.createElement(s.o,null,t.createElement(o.T,{title:f,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),t.createElement(P.D,null,t.createElement(y.i,{colCount:2,rowCount:M?.plugins?.length??0+1},t.createElement(C.h,null,t.createElement(h.Tr,null,t.createElement(c.Th,null,t.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),t.createElement(c.Th,null,t.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),t.createElement(L.p,null,M.plugins.map(({name:v,displayName:B,description:N})=>t.createElement(h.Tr,{key:v},t.createElement(c.Td,null,t.createElement(m.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${v}`,defaultMessage:B}))),t.createElement(c.Td,null,t.createElement(m.Z,{textColor:"neutral800"},l({id:`global.plugins.${v}.description`,defaultMessage:N}))))))))))},I=()=>{const{formatMessage:l}=(0,d.Z)(),n=l({id:"global.plugins",defaultMessage:"Plugins"});return t.createElement(a.O4,{permissions:u.Z.marketplace.main},t.createElement(r.q,{title:n}),t.createElement(A,null))}},17034:(T,i,e)=>{e.d(i,{A:()=>s});var t=e(85893),a=e(67294),r=e(45697),d=e(1565),u=e(41580);const E=(0,d.ZP)(u.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:o})=>o?"auto 1fr":"1fr"};
`,g=(0,d.ZP)(u.x)`
  overflow-x: hidden;
`,s=({sideNav:o,children:P})=>(0,t.jsxs)(E,{hasSideNav:!!o,children:[o,(0,t.jsx)(g,{paddingBottom:10,children:P})]});s.defaultProps={sideNav:void 0},s.propTypes={children:r.node.isRequired,sideNav:r.node}}}]);
