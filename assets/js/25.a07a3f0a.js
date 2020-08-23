(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{351:function(s,a,t){"use strict";t.r(a);var r=t(42),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"开发规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[s._v("#")]),s._v(" 开发规范")]),s._v(" "),t("h2",{attrs:{id:"vue项目开发规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue项目开发规范"}},[s._v("#")]),s._v(" vue项目开发规范:")]),s._v(" "),t("h3",{attrs:{id:"vue-组件命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件命名规范"}},[s._v("#")]),s._v(" vue 组件命名规范:")]),s._v(" "),t("h4",{attrs:{id:"组件的命名需遵从以下原则："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件的命名需遵从以下原则："}},[s._v("#")]),s._v(" 组件的命名需遵从以下原则：")]),s._v(" "),t("p",[s._v("1.有意义的: 不过于具体，也不过于抽象\n2.简短: 2 到 3 个单词\n3.具有可读性: 以便于沟通交流\n4.必须符合自定义元素规范: 使用连字符分隔单词，切勿使用保留字。//"),t("app-header"),s._v(" ----AppHeader.vue\n5.app- 前缀作为命名空间: 如果非常通用的话可使用一个单词来命名，这样可以方便于其它项目里复用。")],1),s._v(" "),t("h3",{attrs:{id:"组件表达式简单化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件表达式简单化"}},[s._v("#")]),s._v(" 组件表达式简单化:")]),s._v(" "),t("p",[s._v("1.如果发现写了太多复杂并难以阅读的行内表达式，那么可以使用 method 或是 computed 属性来替代其功能。")]),s._v(" "),t("h3",{attrs:{id:"组件-props-原子化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件-props-原子化"}},[s._v("#")]),s._v(" 组件 props 原子化:")]),s._v(" "),t("p",[s._v("1.虽然 Vue.js 支持传递复杂的 JavaScript 对象通过 props 属性，但是你应该尽可能的使用原始类型的数据。尽量只使用 JavaScript 原始类型（字符串、数字、布尔值）和函数。尽量避免复杂的对象。")]),s._v(" "),t("h3",{attrs:{id:"验证组件的-props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证组件的-props"}},[s._v("#")]),s._v(" 验证组件的 props")]),s._v(" "),t("p",[s._v("1.提供默认值。\n2.使用 type 属性校验类型。\n3.使用 props 之前先检查该 prop 是否存在。")]),s._v(" "),t("h3",{attrs:{id:"组件结构化-见组件结构顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件结构化-见组件结构顺序"}},[s._v("#")]),s._v(" 组件结构化:见组件结构顺序")]),s._v(" "),t("h3",{attrs:{id:"组件事件命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件事件命名"}},[s._v("#")]),s._v(" 组件事件命名:")]),s._v(" "),t("p",[s._v("1.事件名也使用连字符命名。\n2.一个事件的名字对应组件外的一组意义操作，如：upload-success、upload-error 以及 dropzone-upload-success、dropzone-upload-error （如果需要前缀的话）。\n3.事件命名应该以动词（如 client-api-load） 或是 名词（如 drive-upload-success）结尾。（出处）")]),s._v(" "),t("h3",{attrs:{id:"method方法命名命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method方法命名命名规范"}},[s._v("#")]),s._v(" method方法命名命名规范:")]),s._v(" "),t("p",[s._v("1.驼峰式命名，统一使用动词或者动词+名词形式，//openDialog\n2.数据以 Data 结尾   //getListData")]),s._v(" "),t("h3",{attrs:{id:"组件避免-this-parent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件避免-this-parent"}},[s._v("#")]),s._v(" 组件避免 this.$parent")]),s._v(" "),t("p",[s._v("1.通过 props 将值传递给子组件。\n2.过 props 传递回调函数给子组件来达到调用父组件方法的目的。\n3.通过在子组件触发事件来通知父组件。")]),s._v(" "),t("h3",{attrs:{id:"谨慎使用-this-refs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谨慎使用-this-refs"}},[s._v("#")]),s._v(" 谨慎使用 this.$refs")]),s._v(" "),t("h3",{attrs:{id:"使用组件名作为样式作用域空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用组件名作为样式作用域空间"}},[s._v("#")]),s._v(" 使用组件名作为样式作用域空间")]),s._v(" "),t("p",[s._v("1.Vue.js 的组件是自定义元素，这非常适合用来作为样式的根作用域空间。可以将组件名作为 CSS 类的命名空间。")]),s._v(" "),t("h3",{attrs:{id:"尽可能使用-mixins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#尽可能使用-mixins"}},[s._v("#")]),s._v(" 尽可能使用 mixins:")]),s._v(" "),t("p",[s._v("抽出这两个组件的核心功能到一个 mixin 中")]),s._v(" "),t("p",[s._v("☞☞☞☞☞☞☞☞☞☞☞☞☞☞☞")]),s._v(" "),t("h2",{attrs:{id:"目录命名-js文件命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录命名-js文件命名"}},[s._v("#")]),s._v(" 目录命名/JS文件命名")]),s._v(" "),t("p",[s._v("1.全部采用驼峰。//appName    accountModel.js\n2.有复数结构时，要采用复数命名法 //scripts, styles, images,")]),s._v(" "),t("h2",{attrs:{id:"项目命名规范-css-scss-html文件命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目命名规范-css-scss-html文件命名"}},[s._v("#")]),s._v(" 项目命名规范, css,scss, HTML文件命名:")]),s._v(" "),t("p",[s._v("1.全部采用小写方式， 以中划线分隔。//my-project-name    retina-sprites.scss    error-report.html")]),s._v(" "),t("p",[s._v("'ID' - 在变量名中全大写\n'URL' - 在变量名中全大写\n'Android' - 在变量名中大写第一个字母\n'iOS' - 在变量名中小写第一个，大写后两个字母\n常量全大写，用下划线连接")]),s._v(" "),t("h2",{attrs:{id:"css规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css规范"}},[s._v("#")]),s._v(" css规范")]),s._v(" "),t("p",[s._v("1.使用 4 个空格作为缩进\n2.类名建议使用破折号代替驼峰法。\n3.不要使用 ID 选择器\n4.在一个规则声明中应用了多个选择器时，每个选择器独占一行\n5.规则声明之间用空行分隔开\n6.每条规则结束后都必须加上分号")])])}),[],!1,null,null,null);a.default=e.exports}}]);