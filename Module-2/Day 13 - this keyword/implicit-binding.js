// Implicit Binding: Inside of an Object
const employee = {
    id: 'A5778',
    firstName: 'Alex',
    lastName: 'B',
    returnThis: function () {
        return this;
    },
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log('Employee id', employee.id); // A5778
console.log('this insde the employee object', employee.returnThis()) // return the whole employee object
employee.getFullName(); // getFullName is bound to employee -> 'this' points to employee object
 
// Another example
const tom = {
    name: 'Tom',
    age: 7
}
const jerry = {
    name: 'jerry',
    age: 3
}
function greetMe(obj) {
    obj.logMessage = function () {
        console.log(`${this.name} is ${this.age} years old!`)
    }
}
greetMe(jerry);
tom.logMessage();
greetMe(tom);
jerry.logMessage();