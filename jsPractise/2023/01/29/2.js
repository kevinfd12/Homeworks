// general-44
// Write a JavaScript program to remove falsey values from a given array

console.log(removeFalsy([0, 1, false, 2, '', 3, 'a', NaN, 's', 34]));
// output: [ 1, 2, 3, 'a', 's', 34 ]
console.log(removeFalsy([false, NaN]));
// output: []
