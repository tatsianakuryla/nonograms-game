import { sortedResults } from "../../gameState/gameState.js";
import {
  createElementWithClassId,
  textToCapitalCase,
} from "../../helpers/helpers.js";

export function getGameResultsModal() {
  const resultsModal = createElementWithClassId(
    "div",
    ["results-modal", "flex"],
    "results-modal"
  );
  const resultsHeader = createElementWithClassId("h4", [
    "results-modal__header",
  ]);
  resultsHeader.textContent = "Last results";

  const resultsList = createElementWithClassId(
    "ol",
    ["results-modal__list", "flex"],
    "results-modal__list"
  );

  const resultsCloseBtn = createElementWithClassId(
    "button",
    ["results-modal__close-button"],
    "results-modal__close-button"
  );
  const btnSpan = createElementWithClassId("span", ["results-modal__span"]);
  const btnSpan2 = createElementWithClassId("span", ["results-modal__span"]);
  resultsCloseBtn.append(btnSpan, btnSpan2);

  resultsModal.append(resultsHeader, resultsList, resultsCloseBtn);
  return resultsModal;
}

export function renderGameResults() {
  const gameRecordsList = document.getElementById("results-modal__list");
  gameRecordsList.innerHTML = "";
  if (!sortedResults.length) {
    gameRecordsList.textContent = "No results available.";
  } else {
    sortedResults.forEach((record) => {
      gameRecordsList.append(getResultItem(record));
    });
  }
}

function getResultItem({ name, level, resultMinutes, resultSeconds }) {
  const recordItem = createElementWithClassId("li", [
    "results-modal__item",
    "flex",
  ]);

  recordItem.textContent =
    textToCapitalCase(name).replaceAll("-", " ") +
    " - Level " +
    textToCapitalCase(level) +
    " - " +
    resultMinutes +
    ":" +
    resultSeconds;

  return recordItem;
}
