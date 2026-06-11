// Add one element at the front and the end of an array
const arrayOfSixElements = ['Goodmorning', true, 21, 2026, false, 'May 5 2005'];
const frontElement = 1;
const endElement = 2;

arrayOfSixElements.unshift(frontElement);
arrayOfSixElements.push(endElement);
console.log(arrayOfSixElements);