"use strict";(self.webpackChunklab_nckh=self.webpackChunklab_nckh||[]).push([[1077],{62579:(te,b,n)=>{n.r(b),n.d(b,{default:()=>R});var e=n(67294),f=function c(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var d,h,x;if(Array.isArray(t)){if(d=t.length,d!=r.length)return!1;for(h=d;h--!==0;)if(!c(t[h],r[h]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(x=Object.keys(t),d=x.length,d!==Object.keys(r).length)return!1;for(h=d;h--!==0;)if(!Object.prototype.hasOwnProperty.call(r,x[h]))return!1;for(h=d;h--!==0;){var O=x[h];if(!c(t[O],r[O]))return!1}return!0}return t!==t&&r!==r};const a="__googleMapsScriptId";var y;(function(c){c[c.INITIALIZED=0]="INITIALIZED",c[c.LOADING=1]="LOADING",c[c.SUCCESS=2]="SUCCESS",c[c.FAILURE=3]="FAILURE"})(y||(y={}));class i{constructor({apiKey:t,authReferrerPolicy:r,channel:d,client:h,id:x=a,language:O,libraries:A=[],mapIds:I,nonce:B,region:v,retries:Q=3,url:z="https://maps.googleapis.com/maps/api/js",version:M}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=t,this.authReferrerPolicy=r,this.channel=d,this.client=h,this.id=x||a,this.language=O,this.libraries=A,this.mapIds=I,this.nonce=B,this.region=v,this.retries=Q,this.url=z,this.version=M,i.instance){if(!f(this.options,i.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(i.instance.options)}`);return i.instance}i.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?y.FAILURE:this.done?y.SUCCESS:this.loading?y.LOADING:y.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let t=this.url;return t+=`?callback=${this.CALLBACK}`,this.apiKey&&(t+=`&key=${this.apiKey}`),this.channel&&(t+=`&channel=${this.channel}`),this.client&&(t+=`&client=${this.client}`),this.libraries.length>0&&(t+=`&libraries=${this.libraries.join(",")}`),this.language&&(t+=`&language=${this.language}`),this.region&&(t+=`&region=${this.region}`),this.version&&(t+=`&v=${this.version}`),this.mapIds&&(t+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(t+=`&auth_referrer_policy=${this.authReferrerPolicy}`),t}deleteScript(){const t=document.getElementById(this.id);t&&t.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((t,r)=>{this.loadCallback(d=>{d?r(d.error):t(window.google)})})}loadCallback(t){this.callbacks.push(t),this.execute()}setScript(){if(document.getElementById(this.id)){this.callback();return}const t=this.createUrl(),r=document.createElement("script");r.id=this.id,r.type="text/javascript",r.src=t,r.onerror=this.loadErrorCallback.bind(this),r.defer=!0,r.async=!0,this.nonce&&(r.nonce=this.nonce),document.head.appendChild(r)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(t){if(this.errors.push(t),this.errors.length<=this.retries){const r=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${r} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},r)}else this.onerrorEvent=t,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(t=>{t(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}var C=n(75878),V=n(50781),L=n(29872),E=n(63122),D=n(85612),U=n(69307);function R({onChange:c,value:t,name:r,attribute:d,error:h,required:x}){const[O,A]=(0,e.useState)(null),[I,B]=(0,e.useState)(null),[v,Q]=(0,e.useState)(null),[z,M]=(0,e.useState)(null),ne=async()=>{const{signal:s}=new AbortController,{fields:o,autocompletionRequestOptions:u,googleMapsApiKey:m}=await(0,U.WY)("/location-field/config",{method:"GET",signal:s});return{fields:o,autocompletionRequestOptions:u,googleMapsApiKey:m}};e.useEffect(()=>{ne().then(s=>{A(s.googleMapsApiKey),s.fields=s.fields||[],s.fields.includes("geometry")||s.fields.push("geometry"),B(s.fields),M(s.autocompletionRequestOptions)})},[]),e.useEffect(()=>{if(O){const s=new i({apiKey:O,version:"weekly",libraries:["places"]});Q(s)}},[O]),e.useEffect(()=>{I&&!I.includes("geometry")&&I.push("geometry")},[I]);const[_,k]=(0,e.useState)([]),l=s=>{if(!s.target.value){p({description:"",place_id:"no_location",lat:null,lng:null},!0),k([]);return}(async()=>{v.load().then(u=>{let m=new u.maps.places.AutocompleteSessionToken;new u.maps.places.AutocompleteService().getPlacePredictions({...z,input:s.target.value,sessionToken:m},(S,g)=>{if(g!==u.maps.places.PlacesServiceStatus.OK){console.error(g);return}S.length>0&&k(S)})})})()},p=(s,o)=>{if(!s)return;let u=null;if(o)u=JSON.stringify(s),c({target:{name:r,value:u,type:d.type}});else{let m=_.find($=>$.place_id===s);v.load().then($=>{new $.maps.places.PlacesService(document.createElement("div")).getDetails({placeId:m.place_id,fields:I},(g,w)=>{if(w!==$.maps.places.PlacesServiceStatus.OK){console.error(w);return}I.includes("photo")&&g?.photos&&g.photos.forEach(F=>{F.url=F.getUrl()}),m.details=g,u=JSON.stringify({description:m.description,place_id:m.place_id,lat:m.details.geometry.location.lat(),lng:m.details.geometry.location.lng(),details:m.details}),c({target:{name:r,value:u,type:d.type}})})})}},K=(s,o)=>{let u=null;t!=="null"?u=JSON.parse(t):u={description:"",place_id:"no_location",lat:null,lng:null},o==="lat"?u.lat=s||null:u.lng=s||null,c({target:{name:r,value:JSON.stringify(u),type:d.type}})},W=s=>{p({description:s,place_id:"custom_location",lat:null,lng:null},!0)};return e.createElement(C.k,{direction:"column",alignItems:"start",gap:3},e.createElement(V.x,{width:"100%"},v&&O&&I&&e.createElement(E.hQ,{label:"Location",name:"location",error:h,required:x,placeholder:"Ex. 123 Street, Niagara Falls, ON",onChange:s=>p(s,!1),onInputChange:s=>l(s),value:t!=="null"&&JSON.parse(t).place_id!=="no_location"?JSON.parse(t).place_id:"",onClear:()=>{p({description:"",place_id:"no_location",lat:null,lng:null},!0)},creatable:!0,createMessage:s=>`Create Location: "${s}"`,onCreateOption:s=>W(s)},_.map(s=>e.createElement(D.O,{key:s.place_id,value:s.place_id},s.description)).concat([e.createElement("div",{key:"no_location",value:"no_location",style:{display:"none"}},"No Location")]).concat([e.createElement("div",{key:"custom_location",value:"custom_location",style:{display:"none"}},t!=="null"&&JSON.parse(t).place_id==="custom_location"?JSON.parse(t).description:"Custom Location")]).concat([e.createElement("div",{key:"selected",value:t!=="null"?JSON.parse(t).place_id:"",style:{display:"none"}},t!=="null"?JSON.parse(t).description:"")]))),t!=="null"&&JSON.parse(t).place_id==="custom_location"&&e.createElement(C.k,{gap:2},e.createElement(L.Y,{label:"Latitude",name:"latitude",placeholder:"Ex. 43.123456",onValueChange:s=>K(s,"lat"),value:t!=="null"?JSON.parse(t).lat:null}),e.createElement(L.Y,{label:"Longitude",name:"longitude",placeholder:"Ex. -79.123456",onValueChange:s=>K(s,"lng"),value:t!=="null"?JSON.parse(t).lng:null})))}R.defaultProps={value:"null"}},69265:(te,b,n)=>{n.r(b),n.d(b,{default:()=>s});var e=n(67294),f=n(45697),a=n.n(f),y=n(96486),i=n(29728),C=n(54574),V=n(19270),L=n(63428),E=n(96404),D=n(7681),U=n(75515),R=n(41580),c=n(23620),t=n(44012),r=n(86896),d=n(42866),h=n(24969),x=n(59946),O=n(36856),A=n(16364),I=n(52861),B=n(69307);const v=I.Z.create({baseURL:""});v.interceptors.request.use(async o=>(o.headers={Authorization:`Bearer ${B.I8.getToken()}`,Accept:"application/json","Content-Type":"application/json"},o),o=>{Promise.reject(o)}),v.interceptors.response.use(o=>o,o=>{throw o.response?.status===401&&(B.I8.clearAppStorage(),window.location.reload()),o});const Q=v;var z=n(10371),M=n.n(z);const _=o=>`${M()}.${o}`,l=o=>`/${M()}/${o}`,p=({onClose:o,onImport:u,value:m})=>{const{formatMessage:$}=(0,r.Z)(),[S,g]=(0,e.useState)(!1),[w,F]=(0,e.useState)(""),[G,H]=(0,e.useState)(""),P=new AbortController,Y=async()=>{g(!0);const{signal:j}=P;try{F("");const{data:Z}=await Q.get(l(`fetch?url=${encodeURIComponent(G)}`,{method:"GET",signal:j}));g(!1),Z.error?F(Z.error):(u(Z),o())}catch(Z){F(Z.message),g(!1)}};(0,e.useEffect)(()=>(H((0,y.isObject)(m)&&m.url?m.url:""),setTimeout(()=>{const j=document.getElementById("oembed-form-url");j&&j.focus()},150),()=>{P.abort()}),[]);const N=j=>{j.keyCode===13&&(j.preventDefault(),Y())};return e.createElement(d.P,{onClose:o,style:{width:"35rem"},labelledBy:"title"},e.createElement(h.x,null,e.createElement("section",null,e.createElement(U.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},e.createElement(t.Z,{id:`${M()}.modal.import.title`})))),e.createElement("form",null,e.createElement(x.f,null,e.createElement(A.o,{id:"oembed-form-url",label:$({id:_("modal.import.input.label")}),hint:$({id:_("modal.import.input.description")}),validations:{required:!0},onChange:({target:{value:j}})=>{H(j)},onKeyDown:N,error:w,name:"name",type:"text",value:G})),e.createElement(O.m,{startActions:e.createElement(i.z,{onClick:o,variant:"tertiary"},e.createElement(t.Z,{id:"app.components.Button.cancel"})),endActions:e.createElement(e.Fragment,null,e.createElement(i.z,{variant:"default",loading:S,onClick:Y},e.createElement(t.Z,{id:`${M()}.modal.import.button.import`})))})))};p.defaultProps={value:{}},p.propTypes={onClose:a().func.isRequired,onImport:a().func.isRequired,value:a().object};const K=p,W=({description:o,error:u,name:m,intlLabel:$,onChange:S,value:g,required:w})=>{const[F,G]=(0,e.useState)(!1),H=J=>{let ee=null;try{ee=JSON.parse(J)}catch{}return ee},[P,Y]=(0,e.useState)(H(g));(0,e.useEffect)(()=>{Y(H(g))},[g]);const N=(0,e.useMemo)(()=>!!((0,y.isObject)(P)&&P.url),[P]),j=()=>{G(!0)},Z=()=>{G(!1)},q=J=>{S({target:{name:m,value:(0,y.isObject)(J)?JSON.stringify(J):null}})};return e.createElement(C.g,{name:"oembed",error:u,hint:o?o.defaultMessage:""},e.createElement(D.K,{size:1},e.createElement(V.Q,null,$.defaultMessage),e.createElement("div",{style:{border:"1px solid #dcdce4",padding:"15px",borderRadius:"2px"}},N&&e.createElement("div",{style:{marginBottom:"10px"}},P.title&&e.createElement(R.x,{paddingBottom:2},e.createElement(U.Z,{variant:"delta"},P.title)),e.createElement(c.r,{href:P.url,target:"_blank"},P.url)),e.createElement("div",{style:{display:"flex"}},e.createElement(i.z,{variant:"default",onClick:j},N&&e.createElement(t.Z,{id:`${M()}.form.button.edit`}),!N&&e.createElement(t.Z,{id:`${M()}.form.button.import`})),N&&e.createElement(i.z,{variant:"danger",onClick:()=>q(null),style:{marginLeft:"15px"}},e.createElement(t.Z,{id:`${M()}.form.button.delete`})))),e.createElement(L.J,{style:(0,y.isEmpty)(o)?{}:{marginTop:"1.4rem"}}),e.createElement(E.c,null),F&&e.createElement(K,{onClose:Z,value:P,onImport:q})))};W.defaultProps={description:void 0,error:void 0,value:""},W.propTypes={errors:a().array,inputDescription:a().oneOfType([a().string,a().func,a().shape({id:a().string,params:a().object})]),label:a().oneOfType([a().string,a().func,a().shape({id:a().string,params:a().object})]),name:a().string.isRequired,noErrorsDescription:a().bool,onChange:a().func.isRequired,value:a().string};const s=W},44012:(te,b,n)=>{n.d(b,{Z:()=>L});var e=n(70655),f=n(67294),a=n(86896),y=n(680);function i(E,D){var U=E.values,R=(0,e._T)(E,["values"]),c=D.values,t=(0,e._T)(D,["values"]);return(0,y.wU)(c,U)&&(0,y.wU)(R,t)}function C(E){var D=(0,a.Z)(),U=D.formatMessage,R=D.textComponent,c=R===void 0?f.Fragment:R,t=E.id,r=E.description,d=E.defaultMessage,h=E.values,x=E.children,O=E.tagName,A=O===void 0?c:O,I=E.ignoreTag,B={id:t,description:r,defaultMessage:d},v=U(B,h,{ignoreTag:I});return typeof x=="function"?x(Array.isArray(v)?v:[v]):A?f.createElement(A,null,f.Children.toArray(v)):f.createElement(f.Fragment,null,v)}C.displayName="FormattedMessage";var V=f.memo(C,i);V.displayName="MemoizedFormattedMessage";const L=V},63122:(te,b,n)=>{n.d(b,{Wx:()=>_,XU:()=>I,hQ:()=>A});var e=n(85893),f=n(67294),a=n(15800),y=n(21514),i=n(52605),C=n(1565),V=n(35571),L=n(46169),E=n(73879),D=n(43931),U=n(27882),R=n(28809),c=n(50781),t=n(78549),r=n(32156),d=n(75878),h=n(29516),x=n(27124),O=n(8595);const A=({children:l,clearLabel:p="clear",creatable:K=!1,createMessage:W=le=>`Create "${le}"`,defaultFilterValue:s,defaultTextValue:o,defaultOpen:u=!1,open:m,onOpenChange:$,disabled:S=!1,error:g,filterValue:w,hasMoreItems:F=!1,hint:G,id:H,label:P,labelAction:Y,loading:N=!1,loadingMessage:j="Loading content...",noOptionsMessage:Z=()=>"No results found",onChange:q,onClear:J,onCreateOption:ee,onFilterValueChange:fe,onInputChange:re,onTextValueChange:Ee,onLoadMore:oe,placeholder:ve="Select or enter a value",required:ae=!1,startIcon:ie,textValue:ye,value:ce})=>{const[le,Oe]=(0,L.T)({prop:m,defaultProp:u,onChange:$}),[X,de]=(0,L.T)({prop:ye,defaultProp:o,onChange:Ee}),[Ce,ue]=(0,L.T)({prop:w,defaultProp:s,onChange:fe}),he=f.useRef(null),pe=f.useRef(null),xe=f.useRef(null),se=(0,E.M)(H),Ie=T=>{J&&!S&&(de(""),ue(""),J(T),pe.current.focus())},Me=T=>{Oe(T)},Pe=T=>{de(T)},je=T=>{ue(T)},Te=T=>{re&&re(T)},$e=T=>{q&&q(T)},be=(0,E.M)(),me=`intersection-${(0,V.B)(be)}`,De=T=>{oe&&F&&!N&&oe(T)},ge=()=>{ee&&X&&ee(X)};(0,D.s)(he,De,{selectorToWatch:`#${me}`,skipWhen:!le});const Re=`${se}-hint`,Ae=`${se}-error`;return(0,e.jsx)(r.g,{hint:G,error:g,id:se,required:ae,children:(0,e.jsxs)(d.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(h.Q,{action:Y,children:P}),(0,e.jsxs)(i.hQ.Root,{autocomplete:K?"list":"both",open:le,onOpenChange:Me,onTextValueChange:Pe,textValue:X,allowCustomValue:!0,disabled:S,required:ae,value:ce===null?void 0:ce,onValueChange:$e,filterValue:Ce,onFilterValueChange:je,children:[(0,e.jsxs)(v,{$hasError:!!g,children:[(0,e.jsxs)(d.k,{flex:"1",as:"span",gap:3,children:[ie?(0,e.jsx)(c.x,{as:"span","aria-hidden":!0,children:ie}):null,(0,e.jsx)(Q,{placeholder:ve,id:se,"aria-invalid":!!g,"aria-labelledby":`${Re} ${Ae}`,onChange:Te,ref:pe})]}),(0,e.jsxs)(d.k,{as:"span",gap:3,children:[X&&J?(0,e.jsx)(B,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:Ie,"aria-disabled":S,"aria-label":p,title:p,ref:xe,children:(0,e.jsx)(a.Z,{})}):null,(0,e.jsx)(z,{children:(0,e.jsx)(y.Z,{})})]})]}),(0,e.jsx)(i.hQ.Portal,{children:(0,e.jsx)(M,{sideOffset:4,children:(0,e.jsxs)(ne,{ref:he,children:[l,K?(0,e.jsx)(i.hQ.CreateItem,{onPointerUp:ge,onClick:ge,asChild:!0,children:(0,e.jsx)(k,{children:(0,e.jsx)(t.Z,{children:W(X??"")})})}):null,!K&&!N?(0,e.jsx)(i.hQ.NoValueFound,{asChild:!0,children:(0,e.jsx)(k,{$hasHover:!1,children:(0,e.jsx)(t.Z,{children:Z(X??"")})})}):null,N?(0,e.jsx)(d.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,e.jsx)(R.a,{small:!0,children:j})}):null,(0,e.jsx)(c.x,{id:me,width:"100%",height:"1px"})]})})})]}),(0,e.jsx)(x.J,{}),(0,e.jsx)(O.c,{})]})})},I=l=>(0,e.jsx)(A,{...l,creatable:!0}),B=(0,C.ZP)(c.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.neutral600};
  }
`,v=(0,C.ZP)(i.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:l,$hasError:p})=>p?l.colors.danger600:l.colors.neutral200};
  padding-right: ${({theme:l})=>l.spaces[3]};
  padding-left: ${({theme:l})=>l.spaces[3]};
  border-radius: ${({theme:l})=>l.borderRadius};
  background: ${({theme:l})=>l.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:l})=>l.spaces[4]};

  &[data-disabled] {
    color: ${({theme:l})=>l.colors.neutral600};
    background: ${({theme:l})=>l.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:l,$hasError:p})=>(0,U.k3)()({theme:l,hasError:p})};
`,Q=(0,C.ZP)(i.hQ.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:l})=>l.colors.neutral800};
  min-height: ${40/16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,z=(0,C.ZP)(i.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:l})=>l.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,M=(0,C.ZP)(i.hQ.Content)`
  background: ${({theme:l})=>l.colors.neutral0};
  box-shadow: ${({theme:l})=>l.shadows.filterShadow};
  border: 1px solid ${({theme:l})=>l.colors.neutral150};
  border-radius: ${({theme:l})=>l.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:l})=>l.zIndices[1]};
`,ne=(0,C.ZP)(i.hQ.Viewport)`
  padding: ${({theme:l})=>l.spaces[1]};
`,_=f.forwardRef(({children:l,value:p,disabled:K,textValue:W,...s},o)=>(0,e.jsx)(i.hQ.ComboboxItem,{asChild:!0,value:p,disabled:K,textValue:W,children:(0,e.jsx)(k,{ref:o,...s,children:(0,e.jsx)(i.hQ.ItemText,{asChild:!0,children:(0,e.jsx)(t.Z,{children:l})})})})),k=C.ZP.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:l})=>l.spaces[2]} ${({theme:l})=>l.spaces[4]};
  background-color: ${({theme:l})=>l.colors.neutral0};
  border-radius: ${({theme:l})=>l.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({theme:l})=>l.colors.primary100};

    ${t.Z} {
      color: ${({theme:l})=>l.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:l,$hasHover:p=!0})=>p?l.colors.primary100:l.colors.neutral0};
  }

  &[data-highlighted] {
    ${t.Z} {
      color: ${({theme:l})=>l.colors.primary600};
      font-weight: bold;
    }
  }
`},85612:(te,b,n)=>{n.d(b,{O:()=>f});var e=n(63122);const f=e.Wx}}]);
