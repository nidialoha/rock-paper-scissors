const userChoices = process.argv[2];

const validChoices = ["rock", "paper", "scissors"];
if (!validChoices.includes(userChoices)) {
  console.log(
    "Invalid choice. Please choose rock, paper or scissors to start the game"
  );
}

const randomChoices = Math.floor(Math.random() * 3);
const computerChoices = validChoices[randomChoices];

//Game Logic
function gameLogic(player, CPU) {
  if (player === CPU) {
    return "it's a tie! Choose again!";
  } else if (
    (player === "rock" && CPU === "paper") ||
    (player === "paper" && CPU === "scissors") ||
    (player === "scissors" && CPU === "rock")
  ) {
    return "You lost!";
  } else {
    return "You won!";
  }
}

const result = [gameLogic(userChoices, computerChoices)];
console.log(
  `You choose: ${userChoices}, Computer choose: ${computerChoices}. ${result}`
);
