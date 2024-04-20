'use strict';

export const tasks = [
  { id: 'task1', text: 'Buy milk', done: false },
  { id: 'task2', text: 'Pick up Tom from airport', done: false },
  { id: 'task3', text: 'Visit party', done: false },
  { id: 'task4', text: 'Visit doctor', done: true },
  { id: 'task5', text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  tasksList
    .sort((a, b) => a.done - b.done)
    .forEach(({ id, text, done }) => {
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
      listItemElem.appendChild(checkboxElem);
      
      const textElem = document.createElement('span');
      textElem.textContent = text;
      listItemElem.appendChild(textElem);

      listElem.appendChild(listItemElem);
    });
};

const toggleTaskStatus = taskId => {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    renderTasks(tasks);
  }
};

const createTask = text => {
  if (text.trim() === '') {
    return; // Don't add empty tasks
  }
  const newTask = {
    id: `task${tasks.length + 1}`,
    text,
    done: false,
  };
  tasks.push(newTask);
  renderTasks(tasks);
};

document.querySelector('.create-task-btn').addEventListener('click', () => {
  const taskInput = document.querySelector('.task-input');
  createTask(taskInput.value);
  taskInput.value = '';
});

document.querySelector('.list').addEventListener('click', event => {
  if (event.target.classList.contains('list__item-checkbox')) {
    const taskId = event.target.dataset.id;
    toggleTaskStatus(taskId);
  }
});

renderTasks(tasks);
