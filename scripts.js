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

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function(event) {
    playerScore = 0;
    computerScore = 0;
    gameMessage.textContent = "Game on!"
    updateDisplay();
})

rockButton.addEventListener('click', function(event) {
    if (checkVictory(playerScore, computerScore) != false) {
        return;
    }
    let playerMove = 'rock';
    let computerMove = computerPlay();
    console.log(playerMove, computerMove);
    playRound(playerMove, computerMove);
    // if (compare("rock", computerPlay()) == 'playerWin') {
    //     console.log("rock", computerPlay());
    //     playerScore = addScore(playerScore);
    //     console.log(playerScore, computerScore);
    //     updateDisplay();
    // }
    // if (compare("rock", computerPlay()) == 'computerWin') {
    //     console.log("rock", computerPlay());
    //     computerScore = addScore(computerScore);
    //     console.log(playerScore, computerScore);
    //     updateDisplay();
    // }
});
paperButton.addEventListener('click', function(event) {
    if (checkVictory(playerScore, computerScore) != false) {
        return;
    }
    let playerMove = 'paper';
    let computerMove = computerPlay();
    console.log(playerMove, computerMove);
    playRound(playerMove, computerMove);
    // if (compare("paper", computerPlay()) == 'playerWin') {
    //     console.log("rock", computerPlay());
    //     playerScore = addScore(playerScore);
    //     console.log(playerScore, computerScore);
    //     updateDisplay();
    // }
    // if (compare("paper", computerPlay()) == 'computerWin') {
    //     console.log("rock", computerPlay());
    //     computerScore = addScore(computerScore);
    //     console.log(playerScore, computerScore);
    //     updateDisplay();
    // }
});
scissorsButton.addEventListener('click', function(event) {
    if (checkVictory(playerScore, computerScore) != false) {
        return;
    }
    let playerMove = 'scissors';
    let computerMove = computerPlay();
    console.log(playerMove, computerMove);
    playRound(playerMove, computerMove);
    // if (compare("scissors", computerPlay()) == 'playerWin') {
    //     console.log("rock", computerPlay());
    //     playerScore = addScore(playerScore);
    //     console.log(playerScore, computerScore);
    //     updateDisplay()
    // }
    // if (compare("scissors", computerPlay()) == 'computerWin') {
    //     console.log("rock", computerPlay());
    //     computerScore = addScore(computerScore);
    //     console.log(playerScore, computerScore);
    //     updateDisplay();
    // }
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

function playRound(playerMove, computerMove) {
    let roundResult = compare(playerMove, computerMove);
    if (roundResult == 'playerWin') {
        playerScore = addScore(playerScore);
        updateDisplay();
    }
    else if (roundResult == 'computerWin') {
        computerScore = addScore(computerScore);
        updateDisplay();
    }
    if (checkVictory(playerScore, computerScore) != false) {
        gameMessage.textContent = checkVictory(playerScore, computerScore) + " wins! Play again?";
    }
    
}

//Checks if one player has scored 5 points or more.
function checkVictory(playerScore, computerScore) {
    if (playerScore >= 5) {
        return 'Player';
    }
    else if (computerScore >= 5) {
        return 'Computer';
    }
    else {
        return false;
    }
}

//Compares the player's move and the computer's move and determines the winner, if any.
function compare(playerSelection, computerSelection) {
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
    score++;
    return score;
}

function updateDisplay() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}