// Merging Arrays
// Write a function that takes in two Arrays of Numbers. This function should 
// merge the two arrays and return a single array of numbers. The returned array 
// should be sorted from least to greatest.

// It’s ok to assume that only arrays with at least one number will be passed in.

nums1 = [1, 2, 3, 4, 5];
nums2 = [6, 7, 8, 9, 10];

nums3 = [1, 3, 5, 7, 9];
nums4 = [10, 8, 6, 4, 2];

nums5 = [1, 3, 5, 7, 9, 11, 12];
nums6 = [1, 2, 3, 4, 5, 10, 12];

function mergeArrays(array1, array2) {
  return array1
    .concat(array2)
    .sort((a, b) => a - b )
    .filter((num, idx, array) => num !== array[idx + 1]);
}

console.log(mergeArrays(nums1, nums2));
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeArrays(nums3, nums4));
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeArrays(nums5, nums6));
// => [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]