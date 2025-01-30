import {
    createElementWithClassId,
  } from "../helpers/helpers.js";


export function getWinModal() {
    const winSection = createElementWithClassId('div', ['win-modal', 'flex'], 'win-modal');
    winSection.textContent = `You have solve the nonogram in 00s`;
    const closeModalBtn = createElementWithClassId('button', ['win-modal__close-btn'], 'win-modal__close-btn');
    const btnSpan = createElementWithClassId('span', ['win-modal__span']);
    const btnSpan2 = createElementWithClassId('span', ['win-modal__span']);
    closeModalBtn.append(btnSpan, btnSpan2);
    winSection.append(closeModalBtn);
    
    return winSection;
}