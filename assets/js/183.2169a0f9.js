(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{731:function(t,v,_){"use strict";_.r(v);var a=_(14),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http-基础知识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-基础知识"}},[t._v("#")]),t._v(" HTTP 基础知识")]),t._v(" "),_("p",[t._v("HTTP 是一种 超文本传输协议(Hypertext Transfer Protocol)，HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范。")]),t._v(" "),_("p",[t._v("三点注意事项：")]),t._v(" "),_("ul",[_("li",[t._v("HTTP是无连接")]),t._v(" "),_("li",[t._v("HTTP是无状态")]),t._v(" "),_("li",[t._v("HTTP")])]),t._v(" "),_("h2",{attrs:{id:"请求方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[t._v("#")]),t._v(" 请求方法")]),t._v(" "),_("ul",[_("li",[t._v("GET：请求资源")]),t._v(" "),_("li",[t._v("HEAD：跟GET方法类似，区别就是不返回主体")]),t._v(" "),_("li",[t._v("POST：提交资源")]),t._v(" "),_("li",[t._v("OPTION：请求服务器告知其支持什么method")]),t._v(" "),_("li",[t._v("PUT：修改资源")]),t._v(" "),_("li",[t._v("DELETE：删除资源")])]),t._v(" "),_("h2",{attrs:{id:"http-报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-报文"}},[t._v("#")]),t._v(" HTTP 报文")]),t._v(" "),_("blockquote",[_("p",[t._v("HTTP 在应用层交互数据的方式，就叫报文。分为：请求报文 & 响应报文。")])]),t._v(" "),_("h3",{attrs:{id:"报文结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#报文结构"}},[t._v("#")]),t._v(" 报文结构")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("请求行 + 请求头 + 请求体\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ul",[_("li",[t._v("请求行：方法 + 路径 + 协议版本")])]),t._v(" "),_("div",{staticClass:"language-js line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br")])]),_("ul",[_("li",[t._v("请求头：“header（字段名）：value（值）”")])]),t._v(" "),_("ol",[_("li",[t._v("常见请求Header")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Host")]),t._v(" "),_("td",[t._v("接受请求的服务器的ip和端口")])]),t._v(" "),_("tr",[_("td",[t._v("Referer")]),t._v(" "),_("td",[t._v("请求来源")])]),t._v(" "),_("tr",[_("td",[t._v("Cookie")]),t._v(" "),_("td",[t._v("向服务器传送一个令牌")])]),t._v(" "),_("tr",[_("td",[t._v("Authorization")]),t._v(" "),_("td",[t._v("对自身进行认证的数据")])]),t._v(" "),_("tr",[_("td",[t._v("Connection")]),t._v(" "),_("td",[t._v("是否")])]),t._v(" "),_("tr",[_("td",[t._v("Accept")]),t._v(" "),_("td",[t._v("媒体类型")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Charset")]),t._v(" "),_("td",[t._v("字符集类型")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Encoding")]),t._v(" "),_("td",[t._v("编码方式")])]),t._v(" "),_("tr",[_("td",[t._v("Accept-Language")]),t._v(" "),_("td",[t._v("语言")])]),t._v(" "),_("tr",[_("td",[t._v("If-Modified-Since")]),t._v(" "),_("td",[t._v("协商缓存 时间戳")])]),t._v(" "),_("tr",[_("td",[t._v("If-None-Match")]),t._v(" "),_("td",[t._v("协商缓存 哈希值")])]),t._v(" "),_("tr",[_("td",[t._v("User-Agent")]),t._v(" "),_("td",[t._v("客户端信息")])])])]),t._v(" "),_("p",[t._v("通用")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("字段")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Cache-Control")]),t._v(" "),_("td",[t._v("强缓存")])]),t._v(" "),_("tr",[_("td",[t._v("Pragma")]),t._v(" "),_("td",[t._v("另一种随报文传送指示的方式，但并不专用缓存")])]),t._v(" "),_("tr",[_("td",[t._v("Connection")]),t._v(" "),_("td",[t._v("允许客户端和服务器指定与请求/响应连接有关的选项")])]),t._v(" "),_("tr",[_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("报文创建时间")])]),t._v(" "),_("tr",[_("td",[t._v("MIME-Version")]),t._v(" "),_("td",[t._v("给出了发送端使用的MIME版本")])]),t._v(" "),_("tr",[_("td",[t._v("Trailer")]),t._v(" "),_("td",[t._v("如果报文采用了分块传输编码方式，就可以用这个首部列出位于报文拖挂部分的首部集合")])]),t._v(" "),_("tr",[_("td",[t._v("Transfer-Encoding")]),t._v(" "),_("td",[t._v("告知接收端为了保证报文的可靠传输，对报文采用了什么编码方式")])]),t._v(" "),_("tr",[_("td",[t._v("Update")]),t._v(" "),_("td",[t._v("给出了发送端可能想要“升级”使用的新版本或协议")])]),t._v(" "),_("tr",[_("td",[t._v("Via")]),t._v(" "),_("td",[t._v("显示了报文经过的中间节点（代理、网关）")])])])]),t._v(" "),_("h3",{attrs:{id:"请求报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求报文"}},[t._v("#")]),t._v(" 请求报文")]),t._v(" "),_("h3",{attrs:{id:""}},[_("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),_("h2",{attrs:{id:"状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),_("h2",{attrs:{id:"版本区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本区别"}},[t._v("#")]),t._v(" 版本区别")])])}),[],!1,null,null,null);v.default=r.exports}}]);