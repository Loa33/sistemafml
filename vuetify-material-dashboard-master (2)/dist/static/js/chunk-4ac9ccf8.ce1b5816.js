(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ac9ccf8"],{"0e8f":function(t,e,i){"use strict";i("20f6");var a=i("e8f2");e["a"]=Object(a["a"])("flex")},"169a":function(t,e,i){"use strict";i("368e");var a=i("480e"),s=i("4ad4"),n=i("b848"),o=i("75eb"),r=i("e707"),l=i("e4d3"),d=i("21be"),c=i("f2e7"),u=i("a293"),h=i("58df"),v=i("d9bd"),m=i("80d2");const f=Object(h["a"])(s["a"],n["a"],o["a"],r["a"],l["a"],d["a"],c["a"]);e["a"]=f.extend({name:"v-dialog",directives:{ClickOutside:u["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(v["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):r["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(a["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(m["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"2fa4":function(t,e,i){"use strict";i("20f6");var a=i("80d2");e["a"]=Object(a["h"])("spacer","div","v-spacer")},"368e":function(t,e,i){},"4bd4":function(t,e,i){"use strict";var a=i("58df"),s=i("7e2b"),n=i("3206");e["a"]=Object(a["a"])(s["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"610c":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"usuario",fluid:"",tag:"section"}},[i("base-v-component",{attrs:{heading:"Usuarios",link:"acceso/usuarios"}}),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("base-material-card",{attrs:{color:"#1c629e"},scopedSlots:t._u([{key:"heading",fn:function(){return[i("div",{staticClass:"display-2 font-weight-light"},[t._v("Usuarios")]),i("div",{staticClass:"subtitle-1 font-weight-light"})]},proxy:!0}])},[i("v-row",[i("v-col",[i("v-text-field",{staticClass:"text-xs-center",attrs:{"append-icon":"mdi-magnify",label:"Búsqueda","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),i("v-col",[i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},on:{click:function(e){t.dialog=!0}},slot:"activator"},[t._v("Nuevo")]),i("v-card",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valida,callback:function(e){t.valida=e},expression:"valida"}},[i("v-card-title",[i("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),i("v-card-text",[i("v-container",{attrs:{"grid-list-md":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"Nombre",rules:t.requieredRules},model:{value:t.nombre,callback:function(e){t.nombre=e},expression:"nombre"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-select",{attrs:{items:t.roles,label:"Rol",rules:t.requieredRules},model:{value:t.idRol,callback:function(e){t.idRol=e},expression:"idRol"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"DNI",rules:t.dniRules},model:{value:t.dni,callback:function(e){t.dni=e},expression:"dni"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{label:"Email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[i("v-text-field",{attrs:{type:"password",label:"Password",rules:t.requieredRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Cancelar")]),i("v-btn",{attrs:{color:"blue darken-1",disabled:!t.valida,flat:""},nativeOn:{click:function(e){return t.guardar(e)}}},[t._v("Guardar")])],1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"290"},model:{value:t.adModal,callback:function(e){t.adModal=e},expression:"adModal"}},[i("v-card",[1==t.adAccion?i("v-card-title",{staticClass:"headline"},[t._v("¿Activar Item?")]):t._e(),2==t.adAccion?i("v-card-title",{staticClass:"headline"},[t._v("¿Desactivar Item?")]):t._e(),i("v-card-text",[t._v(" Estás a punto de "),1==t.adAccion?i("span",[t._v("Activar ")]):t._e(),2==t.adAccion?i("span",[t._v("Desactivar ")]):t._e(),t._v(" el ítem "+t._s(t.adNombre)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:t.activarDesactivarCerrar}},[t._v(" Cancelar ")]),1==t.adAccion?i("v-btn",{attrs:{color:"orange darken-4",flat:"flat"},on:{click:t.activar}},[t._v(" Activar ")]):t._e(),2==t.adAccion?i("v-btn",{attrs:{color:"orange darken-4",flat:"flat"},on:{click:t.desactivar}},[t._v(" Desactivar ")]):t._e()],1)],1)],1)],1)],1),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.usuarios,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[i("td",[t._v(t._s(e.item.nombre))]),i("td",[t._v(t._s(e.item.rol))]),i("td",[t._v(t._s(e.item.dni))]),i("td",[t._v(t._s(e.item.email))])]}},{key:"item.estado",fn:function(e){var a=e.item;return[i("td",[1==a.estado?i("div",[i("span",{staticClass:"blue--text"},[t._v("Activo")])]):i("div",[i("span",{staticClass:"red--text"},[t._v("Inactivo")])])])]}},{key:"item.opciones",fn:function(e){var a=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"teal"},on:{click:function(e){return t.editItem(a)}}},[t._v(" mdi-pencil ")]),1==a.estado?[i("v-icon",{attrs:{color:"red",small:""},on:{click:function(e){return t.activarDesactivarMostrar(2,a)}}},[t._v(" mdi-toggle-switch ")])]:[i("v-icon",{attrs:{small:"",color:"blue"},on:{click:function(e){return t.activarDesactivarMostrar(1,a)}}},[t._v(" mdi-toggle-switch-off ")])]]}}],null,!0)},[i("template",{slot:"no-data"})],2)],1)],1)],1)],1)},s=[],n=(i("d81d"),i("bc3a")),o=i.n(n),r={data:function(){return{usuarios:[],usuariosValidar:[],dialog:!1,headers:[{text:"Nombre",value:"nombre"},{text:"Rol",value:"rol"},{text:"DNI",value:"dni",sortable:!1},{text:"Email",value:"email",sortable:!1},{text:"Estado",value:"estado",sortable:!1},{text:"Opciones",value:"opciones",sortable:!1}],search:"",editedIndex:-1,id:"",idRol:"",roles:[],nombre:"",dni:"",email:"",password:"",actPassword:!1,passwordAnt:"",valida:!0,validaMensaje:[],adModal:0,adAccion:0,adNombre:"",adId:"",requieredRules:[function(t){return!!t||"Debe llenar este campo"}],dniRules:[function(t){return!!t||"Debe llenar este campo"},function(t){return/^[0-9]{8}$/.test(t)||"Debe ingresar un DNI válido"}],telefonoRules:[function(t){return!!t||"Debe llenar este campo"},function(t){return/^(?=.*[0-9])[- +()0-9]+$/.test(t)||"Debe ingresar un teléfono válido"}],emailRules:[function(t){return!!t||"Debe llenar este campo"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"Debe ingresar un email válido"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo usuario":"Actualizar usuario"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.listar(),this.select()},methods:{listar:function(){var t=this,e={Authorization:"Bearer "+this.$store.state.token},i={headers:e};o.a.get("api/Usuarios/Listar",i).then((function(e){t.usuarios=e.data,t.usuariosValidar=e.data})).catch((function(t){console.log(t)}))},select:function(){var t=this,e={Authorization:"Bearer "+this.$store.state.token},i={headers:e},a=[];o.a.get("api/Roles/Select",i).then((function(e){a=e.data,a.map((function(e){t.roles.push({text:e.nombre,value:e.idRol})}))})).catch((function(t){console.log(t)}))},editItem:function(t){this.id=t.idUsuario,this.idRol=t.idRol,this.nombre=t.nombre,this.dni=t.dni,this.email=t.email,this.password=t.passwordHash,this.passwordAnt=t.passwordHash,this.editedIndex=1,this.dialog=!0},close:function(){this.dialog=!1,this.limpiar()},limpiar:function(){this.id="",this.$refs.form.reset(),this.idRol="",this.nombre="",this.dni="",this.email="",this.password="",this.passwordAnt="",this.actPassword=!1,this.editedIndex=-1},guardar:function(){if(this.encuentra(this.dni))this.$swal("El usuario ya existe");else if(this.$refs.form.validate()){var t={Authorization:"Bearer "+this.$store.state.token},e={headers:t};if(this.editedIndex>-1){var i=this;i.password!=i.passwordAnt&&(i.actPassword=!0),o.a.put("api/Usuarios/Actualizar",{idUsuario:i.id,idRol:i.idRol,nombre:i.nombre,dni:i.dni,email:i.email,password:i.password,actPassword:i.actPassword},e).then((function(t){i.close(),i.listar(),i.limpiar()})).catch((function(t){console.log(t)}))}else{var a=this;o.a.post("api/Usuarios/Crear",{idRol:a.idRol,nombre:a.nombre,dni:a.dni,email:a.email,password:a.password},e).then((function(t){a.close(),a.listar(),a.limpiar()})).catch((function(t){console.log(t)}))}}},encuentra:function(t){for(var e=0,i=0;i<this.usuariosValidar.length;i++)this.usuariosValidar[i].dni==t&&(e=1);return e},validar:function(){return this.valida=0,this.validaMensaje=[],this.idRol||this.validaMensaje.push("Seleccione un rol."),this.dni||this.validaMensaje.push("Seleccione un tipo documento."),this.email||this.validaMensaje.push("Ingrese el email del usuario."),this.password||this.validaMensaje.push("Ingrese el password del usuario."),this.validaMensaje.length&&(this.valida=1),this.valida},activarDesactivarMostrar:function(t,e){this.adModal=1,this.adNombre=e.nombre,this.adId=e.idUsuario,1==t?this.adAccion=1:2==t?this.adAccion=2:this.adModal=0},activarDesactivarCerrar:function(){this.adModal=0},activar:function(){var t=this,e={Authorization:"Bearer "+this.$store.state.token},i={headers:e};o.a.put("api/Usuarios/Activar/"+this.adId,{},i).then((function(e){t.adModal=0,t.adAccion=0,t.adNombre="",t.adId="",t.listar()})).catch((function(t){console.log(t)}))},desactivar:function(){var t=this,e={Authorization:"Bearer "+this.$store.state.token},i={headers:e};o.a.put("api/Usuarios/Desactivar/"+this.adId,{},i).then((function(e){t.adModal=0,t.adAccion=0,t.adNombre="",t.adId="",t.listar()})).catch((function(t){console.log(t)}))}}},l=r,d=i("2877"),c=i("6544"),u=i.n(c),h=i("8336"),v=i("b0af"),m=i("99d9"),f=i("62ad"),p=i("a523"),b=i("8fea"),g=i("169a"),w=i("0e8f"),x=i("4bd4"),_=i("132d"),k=i("a722"),A=i("0fd9"),y=i("b974"),C=i("2fa4"),$=i("8654"),I=Object(d["a"])(l,a,s,!1,null,null,null);e["default"]=I.exports;u()(I,{VBtn:h["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:f["a"],VContainer:p["a"],VDataTable:b["a"],VDialog:g["a"],VFlex:w["a"],VForm:x["a"],VIcon:_["a"],VLayout:k["a"],VRow:A["a"],VSelect:y["a"],VSpacer:C["a"],VTextField:$["a"]})},a722:function(t,e,i){"use strict";i("20f6");var a=i("e8f2");e["a"]=Object(a["a"])("layout")}}]);