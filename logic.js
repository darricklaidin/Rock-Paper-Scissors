let convertChoiceToEmoji = (strChoice) => {
    let emoji = "❌";
    switch (strChoice.toLowerCase()) {
        case "paper":
            emoji = "📄";
            break;
        case "rock":
            emoji = "🪨";
            break;
        case "scissors":
            emoji = "✂️"
            break;
        default:
            break;
    }
    return emoji;
}

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

let storeResultInTable = (result) => {
    let table = document.querySelector("table");
    let row = document.createElement('tr');
    let data = document.createElement('td');
    switch (result) {
        case "Tie":
            data.textContent = "Tied!";
            data.style.backgroundColor = "rgb(243, 252, 127)";
            row.appendChild(data);
            table.appendChild(row);
            break;
        case "Win":
            data.textContent = "Player won!";
            data.style.backgroundColor = "rgb(195, 245, 166)";
            row.appendChild(data);
            table.appendChild(row);
            break;
        case "Lose":
            data.textContent = "Computer won!";
            data.style.backgroundColor = "rgb(255, 155, 155)";
            row.appendChild(data);
            table.appendChild(row);
            break;
        default:
            break;
    }
};

let paperButton = document.querySelector("#paper-button");
let rockButton = document.querySelector("#rock-button");
let scissorsButton = document.querySelector("#scissors-button");

// Add loop by keeping track of who reaches score of 5 first
let playerScore = 0, computerScore = 0;

paperButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let enemyDisplayChoice = document.querySelector("#enemy-choice");
    enemyDisplayChoice.textContent = convertChoiceToEmoji(computerChoice);
    
    // add result to table
    storeResultInTable(playRound("paper", computerChoice));
    console.log(playRound("paper", computerChoice));
});

rockButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let enemyDisplayChoice = document.querySelector("#enemy-choice");
    enemyDisplayChoice.textContent = convertChoiceToEmoji(computerChoice);
    
    storeResultInTable(playRound("rock", computerChoice));
    
    console.log(playRound("rock", computerChoice));
});

scissorsButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let enemyDisplayChoice = document.querySelector("#enemy-choice");
    enemyDisplayChoice.textContent = convertChoiceToEmoji(computerChoice);
    
    storeResultInTable(playRound("scissors", computerChoice));
    
    console.log(playRound("scissors", computerChoice));
});

