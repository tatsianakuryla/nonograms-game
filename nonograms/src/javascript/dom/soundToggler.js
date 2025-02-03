import { createElementWithClassId } from "../helpers/helpers.js";

export function getSoundToggler() {
    return createElementWithClassId('button', ['game__sound-toggler'], 'game__sound-toggler');
}