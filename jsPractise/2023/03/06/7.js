// general-94
// Write a JavaScript function to move the specified amount of elements to the end of the array

const offset = (arr, n) => {
  const tempArr = arr;
  if (n >= 0) {
    // move first n elements to end
    arr.push(...tempArr.splice(0, n));
  } else {
    // move last -n elements to beginning
    arr.unshift(...tempArr.splice(n));
  }
  return tempArr;
};

console.log(offset([1, 2, 3, 4, 5], 2));
console.log(offset([1, 2, 3, 4, 5], -2));

// alternative solution
const offset2 = (arr, n) => [...arr.slice(n), ...arr.slice(0, n)];

console.log(offset2([1, 2, 3, 4, 5], 2));
console.log(offset2([1, 2, 3, 4, 5], -2));
//                  [0, 1, 2, 3, 4]
//                  [-5, -4, -3, -2, -1]
