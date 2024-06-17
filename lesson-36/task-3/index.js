'use strict';

//algo

//1. Edit block try - catch
//2. iteration on users array and response for all user
//3. return user obj on every iteration
//4. if response not ok reurn from this itetation
//5. await Promise all for iteration array
//6. iteration promise array for search [key] - blog
//7. filter all user who do not have  [key] - blog

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
