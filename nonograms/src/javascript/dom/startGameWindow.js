import { createElementWithClassId, hideElement, addClass } from "../helpers/helpers.js";
import { gameState } from "../gameState/gameState.js";

export function renderStartGameWindow() {
  hidePrimaryWindow();
  const gameContainerWrapper = document.getElementById("game__container-wrapper");
  addClass(gameContainerWrapper, 'game__container-wrapper_matrix');
  gameContainerWrapper.append(getMatrixWrapper());
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
  const matrixWrapper = createElementWithClassId('div', ['game__matrix-wrapper'], 'game__matrix-wrapper');
  matrixWrapper.append(getHintsTop(), getHintsLeft(), getMatrix());
  return matrixWrapper;
}

function getMatrix() {
  const matrix = createElementWithClassId('ul', ['game__matrix', 'flex'], 'game__matrix');
  gameState.matrix.forEach((row, rowIndex) => {
    const matrixRow = createElementWithClassId('li', ['game__matrix-row', 'flex']);
    row.forEach((_, columnIndex) => {
      const matrixElement = createElementWithClassId('div', ['game__matrix-element'], 'game__matrix-element');
      matrixElement.setAttribute('data-i', rowIndex);
      matrixElement.setAttribute('data-j', columnIndex);
      matrixElement.innerText = `${rowIndex}${columnIndex}`;
      matrixRow.append(matrixElement);
    });
    matrix.append(matrixRow);
  });
  return matrix;
}

function getHintsTop() {
  const hintsTop = createElementWithClassId('ul', ['game__matrix-hints', 'game__matrix-hints_top'], 'game__matrix-hints_top');

  return hintsTop;
}

function getHintsLeft() {
  const hintsLeft = createElementWithClassId('ul', ['game__matrix-hints', 'game__matrix-hints_left'], 'game__matrix-hints_left');

  return hintsLeft;
}