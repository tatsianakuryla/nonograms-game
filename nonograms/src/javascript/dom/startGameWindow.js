import { createElementWithClassId } from "../helpers/helpers.js";

import { gameState } from "../gameState/gameState.js";
import { getModeBtn } from "./mode.js";
import { getLevelChoiceSection } from "./levelChoice.js";
import { getMatrixSection, renderMatrixSection } from "./matrix.js";
import {
  getPictureChoiceSection,
  renderPictureSelect,
  addEventListenerPictureSelect,
} from "./pictureChoice.js";
import { getButtons } from "./buttons.js";
import { getTimer } from "./timer.js";
import {
  getGameResults,
  getResultsHeader,
  renderGameResults,
} from "./bestResults.js";

const MANAGE_BUTTONS_TASKS = [
  "random",
  "solution",
  "continue",
  "reset",
  "save",
];

const MANAGE_BUTTON_TEXTS = {
  random: "Random game",
  continue: "Continue last game",
  solution: "Solution",
  reset: "Reset game",
  save: "Save game",
};

export function renderStartGameWindow() {
  document.body.append(getMain());
  gameState.firstLoading();
  renderPictureSelect();
  addEventListenerPictureSelect();
  renderMatrixSection();
  renderGameResults();
}

function getMain() {
  const main = createElementWithClassId("main", ["main"]);
  main.append(getGameSection());
  return main;
}

function getGameSection() {
  const gameSection = createElementWithClassId("section", ["game", "flex"]);
  gameSection.append(getGameContainer());
  return gameSection;
}

function getGameContainer() {
  const gameContainer = createElementWithClassId(
    "div",
    ["game__container", "flex"],
    "game__container"
  );
  const heading = createElementWithClassId(
    "h1",
    ["game__heading"],
    "game__heading"
  );
  heading.textContent = "Nonograms";
  const wrapper = createElementWithClassId(
    "div",
    ["game__wrapper", "flex"],
    "game__wrapper"
  );
  wrapper.append(getMatrixSection(), getGameAside(), getModeBtn(), getTimer());
  gameContainer.append(heading, wrapper);
  return gameContainer;
}

function getGameAside() {
  const gameAside = createElementWithClassId(
    "div",
    ["game__aside", "flex"],
    "game__aside"
  );

  MANAGE_BUTTONS_TASKS.forEach((btnTask) => {
    gameAside.append(getButtons(btnTask, MANAGE_BUTTON_TEXTS));
  });

  gameAside.append(
    getLevelChoiceSection(),
    getPictureChoiceSection(),
    getResultsHeader(),
    getGameResults()
  );
  return gameAside;
}
