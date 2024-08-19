const formElem = document.querySelector('.login-form');
const submitButton = formElem.querySelector('.submit-button');
const baseUrl = 'https://666e7390f1e1da2be5204c0e.mockapi.io/api/v1/register';

const checkFormValidity = () => {
  submitButton.disabled = !formElem.reportValidity();
};

formElem.addEventListener('input', checkFormValidity);

formElem.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(formElem));

  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Ошибка при отправке данных');
    }

    const result = await response.json();
    formElem.reset();
    alert(JSON.stringify(result));
  } catch (error) {
    alert(`Ошибка: ${error.message}`);
  }
});