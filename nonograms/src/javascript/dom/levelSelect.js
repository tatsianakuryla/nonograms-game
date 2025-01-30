import { createElementWithClassId, textToCapitalCase } from "../helpers/helpers.js";
import { gameState, LEVELS } from "../gameState/gameState.js";

export function getLevelChoiceSection() {
  const selectLevelSection = createElementWithClassId('div', ['game__level-section', 'flex']);
  const selectLabel = createElementWithClassId('label', ['game__level-label']);
  selectLabel.textContent = 'Level:';
  selectLabel.setAttribute('for', 'level');

  selectLevelSection.append(selectLabel, getLevelChoiceSelect());

  return selectLevelSection;
}

function getLevelChoiceSelect() {
  const levelSelect = createElementWithClassId(
    "select",
    ["game__levels-select"],
    "game__levels-select"
  );
  levelSelect.setAttribute('id', 'level');

  Array.from(LEVELS.keys()).forEach((level) => {
    levelSelect.append(getLevelOption(level));
  });

  return levelSelect;
}

function getLevelOption(level) {
  const levelOption = createElementWithClassId(
    "option",
    ["game__level-option", `game__level-option_${level}`],
    level
  );
  levelOption.setAttribute("value", level);
  if (level === "easy") levelOption.setAttribute("selected", "true");
  levelOption.textContent = textToCapitalCase(level);

  return levelOption;
}

export function renderSelect(selectId) {
  const select = document.getElementById(selectId);
  const comparedValue = selectId === 'picture' ? gameState.matrixName : gameState.level;
  Array.from(select).forEach((option, index) => {
    console.log();
    option.value.replaceAll(" ", "-") === comparedValue
      ? (select.selectedIndex = index)
      : select.selectedIndex;
  });
}