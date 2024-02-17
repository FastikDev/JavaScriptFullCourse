// put your code here

//  **Пример работы:**
//   Input: filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya')
//   Output: ['Olivya', 'Nastya']
const filterNames = (arr, text) => arr.filter(el => el.includes(text) && el.length > 5);

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
