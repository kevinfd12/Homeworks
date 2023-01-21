// general-8
// Write a JavaScript program to filter out the specified values from a specified array.
// Return the original array without the filtered values
// input: filteredArray(arr1, 'a', 'c')
// output: [ 'b', 'b' ]

const arr1 = ['a', 'b', 'c', 'a', 'b', 'c'];
const arr2 = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log(filteredArray(arr1, 'a', 'c'));
console.log(filteredArray(arr2, 'b'));

function filteredArray(array, char1, char2) {
  array = array.filter((char) => char !== char1 && char !== char2);
  return array;
}
