(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{196:function(t,e,n){var content=n(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("1b7833da",content,!0,{sourceMap:!1})},198:function(t,e,n){"use strict";n(196)},199:function(t,e,n){var o=n(78)(!1);o.push([t.i,":root{--button-color:#1e90ff}header{max-width:500px;position:absolute;left:var(--body-padding);top:var(--body-padding);z-index:900}.sundae_wrapper{flex-flow:row wrap;height:calc(100vh - var(--body-padding)*2);align-items:center}.sundae,.sundae_wrapper{display:flex;justify-content:center}.sundae{height:80vh;width:100%;flex-flow:column;flex:0 0 auto;width:26.66667vh}.sundae>*{width:100%;height:26.66667vh}.sundae .default{border:1px solid #ddd}.bottom:after,.middle:after,.top:after{content:attr(data-name)!important;font-size:.75rem;background-color:#333;color:#fff;padding:.125rem .25rem;margin-left:-10%;margin-top:20%;position:relative;opacity:1;transition:opacity .2s}.sundae:hover .bottom:after,.sundae:hover .middle:after,.sundae:hover .top:after{opacity:1}.buttons{display:grid;grid-gap:.5rem;gap:.5rem;grid-template-columns:1fr 1fr 1fr}@media screen and (min-width:720px){.buttons{max-width:200px;grid-template-columns:1fr}}button,select{font-size:1rem;border:2px solid #1e90ff;border:2px solid var(--button-color,#0f0);color:#1e90ff;color:var(--button-color,#0f0);font-weight:700;padding:.325em;background:none;background-color:none;cursor:pointer}select{padding-right:1rem}button:hover{-webkit-animation:shake .3s ease 0s 1;animation:shake .3s ease 0s 1}button:focus,select:focus{outline:none}@-webkit-keyframes shake{0%{transform:translateX(5px) rotate(3deg) scale(1)}20%{transform:translateX(-5px) rotate(-3deg)}40%{transform:translateX(3px) rotate(2deg) scale(1.1)}60%{transform:translateX(-3px) translateY(2px) rotate(-2deg)}80%{transform:translateX(2px) translateY(-1px) rotate(1deg) scale(1)}}@keyframes shake{0%{transform:translateX(5px) rotate(3deg) scale(1)}20%{transform:translateX(-5px) rotate(-3deg)}40%{transform:translateX(3px) rotate(2deg) scale(1.1)}60%{transform:translateX(-3px) translateY(2px) rotate(-2deg)}80%{transform:translateX(2px) translateY(-1px) rotate(1deg) scale(1)}}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}.info_button{position:fixed;top:var(--body-padding);right:var(--body-padding);font-weight:700;font-size:1.5rem;cursor:pointer}.info_button:hover{color:#1e90ff}.modal_bg{position:fixed;background-color:rgba(0,0,0,.7);top:0;left:0;right:0;bottom:0;z-index:999}.anleitung_modal{position:fixed;width:80vw;height:80vh;top:10%;background-color:#f8f8ff;z-index:1000;padding:2rem;box-shadow:0 10px 30px rgba(0,0,0,.3)}ol li{margin-bottom:2rem}",""]),t.exports=o},202:function(t,e,n){"use strict";n.r(e);n(54);var o=["annalisa_rompietti","cyril_truninger","elias_baumann","franziska_kleinsorg","gina_burri","hani","julia_kagerbauer","konstantin_zygas","laura_hueppi","lukas_hefti","nick_niles","nicole_voegeli","oliver_ludwig","sina_heim","sina_staehli","sira_trinkler","surya_schmid"],r=["annalisa","cyril","elias","franziska","gina","hani","julia","konstantin","laura","lukas","nick","nicole","oliver","sina_h","sina_s","sira","surya"],l={data:function(){return{studentList:o,classList:r,class1:"default",class2:"default",class3:"default",isVisible:!0,infoMode:!1}},head:function(){var t=[];return o.forEach((function(e){console.log("test head",e);var n={rel:"stylesheet",href:"/".concat(e,"/css/sundae.css")};t.push(n)})),console.log("studentLinkTags",t),{link:t}},methods:{toggleInfo:function(){this.infoMode=!this.infoMode},handleShuffle:function(){var t=this;this.isVisible=!1,this.$nextTick((function(){t.class1=t.classList[Math.floor(Math.random()*t.classList.length)],t.class2=t.classList[Math.floor(Math.random()*t.classList.length)],t.class3=t.classList[Math.floor(Math.random()*t.classList.length)],setInterval((function(){t.isVisible=!0}),100)}))},handleShuffleOne:function(){var t=this;this.isVisible=!1;var e=this.classList[Math.floor(Math.random()*this.classList.length)];this.$nextTick((function(){t.class1=e,t.class2=e,t.class3=e,setInterval((function(){t.isVisible=!0}),100)}))},handleSelectOne:function(t){var e=this;console.log("val",t),this.isVisible=!1,this.$nextTick((function(){e.class1=t,e.class2=t,e.class3=t,setInterval((function(){e.isVisible=!0}),100)}))}}},c=(n(198),n(41)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sundae_wrapper",class:{isFixed:t.infoMode}},[n("header",[n("h1",{staticStyle:{marginBottom:"0"}},[t._v("Sundae")]),n("p",[t._v("IDA Digital Design 2021")]),n("div",{staticClass:"buttons"},[n("select",{on:{change:function(e){return t.handleSelectOne(e.target.value)}}},[n("option",{attrs:{value:"default"}},[t._v("choose student")]),t._l(t.classList,(function(e){return n("option",[t._v(t._s(e))])}))],2),n("button",{on:{click:t.handleShuffleOne}},[t._v("random student")]),n("button",{on:{click:t.handleShuffle}},[t._v("shuffle all")])])]),n("div",{staticClass:"sundae"},[n("transition",{attrs:{name:"fade"}},[t.isVisible?n("div",{staticClass:"top",class:t.class1,attrs:{"data-name":t.class1}}):t._e()]),n("transition",{attrs:{name:"fade"}},[t.isVisible?n("div",{staticClass:"middle",class:t.class2,attrs:{"data-name":t.class2}}):t._e()]),n("transition",{attrs:{name:"fade"}},[t.isVisible?n("div",{staticClass:"bottom",class:t.class3,attrs:{"data-name":t.class3}}):t._e()])],1),n("div",{staticClass:"info_button",on:{click:t.toggleInfo}},[t._v("ⓘ")]),t.infoMode?n("div",{staticClass:"modal_bg",on:{click:function(e){t.infoMode=!1}}}):t._e(),t.infoMode?n("div",{staticClass:"anleitung_modal"},[n("h3",[t._v("Instructions")]),n("br"),t._m(0)]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("Create a document "),n("code",[n("mark",[t._v("sundae.css")])]),t._v(" inside your main "),n("mark",[t._v("css")]),t._v(" folder."),n("br"),n("span",[t._v("For example: "),n("code",[n("mark",[t._v("nick_niles/css/sundae.css")])])])]),n("li",[t._v("Your class should be your "),n("strong",[t._v("first name")]),t._v(" in lowercase (except for sina_h and sina_s) "),n("br"),n("span",[t._v('So target the 3 elements like this (replace "nick" with your name): ')]),n("br"),n("span",[n("code",[n("mark",[t._v(".top.nick { ... }")])])]),n("br"),n("span",[n("code",[n("mark",[t._v(".middle.nick { ... }")])])]),n("br"),n("span",[n("code",[n("mark",[t._v(".bottom.nick { ... }")])])])]),n("li",[t._v("Upload your sundae.css file to the css directory on "),n("mark",[t._v("GitHub")]),t._v("!")])])}],!1,null,null,null);e.default=component.exports}}]);