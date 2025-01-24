import {
  createElementWithClassId,
  textToCapitalCase,
} from "../helpers/helpers.js";
import { LEVELS, records } from "../gameState/gameState.js";

const MANAGE_BUTTONS_TASKS = ["new", "random", "continue"];
const MODE_BUTTONS_TASKS = ["light", "dark"];
const MANAGE_BUTTON_TEXTS = {
  new: "New game",
  random: "Random game",
  continue: "Continue last game",
};

export function renderPrimarytWindow() {
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
  const wrapper = createElementWithClassId('div', ['game__container-wrapper', 'flex'], 'game__container-wrapper');
  wrapper.append(getGameSettingsSection(), getGameAside());
  gameContainer.append(heading, getModeBtnsWrapper(), wrapper);
  return gameContainer;
}

function getGameAside() {
  const gameAside = createElementWithClassId("div", ["game__aside", "flex"], 'game__aside');
  const recordHeader = createElementWithClassId(
    "h4",
    ["game__records-header"],
    "game__records-header"
  );
  recordHeader.textContent = "Best results:";
  gameAside.append(recordHeader, getGameRecordsList());
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
  const recordItem = createElementWithClassId("li", [
    "game__record-item",
    "flex",
  ]);
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
    "flex",
  ]);
  MODE_BUTTONS_TASKS.forEach((btnTask) => {
    modeBtnsWrapper.append(getModeButtons(btnTask));
  });
  return modeBtnsWrapper;
}

function getModeButtons(btnMode) {
  const modeBtn = createElementWithClassId(
    "input",
    ["game__mode-btn", `game__mode-btn_${btnMode}`],
    btnMode
  );
  modeBtn.setAttribute("name", "game-mode");
  modeBtn.setAttribute("type", "radio");
  if (btnMode === "light") modeBtn.setAttribute("checked", "true");

  const modeLabel = createElementWithClassId(
    "label",
    ["game__mode-label", `game__mode-label_${btnMode}`],
    `game__mode-label_${btnMode}`
  );
  modeLabel.setAttribute("for", btnMode);
  modeLabel.textContent = textToCapitalCase(btnMode) + " mode";

  const modeWrapper = createElementWithClassId("div", [
    "game__mode-wrapper",
    `game__mode-wrapper_${btnMode}`,
    "flex",
  ]);
  modeWrapper.append(modeBtn, modeLabel);

  return modeWrapper;
}

function getGameSettingsSection() {
  const gameSettingsSection = createElementWithClassId(
    "div",
    ["game__settings", "flex"],
    "game__settings"
  );
  gameSettingsSection.append(
    getLevelChoiceSection(),
    getGameImagesList(),
    getManageBtnsWrapper()
  );
  return gameSettingsSection;
}

function getLevelChoiceSection() {
  const levelChoiceSection = createElementWithClassId(
    "div",
    ["game__levels-choice", "flex"],
    "game__levels-choice"
  );

  Array.from(LEVELS.keys()).forEach((level) => {
    levelChoiceSection.append(getRadioBtn(level));
  });
  return levelChoiceSection;
}

function getRadioBtn(level) {
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
  levelLabel.textContent = textToCapitalCase(level) + " level";

  const levelWrapper = createElementWithClassId("div", ["game__level-wrapper"]);
  levelWrapper.append(levelBtn, levelLabel);

  return levelWrapper;
}

export function renderGameImages(level = "easy") {
  const gameImagesList = document.getElementById("game__images-list");
  gameImagesList.innerHTML = "";
  LEVELS.get(level)
    .keys()
    .forEach((imageName) => {
      const imageNameConsice = imageName.toLowerCase();
      const imageItem = createElementWithClassId("li", [
        "game__image-item",
        "flex",
      ]);

      const imageRadio = createElementWithClassId(
        "input",
        ["game__image-btn", `game__mode-btn_${imageNameConsice}`],
        imageNameConsice
      );
      imageRadio.setAttribute("name", "game-image");
      imageRadio.setAttribute("type", "radio");

      const imageLabel = createElementWithClassId(
        "label",
        ["game__image-label", `game__image-label_${imageNameConsice}`],
        `game__image-label_${imageNameConsice}`
      );
      imageLabel.setAttribute("for", imageNameConsice);
      imageLabel.textContent = textToCapitalCase(
        imageName.replaceAll("-", " ")
      );

      imageItem.append(imageRadio, imageLabel);

      gameImagesList.append(imageItem);
    });
  document
    .getElementsByClassName("game__image-btn")[0]
    .setAttribute("checked", "true");
}

function getGameImagesList() {
  return createElementWithClassId(
    "ul",
    ["game__images-list", "flex"],
    "game__images-list"
  );
}

function getManageBtnsWrapper() {
  const manageBtnsWrapper = createElementWithClassId(
    "div",
    ["game__manage-btns-wrapper", "flex"],
    "game__manage-btns-wrapper"
  );
  MANAGE_BUTTONS_TASKS.forEach((btnTask) => {
    manageBtnsWrapper.append(getManageButtons(btnTask));
  });
  return manageBtnsWrapper;
}

function getManageButtons(btnTask) {
  const btn = createElementWithClassId(
    "button",
    ["game__btn-manage", `game__btn-manage_${btnTask}`],
    `game__btn-manage_${btnTask}`
  );
  btn.textContent = MANAGE_BUTTON_TEXTS[btnTask];
  if (btnTask === "continue") {
    btn.disabled = "true";
  }

  return btn;
}
