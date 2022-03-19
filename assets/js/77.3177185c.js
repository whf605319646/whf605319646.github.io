(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{604:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"运用nodemailer实现附件自动推送到邮箱"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运用nodemailer实现附件自动推送到邮箱"}},[t._v("#")]),t._v(" 运用nodemailer实现附件自动推送到邮箱 ⚡️")]),t._v(" "),n("h3",{attrs:{id:"背景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),n("p",[t._v("有这样一个需求，当前端构建打包好后，leader希望能实现自动将压缩包发送到目标现场的邮箱中，免去研发手动发包给工程人员的步骤，从而提升研发效率。")]),t._v(" "),n("h3",{attrs:{id:"先上图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#先上图"}},[t._v("#")]),t._v(" 先上图")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/20210118165502.png",alt:"20210118165502"}})]),t._v(" "),n("h3",{attrs:{id:"方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方案"}},[t._v("#")]),t._v(" 方案")]),t._v(" "),n("p",[t._v("经过调用，网上有很多"),n("code",[t._v("nodejs")]),t._v("的"),n("code",[t._v("mailer")]),t._v("，但考虑再三后，决定使用 "),n("code",[t._v("nodemailer")]),t._v(" 来解决该问题。")]),t._v(" "),n("h3",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Nodemailer是一个简单易用的Node.js邮件发送组件")])]),t._v(" "),n("li",[n("p",[t._v("官网地址：https://nodemailer.com")])]),t._v(" "),n("li",[n("p",[t._v("GitHub地址：https://github.com/nodemailer/nodemailer")])]),t._v(" "),n("li",[n("p",[t._v("Nodemailer的主要特点包括：")]),t._v(" "),n("ul",[n("li",[t._v("支持Unicode编码")]),t._v(" "),n("li",[t._v("支持Window系统环境")]),t._v(" "),n("li",[t._v("支持HTML内容和普通文本内容")]),t._v(" "),n("li",[t._v("支持附件(传送大附件)")]),t._v(" "),n("li",[t._v("支持HTML内容中嵌入图片")]),t._v(" "),n("li",[t._v("支持SSL/STARTTLS安全的邮件发送")]),t._v(" "),n("li",[t._v("支持内置的transport方法和其他插件实现的transport方法")]),t._v(" "),n("li",[t._v("支持自定义插件处理消息")]),t._v(" "),n("li",[t._v("支持XOAUTH2登录验证")])])])]),t._v(" "),n("h3",{attrs:{id:"实践"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),n("p",[t._v("这里主要展示nodemailer核心配置，其它配置项可自行测试折腾")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 推送到项目负责人邮箱以部署")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("release")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("targetFile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// qiye.aliyun 邮箱 -> 163 邮箱")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" transporter "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nodemailer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTransport")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// host: 'smtp.mxhichina.com',")]),t._v("\n            service"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qiye.aliyun'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SMTP 端口")]),t._v("\n            secureConnection"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用了 SSL")]),t._v("\n            auth"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                user"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxx@zhitongits.com.cn'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优先smtp授权码，否则使用邮箱登录密码")]),t._v("\n                pass"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// verify connection configuration")]),t._v("\n        transporter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("verify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("* 验证邮箱服务:  ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("chalk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("red")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"失败"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("* 验证邮箱服务: ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("chalk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cyan")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"成功"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" msgOptions "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            from"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"xxx\" <xxxx@zhitongits.com.cn>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sender address")]),t._v("\n            to"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxx@163.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// list of receivers")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cc: ['xxxx@163.com'], // 添加抄送人")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bcc: ['xxxx@163.com'], // 加密抄送人，收件人看不到")]),t._v("\n            subject"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"主题"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Subject line")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送text或者html格式")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// text: 'Hello world?', // plain text body")]),t._v("\n            html"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<b>请将附件下载后，部署到 /root/webapp 目录下 </b>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// html body")]),t._v("\n            attachments"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"land.zip"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" targetFile "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构建好后的压缩文件路径")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 163 邮箱 -> qiye.aliyun 邮箱")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let transporter = nodemailer.createTransport({")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     // host: 'smtp.ethereal.email',")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     service: '163', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     port: 465, // SMTP 端口")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     secureConnection: true, // 使用了 SSL")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     auth: {")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         user: 'xxxx@163.com',")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         // 设置smtp授权码，不是邮箱登录密码")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         pass: 'xxxxx',")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     }")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// });")]),t._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let mailOptions = {")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     from: 'xxxxx', // sender address")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     to: 'xxx@qq.com', // list of receivers")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//     subject: "主题", // Subject line')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     // 发送text或者html格式")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     // text: 'Hello world?', // plain text body")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     html: '<b>请将附件下载后，部署到 /root/webapp 目录下 </b>', // html body")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     attachments: [")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         {")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             filename: `land.zip`,")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//             path: targetFile // 构建好后的压缩文件路径")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         }")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     ]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// };")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// send mail with defined transport object")]),t._v("\n        transporter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMail")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msgOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("* 发版成功: ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("chalk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cyan")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("targetFile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br"),n("span",{staticClass:"line-number"},[t._v("62")]),n("br"),n("span",{staticClass:"line-number"},[t._v("63")]),n("br"),n("span",{staticClass:"line-number"},[t._v("64")]),n("br"),n("span",{staticClass:"line-number"},[t._v("65")]),n("br"),n("span",{staticClass:"line-number"},[t._v("66")]),n("br"),n("span",{staticClass:"line-number"},[t._v("67")]),n("br"),n("span",{staticClass:"line-number"},[t._v("68")]),n("br"),n("span",{staticClass:"line-number"},[t._v("69")]),n("br"),n("span",{staticClass:"line-number"},[t._v("70")]),n("br"),n("span",{staticClass:"line-number"},[t._v("71")]),n("br"),n("span",{staticClass:"line-number"},[t._v("72")]),n("br"),n("span",{staticClass:"line-number"},[t._v("73")]),n("br"),n("span",{staticClass:"line-number"},[t._v("74")]),n("br"),n("span",{staticClass:"line-number"},[t._v("75")]),n("br"),n("span",{staticClass:"line-number"},[t._v("76")]),n("br"),n("span",{staticClass:"line-number"},[t._v("77")]),n("br")])]),n("h3",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000012251328",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js使用Nodemailer发送邮件"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/loveyoulouyou/article/details/81476307",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里企业邮箱smtp设置bug"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);