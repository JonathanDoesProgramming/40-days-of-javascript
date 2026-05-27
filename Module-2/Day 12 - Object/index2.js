// Creating object: using literal syntax
let car = prompt('Which is your fav car?');
let favCar = {
    [car]: 5
}
console.log(favCar);

// Constructor Function
function Car(name, model) {
    this.name = name;
    this.model = model;
}
// Creating Object instances: using a constructor function
const bmwCar = new Car('BMW', 'X1');
const bmwCar = new Car('Audi', 'A8');
console.log(bmwCar);
console.log(bmwCar instanceof Car);
// Creating object: using object constructor
const person = new Object();
person.name = 'Alpha';
person.age = 76;
console.log(person); 
// Creating object: using factory function with object methods
function createUser(name, age) {
    return {
        name, age,
        greet () {
            console.log(this.name)
        },
    }
}
const user1 = createUser('Jonathan', 21);
const user2 = createUser('Anonymous', 0);
user1.greet();
// Example
let profile = {
    name: 'tapas',
    company: 'CreoWis',
    message: function () {
        console.log(`${this.name} works at ${this.company}`);
    },
    // Nested Object
    address: {
        city: 'Bangalore',
        pin: 56032,
        state: 'Karnataka',
        country: 'India'
    },
    salary: undefined,
}
console.log(profile.address.country);
// Checks if the property exist in object
console.log('salary' in profile); // true