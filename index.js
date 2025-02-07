// const userChoice = process.argv[2];
// const computerChoice = "?????";
// // Math.floor
// // Math.random

// const validChoices = ["rock", "paper", "scissors"];

// if (!validChoices.includes(userChoice)) {
//   console.log(
//     "Invalid choice. Please choose rock, paper or scissors to start the game"
//   );
// }

// // Gamelogic
// // Function (if/else & switch?)

const userChoice = process.argv[2];

const validChoices = ["rock", "paper", "scissors"];
if (!validChoices.includes(userChoice)) {
  console.log(
    "Invalid choice. Please choose rock, paper or scissors to start the game"
  );
}

const randomChoice = Math.floor(Math.random() * 3);
const computerChoice = validChoices[randomChoice];

function gameLogic(playerChoice, CPUChoice) {
  if (
    (playerChoice === "paper" && CPUChoice === "scissors") ||
    (playerChoice === "rock" && CPUChoice === "paper") ||
    (playerChoice === "scissors" && CPUChoice === "rock")
  ) {
    return "You lost!";
  } else if (
    (playerChoice === "paper" && CPUChoice === "rock") ||
    (playerChoice === "rock" && CPUChoice === "scissors") ||
    (playerChoice === "scissors" && CPUChoice === "paper")
  ) {
    return "You won!";
  } else {
    return "its a tie! Let's play again!";
  }
}

const result = gameLogic(userChoice, computerChoice);
console.log(
  `you choose: ${userChoice}, computer choose: ${computerChoice}. ${result}`
);
