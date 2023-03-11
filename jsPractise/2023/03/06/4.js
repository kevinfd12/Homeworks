// text-23
// Write a JavaScript function to strip leading and trailing spaces from a string.
// Test Data :
// console.log(strip('js '));
// console.log(strip(' js'));
// console.log(strip(' js '));
// Output :
// "js"
// "js"
// "js"

function strip(str) {
  return str.trim();
}

console.log(strip('js '));
console.log(strip(' js'));
console.log(strip(' js '));
