// Normal Cloning: using Object.assign()
const target = {p: 1, a: 2}
const source = {a: 3, b: 5};
const returnObj = Object.assign(target, source);
console.log(returnObj); // {p: 1, a: 3, b: 5}
// Shallow Copy vs Deep Cloning 
const obj3 = {
    a: 1,
    b: {c: 2}
}
const obj4 = Object.assign({}, obj3);
console.log(obj4); // {a: 1, b: {c: 2}}
obj4.b.c = 3;
obj4.a = 100;
// Non-nested
console.log(obj4.a); // 100
console.log(obj3.a); // 1
// Nested
console.log(obj4.b.c) // 3
console.log(obj3.b.c); // 3

// Convert Object to array
const myObj = {
    a: 'tapas',
    b: 32
}
const toArray = Object.entries(myObj);
console.log(myObj);
// Convert Map or Array to Object
const entries = new Map(
    ['foo', 'bar'],
    ['baz', 42],
);
const objEntries = Object.fromEntries(entries)
console.log(objEntries);
// Freeze method
const emp = {
    sal: 100
}
Object.freeze(emp);
emp.salary = 200
console.log(emp); // sal: 100
// Seal method
const dept = {
    name: 'finance'
}
Object.seal(dept)
dept.address = 'Bangalore' // doesnt add to the object
delete dept.name; // doesnt delete the object
dept.name = 'HR' // changed to HR!
// hasOwn method
console.log(Object.hasOwn(dept, 'name')); // true