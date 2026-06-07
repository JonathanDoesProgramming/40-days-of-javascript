// Output: ReferenceError
try {
    let r = p + 50;
    console.log(r);
    // throw error;
} catch (error) {
    console.log("An error occurred:", error.name);
}