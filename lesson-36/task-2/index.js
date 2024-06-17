import { fetchUserData, fetchRepositories } from './src/scripts/gateway.js';
import { renderUserData } from './src/scripts/user.js';
import { renderRepos, clearReposList } from './src/scripts/repos.js';
import { showSpinner, hiddenSpinner } from './src/scripts/spinner.js';

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
  showSpinner();
  clearReposList();
  const userName = userNameInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hiddenSpinner();
  }
};

showUserBtnElem.addEventListener('click', onSearchUser);
