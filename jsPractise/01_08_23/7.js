// objects-15
// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
// Expected output: [
//   [ 'red', '#FF0000' ],
//   [ 'green', '#00FF00' ],
//   [ 'white', '#FFFFFF' ]
// ]

console.log(keyValuePairs({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }));

function keyValuePairs(obj) {
  return Object.entries(obj);
}
// We talked about this in a call, this object.entries which returns an array of the object.
