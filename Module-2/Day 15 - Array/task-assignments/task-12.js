/* 
    Create an array of 10 elements. 
    Use the splice() method to empty the array
*/

const animals = ['monkey', 'tiger', 'lion', 'starfish', 'goldenfish', 'sea orchin', 'crocodile', 'snake', 'snale', 'octopus'];
const animalsEmpty = animals;
animalsEmpty.splice(0);
console.log(animalsEmpty);