// Using static methods in Array-Like
const arr_like = {0: 'I', 1: 'am', 2: 'array-like', length: 3};
console.log(arr_like);
arr_like[2]; // 'array-like'
arr_like.length; // 3

console.log('is arr_like is an array?', Array.isArray(arr_like)); // false
console.log('is arr_like is an object?', arr_like instanceof Object); // true

function checkArgs() {
    console.log(arguments);
    // Convert Array-like to array: Using spread operator
    const argArr = [...arguments];
    console.log('Converted Array Args', argArr);
    argArr.forEach((elem) => {
        console.log(elem);
    });
}
checkArgs(2);

// from()
console.log('HTML Collection as array like', document.getElementsByTagName('li'));
const collectionArr = Array.from(document.getElementsByTagName('li'));
console.log('Converted Array', collectionArr);

// fromAsync()
const collectionPromise= Array.fromAsync(document.getElementsByTagName('li'));
console.log('Converted Array', collectionPromise);
// handle a promise
collectionPromise.then((value) => console.log(value));

const ret = Array.fromAsync(
    {
        0: Promise.resolve('tapaScripts'),
        1: Promise.resolve('Google'),
        2: Promise.resolve('Apple'),
        length: 3
    }
).then((value) => console.log(value));
console.log(ret);

// of()
const a = new Array(2, 3, 4);
const b = [4, 5, 6];

const c = Array.of(2, true, 'test', {name: 'Alex'}, [1, 2, 3]);