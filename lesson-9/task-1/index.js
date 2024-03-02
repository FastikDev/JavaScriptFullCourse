'use strict';

// put your code here
const getAdults = obj => {
  if (!Object.keys(obj)) {
    return [];
  }
  return Object.entries(obj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);
};
