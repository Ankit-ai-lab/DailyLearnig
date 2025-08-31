/* Boxes n Coins

Description

It's about boxes, greedy
You have n coins, each of the same value of 1. Distribute them into boxes such that any
amount x (1sxsn) can be formed using some (possibly one or all) number of these boxes.
Each box may only be used entirely or not used at all. No box may be used more than once
in the formation of the single x, however it may be reused for the formation of other x's.
Find the minimum number of boxes in such a distribution.


input -6  output-3

*/
let coin = 6;

function Boxncoins(coin) {
  let boxes = 0;
  let cover = 0;

  while (cover < coin) {
    boxes++;
    cover += cover + 1; // add next box of size cover+1
  }

  return boxes;
}

console.log(Boxncoins(coin)); // Output: 3
