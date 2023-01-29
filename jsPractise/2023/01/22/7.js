// general-38
// Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.

// console.log(padString('cat', 8));
// output: '   cat   '
// console.log(padString(String(42), 6, '0'));
// output: '004200'
// console.log(padString('snow', 3));
// output: 'snow'

function padString(str, num, char = ' ') {
  if (str.length >= num) {
    return str;
  }
  totStr = num - str.length;
  leftSide = Math.floor(totStr / 2);
  rightSide = totStr - leftSide;
  return char.repeat(leftSide) + str + char.repeat(rightSide);
}

const padString2 = (str, n, char = ' ') => {
  let result = str;

  while (result.length < n) {
    result = `${char}${result}${char}`;
  }
  return result;
};

console.log(padString2('cat', 8));
// output: '   cat   '
console.log(padString2(String(42), 6, '0'));
// output: '004200'
console.log(padString2('snow', 3));
