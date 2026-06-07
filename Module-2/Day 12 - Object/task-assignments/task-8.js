/*
    Output: doe
    person and newPerson has same reference object in memory
    now have access to the property of person and can modify it. 
*/
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);