'use strict';

// put your code here
export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }

  this.age = age;
  if (this.age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return age;
};
