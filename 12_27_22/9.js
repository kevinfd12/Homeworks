// obj-3
// Write a JavaScript program to get the length of a JavaScript object.
// Sample object:
// const student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample: console.log(objLength(student))
// Output: 3

const student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

function objLength(object1) {
  let length = Object.keys(student).length;
  return length;
}

console.log(objLength(student));
