'use strict';

const checkboxElem = document.querySelector('.task-status');
checkboxElem.addEventListener('change', checkboxValue);

function checkboxValue() {
  console.log(checkboxElem.checked);
}
