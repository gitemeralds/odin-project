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

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

const playRound = (playerChoice, computerChoice) => {
  let result;
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

playRound(playerChoice, computerChoice);

/*
TODO:
-test play round function
*/
