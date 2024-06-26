import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  checkboxElem.dataset.id = id;
  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');

  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;

  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};

export const renderTasks = () => {
  const taskList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = taskList.sort((a, b) => a.done - b.done).map(createListItem);
  listElem.append(...tasksElems);
};
