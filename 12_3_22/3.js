// text-4
// Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

function truncate_string(str, num) {
  if (str.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
}

console.log(truncate_string('Robin Singh', 4));
