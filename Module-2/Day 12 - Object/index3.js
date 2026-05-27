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
// Getting keys using: for loop
for (let key in profile) {
    console.log(key)
    console.log(profile[key])
}
// Getting keys using: Object.keys()
console.log(Object.keys(profile));
// Object Reference
let fruit = {name: 'mango'} // XA01
const oneMoreFruit = {name: 'mango'} // YB02
console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false
// To point into same reference
fruit = oneMoreFruit;
console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true