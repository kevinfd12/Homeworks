/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }
  return profit;
};

// This was my solution but it said time limit exceeded
// var maxProfit = function (prices) {
//   let max = 0;
//   min = prices[0];
//   let maxDiff = 0;
//   if (prices.length === 1) {
//     return 0;
//   }
//   for (i = 0; i < prices.length; i++) {
//     if (prices[i] <= min) {
//       min = prices[i];
//       arr = prices.slice(i, prices.length);
//       max = Math.max(...arr);
//       let diff = max - min;
//       if (diff > maxDiff) {
//         maxDiff = diff;
//       }
//     }
//   }
//   if (maxDiff <= 0) {
//     return 0;
//   } else {
//     return maxDiff;
//   }
// };

// This was a similar solution to mine
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//     let max = 0
//     let min = prices[0]
//     let profit = 0
//     for(i=1; i<prices.length; i++){
//         if (min > prices[i]) {
//             min = prices[i]
//         }
//         else {
//             profit = Math.max(prices[i]-min, profit)
//         }
//     }
//     return profit
// };
