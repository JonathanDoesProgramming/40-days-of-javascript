/* 
    Create a Function to Find the Maximum of Two Numbers
    Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.
*/

// Solution Using Arrow Functions: 
let findMax = (num1, num2) => num1 > num2 || num1 >= num2 ? console.log(num1) : console.log(num2);
findMax(-3, -2)