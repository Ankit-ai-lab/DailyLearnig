function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10


function sumArray(arr, n) {
  if (n === 0) return 0;
  return arr[n - 1] + sumArray(arr, n - 1);
}
console.log(sumArray([1, 2, 3, 4], 4)); // 10   
console.log(sumArray([5, 5, 5], 3));    // 15