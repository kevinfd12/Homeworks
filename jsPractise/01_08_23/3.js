// general-10
// Write a JavaScript program to extract out the values at the specified indexes from a specified array
// input: extractValues(arr1, [1, 3])
// output: [ 'b', 'd' ]

let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];

console.log(extractValues(arr1, [1, 3]));
console.log(extractValues(arr2, [4]));
console.log(extractValues(arr2, [7]));
