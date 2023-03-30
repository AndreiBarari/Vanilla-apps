const main = document.getElementById("main");
const volume = document.getElementById("volume");
const springSongBtn = document.querySelector("#primavara");
const undertakerSongBtn = document.querySelector("#intro-undertaker");

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

function handleKeyPress(note, keyNote, audio) {
  if (event.key === note.letter) {
    audio.currentTime = 0;
    audio.play();
    keyNote.classList.add("playing");
    setTimeout(() => {
      keyNote.classList.remove("playing");
    }, 100);
  }
}

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

  window.addEventListener("keypress", () => {
    handleKeyPress(note, keyNote, audio);
  });

  volume.addEventListener("input", e => {
    audio.volume = e.target.value;
  });
}

// Autoplay
let isPlaying = false;

function autoPlay(letter) {
  for (let note of data) {
    if (note.letter === letter) {
      const keyNote = document.querySelector(`[data-key="${note.dataNote}"]`);
      const audio = new Audio(note.sound);
      audio.currentTime = 0;
      audio.play();
      keyNote.classList.add("playing");
      setTimeout(() => {
        keyNote.classList.remove("playing");
      }, 100);
      return audio;
    }
  }
}

// Arrays to play //

const vineVinePrimavara = [
  { key: "a", duration: 300 },
  { key: "a", duration: 300 },
  { key: "d", duration: 300 },
  { key: "d", duration: 300 },
  { key: "g", duration: 600 },
  { key: "h", duration: 300 },
  { key: "g", duration: 300 },
  { key: "f", duration: 600 },
  { key: "d", duration: 700 },
  { key: "a", duration: 300 },
  { key: "a", duration: 300 },
  { key: "d", duration: 300 },
  { key: "d", duration: 300 },
  { key: "g", duration: 600 },
  { key: "h", duration: 300 },
  { key: "g", duration: 300 },
  { key: "f", duration: 600 },
  { key: "d", duration: 600 },
  { key: "s", duration: 300 },
  { key: "s", duration: 300 },
  { key: "f", duration: 300 },
  { key: "f", duration: 300 },
  { key: "d", duration: 600 },
  { key: "s", duration: 600 },
  { key: "g", duration: 600 },
  { key: "s", duration: 300 },
  { key: "s", duration: 300 },
  { key: "f", duration: 300 },
  { key: "f", duration: 300 },
  { key: "d", duration: 600 },
  { key: "s", duration: 600 },
  { key: "a", duration: 1000 },
  { key: "a", duration: 300 },
  { key: "a", duration: 300 },
  { key: "d", duration: 300 },
  { key: "d", duration: 300 },
  { key: "g", duration: 600 },
  { key: "h", duration: 300 },
  { key: "g", duration: 300 },
  { key: "f", duration: 600 },
  { key: "d", duration: 700 },
  { key: "a", duration: 300 },
  { key: "a", duration: 300 },
  { key: "d", duration: 300 },
  { key: "d", duration: 300 },
  { key: "g", duration: 600 },
  { key: "h", duration: 300 },
  { key: "g", duration: 300 },
  { key: "f", duration: 600 },
  { key: "d", duration: 600 },
  { key: "s", duration: 300 },
  { key: "s", duration: 300 },
  { key: "f", duration: 300 },
  { key: "f", duration: 300 },
  { key: "d", duration: 600 },
  { key: "s", duration: 600 },
  { key: "g", duration: 600 },
  { key: "s", duration: 300 },
  { key: "s", duration: 300 },
  { key: "f", duration: 300 },
  { key: "f", duration: 300 },
  { key: "d", duration: 600 },
  { key: "s", duration: 600 },
  { key: "a", duration: 1000 },
  { key: "a", duration: 300 },
  { key: "a", duration: 300 },
  { key: "d", duration: 300 },
  { key: "d", duration: 300 },
  { key: "g", duration: 600 },
  { key: "h", duration: 300 },
  { key: "g", duration: 300 },
  { key: "f", duration: 600 },
  { key: "d", duration: 700 },
  { key: "a", duration: 300 },
  { key: "a", duration: 300 },
  { key: "d", duration: 300 },
  { key: "d", duration: 300 },
  { key: "g", duration: 600 },
  { key: "h", duration: 300 },
  { key: "g", duration: 300 },
  { key: "f", duration: 600 },
  { key: "d", duration: 600 },
  { key: "s", duration: 300 },
  { key: "s", duration: 300 },
  { key: "f", duration: 300 },
  { key: "f", duration: 300 },
  { key: "d", duration: 600 },
  { key: "s", duration: 600 },
  { key: "g", duration: 600 },
  { key: "s", duration: 300 },
  { key: "s", duration: 300 },
  { key: "f", duration: 300 },
  { key: "f", duration: 300 },
  { key: "d", duration: 600 },
  { key: "s", duration: 600 },
  { key: "a", duration: 1000 },
];
const introUndertaker = [
  { key: "s", duration: 700 },
  { key: "s", duration: 700 },
  { key: "s", duration: 200 },
  { key: "s", duration: 700 },
  { key: "f", duration: 500 },
  { key: "d", duration: 200 },
  { key: "d", duration: 500 },
  { key: "s", duration: 200 },
  { key: "s", duration: 400 },
  { key: "w", duration: 400 },
  { key: "s", duration: 200 },
];

// Arrays to play //

let toggleReset = true;

function autoPlaySong(song) {
  let duration = 0;
  for (let el of song) {
    setTimeout(() => {
      autoPlay(el.key);
    }, duration);
    duration += el.duration;
  }
}

function resetSong() {
  for (let i = 1; i < 99999; i++) {
    window.clearTimeout(i);
  }
}

springSongBtn.addEventListener("click", () => {
  if (toggleReset) {
    toggleReset = !toggleReset;
    autoPlaySong(vineVinePrimavara);
  } else if (!toggleReset) {
    toggleReset = !toggleReset;
    resetSong();
  }
});

undertakerSongBtn.addEventListener("click", () => {
  if (toggleReset) {
    toggleReset = !toggleReset;
    autoPlaySong(introUndertaker);
  } else if (!toggleReset) {
    toggleReset = !toggleReset;
    resetSong();
  }
});
