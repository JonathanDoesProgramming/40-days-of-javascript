const obj = {
  name: "Tom",
  greet: function () {
    return `Hello, ${this.name}!`;
  },
};

const greetFn = obj.greet.call(obj);
console.log(greetFn);
// We assign the reference of obj to the greetFn, now they points to the same object reference but not its value.
// with call, the function in the object immediately invoked or called and the arguments/values are passed one by one
// with apply, the function in the object immediately invoked or called but usecase of this is only if you have many passed arguments/values
// with bind, retunrs a new function with 'this' permanently bound and the new function can be executed later