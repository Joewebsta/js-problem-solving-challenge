// Lowercase Words
// Write a function that takes an Array of Strings, but potentially other 
// data types. This function should return an Array of the same length and 
// they should remain in order. Any strings in the returned array should be 
// all lowercase.

let randomItems = [1, 'Green', 'pink', true];

function lowerCaseStrings(array) {
  return array.map(item => {
    if (typeof(item) === 'string') {
      return item[0].toLowerCase() + item.slice(1);
    }

    return item;
  });
}

console.log(lowerCaseStrings(randomItems));
// => [1, 'green', 'pink', true]