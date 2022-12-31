// arr-8
// Write a JavaScript program to find the most frequent item of an array.
// Sample array : const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// console.log(findMostFrequent(arr1))
// Sample Output : a ( 5 times )

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const arr2 = [3, 2, 3, 3, 2, 4, 9, 3];

function findMostFrequent(arr1) {
  const result = arr1.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  //reduce is similar to looping. The accumulator is the initial value
  //and the val is the "current value" its basically each element in the array. .
  //In this case we are looping through an object so each iteration looks like { num : val }.
  //In other words this is what the acc is equal to. All I am doing here is that
  //I am saying look at the val in the acc which are the values, and basically + 1
  //but also if the value does not exist make it 0 and add 1. If we want the key,
  //this is the same as just val. which makes sense because the "currrentvalue" is the same thing as 1 element in the array.

  // return Object.keys(result).reduce((a, b) => {
  //   return (result[a] > result[b] ? a : b) + ' (' + result[b] + ' times)';
  // });

  let stepKey = '';
  let stepValue = 0;

  Object.keys(result).map((key) => {
    if (result[key] > stepValue) {
      stepKey = key;
      stepValue = result[key];
    }
  });

  return `${stepKey} (${stepValue} times)`;
}

console.log(findMostFrequent(arr1));
console.log(findMostFrequent(arr2));
