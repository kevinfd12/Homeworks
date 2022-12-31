// math-12
// Write a JavaScript function to find out if a number is a natural number or not.
// Note :
// Natural numbers are whole numbers from 1 upwards : 1, 2, 3, and so on ... or from 0 upwards in some area of mathematics: 0, 1, 2, 3 and so on ...
// No negative numbers and no fractions.
// Test Data :
// console.log(is_Natural(-15));
// console.log(is_Natural(1));
// console.log(is_Natural(10.22));
// console.log(is_Natural(10/0));
// Output :
// false
// true
// false
// false

const is_Natural = (num) => parseInt(num, 10) > 0 && parseInt(num, 10) / num === 1;

console.log(is_Natural(-15));
console.log(is_Natural(1));
console.log(is_Natural(10.22));
console.log(is_Natural(10 / 0));

// function is_Natural(num) {
//   if (typeof num !== 'number') {
//     return false;
//   }
//   if (num <= 0) {
//     return false;
//   }
//   if (num / Math.floor(num) === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
