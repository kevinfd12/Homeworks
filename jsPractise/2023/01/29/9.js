// text-9
// Write a JavaScript function to capitalize the first letter of each word in a string.

console.log(capitalize_Words('js string exercises'));
// output: Js String Exercises
console.log(capitalize_Words('maría encarnación de los ángeles ñuñoa'));
// output: María Encarnación De Los Ángeles Ñuñoa

function capitalize_Words(str) {
  let result = '';
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result += word[0].toUpperCase() + word.slice(1) + ' ';
  }
  return result.trim(); // trim removes trailing spaces
}
