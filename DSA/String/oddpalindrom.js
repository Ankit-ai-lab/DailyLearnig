class Solution {
  maxSum(s) {
    let n = s.length, L = Array(n).fill(0), R = Array(n).fill(0);
    for (let c = 0; c < n; c++) for (let l = c, r = c; l >= 0 && r < n && s[l] == s[r]; l--, r++) {
      L[r] = Math.max(L[r], r - l + 1);
      R[l] = Math.max(R[l], r - l + 1);
    }
    for (let i = 1; i < n; i++) L[i] = Math.max(L[i], L[i - 1]);
    for (let i = n - 2; i >= 0; i--) R[i] = Math.max(R[i], R[i + 1]);
    let ans = 0;
    for (let i = 0; i < n - 1; i++) ans = Math.max(ans, L[i] + R[i + 1]);
    return ans;
  }
}

// Example usage:
const sol = new Solution();
console.log(sol.maxSum("xyabacbcz")); // 6  ("aba" + "cbc")
console.log(sol.maxSum("gfgforgeeks")); // 4  ("gfg" + "g")
console.log(sol.maxSum("racecarabc")); // 10 ("racecar" + "aba")
