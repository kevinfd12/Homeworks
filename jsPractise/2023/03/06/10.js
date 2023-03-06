// math-25
// Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).

const operationType = {
  ADD: 'add',
  SUB: 'subtract',
  MUL: 'multiply',
  DIV: 'divide',
};

console.log(currencyMath('$40.24', '$21.57', operationType.ADD)); // output: $61.81
console.log(currencyMath('$40.24', '$21.57', operationType.DIV)); // output: $1.87
console.log(currencyMath('$40.24', '$21.57', operationType.MUL)); // output: $867.98
console.log(currencyMath('$40.24', '$21.57', operationType.SUB)); // output: $18.67
