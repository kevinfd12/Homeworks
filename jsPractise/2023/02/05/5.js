// general-81
// Write a JavaScript program to create an object with keys,
// generated by running the provided function for each key and the same values as the provided object.

console.log(mapKeys({ a: 1, b: 2 }, (val, key) => key + val)); // output: { a1: 1, b2: 2 }

// function mapKeys(obj, fn) {
//   const newObj = {};
//   for (const key in obj) {
//   }
//   return newObj;
// }
