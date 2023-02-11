// general-61
// Write a JavaScript program to cast the provided value as an array if it's not one
// other words: result should be always as as array

const castArray = (value) => {
  return Array.isArray(value) ? [...value] : [value];
};

console.log(castArray('w3r')); // ['w3r']
console.log(castArray([100])); // [100]
