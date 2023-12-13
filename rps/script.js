const getComputerChoice = () => {
  let computerChoice = ["Rock", "Paper", "Scissors"][
    Math.floor(Math.random() * 3)
  ];
  return computerChoice;
};
