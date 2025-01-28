import { LEVELS, gameState } from "../gameState/gameState.js";
import {
  createElementWithClassId,
  textToCapitalCase,
} from "../helpers/helpers.js";
import { renderMatrixSection } from "./matrix.js";

export function getPictureChoiceSection() {
  const selectPictureSection = createElementWithClassId("div", [
    "game__picture-section",
    "flex",
  ]);
  const selectLabel = createElementWithClassId("label", [
    "game__picture-label",
  ]);
  selectLabel.textContent = "Picture:";
  selectLabel.setAttribute("for", "picture");

  const pictureSelect = createElementWithClassId("select", [
    "game__picture-select",
  ], 'picture');

  selectPictureSection.append(selectLabel, pictureSelect);
  
  return selectPictureSection;
}

export function renderPictureSelect(level = "easy") {
  const pictureSelect = document.getElementById("picture");

  pictureSelect.innerHTML = "";

  LEVELS.get(level)
    .keys()
    .forEach((pictureName) => {
      const pictureNameConsice = pictureName.toLowerCase();
      const pictureOption = createElementWithClassId(
        "option",
        [
          "game__picture-option",
          `game__picture-option_${pictureNameConsice}`,
          "flex",
        ],
        pictureNameConsice
      );

      pictureOption.textContent = textToCapitalCase(
        pictureName.replaceAll("-", " ")
      );

      pictureSelect.append(pictureOption);
    });
}

export function addEventListenerPictureSelect() {
  document.getElementById("picture").addEventListener("change", (event) => {
    gameState.setMatrix(event.target.value);
    renderMatrixSection();
  });
}
