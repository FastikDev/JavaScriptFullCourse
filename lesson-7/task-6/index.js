'use strict';

// put your code here
function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return [...arr];
}
