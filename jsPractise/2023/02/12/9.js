// array-23
// Write a JavaScript function to find the difference of two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]

// Doesnt work
// function difference111(arr1, arr2) {
//   const result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (!arr1.includes(arr2[i])) {
//       result.push(arr2[i]);
//     }
//   }

//   return result;
// }

const difference111 = (arr1, arr2) => {
  const arr = [...arr1, ...arr2].flat(Infinity);
  return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num));
};

console.log(difference111([1, 2, 3], [100, 2, 1, 10]));
console.log(difference111([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
