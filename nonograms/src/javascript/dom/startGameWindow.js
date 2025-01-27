import { createElementWithClassId, hideElement, addClass } from "../helpers/helpers.js";
import { gameState } from "../gameState/gameState.js";
import { getManageButtons } from "./primaryWindow.js";
const MANAGE_BUTTONS_TASKS_GAME= ["answer", "reset", "new"];
const MANAGE_BUTTON_TEXTS_GAME = {
  answer: "Get answer",
  reset: "Reset",
  new: "New game",
};

export function renderStartGameWindow() {
  hidePrimaryWindow();
  const gameContainerWrapper = document.getElementById("game__container-wrapper");
  addClass(gameContainerWrapper, 'game__container-wrapper_matrix');
  gameContainerWrapper.append(getMatrixWrapper(), getManageBtnsWrapperGame());
  gameState.makeCellBlackWhite();
}

function hidePrimaryWindow() {
  const gameAsideDection = document.getElementById("game__aside");
  const gameSettingsSection = document.getElementById("game__settings");

  hideElement([
    gameAsideDection,
    gameSettingsSection,
  ]);
}

function getMatrixWrapper() {

  const matrixWrapper = createElementWithClassId('div', ['game__matrix-wrapper', 'flex']);

  const topHintMatrixWrapper = createElementWithClassId('div', ['game__matrix-top-hint-wrapper', 'flex']);

  topHintMatrixWrapper.append(getHints('top'), getMatrix());
  matrixWrapper.append(getHints('left'), topHintMatrixWrapper);

  return matrixWrapper;
}

function getMatrix() {
  const matrix = createElementWithClassId('div', ['game__matrix', 'flex'], 'game__matrix');
  gameState.matrix.forEach((row, rowIndex) => {
    const matrixRow = createElementWithClassId('div', ['game__matrix-row', 'flex']);
    row.forEach((_, columnIndex) => {
      const matrixElement = createElementWithClassId('div', ['game__matrix-element', 'flex'], 'game__matrix-element');
      matrixElement.setAttribute('data-i', rowIndex);
      matrixElement.setAttribute('data-j', columnIndex);
      matrixElement.append(getLine(), getLine());
      matrixRow.append(matrixElement);
    });
    matrix.append(matrixRow);
  });
  return matrix;
}

function getLine() {
  const line = createElementWithClassId('span', ['game__matrix-element-cross']); 
  return line;
}

function getHints(location) {
  const hints = createElementWithClassId('div', ['game__matrix-hints', `game__matrix-hints_${location}`, 'flex'], `game__matrix-hints_${location}`);
  const gameStateArray = location === 'left' ? gameState.hintsArrayLeft : gameState.hintsArrayTop;
  gameStateArray.forEach((hintsArray) => {
    const hintsRow = createElementWithClassId('div', [`game__hints-row-${location}`, 'flex']);
    hintsArray.forEach((hint) => {
      const hintElement = createElementWithClassId('div', [`game__hint-${location}`, 'flex']);
      hintElement.textContent = hint;
      hintsRow.append(hintElement);
    });
    hints.append(hintsRow);
  });
  return hints;

}

function getManageBtnsWrapperGame() {
  const manageBtnsWrapper = createElementWithClassId(
      "div",
      ["game__manage-btns-wrapper", "game__manage-btns-wrapper_game", "flex"],
      "game__manage-btns-wrapper"
    );
    MANAGE_BUTTONS_TASKS_GAME.forEach((btnTask) => {
      manageBtnsWrapper.append(getManageButtons(btnTask, MANAGE_BUTTON_TEXTS_GAME));
    });
    return manageBtnsWrapper;
}