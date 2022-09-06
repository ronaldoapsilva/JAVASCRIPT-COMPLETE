const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULTS_DRAW = "DRAW";
const RESULTS_PLAYERS_WINS = "PLAYER_WINS";
const RESULTS_COMPUTER_WINS = "COMPUTES_WINS";

let gamingIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} OR ${SCISSORS}`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choise! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULTS_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice == SCISSORS && pChoice === ROCK)
    ? RESULTS_PLAYERS_WINS
    : RESULTS_COMPUTER_WINS;

  // if (cChoice === pChoice) {
  //   return RESULTS_DRAW;
  // } else if (
  //   (cChoice === ROCK && pChoice === PAPER) ||
  //   (cChoice === PAPER && pChoice === SCISSORS) ||
  //   (cChoice == SCISSORS && pChoice === ROCK)
  // ) {
  //   return RESULTS_PLAYERS_WINS;
  // } else {
  //   return RESULTS_COMPUTER_WINS;
  // }

startGameBtn.addEventListener("click", () => {
  if (gamingIsRunning) {
    return;
  }
  gamingIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerSelection);
  console.log(winner);
});
