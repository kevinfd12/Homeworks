// array-19
// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]
// array3 = [1, 0, 2, 3, 4];
// array4 = [3, 5, 6];
// Expected Output :
// [ 4, 5, 8, 3, 4 ]

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
const array3 = [1, 0, 2, 3, 4];
const array4 = [3, 5, 6];

function sumArrays(array1, array2) {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }

  return result;
}

console.log(sumArrays(array1, array2)); // [4, 5, 8, 10, 12, 13]
console.log(sumArrays(array3, array4)); // [4, 5, 8, 3, 4] My answer is incorrect can we review this one?
