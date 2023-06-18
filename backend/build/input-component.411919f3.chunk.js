"use strict";(self.webpackChunklab_nckh=self.webpackChunklab_nckh||[]).push([[1077],{62579:(H,b,n)=>{n.r(b),n.d(b,{default:()=>B});var s=n(67294),C=function a(e,i){if(e===i)return!0;if(e&&i&&typeof e=="object"&&typeof i=="object"){if(e.constructor!==i.constructor)return!1;var o,d,_;if(Array.isArray(e)){if(o=e.length,o!=i.length)return!1;for(d=o;d--!==0;)if(!a(e[d],i[d]))return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if(_=Object.keys(e),o=_.length,o!==Object.keys(i).length)return!1;for(d=o;d--!==0;)if(!Object.prototype.hasOwnProperty.call(i,_[d]))return!1;for(d=o;d--!==0;){var g=_[d];if(!a(e[g],i[g]))return!1}return!0}return e!==e&&i!==i};const K="__googleMapsScriptId";var y;(function(a){a[a.INITIALIZED=0]="INITIALIZED",a[a.LOADING=1]="LOADING",a[a.SUCCESS=2]="SUCCESS",a[a.FAILURE=3]="FAILURE"})(y||(y={}));class r{constructor({apiKey:e,authReferrerPolicy:i,channel:o,client:d,id:_=K,language:g,libraries:M=[],mapIds:f,nonce:R,region:x,retries:S=3,url:A="https://maps.googleapis.com/maps/api/js",version:T}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=i,this.channel=o,this.client=d,this.id=_||K,this.language=g,this.libraries=M,this.mapIds=f,this.nonce=R,this.region=x,this.retries=S,this.url=A,this.version=T,r.instance){if(!C(this.options,r.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(r.instance.options)}`);return r.instance}r.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?y.FAILURE:this.done?y.SUCCESS:this.loading?y.LOADING:y.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,i)=>{this.loadCallback(o=>{o?i(o.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id)){this.callback();return}const e=this.createUrl(),i=document.createElement("script");i.id=this.id,i.type="text/javascript",i.src=e,i.onerror=this.loadErrorCallback.bind(this),i.defer=!0,i.async=!0,this.nonce&&(i.nonce=this.nonce),document.head.appendChild(i)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const i=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${i} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},i)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}var E=n(11047),V=n(41580),j=n(81154),U=n(29178),J=n(90608),Z=n(64289);function B({onChange:a,value:e,name:i,attribute:o,error:d,required:_}){const[g,M]=(0,s.useState)(null),[f,R]=(0,s.useState)(null),[x,S]=(0,s.useState)(null),[A,T]=(0,s.useState)(null),Q=async()=>{const{signal:l}=new AbortController,{fields:m,autocompletionRequestOptions:c,googleMapsApiKey:u}=await(0,Z.WY)("/location-field/config",{method:"GET",signal:l});return{fields:m,autocompletionRequestOptions:c,googleMapsApiKey:u}};s.useEffect(()=>{Q().then(l=>{M(l.googleMapsApiKey),l.fields=l.fields||[],l.fields.includes("geometry")||l.fields.push("geometry"),R(l.fields),T(l.autocompletionRequestOptions)})},[]),s.useEffect(()=>{if(g){const l=new r({apiKey:g,version:"weekly",libraries:["places"]});S(l)}},[g]),s.useEffect(()=>{f&&!f.includes("geometry")&&f.push("geometry")},[f]);const[k,$]=(0,s.useState)([]),t=l=>{if(!l.target.value){h({description:"",place_id:"no_location",lat:null,lng:null},!0),$([]);return}(async()=>{x.load().then(c=>{let u=new c.maps.places.AutocompleteSessionToken;new c.maps.places.AutocompleteService().getPlacePredictions({...A,input:l.target.value,sessionToken:u},(I,O)=>{if(O!==c.maps.places.PlacesServiceStatus.OK){console.error(O);return}I.length>0&&$(I)})})})()},h=(l,m)=>{if(!l)return;let c=null;if(m)c=JSON.stringify(l),a({target:{name:i,value:c,type:o.type}});else{let u=k.find(P=>P.place_id===l);x.load().then(P=>{new P.maps.places.PlacesService(document.createElement("div")).getDetails({placeId:u.place_id,fields:f},(O,N)=>{if(N!==P.maps.places.PlacesServiceStatus.OK){console.error(N);return}f.includes("photo")&&O?.photos&&O.photos.forEach(w=>{w.url=w.getUrl()}),u.details=O,c=JSON.stringify({description:u.description,place_id:u.place_id,lat:u.details.geometry.location.lat(),lng:u.details.geometry.location.lng(),details:u.details}),a({target:{name:i,value:c,type:o.type}})})})}},v=(l,m)=>{let c=null;e!=="null"?c=JSON.parse(e):c={description:"",place_id:"no_location",lat:null,lng:null},m==="lat"?c.lat=l||null:c.lng=l||null,a({target:{name:i,value:JSON.stringify(c),type:o.type}})},L=l=>{h({description:l,place_id:"custom_location",lat:null,lng:null},!0)};return s.createElement(E.k,{direction:"column",alignItems:"start",gap:3},s.createElement(V.x,{width:"100%"},x&&g&&f&&s.createElement(U.hQ,{label:"Location",name:"location",error:d,required:_,placeholder:"Ex. 123 Street, Niagara Falls, ON",onChange:l=>h(l,!1),onInputChange:l=>t(l),value:e!=="null"&&JSON.parse(e).place_id!=="no_location"?JSON.parse(e).place_id:"",onClear:()=>{h({description:"",place_id:"no_location",lat:null,lng:null},!0)},creatable:!0,createMessage:l=>`Create Location: "${l}"`,onCreateOption:l=>L(l)},k.map(l=>s.createElement(J.O,{key:l.place_id,value:l.place_id},l.description)).concat([s.createElement("div",{key:"no_location",value:"no_location",style:{display:"none"}},"No Location")]).concat([s.createElement("div",{key:"custom_location",value:"custom_location",style:{display:"none"}},e!=="null"&&JSON.parse(e).place_id==="custom_location"?JSON.parse(e).description:"Custom Location")]).concat([s.createElement("div",{key:"selected",value:e!=="null"?JSON.parse(e).place_id:"",style:{display:"none"}},e!=="null"?JSON.parse(e).description:"")]))),e!=="null"&&JSON.parse(e).place_id==="custom_location"&&s.createElement(E.k,{gap:2},s.createElement(j.Y,{label:"Latitude",name:"latitude",placeholder:"Ex. 43.123456",onValueChange:l=>v(l,"lat"),value:e!=="null"?JSON.parse(e).lat:null}),s.createElement(j.Y,{label:"Longitude",name:"longitude",placeholder:"Ex. -79.123456",onValueChange:l=>v(l,"lng"),value:e!=="null"?JSON.parse(e).lng:null})))}B.defaultProps={value:"null"}},29178:(H,b,n)=>{n.d(b,{Wx:()=>k,XU:()=>f,hQ:()=>M});var s=n(85893),C=n(67294),K=n(70968),y=n(12645),r=n(8020),E=n(71997),V=n(51809),j=n(10892),U=n(2504),J=n(75368),Z=n(15585),B=n(77197),a=n(41580),e=n(75515),i=n(54574),o=n(11047),d=n(19270),_=n(63428),g=n(96404);const M=({children:t,clearLabel:h="clear",creatable:v=!1,createMessage:L=W=>`Create "${W}"`,defaultFilterValue:l,defaultTextValue:m,defaultOpen:c=!1,open:u,onOpenChange:P,disabled:I=!1,error:O,filterValue:N,hasMoreItems:w=!1,hint:de,id:he,label:ue,labelAction:pe,loading:G=!1,loadingMessage:ge="Loading content...",noOptionsMessage:fe=()=>"No results found",onChange:Y,onClear:z,onCreateOption:X,onFilterValueChange:me,onInputChange:q,onTextValueChange:Ee,onLoadMore:ee,placeholder:_e="Select or enter a value",required:te=!1,startIcon:se,textValue:Oe,value:le})=>{const[W,Ce]=(0,j.T)({prop:u,defaultProp:c,onChange:P}),[D,ie]=(0,j.T)({prop:Oe,defaultProp:m,onChange:Ee}),[ye,ne]=(0,j.T)({prop:N,defaultProp:l,onChange:me}),oe=C.useRef(null),re=C.useRef(null),ve=C.useRef(null),F=(0,U.M)(he),xe=p=>{z&&!I&&(ie(""),ne(""),z(p),re.current.focus())},Pe=p=>{Ce(p)},Ie=p=>{ie(p)},be=p=>{ne(p)},je=p=>{q&&q(p)},Me=p=>{Y&&Y(p)},$e=(0,U.M)(),ae=`intersection-${(0,V.B)($e)}`,De=p=>{ee&&w&&!G&&ee(p)},ce=()=>{X&&D&&X(D)};(0,J.s)(oe,De,{selectorToWatch:`#${ae}`,skipWhen:!W});const Re=`${F}-hint`,Se=`${F}-error`;return(0,s.jsx)(i.g,{hint:de,error:O,id:F,required:te,children:(0,s.jsxs)(o.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,s.jsx)(d.Q,{action:pe,children:ue}),(0,s.jsxs)(r.hQ.Root,{autocomplete:v?"list":"both",open:W,onOpenChange:Pe,onTextValueChange:Ie,textValue:D,allowCustomValue:!0,disabled:I,required:te,value:le===null?void 0:le,onValueChange:Me,filterValue:ye,onFilterValueChange:be,children:[(0,s.jsxs)(x,{$hasError:!!O,children:[(0,s.jsxs)(o.k,{flex:"1",as:"span",gap:3,children:[se?(0,s.jsx)(a.x,{as:"span","aria-hidden":!0,children:se}):null,(0,s.jsx)(S,{placeholder:_e,id:F,"aria-invalid":!!O,"aria-labelledby":`${Re} ${Se}`,onChange:je,ref:re})]}),(0,s.jsxs)(o.k,{as:"span",gap:3,children:[D&&z?(0,s.jsx)(R,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:xe,"aria-disabled":I,"aria-label":h,title:h,ref:ve,children:(0,s.jsx)(K.Z,{})}):null,(0,s.jsx)(A,{children:(0,s.jsx)(y.Z,{})})]})]}),(0,s.jsx)(r.hQ.Portal,{children:(0,s.jsx)(T,{sideOffset:4,children:(0,s.jsxs)(Q,{ref:oe,children:[t,v?(0,s.jsx)(r.hQ.CreateItem,{onPointerUp:ce,onClick:ce,asChild:!0,children:(0,s.jsx)($,{children:(0,s.jsx)(e.Z,{children:L(D??"")})})}):null,!v&&!G?(0,s.jsx)(r.hQ.NoValueFound,{asChild:!0,children:(0,s.jsx)($,{$hasHover:!1,children:(0,s.jsx)(e.Z,{children:fe(D??"")})})}):null,G?(0,s.jsx)(o.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,s.jsx)(B.a,{small:!0,children:ge})}):null,(0,s.jsx)(a.x,{id:ae,width:"100%",height:"1px"})]})})})]}),(0,s.jsx)(_.J,{}),(0,s.jsx)(g.c,{})]})})},f=t=>(0,s.jsx)(M,{...t,creatable:!0}),R=(0,E.ZP)(a.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`,x=(0,E.ZP)(r.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:t,$hasError:h})=>h?t.colors.danger600:t.colors.neutral200};
  padding-right: ${({theme:t})=>t.spaces[3]};
  padding-left: ${({theme:t})=>t.spaces[3]};
  border-radius: ${({theme:t})=>t.borderRadius};
  background: ${({theme:t})=>t.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:t})=>t.spaces[4]};

  &[data-disabled] {
    color: ${({theme:t})=>t.colors.neutral600};
    background: ${({theme:t})=>t.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:t,$hasError:h})=>(0,Z.k3)()({theme:t,hasError:h})};
`,S=(0,E.ZP)(r.hQ.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:t})=>t.colors.neutral800};
  min-height: ${40/16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,A=(0,E.ZP)(r.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,T=(0,E.ZP)(r.hQ.Content)`
  background: ${({theme:t})=>t.colors.neutral0};
  box-shadow: ${({theme:t})=>t.shadows.filterShadow};
  border: 1px solid ${({theme:t})=>t.colors.neutral150};
  border-radius: ${({theme:t})=>t.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:t})=>t.zIndices[1]};
`,Q=(0,E.ZP)(r.hQ.Viewport)`
  padding: ${({theme:t})=>t.spaces[1]};
`,k=C.forwardRef(({children:t,value:h,disabled:v,textValue:L,...l},m)=>(0,s.jsx)(r.hQ.ComboboxItem,{asChild:!0,value:h,disabled:v,textValue:L,children:(0,s.jsx)($,{ref:m,...l,children:(0,s.jsx)(r.hQ.ItemText,{asChild:!0,children:(0,s.jsx)(e.Z,{children:t})})})})),$=E.ZP.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:t})=>t.spaces[2]} ${({theme:t})=>t.spaces[4]};
  background-color: ${({theme:t})=>t.colors.neutral0};
  border-radius: ${({theme:t})=>t.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({theme:t})=>t.colors.primary100};

    ${e.Z} {
      color: ${({theme:t})=>t.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:t,$hasHover:h=!0})=>h?t.colors.primary100:t.colors.neutral0};
  }

  &[data-highlighted] {
    ${e.Z} {
      color: ${({theme:t})=>t.colors.primary600};
      font-weight: bold;
    }
  }
`},90608:(H,b,n)=>{n.d(b,{O:()=>C});var s=n(29178);const C=s.Wx}}]);
