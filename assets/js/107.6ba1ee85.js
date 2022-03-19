(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{635:function(t,e,s){"use strict";s.r(e);var a=s(14),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"github-pages配置二级子域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages配置二级子域名"}},[t._v("#")]),t._v(" GitHub Pages配置二级子域名")]),t._v(" "),s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/0.png"}})]),t._v(" "),s("h4",{attrs:{id:"github-pages和每个项目绑定自定义域名-支持多个和顶级域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-pages和每个项目绑定自定义域名-支持多个和顶级域名"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.cnblogs.com/EasonJim/p/6180261.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages和每个项目绑定自定义域名（支持多个和顶级域名）"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("假设我购买的域名为www.easonjim.com，想把www.easonjim.com和easonjim.com的域名跳转到下面的网址easonjim.github.io。")]),t._v(" "),s("p",[t._v("而我在github上的账号为easonjim，并且新建了easonjim.github.io的目录。")]),t._v(" "),s("p",[t._v("那么在这个目录上新建一个名为CNAME的文件，里面的内容：")]),t._v(" "),s("p",[t._v("easonjim.com"),s("br"),t._v("\nwww.easonjim.com")]),t._v(" "),s("p",[t._v("注意：经过测试，只能是同一个域名下才生效，如果多几个不同后缀的域名，最终只能识别第一个。")]),t._v(" "),s("p",[t._v("下一步是设置域名的解析地址，如下设置：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/1.png",alt:"1"}})]),t._v(" "),s("p",[t._v("只要把@和www解析到github的ip即可。")]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://help.github.com/articles/troubleshooting-custom-domains/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://help.github.com/articles/troubleshooting-custom-domains/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("那么接下来，对于我单个项目想搞个主页时，就要设置项目的主页配置")]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://chitanda.me/2015/11/03/multiple-git-pages-in-one-github-account/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://chitanda.me/2015/11/03/multiple-git-pages-in-one-github-account/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("只要在项目的Settings配置里设置如下：")]),t._v(" "),s("p",[t._v("注意：由于github更新太快，随着时间推移，这些选项可能会不一样，但大致不会怎么变，随机应变。")]),t._v(" "),s("p",[t._v("点击右面的【Settings】，页面往下拉到【GitHub Pages】部分，选择【Launch automatic page generator】>【Continue to layouts】>【Publish page】即可。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/2.png",alt:"2"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/3.png",alt:"3"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/4.png",alt:"4"}})]),t._v(" "),s("p",[t._v("搞定之后，可以这样访问，easonjim.github.io/test，其中test为当前项目的名称。")]),t._v(" "),s("p",[t._v("那么问题来了，上面自动创建的页面是放在gh-pages branch分支里面，那么如果要换成主分支的时，主要在这里选择master branch即可：\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/5.png",alt:"5"}})]),t._v(" "),s("p",[t._v("那么此时的访问地址还是没改变，依然是easonjim.github.io/test")]),t._v(" "),s("p",[t._v("如果要改变这样形式，只能绑定自己的域名过去才能实现，假设我将要绑定的域名为t.easonjim.com，在项目的根目录下新建CNAME的文件，并写入：")]),t._v(" "),s("p",[t._v("t.easonjim.com")]),t._v(" "),s("p",[t._v("然后，会发现GitHub Pages的页面上已经自动显示上了自己上面设置的域名：\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/6.png",alt:"6"}})]),t._v(" "),s("p",[t._v("接下来，在去域名解析管理页面，把t.easonjim.com的域名指向github的IP，如下：\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/7.png",alt:"7"}})]),t._v(" "),s("p",[t._v("最后，就可以用t.easonjim.com访问自己自定义项目上的主页了。")]),t._v(" "),s("p",[t._v("这个功能可以参考一下阮一峰的这个项目，灵感来自这里："),s("a",{attrs:{href:"https://github.com/ruanyf/es6tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ruanyf/es6tutorial"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);