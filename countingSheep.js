// Counting Sheep
// Write a function that takes an array of Booleans. This function should return 
// a Number that represents the number of times that true was present in the array.

var sheep = [
  true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true
];

function countSheep(sheepArray) {
  return sheepArray.reduce((count, current) => count += current);
}

console.log(countSheep(sheep));