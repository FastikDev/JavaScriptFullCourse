'use strict';

export function createArrayOfFunctions(num) {
  if (typeof num === 'undefined') {
    return [];
  }

  if (isNaN(num)) {
    return null;
  }

  let arr = [];
  arr.length = num;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = function () {
      return i;
    };
  }

  return arr;
}
