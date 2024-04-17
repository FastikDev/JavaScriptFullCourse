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

const divElem = document.querySelector('.rect_div');
const PElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const offHandlers = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  PElem.removeEventListener('click', logGreyP, true);
  PElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};

const onHandlers = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  PElem.addEventListener('click', logGreyP, true);
  PElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};

onHandlers();

const addBtn = document.querySelector('.attach-handlers-btn');
addBtn.addEventListener('click', onHandlers);

const removeBtn = document.querySelector('.remove-handlers-btn');
removeBtn.addEventListener('click', offHandlers);

const clear = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML = '';
};

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', clear);