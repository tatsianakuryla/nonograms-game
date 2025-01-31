import { renderStartGameWindow } from "./dom/startGameWindow.js";
import { gameState, savedGameData } from "./gameState/gameState.js";
import { gameStateShow } from "./gameStateShow/gameStateShow.js";
import { addClass, removeClass} from "./helpers/helpers.js";
import { getDataFromLocalStorage } from "./localStorage/localStorage.js";
getDataFromLocalStorage
renderStartGameWindow();

export const randomBtn = document.getElementById("game__btn-manage_random");
export const solutionBtn = document.getElementById("game__btn-manage_solution");
export const saveBtn = document.getElementById("game__btn-manage_save");
export const continueBtn = document.getElementById("game__btn-manage_continue");
export const resetBtn = document.getElementById("game__btn-manage_reset");
export const resultsBtn = document.getElementById("game__btn-manage_results");
export const levelSelect = document.getElementById("level");
export const timer = document.getElementById("game__timer");
const modeBtn = document.getElementById("game__mode-btn");
export const winModal = document.getElementById('win-modal');
const closeWinModalBtn = document.getElementById('win-modal__close-btn');
export const resultsModal = document.getElementById('results-modal');
const closeResultsModalBtn = document.getElementById('results-modal__close-button');
const showAsideBtn = document.getElementById('game__show-aside-button');
const asideSection = document.getElementById('game__aside');

modeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  modeBtn.classList.toggle('game__mode-btn-dark');
});

levelSelect.addEventListener("change", (event) => {
  gameState.setLevel(event.target.value);
  gameStateShow.levelChange();
  gameStateShow.resetTimer();
  gameStateShow.picture.addEventListener("change", (event) => {
    gameState.setMatrix(event.target.value);
    gameStateShow.pictureChange();
    gameStateShow.resetTimer();
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

saveBtn.addEventListener('click', () => {
  gameState.saveGame();
  gameStateShow.saveGame();
});

continueBtn.addEventListener('click', () => {
  gameState.continueGame();
  gameStateShow.continueGame();
});

resultsBtn.addEventListener('click', () => {
  addClass(resultsModal, 'show');
});

closeWinModalBtn.addEventListener('click', () => {
  removeClass(winModal, 'show');
});

closeResultsModalBtn.addEventListener('click', () => {
  removeClass(resultsModal, 'show');
});

showAsideBtn.addEventListener('click', () => {
  asideSection.classList.toggle('show');
  showAsideBtn.classList.toggle('show');
});

window.addEventListener("resize", () => {
  asideSection.classList.remove('show');
  showAsideBtn.classList.remove('show');
});