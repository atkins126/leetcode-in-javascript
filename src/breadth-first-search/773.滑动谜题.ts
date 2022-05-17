/*
 * @lc app=leetcode.cn id=773 lang=typescript
 *
 * [773] 滑动谜题
 *
 * https://leetcode.cn/problems/sliding-puzzle/description/
 *
 * algorithms
 * Hard (70.65%)
 * Likes:    258
 * Dislikes: 0
 * Total Accepted:    27.7K
 * Total Submissions: 39.3K
 * Testcase Example:  '[[1,2,3],[4,0,5]]'
 *
 * 在一个 2 x 3 的板上（board）有 5 块砖瓦，用数字 1~5 来表示, 以及一块空缺用 0 来表示。一次 移动 定义为选择 0
 * 与一个相邻的数字（上下左右）进行交换.
 *
 * 最终当板 board 的结果是 [[1,2,3],[4,5,0]] 谜板被解开。
 *
 * 给出一个谜板的初始状态 board ，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：board = [[1,2,3],[4,0,5]]
 * 输出：1
 * 解释：交换 0 和 5 ，1 步完成
 *
 *
 * 示例 2:
 *
 *
 *
 *
 * 输入：board = [[1,2,3],[5,4,0]]
 * 输出：-1
 * 解释：没有办法完成谜板
 *
 *
 * 示例 3:
 *
 *
 *
 *
 * 输入：board = [[4,1,2],[5,0,3]]
 * 输出：5
 * 解释：
 * 最少完成谜板的最少移动次数是 5 ，
 * 一种移动路径:
 * 尚未移动: [[4,1,2],[5,0,3]]
 * 移动 1 次: [[4,1,2],[0,5,3]]
 * 移动 2 次: [[0,1,2],[4,5,3]]
 * 移动 3 次: [[1,0,2],[4,5,3]]
 * 移动 4 次: [[1,2,0],[4,5,3]]
 * 移动 5 次: [[1,2,3],[4,5,0]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * board.length == 2
 * board[i].length == 3
 * 0 <= board[i][j] <= 5
 * board[i][j] 中每个值都 不同
 *
 *
 */

// @lc code=start
function slidingPuzzle(board: number[][]): number {
  const rowLen = board.length;
  const colLen = board[0].length;

  const target = '123450';
  // 将二维拍扁成一维，并构造为字符串，方便作为该种情况的 key
  let start = '';
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      start += board[i][j];
    }
  }
  // 构造每一个节点的邻接节点索引
  const neighbors: number[][] = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4]
  ];

  const queue: string[] = [start];
  const visited: Set<string> = new Set([start]);

  let step = 0;
  while (queue.length) {
    let len = queue.length;
    while (len--) {
      const curr = queue.pop();
      if (curr === target) {
        return step;
      }
      // 找到数字为0的索引
      let index = curr.split('').findIndex(ch => ch === '0');

      for (const neighborIndex of neighbors[index]) {
        const swaped = swap(neighborIndex, index, curr);
        if (!visited.has(swaped)) {
          queue.unshift(swaped);
          visited.add(swaped);
        }
      }
    }
    step += 1;
  }
  return -1;

  function swap(indexA: number, indexB: number, s: string) {
    const tempA = s[indexA];
    const tempB = s[indexB];
    const sArr = s.split('');
    sArr[indexA] = tempB;
    sArr[indexB] = tempA;
    return sArr.join('');
  }
}
// @lc code=end

(() => {
  const board = [
    [4, 1, 2],
    [5, 0, 3]
  ];
  console.log(slidingPuzzle(board));
})();
