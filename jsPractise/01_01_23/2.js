// conditions-7
// Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 1; i < 100; i++) {
  switch (true) {
    case i % 5 === 0 && i % 3 === 0:
      console.log('FizzBuzz');
      break;
    case i % 3 === 0:
      console.log('Fizz');
      break;
    case i % 5 === 0:
      console.log('Buzzz');
      break;
    default:
      console.log(i);
  }
}
