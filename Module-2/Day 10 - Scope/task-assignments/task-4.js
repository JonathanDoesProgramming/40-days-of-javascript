// Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

// No because the var keyword is only function scope means it will accessible anywhere inside of the function
function outerLoop () {
    for (var c = 6; c >= 0; c--) {
        console.log('Inside Function: Using var keyword for the variable to become global or accessible outside')
    }
}

console.log(`Outside of a function: ${c}`);
outerLoop();