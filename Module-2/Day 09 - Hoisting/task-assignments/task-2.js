functionAsExpression();
console.log(functionDeclaration());

var functionAsExpression = function () {
    console.log('Works only if you call this function after');
    console.log('Will cause an error if you immediately invoke/call');
}

function functionDeclaration () {
    const normalFunction = 'Normal function only works in hoisting';
    return normalFunction;
}