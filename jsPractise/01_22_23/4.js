// general-32
// Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function

const getSumFromArray = (arr, funcKey) => {
  const funcKeyGuard = typeof funcKey === 'function';

  return arr.reduce((acc, cur) => acc + (funcKeyGuard ? funcKey(cur) : cur[funcKey]), 0);
};

console.log(getSumFromArray([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (obj) => obj.n + 100));
// output: 20
console.log(getSumFromArray([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n'));
// output: 8

// function getSumFromArray(arr) {
//   arr.reduce((acc, cur) => {
//     key = obj[key];
//   }, {});
// }

// function getSumFromArray(obj) {
//   let objects = {};
//   let total = 0;
//   for (key in obj) {
//     objects = obj[key];
//     for (key in objects) {
//       total += objects[key];
//     }
//   }
//   console.log(total);
// }
