function countVowels (str) {
    let vowels = 0;
    let letter = '';
    for (let w = 0; w < str.length; w++) {
        if (
            (str[w] === 'a') ||
            (str[w] === 'e') ||
            (str[w] === 'i') ||
            (str[w] === 'o') ||
            (str[w] === 'u') 
        ) {
            vowels+=1;
            letter += str[w];
        }
    }
    console.log(vowels);
    console.log(letter);
}
countVowels('Im dumb at logical programming'.toLocaleLowerCase());