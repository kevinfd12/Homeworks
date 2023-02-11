// general-70
// Write a JavaScript program to count the occurrences of a value in an array

const countOc = (arr, num) => {
  counter = 0;
  for (let value of arr) {
    if (value === num) {
      counter++;
    }
  }
  return counter;
};

console.log(countOc([1, 1, 2, 1, 2, 3], 1)); // output: 3
console.log(countOc([1, 1, 2, 1, 2, 3], 2)); // output: 2
console.log(countOc([1, 1, 2, 1, 2, 3], 3)); // output: 1

// reduce example
const countOc2 = (arr, n) => {
  return arr.reduce((acc, cur) => (cur === n ? ++acc : acc), 0);
};

// filter example
const countOc3 = (arr, n) => arr.filter((item) => item === n).length;
