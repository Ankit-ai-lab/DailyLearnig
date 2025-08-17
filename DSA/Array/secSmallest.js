function findSmallestAndSecondSmallestSinglePass(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    return "All elements are identical or less than two unique elements.";
  }

  return { smallest, secondSmallest };
}

const numbers2 = [1, 7, 5, 8];
const result2 = findSmallestAndSecondSmallestSinglePass(numbers2);
console.log(result2); // Output: "All elements are identical or less than two unique elements."