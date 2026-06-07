// Create Objects with Literal Syntax
let user = {
    name: 'tapas',
    age: 40,
    'is admin': true
}
console.log(user.name); // 'tapas'
console.log(user.name); // 'age'
// Adding new property
user.isSeniorCetizen = true;
user['movie lover'] = true;
console.log(user);
// Keys with special character
console.log(user['is admin']);
// Modifying Existing Property Value 
user.age = 34;
user['movie lover'] = false;
// Deleting a key from object
    // delete user['movie lover'];
    // delete user.age;
// Accessing dynamic key value
const someKey = 'age'; 
console.log(user[someKey]); // 34

