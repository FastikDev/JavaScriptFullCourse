const baseUrl = 'https://api.github.com/users';

export const fetchUserData = userName => {
  return fetch(`${baseUrl}/${userName}`).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};

export const fetchRepositories = url => {
  return fetch(url).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};
