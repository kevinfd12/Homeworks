// general-50
// Write a JavaScript program to convert an integer to a suffixed time string, adding am or pm based on its value, so 0 will be 12am and 8 --> 8am and 13 -->1pm and so on
// If value is more than 24, time string should be generated from next not full 24h period

console.log(convertToTime(0)); // output: 12am
console.log(convertToTime(8)); // output: 8am
console.log(convertToTime(11)); // output: 11am
console.log(convertToTime(13)); // output: 1pm
console.log(convertToTime(16)); // output: 4pm
console.log(convertToTime(25)); // output: 1am
console.log(convertToTime(36)); // output: 12pm
console.log(convertToTime(48)); // output: 12am
console.log(convertToTime(60)); // output: 12pm
