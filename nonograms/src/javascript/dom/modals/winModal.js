import { createElementWithClassId } from "../../helpers/helpers.js";

export function getWinModal() {
  const winSection = createElementWithClassId(
    "div",
    ["win-modal", "flex"],
    "win-modal"
  );
  winSection.textContent = `You have solve the nonogram in 00s`;
  return winSection;
}
