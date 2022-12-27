// text-1
// Write a JavaScript function to check whether an `input` is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

function is_string(input) {
  if (typeof input === 'string') {
    return true;
  } else {
    return false;
  }
}

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

// COMMENT --------------
// good job :)
// future reference: if you need to check if something is true or false, no need to put it in if ... else structure. It will be enough if you will just return a condition,
// f.ie.:
const is_string2 = (input) => typeof input === 'string';

console.log(is_string2('w3resource'));
console.log(is_string2([1, 2, 4, 0]));
