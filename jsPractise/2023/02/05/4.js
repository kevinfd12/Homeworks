// general-79
// Write a JavaScript program to take any number of iterable objects or objects with a length property and returns the longest one

const giveLongest = (...input) => {
  return input.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  });
};

console.log(giveLongest('this', 'is', 'a', 'testCase')); // output: 'testCase'
console.log(giveLongest(...['a', 'ab', 'abc'])); // output: 'abc'
console.log(giveLongest(...['a', 'ab', 'abc'], 'abcd')); // output: 'abcd'
console.log(giveLongest([1, 2, 3], [1, 2], [1, 2, 3, 4, 5])); // output: [ 1, 2, 3, 4, 5 ]
console.log(giveLongest([1, 2, 3], 'foot')); // output: 'foot'
