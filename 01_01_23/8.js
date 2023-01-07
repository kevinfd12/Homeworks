// array-20
// Write a JavaScript program to find duplicate values in a JavaScript array
const arr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
// findDuplicates(arr)
// expected output: [ 4, 7 ]

function findDuplicates(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    arr.sort();
    if (arr[i] === arr[i + 1]) {
      duplicates.push(arr[i]);
    }
  }
  let duplicates_set = new Set(duplicates);
  return duplicates_set;
}

const findDuplicates2 = (arr) => [
  ...new Set(arr.filter((item) => arr.indexof(item) !== arr.lastIndexOf(item))),
];

console.log(findDuplicates(arr));
console.log(Array.from(findDuplicates(arr))); // if we want an array as the answer
console.log([...findDuplicates(arr)]); // if we want an array as the answer
