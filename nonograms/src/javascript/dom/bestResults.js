import { records } from "../gameState/gameState.js";
import { createElementWithClassId, textToCapitalCase } from "../helpers/helpers.js";

export function getGameResults() {
  return createElementWithClassId(
    "ul",
    ["game__records-list", "flex"],
    "game__records-list"
  );
}

export function renderGameResults() {
  const gameRecordsList = document.getElementById("game__records-list");
  gameRecordsList.innerHTML = "";
  if (!records.length) {
    gameRecordsList.textContent = "No results available.";
  } else {
    records.sort((a, b) => a.completeTime - b.completeTime);
    records.forEach((record) => {
      gameRecordsList.append(getResultItem(record));
    });
  }
}

export function getResultsHeader() {
  const recordsHeader = createElementWithClassId("h4", [
    "game__records-header",
  ]);
  recordsHeader.textContent = "Best results";
  return recordsHeader;
}

function getResultItem({ name, level, completeTime }) {
  const recordItem = createElementWithClassId("li", [
    "game__record-item",
    "flex",
  ]);
 
  recordItem.textContent = textToCapitalCase(name).replaceAll('-', ' ') + ' - Level ' + textToCapitalCase(level)+ ' - ' + completeTime + 's';

  return recordItem;
}
