(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{363:function(s,t,o){"use strict";o.r(t);var e=o(42),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[o("h1",{attrs:{id:"es模块和nodejs模块对比"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#es模块和nodejs模块对比"}},[s._v("#")]),s._v(" ES模块和nodeJs模块对比")]),s._v(" "),o("blockquote",[o("p",[s._v("其实两者遵循的规范都不一样,放在这里只是区分方便记忆和理解,ES模块遵循的是ES的规范,nodejS遵循的是commonjs 规范,Es模块是站在CommonJS和AMD规范这两个巨人的肩旁上的")])]),s._v(" "),o("h2",{attrs:{id:"commonjs模块"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#commonjs模块"}},[s._v("#")]),s._v(" CommonJS模块")]),s._v(" "),o("ol",[o("li",[s._v("运行时确定依赖关系,以及输入和输出变量,(CommonJS 模块是运行时加载)")]),s._v(" "),o("li",[s._v("CommonJS 模块输出的是值的缓存，不存在动态更新(CommonJS模块输出的是一个值的拷贝,也就是说，一旦输出一个值，模块内部的变化就影响不到这个值)")])]),s._v(" "),o("h2",{attrs:{id:"es6模块"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#es6模块"}},[s._v("#")]),s._v(" Es6模块")]),s._v(" "),o("ol",[o("li",[s._v("设计思想是尽量的静态化,可以做静态优化,(拓宽 JavaScript 的语法，比如引入宏（macro）和类型检验（type system）")]),s._v(" "),o("li",[s._v("编译时就能确定模块的依赖关系，以及输入和输出的变量(ES6 模块是编译时输出接口)")]),s._v(" "),o("li",[s._v("ES6模块输出的是值的引用。export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。")]),s._v(" "),o("li",[s._v("效率要比 CommonJS 模块的加载方式高")])]),s._v(" "),o("h2",{attrs:{id:"说明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明:")]),s._v(" "),o("ul",[o("li",[o("p",[s._v('从 v13.2 版本开始，Node.js 已经默认打开了ES6 模块支持。也就是说，只要脚本文件里面使用import或者export命令，那么就必须采用.mjs后缀名。Node.js 遇到.mjs文件，就认为它是 ES6 模块，默认启用严格模式，不必在每个模块文件顶部指定"use strict"。')])]),s._v(" "),o("li",[o("p",[s._v("总结为一句话：.mjs文件总是以 ES6 模块加载，.cjs文件总是以 CommonJS 模块加载，.js文件的加载取决于package.json里面type字段的设置。")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);