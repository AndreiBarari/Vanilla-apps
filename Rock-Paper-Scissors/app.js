const choices = document.querySelectorAll("button");
const playerPoints = document.getElementById("playerScore");
const computerPoints = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

playerPoints.innerHTML = playerScore;
computerPoints.innerHTML = computerScore;
result.innerHTML = "Make your choice!";

function disableChoices() {
  choices.forEach((choice) => {
    choice.disabled = true;
  });
}

function playRound(playerSelection) {
  const computerChoice = ["Rock", "Paper", "Scissors"];

  computerSelection =
    computerChoice[
      Math.floor(Math.random() * computerChoice.length)
    ].toLowerCase();
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == computerSelection) {
    result = "Tie!";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore++;
    result = "Computer wins!";
  } else {
    playerScore++;
    result = "Player wins!";
  }

  if (playerScore == 5 || computerScore == 5) {
    disableChoices();
    document.getElementById("refresh").style.visibility = "visible";
  }

  playerPoints.innerHTML = playerScore;
  computerPoints.innerHTML = computerScore;
  document.getElementById("result").innerHTML = result;
}

document
  .getElementById("refresh")
  .addEventListener("click", function newGame() {
    window.location.reload("Refresh");
  });

choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    playRound(choice.value);
    document.getElementById("playerChoice").innerHTML = choice.value;
    document.getElementById("npcChoice").innerHTML = computerSelection;
  });
});
