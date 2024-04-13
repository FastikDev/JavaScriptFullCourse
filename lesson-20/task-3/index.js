'use strict';

// put your code here
export class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return console.log('No enough funds');
    }

    this.#balance -= amount;
  }
}
