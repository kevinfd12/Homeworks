// general-85
// Write a JavaScript program to replace all but the last number of characters with the specified mask character
// if last numbers of characters is not provided, use default value

const replaceChar = (num, n = 4, mask = '*') => {
  const maskedNumber = `${num}`.slice(0, -n).replace(/./g, mask);
  const restOfNumber = `${num}`.slice(-n);

  return `${maskedNumber}${restOfNumber}`;
};

console.log(replaceChar(1234567890)); // output: ******7890
console.log(replaceChar(1234567890, 3)); // output: *******890
console.log(replaceChar(1234567890, -4, '$')); // output: $$$$567890
