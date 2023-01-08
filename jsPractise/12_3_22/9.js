// array-5
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

myColor = ['Red', 'Green', 'White', 'Black'];
console.log(myColor.join(','));

// COMMENT --------------
// well, this one you need work more. First, it could be nice to have it as a function. Second, case from 7th line is not handled.

function elementJoin(arr) {
  let commaJoin = arr.join(',');
  let additionJoin = arr.join('+');
  return `${commaJoin}
    ${additionJoin}`;
}

myColor = ['Red', 'Green', 'White', 'Black'];
console.log(elementJoin(myColor));

const joinExample = (arr, symbol = ',') => arr.join(symbol);

console.log(joinExample(myColor));
console.log(joinExample(myColor, '+'));
