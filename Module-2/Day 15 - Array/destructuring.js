// Array Destructuring: 
let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
console.log(tomato, mushroom, carrot);

// Assign a default value:
[tomato, mushroom = '🍎'] = ['🍅']
console.log(tomato); // 🍅
console.log(mushroom); // 🍎

// Skipping a value:
const [shoes, ,shirt] = ['👞', '⚽', '👕']; // skipping ball
console.log(shoes, shirt); // 👞, 👕

// Nested array destructuring: 
