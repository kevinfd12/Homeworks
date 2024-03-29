// text-16
// Write a JavaScript function to truncates a string if it is longer than the specified number of characters.
// Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"

const text_truncate = (string, number, character = '...') => {
  let characterLen = character.length;
  return string.length > number ? `${string.slice(0, number - characterLen)}${character}` : string;
};

console.log(text_truncate('We are doing JS string exercises.'));
console.log(text_truncate('We are doing JS string exercises.', 19));
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));
