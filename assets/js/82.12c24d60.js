(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{477:function(t,s,a){"use strict";a.r(s);var n=a(56),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_319-灯泡开关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_319-灯泡开关"}},[t._v("#")]),t._v(" [319] 灯泡开关")]),t._v(" "),a("blockquote",[a("p",[t._v("初始时有 n 个灯泡关闭。 第 1 轮，你打开所有的灯泡。 第 2 轮，每两个灯泡你关闭一次。 第 3轮，每三个灯泡切换一次开关（如果关闭则开启，如果开启则关闭）。第 i 轮，每 i 个灯泡切换一次开关。 对于第 n 轮，你只切换最后一个灯泡的开关。")]),t._v(" "),a("p",[t._v("找出 n 轮后有多少个亮着的灯泡。")]),t._v(" "),a("p",[t._v("示例:")]),t._v(" "),a("p",[t._v("输入: 3")]),t._v(" "),a("p",[t._v("输出: 1")]),t._v(" "),a("p",[t._v("解释:")]),t._v(" "),a("p",[t._v("初始时, 灯泡状态 [关闭, 关闭, 关闭].")]),t._v(" "),a("p",[t._v("第一轮后, 灯泡状态 [开启, 开启, 开启].")]),t._v(" "),a("p",[t._v("第二轮后, 灯泡状态 [开启, 关闭, 开启].")]),t._v(" "),a("p",[t._v("第三轮后, 灯泡状态 [开启, 关闭, 关闭].")]),t._v(" "),a("p",[t._v("你应该返回 1，因为只有一个灯泡还亮着。")])]),t._v(" "),a("p",[t._v("这道题与计算机算法无关，是一道考察数学归纳能力的推理题。")]),t._v(" "),a("p",[t._v("我们知道，最后判断某一个灯泡为亮着的话，那么它一定经过了奇数次的开关动作。若像题目这样从1-n的间隔依次进行的话，那么题目就可以转换为，如果某个位置的灯泡亮着，那么该位置必定具有奇数个约数。")]),t._v(" "),a("p",[t._v("那么我们知道，具有奇数个约数的数字必为完全平方数（约数一定是成对存在的，奇数个约数说明其中有一对约数为同一个数字，即被约数为该约数的完全平方数）。那么题目就又转化为了求1-n中存在多少个完全平方数了。那么答案也就显而易见了，将该数开方向下取整即可。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("bulbSwitch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sqrt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);