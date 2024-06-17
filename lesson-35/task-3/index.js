import { fetchUserData, fetchRepositories } from './src/scripts/gateway.js';
import { renderUserData } from './src/scripts/user.js';
import { renderRepos, clearReposList } from './src/scripts/repos.js';
import { showSpinner, hiddenSpinner } from './src/scripts/spinner.js';

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  showSpinner();
  clearReposList();
  const userName = userNameInputElem.value;
  fetchUserData(userName)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => {
      renderRepos(reposList);
      hiddenSpinner();
    })
    .catch(err => {
      hiddenSpinner();
      alert(err.message);
    });
};

showUserBtnElem.addEventListener('click', onSearchUser);
