function way(n) {
  if (n === 0) return 1;
  if (n < 0) return 0;

  let dp = new Array(n + 1).fill(0);
  dp[0] = 1; // There's 1 way to reach 0

  for (let i = 1; i <= n; i++) {
    if (i - 1 >= 0) dp[i] += dp[i - 1];
    if (i - 2 >= 0) dp[i] += dp[i - 2];
    if (i - 3 >= 0) dp[i] += dp[i - 3];
  }

  return dp[n];
}
