// Logical AND (&&)
// op1 && op2
console.log(false && false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false

console.log("Cow" && "Horse") // Horse, "Cow" cannot be converted to false.

// Logical OR (||)
// op1 || op2
console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log("Cow" || "Horse") // "Cow"

// Logical NOT (!)
console.log(!false) // true
console.log(!true) // false

// Nullish Coalescing (??)
// op1 ?? op2
let a1 = null ?? 1; // 1
let a2 = undefined ?? 3 // 3
const a3 = false ?? "tapaScript" // false
const a4 = 0 ?? "tapas" // 0