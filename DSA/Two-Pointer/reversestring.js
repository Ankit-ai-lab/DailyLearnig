/* 344. Reverse String
Easy
Topics
premium lock icon
Companies
Hint
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"] */

let s =  ["h","e","l","l","o"]

function reverse(s){
  
let n = s.length
  let i =0,j=n-1
//let char = s.split(" ")
while(i<j){
//    [char[i], char[j]] = [char[j], char[i]]
    [s[i], s[j]] = [s[j], s[i]]
    i++,
    j--
}
console.log(s.join(""))


}
reverse(s)