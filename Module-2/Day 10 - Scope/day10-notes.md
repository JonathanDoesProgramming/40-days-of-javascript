Block - the physical {} container
Scope - the rules that decide whether code inside or outside that container can "see" a variable.

Global scope 
1. Variables declared outside of any function or block scope.
2. Using var in the variable it will add as an global variable which is in the window global object. but with let/const it will not added.

Function scope
1. Variables declared inside a function are only accessible within that function.

Block Scope
1. Variables declared using let and const inside {} cannot be accessed outside the block. (but with using var it can) means that var is always a block scope, function scope.

Scope chain
1. Find the nearest scope, if not move to upward one by one (starting first from the inside).

Variable Shadowing
1. occurs when a variablw in an inner scope has the same name as the variable of an outer scope. it will hide the outer scope variable within the inner scope.