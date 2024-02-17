'use strict';

// put your code here
function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce((a, b) => a + b) / arr.length;
}
