/*
3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

Assumption: 
    1) Print each letter using for loop and store in the variable.
    2) (Optional): use .toLowerCase() to convert all the letter to lowercase for safety.
    2) Compare the argument that was passed in the function if it match on the variable's value;
*/

let checksPalindrome = function (str) {
    let reverseWord = ""; 
    for (let s = str.length - 1; s >= 0; s--) {  
        reverseWord += str[s];
    }
    switch (reverseWord) {
        case str:  
            console.log(`Same word: ${str} and ${reverseWord}`);
            break;
        default: 
            console.log(`Not same word: ${str} and ${reverseWord}`);
    }
    return reverseWord;
}
console.log(checksPalindrome("shi"));