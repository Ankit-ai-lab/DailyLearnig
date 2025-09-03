/* Perform Swapping and Sorting

Description
You are given an array and an integer K.The challenge is to produce the minimal array after at most K-swaps. Only consecutive pairs of
elements can be swapped.
Find the minimal array possible after at most K-swaps.
 */



function SwapingSorting(n, k, arr) {
  for (let i = 0; i < n && k > 0; i++) {
    let pos = i;

    for (let j = i + 1; j < n && j <= i + k; j++) {
         if (arr[j] < arr[pos]) pos = j;
    }

    let value = arr[pos];
    for (let j = pos; j > i; j--) {
      arr[j] = arr[j - 1];
    }
    arr[i] = value;

    k -= (pos - i);
  }

  return arr.join(" ");
}

console.log(SwapingSorting(3, 2, [5, 3, 1]));   // 1 5 3
console.log(SwapingSorting(5, 3, [8, 9, 1, 1, 2])); // 2 8 9 1 1


/*  */