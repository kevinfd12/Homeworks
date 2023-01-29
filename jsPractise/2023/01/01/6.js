// array-17
// Write a JavaScript program to shuffle an array.

//I know I solved this incorrectly. I misunderstood the prompt
// The answer should be the same numbers but in a random order.
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(array) {
  // for (let i = array.length; i > 0; i--) {
  //   array.shift();
  //   const j = Math.random() * 1;
  //   array.push(j);
  // }
  // return array;
  return array.sort(() => 0.5 - Math.random());
}

console.log(shuffle(arr));
