// First String Appearance
// Write a function that takes an Array of Booleans and Strings. This function 
// should return a String - the first string that appears in the array that 
// was passed in.

var variousThings = [
  true, true, true, false,
  true, true, 1, true,
  true, false, true, false,
  true, 'hello', false, true,
  true, true, true, true,
  false, false, 'world', true
];

function findFirstString(array) {
  let firstString = array.find(item => typeof(item) === 'string');

  return firstString ? firstString : false;
}

console.log(findFirstString(variousThings));
// => 'hello'