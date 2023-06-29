(self.webpackChunklab_nckh=self.webpackChunklab_nckh||[]).push([[8155],{97259:(T,M,t)=>{"use strict";t.r(M),t.d(M,{default:()=>Qe});var e=t(67294),v=t(41054),p=t(86896),b=t(86706),R=t(88767),w=t(69307),F=t(45349),I=t(57713),W=t(79371),U=t(19442),h=t(26789),l=t(28809),a=t(8675),n=t(45697),o=t.n(n),i=t(1565),u=t(50781),d=t(75878),s=t(53616);function y({status:r,data:c}){return{type:s.QM,payload:{status:r,workflows:c}}}function C(r){return{type:s.x4,payload:{stageId:r}}}function f(r={}){return{type:s.Ot,payload:r}}function k(r,c){return{type:s.Nj,payload:{stageId:r,...c}}}function D(r,c){return{type:s.$k,payload:{newIndex:c,oldIndex:r}}}var P=t(78549),L=t(59533);const V=(0,i.ZP)(L.Z)`
  > circle {
    fill: ${({theme:r})=>r.colors.neutral150};
  }
  > path {
    fill: ${({theme:r})=>r.colors.neutral600};
  }
`,N=(0,i.ZP)(u.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:r})=>r.spaces[6]};
    width: ${({theme:r})=>r.spaces[6]};

    > path {
      fill: ${({theme:r})=>r.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:r})=>r.colors.primary600} !important;
    ${P.Z} {
      color: ${({theme:r})=>r.colors.primary600} !important;
    }

    ${V} {
      > circle {
        fill: ${({theme:r})=>r.colors.primary600};
      }
      > path {
        fill: ${({theme:r})=>r.colors.neutral100};
      }
    }
  }

  &:active {
    ${P.Z} {
      color: ${({theme:r})=>r.colors.primary600};
    }

    ${V} {
      > circle {
        fill: ${({theme:r})=>r.colors.primary600};
      }
      > path {
        fill: ${({theme:r})=>r.colors.neutral100};
      }
    }
  }
`;function G({children:r,...c}){return e.createElement(N,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...c},e.createElement(d.k,{gap:2},e.createElement(V,{"aria-hidden":!0}),e.createElement(P.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},r)))}G.propTypes={children:o().node.isRequired};var z=t(22996),K=t(63128),Y=t(27375),q=t(37527),H=t(37362),de=t(9370),te=t(61585),oe=t(28469),se=t(32156),Ee=t(29516),xe=t(8595),Ce=t(34263),ke=t(5660),Me=t(61080),be=t(13037),De=t(75194),$e=t(54878),Re=t(75642),We=t(47815);const Pe=(0,be.s)();function Oe(){return e.createElement(u.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function fe({id:r,index:c,canDelete:g,canReorder:A,isOpen:x=!1,stagesCount:S}){const m=E=>`${E+1} of ${S}`,O=E=>{X($({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:B.value,position:m(E)}))},Q=E=>{X($({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:B.value,position:m(E)}))},_=()=>{X($({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:B.value}))},ue=(E,pe)=>{X($({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:B.value,position:m(E)})),J(D(pe,E))},[le,X]=e.useState(null),{formatMessage:$}=(0,p.Z)(),{trackUsage:ge}=(0,w.rS)(),J=(0,b.I0)(),[ae,ie]=e.useState(x),[B,me]=(0,v.U$)(`stages.${c}.name`),[j,Z]=(0,v.U$)(`stages.${c}.color`),[{handlerId:ne,isDragging:ee,handleKeyDown:Xe},Je,Ye,qe,we]=(0,Re.Y9)(A,{index:c,item:{name:B.value},onGrabItem:O,onDropItem:Q,onMoveItem:ue,onCancel:_,type:s.uL.STAGE}),_e=(0,We.FE)(Je,Ye),Se=Pe.map(({hex:E,name:pe})=>({value:E,label:$({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:pe}),color:E})),et=Se.find(({value:E})=>E===j.value.toUpperCase());return e.useEffect(()=>{we((0,Me.rX)(),{captureDraggingState:!1})},[we,c]),e.createElement(u.x,{ref:_e},le&&e.createElement(z.T,{"aria-live":"assertive"},le),ee?e.createElement(Oe,null):e.createElement(K.U,{size:"S",variant:"primary",onToggle:()=>{ie(!ae),ae||ge("willEditStage")},expanded:ae,shadow:"tableShadow"},e.createElement(Y.B,{title:B.value,togglePosition:"left",action:e.createElement(d.k,null,g&&e.createElement(q.h,{background:"transparent",icon:e.createElement(Ce.Z,null),label:$({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>J(C(r))}),e.createElement(q.h,{background:"transparent",forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":ne,ref:qe,label:$({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:E=>E.stopPropagation(),onKeyDown:Xe},e.createElement(ke.Z,null)))}),e.createElement(H.v,{padding:6,background:"neutral0",hasRadius:!0},e.createElement(de.r,{gap:4},e.createElement(te.P,{col:6},e.createElement(oe.o,{...B,id:B.name,label:$({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:me.error??!1,onChange:E=>{B.onChange(E),J(k(r,{name:E.target.value}))},required:!0})),e.createElement(te.P,{col:6},e.createElement(se.g,{error:Z?.error??!1,name:j.name,id:j.name,required:!0},e.createElement(d.k,{direction:"column",gap:1,alignItems:"stretch"},e.createElement(Ee.Q,null,$({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"})),e.createElement(w.JV,{components:{Option:De.K,SingleValue:$e.R},error:Z?.error,inputId:j.name,name:j.name,options:Se,onChange:({value:E})=>{j.onChange({target:{value:E}}),J(k(r,{color:E}))},value:et??{value:j.value,label:$({id:"Settings.review-workflows.stage.color.name.custom",defaultMessage:"Custom"}),color:j.value}}),e.createElement(xe.c,null))))))))}fe.propTypes=o().shape({id:o().number.isRequired,color:o().string.isRequired,canDelete:o().bool.isRequired,canReorder:o().bool.isRequired,stagesCount:o().number.isRequired}).isRequired;const Te=(0,i.ZP)(u.x)`
  position: relative;
`,Ie=(0,i.ZP)(u.x)`
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
`;function ce({stages:r}){const{formatMessage:c}=(0,p.Z)(),g=(0,b.I0)(),{trackUsage:A}=(0,w.rS)();return e.createElement(d.k,{direction:"column",gap:6,width:"100%"},e.createElement(Te,{spacing:4,width:"100%"},e.createElement(Ie,{background:"neutral200",height:"100%",width:2,zIndex:1}),e.createElement(d.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},r.map((x,S)=>{const m=x?.id??x.__temp_key__;return e.createElement(u.x,{key:`stage-${m}`,as:"li"},e.createElement(fe,{id:m,index:S,canDelete:r.length>1,isOpen:!x.id,canReorder:r.length>1,stagesCount:r.length}))}))),e.createElement(d.k,{direction:"column",gap:6},e.createElement(G,{type:"button",onClick:()=>{g(f({name:""})),A("willCreateStage")}},c({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"}))))}ce.defaultProps={stages:[]},ce.propTypes={stages:o().arrayOf(o().shape({id:o().number,__temp_key__:o().number,name:o().string.isRequired}))};var ve=t(18172),Ae=t(18446),je=t.n(Ae);const he={status:"loading",serverState:{currentWorkflow:null,workflows:[]},clientState:{currentWorkflow:{data:null,isDirty:!1,hasDeletedServerStages:!1}}};function Le(r=he,c){return(0,ve.Uy)(r,g=>{const{payload:A}=c;switch(c.type){case s.QM:{const{status:x,workflows:S}=A;if(g.status=x,S?.length>0){let m=S[0];m={...m,stages:m.stages.map(O=>({...O,color:O?.color??s.FT}))},g.serverState.workflows=S,g.serverState.currentWorkflow=m,g.clientState.currentWorkflow.data=m,g.clientState.currentWorkflow.hasDeletedServerStages=!1}break}case s.x4:{const{stageId:x}=A,{currentWorkflow:S}=r.clientState;g.clientState.currentWorkflow.data.stages=S.data.stages.filter(m=>(m?.id??m.__temp_key__)!==x),S.hasDeletedServerStages||(g.clientState.currentWorkflow.hasDeletedServerStages=!!r.serverState.currentWorkflow.stages.find(m=>m.id===x));break}case s.Ot:{const{currentWorkflow:x}=r.clientState;x.data||(g.clientState.currentWorkflow.data={stages:[]});const S=Be(g.clientState.currentWorkflow.data.stages);g.clientState.currentWorkflow.data.stages.push({...A,color:A?.color??s.FT,__temp_key__:S});break}case s.Nj:{const{currentWorkflow:x}=r.clientState,{stageId:S,...m}=A;g.clientState.currentWorkflow.data.stages=x.data.stages.map(O=>(O.id??O.__temp_key__)===S?{...O,...m}:O);break}case s.$k:{const{currentWorkflow:{data:{stages:x}}}=r.clientState,{newIndex:S,oldIndex:m}=A;if(S>=0&&S<x.length){const O=x[m];let Q=[...x];Q.splice(m,1),Q.splice(S,0,O),g.clientState.currentWorkflow.data.stages=Q}break}default:break}r.clientState.currentWorkflow.data&&(g.clientState.currentWorkflow.isDirty=!je()((0,ve.Vk)(g.clientState.currentWorkflow).data,g.serverState.currentWorkflow))})}const Be=(r=[])=>{const c=r.map(g=>g.id??g.__temp_key__);return Math.max(...c,-1)+1};function Ze(r,c){const g=(0,b.oR)();(0,e.useEffect)(()=>{g.injectReducer(r,c)},[g,r,c])}var Fe=t(53752),re=t(87561);function Ue({formatMessage:r}){return re.Ry({stages:re.IX().of(re.Ry().shape({name:re.Z_().required(r({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,r({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})),color:re.Z_().required(r({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)}))})}var ze=t(87751),Ke=t(21514);const Ne=(0,i.ZP)(d.k)`
  svg path {
    fill: ${({theme:r})=>r.colors.neutral600};
  }
`;function ye({name:r}){return e.createElement(d.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,w.Q1)(300)},e.createElement(Ne,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},e.createElement(Ke.Z,{width:`${8/16}rem`})),e.createElement(P.Z,{fontWeight:"bold"},r))}ye.propTypes={name:o().string.isRequired};var Ve=t(27887);function Ge({type:r,item:c}){switch(r){case s.uL.STAGE:return e.createElement(ye,{...c});default:return null}}function He(){const{trackUsage:r}=(0,w.rS)(),{formatMessage:c}=(0,p.Z)(),g=(0,b.I0)(),{put:A}=(0,w.kY)(),{formatAPIError:x}=(0,w.So)(),S=(0,w.lm)(),{workflows:m,refetchWorkflow:O}=(0,Fe.n)(),{status:Q,clientState:{currentWorkflow:{data:_,isDirty:ue,hasDeletedServerStages:le}}}=(0,b.v9)(Z=>Z?.[s.sN]??he),[X,$]=(0,e.useState)(!1),{mutateAsync:ge,isLoading:J}=(0,R.useMutation)(async({workflowId:Z,stages:ne})=>{const{data:{data:ee}}=await A(`/admin/review-workflows/workflows/${Z}/stages`,{data:ne});return ee},{onSuccess(){S({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}}),ae=async(Z,ne)=>{try{return await ge({workflowId:Z,stages:ne})}catch(ee){return S({type:"warning",message:x(ee)}),null}},ie=async()=>{await ae(_.id,_.stages),await O(),$(!1)},B=async()=>{await ie()},me=()=>{$(Z=>!Z)},j=(0,v.TA)({enableReinitialize:!0,initialValues:_,async onSubmit(){le?$(!0):ie()},validationSchema:Ue({formatMessage:c}),validateOnChange:!1});return Ze(s.sN,Le),(0,e.useEffect)(()=>{g(y({status:m.status,data:m.data}))},[m.status,m.data,g]),(0,e.useEffect)(()=>{r("didViewWorkflow")},[]),e.createElement(w.O4,{permissions:ze.Z.settings["review-workflows"].main},e.createElement(F.A,null,e.createElement(w.SL,{name:c({id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"})}),e.createElement(I.o,{tabIndex:-1},e.createElement(Ve.r,{renderItem:Ge}),e.createElement(v.Hy,{value:j},e.createElement(v.l0,{onSubmit:j.handleSubmit},e.createElement(W.T,{primaryAction:e.createElement(U.z,{startIcon:e.createElement(a.Z,null),type:"submit",size:"M",disabled:!ue,loading:!X&&J},c({id:"global.save",defaultMessage:"Save"})),title:c({id:"Settings.review-workflows.page.title",defaultMessage:"Review Workflows"}),subtitle:c({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:_?.stages?.length??0})}),e.createElement(h.D,null,Q==="loading"&&e.createElement(l.a,null,c({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})),e.createElement(ce,{stages:j.values?.stages})))),e.createElement(w.QH,{bodyText:{id:"Settings.review-workflows.page.delete.confirm.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage. Are you sure you want to save?"},isConfirmButtonLoading:J,isOpen:X,onToggleDialog:me,onConfirm:B}))))}const Qe=He},7654:(T,M,t)=>{var e=t(81763);function v(p){return e(p)&&p!=+p}T.exports=v},81763:(T,M,t)=>{var e=t(44239),v=t(37005),p="[object Number]";function b(R){return typeof R=="number"||v(R)&&e(R)==p}T.exports=b},7334:(T,M,t)=>{var e=t(79833);function v(p){return e(p).toLowerCase()}T.exports=v},20573:(T,M,t)=>{"use strict";t.d(M,{P1:()=>W});var e="NOT_FOUND";function v(h){var l;return{get:function(n){return l&&h(l.key,n)?l.value:e},put:function(n,o){l={key:n,value:o}},getEntries:function(){return l?[l]:[]},clear:function(){l=void 0}}}function p(h,l){var a=[];function n(d){var s=a.findIndex(function(C){return l(d,C.key)});if(s>-1){var y=a[s];return s>0&&(a.splice(s,1),a.unshift(y)),y.value}return e}function o(d,s){n(d)===e&&(a.unshift({key:d,value:s}),a.length>h&&a.pop())}function i(){return a}function u(){a=[]}return{get:n,put:o,getEntries:i,clear:u}}var b=function(l,a){return l===a};function R(h){return function(a,n){if(a===null||n===null||a.length!==n.length)return!1;for(var o=a.length,i=0;i<o;i++)if(!h(a[i],n[i]))return!1;return!0}}function w(h,l){var a=typeof l=="object"?l:{equalityCheck:l},n=a.equalityCheck,o=n===void 0?b:n,i=a.maxSize,u=i===void 0?1:i,d=a.resultEqualityCheck,s=R(o),y=u===1?v(s):p(u,s);function C(){var f=y.get(arguments);if(f===e){if(f=h.apply(null,arguments),d){var k=y.getEntries(),D=k.find(function(P){return d(P.value,f)});D&&(f=D.value)}y.put(arguments,f)}return f}return C.clearCache=function(){return y.clear()},C}function F(h){var l=Array.isArray(h[0])?h[0]:h;if(!l.every(function(n){return typeof n=="function"})){var a=l.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+a+"]")}return l}function I(h){for(var l=arguments.length,a=new Array(l>1?l-1:0),n=1;n<l;n++)a[n-1]=arguments[n];var o=function(){for(var u=arguments.length,d=new Array(u),s=0;s<u;s++)d[s]=arguments[s];var y=0,C,f={memoizeOptions:void 0},k=d.pop();if(typeof k=="object"&&(f=k,k=d.pop()),typeof k!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof k+"]");var D=f,P=D.memoizeOptions,L=P===void 0?a:P,V=Array.isArray(L)?L:[L],N=F(d),G=h.apply(void 0,[function(){return y++,k.apply(null,arguments)}].concat(V)),z=h(function(){for(var Y=[],q=N.length,H=0;H<q;H++)Y.push(N[H].apply(null,arguments));return C=G.apply(null,Y),C});return Object.assign(z,{resultFunc:k,memoizedResultFunc:G,dependencies:N,lastResult:function(){return C},recomputations:function(){return y},resetRecomputations:function(){return y=0}}),z};return o}var W=I(w),U=function(l,a){if(a===void 0&&(a=W),typeof l!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof l));var n=Object.keys(l),o=a(n.map(function(i){return l[i]}),function(){for(var i=arguments.length,u=new Array(i),d=0;d<i;d++)u[d]=arguments[d];return u.reduce(function(s,y,C){return s[n[C]]=y,s},{})});return o}},63128:(T,M,t)=>{"use strict";t.d(M,{U:()=>l,y:()=>U});var e=t(85893),v=t(67294),p=t(1565),b=t(7535),R=t(73879),w=t(78549),F=t(75878),I=t(50781);const W=({theme:a,expanded:n,variant:o,disabled:i,error:u})=>u?`1px solid ${a.colors.danger600} !important`:i?`1px solid ${a.colors.neutral150}`:n?`1px solid ${a.colors.primary600}`:o==="primary"?`1px solid ${a.colors.neutral0}`:`1px solid ${a.colors.neutral100}`,U=(0,p.ZP)(w.Z)``,h=(0,p.ZP)(I.x)`
  border: ${W};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:a})=>a.colors.primary600};

    ${U} {
      color: ${({theme:a,expanded:n})=>n?void 0:a.colors.primary700};
    }

    ${w.Z} {
      color: ${({theme:a,expanded:n})=>n?void 0:a.colors.primary600};
    }

    & > ${F.k} {
      background: ${({theme:a})=>a.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:a})=>a.colors.primary200};
    }
  }
`,l=({children:a,disabled:n=!1,error:o,expanded:i=!1,hasErrorMessage:u=!0,id:d,onToggle:s,toggle:y,size:C="M",variant:f="primary",shadow:k})=>{const D=(0,R.M)(d),P=v.useMemo(()=>({expanded:i,onToggle:s,toggle:y,id:D,size:C,variant:f,disabled:n}),[n,i,D,s,C,y,f]);return(0,e.jsxs)(b.S.Provider,{value:P,children:[(0,e.jsx)(h,{"data-strapi-expanded":i,disabled:n,"aria-disabled":n,expanded:i,hasRadius:!0,variant:f,error:o,shadow:k,children:a}),o&&u&&(0,e.jsx)(I.x,{paddingTop:1,children:(0,e.jsx)(w.Z,{variant:"pi",textColor:"danger600",children:o})})]})}},37362:(T,M,t)=>{"use strict";t.d(M,{v:()=>b});var e=t(85893),v=t(7535),p=t(50781);const b=({children:R,...w})=>{const{expanded:F,id:I}=(0,v.A)();if(!F)return null;const W=`accordion-content-${I}`,U=`accordion-label-${I}`,h=`accordion-desc-${I}`;return(0,e.jsx)(p.x,{role:"region",id:W,"aria-labelledby":U,"aria-describedby":h,...w,children:R})}},7535:(T,M,t)=>{"use strict";t.d(M,{A:()=>p,S:()=>v});var e=t(67294);const v=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),p=()=>(0,e.useContext)(v)},27375:(T,M,t)=>{"use strict";t.d(M,{B:()=>a});var e=t(85893),v=t(21514),p=t(1565),b=t(63128),R=t(7535);const w=({expanded:n,disabled:o,variant:i})=>{let u="neutral100";return n?u="primary100":o?u="neutral150":i==="primary"&&(u="neutral0"),u};var F=t(90139),I=t(80907),W=t(75878),U=t(78549);const h=(0,p.ZP)(F.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:n,expanded:o})=>o?n.colors.primary600:n.colors.neutral500};
    }
  }
`,l=(0,p.ZP)(W.k)`
  min-height: ${({theme:n,size:o})=>n.sizes.accordions[o]};
  border-radius: ${({theme:n,expanded:o})=>o?`${n.borderRadius} ${n.borderRadius} 0 0`:n.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.primary600};
      }
    }
  }
`,a=({title:n,description:o,as:i="span",togglePosition:u="right",action:d,...s})=>{const{onToggle:y,toggle:C,expanded:f,id:k,size:D,variant:P,disabled:L}=(0,R.A)(),V=`accordion-content-${k}`,N=`accordion-label-${k}`,G=`accordion-desc-${k}`,z=D==="M"?6:4,K=D==="M"?z:z-2,Y=w({expanded:f,disabled:L,variant:P}),q={as:i,fontWeight:D==="S"?"bold":void 0,id:N,textColor:f?"primary600":"neutral700",ellipsis:!0,variant:D==="M"?"delta":void 0},H=f?"primary600":"neutral600",de=f?"primary200":"neutral200",te=D==="M"?`${32/16}rem`:`${24/16}rem`,oe=()=>{L||(C&&!y?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),C()):y&&y())},se=(0,e.jsx)(W.k,{justifyContent:"center",borderRadius:"50%",height:te,width:te,transform:f?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:de,cursor:L?"not-allowed":"pointer",onClick:oe,shrink:0,children:(0,e.jsx)(I.J,{as:v.Z,width:D==="M"?`${11/16}rem`:`${8/16}rem`,color:f?"primary600":"neutral600"})});return(0,e.jsx)(l,{paddingBottom:K,paddingLeft:z,paddingRight:z,paddingTop:K,background:Y,expanded:f,size:D,justifyContent:"space-between",cursor:L?"not-allowed":"",children:(0,e.jsxs)(W.k,{gap:3,flex:1,maxWidth:"100%",children:[u==="left"&&se,(0,e.jsx)(h,{onClick:oe,"aria-disabled":L,"aria-expanded":f,"aria-controls":V,"aria-labelledby":N,"data-strapi-accordion-toggle":!0,expanded:f,type:"button",flex:1,minWidth:0,...s,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b.y,{...q,children:n}),o&&(0,e.jsx)(U.Z,{as:"p",id:G,textColor:H,children:o})]})}),u==="right"&&(0,e.jsxs)(W.k,{gap:3,children:[se,d]}),u==="left"&&d]})})}},59533:(T,M,t)=>{"use strict";t.d(M,{Z:()=>p});var e=t(85893);const v=b=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...b,children:[(0,e.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,e.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),p=v}}]);
