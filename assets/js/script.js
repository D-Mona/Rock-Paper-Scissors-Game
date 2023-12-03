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

// Listener for the player turn button.
playerTurnBtn.addEventListener("click", playerTurnDisplay);

/** Rock-Paper-Scissors buttons are displayed for the player to make their choice.*/
function playerTurnDisplay() {
  //Displays a question mark for the players turn.
  secondImage.src = "assets/images/question-mark-image.jpg";
  // Hides the first Image(Player).
  firstImage.hidden = true;
  // Hides the third image(Computer).
  thirdImage.hidden = true;
  // Hides the player turn button.
  playerTurnBtn.hidden = true;
  // Shows the player choice buttons(Rock, paper, scissors).
  playerChoiceContainer.hidden = false;
  // Hides the upper display.
  upperDisplay.style.visibility = "hidden";
  // Displays a "choose" message to the player in the lower display.
  lowerDisplay.textContent = "Choose !";
}

// Listeners for the rock-paper-scissors buttons.
// Sets the value of the playerChoice variable when clicked.
rockBtn.addEventListener("click", function () {
  playerChoice = "rock";
  playerTurnTakenDisplay();
});
paperBtn.addEventListener("click", function () {
  playerChoice = "paper";
  playerTurnTakenDisplay();
});
scissorsBtn.addEventListener("click", function () {
  playerChoice = "scissors";
  playerTurnTakenDisplay();
});

/** Penultimate display.
 * Checks if the player has chosen rock, paper or scissors.
 * Displays an image of the players choice.
 * Displays a "You're Locked In" in a message in the lower display.
 */
function playerTurnTakenDisplay() {
  // Checks the players choice.
  if (playerChoice === "rock") {
    secondImage.src = "assets/images/rock-image.jpg";
    secondImage.setAttribute("alt", "Cartoon image of a rock");
  } else if (playerChoice === "paper") {
    secondImage.src = "assets/images/paper-image.jpg";
    secondImage.setAttribute("alt", "Cartoon image of paper");
  } else {
    secondImage.src = "assets/images/scissors-image.jpg";
    secondImage.setAttribute("alt", "Cartoon image of a scissors");
  }
  lowerDisplay.textContent = "You're Locked In With " + playerChoice + " !";
  // Hides the player choice buttons.
  playerChoiceContainer.hidden = true;
  // Shows the computer turn button.
  computerTurnBtn.hidden = false;
}

// Listener for the computer turn button.
computerTurnBtn.addEventListener("click", roundWinnerDisplay);

/** Make a random choice of rock, paper or scissors for the computers turn.
 * 1 to 3 being Rock to Scissors.
 */
function takeComputerTurn() {
  const ran = Math.floor(Math.random() * 4);
  if (ran === 1) {
    computerChoice = "rock";
  } else if (ran === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}

/** Checks the winner of the game from the player and computer choice variables.*/
function determineRoundWinner() {
  let winner = "";
  if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    winner = "computer";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    winner = "player";
  } else {
    winner = "draw";
  }
  return winner;
}

