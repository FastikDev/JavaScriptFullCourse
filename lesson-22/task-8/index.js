'use strict';

const checkboxElem = document.querySelector('.task-status');
checkboxElem.addEventListener('click', checkboxValue);

function checkboxValue(event) {
  console.log(event.target.checked);
}
