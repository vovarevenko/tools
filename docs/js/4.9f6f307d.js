(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"713b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh lpr fff"}},[a("q-header",{staticClass:"bg-black",attrs:{reveal:""}},[a("q-toolbar",[a("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"fas fa-bars","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[a("router-link",{staticClass:"cursor-pointer",attrs:{tag:"span",to:"/"}},[t._v("\n          "+t._s(t.title)+"\n          "),a("span",{staticClass:"text-caption"},[t._v("v"+t._s(t.version))])])],1)],1)],1),a("q-drawer",{attrs:{width:t.leftDrawerWidth,breakpoint:t.leftDrawerBreakpoint,"show-if-above":t.$q.screen.width>=t.leftDrawerBreakpoint,persistent:t.$q.screen.width>=t.leftDrawerBreakpoint,overlay:""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",{staticClass:"menu-list",attrs:{padding:""}},[a("q-item",{attrs:{to:"/",exact:""}},[a("q-item-section",[t._v("Home")])],1),a("q-separator",{staticClass:"q-my-sm"}),t._l(t.links,(function(e,r){return a("q-item",{key:r,attrs:{to:e.path,active:t.$route.matched.some((function(t){var a=t.path;return a===e.path}))}},[a("q-item-section",[t._v("\n            "+t._s(e.title)+"\n          ")])],1)}))],2)],1)],1),a("q-page-container",[a("div",{staticClass:"container-helper",style:{maxWidth:t.containerHelperMaxWidth+"px"}},[a("router-view")],1)])],1)},n=[],i=a("9224"),o={name:"MainLayout",data:function(){return{title:i["a"],version:i["b"],leftDrawerOpen:!1,leftDrawerWidth:280,containerHelperMaxWidth:800,links:[{title:"Character counter",path:"/counter"},{title:"MD5 generator",path:"/generators/md5"}]}},computed:{leftDrawerBreakpoint:function(){return this.containerHelperMaxWidth+2*this.leftDrawerWidth}},meta:function(){return{title:this.title}}},s=o,l=a("2877"),c=a("eebe"),p=a.n(c),u=a("4d5a"),f=a("e359"),d=a("65c6"),h=a("9c40"),w=a("6ac5"),b=a("9404"),m=a("4983"),v=a("1c1c"),q=a("66e5"),D=a("4074"),k=a("eb85"),Q=a("09e3"),x=Object(l["a"])(s,r,n,!1,null,null,null);e["default"]=x.exports;p()(x,"components",{QLayout:u["a"],QHeader:f["a"],QToolbar:d["a"],QBtn:h["a"],QToolbarTitle:w["a"],QDrawer:b["a"],QScrollArea:m["a"],QList:v["a"],QItem:q["a"],QItemSection:D["a"],QSeparator:k["a"],QPageContainer:Q["a"]})},9224:function(t){t.exports=JSON.parse('{"a":"DevTools","b":"1.0.0"}')}}]);