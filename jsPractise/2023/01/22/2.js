// general-25
// Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays.

console.log(createArray([1, 2], ['a', 'b']));
// output: [ [ 1, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 2, 'b' ] ]
console.log(createArray([1, 2], [1, 2]));
// output: [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
console.log(createArray(['a', 'b'], ['a', 'b']));
// output: [ [ 'a', 'a' ], [ 'a', 'b' ], [ 'b', 'a' ], [ 'b', 'b' ] ]

function createArray(array1, array2) {
  let array = [];
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      result = [array1[i], array2[j]];
      array = [...array, result];
    }
  }
  return array;
}

const createArray2 = (array1, array2) =>
  array1.reduce((acc, cur) => [...acc, ...array2.map((value) => [cur, value])], []);

console.log('--------------------------------');
console.log(createArray2([1, 2], ['a', 'b']));
console.log(createArray2([1, 2], [1, 2]));
console.log(createArray2(['a', 'b'], ['a', 'b']));
