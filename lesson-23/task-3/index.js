'use strict';

export const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const createBtnElem = document.querySelector('.create-task-btn');
const listElem = document.querySelector('.list');

export const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const taskElements = tasksList
    .slice()
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      checkboxElem.dataset.id = id;

      const textElem = document.createElement('span');
      textElem.textContent = text;
      listItemElem.append(checkboxElem, textElem);

      return listItemElem;
    });

  listElem.append(...taskElements);
};

export const toggleTaskStatus = event => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const task = tasks.find(task => task.id === event.target.dataset.id);
  task.done = !task.done;

  renderTasks(tasks);
};

export const createTask = () => {
  const taskInput = document.querySelector('.task-input');
  const value = taskInput.text;

  if (value.trim() === '') {
    return;
  }

  tasks.push({
    id: this.id + 1,
    value,
    done: false,
  });
  renderTasks(tasks);
  taskInput.value = '';
};

createBtnElem.addEventListener('click', createTask);

listElem.addEventListener('click', toggleTaskStatus);

renderTasks(tasks);
