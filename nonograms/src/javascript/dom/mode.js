import { createElementWithClassId, textToCapitalCase } from "../helpers/helpers.js";
const MODE_BUTTONS_TASKS = ["light", "dark"];

export function getModeBtnsSection() {
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
