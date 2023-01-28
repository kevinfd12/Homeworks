// general-32
// Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function

console.log(getSumFromArray([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
// output: 20
console.log(getSumFromArray([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n'));
// output: 8

// function getSumFromArray(arr) {
//   arr.reduce((acc, cur) => {
//     key = obj[key];
//   }, {});
// }

function getSumFromArray(obj) {
  let objects = {};
  let total = 0;
  for (key in obj) {
    objects = obj[key];
    for (key in objects) {
      total += objects[key];
    }
  }
  console.log(total);
}

// I know I didnt solve in 0 sub n. This is the hardest if it must be done 0 sub n if not then it isnt too bad.

getSumFromArray([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]);
getSumFromArray([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }]);
