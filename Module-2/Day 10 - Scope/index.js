// Global Scope
let name = "Tapas"
function greeting() {
    console.log('Hello', name);
}
greeting();
console.log(name);

{
    console.log('Inside Block', name);
}

// Function Scope
function todo () {
    var task = "Learning 40 days of JS"
    console.log(task);
}
todo();

// Block Scope
{
    let count = 10;
    console.log(count)
}
console.log(count);