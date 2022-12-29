function ReverseString(str) {
  return str.split('').reverse().join('');
}

var isPalindrome = function (s) {
  let itPalindrome = false;
  if (typeof s == 'string') {
    sCleaned = s.toLowerCase().replace(/[^a-z0-9]/gi, ''); // I am using replace to remove all non-alphanumeric characters
    sReversed = ReverseString(sCleaned);
    if (sCleaned === sReversed) {
      itPalindrome = true;
    }
  } else {
    return console.log('Input was not a string');
  }
  return itPalindrome;
};
