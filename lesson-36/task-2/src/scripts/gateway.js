const baseUrl = 'https://api.github.com/users';

export const fetchUserData = async userName => {
  const response = await fetch(`${baseUrl}/${userName}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};

export const fetchRepositories = async url => {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};
