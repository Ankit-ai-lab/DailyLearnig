/* Question

We have n cards in a row. Each card i becomes available at time T[i]. We need to form m decks. Each deck must have exactly k adjacent cards (non-overlapping). Find the minimum time to form m decks, or -1 if impossible.

Answer

We use Binary Search on Answer:

Search between min(T) and max(T).

For each time mid, check if we can build m decks:

Traverse left to right, count consecutive usable cards (T[i] ≤ mid).

Each time we reach k, make a deck and reset counter.

If at least m decks are made → possible.

Binary search finds the minimum valid time. */

function canForm(T, n, m, k, limit) {
  let decks = 0, consec = 0;
  for (let i = 0; i < n; i++) {
    if (T[i] <= limit) {
      consec++;
      if (consec === k) {
        decks++;
        consec = 0;
        if (decks >= m) return true;
      }
    } else {
      consec = 0;
    }
  }
  return false;
}

function minTimeToFormDecks(n, m, k, T) {
  if (m * k > n) return -1;
  let left = Math.min(...T);
  let right = Math.max(...T);
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (canForm(T, n, m, k, mid)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

// Example usage
const input = `2
7 2 2
3 1 3 2 5 1 1
5 2 3
5 5 5 5 5`;

const lines = input.trim().split("\n");
let idx = 0;
const t = Number(lines[idx++]);

for (let _ = 0; _ < t; _++) {
  const [n, m, k] = lines[idx++].split(" ").map(Number);
  const T = lines[idx++].split(" ").map(Number);
  console.log(minTimeToFormDecks(n, m, k, T));
}
