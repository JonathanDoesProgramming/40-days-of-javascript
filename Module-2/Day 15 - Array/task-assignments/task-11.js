/* 
    Create an array of 10 elements(number 1 to 10). 
    Resize the array to length 6 once you find the number 5 in that array.
    Hint: Use for loop
*/
const arrayOfTenElements = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
for (let i = 0; i < arrayOfTenElements.length; i++) {
    if (arrayOfTenElements[i] === 5) {
        arrayOfTenElements.length = 6;
    }
}
console.log(arrayOfTenElements);