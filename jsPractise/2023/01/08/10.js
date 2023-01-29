// string-7
// Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa

console.log(string_parameterize('Robin Singh from USA.'));

function string_parameterize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

///[^a-z0-9]+/g is used to match any non-alphanumeric characters. we are replacing them with a dash
//The regular expression /^-+|-+$/g is used to match any dashes at the beginning or end of the string.
