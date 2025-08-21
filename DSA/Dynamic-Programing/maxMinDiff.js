/* Maximize the minimum difference between k elements
Difficulty: MediumAccuracy: 71.31%Submissions: 6K+Points: 4
Given an array arr[] of integers and an integer k, select k elements from the array such that the minimum absolute difference between any two of the selected elements is maximized. Return this maximum possible minimum difference.

Examples:

Input: arr[] = [2, 6, 2, 5], k = 3
Output: 1
Explanation: 3 elements out of 4 elements are to be selected with a minimum difference as large as possible. Selecting 2, 2, 5 will result in minimum difference as 0. Selecting 2, 5, 6 will result in minimum difference as 6 - 5 = 1.
Input: arr[] = [1, 4, 9, 0, 2, 13, 3], k = 4
Output: 4
Explanation: Selecting 0, 4, 9, 13 will result in minimum difference of 4, which is the largest minimum difference possible. */

function maxmindiff(arr, k) {
  arr.sort((a, b) => a - b); // sort array first
  const n = arr.length;

  // Greedy check: can we pick k elements with at least `dist` gap?
  const canPick = (dist) => {
    let count = 1, last = arr[0];
    for (let i = 1; i < n && count < k; i++) {
      if (arr[i] - last >= dist) {
        count++;
        last = arr[i];
      }
    }
    return count >= k;
  };

  let low = 0, high = arr[n - 1] - arr[0], ans = 0;

  while (low <= high) {
    const mid = (low + high) >> 1; // faster mid
    if (canPick(mid)) {
      ans = mid;        // mid works, try bigger
      low = mid + 1;
    } else {
      high = mid - 1;   // mid too big, try smaller
    }
  }
  return ans;
}

// Example runs
console.log(maxmindiff([2, 6, 2, 5], 3));        // 1
console.log(maxmindiff([1, 4, 9, 0, 2, 13, 3], 4)); // 4
