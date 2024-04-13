export const createCalculator = () => {
  // put your code here
  let start = 0;

  function add(number) {
    return (start += number);
  }

  function decrease(number) {
    return (start -= number);
  }

  function reset() {
    start = 0;
    return start;
  }

  function getMemo() {
    return start;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
