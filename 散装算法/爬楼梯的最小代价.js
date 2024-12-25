function minCostClimbingStairsDP(cost) {
  const n = cost.length - 1;
  if(n === 1 || n === 2) {
    return cost[n];
  }
  const dp = new Array(n + 1);
  dp[1] = cost[1];
  dp[2] = cost[2];
  for(let i = 3; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return dp[n];
}

function minCostClimbingStairsDPComp(cost) {
  const n = cost.length - 1;
  if(n === 1 || n === 2) return cost[n];

  let a = cost[1];
      b = cost[2];
  
  for(let i = 3; i <= n; i++) {
    const tmp = b;
    b = Math.min(a, b) + cost[i];
    a = tmp;
  }
  return b;
}

//带约束爬楼梯
//不能连续两轮跳一阶
function climbingStairsConstrainDP(n) {
  if(n === 1 || n === 2) {
    return 1;
  }
  const dp = Array.from(new Array(n + 1), () => new Array(3));
  dp[1][1] = 1;
  dp[1][2] = 0;
  dp[2][1] = 0;
  dp[2][2] = 1;
  for(let i = 3; i <= n; i++) {
    dp[i][1] = dp[i - 1][2];
    dp[i][2] = dp[i - 1][1] + dp[i - 1][2];
  }
  return dp[n][1] + dp[n][2];
}