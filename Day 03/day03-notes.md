Arithmethic Operators:  
    Post Increment Operator (variable++): it will return the value first, and then it will increment it.
    ex: count++

    Pre Increment Operator (++variable): increase the value first and return.
    ex: ++count

Comparison Operators:
    2 Equal Operators: (==, ===):
        - Loose Equality Operator (==): the left side operand and the right operand it automatically conversed or coerced to the nearest possible type.

        - Strict Equality Operator (===): will return true only if the operand this left side and the right side operand are equal and of the same type.
            Rules: 
                - if the operand are of different types straight away false, if both the operand are null or both the operand are undefined then it will return true.
                - if any of the operand is not a number (NaN)it doesnt matter what is there in the other operand it will always return false.
            
            Confusions: 
                - when you are equating two objects, you re not comparing the values of the two objects you telling that if the both objects are pointing to the same memory address or not.

    2 Not Equal Operator (!= , !==): 
        - Inequality Operator (!=): doesnt recommend to use.

        - Strict Inequality (!==): check whether the left side operand and the right side operands are equal or not, if they're not equal it will return true, if they are equal it will return false

Logical Operator: 
    - Logical AND (&&): first it will check if this first operand can be converted to false then it will return this particular operand (op1 or op2)
        ex: operand 1 && operand 2
        ex: false && true, since the first value is false it will not check the right operand

    - Logical OR (||): if left operand can be converted to true then you return left operand else you return right operand.
        ex: "Cow" || "Horse", any positive value that if you take for example a particular string which is not a negative value like (zero, empty string etc).

    - Logical NOT (!): toggle false to true, true to false

    - Nullish Coalescing (??): if the first one, first operand can be converted or result into a null or undefined then return the second operand

Conditional Ternary Operator: if the condition satisfied in that case it will return a particular value, and if the condition doesnt satistied then it will return another value.
    ex: condition ? val1 : val2