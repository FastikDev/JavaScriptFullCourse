export const finishList = () => {
  const firstElem = document.createElement('li');
  firstElem.textContent = '1';
  const listElem = document.querySelector('.list');
  listElem.prepend(firstElem);

  const lastElem = document.createElement('li');
  lastElem.textContent = '8';
  listElem.append(lastElem);

  const beforeElem = document.createElement('li');
  beforeElem.textContent = '4';
  const specialElem = document.querySelector('.special');
  specialElem.before(beforeElem);

  const afterElem = document.createElement('li');
  afterElem.textContent = '6';
  specialElem.after(afterElem);
};
