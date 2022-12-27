// text-3
// Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

function string_to_array(input) {
  if (typeof input === 'string') {
    let text = input;
    const Arr = text.split(' ');
    return Arr;
  } else {
    return console.log('This is not a string, please type in a string');
  }
}

console.log(string_to_array('Robin Singh'));
console.log(string_to_array(true));
console.log(string_to_array(56));

// COMMENT --------------
// good job :) it's nice of you to check if input is an actual string
// future reference: for short operations like this no need to create additional variables, so you can return whole logic f.ie: return input.split(' ')
// by the way, you don't need this variable text, so instead of text you can use input
