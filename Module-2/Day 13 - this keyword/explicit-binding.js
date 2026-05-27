// Explicit Binding: call(), apply(), bind()
// call()
function greeting() {
    console.log(`Hello, ${this.name} belongs to ${this.address}`);
}
const user = {
    name: 'tapaScript',
    address: 'All of YOU!'
}
// relating the this keyword to external object:
greeting.call(user);
// Another Example
const likes = function (hobby1, hobby2) {
    console.log(this.name + ' like ' + hobby1 + ' , ' + hobby2);
}
const person = {
    name: 'Tapas'
}
likes.call(person, 'Teaching', 'Blogging')
// apply()
const hobbiesToApply = ['Sleeping', 'Eating'];
likes.apply(person, hobbiesToApply);
// bind()
const newHobbies = function(hobby1, hobby2) {
    console.log(this.name + ' like ' + hobby1 + ' , ' + hobby2);
}
const officer = {
    name: 'Bob'
}
const newFn = newHobbies.bind(officer, 'Dancing', 'Singing');
newFn();
// this and new keyword
const Cartoon = function(name, animal) {
    this.name = name;
    this.animal = animal;
    this.log = function () {
        console.log(this.name + ' is a ' + this.animal);
    }
}
const tomCartoon = new Cartoon('Tom', 'Cat');
tomCartoon.log();
const jerryCartoon = new Cartoon('Jerry', 'Mouse');
