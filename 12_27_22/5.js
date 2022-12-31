// conditions-1
// Write a JavaScript function that accept two integers and display the larger

function twointSum(num1, num2) {
  if (parseInt(num1, 10) > parseInt(num2, 10)) {
    return num1;
  } else if (parseInt(num2, 10) > parseInt(num1, 10)) {
    return num2;
  } else {
    console.log('They are equal.');
    return 0;
  }
}

console.log(twointSum(25, 50));
console.log(twointSum(-45, -50));
console.log(twointSum(50, 50));

const twointSum2 = (a, b) => (a > b ? a : b);

console.log(twointSum2(25, 50));
console.log(twointSum2(-45, -50));
console.log(twointSum2(50, 50));

// function twointSum(num1, num2) {
//   if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//     return console.log('this is not two ints');
//   } else if (num1 / Math.floor(num1) !== (1 || -1) || num2 / Math.floor(num2) !== (1 || -1)) {
//     return console.log('some input is not a counting number');
//   } else if (num1 > num2) {
//     return num1;
//   } else if (num2 > num1) {
//     return num2;
//   }
// }
