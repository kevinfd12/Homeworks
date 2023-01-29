// text-5
// Write a JavaScript function to convert a string in abbreviated form.
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

function abbrev_name(name) {
  var nameSplit = name.split(' ');
  if (nameSplit.length > 1) {
    return nameSplit[0] + ', ' + nameSplit[1].charAt(0) + '.';
  }
  return nameSplit;
}
console.log(abbrev_name('Robin Singh'));

// COMMENT --------------
// good job :) | perhaps only comma in final result is not needed
// future reference: try to avoid var and use let/const instead. Additionally try to replace string concatenation by template string
// pro tip: to reach certain character in string you can use char index similar like in arrays
const abbrev_name2 = (name) => {
  const nameSplit = name.split(' ');
  return nameSplit.length > 1 ? `${nameSplit[0]} ${nameSplit[1][0]}.` : nameSplit;
};
console.log(abbrev_name2('Robin Singh'));
