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

// Listener for the enter name button.
enterNameBtn.addEventListener("click", setPlayerName);

/**
 *  Sets the players name to their input, must not be blank,
 * or more than 10 letters.
 */
function setPlayerName() {
  const max = 10;
  // Prompt for the user to enter their name.
  const sign = window.prompt(
    "Enter your name",
    "Name no longer than 10 letters or blank."
  );
  // Name cannot be blank or more than ten characters.
  if (sign.length > max || sign.length === 0) {
    alert("Max 10 characters - Name cannot be empty.");
  } else {
    playerName.textContent = sign + ": ";
    versusDisplay();
  }
}

/**The pre-game round display.*/
function versusDisplay() {
  // Displays the rounds to win in the top button, sets it
  // green and disables it.
  enterNameBtn.innerText = "First to 3 Points Wins !";
  enterNameBtn.style.backgroundColor = "green";
  enterNameBtn.disabled = "true";
  // Displays player vs computer images for round start.
  firstImage.src = "assets/images/player-image.jpg";
  firstImage.setAttribute("alt", "Cartoon image of a player with glasses");
  secondImage.src = "assets/images/vs-image.jpg";
  secondImage.setAttribute("alt", "Cartoon image of versus sign");
  thirdImage.src = "assets/images/computer-image.jpg";
  thirdImage.setAttribute("alt", "Cartoon image of a computer with a face");
  // Shows the lower display and displays a good luck message to the player.
  lowerDisplay.textContent = "Good Luck !";
  lowerDisplay.style.visibility = "visible";
  // Shows the player turn button for the player
  // to continue to the next stage of the game.
  playerTurnBtn.hidden = false;
}
