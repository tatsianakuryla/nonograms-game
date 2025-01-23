import { renderStartWindow, renderGameImages } from "./dom/domStartWindow.js";
import { gameState } from "./gameState/gameState.js";

renderStartWindow();

Array.from(document.getElementsByClassName('game__level-label')).forEach((label) => {
    label.addEventListener(('click'), (event) => {
        gameState.level = event.target.getAttribute('for');
        renderGameImages(gameState.level);
    });
});