// conditions-4
// Write a JavaScript conditional statement to find the largest of five numbers.
// Sample: console.log(findBiggest(-5, -2, -6, 0, -1));
// Output : 0

const findBiggest = (num1, num2, num3, num4, num5) => Math.max(num1, num2, num3, num4, num5);

console.log(findBiggest(-5, -2, -6, 10, -1));
console.log(findBiggest(-5, -2, -6, 0, -1));
