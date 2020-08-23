(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{364:function(a,t,e){"use strict";e.r(t);var v=e(42),r=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"v8-内存管理和垃圾回收机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8-内存管理和垃圾回收机制"}},[a._v("#")]),a._v(" V8 内存管理和垃圾回收机制:")]),a._v(" "),e("p",[a._v("在node中javascript能使用的内存是有限制的，64位系统下约为1.4GB，32位系统下约为0.7GB:")]),a._v(" "),e("p",[a._v("这个限制在node启动的时候可以通过传递--max-old-space-size 和 --max-new-space-size来调整，如：")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("node "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("max"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("old"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("space"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("size"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1700")]),a._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("js "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//单位为MB")]),a._v("\nnode "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("max"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("space"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("size"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),a._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("js "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//单位为MB")]),a._v("\n")])])]),e("p",[a._v("上述参数在V8初始化时生效，一旦生效就不能再动态改变。")]),a._v(" "),e("h2",{attrs:{id:"v8的内存分代"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8的内存分代"}},[a._v("#")]),a._v(" V8的内存分代:")]),a._v(" "),e("blockquote",[e("p",[a._v("在V8中主要将内存分为新生代和老生代。")])]),a._v(" "),e("ul",[e("li",[a._v("新生代中的"),e("strong",[a._v("对象为存活时间较短的对象")]),a._v("，")]),a._v(" "),e("li",[a._v("老生代中的"),e("strong",[a._v("对象为存活时间较长或常驻内存的对象")]),a._v("。")]),a._v(" "),e("li",[a._v("V8堆的整体大小就是新生代所用内存加上老生代所有内存。前面提到的--max-old-space-size用来设置老生代内存空间的最大值，--max-new-space-size用来设置新生代内存空间的最大值。")])]),a._v(" "),e("h2",{attrs:{id:"新生代垃圾回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新生代垃圾回收"}},[a._v("#")]),a._v(" 新生代垃圾回收:")]),a._v(" "),e("blockquote",[e("p",[a._v("新生代中的对象主要通过Scavenge算法进行垃圾回收。在Scavenge的具体实现中，主要采用Cheney算法。")])]),a._v(" "),e("ol",[e("li",[a._v("Cheney算法是一种采用复制的方式实现的垃圾回收算法，它将堆内存一分为二，这两个空间中只有一个处于使用中，一个处于闲置状态。")]),a._v(" "),e("li",[a._v("处于是使用状态的空间称为From空间，处于闲置的空间称为To空间。")]),a._v(" "),e("li",[a._v("分配对象时，先是在From空间中进行分配，当开始垃圾回收时，会检查From空间中的存活对象，并将这些存活对象复制到To空间中，而非存活对象占用的空间被释放。完成复制后，From空间和To空间的角色互换。")]),a._v(" "),e("li",[a._v("简而言之，垃圾回收过程中，就是通过将存活对象在两个空间中进行复制。")]),a._v(" "),e("li",[a._v("Scavenge算法的缺点是只能使用堆内存中的一半，但由于它只复制存活的对象，对于生命周期短的场景存活对象只占少部分，所以在时间效率上有着优异的表现。")])]),a._v(" "),e("h3",{attrs:{id:"新生代对象的晋升"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新生代对象的晋升"}},[a._v("#")]),a._v(" 新生代对象的晋升:")]),a._v(" "),e("blockquote",[e("p",[a._v("以上所说的是在纯Scavenge算法中，但是在分代式垃圾回收的前提下，From空间中存活的对象在复制到To空间之前需要进行检查，在一定条件下，需要将存活周期较长的对象移动到老生代中，这个过程称为对象晋升。\n对象晋升的条件有两个:")])]),a._v(" "),e("ol",[e("li",[a._v("一种是对象是否经历过Scacenge回收：对象从 From 空间复制 To 空间时，会检查对象的内存地址来判断对象是否已经经过一次Scavenge回收。若经历过，则将对象从 From 空间复制到老生代中；若没有经历，则复制到 To 空间。")]),a._v(" "),e("li",[a._v("To 空间的内存使用占比是否超过限制。当对象从From 空间复制到 To 空间时，若 To 空间使用超过 25%，则对象直接晋升到老生代中。设置为25%的比例的原因是，当完成 Scavenge 回收后，To 空间将翻转成From 空间，继续进行对象内存的分配。若占比过大，将影响后续内存分配。")])]),a._v(" "),e("h2",{attrs:{id:"老生代垃圾回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#老生代垃圾回收"}},[a._v("#")]),a._v(" 老生代垃圾回收:")]),a._v(" "),e("blockquote",[e("p",[a._v("V8在老生代中主要采用Mark-Sweep和Mark-Compact相结合的方式进行垃圾回收。")])]),a._v(" "),e("ol",[e("li",[a._v("Mark-Sweep是标记清除的意思，它分为标记和清楚两个阶段。(与Scavenge相比，Mark-Sweep并不将内存空间划分为两半，所以不存在浪费一半空间的行为。)")]),a._v(" "),e("li",[a._v("Mark-Sweep在标记阶段遍历堆中的所有对象，并标记活着的对象，在随后的清理阶段中，只清除没有被标记的对象。(与Scavenge相比Scavenge是复制活着的对象,而Mark-Sweep只清理死亡对象。活对象在新生代中只占较小部分，死对象在老生代中只占较小部分，这就是两种回收方式能高效处理的原因)")]),a._v(" "),e("li",[a._v("Mark-Sweep最大的问题在于进行一次标记清楚后，内存会出现不连续的状态，这种会导致后续需要分配一个大对象的时候，无法完成分配，就会提前出发垃圾回收，而这次回收是不必要的。")]),a._v(" "),e("li",[a._v("为了解决Mark-Sweep的内存碎片问题，Mark-Compact被提出来，它是在Mark-Sweep的基础上演变而来的，差别在于对象在标记为死亡后，在整理的过程中，将活着的对象往一端移动，移动完成后，直接清理掉边界外的对象(将需要被回收的对象移动到另一边，然后对需要被回收的对象区域进行整体的垃圾回收)。")])]),a._v(" "),e("h3",{attrs:{id:"由于mark-compact需要移动对象，所以执行速度上，比mark-sweep要慢。所以，v8主要使用mark-sweep算法，然后在当空间内存分配不足时，采用mark-compact算法。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#由于mark-compact需要移动对象，所以执行速度上，比mark-sweep要慢。所以，v8主要使用mark-sweep算法，然后在当空间内存分配不足时，采用mark-compact算法。"}},[a._v("#")]),a._v(" 由于Mark-Compact需要移动对象，所以执行速度上，比Mark-Sweep要慢。所以，V8主要使用Mark-Sweep算法，然后在当空间内存分配不足时，采用Mark-Compact算法。")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("属性")]),a._v(" "),e("th",[a._v("新生代内存")]),a._v(" "),e("th",[a._v("老生代内存")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("存放的对象")]),a._v(" "),e("td",[a._v("存活时间较短的对象")]),a._v(" "),e("td",[a._v("较长或常驻内存的对象")])]),a._v(" "),e("tr",[e("td",[a._v("回收垃圾的方法")]),a._v(" "),e("td",[a._v("Scavenge算法中Cheney算法")]),a._v(" "),e("td",[a._v("Mark-Sweep(标记清除)和Mark-Compact(标记合并/标记整理)")])]),a._v(" "),e("tr",[e("td",[a._v("是否会产生对象晋升")]),a._v(" "),e("td",[a._v("1.会通过Scacenge回收判断将存活周期长的对象移动到老生代内存中;2.当to空间使用率超过25%会将对象晋升")]),a._v(" "),e("td",[a._v("否")])]),a._v(" "),e("tr",[e("td",[a._v("特色")]),a._v(" "),e("td",[a._v("1.内存一分为二,会造成浪费内存;2.工作机制是复制存活的对象,3.因为活着的对象少,所以复制存活的对象效率高")]),a._v(" "),e("td",[a._v("1.不会造成内存浪费2.工作机制是标记活着的对象,清除死亡对象3.因为活着的对象多,死亡的对象少,所以清除死亡的对象效率高")])]),a._v(" "),e("tr",[e("td",[a._v("回收速度")]),a._v(" "),e("td",[a._v("最快")]),a._v(" "),e("td",[a._v("Mark-Sweep:中等,Mark-Compact:最慢")])]),a._v(" "),e("tr",[e("td",[a._v("空间开销")]),a._v(" "),e("td",[a._v("双倍空间（无碎片）")]),a._v(" "),e("td",[a._v("Mark-Sweep:少（有碎片）,Mark-Compact:少（无碎片）")])]),a._v(" "),e("tr",[e("td",[a._v("是否移动对象")]),a._v(" "),e("td",[a._v("是")]),a._v(" "),e("td",[a._v("Mark-Sweep:否,Mark-Compact:是")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);