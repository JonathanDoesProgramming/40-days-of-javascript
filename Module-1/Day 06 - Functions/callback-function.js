function foo (func) {
    console.log("foo");

    func();
}

foo (function () {
    console.log("Buz")
})

// Same as: 
const buzFunc = function () {
    console.log("Buz")
}
foo(buzFunc);