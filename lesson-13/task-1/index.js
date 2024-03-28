const cleanTransactionsList = transaction => {
  return transaction.filter(item => Number(item)).map(item => '$' + Number(item).toFixed(2));
};
// Пример использования
const transactions = [' 1.9', '16.4', 17, ' 1 dollar ', 'invalid', '12.345'];
console.log(cleanTransactionsList(transactions));
