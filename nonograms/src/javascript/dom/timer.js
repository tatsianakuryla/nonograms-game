import { createElementWithClassId } from "../helpers/helpers.js";

export function getTimer() {
    const timer = createElementWithClassId('div', ['game__timer', 'flex'], 'game__timer');
    timer.textContent = '00 : 00';
    return timer;
}