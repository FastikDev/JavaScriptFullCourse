import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox'); // исправлено

  if (!isCheckbox) {
    return;
  }

  const tasksList = getItem('taskList'); // исправлено
  const newTasksList = tasksList.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });

  setItem('taskList', newTasksList); // исправлено
  renderTasks();
};
