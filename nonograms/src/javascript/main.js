import { renderPrimarytWindow, renderGameImages } from "./dom/primaryWindow.js";
import { gameState } from "./gameState/gameState.js";
import { renderStartGameWindow } from "./dom/startGameWindow.js";

renderPrimarytWindow();

Array.from(document.getElementsByClassName("game__level-label")).forEach(
  (label) => {
    label.addEventListener("click", (event) => {
      gameState.setLevel(event.target.getAttribute("for"));
      renderGameImages(gameState.level);
      Array.from(document.getElementsByClassName("game__image-label")).forEach(
        (label) => {
          label.addEventListener("click", (event) => {
            gameState.setMatrix(event.target.getAttribute("for"));
          });
        }
      );
    });
  }
);

const randonGameBtn = document.getElementById("game__btn-manage_random");
const startGameBtn = document.getElementById("game__btn-manage_new");
const continueGameBtn = document.getElementById("game__btn-manage_continue");

randonGameBtn.addEventListener("click", () => {
  gameState.startRandomGame();
  renderStartGameWindow();
});

startGameBtn.addEventListener("click", () => {
  gameState.startGame();
  renderStartGameWindow();
});
