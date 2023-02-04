// general-44
// Write a JavaScript program to remove falsey values from a given array

console.log(removeFalsy([0, 1, false, 2, '', 3, 'a', NaN, 's', 34]));
// output: [ 1, 2, 3, 'a', 's', 34 ]
console.log(removeFalsy([false, NaN]));
// output: []

function removeFalsy(arr) {
  return arr.filter(Boolean);
}

// This is what I had but after some time googling I found the above works. return arr.filter((Booleanement != 0 && element != undefined);
