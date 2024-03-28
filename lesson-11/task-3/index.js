'use strict';

// put your code here
const splitString = (text, num = 10) => {
  if (typeof text !== 'string') {
    return null;
  }

  const array = [];
  let startPos = 0;

  while (true) {
    const chunk = text.substr(startPos, num);

    if (chunk.length === 0) {
      break;
    }

    array.push(chunk);

    startPos += num;
  }

  if (array[array.length - 1].length < num) {
    array[array.length - 1] = array[array.length - 1].padEnd(num, '.');
  }
  return array;
};
