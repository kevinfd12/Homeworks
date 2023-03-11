// text-24

// Write a JavaScript function to truncate a string to a certain number of words.
// Test Data :
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :
// "The quick brown fox"

function truncate(str, numWords) {
  const words = str.split(' ');

  if (words.length <= numWords) {
    return 'Not enough words';
  }

  const truncatedWords = words.slice(0, numWords);
  return truncatedWords.join(' ');
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
