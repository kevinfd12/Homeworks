// conditional-12
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let count = 0;

for (let i = 1; i < 1000; i++) {
  switch (true) {
    case i % 3 === 0:
      count += i;
      break;
    case i % 5 === 0:
      count += i;
      break;
  }
}

console.log(count);
