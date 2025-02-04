import { normalizeString, textToCapitalCase } from "../helpers/helpers.js";
import { seconds, minutes } from "../gameStateShow/gameStateShow.js";
import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "../localStorage/localStorage.js";

export let results = getDataFromLocalStorage("results") ?? [];
export let sortedResults = [...results].sort(
  (a, b) => a.totalResults - b.totalResults);
export let savedGameData = getDataFromLocalStorage("savedGame") ?? null;

export const MATRIX_SETS = {
  easy: {
    scissors: [
      [0, 1, 1, 0, 0],
      [1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
    ],

    heart: [
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ],

    robot: [
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ],

    snowflake: [
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 1, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
    ],

    horse: [
      [1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 1, 0, 1, 1],
    ],
  },

  medium: {
    "happy-man": [
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

    "concert-hall": [
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

    bird: [
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

    washbasins: [
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

    "spruce-family": [
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
  },

  hard: {
    "santa-with-gifts": [
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
    "old-woman-in-farmacy": [
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
    "house-in-the-sun": [
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
    "new-year-hat": [
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
    ship: [
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
  },
};

function areMatrixesEqual(matrixA, matrixB) {
  if (matrixA.length !== matrixB.length) return false;
  for (let i = 0; i < matrixA.length; i++) {
    if (matrixA[i].length !== matrixB[i].length) return false;
    for (let j = 0; j < matrixA[i].length; j++) {
      if (matrixA[i][j] !== matrixB[i][j]) return false;
    }
  }
  return true;
}

export const gameState = {
  level: "easy",
  matrixSet: MATRIX_SETS.easy,
  matrix: Object.values(MATRIX_SETS.easy)[0],
  matrixName: textToCapitalCase(Object.keys(MATRIX_SETS.easy)[0]),
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
    this.matrixSet = MATRIX_SETS[newLevel];
    this.matrix = Object.values(this.matrixSet)[0];
    this.matrixName = this.getMatrixName();
    this.hintsArrayLeft = this.setHintsArray("left");
    this.hintsArrayTop = this.setHintsArray("top");
    this.resetMatrix();
  },

  setMatrix(key) {
    this.matrix = this.matrixSet[normalizeString(key)];
    this.matrixName = this.getMatrixName();
    this.hintsArrayLeft = this.setHintsArray("left");
    this.hintsArrayTop = this.setHintsArray("top");
    this.resetMatrix();
  },

  getMatrixName() {
    for (const [name, matrix] of Object.entries(this.matrixSet)) {
      if (areMatrixesEqual(matrix, this.matrix)) {
        return name;
      }
    }
  },

  setRandomGame() {
    const randomLevelIndex = Math.floor(
      Math.random() * Object.keys(MATRIX_SETS).length
    );
    this.level = Object.keys(MATRIX_SETS)[randomLevelIndex];

    this.matrixSet = MATRIX_SETS[this.level];

    const randomMatrixIndex = Math.floor(
      Math.random() * Object.keys(this.matrixSet).length
    );

    this.matrixName = Object.keys(this.matrixSet)[randomMatrixIndex];
    this.matrix = this.matrixSet[this.matrixName];

    this.hintsArrayLeft = this.setHintsArray("left");
    this.hintsArrayTop = this.setHintsArray("top");
    this.resetMatrix();
  },

  isGameWon() {
    const newMatrix = this.currentUserMatrix.map((row) =>
      row.map((elem) => (elem === "0" ? 0 : elem))
    );
    return areMatrixesEqual(this.matrix, newMatrix);
  },

  gameWon() {
    this.resultSeconds = String(minutes * 60 + seconds).padStart(2, "0");
    results.push({
      name: this.matrixName,
      level: this.level,
      resultMinutes: String(minutes).padStart(2, "0"),
      resultSeconds: String(seconds).padStart(2, "0"),
      totalResults: minutes * 60 + seconds,
    });

    if (results.length > 5) {
      results.shift();
    }
    saveDataToLocalStorage("results", results);
    sortedResults = [...results].sort(
      (a, b) => a.totalResults - b.totalResults
    );
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
      resultMinutes: String(this.minutes).padStart(2, "0"),
      resultSeconds: String(this.seconds).padStart(2, "0"),
      totalResults: minutes * 60 + seconds,
    };
    saveDataToLocalStorage("savedGame", savedGameData);
    savedGameData = getDataFromLocalStorage("savedGame");
  },

  continueGame() {
    this.level = savedGameData.level;
    this.matrixSet = savedGameData.matrixSet;
    this.matrix = savedGameData.matrix;
    this.matrixName = savedGameData.matrixName;
    this.currentUserMatrix =
      getDataFromLocalStorage("savedGame").currentUserMatrix;
    this.hintsArrayTop = savedGameData.hintsArrayTop;
    this.hintsArrayLeft = savedGameData.hintsArrayLeft;
  },
};
