function solve(N, M, userRequests) {
  // userRequests = [[S1, J1], [S2, J2], ...]
  // Add original index
  let requests = userRequests.map((req, i) => [req[0], req[1], i]);

  // Sort by request time S
  requests.sort((a, b) => a[0] - b[0]);

  // MinHeap replacement using array with sort
  let available = [];
  for (let i = 1; i <= M; i++) available.push(i);

  // busy = [ [endTime, taxi] ]
  let busy = [];

  let ans = Array(N).fill(-1);

  for (let [S, J, idx] of requests) {
    // Free up taxis whose endTime <= S
    busy.sort((a, b) => a[0] - b[0]); // sort by endTime
    while (busy.length && busy[0][0] <= S) {
      let [end, taxi] = busy.shift();
      available.push(taxi);
    }

    available.sort((a, b) => a - b); // keep taxis in order

    if (available.length > 0) {
      let taxi = available.shift();
      ans[idx] = taxi;
      busy.push([S + J, taxi]);
    } else {
      ans[idx] = -1;
    }
  }

  console.log(ans.join(" "));
}
solve(5, 5, [
  [1, 100],
  [2, 100],
  [3, 100],
  [4, 100],
  [5, 100]
]);
// Output: 1 2 3 4 5
