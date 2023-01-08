// math-5
// Write a JavaScript function to format a number up to specified decimal places.
// Test Data :
// console.log(decimals(2.100212, 2));
// console.log(decimals(2.100212, 3));
// console.log(decimals(2100, 2));
// "2.10"
// "2.100"
// "2100.00"

function decimals(n, m) {
  n = n.toLocaleString(undefined, { minimumFractionDigits: m, maximumFractionDigits: m });
  return n;
}

console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));

const decimals2 = (n, m) => n.toFixed(m);

console.log(decimals2(2.100212, 2));
console.log(decimals2(2.100212, 3));
console.log(decimals2(2100, 2));
