// general-39
// Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object

console.log(omit({ a: 1, b: '2', c: 3 }, ['b']));
// output: { a: 1, c: 3 }
console.log(omit({ a: 1, b: 2, c: 3 }, ['c']));
// output: { a: 1, b: 2 }