import { textToCapitalCase } from "../helpers/helpers.js";
import { seconds, minutes } from "../gameStateShow/gameStateShow.js";
import { getDataFromLocalStorage, saveDataToLocalStorage } from "../localStorage/localStorage.js";

export const easyMatrixSet = new Map([
  [
    "scissors",
    [
      [0, 1, 1, 0, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
    ],
  ],

  [
    "heart",
    [
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],
  ],

  [
    "robot",
    [
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ],
  ],

  [
    "snowflake",
    [
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 1, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
    ],
  ],

  [
    "horse",
    [
      [1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 1, 0, 1, 1],
    ],
  ],
]);

export const mediumMatrixSet = new Map([
  [
    "happy-man",
    [
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
      [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    ],
  ],

  [
    "concert-hall",
    [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  ],

  [
    "bird",
    [
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
      [1, 1, 0, 1, 0, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    ],
  ],

  [
    "washbasins",
    [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    ],
  ],

  [
    "spruce-family",
    [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    ],
  ],
]);

export const hardMatrixSet = new Map([
  [
    "santa-with-gifts",
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
      [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
    ],
  ],
  [
    "old-woman-in-farmacy",
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
    ],
  ],
  [
    "house-in-the-sun",
    [
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  ],
  [
    "new-year-hat",
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    ],
  ],
  [
    "ship",
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    ],
  ],
]);

export const LEVELS = new Map([
  ["easy", easyMatrixSet],
  ["medium", mediumMatrixSet],
  ["hard", hardMatrixSet],
]);

export let results = getDataFromLocalStorage("results") ?? [];
export let savedGameData = getDataFromLocalStorage('savedGame') ?? null;

export const gameState = {
  level: "easy",
  matrixSet: LEVELS.get("easy"),
  matrix: Array.from(easyMatrixSet.values())[0],
  matrixName: textToCapitalCase(Array.from(easyMatrixSet.keys())[0]),
  currentUserMatrix: [],
  hintsArrayTop: [],
  hintsArrayLeft: [],
  resultSeconds: 0,

  setHintsArray(location) {
    let hintsArray = [];
    for (let i = 0; i < this.matrix.length; i++) {
      let count = 0;
      let array = [];
      for (let j = 0; j < this.matrix[i].length; j++) {
        let indexFirst = location === "left" ? i : j;
        let indexSecond = location === "left" ? j : i;

        if (this.matrix[indexFirst][indexSecond] === 0) {
          if (count > 0) {
            array.push(count);
          }
          count = 0;
        } else {
          count++;
        }
      }
      if (count > 0) {
        array.push(count);
      }
      if (!array.length) {
        hintsArray.push([" "]);
      } else {
        hintsArray.push(array);
      }
    }
    return hintsArray;
  },

  resetMatrix() {
    this.currentUserMatrix = this.matrix.map((row) =>
      row.map((cell) => (cell === 1 ? 0 : cell))
    );
  },

  firstLoading() {
    this.hintsArrayLeft = this.setHintsArray("left");
    this.hintsArrayTop = this.setHintsArray("top");
    this.resetMatrix();
  },

  setLevel(newLevel) {
    this.level = newLevel;
    this.matrixSet = LEVELS.get(newLevel);
    this.matrix = Array.from(this.matrixSet.values())[0];
    this.matrixName = this.getMatrixName();
    this.hintsArrayLeft = this.setHintsArray("left");
    this.hintsArrayTop = this.setHintsArray("top");
    this.resetMatrix();
  },

  setMatrix(key) {
    this.matrix = this.matrixSet.get(key.toLowerCase().replaceAll(" ", "-"));
    this.matrixName = this.getMatrixName();
    this.hintsArrayLeft = this.setHintsArray("left");
    this.hintsArrayTop = this.setHintsArray("top");
    this.resetMatrix();
  },

  getMatrixName() {
    for (const [name, matrix] of this.matrixSet.entries()) {
      if (JSON.stringify(matrix) === JSON.stringify(this.matrix)) {
        return name;
      }
    }
  },

  setRandomGame() {
    const randomLevelIndex = Math.floor(
      Math.random() * Array.from(LEVELS.keys()).length
    );
    this.matrixSet = LEVELS.get(Array.from(LEVELS.keys())[randomLevelIndex]);
    const randomMatrixIndex = Math.floor(
      Math.random() * Array.from(this.matrixSet.keys()).length
    );

    this.level = Array.from(LEVELS.keys())[randomLevelIndex];
    this.matrix = Array.from(this.matrixSet.values())[randomMatrixIndex];
    this.matrixName = textToCapitalCase(
      Array.from(this.matrixSet.keys())[randomMatrixIndex]
    );
    this.hintsArrayLeft = this.setHintsArray("left");
    this.hintsArrayTop = this.setHintsArray("top");
    this.resetMatrix();
  },

  isGameWon() {
    const newMatrix = this.currentUserMatrix.map((row) => 
      row.map((elem) => (elem === '0' ? 0 : elem))
    );
    return (
      JSON.stringify(this.matrix) === JSON.stringify(newMatrix)
    );
  },

  gameWon() {
    this.resultSeconds = String(minutes * 60 + seconds).padStart(2, '0');
    results.push({
      name: this.matrixName,
      level: this.level,
      resultMinutes: String(minutes).padStart(2, '0'),
      resultSeconds: String(seconds).padStart(2, '0'),
      totalResults: minutes * 60 + seconds,
    });
    results = results.sort((a, b) => a.totalResults - b.totalResults).filter((_, index) => index < 5);
    saveDataToLocalStorage('results', results);
  },

  saveGame() {
    savedGameData = {
      level: this.level,
      matrixSet: this.matrixSet,
      matrix: this.matrix,
      matrixName: this.matrixName,
      currentUserMatrix: this.currentUserMatrix,
      hintsArrayTop: this.hintsArrayTop,
      hintsArrayLeft: this.hintsArrayLeft,
      minutes: minutes,
      seconds: seconds,
      resultMinutes: String(this.minutes).padStart(2, '0'),
      resultSeconds: String(this.seconds).padStart(2, '0'),
      totalResults: this.minutes * 60 + this.seconds,
    };
    saveDataToLocalStorage('savedGame', savedGameData);
    savedGameData = getDataFromLocalStorage('savedGame');
  },

  continueGame() {
    this.level = savedGameData.level;
    this.matrixSet = savedGameData.matrixSet;
    this.matrix = savedGameData.matrix;
    this.matrixName = savedGameData.matrixName;
    this.currentUserMatrix = getDataFromLocalStorage('savedGame').currentUserMatrix;
    this.hintsArrayTop = savedGameData.hintsArrayTop;
    this.hintsArrayLeft = savedGameData.hintsArrayLeft;
  },
};
