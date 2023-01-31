//sets both scores at 0 to start
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const gameMessage = document.getElementById('game-message');

playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;
gameMessage.textContent = "Game on!";


const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

rockButton.addEventListener('click', function(event) {
    if (playRound("rock", computerPlay()) == 'playerWin') {
        playerScore = addScore(playerScore);
        console.log(playerScore, computerScore);
        updateDisplay();
    }
    if (playRound("rock", computerPlay()) == 'computerWin') {
        computerScore = addScore(computerScore);
        console.log(playerScore, computerScore);
        updateDisplay();
    }
});
paperButton.addEventListener('click', function(event) {
    if (playRound("paper", computerPlay()) == 'playerWin') {
        playerScore = addScore(playerScore);
        console.log(playerScore, computerScore);
        updateDisplay();
    }
    if (playRound("paper", computerPlay()) == 'computerWin') {
        computerScore = addScore(computerScore);
        console.log(playerScore, computerScore);
        updateDisplay();
    }
});
scissorsButton.addEventListener('click', function(event) {
    if (playRound("scissors", computerPlay()) == 'playerWin') {
        playerScore = addScore(playerScore);
        console.log(playerScore, computerScore);
        updateDisplay()
    }
    if (playRound("scissors", computerPlay()) == 'computerWin') {
        computerScore = addScore(computerScore);
        console.log(playerScore, computerScore);
        updateDisplay();
    }
});


//Randomly selects one of the three possible moves.
function computerPlay() {
    let moveNum = Math.floor(Math.random()*3);
    if (moveNum == 0) {
        return "rock";
    }
    else if (moveNum == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//Checks if one player has scored 5 points or more.
function checkVictory(playerScore, computerScore) {
    if (playerScore >= 5 | computerScore >= 5) {
        return true;
    }
}

//Compares the player's move and the computer's move and determines the winner, if any.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "computerWin";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "playerWin";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "playerWin";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "computerWin";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "computerWin";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "playerWin";
    }
    else {
        return "tie";
    }
}

//Adds one point to the winner of the round.
function addScore(score) {
    console.log(score);
    score++;
    console.log(score);
    return score;
}

function updateDisplay() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}