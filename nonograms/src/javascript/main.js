import { renderStartGameWindow } from "./dom/startGameWindow.js";
import { gameState } from "./gameState/gameState.js";
import { gameStateShow } from "./gameStateShow/gameStateShow.js";
import {
  renderPictureSelect,
  addEventListenerPictureSelect,
} from "./dom/pictureChoice.js";
import { renderMatrixSection } from "./dom/matrix.js";
import {
  renderRandomlySelectedOption,
  enableElement,
  disableElement,
} from "./helpers/helpers.js";

renderStartGameWindow();

export const randomBtn = document.getElementById("game__btn-manage_random");
export const solutionBtn = document.getElementById("game__btn-manage_solution");
export const saveBtn = document.getElementById("game__btn-manage_save");
const recordsBtn = document.getElementById("game__btn-manage_results");
const continuesBtn = document.getElementById("game__btn-manage_continue");
export const resetBtn = document.getElementById("game__btn-manage_reset");
export const levelSelect = document.getElementById("level");
const levelOptions = Array.from(
  document.getElementsByClassName(`game__level-option`)
);
export const timer = document.getElementById("game__timer");


levelSelect.addEventListener("change", (event) => {
  gameState.setLevel(event.target.value);
  renderPictureSelect(gameState.level);
  renderMatrixSection();
  gameStateShow.picture.addEventListener("change", (event) => {
    gameState.setMatrix(event.target.value);
    renderMatrixSection();
    addEventListenerPictureSelect();
  });
});

randomBtn.addEventListener("click", () => {
  gameState.setRandomGame();
  renderMatrixSection();
  renderRandomlySelectedOption("level");
  renderPictureSelect(gameState.level);
  renderRandomlySelectedOption("picture");
  randomBtn.blur();
});

resetBtn.addEventListener("click", () => {
  gameStateShow.resetGame();
  gameState.resetMatrix();
});

solutionBtn.addEventListener("click", () => {
  gameStateShow.showSolution();
});
