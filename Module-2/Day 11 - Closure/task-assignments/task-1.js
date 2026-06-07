/*
Output: 1 and 2
Explanation: counter variable have the reference of the outer(), 
so that it can be invoked later
*/
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer(); // just storing the reference of outer()
counter();
counter();