// math-25
// Write a JavaScript function to make currency math (add, subtract, multiply, division etc.).

const operationType = {
  ADD: 'add',
  SUB: 'subtract',
  MUL: 'multiply',
  DIV: 'divide',
};

const currencyMath = (a, b, oper) => {
  const centsA = parseFloat(a.replace(/[^0-9.-]+/g, '')); //they need to be converted from strings into floats.
  const centsB = parseFloat(b.replace(/[^0-9.-]+/g, ''));
  let result = 0; // just declaring result

  switch (oper) {
    case operationType.ADD:
      result = centsA + centsB;
      break;
    case operationType.SUB:
      result = centsA - centsB;
      break;
    case operationType.MUL:
      result = centsA * centsB;
      break;
    case operationType.DIV:
      result = centsB !== 0 ? centsA / centsB : null;
      break;
  }

  return result !== null ? '$' + Number(result.toFixed(2)) : null;
};
console.log(currencyMath('$40.24', '$21.57', operationType.ADD)); // output: $61.81
console.log(currencyMath('$40.24', '$21.57', operationType.DIV)); // output: $1.87
console.log(currencyMath('$40.24', '$21.57', operationType.MUL)); // output: $867.98
console.log(currencyMath('$40.24', '$21.57', operationType.SUB)); // output: $18.67
