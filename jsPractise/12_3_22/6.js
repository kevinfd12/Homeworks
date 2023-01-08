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

// COMMENT --------------
// good job, however... what with case where dt1 is later than dt2 ?
dt3 = new Date('October 22, 2014 11:13:00');
dt4 = new Date('October 11, 2014 08:11:00');
console.log(diff_days(dt3, dt4));
// Result is a negative number. It would be nicer if result will be always as a natural number
// try to work work more about this one. Do not create separate function for second case. Try to create one utility function to handle both cases.

dt1 = new Date('October 13, 2014 08:11:00');
dt2 = new Date('October 19, 2014 11:13:00');
function diff_days(dt1, dt2) {
  var Difference =
    dt2.getTime() > dt1.getTime() ? dt2.getTime() - dt1.getTime() : dt1.getTime() - dt2.getTime();

  var milliseconds_per_day = 86400000;

  var Difference_In_Days = Difference / milliseconds_per_day;

  return 'days between dates is: ' + Math.floor(Difference_In_Days);
}

console.log(diff_days(dt1, dt2));

dt3 = new Date('October 22, 2014 11:13:00');
dt4 = new Date('October 11, 2014 08:11:00');
console.log(diff_days(dt3, dt4));
