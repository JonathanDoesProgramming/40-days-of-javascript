function capitalizeWords(sentence) {
  let result = "";
  let capitalizeNext = true; // flag to know when to capitalize

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (capitalizeNext && char !== " ") {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char;
    }

    if (char === " ") {
      capitalizeNext = true; // next character should be capitalized
    }
  }

  return result;
}

// Example usage:
console.log(capitalizeWords("hello world")); 
// Output: "Hello World"

console.log(capitalizeWords("javascript is fun")); 
// Output: "Javascript Is Fun"
