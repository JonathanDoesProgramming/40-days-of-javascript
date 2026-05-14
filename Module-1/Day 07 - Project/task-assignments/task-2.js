/*
    We will ask user for a number between 1 to 10. 
    Once user will enter a number, you will tell user if the entered number is lower or higher.
    With this information, user will change the number and finally guess the right number.
    You also need to show the number of attempts made by users to reach to this right guess.
*/
// 

function startGuessingNumberGame(userPrompt, randomNumber) { 
    let attempts = 0;
    let target = randomNumber;   // fixed random number
    let userGuess;
    
    do {
        userGuess = userPrompt();   // call prompt each time
        attempts++;

        if (userGuess == target) {  // use == so string "5" matches number 5
            console.log(`Correct guess!: You ${userGuess}, Target Number: ${target}`);
            console.log(`It took you ${attempts} attempts to guess the number!`);
        } else if (userGuess < target) {
            console.log('Higher');
        } else if (userGuess > target) {
            console.log('Lower');
        }
    } while (userGuess != target);
}

const getUserPrompt = () => prompt('Choose number between 1 to 10');
const generateRandomNumber = () => Math.floor((Math.random() * 10) + 1);

startGuessingNumberGame(getUserPrompt, generateRandomNumber());