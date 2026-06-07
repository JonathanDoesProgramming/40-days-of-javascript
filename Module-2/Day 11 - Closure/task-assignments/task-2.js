/*
Output: 100
Explanation: calling the test(), after it calls () which now remembering the value and return 100
*/
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());