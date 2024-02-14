'use strict';

/**
 * @param {number} from
 * @param {number} to
 * @return {number}
 */
function getSum(from, to) {
  // put your code here
  let sum = 0;

  for (from; from <= to; from += 1) {
    if (from % 2 === 0) sum += from;
  }
  return sum;
}

// examples
console.log(getSum(5, 10));
// TODO
