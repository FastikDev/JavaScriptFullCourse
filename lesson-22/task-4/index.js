const checkboxElem = document.querySelector('.task-status');
checkboxElem.addEventListener('click', checkboxValue);

function checkboxValue() {
  console.log(checkboxElem.checked);
}
