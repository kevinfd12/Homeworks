// general-2
// Write a JavaScript program to copy a string to the clipboard
// NOTE: 10.html is connected with 10.css and 10.js, so you need to type only in this file

const textarea = document.getElementById('textarea');
const copyButton = document.getElementById('copy');
const pasteButton = document.getElementById('paste');

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(textarea.value);
});

pasteButton.addEventListener('click', () => {
  navigator.clipboard.readText().then((text) => {
    textarea.value = text;
  });
});
