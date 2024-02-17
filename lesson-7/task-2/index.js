'use strict';

// put your code here
const sortDesc = numbers => {
  const copy = [...numbers];
  copy.sort((a, b) => b - a);
  return copy;
};
