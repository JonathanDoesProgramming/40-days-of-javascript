// splice(start, deleteCount, item, item1, item2)
const names = ['tom', 'alex', 'bob'];
console.log(names.splice(0, 1, 'john')); // tom
console.log(names); // john, alex, bob
names.splice(1, 0, 'zack'); 
console.log(names); // tom, zack, alex, bob

// at()
const junkFoods = ['🍕' , '🍔', '🍟', '🌮', '🥪', '🌭', '🍪']
console.log(junkFoods.at(5)); // 🌭
console.log(junkFoods.at(-3)); // 🥪

// copyWithin(target, start, end)
const array = [1, 2, 3, 4, 5, 6, 7];
array.copyWithin(0, 3, 6); // 4, 5, 6
console.log(array) // 4, 5, 6, 4, 5, 6, 7

// flat()
const removeNestArr = [0, 1 , 2, [3, 4]];
console.log(removeNestArr.flat()); // by default: 1 level deep

const complexFlat = [0, 1, [2, [3, [4, 5]]]];
console.log(complexFlat.flat(2)) // flat 2 level deep
console.log(complexFlat.flat(Infinity)) // flat everything 

// Grouping Data: groupBy()
{
    const employees = [
        {name: 'Bob', dept: 'Engineering', salary: 5000},
        {name: 'Alex', dept: 'HR', salary: 3000},
        {name: 'Ravi', dept: 'Engineering', salary: 7000},
        {name: 'John', dept: 'Engineering', salary: 1000},
        {name: 'Tom', dept: 'Sales', salary: 6000}
    ];
    const dept = Object.groupBy(employees, ({dept}) => dept);
    console.log(dept);

    const earningMin5000 = Object.groupBy(employees, ({salary}) => {
        return salary >= 5000 ? 'More than 5000' : 'Less than 5000';
    } );
    console.log(earningMin5000);
}