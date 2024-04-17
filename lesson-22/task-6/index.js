'use strict';

const btnElem = document.querySelector('.single-use-btn');

btnElem.addEventListener('click', getClick);

function getClick() {
  console.log('clicked');
  btnElem.removeEventListener('click', getClick);
}
