function coinChangeDP(coins, amt) {
  const n = coins.length;
  const Max = amt + 1;
  const dp = Array.from({ length: n + 1}, () => Array.from({ length: amt + 1}, () => 0));
  for(let a = 1; a <= amt; a++) {
    dp[0][a] = Max;
  }

  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= amt; j++) {
      if(coins[j - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      }else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i - 1]] + 1);
      }
    }
  }
  return dp[n][amt] === Max ? -1 : dp[n][amt];
}

function coinChangeDPComp(coins, amt) {
  const n = coins.length;
  const Max = amt + 1;
  const dp = new Array(amt + 1).fill(Max);
  dp[0] = 0;
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= amt; j++) {
      if(coins[i - 1] > j) {
        dp[j] = dp[j];
      }else {
        dp[j] = Math.min(dp[j], dp[j - coins[i - 1]] + 1);
      }
    }
  }
  return dp[amt] === Max ? -1 : dp[amt];
}

//零钱兑换：贪心解法
function coinChangeGreedy(coins, amt) {
  let i = coins.length - 1;
  let count = 0;
  while(amt > 0) {
    while(i > 0 && coins[i] > amt) {
      i--;
    }
    amt -= coins[i];
    count++;
  }
  return amt === 0 ? count : -1;
}



//零钱兑换问题2
//可重复使用同一种面值，凑出目标金额的所有情况
function coinChangeIIDP(coins, amt) {
  const n = coins.length;
  const dp = Array.from({ length: n + 1}, () => { Array.from({ length: amt + 1}, () => 0)});
  for(let i = 1; i <= n; i++) {
    dp[i][0] = 1;
  }

  for(let i = 1; i <= n; i++) {
    for(let a = 1; a <= amt; a++) {
      if(coins[i - 1] > j) {
        dp[i][a] = dp[i - 1][a]
      }else {
        dp[i][a] = dp[i - 1][a] + dp[i][a - coins[i - 1]];
      }
    }
  }
  return dp[n][amt];
}

function coinChangeIIDPComp(coins, amt) {
  const n = coins.length;
  const dp = new Array(amt + 1).fill(0);
  dp[0] = 1;
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= amt; j++) {
      if(coins[i - 1] > j){
        dp[j] = dp[j];
      }else {
        dp[j] = dp[j] + dp[j - coins[i - 1]];
      }
    }
  }
  return dp[amt];
}
