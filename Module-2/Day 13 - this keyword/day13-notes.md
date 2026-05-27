1. In global execution context, the this value is === window object value, meaning it points to window object
2. when we invoked a method on an object, the context or the value of this keyword is bound to the object on where we have invoked the method.

3. Implicit binding is a way in which you understand that if a method is called on an object using the dot notation the context of this bound or associated to the object which we have invoked the method.

4. Inside function this keyword always points to window object
5. this keyword always undefined in standalone/normal function when it is not inside of an object and if use strict is used.

6. Arrow function this keyword always bound to context of the parent scope of where you have defined the arrow function
7. Only normal function has its own this keyword thats
8. arrow function with this keyword will find its parent outer scope lexically.

8. apply is useful if you have many values you want to pass in the function
9. bind give you new function that can be executed later on.