/**
 * Calculates the edit distance between two strings using dynamic programming.
 *
 * The edit distance is the minimum number of operations required to convert
 * one string into another. The allowed operations are insertion, deletion,
 * and substitution.
 *
 * @param {string} s - The source string.
 * @param {string} t - The target string.
 * @returns {number} The edit distance between the two strings.
 */
function editDistanceDP(s, t) {
  const n = s.length;
  const m = t.length;
  const dp = Array.from({ length: n + 1}, () => Array.from({ length: m + 1}, () => 0));
  for(let i = 1; i <= n; i++) {
    dp[i][0] = i;
  }

  for(let j = 1; j <= m; j++) {
    dp[0][j] = j;
  }

  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= m; j++) {
      if(s.charAt(i - 1) === t.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      }else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[n][m];
}

function editDistanceDPComp(s, t) {
  const n = s.length;
  const t = t.length;
  const dp = new Array(m + 1).fill(0);
  for(let i = 1; i <= n; i++) {
    dp[i] = i;
  }
  for(let i = 1; i <= n; i++) {
    let leftUp = dp[0];
    dp[0] = i;
    for(let j = 1; j <= m; j++) {
      const tmp = dp[j];
      if(s.charAt(i - 1) === t.charAt(j - 1)) {
        dp[j] = leftUp;
      }else {
        dp[j] = Math.min(dp[j - 1], dp[j], leftUp) + 1;
      }
      leftUp = tmp;
    }
  }
  return dp[m];
}