import { renderGameResults } from "../dom/modals/resultsModal.js";
import { renderSelect } from "../dom/levelSelect.js";
import { renderMatrixSection } from "../dom/matrix.js";
import {
  addEventListenerPictureSelect,
  renderPictureSelect,
} from "../dom/pictureSelect.js";
import { gameState, savedGameData } from "../gameState/gameState.js";
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
  continueBtn,
  winModal,
} from "../main.js";
import {
  wonGameSound,
  fillCellBlackSound,
  fillCellWhiteSound,
  crossCellSound,
  uncrossCellSound,
} from "../soundEffects/soundEffects.js";

export let seconds = 0;
export let minutes = 0;
export let interval = 0;

function setTimer() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  timer.textContent =
    String(minutes).padStart(2, "0") + " : " + String(seconds).padStart(2, "0");
}

export const gameStateShow = {
  cells: [],
  matrixSection: [],
  picture: "",
  isSoundOn: true,

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
      cell.addEventListener("click", (event) => {
        event.preventDefault();
        const iCell = +cell.getAttribute("data-i");
        const jCell = +cell.getAttribute("data-j");
        cell.classList.toggle("black-cell");
        gameState.currentUserMatrix[iCell][jCell] = cell.classList.contains(
          "black-cell"
        )
          ? 1
          : 0;
        if (this.isSoundOn) {
          if (cell.classList.contains("black-cell")) {
            fillCellBlackSound.currentTime = 0;
            fillCellBlackSound
              .play()
              .catch((error) => console.error("Error playing sound:", error));
          } else {
            fillCellWhiteSound.currentTime = 0;
            fillCellWhiteSound
              .play()
              .catch((error) => console.error("Error playing sound:", error));
          }
        }
        cell.classList.remove("cross");
        if (gameState.isGameWon()) {
          gameState.gameWon();
          this.gameWon();
        }
      });
      cell.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        const iCell = +cell.getAttribute("data-i");
        const jCell = +cell.getAttribute("data-j");
        cell.classList.remove("black-cell");
        gameState.currentUserMatrix[iCell][jCell] = 0;
        cell.classList.toggle("cross");
        gameState.currentUserMatrix[iCell][jCell] = cell.classList.contains(
          "cross"
        )
          ? "0"
          : 0;
        if (this.isSoundOn) {
          if (cell.classList.contains("cross")) {
            crossCellSound.currentTime = 0;
            crossCellSound
              .play()
              .catch((error) => console.error("Error playing sound:", error));
          } else {
            uncrossCellSound.currentTime = 0;
            uncrossCellSound
              .play()
              .catch((error) => console.error("Error playing sound:", error));
          }
        }
        if (gameState.isGameWon()) {
          gameState.gameWon();
          this.gameWon();
        }
      });
    });
  },

  startTimer() {
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
  },

  gameStart() {
    this.startTimer();

    disableElement(randomBtn);
    disableElement(this.picture);
    disableElement(levelSelect);

    enableElement(resetBtn);
    enableElement(saveBtn);
  },

  gameWon() {
    this.resetTimer();
    enableElement(randomBtn);
    enableElement(this.picture);
    enableElement(levelSelect);
    disableElement(solutionBtn);
    disableElement(saveBtn);
    this.matrixSection.style.pointerEvents = "none";
    renderGameResults();

    if (this.isSoundOn) {
      wonGameSound.currentTime = 0;
      wonGameSound
        .play()
        .catch((error) => console.error("Error playing sound:", error));
    }

    setTimeout(() => {
      addClass(winModal, "show");
      winModal.textContent = `You solved the nonogram in ${gameState.resultSeconds}s`;
    }, 400);
    setTimeout(() => {
      removeClass(winModal, "show");
    }, 3000);
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
    enableElement(this.picture);
    enableElement(levelSelect);
  },

  showRandomGame() {
    renderMatrixSection();
    enableElement(solutionBtn);
    enableElement(this.picture);
    enableElement(levelSelect);
    disableElement(resetBtn);
    renderSelect("level");
    renderPictureSelect(gameState.level);
    renderSelect("picture");
    this.resetTimer();
  },

  matrixSectionEventListener() {
    if (this.gameStartHandler) {
      this.matrixSection.removeEventListener(
        "mousedown",
        this.gameStartHandler
      );
    }

    this.gameStartHandler = (event) => {
      if (event.button === 1) {
        event.preventDefault();
        return;
      }
      this.gameStart();
    };

    this.matrixSection.addEventListener("mousedown", this.gameStartHandler, {
      once: true,
    });
  },

  showSavedMatrix() {
    this.cells.forEach((cell) => {
      const cellI = cell.getAttribute("data-i");
      const cellJ = cell.getAttribute("data-j");
      if (gameState.currentUserMatrix[cellI][cellJ] === 1) {
        addClass(cell, "black-cell");
      } else if (gameState.currentUserMatrix[cellI][cellJ] === "0") {
        addClass(cell, "cross");
      } else {
        removeClass(cell, "black-cell");
        removeClass(cell, "cross");
      }
    });
  },

  saveGame() {
    enableElement(continueBtn);
  },

  continueGame() {
    this.getMatrixCells();
    this.getMatrixSection();
    this.resetTimer();
    seconds = savedGameData.seconds;
    minutes = savedGameData.minutes;
    timer.textContent =
      String(minutes).padStart(2, "0") + " : " + String(seconds).padStart(2, 0);
    renderSelect("level");
    renderPictureSelect(gameState.level);
    renderSelect("picture");
    renderMatrixSection();
    this.showSavedMatrix();
    enableElement(this.picture);
    enableElement(levelSelect);
    enableElement(resetBtn);
    enableElement(solutionBtn);
  },
};
