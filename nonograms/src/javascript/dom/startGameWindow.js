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

  const matrixWrapper = createElementWithClassId('div', ['game__matrix-wrapper', 'flex']);

  const topHintMatrixWrapper = createElementWithClassId('div', ['game__matrix-top-hint-wrapper', 'flex']);

  topHintMatrixWrapper.append(getHintsTop(), getMatrix());
  matrixWrapper.append(getHintsLeft(), topHintMatrixWrapper);

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
      matrixRow.append(matrixElement);
    });
    matrix.append(matrixRow);
  });
  return matrix;
}

function getHintsTop() {
  const hintsTop = createElementWithClassId('div', ['game__matrix-hints', 'game__matrix-hints_top', 'flex'], 'game__matrix-hints_top');

  gameState.hintsArrayTop.forEach((hintsArray) => {
    const hintsRow = createElementWithClassId('div', ['game__hints-row-top', 'flex']);
    hintsArray.forEach((hint) => {
      const hintElement = createElementWithClassId('div', ['game__hint-top', 'flex']);
      hintElement.textContent = hint;
      hintsRow.append(hintElement);
    });
    hintsTop.append(hintsRow);
  });

  return hintsTop;
}

function getHintsLeft() {
  const hintsLeft = createElementWithClassId('div', ['game__matrix-hints', 'game__matrix-hints_left', 'flex'], 'game__matrix-hints_left');
  gameState.hintsArrayLeft.forEach((hintsArray) => {
    const hintsRow = createElementWithClassId('div', ['game__hints-row-left', 'flex']);
    hintsArray.forEach((hint) => {
      const hintElement = createElementWithClassId('div', ['game__hint-left', 'flex']);
      hintElement.textContent = hint;
      hintsRow.append(hintElement);
    });
    hintsLeft.append(hintsRow);
  });
  return hintsLeft;
}