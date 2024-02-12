// put your code here
const goodNumber = 17;
let anotherNumber = goodNumber;
anotherNumber = 77;
console.log(goodNumber);
console.log(anotherNumber);
const customer = {
  name: 'John',
  age: 17,
};
const anotherCustomer = customer;
anotherCustomer.age = 20;
console.log(customer.age);
console.log(anotherCustomer.age);