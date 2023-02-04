// text-10
// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case,

console.log(swapCase('AaBbc')); // output: aAbBC

function swapCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
