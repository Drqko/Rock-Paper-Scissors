function computerPlay() {
    let randomNum = Math.floor(Math.random()* 3 + 1);
    let computerSelection;

    switch(randomNum){
        case 1:
            computerSelection = "Rock";
            break;
        case 2:
            computerSelection = "Paper";
            break;
        case 3:
            computerSelection = "Scissors";
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

function game() {
    let gameScore = 0;
    for(let i = 0; i < 5; i++) {
        console.log("round " + (i + 1) + " ↓");
        let computerSelection = computerPlay();
        let playerSelection = prompt("Enter your choice:");
        let winner = playRound(playerSelection, computerSelection);
        if (winner === "player") {
            gameScore = gameScore + 1;
            console.log("Player wins round!");
        } else if (winner === "computer") {
            gameScore = gameScore - 1;
            console.log("Computer wins round!")
        } else if (winner === "tie") {
            console.log("Tie!")
        }
    }
    if (gameScore == 0) {
        console.log("Tie!")
    } else if (gameScore > 0) {
        console.log("Player Wins the game!")
    } else if (gameScore < 0) {
        console.log("Computer Wins the game!")
    }
}

game();