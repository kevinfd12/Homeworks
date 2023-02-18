// text-18
// Write a JavaScript function to count the occurrence of a substring in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
// 1

const count195 = (string1, string2) => {
  return string1.match(new RegExp(string2, 'gi')).length; //I wanted to use regular expression to match like this let count = (string1.match(/string2/g) || []).length;
  //This did not work so instead I have to use this format and 'g' means search the whole string rather than just find the first occurrence.
  // gi makes the regular expression case-insensitive
};

// alternative solution

const count19 = (str, key) =>
  str
    .toLowerCase()
    .split(' ')
    .filter((word) => word === key.toLowerCase()).length;

console.log(count195('The quick brown fox jumps over the lazy dog', 'the'));
console.log(count195('The quick brown fox jumps over the lazy dog', 'fox'));
