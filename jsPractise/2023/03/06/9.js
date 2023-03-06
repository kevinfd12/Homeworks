// general-97
// Write a JavaScript function to create an object composed of the properties the given function returns truthy for.
// The function is invoked with two arguments: (value, key).

console.log(pickBy({ a: 1, b: '2', c: 3 }, (x) => typeof x === 'number')); // output: { a: 1, c: 3 }
