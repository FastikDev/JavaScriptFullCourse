import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
