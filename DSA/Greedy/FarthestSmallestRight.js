/* You are given an array arr[]. For each element at index i (0-based indexing), find the farthest index j to the right (i.e., j > i) such that arr[j] < arr[i]. If no such index exists for a given position, return -1 for that index. Return the resulting array of answers.

Examples:

Input: arr[] = [2, 5, 1, 3, 2]
Output: [2, 4, -1, 4, -1]
Explanation: arr[0] = 2: Farthest smaller element to the right is arr[2] = 1.
arr[1] = 5: Farthest smaller element to the right is arr[4] = 2.
arr[2] = 1: No smaller element to the right → -1.
arr[3] = 3: Farthest smaller element to the right is arr[4] = 2.
arr[4] = 2: No elements to the right → -1.
Input: arr[] = [2, 3, 5, 4, 1] 
Output: [4, 4, 4, 4, -1]
Explanation: arr[4] is the farthest smallest element to the right for arr[0], arr[1], arr[2] and arr[3]. */


function farthestSmallerRight(arr) {
    let n = arr.length;
    let result = new Array(n).fill(-1);
    let stack = [];

    for (let i = n - 1; i >= 0; i--) {
        // Pop all bigger/equal elements
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        if (stack.length > 0) {
            let j = stack[stack.length - 1]; // nearest smaller
            // Jump forward if j already knows a farther smaller
            if (result[j] !== -1) {
                j = result[j];
            }
            result[i] = j;
        }

        stack.push(i);
    }

    return result;
}

// Example 1
console.log(farthestSmallerRight([2, 5, 1, 3, 2])); // [2, 4, -1, 4, -1]

// Example 2
console.log(farthestSmallerRight([2, 3, 5, 4, 1])); // [4, 4, 4, 4, -1]
