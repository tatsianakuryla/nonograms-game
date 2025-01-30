import { savedGameData } from "../gameState/gameState.js";
import { createElementWithClassId } from "../helpers/helpers.js";

export function getButtons(btnTask, text) {
  const btn = createElementWithClassId(
    "button",
    ["game__btn-manage", `game__btn-manage_${btnTask}`],
    `game__btn-manage_${btnTask}`
  );
  btn.textContent = text[btnTask];
  if (btnTask === 'save' || btnTask === 'reset') btn.setAttribute('disabled', 'true');
  if (btnTask === 'continue') {
    !savedGameData ? btn.setAttribute('disabled', 'true') : btn;
  };
  return btn;
}
