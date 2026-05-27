'use strict'
// this keyword in Standalone Function
function sayName() {
    console.log('this inside a function', this);
}
sayName();

function outer(a) {
    console.log('this inside an outer function', this);

    return function inner(b) {
        console.log('this inside an inner function', this)
    }
}
const outerResult = outer(5);
outerResult(3)