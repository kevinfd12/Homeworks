// array-21

// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

//Not sure at all

const flatten64 = (arr, shallow = false) => arr.flat(shallow ? 1 : Infinity);

console.log(flatten64([1, [2], [3, [[4]]], [5, 6]]));
console.log(flatten64([1, [2], [3, [[4]]], [5, 6]], true));
