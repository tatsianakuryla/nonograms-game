import { gameState } from "../gameState/gameState.js";

export function createElementWithClassId(tag, classList = [], id = null) {
  const element = document.createElement(tag);
  classList.forEach(className =>  element.classList.add(className));
 
  if (id) element.id = id;
  return element;
}

export function textToCapitalCase(text) {
  return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
}

export function hideElement(elements) {
  elements.forEach(element =>  element.classList.add('hidden'));
}

export function showElement(elements) {
  elements.forEach(element =>  element.classList.remove('hidden'));
}

export function addClass(element, className) {
  element.classList.add(className);
}

export function removeClass(element, className) {
  element.classList.remove(className);
}

export function disableElement(element) {
  if (!element.disabled) {
    element.disabled = 'true';
    element.style.cursor = 'auto';
  };
}

export function enableElement(element) {
  if (element.disabled) {
    element.disabled = '';
    element.style.cursor = 'pointer';
  }
}