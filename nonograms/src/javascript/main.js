import { renderStartGameWindow } from "./dom/startGameWindow.js";
import { gameState } from "./gameState/gameState.js";
import { renderPictureSelect, addEventListenerPictureSelect } from "./dom/pictureChoice.js";
import { renderMatrixSection } from "./dom/matrix.js";

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