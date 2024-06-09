'use strict';

/**
 * @return {undefined}
 */
export const printing = () => {
  console.log(1);

  setTimeout(function () {
    console.log(2);
  }, 1000);

  console.log(3);

  setTimeout(function () {
    console.log(4);
  }, 0);

  setTimeout(function () {
    console.log(5);
  }, 2000);

  console.log(6);
};
