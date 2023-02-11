// text-13
// Write a JavaScript function to concatenates a given string n times (default is 1).

console.log(repeat('Ha!')); // output: "Ha!"
console.log(repeat('Ha!', 2)); // output: "Ha!Ha!"
console.log(repeat('Ha!', 3)); // output: "Ha!Ha!Ha!"

function repeat(str, n = 1) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}
