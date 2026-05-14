// Solution 1: 
let rows = 5; // height of the pyramid

for (let r = 1; r <= rows; r++) {
    let line = "";
    for (let c = 1; c <= r; c++) {
        line += "* ";  // add a star and a space
    }
    console.log(line);
}

// Solution 2: 
let output = ""; 
for (let i = 1; i <= 5; i++) { // this loop will create each rows or lines

    for (let j = 1; j <= i; j++) { // this loop will print asterisk(*)
        
        // like below codes you dont need to check or compare i and j for loop is doing on its own
        // if (i <= 5 && j <= 5) { 
            // console.log("*");
        // }
        
        output += "*"; // this is responsible to append a * at the end of output variable
        
    }
    
    console.log(output); // here you will find appended asterisk's output
    output = ""; // must rest output variable. other wise won't get expected result. 
}