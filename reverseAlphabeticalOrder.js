// Reverse Alphabetical Order
// Write a function that takes an Array of Strings. This function should return 
// an array of the same strings that were in the original array. However, the 
// returned array should hold the strings in reverse alphabetical order.

let words = ['hi',  'hello', 'carrot', 'world'];

function reverseAlphaWords(words) {
  return words.sort((a,b) => {
    if (a < b) return 1;
    if (a === b) return 0;
    if (a > b) return -1;
  });
}


console.log(reverseAlphaWords(words));
// => ['world', 'hi', 'hello', 'carrot']