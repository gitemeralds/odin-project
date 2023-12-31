//DOM elements and variables
let scoreDisplaysContainer = document.createElement("div");
document.body.appendChild(scoreDisplaysContainer);
let computerScoreDisplay = document.createElement("div");
scoreDisplaysContainer.appendChild(computerScoreDisplay);
let playerScoreDisplay = document.createElement("div");
scoreDisplaysContainer.appendChild(playerScoreDisplay);
let rpsButtonsContainer = document.createElement("div");
document.body.appendChild(rpsButtonsContainer);
let rockButton = document.createElement("button");
rpsButtonsContainer.appendChild(rockButton);
let scissorsButton = document.createElement("button");
rpsButtonsContainer.appendChild(scissorsButton);
let paperButton = document.createElement("button");
rpsButtonsContainer.appendChild(paperButton);
let computerScore = 0;
let playerScore = 0;
//DOM elements classes
scoreDisplaysContainer.classList.add("scoreDisplaysContainer");
computerScoreDisplay.classList.add("computerScoreDisplay");
playerScoreDisplay.classList.add("playerScoreDisplay");
rpsButtonsContainer.classList.add("rpsButtonsContainer");
//Text content
computerScoreDisplay.textContent = "Computer Score: " + computerScore;
playerScoreDisplay.textContent = "Player Score: " + playerScore;
scissorsButton.textContent = "Scissors";
paperButton.textContent = "Paper";
rockButton.textContent = "Rock";
//event handlers
scissorsButton.addEventListener("click", () => {
  playerSelection = scissorsButton.textContent.toLowerCase();
  let result = playRound(playerSelection);
  checkResults(result);
});

rockButton.addEventListener("click", () => {
  playerSelection = rockButton.textContent.toLowerCase();
  let result = playRound(playerSelection);
  checkResults(result);
});

paperButton.addEventListener("click", () => {
  playerSelection = paperButton.textContent.toLowerCase();
  let result = playRound(playerSelection);
  checkResults(result);
});

const checkResults = (result) => {
  if (result === "It's a tie!") {
    return;
  } else if (result === "You lose this round!") {
    computerScore++;
    updateComputerScore(computerScore);
  } else {
    playerScore++;
    updatePlayerScore(playerScore);
  }
  checkGameEnd(playerScore, computerScore);
};
const checkGameEnd = (playerScore, computerScore) => {
  if (playerScore === 5) {
    alert("Game over");
    alert("You win the game!");
    resetScores();
  } else if (computerScore === 5) {
    alert("Game over");
    alert("You lose the game!");
    resetScores();
  }
};

const resetScores = () => {
  let playerScore = 0;
  let computerScore = 0;
  playerScoreDisplay.textContent = "Player Score: " + playerScore;
  computerScoreDisplay.textContent = "Computer Score: " + computerScore;
};

const updatePlayerScore = (playerScore) => {
  playerScoreDisplay.textContent = "Player Score: " + playerScore;
};

const updateComputerScore = (computerScore) => {
  computerScoreDisplay.textContent = "Computer Score: " + computerScore;
};
const getComputerChoice = () => {
  let computerChoice = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];
  console.log(computerChoice);
  return computerChoice;
};

const playRound = (playerChoice) => {
  let result;
  computerChoice = getComputerChoice();
  alert("Player's choice is " + playerChoice);
  alert("Computer's choice is " + computerChoice);
  if (playerChoice == "rock") {
    if (computerChoice == "rock") {
      result = "It's a tie!";
    } else if (computerChoice == "paper") {
      result = "You lose this round!";
    } else {
      result = "You win this round!";
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "paper") {
      result = "It's a tie!";
    } else if (computerChoice == "scissors") {
      result = "You lose this round!";
    } else {
      result = "You win this round!";
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "scissors") {
      result = "It's a tie!";
    } else if (computerChoice == "rock") {
      result = "You lose this round!";
    } else {
      result = "You win this round!";
    }
  }
  alert(result);
  return result;
};
