// text-21
// Write a JavaScript function to repeat a string a specified times.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."

function repeat_string(str, count) {
  if (typeof str !== 'string' || typeof count !== 'number') {
    return 'Error in string or count.';
  }
  return Array(count + 1).join(str); //join(',') would strings using commas so instead I am using join here to join using str instead of commas or ''.
  // Array(n) creates an array of size n and we need n+1 because we join in between indexes. In this case, this means that we will get [undefined,undefined,undefined,undefined,undefined]
  //then I am joining with my string.
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));

// function repeat_string(str, count) {
//   if (typeof str !== 'string' || typeof count !== 'number') {
//     return 'Error in string or count.';
//   }
//   return str.repeat(count); // apparently this repeat also works.
// }
