//sets both scores at 0 to start
let playerScore = 0;
let computerScore = 0;

//links HTML buttons to script and adds an event listener that executes the basic functions of the game.
//Checks the victory condition and terminates the process if the condition is met (checkVictory()).
//Initiates the playing of one round, assigning the result to roundResult (startRound()).
//Adds one point to the score of the round winner, if there was one (addScore()).
//Displays the results of the round, including moves and scores (displayRound()).
//Checks the victory condition again; terminates the game and displays the game result if the condition is met (endGame()).
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

rockButton.addEventListener('click', function(event) {
    if (checkVictory(playerScore, computerScore)) {
        alert('Game Over. Refresh page to restart.');
        return;
    }
    let roundResult = startRound('rock', playerScore, computerScore);
    console.log(roundResult);
    if (roundResult == 'playerWin') {
        playerScore = addScore(playerScore)
    }
    if (roundResult == 'computerWin') {
        computerScore = addScore(computerScore);
    }
    displayRound('rock',roundResult, playerScore, computerScore);
    if (checkVictory(playerScore, computerScore)) {
        console.log('Game over!');
        endGame(playerScore, computerScore);
    }
    console.log(checkVictory(),playerScore,computerScore);
});
paperButton.addEventListener('click', function(event) {
    if (checkVictory(playerScore, computerScore)) {
        alert('Game Over. Refresh page to restart.');
        return;
    }
    let roundResult = startRound('paper', playerScore, computerScore);
    console.log(roundResult);
    if (roundResult == 'playerWin') {
        playerScore = addScore(playerScore)
    }
    if (roundResult == 'computerWin') {
        computerScore = addScore(computerScore);
    }
    displayRound('paper',roundResult, playerScore, computerScore);
    if (checkVictory(playerScore, computerScore)) {
        console.log('Game over!');
        endGame(playerScore, computerScore);
    }
    console.log(checkVictory(),playerScore,computerScore);
});
scissorsButton.addEventListener('click', function(event) {
    if (checkVictory(playerScore, computerScore)) {
        alert('Game Over. Refresh page to restart.');
        return;
    }
    let roundResult = startRound('scissors', playerScore, computerScore);
    console.log(roundResult);
    if (roundResult == 'playerWin') {
        playerScore = addScore(playerScore)
    }
    if (roundResult == 'computerWin') {
        computerScore = addScore(computerScore);
    }
    displayRound('scissors',roundResult, playerScore, computerScore);
    if (checkVictory(playerScore, computerScore)) {
        console.log('Game over!');
        endGame(playerScore, computerScore);
    }
    console.log(checkVictory(),playerScore,computerScore);
});

//Determines the computer's move (computerPlay());
//Compares the player's move and the computer's move and determines a winner (playRound()).
//returns the result to roundWinner, which is returned to the event listener.
function startRound(playerSelection, playerScore, computerScore) {
    computerSelection = computerPlay();
    let roundWinner = playRound(playerSelection, computerSelection);
    return roundWinner;
}

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

//Creates a new list item in the element id="roundList" and uses the item to display the moves, the result, and the current score.
function displayRound(playerMove,roundResult, playerScore, computerScore) {
    let displayWinner;
    let displayScore;
    let computerMove;
    const roundList = document.getElementById('roundList');
    const li = document.createElement('li');
    if (playerMove == 'rock') {
        if (roundResult == 'playerWin') {
            computerMove = 'scissors';
            displayWinner = 'You won the round!';
        }
        if (roundResult == 'computerWin') {
            computerMove = 'paper'
            displayWinner = 'The computer won the round!';
        }
        if (roundResult == 'tie') {
            computerMove = 'rock';
            displayWinner = 'The round is a tie.';
        }
    }
    else if (playerMove == 'paper') {
        if (roundResult == 'playerWin') {
            computerMove = 'rock';
            displayWinner = 'You won the round!';
        }
        if (roundResult == 'computerWin') {
            computerMove = 'scissors';
            displayWinner = 'The computer won the round!';
        }
        if (roundResult == 'tie') {
            computerMove = 'paper';
            displayWinner = 'The round is a tie.';
        }
    }
    if (playerMove == 'scissors') {
        if (roundResult == 'playerWin') {
            computerMove = 'paper';
            displayWinner = 'You won the round!';
        }
        if (roundResult == 'computerWin') {
            computerMove = 'rock';
            displayWinner = 'The computer won the round!';
        }
        if (roundResult == 'tie') {
            computerMove = 'scissors';
            displayWinner = 'The round is a tie.';
        }
    }
    if (playerScore > computerScore) {
        displayScore = "You're in the lead, " + playerScore + " to " + computerScore + ".";
    }
    if (computerScore > playerScore) {
        displayScore = "The computer is in the lead, " + computerScore + " to " + playerScore + ".";
    }
    if (playerScore == computerScore) {
        displayScore = "The game is tied, " + playerScore + " to " + computerScore + ".";
    }
    li.innerText = 'You played ' + playerMove + ' and the computer played ' + computerMove + '. ' + displayWinner + " " + displayScore;
    roundList.appendChild(li);
}

//Adds one point to the winner of the round.
function addScore(score) {
    score++;
    return score;
}

//Displays the final winner and score.
function endGame(playerScore, computerScore) {
    const gameResult = document.getElementById('gameResult');
    console.log(gameResult, playerScore, computerScore);
    if (playerScore > computerScore) {
        gameResult.textContent = "You won the game, " + playerScore + " to " + computerScore + "!";
    }
    if (playerScore < computerScore) {
        gameResult.textContent = "You lost the game, " + computerScore + " to " + playerScore + "!";
    }
}