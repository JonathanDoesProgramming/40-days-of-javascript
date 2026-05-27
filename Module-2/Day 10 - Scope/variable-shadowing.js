// Variable Shadowing

let message = 'I am doing great';

function situation () {
    let message = ' I am not doing great';
    console.log(message);
}

situation();
console.log(message); // I am doing great