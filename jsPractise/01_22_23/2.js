// general-25
// Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays.

console.log(createArray([1, 2], ['a', 'b']));
// output: [ [ 1, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 2, 'b' ] ]
console.log(createArray([1, 2], [1, 2]));
// output: [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
console.log(createArray(['a', 'b'], ['a', 'b']));
// output: [ [ 'a', 'a' ], [ 'a', 'b' ], [ 'b', 'a' ], [ 'b', 'b' ] ]
