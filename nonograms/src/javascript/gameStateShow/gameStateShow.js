import { gameState } from "../gameState/gameState.js";
import { enableElement, disableElement, removeClass } from "../helpers/helpers.js";
import { randomBtn, levelSelect, resetBtn, saveBtn, timer } from "../main.js";

let seconds = 0;
let minutes = 0;
let interval = 0;

function setTimer() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    timer.textContent = String(minutes).padStart(2, '0') + ' : ' + String(seconds).padStart(2, 0);
}

export const gameStateShow = {

  cells: [],
  matrixSection: [],

  getMatrixCells() {
    this.cells = Array.from(
      document.getElementsByClassName("game__matrix-element")
    );
  },

  getMatrixSection() {
    this.matrixSection = document.getElementById('game__matrix');
  },

  makeCellBlackWhite() {
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

  afterMatrixRender() {
    this.getMatrixCells();
    this.getMatrixSection();
    this.makeCellBlackWhite();
  },

  gameStart() {
    interval = setInterval(setTimer, 1000);
    disableElement(randomBtn);
    disableElement(levelSelect);
    disableElement(document.getElementById("picture"));
    enableElement(resetBtn);
    enableElement(saveBtn);
  },

  resetMatrix() {
    this.cells.forEach(cell => removeClass(cell, 'black-cell'));
    clearInterval(interval);
    timer.textContent = '00 : 00';
    seconds = 0;
    minutes = 0;
    enableElement(randomBtn);
    enableElement(levelSelect);
    enableElement(document.getElementById("picture"));
    this.matrixSection.addEventListener('click', () => {
      gameStateShow.gameStart();
    }, {once : true});
    disableElement(resetBtn);
  },



};
