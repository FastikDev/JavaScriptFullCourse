import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  const isDeleteButton = e.target.classList.contains('list-item__delete-btn');

  if (isCheckbox) {
    const taskId = e.target.dataset.id;
    const tasksList = getItem('tasksList');
    const task = tasksList.find(task => task.id === taskId);
    const { text, createDate } = task;
    const done = e.target.checked;

    const updatedTask = {
      text,
      createDate,
      done,
      finishDate: done ? new Date().toISOString() : null,
    };

    updateTask(taskId, updatedTask)
      .then(() => getTasksList())
      .then(newTasksList => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });

    return;
  }

  if (isDeleteButton) {
    const taskId = e.target.dataset.id;

    deleteTask(taskId)
      .then(() => getTasksList())
      .then(newTasksList => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });

    return;
  }
};

