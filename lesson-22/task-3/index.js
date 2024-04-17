const inputElem = document.querySelector('.text-input');
inputElem.addEventListener('change', inputValue);

function inputValue(event) {
  console.log(event.target.value);
}
