'use strict';

// put your code here
export const makeCounter = () => {
  let counter = 0;

  return function () {
    return counter++;
  };
};
