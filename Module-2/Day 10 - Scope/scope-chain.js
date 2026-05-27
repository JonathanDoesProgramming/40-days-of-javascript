// Scope Chain
let globalVar = 'I am a Global Variable';

function outer () {
    let outerVar = 'I am an Outer Variable';

    function inner () {
        let innerVar = 'I am an Inner Variable';

        console.log(innerVar);
        console.log(outerVar);
        console.log(globalVar);
    }

    inner();
}

outer();

// Test Knowledge: 
var count = 10;

function outer () {
    // var count = 20;

    function inner () {
        // var count = 30;
        console.log(count); // 30 -> 20 -> 10
    }

    inner();
    console.log(count); // 20 -> 10
}

outer();
console.log(count); // 10

// Loop with var and let 
// By using var the value of i is accessible outside of the scope (bad practice)
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);