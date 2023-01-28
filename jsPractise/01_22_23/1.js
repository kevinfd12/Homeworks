// general-24
// Write a JavaScript program to decapitalize the first letter of a string
// second argument should specify if the rest of the word suppose to be capitalize

console.log(decapitalize('SJPractice')); // output: jSPractice
console.log(decapitalize('Red', true)); // output: rED

function decapitalize(word, flag = false) {
  const maxLen = word.length;
  const result =
    word.charAt(0).toLowerCase() +
    (flag ? word.slice(1, maxLen) : word.slice(1, maxLen).toUpperCase());

  // switch (flag) {
  //   case false:
  //     result = word.charAt(0).toLowerCase() + word.slice(1, maxLen);
  //     break;
  //   case true:
  //     result = word.charAt(0).toLowerCase() + word.slice(1, maxLen).toUpperCase();
  //     break;
  // }
  return result;
}

console.log(decapitalize('JSPractice'));

const decapitalize2 = ([first, ...rest], flag = false) => {
  return first.toLowerCase() + (flag ? rest.join('').toUpperCase() : rest.join(''));
};
console.log(decapitalize2('JSPractice'));
