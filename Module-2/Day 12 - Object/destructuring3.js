// Destructuring in Loops
const students = [
    {
        'name': 'William',
        'grade': 'A'
    },
    {
        'name': 'Tom',
        'grade': 'A+'
    },
    {
        'name': 'Bob',
        'grade': 'B'
    }
]
for (let {name, grade} of students) {
    console.log(name, grade);
}
// Optional Chaining
const employee = {
    salary: {
        bonus: 300
    }
}
console.log(employee.department); // undefined
console.log(employee.department.name); // Error
const isNameExists = employee.department?.name;
console.log(isNameExists);