//algo

//1. make request to serer
//2. get json from responcive
//3. make find id from responcive array

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export function getTasksList() {
  // put your code here
  return fetch(baseUrl)
    .then(response => response.json());
}

export function getTaskById(taskId) {
  // put your code here
  return fetch(`${baseUrl}/${taskId}`);
}