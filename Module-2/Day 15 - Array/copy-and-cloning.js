// Copying or Cloning Array:
// slice()
const animals = ['🐕', '🐈', '🐂', '🐄', '🐁'];
const animalsCopy = animals.slice();

// Determining Array:
// isArray()
Array.isArray(['']); // true
Array.isArray({'tomato': '🍅'}); // false
const deterArray = [1, 2, 3];
console.log(Array.isArray(deterArray)); // true