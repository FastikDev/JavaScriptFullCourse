'use strict';
// put your code here
let message = 'Just learn it';

export const sendMessage = name => {
  const sender = 'Gromcode';
  console.log(`${name}, ${message}! Your ${sender}`);
};

export function setMessage(text) {
  message = text;
}
