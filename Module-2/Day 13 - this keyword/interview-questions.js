// Example 1
const user = {
    name: 'Tapas',
    greet: function () {
        // function inner () {
        //     console.log(`Hello, ${this.name}`);
        // }
        // Solution: 
        const inner =  () => {
            console.log(`Hello, ${this.name}`);
        }
        inner();
    },
}
user.greet();

// Example 2
const obj = {
    name: 'John',
    greet: function () {
        console.log(`Hello, ${this.name}`);
    },
}
const greetFn = obj.greet;
// greetFn();
// Solution:
greetFn.call(obj);