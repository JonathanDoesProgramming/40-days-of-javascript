/* 
    What is the difference between the slice() and splice() methods?

    - slice(), does not mutate or change original array, just copy the array.
    - splice(), does mutate or change original array. removes elements from the original array, returns the removed elements in a new array.
*/

const temperature = ['Hot', 'Cold', 'Warm'];
const usingSlice = temperature.slice(0, 2); // saying give me the copy of hot, and water not including warm
const usingSplice = temperature.splice(0, 1, 'Jonathan'); // saying remove this item and return it on a newly array, and insert jonathan on the place of removed item.
console.log('Using slice: ', usingSlice, 'Original copy: ', temperature);
console.log('Using splice: ', usingSplice, 'Original Copy: ', temperature);