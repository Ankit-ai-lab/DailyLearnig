class Solution {
    median(mat) {
        let n = mat.length;      // number of rows
        let m = mat[0].length;   // number of columns
        let arr = [];

        // Flatten the matrix
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                arr.push(mat[i][j]);
            }
        }

        // Sort the array
        arr.sort((a, b) => a - b);

        // Median index
        let medianIndex = Math.floor((n * m) / 2);

        return arr[medianIndex];
    }
}

// 🔹 Example usage
let obj = new Solution();

let mat1 = [[1, 3, 5], [2, 6, 9], [3, 6, 9]];
console.log(obj.median(mat1));  // Output: 5

let mat2 = [[2, 4, 9], [3, 6, 7], [4, 7, 10]];
console.log(obj.median(mat2));  // Output: 6

let mat3 = [[3], [4], [8]];
console.log(obj.median(mat3));  // Output: 4
