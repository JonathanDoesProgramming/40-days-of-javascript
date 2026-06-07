/*
    1. Code inside try gets executed.
    2. If no error in the try block, the catch block will be ignored and will not be executed
    3. If there is an error in the try block, the execution of the try block
    will be suspended and the control will move to the catch block. In the catch
    block you can find the error details and do the needful.
*/
 
try {
    // if no error here, catch wont execute
    // if have error here, catch will execute
    console.log('execution starts here');
    abc;
    console.log('execution ends here');
} catch (err) {
    console.error('An error has occured');
}

// Real-World Use Cases
function divideNumbers (a,b) {
    try {
        if (b === 0) {
        const err = new Error('Division by zero is not allowed!');
        throw err;
    }
    const result = a / b;
    console.log(`The result is ${result}`);
    } catch (err) {
        console.error('Got a math error', err.message);
    }
}
divideNumbers(15, 3)
divideNumbers(15, 0)

// Another Example
const person = {
    name: 'Tapas',
    address: {
        city: 'Bangalore'
    }
}
function getPostalCode(user) {
    try {
        console.log(user.address.postalCode);
    } catch (err) {
        console.log('Error accessing property', err.message);
    }
}

// Real-World Use Cases #2
function validateAge(age) {
    try {
        if (isNaN(age)) {
            throw new Error('Invalid input: Age must be a number')
        }
        console.log(`User's age is ${age}`)
    } catch (err) {
        console.error('Validation error', err.message);
    }
}