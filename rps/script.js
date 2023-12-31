let scoreDisplaysContainer = document.createElement("div");
document.body.appendChild(scoreDisplaysContainer);
let computerScoreDisplay = document.createElement("div");
document.scoreDisplaysContainer.appendChild(computerScoreDisplay);
let playerScoreDisplay = document.createElement("div");
document.scoreDisplaysContainer.appendChild(playerScoreDisplay);
let rpsButtonsContainer = document.createElement("div");
document.body.appendChild(rpsButtonsContainer);
let rockButton = document.createElement("button");
document.rpsButtonsContainer.appendChild(rockButton);
let scissorsButton = document.createElement("button");
document.rpsButtonsContainer.appendChild(scissorsButton);
let paperButton = document.createElement("button");
document.rpsButtonsContainer.appendChild(paperButton);
let resetButton = document.createElement("button");

const getComputerChoice = () => {
  let computerChoice = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];
  console.log(computerChoice);
  return computerChoice;
};

const getPlayerChoice = () => {
  let validMoves = ["rock", "paper", "scissors"];
  let playerChoice = prompt("Please enter yout move: ");
  if (playerChoice != null && validMoves.includes(playerChoice.toLowerCase())) {
    return playerChoice.toLowerCase();
  } else {
    alert("That move is invalid.");
    return getPlayerChoice();
  }
};

const playRound = (playerChoice, computerChoice) => {
  let result;
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
  if (result == "It's a tie!") {
    alert("This round is a tie!");
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    return playRound(playerChoice, computerChoice);
  } else {
    alert(result);
    return result;
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  let roundResult = playRound(playerChoice, computerChoice);
  if (roundResult === "You win this round!") {
    playerScore++;
  } else {
    computerScore++;
  }
  alert("Computer score is: " + computerScore);
  alert("Player score is: " + playerScore);
  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice();
  roundResult = playRound(playerChoice, computerChoice);
  if (roundResult === "You win this round!") {
    playerScore++;
  } else {
    computerScore++;
  }
  alert("Computer score is: " + computerScore);
  alert("Player score is: " + playerScore);

  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice();
  roundResult = playRound(playerChoice, computerChoice);
  if (roundResult === "You win this round!") {
    playerScore++;
  } else {
    computerScore++;
  }
  alert("Computer score is: " + computerScore);
  alert("Player score is: " + playerScore);

  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice();
  roundResult = playRound(playerChoice, computerChoice);
  if (roundResult === "You win this round!") {
    playerScore++;
  } else {
    computerScore++;
  }
  alert("Computer score is: " + computerScore);
  alert("Player score is: " + playerScore);

  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice();
  roundResult = playRound(playerChoice, computerChoice);
  if (roundResult === "You win this round!") {
    playerScore++;
  } else {
    computerScore++;
  }
  alert("Computer score is: " + computerScore);
  alert("Player score is: " + playerScore);
  if (playerScore > computerScore) {
    alert("You win the game!");
  } else {
    alert("You lose the game!");
  }
};

/*
TODO:
-add alert "Player score is:" and also for the computer score.
-add alert that shows what the computer chose and what the player chose.
*/
