// 暴力搜索
function knapsackDFS(wgt, val, i, c) {
  if(i === 0 || c === 0) {
    return 0;
  }

  if(wgt[i - 1] > c) {
    return knapsackDFS(wgt, val, i - 1, c);
  }

  const no = knapsackDFS(wgt, val, i - 1, c);
  const yes = val[i - 1] + knapsackDFS(wgt, val, i - 1, c - wgt[i - 1]);
  return Math.max(no, yes);
}

//记忆化搜索
function knapsackDFSMem(wgt, val, mem, i, c) {
  if(i === 0 || c === 0) {
    return 0;
  }
  if(mem[i][c] !== -1) {
    return mem[i][c];
  }
  if(wgt[i - 1] > c) {
    return knapsackDFSMem(wgt, val, mem, i - 1, c);
  }

  const no = knapsackDFSMem(wgt, val, mem, i - 1, c);
  const yes = knapsackDFSMem(wgt, val, mem, i - 1, c - wgt[i - 1]) + val[i - 1]

  mem[i][c] =  Math.max(no, yes);
  return mem[i][c];
}

//动态规划
function knapsackDP(wgt, val, cap) {
  const n = wgt.length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(cap + 1).fill(0));
  for(let i = 1; i <= n; i++) {
    for(let c = 1; c <= cap; c++){
      if(wgt[i - 1] > c) {
        dp[i][c] = dp[i - 1][c];
      }else {
        dp[i][c] = Math.max(dp[i - 1][c], dp[i - 1][c - wgt[i - 1]] + val[i - 1]);
      }
    }
  }
  return dp[n][cap];
}

//空间优化后的动态规划
function knapsackDPComp(wgt, val, cap) {
  const n = wgt.length;
  const dp = new Array(cap + 1).fill(0);
  for(let i = 0; i < n; i++) {
    for(let c = cap; c >= 1; c--) {
      if(wgt[i - 1] <= c) {
        dp[c] = Math.max(dp[c], dp[c - wgt[i - 1]] + val[i - 1]);
      }
    }
  }
  return dp[cap];
}