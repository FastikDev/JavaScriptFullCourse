'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrCopy = [];

  for (let i = 0; i < arr.length; i += 1) {
    arrCopy.push(arr[i] * arr[i]);
  }
  return arrCopy;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
