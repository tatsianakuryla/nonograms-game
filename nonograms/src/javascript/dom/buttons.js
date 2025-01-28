import { createElementWithClassId } from "../helpers/helpers.js";

export function getButtons(btnTask, text) {
  const btn = createElementWithClassId(
    "button",
    ["game__btn-manage", `game__btn-manage_${btnTask}`],
    `game__btn-manage_${btnTask}`
  );
  btn.textContent = text[btnTask];
  if (btnTask === 'continue' || btnTask === 'save' || btnTask === 'reset') btn.setAttribute('disabled', 'true');

  return btn;
}
