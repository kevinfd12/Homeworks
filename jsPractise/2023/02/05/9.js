// math-24
// Write a JavaScript function to round a number to 4 digits and strip extra zeros (if any).

// alternative solution
const roundIt = (n, a = 4) => parseFloat(n.toFixed(a));

console.log(roundIt(-1.123)); // output: -1.123
console.log(roundIt(0.0000009999999)); // output: 0
console.log(roundIt(1.0)); // output: 1
console.log(roundIt(-4.55555)); // output: -4.5556
console.log(roundIt(5.00001)); // output: 5
console.log(roundIt(1.123456789)); // output: 1.1235

// function roundIt(num) {
//   return +num.toFixed(4).replace(/\.?0+$/, '');
// }
