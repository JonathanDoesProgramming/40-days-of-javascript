const shallowCopy = {
    name: 'Object 1',
    copyType: 'Shallow Copy',
    method: ['.assign', 'Spread Operator (...)'],
    nestedObjects: 'Shared references',
    arrays: 'Shared reference'
} 

const deepCopy = {
    name: 'Object 2',
    copyType: 'Deep Copy',
    method: 'structuredClone()',
    nestedObjects: 'Fully cloned',
    arrays: 'Fully cloned',
}

const crayons = {
    primary: ['red', 'black', 'yellow'],
    secondary: {
        green: ['blue', 'yellow'],
        orange: ['red', 'yellow'],
        purple: {
            violet: ['red', 'blue']
        },
    },
    tertiary: ['red-orange', 'yellow-orange', 'yellow-green', 'blue-green', 'blue-violet', 'red-violet'],
}

const crayons2 = structuredClone(crayons);
crayons2['neutralColors'] = ['Black', 'White', 'Gray', 'Brown']
console.log(crayons2);

const crayons2NestCloned = crayons.secondary.purple;
console.log(crayons2NestCloned);