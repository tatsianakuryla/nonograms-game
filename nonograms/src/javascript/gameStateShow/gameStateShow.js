import { renderMatrixSection } from "../dom/matrix.js";
import { addEventListenerPictureSelect, renderPictureSelect } from "../dom/pictureChoice.js";
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
  picture: "",
  resultMinutes: 0,
  resultSeconds: 0,
  resultTimeS: 0,

  getMatrixCells() {
    this.cells = Array.from(
      document.getElementsByClassName("game__matrix-element")
    );
  },

  getMatrixSection() {
    this.matrixSection = document.getElementById("game__matrix");
  },

  getPictureSelect() {
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
            }
          }
        }
        if (gameState.isGameWon()) {
          gameStateShow.gameWon();
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
              gameState.currentUserMatrix[i][j] = 0;
              cell.classList.toggle("cross");
              //TODO - cross
            }
          }
        }
        if (gameState.isGameWon()) {
          gameStateShow.gameWon();
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
    this.getPictureSelect();

    this.getMatrixSection();
    this.matrixSectionEventListener();
  },

  levelChange() {
    renderPictureSelect(gameState.level);
    renderMatrixSection();
    enableElement(solutionBtn);
    disableElement(resetBtn);
  },

  pictureChange() {
    renderMatrixSection();
    enableElement(solutionBtn);
    disableElement(resetBtn);
    addEventListenerPictureSelect();
  },

  gameStart() {
    this.setTimer();

    disableElement(randomBtn);
    disableElement(this.picture);
    disableElement(levelSelect);

    enableElement(resetBtn);
    enableElement(saveBtn);
  },

  gameWon() {
    this.resultMinutes = minutes;
    this.resultSeconds = seconds;
    this.resultTimeS = this.resultMinutes * 60 + this.resultSeconds;

    this.resetTimer();
    console.log(`You are a winer! Your result: ${this.resultTimeS}s`);

    enableElement(randomBtn);
    enableElement(this.picture);
    enableElement(levelSelect);
    disableElement(solutionBtn);
    this.matrixSection.style.pointerEvents = "none";
    resetBtn.focus();
  },

  resetGame() {
    this.cells.forEach((cell) => {
      removeClass(cell, "black-cell");
      removeClass(cell, "cross");
    });

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
      } else {
        removeClass(cell, "black-cell");
        removeClass(cell, "cross");
      }
    });
    this.matrixSection.style.pointerEvents = "none";

    this.resetTimer();
    disableElement(solutionBtn);
    disableElement(saveBtn);
    enableElement(resetBtn);
    enableElement(randomBtn);
  },

  showRandomGame() {
    renderMatrixSection();
    enableElement(solutionBtn);
    enableElement(this.picture);
    enableElement(levelSelect);
    disableElement(resetBtn);

    Array.from(levelSelect).forEach((option, index) => {
      option.value.replaceAll(" ", "-") === gameState.level
        ? (levelSelect.selectedIndex = index)
        : levelSelect.selectedIndex;
    });

    renderPictureSelect(gameState.level);

    Array.from(this.picture).forEach((option, index) => {
      option.value.replaceAll(" ", "-") === gameState.matrixName
        ? (this.picture.selectedIndex = index)
        : this.picture.selectedIndex;
    });
  },

  matrixSectionEventListener() {
    if (this.gameStartHandler) {
      this.matrixSection.removeEventListener("mousedown", this.gameStartHandler);
    }

    this.gameStartHandler = (event) => {
      if (event.button === 1) {
        event.preventDefault();
        return;
      }
      this.gameStart();
    };

    this.matrixSection.addEventListener("mousedown", this.gameStartHandler);
  }

};
