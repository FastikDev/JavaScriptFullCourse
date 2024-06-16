//algo

//1. identify form, inputs and submit button
//2. check input validation
//3. leave focus on input before validation
//4. post form data on server
//4.1 tramsformation form data on use object
//4.2 post request on server
//4.3 get server response on alert
//4.4 add catch promisse
//4.5 clear form before submit
//5. update button attibute disable before submit

document.addEventListener('DOMContentLoaded', () => {
  const formElem = document.querySelector('.login-form');
  const submitButton = formElem.querySelector('.submit-button');
  const inputs = formElem.querySelectorAll('input');

  const baseUrl = 'https://666e7390f1e1da2be5204c0e.mockapi.io/api/v1/register';

  const checkFormValidity = () => {
    const isValid = [...inputs].every(input => input.checkValidity());
    submitButton.disabled = !isValid;
  };

  const handleInput = () => {
    checkFormValidity();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formElem);
    const formObject = Object.fromEntries(formData.entries());
    const formJSON = JSON.stringify(formObject);

    return fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: formJSON
    })
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      formElem.reset();
      checkFormValidity();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error creating user');
    });
  };

  inputs.forEach(input => input.addEventListener('input', handleInput));
  formElem.addEventListener('submit', handleSubmit);
  checkFormValidity();
});