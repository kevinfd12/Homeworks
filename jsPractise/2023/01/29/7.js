// date-37
// Write a JavaScript function to get Timezone.

console.log(seconds_with_leading_zeros1(new Date())); // output: Central European Standard Time <-- in your case should show your current time zone
console.log(seconds_with_leading_zeros1(new Date(1989, 10, 1))); // output: Central European Standard Time

function seconds_with_leading_zeros1(date) {
  return date.toString().split('(')[1].split(')')[0];
  // different solution
  // return date.toLocaleDateString('en-US', { timeZoneName: 'long' }).split(',')[1];
}
