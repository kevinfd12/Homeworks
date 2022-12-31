// date-39
// Write a JavaScript function to get difference to Greenwich time (GMT) in hours.
// Test Data :
// const dt = new Date();
// console.log(diff_to_GMT(dt));
// "-1.00" --> (this is result for my location - yours will be different)

function toHours(ms) {
  let hours = (ms / (1000 * 60 * 60)).toFixed(1);
  return hours;
}

function diff_to_GMT(date1) {
  const date2 = new Date();
  var offset = -300; //Timezone offset for EST in minutes.
  var estDate = new Date(date2.getTime() + offset * 60 * 1000);
  // The above calculation gets the date in EST

  milliseconds = date1 - estDate;

  return toHours(milliseconds);
}

dtGMT = new Date(); // This time is already in GMT

console.log(diff_to_GMT(dtGMT));
