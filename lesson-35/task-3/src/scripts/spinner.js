const spinnerElem = document.querySelector('.spinner');

export const showSpinner = () => {
  spinnerElem.classList.remove('spinner_hidden');
};

export const hiddenSpinner = () => {
  spinnerElem.classList.add('spinner_hidden');
};
