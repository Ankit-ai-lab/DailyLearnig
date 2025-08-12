/* Question: Sum Exists or Not
Description:
Given an array of non-negative integers and a value sum, determine if there exists a subset of the given set whose sum equals sum.
If yes, print "yes". Otherwise, print "no". */

function subsetSum(arr, target) {
    let n = arr.length;

    // Create DP table: dp[i][j] = can we make sum j using first i elements?
    let dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));

    // Base case: sum 0 is always possible
    for (let i = 0; i <= n; i++) {
        dp[i][0] = true;
    }

    // Fill DP table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= target; j++) {
            if (arr[i - 1] <= j) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[n][target] ? "yes" : "no";
}

// Example usage
console.log(subsetSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // Output: "yes"
