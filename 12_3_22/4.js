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
