/* 
📝 Question: Find H-Index

You are given an array citations[], where citations[i] is the number of citations for the i-th paper.
The H-Index is the maximum number H such that the researcher has at least H papers with citations ≥ H.

🔹 Input / Output Examples
Example 1

Input:

citations = [3, 0, 5, 3, 0]


Output:

3

Example 2

Input:

citations = [5, 1, 2, 4, 1]


Output:

2

Example 3

Input:

citations = [0, 0]


Output:

0

🔹 Solution Logic (Step by Step)

Sort the array in descending order.

Start from the first paper and count how many papers have citations ≥ their position index.
(Index is counted from 1, not 0.)

The maximum count that satisfies this condition is the H-index.
*/

function hindex(citations){
    citations.sort((a,b)=>b-a)
let h = 0;
    for(let i =0;i<citations.length;i++){
if(citations[i]>=i+1){
    h=i+1
}else{
    break
}
    }
    return h

}

let citations = [3, 0, 5, 3, 0]

console.log(hindex(citations))