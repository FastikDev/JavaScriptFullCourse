const formElem = document.querySelector('.login-form');
const submitButton = formElem.querySelector('.submit-button');
const inputs = formElem.querySelectorAll('input');

const baseUrl = 'https://666e7390f1e1da2be5204c0e.mockapi.io/api/v1/register';

const checkFormValidity = () => {
  const isValid = [...inputs].every(input => input.checkValidity());
  const buttonIsDisabled = submitButton.hasAttribute('disabled');

  if (isValid && buttonIsDisabled) {
    submitButton.removeAttribute('disabled');
  } else if (!isValid && !buttonIsDisabled) {
    submitButton.setAttribute('disabled', 'true');
  }
};

inputs.forEach(input => input.addEventListener('input', checkFormValidity));

formElem.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(formElem);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Ошибка при отправке данных');
    }

    const result = await response.json();
    alert(`${JSON.stringify(result, null, 2)}`);
    formElem.reset();
  } catch (error) {
    alert('Ошибка:', error);
  }
});
