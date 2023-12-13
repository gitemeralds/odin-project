const getComputerChoice = () => {
  let computerChoice = ["Rock", "Paper", "Scissors"][
    Math.floor(Math.random() * 3)
  ];
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
