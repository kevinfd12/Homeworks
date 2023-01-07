// conditions-6
// Write a JavaScript program which compute, the average marks of the following students
// Then, this average is used to determine the corresponding grade.
const students = [
  ['David', 80],
  ['Vinoth', 77],
  ['Divya', 88],
  ['Ishitha', 95],
  ['Thomas', 68],
];
// Input: findAverageGrade(students);
// Output: Average grade: 81.6 (B)

function findAverageGrade(students) {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    count += students[i][1];
  }
  let average = count / students.length;

  switch (true) {
    case average < 60:
      console.log(average + ' Grade: F');
      break;
    case average < 70:
      console.log(average + ' Grade: D');
      break;
    case average < 80:
      console.log(average + ' Grade: C');
      break;
    case average < 90:
      console.log(average + ' Grade: B');
      break;
    default:
      console.log(average + ' Grade: A');
  }
}

findAverageGrade(students);
