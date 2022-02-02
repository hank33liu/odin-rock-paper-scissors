//Returns random integer inclusive between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

//Returns Rock, Paper, or Scissors at an even chance
function computerPlay() {
    throwNum = getRandomInt(3) + 1
    if (throwNum === 1) {return 'Rock';}
    else if (throwNum === 2) {return 'Paper';}
    else {return 'Scissors';}
};

//Define the inputs to playRound, no longer used
//let playerSelection = "rock";
//let computerSelection = computerPlay();

//Takes two consts and outputs whether the player wins or loses vs the computer
function playRound(playerSelection, computerSelection) {
    // Result messages
    let msgWin = `You win! ${playerSelection} beats ${computerSelection}!`;
    let msgLoss = `You lose (my condolences). ${computerSelection} beats ${playerSelection}.`;
    let msgTie = `It's a tie! You both chose ${playerSelection}!`;

    //Eliminate tie messages
    //if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {return msgTie;}
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {return 2;}

    //Eliminate win/loss messages
    /*if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === 'Paper') {return msgWin;}
        else {return msgLoss}
    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === 'Rock') {return msgWin;}
        else {return msgLoss}
    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection === 'Paper') {return msgWin;}
        else {return msgLoss}
    } */
     if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === 'Paper') {return 1;}
        else {return 0;}
    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === 'Rock') {return 1;}
        else {return 0;}
    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection === 'Paper') {return 1;}
        else {return 0;}
    }

};

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

//Create round display
const roundDisplay = document.querySelector('#currentRound')
roundDisplay.textContent = `Round: ${roundNumber}`;

//Create scores to score divs
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
playerScoreDisplay.textContent = `Player: ${playerScore}`;
computerScoreDisplay.textContent = `Computer: ${computerScore}`;

//Create battle log const that we can add divs to
const battleLog = document.querySelector('.battle-log');
let round = document.createElement('div');


//Assign listeners to all 3 buttons.
const weaponButtons = document.querySelectorAll('.weapon');
weaponButtons.forEach(weaponButton => weaponButton.addEventListener('click', function(e) {
    //Determine result of this call
    let result = playRound(e.target.id, computerPlay());
    roundEffect(result, roundNumber); //Increment score based on winner and output to the battle log based on round number

    if (roundNumber  < 5) {roundNumber++}; //Increment round number if round isn't already 5

    //Update score displays
    roundDisplay.textContent = `Round: ${roundNumber}`;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}));

//Increments score based on winner and output to the battle log
function roundEffect(result, i) {
    if (roundNumber < 5) {
        if (result === 0) {
            computerScore++;
            round.textContent +=`The machines won Round ${i+1}... 
            `;
            round.textContent +=' ';
        } else if (result === 1) {
            playerScore++;
            round.textContent += `You won Round ${i+1}!
            `;
        } else if (result === 2) {
            round.textContent += `Round ${i+1} was a tie!
            `;
        }
        if (roundNumber === 4) {gameWinner(playerScore, computerScore)};
        //Add round result to battle log
        battleLog.appendChild(round);
    }
};

//Determine the winner of the war
function gameWinner(playerScore, computerScore) {
    if (playerScore === computerScore) {round.textContent += "The game was a tie!";}
    else if (playerScore < computerScore) {round.textContent += "You lost the game...";}
    else if (playerScore > computerScore) {round.textContent += "You won the game!";}
    round.textContent += "Please refresh the page to start the game again."
}

/*Game that plays 5 rounds. Tracks current score, winner of each round, and ultimate winner.
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt(`Round ${i+1}: Rock, Paper, or Scissors?`);
        computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);

        if (result === 0) {
            computerScore++;
            console.log(`The machines won Round ${i+1}...`)
        } else if (result === 1) {
            playerScore++;
            console.log(`You won Round ${i+1}!`);
        } else if (result === 2) {
            console.log(`Round ${i+1} was a tie!`);
        }
    }

    if (playerScore === computerScore) {console.log("The game was a tie!");}
    else if (playerScore < computerScore) {console.log("You lost the game...");}
    else if (playerScore > computerScore) {console.log("You won the game!");}
};*/