/* 121. Best Time to Buy and Sell Stock
Easy
Topics
premium lock icon
Companies
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0. */

let prices = [7,1,5,3,6,4]

function maxProfit(prices){
    let l = 0, r = 1, maxProfit = 0;  // r starts at 1
    while(r < prices.length){
        if(prices[l] < prices[r]){
            maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
            r++;
        } else {
            l = r;
            r++;
        }
    }
    console.log(maxProfit);
    return maxProfit;
}

maxProfit(prices);

// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
