function similartexts(str1, str2) {
  let n = str1.length;
  let m = str2.length;

  // Create DP table
  let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[n][m];
}


console.log(similartexts("AEDFHR", "ABCDGH")); 
console.log(similartexts("AGGTAB", "GXTXAYB")); 
