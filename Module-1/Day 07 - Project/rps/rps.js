function rockPaperScissorsGame() {
    console.log("Getting started with the Rock 🪨, paper 📃, scissors ✂️ game!")

    const userChoicePrompt = prompt("Enter Rock 🪨, paper 📃, or scissors ✂️");
    const userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;
    const randomNumber = Math.floor((Math.random() * 3) + 1);

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "scissors";
    }
    console.log("User selected", userChoice);
    console.log("Computer", computerChoice);
    
    if (
        (userChoice === 'rock' &&  computerChoice === 'scissors') ||
        (userChoice === 'paper' &&  computerChoice === 'rock') ||
        (userChoice === 'scissors' &&  computerChoice === 'paper')
    ) {
        console.log("You the User WIN, yay!!!");
    } else if (userChoice === computerChoice) {
        console.log("The Game is a Tie")
    } else if (
        (userChoice === 'rock' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'rock')
    ) {
        console.log('Oh Ho... Computer Wins!!!!')
    } else {
        console.log('Please check the input, We didn\'t understand it.')
    }
    
    const playAgaintPrompt = prompt('Do you want to play against (yes/no)');
    const playAgaint = playAgaintPrompt ? playAgaintPrompt.toLocaleLowerCase() : 'no'

    if (playAgain == 'yes') {
        rockPaperScissorsGame();
    } else {
        console.log('Thanks for playing! See you next time!');
    }
}
rockPaperScissorsGame();