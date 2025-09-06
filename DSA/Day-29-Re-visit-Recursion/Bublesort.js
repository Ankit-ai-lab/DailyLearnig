function BubbleSort(n, arr) {
  if (n <= 1) return arr;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
    }
  }

  return BubbleSort(n - 1, arr); 
}


let arr = [5, 3, 8, 4, 2];
console.log(BubbleSort(arr.length, arr)); 

