// array-6
// // Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
// For example if you accept 025468 the output should be 0-254-6-8.

function isEven(num) {
  return num % 2 === 0;
}

function insertDashes(num) {
  let output = '';
  let numString = num.toString();

  for (let i = 0; i < numString.length; i++) {
    const curr = numString[i];
    const nextNum = numString[i + 1];
    if (isEven(curr) && isEven(nextNum)) {
      output = output + curr + '-';
    } else {
      output = output + curr;
    }
  }
  return output;
}

const result = insertDashes(025466);
console.log(result);
