// Closure Event Handler
function setupButton () {
    let clickCount = 0;

    document.getElementById('myButton').addEventListener('click', function () {
        clickCount++;
        console.log();
    }); // This inner function is closing the clickCount++;
}
setupButton();