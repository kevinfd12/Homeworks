// array-25
// Write a JavaScript function to sort the following array of objects by title value.

const library = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    libraryID: 3245,
  },
];

const compare_to_sort = (a, b) => {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0;
  }
};

console.log(library.sort(compare_to_sort));
// expected output:
// [
//   {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     libraryID: 3245
//   },
//   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
//   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 }
// ]
