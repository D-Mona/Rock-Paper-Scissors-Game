// DOM References.
// Images.
const firstImage = document.getElementById("first-image");
const secondImage = document.getElementById("second-image");
const thirdImage = document.getElementById("third-image");

// Displays
const upperDisplay = document.getElementById("upper-display");
const lowerDisplay = document.getElementById("lower-display");

// Buttons
const scissorsBtn = document.getElementById("scissors-button");
const paperBtn = document.getElementById("paper-button");
const rockBtn = document.getElementById("rock-button");
const playerTurnBtn = document.getElementById("player-turn-button");
const computerTurnBtn = document.getElementById("computer-turn-button");
const tryAgainBtn = document.getElementById("try-again-button");
const enterNameBtn = document.getElementById("enter-name-button");
const playerChoiceContainer = document.getElementById(
  "player-choice-container"
);

// Scoreboard
const playerName = document.getElementById("player-name");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

// Variables for the player and computer choices,
// to be used in the round decision process.
let playerChoice = "";
let computerChoice = "";

// On Dom Loaded, display the new game display.
document.addEventListener("DOMContentLoaded", function () {
  newGameDisplay();
});

/**
 * Sets the initial display of the game.
 */
function newGameDisplay() {
  // Hides the upper(Winner/Draw) display, maintaining page layout.
  upperDisplay.style.visibility = "hidden";
  // Hides the lower(Game decision) display, maintaining page layout.
  lowerDisplay.style.visibility = "hidden";
  // Hides the player choice buttons.
  playerChoiceContainer.hidden = true;
  //* Hides the player, computer turn, and try again buttons.
  playerTurnBtn.hidden = true;
  computerTurnBtn.hidden = true;
  tryAgainBtn.hidden = true;
}
