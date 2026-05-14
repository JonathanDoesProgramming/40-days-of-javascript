function outer () {
    console.log("Outer function")
    return function inner () {
        console.log("Inner function");
    }
    // inner();
}
let returnFunc = outer();
console.log(returnFunc)