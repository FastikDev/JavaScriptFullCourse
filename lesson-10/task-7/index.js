'use strict';

/**
 * @param {number} num
 * @return {number[]}
 */
const multiRound = num => {
  // put your code here
  const factor = Math.pow(10, 2);
  return [
    Math.floor(num * factor) / factor,
    Math.trunc(num * factor) / factor,
    Math.ceil(num * factor) / factor,
    Math.round(num * factor) / factor,
    +num.toFixed(2),
  ];
};

// examples
multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
