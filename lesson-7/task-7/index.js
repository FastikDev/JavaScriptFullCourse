const withdraw = (clients, balances, client, amount) => {
  // put your code here
  const clientIndex = clients.indexOf(client);

  return amount > balances[clientIndex] ? -1 : balances[clientIndex] - amount;
};

// examples
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50); // ==> 37 (balances array should be [1400, 37, -6])
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10); // ==> -1 (balances array should be [1400, 87, -6])
