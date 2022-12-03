// # 1 homework

// You have to implement a function that given an array of numbers and a threshold returns the sum of the values of the array that are bigger than the threshold.

// For instance

// - For these entry values:
//   --- Array: [1, 3, 1, 5, 4]
//   --- Threshold: 2
// - The output of the function should be:
//   --- Sum: 12

// const arr = [1, 3, 15, 9, 12, 5]

// const threshold = 4;
// var num = 0;

// function sumNum(arr) {
// for (let i of arr) {
// if (i >= threshold) {
// num += i;
// }
// }
// console.log(num);
// }

// sumNum(arr);

// ## 2 homework

// You have to implement a function that given an array of numbers and a threshold returns an array that just includes the values bigger than the threshold.

// For instance

// - For these entry values:
//   --- Array: [1, 3, 15, 9, 12, 5]
//   --- Threshold: 6
// - The output of the function should be:
//   --- Array: [15, 9, 12]

// const arr = [1, 3, 15, 9, 12, 5];

// const threshold = 6;

// let bigNum = (arr, num) => {
//   let arrTwo = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       arrTwo.push(arr[i]);
//     }
//   }

//   return arrTwo;
// };

// console.log(bigNum(arr, threshold));

// ## 3 homework

// You have to implement a function that given an object returns an array of the IDs of the elements with the flag 'enabled' set to true.
// The object structure is nested, in other words, it can have unlimited nested children that will need to be taken in consideration.

// ```js
// const obj = {
//   id: '0',
//   enabled: false,
//   value: 5,
//   children: [
//     {
//       id: '1.1',
//       enabled: true,
//       value: 3,
//       children: [],
//     },
//     {
//       id: '1.2',
//       enabled: false,
//       value: 10,
//       children: [
//         {
//           id: '1.2.1',
//           enabled: true,
//           value: 10,
//           children: [],
//         },
//         {
//           id: '1.2.2',
//           enabled: false,
//           value: 5,
//           children: [
//             {
//               id: '1.2.2.1',
//               enabled: true,
//               value: 2,
//               children: [],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
// ```

// function nestedObject(obj) {
//   for (let key in obj) {
//     // I don't understand what this does
//     // I am assuming that the first if removes any non nested objects?
//     if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
//       nestedObject(obj[key]);
//     } else {
//       // This is where i implemented my own logic
//       if (obj[key] === true) {
//         console.log(obj.id);
//       }
//     }
//   }
// }

// nestedObject(obj);

// // - The output of the function should be:
// // --- Array: ["1.1", "1.2.1", "1.2.2.1"]

// ------------------------------------------
// const getOutput = (object, givenArray = []) => {
//   let arr = givenArray;

//   if (object.enabled) {
//     arr.push(object.id);
//   }

//   if (object.children.length) {
//     object.children.forEach((child) => getOutput(child, arr));
//   }

//   return arr;
// };

// getOutput(obj);
