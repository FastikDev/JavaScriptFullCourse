'use strict';

const btnElem = document.querySelectorAll('.pagination__page');
btnElem.forEach(btn => btn.addEventListener('click', getDateAtribute)
);

function getDateAtribute(event) {
  console.log(event.target.getAttribute("data-page-number"));
}
