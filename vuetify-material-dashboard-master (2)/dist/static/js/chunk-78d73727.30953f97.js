(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78d73727"],{"3c93":function(e,t,o){},e707:function(e,t,o){"use strict";o("3c93");var s=o("a9ad"),r=o("7560"),i=o("f2e7"),l=o("58df"),a=Object(l["a"])(s["a"],r["a"],i["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),n=a,h=o("80d2"),c=o("2b0e");t["a"]=c["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const e=new n({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();const t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(h["t"])(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(e=!0){this.overlay&&(Object(h["a"])(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;const t=[h["w"].up,h["w"].pageup],o=[h["w"].down,h["w"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!o.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath(e){const t=e.path||this.composedPath(e),o=e.deltaY;if("keydown"===e.type&&t[0]===document.body){const e=this.$refs.dialog,t=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(t,e))||this.shouldScroll(e,o)}for(let s=0;s<t.length;s++){const e=t[s];if(e===document)return!0;if(e===document.documentElement)return!0;if(e===this.$refs.content)return!0;if(this.hasScrollbar(e))return this.shouldScroll(e,o)}return!0},composedPath(e){if(e.composedPath)return e.composedPath();const t=[];let o=e.target;while(o){if(t.push(o),"HTML"===o.tagName)return t.push(document),t.push(window),t;o=o.parentElement}return t},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(h["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})}}]);