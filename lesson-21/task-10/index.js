export const finishForm = () => {
  const formElem = document.querySelector('.login-form');
  const inputElem = document.createElement('input');
  inputElem.setAttribute('name', 'login');
  formElem.prepend(inputElem);

  const passElem = document.querySelector('input[name="password"]');
  passElem.setAttribute('type', 'password');
};
