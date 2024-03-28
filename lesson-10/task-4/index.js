'use strict';

// put your code here
const getTotalPrice = num => {
  return '$' + (Math.floor(num.reduce((el, sum) => el + sum, 0) * 100) / 100).toFixed(2);
};
