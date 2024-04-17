'use strict';

const btnElem = document.querySelector('.single-use-btn');

btn.addEventListener('click', getClick);

function getClick() {
  console.log('clicked');
  btn.removeEventListener('click', getClick);
}
