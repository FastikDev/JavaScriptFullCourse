'use strict';

// put your code here
function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map(num => (num % 2 === 0 ? num + delta : num));
}
