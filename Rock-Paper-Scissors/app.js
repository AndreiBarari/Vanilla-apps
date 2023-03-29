const options = document.querySelectorAll(".choice");
const optionsFont = document.querySelectorAll(".fa-solid");
const playerPoints = document.getElementById("playerScore");
const computerPoints = document.getElementById("computerScore");
const reset = document.getElementById("refresh");
const result = document.getElementById("result");
const turnOutcome = document.querySelector(".turn-outcome");
playerChoice = document.getElementById("playerChoice");
npcChoice = document.getElementById("npcChoice");

let playerScore = 0;
let computerScore = 0;
let round = 0;

playerPoints.innerHTML = playerScore;
computerPoints.innerHTML = computerScore;
result.innerHTML = "Pick!";

function disableChoices() {
  for (let option of options) {
    option.disabled = true;
    option.style.backgroundColor = "#cdd3df";
  }
  optionsFont.forEach(el => {
    el.style.color = "#ff7878";
  });
}

function playRound(playerSelection) {
  const computerChoice = ["Rock", "Paper", "Scissors"];

  computerSelection =
    computerChoice[Math.floor(Math.random() * computerChoice.length)].toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    res = "Tie!";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    computerScore++;
    res = "Npc wins!";
  } else {
    playerScore++;
    res = "Player wins!";
  }

  if (playerScore == 5 || computerScore == 5) {
    disableChoices();
    reset.style.visibility = "visible";
  }

  round++;
  const roundResult = document.createElement("span");
  roundResult.classList.add("turn-result");
  roundResult.textContent = `${round}. Player: ${playerSelection} | Npc: ${computerSelection}`;
  turnOutcome.appendChild(roundResult);

  playerPoints.innerHTML = playerScore;
  computerPoints.innerHTML = computerScore;
  result.innerHTML = res;
}

reset.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  round = 0;

  playerPoints.innerHTML = playerScore;
  computerPoints.innerHTML = computerScore;
  turnOutcome.innerHTML = "";
  result.innerHTML = "Pick!";
  reset.style.visibility = "hidden";
  computerSelection = "";
  playerSelection = "";
  playerChoice.textContent = "";
  npcChoice.textContent = "";

  for (let option of options) {
    option.disabled = false;
    option.style.backgroundColor = "#ecf2ff";
  }
  optionsFont.forEach(el => {
    el.style.color = "#444";
  });
});

for (let option of options) {
  option.addEventListener("click", function () {
    playRound(option.value);
    playerChoice.textContent = option.value;
    npcChoice.textContent = computerSelection;
  });
}
