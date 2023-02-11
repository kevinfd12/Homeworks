// math-18
// Write a JavaScript function to calculate the product of values in an array.

console.log(product([1, 2, 3])); // output: 6
console.log(product([100, -200, 3])); // output: -60000
console.log(product([1, 2, 'a', 3])); // output: 6

function product(arr) {
  return arr.reduce((acc, cur) => {
    if (typeof cur === 'number') {
      return acc * cur;
    } else {
      return acc;
    }
  }, 1);
}
