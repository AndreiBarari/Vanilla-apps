const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const depart = document.querySelector(".depart");
const passengers = document.querySelector(".passengers");
const archive = document.querySelector(".archive");
const totalBoarded = document.getElementById("totalBoarded");
const group = document.createElement("span");

const onBoard = (group.innerHTML = '<i class="fa-solid fa-people-group"></i>');

let count = 0;
let totalCount = 0;
let totalRides = 0;
let departure = 0;

const maxSeats = 12;
const time = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

totalBoarded.innerText = `Total people waited today: ${totalCount}`;
decrement.disabled = true;
decrement.style.cursor = "not-allowed";

const randOnBus = () => {
  let onBus = Math.floor(Math.random() * maxSeats);
  let debus = Math.floor(Math.random() * onBus);
  let availableSeats = maxSeats - onBus + debus;

  // console.log(onBus);
  // console.log(debus);
  // console.log(availableSeats);

  return [debus, availableSeats, onBus];
};

const maxDepart = () => {
  let rand = randOnBus();
  const availability = rand[1];
  if (count >= availability) {
    departure = availability;
    const timeDeparture = document.createElement("span");
    timeDeparture.className = "time-depart";
    timeDeparture.innerHTML = `${time[totalRides]} -  ${onBoard} ${rand[2]} &#8659;${rand[0]} &#8657;${departure}`;
    archive.appendChild(timeDeparture);
    count = count - availability;
  } else {
    departure = count;
    const timeDeparture = document.createElement("span");
    timeDeparture.className = "time-depart";
    timeDeparture.innerHTML = `${time[totalRides]} -  ${onBoard} ${rand[2]} &#8659;${rand[0]} &#8657;${departure}`;
    archive.appendChild(timeDeparture);
    count = 0;
  }
};

const valueCheck = () => {
  if (count < 1) {
    decrement.disabled = true;
    decrement.style.cursor = "not-allowed";
  } else {
    decrement.disabled = false;
    decrement.style.cursor = "pointer";
  }
};
const rideLimit = () => {
  if (totalRides == 24) {
    depart.disabled = true;
    depart.style.color = "#999";
    depart.style.cursor = "not-allowed";
  } else {
    depart.disabled = false;
    depart.style.color = "#fff";
    depart.style.cursor = "pointer";
  }
};

increment.addEventListener("click", function incFunction() {
  count++;
  totalCount++;
  passengers.innerText = count;
  valueCheck();
});

decrement.addEventListener("click", function decFunction() {
  count--;
  // totalCount--;
  passengers.innerText = count;
  valueCheck();
});

depart.addEventListener("click", function depart() {
  maxDepart();
  totalRides++;
  passengers.innerText = count;
  totalBoarded.innerText = `Total people waited today: ${totalCount}`;

  valueCheck();
  rideLimit();
});

function reset() {
  totalCount = 0;
  count = 0;
  totalRides = 0;
  passengers.innerText = count;
  archive.innerText = "";
  totalBoarded.innerText = `Total people waited today: ${totalCount}`;

  rideLimit();
  valueCheck();
}
