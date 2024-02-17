'use strict';

// put your code here
function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.slice().reverse();
}
