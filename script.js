let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;

const guessInput = document.getElementById("guessInput");
const resultText = document.getElementById("result");
const attemptsText = document.getElementById("attempts");

function checkGuess() {
  const userGuess = parseInt(guessInput.value);
  attemptCount++;

  if (isNaN(userGuess)) {
    resultText.textContent = "❌ Please enter a valid number!";
    resultText.style.color = "#d63031";
    return;
  }

  if (userGuess > 100) {
    resultText.textContent = "❌ Please enter a number between 1 and 100!";
    resultText.style.color = "#d63031";
    return;
  }

  if (userGuess < secretNumber) {
    resultText.textContent = "📉 Too low! Try again.";
    resultText.style.color = "#0984e3";
  } else if (userGuess > secretNumber) {
    resultText.textContent = "📈 Too high! Try again.";
    resultText.style.color = "#e17055";
  } else {
    resultText.textContent = `🎉 Correct! The number was ${secretNumber}`;
    resultText.style.color = "#00b894";
    attemptsText.textContent = `Total attempts: ${attemptCount}`;
    guessInput.disabled = true;
    document.querySelector("button").disabled = true;
    document.querySelector("button").textContent = "You guessed it!";
    createResetButton();
  }

  attemptsText.textContent = `Attempts: ${attemptCount}`;
  guessInput.value = "";
}

function createResetButton() {
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Play Again";
  resetBtn.style.marginTop = "10px";
  resetBtn.style.backgroundColor = "#00cec9";
  resetBtn.style.color = "#fff";
  resetBtn.style.border = "none";
  resetBtn.style.padding = "10px 20px";
  resetBtn.style.borderRadius = "8px";
  resetBtn.style.cursor = "pointer";
  resetBtn.onclick = () => window.location.reload();
  document.querySelector(".game-card").appendChild(resetBtn);
}

window.addEventListener("DOMContentLoaded", function () {
  if (guessInput) {
    guessInput.focus();

    guessInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        checkGuess(); // Submit guess
      }
    });

    const guessBtn = document.querySelector("button[onclick='checkGuess()']");
    if (guessBtn) {
      guessBtn.addEventListener("click", function () {
        setTimeout(() => {
          guessInput.focus();
        }, 50);
      });
    }
  }
});