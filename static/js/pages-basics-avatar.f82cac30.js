(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basics-avatar"],{"3fad":function(t,a,i){"use strict";i.r(a);var s=i("682e"),e=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(a,t,(function(){return s[t]}))}(n);a["default"]=e.a},"682e":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{ColorList:this.ColorList,avatar:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg"]}}};a.default=s},7270:function(t,a,i){"use strict";var s;i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return s}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("头像")])],2),i("v-uni-view",{staticClass:"cu-bar bg-white"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("头像形状")],1)],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),i("v-uni-view",{staticClass:"cu-avatar radius margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"}})],1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("头像尺寸")],1)],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar sm round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),i("v-uni-view",{staticClass:"cu-avatar round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"}}),i("v-uni-view",{staticClass:"cu-avatar lg round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg)"}}),i("v-uni-view",{staticClass:"cu-avatar xl round margin-left",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg)"}})],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar sm round margin-left bg-red"},[t._v("A")]),i("v-uni-view",{staticClass:"cu-avatar round margin-left bg-red"},[t._v("B")]),i("v-uni-view",{staticClass:"cu-avatar lg round margin-left bg-red"},[t._v("C")]),i("v-uni-view",{staticClass:"cu-avatar xl round margin-left bg-red"},[t._v("D")])],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar sm round margin-left bg-red"},[t._v("蔚")]),i("v-uni-view",{staticClass:"cu-avatar round margin-left bg-red"},[t._v("蓝")]),i("v-uni-view",{staticClass:"cu-avatar lg round margin-left bg-red"},[i("v-uni-text",[t._v("wl")])],1),i("v-uni-view",{staticClass:"cu-avatar xl round margin-left bg-red"},[i("v-uni-text",{staticClass:"avatar-text"},[t._v("网络")])],1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("内嵌文字(图标)")],1)],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar radius"},[i("v-uni-text",{staticClass:"cuIcon-people"})],1),i("v-uni-view",{staticClass:"cu-avatar radius margin-left"},[i("v-uni-text",[t._v("港")])],1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("头像颜色")],1)],1),i("v-uni-view",{staticClass:"padding-sm"},t._l(t.ColorList,(function(a,s){return i("v-uni-view",{key:s,staticClass:"cu-avatar round lg margin-xs",class:"bg-"+a.name},[i("v-uni-text",{staticClass:"avatar-text"},[t._v(t._s(a.name))])],1)})),1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("头像组")],1)],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar-group"},t._l(t.avatar,(function(a,s){return i("v-uni-view",{key:s,staticClass:"cu-avatar round lg",style:[{backgroundImage:"url("+t.avatar[s]+")"}]})})),1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("头像标签")],1)],1),i("v-uni-view",{staticClass:"padding"},t._l(t.avatar,(function(a,s){return i("v-uni-view",{key:s,staticClass:"cu-avatar round lg margin-left",style:[{backgroundImage:"url("+t.avatar[s]+")"}]},[i("v-uni-view",{staticClass:"cu-tag badge",class:s%2==0?"cuIcon-female bg-pink":"cuIcon-male bg-blue"})],1)})),1)],1)},n=[]},e298:function(t,a,i){"use strict";i.r(a);var s=i("7270"),e=i("3fad");for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);var u,c=i("f0c5"),l=Object(c["a"])(e["default"],s["b"],s["c"],!1,null,"0761b884",null,!1,s["a"],u);a["default"]=l.exports}}]);