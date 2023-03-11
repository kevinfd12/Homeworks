// general-96
// Write a JavaScript function to pick the key-value pairs corresponding to the given keys from an object

const pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    console.log(acc[key]);
    console.log(obj[key]);
    return acc;
  }, {});
};

console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c'])); // output: { a: 1, c: 3 }
