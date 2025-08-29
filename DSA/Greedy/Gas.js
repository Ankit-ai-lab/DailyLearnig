
/* Gas Station Description There are n gas stations along a circular route,
 where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and 
 it costs cost[ilof gas to travel from the ith tation to its next (i + 1)th station. You begin the journey 
 with an empty tank at one of the ga s stations. Given two integer arrays gas and cost, find out the
  starting gas station's index if you can travel around the circuit once in the clockwise direction,
   otherwise print-1. 
If there exists a solution, it is guaranteed to be unique 



🔎 Problem Restatement

We have N gas stations in a circle.

At station i, we can fill gas[i] units of fuel.

To go from station i → (i+1), we need cost[i] units of fuel.

Find the index of the starting station if you can complete the whole circle, otherwise return -1.

✅ Key Idea

If total gas < total cost, it’s impossible → return -1.

Otherwise, there is exactly one valid starting station.

Use a greedy approach:

Track tank (current fuel).

Traverse all stations:

tank += gas[i] - cost[i]

If tank < 0 → we cannot start from previous start → reset start = i+1 and tank = 0.

Final start is the answer.
*/


function gasStation(gas, cost) {
    let totalGas = 0, totalCost = 0;
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }
    
    // If total gas < total cost, impossible
    if (totalGas < totalCost) return -1;
    
    let start = 0, tank = 0;
    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i];
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    return start;
}

// Example
let gas = [1,2,3,4,5];
let cost = [3,4,5,1,2];
console.log(gasStation(gas, cost)); // Output: 3
