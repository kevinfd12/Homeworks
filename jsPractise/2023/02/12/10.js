// general-88
// Write a JavaScript program to get the median of an array of numbers

function getMedian(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    return [sortedArr[mid - 1], sortedArr[mid]]; // in case we get 2 middle numbers
  } else {
    return sortedArr[mid];
  }
}

console.log(getMedian([1, 2, 3, 4, 5])); // output: 3
console.log(getMedian([1, 2, 3, 4, 5, 6])); // output: [ 3, 4 ]
console.log(getMedian([6, 5, 4, 3, 2, 1])); // output: [ 3, 4 ]
console.log(getMedian([5, 6, 50, 1, -5])); // output: 5
