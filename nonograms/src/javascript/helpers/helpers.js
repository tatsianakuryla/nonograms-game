export function createElementWithClassId(tag, classList = [], id = null) {
  const element = document.createElement(tag);
  classList.forEach(className =>  element.classList.add(className));
 
  if (id) element.id = id;
  return element;
}

export function textToCapitalCase(text) {
  return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
}

