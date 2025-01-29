import {
  createElementWithClassId,
} from "../helpers/helpers.js";

export function getModeBtn() {
  const modeBtn = createElementWithClassId("button", ["game__mode-btn"], "game__mode-btn");
  return modeBtn;
}

