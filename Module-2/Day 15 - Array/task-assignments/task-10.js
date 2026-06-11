/* Empty an array using its length property */
const numArray = new Array(12, 2, 5, 1, 10);
numArray.length = 0;
const emptyArray = numArray;
console.log('Empty array - using length property', emptyArray);