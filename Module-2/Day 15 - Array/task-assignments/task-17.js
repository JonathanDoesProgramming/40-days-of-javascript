/* 
    Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never get modified.
*/

const alphanumeric = ['10', '22', '9', '8', '13'];

const ascending = alphanumeric.toSorted((a, b) => Number(a) - Number(b));
const descending = alphanumeric.toSorted((a, b) => Number(b) - Number(a));

console.log('Original:', alphanumeric);
console.log('Ascending:', ascending);
console.log('Descending:', descending);