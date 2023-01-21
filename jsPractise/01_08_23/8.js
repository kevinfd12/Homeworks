// objects-16
// Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys
// Expected output: { '#FF0000': 'red', '#00FF00': 'green', '#FFFFFF': 'white' }

console.log(invertKeyValue({ red: '#FF0000', green: '#00FF00', white: '#FFFFFF' }));

function invertKeyValue(obj) {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}
