function minPathSumDP(grid) {
  const n = grid.length,
      m = grid[0].length;
  
  const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  dp[0][0] = grid[0][0];

  for(let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for(let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for(let i = 1; i < n; i++) {
    for(let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[n - 1][m - 1];
}

function minPathSumDPComp(grid) {
  const n = grid.length;
  const m = grid[0].length;

  const dp = new Array(m);
  dp[0] = grid[0][0];
 
  for(let i = 1; i < n; i++) {
    dp[0] = dp[0] + grid[i][0];
    for(let j = 1; j < m; j++) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
    }
  }
  return dp[m - 1];
}