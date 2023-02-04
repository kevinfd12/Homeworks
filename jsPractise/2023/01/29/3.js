// general-50
// Write a JavaScript program to convert an integer to a suffixed time string, adding am or pm based on its value, so 0 will be 12am and 8 --> 8am and 13 -->1pm and so on
// If value is more than 24, time string should be generated from next not full 24h period

// other solution
// const convertToTime = (num) => {
// if (num === 12) return '12pm';
// if (num === 0 || num === 24) return '12am';
// if (num > 24) return convertToTime(num - 24);

//   return num <= 12 ? `${num}am` : `${num % 12}pm`;
// };

console.log(convertToTime(0)); // output: 12am
console.log(convertToTime(8)); // output: 8am
console.log(convertToTime(11)); // output: 11am
console.log(convertToTime(13)); // output: 1pm
console.log(convertToTime(16)); // output: 4pm
console.log(convertToTime(25)); // output: 1am
console.log(convertToTime(36)); // output: 12pm
console.log(convertToTime(48)); // output: 12am
console.log(convertToTime(60)); // output: 12pm

function convertToTime(num) {
  let hour = num % 24;
  let suffix = 'am';
  if (hour === 0) return '12am';
  if (hour === 12) return '12pm';

  hour = hour % 12;
  suffix = 'pm';

  return hour + suffix;
}
