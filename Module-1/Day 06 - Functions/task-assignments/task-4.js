/* 
    Write a Function to Find Factorial of a Number
    Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(n) {
    n === 0 || n === 1 ? 0 || 1 : undefined;
    
    let result = 1;
    for (let i = n; i >= 1; i--) {
        console.log(result *= i);
    }
    return result;
}
factorial(5);