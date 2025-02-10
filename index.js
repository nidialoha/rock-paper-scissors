const userChoice = document.getElementById("userChoice");
// const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const validChoices = ["Rock", "Paper", "Scissors"];
const randomChoices = Math.floor(Math.random() * 3);
const computerChoice = validChoices[randomChoices];

// Antwort anzeigen
document.getElementById(
  "computerChoice"
).innerText = `Der Computer wählt: ${computerChoice}`;

function playGame(playerChoice, CPUChoice) {
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

// const result = [gameLogic(userChoice, computerChoice)];
// console.log(
//   `You choose: ${userChoice}, Computer choose: ${computerChoice}. ${result}`
// );

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", function () {
  //   alert("You choose: Rock, Computer choose: ${computerChoice}. ${result}");
  alert("Button clicked!");
});

// const validChoices = ["rock", "paper", "scissors"];
// if (!validChoices.includes(userChoice)) {
//   console.log(
//     "Invalid choice. Please choose rock, paper or scissors to start the game"
//   );
// }

// const randomChoice = Math.floor(Math.random() * 3);
// const computerChoice = validChoices[randomChoice];

// function gameLogic(playerChoice, CPUChoice) {
//   if (
//     (playerChoice === "paper" && CPUChoice === "scissors") ||
//     (playerChoice === "rock" && CPUChoice === "paper") ||
//     (playerChoice === "scissors" && CPUChoice === "rock")
//   ) {
//     return "You lost!";
//   } else if (
//     (playerChoice === "paper" && CPUChoice === "rock") ||
//     (playerChoice === "rock" && CPUChoice === "scissors") ||
//     (playerChoice === "scissors" && CPUChoice === "paper")
//   ) {
//     return "You won!";
//   } else {
//     return "its a tie! Let's play again!";
//   }
// }

// const result = [gameLogic(userChoices, computerChoices)];
// console.log(
//   `You choose: ${userChoices}, Computer choose: ${computerChoices}. ${result}`
// );
