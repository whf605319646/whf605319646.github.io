(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{513:function(v,_,e){v.exports=e.p+"assets/img/http0.d7235031.png"},514:function(v,_,e){v.exports=e.p+"assets/img/http1.3350c7e0.png"},515:function(v,_,e){v.exports=e.p+"assets/img/http2.27104920.png"},727:function(v,_,e){"use strict";e.r(_);var t=e(14),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"tcp三次握手和四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手和四次挥手"}},[v._v("#")]),v._v(" TCP三次握手和四次挥手")]),v._v(" "),t("p",[v._v("建立TCP链接是为了保证稳定有序的收发数据，那么就要保证双方的"),t("code",[v._v("发送能力")]),v._v("和"),t("code",[v._v("接收能力")]),v._v("都是OK的。")]),v._v(" "),t("ul",[t("li",[v._v("FIN = finish")]),v._v(" "),t("li",[v._v("ACK = acknowledge")])]),v._v(" "),t("p",[t("img",{attrs:{src:e(513),alt:""}})]),v._v(" "),t("h2",{attrs:{id:"三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[v._v("#")]),v._v(" 三次握手")]),v._v(" "),t("p",[v._v("三次握手之所以三次，是保证"),t("code",[v._v("client")]),v._v("和"),t("code",[v._v("server")]),v._v("都要让 "),t("strong",[v._v('"对方"')]),v._v(" 知道自己"),t("code",[v._v("发送能力")]),v._v("和"),t("code",[v._v("接收能力")]),v._v("都OK的最小次数。")]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v("client => server")]),v._v(" server判断出client具备发送能力")]),v._v(" "),t("p",[t("code",[v._v("server => client")]),v._v(" client可以判断出server具备发送和接收能力")]),v._v(" "),t("p",[t("code",[v._v("client => server")]),v._v(" client还需让server知道自己接收能力没问题")])]),v._v(" "),t("ul",[t("li",[v._v("客户端：我准备好了，你准备好了么，收到请回答？")]),v._v(" "),t("li",[v._v("服务端：我收到了，我也准备好了，你收到了么？")]),v._v(" "),t("li",[v._v("客户端：我也收到了")])]),v._v(" "),t("p",[v._v("双方均保证了自己的接收和发送能力没有问题")]),v._v(" "),t("p",[v._v("TCP连接建立，两次不安全，四次浪费资源，三次刚刚好。")]),v._v(" "),t("p",[t("img",{attrs:{src:e(514),alt:""}})]),v._v(" "),t("p",[v._v("从最开始双方都处于"),t("code",[v._v("CLOSED")]),v._v("状态。然后服务端开始监听某个端口，进入了"),t("code",[v._v("LISTEN")]),v._v("状态。")]),v._v(" "),t("ul",[t("li",[v._v("第一次握手")])]),v._v(" "),t("p",[v._v("客户端主动发起连接，发送"),t("code",[v._v("SYN")]),v._v(", 发送完毕后，客户端进入"),t("code",[v._v("SYN-SENT")]),v._v("状态。")]),v._v(" "),t("ul",[t("li",[v._v("第二次握手")])]),v._v(" "),t("p",[v._v("服务端接收到，返回"),t("code",[v._v("SYN和ACK")]),v._v("(对应客户端发来的SYN)，发送完毕后，服务器端进入"),t("code",[v._v("SYN_RCVD")]),v._v("状态。")]),v._v(" "),t("ul",[t("li",[v._v("第三次握手")])]),v._v(" "),t("p",[v._v("客户端再发送"),t("code",[v._v("ACK")]),v._v("给服务端，发送完毕后，客户端进入"),t("code",[v._v("ESTABLISHED")]),v._v("状态；服务端收到ACK之后，也进入"),t("code",[v._v("ESTABLISHED")]),v._v("状态，TCP 握手结束。")]),v._v(" "),t("h2",{attrs:{id:"四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[v._v("#")]),v._v(" 四次挥手")]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v("client => server")]),v._v(" client请求关闭连接，发送FIN到server")]),v._v(" "),t("p",[t("code",[v._v("server => client")]),v._v(" server接收关闭连接请求，发送ACK进行最后数据传输")]),v._v(" "),t("p",[t("code",[v._v("server => client")]),v._v(" server向client发送可以进行关闭连接的请求FIN")]),v._v(" "),t("p",[t("code",[v._v("client => server")]),v._v(" client接收请求，发送确认关闭ACK，等待2msl后关闭")])]),v._v(" "),t("ul",[t("li",[v._v("学生：老师，下课了")]),v._v(" "),t("li",[v._v("老师：好了，我知道，还有一部分没讲完")]),v._v(" "),t("li",[v._v("老师：讲完了，下课")]),v._v(" "),t("li",[v._v("学生：好的")])]),v._v(" "),t("p",[v._v("四次挥手后，client和server成功地断开了连接~")]),v._v(" "),t("p",[t("img",{attrs:{src:e(515),alt:""}})]),v._v(" "),t("p",[v._v("刚开始双方处于"),t("code",[v._v("ESTABLISHED")]),v._v("状态。")]),v._v(" "),t("ul",[t("li",[v._v("第一次挥手")])]),v._v(" "),t("p",[v._v("客户端想要关闭连接，向服务器发送"),t("code",[v._v("FIN")]),v._v("报文，发送完毕后，客户端进入"),t("code",[v._v("FIN_WAIT_1")]),v._v("状态。")]),v._v(" "),t("ul",[t("li",[v._v("第二次挥手")])]),v._v(" "),t("p",[v._v("服务端收到该"),t("code",[v._v("FIN")]),v._v("报文后，就向客户端发送"),t("code",[v._v("ACK")]),v._v("应答报文，接着服务端进入"),t("code",[v._v("CLOSED_WAIT")]),v._v("状态。")]),v._v(" "),t("p",[v._v("客户端接收到服务端的"),t("code",[v._v("ACK")]),v._v("应答报文后，进入"),t("code",[v._v("FIN_WAIT_2")]),v._v("状态。")]),v._v(" "),t("ul",[t("li",[v._v("第三次挥手")])]),v._v(" "),t("p",[v._v("服务端处理完数据后，向客户端发送"),t("code",[v._v("FIN")]),v._v("报文，发送完毕后，服务器端进入"),t("code",[v._v("LAST_ACK")]),v._v("状态。")]),v._v(" "),t("ul",[t("li",[v._v("第四次挥手")])]),v._v(" "),t("p",[v._v("客户端接收到来自服务端的"),t("code",[v._v("FIN")]),v._v("报文后，回一个"),t("code",[v._v("ACK")]),v._v("应答报文，并进入"),t("code",[v._v("TIME_WAIT")]),v._v("状态。")]),v._v(" "),t("p",[v._v("服务端接收到这个确认包之后，关闭连接，进入"),t("code",[v._v("CLOSED")]),v._v("状态，至此"),t("strong",[v._v("服务端已经完成连接的关闭")]),v._v("。")]),v._v(" "),t("p",[v._v("客户端等待了"),t("code",[v._v("2MSL")]),v._v("之后，自动进入"),t("code",[v._v("CLOSED")]),v._v("状态，"),t("strong",[v._v("至此客户端也完成连接的关闭")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/15",target:"_blank",rel:"noopener noreferrer"}},[v._v("谈谈你对 TCP 三次握手和四次挥手的理解"),t("OutboundLink")],1)]),v._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/2cQI_mfNsXElStHeuR9LmA",target:"_blank",rel:"noopener noreferrer"}},[v._v("【面试】图解 TCP 常见面试题！"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports}}]);