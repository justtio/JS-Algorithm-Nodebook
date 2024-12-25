function unboundedknapsackDP(wgt, val, cap) {
  const n = wgt.length;
  const dp = Array.from({ length: n + 1}, () => Array.from({ length: cap + 1}, () => 0));

  for(let i = 1; i <= n; i++) {
    for(let c = 1; c <= cap; c++) {
      if(wgt[i - 1] > c) {
        dp[i][c] = dp[i - 1][c];
      }else {
        dp[i][c] = Math.max(dp[i - 1][c], dp[i][c - wgt[i - 1]] + val[i - 1]);
      }
    }
  }
  return dp[n][cap]
}

//空间优化
function unboundedknapsackDPComp(wgt, val, cap) {
  const n = wgt.length;
  const dp = Array.from({ length: cap + 1}, () => 0);
  for(let i = 1; i <= n; i++) {
    for(let c = 1; c <= cap; c++){
      if(wgt[i - 1] > c) {
        dp[c] = dp[c];
      }else {
        dp[c] = Math.max(dp[c], dp[c - wgt[i - 1]] + val[i - 1]);
      }
    }
  }
  return dp[cap];
}