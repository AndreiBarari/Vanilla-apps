const toggle = document.getElementById("toggle");
const reset = document.getElementById("reset");
const save = document.getElementById("save");
const timer = document.querySelector(".display");
const archive = document.querySelector(".archive");

let toggleOn = true;
let interval = null;
let currentPlace = 0;
let ev;

let [milliseconds, seconds, minutes] = [0, 0, 0];
timer.innerText = "00 : 00 : 000";

window.addEventListener("keyup", event => {
  ev = event;
  console.log(ev.key);
  if (ev.key === "s") {
    toggleOn = !toggleOn;
    console.log(ev.key);
    if (!toggleOn) {
      toggle.innerText = "Stop";
      if (interval !== null) {
        clearInterval(interval);
      }
      interval = setInterval(updateTimer, 10);
    } else {
      toggle.innerText = "Start";
      clearInterval(interval);
    }
  } else if (ev.key === "r") {
    clearInterval(interval);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timer.innerHTML = "00 : 00 : 000";
    toggleOn = true;
    toggle.innerText = "Start";
    archive.innerHTML = "";
    save.disabled = false;
    currentPlace = 0;
  } else if (ev.key === "c") {
    currentPlace++;

    switch (currentPlace) {
      case 1:
        saveTimer("1st");
        scoreBoard();
        save.classList.add("pressed");
        setTimeout(() => {
          save.classList.remove("pressed");
        }, 100);
        break;
      case 2:
        saveTimer("2nd");
        scoreBoard();
        save.classList.add("pressed");
        setTimeout(() => {
          save.classList.remove("pressed");
        }, 100);
        break;
      case 3:
        saveTimer("3rd");
        scoreBoard();
        save.classList.add("pressed");
        setTimeout(() => {
          save.classList.remove("pressed");
        }, 100);
        save.disabled = true;
        toggleOn = true;
        toggle.innerText = "Start";
        clearInterval(interval);
    }
  }
});

toggle.addEventListener("click", function tog() {
  toggleOn = !toggleOn;
  if (!toggleOn) {
    toggle.innerText = "Stop";
    if (interval !== null) {
      clearInterval(interval);
    }
    interval = setInterval(updateTimer, 10);
  } else {
    toggle.innerText = "Start";
    clearInterval(interval);
  }
});

save.addEventListener("click", () => {
  currentPlace++;
  switch (currentPlace) {
    case 1:
      saveTimer("1st");
      scoreBoard();
      break;
    case 2:
      saveTimer("2nd");
      scoreBoard();
      break;
    case 3:
      saveTimer("3rd");
      scoreBoard();
      save.disabled = true;
      toggleOn = true;
      toggle.innerText = "Start";
      clearInterval(interval);
  }
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  [milliseconds, seconds, minutes] = [0, 0, 0];
  timer.innerHTML = "00 : 00 : 000";
  toggleOn = true;
  toggle.innerText = "Start";
  archive.innerHTML = "";
  save.disabled = false;
  currentPlace = 0;
});

function updateTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
      }
    }
  }
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;
  timer.innerText = ` ${m} : ${s} : ${ms}`;
}

function saveTimer(arg) {
  const previousTimer = document.createElement("span");
  previousTimer.className = "previousTimer";
  previousTimer.innerText = `${arg} - ${timer.innerText}`;
  archive.appendChild(previousTimer);
}

const scores = document.getElementsByClassName("previousTimer");
function scoreBoard() {
  let fontModifier = 48;
  for (let i = 0; i < scores.length; i++) {
    fontModifier -= 6;
    scores[i].style.fontSize = `${fontModifier}px`;
  }
  fontModifier = 48;
}
