// general-7
// Write a JavaScript program to converts a specified number to an array of digits
// Input: digitize(123)
// Output: [ 1, 2, 3 ]

//These 10 were hard, I don't think I could do them in a real interview without the web

console.log(digitize(123));
console.log(digitize(1230));

function digitize(num) {
  let arr = [];
  for (i = 0; i < num.toString().length; i++) {
    arr.push(parseInt(num.toString().charAt(i)));
  }
  return arr;
}

//num.toString() : This converts the number num to a string.
//charAt() : xcharacter at the ith index
//parseInt() : converts the string character, which was selected by charAt(i), into an integer.
