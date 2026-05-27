const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['maths', 'English', 'EVS'],
    'parents': {
        'father': 'Brown Williamson',
        'mother': 'Sophia',
        'email': 'john-parents@abcde.com'
    },
    'address': {
        'street': '65/2, brookly road',
        'city': 'Carterton',
        'country': 'New Zealand',
        'zip': 5791
    } 
}
// Dot notation
const nameProp = student.name;
const cityProp = student.address.city;
console.log(nameProp, cityProp) // John Williamson, Carterton
// Destructuring
const {name, age} = student;
// Creating a new variable
const {name, age, meal = 'bread'} = student;
console.log(name, age, meal);
// Another Example
const {subjects, numberOfSubjects = subjects.length} = student;
console.log(numberOfSubjects); // 3
// Creating Aliases
const {std: standard} = student;
console.log(std); // error should be console.log(standard)
// Nested Object Destructuring
const {address: {zip}} = student;
console.log(zip); 