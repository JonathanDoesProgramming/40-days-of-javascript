// Create a function with a nested function and log a variable from the parent function.
function parentFunction () {
    function childFunction () {
    }

    const PARENT_VARIABLE = 'This is a parent variable';
    console.log(PARENT_VARIABLE);
}
parentFunction();