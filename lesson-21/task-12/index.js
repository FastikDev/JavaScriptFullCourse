export const squaredNumbers = () => {
  const numberElems = document.querySelectorAll('.number');

  numberElems.forEach(num => {
    const originalNumber = num.dataset.number; // Исправлено: originalNumber
    const squaredNumber = originalNumber * originalNumber;
    num.dataset.squaredNumber = squaredNumber;
  });
};
