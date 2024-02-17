/* eslint-disable dot-notation */

/**
 * Для решения этой задачи нужно использовать как квадратные скобки так и точки для чтения свойства объекта. В реальных проектах
 * более предпочтительный вариант - обращение через точку. Но нам нужно научиться работать со всеми опциями.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 */

const transaction = {
  currency: 'USD',
  value: 170,
  operation: 'sale',
  agent: {
    country: 'Ukraine',
    company: 'NYSE',
  },
  'operation time': 1584029990001,
};

/* 1. Выведи в консоль значение свойства 'currency' с помощью точки */
console.log(transaction.currency);
/* 2. Выведи в консоль значение свойства 'value' с помощью квадратных скобок */
console.log(transaction['value']);
const key = 'operation';
/* 3. Выведи в консоль значение свойства обьекта transaction, название которого находится в переменной key - используй квадратные скобки */
console.log(transaction[key]);
/* 4. Введи в консоль значение свойства 'company' используя квадратные скобки */
console.log(transaction.agent['company']);
/* 5. Выведи в консоль значение свойства 'country' используя точку */
console.log(transaction.agent.country);
/* 6. Выведи в консоль значение свойства 'operation time' используя квадратные скобки */
console.log(transaction['operation time']);
