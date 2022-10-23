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
            playerScore++;
            break;
        case "Lose":
            data.textContent = "Computer won!";
            data.style.backgroundColor = "rgb(255, 155, 155)";
            row.appendChild(data);
            table.appendChild(row);
            computerScore++
            break;
        default:
            break;
    }
};

let storeFinalResult = (winner) => {
    let table = document.querySelector("table");
    let row = document.createElement('tr');
    let data = document.createElement('td');
    if (winner === "player") {
        data.textContent = "Player wins!";
        data.style.fontWeight = "bold";
        data.style.backgroundColor = "rgb(235, 162, 235)";
        row.appendChild(data);
        table.appendChild(row);
    }
    else if (winner === "computer") {
        data.textContent = "Computer wins!";
        data.style.fontWeight = "bold";
        data.style.backgroundColor = "rgb(235, 162, 235)";
        row.appendChild(data);
        table.appendChild(row);
    }
};

let clearResultTable = () => {
    let table = document.querySelector("table");
    let tableRows = Array.from(document.querySelectorAll("tr"));
    for (let index = 1; index < tableRows.length; index++) {
        const element = tableRows[index];
        table.removeChild(element);
    }
};

var playerScore = computerScore = 0;

let paperButton = document.querySelector("#paper-button");
let rockButton = document.querySelector("#rock-button");
let scissorsButton = document.querySelector("#scissors-button");

paperButton.addEventListener("click", () => {
    if (playerScore === 5 || computerScore === 5) {
        // restart the game
        clearResultTable();
        playerScore = computerScore = 0;
    }
    let computerChoice = getComputerChoice();
    let enemyDisplayChoice = document.querySelector("#enemy-choice");
    enemyDisplayChoice.textContent = convertChoiceToEmoji(computerChoice);
    storeResultInTable(playRound("paper", computerChoice));
    if (playerScore === 5) {
        storeFinalResult("player");
    } 
    else if (computerScore === 5) {
        storeFinalResult("computer");
    }
});

rockButton.addEventListener("click", () => {
    if (playerScore === 5 || computerScore === 5) {
        // restart the game
        clearResultTable();
        playerScore = computerScore = 0;
    }
    let computerChoice = getComputerChoice();
    let enemyDisplayChoice = document.querySelector("#enemy-choice");
    enemyDisplayChoice.textContent = convertChoiceToEmoji(computerChoice);
    storeResultInTable(playRound("rock", computerChoice));
    if (playerScore === 5) {
        storeFinalResult("player");
    } 
    else if (computerScore === 5) {
        storeFinalResult("computer");
    }
});

scissorsButton.addEventListener("click", () => {
    if (playerScore === 5 || computerScore === 5) {
        // restart the game
        clearResultTable();
        playerScore = computerScore = 0;
    }
    let computerChoice = getComputerChoice();
    let enemyDisplayChoice = document.querySelector("#enemy-choice");
    enemyDisplayChoice.textContent = convertChoiceToEmoji(computerChoice);
    storeResultInTable(playRound("scissors", computerChoice));
    if (playerScore === 5) {
        storeFinalResult("player");
    } 
    else if (computerScore === 5) {
        storeFinalResult("computer");
    }
});
