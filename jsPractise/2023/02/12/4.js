// text-20
// Write a JavaScript function that can pad (left, right) a string to get to a determined length.
// Test Data :
// console.log(formatted_string('0000',123,'left'));
// console.log(formatted_string('00000000',123,'right'));
// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"
// "12300000"

const formatted_string = (string1, string2, direction) => {
  const strLen = String(string2).length;
  return direction === 'left'
    ? `${string1.split('').slice(0, -strLen).join('')}${string2}`
    : `${string2}${string1.split('').slice(0, -strLen).join('')}`;
};

console.log(formatted_string('0000', 123, 'left'));
console.log(formatted_string('00000000', 123));
