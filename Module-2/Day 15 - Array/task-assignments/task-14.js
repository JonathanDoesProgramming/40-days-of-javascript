/*
    What happens when you concatenate two empty arrays?

    1) Using '+', Javascript does not concatenate arrays, instead it concerrt boths arrays to string. NOTE: (this is how + operator works when used with arrays)
    2) Using concat(), creates a new array containing elements from both arrays.
*/
const emptyArray1 = [];
const emptyArray2 = [];

const returnTypeofString = emptyArray1 + emptyArray2;
const returnTypeofObject = emptyArray1.concat(emptyArray2); 
console.log('Return: ', returnTypeofString, 'Typeof: ', typeof returnTypeofString); // String
console.log('Return: ', returnTypeofObject , 'Typeof: ', typeof returnTypeofObject); // Object