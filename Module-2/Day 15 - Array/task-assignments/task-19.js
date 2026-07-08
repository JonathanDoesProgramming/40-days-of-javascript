/* 
    Task: Give a practical usages of the .fill() method
*/
// Change all elements
const numbers = [1, 2, 3];
numbers.fill(10);
console.log(numbers) // [10, 10, 10]
// Change specific elements
const popularBrands = ['Nike', 'Adidas'];
popularBrands.fill('H&M', 1, 2);
console.log(popularBrands);

// Practical Example/usage
// 1. Initialize a Game Board
const board = new Array(9).fill(null);
// 2. Create a fixed number of default values
const scores = new Array(5).fill(0);
// 3. Reset an Array
answers.fill('');