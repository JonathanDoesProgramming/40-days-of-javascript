/* 
    How can you check if a value is partially matching any of the elements of an array?
*/

// Using some() with includes()
const fruits = [
    'apple',
    'banana',
    'mango',
    'pineapple'
];

const searchValue = 'app';

const hasMatch = fruits.some((fruit) => fruit.includes(searchValue));

console.log(hasMatch);

// Using filter()
const fruits = [
    'apple',
    'banana',
    'mango',
    'pineapple'
];

const searchValue = 'app';

const matches = fruits.filter((fruit) => fruit.includes(searchValue));

console.log(matches);

/*
    NOTE: 
    - includes() -> checks one value and returns true or false
    - some() -> checks many values in an array and if condition satisfies returns true or false.
    - filter() -> returns all matching elements
    - find() -> returns the first matching element.
*/