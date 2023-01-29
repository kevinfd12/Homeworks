// general-35
// Write a JavaScript program to get an array of given n random integers in the specified range --> getArrayWithRandomInts = (min, max, range)

console.log(getArrayWithRandomInts(1, 20, 10));
// possible output: [ 3, 9, 11, 12,  3, 5, 1,  8,  5, 14 ]
console.log(getArrayWithRandomInts(-10, 10, 5));
// possible output: [ 2, 4, -6, -9, -9 ]

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getArrayWithRandomInts(min, max, n) {
  let arr = [];
  for (i = 0; i < n; i++) {
    arr.push(Math.round(getRandomNumber(min, max)));
  }

  // while(n > 0) {
  //   arr.push(Math.round(getRandomNumber(min, max)));
  //   n--
  // }
  return arr;
}
