// general-64
// Write a JavaScript program to get the first non-null / undefined argument

const getFirstNullish = (...input) => {
  return input.find((value) => value !== undefined && value !== null);
};

console.log(getFirstNullish(null, undefined, ' ', NaN, 'abcd')); // output: ' '
