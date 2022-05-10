/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 *
 * https://leetcode.cn/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (69.19%)
 * Likes:    1245
 * Dislikes: 0
 * Total Accepted:    361.8K
 * Total Submissions: 522.9K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 *
 * 说明：每次只能向下或者向右移动一步。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
 * 输出：7
 * 解释：因为路径 1→3→1→1→1 的总和最小。
 *
 *
 * 示例 2：
 *
 *
 * 输入：grid = [[1,2,3],[4,5,6]]
 * 输出：12
 *
 *
 *
 *
 * 提示：
 *
 *
 * m == grid.length
 * n == grid[i].length
 * 1
 * 0
 *
 *
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  const rowLen = grid.length;
  const colLen = grid[0].length;

  const dp: number[][] = Array(rowLen)
    .fill(0)
    .map(x => Array(colLen).fill(0));

  for (let i = rowLen - 1; i >= 0; i--) {
    for (let j = colLen - 1; j >= 0; j--) {
      // base case, 当路径起点为右下角时，最短路径就是和就是自身
      if (i + 1 === rowLen && j + 1 === colLen) {
        dp[i][j] = grid[rowLen - 1][colLen - 1];
        continue;
      }
      // 指针越界，越界值无效
      const pathSum1 = i + 1 === rowLen ? Number.MAX_VALUE : dp[i + 1][j];
      const pathSum2 = j + 1 === colLen ? Number.MAX_VALUE : dp[i][j + 1];
      dp[i][j] = Math.min(pathSum1, pathSum2) + grid[i][j];
    }
  }
  return dp[0][0];
}
// @lc code=end

// function minPathSum(grid: number[][]): number {
//   const rowLen = grid.length;
//   const colLen = grid[0].length;

//   const dp: number[][] = Array(rowLen)
//     .fill(0)
//     .map(x => Array(colLen).fill(0));

//   const res = backtrack(0, 0);
//   return res;

//   function backtrack(row: number, col: number): number {
//     // 越界，返回非法值，由于本题求最小值，因此设置为MAX_VALUE
//     if (row >= rowLen || col >= colLen) return Number.MAX_VALUE;
//     // 当前节点值
//     const val = grid[row][col];

//     // 递归终止条件，当路径起点为右下角时，最短路径就是和就是自身
//     if (row === rowLen - 1 && col === colLen - 1) return val;

//     // 先查memo，看是否已经计算过
//     if (dp[row][col] > 0) {
//       return dp[row][col];
//     }

//     // 做选择
//     const sum1 = backtrack(row + 1, col);
//     const sum2 = backtrack(row, col + 1);

//     dp[row][col] = Math.min(sum1, sum2) + val;
//     return dp[row][col];
//   }
// }

(() => {
  const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ];
  console.log(minPathSum(grid));
})();
