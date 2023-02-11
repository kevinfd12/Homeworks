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
