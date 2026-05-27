'use strict'
// this keyword in arrow function
const getFood = () => this;
console.log('this inside the arrow function defined in global scope', getFood());
// Complex Example
const food = {
    name: 'mango',
    color: 'yellow',

    /*
    This lexically placed on the parent scope 'food' and 
    the food object is lexically placed on the global scope,
    and the 'this' is referring to the window object again.
    */
    // getDesc: () => `${this.name} is ${this.color}` // name and color is undefined

    // Solution: Using standalone function
    // getDesc: function () {
    //     return `${this.name} is ${this.color}`
    // }

    // Fix: Using arrow function, (always think on the scope perspective and the formula)
    // it needs to have parent scope that will not result or point to global scope
    getDesc: function () {
        // this is now referring to the food object
        // only normal function has its own 'this' keyword
        return () => `${this.name} is ${this.color}`
    } 
}
const descFunc = food.getDesc();
console.log(descFunc());