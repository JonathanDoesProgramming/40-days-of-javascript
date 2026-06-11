/* 
    Remove an element from the front and end of an array.
*/
const arrayOfSixElements = ['Goodmorning', true, 21, 2026, false, 'May 5 2005'];
const removeFrontElement = arrayOfSixElements.shift(0,1);
const removeEndElement = arrayOfSixElements.pop();
console.log('First Element: ', removeFrontElement, 'Second Element: ', removeEndElement);