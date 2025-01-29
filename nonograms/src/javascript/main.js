import { renderStartGameWindow } from "./dom/startGameWindow.js";
import { gameState } from "./gameState/gameState.js";
import { gameStateShow } from "./gameStateShow/gameStateShow.js";

renderStartGameWindow();

export const randomBtn = document.getElementById("game__btn-manage_random");
export const solutionBtn = document.getElementById("game__btn-manage_solution");
export const saveBtn = document.getElementById("game__btn-manage_save");
const continuesBtn = document.getElementById("game__btn-manage_continue");
export const resetBtn = document.getElementById("game__btn-manage_reset");
export const levelSelect = document.getElementById("level");
export const timer = document.getElementById("game__timer");
const modeBtn = document.getElementById("game__mode-btn");

modeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  modeBtn.classList.toggle('game__mode-btn-dark');
});

levelSelect.addEventListener("change", (event) => {
  gameState.setLevel(event.target.value);
  gameStateShow.levelChange();

  gameStateShow.picture.addEventListener("change", (event) => {
    gameState.setMatrix(event.target.value);
    gameStateShow.pictureChange();
  });
});

randomBtn.addEventListener("click", () => {
  gameState.setRandomGame();
  gameStateShow.showRandomGame();
});

resetBtn.addEventListener("click", () => {
  gameStateShow.resetGame();
  gameState.resetMatrix();
});

solutionBtn.addEventListener("click", () => {
  gameStateShow.showSolution();
});


