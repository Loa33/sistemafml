(function(t){function e(e){for(var n,r,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i={app:0},o=[];function c(t){return s.p+"static/js/"+({}[t]||t)+"."+{"chunk-2e7d08b1":"c574edd6","chunk-74586c9b":"af585ace","chunk-6132cb1e":"6df1a859","chunk-97d2e87a":"d04c5569","chunk-2447beaa":"fc7772e7","chunk-46ec2bb9":"732e5a10","chunk-2d0e62e3":"8c524fc0","chunk-78d73727":"30953f97","chunk-0b69a5da":"a77d22c7","chunk-0f579ba5":"57fe7516","chunk-16f1b318":"7b8cf224","chunk-45451d69":"ee7d56ca","chunk-4ac9ccf8":"ce1b5816","chunk-dd269a78":"c882cb53","chunk-28062148":"8e7a019e","chunk-8238a6ca":"2930523c","chunk-7966cc25":"c1455aaf","chunk-478bdf50":"904597d5"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a={"chunk-2e7d08b1":1,"chunk-74586c9b":1,"chunk-97d2e87a":1,"chunk-46ec2bb9":1,"chunk-78d73727":1,"chunk-0b69a5da":1,"chunk-0f579ba5":1,"chunk-16f1b318":1,"chunk-45451d69":1,"chunk-4ac9ccf8":1,"chunk-dd269a78":1,"chunk-28062148":1,"chunk-8238a6ca":1,"chunk-7966cc25":1,"chunk-478bdf50":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="static/css/"+({}[t]||t)+"."+{"chunk-2e7d08b1":"9b24339b","chunk-74586c9b":"6877d1db","chunk-6132cb1e":"31d6cfe0","chunk-97d2e87a":"df6f473f","chunk-2447beaa":"31d6cfe0","chunk-46ec2bb9":"72146d8b","chunk-2d0e62e3":"31d6cfe0","chunk-78d73727":"fcb5c613","chunk-0b69a5da":"c4782087","chunk-0f579ba5":"c4782087","chunk-16f1b318":"c4782087","chunk-45451d69":"c4782087","chunk-4ac9ccf8":"c4782087","chunk-dd269a78":"c4782087","chunk-28062148":"f3bc03bd","chunk-8238a6ca":"8a80a132","chunk-7966cc25":"23ea12ed","chunk-478bdf50":"04e39517"}[t]+".css",i=s.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],f.parentNode.removeChild(f),a(o)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1f55":function(t,e,a){},"27b8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-alert",t._g(t._b({staticClass:"v-alert--material",attrs:{dark:""},scopedSlots:t._u([t.$attrs.icon?{key:"prepend",fn:function(){return[a("v-icon",{staticClass:"v-alert__icon elevation-6 white",attrs:{light:"",color:t.$attrs.color}},[t._v(" "+t._s(t.$attrs.icon)+" ")])]},proxy:!0}:null,t.$attrs.dismissible?{key:"close",fn:function(e){var n=e.toggle;return[a("v-btn",{attrs:{"aria-label":t.$vuetify.lang.t("$vuetify.close"),color:"",icon:"",small:""},on:{click:n}},[a("v-icon",[t._v(" $vuetify.icons.cancel ")])],1)]}}:null],null,!0)},"v-alert",t.$attrs,!1),t.$listeners),[t._t("default")],2)},r=[],i={name:"MaterialAlert"},o=i,c=(a("b22c"),a("2877")),s=a("6544"),l=a.n(s),u=a("0798"),d=a("8336"),f=a("132d"),m=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=m.exports;l()(m,{VAlert:u["a"],VBtn:d["a"],VIcon:f["a"]})},3648:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display-2 font-weight-light col col-12 text-left text--primary pa-0 mb-8"},[a("h5",{staticClass:"font-weight-light"},[t._v(" "+t._s(t.subheading)+" "),t.text?[a("span",{staticClass:"subtitle-1",domProps:{textContent:t._s(t.text)}})]:t._e()],2),a("div",{staticClass:"pt-2"},[t._t("default")],2)])},r=[],i={name:"Subheading",props:{subheading:{type:String,default:""},text:{type:String,default:""}}},o=i,c=a("2877"),s=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=s.exports},3728:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",{attrs:{href:t.href,rel:t.href&&"#"!==t.href?"noopener":void 0,target:t.href&&"#"!==t.href?"_blank":void 0,to:t.item.to,"active-class":"primary "+(t.isDark?"white":"black")+"--text"}},[t.text?a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(t.computedText)}})],1):t.item.icon?a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(t.item.icon)}})],1):t._e(),t.item.title||t.item.subtitle?a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.item.title)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(t.item.subtitle)}})],1):t._e()],1)},r=[],i=a("7560"),o={name:"Item",mixins:[i["a"]],props:{item:{type:Object,default:function(){return{href:void 0,icon:void 0,subtitle:void 0,title:void 0,to:void 0}}},text:{type:Boolean,default:!1}},computed:{computedText:function(){if(!this.item||!this.item.title)return"";var t=this.item.icon;return t},href:function(){return this.item.href||(this.item.to?void 0:"#")}}},c=o,s=a("2877"),l=a("6544"),u=a.n(l),d=a("132d"),f=a("da13"),m=a("5d23"),h=a("34c3"),p=Object(s["a"])(c,n,r,!1,null,null,null);e["default"]=p.exports;u()(p,{VIcon:d["a"],VListItem:f["a"],VListItemContent:m["a"],VListItemIcon:h["a"],VListItemSubtitle:m["b"],VListItemTitle:m["c"]})},3864:function(t,e,a){},"3fd1":function(t,e,a){},"407e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",t._b({staticClass:"v-tabs--pill",attrs:{"active-class":t.color+" "+(t.$vuetify.theme.dark?"black":"white")+"--text","hide-slider":""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},"v-tabs",t.$attrs,!1),[t._t("default"),t._t("items")],2)},r=[],i=a("a452"),o={name:"MaterialTabs",mixins:[i["a"]],props:{color:{type:String,default:"primary"}}},c=o,s=(a("9743"),a("2877")),l=a("6544"),u=a.n(l),d=a("fe57"),f=Object(s["a"])(c,n,r,!1,null,null,null);e["default"]=f.exports;u()(f,{VTabs:d["a"]})},"55a9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"text-center v-card--testimony"},[a("div",{staticClass:"pt-6"},[a("v-icon",{attrs:{color:"black","x-large":""}},[t._v(" mdi-format-quote-close ")])],1),a("v-card-text",{staticClass:"display-1 font-weight-light font-italic mb-3",domProps:{textContent:t._s(t.blurb)}}),a("div",{staticClass:"display-2 font-weight-light mb-2",domProps:{textContent:t._s(t.author)}}),a("div",{staticClass:"body-2 text-uppercase grey--text",domProps:{textContent:t._s(t.handle)}}),a("v-avatar",{staticClass:"elevation-12",attrs:{color:"grey",size:"100"}},[a("v-img",{attrs:{alt:t.author+" Testimonial",src:t.avatar}})],1),a("div")],1)},r=[],i={name:"BaseMaterialTestimony",props:{author:{type:String,default:""},avatar:{type:String,default:"https://demos.creative-tim.com/material-dashboard/assets/img/faces/card-profile1-square.jpg"},blurb:{type:String,default:""},handle:{type:String,default:""}}},o=i,c=(a("7bbe"),a("2877")),s=a("6544"),l=a.n(s),u=a("8212"),d=a("b0af"),f=a("99d9"),m=a("132d"),h=a("adda"),p=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=p.exports;l()(p,{VAvatar:u["a"],VCard:d["a"],VCardText:f["b"],VIcon:m["a"],VImg:h["a"]})},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},i=[],o={name:"App"},c=o,s=a("2877"),l=Object(s["a"])(c,r,i,!1,null,null,null),u=l.exports,d=(a("45fc"),a("d3b7"),a("8c4f")),f=a("2f62"),m=a("1232");n["a"].use(f["a"]);var h=new f["a"].Store({state:{barColor:"rgba(0, 0, 0, .4), rgba(0, 0, 0, 1)",barImage:"https://previews.123rf.com/images/leaf/leaf1508/leaf150800532/44323995-medicines-arranged-in-shelves-at-pharmacy.jpg",drawer:null,token:null,usuario:null},mutations:{SET_BAR_IMAGE:function(t,e){t.barImage=e},SET_DRAWER:function(t,e){t.drawer=e},setToken:function(t,e){t.token=e},setUsuario:function(t,e){t.usuario=e}},actions:{guardarToken:function(t,e){var a=t.commit;a("setToken",e),a("setUsuario",Object(m["a"])(e)),localStorage.setItem("token",e)},autoLogin:function(t){var e=t.commit,a=localStorage.getItem("token");a&&(e("setToken",a),e("setUsuario",Object(m["a"])(a))),b.push({name:"Dashboard"})},salir:function(t){var e=t.commit;e("setToken",null),e("setUsuario",null),localStorage.removeItem("token"),b.push({name:"Login"})}}});n["a"].use(d["a"]);var p=new d["a"]({mode:"history",base:"/",routes:[{name:"home",path:"/",component:function(){return a.e("chunk-2e7d08b1").then(a.bind(null,"cd59"))},children:[{name:"Dashboard",path:"",component:function(){return Promise.all([a.e("chunk-74586c9b"),a.e("chunk-6132cb1e")]).then(a.bind(null,"5c3a8"))},meta:{administrador:!0,almacenero:!0,farmaceutica:!0}},{name:"Categorias",path:"almacen/categorias",component:function(){return Promise.all([a.e("chunk-74586c9b"),a.e("chunk-97d2e87a"),a.e("chunk-46ec2bb9"),a.e("chunk-78d73727"),a.e("chunk-0b69a5da")]).then(a.bind(null,"7c14"))},meta:{administrador:!0,almacenero:!0}},{name:"Compras",path:"compras",component:function(){return Promise.all([a.e("chunk-74586c9b"),a.e("chunk-97d2e87a"),a.e("chunk-46ec2bb9"),a.e("chunk-78d73727"),a.e("chunk-16f1b318")]).then(a.bind(null,"9f2c"))},meta:{administrador:!0,almacenero:!0}},{name:"Producto",path:"almacen/productos",component:function(){return Promise.all([a.e("chunk-74586c9b"),a.e("chunk-97d2e87a"),a.e("chunk-46ec2bb9"),a.e("chunk-78d73727"),a.e("chunk-dd269a78")]).then(a.bind(null,"31f6"))},meta:{administrador:!0,almacenero:!0,farmaceutica:!0}},{name:"Proveedores",path:"proveedores",component:function(){return Promise.all([a.e("chunk-74586c9b"),a.e("chunk-97d2e87a"),a.e("chunk-46ec2bb9"),a.e("chunk-78d73727"),a.e("chunk-45451d69")]).then(a.bind(null,"79a2"))},meta:{administrador:!0,almacenero:!0}},{name:"Roles",path:"acceso/roles",component:function(){return Promise.all([a.e("chunk-74586c9b"),a.e("chunk-97d2e87a"),a.e("chunk-46ec2bb9"),a.e("chunk-2d0e62e3")]).then(a.bind(null,"983a"))},meta:{administrador:!0}},{name:"Usuarios",path:"acceso/usuarios",component:function(){return Promise.all([a.e("chunk-74586c9b"),a.e("chunk-97d2e87a"),a.e("chunk-46ec2bb9"),a.e("chunk-78d73727"),a.e("chunk-4ac9ccf8")]).then(a.bind(null,"610c"))},meta:{administrador:!0}},{name:"Ventas",path:"ventas",component:function(){return Promise.all([a.e("chunk-74586c9b"),a.e("chunk-97d2e87a"),a.e("chunk-46ec2bb9"),a.e("chunk-78d73727"),a.e("chunk-0f579ba5")]).then(a.bind(null,"21e5"))},meta:{administrador:!0,farmaceutica:!0}},{name:"Login",path:"login",component:function(){return Promise.all([a.e("chunk-74586c9b"),a.e("chunk-97d2e87a"),a.e("chunk-2447beaa")]).then(a.bind(null,"a55b"))},meta:{libre:!0}}]}]});p.beforeEach((function(t,e,a){t.matched.some((function(t){return t.meta.libre}))?a():h.state.usuario&&"Administrador"==h.state.usuario.rol?t.matched.some((function(t){return t.meta.administrador}))&&a():h.state.usuario&&"Jefe de Almacén"==h.state.usuario.rol?t.matched.some((function(t){return t.meta.almacenero}))&&a():h.state.usuario&&"Farmaceútica"==h.state.usuario.rol?t.matched.some((function(t){return t.meta.farmaceutica}))&&a():a({name:"Login"})}));var b=p,v=(a("4160"),a("ac1f"),a("5319"),a("159b"),a("ddb0"),a("8103")),g=a.n(v),k=a("bba4"),y=a.n(k),_=a("e51e");_.keys().forEach((function(t){var e=_(t),a=g()(y()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));n["a"].component("Base".concat(a),e.default||e)}));a("4633");n["a"].use(a("84b5"));var C=a("7bb1"),x=a("4c93");Object(C["c"])("email",x["a"]),Object(C["c"])("max",x["b"]),Object(C["c"])("min",x["c"]),Object(C["c"])("numeric",x["d"]),Object(C["c"])("required",x["e"]),n["a"].component("validation-provider",C["b"]),n["a"].component("validation-observer",C["a"]);var S=a("f309"),O=a("5530"),j=a("a925"),w=a("1072");n["a"].use(j["a"]);var V={en:Object(O["a"])(Object(O["a"])({},a("edd4")),{},{$vuetify:w["a"]})},P=new j["a"]({locale:"en",fallbackLocale:"en",messages:V});a("1f55");n["a"].use(S["a"]);var $={primary:"#186eb7",secondary:"#9C27b0",accent:"#9C27b0",info:"#00CAE3"},T=new S["a"]({lang:{t:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return P.t(t,a)}},theme:{themes:{dark:$,light:$}}}),E=a("bc3a"),I=a.n(E),A=a("5886");a("4413");n["a"].use(A["default"]),n["a"].config.productionTip=!1,I.a.defaults.baseURL="http://localhost:61253/",new n["a"]({router:b,store:h,vuetify:T,i18n:P,render:function(t){return t(u)}}).$mount("#app")},"5ac2":function(t,e,a){"use strict";a("e500")},"5f10":function(t,e,a){},6661:function(t,e,a){},6904:function(t,e,a){},"740d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},r=[],i={name:"VComponent",props:{heading:{type:String,default:""},link:{type:String,default:""}}},o=i,c=a("2877"),s=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=s.exports},"7bbe":function(t,e,a){"use strict";a("5f10")},"8df3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-material-card",t._g(t._b({staticClass:"v-card--material-chart",scopedSlots:t._u([{key:"heading",fn:function(){return[a("chartist",{staticStyle:{"max-height":"150px"},attrs:{data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type}})]},proxy:!0}])},"base-material-card",t.$attrs,!1),t.$listeners),[t._t("reveal-actions",null,{slot:"reveal-actions"}),t._t("default"),t._t("actions",null,{slot:"actions"})],2)},r=[],i=(a("caad"),{name:"MaterialChartCard",inheritAttrs:!1,props:{data:{type:Object,default:function(){return{}}},eventHandlers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:function(){return[]}},type:{type:String,required:!0,validator:function(t){return["Bar","Line","Pie"].includes(t)}}}}),o=i,c=(a("e56a"),a("2877")),s=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=s.exports},9743:function(t,e,a){"use strict";a("3fd1")},a46f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-material-card",t._g(t._b({staticClass:"v-card--material-stats",attrs:{icon:t.icon},scopedSlots:t._u([{key:"after-heading",fn:function(){return[a("div",{staticClass:"ml-auto text-right"},[a("div",{staticClass:"body-3 grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),a("h3",{staticClass:"display-2 font-weight-light text--primary"},[t._v(" "+t._s(t.value)+" "),a("small",[t._v(t._s(t.smallValue))])])])]},proxy:!0}])},"base-material-card",t.$attrs,!1),t.$listeners),[a("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[a("v-divider")],1),a("v-icon",{staticClass:"ml-2 mr-1",attrs:{color:t.subIconColor,size:"16"}},[t._v(" "+t._s(t.subIcon)+" ")]),a("span",{staticClass:"caption grey--text font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)},r=[],i=a("5530"),o=a("c034"),c={name:"MaterialStatsCard",inheritAttrs:!1,props:Object(i["a"])(Object(i["a"])({},o["default"].props),{},{icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}})},s=c,l=(a("ecdb"),a("2877")),u=a("6544"),d=a.n(u),f=a("62ad"),m=a("ce7e"),h=a("132d"),p=Object(l["a"])(s,n,r,!1,null,null,null);e["default"]=p.exports;d()(p,{VCol:f["a"],VDivider:m["a"],VIcon:h["a"]})},afbc:function(t,e,a){"use strict";a("c5ef")},b22c:function(t,e,a){"use strict";a("6904")},c034:function(t,e,a){"use strict";a.r(e);var n,r,i=a("b0af"),o={name:"Card",extends:i["a"]},c=o,s=a("2877"),l=Object(s["a"])(c,n,r,!1,null,null,null);e["default"]=l.exports},c5ef:function(t,e,a){},cc0b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",t._b({staticClass:"v-snackbar--material",model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},"v-snackbar",Object.assign({},t.$attrs,{color:"transparent"}),!1),[a("base-material-alert",{staticClass:"ma-0",attrs:{color:t.$attrs.color,dismissible:t.dismissible,type:t.type,dark:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},[t._t("default")],2)],1)},r=[],i={name:"BaseMaterialSnackbar",props:{dismissible:{type:Boolean,default:!0},type:{type:String,default:""},value:Boolean},data:function(){return{internalValue:this.value}},watch:{internalValue:function(t,e){t!==e&&this.$emit("input",t)},value:function(t,e){t!==e&&(this.internalValue=t)}}},o=i,c=(a("5ac2"),a("2877")),s=a("6544"),l=a.n(s),u=a("2db4"),d=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=d.exports;l()(d,{VSnackbar:u["a"]})},e1fc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-item-group",{attrs:{item:t.item,text:"","sub-group":""}})},r=[],i={name:"ItemSubGroup",props:{item:{type:Object,default:function(){return{avatar:void 0,group:void 0,title:void 0,children:[]}}}}},o=i,c=a("2877"),s=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=s.exports},e3bb:function(t,e,a){"use strict";a("6661")},e500:function(t,e,a){},e51e:function(t,e,a){var n={"./Card.vue":"c034","./Item.vue":"3728","./ItemGroup.vue":"e9c3","./ItemSubGroup.vue":"e1fc","./MaterialAlert.vue":"27b8","./MaterialCard.vue":"e6f8","./MaterialChartCard.vue":"8df3","./MaterialSnackbar.vue":"cc0b","./MaterialStatsCard.vue":"a46f","./MaterialTabs.vue":"407e","./MaterialTestimony.vue":"55a9","./Subheading.vue":"3648","./VComponent.vue":"740d"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="e51e"},e56a:function(t,e,a){"use strict";a("3864")},e6f8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",t._b({staticClass:"v-card--material pa-3",class:t.classes},"v-card",t.$attrs,!1),[a("div",{staticClass:"d-flex grow flex-wrap"},[t.avatar?a("v-avatar",{staticClass:"mx-auto v-card--material__avatar elevation-6",attrs:{size:"128",color:"grey"}},[a("v-img",{attrs:{src:t.avatar}})],1):a("v-sheet",{staticClass:"text-start v-card--material__heading mb-n6",class:{"pa-7":!t.$slots.image},attrs:{color:t.color,"max-height":t.icon?90:void 0,width:t.icon?"auto":"100%",elevation:"6",dark:""}},[t.$slots.heading?t._t("heading"):t.$slots.image?t._t("image"):t.title&&!t.icon?a("div",{staticClass:"display-1 font-weight-light",domProps:{textContent:t._s(t.title)}}):t.icon?a("v-icon",{attrs:{size:"32"},domProps:{textContent:t._s(t.icon)}}):t._e(),t.text?a("div",{staticClass:"headline font-weight-thin",domProps:{textContent:t._s(t.text)}}):t._e()],2),t.$slots["after-heading"]?a("div",{staticClass:"ml-6"},[t._t("after-heading")],2):t.icon&&t.title?a("div",{staticClass:"ml-4"},[a("div",{staticClass:"card-title font-weight-light",domProps:{textContent:t._s(t.title)}})]):t._e()],1),t._t("default"),t.$slots.actions?[a("v-divider",{staticClass:"mt-2"}),a("v-card-actions",{staticClass:"pb-0"},[t._t("actions")],2)]:t._e()],2)},r=[],i={name:"MaterialCard",props:{avatar:{type:String,default:""},color:{type:String,default:"#1c629e"},icon:{type:String,default:void 0},image:{type:Boolean,default:!1},text:{type:String,default:""},title:{type:String,default:""}},computed:{classes:function(){return{"v-card--material--has-heading":this.hasHeading}},hasHeading:function(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading:function(){return Boolean(this.$slots.heading||this.title&&this.icon)}}},o=i,c=(a("e3bb"),a("2877")),s=a("6544"),l=a.n(s),u=a("8212"),d=a("b0af"),f=a("99d9"),m=a("ce7e"),h=a("132d"),p=a("adda"),b=a("8dd9"),v=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=v.exports;l()(v,{VAvatar:u["a"],VCard:d["a"],VCardActions:f["a"],VDivider:m["a"],VIcon:h["a"],VImg:p["a"],VSheet:b["a"]})},e9c3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-group",{attrs:{group:t.group,"prepend-icon":t.item.icon,"sub-group":t.subGroup,"append-icon":"mdi-menu-down",color:"rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7)"!==t.barColor?"white":"grey darken-1"},scopedSlots:t._u([{key:"activator",fn:function(){return[t.text?a("v-list-item-icon",{staticClass:"v-list-item__icon--text",domProps:{textContent:t._s(t.computedText)}}):t.item.avatar?a("v-list-item-avatar",{staticClass:"align-self-center",attrs:{color:"white",contain:""}},[a("v-img",{attrs:{src:"https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"}})],1):t._e(),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.item.title)}})],1)]},proxy:!0}])},t._l(t.children,(function(e,n){return a("ul",{key:e},["Categorias"==e.title&&(t.esAlmacenero||t.esAdministrador)?a("div",[e.children?a("base-item-sub-group",{key:"sub-group-"+n,attrs:{item:e}}):a("base-item",{key:"item-"+n,attrs:{item:e,text:""}})],1):t._e(),"Categorias"!=e.title?a("div",[e.children?a("base-item-sub-group",{key:"sub-group-"+n,attrs:{item:e}}):a("base-item",{key:"item-"+n,attrs:{item:e,text:""}})],1):t._e()])})),0)},r=[],i=(a("99af"),a("4de4"),a("4160"),a("a15b"),a("d81d"),a("ac1f"),a("1276"),a("159b"),a("5530")),o=a("375a"),c=a.n(o),s=a("2f62"),l={name:"ItemGroup",inheritAttrs:!1,props:{item:{type:Object,default:function(){return{avatar:void 0,group:void 0,title:void 0,children:[]}}},subGroup:{type:Boolean,default:!1},text:{type:Boolean,default:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(s["c"])(["barColor"])),{},{children:function(){var t=this;return this.item.children.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{to:e.to?"".concat(t.item.group,"/").concat(e.to):void 0})}))},computedText:function(){if(!this.item||!this.item.title)return"";var t="";return this.item.title.split(" ").forEach((function(e){t+=e.substring(0,1)})),t},group:function(){return this.genGroup(this.item.children)},esAdministrador:function(){return this.$store.state.usuario&&"Administrador"==this.$store.state.usuario.rol},esAlmacenero:function(){return this.$store.state.usuario&&"Jefe de Almacén"==this.$store.state.usuario.rol},esFarmaceutica:function(){return this.$store.state.usuario&&"Farmaceútica"==this.$store.state.usuario.rol}}),methods:{genGroup:function(t){var e=this;return t.filter((function(t){return t.to})).map((function(t){var a=t.group||e.item.group,n="".concat(a,"/").concat(c()(t.to));return t.children&&(n="".concat(n,"|").concat(e.genGroup(t.children))),n})).join("|")}}},u=l,d=(a("afbc"),a("2877")),f=a("6544"),m=a.n(f),h=a("adda"),p=a("56b0"),b=a("8270"),v=a("5d23"),g=a("34c3"),k=Object(d["a"])(u,n,r,!1,null,null,null);e["default"]=k.exports;m()(k,{VImg:h["a"],VListGroup:p["a"],VListItemAvatar:b["a"],VListItemContent:v["a"],VListItemIcon:g["a"],VListItemTitle:v["c"]})},ecdb:function(t,e,a){"use strict";a("f94b")},edd4:function(t){t.exports=JSON.parse('{"buttons":"Buttons","calendar":"Calendar","charts":"Charts","components":"Components","ct":"CT","dashboard":"Dashboard","dtables":"Data Tables","eforms":"Extended Forms","error":"Error Page","etables":"Extended Tables","example":"Example","forms":"Forms","fullscreen":"Full Screen Map","google":"Google Maps","grid":"Grid System","icons":"Icons","lock":"Lock Screen Page","login":"Login Page","maps":"Maps","multi":"Multi Level Collapse","notifications":"Notifications","pages":"Pages","plan":"Choose Plan","pricing":"Pricing","my-profile":"My Profile","edit-profile":"Edit Profile","register":"Register Page","rforms":"Regular Forms","rtables":"Regular Tables","rtl":"RTL Support","search":"Search","settings":"Settings","tables":"Tables","tabs":"Tabs","tim":"Creative Tim","timeline":"Timeline","typography":"Typography","user":"User Profile","vforms":"Validation Forms","widgets":"Widgets","wizard":"Wizard"}')},f94b:function(t,e,a){}});