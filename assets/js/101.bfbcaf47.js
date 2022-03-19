(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{629:function(t,e,r){"use strict";r.r(e);var a=r(14),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"简单地聊聊cdn原理作用及实现方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简单地聊聊cdn原理作用及实现方法"}},[t._v("#")]),t._v(" 简单地聊聊CDN原理作用及实现方法")]),t._v(" "),r("p",[t._v("相信只要会网上冲浪的都会接触到CDN吧，今天我们来聊聊对CDN的理解，给大家作为参考，本文将会以简单的描述来解释相关原理，供大家理解，希望相关专业同学进行补充哦。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.wc1234.cn/wp-content/uploads/2020/03/163e57e16e95b5.jpg",alt:""}})]),t._v(" "),r("h4",{attrs:{id:"_1-什么是cdn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是cdn"}},[t._v("#")]),t._v(" 1.什么是"),r("a",{attrs:{href:"https://www.wc1234.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CDN"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("CDN是Content Delivery Network的缩写，即内容分发网络。我们先从字面意思进行理解，内容即我们在网页上请求的内容；分发，即将内容分发下去；网络，即针对网络模型进行操作。简单来说CDN就是将网站上内容先发布到离用户最近的网络节点上，这样当你请求该网站内容时，便可以快速响应，优化相应速度。")]),t._v(" "),r("h4",{attrs:{id:"_2-cdn的原理和作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-cdn的原理和作用"}},[t._v("#")]),t._v(" 2.CDN的"),r("a",{attrs:{href:"https://www.wc1234.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("原理"),r("OutboundLink")],1),t._v("和作用")]),t._v(" "),r("p",[t._v("在聊到CDN之前，我们先简单聊聊网络请求的简单模型，这里不聊OSI模型的相关知识。当我们在浏览器中输出网址时，浏览器首先会将该网址发送到DNS服务器来获取该域名的ip地址，得到ip地址之后，再利用ip地址访问站点服务器，然后站点服务器发送回网页内容。当然中间过程十分复杂，这里就不过多讲解。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.wc1234.cn/wp-content/uploads/2020/03/114e5ee37e6f2e.jpg",alt:"简单地聊聊CDN原理作用及实现方法",title:"简单地聊聊CDN原理作用及实现方法"}})]),t._v(" "),r("p",[t._v("CDN将用户和站点服务器的连接切开，加入了一个新的缓存区，用户获取内容不是直接通过站点服务器，而实通过访问CDN节点来获取网页内容。简单的流程就是，首先用户发送访问请求，智能调度DNS为用户分配适合的CDN节点的ip地址，用户利用该ip地址来获取CDN节点上的内容。CDN节点的内容由站点服务器进行发送，CDN节点再给用户发送内容的同时，也在缓存服务器本地保存了相关内容供下一次用户进行访问。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.wc1234.cn/wp-content/uploads/2020/03/11e4c0ef6ee5b8.jpg",alt:"简单地聊聊CDN原理作用及实现方法",title:"简单地聊聊CDN原理作用及实现方法"}})]),t._v(" "),r("p",[t._v("加入CDN之后解决了以下问题：")]),t._v(" "),r("ol",[r("li",[t._v("从技术上解决了服务器因为带宽小，访问人数多，造成访问速度过慢得问题；")]),t._v(" "),r("li",[t._v("提高服务器的安全性；")]),t._v(" "),r("li",[t._v("改善网络的服务质量，提高网站服务的承载能力，提高用户访问网站的相应速度。")])]),t._v(" "),r("h4",{attrs:{id:"_3-如何如何设置开通设置cdn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何如何设置开通设置cdn"}},[t._v("#")]),t._v(" 3.如何如何设置开通设置CDN")]),t._v(" "),r("p",[t._v("由于我是用的是阿里云的服务器，所以用阿里云为例。阿里的学生服务器带宽为1M(现在可以选5m的轻量应用服务器)，如果只是用来构建博客应该是没有问题的，由于我的博客基本上没有什么访问量，所以也不需要使用CDN，阿里云及其他云提供商也提供了免费的CDN设置教程，这里就不过多讲解了。")]),t._v(" "),r("h4",{attrs:{id:"_4-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-总结"}},[t._v("#")]),t._v(" 4.总结")]),t._v(" "),r("p",[t._v("对于个人博客这类网站而言，访问量不大，可能不需要CDN服务，本期内容主要是为大家简单讲解一下CDN的原理，当然其中很多内容都没有讲到，有兴趣的同学可以多看些资料进行学习。最近特殊时期，希望大家尽量呆在家里，保护好自己哦~")]),t._v(" "),r("h4",{attrs:{id:"转载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#转载"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://www.wc1234.cn/2046.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("转载"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);