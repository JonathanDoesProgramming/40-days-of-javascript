// Creating an Array:
// 1) Hard Coded
const fruitSalad = ['🍇', '🍈', '🍉', '🍊', '🍋'];
const vegetableSalad = ['🍅', '🍆', '🥔', '🥕', '🫑'];
console.log('Fruit Salad:', fruitSalad);
console.log('Vegetable Salad:', vegetableSalad);
console.log(fruitSalad === vegetableSalad);

// 2) Constructor Function
function ai (actions) {
    this.actions = actions;
}
const cooking = new ai('Slicing onion');
console.log(cooking);

const two = new Array(1, 2);
console.log(two); // [1, 2]

// Accessing an element:
// 1) Bracket notation
fruitSalad[0] // 🍇

// 2) For Loop
for (let i = 0; i < fruitSalad.length - 1; i++) {
    console.log(`Element at index ${i} is ${fruitSalad[i]}`);
}

// Adding/Removing Elements:
// 1) Methods
const addAtEnd = fruitSalad.push('🍏'); // add at the end
console.log(addAtEnd); // 6
const addAtStart = fruitSalad.unshift('🍐'); // add at the start
console.log(addAtStart); // 7

const removeAtEnd = vegetableSalad.pop(); // remove at the end
console.log(removeAtEnd); // 🫑
const removeAtStart = vegetableSalad.shift(); // remove at the start
console.log(removeAtStart); // 🍅