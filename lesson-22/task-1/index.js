'use strict';

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const addBtn = document.querySelector('.attach-handlers-btn');

addBtn.addEventListener('click', logGreyDiv, true);
addBtn.addEventListener('click', logGreyP, true);
addBtn.addEventListener('click', logGreySpan, true);

addBtn.addEventListener('click', logGreenSpan);
addBtn.addEventListener('click', logGreenP);
addBtn.addEventListener('click', logGreenDiv);

const removeBtn = document.querySelector('.remove-handlers-btn');

removeBtn.addEventListener('click', () => {
  addBtn.removeEventListener('click', logGreyDiv, true);
  addBtn.removeEventListener('click', logGreyP, true);
  addBtn.removeEventListener('click', logGreySpan, true);
  addBtn.removeEventListener('click', logGreenSpan);
  addBtn.removeEventListener('click', logGreenP);
  addBtn.removeEventListener('click', logGreenDiv);
});

const clear = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML = '';
};

const clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', clear);