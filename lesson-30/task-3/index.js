// ===> 1 <===

/*
 * successPromise должен зарезолвить число 67
 * Ответьте себе на вопрос, какой тип данных имеет переменная successPromise
 */
const successPromise = new Promise(resolve => {
    resolve(67); // Резолвим промис числом 67
});

/*
 * Допишите обработчик успешного промиса (аргументы и тело ф-ции onSuccess)
 * чтобы в консоль вывелся квадрат числа, которое резолвится из successPromise
 */
successPromise.then(function onSuccess(number) {
    console.log(number * number); // Выводим квадрат числа 67 (4489)
});

/*
 * В обработчике ошибок промиса (ф-ция onError внутри .catch()) выведите в консоль текст 'I am an error'
 * текст вывелся в консоль?
 * подумайте почему
 */
successPromise.catch(function onError() {
    console.log('I am an error'); // Выводим текст ошибки в случае отклонения промиса
});