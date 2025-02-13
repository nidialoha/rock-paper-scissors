const buttons = document.querySelectorAll("button");
const playerH2 = document.getElementById("playerChoice");
const computerH2 = document.getElementById("computerChoice");
const winnerH2 = document.getElementById("winner");

const validChoices = ["rock", "paper", "scissors"];

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins";
  }
}

// console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.textContent.toLocaleLowerCase();
    const computerChoice =
      validChoices[Math.floor(Math.random() * validChoices.length)];

    // playerH2.textContent = playerChoice;
    // computerH2.textContent = computerChoice;

    playerH2.textContent = `You choose: ${playerChoice}`;
    computerH2.textContent = `Computer choice: ${computerChoice}`;
    winnerH2.textContent = `Winner is: ${getWinner(
      playerChoice,
      computerChoice
    )}`;
  });
});
