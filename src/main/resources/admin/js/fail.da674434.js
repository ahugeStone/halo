(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fail"],{5517:function(t,e,s){"use strict";var c=s("998f"),n=s.n(c);n.a},"998f":function(t,e,s){},cc89:function(t,e,s){"use strict";s.r(e);var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("exception-page",{attrs:{type:"404"}})},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exception"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.config[t.type].img}})]),s("div",{staticClass:"content"},[s("h1",[t._v(t._s(t.config[t.type].title))]),s("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),s("div",{staticClass:"action"},[s("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},i=[],o={404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},p=o,r={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:p}},methods:{handleToHome:function(){this.$router.push({name:"Dashboard"})}}},l=r,u=(s("5517"),s("17cc")),d=Object(u["a"])(l,a,i,!1,null,"729a8fea",null),f=d.exports,m={components:{ExceptionPage:f}},g=m,v=Object(u["a"])(g,c,n,!1,null,"388fe08d",null);e["default"]=v.exports}}]);