const couterElem = document.querySelector('.counter');
const valueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter__button');

  if (!isButton) {
    return;
  }

  const getAction = e.target.dataset.action;

  const oldValue = Number(valueElem.textContent);

  const newValue = getAction === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('couterValue', newValue);

  valueElem.textContent = newValue;
};

couterElem.addEventListener('click', onCounterChange);

const onStorageChange = e => {
  valueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);
