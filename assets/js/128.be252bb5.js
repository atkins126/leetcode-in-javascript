(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{523:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_142-环形链表-ii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_142-环形链表-ii"}},[t._v("#")]),t._v(" [142] 环形链表 II")]),t._v(" "),a("blockquote",[a("p",[t._v("给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。")]),t._v(" "),a("p",[t._v("为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。")]),t._v(" "),a("p",[t._v("说明：不允许修改给定的链表。")]),t._v(" "),a("p",[t._v("示例 1：")]),t._v(" "),a("p",[t._v("输入：head = [3,2,0,-4], pos = 1")]),t._v(" "),a("p",[t._v("输出：tail connects to node index 1")]),t._v(" "),a("p",[t._v("解释：链表中有一个环，其尾部连接到第二个节点。")]),t._v(" "),a("p",[t._v("示例 2：")]),t._v(" "),a("p",[t._v("输入：head = [1,2], pos = 0")]),t._v(" "),a("p",[t._v("输出：tail connects to node index 0")]),t._v(" "),a("p",[t._v("解释：链表中有一个环，其尾部连接到第一个节点。")]),t._v(" "),a("p",[t._v("示例 3：")]),t._v(" "),a("p",[t._v("输入：head = [1], pos = -1")]),t._v(" "),a("p",[t._v("输出：no cycle")]),t._v(" "),a("p",[t._v("解释：链表中没有环。")]),t._v(" "),a("p",[t._v("进阶：")]),t._v(" "),a("p",[t._v("你是否可以不用额外空间解决此题？")])]),t._v(" "),a("p",[t._v("这道题跟"),a("code",[t._v("141.环形链表")]),t._v("太像了，唯一的区别就是该题已知存在环，然后要求出环起始的位置。")]),t._v(" "),a("p",[t._v("如果直接用"),a("code",[t._v("141.环形链表")]),t._v("的方法一做其实是直接AC的，因为第一次找到的已标记的位置一定第一个被二次遍历到的位置，即环的起始位置。")]),t._v(" "),a("p",[t._v("那么问题的难点又在于不使用额外空间了。这里使用到的方法是，若快慢指针相遇了，则将慢指针移动到头结点，然后两指针以相同的速度遍历，再次相遇时的位置即为环的起始位置。")]),t._v(" "),a("p",[t._v("这个题的解法更偏向于数学思维一点，我们可以用数学来证明算法的正确性。")]),t._v(" "),a("p",[t._v("因为快指针走过的距离为慢指针的两倍，设慢指针走过的距离为a，则快指针走过的距离为2a，设环起点距离相遇点的距离为x，可得出起始点到环节点的距离为 "),a("code",[t._v("a - x")]),t._v("，快指针距离环起点的距离为 "),a("code",[t._v("2a - a - x")]),t._v("（比慢指针多走的距离减去环起点到相遇点的距离），是相等的。还是不理解的话其实只需要画个图就很清晰了。")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detectCycle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ListNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ListNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若链表数量小于等于1，则不可能存在环")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" quick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("quick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" quick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    quick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" quick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若快慢指针不相遇，则说明无环")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" quick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设慢指针走过的距离为a，环起点距离相遇点的距离为x")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 则：快指针走过的距离为2a，起始点到环起点的距离为 a - x")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可得：快指针此时距离环起点的距离为 (2a - a) - x（比慢指针多走的距离减去环起点到相遇点的距离） = a - x")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因此，起始点到环起点的距离一定等于快指针到环起点的距离，只需要步进a-x步，则快指针所在的位置即为环起点。")]),t._v("\n  slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" quick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    slow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" slow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    quick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相遇位置则为环起始位置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" quick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);