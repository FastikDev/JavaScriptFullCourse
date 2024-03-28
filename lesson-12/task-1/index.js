'use strict';

// put your code here
const calc = expression => {
  const [x, operatop, y] = expression.split(' ');
  let result;

  switch (operatop) {
    case '+':
      result = Number(x) + Number(y);
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
  }

  return `${expression} = ${result}`;
};
