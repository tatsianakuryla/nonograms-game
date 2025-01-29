import { gameState } from "../gameState/gameState.js";
import {
  enableElement,
  disableElement,
  removeClass,
  addClass,
} from "../helpers/helpers.js";
import {
  randomBtn,
  levelSelect,
  resetBtn,
  saveBtn,
  solutionBtn,
  timer,
} from "../main.js";

let seconds = 0;
let minutes = 0;
let interval = 0;

function setTimer() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  timer.textContent =
    String(minutes).padStart(2, "0") + " : " + String(seconds).padStart(2, 0);
}

export const gameStateShow = {
  cells: [],
  matrixSection: [],
  picture: '',

  getMatrixCells() {
    this.cells = Array.from(
      document.getElementsByClassName("game__matrix-element")
    );
  },

  getMatrixSection() {
    this.matrixSection = document.getElementById("game__matrix");
  },

  getPicture() {
    this.picture = document.getElementById("picture");
  },

  cellsEventListener() {
    this.cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const iCell = +cell.getAttribute("data-i");
        const jCell = +cell.getAttribute("data-j");
        for (let i = 0; i < gameState.matrix.length; i++) {
          for (let j = 0; j < gameState.matrix[i].length; j++) {
            if (iCell === i && jCell === j) {
              cell.classList.toggle("black-cell");
              gameState.currentUserMatrix[i][j] = cell.classList.contains(
                "black-cell"
              )
                ? 1
                : 0;
              cell.classList.remove("cross");
              //TODO - check and show isWon
            }
          }
        }
      });
      cell.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        const iCell = +cell.getAttribute("data-i");
        const jCell = +cell.getAttribute("data-j");
        for (let i = 0; i < gameState.matrix.length; i++) {
          for (let j = 0; j < gameState.matrix[i].length; j++) {
            if (iCell === i && jCell === j) {
              cell.classList.remove("black-cell");
              cell.classList.toggle("cross");
              //TODO - cross
            }
          }
        }
      });
    });
  },

  setTimer() {
    interval = setInterval(setTimer, 1000);
  },

  resetTimer() {
    clearInterval(interval);
    timer.textContent = "00 : 00";
    seconds = 0;
    minutes = 0;
  },

  afterMatrixRender() {
    this.getMatrixCells();
    this.cellsEventListener();
    this.getPicture();

    this.getMatrixSection();
    this.matrixSectionEventListener();
  },

  gameStart() {
    this.setTimer();

    disableElement(randomBtn);
    disableElement(this.picture);
    disableElement(levelSelect);

    enableElement(resetBtn);
    enableElement(saveBtn);
  },

  gameEnd() {
    this.resetTimer();


  },

  resetGame() {
    this.cells.forEach((cell) => removeClass(cell, "black-cell"));

    this.resetTimer();
    this.matrixSection.style.pointerEvents = "";
    this.matrixSectionEventListener();

    enableElement(randomBtn);
    enableElement(this.picture);
    enableElement(levelSelect);
    enableElement(solutionBtn);

    disableElement(resetBtn);
    disableElement(saveBtn);
  },

  showSolution() {
    this.cells.forEach((cell) => {
      const cellI = cell.getAttribute("data-i");
      const cellJ = cell.getAttribute("data-j");
      if (gameState.matrix[cellI][cellJ] === 1) {
        addClass(cell, "black-cell");
      }
      else {
        removeClass(cell, "black-cell");
      }
    });
    this.matrixSection.style.pointerEvents = "none";

    this.resetTimer();
    disableElement(solutionBtn);
    enableElement(resetBtn);
    resetBtn.focus();
  },

  matrixSectionEventListener() {
    this.matrixSection.addEventListener(
      "click",
      () => {
        this.gameStart();
      },
      { once: true }
    );
  },
};


// this.getMatrixCells();
//     this.getMatrixSection();
//     this.matrixSection.style.pointerEvents = "";
//     this.makeCellBlackWhite();

//     this.matrixSection.addEventListener(
//       "click",
//       () => {
//         this.setTimer();
//         this.gameStart();
//       },
//       { once: true }
//     );

// this.resetTimer();

// enableElement(resetBtn);
// enableElement(randomBtn);
// enableElement(document.getElementById("picture"));
// enableElement(levelSelect);
// disableElement(saveBtn);
// disableElement(solutionBtn);
// this.matrixSection.style.pointerEvents = "none";

    // enableElement(randomBtn);
    // enableElement(levelSelect);
    // enableElement(solutionBtn);
    // enableElement(document.getElementById("picture"));
    // disableElement(resetBtn);
    // disableElement(saveBtn);



    // this.resetTimer();

    // enableElement(randomBtn);
    // enableElement(levelSelect);
    // enableElement(solutionBtn);
    // enableElement(document.getElementById("picture"));
    // disableElement(resetBtn);
    // disableElement(saveBtn);

    // this.matrixSection.style.pointerEvents = "";
    // this.matrixSection.addEventListener(
    //   "click",
    //   () => {
    //     this.setTimer();
    //     this.gameStart();
    //   },
    //   { once: true }
    // );


    // disableElement(randomBtn);
    // disableElement(levelSelect);
    // disableElement(document.getElementById("picture"));
    // enableElement(resetBtn);
    // enableElement(saveBtn);
    // enableElement(solutionBtn);