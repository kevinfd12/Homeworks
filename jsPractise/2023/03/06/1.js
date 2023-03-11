// array-24
// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

function filterBoolean(arr) {
  // Filter out all falsy values from the array
  return arr.filter((val) => !!val);
}

console.log(filterBoolean([NaN, 0, 15, false, -22, '', undefined, 47, null]));
// Output: [15, -22, 47]
