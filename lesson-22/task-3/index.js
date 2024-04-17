const inputElem = document.querySelector('.text-input');
inputElem.addEventListener('change', inputValue);

function inputValue() {
  console.log(inputElem.value);
}
