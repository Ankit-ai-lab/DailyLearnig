function recursiveBubbleSort(arr, n = arr.length) {
  // Base case: If array size is 1 or less, it's sorted
  if (n <= 1) {
    return arr;
  }

  // Perform one pass of Bubble Sort
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // Swap elements
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  // Recursively call for the remaining n-1 elements
  return recursiveBubbleSort(arr, n - 1);
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = recursiveBubbleSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]