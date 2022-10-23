let getComputerChoice = () => {
    let items = Array("Rock", "Paper", "Scissors")
    return items[Math.floor(Math.random() * items.length)]
};

let getPlayerChoice = () => {
    let choice = prompt("Player choice:");
    while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() != "scissors") {
        alert("Invalid player choice");
        choice = prompt("Player choice:");
    }
    return choice;
};

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Tie";
    }
    else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") ||
             (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") ||
             (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")) {
        return "Win";
    }
    else {
        return "Lose";
    }
};

function game() {
    let wins = 0, draws = 0, rounds = 5;
    for (let index = 0; index < 5; index++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log("Player choice:", playerChoice.toUpperCase());
        console.log("Computer choice:", computerChoice.toUpperCase());
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        if (result === "Win") {
            wins++;
        }
        else if (result === "Draw") {
            draws++;
        }
    }
    let losses = rounds - wins - draws
    if (wins > losses) {
        return "Win";
    }
    else if (wins === losses) {
        return "Draw";
    }
    else {
        return "Lose";
    }
    
}

console.log("Final Result:", game());
