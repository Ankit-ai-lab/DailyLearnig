/*
 Birthday Shopping

Description
Alex is celebrating his birthday and wants to buy a few things for himself.
There are n Items present in the shop Indexed from I to n. He wished he could buy everything but he has been Instructed by his mother that he can buy exactly k items.
Print all the varlous possible combinations of items he can buy.
Make sure the combinations are sorted and distinct.

*/

let input = [4,2];
function runProgram(input) {
    let [n, k] = input.trim().split(" ").map(Number);
    let res = [];
    function backtrack(start, path) {
        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(1, []);
    res.forEach(comb => console.log(comb.join(' ')));
}
