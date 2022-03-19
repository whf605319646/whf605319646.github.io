(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{481:function(s,a,t){s.exports=t.p+"assets/img/router-0.9659f742.png"},482:function(s,a,t){s.exports=t.p+"assets/img/router-1.a6050c1c.gif"},483:function(s,a,t){s.exports=t.p+"assets/img/router-2.43e4568e.gif"},484:function(s,a,t){s.exports=t.p+"assets/img/router-3.2b701660.gif"},485:function(s,a,t){s.exports=t.p+"assets/img/router-4.422a42ef.gif"},679:function(s,a,t){"use strict";t.r(a);var n=t(14),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"vue-router几种传参方式及区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-router几种传参方式及区别"}},[s._v("#")]),s._v(" vue-router几种传参方式及区别")]),s._v(" "),n("p",[s._v("vue-router传递参数分为两大类")]),s._v(" "),n("ul",[n("li",[s._v("编程式的导航 router.push")]),s._v(" "),n("li",[s._v("声明式的导航")])]),s._v(" "),n("h1",{attrs:{id:"编程式的导航-router-push"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编程式的导航-router-push"}},[s._v("#")]),s._v(" "),n("a",{attrs:{name:"t0"}}),n("a",{attrs:{name:"t0"}}),s._v("编程式的导航 router.push")]),s._v(" "),n("p",[s._v("编程式导航传递参数有两种类型：字符串、对象。")]),s._v(" "),n("h2",{attrs:{id:"字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[s._v("#")]),s._v(" "),n("a",{attrs:{name:"t1"}}),n("a",{attrs:{name:"t1"}}),s._v("字符串")]),s._v(" "),n("p",[s._v("字符串的方式是直接将路由地址以字符串的方式来跳转，这种方式很简单但是不能传递参数：")]),s._v(" "),n("p",[n("code",{staticClass:"language-javascript hljs"},[s._v('this.$router.push("home");')])]),s._v(" "),n("h2",{attrs:{id:"对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#对象"}},[s._v("#")]),s._v(" "),n("a",{attrs:{name:"t2"}}),n("a",{attrs:{name:"t2"}}),s._v("对象")]),s._v(" "),n("p",[s._v("想要传递参数主要就是以对象的方式来写，分为两种方式：命名路由、查询参数，下面分别说明两种方式的用法和注意事项。")]),s._v(" "),n("h3",{attrs:{id:"命名路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命名路由"}},[s._v("#")]),s._v(" "),n("a",{attrs:{name:"t3"}}),n("a",{attrs:{name:"t3"}}),s._v("命名路由")]),s._v(" "),n("p",[s._v("命名路由的前提就是在注册路由的地方需要给路由命名如：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(481),alt:""}})]),s._v(" "),n("p",[s._v("命名路由传递参数需要使用params来传递，这里一定要注意使用params不是query。目标 页面接收传递参数时使用params")]),s._v(" "),n("p",[s._v("特别注意：命名路由这种方式传递的参数，如果在目标页面刷新是会出错的")]),s._v(" "),n("p",[s._v("使用方法如下：")]),s._v(" "),n("p",[n("code",{staticClass:"language-javascript hljs"},[s._v("this.$router.push({ name: 'news', params: { userId: 123 }})")])]),s._v(" "),n("p",[s._v("代码如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" msg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button @click"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"routerTo"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("click here to news page"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HelloWorld'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n            msg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Welcome to Your Vue.js App'")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        methods"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("routerTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'news'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" params"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" userId"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("style"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br")])]),n("p",[s._v("接受传递的参数：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" is the news page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("the transform param is "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("运行效果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(482),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"查询参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询参数"}},[s._v("#")]),s._v(" "),n("a",{attrs:{name:"t4"}}),n("a",{attrs:{name:"t4"}}),s._v("查询参数")]),s._v(" "),n("p",[s._v("查询参数其实就是在路由地址后面带上参数和传统的url参数一致的，传递参数使用query而且必须配合path来传递参数而不能用name，目标页面接收传递的参数使用query。\n注意：和name配对的是params，和path配对的是query\n使用方法如下：")]),s._v(" "),n("p",[n("code",{staticClass:"language-javascript hljs"},[s._v("this.$router.push({ path: '/news', query: { userId: 123 }});")])]),s._v(" "),n("p",[s._v("代码如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("  \n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" msg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button @click"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"routerTo"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("click here to news page"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\nname"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HelloWorld'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\nmsg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Welcome to Your Vue.js App'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\nmethods"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("routerTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/news'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" query"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" userId"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("style"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br")])]),n("p",[s._v("接收参数如下：")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" is the news page"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("the transform param is "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("template"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("运行效果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(483),alt:""}})]),s._v(" "),n("h1",{attrs:{id:"声明式的导航"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#声明式的导航"}},[s._v("#")]),s._v(" "),n("a",{attrs:{name:"t5"}}),n("a",{attrs:{name:"t5"}}),s._v("声明式的导航")]),s._v(" "),n("p",[s._v("声明式的导航和编程式的一样，这里就不在过多介绍，给几个例子大家对照编程式理解，例子如下：")]),s._v(" "),n("h5",{attrs:{id:"字符串-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串-2"}},[s._v("#")]),s._v(" 字符串")]),s._v(" "),n("h5",{attrs:{id:"命名路由-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命名路由-2"}},[s._v("#")]),s._v(" 命名路由")]),s._v(" "),n("p",[s._v("运行效果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(484),alt:""}})]),s._v(" "),n("h5",{attrs:{id:"查询参数-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询参数-2"}},[s._v("#")]),s._v(" 查询参数")]),s._v(" "),n("p",[s._v("运行效果如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(485),alt:""}})]),s._v(" "),n("p",[s._v("最后总结：路由传递参数和传统传递参数是一样的，命名路由类似表单提交而查询就是url传递，在vue项目中基本上掌握了这两种传递参数就能应付大部分应用了，最后总结为以下两点：")]),s._v(" "),n("ul",[n("li",[s._v("1.命名路由搭配params，刷新页面参数会丢失")]),s._v(" "),n("li",[s._v("2.查询参数搭配query，刷新页面数据不会丢失")]),s._v(" "),n("li",[s._v("3.接受参数使用this.$router后面就是搭配路由的名称就能获取到参数的值**")])])])}),[],!1,null,null,null);a.default=r.exports}}]);