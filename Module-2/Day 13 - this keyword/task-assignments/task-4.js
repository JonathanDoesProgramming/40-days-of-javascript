const user = {
  name: "Alex",
  greet: function () {
    // function inner() {
    //   console.log(`Hello, ${this.name}!`);
    // }
    
    // Solution: 
    const inner = () => {
        console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();
// In execution context, when we call the function it creates it own this keyword
// A regular nested function does not inherit this from its parent function. It gets its own this based on how it is called. Arrow functions inherit this from the surrounding scope.
// Lexically - surrounding scope(where the arrow function is defined - not the outer scope/global scope) on how you called the user.greet() first. means the scope of user.greet.