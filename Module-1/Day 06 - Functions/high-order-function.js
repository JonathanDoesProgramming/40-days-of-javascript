function getCamera(camera) {
    camera();
}
// Takes a function as an argument
getCamera (function () {
    console.log("Sony")
})

// Returns Another Functions
function returnFunct () {
    return function () {
        console.log("Hello")
    }
}

const retFunc = returnFunct();
retFunc();