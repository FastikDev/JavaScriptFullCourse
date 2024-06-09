/* здесь мы создаем промис, который резолвит объект { name: 'Tom', age: 17 } через 1 секунду */
const userDataPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve({ name: 'Tom', age: 17 });
  }, 1000);
});

/*
 * Выведи в консоль переменную userDataPromise
 * Ответь себе на вопрос, какой тип данных имеет переменная userDataPromise?
 */

/* ...code here */
console.log(userDataPromise);
/*
 * Выведи в консоль переменную userData в обработчике промиса
 * Ответь себе на вопрос, что находится в переменной userData?
 */
userDataPromise.then(function onSuccess(userData) {
  /* ...code here */
  console.log(userData);
});

/*
 * Подпишись на успешное выполнение промиса userDataPromise
 * Используй метод .then в обработчике промиса (ф-ция внутри .then()) и выведи в консоль
 * строку 'My name is Tom. I am 17 years old'
 * Tom и 17 достань с данных, которые приходят в ф-цию onSuccess
 */

userDataPromise.then(function onSuccess(userData) {
  /* ...code here */
  const { name, age } = userData;
  console.log(`My name is ${name}. I am ${age} years old`);
});
