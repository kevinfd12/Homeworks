// general-24
// Write a JavaScript program to decapitalize the first letter of a string
// second argument should specify if the rest of the word suppose to be capitalize

console.log(decapitalize('JSPractice')); // output: jSPractice
console.log(decapitalize('Red', true)); // output: rED

function decapitalize(word, flag = false) {
  let result = '';
  let maxLen = word.length;
  switch (flag) {
    case false:
      result = word.charAt(0).toLowerCase() + word.slice(1, maxLen);
      break;
    case true:
      result = word.charAt(0).toLowerCase() + word.slice(1, maxLen).toUpperCase();
      break;
  }
  return result;
}

console.log(decapitalize('JSPractice'));
