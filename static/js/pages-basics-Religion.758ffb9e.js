(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basics-Religion"],{"11c1":function(t,a,e){"use strict";var n=e("c404"),r=e.n(n);r.a},"12da":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return u})),e.d(a,"a",(function(){return n}));var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("宗教")])],2),e("v-uni-scroll-view",{staticClass:"bg-white nav text-center fixed",style:[{top:t.CustomBar+"px"}],attrs:{"scroll-x":!0}},t._l(t.tabNav,(function(a,n){return e("v-uni-view",{key:n,staticClass:"cu-item",class:n==t.TabCur?"text-blue cur":"",attrs:{"data-id":n},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(t.tabNav[n]))])})),1),0==t.TabCur?[e("v-uni-view",{staticClass:"book"},t._l(t.conduct,(function(a){return e("v-uni-view",{key:a.conduct,staticClass:"books"},[e("v-uni-navigator",{attrs:{url:a.url}},[t._v(t._s(a.name))])],1)})),1)]:t._e(),1==t.TabCur?[e("v-uni-view",{staticClass:"book"},t._l(t.macroscopic,(function(a){return e("v-uni-view",{key:a.macroscopic,staticClass:"books"},[e("v-uni-navigator",{attrs:{url:a.url}},[t._v(t._s(a.name))])],1)})),1)]:t._e()],2)},u=[]},"3dfe":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".books[data-v-ec5b5a4a]{width:28%;height:%?250?%;margin:%?30?% 2.5%;padding:0 %?20?%;background-color:#faebd7;text-align:center;line-height:%?250?%\n\t/* 文本自动换行 */\n\t /* word-wrap:break-word; */}.book[data-v-ec5b5a4a]{margin-top:%?50?%;display:flex;\n\t/* 元素自动换行 */flex-wrap:wrap\n\t\n\t/* border: 1px solid black; */}.cu-item[data-v-ec5b5a4a]{width:43%;text-align:center}uni-page-body[data-v-ec5b5a4a]{padding-top:%?45?%}",""]),t.exports=a},"9e07":function(t,a,e){"use strict";e.r(a);var n=e("12da"),r=e("d075");for(var u in r)"default"!==u&&function(t){e.d(a,t,(function(){return r[t]}))}(u);e("11c1");var c,i=e("f0c5"),o=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"ec5b5a4a",null,!1,n["a"],c);a["default"]=o.exports},c404:function(t,a,e){var n=e("3dfe");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=e("4f06").default;r("e7b00672",n,!0,{sourceMap:!1,shadowMode:!1})},d075:function(t,a,e){"use strict";e.r(a);var n=e("ef55"),r=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(a,t,(function(){return n[t]}))}(u);a["default"]=r.a},ef55:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{CustomBar:this.CustomBar,TabCur:0,tabNav:["佛","道"],conduct:[{name:"心经",url:""},{name:"金刚经",url:""},{name:"楞严经",url:""},{name:"地藏经",url:""},{name:"法华经",url:""}],macroscopic:[{name:"德道经",url:""},{name:"",url:""},{name:"",url:""},{name:"",url:""},{name:"",url:""}]}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)}}};a.default=n}}]);