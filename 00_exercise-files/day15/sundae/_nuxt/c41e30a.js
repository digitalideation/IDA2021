(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{196:function(t,e,n){var content=n(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("1b7833da",content,!0,{sourceMap:!1})},198:function(t,e,n){"use strict";n(196)},199:function(t,e,n){var r=n(78)(!1);r.push([t.i,":root{--button-color:#1e90ff}header{max-width:500px;position:absolute;left:var(--body-padding);top:var(--body-padding);z-index:900}.sundae_wrapper{flex-flow:row wrap;height:calc(100vh - var(--body-padding)*2);align-items:center}.sundae,.sundae_wrapper{display:flex;justify-content:center}.sundae{height:80vh;width:100%;flex-flow:column;flex:0 0 auto;width:26.66667vh}.sundae>*{width:100%;height:26.66667vh}.sundae .default{border:1px solid #ddd}.bottom:after,.middle:after,.top:after{content:attr(data-name)!important;font-size:.75rem;background-color:#333;color:#fff;padding:.125rem .25rem;margin-left:-10%;margin-top:20%;position:relative;opacity:1;transition:opacity .2s}.sundae:hover .bottom:after,.sundae:hover .middle:after,.sundae:hover .top:after{opacity:1}.buttons{display:grid;grid-gap:.5rem;gap:.5rem;grid-template-columns:1fr 1fr 1fr}@media screen and (min-width:720px){.buttons{max-width:200px;grid-template-columns:1fr}}button,select{font-size:1rem;border:2px solid #1e90ff;border:2px solid var(--button-color,#0f0);color:#1e90ff;color:var(--button-color,#0f0);font-weight:700;padding:.325em;background:none;background-color:none;cursor:pointer}select{padding-right:1rem}button:hover{-webkit-animation:shake .3s ease 0s 1;animation:shake .3s ease 0s 1}button:focus,select:focus{outline:none}@-webkit-keyframes shake{0%{transform:translateX(5px) rotate(3deg) scale(1)}20%{transform:translateX(-5px) rotate(-3deg)}40%{transform:translateX(3px) rotate(2deg) scale(1.1)}60%{transform:translateX(-3px) translateY(2px) rotate(-2deg)}80%{transform:translateX(2px) translateY(-1px) rotate(1deg) scale(1)}}@keyframes shake{0%{transform:translateX(5px) rotate(3deg) scale(1)}20%{transform:translateX(-5px) rotate(-3deg)}40%{transform:translateX(3px) rotate(2deg) scale(1.1)}60%{transform:translateX(-3px) translateY(2px) rotate(-2deg)}80%{transform:translateX(2px) translateY(-1px) rotate(1deg) scale(1)}}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}",""]),t.exports=r},202:function(t,e,n){"use strict";n.r(e);n(54);var r=["annalisa_rompietti","cyril_truninger","elias_baumann","franziska_kleinsorg","gina_burri","hani","julia_kagerbauer","konstantin_zygas","laura_hueppi","lukas_hefti","nick_niles","nicole_voegeli","oliver_ludwig","sina_heim","sina_staehli","sira_trinkler","surya_schmid"],l=["annalisa","cyril","elias","franziska","gina","hani","julia","konstantin","laura","lukas","nick","nicole","oliver","sina_h","sina_s","sira","surya"],o={data:function(){return{studentList:r,classList:l,class1:"default",class2:"default",class3:"default",isVisible:!0}},head:function(){var t=[];return r.forEach((function(e){console.log("test head",e);var n={rel:"stylesheet",href:"/".concat(e,"/css/sundae.css")};t.push(n)})),console.log("studentLinkTags",t),{link:t}},methods:{handleShuffle:function(){var t=this;this.isVisible=!1,this.$nextTick((function(){t.class1=t.classList[Math.floor(Math.random()*t.classList.length)],t.class2=t.classList[Math.floor(Math.random()*t.classList.length)],t.class3=t.classList[Math.floor(Math.random()*t.classList.length)],setInterval((function(){t.isVisible=!0}),100)}))},handleShuffleOne:function(){var t=this;this.isVisible=!1;var e=this.classList[Math.floor(Math.random()*this.classList.length)];this.$nextTick((function(){t.class1=e,t.class2=e,t.class3=e,setInterval((function(){t.isVisible=!0}),100)}))},handleSelectOne:function(t){var e=this;console.log("val",t),this.isVisible=!1,this.$nextTick((function(){e.class1=t,e.class2=t,e.class3=t,setInterval((function(){e.isVisible=!0}),100)}))}}},c=(n(198),n(41)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sundae_wrapper"},[n("header",[n("h1",{staticStyle:{marginBottom:"0"}},[t._v("Sundae")]),n("p",[t._v("IDA Digital Design 2021")]),n("div",{staticClass:"buttons"},[n("select",{on:{change:function(e){return t.handleSelectOne(e.target.value)}}},[n("option",{attrs:{value:"default"}},[t._v("choose student")]),t._l(t.classList,(function(e){return n("option",[t._v(t._s(e))])}))],2),n("button",{on:{click:t.handleShuffleOne}},[t._v("random student")]),n("button",{on:{click:t.handleShuffle}},[t._v("shuffle all")])])]),n("div",{staticClass:"sundae"},[n("transition",{attrs:{name:"fade"}},[t.isVisible?n("div",{staticClass:"top",class:t.class1,attrs:{"data-name":t.class1}}):t._e()]),n("transition",{attrs:{name:"fade"}},[t.isVisible?n("div",{staticClass:"middle",class:t.class2,attrs:{"data-name":t.class2}}):t._e()]),n("transition",{attrs:{name:"fade"}},[t.isVisible?n("div",{staticClass:"bottom",class:t.class3,attrs:{"data-name":t.class3}}):t._e()])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);