// Create, Select, Remove, Update, Access arrays
// concat ()
const oddNumbers = [1, 3, 5, 7, 11];
const evenNumbers = [2, 4, 6, 8, 10];
const normalNumbers = [1, 2, 3, 4 ,5];

const randomNumbers = [...oddNumbers].concat(evenNumbers, normalNumbers);
console.log(randomNumbers);

// join()
const circleObjects = ['⚽', '⚾', '🥎', '🏀'];
const ballObjects = circleObjects.join('-->'); // --> separator
console.log(ballObjects);

// fill()
const colors = ['red', 'blue', 'green'];
// .fill(value, start index, end position)
colors.fill('pink', 1, 3); // red, pink, pink
console.log(colors);

// includes()
const names = ['tom', 'alex', 'bob', 'john'];
console.log(names.includes('tom'));

// indexOf()
names.indexOf('alex'); // 1
names.indexOf('rob'); // -1 (always -1 if not in array)

// reverse()
const newNames = ['hunter', 'bell', 'tapas', 'fin'];
console.log(newNames.reverse()); // fin, tapas, bell, hunter

// sort()
const restaurant = ['Jollibee', 'KFC', 'McDonalds', 1, 5, 'Shakeys'];
console.log(restaurant.sort());

const artists = [
    'John White Abbott',
    'Leonardo da Vinci',
    'Charles Aubry',
    'Anna Atkins',
    'Barent Avercamp'
]
console.log('Default sorting of artists array', artists.sort());
// Sort to Descending using Comparator Function
artists.sort(function(a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
});
console.log('Sort the artist names(descending)', artists);

/*
    a = 2, b = 1000
    a = 10, b = 3,
    a = 23, b = 12, 
    a = 30, b = 21 
    but still depends on the engine which number to compare.
*/
let ages = [2, 1000, 10, 3, 23, 12, 30, 21];
console.log('age with default sorting', ages.sort(
    function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
)); 