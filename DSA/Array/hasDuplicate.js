/* Contains Duplicate
Solved 
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false */
let nums = [1, 2, 3, 3];

function hasduplicate(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        res.push(nums[i]);
      }
    }
  }
  return res; // return duplicates
}

console.log(hasduplicate(nums)); // [3]

console.log(hasduplicate(nums))