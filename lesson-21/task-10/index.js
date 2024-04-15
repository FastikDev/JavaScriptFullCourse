export const finishForm = () => {
  const formElem = document.querySelector('.login-form');
  const inputElem = document.createElement('input');
  inputElem.setAttribute('name', 'login');
  inputElem.setAttribute('type', 'text');
  formElem.prepend(inputElem);

  const passElem = document.querySelector('input[name="password"]');
  passElem.setAttribute('type', 'password');
};
