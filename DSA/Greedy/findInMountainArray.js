/* Find in Mountain Array
(This problem is an interactive problem.)

An array arr is called a mountain array if and only if:

arr.length >= 3
There exists some index i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
You are given a mountain array mountainArr and an integer target, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.

You cannot access the mountain array directly. You may only access the array using a MountainArray interface:

MountainArray.get(k) returns the element of the array at index k (0-indexed).
MountainArray.length() returns the length of the array.
You can only make at most 100 calls to the function get(). Submissions making more than 100 calls will be judged as Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

Example 1:

Input: mountainArr = [2,4,5,2,1], target = 2

Output: 0
Example 2:

Input: mountainArr = [1,2,3,4,2,1], target = 6

Output: -1
Constraints:

3 <= mountainArr.length() <= 10,000
0 <= target, mountainArr.get(index) <= 1,000,000,000
 */
class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        const n = mountainArr.length();

        // STEP 1: Find peak index
        let left = 0, right = n - 1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            let midVal = mountainArr.get(mid);
            let nextVal = mountainArr.get(mid + 1);

            if (midVal < nextVal) {
                left = mid + 1;   // move right
            } else {
                right = mid;      // move left
            }
        }
        const peak = left;

        // STEP 2: Search in ascending part
        let idx = this.binarySearch(mountainArr, 0, peak, target, true);
        if (idx !== -1) return idx;

        // STEP 3: Search in descending part
        return this.binarySearch(mountainArr, peak + 1, n - 1, target, false);
    }

    // Optimized binary search (no extra calls)
    binarySearch(arr, left, right, target, asc) {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const val = arr.get(mid);

            if (val === target) return mid;

            if (asc) {
                if (val < target) left = mid + 1;
                else right = mid - 1;
            } else {
                if (val < target) right = mid - 1;
                else left = mid + 1;
            }
        }
        return -1;
    }
}
