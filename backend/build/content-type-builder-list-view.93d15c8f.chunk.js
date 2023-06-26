"use strict";(self.webpackChunklab_nckh=self.webpackChunklab_nckh||[]).push([[5905],{57134:(rt,_,a)=>{a.r(_),a.d(_,{default:()=>at});var e=a(67294),c=a(79946),B=a(12978),be=a(8675),ee=a(36670),Ce=a(60793),Te=a(79371),C=a(75878),F=a(19442),ve=a(26789),h=a(50781),xe=a(27361),v=a.n(xe),Ze=a(18721),$e=a.n(Ze),Me=a(18446),te=a.n(Me),ke=a(11700),ne=a.n(ke),A=a(86896),V=a(16550),Re=a(45697),n=a.n(Re),oe=a(51541),ae=a(42403),le=a(6090),P=a(62351),E=a(77270),De=a(62009),re=a(26478),I=a(13588),y=a(1565),f=a(5002),Le=a(15800);const we=(0,y.default)(C.k)`
  border-radius: 50%;
  color: ${({theme:t,isActive:o})=>o?t.colors.primary600:t.colors.neutral600};
  height: ${({theme:t})=>t.spaces[8]};
  width: ${({theme:t})=>t.spaces[8]};

  svg {
    height: ${({theme:t})=>t.spaces[5]};
    width: ${({theme:t})=>t.spaces[5]};
  }
`;function O({isActive:t}){return e.createElement(we,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",isActive:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}O.defaultProps={isActive:!1},O.propTypes={isActive:n().bool};const se=(0,y.default)(h.x)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,c.pxToRem)(8)};

  svg {
    width: ${(0,c.pxToRem)(10)};
    height: ${(0,c.pxToRem)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Ae=(0,y.default)(C.k)`
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${se} {
      display: block;
    }

    ${E.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`;function j({component:t,dzName:o,index:l,isActive:s,isInDevelopmentMode:d,onClick:r}){const{modifiedData:p,removeComponentFromDynamicZone:x}=(0,I.Z)(),{schema:{displayName:T}}=v()(p,["components",t],{schema:{}}),b=u=>{u.stopPropagation(),x(o,l)};return e.createElement(Ae,{as:"button",alignItems:"center",direction:"column",className:s?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,type:"button",onClick:r},e.createElement(O,{isActive:s}),e.createElement(h.x,{marginTop:1,maxWidth:"100%"},e.createElement(E.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0},T)),d&&e.createElement(se,{as:"button",onClick:b,type:"button"},e.createElement(Le.Z,null)))}j.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},j.propTypes={component:n().string,dzName:n().string.isRequired,index:n().number.isRequired,isActive:n().bool,isInDevelopmentMode:n().bool,onClick:n().func};const Ie=j,ie=y.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,c.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,c.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:o,theme:l})=>o?`background-color: ${l.colors.primary200};`:t?`background-color: ${l.colors.primary200};`:`background: ${l.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function K({customRowComponent:t,component:o,isFromDynamicZone:l,isNestedInDZComponent:s,firstLoopComponentUid:d}){const{modifiedData:r}=(0,I.Z)(),{schema:{attributes:p}}=v()(r,["components",o],{schema:{attributes:[]}});return e.createElement(ie,{isChildOfDynamicZone:l,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(me,{customRowComponent:t,items:p,targetUid:o,firstLoopComponentUid:d||o,editTarget:"components",isFromDynamicZone:l,isNestedInDZComponent:s,isSub:!0,secondLoopComponentUid:d?o:null})))}K.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},K.propTypes={component:n().string,customRowComponent:n().func,firstLoopComponentUid:n().string,isFromDynamicZone:n().bool,isNestedInDZComponent:n().bool};const ce=K,Be=(0,y.default)(B.Z)`
  width: ${(0,c.pxToRem)(32)};
  height: ${(0,c.pxToRem)(32)};
  padding: ${(0,c.pxToRem)(9)};
  border-radius: ${(0,c.pxToRem)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Fe=(0,y.default)(h.x)`
  height: ${(0,c.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Ne=(0,y.default)(C.k)`
  width: 100%;
  overflow-x: auto;
`,Se=(0,y.default)(h.x)`
  padding-top: ${(0,c.pxToRem)(90)};
`,Pe=(0,y.default)(C.k)`
  flex-shrink: 0;
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function H({customRowComponent:t,components:o,addComponent:l,name:s,targetUid:d}){const{isInDevelopmentMode:r}=(0,I.Z)(),[p,x]=(0,e.useState)(0),{formatMessage:T}=(0,A.Z)(),b=i=>{p!==i&&x(i)},u=()=>{l(s)};return e.createElement(ie,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(Fe,{paddingLeft:8},e.createElement(Ne,{gap:2},r&&e.createElement("button",{type:"button",onClick:u},e.createElement(Pe,{direction:"column",alignItems:"stretch",gap:1},e.createElement(Be,null),e.createElement(E.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},T({id:(0,f.Z)("button.component.add"),formatMessage:"Add a component"})))),o.map((i,m)=>e.createElement(Ie,{key:i,dzName:s,index:m,component:i,isActive:p===m,isInDevelopmentMode:r,onClick:()=>b(m)})))),e.createElement(Se,null,o.map((i,m)=>{const g={customRowComponent:t,component:i};return e.createElement(h.x,{tabId:`${m}`,key:i,style:{display:p===m?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(ce,{...g,isFromDynamicZone:!0,targetUid:d,key:i}))))}))))}H.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},H.propTypes={addComponent:n().func,components:n().instanceOf(Array),customRowComponent:n().func,name:n().string,targetUid:n().string.isRequired};const Ue=H,ze=(0,y.default)(h.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`,We=(0,y.default)(h.x)`
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
    fill: ${({theme:t,color:o})=>t.colors[`${o}600`]};
  }
`,Ve=(0,y.default)(h.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,de=({children:t,icon:o,color:l,...s})=>e.createElement(Ve,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...s},e.createElement(C.k,null,e.createElement(We,{color:l,"aria-hidden":!0,background:`${l}200`},o),e.createElement(h.x,{paddingLeft:3},e.createElement(E.Z,{variant:"pi",fontWeight:"bold",textColor:`${l}600`},t))));de.propTypes={color:n().string.isRequired,children:n().string.isRequired,icon:n().node.isRequired};const Oe=de;function X({addComponentToDZ:t,customRowComponent:o,editTarget:l,firstLoopComponentUid:s,isFromDynamicZone:d,isMain:r,isNestedInDZComponent:p,isSub:x,items:T,secondLoopComponentUid:b,targetUid:u}){const{formatMessage:i}=(0,A.Z)(),{trackUsage:m}=(0,c.useTracking)(),{isInDevelopmentMode:g,modifiedData:L,isInContentTypeView:M}=(0,I.Z)(),{onOpenModalAddField:R}=(0,re.Z)(),Z=()=>{m("hasClickedCTBAddFieldBanner"),R({forTarget:l,targetUid:u})};return u?T.length===0&&r?e.createElement(oe.i,{colCount:2,rowCount:2},e.createElement(ae.h,null,e.createElement(le.Tr,null,e.createElement(P.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.name",defaultMessage:"Name"}))),e.createElement(P.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.type",defaultMessage:"Type"}))))),e.createElement(c.EmptyBodyTable,{action:e.createElement(F.z,{onClick:Z,size:"L",startIcon:e.createElement(B.Z,null),variant:"secondary"},i({id:(0,f.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:M?{id:(0,f.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,f.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(ze,null,e.createElement(h.x,{paddingLeft:6,paddingRight:r?6:0,...r&&{style:{overflowX:"auto"}}},e.createElement("table",null,r&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,T.map(k=>{const{type:w}=k,N=o;return e.createElement(e.Fragment,{key:k.name},e.createElement(N,{...k,isNestedInDZComponent:p,targetUid:u,editTarget:l,firstLoopComponentUid:s,isFromDynamicZone:d,secondLoopComponentUid:b}),w==="component"&&e.createElement(ce,{...k,customRowComponent:o,targetUid:u,isNestedInDZComponent:d,editTarget:l,firstLoopComponentUid:s}),w==="dynamiczone"&&e.createElement(Ue,{...k,customRowComponent:o,addComponent:t,targetUid:u}))})))),r&&g&&e.createElement(De.c,{icon:e.createElement(B.Z,null),onClick:Z},i({id:(0,f.Z)(`form.button.add.field.to.${L.contentType?L.contentType.schema.kind:l||"collectionType"}`),defaultMessage:"Add another field"})),x&&g&&e.createElement(Oe,{icon:e.createElement(B.Z,null),onClick:Z,color:d?"primary":"neutral"},i({id:(0,f.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(oe.i,{colCount:2,rowCount:2},e.createElement(ae.h,null,e.createElement(le.Tr,null,e.createElement(P.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.name",defaultMessage:"Name"}))),e.createElement(P.Th,null,e.createElement(E.Z,{variant:"sigma",textColor:"neutral600"},i({id:"global.type",defaultMessage:"Type"}))))),e.createElement(c.EmptyBodyTable,{colSpan:2,content:{id:(0,f.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}X.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},X.propTypes={addComponentToDZ:n().func,customRowComponent:n().func,editTarget:n().string.isRequired,firstLoopComponentUid:n().string,isFromDynamicZone:n().bool,isNestedInDZComponent:n().bool,isMain:n().bool,items:n().instanceOf(Array),secondLoopComponentUid:n().string,targetUid:n().string,isSub:n().bool};const me=X;var pe=a(37527),je=a(34263),Ke=a(35575);const He=(0,y.default)(h.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:o})=>t.colors[o]};
    display: block;
  }
`,Xe=y.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:o})=>t.colors[o]};
  }
`,ue=t=>e.createElement(He,null,e.createElement(Xe,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));ue.propTypes={color:n().string.isRequired};const Ge=ue,G=({content:t})=>ne()(t);G.defaultProps={content:null},G.propTypes={content:n().string};const Je=G,Qe=(0,y.default)(h.x)`
  position: relative;
`;var Ye=a(68314);const J=({type:t,customField:o,repeatable:l})=>{const{formatMessage:s}=(0,A.Z)();let d=t;return["integer","biginteger","float","decimal"].includes(t)?d="number":["string"].includes(t)&&(d="text"),o?e.createElement(E.Z,null,s({id:(0,f.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(E.Z,null,s({id:(0,f.Z)(`attribute.${d}`),defaultMessage:t}),"\xA0",l&&s({id:(0,f.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};J.defaultProps={customField:null,repeatable:!1},J.propTypes={type:n().string.isRequired,customField:n().string,repeatable:n().bool};const qe=J;function Q({configurable:t,customField:o,editTarget:l,firstLoopComponentUid:s,isFromDynamicZone:d,name:r,onClick:p,relation:x,repeatable:T,secondLoopComponentUid:b,target:u,targetUid:i,type:m}){const{contentTypes:g,isInDevelopmentMode:L,removeAttribute:M}=(0,I.Z)(),{formatMessage:R}=(0,A.Z)(),Z=m==="relation"&&x.includes("morph"),k=["integer","biginteger","float","decimal"].includes(m)?"number":m,w=v()(g,[u],{}),N=v()(w,["schema","displayName"],""),S=v()(w,"plugin"),q=u?"relation":k,U=()=>{Z||t!==!1&&p(l,b||s||i,r,m,o)};let D;return b&&s?D=2:s?D=1:D=0,e.createElement(Qe,{as:"tr",...(0,c.onRowClick)({fn:U,condition:L&&t&&!Z})},e.createElement("td",{style:{position:"relative"}},D!==0&&e.createElement(Ge,{color:d?"primary200":"neutral150"}),e.createElement(C.k,{paddingLeft:2,gap:4},e.createElement(Ye.Z,{type:q,customField:o}),e.createElement(E.Z,{fontWeight:"bold"},r))),e.createElement("td",null,u?e.createElement(E.Z,null,R({id:(0,f.Z)(`modelPage.attribute.${Z?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(Je,{content:N}),"\xA0",S&&`(${R({id:(0,f.Z)("from"),defaultMessage:"from"})}: ${S})`)):e.createElement(qe,{type:m,customField:o,repeatable:T})),e.createElement("td",null,L?e.createElement(C.k,{justifyContent:"flex-end",...c.stopPropagation},t?e.createElement(C.k,{gap:1},!Z&&e.createElement(pe.h,{onClick:U,label:`${R({id:"app.utils.edit",defaultMessage:"Edit"})} ${r}`,noBorder:!0,icon:e.createElement(ee.Z,null)}),e.createElement(pe.h,{onClick:z=>{z.stopPropagation(),M(l,r,b||s||"")},label:`${R({id:"global.delete",defaultMessage:"Delete"})} ${r}`,noBorder:!0,icon:e.createElement(je.Z,null)})):e.createElement(Ke.Z,null)):e.createElement(h.x,{height:(0,c.pxToRem)(32)})))}Q.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},Q.propTypes={configurable:n().bool,customField:n().string,editTarget:n().string.isRequired,firstLoopComponentUid:n().string,isFromDynamicZone:n().bool,name:n().string.isRequired,onClick:n().func,relation:n().string,repeatable:n().bool,secondLoopComponentUid:n().string,target:n().string,targetUid:n().string,type:n().string};const _e=(0,e.memo)(Q),et=t=>{let o;switch(t){case"date":case"datetime":case"time":case"timestamp":o="date";break;case"integer":case"biginteger":case"decimal":case"float":o="number";break;case"string":case"text":o="text";break;case"":o="relation";break;default:o=t}return o};var tt=a(57422);const nt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Y=({disabled:t,isTemporary:o,isInContentTypeView:l,contentTypeKind:s,targetUid:d})=>{const{formatMessage:r}=(0,A.Z)(),{push:p}=(0,V.k6)(),{collectionTypesConfigurations:x,componentsConfigurations:T,singleTypesConfigurations:b}=nt,u=r({id:"content-type-builder.form.button.configure-view"});let i=x;const m=()=>(o||p(l?`/content-manager/collectionType/${d}/configurations/edit`:`/content-manager/components/${d}/configurations/edit`),!1);return l&&s==="singleType"&&(i=b),l||(i=T),e.createElement(c.CheckPermissions,{permissions:i},e.createElement(F.z,{startIcon:e.createElement(tt.Z,null),variant:"tertiary",onClick:m,disabled:o||t},u))};Y.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},Y.propTypes={disabled:n().bool.isRequired,contentTypeKind:n().string,isInContentTypeView:n().bool,isTemporary:n().bool,targetUid:n().string};const ot=(0,e.memo)(Y),at=()=>{const{initialData:t,modifiedData:o,isInDevelopmentMode:l,isInContentTypeView:s,submitData:d}=(0,I.Z)(),{formatMessage:r}=(0,A.Z)(),{trackUsage:p}=(0,c.useTracking)(),x=(0,V.$B)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:T,onOpenModalAddField:b,onOpenModalEditField:u,onOpenModalEditSchema:i,onOpenModalEditCustomField:m}=(0,re.Z)(),g=s?"contentType":"component",L=[g,"schema","attributes"],M=v()(o,[g,"uid"]),R=v()(o,[g,"isTemporary"],!1),Z=v()(o,[g,"schema","kind"],null),k=v()(o,L,[]),w=$e()(t,[g,"plugin"]),N=!te()(o,t),S=s?"contentType":"component",q=$=>{T({dynamicZoneTarget:$,targetUid:M})},U=async($,ge,fe,ye,he)=>{const Ee=et(ye);he?m({forTarget:$,targetUid:ge,attributeName:fe,attributeType:Ee,customFieldUid:he}):u({forTarget:$,targetUid:ge,attributeName:fe,attributeType:Ee,step:ye==="component"?"2":null})};let D=v()(o,[g,"schema","displayName"],"");const z=v()(o,[g,"schema","kind"],""),W=x?.params.currentUID==="create-content-type";!D&&W&&(D=r({id:(0,f.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const lt=()=>{const $=z||g;$==="collectionType"&&p("willEditNameOfContentType"),$==="singleType"&&p("willEditNameOfSingleType"),i({modalType:g,forTarget:g,targetUid:M,kind:$})};return e.createElement(e.Fragment,null,e.createElement(V.NL,{message:r({id:(0,f.Z)("prompt.unsaved")}),when:N}),e.createElement(Te.T,{id:"title",primaryAction:l&&e.createElement(C.k,{gap:2},!W&&e.createElement(F.z,{startIcon:e.createElement(B.Z,null),variant:"secondary",onClick:()=>{b({forTarget:S,targetUid:M})}},r({id:(0,f.Z)("button.attributes.add.another")})),e.createElement(F.z,{startIcon:e.createElement(be.Z,null),onClick:()=>d(),type:"submit",disabled:te()(o,t)},r({id:"global.save",defaultMessage:"Save"}))),secondaryAction:l&&!w&&!W&&e.createElement(F.z,{startIcon:e.createElement(ee.Z,null),variant:"tertiary",onClick:lt},r({id:"app.utils.edit",defaultMessage:"Edit"})),title:ne()(D),subtitle:r({id:(0,f.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(c.Link,{startIcon:e.createElement(Ce.Z,null),to:"/plugins/content-type-builder/"},r({id:"global.back",defaultMessage:"Back"}))}),e.createElement(ve.D,null,e.createElement(C.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(C.k,{justifyContent:"flex-end"},e.createElement(C.k,{gap:2},e.createElement(ot,{key:"link-to-cm-settings-view",targetUid:M,isTemporary:R,isInContentTypeView:s,contentTypeKind:Z,disabled:W}))),e.createElement(h.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(me,{items:k,customRowComponent:$=>e.createElement(_e,{...$,onClick:U}),addComponentToDZ:q,targetUid:M,editTarget:S,isMain:!0})))))}}}]);
