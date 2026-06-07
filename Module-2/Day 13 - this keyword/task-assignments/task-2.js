const user = {
  name: "tapaScript",
  greet: function () {
    // Solution using: IIFE 
        (() => {
        console.log(`Hello, ${this.name}!`);
    })();
  },
};

user.greet();
// Problem here is that the arrow function doesnt have built in this keyword
// Arrow function inherit this from the surrounding lexical scope