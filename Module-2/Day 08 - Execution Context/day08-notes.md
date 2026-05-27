Lexical Environment
1. how and where your code is physically placed or physically sitting so that javascript as a language can look into the lexically placement of that code pieces and make sure that finally it adhere to the grammar of the language so that it passes through and able to execute your code.

    Execution Context
    1. Means the code that is currently running and everything surrounding to that, that is helping to run in the phrase execution context.

    Global Execution Context (GEC)
    1. Means anything and everything that is outside of a function.
    2. Theres a special feature called 'window' object and 'this' keyword.

        1. Creation Phase:
            1. window object
            2. this keyword
            3. window === this
            4. If you javascript code has variables and function the creation phase is going to allocate memory for your variables and the functions.
            5. variable name will be initialized by undefined and the function body will be placed directly into memory.

        2. Execution Phase
            1. It will assign the value "Tom" to the variable name.
    
    Function Execution Context
    1. gets created only when a function is called or invoked
    2. Also has a creation and execution phase.
    3. checks if there is a local variable in function or in function parameter it is going to allocate memory for that and initialized undefined (same with creation and execution phase).
    