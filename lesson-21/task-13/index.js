export const getSection = num => {
  const numElem = document.querySelector(`span[data-number="${num}"]`);
  const parentElem = numElem.closest('.box');

  return parentElem.dataset.section;
};

getSection(3);
