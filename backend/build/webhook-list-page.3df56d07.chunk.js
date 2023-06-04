"use strict";(self.webpackChunklab_nckh=self.webpackChunklab_nckh||[]).push([[4121],{43575:(w,M,t)=>{t.r(M),t.d(M,{default:()=>ce});var e=t(67294),o=t(97285),h=t(87751),m=t(16550),g=t(86896),u=t(88767),x=t(46683),y=t(45349),f=t(57713),r=t(79371),E=t(15483),l=t(78549),D=t(19442),A=t(26789),K=t(50781),_=t(51541),ee=t(62009),te=t(42403),V=t(6090),d=t(62351),F=t(62779),ne=t(22996),ae=t(94487),S=t(75878),C=t(85893),z=t(1565);const B=z.ZP.div`
  background: ${({theme:s})=>s.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:s})=>s?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:s})=>s.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:s})=>s.spaces[1]};
    top: ${({theme:s})=>s.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,se=z.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${B} {
    background: ${({theme:s})=>s.colors.success500};
  }

  &[aria-checked='true'] ${B}:before {
    transform: translateX(1rem);
  }
`,oe=e.forwardRef(({label:s,onChange:v,onLabel:p="On",offLabel:c="Off",selected:a,visibleLabels:b=!1,...L},R)=>(0,C.jsx)(se,{ref:R,role:"switch","aria-checked":a,"aria-label":s,onClick:v,visibleLabels:b,type:"button",...L,children:(0,C.jsxs)(S.k,{children:[(0,C.jsxs)(B,{children:[(0,C.jsx)("span",{children:p}),(0,C.jsx)("span",{children:c})]}),b&&(0,C.jsx)(K.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:a?"success600":"danger600",children:a?p:c})]})}));var H=t(37527),le=t(81391),$=t(12978),N=t(34263),ie=t(36670),re=t(58252);const de=()=>{const[s,v]=(0,e.useState)(!1),[p,c]=(0,e.useState)([]),{formatMessage:a}=(0,g.Z)(),{formatAPIError:b}=(0,o.So)(),L=(0,o.lm)();(0,o.go)();const{push:R}=(0,m.k6)(),{pathname:Q}=(0,m.TH)(),{isLoading:he,allowedActions:{canCreate:W,canUpdate:Y,canDelete:G}}=(0,o.ss)(h.Z.settings.webhooks),{get:me,post:ge,put:ue}=(0,o.kY)(),{notifyStatus:X}=(0,x.G)(),Ee="webhooks",{isLoading:fe,data:T,error:Z,refetch:J}=(0,u.useQuery)(Ee,async()=>{const{data:{data:n}}=await me("/admin/webhooks");return n});(0,e.useEffect)(()=>{if(Z){L({type:"warning",message:b(Z)});return}T&&X(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[T,Z,L,a,X,b]);const q=(0,u.useMutation)(async()=>{await ge("/admin/webhooks/batch-delete",{ids:p})},{onError(n){L({type:"warning",message:b(n)}),v(!1)},onSuccess(){c([]),v(!1),J()}}),ve=(0,u.useMutation)(async({isEnabled:n,id:i})=>{const{id:j,...U}=T.find(pe=>pe.id===i)??{},Ce={...U,isEnabled:n};await ue(`/admin/webhooks/${i}`,Ce)},{onError(n){L({type:"warning",message:b(n)})},onSuccess(){J()}}),be=()=>q.mutate(),Me=n=>c(n?T.map(i=>i.id):[]),xe=(n,i)=>c(n?j=>[...j,i]:j=>j.filter(U=>U!==i)),k=n=>R(`${Q}/${n}`),I=he||fe,O=T?.length??0,P=p.length;return e.createElement(y.A,null,e.createElement(o.SL,{name:"Webhooks"}),e.createElement(f.o,{"aria-busy":I},e.createElement(r.T,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:W&&!I&&e.createElement(o.Qj,{startIcon:e.createElement($.Z,null),variant:"default",to:`${Q}/create`,size:"S"},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),P>0&&G&&e.createElement(E.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:P})),e.createElement(D.z,{onClick:()=>v(!0),startIcon:e.createElement(N.Z,null),size:"L",variant:"danger-light"},a({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(A.D,null,I?e.createElement(K.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(o.dO,null)):O>0?e.createElement(_.i,{colCount:5,rowCount:O+1,footer:e.createElement(ee.c,{onClick:()=>W?k("create"):{},icon:e.createElement($.Z,null)},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(te.h,null,e.createElement(V.Tr,null,e.createElement(d.Th,null,e.createElement(F.C,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:P>0&&P<O,value:P===O,onValueChange:Me})),e.createElement(d.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(d.Th,{width:"60%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(d.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(d.Th,null,e.createElement(ne.T,null,a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ae.p,null,T.map(n=>e.createElement(V.Tr,{key:n.id,...(0,o.X7)({fn:()=>k(n.id),condition:Y})},e.createElement(d.Td,{...o.UW},e.createElement(F.C,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:p?.includes(n.id),onValueChange:i=>xe(i,n.id),name:"select"})),e.createElement(d.Td,null,e.createElement(l.Z,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(d.Td,null,e.createElement(l.Z,{textColor:"neutral800"},n.url)),e.createElement(d.Td,null,e.createElement(S.k,null,e.createElement(oe,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:i=>{i.stopPropagation(),ve.mutate({isEnabled:!n.isEnabled,id:n.id})},visibleLabels:!0}))),e.createElement(d.Td,null,e.createElement(S.k,{gap:1},Y&&e.createElement(H.h,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(ie.Z,null),noBorder:!0}),G&&e.createElement(H.h,{onClick:i=>{i.stopPropagation(),c([n.id]),v(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(N.Z,null),noBorder:!0}))))))):e.createElement(le.x,{icon:e.createElement(re.Z,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(D.z,{variant:"secondary",startIcon:e.createElement($.Z,null),onClick:()=>W?k("create"):{}},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(o.QH,{isOpen:s,onToggleDialog:()=>v(n=>!n),onConfirm:be,isConfirmButtonLoading:q.isLoading}))},ce=()=>e.createElement(o.O4,{permissions:h.Z.settings.webhooks.main},e.createElement(de,null))},15483:(w,M,t)=>{t.d(M,{Z:()=>f});var e=t(85893),o=t(67294),h=t(45697),m=t(1565),g=t(75878),u=t(50781);const x=(0,m.ZP)(g.k)`
  & > * + * {
    margin-left: ${({theme:r})=>r.spaces[2]};
  }

  margin-left: ${({pullRight:r})=>r?"auto":void 0};
`,y=(0,m.ZP)(x)`
  flex-shrink: 0;
`,f=({startActions:r,endActions:E})=>r||E?(0,e.jsx)(u.x,{paddingLeft:10,paddingRight:10,children:(0,e.jsx)(u.x,{paddingBottom:4,children:(0,e.jsxs)(g.k,{justifyContent:"space-between",alignItems:"flex-start",children:[r&&(0,e.jsx)(x,{wrap:"wrap",children:r}),E&&(0,e.jsx)(y,{pullRight:!0,children:E})]})})}):null;f.defaultProps={endActions:void 0,startActions:void 0},f.propTypes={endActions:h.node,startActions:h.node}},62009:(w,M,t)=>{t.d(M,{c:()=>E});var e=t(85893),o=t(67294),h=t(45697),m=t(1565),g=t(50781),u=t(81984),x=t(75878),y=t(78549);const f=(0,m.ZP)(g.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,r=(0,m.ZP)(g.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,E=({children:l,icon:D,...A})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(u.i,{}),(0,e.jsx)(r,{as:"button",background:"primary100",padding:5,...A,children:(0,e.jsxs)(x.k,{children:[(0,e.jsx)(f,{"aria-hidden":!0,background:"primary200",children:D}),(0,e.jsx)(g.x,{paddingLeft:3,children:(0,e.jsx)(y.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]});E.propTypes={children:h.string.isRequired,icon:h.node.isRequired}}}]);
