'use strict';

// put your code here
const cleanTransactionsList = transaction =>
  transaction.filter(item => Number(item)).map(item => '$' + Number(item).toFixed(2));
