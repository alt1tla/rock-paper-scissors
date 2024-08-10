const choicesRPS = ["rock", "paper", "scissors"];
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const computerDisplay = document.querySelector(".computerDisplay");
const resultDisplay = document.querySelector(".result");
const winsDisplay = document.querySelector(".wins");
const lossesDisplay = document.querySelector(".losses");
const drawsDisplay = document.querySelector(".draws");
const roundsDisplay = document.querySelector(".rounds");
const rpsBlock = document.querySelector(".controls");
const rpslsBlock = document.querySelector(".controls-extended");
const resetBtn = document.querySelector("#btn-reset");
const toggleSwitch = document.getElementById("toggleSwitch");
const dialog = document.getElementById("dialog");
const openButton = document.getElementById("btn-rules");
const cancelButton = document.getElementById("btn-close");

let wins = 0,
  losses = 0,
  draws = 0,
  rounds = 0;

function playGameRPS(playerChoice) {
  const computerChoice =
    choicesRPS[Math.floor(Math.random() * choicesRPS.length)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "it's a tie!";
    draws += 1;
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "you win!" : "you lose!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "you win!" : "you lose!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "you win!" : "you lose!";
        break;
    }

    result === "you win!" ? (wins += 1) : (losses += 1);
  }

  rounds += 1;

  computerDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses;
  drawsDisplay.textContent = draws;
  roundsDisplay.textContent = rounds;
}

function playGameRPSLS(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "it's a tie!";
    draws += 1;
  } else {
    switch (playerChoice) {
      case "rock":
        result =
          computerChoice === "scissors" || computerChoice === "lizard"
            ? "you win!"
            : "you lose!";
        break;
      case "paper":
        result =
          computerChoice === "rock" || computerChoice === "spock"
            ? "you win!"
            : "you lose!";
        break;
      case "scissors":
        result =
          computerChoice === "paper" || computerChoice === "lizard"
            ? "you win!"
            : "you lose!";
        break;
      case "lizard":
        result =
          computerChoice === "paper" || computerChoice === "spock"
            ? "you win!"
            : "you lose!";
        break;
      case "spock":
        result =
          computerChoice === "rock" || computerChoice === "scissors"
            ? "you win!"
            : "you lose!";
        break;
    }

    result === "you win!" ? (wins += 1) : (losses += 1);
  }

  rounds += 1;

  computerDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses;
  drawsDisplay.textContent = draws;
  roundsDisplay.textContent = rounds;
}

resetBtn.addEventListener("click", () => {
  (wins = 0), (losses = 0), (draws = 0), (rounds = 0);
  computerDisplay.textContent = "waiting";
  resultDisplay.textContent = "you choose first";
  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses;
  drawsDisplay.textContent = draws;
  roundsDisplay.textContent = rounds;
});

toggleSwitch.addEventListener("change", function (event) {
  if (event.target.checked) {
    rpsBlock.classList.toggle("hide");
    rpslsBlock.classList.toggle("hide");
    (wins = 0), (losses = 0), (draws = 0), (rounds = 0);
    computerDisplay.textContent = "waiting";
    resultDisplay.textContent = "you choose first";
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawsDisplay.textContent = draws;
    roundsDisplay.textContent = rounds;
  } else {
    rpsBlock.classList.toggle("hide");
    rpslsBlock.classList.toggle("hide");
    (wins = 0), (losses = 0), (draws = 0), (rounds = 0);
    computerDisplay.textContent = "waiting";
    resultDisplay.textContent = "you choose first";
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawsDisplay.textContent = draws;
    roundsDisplay.textContent = rounds;
  }
});

openButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", () => {
  dialog.close();
});

const handlerModalClick = ({ currentTarget, target }) => {
  const isClickedOnBackdrop = target === currentTarget;
  if (isClickedOnBackdrop) {
    currentTarget.close();
  }
};

dialog.addEventListener("click", handlerModalClick);
