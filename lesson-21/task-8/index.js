export const createButton = buttonText => {
  const buttonElem = document.createElement('button');
  buttonElem.textContent = buttonText;
  const bodyElem = document.querySelector('body');
  bodyElem.append(buttonElem);
};
