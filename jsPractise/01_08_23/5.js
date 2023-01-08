// general-17
// Write a JavaScript program to split values of two given arrays into two groups.
// If an element in filter is truthy, the corresponding element in the collection belongs to the first group;
// Otherwise, it belongs to the second group
// input: splitArray([1, 2], [false, true])
// output: [ [ 2 ], [ 1 ] ]
// input: splitArray([1, 2], [true, true])
// output: [ [ 1, 2 ], [] ]

console.log(splitArray([1, 2], [false, true]));
console.log(splitArray([1, 2], [true, true]));
console.log(splitArray([1, 2, 3, 4], [false, false, false, false]));
console.log(splitArray([1, 2, 3], [true, true, true, true]));
console.log(splitArray([1, 2, 3, 4], [false, false, false]));
