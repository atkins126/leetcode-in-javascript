(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{522:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_141-环形链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_141-环形链表"}},[t._v("#")]),t._v(" [141] 环形链表")]),t._v(" "),a("blockquote",[a("p",[t._v("给定一个链表，判断链表中是否有环。")]),t._v(" "),a("p",[t._v("为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。")]),t._v(" "),a("p",[t._v("示例 1：")]),t._v(" "),a("p",[t._v("输入：head = [3,2,0,-4], pos = 1")]),t._v(" "),a("p",[t._v("输出：true")]),t._v(" "),a("p",[t._v("解释：链表中有一个环，其尾部连接到第二个节点。")]),t._v(" "),a("p",[t._v("示例 2：")]),t._v(" "),a("p",[t._v("输入：head = [1,2], pos = 0")]),t._v(" "),a("p",[t._v("输出：true")]),t._v(" "),a("p",[t._v("解释：链表中有一个环，其尾部连接到第一个节点。")]),t._v(" "),a("p",[t._v("示例 3：")]),t._v(" "),a("p",[t._v("输入：head = [1], pos = -1")]),t._v(" "),a("p",[t._v("输出：false")]),t._v(" "),a("p",[t._v("解释：链表中没有环。")]),t._v(" "),a("p",[t._v("进阶：")]),t._v(" "),a("p",[t._v("你能用 O(1)（即，常量）内存解决此问题吗？")])]),t._v(" "),a("p",[t._v("这道题如果不限制空间复杂度可以参考图的遍历，额外拿出一个空间为n的哈希表，每遍历到一个值就查表当前节点是否已被记录过，若没有则记录当前节点，若有则当前节点一定为环的起始点，这样就可以很轻松地测出链表中有环了。代码很简单就不列出了。")]),t._v(" "),a("p",[t._v("但题目要求空间复杂度为O(1)，并且也不需要知道环的起始点位置。")]),t._v(" "),a("p",[t._v("我们知道，避免遍历在环中死循环除了可以用哈希表记录的方式，还可以用快慢指针记录的方式。慢指针一个一个遍历，快指针两个两个遍历，只要存在环，那么快慢指针一定有机会相遇。若快指针指向了null，说明链表能被遍历完，那么一定不存在环。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasCycle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ListNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" quick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" quick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    quick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" quick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);