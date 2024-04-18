const emailInputElem = document.querySelector(' #email');
const passwordInputElem = document.querySelector('#password');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => (value.trim() === '' ? 'Required' : undefined);

const isEmail = value => (value.includes('@') ? undefined : 'Shoud be an email');

const validatorByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorByField[fieldName];
  return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};

const onEmailChange = event => {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
};

const onPasswordChange = event => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
};

passwordInputElem.addEventListener('input', onPasswordChange);
emailInputElem.addEventListener('input', onEmailChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({
      ...acc,
      [field]: value,
    }),
    {},
  );
  alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);
