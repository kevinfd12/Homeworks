// general-81
// Write a JavaScript program to create an object with keys,
// generated by running the provided function for each key and the same values as the provided object.

const mapKeys = (obj, fn) => {
  // return Object.keys(obj).reduce((acc, cur) => {
  //   const value = obj[cur];
  //   const key = fn(value, cur);
  //   acc[key] = value;

  //   return acc;
  // }, {});

  return Object.entries(obj).reduce((acc, cur) => {
    [cur[1], cur[0]] = [cur[0], cur[1]];
    const key = fn(...cur);
    acc[key] = cur[0];

    return acc;
  }, {});
};

console.log(mapKeys({ a: 1, b: 2 }, (val, key) => key + val)); // output: { a1: 1, b2: 2 }