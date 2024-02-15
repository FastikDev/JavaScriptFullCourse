'use strict';

// put your code here

//   Пример работы:
//   Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
//   Output: 37 (и массив balances должен быть [1400, 37, -6])

//   Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
//   Output: -1 (и массив balances должен быть [1400, 87, -6])
function withdraw(clients, balances, client, amount) {
  let balance = 0;

  for (let i = 0; i < clients.length; i += 1) {
    if (clients[i] === client) {
      if (amount > balances[i]) return -1;
      balance = balances[i] - amount;
    }
  }
  return balance;
}
