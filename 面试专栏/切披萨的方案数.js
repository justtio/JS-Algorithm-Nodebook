/**
 * 给你一个rows x cols大小的矩形披萨和一个整数k，
 * 矩形包含两种字符：‘A’（表示苹果）和‘.'（表示空格）。
 * 你需要切披萨k-1次，得到k块披萨并送给别人。
 * 切披萨的规则如下:
 * 切披萨的每一刀，先要选择是向垂直还是水平方向切
 * 再在矩形的边界上选一个切的位置，将披萨一分为二。
 * 如果垂直地切披萨，那么需要把左边的部分送给一个人，
 * 如果水平的切，那么需要把上面的部分送给一个人，在切完最后一刀后，
 * 需要把剩下的一块送给最后一个人
 * 
 * 请你返回确保每块披萨包含，至少一个苹果的切披萨方案数，
 * 由于答案可能会很大，请返回它模 10^9 + 7 的结果。
 * 
 * 示例 1：
 * 输入：pizza = ["A..","AAA","..."], k = 3
 * 输出：3
 */

const MOD = 1000000007;
function ways(pizza, k) {
  const m = pizza.length;
  const n = pizza[0].length;

  // 步骤1: 预处理，计算每个子矩形中苹果的数量
  const apples = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) {
    for(let j = n - 1; j >= 0; j--) {
      apples[i][j] = apples[i+1][j] + apples[i][j+1] - apples[i+1][j+1] + (pizza[i][j] === 'A' ? 1 : 0);
    }
  }

  //步骤2: 定义状态
  // dp[i][j][c] 表示从(i, j)到右下角的矩形，切c次的方案数。
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(k).fill(0)));

  //步骤3和4: 初始化与填充DP数组
  for(let i = m - 1; i >= 0; i--) {
    for(let j = n - 1; j >= 0; j--) {
      if(apples[i][j] > 0) {
        dp[i][j][0] = 1;
      }

      for(let c = 1; c < k; c++) {
        //水平切
        for(let row = i + 1; row < m; row++) {
          if(apples[i][j] - apples[row][j] > 0) {
            dp[i][j][c] = (dp[i][j][c] + dp[row][j][c - 1]) % MOD;
          }
        }

        //垂直切
        for(let col = j + 1; col < n; col++) {
          if(apples[i][j] - apples[i][col] > 0) {
            dp[i][j][c] = (dp[i][j][c] + dp[i][col][c - 1]) % MOD;
          }
        }
      }
    }
  }
  return dp[0][0][k - 1];
}