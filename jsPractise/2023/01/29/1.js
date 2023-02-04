// general-41
// Write a JavaScript program to create an object from the given key-value pairs

console.log(
  objsFromPairs([
    ['a', 1],
    ['b', 2],
  ])
);
// output: { a: 1, b: 2 }
console.log(
  objsFromPairs([
    [1, 10],
    [2, 20],
    [3, 30],
  ])
);
// output: { '1': 10, '2': 20, '3': 30 }
console.log(
  objsFromPairs([
    ['a', 10],
    ['b', 'b'],
    ['c', { c: false }],
  ])
);
// output: { a: 10, b: 'b', c: { c: false } }

function objsFromPairs(arr1) {
  return arr1.reduce((acc, cur) => Object.assign(acc, { [cur[0]]: cur[1] }), {}); // why did I need to add the extra array on [cur[1]]?

  // different syntax example
  // return  arr1.reduce((acc, cur) => {
  //   acc[cur[0]] = cur[1]
  //   return acc
  // }, {})
}
