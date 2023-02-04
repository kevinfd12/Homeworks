// date-36,35,34
// Write three JavaScript functions:
// - to get 24-hour format of an hour without leading zeros.
// - to get minutes with leading zeros (00 to 59).
// - to get seconds with leading zeros (00 t0 59).

// NOTE: output is related to current time
console.log(hours_without_zeroes(new Date())); // output: 11
console.log(minutes_with_leading_zeros(new Date())); // output: 02
console.log(seconds_with_leading_zeros(new Date())); // output: 55

function hours_without_zeroes(date) {
  return date.getHours();
}

function minutes_with_leading_zeros(date) {
  let minutes = date.getMinutes();
  return minutes < 10 ? '0' + minutes : minutes;
}

function seconds_with_leading_zeros(date) {
  let seconds = date.getSeconds();
  return seconds < 10 ? '0' + seconds : seconds;
}
