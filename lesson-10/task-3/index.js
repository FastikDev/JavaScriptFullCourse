'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = arr => {
  // put your code here
  if (arr.length === 0 || !Array.isArray(arr)) {
    return null;
  }
  const absolutNumber = arr.map(el => Math.abs(el));
  return Math.max(...absolutNumber);
};

// examples
getMaxAbsoluteNumber([-10, 10, -10]); // ===> 10
getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777
