// general-94
// Write a JavaScript function to move the specified amount of elements to the end of the array

const offset = (arr, n) => {
  if (n >= 0) {
    // move first n elements to end
    arr.push(...arr.splice(0, n));
  } else {
    // move last -n elements to beginning
    arr.unshift(...arr.splice(n));
  }
  return arr;
};

console.log(offset([1, 2, 3, 4, 5], 2));
console.log(offset([1, 2, 3, 4, 5], -2));
