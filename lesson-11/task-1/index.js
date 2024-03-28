'use strict';

// put your code here
const splitText = (text, num = 10) => {
  if (!(typeof text === 'string')) {
    return null;
  }
  const strArr = [];
  let startPos = 0;

  while (true) {
    const chunk = text.substr(startPos, num);
    if (chunk.length === 0) {
      break;
    }

    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPos += num;
  }
  return strArr.join('\n');
};
