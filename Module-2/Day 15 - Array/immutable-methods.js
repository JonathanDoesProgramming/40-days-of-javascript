// toReverse()
const items = [1, 2, 3];
const reversedItems = items.toReversed();
console.log('toReverse: ', reversedItems); // 3, 2, 1
console.log('Original: ', items); // 1, 2, 3

// toSorted()
const months = ['Mar', 'Jan', 'Feb', 'Dec'];
const sortedMonths = months.toSorted();
console.log('toSorted: ', sortedMonths);
console.log('Original: ', months);

// toSpliced()
const letters = ['A', 'B', 'C', 'D', 'E'];
const extraLetters = letters.toSpliced(1, 0, 'X', 'Y', 'Z');
console.log(letters);
console.log(extraLetters); // A, X, Y, Z, B, C, D, E

// with()
const mathSymbols = ['+', '-', '*', '/'];
const operators = mathSymbols.with(-1, '%');
console.log('Original: ', mathSymbols, 'using with(): ', operators);