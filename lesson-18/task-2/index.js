'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  static wallet = {
    transactions: [155, 45, 100, -500],
    getMax() {
      return Math.max(...this.transactions);
    },
    getMin() {
      return Math.min(...this.transactions);
    },
  };
}

export const wallet = Order.wallet;
