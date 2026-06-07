let customers = [
    {
        id: 1,
        f_name: 'Abby',
        l_name: 'Thomas',
        gender: 'M',
        married: true,
        age: 32,
        expense: 500,
        purchased: ['Shampoo', 'Toys', 'Book']
    },
    {
        id: 2,
        f_name: 'Jerry',
        l_name: 'Tom',
        gender: 'M',
        married: true,
        age: 64,
        expense: 100,
        purchased: ['Stick', 'Blade'],
    },
    {
        id: 3,
        f_name: 'Dianna',
        l_name: 'Cherry',
        gender: 'F',
        married: true,
        age: 22,
        expense: 1500,
        purchased: ['Lipstick', 'Nail Polish', 'Bag', 'Book'],
    },
    {
        id: 4,
        f_name: 'Dev',
        l_name: 'Currian',
        gender: 'M',
        married: true,
        age: 82,
        expense: 90,
        purchased: ['Book'],
    },
    {
        id: 5,
        f_name: 'Maria',
        l_name: 'Gomes',
        gender: 'F',
        married: false,
        age: 7,
        expense: 300,
        purchased: ['Toys']
    }
]

// filter() - Get 'Senior Citizens' by Filtering out other customers
const seniorCustomer = customers.filter((customers) => {
    return customers.age >= 60;
});
console.log('Senior Customer List', seniorCustomer);

// map() - transform to add title and full name
const customersWithFullName = customers.map((customer) => {
    let title = '';
    
    if(customer.gender === 'M') {
        title = 'Mr.'
    } else if (customer.gender === 'F' && customer.married) {
        title = 'Mrs.';
    } else {
        title = 'Miss'
    }
    customer['full_name'] = `${title} ${customer.f_name} ${customer.l_name}`;
    return customer;
});
console.log(customersWithFullName);

// reduce() - The average age of the customers who have purchased the item, 'book'
/*
    getting values from: left to right
    accumulator = 0
    currentValue = 1
    accumulator + currentValue = 1

    accumulator = 1;
    currentValue = 2;
    accumulator + currentValue = 3

    accummulator = 3,
*/
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

let count = 0;
const total = customers.reduce((accumulator, customer) => {
    if (customer.purchased.includes('Book')) {
        accumulator = accumulator + customer.age;
        count = count + 1;
    }
    return accumulator;
}, 0) // 0 is the initial value of the accumulator
console.log('Customer avg age purchased book: ', Math.floor(total/count));

// reduceRight()
/*
    getting values from: right to left
*/
let number = [100, 40, 15]
const subsResult = number.reduceRight((accumulator, current) => {
    return accumulator - current;
})
console.log('Subs', subsResult);

// some() - Do we have a young customer(age less than 10 years)?
const hasYoungCustomer = customers.some((customer) => {
    return customer.age < 10;
})
console.log('Has young customer', hasYoungCustomer);

// every() - Every custome is married?
const isAllMarried = customers.every((customer) => {
    return customer.married;
})
console.log(isAllMarried);

// find() - Find the youngest customer
const foundYoungCustomer = customers.find((customer) => {
    return customer.age < 10;
})
console.log('Found young customer', foundYoungCustomer);

// findIndex(), findLastIndex(), findLast()
const youngCustomerIndex = customers.findIndex((customer) => {
    return (customer.age < 10);
})
console.log('Found young customer index: ', youngCustomerIndex);

//  Array method chaining
// Get the total amount spent by married customers
const totalExpense = customers.filter((customer) => {
    return customer.married;
}).map((marriedCustomer) => {
    return marriedCustomer.expense;
}).reduce((accumulator, expense) => {
    return accumulator + expense;
});
console.log('Total expense of married customer', totalExpense);

// const expenseMapping = marriedCustomers.map((marriedCustomer) => {
//     return marriedCustomer.expense; // create a new array base on this code
// })
// const marriedCustomerExpense = expenseMapping.reduce((accumulator, expense) => {
//     return accumulator + expense;
// })

// forEach()
const arrOfNum = [1, 2, 3, 4, 5];
let sum = 0;
arrOfNum.forEach((elem) => {
    sum = sum + elem;
});
console.log('Sum using forEach', sum);

// entries
const arrItr = arrOfNum.entries();
// console.log('Array iterator', arrItr.next().value); // [0, 1]
// console.log('Array iterator', arrItr.next().value); // [1, 2]

// entries: for of alternative to .next().value()
for (const [index, element] of arrItr) {
    console.log(index, element);
}

// values() - only values (no need to destructure)
const arrItr2 = arrOfNum.values()
for (const value of arrItr2) {
    console.log(value)
}

// flatMap() - combination of flat and map
const arr1 = [1, 2, 3 ,4];
console.log('Simple Map', arr1.map(item => item *2));
console.log('Simple flatMap', arr1.flatMap(item => item *2));

console.log('complex map', arr1.map(item => [item * 2]));
console.log('complex flatMap', arr1.flatMap(item => [item * 2]));