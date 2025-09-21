function twoSum(nums, target) {
  const numMap = {}; // Create an empty object to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum; // Calculate the complement needed

    // Check if the complement already exists in the map
    if (numMap.hasOwnProperty(complement)) {
      // If found, return the index of the complement and the current index
      return [numMap[complement], i];
    }

    // If not found, add the current number and its index to the map
    numMap[currentNum] = i;
  }

  // If no solution is found after iterating through the entire array,
  // it's good practice to return an empty array or throw an error,
  // although the problem often guarantees a solution exists.
  return []; 
}

// Example usage:
const numbers = [2, 7, 11, 15];
const targetSum = 9;
const result = twoSum(numbers, targetSum);
console.log(result); // Output: [0, 1] (because numbers[0] + numbers[1] = 2 + 7 = 9)

const anotherNumbers = [3, 2, 4];
const anotherTarget = 6;
const anotherResult = twoSum(anotherNumbers, anotherTarget);
console.log(anotherResult); // Output: [1, 2] (because numbers[1] + numbers[2] = 2 + 4 = 6)