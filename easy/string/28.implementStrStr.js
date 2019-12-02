/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const len1 = haystack.length;
  const len2 = needle.length;
  if (len2 === 0) return 0;
  if (len1 < len2) return -1;

  for (let i = 0; i <= len1 - len2; i++) {
    let j = 0;
    while (j < len2) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
      j++;
    }
    if (j === len2) {
      return i;
    }
  }
  return -1;
};
// @lc code=end

// 这题考察对字符串的遍历操作。判断子串不匹配时中断预测匹配，后移haystack指针进行下一次匹配。
console.log(strStr('hello', 'ell'));
