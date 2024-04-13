'use strict';

// put your code here
// put your code here
'use strict';

// put your code here
export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    if (age < 0) {
      return false;
    }

    this.age = age;
    if (this.age >= 25) {
      this.requestNewPhoto();
    }
    return age;
  }

  static createEmpty() {
    return new User('', null);
  }
}
