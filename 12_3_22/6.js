// date-46
// Write a JavaScript function to get time differences in days between two dates.
// Test Data :
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 19, 2014 11:13:00");
// console.log(diff_days(dt1, dt2));
// 6

dt1 = new Date('October 13, 2014 08:11:00');
dt2 = new Date('October 19, 2014 11:13:00');
function diff_days(dt1, dt2) {
  var Difference = dt2.getTime() - dt1.getTime();

  console.log(Difference);

  var milliseconds_per_day = 86400000;

  var Difference_In_Days = Difference / milliseconds_per_day;

  return console.log('days between dates is: ' + Math.floor(Difference_In_Days));
}

console.log(diff_days(dt1, dt2));
