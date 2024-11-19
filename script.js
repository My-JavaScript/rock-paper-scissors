// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    }

    return "You lose!";
}

// Function to handle a button click
function handleClick(event) {
    const userChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const resultMessage = determineWinner(userChoice, computerChoice);
    
    document.getElementById('resultMessage').textContent = 
        `Computer chose ${computerChoice}. ${resultMessage}`;
}

// Attach event listeners to buttons
document.getElementById('rock').addEventListener('click', handleClick);
document.getElementById('paper').addEventListener('click', handleClick);
document.getElementById('scissors').addEventListener('click', handleClick);
