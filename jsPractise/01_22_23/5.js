// general-33
// Write a JavaScript program to get a random number in the specified range

console.log(getRandomNumber(2, 10));
// possible output: 4.07142653333363
console.log(getRandomNumber(1, 5));
// possible output: 3.9317064361167473
console.log(getRandomNumber(-5, -2));
// possible output: -2.723927771924844
console.log(getRandomNumber(0, 1));
// possible output: 0.3597861703061993

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
