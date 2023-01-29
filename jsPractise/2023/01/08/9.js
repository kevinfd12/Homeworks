// objects-17
// Write a JavaScript function to check whether an object contains given property
// input: hasKey({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }, "green")
// output: true

console.log(hasKey({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }, 'green'));
console.log(hasKey({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }, 'greeen'));

function hasKey(obj, key) {
  return obj.hasOwnProperty(key);
}
