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
let jobs = [
    'Software Engineer', ['Web Developer', 'Android Developer', 'Fullstack Developer'],
    'Embedded System Developer', 'UX/UI Design', 'Game Developer'
]
const myDreamJob = jobs[1][2];
console.log(myDreamJob);

// 1. Skipping method
const [, [, myOptionJob, ]] = jobs;
console.log(myOptionJob);

// 2. Rest (...) and Spread Operator
const [ball, pen, ...shoesCollection] = ['⚽', '🖋️', ['👢', '👟', '👠']];
console.log(shoesCollection[0][1]);
console.log(shoesCollection); // creates its own new array

// Copying or Cloning
const shoesCollectionCopy = [...shoesCollection]; // Spread all the values
console.log(shoesCollectionCopy);

// Swapping
let sad = '😔';
let smile = '😀';
[sad, smile] = [smile, sad];
console.log(sad, smile); // 😀, 😔

// Merge
const mammals = ['🐕', '🐈'];
const reptiles = ['🐍', '🐊', '🐢'];
const zoo = [...mammals, ...reptiles];
console.log(zoo);