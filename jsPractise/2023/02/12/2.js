// text-17
// Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

const string_chop = (string, number = string.length) => {
  return string.split('').reduce((acc, cur, i) => {
    // I did not know we can simply not use cur if not needed.
    if (i % number === 0) {
      // this works because 0 % any number === 0.
      acc.push(string.slice(i, i + number));
    }
    return acc;
  }, []);
};

// alternative solution
const string_chop2 = (string, number = string.length) => {
  let copyString = string;
  let result = [];

  while (copyString) {
    result.push(copyString.slice(0, number));
    copyString = copyString.slice(number);
  }

  return result;
};

console.log(string_chop2('w3resource'));
console.log(string_chop2('w3resource', 2));
console.log(string_chop2('w3resource', 3));
