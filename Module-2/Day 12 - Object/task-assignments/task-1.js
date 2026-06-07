/*
Ouput: 'Not provided', base on the rule of nullish coalescing (??)
checks the right operand if its undefined or null.
*/
const user = {name: 'Alex', age: undefined};
console.log(user.age ?? 'Not provided');