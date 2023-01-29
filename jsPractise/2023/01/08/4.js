// general-15
// Write a JavaScript program to return the minimum-maximum value of an array,
// after applying the provided function to set comparing rule or minimum value if function is not provided
// input: getMinMax([1, 3, 2])
// output: 1
// input: getMinMax([10, 30, 20], (a, b) => b - a)
// output: 30

console.log(getMinMax([1, 3, 2]));
console.log(getMinMax([10, 30, 20], (a, b) => b - a)); //this gets you max
console.log(
  getMinMax(
    [
      { name: 'Rob', age: 16 },
      { name: 'John', age: 20 },
      { name: 'Ani', age: 19 },
    ],
    (a, b) => a.age - b.age
  )
);

function getMinMax(arr, compareFn) {
  if (arr.length == 0) {
    return undefined;
  }
  compareFn = compareFn || ((a, b) => a - b); //gets you min
  const result = arr.reduce((a, b) => (compareFn(a, b) < 0 ? a : b)); //If this is negative return a otherwise return b
  // alternative solution
  const result2 = arr.sort(compareFn)[0];
  return result;
}
