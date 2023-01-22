// general-32
// Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function

console.log(getSumFromArray([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
// output: 20
console.log(getSumFromArray([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n'));
// output: 8
