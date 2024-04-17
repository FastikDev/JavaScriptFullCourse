'use strict';

const btnElems = document.querySelectorAll('.btn');

btnElems.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

function handleClick(event) {
  console.log(event.target.textContent);
}
