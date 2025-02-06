import { renderStartGameWindow } from "./dom/startGameWindow.js";
import { gameState } from "./gameState/gameState.js";
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
const soundToggler = document.getElementById('game__sound-toggler');
export const resultsModal = document.getElementById('results-modal');
const closeResultsModalBtn = document.getElementById('results-modal__close-button');
const showAsideBtn = document.getElementById('game__show-aside-button');
const asideSection = document.getElementById('game__aside');

modeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  modeBtn.classList.toggle('game__mode-btn-dark');
});

soundToggler.addEventListener('click', () => {
  gameStateShow.isSoundOn = !gameStateShow.isSoundOn;
  soundToggler.classList.toggle('sound-off');
});

levelSelect.addEventListener("change", (event) => {
  gameState.setLevel(event.target.value);
  gameStateShow.levelChange();
  gameStateShow.resetTimer();
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

closeResultsModalBtn.addEventListener('click', () => {
  removeClass(resultsModal, 'show');
});

showAsideBtn.addEventListener('click', () => {
  asideSection.classList.toggle('show');
  showAsideBtn.classList.toggle('show');
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 680) {
    asideSection.classList.remove('show');
    showAsideBtn.classList.remove('show');
  }
});