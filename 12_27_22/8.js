// obj-1
// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// const student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

const student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

let keys = Object.keys(student).toString();
console.log(keys);
