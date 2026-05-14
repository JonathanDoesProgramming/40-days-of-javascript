/*
    1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit
*/

// Solution 1: Using IIFE
(function (celcius) {
    let fahrenheit;
    fahrenheit = (celcius * 9 / 5) + 32;
    return console.log(fahrenheit);
})(35);

// Solution 2: Using Nested Function
function celsiusToFahrenheit() {
    let fahrenheit;
    function calculate(celcius) {
        fahrenheit = (celcius * 9 / 5) + 32;
        return console.log(fahrenheit);
    }
    calculate(4);
}
celsiusToFahrenheit();

// Solution 3: Using High-order Functions
function returnFahrenheit() {
    return function celcius(celcius) {
        let fahrenheit;
        fahrenheit = (celcius * 9 / 5) + 32;
        return fahrenheit;
    }
}
const retFah = returnFahrenheit();
console.log(retFah(15));