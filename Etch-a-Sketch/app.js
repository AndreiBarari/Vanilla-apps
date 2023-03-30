const container = document.querySelector("#container");
const reset = document.getElementById("reset");
const colorPicker = document.querySelector("#colorPicker");
const title = document.getElementById("title");
const toggle = document.querySelector("#toggle");

let nrCells = 10;
let toggleSwitch = false;

function generateGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    container.appendChild(div);

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  }
}

window.addEventListener("keyup", event => {
  if (event.key === "s") {
    toggleSwitch = !toggleSwitch;
    toggle.classList.remove("pressed");
  }
  if (toggleSwitch) {
    toggle.classList.add("pressed");
  }
  return toggleSwitch;
});

toggle.addEventListener("click", () => {
  toggleSwitch = !toggleSwitch;
  toggle.classList.remove("pressed");

  if (toggleSwitch) {
    toggle.classList.add("pressed");
  }
  return toggleSwitch;
});

generateGrid(nrCells);

function randColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

function color() {
  document.getElementById("main").style.boxShadow = `0 0 24px ${randColor()}`;
  let cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
      if (!toggleSwitch) return;
      cell.style.backgroundColor = randColor();
    });
  });
}

color();

reset.addEventListener("click", () => {
  toggleSwitch = true;
  let cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.style.backgroundColor = "white";
  });
  color();
  colorTitle();
});

const resize = document.getElementById("resize");

resize.addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    container.removeChild(cell);
  });
  nrCells = prompt("Enter a new grid size between 4 and 100. Default is 16*16");
  if (nrCells >= 4 && nrCells <= 100) {
    container.style.gridTemplateColumns = `repeat(${nrCells}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${nrCells}, 1fr)`;
    generateGrid(nrCells);
    color();
    colorTitle();
  } else {
    alert("Please enter a valid number");
    generateGrid(16);
    color();
    colorTitle();
  }
});

colorPicker.addEventListener("click", () => {
  colorPicker.addEventListener("input", () => {
    document.getElementById("main").style.boxShadow = `0 0 24px ${colorPicker.value}`;
  });
  let cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
      if (!toggleSwitch) return;
      cell.style.backgroundColor = colorPicker.value;
    });
  });
});

document.getElementById("blackColor").addEventListener("click", () => {
  document.getElementById("main").style.boxShadow = `0 0 24px #000`;
  let cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
      if (!toggleSwitch) return;
      cell.style.backgroundColor = "black";
    });
  });
});

document.getElementById("erase").addEventListener("click", () => {
  document.getElementById("main").style.boxShadow = `0 0 24px #fff`;
  let cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
      if (!toggleSwitch) return;
      cell.style.backgroundColor = "white";
    });
  });
});
