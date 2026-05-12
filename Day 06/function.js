// Define or Declare a Function
function printThis() {
    console.log("Printing...")
}

// Call or Invoke a Function
printThis();

// Function as an Expression
let printMe = function () {
    console.log("Print me");
}

printMe();

// Parameters & Arguments
function sum(a, b) {
    const result = a + b;
    // console.log(result);
    return result;
}
let result = sum(10, 4)
// console.log(sum(10, 4))

function double (x) {
    return 2 * x;
}
console.log(double(result))

// Default Parametrs
function calc(a, b = 0) {
    return (2 * (a + b) )
}
// calc(2, 3)
const resVar = calc(2, 7)
console.log(resVar);

// Rest Parameter
// function calculateThis (x, y, u, o) {
// }
function calculateThis (x, y, ...rest) {
    console.log(x, y, rest);
}
calculateThis(1, 2, 3, 4, 5, 6, 7, 8 , 9);