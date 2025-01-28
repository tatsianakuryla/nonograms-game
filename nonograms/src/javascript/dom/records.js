import { records } from "../gameState/gameState.js";

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