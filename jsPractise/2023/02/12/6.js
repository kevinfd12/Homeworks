// text-22
// Write a JavaScript function to get a part of a string after a specified character, starting from the left or the right of the sentence.
// Test Data :
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','right'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','left'));
// Output :
// "w3resource"
// "xercises"

function subStrAfterChars(str, char, direction) {
  let index = 0;
  if (direction === 'left') {
    index = str.indexOf(char);
  } else if (direction === 'right') {
    index = str.lastIndexOf(char);
  } else {
    return 'Invalid direction specified.';
  }
  return direction === 'left' ? str.substring(index + 1) : str.substring(0, index);
  // substring without a first index returns from index until the end of the string.
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'right')); // "w3resource"
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'left')); // "xercises"
