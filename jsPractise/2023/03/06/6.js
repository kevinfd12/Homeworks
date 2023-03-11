// text-25
// Write a JavaScript function to alphabetize a given string.
// Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
// Test Data :
// console.log(alphabetize_string('United States'));
// Output :
// "SUadeeinsttt"

const alphabetize_string = (str) => {
  return str.split('').sort().join('');
};

console.log(alphabetize_string('United States'));
