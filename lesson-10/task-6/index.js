'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  const factor = Math.pow(10, prec);
  return [
    Math.floor(num * factor) / factor,
    Math.trunc(num * factor) / factor,
    Math.ceil(num * factor) / factor,
    Math.round(num * factor) / factor,
    +num.toFixed(prec),
  ];
};

// examples
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
