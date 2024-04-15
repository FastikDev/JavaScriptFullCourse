'use strict';

export const getTitle = () => {
  const titleElem = document.querySelector('.title');

  return titleElem.textContent;
};

export const getDescription = () => {
  const aboutElem = document.querySelector('.about');

  return aboutElem.innerText;
};

export const getPlans = () => {
  const plansElem = document.querySelector('.plans');

  return plansElem.innerHTML;
};

export const getGoal = () => {
  const goalElem = document.querySelector('.goal');
  
  return goalElem.outerHTML;
};
