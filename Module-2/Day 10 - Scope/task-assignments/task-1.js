let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();

/*
    output would be undefined since it used let it will be only accessible
    inside of the outer, but if it used var it will be accessible everywhere

    output actually is 'Bob'
*/