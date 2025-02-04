import { createElementWithClassId } from "../helpers/helpers.js";

import { gameState } from "../gameState/gameState.js";
import { getModeBtn } from "./modeBtn.js";
import { getLevelChoiceSection } from "./levelSelect.js";
import { getMatrixSection, renderMatrixSection } from "./matrix.js";
import {
  getPictureChoiceSection,
  renderPictureSelect,
  addEventListenerPictureSelect,
} from "./pictureSelect.js";
import { getButtons } from "./buttons.js";
import { getTimer } from "./timer.js";
import {
  getGameResultsModal,
  renderGameResults,
} from "./modals/resultsModal.js";
import { getWinModal } from "./modals/winModal.js";
import { getSoundToggler } from './soundToggler.js';

const MANAGE_BUTTONS_TASKS = [
  "random",
  "solution",
  "continue",
  "reset",
  "save",
  "results",
];

const MANAGE_BUTTON_TEXTS = {
  random: "Random game",
  continue: "Continue last game",
  solution: "Solution",
  reset: "Reset game",
  save: "Save game",
  results: "Results",
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
  gameSection.append(getGameContainer(), getWinModal(), getGameResultsModal());
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

  const showAsideBtn = createElementWithClassId('button', ['game__show-aside-button'], 'game__show-aside-button');
  wrapper.append(getGameAside(), getMatrixSection(), getModeBtn(), getTimer(), showAsideBtn, getSoundToggler());
  gameContainer.append(heading, wrapper);
  return gameContainer;
}

function getGameAside() {
  const gameAside = createElementWithClassId(
    "div",
    ["game__aside", "flex"],
    "game__aside"
  );

  gameAside.append(getLevelChoiceSection(), getPictureChoiceSection());

  MANAGE_BUTTONS_TASKS.forEach((btnTask) => {
    gameAside.append(getButtons(btnTask, MANAGE_BUTTON_TEXTS));
  });

  return gameAside;
}
