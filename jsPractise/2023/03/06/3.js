// array-26
// Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.
// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 10, 40

const findNumPair = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return arr[i] + ', ' + arr[j];
      }
    }
  }
  return null;
};

console.log(findNumPair([10, 20, 10, 40, 50, 60, 70], 50));
