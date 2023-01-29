// math-14
// Write a JavaScript function to round a number to a given decimal places.
// Test Data :
// console.log(precise_round(12.375,2));
// console.log(precise_round(-10.3079499, 3));
// console.log(precise_round(10.49999,0));
// console.log(precise_round(10.49999,2));
// Output :
// 12.38
// -10.308
// 10
// 10.50

const precise_round = (num, decimals) => num.toFixed(decimals);

console.log(precise_round(12.375, 2));
console.log(precise_round(-10.3079499, 3));
console.log(precise_round(10.49999, 0));
console.log(precise_round(10.49999, 2));

// function precise_round(num, decimals) {
//   let shift = Math.pow(10, decimals);
//   return Math.round(num * shift) / shift;
// }
