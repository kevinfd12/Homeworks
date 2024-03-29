// math-17
// Write a JavaScript function to calculate the sum of values in an array.
// Test Data :
// console.log(sum([1,2,3]));
// console.log(sum([100,-200,3]));
// console.log(sum([1,2,'a',3]));
// Output :
// 6
// -97
// 6

// const sum = (arr) => arr.reduce((acc, cur) => (typeof cur === 'number' ? acc + cur : acc), 0);

console.log(sum([1, 2, 3]));
console.log(sum([100, -200, 3]));
console.log(sum([1, 2, 'a', 3]));

//Thanks for the easy one :)

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i];
    }
  }
  return total;
}
