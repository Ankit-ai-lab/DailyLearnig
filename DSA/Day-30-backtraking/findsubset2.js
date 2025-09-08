function findSubsets(n, start = 1, subset = []) {
    if (start > n + 1) return;

    if (subset.length > 0) {
        console.log(subset.join(' '));
    }

    for (let i = start; i <= n; i++) {
        subset.push(i);
        findSubsets(n, i + 1, subset);
        subset.pop();
    }
}
findSubsets(3);
// findSubsets(4);          
// findSubsets(5);