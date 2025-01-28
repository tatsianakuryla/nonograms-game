import { renderStartGameWindow } from "./dom/startGameWindow.js";
import { gameState } from "./gameState/gameState.js";
import {
  renderPictureSelect,
  addEventListenerPictureSelect,
} from "./dom/pictureChoice.js";
import { renderMatrixSection } from "./dom/matrix.js";
import { renderRandomlySelectedOption } from "./helpers/helpers.js";

renderStartGameWindow();

document.getElementById("level").addEventListener("change", (event) => {
  gameState.setLevel(event.target.value);
  renderPictureSelect(gameState.level);
  renderMatrixSection();
  document.getElementById("picture").addEventListener("change", (event) => {
    gameState.setMatrix(event.target.value);
    renderMatrixSection();
    addEventListenerPictureSelect();
  });
});

const randonGameBtn = document.getElementById("game__btn-manage_random");

randonGameBtn.addEventListener("click", () => {
  gameState.setRandomGame();
  renderMatrixSection();
  renderRandomlySelectedOption("level");
  renderPictureSelect(gameState.level);
  renderRandomlySelectedOption("picture");
});
