// general-56
// Write a JavaScript program to check whether all elements in a given array are equal or not

console.log(allEqual([1, 2, 3, 4, 5, 6])); // output: false
console.log(allEqual([12, 12, 12, 12])); // output: true

function allEqual(arr) {
  uniqueArr = new Set(arr);
  return uniqueArr.size === 1 ? true : false;
}
