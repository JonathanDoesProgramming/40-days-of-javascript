Function: 

1. Function are used where we need to write same code or implement same functionality again and again ( Basically it saves us from repeating same lines of code continuously )
2. We have to declare and define a function by “function” keyword followed by a name and () parenthesis . we write function body within the curly braces {}.
3. We have to invoke/call the function by its name and () like : add(), sum() etc.
4. A function can take multiple parameters ( placeholder for arguments). 
    1. Parameters are the inputs or placeholder declared when declaring/defining the function in contrary arguments are the value which will replace those placeholder/parameter.
5. We have to pass desired arguments when calling the function.

Return keyword: 

1. A function returns the value if we use “return” keyword. return keyword followed by some value returns that value from the function. If return keyword doesn’t have any value after it. it returns “undefined”.

REST Parameter: 

1. …rest parameter helps us to catch all the arguments pass in the function

Nested Function : 

1. We can nest functions inside another function. But in this case we have to call the inner function in the outer function’s body
2. We can return a function from another function. As of outer function returns inner function (HOF)

Callback function: 

1. A function can take another function as parameter and execute it. So its a Higher Order Function. 
2. The function will be passed in the HOF is the Callback Function.
3. A HOF can return another function too.

Pure Function: 

1. If a function returns same output for same input it is called pure function.
2. Basically it takes inputs calculate them and pass an output.
3. but if a function do more than that will be called those works side effects.

Arrow Function: 

1. Arrow function is a shorter and more cleaner syntax to write JS Functions. 

IIFE ( Immediately Invoked Function Expression ):

1. a function expression wrapped with first parenthesis and immediately invoked after the expression like this: (function(){})(). 

Function Execution Stack / Call stack: 

1. Stack is a data structure.
2. When a function is called it will be put in the stack and when it executes it will be terminated from the stack.
3. It follows LIFO  rule. Last function inter the stack first one get out.

Recursion:

1. When a function call itself is called recursion. 
2. A recursion function must have an exit criteria or base condition/exit condition.