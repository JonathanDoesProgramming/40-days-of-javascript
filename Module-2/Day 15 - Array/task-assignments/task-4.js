// Use the for loop on the above array to print elements in the odd index.
const arrayOfSixElements = ['Goodmorning', true, 21, 2026, false, 'May 5 2005'];

for (let index = 0; index < arrayOfSixElements.length; index++) {
    if (index % 2 === 1) {
        console.log('Odd Elements: ', arrayOfSixElements[index]);
    }
}