/* Similar texts

Description
Virat and Rohit don't like each other though they have many similarties. You are given 2 texts (strings) written by Virat and
Rohit. Your task is to write a program that calculates the length of longest similar characters in the text written by both.
If string written by Virat is "AGGTAB" and that by Rohit is "GXTXAYB", then the longest set of similar characters is "GTAB", which
is of length 4.
Please note that the longest set of similar characters need not be continuous.

Input Description
Input Format :
First line contains text/string written by Virat
Second line contains text/string written by Rohit
Constraints :
Length of string <= 1000

Output Description
Print the length as per conditions given in problem statement

Sample Input 1 Copy

AEDFHR
ABCDGH

Sample Output 1 Copy

3 */

// Function to find length of Longest Common Subsequence (LCS)
function longestCommonSubsequence(str1, str2) {
    let n = str1.length; // Length of first string
    let m = str2.length; // Length of second string

    // Create a 2D array (matrix) to store LCS lengths
    // dp[i][j] will store LCS length for str1[0..i-1] and str2[0..j-1]
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    // Fill dp table
    for (let i = 1; i <= n; i++) {        // Loop over each char in str1
        for (let j = 1; j <= m; j++) {    // Loop over each char in str2
            if (str1[i - 1] === str2[j - 1]) {
                // If characters match, 1 + LCS of previous part
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                // If not match, take the maximum LCS possible by
                // either ignoring char from str1 or from str2
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The bottom-right cell will have the length of LCS for full strings
    return dp[n][m];
}

// ----------------------------
// Reading input (for example)
let str1 = "AEDFHR";
let str2 = "ABCDGH";

console.log(longestCommonSubsequence(str1, str2)); // Output: 3
