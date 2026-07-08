/* 
    Example of sparse and dense arrays
    Dense array - every idex has a value
    Sparse array - some indexes are missing
*/

// Dense array
console.log(['1', '2', '3']);

// Sparse array
const colors = [];
colors[5] = 'blue';
console.log(colors[4]);
console.log(colors[5]);