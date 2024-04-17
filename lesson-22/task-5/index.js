'use strict';

const inputElem = document.querySelector('.search__input');

const btnElem = document.querySelector('.search__btn');

btnElem.addEventListener('click', searchValue);

function searchValue() {
  console.log(inputElem.value);
}
