// for (initialization; condition; update) {
// }
for (let count = 1; count <= 5; count++) {
    console.log("Iteration/Loop", count);
}

// Printing all even number between 1 to 100
for (let even = 1; even <= 100; even++) {
    if (even % 2 === 0) {
        console.log(even);
    }  else {
        console.log("Skipped " + even + " not even number");
    }
}

// Addition of even numbers between 1 to 100
let sum = 0;                                  
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("Sum is " + sum);

// Find out each of the characters/letter in the string
let language = "Javascript"
for (let c = 0; c < language.length; c++) {
    console.log(language.charAt(c))
}

// Nested Loop: 
for (let r = 1; r <= 3; r++) {
    for (let c = 1; c <= 3; c++) {
        console.log("Row", r, "Col", c);
    }
}

// Break and Continue
for (let i = 1; i <= 5; i++) {
    if (i === 3 ) 
        break;
    console.log(i)
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i)
}

// Handling Multiple Counters
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
    console.log(i, j);
}