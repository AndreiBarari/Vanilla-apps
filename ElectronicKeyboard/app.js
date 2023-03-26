const main = document.getElementById("main");
const volume = document.getElementById("volume");

// import data from "./data.json" assert { type: "json" };
const data = [
  {
    letter: "a",
    note: "Do",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav",
    className: "white-key",
    dataNote: "1",
  },

  {
    letter: "s",
    note: "Re",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav",
    className: "white-key",
    dataNote: "2",
  },

  {
    letter: "d",
    note: "Mi",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav",
    className: "white-key",
    dataNote: "3",
  },
  {
    letter: "f",
    note: "Fa",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav",
    className: "white-key",
    dataNote: "4",
  },

  {
    letter: "g",
    note: "Sol",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav",
    className: "white-key",
    dataNote: "5",
  },

  {
    letter: "h",
    note: "La",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav",
    className: "white-key",
    dataNote: "6",
  },

  {
    letter: "j",
    note: "Si",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav",
    className: "white-key",
    dataNote: "7",
  },
  {
    letter: "k",
    note: "Do",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav",
    className: "white-key",
    dataNote: "8",
  },

  {
    letter: "l",
    note: "Re",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav",
    className: "white-key",
    dataNote: "9",
  },

  {
    letter: ";",
    note: "Mi",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav",
    className: "white-key",
    dataNote: "10",
  },
  {
    letter: "w",
    note: "Do#",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav",
    className: "black-key",
    dataNote: "11",
  },
  {
    letter: "e",
    note: "Re#",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav",
    className: "black-key",
    dataNote: "12",
  },
  {
    letter: "t",
    note: "Fa#",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav",
    className: "black-key",
    dataNote: "13",
  },
  {
    letter: "y",
    note: "Sol#",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav",
    className: "black-key",
    dataNote: "14",
  },
  {
    letter: "u",
    note: "La#",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav",
    className: "black-key",
    dataNote: "15",
  },
  {
    letter: "o",
    note: "Do#",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav",
    className: "black-key",
    dataNote: "16",
  },
  {
    letter: "p",
    note: "Re#",
    sound: "http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav",
    className: "black-key",
    dataNote: "17",
  },
];

for (let note of data) {
  const keyNote = document.createElement("div");
  const keyText = document.createElement("span");
  const audio = new Audio(note.sound);

  keyNote.classList.add(note.className, "key");
  keyNote.dataset.key = note.dataNote;
  keyText.classList.add("key-text");

  keyText.textContent = `${note.letter.toUpperCase()}`;

  keyNote.appendChild(keyText);
  main.appendChild(keyNote);
  // main.appendChild(audio);

  window.addEventListener("keypress", event => {
    if (event.key === note.letter) {
      audio.currentTime = 0;
      audio.play();
      keyNote.classList.add("playing");
      setTimeout(() => {
        keyNote.classList.remove("playing");
      }, 100);
    }
  });
  volume.addEventListener("input", e => {
    audio.volume = e.target.value;
  });
}
// console.log(keyAudio);

// window.addEventListener("keypress", event => {
//   const keyNote = document.getElementsByClassName("key");
//   const keyAudio = document.querySelectorAll("audio");
//   for (let note of data) {
//     const audio = new Audio(keyAudio[note.dataNote - 1].src);
//     if (event.key === note.letter) {
//       audio.currentTime = 0;
//       audio.play();
//       keyNote[note.dataNote - 1].classList.add("playing");
//       setTimeout(() => {
//         keyNote[note.dataNote - 1].classList.remove("playing");
//       }, 100);
//     }
//   }
// });

// const song = "aasdassdaaasdassda";
// let interval = null;
// let counter = 0;

// const songPlayed = () => {
//   for (note of data) {
//     if (note.letter === song[counter % song.length]) {
//       const audio = new Audio(note.sound);
//       audio.currentTime = 0;
//       audio.play();
//     }
//   }

//   counter++;
// };

// interval = setInterval(songPlayed, 1000);

// clearInterval(interval);
