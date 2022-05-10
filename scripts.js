const logContainer = document.querySelector('#logs');
const content = document.createElement('div')

function computerPlay() {
    let randomNum = Math.floor(Math.random()* 3 + 1);
    let computerSelection;

    switch(randomNum){
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log("Player selected " + playerSelection);
    computerSelection = computerSelection.toLowerCase();
    console.log("Computer selected " + computerSelection);
    let winner;

    if (playerSelection === computerSelection) {
        winner = "tie"
    } else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        winner = "player"
    } else if(computerSelection === "rock" && playerSelection === "scissors" || computerSelection === "paper" && playerSelection === "rock" || computerSelection === "scissors" && playerSelection === "paper") {
        winner = "computer"
    }
    return winner
}

// function game(player) {
//     let gameScore = 0;
//     for(let i = 0; i < 5; i++) {
//         console.log("round " + (i + 1) + " ↓");
//         let computerSelection = computerPlay();
//         let playerSelection = player
//         let winner = playRound(playerSelection, computerSelection);
    //     if (winner === "player") {
    //         gameScore = gameScore + 1;
    //         console.log("Player wins round!");
    //     } else if (winner === "computer") {
    //         gameScore = gameScore - 1;
    //         console.log("Computer wins round!")
    //     } else if (winner === "tie") {
    //         console.log("Tie!")
    //     }
    // }
//     if (gameScore == 0) {
//         console.log("Tie!")
//     } else if (gameScore > 0) {
//         console.log("Player Wins the game!")
//     } else if (gameScore < 0) {
//         console.log("Computer Wins the game!")
//     }
// }

let playerScore = 0;
let compScore = 0;
let roundCount = 0;

function game(player) {
    let compChoice = computerPlay();
    let winner = playRound(player, compChoice);

    if (winner === "player") {
        playerScore += 1;
        roundCount += 1;
        scoreboard();
        content.classList.add('content');
        content.textContent = 'You won this round!';
        content.style.color = 'black';
        logContainer.appendChild(content);
    } else if (winner === "computer") {
        compScore += 1;
        roundCount += 1;
        scoreboard();
        content.classList.add('content');
        content.textContent = 'You lost this round!';
        content.style.color = 'black';
        logContainer.appendChild(content);
    } else if (winner === "tie") {
        roundCount += 1;
        scoreboard();
        content.classList.add('content');
        content.textContent = 'Tie round!';
        content.style.color = 'black';
        logContainer.appendChild(content);
    }

    if (roundCount >= 5) {
        if (playerScore === compScore) {
            content.classList.add('content');
            playerScore = 0;
            compScore = 0;
            scoreboard();
            content.textContent = 'Tie Game!';
            content.style.color = 'white';
            logContainer.appendChild(content);
        } else if (playerScore > compScore) {
            content.classList.add('content');
            playerScore = 0;
            compScore = 0;
            scoreboard();
            content.textContent = 'You win the game!';
            content.style.color = 'white';
            logContainer.appendChild(content);
        } else if (playerScore < compScore) {
            content.classList.add('content');
            playerScore = 0;
            compScore = 0;
            scoreboard();
            content.textContent = 'You lost the Game!';
            content.style.color = 'white';
            logContainer.appendChild(content);
        }
        roundCount = 0;
    }
    console.log(roundCount);
}
const scoreContainer = document.querySelector('#score');
const playerScorecount = document.createElement('div');
const compScorecount = document.createElement('div');

function scoreboard() {
    playerScorecount.classList.add('scoreItems');
    playerScorecount.textContent = `Player Score: ${playerScore}`;
    playerScorecount.style.color = 'white';
    scoreContainer.appendChild(playerScorecount);

    compScorecount.classList.add('scoreItems');
    compScorecount.textContent = `Computer Score: ${compScore}`;
    compScorecount.style.color = 'white';
    scoreContainer.appendChild(compScorecount);
}
scoreboard();