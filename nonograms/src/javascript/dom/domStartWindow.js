import {
  createElementWithClassId,
  textToCapitalCase,
} from "../helpers/helpers.js";
import { LEVELS, records } from "../gameState/gameState.js";

const MANAGE_BUTTONS_TASKS = ["new", "random", "continue"];
const MODE_BUTTONS_TASKS = ["light", "dark"];
const MANAGE_BUTTON_TEXTS = {
  new: "Start new game",
  random: "Start random game",
  continue: "Continue last game",
};

export function renderStartWindow() {
  document.body.append(getMain());
  renderGameImages();
  renderGameRecordsList();
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
  const gameContainer = createElementWithClassId("div", [
    "game__container",
    "flex",
  ]);
  gameContainer.append(getGameSettingsSection(), getGameAside());
  return gameContainer;
}

function getGameAside() {
  const gameAside = createElementWithClassId("div", ["game__aside", "flex"]);
  gameAside.append(getGameRecordsList(), getModeBtnsWrapper());
  const recordHeader = createElementWithClassId("h4", ["game__records-header"]);
  recordHeader.textContent = "Best results:";
  gameAside.prepend(recordHeader);
  return gameAside;
}

function getGameRecordsList() {
  return createElementWithClassId(
    "ul",
    ["game__records-list", "flex"],
    "game__records-list"
  );
}

function renderGameRecordsList() {
  const gameRecordsList = document.getElementById("game__records-list");
  gameRecordsList.innerHTML = "";
  if (!records.length) {
    gameRecordsList.textContent = "No records available.";
  } else {
    records.forEach((record) => {
      gameRecordsList.append(getRecordItem(record));
    });
  }
}

function getRecordItem({ name, level, completeTime }) {
  const recordItem = createElementWithClassId("li", ["game__record-item", 'flex']);
  const recordName = createElementWithClassId("p", ["game__record-name"]);
  recordName.textContent = textToCapitalCase(name);

  const recordLevel = createElementWithClassId("p", ["game__record-level"]);
  recordLevel.textContent = level;

  const recordCompleteTime = createElementWithClassId("p", [
    "game__record-time",
  ]);
  recordCompleteTime.textContent = completeTime + "s";

  recordItem.append(recordName, recordLevel, recordCompleteTime);

  return recordItem;
}

function getModeBtnsWrapper() {
  const modeBtnsWrapper = createElementWithClassId("div", [
    "game__mode-btns-wrapper",
    'flex',
  ]);
  MODE_BUTTONS_TASKS.forEach((btnTask) => {
    modeBtnsWrapper.append(getModeButtons(btnTask));
  });
  return modeBtnsWrapper;
}

function getModeButtons(btnMode) {
  const btn = createElementWithClassId("button", [
    "game__btn-mode",
    `game__btn-mode_${btnMode}`,
  ]);
  //Remove
  btn.textContent = textToCapitalCase(btnMode) + ' mode';
  return btn;
}

function getGameSettingsSection() {
  const gameSettingsSection = createElementWithClassId("div", [
    "game__settings",
    "flex",
  ]);
  const heading = createElementWithClassId("h1", ["game__heading"]);
  heading.textContent = "Nonograms";
  gameSettingsSection.append(
    heading,
    getLevelChoiceSection(),
    getGameImagesList(),
    getManageBtnsWrapper()
  );
  return gameSettingsSection;
}

function getLevelChoiceSection() {
  const levelChoiceSection = createElementWithClassId("div", [
    "game__levels-choice",
    "flex",
  ]);

  Array.from(LEVELS.keys()).forEach((level) => {
    levelChoiceSection.append(getLevelChoiceBtn(level));
  });
  return levelChoiceSection;
}

function getLevelChoiceBtn(level) {
  const levelBtn = createElementWithClassId(
    "input",
    ["game__level-btn", `game__level-btn_${level}`],
    level
  );
  levelBtn.setAttribute("name", "game-level");
  levelBtn.setAttribute("type", "radio");
  if (level === "easy") levelBtn.setAttribute("checked", "true");

  const levelLabel = createElementWithClassId(
    "label",
    ["game__level-label", `game__level-label_${level}`],
    `game__level-label_${level}`
  );
  levelLabel.setAttribute("for", level);
  levelLabel.textContent = textToCapitalCase(level);

  const levelWrapper = createElementWithClassId("div", ["game__level-wrapper"]);
  levelWrapper.append(levelBtn, levelLabel);

  return levelWrapper;
}

function renderGameImages(level = "easy") {
  const gameImagesList = document.getElementById("game__images-list");
  gameImagesList.innerHTML = "";
  LEVELS.get(level)
    .keys()
    .forEach((imageName) => {
      const imageItem = createElementWithClassId("li", ["game__image-item"]);
      imageItem.textContent = textToCapitalCase(imageName);
      gameImagesList.append(imageItem);
    });
}

function getGameImagesList() {
  return createElementWithClassId(
    "ul",
    ["game__images-list", "flex"],
    "game__images-list"
  );
}

function getManageBtnsWrapper() {
  const manageBtnsWrapper = createElementWithClassId("div", [
    "game__manage-btns-wrapper",
    "flex",
  ]);
  MANAGE_BUTTONS_TASKS.forEach((btnTask) => {
    manageBtnsWrapper.append(getManageButtons(btnTask));
  });
  return manageBtnsWrapper;
}

function getManageButtons(btnTask) {
  const btn = createElementWithClassId("button", [
    "game__btn-manage",
    `game__btn-manage_${btnTask}`,
  ]);
  if (MANAGE_BUTTON_TEXTS[btnTask]) {
    btn.textContent = MANAGE_BUTTON_TEXTS[btnTask];
  }
  return btn;
}
