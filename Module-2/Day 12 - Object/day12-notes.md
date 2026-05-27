Static Methods
1. object.assign copies all of the object's own properties from a source object to a target object.

Shallow Copy
1. it copies the properties value from the source to target, with nested object copies the references of those nested object rather creating a new copy. 

Deep Copy
1. you need alternative like structured clone method which will do the cloning of the nested object.

Shallow vs Deep Copy
1. Shallow copy, does change the original value of the object, while deep copy you cannot or doesnt have any effect on the changed/original value of an object.

Freeze method
1. gives us the immutability while handling object. immutability cannot be changes while mutability means something can be changed.
2. usecase if you want an object to be read only.

Seal method
1. still make the object immutable, but now can be modify or reassign values of an object.

hasOwn method
1. Check whether an object has an existing property.

Aliases
1. useful when there are chances of variable name conflict from different sources and different APIs.
2. using alias javascript is not going to create a variable with std. It is always going to create a variable using the alias name(standard) -> look at the file example.

Optional Chaining
1. if the nested object some properties value can result into a null or undefined.
2. able to handle many such cases without doing any kind of condition
3. to determine using the undefined itself that whether that particular value is defined or not.
4. is a safe way to check an object whether its specific value is undefined or null without receiving an error.