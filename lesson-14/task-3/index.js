'use strict';

// put your code here
let start = 0;

export const add = number => (start += number);

export const decrease = number => (start -= number);

export const reset = () => {
  start = 0;
};

export const getMemo = () => start;
