// conditions-4
// Write a JavaScript conditional statement to find the largest of five numbers.
// Display an alert box to show the result.
// Sample: console.log(findBiggest(-5, -2, -6, 0, -1));
// Output : 0

function findBiggest(num1, num2, num3, num4, num5) {
  max = Math.max(num1, num2, num3, num4, num5);
  return max;
}

console.log(findBiggest(-5, -2, -6, 10, -1));
