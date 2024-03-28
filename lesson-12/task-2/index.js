'use strict';

// put your code here
const reverseString = str => {
  if (typeof str !== 'string') {
    return null;
  }

  return str.split('').reverse().join('');
};
