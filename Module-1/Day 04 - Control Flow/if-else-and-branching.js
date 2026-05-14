let catchingBus = true;
if (catchingBus) {
    console.log("I will reach home on time!");
} else {
    console.log("I will be late to reach");
}

// Checks if eligible to vote
let age;
if (age >= 18) {
    console.log("You are eligible to vote")
} else {
    console.log("You not eligible to vote")
}

// Ommiting Brackets: 
if (age >= 18) 
    console.log("You are eligible to vote")
else 
    console.log("You not eligible to vote")

// Multiple if-else: Build a grading system
let score;

if (score >= 90) 
    console.log("Grade A");
else if (score >= 80) 
    console.log("Grade B")
else if (score >= 70)
    console.log("Grade C")
else if (score < 70)
    console.log("Fail");

// Nested if-else
const condition = true;
const innerCondition = false;

if (condition) {
    console.log("Outer If")
    if (innerCondition) {
        console.log("Inner If")
    } else {
        console.log("Inner else")
    }
} else {
    console.log("Outer else")
}
