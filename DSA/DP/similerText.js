/* Similar texts

Description

Virat and Rohit don't like each other though they have
many similarties. You are given 2 texts (strings) written
by Virat and Rohit. Your task is to write a program that
calculates the length of longest similar characters in the
text written by both.
If string written by Virat is "AGGTAB" and that by Rohit is
"GXTXAYB", then the longest set of similar characters is
"GTAB", which is of length 4.
Please note that the longest set of similar characters
need not be continuous. */


function similer(virat,rohit){
  let v = virat.length
  let r = rohit.length
      const dp = Array(v+ 1).fill(null).map(() => Array(r+ 1).fill(0));
   for (let i = 1; i <= v; i++) {
        for (let j = 1; j <= r; j++) {
            if (virat[i - 1] === rohit[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[v][r]
}



const virat = "AGGTAB";
const rohit = "GXTXAYB";

const length = lcsLength(virat, rohit);
console.log(`The length of the Longest Common Subsequence is: ${length}`)