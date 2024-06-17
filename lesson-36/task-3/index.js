'use strict';

const baseUrl = 'https://api.github.com/users';

export const getUsersBlogs = async users => {
  try {
    const fetchPromises = users.map(user =>
      fetch(`${baseUrl}/${user}`).then(response => {
        if (!response.ok) {
          return null;
        }
        return response.json();
      }),
    );

    const result = await Promise.all(fetchPromises);
    const blogs = result.map(userData => (userData ? userData.blog : null));

    return blogs.filter(blog => blog !== null);
  } catch (error) {
    return error.message;
  }
};

getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList));
