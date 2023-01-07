// array-9
// Write a JavaScript program which accept a string as input and swap the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      console.log(char);
    }
  }
  return result;
}

console.log(swapCase('The Quick Brown Fox!')); // Output: 'tHE qUICK bROWN fOX'
