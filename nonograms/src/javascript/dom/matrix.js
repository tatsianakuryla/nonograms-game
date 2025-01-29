import { gameState } from "../gameState/gameState.js";
import { createElementWithClassId } from "../helpers/helpers.js";
import { gameStateShow } from "../gameStateShow/gameStateShow.js";

export function getMatrixSection() {
  const matrixWrapper = createElementWithClassId("div", [
    "game__matrix-section",
    "flex",
  ], 'game__matrix-section');

  return matrixWrapper;
}

export function renderMatrixSection() {
  const matrixWrapper  = document.getElementById('game__matrix-section');
  matrixWrapper.innerHTML = '';

  const topHintMatrixWrapper = createElementWithClassId("div", [
    "game__matrix-top-hint-section",
    "flex",
  ]);
  gameState.setHintsArray('left');
  gameState.setHintsArray('top');
  topHintMatrixWrapper.append(getHints("top"), getMatrix());
  matrixWrapper.append(getHints("left"), topHintMatrixWrapper);
  gameStateShow.afterMatrixRender();
}

function getMatrix() {
  const matrix = createElementWithClassId(
    "div",
    ["game__matrix", "flex"],
    "game__matrix"
  );
  gameState.matrix.forEach((row, rowIndex) => {
    const matrixRow = createElementWithClassId("div", [
      "game__matrix-row",
      "flex",
    ]);
    row.forEach((_, columnIndex) => {
      const matrixElement = createElementWithClassId(
        "div",
        ["game__matrix-element", "flex"],
        "game__matrix-element"
      );
      matrixElement.setAttribute("data-i", rowIndex);
      matrixElement.setAttribute("data-j", columnIndex);
      matrixElement.append(getLine(), getLine());
      matrixRow.append(matrixElement);
    });
    matrix.append(matrixRow);
  });
  return matrix;
}

function getLine() {
  const line = createElementWithClassId("span", ["game__matrix-element-cross"]);
  return line;
}

function getHints(location) {
  const hints = createElementWithClassId(
    "div",
    ["game__matrix-hints", `game__matrix-hints_${location}`, "flex"],
    `game__matrix-hints_${location}`
  );
  const gameStateArray =
    location === "left" ? gameState.hintsArrayLeft : gameState.hintsArrayTop;
  gameStateArray.forEach((hintsArray) => {
    const hintsRow = createElementWithClassId("div", [
      `game__hints-row-${location}`,
      "flex",
    ]);
    hintsArray.forEach((hint) => {
      const hintElement = createElementWithClassId("div", [
        `game__hint-${location}`,
        "flex",
      ]);
      hintElement.textContent = hint;
      hintsRow.append(hintElement);
    });
    hints.append(hintsRow);
  });
  return hints;
}
