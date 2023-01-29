// general-19
// Write a JavaScript program to remove specified elements from the right of a given array of elements
// input: removeFromRight([1, 2, 3])
// output: [3]
// input: removeFromRight([1, 2, 3], -2)
// output: [2,3]

console.log(removeFromRight([1, 2, 3]));
console.log(removeFromRight([1, 2, 3], -1));
console.log(removeFromRight([1, 2, 3], -2));
console.log(removeFromRight([1, 2, 3], -4));

function removeFromRight(arr, n = 1) {
  arr = arr.reverse();
  arr = arr.slice(0, Math.abs(n));
  arr = arr.reverse();
  return arr;
}

const removeFromRight2 = (arr, n = -1) => {
  return n < 0 ? arr.slice(n) : arr.slice(-n);
};

console.log(removeFromRight2([1, 2, 3]));
console.log(removeFromRight2([1, 2, 3], -1));
console.log(removeFromRight2([1, 2, 3], -2));
console.log(removeFromRight2([1, 2, 3], -4));

//Not sure if this is what we want.
