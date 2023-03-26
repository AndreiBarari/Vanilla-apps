const previousOutput = document.getElementById("previousOutput");
const currentOutput = document.getElementById("currentOutput");
const currentOperator = document.getElementById("currentOperator");
const numbers = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const archive = document.getElementById("prevOperations");

let count = 0;

function appendNumber(number) {
  currentOutput.innerText += number;
}

function choseOperator(operator) {
  if (!currentOutput.innerText && !previousOutput.innerText) return;
  currentOperator.innerText = operator;
  if (previousOutput.innerText) return;
  previousOutput.innerText = currentOutput.innerText;
  currentOutput.innerText = "";
}

function calculate() {
  let operation;
  const prevOperand = parseFloat(previousOutput.innerText);
  const currOperand = parseFloat(currentOutput.innerText);

  if (isNaN(prevOperand) || isNaN(currOperand)) return;
  count++;
  switch (currentOperator.innerText) {
    case "+":
      operation = prevOperand + currOperand;
      break;
    case "-":
      operation = prevOperand - currOperand;
      break;
    case "*":
      operation = prevOperand * currOperand;
      break;
    case "÷":
      operation = prevOperand / currOperand;
      break;
    case "":
      alert("Please provide an operator");
      return;
  }
  const archiveCell = document.createElement("span");
  archiveCell.classList.add("archive-cell");
  archiveCell.innerText += `${count}. ${previousOutput.innerText} ${currentOperator.innerText} ${currentOutput.innerText} = ${operation}`;
  archive.appendChild(archiveCell);
  previousOutput.innerText = operation;
  currentOutput.innerText = "";
  currentOperator.innerText = "";
}

function remove() {
  if (currentOutput.innerText === "") {
    currentOutput.innerText = previousOutput.innerText;
    previousOutput.innerText = "";
    currentOperator.innerText = "";
  }
  currentOutput.innerText = currentOutput.innerText.toString().slice(0, -1);
}

function clear() {
  currentOutput.innerText = "";
  previousOutput.innerText = "";
  currentOperator.innerText = "";
  count = 0;
}

numbers.forEach(number => {
  number.addEventListener("click", () => {
    appendNumber(number.innerText);
  });
});

operators.forEach(operator => {
  operator.addEventListener("click", () => {
    choseOperator(operator.innerText);
  });
});

equalsButton.addEventListener("click", () => {
  calculate();
});

deleteButton.addEventListener("click", () => {
  remove();
});

allClearButton.addEventListener("click", () => {
  clear();
});
