/**
 * @param {string} s
 * @return {boolean}
 */

// Have to review this again
const isValid = function (s) {
  let bracket = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  let heap = [];

  for (let char of s) {
    if (bracket[char]) {
      heap.push(bracket[char]);
    } else {
      console.log(heap[heap.length - 1], char);
      if (heap.pop() !== char) return false;
    }
  }

  return !heap.length;
};

console.log(`-------------------------`);
console.log(isValid('()'));
console.log(`-------------------------`);
console.log(isValid('()[]{}'));
console.log(`-------------------------`);
console.log(isValid('(]'));
console.log(`-------------------------`);
console.log(isValid('({[]})'));
console.log(`-------------------------`);
console.log(isValid('({[]}))'));
