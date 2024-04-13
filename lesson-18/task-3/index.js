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
  static sumOfSquares(...numbers) {
    return numbers.reduce((sum, el) => sum + el * el, 0);
  }
}

export function sumOfSquares(...numbers) {
  return Order.sumOfSquares(...numbers);
}
