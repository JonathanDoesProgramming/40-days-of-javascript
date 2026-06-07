1. array collections of any type values.
2. index the position of an element in array, index start at 0

Basic Methods:
1. store .push() in variable can see the new length of array.
2. .push() and .unshift() returns new length of array
3. .pop() return the removed item at the end of array
4. .slice() only copies array not changing it, but different references.
5. rest operator ... is at left inside of square bracket and spread operator in the right inside bracket.
6. with rest operator automatically create its own new array and store values.

Methods pt.1:
1. .concat() merge arrays, cant mutate array values
2. .join() joins elements together using separator and return a string
3. .fill() fill an array with static values, can mutate/change array values
4. .includes() determine the presence of an array value return true or false. (case-senstive)
5. .indexOf() to know the index position of an element in the array
6. .sort() in default converts the element each type to string and then sort to ascending.

Methods pt.2:
1. .splice() mutates the array to remove/replace/add elements
    - start, when to start deleting an array
    - deleteCount, an integer indicates how many element you want to delete in array
    - item, item1, item2, are the elements going to get added to the array from the start index (still works without these, but will only do the deleteCount)
    - always return the array containing the deleted item
    - when not deleting an element, it will return an empty array.
2. .at() returns elements by allowing to use positive and negative index.
3. .groupBy() helps grouping element array or any iterable using specified key.

Immutability Methods
1. toSorted() returns a new array without changing the original one.
2. with()
    - index, can be negative specifies index value inside array
    - value, to replace a value on a specified index.

Static Methods
    Array-Like
    - are objects that has indexed elements and a length property, making them look like array, but they do not have built-in array methods.
    - have special variable inside of a function called 'arguments' is type object.
1. from() if you put an array-like it will return back array.
2. fromAsync() will return promise, the promise is what you need to handle and then you have to get the actual value out.
3. of() helps create new array instance instead of using it in array-like, it will create a new array instance from any number of arguments

Iterator Methods
1. filter()
2. reduce(
    reducer(accumulator, currentValue, index, array)
)
- accumulator, accumulates reducers return value
3. some() 
4. entries(), get each of the elements index in the array