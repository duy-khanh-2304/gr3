(self["webpackChunklab_nckh"] = self["webpackChunklab_nckh"] || []).push([[4482],{

/***/ 20978:
/***/ (() => {

!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{Big:"Big",Default:"Default","Document colors":"Document colors","Font Background Color":"Font Background Color","Font Color":"Font Color","Font Family":"Font Family","Font Size":"Font Size",Huge:"Huge",Small:"Small",Tiny:"Tiny"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={159:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(609),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,".ck .ck-button.ck-color-table__remove-color{align-items:center;display:flex;width:100%}label.ck.ck-color-grid__label{font-weight:unset}.ck .ck-button.ck-color-table__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck .ck-button.ck-color-table__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-base-border)}[dir=ltr] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard)}",""]);const s=r},222:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(609),r=o.n(n)()((function(e){return e[1]}));r.push([e.id,".ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}",""]);const s=r},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var l=0;l<e.length;l++){var a=[].concat(e[l]);n&&r[a[0]]||(o&&(a[2]?a[2]="".concat(o," and ").concat(a[2]):a[2]=o),t.push(a))}},t}},62:(e,t,o)=>{"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),i=[];function l(e){for(var t=-1,o=0;o<i.length;o++)if(i[o].identifier===e){t=o;break}return t}function a(e,t){for(var o={},n=[],r=0;r<e.length;r++){var s=e[r],a=t.base?s[0]+t.base:s[0],c=o[a]||0,u="".concat(a," ").concat(c);o[a]=c+1;var d=l(u),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(m)):i.push({identifier:u,updater:g(m,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=s(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function m(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var s=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function h(e,t,o){var n=o.css,r=o.media,s=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,f=0;function g(e,t){var o,n,r;if(t.singleton){var s=f++;o=p||(p=c(t)),n=m.bind(null,o,s,!1),r=m.bind(null,o,s,!0)}else o=c(t),n=h.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=l(o[n]);i[r].references--}for(var s=a(e,t),c=0;c<o.length;c++){var u=l(o[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}o=s}}}},704:(e,t,o)=>{e.exports=o(79)("./src/core.js")},492:(e,t,o)=>{e.exports=o(79)("./src/engine.js")},273:(e,t,o)=>{e.exports=o(79)("./src/ui.js")},209:(e,t,o)=>{e.exports=o(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var n={};(()=>{"use strict";o.r(n),o.d(n,{Font:()=>U,FontBackgroundColor:()=>K,FontBackgroundColorEditing:()=>R,FontBackgroundColorUI:()=>$,FontColor:()=>M,FontColorEditing:()=>G,FontColorUI:()=>H,FontFamily:()=>F,FontFamilyEditing:()=>k,FontFamilyUI:()=>T,FontSize:()=>D,FontSizeEditing:()=>E,FontSizeUI:()=>V});var e=o(704);class t extends e.Command{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=t.selection.getAttribute(this.attributeKey),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,o=t.document.selection,n=e.value;t.change((e=>{if(o.isCollapsed)n?e.setSelectionAttribute(this.attributeKey,n):e.removeSelectionAttribute(this.attributeKey);else{const r=t.schema.getValidRanges(o.getRanges(),this.attributeKey);for(const t of r)n?e.setAttribute(this.attributeKey,n,t):e.removeAttribute(this.attributeKey,t)}}))}}var r=o(273),s=o(209);class i extends s.Collection{constructor(e){super(e),this.set("isEmpty",!0),this.on("change",(()=>{this.set("isEmpty",0===this.length)}))}add(e,t){this.find((t=>t.color===e.color))||super.add(e,t)}hasColor(e){return!!this.find((t=>t.color===e))}}(0,s.mix)(i,s.ObservableMixin);var l=o(62),a=o.n(l),c=o(159),u={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};a()(c.Z,u);c.Z.locals;class d extends r.View{constructor(e,{colors:t,columns:o,removeButtonLabel:n,documentColorsLabel:l,documentColorsCount:a}){super(e),this.items=this.createCollection(),this.colorDefinitions=t,this.focusTracker=new s.FocusTracker,this.keystrokes=new s.KeystrokeHandler,this.set("selectedColor"),this.removeButtonLabel=n,this.columns=o,this.documentColors=new i,this.documentColorsCount=a,this._focusables=new r.ViewCollection,this._focusCycler=new r.FocusCycler({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this._documentColorsLabel=l,this.setTemplate({tag:"div",attributes:{class:["ck","ck-color-table"]},children:this.items}),this.items.add(this._createRemoveColorButton())}updateDocumentColors(e,t){const o=e.document,n=this.documentColorsCount;this.documentColors.clear();for(const r of o.getRootNames()){const s=o.getRoot(r),i=e.createRangeIn(s);for(const e of i.getItems())if(e.is("$textProxy")&&e.hasAttribute(t)&&(this._addColorToDocumentColors(e.getAttribute(t)),this.documentColors.length>=n))return}}updateSelectedColors(){const e=this.documentColorsGrid,t=this.staticColorsGrid,o=this.selectedColor;t.selectedColor=o,e&&(e.selectedColor=o)}render(){super.render(),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}appendGrids(){if(!this.staticColorsGrid&&(this.staticColorsGrid=this._createStaticColorsGrid(),this.items.add(this.staticColorsGrid),this.focusTracker.add(this.staticColorsGrid.element),this._focusables.add(this.staticColorsGrid),this.documentColorsCount)){const e=r.Template.bind(this.documentColors,this.documentColors),t=new r.LabelView(this.locale);t.text=this._documentColorsLabel,t.extendTemplate({attributes:{class:["ck","ck-color-grid__label",e.if("isEmpty","ck-hidden")]}}),this.items.add(t),this.documentColorsGrid=this._createDocumentColorsGrid(),this.items.add(this.documentColorsGrid),this.focusTracker.add(this.documentColorsGrid.element),this._focusables.add(this.documentColorsGrid)}}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}_createRemoveColorButton(){const t=new r.ButtonView;return t.set({withText:!0,icon:e.icons.eraser,label:this.removeButtonLabel}),t.class="ck-color-table__remove-color",t.on("execute",(()=>{this.fire("execute",{value:null})})),t.render(),this.focusTracker.add(t.element),this._focusables.add(t),t}_createStaticColorsGrid(){const e=new r.ColorGridView(this.locale,{colorDefinitions:this.colorDefinitions,columns:this.columns});return e.delegate("execute").to(this),e}_createDocumentColorsGrid(){const e=r.Template.bind(this.documentColors,this.documentColors),t=new r.ColorGridView(this.locale,{columns:this.columns});return t.delegate("execute").to(this),t.extendTemplate({attributes:{class:e.if("isEmpty","ck-hidden")}}),t.items.bindTo(this.documentColors).using((e=>{const t=new r.ColorTileView;return t.set({color:e.color,hasBorder:e.options&&e.options.hasBorder}),e.label&&t.set({label:e.label,tooltip:!0}),t.on("execute",(()=>{this.fire("execute",{value:e.color})})),t})),this.documentColors.on("change:isEmpty",((e,o,n)=>{n&&(t.selectedColor=null)})),t}_addColorToDocumentColors(e){const t=this.colorDefinitions.find((t=>t.color===e));t?this.documentColors.add(Object.assign({},t)):this.documentColors.add({color:e,label:e,options:{hasBorder:!1}})}}const m="fontSize",h="fontFamily",p="fontColor",f="fontBackgroundColor";function g(e,t){const o={model:{key:e,values:[]},view:{},upcastAlso:{}};for(const e of t)o.model.values.push(e.model),o.view[e.model]=e.view,e.upcastAlso&&(o.upcastAlso[e.model]=e.upcastAlso);return o}function b(e){return t=>t.getStyle(e).replace(/\s/g,"")}function v(e){return(t,{writer:o})=>o.createAttributeElement("span",{style:`${e}:${t}`},{priority:7})}class w extends t{constructor(e){super(e,h)}}function y(e){return e.map(C).filter((e=>!!e))}function C(e){return"object"==typeof e?e:"default"===e?{title:"Default",model:void 0}:"string"==typeof e?function(e){const t=e.replace(/"|'/g,"").split(","),o=t[0],n=t.map(x).join(", ");return{title:o,model:n,view:{name:"span",styles:{"font-family":n},priority:7}}}(e):void 0}function x(e){return(e=e.trim()).indexOf(" ")>0&&(e=`'${e}'`),e}class k extends e.Plugin{static get pluginName(){return"FontFamilyEditing"}constructor(e){super(e),e.config.define(h,{options:["default","Arial, Helvetica, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif"],supportAllValues:!1})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:h}),e.model.schema.setAttributeProperties(h,{isFormatting:!0,copyOnEnter:!0});const t=y(e.config.get("fontFamily.options")).filter((e=>e.model)),o=g(h,t);e.config.get("fontFamily.supportAllValues")?(this._prepareAnyValueConverters(),this._prepareCompatibilityConverter()):e.conversion.attributeToElement(o),e.commands.add(h,new w(e))}_prepareAnyValueConverters(){const e=this.editor;e.conversion.for("downcast").attributeToElement({model:h,view:(e,{writer:t})=>t.createAttributeElement("span",{style:"font-family:"+e},{priority:7})}),e.conversion.for("upcast").elementToAttribute({model:{key:h,value:e=>e.getStyle("font-family")},view:{name:"span",styles:{"font-family":/.*/}}})}_prepareCompatibilityConverter(){this.editor.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{face:/.*/}},model:{key:h,value:e=>e.getAttribute("face")}})}}class T extends e.Plugin{static get pluginName(){return"FontFamilyUI"}init(){const e=this.editor,t=e.t,o=this._getLocalizedOptions(),n=e.commands.get(h);e.ui.componentFactory.add(h,(i=>{const l=(0,r.createDropdown)(i);return(0,r.addListToDropdown)(l,(()=>function(e,t){const o=new s.Collection;for(const n of e){const e={type:"button",model:new r.Model({commandName:h,commandParam:n.model,label:n.title,withText:!0})};e.model.bind("isOn").to(t,"value",(e=>e===n.model||!(!e||!n.model)&&e.split(",")[0].replace(/'/g,"").toLowerCase()===n.model.toLowerCase())),n.view&&n.view.styles&&e.model.set("labelStyle",`font-family: ${n.view.styles["font-family"]}`),o.add(e)}return o}(o,n))),l.buttonView.set({label:t("Font Family"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.03 3h6.149a.75.75 0 1 1 0 1.5h-5.514L11.03 3zm1.27 3h4.879a.75.75 0 1 1 0 1.5h-4.244L12.3 6zm1.27 3h3.609a.75.75 0 1 1 0 1.5h-2.973L13.57 9zm-2.754 2.5L8.038 4.785 5.261 11.5h5.555zm.62 1.5H4.641l-1.666 4.028H1.312l5.789-14h1.875l5.789 14h-1.663L11.436 13z"/></svg>',tooltip:!0}),l.extendTemplate({attributes:{class:"ck-font-family-dropdown"}}),l.bind("isEnabled").to(n),this.listenTo(l,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),l}))}_getLocalizedOptions(){const e=this.editor,t=e.t;return y(e.config.get(h).options).map((e=>("Default"===e.title&&(e.title=t("Default")),e)))}}class F extends e.Plugin{static get requires(){return[k,T]}static get pluginName(){return"FontFamily"}}var S=o(492);class L extends t{constructor(e){super(e,m)}}function A(e){return e.map((e=>function(e){if(t=e,"object"==typeof t&&t.title&&t.model&&t.view)return z(e);var t;const o=function(e){return _[e]||_[e.model]}(e);if(o)return z(o);if("default"===e)return{model:void 0,title:"Default"};if(function(e){let t;if("object"==typeof e){if(!e.model)throw new s.CKEditorError("font-size-invalid-definition",null,e);t=parseFloat(e.model)}else t=parseFloat(e);return isNaN(t)}(e))return;return function(e){"number"!=typeof e&&"string"!=typeof e||(e={title:String(e),model:`${parseFloat(e)}px`});return e.view={name:"span",styles:{"font-size":e.model}},z(e)}(e)}(e))).filter((e=>!!e))}const _={get tiny(){return{title:"Tiny",model:"tiny",view:{name:"span",classes:"text-tiny",priority:7}}},get small(){return{title:"Small",model:"small",view:{name:"span",classes:"text-small",priority:7}}},get big(){return{title:"Big",model:"big",view:{name:"span",classes:"text-big",priority:7}}},get huge(){return{title:"Huge",model:"huge",view:{name:"span",classes:"text-huge",priority:7}}}};function z(e){return e.view.priority||(e.view.priority=7),e}const N=["x-small","x-small","small","medium","large","x-large","xx-large","xxx-large"];class E extends e.Plugin{static get pluginName(){return"FontSizeEditing"}constructor(e){super(e),e.config.define(m,{options:["tiny","small","default","big","huge"],supportAllValues:!1})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:m}),e.model.schema.setAttributeProperties(m,{isFormatting:!0,copyOnEnter:!0});const t=e.config.get("fontSize.supportAllValues"),o=A(this.editor.config.get("fontSize.options")).filter((e=>e.model)),n=g(m,o);t?(this._prepareAnyValueConverters(n),this._prepareCompatibilityConverter()):e.conversion.attributeToElement(n),e.commands.add(m,new L(e))}_prepareAnyValueConverters(e){const t=this.editor,o=e.model.values.filter((e=>!(0,S.isLength)(String(e))&&!(0,S.isPercentage)(String(e))));if(o.length)throw new s.CKEditorError("font-size-invalid-use-of-named-presets",null,{presets:o});t.conversion.for("downcast").attributeToElement({model:m,view:(e,{writer:t})=>{if(e)return t.createAttributeElement("span",{style:"font-size:"+e},{priority:7})}}),t.conversion.for("upcast").elementToAttribute({model:{key:m,value:e=>e.getStyle("font-size")},view:{name:"span",styles:{"font-size":/.*/}}})}_prepareCompatibilityConverter(){this.editor.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{size:/^[+-]?\d{1,3}$/}},model:{key:m,value:e=>{const t=e.getAttribute("size"),o="-"===t[0]||"+"===t[0];let n=parseInt(t,10);o&&(n=3+n);const r=N.length-1,s=Math.min(Math.max(n,0),r);return N[s]}}})}}var B=o(222),O={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};a()(B.Z,O);B.Z.locals;class V extends e.Plugin{static get pluginName(){return"FontSizeUI"}init(){const e=this.editor,t=e.t,o=this._getLocalizedOptions(),n=e.commands.get(m);e.ui.componentFactory.add(m,(i=>{const l=(0,r.createDropdown)(i);return(0,r.addListToDropdown)(l,(()=>function(e,t){const o=new s.Collection;for(const n of e){const e={type:"button",model:new r.Model({commandName:m,commandParam:n.model,label:n.title,class:"ck-fontsize-option",withText:!0})};n.view&&n.view.styles&&e.model.set("labelStyle",`font-size:${n.view.styles["font-size"]}`),n.view&&n.view.classes&&e.model.set("class",`${e.model.class} ${n.view.classes}`),e.model.bind("isOn").to(t,"value",(e=>e===n.model)),o.add(e)}return o}(o,n))),l.buttonView.set({label:t("Font Size"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13zm7.55 2.279.779-.779.707.707-2.265 2.265-2.193-2.265.707-.707.765.765V4.825c0-.042 0-.083.002-.123l-.77.77-.707-.707L17.207 2.5l2.265 2.265-.707.707-.782-.782c.002.043.003.089.003.135v10.454z"/></svg>',tooltip:!0}),l.extendTemplate({attributes:{class:["ck-font-size-dropdown"]}}),l.bind("isEnabled").to(n),this.listenTo(l,"execute",(t=>{e.execute(t.source.commandName,{value:t.source.commandParam}),e.editing.view.focus()})),l}))}_getLocalizedOptions(){const e=this.editor,t=e.t,o={Default:t("Default"),Tiny:t("Tiny"),Small:t("Small"),Big:t("Big"),Huge:t("Huge")};return A(e.config.get(m).options).map((e=>{const t=o[e.title];return t&&t!=e.title&&(e=Object.assign({},e,{title:t})),e}))}}class D extends e.Plugin{static get requires(){return[E,V]}static get pluginName(){return"FontSize"}normalizeSizeOptions(e){return A(e)}}class P extends t{constructor(e){super(e,p)}}class G extends e.Plugin{static get pluginName(){return"FontColorEditing"}constructor(e){super(e),e.config.define(p,{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}],columns:5}),e.conversion.for("upcast").elementToAttribute({view:{name:"span",styles:{color:/[\s\S]+/}},model:{key:p,value:b("color")}}),e.conversion.for("upcast").elementToAttribute({view:{name:"font",attributes:{color:/^#?\w+$/}},model:{key:p,value:e=>e.getAttribute("color")}}),e.conversion.for("downcast").attributeToElement({model:p,view:v("color")}),e.commands.add(p,new P(e)),e.model.schema.extend("$text",{allowAttributes:p}),e.model.schema.setAttributeProperties(p,{isFormatting:!0,copyOnEnter:!0})}}class j extends e.Plugin{constructor(e,{commandName:t,icon:o,componentName:n,dropdownLabel:r}){super(e),this.commandName=t,this.componentName=n,this.icon=o,this.dropdownLabel=r,this.columns=e.config.get(`${this.componentName}.columns`),this.colorTableView=void 0}init(){const e=this.editor,t=e.locale,o=t.t,n=e.commands.get(this.commandName),s=(0,r.normalizeColorOptions)(e.config.get(this.componentName).colors),i=(0,r.getLocalizedColorOptions)(t,s),l=e.config.get(`${this.componentName}.documentColors`);e.ui.componentFactory.add(this.componentName,(t=>{const s=(0,r.createDropdown)(t);return this.colorTableView=function({dropdownView:e,colors:t,columns:o,removeButtonLabel:n,documentColorsLabel:r,documentColorsCount:s}){const i=e.locale,l=new d(i,{colors:t,columns:o,removeButtonLabel:n,documentColorsLabel:r,documentColorsCount:s});return e.colorTableView=l,e.panelView.children.add(l),l.delegate("execute").to(e,"execute"),l}({dropdownView:s,colors:i.map((e=>({label:e.label,color:e.model,options:{hasBorder:e.hasBorder}}))),columns:this.columns,removeButtonLabel:o("Remove color"),documentColorsLabel:0!==l?o("Document colors"):void 0,documentColorsCount:void 0===l?this.columns:l}),this.colorTableView.bind("selectedColor").to(n,"value"),s.buttonView.set({label:this.dropdownLabel,icon:this.icon,tooltip:!0}),s.extendTemplate({attributes:{class:"ck-color-ui-dropdown"}}),s.bind("isEnabled").to(n),s.on("execute",((t,o)=>{e.execute(this.commandName,o),e.editing.view.focus()})),s.on("change:isOpen",((t,o,n)=>{s.colorTableView.appendGrids(),n&&(0!==l&&this.colorTableView.updateDocumentColors(e.model,this.componentName),this.colorTableView.updateSelectedColors())})),(0,r.focusChildOnDropdownOpen)(s,(()=>s.colorTableView.staticColorsGrid.items.find((e=>e.isOn)))),s}))}}class H extends j{constructor(e){const t=e.locale.t;super(e,{commandName:p,componentName:p,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.4 10.3 10 4.5l-2.4 5.8h4.8zm.5 1.2H7.1L5.7 15H4.2l5-12h1.6l5 12h-1.5L13 11.5zm3.1 7H4a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/></svg>',dropdownLabel:t("Font Color")})}static get pluginName(){return"FontColorUI"}}class M extends e.Plugin{static get requires(){return[G,H]}static get pluginName(){return"FontColor"}}class I extends t{constructor(e){super(e,f)}}class R extends e.Plugin{static get pluginName(){return"FontBackgroundColorEditing"}constructor(e){super(e),e.config.define(f,{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0},{color:"hsl(0, 75%, 60%)",label:"Red"},{color:"hsl(30, 75%, 60%)",label:"Orange"},{color:"hsl(60, 75%, 60%)",label:"Yellow"},{color:"hsl(90, 75%, 60%)",label:"Light green"},{color:"hsl(120, 75%, 60%)",label:"Green"},{color:"hsl(150, 75%, 60%)",label:"Aquamarine"},{color:"hsl(180, 75%, 60%)",label:"Turquoise"},{color:"hsl(210, 75%, 60%)",label:"Light blue"},{color:"hsl(240, 75%, 60%)",label:"Blue"},{color:"hsl(270, 75%, 60%)",label:"Purple"}],columns:5}),e.data.addStyleProcessorRules(S.addBackgroundRules),e.conversion.for("upcast").elementToAttribute({view:{name:"span",styles:{"background-color":/[\s\S]+/}},model:{key:f,value:b("background-color")}}),e.conversion.for("downcast").attributeToElement({model:f,view:v("background-color")}),e.commands.add(f,new I(e)),e.model.schema.extend("$text",{allowAttributes:f}),e.model.schema.setAttributeProperties(f,{isFormatting:!0,copyOnEnter:!0})}}class $ extends j{constructor(e){const t=e.locale.t;super(e,{commandName:f,componentName:f,icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8.38 9.262H7.62L10 5.506l2.38 5.756zm.532 1.285L14.34 16h1.426L10.804 4H9.196L4.234 16H5.66l1.428-3.453h5.824z"/></svg>',dropdownLabel:t("Font Background Color")})}static get pluginName(){return"FontBackgroundColorUI"}}class K extends e.Plugin{static get requires(){return[R,$]}static get pluginName(){return"FontBackgroundColor"}}class U extends e.Plugin{static get requires(){return[F,D,M,K]}static get pluginName(){return"Font"}}})(),(window.CKEditor5=window.CKEditor5||{}).font=n})();

/***/ }),

/***/ 5978:
/***/ (() => {

/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},492:(e,t,n)=>{e.exports=n(79)("./src/engine.js")},79:e=>{"use strict";e.exports=CKEditor5.dll},915:()=>{}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{Markdown:()=>Ie});var e=n(704),t=n(492);function i(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let s={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const l=/[&<>"']/,o=/[&<>"']/g,a=/[<>"']|&(?!#?\w+;)/,c=/[<>"']|&(?!#?\w+;)/g,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u=e=>h[e];function p(e,t){if(t){if(l.test(e))return e.replace(o,u)}else if(a.test(e))return e.replace(c,u);return e}const f=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function d(e){return e.replace(f,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const g=/(^|[^\[])\^/g;function k(e,t){e=e.source||e,t=t||"";const n={replace:(t,r)=>(r=(r=r.source||r).replace(g,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)};return n}const m=/[^\w:]/g,x=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function b(e,t,n){if(e){let e;try{e=decodeURIComponent(d(n)).replace(m,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!x.test(n)&&(n=function(e,t){w[" "+e]||(y.test(e)?w[" "+e]=e+"/":w[" "+e]=R(e,"/",!0));e=w[" "+e];const n=-1===e.indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(_,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(v,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}const w={},y=/^[^:]+:\/*[^/]*$/,_=/^([^:]+:)[\s\S]*$/,v=/^([^:]+:\/*[^/]*)[\s\S]*$/;const z={exec:function(){}};function S(e){let t,n,r=1;for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function $(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,i=t;for(;--i>=0&&"\\"===n[i];)r=!r;return r?"|":" |"})).split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function R(e,t,n){const r=e.length;if(0===r)return"";let i=0;for(;i<r;){const s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}function T(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function A(e,t){if(t<1)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}function N(e,t,n,r){const i=t.href,s=t.title?p(t.title):null,l=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){r.state.inLink=!0;const e={type:"link",raw:n,href:i,title:s,text:l,tokens:r.inlineTokens(l,[])};return r.state.inLink=!1,e}return{type:"image",raw:n,href:i,title:s,text:p(l)}}class C{constructor(e){this.options=e||s}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:R(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t){const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return n.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=R(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const n={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,r,i,s,l,o,a,c,h,u,p,f,d=t[1].trim();const g=d.length>1,k={type:"list",raw:"",ordered:g,start:g?+d.slice(0,-1):"",loose:!1,items:[]};d=g?`\\d{1,9}\\${d.slice(-1)}`:`\\${d}`,this.options.pedantic&&(d=g?d:"[*+-]");const m=new RegExp(`^( {0,3}${d})((?: [^\\n]*)?(?:\\n|$))`);for(;e&&(f=!1,t=m.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),c=t[2].split("\n",1)[0],h=e.split("\n",1)[0],this.options.pedantic?(s=2,p=c.trimLeft()):(s=t[2].search(/[^ ]/),s=s>4?1:s,p=c.slice(s),s+=t[1].length),o=!1,!c&&/^ *$/.test(h)&&(n+=h+"\n",e=e.substring(h.length+1),f=!0),!f){const t=new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(u=e.split("\n",1)[0],c=u,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!t.test(c));){if(c.search(/[^ ]/)>=s||!c.trim())p+="\n"+c.slice(s);else{if(o)break;p+="\n"+c}o||c.trim()||(o=!0),n+=u+"\n",e=e.substring(u.length+1)}}k.loose||(a?k.loose=!0:/\n *\n *$/.test(n)&&(a=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(p),r&&(i="[ ] "!==r[0],p=p.replace(/^\[[ xX]\] +/,""))),k.items.push({type:"list_item",raw:n,task:!!r,checked:i,loose:!1,text:p}),k.raw+=n}k.items[k.items.length-1].raw=n.trimRight(),k.items[k.items.length-1].text=p.trimRight(),k.raw=k.raw.trimRight();const x=k.items.length;for(l=0;l<x;l++){this.lexer.state.top=!1,k.items[l].tokens=this.lexer.blockTokens(k.items[l].text,[]);const e=k.items[l].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let n=0;for(const e of t)if("\n"===e&&(n+=1),n>1)return!0;return!1}));!k.loose&&e.length&&t&&(k.loose=!0,k.items[l].loose=!0)}return k}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):p(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));return{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:$(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r,i,s,l=e.align.length;for(n=0;n<l;n++)/^ *-+: *$/.test(e.align[n])?e.align[n]="right":/^ *:-+: *$/.test(e.align[n])?e.align[n]="center":/^ *:-+ *$/.test(e.align[n])?e.align[n]="left":e.align[n]=null;for(l=e.rows.length,n=0;n<l;n++)e.rows[n]=$(e.rows[n],e.header.length).map((e=>({text:e})));for(l=e.header.length,r=0;r<l;r++)e.header[r].tokens=[],this.lexer.inlineTokens(e.header[r].text,e.header[r].tokens);for(l=e.rows.length,r=0;r<l;r++)for(s=e.rows[r],i=0;i<s.length;i++)s[i].tokens=[],this.lexer.inlineTokens(s[i].text,s[i].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:p(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):p(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=R(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,i=0;for(;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&(r--,r<0))return i;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),N(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return N(n,e,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const i=r[1]||r[2]||"";if(!i||i&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let i,s,l=n,o=0;const a="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(a.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=a.exec(t));){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(s=i.length,r[3]||r[4]){l+=s;continue}if((r[5]||r[6])&&n%3&&!((n+s)%3)){o+=s;continue}if(l-=s,l>0)continue;if(s=Math.min(s,s+l+o),Math.min(n,s)%2){const t=e.slice(1,n+r.index+s);return{type:"em",raw:e.slice(0,n+r.index+s+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,n+r.index+s-1);return{type:"strong",raw:e.slice(0,n+r.index+s+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=p(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=p(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=p(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=p(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=p(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):p(n[0]):n[0]:p(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:e}}}}const I={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:z,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};I.def=k(I.def).replace("label",I._label).replace("title",I._title).getRegex(),I.bullet=/(?:[*+-]|\d{1,9}[.)])/,I.listItemStart=k(/^( *)(bull) */).replace("bull",I.bullet).getRegex(),I.list=k(I.list).replace(/bull/g,I.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+I.def.source+")").getRegex(),I._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",I._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,I.html=k(I.html,"i").replace("comment",I._comment).replace("tag",I._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),I.paragraph=k(I._paragraph).replace("hr",I.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",I._tag).getRegex(),I.blockquote=k(I.blockquote).replace("paragraph",I.paragraph).getRegex(),I.normal=S({},I),I.gfm=S({},I.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),I.gfm.table=k(I.gfm.table).replace("hr",I.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",I._tag).getRegex(),I.gfm.paragraph=k(I._paragraph).replace("hr",I.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",I.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",I._tag).getRegex(),I.pedantic=S({},I.normal,{html:k("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",I._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:z,paragraph:k(I.normal._paragraph).replace("hr",I.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",I.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const E={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:z,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:z,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function O(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function D(e){let t,n,r="";const i=e.length;for(t=0;t<i;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}E._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",E.punctuation=k(E.punctuation).replace(/punctuation/g,E._punctuation).getRegex(),E.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,E.escapedEmSt=/\\\*|\\_/g,E._comment=k(I._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),E.emStrong.lDelim=k(E.emStrong.lDelim).replace(/punct/g,E._punctuation).getRegex(),E.emStrong.rDelimAst=k(E.emStrong.rDelimAst,"g").replace(/punct/g,E._punctuation).getRegex(),E.emStrong.rDelimUnd=k(E.emStrong.rDelimUnd,"g").replace(/punct/g,E._punctuation).getRegex(),E._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,E._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,E._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,E.autolink=k(E.autolink).replace("scheme",E._scheme).replace("email",E._email).getRegex(),E._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,E.tag=k(E.tag).replace("comment",E._comment).replace("attribute",E._attribute).getRegex(),E._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,E._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,E._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,E.link=k(E.link).replace("label",E._label).replace("href",E._href).replace("title",E._title).getRegex(),E.reflink=k(E.reflink).replace("label",E._label).replace("ref",I._label).getRegex(),E.nolink=k(E.nolink).replace("ref",I._label).getRegex(),E.reflinkSearch=k(E.reflinkSearch,"g").replace("reflink",E.reflink).replace("nolink",E.nolink).getRegex(),E.normal=S({},E),E.pedantic=S({},E.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",E._label).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",E._label).getRegex()}),E.gfm=S({},E.normal,{escape:k(E.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),E.gfm.url=k(E.gfm.url,"i").replace("email",E.gfm._extended_email).getRegex(),E.breaks=S({},E.gfm,{br:k(E.br).replace("{2,}","*").getRegex(),text:k(E.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class L{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||s,this.options.tokenizer=this.options.tokenizer||new C,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:I.normal,inline:E.normal};this.options.pedantic?(t.block=I.pedantic,t.inline=E.pedantic):this.options.gfm&&(t.block=I.gfm,this.options.breaks?t.inline=E.breaks:t.inline=E.gfm),this.tokenizer.rules=t}static get rules(){return{block:I,inline:E}}static lex(e,t){return new L(t).lex(e)}static lexInline(e,t){return new L(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let n,r,i,s;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?t.push(n):(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),r=t[t.length-1],!r||"paragraph"!==r.type&&"text"!==r.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n);else{if(i=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startBlock.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i)))r=t[t.length-1],s&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),s=i.length!==e.length,e=e.substring(n.raw.length);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let n,r,i,s,l,o,a=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(a));)e.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,s.index)+"["+A("a",s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(a));)a=a.slice(0,s.index)+"["+A("a",s[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.escapedEmSt.exec(a));)a=a.slice(0,s.index)+"++"+a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(o=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),r=t[t.length-1],r&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(n=this.tokenizer.emStrong(e,a,o))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n);else if(n=this.tokenizer.autolink(e,D))e=e.substring(n.raw.length),t.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(e,D))){if(i=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const n=e.slice(1);let r;this.options.extensions.startInline.forEach((function(e){r=e.call({lexer:this},n),"number"==typeof r&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(n=this.tokenizer.inlineText(i,O))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(o=n.raw.slice(-1)),l=!0,r=t[t.length-1],r&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(n.raw.length),t.push(n);return t}}class B{constructor(e){this.options=e||s}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",r?'<pre><code class="'+this.options.langPrefix+p(r,!0)+'">'+(n?e:p(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:p(e,!0))+"</code></pre>\n"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=b(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+p(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=b(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r}text(e){return e}}class P{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class q{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do{r++,n=e+"-"+r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class Z{constructor(e){this.options=e||s,this.options.renderer=this.options.renderer||new B,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new P,this.slugger=new q}static parse(e,t){return new Z(t).parse(e)}static parseInline(e,t){return new Z(t).parseInline(e)}parse(e,t=!0){let n,r,i,s,l,o,a,c,h,u,p,f,g,k,m,x,b,w,y,_="";const v=e.length;for(n=0;n<v;n++)if(u=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(y=this.options.extensions.renderers[u.type].call({parser:this},u),!1!==y||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))_+=y||"";else switch(u.type){case"space":continue;case"hr":_+=this.renderer.hr();continue;case"heading":_+=this.renderer.heading(this.parseInline(u.tokens),u.depth,d(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":_+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",a="",s=u.header.length,r=0;r<s;r++)a+=this.renderer.tablecell(this.parseInline(u.header[r].tokens),{header:!0,align:u.align[r]});for(c+=this.renderer.tablerow(a),h="",s=u.rows.length,r=0;r<s;r++){for(o=u.rows[r],a="",l=o.length,i=0;i<l;i++)a+=this.renderer.tablecell(this.parseInline(o[i].tokens),{header:!1,align:u.align[i]});h+=this.renderer.tablerow(a)}_+=this.renderer.table(c,h);continue;case"blockquote":h=this.parse(u.tokens),_+=this.renderer.blockquote(h);continue;case"list":for(p=u.ordered,f=u.start,g=u.loose,s=u.items.length,h="",r=0;r<s;r++)m=u.items[r],x=m.checked,b=m.task,k="",m.task&&(w=this.renderer.checkbox(x),g?m.tokens.length>0&&"paragraph"===m.tokens[0].type?(m.tokens[0].text=w+" "+m.tokens[0].text,m.tokens[0].tokens&&m.tokens[0].tokens.length>0&&"text"===m.tokens[0].tokens[0].type&&(m.tokens[0].tokens[0].text=w+" "+m.tokens[0].tokens[0].text)):m.tokens.unshift({type:"text",text:w}):k+=w),k+=this.parse(m.tokens,g),h+=this.renderer.listitem(k,b,x);_+=this.renderer.list(h,p,f);continue;case"html":_+=this.renderer.html(u.text);continue;case"paragraph":_+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(h=u.tokens?this.parseInline(u.tokens):u.text;n+1<v&&"text"===e[n+1].type;)u=e[++n],h+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);_+=t?this.renderer.paragraph(h):h;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return _}parseInline(e,t){t=t||this.renderer;let n,r,i,s="";const l=e.length;for(n=0;n<l;n++)if(r=e[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(i=this.options.extensions.renderers[r.type].call({parser:this},r),!1!==i||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))s+=i||"";else switch(r.type){case"escape":case"text":s+=t.text(r.text);break;case"html":s+=t.html(r.text);break;case"link":s+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":s+=t.image(r.href,r.title,r.text);break;case"strong":s+=t.strong(this.parseInline(r.tokens,t));break;case"em":s+=t.em(this.parseInline(r.tokens,t));break;case"codespan":s+=t.codespan(r.text);break;case"br":s+=t.br();break;case"del":s+=t.del(this.parseInline(r.tokens,t));break;default:{const e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return s}}function j(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),T(t=S({},j.defaults,t||{})),n){const r=t.highlight;let i;try{i=L.lex(e,t)}catch(e){return n(e)}const s=function(e){let s;if(!e)try{t.walkTokens&&j.walkTokens(i,t.walkTokens),s=Z.parse(i,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,s)};if(!r||r.length<3)return s();if(delete t.highlight,!i.length)return s();let l=0;return j.walkTokens(i,(function(e){"code"===e.type&&(l++,setTimeout((()=>{r(e.text,e.lang,(function(t,n){if(t)return s(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),l--,0===l&&s()}))}),0))})),void(0===l&&s())}try{const n=L.lex(e,t);return t.walkTokens&&j.walkTokens(n,t.walkTokens),Z.parse(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+p(e.message+"",!0)+"</pre>";throw e}}j.options=j.setOptions=function(e){var t;return S(j.defaults,e),t=j.defaults,s=t,j},j.getDefaults=i,j.defaults=s,j.use=function(...e){const t=S({},...e),n=j.defaults.extensions||{renderers:{},childTokens:{}};let r;e.forEach((e=>{if(e.extensions&&(r=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=n.renderers?n.renderers[e.name]:null;n.renderers[e.name]=t?function(...n){let r=e.renderer.apply(this,n);return!1===r&&(r=t.apply(this,n)),r}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");n[e.level]?n[e.level].unshift(e.tokenizer):n[e.level]=[e.tokenizer],e.start&&("block"===e.level?n.startBlock?n.startBlock.push(e.start):n.startBlock=[e.start]:"inline"===e.level&&(n.startInline?n.startInline.push(e.start):n.startInline=[e.start]))}e.childTokens&&(n.childTokens[e.name]=e.childTokens)}))),e.renderer){const n=j.defaults.renderer||new B;for(const t in e.renderer){const r=n[t];n[t]=(...i)=>{let s=e.renderer[t].apply(n,i);return!1===s&&(s=r.apply(n,i)),s}}t.renderer=n}if(e.tokenizer){const n=j.defaults.tokenizer||new C;for(const t in e.tokenizer){const r=n[t];n[t]=(...i)=>{let s=e.tokenizer[t].apply(n,i);return!1===s&&(s=r.apply(n,i)),s}}t.tokenizer=n}if(e.walkTokens){const n=j.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens.call(this,t),n&&n.call(this,t)}}r&&(t.extensions=n),j.setOptions(t)}))},j.walkTokens=function(e,t){for(const n of e)switch(t.call(j,n),n.type){case"table":for(const e of n.header)j.walkTokens(e.tokens,t);for(const e of n.rows)for(const n of e)j.walkTokens(n.tokens,t);break;case"list":j.walkTokens(n.items,t);break;default:j.defaults.extensions&&j.defaults.extensions.childTokens&&j.defaults.extensions.childTokens[n.type]?j.defaults.extensions.childTokens[n.type].forEach((function(e){j.walkTokens(n[e],t)})):n.tokens&&j.walkTokens(n.tokens,t)}},j.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");T(t=S({},j.defaults,t||{}));try{const n=L.lexInline(e,t);return t.walkTokens&&j.walkTokens(n,t.walkTokens),Z.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+p(e.message+"",!0)+"</pre>";throw e}},j.Parser=Z,j.parser=Z.parse,j.Renderer=B,j.TextRenderer=P,j.Lexer=L,j.lexer=L.lex,j.Tokenizer=C,j.Slugger=q,j.parse=j;j.options,j.setOptions,j.use,j.walkTokens,j.parseInline,Z.parse,L.lex;function M(e,t){return Array(t+1).join(e)}j.use({tokenizer:{autolink:()=>null,url:()=>null},renderer:{checkbox(...e){return Object.getPrototypeOf(this).checkbox.call(this,...e).trimRight()},code(...e){return Object.getPrototypeOf(this).code.call(this,...e).replace("\n</code>","</code>")}}});var U=["address","article","aside","audio","blockquote","body","canvas","center","dd","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frameset","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","isindex","li","main","menu","nav","noframes","noscript","ol","output","p","pre","section","table","tbody","td","tfoot","th","thead","tr","ul"];function Q(e){return-1!==U.indexOf(e.nodeName.toLowerCase())}var F=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"];function V(e){return-1!==F.indexOf(e.nodeName.toLowerCase())}var H=F.join();var K={};function G(e){for(var t in this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[],e.rules)this.array.push(e.rules[t])}function W(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];if(X(i,t,n))return i}}function X(e,t,n){var r=e.filter;if("string"==typeof r){if(r===t.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(t.nodeName.toLowerCase())>-1)return!0}else{if("function"!=typeof r)throw new TypeError("`filter` needs to be a string, array, or function");if(r.call(e,t,n))return!0}}function J(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function Y(e,t,n){return e&&e.parentNode===t||n(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}K.paragraph={filter:"p",replacement:function(e){return"\n\n"+e+"\n\n"}},K.lineBreak={filter:"br",replacement:function(e,t,n){return n.br+"\n"}},K.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,n){var r=Number(t.nodeName.charAt(1));return"setext"===n.headingStyle&&r<3?"\n\n"+e+"\n"+M(1===r?"=":"-",e.length)+"\n\n":"\n\n"+M("#",r)+" "+e+"\n\n"}},K.blockquote={filter:"blockquote",replacement:function(e){return"\n\n"+(e=(e=e.replace(/^\n+|\n+$/g,"")).replace(/^/gm,"> "))+"\n\n"}},K.list={filter:["ul","ol"],replacement:function(e,t){var n=t.parentNode;return"LI"===n.nodeName&&n.lastElementChild===t?"\n"+e:"\n\n"+e+"\n\n"}},K.listItem={filter:"li",replacement:function(e,t,n){e=e.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var r=n.bulletListMarker+"   ",i=t.parentNode;if("OL"===i.nodeName){var s=i.getAttribute("start"),l=Array.prototype.indexOf.call(i.children,t);r=(s?Number(s)+l:l+1)+".  "}return r+e+(t.nextSibling&&!/\n$/.test(e)?"\n":"")}},K.indentedCodeBlock={filter:function(e,t){return"indented"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,t,n){return"\n\n    "+t.firstChild.textContent.replace(/\n/g,"\n    ")+"\n\n"}},K.fencedCodeBlock={filter:function(e,t){return"fenced"===t.codeBlockStyle&&"PRE"===e.nodeName&&e.firstChild&&"CODE"===e.firstChild.nodeName},replacement:function(e,t,n){for(var r,i=((t.firstChild.className||"").match(/language-(\S+)/)||[null,""])[1],s=t.firstChild.textContent,l=n.fence.charAt(0),o=3,a=new RegExp("^"+l+"{3,}","gm");r=a.exec(s);)r[0].length>=o&&(o=r[0].length+1);var c=M(l,o);return"\n\n"+c+i+"\n"+s.replace(/\n$/,"")+"\n"+c+"\n\n"}},K.horizontalRule={filter:"hr",replacement:function(e,t,n){return"\n\n"+n.hr+"\n\n"}},K.inlineLink={filter:function(e,t){return"inlined"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,t){return"["+e+"]("+t.getAttribute("href")+(t.title?' "'+t.title+'"':"")+")"}},K.referenceLink={filter:function(e,t){return"referenced"===t.linkStyle&&"A"===e.nodeName&&e.getAttribute("href")},replacement:function(e,t,n){var r,i,s=t.getAttribute("href"),l=t.title?' "'+t.title+'"':"";switch(n.linkReferenceStyle){case"collapsed":r="["+e+"][]",i="["+e+"]: "+s+l;break;case"shortcut":r="["+e+"]",i="["+e+"]: "+s+l;break;default:var o=this.references.length+1;r="["+e+"]["+o+"]",i="["+o+"]: "+s+l}return this.references.push(i),r},references:[],append:function(e){var t="";return this.references.length&&(t="\n\n"+this.references.join("\n")+"\n\n",this.references=[]),t}},K.emphasis={filter:["em","i"],replacement:function(e,t,n){return e.trim()?n.emDelimiter+e+n.emDelimiter:""}},K.strong={filter:["strong","b"],replacement:function(e,t,n){return e.trim()?n.strongDelimiter+e+n.strongDelimiter:""}},K.code={filter:function(e){var t=e.previousSibling||e.nextSibling,n="PRE"===e.parentNode.nodeName&&!t;return"CODE"===e.nodeName&&!n},replacement:function(e){if(!e.trim())return"";var t="`",n="",r="",i=e.match(/`+/gm);if(i)for(/^`/.test(e)&&(n=" "),/`$/.test(e)&&(r=" ");-1!==i.indexOf(t);)t+="`";return t+n+e+r+t}},K.image={filter:"img",replacement:function(e,t){var n=t.alt||"",r=t.getAttribute("src")||"",i=t.title||"";return r?"!["+n+"]("+r+(i?' "'+i+'"':"")+")":""}},G.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){return e.isBlank?this.blankRule:(t=W(this.array,e,this.options))||(t=W(this._keep,e,this.options))||(t=W(this._remove,e,this.options))?t:this.defaultRule;var t},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};var ee="undefined"!=typeof window?window:{};var te,ne=function(){var e=ee.DOMParser,t=!1;try{(new e).parseFromString("","text/html")&&(t=!0)}catch(e){}return t}()?ee.DOMParser:function(){var e=function(){},t=n(915).JSDOM;return e.prototype.parseFromString=function(e){return new t(e).window.document},e}();function re(e){var t;"string"==typeof e?t=(te=te||new ne).parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html").getElementById("turndown-root"):t=e.cloneNode(!0);return function(e){var t=e.element,n=e.isBlock,r=e.isVoid,i=e.isPre||function(e){return"PRE"===e.nodeName};if(t.firstChild&&!i(t)){for(var s=null,l=!1,o=null,a=Y(o,t,i);a!==t;){if(3===a.nodeType||4===a.nodeType){var c=a.data.replace(/[ \r\n\t]+/g," ");if(s&&!/ $/.test(s.data)||l||" "!==c[0]||(c=c.substr(1)),!c){a=J(a);continue}a.data=c,s=a}else{if(1!==a.nodeType){a=J(a);continue}n(a)||"BR"===a.nodeName?(s&&(s.data=s.data.replace(/ $/,"")),s=null,l=!1):r(a)&&(s=null,l=!0)}var h=Y(o,a,i);o=a,a=h}s&&(s.data=s.data.replace(/ $/,""),s.data||J(s))}}({element:t,isBlock:Q,isVoid:V}),t}function ie(e){return e.isBlock=Q(e),e.isCode="code"===e.nodeName.toLowerCase()||e.parentNode.isCode,e.isBlank=function(e){return-1===["A","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"].indexOf(e.nodeName)&&/^\s*$/i.test(e.textContent)&&!V(e)&&!function(e){return e.querySelector&&e.querySelector(H)}(e)}(e),e.flankingWhitespace=function(e){var t="",n="";if(!e.isBlock){var r=/^\s/.test(e.textContent),i=/\s$/.test(e.textContent),s=e.isBlank&&r&&i;r&&!se("left",e)&&(t=" "),s||!i||se("right",e)||(n=" ")}return{leading:t,trailing:n}}(e),e}function se(e,t){var n,r,i;return"left"===e?(n=t.previousSibling,r=/ $/):(n=t.nextSibling,r=/^ /),n&&(3===n.nodeType?i=r.test(n.nodeValue):1!==n.nodeType||Q(n)||(i=r.test(n.textContent))),i}var le=Array.prototype.reduce,oe=/^\n*/,ae=/\n*$/,ce=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function he(e){if(!(this instanceof he))return new he(e);var t={rules:K,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",blankReplacement:function(e,t){return t.isBlock?"\n\n":""},keepReplacement:function(e,t){return t.isBlock?"\n\n"+t.outerHTML+"\n\n":t.outerHTML},defaultReplacement:function(e,t){return t.isBlock?"\n\n"+e+"\n\n":e}};this.options=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}({},t,e),this.rules=new G(this.options)}function ue(e){var t=this;return le.call(e.childNodes,(function(e,n){var r="";return 3===(n=new ie(n)).nodeType?r=n.isCode?n.nodeValue:t.escape(n.nodeValue):1===n.nodeType&&(r=fe.call(t,n)),de(e,r)}),"")}function pe(e){var t=this;return this.rules.forEach((function(n){"function"==typeof n.append&&(e=de(e,n.append(t.options)))})),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function fe(e){var t=this.rules.forNode(e),n=ue.call(this,e),r=e.flankingWhitespace;return(r.leading||r.trailing)&&(n=n.trim()),r.leading+t.replacement(n,e,this.options)+r.trailing}function de(e,t){var n,r,i,s=(n=t,r=[e.match(ae)[0],n.match(oe)[0]].sort(),(i=r[r.length-1]).length<2?i:"\n\n");return(e=e.replace(ae,""))+s+(t=t.replace(oe,""))}he.prototype={turndown:function(e){if(!function(e){return null!=e&&("string"==typeof e||e.nodeType&&(1===e.nodeType||9===e.nodeType||11===e.nodeType))}(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(""===e)return"";var t=ue.call(this,new re(e));return pe.call(this,t)},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else{if("function"!=typeof e)throw new TypeError("plugin must be a Function or an Array of Functions");e(this)}return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return ce.reduce((function(e,t){return e.replace(t[0],t[1])}),e)}};const ge=he;var ke=/highlight-(?:text|source)-([a-z0-9]+)/;function me(e){e.addRule("highlightedCodeBlock",{filter:function(e){var t=e.firstChild;return"DIV"===e.nodeName&&ke.test(e.className)&&t&&"PRE"===t.nodeName},replacement:function(e,t,n){var r=((t.className||"").match(ke)||[null,""])[1];return"\n\n"+n.fence+r+"\n"+t.firstChild.textContent+"\n"+n.fence+"\n\n"}})}function xe(e){e.addRule("strikethrough",{filter:["del","s","strike"],replacement:function(e){return"~"+e+"~"}})}var be=Array.prototype.indexOf,we=Array.prototype.every,ye={};function _e(e){var t,n,r=e.parentNode;return"THEAD"===r.nodeName||r.firstChild===e&&("TABLE"===r.nodeName||(n=(t=r).previousSibling,"TBODY"===t.nodeName&&(!n||"THEAD"===n.nodeName&&/^\s*$/i.test(n.textContent))))&&we.call(e.childNodes,(function(e){return"TH"===e.nodeName}))}function ve(e,t){var n=" ";return 0===be.call(t.parentNode.childNodes,t)&&(n="| "),n+e+" |"}function ze(e){for(var t in e.keep((function(e){return"TABLE"===e.nodeName&&!_e(e.rows[0])})),ye)e.addRule(t,ye[t])}function Se(e){e.addRule("taskListItems",{filter:function(e){return"checkbox"===e.type&&"LI"===e.parentNode.nodeName},replacement:function(e,t){return(t.checked?"[x]":"[ ]")+" "}})}ye.tableCell={filter:["th","td"],replacement:function(e,t){return ve(e,t)}},ye.tableRow={filter:"tr",replacement:function(e,t){var n="",r={left:":--",right:"--:",center:":-:"};if(_e(t))for(var i=0;i<t.childNodes.length;i++){var s="---",l=(t.childNodes[i].getAttribute("align")||"").toLowerCase();l&&(s=r[l]||s),n+=ve(s,t.childNodes[i])}return"\n"+e+(n?"\n"+n:"")}},ye.table={filter:function(e){return"TABLE"===e.nodeName&&_e(e.rows[0])},replacement:function(e){return"\n\n"+(e=e.replace("\n\n","\n"))+"\n\n"}},ye.tableSection={filter:["thead","tbody","tfoot"],replacement:function(e){return e}};const $e=ge.prototype.escape;function Re(e){return e=(e=$e(e)).replace(/</g,"\\<")}ge.prototype.escape=function(e){let t="",n=0;for(const r of function*(e){for(const t of e.matchAll(Ae)){const e=t[0],n=Ne(e);yield Object.assign([e.substring(0,n)],{index:t.index})}}(e)){const i=r.index;i>n&&(t+=Re(e.substring(n,i)));const s=r[0];t+=s,n=i+s.length}return n<e.length&&(t+=Re(e.substring(n,e.length))),t};const Te=new ge({codeBlockStyle:"fenced",hr:"---",headingStyle:"atx"});Te.use([function(e){e.use([me,xe,ze,Se])},function(e){e.addRule("taskListItems",{filter:e=>"checkbox"===e.type&&("LI"===e.parentNode.nodeName||"LI"===e.parentNode.parentNode.nodeName),replacement:(e,t)=>(t.checked?"[x]":"[ ]")+" "})}]);const Ae=new RegExp(/\b(?:(?:https?|ftp):\/\/|www\.)/.source+/(?![-_])(?:[-_a-z0-9\u00a1-\uffff]{1,63}\.)+(?:[a-z\u00a1-\uffff]{2,63})/.source+/(?:[^\s<>]*)/.source,"gi");function Ne(e){let t=e.length;for(;t>0;){const n=e[t-1];if("?!.,:*_~'\"".includes(n))t--;else{if(")"!=n)break;{let n=0;for(let r=0;r<t;r++)"("==e[r]?n++:")"==e[r]&&n--;if(!(n<0))break;t--}}}return t}class Ce{constructor(e){this._htmlDP=new t.HtmlDataProcessor(e)}keepHtml(e){Te.keep([e])}toView(e){const t=(n=e,j.parse(n,{gfm:!0,breaks:!0,tables:!0,xhtml:!0,headerIds:!1}));var n;return this._htmlDP.toView(t)}toData(e){return function(e){return Te.turndown(e)}(this._htmlDP.toData(e))}registerRawContentMatcher(e){this._htmlDP.registerRawContentMatcher(e)}useFillerType(){}}class Ie extends e.Plugin{constructor(e){super(e),e.data.processor=new Ce(e.data.viewDocument)}static get pluginName(){return"Markdown"}}})(),(window.CKEditor5=window.CKEditor5||{}).markdownGfm=r})();

/***/ }),

/***/ 47655:
/***/ (() => {

(()=>{var e={98:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".ck.ck-editor__editable .ck-maximum-length-excess{background-color:rgba(204,51,51,.3)}",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=s(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:h(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function m(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,p=0;function h(e,t){var n,r,o;if(t.singleton){var i=p++;n=g||(g=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=c(e,t),u=0;u<n.length;u++){var l=s(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};(()=>{"use strict";n.r(r),n.d(r,{MaximumLength:()=>s});var e=n(704),t=n(379),o=n.n(t),i=n(98),a={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};o()(i.Z,a);i.Z.locals;class s extends e.Plugin{static get pluginName(){return"MaximumLength"}static get requires(){return["WordCount"]}init(){const e=this.editor,t=e.plugins.get("WordCount"),n=e.config.get("maximumLength.characters");let r=!1;e.model.document.registerPostFixer(e=>{const o=t.characters,i=this._calculateExcessRange(n,o);i?r?e.updateMarker("maximumLengthExcess",{range:i,usingOperation:!1}):(e.addMarker("maximumLengthExcess",{range:i,usingOperation:!1}),r=!0):r&&(e.removeMarker("maximumLengthExcess"),r=!1)}),e.conversion.for("editingDowncast").markerToHighlight({model:"maximumLengthExcess",view:{classes:"ck-maximum-length-excess"}})}_calculateExcessRange(e,t){if(e>t)return null;const n=this.editor,r=n.model.createRangeIn(n.model.document.getRoot()).getWalker({singleCharacters:!0,direction:"backward"});let o,i,a=t;for(const t of r)if("text"==t.type&&(o||(o=t.previousPosition),a--,a<e))return i=t.previousPosition,n.model.createRange(i,o)}}})(),(window.CKEditor5=window.CKEditor5||{}).maximumLength=r})();

/***/ }),

/***/ 54482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_CKEditorInput)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js + 1 modules
var FieldLabel = __webpack_require__(19270);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(1565);
;// CONCATENATED MODULE: ./node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/styles/common.js

const style = styled_components_browser_esm/* css */.iv`
  .ck-word-count {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    padding-block: 0.2rem;
    font-size: 0.875rem;
  }

  .ck-editor__main {
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }

    h1 {
      font-size: 2em;
      margin-bottom: 0.6em;
      font-weight: 400;
    }

    h2 {
      font-size: 1.68em;
      margin-bottom: 0.4em;
      font-weight: 400;
    }

    h3 {
      font-size: 1.36em;
      margin-bottom: 0.2em;
      font-weight: 400;
    }

    h4 {
      font-size: 1.15em;
      margin-bottom: 0.1em;
      font-weight: 400;
    }

    p {
      font-size: 1em;
      line-height: 1.6em;
      margin-bottom: 0.8em;
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: .75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    blockquote {
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub
    }

    sup {
      vertical-align: super
    }

    // higher specificity needed
    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;

      // so it's more Strapi alike
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid rgb(73, 69, 255);
        box-shadow: rgb(73 69 255) 0 0 0 0.125rem;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        transition-property: border-color, box-shadow;
        transition-duration: 0.2s;
      }
    }
  }
`;

;// CONCATENATED MODULE: ./node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/styles/light.js

const light_style = styled_components_browser_esm/* css */.iv`
`;

;// CONCATENATED MODULE: ./node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/styles/dark.js

const dark_style = styled_components_browser_esm/* css */.iv`
  .ck {
    --ck-color-toolbar-background: rgb(24, 24, 38);
    --ck-color-text: rgb(165, 165, 186);
    --ck-color-editor-base-text: rgb(255, 255, 255);
    --ck-color-toolbar-border: rgb(74, 74, 106);
    --ck-color-base-border: rgb(74, 74, 106);
    --ck-color-base-background: rgb(33, 33, 52);
    --ck-color-button-default-background: rgb(33, 33, 52);
    --ck-color-list-button-hover-background: rgb(24, 24, 38);
    --ck-color-button-default-hover-background: rgb(33, 33, 52);
    --ck-color-button-on-background: rgb(33, 33, 52);
    --ck-color-button-on-hover-background: rgb(33, 33, 52);
    --ck-color-button-default-active-background: rgb(33, 33, 52);
  }
  .ck-word-count {
    color: rgb(165, 165, 186)
  }
`;

;// CONCATENATED MODULE: ./node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/GlobalStyling.js




const getGlobalStyling = (theme) => {
  let themeStyle = null;
  switch (theme) {
    case "dark":
      themeStyle = dark_style;
      break;
    case "light":
      themeStyle = light_style;
      break;
  }
  return styled_components_browser_esm/* createGlobalStyle */.vJ`
    ${style}
    ${themeStyle}
  `;
};

// EXTERNAL MODULE: ./node_modules/ckeditor5/build/ckeditor5-dll.js
var ckeditor5_dll = __webpack_require__(77868);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-alignment/build/alignment.js
var alignment = __webpack_require__(53844);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-autoformat/build/autoformat.js
var autoformat = __webpack_require__(98491);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-basic-styles/build/basic-styles.js
var basic_styles = __webpack_require__(6378);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-block-quote/build/block-quote.js
var block_quote = __webpack_require__(67564);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-code-block/build/code-block.js
var code_block = __webpack_require__(15535);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-essentials/build/essentials.js
var essentials = __webpack_require__(29410);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-font/build/font.js
var font = __webpack_require__(20978);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-heading/build/heading.js
var heading = __webpack_require__(60145);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-highlight/build/highlight.js
var highlight = __webpack_require__(99416);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-html-embed/build/html-embed.js
var html_embed = __webpack_require__(78590);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-horizontal-line/build/horizontal-line.js
var horizontal_line = __webpack_require__(29781);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-markdown-gfm/build/markdown-gfm.js
var markdown_gfm = __webpack_require__(5978);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-media-embed/build/media-embed.js
var media_embed = __webpack_require__(56961);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-image/build/image.js
var build_image = __webpack_require__(11093);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-indent/build/indent.js
var indent = __webpack_require__(64621);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-link/build/link.js
var build_link = __webpack_require__(4986);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-list/build/list.js
var list = __webpack_require__(66665);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-paste-from-office/build/paste-from-office.js
var paste_from_office = __webpack_require__(96461);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-find-and-replace/build/find-and-replace.js
var find_and_replace = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-remove-format/build/remove-format.js
var remove_format = __webpack_require__(54132);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-special-characters/build/special-characters.js
var special_characters = __webpack_require__(51207);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-table/build/table.js
var table = __webpack_require__(58174);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-word-count/build/word-count.js
var word_count = __webpack_require__(6653);
// EXTERNAL MODULE: ./node_modules/@reinmar/ckeditor5-maximum-length/build/maximum-length.js
var maximum_length = __webpack_require__(47655);
;// CONCATENATED MODULE: ./node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/plugins/StrapiMediaLib.js
const Plugin = window.CKEditor5.core.Plugin;
const ButtonView = window.CKEditor5.ui.ButtonView;
const mediaLibIcon = '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.3.6a.9.9 0 100 1.8h15.311a.9.9 0 100-1.8H4.301zm17.1 3.7A1.6 1.6 0 0123 5.9v15.5a1.6 1.6 0 01-1.6 1.6H2.6A1.601 1.601 0 011 21.4V8 5.915C1 5.03 1.716 4.3 2.6 4.3h18.8zM5.032 19.18h14.336l-3.136-3.205-1.792 1.831-4.032-4.12-5.376 5.494zm13.44-8.697c0 1.282-.985 2.289-2.24 2.289-1.254 0-2.24-1.007-2.24-2.29 0-1.281.986-2.288 2.24-2.288 1.255 0 2.24 1.007 2.24 2.289z"></path></svg>';
class StrapiMediaLib extends Plugin {
  /**
   * Strapi function used to show media library modal.
   * Should be provided via connect method before using toggle method.
   *
   * @type {function|null}
   */
  strapiToggle = null;
  static get pluginName() {
    return "strapiMediaLib";
  }
  init() {
    const editor = this.editor;
    editor.ui.componentFactory.add("strapiMediaLib", () => {
      const button = new ButtonView();
      button.set({
        label: "Media Library",
        icon: mediaLibIcon,
        tooltip: true
      });
      button.on("execute", this.toggle.bind(this));
      return button;
    });
  }
  connect(strapiToggle) {
    if (typeof strapiToggle !== "function") {
      throw new Error("Input parameter for toogle should be a function");
    }
    this.strapiToggle = strapiToggle;
  }
  toggle() {
    if (typeof this.strapiToggle !== "function") {
      throw new Error("Strapi media library toggle function not connected. Use connect function first");
    }
    this.strapiToggle();
  }
}

;// CONCATENATED MODULE: ./node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/Configurator.js


























const CKEDITOR_BASE_CONFIG_FOR_PRESETS = {
  light: {
    plugins: [
      window.CKEditor5.autoformat.Autoformat,
      window.CKEditor5.basicStyles.Bold,
      window.CKEditor5.basicStyles.Italic,
      window.CKEditor5.essentials.Essentials,
      window.CKEditor5.heading.Heading,
      window.CKEditor5.image.Image,
      window.CKEditor5.image.ImageCaption,
      window.CKEditor5.image.ImageStyle,
      window.CKEditor5.image.ImageToolbar,
      window.CKEditor5.image.ImageUpload,
      window.CKEditor5.indent.Indent,
      window.CKEditor5.link.Link,
      window.CKEditor5.list.List,
      window.CKEditor5.paragraph.Paragraph,
      window.CKEditor5.pasteFromOffice.PasteFromOffice,
      window.CKEditor5.table.Table,
      window.CKEditor5.table.TableToolbar,
      window.CKEditor5.table.TableColumnResize,
      window.CKEditor5.table.TableCaption,
      window.CKEditor5.wordCount.WordCount,
      StrapiMediaLib
    ],
    toolbar: [
      "undo",
      "redo",
      "|",
      "heading",
      "|",
      "bold",
      "italic",
      "|",
      "link",
      "strapiMediaLib",
      "insertTable",
      "|",
      "bulletedList",
      "numberedList"
    ],
    heading: {
      options: [
        { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
        { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
        { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
        { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
        { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" }
      ]
    },
    image: {
      toolbar: [
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "|",
        "toggleImageCaption",
        "imageTextAlternative"
      ]
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "|",
        "toggleTableCaption"
      ]
    }
  },
  standard: {
    plugins: [
      window.CKEditor5.autoformat.Autoformat,
      window.CKEditor5.basicStyles.Bold,
      window.CKEditor5.basicStyles.Italic,
      window.CKEditor5.blockQuote.BlockQuote,
      window.CKEditor5.codeBlock.CodeBlock,
      window.CKEditor5.essentials.Essentials,
      window.CKEditor5.heading.Heading,
      window.CKEditor5.image.Image,
      window.CKEditor5.image.ImageCaption,
      window.CKEditor5.image.ImageStyle,
      window.CKEditor5.image.ImageToolbar,
      window.CKEditor5.image.ImageUpload,
      window.CKEditor5.indent.Indent,
      window.CKEditor5.link.Link,
      window.CKEditor5.link.LinkImage,
      window.CKEditor5.list.List,
      window.CKEditor5.mediaEmbed.MediaEmbed,
      window.CKEditor5.paragraph.Paragraph,
      window.CKEditor5.pasteFromOffice.PasteFromOffice,
      window.CKEditor5.table.Table,
      window.CKEditor5.table.TableToolbar,
      window.CKEditor5.table.TableColumnResize,
      window.CKEditor5.table.TableCaption,
      window.CKEditor5.wordCount.WordCount,
      StrapiMediaLib
    ],
    toolbar: [
      "undo",
      "redo",
      "|",
      "heading",
      "|",
      "bold",
      "italic",
      "|",
      "link",
      "strapiMediaLib",
      "mediaEmbed",
      "blockQuote",
      "insertTable",
      "codeBlock",
      "|",
      "bulletedList",
      "numberedList",
      "outdent",
      "indent"
    ],
    heading: {
      options: [
        { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
        { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
        { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
        { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
        { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" }
      ]
    },
    image: {
      toolbar: [
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "|",
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "linkImage"
      ]
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "|",
        "toggleTableCaption"
      ]
    }
  },
  rich: {
    plugins: [
      window.CKEditor5.alignment.Alignment,
      window.CKEditor5.autoformat.Autoformat,
      window.CKEditor5.basicStyles.Bold,
      window.CKEditor5.basicStyles.Italic,
      window.CKEditor5.basicStyles.Underline,
      window.CKEditor5.basicStyles.Strikethrough,
      window.CKEditor5.basicStyles.Code,
      window.CKEditor5.basicStyles.Subscript,
      window.CKEditor5.basicStyles.Superscript,
      window.CKEditor5.blockQuote.BlockQuote,
      window.CKEditor5.codeBlock.CodeBlock,
      window.CKEditor5.essentials.Essentials,
      window.CKEditor5.font.FontSize,
      window.CKEditor5.font.FontFamily,
      window.CKEditor5.font.FontColor,
      window.CKEditor5.font.FontBackgroundColor,
      window.CKEditor5.findAndReplace.FindAndReplace,
      window.CKEditor5.heading.Heading,
      window.CKEditor5.horizontalLine.HorizontalLine,
      window.CKEditor5.htmlEmbed.HtmlEmbed,
      window.CKEditor5.image.Image,
      window.CKEditor5.image.ImageCaption,
      window.CKEditor5.image.ImageStyle,
      window.CKEditor5.image.ImageToolbar,
      window.CKEditor5.image.ImageUpload,
      window.CKEditor5.image.ImageResize,
      window.CKEditor5.indent.Indent,
      window.CKEditor5.indent.IndentBlock,
      window.CKEditor5.link.Link,
      window.CKEditor5.link.LinkImage,
      window.CKEditor5.list.List,
      window.CKEditor5.list.ListProperties,
      window.CKEditor5.list.TodoList,
      window.CKEditor5.mediaEmbed.MediaEmbed,
      window.CKEditor5.paragraph.Paragraph,
      window.CKEditor5.pasteFromOffice.PasteFromOffice,
      window.CKEditor5.removeFormat.RemoveFormat,
      window.CKEditor5.specialCharacters.SpecialCharacters,
      window.CKEditor5.specialCharacters.SpecialCharactersEssentials,
      window.CKEditor5.table.Table,
      window.CKEditor5.table.TableToolbar,
      window.CKEditor5.table.TableProperties,
      window.CKEditor5.table.TableCellProperties,
      window.CKEditor5.table.TableColumnResize,
      window.CKEditor5.table.TableCaption,
      window.CKEditor5.wordCount.WordCount,
      window.CKEditor5.highlight.Highlight,
      StrapiMediaLib
    ],
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "findAndReplace",
        "selectAll",
        "|",
        "heading",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "superscript",
        "subscript",
        "code",
        "removeFormat",
        "-",
        "link",
        "strapiMediaLib",
        "mediaEmbed",
        "insertTable",
        "horizontalLine",
        "blockQuote",
        "codeBlock",
        "htmlEmbed",
        "specialCharacters",
        "highlight",
        "|",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "outdent",
        "indent"
      ],
      shouldNotGroupWhenFull: true
    },
    heading: {
      options: [
        { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
        { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
        { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
        { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
        { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" }
      ]
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true
      }
    },
    image: {
      resizeUnit: "%",
      resizeOptions: [
        {
          name: "resizeImage:original",
          value: null,
          icon: "original"
        },
        {
          name: "resizeImage:25",
          value: "25",
          icon: "small"
        },
        {
          name: "resizeImage:50",
          value: "50",
          icon: "medium"
        },
        {
          name: "resizeImage:75",
          value: "75",
          icon: "large"
        }
      ],
      toolbar: [
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
        "|",
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "linkImage",
        "|",
        "resizeImage:25",
        "resizeImage:50",
        "resizeImage:75",
        "resizeImage:original"
      ]
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "|",
        "tableCellProperties",
        "tableProperties",
        "|",
        "toggleTableCaption"
      ]
    },
    fontSize: {
      options: [
        9,
        11,
        13,
        "default",
        17,
        19,
        21,
        27,
        35
      ],
      supportAllValues: false
    },
    fontFamily: {
      options: [
        "default",
        "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
        "Courier New, Courier, monospace",
        "Georgia, serif",
        "Lucida Sans Unicode, Lucida Grande, sans-serif",
        "Tahoma, Geneva, sans-serif",
        "Times New Roman, Times, serif",
        "Trebuchet MS, Helvetica, sans-serif",
        "Verdana, Geneva, sans-serif",
        "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif"
      ],
      supportAllValues: true
    },
    fontColor: {
      columns: 5,
      documentColors: 10
    },
    fontBackgroundColor: {
      columns: 5,
      documentColors: 10
    }
  }
};
class Configurator {
  constructor(fieldConfig) {
    this.fieldConfig = fieldConfig;
  }
  getEditorConfig() {
    const config = this._getBaseConfig();
    const maxLength = this.fieldConfig.maxLength;
    const outputOption = this.fieldConfig.options.output;
    if (outputOption === "Markdown") {
      config.plugins.push(window.CKEditor5.markdownGfm.Markdown);
    }
    if (maxLength) {
      config.plugins.push(window.CKEditor5.maximumLength.MaximumLength);
      config.maximumLength = {
        characters: maxLength
      };
    }
    return config;
  }
  _getBaseConfig() {
    const presetName = this.fieldConfig.options.preset;
    switch (presetName) {
      case "light":
        return CKEDITOR_BASE_CONFIG_FOR_PRESETS.light;
      case "standard":
        return CKEDITOR_BASE_CONFIG_FOR_PRESETS.standard;
      case "rich":
        return CKEDITOR_BASE_CONFIG_FOR_PRESETS.rich;
      default:
        throw new Error("Invalid preset name " + presetName);
    }
  }
}

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 65 modules
var helper_plugin_esm = __webpack_require__(97285);
;// CONCATENATED MODULE: ./node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/MediaLib/index.js



const MediaLib = ({ isOpen, onChange, onToggle }) => {
  const { components } = (0,helper_plugin_esm/* useLibrary */.yX)();
  const MediaLibraryDialog = components["media-library"];
  const handleSelectAssets = (files) => {
    const formattedFiles = files.map((f) => ({
      alt: f.alternativeText || f.name,
      url: (0,helper_plugin_esm/* prefixFileUrlWithBackendUrl */.CR)(f.url),
      mime: f.mime
    }));
    onChange(formattedFiles);
  };
  if (!isOpen) {
    return null;
  }
  ;
  return /* @__PURE__ */ react.createElement(MediaLibraryDialog, { onClose: onToggle, onSelectAssets: handleSelectAssets });
};
MediaLib.defaultProps = {
  isOpen: false,
  onChange: () => {
  },
  onToggle: () => {
  }
};
MediaLib.propTypes = {
  isOpen: (prop_types_default()).bool,
  onChange: (prop_types_default()).func,
  onToggle: (prop_types_default()).func
};
/* harmony default export */ const components_MediaLib = (MediaLib);

// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js
var ckeditor = __webpack_require__(72757);
// EXTERNAL MODULE: ./node_modules/@ckeditor/ckeditor5-editor-classic/build/editor-classic.js
var editor_classic = __webpack_require__(3108);
;// CONCATENATED MODULE: ./node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/utils/utils.js
function sanitize(data) {
  const characters = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  for (const char in characters) {
    const entity = characters[char];
    data = data.replaceAll(char, entity);
  }
  return data;
}

;// CONCATENATED MODULE: ./node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.js












const CKEditorInput = ({
  attribute,
  onChange,
  name,
  value,
  disabled,
  labelAction,
  intlLabel,
  required,
  description,
  error
}) => {
  const [editorInstance, setEditorInstance] = (0,react.useState)(false);
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { maxLengthCharacters: maxLength, ...options } = attribute.options;
  const configurator = new Configurator({ options, maxLength });
  const editorConfig = configurator.getEditorConfig();
  const wordCounter = (0,react.useRef)(null);
  const strapiTheme = localStorage.getItem("STRAPI_THEME");
  const GlobalStyling = getGlobalStyling(strapiTheme);
  const [mediaLibVisible, setMediaLibVisible] = (0,react.useState)(false);
  const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev);
  const handleChangeAssets = (assets) => {
    let imageHtmlString = "";
    assets.map((asset) => {
      if (asset.mime.includes("image")) {
        const url = sanitize(asset.url);
        const alt = sanitize(asset.alt);
        imageHtmlString += `<img src="${url}" alt="${alt}" />`;
      }
    });
    const viewFragment = editorInstance.data.processor.toView(imageHtmlString);
    const modelFragment = editorInstance.data.toModel(viewFragment);
    editorInstance.model.insertContent(modelFragment);
    handleToggleMediaLib();
  };
  return /* @__PURE__ */ react.createElement(
    Field/* Field */.g,
    {
      name,
      id: name,
      error,
      hint: description && formatMessage(description)
    },
    /* @__PURE__ */ react.createElement(Stack/* Stack */.K, { spacing: 1 }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, { action: labelAction, required }, formatMessage(intlLabel)), /* @__PURE__ */ react.createElement(GlobalStyling, null), /* @__PURE__ */ react.createElement(
      ckeditor.CKEditor,
      {
        editor: window.CKEditor5.editorClassic.ClassicEditor,
        disabled,
        data: value,
        onReady: (editor) => {
          const wordCountPlugin = editor.plugins.get("WordCount");
          const wordCountWrapper = wordCounter.current;
          wordCountWrapper.appendChild(wordCountPlugin.wordCountContainer);
          const mediaLibPlugin = editor.plugins.get("strapiMediaLib");
          mediaLibPlugin.connect(handleToggleMediaLib);
          setEditorInstance(editor);
        },
        onChange: (event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
          const wordCountPlugin = editor.plugins.get("WordCount");
          const numberOfCharacters = wordCountPlugin.characters;
          if (numberOfCharacters > maxLength) {
            console.log("Too long");
          }
        },
        config: editorConfig
      }
    ), /* @__PURE__ */ react.createElement("div", { ref: wordCounter }), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)),
    /* @__PURE__ */ react.createElement(components_MediaLib, { isOpen: mediaLibVisible, onChange: handleChangeAssets, onToggle: handleToggleMediaLib })
  );
};
CKEditorInput.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
  value: ""
};
CKEditorInput.propTypes = {
  intlLabel: (prop_types_default()).object.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  attribute: (prop_types_default()).object.isRequired,
  name: (prop_types_default()).string.isRequired,
  description: (prop_types_default()).object,
  disabled: (prop_types_default()).bool,
  error: (prop_types_default()).string,
  labelAction: (prop_types_default()).object,
  required: (prop_types_default()).bool,
  value: (prop_types_default()).string
};
/* harmony default export */ const components_CKEditorInput = (CKEditorInput);


/***/ })

}]);