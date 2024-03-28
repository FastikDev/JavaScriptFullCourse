/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {
  // put your code here
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  // put your code here
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  // put your code here
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  // put your code here
  return { ...obj, [key]: value };
}

// examples
const transaction = {
  value: 170,
};
addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
