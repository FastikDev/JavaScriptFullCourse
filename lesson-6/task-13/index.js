'use strict';

// put your code here

//   Пример работы:
//   Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
//   Output: 37 (и массив balances должен быть [1400, 37, -6])

//   Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
//   Output: -1 (и массив balances должен быть [1400, 87, -6])
function withdraw(clients, balances, client, amount) {
  const clientIndex = clients.indexOf(client);
  if (clientIndex === -1) return -1;

  if (amount > balances[clientIndex]) return -1;
  return balances[clientIndex] - amount;
}
