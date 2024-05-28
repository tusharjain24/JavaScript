let randomNumber = Math.round(Math.random() * 100);
// const randomNumber = parseInt(Math.random() * 100);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const previousGuessSlot = document.querySelector(".guesses");
const remainingGuessLeft = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const para = document.createElement("p");

const previousGuess = [];
let numberOfGuesses = 1;

let playGame = true;

// Is the player ready to play the game or not
if (playGame) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess === "" || guess <= 1 || isNaN(guess) || guess > 100) {
    alert("Please enter a valid number");
  } else {
    previousGuess.push(guess);
    if (numberOfGuesses == 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random Number was ${guess}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You Guessed it right.");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The number you have entered is too LOW.`);
  } else {
    displayMessage(`The number you have entered is too HIGH.`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuessSlot.innerHTML += ` ${guess}`;
  numberOfGuesses++;
  remainingGuessLeft.innerHTML = ` ${10 - numberOfGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  para.classList.add("button");
  para.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.getElementById("newGame");
  newGameButton.addEventListener("click", (event) => {
    randomNumber = randomNumber();
    numberOfGuesses = 1;
    previousGuess = [];
    previousGuessSlot.innerHTML = "";
    remainingGuessLeft.innerHTML = ` ${10 - numberOfGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(para);
    playGame = true;
  });
}
